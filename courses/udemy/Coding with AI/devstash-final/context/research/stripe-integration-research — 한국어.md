# Stripe Integration Research

> 원문 [stripe-integration-research.md](stripe-integration-research.md)의 한국어 번역본입니다.

## Output

`docs/stripe-integration-plan.md`

## Research

코드베이스를 분석하여 DevStash Pro(월 $8/mo, 연 $72/year)를 위한 포괄적인 Stripe 구독(subscription) 통합 계획을 작성합니다.

## Include

### Current State Analysis

- User 모델 스키마 (특히 isPro, stripeCustomerId, stripeSubscriptionId 필드)
- NextAuth 구성 및 세션(session) 처리
- 서버 액션(server action)과 컴포넌트에서 사용자 데이터에 접근하는 방식
- 기존 구독 또는 결제 관련 코드가 있는지 여부

### Feature Gating Analysis

- 프로젝트 명세상의 무료 티어(free tier) 제한 (아이템 50개, 컬렉션 3개)
- 아이템/컬렉션 개수가 확인되거나 확인될 수 있는 위치
- Pro 전용 기능 (파일 업로드, AI, 커스텀 타입(custom type), 내보내기(export))
- 설정(settings) 페이지 구조

### API & Webhook Patterns

- API 라우트(route)가 구성된 방식
- 서버 액션의 에러 처리(error handling) 패턴
- 환경 변수(environment variable) 패턴

## Deliverable

다음을 포함하는 완전한 구현 계획:

1. 생성할 파일 (코드 예제 포함)
2. 수정할 파일 (구체적인 변경사항 포함)
3. Stripe Dashboard 설정 단계
4. 테스트 체크리스트
5. 구현 순서

## Notes

NextAuth v5 문서는 `useSession()`에서 `update()`를 호출할 때 세션 데이터를 새로 고치기 위해 JWT 콜백(callback)에서 `trigger === "update"`를 사용하도록 권장합니다. 그러나 이 방식은 Stripe 웹훅(webhook)이 데이터베이스의 `isPro`를 업데이트하고 클라이언트 세션이 그 변경을 감지하기를 원하는 우리의 사용 사례에서는 안정적으로 동작하지 않습니다.

**해결 방법(workaround):** `trigger === "update"`에 의존하는 대신, 모든 세션 검증(session validation)마다 데이터베이스로부터 항상 `isPro`를 동기화하도록 JWT 콜백을 수정합니다:

```typescript
async jwt({ token, user }) {
  if (user) {
    token.sub = user.id;
  }

  // Always sync isPro from database to catch webhook updates
  if (token.sub) {
    const dbUser = await prisma.user.findUnique({
      where: { id: token.sub },
      select: { isPro: true },
    });
    token.isPro = dbUser?.isPro ?? false;
  }

  return token;
},
```

이 방식은 세션 검증마다 작은 DB 쿼리 하나를 추가하지만, 웹훅 업데이트 이후에도 세션이 동기화 상태를 유지하도록 보장합니다. 그러면 체크아웃(checkout) 이후 단순한 페이지 새로고침(reload)만으로 새로운 Pro 상태를 감지하기에 충분합니다.
