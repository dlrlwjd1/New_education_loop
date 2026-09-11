# Seeding Demo Data

## 개요
- Initial migration으로 database tables를 만든 뒤, development/demo용 sample data를 seed하는 강의.
- 기존 seed는 system item types만 넣었지만, 이번에는 demo user, collections, items까지 추가한다.
- Seed data를 넣은 뒤 Prisma Studio와 `scripts/test-db.ts`로 database 상태를 검증한다.

## 내용

### 왜 더 많은 seed data가 필요한가
Dashboard UI를 database data로 전환하려면 실제로 보여줄 데이터가 필요하다.

기존 seed:
- system item types만 생성
- snippet, prompt, command 등 기본 type만 있음

이번 seed:
- demo user 생성
- 여러 collection 생성
- collection별 item 생성
- snippets, prompts, commands, links 등 다양한 item type 포함

### seed spec 추가
이번 작업도 feature workflow로 진행한다.

Resource file의 feature spec을 project로 가져온다.

```text
context/features/seed-spec.md
```

Spec의 목적:
- development/demo용 sample data로 database 채우기
- 기존 seed file을 overwrite하거나 확장하기
- dashboard에서 사용할 collections/items 준비하기

### Demo user
Seed script는 demo user를 만든다.

설정:
- email: `demo@devstash.io`
- password: `12345678`
- password는 plain text로 저장하지 않고 `bcrypt.js`로 hash
- `isPro`: false
- `emailVerified`: current date

Password hashing을 위해 `bcrypt.js`와 type package를 설치한다.

### System item types
System item types는 기존 seed와 동일하게 유지한다.

예:
- snippet
- prompt
- command
- note
- link
- file
- image

각 type에는 color, icon, `isSystem: true`가 포함된다.

### Seed collections
Seed data에는 여러 collection이 포함된다.

예:
- React Patterns
- AI Workflows
- DevOps
- Terminal Commands
- Design Resources

각 collection은 서로 다른 item type 조합을 가진다.

예:
- React Patterns: snippets
- AI Workflows: prompts
- DevOps: snippet, command, links
- Terminal Commands: commands
- Design Resources: links

Files/images는 실제 upload 흐름이 필요하므로 이번 seed에서는 제외한다.

### current-feature.md 업데이트
먼저 current feature에 seed 작업을 추가한다.

예시 prompt:

```text
Add a new current feature to @context/current-feature.md to seed some data.
Reference @context/features/seed-spec.md to get the data that should be added.
You can overwrite what is in the current seed file.
```

AI가 goals와 notes를 추가한다.

주요 goals:
- demo user 생성
- 5개 collections 생성
- items 생성
- password hash 처리
- system types 유지

### branch 생성과 seed 구현
AI가 feature branch를 만들고 seed file을 수정한다.

예상 branch:

```text
feature/seed-data
```

Seed file은 다음을 수행한다.
- Prisma Client import
- bcrypt import
- system item types upsert/create
- demo user create/update
- collections create
- items create
- item과 collection 관계 연결
- 실행 로그 출력

### seed 실행
Seed는 Prisma command 또는 package script로 실행한다.

```bash
npm run db:seed
```

또는:

```bash
npx prisma db seed
```

실행 후 build도 확인한다.

```bash
npm run build
```

### Prisma Studio에서 확인
Prisma Studio에서 data를 확인한다.

확인할 model/table:
- collections
- items
- item types
- users
- item collections

검증 포인트:
- React Patterns, AI Workflows 등 collections 존재
- items가 여러 type으로 생성됨
- demo user가 `demo@devstash.io`로 생성됨
- password가 hash로 저장됨
- item type data 유지

### test-db script 업데이트
기존 `scripts/test-db.ts`도 demo data를 확인하도록 업데이트한다.

요청 예:

```text
Update @scripts/test-db.ts to fetch the demo data and display it,
and make sure everything works.
```

Test script가 확인하는 것:
- database connection
- demo user
- collections count
- items count
- item types
- table counts

실행:

```bash
npm run db:test
```

또는 직접:

```bash
npx tsx scripts/test-db.ts
```

성공 결과:
- demo data verified
- database connection successful
- counts 출력

### 문제 해결 태도
Connection issue나 seed error가 생기면:
- error message를 그대로 AI에 전달
- `.env`와 database URL 확인
- Prisma Studio/Neon console에서 실제 data 확인
- seed script를 직접 읽고 구조를 이해

강사는 AI와 함께 문제를 좁혀가되, 개발자가 직접 코드도 볼 수 있어야 한다고 강조한다.

### feature 마무리
Seed feature가 잘 동작하면 feature branch를 정리한다.

요청 예:

```text
Commit the changes to feature branch,
merge to main,
push main to remote,
and delete feature branch.
```

Commit message에 `Claude` co-author가 들어가면 승인하지 않고 다시 지시한다.

## 예시

Seed workflow:

```text
Add seed-spec.md
  -> Update current-feature.md
  -> Create feature branch
  -> Install bcrypt.js
  -> Rewrite seed.ts
  -> npm run db:seed
  -> Check Prisma Studio
  -> Update scripts/test-db.ts
  -> npm run db:test
  -> Commit, merge, push, delete branch
```

## 요약
- Dashboard를 database data로 전환하기 전에 demo user, collections, items를 seed한다.
- Password는 `bcrypt.js`로 hash해서 저장한다.
- Seed에는 snippets, prompts, commands, links가 포함되며 files/images는 제외한다.
- Prisma Studio와 `scripts/test-db.ts`로 seed 결과를 검증한다.
- 다음 단계는 dashboard UI가 mock data 대신 database data를 읽도록 바꾸는 것이다.
