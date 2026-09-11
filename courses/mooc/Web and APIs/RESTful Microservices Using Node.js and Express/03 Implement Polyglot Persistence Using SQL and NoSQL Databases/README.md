# Implement Polyglot Persistence Using SQL and NoSQL Databases

**Course URL:** [mooc.org/learn/implement-polyglot-persistence-using-sql-and-nosql-databases](https://www.mooc.org/learn/implement-polyglot-persistence-using-sql-and-nosql-databases)

NIIT의 `RESTful Microservices Using Node.js and Express` 전문과정 3번째 강좌. 정보 시스템의 백엔드 계층을 두 종류의 데이터베이스로 구현한다 — **Module 1** 은 관계형 모델(ER·정규화)과 **MySQL** 로 중복을 없애고, **Module 2** 는 **MongoDB** 와 **Mongoose** 로 REST 계층(JSON)과 저장소 사이의 **임피던스 불일치(impedance mismatch)** 를 줄인다. 두 모듈 모두 Node.js 4계층 REST API(라우트·컨트롤러·서비스·DAO)로 마무리한다.

- 구성: 2개 모듈 · 영상 39개
- 수집 상태: 영상 **37개** Transcript 정리 완료 (2026-09-06)
- 미확인 2개: 각 모듈의 `Learning Consolidation` — 영어 자막이 제공되지 않아 상태만 기록했다
- 제외: 읽기 자료 3개, 채점 프로그래밍 과제 4개(`Keep Note MySQL Queries`·`Keep Note – Integration with Node.js`·`Web Ink`·`Pin2Piano`), 채점 평가 2개의 정답 및 제출

## 모듈 구성

- [Module 1 - Eliminate Data Redundancy Using Relational Data Model](Module%201%20-%20Eliminate%20Data%20Redundancy%20Using%20Relational%20Data%20Model/) — 3계층 정보 시스템, ER 모델과 정규화, MySQL 설치, DDL·DML·DQL과 제약 조건, Workbench 실습, `mysql` 드라이버 연결, Node.js + MySQL 상품 CRUD API(2부 시연), Keep Note 연습·도전 과제
- [Module 2 - Minimizing Impedance Mismatch Using NoSQL Database](Module%202%20-%20Minimizing%20Impedance%20Mismatch%20Using%20NoSQL%20Database/) — 임피던스 불일치의 세 원인, MongoDB 데이터 모델링(내장 문서·배열, BSON), 설치와 Compass, shell CRUD(3부 시연), Node 드라이버와 Mongoose 연결, Mongoose 스키마 기반 REST API(4부 시연), WebInk·Pin2Piano 연습·도전 과제

## 강의 목록

### Module 1 - Eliminate Data Redundancy Using Relational Data Model
1. **Context Setting**
2. [Explain ER Model and Data Normalization](Module%201%20-%20Eliminate%20Data%20Redundancy%20Using%20Relational%20Data%20Model/02%20Explain%20ER%20Model%20and%20Data%20Normalization.md)
3. **Demonstrate MySQL installation**
4. **Watch and Repeat - Download and Install MySQL**
5. [Implement SQL commands to perform CRUD operations](Module%201%20-%20Eliminate%20Data%20Redundancy%20Using%20Relational%20Data%20Model/05%20Implement%20SQL%20commands%20to%20perform%20CRUD%20operations.md)
6. **Watch and Repeat - Create database and tables using DDL commands**
7. **Watch and Repeat - Manipulate data using DML commands**
8. **Watch and Repeat - Retrieve data using DQL commands**
9. [Build RESTful API using Node.js and MySQL database](Module%201%20-%20Eliminate%20Data%20Redundancy%20Using%20Relational%20Data%20Model/09%20Build%20RESTful%20API%20using%20Node.js%20and%20MySQL%20database.md)
10. **Watch and Repeat - Integrate MySQL with Node.js using Node.js driver for MySQL**
11. **Watch and Repeat - Build REST API Using Node.js and MySQL Part1**
12. **Watch and Repeat - Build REST API Using Node.js and MySQL Part2**
13. **Practice Brief** — Keep Note MySQL Queries
14. **Practice Debrief**
15. **Challenge Brief** — Keep Note – Integration with Node.js
16. **Challenge Debrief**
17. **Learning Consolidation** — 자막 없음, 상태만 기록

### Module 2 - Minimizing Impedance Mismatch Using NoSQL Database
1. **Context Setting**
2. [Model data using MongoDB](Module%202%20-%20Minimizing%20Impedance%20Mismatch%20Using%20NoSQL%20Database/02%20Model%20data%20using%20MongoDB.md)
3. **Demonstrate MongoDB installation**
4. **Watch and Repeat - Installing Mongo**
5. [Make use of Mongo shell commands to perform CRUD operations](Module%202%20-%20Minimizing%20Impedance%20Mismatch%20Using%20NoSQL%20Database/05%20Make%20use%20of%20Mongo%20shell%20commands%20to%20perform%20CRUD%20operations.md)
6. **Watch and Repeat - CRUD With MongoDB Shell Commands Part1**
7. **Watch and Repeat - CRUD With MongoDB Shell Commands Part2**
8. **Watch and Repeat - CRUD With MongoDB Shell Commands Part3**
9. **Utilize the MongoDB Node driver to establish a connection with the Node.js application**
10. **Watch and Repeat - Integrate MongoDB With Node.js Using MongoDB Node Driver**
11. [Model application data to develop a schema-based solution using Mongoose](Module%202%20-%20Minimizing%20Impedance%20Mismatch%20Using%20NoSQL%20Database/11%20Model%20application%20data%20to%20develop%20a%20schema-based%20solution%20using%20Mongoose.md)
12. **Watch and Repeat - Integrating MongoDB With Node.js using Mongoose**
13. [Build RESTful API using Node.js and MongoDB](Module%202%20-%20Minimizing%20Impedance%20Mismatch%20Using%20NoSQL%20Database/13%20Build%20RESTful%20API%20using%20Node.js%20and%20MongoDB.md)
14. **Watch and Repeat - Building REST API Using Node.js and MongoDB Part1**
15. **Watch and Repeat - Building REST API Using Node.js and MongoDB Part2**
16. **Watch and Repeat - Building REST API Using Node.js and MongoDB Part3**
17. **Watch and Repeat - Building REST API Using Node.js and MongoDB Part4**
18. **Practice Brief** — Web Ink
19. **Practice Debrief**
20. **Challenge Brief** — Pin2Piano
21. **Challenge Debrief**
22. **Learning Consolidation** — 자막 없음, 상태만 기록

## 핵심 개념 요약

- **3계층 정보 시스템** — 프런트엔드(모바일·웹·데스크톱) → 미들웨어(REST API) → 백엔드(데이터베이스). 이 강좌는 백엔드 계층을 다루며, 데이터 영속이 정보 시스템의 핵심 책임이다.
- **ER 모델** — 엔터티·속성·관계 타입·카디널리티 4요소. 관계는 일대일·일대다·다대다. **중복**은 삭제해도 정보가 손실되지 않는 불필요한 복제이며 수정 누락으로 불일치를 낳는다. **정규화**는 큰 테이블을 덜 중복된 테이블로 나누고 **기본 키**(null 아닌 고유 값)와 **외래 키**(참조 대상에 존재하는 값)로 잇는 것이다.
- **SQL 분류** — DDL(`CREATE`·`ALTER`·`DROP`, 영구), DML(`INSERT`·`UPDATE`·`DELETE`, 비자동 커밋), DQL(`SELECT`). 제약 조건 6가지: PRIMARY KEY·UNIQUE·NOT NULL·FOREIGN KEY·CHECK·DEFAULT. **`UPDATE`·`DELETE`에 `WHERE`가 없으면 모든 행에 적용**된다.
- **MySQL** — 기본 포트 3306, Community/Enterprise 에디션, Workbench가 GUI IDE. Node.js는 `mysql` 드라이버의 `createConnection` → `query`로 연결하며 동적 값은 **`?` 자리표시자**, 영향받은 행 수는 `results.affectedRows`, 종료는 `end`. 프로덕션은 **커넥션 풀**.
- **4계층 REST API (SRP)** — 라우트(`app.js` 밖 별도 파일) → 컨트롤러(콜백) → 서비스(비즈니스 로직) → DAO(데이터 연산). MySQL 판과 MongoDB 판 모두 같은 구조를 쓴다.
- **임피던스 불일치** — 애플리케이션과 저장소의 데이터가 **형식**(JSON vs 테이블)·**저장 설계**(객체 vs 여러 테이블)·**구조**(유연 vs 엄격)에서 맞지 않는 마찰. MongoDB는 JSON 유사 저장·**내장 문서**·**스키마리스**로 각각에 대응한다.
- **MongoDB 구조** — 데이터베이스 → 컬렉션(≈테이블) → 문서(≈행, **BSON**, ≤16MB). BSON은 JSON의 상위 집합으로 date·binary를 추가하고 기계만 읽는다. 모델링은 데이터셋 정의 → JSON으로 생각 → **내장 문서·내장 배열 후보 식별**. 함께 접근하는 데이터는 함께(내장) 저장하되, 다대일이면서 16MB에 걸리면 **참조**를 쓴다.
- **shell CRUD** — `insertOne`/`insertMany`(컬렉션은 첫 삽입에 생성, `_id` 자동), `find`(빈 필터=전체, 점 표기법으로 내장 필드, `$lt`·`$gt`·`$or`·`$size`, 나열=AND, `pretty`), 프로젝션(1 포함·0 제외, `_id`만 섞기 가능), `updateOne`/`updateMany` + `$set`, `deleteOne`(첫 일치)/`deleteMany`/`remove(justOne)`. `delete`와 `remove`는 반환값만 다르다.
- **Node 드라이버 vs Mongoose** — 드라이버(`mongodb` 패키지, `MongoClient`, `mongodb://localhost:27017`)는 연결·인증·CRUD·관찰을 지원하지만 제약을 걸 수 없다. **Mongoose(ODM)** 는 드라이버 위에서 **스키마→모델→문서**를 제공하며 8가지 타입(String·Number·Date·Buffer·Boolean·Mixed·ObjectId·Array)에 `required`·`unique`·`enum`·기본값·검증 함수·GET/SET·인덱스를 붙인다. 초기 연결 오류(자동 재연결 없음, `.catch`), 연결 후 오류(`error` 이벤트), 끊김(`disconnected` 이벤트)을 각각 처리한다.
- **Mongoose REST API** — `save`(Mongoose가 `_id`와 버전 키 `__v`를 추가), `find(filter).select({...}).lean().exec()`(`lean`은 순수 JSON으로 더 빠르고 가볍다), `findOneAndUpdate(filter, data, { new: true }, cb)`(`new: true`여야 수정된 문서 반환).
- **MongoDB 4대 특징** — 고성능(내장 구조로 I/O 감소, 인덱스), 풍부한 질의(집계·검색), 고가용성(**레플리카 셋**, 자동 failover), 수평 확장(클러스터 분산).

> 2026-09-06: 이 강좌는 이전에 `01 Integrated Course Notes.md` 통합 노트 하나(1.4KB)만 있었다. MOOC 커리큘럼 기준으로 영상 39개를 확인해 강의별 노트로 대체했다.
