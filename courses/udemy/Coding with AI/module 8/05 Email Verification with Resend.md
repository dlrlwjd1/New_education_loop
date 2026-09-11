# Email Verification with Resend

## 개요
- Production project에서 email verification이 왜 필요한지 설명하고, Resend를 사용해 회원가입 후 verification email을 보내는 기능을 구현한다.
- Resend API key를 `.env`, `.env.production`, Vercel environment variables에 등록한다.
- 기존 Prisma schema에 이미 있는 `emailVerified`, `VerificationToken` 구조를 활용해 token 생성, email 발송, verification route, 안내 page, 미인증 사용자 차단을 추가한다.

## 내용

### Email verification이 필요한 이유
Production에서는 사용자가 실제로 접근 가능한 email을 사용하는지 확인해야 한다.

검증이 없으면 다음 문제가 생길 수 있다.

- 접근 권한이 없는 email로 계정 생성
- 임의 email을 이용한 대량 계정 생성
- 계정 복구, 알림, 보안 관련 기능의 신뢰도 저하

따라서 회원가입 후 email로 verification link를 보내고, 사용자가 그 link를 클릭해야 계정을 사용할 수 있게 만든다.

### Resend 사용
강의에서는 email sending API로 Resend를 사용한다.

특징:
- 무료 계정으로 월 3,000건까지 발송 가능
- GitHub 또는 Google login 지원
- 직접 SMTP를 구성하는 것보다 설정이 간단함
- verification email이 spam으로 분류될 가능성을 줄이는 데 도움

Resend에서 계정을 만들 때 사용한 email을 기억해야 한다. 아직 custom domain을 연결하지 않은 개발 단계에서는 이 email로만 테스트하는 흐름이 중요하다.

### API key 생성
Resend dashboard에서 API key를 만든다.

설정 예:

```text
Name: devstash
Permission: Full access
Domain: 선택하지 않음
```

API key는 한 번만 보이므로 생성 직후 복사해 둔다.

### Environment variables 등록
Local `.env`에 Resend key를 추가한다.

```env
RESEND_API_KEY=
```

강사는 같은 값을 `.env.production`에도 참고용으로 넣고, Vercel project의 environment variables에도 추가했다.

Vercel 위치:

```text
Vercel -> Project -> Settings -> Environment Variables
```

저장 후에는 production deployment가 새 env var를 읽도록 redeploy한다.

### Feature command로 요구사항 로드
이번 강의에서는 별도 spec file 대신 `/feature load`에 직접 prompt를 입력했다.

Prompt 요지:

```text
Set up email verification on register.
Users need to click on the link in their email.
We are using Resend.
RESEND_API_KEY is in the .env file.
```

AI는 이를 `current-feature.md`에 정리하면서 다음 요구사항으로 확장했다.

- Resend 설치 및 설정
- 회원가입 시 verification email 발송
- token 생성 helper 작성
- verification API route 작성
- verification 상태를 보여주는 page 작성
- 미인증 사용자의 sign-in 차단

### 기존 schema 활용
강의 시점의 schema에는 이미 다음 구조가 준비되어 있었다.

- user의 `emailVerified`
- `VerificationToken` model

그래서 이 기능을 위해 별도 migration을 만들 필요는 없었다.

### Resend 관련 파일
구현 과정에서 `src/lib` 아래에 email 관련 helper들이 추가되었다.

예상 파일:

```text
src/lib/resend.ts
src/lib/email.ts
src/lib/tokens.ts
```

역할:
- `resend.ts`: `RESEND_API_KEY`로 Resend client 초기화
- `tokens.ts`: verification token 생성
- `email.ts`: verification email 발송 함수 작성

### 발신자 email 주의
처음 AI가 `noreply@devstash.io` 같은 custom domain 기반 sender를 만들었지만, 강사는 아직 해당 domain을 Resend에 연결하지 않았기 때문에 수정했다.

Domain을 연결하지 않은 개발 단계에서는 Resend의 기본 발신자를 사용한다.

```text
onboarding@resend.dev
```

나중에 Resend에 실제 domain을 연결하면 다음과 같은 주소로 바꿀 수 있다.

```text
noreply@your-domain.com
support@your-domain.com
```

### Verification route
회원가입 시 생성된 token은 verification URL에 포함된다.

구현되는 흐름:
1. register route에서 user 생성
2. verification token 생성
3. Resend로 verification email 발송
4. 사용자가 email link 클릭
5. `/api/auth/verify` route에서 token 검증
6. user의 `emailVerified` 값을 업데이트

### Verification page
사용자에게 verification 상태를 보여주는 page도 추가한다.

예상 화면:
- "verification link를 보냈으니 inbox를 확인하라"는 안내
- link 만료 또는 오류 시 error message
- email verified 후 sign-in으로 이동하는 UI

Page는 server component로 두고, 동적인 상태 처리는 client component로 분리한다.

### 미인증 사용자 차단
Credentials sign-in 과정에서 `emailVerified`가 없는 사용자를 차단한다.

결과:
- 회원가입 직후 바로 dashboard로 들어갈 수 없음
- email link를 클릭해 verification을 완료해야 sign-in 가능

### 테스트 전 사용자 정리 스크립트
강사는 테스트를 쉽게 하기 위해 demo user를 제외한 모든 user와 관련 content를 삭제하는 script를 만들었다.

목적:
- 같은 email로 반복 테스트하기 쉽게 정리
- demo user의 collections/items는 보존

예:

```text
scripts/cleanup-users.ts
```

기준 demo email:

```text
demo@devstash.io
```

### 테스트 흐름
테스트는 Resend에 가입한 email로 진행한다.

흐름:
1. 새 user register
2. verification 안내 page 확인
3. email inbox에서 Resend email 확인
4. "Verify email" link 클릭
5. email verified page 확인
6. sign-in 시도
7. dashboard 접근 확인

개발 중 domain이 없을 때는 Resend 계정 email로 테스트해야 한다.

## 예시

Resend 환경 변수:

```env
RESEND_API_KEY=re_...
```

발신자 email:

```ts
from: "onboarding@resend.dev"
```

Verification URL 형태:

```text
http://localhost:3000/auth/verify-email?token=...
```

Feature prompt 예:

```text
/feature load set up email verification on register. Users need to click on the link in their email. We are using Resend. RESEND_API_KEY is in the .env file.
```

## 요약
- Email verification은 production authentication에서 필수에 가까운 안전장치다.
- Resend를 사용해 회원가입 후 verification email을 발송한다.
- Domain을 연결하지 않은 개발 단계에서는 `onboarding@resend.dev`를 sender로 사용한다.
- 기존 `emailVerified`, `VerificationToken` schema를 활용했기 때문에 migration은 필요 없었다.
- 기능 완료 후에는 `/feature review`, `/feature complete`로 검토, merge, branch 정리를 수행했다.
