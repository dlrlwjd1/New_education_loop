# Running Initial Migration and Testing Database

## 개요
- Prisma setup 이후 initial migration을 실행해 Neon development database에 실제 tables를 생성하는 강의.
- `db push`를 직접 쓰지 않고 migration을 만들어 development와 production database를 동기화할 수 있게 한다.
- seed, test script, Prisma Studio, migration status까지 확인해 database 연결이 제대로 되었는지 검증한다.

## 내용

### Prisma 7 hiccup
이전 강의에서 Prisma 7이 새 버전이라 AI가 오래된 방식과 섞어 작업하는 문제가 있었다.

교훈:
- 최신 framework/library는 AI 지식이 outdated일 수 있음
- 최신 documentation을 명시적으로 제공해야 함
- 나중에는 Context 7 MCP 같은 도구로 최신 docs를 더 쉽게 가져올 예정

### initial migration이 필요한 이유
Neon console의 Tables 화면을 보면 아직 table이 없다.

Prisma models를 실제 database table로 만들려면 migration을 실행해야 한다.

중요한 규칙:
- `prisma db push`로 직접 밀지 않기
- 항상 migration 생성
- migration으로 production과 development DB를 같은 구조로 유지

강사 prompt:

```text
The .env has our dev branch connection string.
Go ahead and run the initial migration.
Never run db push directly.
Always create a migration so we can replicate in production and keep the DBs in sync.
```

### migration 실행
AI가 실행한 script:

```bash
npm run db:migrate -- --name init
```

또는 project script에 따라 비슷한 migration command를 사용한다.

이 command는:
- migration file 생성
- development database에 migration 적용
- `_prisma_migrations` table에 기록

### DATABASE_URL format 문제
처음 migration 실행 시 database URL format 오류가 발생했다.

원인:
- Neon에서 복사한 snippet에 불필요한 prefix가 포함됨
- `psql` command 형태를 그대로 붙여넣으면 안 됨
- single quote가 남아 있을 수 있음

수정:
- `.env`의 `DATABASE_URL`에는 순수 connection string만 넣기
- quote/prefix 정리

수정 후 다시 실행하면 migration이 성공한다.

### seed 실행
Migration 후 seed를 실행한다.

Seed의 역할:
- system item types를 database에 넣음
- snippet, prompt, command, file, image 등 기본 type 생성
- icon, color, `isSystem` 값을 함께 저장

실행 결과:

```text
All system item types seeded successfully
```

### Neon console에서 table 확인
Neon dashboard의 development branch에서 Tables를 새로고침하면 table들이 생성되어 있다.

확인 가능한 table 예:
- `_prisma_migrations`
- users
- accounts
- sessions
- verification tokens
- items
- item_types
- collections
- item_collections

`_prisma_migrations`에는 `init` migration이 기록된다.

`item_types`에는 seed data가 들어간다.
예:
- snippet
- prompt
- command
- file
- image

accounts/sessions 관련 table은 NextAuth용이므로 아직 data가 없을 수 있다.

### scripts 폴더와 database test script
Database 연결을 직접 테스트하기 위해 one-off script를 만든다.

강사는 이런 스크립트를 보통 `scripts/` 폴더에 둔다.

파일:

```text
scripts/test-db.ts
```

목적:
- Prisma client로 database 연결 확인
- item types 조회
- table count 또는 간단한 query 실행

### dotenv 필요
`scripts/` 폴더의 standalone script는 Next.js runtime 밖에서 실행된다.

그래서 `.env`의 `DATABASE_URL`을 읽으려면 `dotenv` package가 필요하다.

강사는 AI가 잊을 수 있으므로 명시적으로 말한다.

```text
Don't forget we need the dotenv package to access the environment variables.
```

Test script는 다음을 import한다.
- `dotenv`
- Prisma client

### db test script 실행
AI는 `package.json`에 test script를 추가한다.

예:

```json
{
  "scripts": {
    "db:test": "tsx scripts/test-db.ts"
  }
}
```

실행:

```bash
npm run db:test
```

성공 결과:
- database 연결 성공
- system item types 조회 성공
- all 7 system types 확인

### migration status 확인
터미널에서 Prisma migration 상태를 확인할 수 있다.

```bash
npx prisma migrate status
```

예상 결과:

```text
1 migration found
Database schema is up to date
```

### Prisma Studio 실행
Prisma Studio로 database data를 확인할 수 있다.

```bash
npm run db:studio
```

또는:

```bash
npx prisma studio
```

Studio가 local port에서 열리고, table/model별 data를 볼 수 있다.

확인:
- item types table/model
- seeded system item types
- icon/color/isSystem 값

주의:
- Studio에서 직접 data를 edit할 수는 있지만, 가능하면 직접 수정은 피한다.
- 필요한 data 변경은 seed/migration/app logic으로 관리하는 편이 좋다.

### feature 마무리
Database 연결이 확인되면 feature branch를 정리한다.

요청:

```text
Commit to feature branch,
merge with main,
push main,
delete feature branch.
```

확인:
- commit message에 원치 않는 Claude co-author 없음
- main branch로 merge
- remote push
- feature branch 삭제
- UI도 여전히 정상 동작

### 다음 단계
Database 연결은 완료되었다.

다음 강의에서는 dashboard에서 사용할 collection/item data를 더 seed한다.

## 예시

Migration과 검증 흐름:

```text
Fix DATABASE_URL in .env
  -> npm run db:migrate -- --name init
  -> run seed
  -> check Neon Tables
  -> create scripts/test-db.ts
  -> install/use dotenv
  -> npm run db:test
  -> npx prisma migrate status
  -> npm run db:studio
  -> commit/merge/push
```

## 요약
- Initial migration으로 Prisma schema를 Neon development database에 적용한다.
- `db push`는 사용하지 않고 migration을 만들어 production에도 재현 가능한 변경으로 남긴다.
- Seed로 system item types를 database에 넣는다.
- Neon console, test script, migration status, Prisma Studio로 database 연결과 data를 검증한다.
- 다음 단계는 실제로 작업할 collections/items seed data를 추가하는 것이다.
