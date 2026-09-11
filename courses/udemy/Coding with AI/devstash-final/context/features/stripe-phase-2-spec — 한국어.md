# Stripe Integration - Phase 2: Webhooks, Feature Gating & UI

> 원문 [stripe-phase-2-spec.md](stripe-phase-2-spec.md)의 한국어 번역본입니다.

## Overview

구독(subscription) 상태를 동기화하도록 Stripe 웹훅(webhook) 핸들러를 연결하고, 서버 액션(server actions)과 업로드 라우트에 기능 게이팅(feature gating)을 추가하며, 설정 페이지에 결제(billing) UI를 구축하고, 업그레이드 성공 토스트(toast)를 추가합니다. 로컬 웹훅 테스트를 위해 Stripe CLI가 필요합니다.

## Prerequisites

- Phase 1 완료 (Stripe SDK, 사용량 유틸리티, 세션 `isPro`, checkout/portal API 라우트)
- Stripe CLI 설치 (`brew install stripe/stripe-cli/stripe`)
- Stripe CLI 인증 (`stripe login`)
- 웹훅 포워딩 활성화: `stripe listen --forward-to localhost:3000/api/webhooks/stripe`
- CLI 출력의 웹훅 서명 시크릿(webhook signing secret)을 `STRIPE_WEBHOOK_SECRET`에 복사

## Requirements

- 구독 상태를 데이터베이스에 동기화하도록 Stripe 웹훅 이벤트 처리
- 무료 등급(free tier) 제한 뒤로 항목 생성 게이팅
- 무료 등급 제한 뒤로 컬렉션 생성 게이팅
- Pro 확인 뒤로 파일/이미지 업로드 게이팅
- 설정 페이지에 결제 섹션 추가
- 체크아웃 리디렉션 이후 업그레이드 성공 토스트 표시

## Implementation

### 1. Create `src/app/api/webhooks/stripe/route.ts`

다음을 수행하는 POST 엔드포인트:
1. `request.text()`로 raw body 읽기 (App Router는 기본적으로 raw body를 제공)
2. `stripe.webhooks.constructEvent()`로 서명 검증
3. 서명이 없거나 유효하지 않으면 400 반환
4. switch 문에서 이벤트 처리
5. 성공 시 `{ received: true }` 반환

#### Webhook Events

| Event | Handler | Action |
|-------|---------|--------|
| `checkout.session.completed` | `handleCheckoutCompleted` | `isPro: true` 설정, `stripeCustomerId`와 `stripeSubscriptionId` 저장 |
| `invoice.paid` | `handleInvoicePaid` | 갱신 시 `isPro: true` 보장 |
| `invoice.payment_failed` | `handlePaymentFailed` | 경고만 기록 (Stripe가 재시도하므로 등급을 낮추지 않음) |
| `customer.subscription.updated` | `handleSubscriptionUpdated` | 상태에 따라 `isPro` 설정 (`active`/`trialing` = true, 그 외 false) |
| `customer.subscription.deleted` | `handleSubscriptionDeleted` | `isPro: false` 설정, `stripeSubscriptionId` 제거 |

핵심 세부 사항:
- `checkout.session.completed`는 `metadata.userId`를 사용해 사용자를 찾음
- 나머지 모든 핸들러는 멱등성(idempotency)을 위해 `stripeCustomerId`와 `updateMany`를 사용
- customer/subscription 필드는 문자열 또는 객체일 수 있음 - typeof 검사로 두 경우 모두 처리

### 2. Modify `src/actions/items.ts` - `createItem`

기존 생성 로직 앞에 두 가지 검사를 추가:
1. **Pro 유형 검사:** `input.typeName`이 `file` 또는 `image`이고 사용자가 Pro가 아니면 오류 반환: "File and image uploads require a Pro subscription"
2. **사용량 제한 검사:** `canCreateItem(userId, isPro)`를 호출하고 false이면 오류 반환: "You have reached the free tier limit of 50 items. Upgrade to Pro for unlimited items."

`@/lib/usage`에서 `canCreateItem`을 import.

### 3. Modify `src/actions/collections.ts` - `createCollection`

기존 생성 로직 앞에 사용량 제한 검사를 추가:
- `canCreateCollection(userId, isPro)`를 호출하고 false이면 오류 반환: "You have reached the free tier limit of 3 collections. Upgrade to Pro for unlimited collections."

`@/lib/usage`에서 `canCreateCollection`을 import.

### 4. Modify `src/app/api/upload/route.ts`

인증 검사 이후 Pro 검사를 추가. 업로드 API 라우트에는 JWT로 강화된 세션이 없을 수 있으므로, 데이터베이스에서 직접 `isPro`를 조회:

```typescript
const user = await prisma.user.findUnique({
  where: { id: session.user.id },
  select: { isPro: true },
});

if (!user?.isPro) {
  return NextResponse.json(
    { error: 'File uploads require a Pro subscription' },
    { status: 403 }
  );
}
```

### 5. Create `src/components/settings/billing-settings.tsx`

다음을 표시하는 클라이언트 컴포넌트(`'use client'`):

**Props:** `isPro: boolean`, `itemCount: number`, `collectionCount: number`

**레이아웃:**
- 신용카드 아이콘 + "Billing" 제목
- 현재 플랜 배지(Pro/Free)가 있는 카드 컨테이너
- 무료 사용자: 사용량 표시 (`{itemCount}/50 items` 및 `{collectionCount}/3 collections`)
- 무료 사용자: 두 개의 업그레이드 버튼 - "Upgrade $8/mo" (primary)와 "Upgrade $72/yr (save 25%)" (outline)
- Pro 사용자: "Manage Billing" 버튼 (outline, 포털 열기)

**동작:**
- 업그레이드 버튼은 `{ plan: 'monthly' | 'yearly' }`와 함께 `/api/stripe/checkout`로 POST
- Manage Billing 버튼은 `/api/stripe/portal`로 POST
- 둘 다 `window.location.href = data.url`로 리디렉션
- 활성 버튼에 `Loader2` 스피너로 로딩 상태 표시
- 로딩 상태 중에는 모든 버튼 비활성화
- `toast.error()`로 오류 처리

### 6. Modify `src/app/settings/page.tsx`

- `BillingSettings`와 `getUserUsage` import
- 사용량 데이터 페칭: `const usage = await getUserUsage(user.id, session.user.isPro ?? false)`
- EditorSettings와 AccountSettings 섹션 사이에 `<BillingSettings>` 추가
- `isPro`, `itemCount`, `collectionCount`를 props로 전달

### 7. Upgrade Success Toast

체크아웃 성공 후 사용자는 `/settings?upgraded=true`로 리디렉션됩니다. 이를 BillingSettings 또는 래퍼(wrapper)에서 처리:

- `useSearchParams()`로 `upgraded` 파라미터 읽기
- 마운트 시 `upgraded === 'true'`이면 `toast.success('Welcome to DevStash Pro!')` 표시
- `window.history.replaceState({}, '', '/settings')`로 URL 정리

## New Files

| File | 용도 |
|------|---------|
| `src/app/api/webhooks/stripe/route.ts` | Stripe 웹훅 이벤트 처리 |
| `src/components/settings/billing-settings.tsx` | 설정 페이지의 결제 UI |

## Modified Files

| File | 변경 사항 |
|------|---------|
| `src/actions/items.ts` | `createItem`에 Pro 유형 검사 + 사용량 제한 검사 추가 |
| `src/actions/collections.ts` | `createCollection`에 사용량 제한 검사 추가 |
| `src/app/api/upload/route.ts` | 파일 업로드 전에 Pro 검사 추가 |
| `src/app/settings/page.tsx` | 사용량 데이터와 함께 BillingSettings 섹션 추가 |

## Testing

### Stripe CLI Webhook Testing

```bash
# Terminal 1: Run dev server
npm run dev

# Terminal 2: Forward webhooks
stripe listen --forward-to localhost:3000/api/webhooks/stripe

# Terminal 3: Trigger test events
stripe trigger checkout.session.completed
stripe trigger invoice.paid
stripe trigger customer.subscription.deleted
```

### Manual Testing Checklist

- [ ] **Checkout:** 업그레이드 버튼 클릭, 테스트 카드 `4242 4242 4242 4242`로 완료, 리디렉션 + 토스트 확인
- [ ] **Webhook - checkout.session.completed:** 사용자에게 `isPro: true`가 부여되고, `stripeCustomerId`와 `stripeSubscriptionId`가 저장됨
- [ ] **Webhook - invoice.paid:** 사용자가 `isPro: true` 유지
- [ ] **Webhook - customer.subscription.deleted:** 사용자가 `isPro: false`로 설정되고, `stripeSubscriptionId`가 제거됨
- [ ] **Customer Portal:** Pro 사용자가 "Manage Billing" 클릭 시 Stripe 포털로 리디렉션되고, `/settings`로 복귀
- [ ] **Feature Gating - Items:** 무료 사용자가 항목 50개에서 업그레이드 메시지와 함께 차단됨
- [ ] **Feature Gating - Collections:** 무료 사용자가 컬렉션 3개에서 업그레이드 메시지와 함께 차단됨
- [ ] **Feature Gating - File/Image:** 무료 사용자가 파일/이미지 항목을 생성할 수 없음 (오류 메시지)
- [ ] **Feature Gating - Upload:** 무료 사용자가 업로드 라우트에서 403을 받음
- [ ] **Pro Bypass:** Pro 사용자는 항목, 컬렉션, 업로드에 제한이 없음
- [ ] **Session Sync:** 웹훅이 `isPro`를 업데이트한 후, 페이지 새로고침 시 새 상태가 반영됨
- [ ] **Billing UI:** 무료 사용자는 사용량 개수와 업그레이드 버튼을 보고, Pro 사용자는 "Manage Billing"을 봄

### Stripe Test Cards

| Card | 시나리오 |
|------|----------|
| `4242 4242 4242 4242` | 결제 성공 |
| `4000 0000 0000 0002` | 카드 거절 |
| `4000 0000 0000 3220` | 3D Secure 필요 |

## Notes

- 웹훅 라우트는 `request.text()`로 raw body를 받음 - 별도의 Next.js 설정 불필요
- 웹훅 핸들러의 `updateMany`는 중복 이벤트 전달에 대해 멱등적(idempotent)
- 결제 실패는 경고만 기록 - Stripe가 자동으로 재시도하며, 등급 하향은 `subscription.deleted`에서만 발생
- 홈페이지의 PricingSection.tsx는 이 단계에서 수정하지 않음 (현재 CTA는 /register로 링크되며 문제 없음)
- 모든 변경 후 타입 오류가 없는지 확인하려면 `npm run build` 실행
