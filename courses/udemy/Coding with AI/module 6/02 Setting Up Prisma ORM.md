# Setting Up Prisma ORM

## 개요
- Neon Postgres database를 만든 뒤, app에서 database와 상호작용하기 위해 **Prisma ORM**을 설정하는 강의.
- Prisma는 raw SQL 대신 TypeScript method로 database를 다루게 해주는 Object Relational Mapper다.
- Prisma 7이 비교적 새 버전이라 AI가 오래된 Prisma 5/6 방식으로 작업할 수 있으므로, 최신 문서를 명시적으로 참조하게 한다.

## 내용

### Prisma를 사용하는 이유
Prisma는 Node.js/TypeScript app에서 database 작업을 쉽게 해주는 ORM이다.

장점:
- raw SQL query를 직접 쓰지 않아도 됨
- TypeScript type safety 제공
- IDE auto-completion 제공
- migration으로 database 변경사항을 version control 가능
- Prisma Studio로 data를 쉽게 확인 가능

Neon console의 Tables 화면에서도 data를 볼 수 있지만, Prisma Studio는 app schema 기준으로 더 편하게 확인할 수 있다.

### database feature spec 추가
이번 작업도 feature workflow를 따른다.

먼저 resource file에서 database spec을 가져와 project에 넣는다.

위치:

```text
context/features/database-spec.md
```

이 spec은 AI가 Prisma setup feature를 구현할 때 참고할 요구사항이다.

### database spec 핵심 요구사항
`database-spec.md`에는 다음 내용이 들어간다.

- Prisma ORM with Neon 설정
- Neon Postgres 사용
- project overview의 data model을 기반으로 initial schema 생성
- NextAuth models 포함
- items, item types, collections 등 DevStash content models 포함
- 적절한 indexes와 cascade deletes 추가
- Prisma 7 사용
- 최신 Prisma 7 upgrade/setup docs 읽기

이전에 만든 `context/project-overview.md`에는 이미 Prisma model 초안이 들어 있다.
AI는 이 내용을 보고 실제 `schema.prisma` 모델로 옮긴다.

### Prisma 7 문서 참조
Prisma 7은 최근 릴리스라 AI의 학습 데이터가 오래된 경우가 많다.

그래서 spec에 다음을 명시한다.
- Prisma 7 사용
- breaking changes 주의
- upgrade guide 전체 읽기
- quick start/setup guide 읽기

강사는 이것이 최신 library나 framework를 사용할 때 매우 중요하다고 강조한다.
개발자가 Prisma가 무엇인지, 어떤 버전 변화가 있는지 모르면 AI에게 최신 문서를 보라고 지시하기도 어렵다.

### current-feature.md 업데이트
구현 전, database spec을 current feature에 반영한다.

예시 prompt:

```text
Add a new current feature to @context/current-feature.md
to implement Neon Postgres and Prisma.
Check @context/features/database-spec.md for the requirements.
Set the status to in progress.
```

AI는 다음을 채운다.
- short description
- status: `in progress`
- goals
- notes
- Prisma docs references
- `DATABASE_URL` 환경 변수 필요

### feature branch 생성과 구현 시작
current feature를 업데이트한 뒤 feature branch에서 구현한다.

예시 prompt:

```text
Open a new branch and implement the current feature.
Pay special attention to the details about Prisma 7.
```

AI는 외부 Prisma docs를 fetch할지 permission을 요청한다.
최신 문서가 필요한 작업이므로 허용한다.

### Prisma setup 작업 목록
AI가 만든 todo list에는 다음이 포함된다.

- Prisma 7 required packages 설치
- Prisma client 설치
- Neon/Postgres adapter 설치
- Prisma config file 생성
- `schema.prisma` 생성
- Prisma client library file 생성
- system item types seed file 생성
- `.env.example` 생성
- `tsconfig` 업데이트
- package scripts 추가
- initial migration 준비
- build 검증

### 생성되는 주요 파일
예상 구조:

```text
prisma/
  schema.prisma
  seed.ts

prisma.config.ts
src/
  lib/
    prisma.ts
src/
  generated/
    prisma/
.env.example
```

`schema.prisma`에는 Prisma models가 들어간다.
`src/lib/prisma.ts`에는 app에서 사용할 Prisma client 생성 로직이 들어간다.
`seed.ts`는 초기 system item types를 넣기 위한 파일이다.

### Prisma 7 변경사항 문제
AI가 처음에는 오래된 방식으로 `schema.prisma` 안에 `DATABASE_URL`을 넣으려 했다.

하지만 Prisma 7에서는 database URL configuration 위치가 바뀌었다.
AI가 문서를 확인한 뒤 config file로 옮기는 방식으로 수정한다.

중요한 점:
- 최신 tool은 기존 AI 지식과 다를 수 있음
- docs를 명시적으로 읽게 해야 함
- 개발자가 이상한 부분을 알아채고 질문할 수 있어야 함

### .env와 DATABASE_URL
AI가 `.env.example`을 만들지만, 실제 app은 `.env` 파일을 사용한다.

`.env.example`:
- 예시 파일
- repository에 포함 가능
- 실제 secret 없음

`.env`:
- 실제 environment variables
- local development에서 사용
- Git에 commit하면 안 됨

Neon dashboard에서 **Development branch** connection string을 복사해 `.env`에 넣는다.

중요:
- production branch URL을 넣지 않기
- development branch URL인지 확인하기
- password 포함 connection string은 공개하지 않기

예:

```env
DATABASE_URL="postgresql://..."
```

### package scripts
AI는 `package.json`에 Prisma 관련 script를 추가한다.

예상 script:
- `db:migrate`
- `db:push`
- `db:seed`
- `db:studio`
- `prisma generate`

강사는 `db push`는 직접 사용하지 말고 migration을 만들라고 여러 번 강조한다.

### build 확인
`.env`를 만든 뒤 build를 실행한다.

```bash
npm run build
```

Prisma config 관련 오류가 있으면 AI가 docs를 다시 확인해 수정한다.
최종적으로 build가 통과한다.

이번 강의는 여기서 멈추고, 다음 강의에서 initial migration과 database connection test를 진행한다.

## 예시

Prisma setup feature 흐름:

```text
Add database-spec.md
  -> Update current-feature.md
  -> Create feature branch
  -> Fetch Prisma 7 docs
  -> Install Prisma packages
  -> Create prisma.config.ts
  -> Create schema.prisma
  -> Create Prisma client file
  -> Create seed file
  -> Create .env.example
  -> Add DATABASE_URL to local .env
  -> Run build
```

## 요약
- Prisma는 TypeScript에서 database를 type-safe하게 다루기 위한 ORM이다.
- Prisma 7은 변경사항이 있어 AI에게 최신 docs를 명시적으로 읽게 해야 한다.
- project overview의 Prisma model 초안을 기반으로 실제 schema를 만든다.
- `.env.example`과 실제 `.env`를 구분하고, `.env`에는 Neon development branch connection string을 넣는다.
- 이번 단계에서는 setup과 build 검증까지 진행하고, migration은 다음 강의에서 실행한다.
