# Deploying to Vercel

## 개요
- DevStash를 Vercel에 배포하고, GitHub `main` branch push 시 자동으로 production에 배포되도록 설정하는 강의.
- Vercel 배포 자체는 GitHub repo를 import하면 대부분 자동으로 처리되지만, database migration과 production `DATABASE_URL` 설정이 중요하다.
- Production Neon branch에는 아직 tables/data가 없으므로, `prisma migrate deploy`와 최소 seed data 처리가 필요하다.

## 내용

### Vercel 배포에서 생각할 두 가지
Vercel 배포에서는 크게 두 가지를 신경 써야 한다.

1. Application files
2. Production database

Files는 간단하다.
Vercel에서 GitHub repository를 선택하면 continuous deployment가 자동으로 설정된다.

하지만 database는 development branch와 production branch가 분리되어 있으므로 따로 관리해야 한다.

### Production DB에는 아직 table이 없음
Neon dashboard에서 확인하면:

- Development branch: tables와 seed data가 있음
- Production branch: 아직 tables가 없음

이유:
- migration은 development branch에만 실행됨
- production branch에는 아직 `prisma migrate deploy`를 실행하지 않음

### Production build command
Production deploy 시 Prisma migration을 적용해야 한다.

Vercel project 설정에서 build command를 override한다.

필요한 순서:
1. Prisma client generate
2. Prisma migrations deploy
3. Next.js build

예:

```bash
npx prisma generate && npx prisma migrate deploy && next build
```

`prisma migrate deploy`는 repository에 포함된 `prisma/migrations` folder를 보고 production DB에 migration을 적용한다.

현재는 `init` migration 하나가 있고, 이 migration이 production DB에 tables와 fields를 만든다.

### Vercel project import
Vercel에서:

1. Add New Project
2. GitHub repository 선택
3. Import
4. Build command override
5. Environment variable 설정
6. Deploy

GitHub repository는 먼저 최신 상태로 push되어 있어야 한다.

### Production DATABASE_URL
Vercel environment variable에 `DATABASE_URL`을 추가한다.

중요:
- development branch URL이 아니라 production branch URL 사용
- Neon dashboard에서 Production branch 선택
- Connect 클릭
- password 표시
- connection string 복사

환경 변수:

```text
DATABASE_URL
```

값:

```text
postgresql://...
```

강사는 참고용으로 local root에 `.env.production` 파일을 만들지만, 실제 production에서 쓰는 것은 Vercel environment variable이다.

주의:
- `.env.production`에 secret이 들어가면 repository 공개 여부와 `.gitignore`를 꼭 확인해야 한다.
- 실제 배포 환경에서는 Vercel dashboard의 environment variables가 기준이다.

### Deployment log 확인
Deploy가 시작되면 Vercel build log를 확인한다.

확인할 로그:
- Prisma client generated
- Prisma schema loaded
- migration found
- applying migration `init`
- migration applied
- Next.js build complete

예:

```text
1 migration found
Applying migration ..._init
```

이 로그가 보이면 production DB에 schema가 적용된 것이다.

### Production dashboard 확인
배포가 끝나면 Vercel production URL로 접속한다.

Home:

```text
/
```

Dashboard:

```text
/dashboard
```

초기에는 dashboard가 뜨지만 sidebar item types가 비어 있을 수 있다.

이유:
- migration은 schema만 만든다.
- development에서 seed한 demo data는 production에 자동으로 들어가지 않는다.
- collections/items demo data는 production에 없어도 괜찮지만, system item types와 demo user는 필요하다.

### Production에 system types와 demo user 추가
강사는 production DB에 필요한 최소 data를 SQL로 직접 넣는다.

Claude Code에게 요청:

```text
Can you give me SQL queries to add the system item types
and the demo user to the prod DB?
```

주의:
- 자신의 schema를 기준으로 query를 생성해야 한다.
- 강사의 query를 그대로 복사하지 말 것.
- 각자 database setup이 조금 다를 수 있다.

### Neon SQL Editor에서 실행
Neon dashboard에서 반드시 Production branch를 선택한다.

1. Branch: Production 선택
2. SQL Editor 이동
3. system item types insert query 실행
4. Tables에서 item types 확인
5. demo user insert query 실행
6. Tables에서 users 확인

Demo user:

```text
demo@devstash.io
```

Password는 development seed와 같은 hashed password다.

### Redeploy 필요
Production DB에 SQL로 data를 넣은 뒤 바로 Vercel page에서 안 보일 수 있다.

이 경우 Vercel에서 redeploy한다.

Vercel dashboard:

```text
Deployments -> latest deployment -> Redeploy
```

Redeploy 후 production dashboard를 새로고침하면 item types가 표시된다.

### Continuous deployment 완료
이제 GitHub `main` branch에 push하면 Vercel이 자동으로 deploy한다.

완료 상태:
- production site 배포됨
- production DB schema migration 적용됨
- system item types 표시됨
- demo user 존재
- future push to main triggers deploy

## 예시

Vercel build command:

```bash
npx prisma generate && npx prisma migrate deploy && next build
```

Production deploy 흐름:

```text
Push main to GitHub
  -> Import repo in Vercel
  -> Set build command
  -> Add production DATABASE_URL
  -> Deploy
  -> prisma migrate deploy applies schema
  -> Add system types/demo user in Neon SQL Editor
  -> Redeploy
  -> /dashboard shows production data
```

## 요약
- Vercel은 GitHub repo를 import하면 continuous deployment를 쉽게 설정할 수 있다.
- Production database는 Neon production branch connection string을 `DATABASE_URL`로 설정한다.
- Build command에 `prisma generate`, `prisma migrate deploy`, `next build`를 포함한다.
- Migration은 schema만 적용하며 seed/demo data는 production에 자동으로 들어가지 않는다.
- Production SQL Editor에서 system item types와 demo user를 넣고 redeploy하면 dashboard가 production DB data를 표시한다.
