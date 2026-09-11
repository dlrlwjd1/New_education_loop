# Fix GitHub OAuth Redirect Issue

> 원문 [github-oauth-redirect-fix.md](github-oauth-redirect-fix.md)의 한국어 번역본입니다.

## Problem

GitHub 로그인(sign-in)에 두 번의 클릭이 필요합니다. 첫 번째 클릭은 사용자를 인증(authenticate)하지만(세션이 생성됨) `/dashboard`로의 리다이렉트(redirect)가 실패하여 페이지가 `/sign-in`으로 새로고침됩니다. 두 번째 클릭은 정상 동작합니다.

## Root Cause

프로덕션(production)에서 리다이렉트 동작이 불안정한 `next-auth/react`의 클라이언트 사이드(client-side) `signIn`을 사용하고 있습니다.

## Solution

서버 액션(Server Action)을 사용하여 `@/auth`의 서버 사이드(server-side) `signIn`으로 전환합니다. 이것이 권장되는 NextAuth v5 패턴입니다.

## Changes Required

### 1. Create `src/actions/auth.ts`
- `signInWithGitHub` 서버 액션을 export
- `@/auth`의 `signIn("github", { redirectTo: "/dashboard" })`를 호출

### 2. Update `src/components/auth/sign-in-form.tsx`
- `@/actions/auth`에서 `signInWithGitHub`를 import
- GitHub `<Button onClick={...}>`를 submit 버튼을 포함하는 `<form action={signInWithGitHub}>`로 교체
- `isGitHubLoading` 상태와 `handleGitHubSignIn` 함수 제거
- 자격 증명(credentials) 로그인은 그대로 유지 (`redirect: false`를 사용하며 정상 동작)

## Key Details

- `callbackUrl`(v4)이 아니라 `redirectTo`(NextAuth v5)를 사용
- SessionProvider는 필요 없음
- 서버 액션이 서버 사이드에서 리다이렉트를 처리하여 클라이언트 사이드 타이밍 이슈를 회피

## Verification

`npm run build`와 `npm run test`를 실행한 다음, 프로덕션에서 테스트합니다.
