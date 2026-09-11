# Connecting to MySQL Database Using TypeORM

## 개요
- NestJS 애플리케이션에서 **TypeORM**을 이용해 **MySQL** 데이터베이스에 연결하는 방법을 다루는 강의. TypeORM이 무엇인지 소개하고, 실제로 패키지를 설치해 `AppModule`에서 데이터베이스 연결 설정을 구성한다.

## 내용
### TypeORM이란
- **TypeORM**은 Node.js 애플리케이션, 특히 TypeScript를 사용하는 프레임워크에서 데이터베이스 관리를 단순화하는 **ORM(Object Relational Mapper)** 도구다.
- NestJS는 TypeScript 기반이기 때문에 TypeORM을 사용하기에 가장 좋은 예시(best example)라고 설명한다.
- TypeORM은 TypeScript 클래스와 데코레이터(decorator)를 이용해 데이터베이스 스키마를 정의할 수 있게 해준다.
- MySQL, Postgres, SQLite, Oracle 등 여러 데이터베이스를 지원하며, 마이그레이션(migration), 캐싱(caching), 강력한 쿼리 빌더(query builder) 같은 기능을 제공한다.
- 이러한 이유로 TypeORM은 NestJS 애플리케이션에 데이터베이스를 연결할 때 깔끔하고 유지보수하기 쉬운(maintainable) 코드를 작성하도록 도와주기 때문에 널리 사용된다.

### 패키지 설치
- 먼저 TypeORM 패키지와 MySQL 드라이버(driver)를 설치해야 한다.
- 명령어: `npm install --save @nestjs/typeorm typeorm mysql2` 형태로 TypeORM 패키지와 MySQL 드라이버를 설치한다. (강의에서는 "type orm package"와 "mysql2" 패키지를 설치한다고 설명하며, 이 패키지는 NestJS 앱과 MySQL 드라이버 사이의 래퍼(wrapper) 역할을 한다.)

### AppModule에서 데이터베이스 연결 설정
- 루트 모듈(root module)인 `app.module.ts`의 `imports` 배열 안에 데이터베이스 설정 로직을 작성한다.
- TypeORM 패키지가 제공하는 `TypeOrmModule` 클래스를 import한다. 이 클래스는 데이터베이스 연결을 위한 다양한 설정 옵션을 제공한다.
- `TypeOrmModule.forRoot()` 메서드를 호출해 연결 설정(connection settings)을 애플리케이션에 바인딩한다.
- `forRoot()` 안에 다음과 같은 데이터베이스 접속 정보(credentials)를 옵션으로 정의한다.
  - `type`: 사용할 데이터베이스 종류 (여기서는 `mysql`)
  - `host`: 데이터베이스 서버 주소. 로컬 환경이므로 `localhost`를 사용하며, 클라우드에 있는 관리형 데이터베이스나 다른 머신의 MySQL 서버라면 해당 도메인이나 IP 주소를 지정할 수 있다.
  - `port`: MySQL의 기본 포트인 `3306`
  - `username`: `root`
  - `password`: 빈 문자열(현재는 비밀번호를 설정하지 않음)
  - `database`: 새로 만들 데이터베이스 이름인 `nest_mysql`
  - `synchronize`: `true`로 설정하는 선택적(optional) 속성으로, 데이터베이스 엔티티/테이블 등의 변경 사항을 자동으로 동기화(auto-synchronize)해준다.
- 이 속성들은 순서(order)에 상관없이 정의해도 무방하다.

### MySQL 데이터베이스 생성 및 연결 확인
- 위 설정만으로 애플리케이션을 실행하면 `unable to connect to the database, unknown database nest_mysql` 에러가 발생한다. 아직 실제 데이터베이스가 존재하지 않기 때문이다.
- 터미널에서 MySQL에 접속해 `create database nest_mysql;` 명령으로 데이터베이스를 생성한다.
- 이어서 `use nest_mysql;` 명령으로 해당 데이터베이스를 사용하도록 전환한다.
- 이후 애플리케이션을 다시 실행하면 에러 없이 NestJS가 MySQL 데이터베이스에 정상적으로 연결된다.

## 예시
```bash
# TypeORM 패키지 및 MySQL 드라이버 설치
npm install --save @nestjs/typeorm typeorm mysql2
```

```typescript
// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nest_mysql',
      synchronize: true,
    }),
  ],
})
export class AppModule {}
```

```sql
-- MySQL 터미널에서 데이터베이스 생성
create database nest_mysql;
use nest_mysql;
```

## 요약
- **TypeORM**은 TypeScript 클래스와 데코레이터로 스키마를 정의하는 ORM으로, NestJS와 궁합이 잘 맞는다.
- `@nestjs/typeorm`, `typeorm`, `mysql2` 패키지를 설치해 MySQL 연결을 준비한다.
- `AppModule`의 `imports` 배열에서 `TypeOrmModule.forRoot()`로 `type`, `host`, `port`, `username`, `password`, `database`, `synchronize` 등의 옵션을 설정한다.
- 설정한 데이터베이스 이름(`nest_mysql`)은 MySQL에서 `create database`로 미리 생성해야 하며, 그렇지 않으면 연결 에러가 발생한다.
