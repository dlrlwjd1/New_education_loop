# Authentication Phase 1 — NextAuth and GitHub OAuth

## 개요
- DevStash authentication을 **NextAuth v5**로 구현하는 첫 번째 phase.
- Phase 1은 base setup, Prisma adapter, GitHub OAuth provider, route protection을 담당한다.
- 최신 NextAuth v5 conventions와 edge compatibility가 중요하므로 Context7로 최신 문서를 확인하게 한다.

## 내용

### Authentication을 phase로 나누기
Authentication은 범위가 크기 때문에 세 phase로 나눈다.

1. Phase 1: NextAuth v5 base setup + GitHub OAuth
2. Phase 2: Credentials provider + registration API
3. Phase 3: Sign-in/register/sign-out UI

Resource files에는 master spec도 있지만, 강사는 세 개의 phase spec을 사용한다.

### Phase 1 목표
Phase 1에서 구현할 것:
- NextAuth v5 설치
- Prisma adapter 설치
- GitHub OAuth provider 설정
- split config pattern 적용
- edge compatibility 고려
- `/dashboard` route 보호
- unauthenticated user를 sign-in으로 redirect
- NextAuth catch-all API route 생성
- auth 관련 TypeScript declarations 추가

### Edge compatibility와 split config
Neon은 serverless Postgres 환경이고, Next.js에서는 edge runtime과 node runtime 차이가 중요할 수 있다.

Edge server:
- 전 세계에 분산된 lightweight runtime
- 빠른 응답에 유리
- 일반 database driver처럼 무거운 기능을 모두 실행할 수 없음

그래서 NextAuth config를 edge-compatible config와 full config로 나누는 split config pattern을 사용한다.

예상 파일:

```text
src/auth.config.ts
src/auth.ts
```

`auth.config.ts`:
- edge-compatible provider config

`auth.ts`:
- Prisma adapter 포함 full config
- session/JWT config 포함

### 생성되는 주요 파일
예상 파일:

```text
src/auth.config.ts
src/auth.ts
src/app/api/auth/[...nextauth]/route.ts
src/proxy.ts
src/types/next-auth.d.ts
```

`[...nextauth]`는 catch-all route다.
`/api/auth/*` 요청은 NextAuth가 처리한다.

예:
- sign in
- sign out
- callback
- session

### 환경 변수 준비
NextAuth와 GitHub OAuth에는 환경 변수가 필요하다.

필요한 값:

```env
AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

`AUTH_SECRET`은 터미널에서 생성한다.

```bash
npx auth secret
```

이 명령은 `.env.local`에 secret을 만들 수 있다.
강사는 값을 복사해 `.env`에 넣고 `.env.local`은 삭제한다.

### GitHub OAuth App 생성
GitHub에서 OAuth app을 만든다.

위치:

```text
GitHub Settings -> Developer settings -> OAuth Apps -> New OAuth App
```

설정:
- Application name: `DevStash`
- Homepage URL: `http://localhost:3000`
- Authorization callback URL: `http://localhost:3000/api/auth/callback/github`

주의:
- 처음에 callback URL을 `/api/auth/github`로 넣으면 redirect URL mismatch가 발생한다.
- 올바른 callback URL은 `/api/auth/callback/github`다.

생성 후:
- Client ID -> `AUTH_GITHUB_ID`
- Client Secret -> `AUTH_GITHUB_SECRET`

같은 값은 `.env.production`에도 참고용으로 추가할 수 있다.

### Feature workflow 실행
Auth phase 1 spec을 current feature에 load한다.

```text
/feature load auth-phase-1-spec.md
```

그 다음 구현 시작:

```text
/feature start
```

AI는 Context7을 사용해 NextAuth v5 최신 conventions를 확인한다.

### NextAuth 설치
Phase 1에서는 NextAuth v5 beta와 Prisma adapter를 설치한다.

예:

```bash
npm install next-auth@beta @auth/prisma-adapter
```

버전과 install command는 시점에 따라 바뀔 수 있으므로 Context7로 최신 문서를 확인하게 한다.

### Auth config
`auth.config.ts`에는 GitHub provider가 들어간다.

`auth.ts`에는:
- Prisma adapter
- imported auth config
- JWT session strategy
- callbacks
- handlers
- signIn/signOut helpers

Session strategy는 JSON Web Token 기반이다.

### API route
NextAuth catch-all route:

```text
src/app/api/auth/[...nextauth]/route.ts
```

이 route는 NextAuth handlers를 export한다.

예:

```ts
export const { GET, POST } = handlers;
```

### Route protection
`src/proxy.ts`에서 route protection을 처리한다.

목표:
- `/dashboard` 접근 시 로그인 여부 확인
- 로그인하지 않았으면 sign-in으로 redirect

강사는 `proxy.ts`가 `src` folder 안에 생성되었는지 확인한다.

### Build와 테스트
구현 후 build 실행:

```bash
npm run build
```

Manual test:
1. `/dashboard` 접속
2. 로그인하지 않은 상태면 sign-in route로 redirect
3. GitHub sign-in button 클릭
4. GitHub authorization page 표시
5. authorize 후 dashboard 접근 가능

### OAuth callback URL 오류 수정
처음 GitHub OAuth app callback URL이 잘못되어 에러가 발생한다.

오류:

```text
The redirect URL is not associated with this application.
```

수정:

```text
http://localhost:3000/api/auth/callback/github
```

수정 후 GitHub authorization이 정상 동작한다.

### Cookie 확인
로그인 후 browser DevTools Application tab에서 cookies를 확인할 수 있다.

예:
- auth session token
- CSRF token
- callback URL

Cookies를 삭제하면 사실상 sign out 상태가 된다.

### 다음 단계
Phase 1로 GitHub OAuth login은 동작한다.

다음 phase에서는 email/password login을 위한 credentials provider와 registration API를 추가한다.

## 예시

Phase 1 흐름:

```text
Create GitHub OAuth app
  -> Add AUTH_SECRET / AUTH_GITHUB_ID / AUTH_GITHUB_SECRET
  -> /feature load auth-phase-1-spec.md
  -> /feature start
  -> Install NextAuth v5 + Prisma adapter
  -> Create auth config files
  -> Add API route and proxy
  -> npm run build
  -> Test GitHub sign-in
```

## 요약
- Auth phase 1은 NextAuth v5, Prisma adapter, GitHub OAuth, dashboard protection을 설정한다.
- NextAuth v5는 최신 conventions가 중요하므로 Context7로 docs를 확인하게 한다.
- GitHub OAuth callback URL은 `/api/auth/callback/github`여야 한다.
- `/dashboard`는 unauthenticated user를 sign-in으로 redirect한다.
- 다음 phase는 credentials provider와 registration API다.
