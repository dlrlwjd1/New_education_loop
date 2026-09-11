# Setting Up Neon Database

## 개요
- Dashboard UI core layout을 마친 뒤, DevStash의 database를 설정하는 강의.
- Postgres cloud database provider인 **Neon**을 사용한다.
- Neon의 database branching 기능을 활용해 **production branch**와 **development branch**를 분리한다.

## 내용

### Neon을 사용하는 이유
Neon은 Postgres 기반의 cloud database provider다.

강사가 Neon을 선호하는 이유:
- 설정이 쉽다.
- 무료 계정도 충분히 generous하다.
- Postgres를 cloud에서 바로 사용할 수 있다.
- database branching을 지원한다.
- 프로젝트별 dashboard, SQL editor, table viewer, monitoring 기능을 제공한다.

### Database branching
Neon의 중요한 기능은 database branch다.

Git에서 code branch를 나누듯이 database도 branch를 나눌 수 있다.

강사의 선호 구조:
- **Production branch**: 실제 production website에서 사용하는 database
- **Development branch**: local development에서 사용하는 database

이렇게 분리하면 local 개발 중 실수로 production data를 건드리는 위험을 줄일 수 있다.

### Neon project 생성
Neon에 로그인한 뒤 새 project를 만든다.

로그인 방식:
- Google
- GitHub

예시 project name:

```text
devstash
```

project를 만들면 Neon dashboard로 이동한다.

### 기본 production branch
Neon project를 만들면 기본적으로 production branch가 생성된다.

Dashboard 왼쪽에서 branch 목록을 볼 수 있고, 기본 branch는 production이다.

connection string 확인 위치:
- branch 옆의 connect 버튼
- Overview 화면의 Connect 섹션

이 connection string은 나중에 project 환경 변수에 넣게 된다.

### development branch 생성
local development용 branch를 따로 만든다.

Neon dashboard에서:

```text
Create Child Branch
```

branch name:

```text
Development
```

설정:
- automatic delete는 끔
- data는 current data 기준으로 생성

현재는 아직 data가 없으므로 어떤 data 기준을 선택해도 큰 차이는 없다.

### connection string 구분
Production branch와 Development branch는 서로 다른 connection string을 가진다.

중요한 점:
- local development에서는 Development branch connection string 사용
- production deploy에서는 Production branch connection string 사용
- 두 connection string을 섞지 않기

Neon은 branch마다 hostname에 해당하는 이름을 자동으로 붙인다.

예:
- development: `ep-empty-rice`
- production: `ep-billowing-brook`

이 이름은 계정마다 다르게 생성된다.

### Neon dashboard 기능
Neon dashboard에서 사용할 수 있는 기능:
- monitoring
- stats
- analytics
- SQL Editor
- Tables
- Backup and Restore

SQL Editor에서는 직접 SQL command를 실행할 수 있다.
Tables 화면에서는 생성된 table을 확인할 수 있다.

현재 단계에서는 아직 Prisma schema나 migration을 만들지 않았으므로 table은 비어 있다.

### 다음 단계
Neon database project와 development branch를 만들었으므로, 다음에는 ORM을 설정한다.

사용할 ORM:

```text
Prisma
```

Prisma는 Object Relational Mapper로, Next.js app에서 Postgres와 연결하고 database 작업을 수행하는 데 사용한다.

## 예시

권장 database branch 구조:

```text
Neon project: devstash

branches/
  production
    connection string -> production deploy에서 사용
  development
    connection string -> local development에서 사용
```

connection string 사용 원칙:

```text
local .env      -> Development branch URL
production env -> Production branch URL
```

## 요약
- DevStash database는 Neon의 cloud Postgres를 사용한다.
- Neon은 Git처럼 database branch를 만들 수 있다.
- production branch와 development branch를 분리해 local 개발과 실제 배포 환경을 나눈다.
- 각 branch는 connection string이 다르므로 섞지 않도록 주의한다.
- Neon project와 development branch를 만든 뒤, 다음 단계에서는 Prisma를 설치하고 Postgres와 연결한다.
