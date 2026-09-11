# CI/CD, Migrations, and Database Drift

## 개요
- DevStash를 Vercel에 배포하기 전에 **CI/CD와 database migration 운영 방식**을 설명하는 강의.
- 현대적인 배포에서는 GitHub 같은 remote repo의 특정 branch에 push하면 production site가 자동으로 배포된다.
- Development DB와 Production DB는 **data는 달라도 되지만 schema 구조는 항상 동기화**되어야 한다.

## 내용

### 예전 배포 방식과 현대 배포 방식
예전에는 local에서 사이트를 끝까지 만든 뒤 production server에 직접 업로드하는 경우가 많았다.
이 방식은 배포 시점에 문제가 터지기 쉽고, 환경 차이 때문에 고생하는 일이 많았다.

현대적인 방식은 CI/CD를 사용한다.

CI/CD:
- Continuous Integration
- Continuous Deployment

기본 흐름:
- GitHub/Bitbucket 같은 remote repository 설정
- `main` 또는 특정 branch에 push
- Vercel 같은 hosting platform이 자동으로 build/deploy
- 필요하면 GitHub Actions로 test 등을 배포 전에 실행

### Development DB와 Production DB
DevStash는 Neon에서 두 database branch를 사용한다.

- Development branch: local 개발용
- Production branch: 실제 production website용

두 branch의 data는 달라도 된다.
예를 들어 development에는 demo data가 있고, production에는 실제 user data가 있을 수 있다.

하지만 다음 구조는 같아야 한다.
- tables
- fields/columns
- indexes
- relations
- constraints

즉, **schema structure는 항상 sync**되어야 한다.

### Schema 변경과 migration
Database 구조를 바꾸는 작업은 Prisma schema에서 시작한다.

예:
- `Item` model에 field 추가
- 새 table/model 추가
- column name 변경
- field type 변경
- index 추가
- relation 변경

이런 변경은 database structure를 바꾸므로 migration이 필요하다.

Migration 생성 명령 예:

```bash
npx prisma migrate dev --name add-email-to-user-table
```

다른 예:

```bash
npx prisma migrate dev --name add-collection-table
npx prisma migrate dev --name add-is-pro-field
```

### migrations folder
Prisma migration을 만들면 migrations folder에 새 folder가 생긴다.

예:

```text
prisma/
  migrations/
    20260101000000_init/
      migration.sql
```

현재 프로젝트에는 initial migration 하나만 있다.
이 migration은 모든 initial tables와 fields를 만들었다.

하지만 아직 production branch에는 이 migration이 적용되지 않았다.
Neon dashboard에서 production branch를 보면 tables가 비어 있을 수 있다.

### Production에서 migration 적용
개발 중에는 다음 명령으로 migration을 만든다.

```bash
npx prisma migrate dev --name init
```

Production에서는 이미 만들어진 migration files를 적용한다.

```bash
npx prisma migrate deploy
```

`migrate deploy`는 `prisma/migrations` folder에 있는 migration들을 production database에 적용한다.

CI/CD pipeline에서는 production deploy 시 이 명령이 자동으로 실행되도록 설정한다.

흐름:
1. schema 변경
2. `migrate dev`로 migration 생성
3. migration files commit
4. GitHub에 push
5. Vercel build/deploy
6. production에서 `prisma migrate deploy` 실행

### Migration files를 Git에 commit해야 하는 이유
Production DB는 local schema file만 보고 자동으로 바뀌지 않는다.

Production에 필요한 것은 migration history다.

따라서 다음을 Git에 포함해야 한다.
- `prisma/schema.prisma`
- `prisma/migrations/...`

Migration files가 있어야 production에서 같은 schema 변경을 재현할 수 있다.

### Database drift
Database drift는 development와 production database schema가 서로 어긋난 상태다.

Drift가 생기는 원인:
- 누군가 database를 직접 수정함
- column을 수동으로 추가/삭제함
- field type을 SQL editor에서 직접 변경함
- development에서 `prisma db push`를 사용함
- 한 환경에는 migration을 적용했지만 다른 환경에는 적용하지 않음

이렇게 되면 Prisma의 migration history와 실제 database 상태가 달라져 문제가 생긴다.

### 왜 db push를 피해야 하는가
`prisma db push`는 schema를 database에 직접 반영한다.

개발 중 빠른 실험에는 편할 수 있지만, 이 코스 workflow에서는 사용하지 않는다.

문제:
- migration file이 남지 않음
- production에서 같은 변경을 재현하기 어려움
- development와 production이 out of sync될 수 있음
- drift의 원인이 됨

따라서 database structure를 바꾸면 항상 migration을 만든다.

### Baseline
최악의 경우 database 상태가 꼬이면 baseline이 필요할 수 있다.

Baseline은 Prisma에게 다음처럼 알려주는 과정이다.

```text
This is the current database state. Start fresh from here.
```

하지만 baseline은 번거롭고 실수하기 쉬우므로, 애초에 migration workflow를 잘 지키는 것이 중요하다.

### Data 변경과 Schema 변경 구분
Migration이 필요한 작업:
- table 추가
- field/column 추가
- field 이름 변경
- field type 변경
- index 추가
- relation 변경

Migration이 필요 없는 작업:
- user 추가
- item 추가
- collection 추가
- seed data 추가
- 일반 record 생성/수정/삭제

핵심은 **data 변경이 아니라 structure 변경이면 migration**이다.

### Vercel 배포에서 할 일
Vercel에 배포할 때 production deploy 과정에서 다음 명령이 자동으로 실행되게 설정한다.

```bash
npx prisma migrate deploy
```

이렇게 하면 GitHub에 push할 때 production database도 migration history에 맞게 업데이트된다.

## 예시

개발 중 schema 변경 흐름:

```text
Edit prisma/schema.prisma
  -> npx prisma migrate dev --name add-new-field
  -> Commit schema + migration files
  -> Push to GitHub
  -> Vercel deploy
  -> npx prisma migrate deploy runs in production
```

Drift를 피하는 규칙:

```text
Do not manually edit production schema.
Do not use prisma db push for structural changes.
Always create and commit migrations.
Run migrate deploy in production.
```

## 요약
- Vercel 배포 전, CI/CD와 Prisma migration workflow를 이해해야 한다.
- Development DB와 Production DB는 data는 달라도 되지만 schema 구조는 같아야 한다.
- Schema 변경은 항상 `prisma migrate dev --name ...`로 migration을 만든다.
- Production에서는 `prisma migrate deploy`로 migration files를 적용한다.
- 직접 DB를 수정하거나 `db push`를 쓰면 drift가 생길 수 있다.
- 다음 강의에서는 Vercel account를 설정하고 실제 배포를 시작한다.
