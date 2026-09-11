# Production GitHub OAuth and Vercel Env Vars

## 개요
- Localhost용 GitHub OAuth app과 별도로 **production용 GitHub OAuth app**을 만드는 강의.
- Production에서는 Vercel domain을 homepage/callback URL로 사용해야 하며, Vercel environment variables에 production keys를 등록한다.
- Credentials registration/login과 GitHub OAuth login이 production database에서 정상 동작하는지 확인한다.

## 내용

### 왜 production용 GitHub OAuth app이 필요한가
Development에서 만든 GitHub OAuth app은 callback URL이 localhost 기준이다.

예:

```text
http://localhost:3000/api/auth/callback/github
```

Production에서는 Vercel domain이 다르므로 localhost callback으로는 동작하지 않는다.

따라서 production용 OAuth app을 별도로 만든다.

### .env.production의 역할
강사는 `.env.production`을 실제 runtime용이 아니라 reference/storage 용도로 사용한다.

역할:
- Vercel에 넣은 production environment variables를 local에서 참고
- 어떤 production key/value가 있는지 기록

주의:
- `.env.production`에 secret이 들어가므로 Git commit 여부와 `.gitignore`를 반드시 확인해야 한다.
- 실제 production runtime은 Vercel environment variables를 사용한다.

### Production Vercel domain 확인
Vercel project에서 production domain을 확인한다.

예:

```text
https://devstash.vercel.app
```

각자 Vercel domain은 다를 수 있다.

### GitHub OAuth app 생성
GitHub에서 새 OAuth app을 만든다.

위치:

```text
GitHub -> Settings -> Developer settings -> OAuth Apps -> New OAuth App
```

설정:

```text
Application name: DevStash Production
Homepage URL: https://devstash.vercel.app
Authorization callback URL: https://devstash.vercel.app/api/auth/callback/github
```

중요:
- callback path는 `/api/auth/callback/github`
- production domain을 사용
- local OAuth app과 production OAuth app을 구분

### Production GitHub keys
OAuth app 생성 후 값을 복사한다.

필요한 값:

```env
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

GitHub secret은 Generate client secret으로 생성한다.
2FA가 켜져 있으면 authenticator code를 입력해야 할 수 있다.

이 값을 `.env.production`에 넣는다.

### Production AUTH_SECRET 생성
Production `AUTH_SECRET`도 development와 다르게 만든다.

터미널:

```bash
npx auth secret
```

이 명령이 `.env.local`에 secret을 만들면 값을 복사해 `.env.production`의 `AUTH_SECRET`에 넣는다.

그 다음 `.env.local`은 사용하지 않으므로 삭제한다.

Production에 넣을 값:

```env
AUTH_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

### Vercel environment variables 추가
Vercel project에서 environment variables를 추가한다.

위치:

```text
Vercel -> Project -> Settings -> Environment Variables
```

이미 있을 수 있는 값:
- `DATABASE_URL`
- migration timeout 관련 variable

추가할 값:
- `AUTH_SECRET`
- `AUTH_GITHUB_ID`
- `AUTH_GITHUB_SECRET`

Vercel은 여러 env vars를 한 번에 paste해서 추가할 수 있다.

### Redeploy
Environment variables를 저장하면 Vercel이 redeploy를 안내한다.

```text
Redeploy
```

Redeploy 후 deployment가 green 상태인지 확인한다.

### Production credentials registration 테스트
Production site에서 dashboard에 접근한다.

예:

```text
https://devstash.vercel.app/dashboard
```

로그인하지 않은 상태라면 sign-in page로 이동한다.

Register flow:
1. Register 클릭
2. name 입력
3. email 입력
4. password 입력
5. Create account
6. success toast 확인

이 user는 production database에 생성된다.

### Neon production DB 확인
Neon dashboard에서 production branch를 선택한다.

Tables -> users에서 방금 등록한 user가 있는지 확인한다.

예:

```text
brad@traverseemedia.com
```

Development branch가 아니라 production branch를 보고 있는지 확인해야 한다.

### Production credentials login 테스트
Production site에서 방금 만든 credentials user로 sign in한다.

확인:
- login 성공
- `/dashboard` 접근 가능
- production site에서 session 유지

### Production GitHub login 테스트
Sign out 후 GitHub login을 테스트한다.

GitHub button 클릭 시 GitHub authorization page가 뜨면 callback URL이 제대로 설정된 것이다.

Authorize 후:
- GitHub account로 로그인
- dashboard 접근 가능
- sidebar에 GitHub avatar/name 표시

### 다음 단계
Production auth keys 설정과 login 테스트가 끝났다.

다음으로는 email verification을 추가한다.
사용할 service:

```text
Resend
```

## 예시

Production OAuth callback:

```text
https://your-vercel-domain.vercel.app/api/auth/callback/github
```

Vercel env vars:

```env
AUTH_SECRET=...
AUTH_GITHUB_ID=...
AUTH_GITHUB_SECRET=...
```

Production auth test:

```text
/dashboard
  -> sign-in page
  -> register new credentials user
  -> verify user in Neon production users table
  -> sign in with credentials
  -> sign out
  -> sign in with GitHub
```

## 요약
- Localhost용 GitHub OAuth app은 production에서 사용할 수 없으므로 production용 OAuth app을 별도로 만든다.
- Homepage URL과 callback URL은 Vercel production domain을 사용한다.
- Production `AUTH_SECRET`, `AUTH_GITHUB_ID`, `AUTH_GITHUB_SECRET`을 Vercel environment variables에 추가한다.
- Redeploy 후 credentials registration/login과 GitHub OAuth login을 production에서 테스트한다.
- 다음 단계는 Resend를 사용한 email verification이다.
