# 인증 설정 - NextAuth + GitHub Provider

> 원문 [auth-phase-1-spec.md](auth-phase-1-spec.md)의 한국어 번역본입니다.

## 개요 (Overview)

Prisma 어댑터(adapter)와 GitHub OAuth로 NextAuth v5를 설정합니다. 테스트에는 NextAuth의 기본 페이지를 사용합니다.

## 요구사항 (Requirements)

- NextAuth v5(`next-auth@beta`)와 `@auth/prisma-adapter`를 설치합니다
- 엣지 호환성(edge compatibility)을 위한 분할 인증 설정 패턴(split auth config pattern)을 설정합니다
- GitHub OAuth 프로바이더(provider)를 추가합니다
- Next.js 16 proxy를 사용하여 `/dashboard/*` 경로를 보호합니다
- 인증되지 않은 사용자를 로그인(sign-in) 페이지로 리다이렉트합니다

## 생성할 파일 (Files to Create)

1. `src/auth.config.ts` - 엣지 호환 설정 (providers만, adapter 없음)
2. `src/auth.ts` - Prisma 어댑터와 JWT 전략(strategy)을 갖춘 전체 설정
3. `src/app/api/auth/[...nextauth]/route.ts` - auth.ts에서 handlers를 export
4. `src/proxy.ts` - 리다이렉트 로직을 갖춘 경로 보호
5. `src/types/next-auth.d.ts` - Session 타입을 user.id로 확장

## 주요 주의사항 (Key Gotchas)

최신 설정과 컨벤션을 확인하려면 Context7을 사용하세요.

- `next-auth@beta`를 사용하세요 (`@latest`는 v4를 설치하므로 사용 금지)
- proxy 파일은 반드시 `src/proxy.ts`에 위치해야 합니다 (`app/`와 같은 레벨)
- named export를 사용하세요: default export가 아니라 `export const proxy = auth(...)`
- 분할 설정 패턴(split config pattern)과 함께 `session: { strategy: 'jwt' }`를 사용하세요
- 커스텀 `pages.signIn`을 설정하지 마세요 - NextAuth의 기본 페이지를 사용하세요

## 환경 변수 (Environment Variables)

```
AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

## 테스트 (Testing)

1. `/dashboard`로 이동 - 로그인 페이지로 리다이렉트되어야 함
2. "Sign in with GitHub" 클릭
3. 인증 후 `/dashboard`로 다시 리다이렉트되는지 확인

## 참고 자료 (References)

- 엣지 호환성: https://authjs.dev/getting-started/installation#edge-compatibility
- Prisma 어댑터: https://authjs.dev/getting-started/adapters/prisma
