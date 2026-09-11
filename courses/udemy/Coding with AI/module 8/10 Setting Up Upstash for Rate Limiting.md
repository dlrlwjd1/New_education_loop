# Setting Up Upstash for Rate Limiting

## 개요
- Authentication audit에서 나온 주요 개선점인 **rate limiting**을 구현하기 전에 Upstash Redis를 준비한다.
- Upstash는 serverless Redis를 제공하며, rate limiting 외에도 caching, session management, leaderboard, chat 등에 사용할 수 있다.
- 이번 강의에서는 Upstash database를 만들고 필요한 environment variables를 local과 Vercel production에 등록한다.

## 내용

### 왜 지금 rate limiting을 하는가
처음에는 rate limiting을 나중에 구현하려 했지만, authentication 기능을 막 끝낸 시점이므로 auth endpoint 보호까지 이어서 처리하기로 한다.

Authentication audit에서 확인한 주요 risk:
- login brute force
- register 반복 요청
- forgot password email spam
- reset password token 관련 반복 요청
- verification email 재발송 남용

따라서 인증 관련 endpoint에 rate limiting을 추가할 준비를 한다.

### Upstash란
Upstash는 serverless Redis 서비스다.

Redis 활용 예:
- caching
- session management
- rate limiting
- leaderboard
- chat

이번 프로젝트에서는 rate limiting에 사용한다.

### Pricing
강의에서는 Upstash free allowance가 충분하다고 설명한다.

예:

```text
Monthly commands: 500,000
```

작은 프로젝트나 학습 프로젝트에서는 비용 없이 사용할 가능성이 높다.

### Upstash database 생성
Upstash에 로그인한 뒤 새 database를 만든다.

로그인 방식:
- GitHub
- Google

Database 설정 예:

```text
Name: devstash-rate-limit
Primary region: Ohio
Read region: Virginia
Plan: Pay as you go
```

Region은 각자 위치에서 가까운 곳을 선택하면 된다.

### Environment variables 확인
Database가 준비되면 Upstash가 연결에 필요한 env vars를 제공한다.

필요한 값:

```env
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

이 값은 프로젝트에서 Redis REST API에 접근할 때 사용된다.

### Local env에 추가
Local 개발 환경의 `.env`에 Upstash variables를 추가한다.

```env
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

각자 Upstash dashboard에서 복사한 값을 사용해야 한다.

### Production env 참고 파일에 추가
강사는 `.env.production`에도 같은 값을 넣었다.

이 파일은 실제 runtime보다는 production environment variables를 참고하기 위한 용도로 사용한다.

주의:
- secret 값이 들어가므로 commit 대상인지 확인해야 한다.
- 실제 production은 Vercel environment variables를 사용한다.

### Vercel environment variables 추가
Production에서도 rate limiting이 동작하려면 Vercel에 같은 variables를 등록해야 한다.

위치:

```text
Vercel -> Project -> Settings -> Environment Variables
```

`Add Environment Variables`에 Upstash에서 복사한 값을 붙여 넣으면 두 개의 variable이 한 번에 들어갈 수 있다.

등록할 값:

```env
UPSTASH_REDIS_REST_URL=
UPSTASH_REDIS_REST_TOKEN=
```

### Redeploy
Vercel environment variables를 추가한 뒤 redeploy한다.

흐름:
1. Save
2. Redeploy
3. View deployment
4. Deployment가 green 상태인지 확인

강의에서는 이전 deployment에 timeout error가 있었지만, 새 redeploy는 green 상태로 통과했다.

### 다음 단계
이번 강의는 Upstash 설정까지만 진행한다.

다음 강의에서는 spec file과 feature workflow를 사용해 실제 rate limiting 코드를 구현한다.

예상 작업:
- Upstash Redis client 설치/설정
- rate limiter helper 작성
- auth endpoints에 limiter 적용
- 제한 초과 시 error response 처리
- local/production build 확인

## 예시

Upstash env vars:

```env
UPSTASH_REDIS_REST_URL=https://...
UPSTASH_REDIS_REST_TOKEN=...
```

Rate limiting 대상 예:

```text
/api/auth/register
/api/auth/forgot-password
/api/auth/reset-password
/api/auth/resend-verification
```

Vercel 설정 위치:

```text
Settings -> Environment Variables -> Add Environment Variables
```

## 요약
- Authentication audit 이후 auth endpoint 보호를 위해 rate limiting을 구현하기로 했다.
- Rate limiting 저장소로 Upstash serverless Redis를 사용한다.
- Upstash에서 Redis database를 만들고 `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`을 복사한다.
- Local `.env`, `.env.production`, Vercel environment variables에 값을 등록한다.
- Env var 추가 후 Vercel redeploy가 green인지 확인하고, 다음 강의에서 실제 구현으로 넘어간다.
