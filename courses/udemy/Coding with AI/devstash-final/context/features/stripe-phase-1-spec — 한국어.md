# Stripe Integration - Phase 1: Core Infrastructure

> 원문 [stripe-phase-1-spec.md](stripe-phase-1-spec.md)의 한국어 번역본입니다.

## Overview

Stripe SDK, 사용량 제한(usage limit) 유틸리티, `isPro`를 위한 세션/인증(session/auth) 변경, 체크아웃(checkout) 플로우 API, 고객 포털(customer portal) API를 설정합니다. 이 단계는 웹훅(webhook)과 UI를 연결하기 전에 필요한 모든 서버 측 인프라를 구축합니다.

## Prerequisites

- DevStash Pro 상품과 월간($8), 연간($72) 가격이 설정된 Stripe Dashboard
- 환경 변수 설정: `STRIPE_SECRET_KEY`, `STRIPE_PUBLISHABLE_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_PRICE_ID_MONTHLY`, `STRIPE_PRICE_ID_YEARLY`
- User 모델에 이미 `isPro`, `stripeCustomerId`, `stripeSubscriptionId` 필드가 존재하는 데이터베이스

## Requirements

- `stripe` npm 패키지 설치
- `src/lib/stripe.ts`에서 Stripe SDK 초기화
- 단위 테스트(unit tests)와 함께 `src/lib/usage.ts`에 사용량 제한 유틸리티 생성
- NextAuth 세션 및 JWT 타입에 `isPro` 추가
- 데이터베이스로부터 `isPro`를 동기화하도록 인증 콜백(auth callbacks) 업데이트
- 체크아웃 세션(checkout session) API 라우트 생성
- 고객 포털(customer portal) API 라우트 생성

## Implementation

### 1. Install Stripe SDK

```bash
npm install stripe
```

### 2. Create `src/lib/stripe.ts`

secret key로 Stripe Node SDK를 초기화합니다.

```typescript
import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
});
```

### 3. Create `src/lib/usage.ts`

무료 등급(free tier) 제한과 사용자 사용량을 확인하는 유틸리티 함수입니다.

| Constant | Value |
|----------|-------|
| `MAX_ITEMS` | 50 |
| `MAX_COLLECTIONS` | 3 |

함수:
- `getUserUsage(userId, isPro)` - 항목/컬렉션 개수와 사용자가 더 생성할 수 있는지 여부를 반환
- `canCreateItem(userId, isPro)` - 항목 생성 가능 여부에 대한 빠른 불리언 검사
- `canCreateCollection(userId, isPro)` - 컬렉션 생성 가능 여부에 대한 빠른 불리언 검사

Pro 사용자는 모든 제한을 우회합니다 (즉시 `true` 반환).

### 4. Unit Tests for `src/lib/usage.test.ts`

테스트 케이스:
- `getUserUsage`가 올바른 개수와 `canCreate` 불리언 값을 반환
- 제한 미만일 때 `canCreateItem`이 `true` 반환
- 제한에 도달했을 때(항목 50개) `canCreateItem`이 `false` 반환
- 제한 미만일 때 `canCreateCollection`이 `true` 반환
- 제한에 도달했을 때(컬렉션 3개) `canCreateCollection`이 `false` 반환
- Pro 사용자는 모든 항목 제한을 우회
- Pro 사용자는 모든 컬렉션 제한을 우회
- 정확히 항목 50개일 때 `getUserUsage`가 `canCreateItem: false`로 설정
- 정확히 컬렉션 3개일 때 `getUserUsage`가 `canCreateCollection: false`로 설정

모든 테스트에서 `prisma.item.count`와 `prisma.collection.count`를 모킹(mock)합니다.

### 5. Modify `src/types/next-auth.d.ts`

`Session.user`에 `isPro: boolean`을, `JWT`에 `isPro?: boolean`을 추가합니다.

### 6. Modify `src/auth.ts`

- `jwt` 콜백을 `async`로 만들기
- 모든 JWT 생성 시 데이터베이스에서 `isPro`를 조회 (기본 키(PK)로 인덱싱된 조회, 단일 불리언 필드)
- 세션 콜백에서 토큰의 `isPro`를 `session.user`로 전달

트레이드오프(Trade-off): 세션 검증마다 작은 DB 쿼리 하나 발생 (`SELECT isPro FROM users WHERE id = ?`). PK로 인덱싱되어 있고 단일 불리언을 반환하므로 빠릅니다. 웹훅 업데이트 이후에도 `session.user.isPro`가 항상 정확하도록 보장합니다.

### 7. Create `src/app/api/stripe/checkout/route.ts`

다음을 수행하는 POST 엔드포인트:
1. `auth()`로 사용자 인증
2. 요청 본문에서 `{ plan: 'monthly' | 'yearly' }`를 수신 (클라이언트로부터 raw priceId를 받지 않음)
3. plan을 서버 측 price ID 환경 변수에 매핑
4. Stripe 고객을 찾거나 생성 (DB에 `stripeCustomerId` 저장)
5. `mode: 'subscription'`으로 Stripe Checkout Session 생성
6. 웹훅 처리를 위해 체크아웃 세션에 `metadata.userId` 설정
7. 클라이언트 리디렉션을 위해 `{ url }` 반환
8. Success URL: `/settings?upgraded=true`, Cancel URL: `/settings`

### 8. Create `src/app/api/stripe/portal/route.ts`

다음을 수행하는 POST 엔드포인트:
1. `auth()`로 사용자 인증
2. 데이터베이스에서 사용자의 `stripeCustomerId` 조회
3. 결제 계정이 없으면 400 반환
4. Stripe Billing Portal 세션 생성
5. 클라이언트 리디렉션을 위해 `{ url }` 반환
6. Return URL: `/settings`

## New Files

| File | 용도 |
|------|---------|
| `src/lib/stripe.ts` | Stripe SDK 초기화 |
| `src/lib/usage.ts` | 무료 등급 사용량 제한 검사 |
| `src/lib/usage.test.ts` | 사용량 유틸리티에 대한 단위 테스트 |
| `src/app/api/stripe/checkout/route.ts` | Stripe Checkout 세션 생성 |
| `src/app/api/stripe/portal/route.ts` | Stripe Customer Portal 세션 생성 |

## Modified Files

| File | 변경 사항 |
|------|---------|
| `src/types/next-auth.d.ts` | Session 및 JWT 타입에 `isPro` 추가 |
| `src/auth.ts` | `isPro` DB 동기화를 포함한 async JWT 콜백, `isPro`를 전달하는 세션 콜백 |

## Notes

- Price ID는 서버 측에만 유지 (계획의 Option B) - 클라이언트는 `plan: 'monthly' | 'yearly'`를 전송하고, API가 환경 변수로 매핑
- 체크아웃 라우트는 raw price ID가 아니라 허용된 문자열 값에 대해 plan 값을 검증
- 고객 포털은 사전에 Stripe 고객 생성이 필요함 (첫 체크아웃 중에 발생)
- 이 단계에서는 UI 변경 없음 - 모든 API 라우트는 curl/Postman으로 테스트 가능
- 사용량 제한 테스트 통과 여부를 확인하려면 `npm run test` 실행
- 타입 오류가 없는지 확인하려면 `npm run build` 실행
