# Build RESTful API using Node.js and MySQL database

## 개요
- Node.js를 MySQL에 연결하는 4단계, SRP에 따른 REST API의 4계층 구조, 샘플 파일 구성, MySQL의 주요 특징을 다루는 강의

## 내용

### Node.js ↔ MySQL 연결 4단계
1. **새 프로젝트 폴더**를 만들고 `npm init -y`로 `package.json`을 생성해 필요한 의존성을 추가한다.
2. 데이터베이스 접근을 돕는 **MySQL용 Node.js 드라이버**를 `npm install mysql`로 설치한다.
3. MySQL 모듈로 **연결을 생성**한다 — `mysql.createConnection`에 **호스트 이름, 사용자 이름, 비밀번호**를 넘긴다.
4. SQL 문으로 **데이터베이스를 질의**해 읽거나 쓴다.

### 질의 예시의 흐름
- 연결 파라미터를 제공해 Node.js 애플리케이션을 MySQL과 연결한다.
- 데이터베이스 서버에 연결할 수 없으면 **오류 메시지를 콘솔에 로그**한다.
- 연결에 성공하면 **`query` 메서드**로 MySQL `CREATE` 질의를 실행해 `customer` 테이블을 만든다.
- 테이블 생성에 성공하면 "table created" 메시지를 콘솔에 로그한다.

### REST API 구조화 모범 사례 — 4계층
- **단일 책임 원칙(SRP, Single Responsibility Principle)** — 각 코드는 **하나의 책임만** 처리해야 한다.
- 이 원칙에 따라 애플리케이션을 **계층(layer)으로 분리**하는 것이 좋은 관행이다. 계층 분리는 코드가 애플리케이션에서 수행하는 기능에 따른다.
- 전형적인 REST API 솔루션은 **4계층**으로 나눈다:

| 계층 | 역할 |
|---|---|
| **REST API / 라우트(route) 계층** | 요청을 적절한 컨트롤러 함수로 전달한다. 코드를 모듈화하려면 **router 메서드**를 쓰고, **모든 라우트 핸들러를 `app.js`가 아닌 별도 `.js` 파일에 정의**한다. `app.js`는 애플리케이션의 진입점이며 모든 사용자에게 열려 있다 |
| **컨트롤러(controller) 계층** | router 메서드에 넘겨지는 **콜백 함수** |
| **서비스(service) 계층** | 애플리케이션의 **모든 비즈니스 로직**을 처리한다 |
| **DAO(Data Access Object) 계층** | 데이터 자원에 대한 연산 — 데이터 조회, 갱신, 특정 자원 삭제 |

### 샘플 파일 구성
| 파일 | 역할 |
|---|---|
| `app.js` | 애플리케이션 진입점. `product.routes.js`를 호출한다 |
| `product.routes.js` | 모든 라우트를 담는다 |
| `product.controller.js` | 들어오는 요청을 처리하고 응답을 반환한다 |
| `product.dao.js` | 데이터에 대한 모든 조작을 수행한다 |
| `db.js` | config 파라미터로 MySQL 연결을 확립하는 코드 |

### MySQL의 주요 특징
- **오픈소스** — 누구나 다운로드·사용·수정할 수 있다.
- **여러 운영체제와 호환**된다.
- **독특한 스토리지 엔진 아키텍처** 덕분에 순수 RDBMS 소프트웨어보다 **더 빠르고, 더 신뢰성 있고, 더 저렴**하다.
- **유연한 비밀번호 시스템**으로 안전한 인터페이스를 제공한다 — 데이터베이스 접근 전에 **호스트 기준으로 검증**한다.
- **트랜잭션·비트랜잭션 스토리지 엔진**을 모두 제공한다.
- **빠른 스레드 기반 메모리 할당 시스템**을 사용한다.

## 예시
```bash
mkdir mysql-api && cd mysql-api
npm init -y
npm install mysql
```

```javascript
// db.js — 연결 생성 (3단계)
const mysql = require('mysql');

const connection = mysql.createConnection({
  host:     'localhost',
  user:     'root',
  password: 'your_password',
  database: 'sample',
});

connection.connect((err) => {
  if (err) {
    console.log('Could not connect to database server:', err);
    return;
  }
  console.log('Connected to MySQL');

  // 4단계: 질의
  const sql = 'CREATE TABLE customer (name VARCHAR(255), address VARCHAR(255))';
  connection.query(sql, (err) => {
    if (err) throw err;
    console.log('table created');
  });
});

module.exports = connection;
```

```text
4계층 구조 (SRP)
app.js  ──→  product.routes.js  ──→  product.controller.js  ──→  (service)  ──→  product.dao.js  ──→  db.js ──→ MySQL
진입점       라우트 계층              컨트롤러 계층              비즈니스 로직      DAO 계층           연결
```

## 요약
- Node.js는 `npm install mysql`로 드라이버를 설치하고 `mysql.createConnection`에 호스트·사용자·비밀번호를 넘겨 연결한 뒤 `query`로 SQL을 실행한다.
- SRP에 따라 REST API를 라우트·컨트롤러·서비스·DAO 4계층으로 나누고, 라우트 핸들러는 `app.js`가 아닌 별도 파일에 둔다.
- MySQL은 오픈소스이며 독특한 스토리지 엔진 아키텍처, 호스트 기준 비밀번호 검증, 트랜잭션·비트랜잭션 엔진, 스레드 기반 메모리 할당이 특징이다.
