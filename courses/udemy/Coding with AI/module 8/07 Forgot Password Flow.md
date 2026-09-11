# Forgot Password Flow

## 개요
- Email verification과 Resend 설정을 활용해 forgot password 기능을 구현한다.
- 기존 `VerificationToken` model을 password reset token 용도로 재사용한다.
- Forgot password page, reset password page, API routes, reset email 발송, token 만료, password hashing까지 연결한다.

## 내용

### 기능 목표
이번 강의에서는 사용자가 비밀번호를 잊었을 때 email로 reset link를 받고 새 password를 설정할 수 있게 만든다.

구현할 흐름:
1. Sign-in page에서 forgot password link 클릭
2. Email 입력
3. Password reset token 생성
4. Resend로 reset email 발송
5. User가 email link 클릭
6. 새 password 입력
7. Password hash 업데이트
8. 기존 password로 login 실패, 새 password로 login 성공 확인

### Feature prompt
이번에도 별도 spec file 없이 `/feature load`에 직접 prompt를 입력했다.

Prompt 요지:

```text
Create a forgot password link and functionality.
Use the existing verification token model for password reset tokens.
```

이미 NextAuth/Prisma 설정 과정에서 `VerificationToken` model이 있었기 때문에 별도 table을 만들지 않고 재사용한다.

### Token helper 추가
`tokens.ts`에 password reset token helper를 추가한다.

주요 내용:
- password reset token 생성
- token 만료 시간 설정
- 같은 email의 기존 password reset token 삭제
- 새 token 저장

강의에서는 reset token 만료 시간을 1시간으로 설정했다.

예:

```text
RESET_TOKEN_EXPIRATION_HOURS = 1
PASSWORD_RESET_TOKEN_PREFIX = "password-reset"
```

같은 user가 여러 번 reset 요청을 하면 이전 token을 삭제하고 새 token만 유효하게 만든다.

### Password reset email
`email.ts`에 password reset email 발송 함수를 추가한다.

Resend 발송 정보:
- sender는 개발 단계에서 `onboarding@resend.dev`
- subject는 password reset 안내
- body에는 reset link 포함

Reset URL은 token을 query string으로 포함한다.

```text
/auth/reset-password?token=...
```

나중에 domain을 연결하면 sender를 프로젝트 domain 기반 email로 바꿀 수 있다.

### API routes
두 개의 API route가 추가된다.

```text
/api/auth/forgot-password
/api/auth/reset-password
```

역할:
- `forgot-password`: email을 받아 reset token을 만들고 email을 발송
- `reset-password`: token과 새 password를 검증하고 password hash를 업데이트

보안상 account 존재 여부를 노출하지 않는 응답을 사용한다.

예:

```text
If an account exists, we are sending a password reset link.
```

이렇게 하면 공격자가 특정 email이 가입되어 있는지 쉽게 알 수 없다.

### Pages와 components
UI는 server page와 client form component를 분리하는 기존 규칙을 따른다.

추가되는 page:

```text
app/(auth)/forgot-password/page.tsx
app/(auth)/reset-password/page.tsx
```

추가되는 form component:

```text
components/auth/forgot-password-form.tsx
components/auth/reset-password-form.tsx
```

Page component는 server-rendered 상태를 유지하고, form interaction이 필요한 부분만 `use client` component로 만든다.

### Build 확인
구현 후 build를 실행해 type error나 compile error가 없는지 확인한다.

강의에서는 build가 통과한 뒤 browser에서 직접 flow를 테스트했다.

### 테스트 흐름
강사는 먼저 email을 받을 수 있는 계정으로 새 user를 등록했다.

테스트 순서:
1. Register에서 새 user 생성
2. Email verification skip flag가 켜져 있으므로 바로 login 가능
3. Sign out
4. Sign-in page에서 forgot password 클릭
5. Email 입력 후 reset link 요청
6. Inbox에서 "Reset your DevStash password" email 확인
7. Reset link 클릭
8. 새 password 입력
9. 기존 password로 sign-in 실패 확인
10. 새 password로 sign-in 성공 확인

이 테스트로 reset token, email 발송, password hash 업데이트가 모두 정상 동작함을 확인했다.

### Feature review
마지막으로 `/feature review`를 실행해 요구사항을 검토했다.

확인된 항목:
- forgot password route 생성
- reset password route 생성
- forgot password page 생성
- reset password page 생성
- email enumeration 방지
- password hashing 처리
- token 만료 1시간 설정
- 불필요한 scope creep 없음

검토 후 `/feature complete`로 feature branch를 main에 merge하고 삭제했다.

## 예시

Forgot password 응답 문구:

```text
If an account exists, we are sending a password reset link.
```

Reset URL:

```text
http://localhost:3000/auth/reset-password?token=...
```

Password reset token 설정 예:

```ts
const RESET_TOKEN_EXPIRATION_HOURS = 1;
const PASSWORD_RESET_TOKEN_PREFIX = "password-reset";
```

## 요약
- Forgot password는 기존 Resend email 발송 구조와 `VerificationToken` model을 재사용해 구현한다.
- Token은 1시간 만료로 설정하고, 같은 email의 기존 reset token은 삭제한다.
- Account 존재 여부를 드러내지 않는 응답으로 email enumeration을 방지한다.
- Page는 server component, form은 client component로 나누는 기존 규칙을 유지한다.
- 마지막 테스트에서 기존 password는 실패하고 새 password는 성공하는지 확인했다.
