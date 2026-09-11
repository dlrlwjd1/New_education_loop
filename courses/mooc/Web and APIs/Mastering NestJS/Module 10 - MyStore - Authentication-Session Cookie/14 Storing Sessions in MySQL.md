# Storing Sessions in MySQL

## 개요
- 서버 메모리(memory)에 저장되던 세션을 `express-mysql-session` 패키지를 이용해 MySQL 데이터베이스에 저장하도록 바꾸는 강의.

## 내용
### 메모리 세션 저장의 한계
- 일반적으로 세션(session)은 고유 ID로 서버에 저장되는데, 기본적으로는 서버의 메모리(memory)에 저장된다.
- 사용자가 많아지고 특히 동시 접속자(concurrent users)가 많을 경우, 메모리에 세션을 저장하는 방식은 서버에 큰 부담이 된다.
- 이 문제를 해결하기 위해 세션 ID를 서버 메모리 대신 데이터베이스(database)에 저장한다.

### express-mysql-session 설치와 연결
- `npm install express-mysql-session` 명령으로 세션 데이터를 데이터베이스에 저장해주는 패키지를 설치한다.
- `main.ts`에서 이 패키지를 import하고, `const MySQLStore = require('express-mysql-session')(session);` 형태로 세션(session) 생성자(creator) 객체를 함께 전달해 호출한다.
- 이 호출은 세션 테이블을 다룰 내부 연결(connection)과 커넥션 풀(pool)을 생성한다.

### 세션 스토어(store) 구성
- `sessionStore`라는 상수를 만들고 `new MySQLStore(options)`를 할당해 스토어를 생성한다.
- 스토어 생성자는 MySQL 데이터베이스 관련 설정 객체(configuration properties)를 인자로 받으므로, `options`라는 별도의 설정 객체를 만든다.
- `options` 객체에는 다음 속성들을 설정한다.
  - `connectionLimit`: 한 번에 생성 가능한 연결(connection) 수, 여기서는 `10`으로 설정.
  - `port`: `3306`
  - `host`: `localhost`
  - `database`: `nest_mysql`
  - `user`: `root`
  - `password`: 빈 값
  - `createDatabaseTable`: `true` — 이 속성을 true로 설정하면 데이터베이스 안에 `sessions`라는 테이블이 자동으로 생성된다.
- 마지막으로 `express-session` 설정 객체의 `store` 속성에 앞서 만든 `sessionStore`를 할당해 스토어를 연결한다.

### 동작 확인
- 저장 후 MySQL 터미널을 열어 테이블 목록을 확인하면 `sessions` 테이블이 생성되어 있지만, 아직 비어 있는 상태다.
- 기본 동작상 세션 쿠키가 생성될 때 이 테이블에 저장되므로, 브라우저에서 사용자명과 비밀번호를 입력해 로그인을 진행한다.
- 로그인 후 다시 `sessions` 테이블을 확인하면 세션 ID(session ID), 만료 시간(expires), 데이터(data) 정보가 저장된 것을 확인할 수 있다.
- 쿠키 데이터(data)의 내용을 살펴보면 `isLoggedIn: true` 값이 포함되어 있는 것을 확인한다.
- 직접 세션 저장 메커니즘을 만들 수도 있지만, `express-mysql-session`처럼 MySQL용 외부 패키지를 사용하는 것이 훨씬 편리하며, MongoDB 등 다른 데이터베이스를 위한 유사한 패키지들도 존재한다.

## 예시
```typescript
// main.ts
import * as session from 'express-session';
const MySQLStore = require('express-mysql-session')(session);

const options = {
  connectionLimit: 10,
  port: 3306,
  host: 'localhost',
  database: 'nest_mysql',
  user: 'root',
  password: '',
  createDatabaseTable: true,
};

const sessionStore = new MySQLStore(options);

app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    store: sessionStore,
  }),
);
```

## 요약
- 서버 메모리에 저장되던 세션을 `express-mysql-session` 패키지를 사용해 MySQL 데이터베이스에 저장하도록 변경했다.
- 세션 스토어 구성을 위해 `connectionLimit`, `port`, `host`, `database`, `user`, `password`, `createDatabaseTable` 등의 옵션을 설정한다.
- `createDatabaseTable: true`로 설정하면 `sessions` 테이블이 자동 생성된다.
- `express-session` 설정의 `store` 속성에 생성한 스토어를 연결하면 로그인 시 세션 ID, 만료 시간, 데이터가 테이블에 저장된다.
- MySQL 외에도 MongoDB 등 다양한 데이터베이스용 세션 스토어 패키지를 활용할 수 있다.
