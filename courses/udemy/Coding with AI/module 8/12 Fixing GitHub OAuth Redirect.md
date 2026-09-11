# Fixing GitHub OAuth Redirect

## 개요
- GitHub OAuth sign-in이 첫 클릭에서는 로그인만 되고 redirect가 되지 않는 버그를 수정한다.
- Client-side `signIn` 대신 server action에서 NextAuth v5의 server-side `signIn`을 사용한다.
- Fix spec을 feature workflow에 태워 구현하고, development와 production에서 모두 확인한다.

## 내용

### 문제 상황
Sign out 후 새 tab에서 `/dashboard`로 접근하면 sign-in page로 redirect된다.

여기서 GitHub button을 클릭하면 기대 동작은 다음과 같다.

```text
GitHub login -> /dashboard redirect
```

하지만 실제로는 첫 클릭에서 page가 refresh되는 것처럼 보이고 dashboard로 이동하지 않았다.

두 번째 클릭하면 redirect가 되었다.

중요한 점:
- OAuth login 자체는 성공함
- session도 생성됨
- `/dashboard`로 직접 이동하면 로그인된 상태임
- 문제는 첫 클릭 후 redirect만 실패하는 것

### 원인 추정
기존 sign-in form에서는 `next-auth/react`의 client-side `signIn`을 사용했다.

예상 구조:

```ts
import { signIn } from "next-auth/react";
```

그리고 GitHub login handler에서 다음처럼 호출했다.

```ts
signIn("github", { callbackUrl: "/dashboard" });
```

강사는 NextAuth v5에서는 이 redirect 동작이 불안정할 수 있어 server-side sign-in을 사용하는 방식으로 수정하기로 했다.

### Fix spec
이 작업은 새 기능이라기보다 버그 수정이므로 course files의 context folder에 `fixes` folder를 만들고 spec을 넣었다.

Fix spec 이름:

```text
github-oauth-redirect-fix.md
```

Spec 요지:

```text
GitHub sign-in requires two clicks.
The first click authenticates, but redirect to dashboard fails.
Switch to server-side signIn from @/auth using a server action.
Use redirectTo instead of callbackUrl.
```

### Feature command 확장
강사는 feature skill/action load가 `features` folder뿐 아니라 `fixes` folder도 찾도록 업데이트했다.

별도의 `/fix` command를 만들 수도 있지만, workflow가 거의 같기 때문에 기존 `/feature` command를 재사용했다.

흐름:
1. `/feature load github-oauth-redirect-fix.md`
2. current feature에 fix 내용 로드
3. `/feature start`
4. fix branch 생성
5. 구현
6. 테스트
7. `/feature complete`

Branch 이름은 fix 성격에 맞게 생성되었다.

예:

```text
fix/github-oauth-redirect
```

### Server action 추가
Fix는 server action을 추가하는 방식이다.

Server action은 `@/auth`에서 server-side `signIn`을 가져온다.

개념:

```ts
"use server";

import { signIn } from "@/auth";

export async function signInWithGitHub() {
  await signIn("github", {
    redirectTo: "/dashboard",
  });
}
```

핵심은 `callbackUrl`이 아니라 `redirectTo`를 사용하는 것이다.

### Sign-in form 수정
Client component인 sign-in form에서는 더 이상 `next-auth/react`의 `signIn`을 직접 사용하지 않는다.

대신 server action을 import해서 GitHub button에서 호출한다.

변경 사항:
- client-side `signIn` import 제거
- GitHub loading state 일부 제거
- 기존 `handleGitHubSignIn` 단순화
- server action 호출로 GitHub login 시작

### Development 테스트
강사는 다음 흐름으로 테스트했다.

1. Sign out
2. Browser tab 닫기
3. 새 tab 열기
4. `/dashboard` 접근
5. sign-in page로 redirect 확인
6. GitHub button 한 번 클릭
7. GitHub authorization 진행
8. 바로 `/dashboard`로 redirect되는지 확인

결과:
- 한 번의 클릭으로 dashboard redirect 성공

### Production 테스트
Fix를 `/feature complete`로 main에 merge하고 push한다.

Vercel이 새 deployment를 시작한다.

확인:
1. Vercel deployment green 확인
2. production site 방문
3. `/dashboard` 접근
4. sign-in page에서 GitHub button 한 번 클릭
5. dashboard redirect 확인

결과:
- Production에서도 첫 클릭으로 정상 redirect됨

### Credentials login 회귀 테스트
GitHub login fix 후 credentials login도 확인한다.

강사는 development에서 demo user로 login을 테스트했다.

예:

```text
demo@devstash.io
password: 12345678
```

결과:
- credentials sign-in도 정상 동작

### 적용 여부
강사는 이 문제가 모든 환경에서 반드시 발생하는 것은 아닐 수 있다고 설명했다.

만약 다음을 반복해도 문제가 없다면 fix가 필요 없을 수 있다.

- tab 닫고 다시 열기
- cookies clear
- GitHub button 한 번 클릭
- redirect 정상 확인

하지만 문제가 있다면 server action 방식으로 바꾸는 것이 안정적이다.

## 예시

기존 client-side 방식:

```ts
import { signIn } from "next-auth/react";

signIn("github", {
  callbackUrl: "/dashboard",
});
```

수정 후 server action 방식:

```ts
"use server";

import { signIn } from "@/auth";

export async function signInWithGitHub() {
  await signIn("github", {
    redirectTo: "/dashboard",
  });
}
```

Fix workflow:

```text
/feature load github-oauth-redirect-fix.md
/feature start
/feature complete
```

## 요약
- GitHub OAuth가 첫 클릭에서 login은 되지만 redirect가 안 되는 버그를 수정했다.
- 원인은 client-side `next-auth/react` `signIn`의 redirect 동작 불안정성으로 보았다.
- NextAuth v5 권장 패턴에 맞춰 server action에서 `@/auth`의 `signIn`을 호출했다.
- `callbackUrl` 대신 `redirectTo`를 사용한다.
- Development와 production에서 GitHub login이 한 번의 클릭으로 dashboard에 redirect되는지 확인했다.
