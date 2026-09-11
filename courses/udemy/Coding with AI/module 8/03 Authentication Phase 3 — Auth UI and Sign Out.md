# Authentication Phase 3 — Auth UI and Sign Out

## 개요
- Authentication phase 3에서는 실제 sign-in/register UI, sign-out, sidebar user display를 구현한다.
- NextAuth 기본 sign-in 화면 대신 custom pages를 만들고, sidebar 하단에 logged-in user의 name/email/avatar를 표시한다.
- Pages는 server component로 유지하고, interactive form은 별도 client component로 분리한다.

## 내용

### Phase 3 목표
Phase 3에서 구현할 것:
- custom sign-in page
- custom register page
- sign-out UI
- sidebar user avatar/name/email 업데이트
- GitHub image가 있으면 avatar로 표시
- image가 없으면 initials 표시
- reusable user avatar component 생성
- NextAuth custom pages 설정

### Dev indicator 숨기기
Next.js dev overlay/logo가 avatar 위를 가릴 수 있다.

`next.config`에서 dev indicator를 끈다.

예:

```ts
devIndicators: false
```

이렇게 하면 sidebar 하단 avatar를 제대로 클릭/확인할 수 있다.

### Feature workflow
Phase 3 spec을 current feature에 load한다.

```text
/feature load auth-phase-3-spec.md
```

구현 시작:

```text
/feature start
```

### 구현 todo
AI가 만든 주요 todo:
- reusable user avatar 생성
- sign-in page 생성
- register page 생성
- NextAuth custom pages 설정
- sidebar user display 업데이트
- sign-out dropdown 추가
- build/test

### ShadCN components 추가
UI 구현에 필요한 ShadCN components를 추가한다.

예:
- dropdown menu
- label
- sonner/toast

### UserAvatar component
Reusable avatar component를 만든다.

예상 위치:

```text
src/components/shared/user-avatar.tsx
```

Props:
- name
- image
- className

동작:
- GitHub image가 있으면 image 표시
- image가 없으면 initials 표시

### Route groups
Sign-in/register pages를 route group 안에 둔다.

예:

```text
src/app/(auth)/sign-in/page.tsx
src/app/(auth)/register/page.tsx
```

`(auth)`는 route group이다.
URL에는 포함되지 않는다.

실제 routes:

```text
/sign-in
/register
```

만약 folder 이름이 `auth`였다면 `/auth/sign-in`처럼 URL에 포함된다.

### Server page + client form
AI가 처음에는 page file에 `"use client"`를 넣으려 했다.

강사는 기존 기준을 다시 지시한다.

```text
All app pages should be server rendered with dynamic components.
```

수정된 구조:

```text
sign-in/page.tsx          // server component
sign-in/sign-in-form.tsx  // client component
register/page.tsx         // server component
register/register-form.tsx // client component
```

Pages는 thin server component로 유지하고, form state/error/loading은 client form component에서 처리한다.

### Sign-in form
Sign-in form:
- email
- password
- GitHub sign-in button
- loading state
- error state
- credentials sign-in 호출
- 성공 시 dashboard로 redirect

### Register form
Register form:
- name
- email
- password
- confirm password
- loading state
- error state
- registration API 호출
- 성공 후 sign-in page로 redirect

### NextAuth custom pages
NextAuth config에 custom sign-in page를 설정한다.

예:

```ts
pages: {
  signIn: "/sign-in",
}
```

원하면 `/login` 같은 route로 바꿀 수도 있다.

### Sidebar user display
Sidebar 하단 user area를 실제 session/user data로 업데이트한다.

처음에는 demo user처럼 고정값이 남아 있어 John Doe로 로그인해도 sidebar가 바뀌지 않았다.

수정:
- session에서 logged-in user 가져오기
- DB에서 user fetch
- sidebar에 name/email/image 전달
- GitHub login이면 GitHub avatar 표시
- credentials login이면 initials 표시

### Sign-out dropdown
Sidebar avatar/name area에 dropdown menu를 추가한다.

기능:
- user info 표시
- sign out action

Desktop sidebar와 mobile sidebar 모두 반영한다.

### Manual test
Build 실행:

```bash
npm run build
```

테스트 순서:
1. 기존 session에서 Sign Out 클릭
2. `/sign-in` page 확인
3. GitHub sign-in button 확인
4. credentials input 확인
5. Register로 이동
6. 새 user 등록
7. Prisma Studio에서 user 생성 확인
8. credentials login 확인
9. invalid password error 확인
10. GitHub login 확인
11. sidebar avatar/name/email이 현재 user로 바뀌는지 확인

### Register success toast
처음에는 register 후 성공 message가 없었다.

수정:
- toast notification 추가
- ShadCN/Sonner toaster를 root layout에 추가
- register 성공 시 `/sign-in?registered=true`로 redirect
- sign-in form에서 query param 확인 후 toast 표시

Toast message 예:

```text
Account created successfully. You can now sign in.
```

### Duplicate toast 문제
Development에서 React Strict Mode 때문에 toast가 두 번 뜰 수 있다.

해결:
- toast를 보여준 뒤 query parameter를 clear
- 같은 registered state가 반복 실행되지 않게 처리

### Email verification은 나중에
현재 register 후 바로 sign in 가능하다.

하지만 production 수준에서는 email verification이 필요하다.
강사는 이후에 email verification을 추가할 예정이라고 언급한다.

### /feature complete
테스트 후 feature complete 실행:

```text
/feature complete
```

작업:
- feature branch merge
- current feature reset
- history append
- main push
- Vercel deploy trigger

### Production GitHub OAuth 주의
다음 단계에서 처리할 것:
- Vercel production env에 GitHub OAuth keys 추가
- local OAuth app과 production OAuth app 구분
- production callback URL 설정

Local callback:

```text
http://localhost:3000/api/auth/callback/github
```

Production에서는 deployed URL에 맞는 callback이 필요하다.

## 예시

Phase 3 workflow:

```text
/feature load auth-phase-3-spec.md
/feature start
  -> Create UserAvatar
  -> Create /sign-in and /register pages
  -> Split client forms from server pages
  -> Configure NextAuth custom page
  -> Update sidebar user display
  -> Add sign-out dropdown
  -> Add register success toast
  -> npm run build
  -> Manual auth tests
/feature complete
```

## 요약
- Auth phase 3는 custom auth UI와 sign-out/user display를 구현한다.
- Pages는 server component로 유지하고, forms만 client component로 분리한다.
- Sidebar는 logged-in user의 실제 name/email/avatar를 표시한다.
- Register 성공 후 sign-in page에 toast를 보여주고 query param을 clear해 중복 toast를 막는다.
- 다음 단계에서는 production GitHub OAuth 환경 변수를 Vercel에 설정한다.
