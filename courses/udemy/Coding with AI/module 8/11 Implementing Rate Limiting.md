# Implementing Rate Limiting

## 개요
- 이전 강의에서 만든 Upstash Redis 환경을 사용해 authentication endpoints에 rate limiting을 적용한다.
- Brute force attack, credential stuffing, abusive email sending을 줄이는 것이 목적이다.
- Reusable `rate-limit.ts` utility를 만들고 register, credentials login, forgot/reset password, resend verification route에 적용한다.

## 내용

### Rate limiting spec
이번 구현은 resource files의 `rate-limiting-spec.md`를 사용한다.

Spec 목표:

```text
Implement rate limiting on authentication endpoints
to prevent brute force attacks, credential stuffing,
and abusive email sending endpoints.
```

보호 대상:
- credentials login
- register
- forgot password
- reset password
- resend verification

### 제한 정책
강의에서 사용한 기본 제한값은 endpoint마다 다르다.

정책:
- credentials login: 5 attempts / 15 minutes
- register: 3 attempts / 1 hour
- forgot password: 3 attempts / 1 hour
- reset password: 5 attempts / 15 minutes
- resend verification: 3 attempts / 15 minutes

이 값은 프로젝트 상황에 따라 `rate-limit.ts`에서 조정할 수 있다.

### Feature workflow
Spec file을 context features folder로 옮긴 뒤 `/feature load`로 current feature에 로드한다.

그 다음 `/feature start`로 구현을 시작한다.

AI가 수행한 주요 작업:
- Upstash packages 설치
- reusable rate limit utility 생성
- 각 auth route에 rate limit check 추가
- credentials login용 별도 check route 추가
- 제한 초과 시 429 response 반환
- `.env.example`에 Upstash env vars 문서화
- build 실행

### Upstash packages
구현을 위해 Upstash Redis와 rate limit package를 설치한다.

예상 package:

```text
@upstash/redis
@upstash/ratelimit
```

이 package들은 serverless 환경에서도 Redis 기반 rate limiting을 쉽게 적용할 수 있게 해준다.

### Rate limit utility
`src/lib/rate-limit.ts` 같은 reusable utility를 만든다.

역할:
- Upstash Redis client 생성
- env var 존재 여부 확인
- endpoint별 limiter 설정
- IP 추출
- identifier 조합
- 제한 초과 response 생성

필요한 env vars:

```env
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

### Redis가 설정되지 않은 경우
강의에서는 env vars가 없으면 rate limiting을 비활성화하도록 처리했다.

흐름:
1. `UPSTASH_REDIS_REST_URL` 확인
2. `UPSTASH_REDIS_REST_TOKEN` 확인
3. 없으면 warning 후 `null` 반환
4. rate limiting disabled 상태로 route 계속 동작

이렇게 하면 local에서 Upstash 설정이 누락되어도 앱 전체가 깨지지 않는다.

### IP 추출
Rate limiting은 request IP를 기준으로 적용한다.

Spec에서는 `x-forwarded-for` header에서 IP를 추출하도록 했다.

이유:
- Vercel 같은 platform에서는 proxy 뒤에 app이 있음
- 실제 client IP는 forwarding header에 들어오는 경우가 많음

### Identifier 조합
가능한 경우 IP와 email 같은 identifier를 함께 사용한다.

예:

```text
login:{ip}:{email}
forgot-password:{ip}:{email}
register:{ip}
```

이렇게 하면 단순 IP 제한보다 조금 더 세밀하게 제한할 수 있다.

### Auth route 적용
Register route에서는 실제 user 생성 전에 rate limit을 확인한다.

예:

```text
Check rate limit: 3 attempts per hour by IP
```

Forgot password, reset password, resend verification route도 같은 방식으로 요청 처리 초반에 제한을 확인한다.

제한 초과 시 HTTP status는 `429 Too Many Requests`를 사용한다.

### Credentials login 처리
Credentials login은 NextAuth flow와 연결되어 있어 별도의 접근이 필요했다.

강의에서는 login form이 먼저 check endpoint를 호출하도록 했다.

흐름:
1. Sign-in form submit
2. `/api/auth/check-login-limit` 호출
3. 제한 초과면 toast로 즉시 error 표시
4. 제한되지 않았으면 기존 `signIn` flow 진행

이 방식으로 credentials login에도 rate limiting을 적용한다.

### Error handling
제한 초과 시 사용자에게 다음과 같은 메시지를 보여준다.

```text
Too many attempts. Please try again in 14 minutes.
```

API response는 `429`를 반환한다.

```text
429 Too Many Requests
```

### 테스트
강사는 sign-in에서 존재하지 않는 email/password로 반복 시도해 테스트했다.

정책:

```text
credentials login: 5 attempts / 15 minutes
```

테스트 결과:
1. 잘못된 credentials로 login 시도
2. 5회까지 invalid 처리
3. 6번째 시도에서 rate limit error 표시
4. "Too many attempts" 메시지 확인

Register, forgot password 등 다른 endpoint도 같은 원리로 테스트할 수 있다.

### Feature review
구현 후 `/feature review`를 실행했다.

검토 결과:
- spec goals 충족
- auth endpoint 보호 적용
- no scope creep
- complete 가능

그 다음 `/feature complete`로 merge와 branch 삭제를 진행했다.

## 예시

Rate limit policy 예:

```ts
const limits = {
  login: { requests: 5, window: "15 m" },
  register: { requests: 3, window: "1 h" },
  forgotPassword: { requests: 3, window: "1 h" },
  resetPassword: { requests: 5, window: "15 m" },
  resendVerification: { requests: 3, window: "15 m" },
};
```

Rate limit error:

```json
{
  "error": "Too many attempts. Please try again later."
}
```

HTTP status:

```text
429 Too Many Requests
```

## 요약
- Upstash Redis를 사용해 auth endpoints에 rate limiting을 적용했다.
- Login, register, forgot/reset password, resend verification을 각각 다른 제한값으로 보호한다.
- Credentials login은 별도 check endpoint를 만들어 form submit 전에 제한을 확인한다.
- 제한 초과 시 `429 Too Many Requests`와 사용자용 error message를 반환한다.
- 구현 후 feature review를 통해 요구사항 충족을 확인했다.
