# Development Email Verification Toggle

## 개요
- Resend에 custom domain을 연결하지 않은 상태에서는 Resend 계정 email로만 발송 테스트가 가능하다.
- 개발 중 임의 email로 회원가입 테스트를 할 수 있도록 email verification을 쉽게 끄는 flag를 추가한다.
- Environment variable로 verification flow를 toggle하고, 개발에서는 자동 인증 처리되도록 만든다.

## 내용

### 문제 상황
Email verification 기능은 동작하지만, custom domain이 Resend에 연결되어 있지 않으면 제한이 있다.

예를 들어 다음 email로 회원가입을 시도한다.

```text
john@gmail.com
```

이 email이 Resend 계정 email이 아니라면 verification email 발송이 실패한다.

결과:
- user record는 생성될 수 있음
- 하지만 verification email이 발송되지 않음
- user는 verified 상태가 아니므로 sign-in할 수 없음

### 왜 toggle이 필요한가
개발 중에는 다양한 test user를 만들어야 한다.

하지만 매번 Resend 계정 email만 사용할 수 있으면 테스트가 불편하다.

그래서 강사는 email verification system을 쉽게 disable할 수 있는 flag를 추가했다.

목표:
- Production에서는 verification 유지
- Development에서는 필요할 때 verification을 끄고 빠르게 테스트
- 나중에 domain을 연결하면 다시 verification 활성화

### Feature prompt
이번에도 spec file 없이 `/feature load`에 prompt를 직접 입력했다.

요지:

```text
Add a flag that can easily toggle the email verification system.
Right now, we have no domain linked to Resend, so only the Resend email can be registered.
I want to be able to disable that.
We can use an env variable, but I am open to other options.
```

AI는 environment variable 방식이 단순하고 적절하다고 판단했다.

### Environment variable 방식
강의에서는 verification을 건너뛰는 env var를 추가한다.

예:

```env
SKIP_EMAIL_VERIFICATION=true
```

동작:
- `true`: 회원가입 시 email을 자동 verified 처리
- `false` 또는 미설정: 기존 email verification flow 유지

이 방식은 개발 환경에서만 켜고, production에서는 끄는 것이 기본이다.

### 수정되는 흐름
기능 구현 시 다음 부분이 수정된다.

- `.env.example`에 새 variable 문서화
- register route에서 toggle 확인
- verification이 비활성화되어 있으면 user를 자동 verified 처리
- sign-in flow에서 verification check를 조건부로 처리
- verification 안내 page가 불필요하게 막지 않도록 조정

### Local .env 설정
개발 환경에서 테스트를 쉽게 하려면 `.env`에 값을 넣는다.

```env
SKIP_EMAIL_VERIFICATION=true
```

Production에서 이 기능을 사용하려면 Vercel environment variables에도 추가해야 한다.

하지만 실제 production에서는 일반적으로 다음처럼 둔다.

```env
SKIP_EMAIL_VERIFICATION=false
```

또는 아예 설정하지 않는다.

### 테스트 흐름
강사는 먼저 기존에 실패한 test user를 cleanup script로 삭제했다.

그 다음 `SKIP_EMAIL_VERIFICATION=true` 상태에서 다시 가입을 시도했다.

테스트:
1. `john@gmail.com` 같은 임의 email로 register
2. account 생성
3. verification email을 실제로 클릭하지 않음
4. sign-in 시도
5. dashboard 접근 확인
6. database에서 user가 verified 상태인지 확인

화면상으로는 여전히 "check your email" page가 보일 수 있지만, 실제로는 user가 verified 처리되어 login이 가능했다.

### Production 고려사항
이 flag는 개발 편의를 위한 장치다.

Production에서는 다음 중 하나를 선택해야 한다.

- Resend에 domain을 연결하고 email verification 활성화
- Vercel environment variable에서 `SKIP_EMAIL_VERIFICATION`을 설정하지 않음
- 설정하더라도 `false`로 둠

강사는 `.env.production`에는 참고용으로 값을 넣되, 실제로 중요한 것은 Vercel에 어떤 env var를 넣느냐라고 설명했다.

### Feature review와 complete
기능 구현 후 `/feature review`를 실행해 요구사항을 확인했다.

검토 항목:
- env var가 추가되었는지
- register flow가 toggle을 반영하는지
- sign-in flow가 toggle을 반영하는지
- 개발 테스트가 가능한지

그 후 `/feature complete`로 feature branch를 main에 merge하고 branch를 삭제했다.

## 예시

개발용 `.env`:

```env
SKIP_EMAIL_VERIFICATION=true
```

Production 참고용:

```env
SKIP_EMAIL_VERIFICATION=false
```

Toggle 개념:

```ts
const skipEmailVerification = process.env.SKIP_EMAIL_VERIFICATION === "true";
```

## 요약
- Resend domain이 없으면 개발 중 임의 email verification 테스트가 제한된다.
- `SKIP_EMAIL_VERIFICATION` 같은 env var로 개발 중 verification을 끌 수 있게 만들었다.
- Toggle이 켜져 있으면 회원가입 user를 자동 verified 처리한다.
- Production에서는 verification을 끄지 않는 것이 기본이며, 실제 domain 연결 후 정상 flow를 사용한다.
