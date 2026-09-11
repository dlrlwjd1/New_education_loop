# T5 Phase 2 — 서버 프로그래밍

> 학부 교과 **서버프로그래밍(3학년 1학기, 이론실습병행 3학점)** · 선이수 = 인공지능 웹 개발 기초
> 교과목해설: "서버 애플리케이션의 설계와 구현을 다룬다. 서버 사이드 프로그래밍 언어, 서버 아키텍처, 데이터베이스 연동, API 개발 등의 기술을 배우며, 실습을 통해 효율적이고 확장 가능한 서버 애플리케이션을 개발하는 방법을 익힌다"

- 목표: 모델을 감싼 API 서버를 설계·구현하고, DB에 붙이고, 인증을 건다.
- 분량: 약 32시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- REST의 원칙을 대고, 자원(resource) 기준으로 엔드포인트를 설계한다
- 상태 코드·헤더·요청 본문을 상황에 맞게 고른다
- 라우팅·미들웨어·예외 처리를 계층으로 나눈다
- SQL과 NoSQL 중 무엇을 쓸지 데이터 형태를 근거로 고른다
- ORM으로 DB에 붙이고 스키마를 마이그레이션한다
- 인증(세션·JWT)을 붙이고 인가를 분리한다
- 서비스를 여러 개로 쪼갤 때의 장단점을 말한다

## 2-A. Node.js와 REST API

메인: RESTful Microservices Using Node.js and Express

- [ ] [03 Define the components of Node.js.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/01%20Server%20side%20JavaScript%20with%20Node.js/Module%201%20-%20Getting%20Started%20With%20JavaScript%20in%20Node.js/03%20Define%20the%20components%20of%20Node.js.md)
- [ ] [04 Describe User-Defined Modules.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/01%20Server%20side%20JavaScript%20with%20Node.js/Module%203%20-%20Build%20and%20Use%20Modules%20in%20Node.js/04%20Describe%20User-Defined%20Modules.md)
- [ ] [07 Use the event loop.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/01%20Server%20side%20JavaScript%20with%20Node.js/Module%204%20-%20Asynchronous%20Programming/07%20Use%20the%20event%20loop.md)
- [ ] [12 Use async-await.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/01%20Server%20side%20JavaScript%20with%20Node.js/Module%204%20-%20Asynchronous%20Programming/12%20Use%20async-await.md)
- [ ] [08 Implement stream and buffer.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/01%20Server%20side%20JavaScript%20with%20Node.js/Module%205%20-%20Working%20with%20File%20System%20using%20Node.js/08%20Implement%20stream%20and%20buffer.md)
- [ ] [07 Handle Errors in Asynchronous Programs.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/01%20Server%20side%20JavaScript%20with%20Node.js/Module%206%20-%20Error%20Handling%20and%20Debugging%20Node%20Applications/07%20Handle%20Errors%20in%20Asynchronous%20Programs.md)
- [ ] [10 Implement testing using Mocha and Chai.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/01%20Server%20side%20JavaScript%20with%20Node.js/Module%207%20-%20Unit%20Testing%20using%20Mocha%20and%20Chai/10%20Implement%20testing%20using%20Mocha%20and%20Chai.md)

- [ ] [04 Define the components of RESTful services.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/02%20Building%20RESTful%20APIs%20Using%20Node.js%20and%20Express/Module%201%20-%20Documenting%20and%20Building%20REST%20APIs%20using%20Vanilla%20Node.js/04%20Define%20the%20components%20of%20RESTful%20services.md) — **REST 5구성 요소**와 상태 코드
- [ ] [02 Explore the Express framework.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/02%20Building%20RESTful%20APIs%20Using%20Node.js%20and%20Express/Module%202%20-%20Building%20REST%20APIs%20using%20ExpressJS/02%20Explore%20the%20Express%20framework.md) — Express 특성과 `app.listen` 규칙
- [ ] [03 Define routes.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/02%20Building%20RESTful%20APIs%20Using%20Node.js%20and%20Express/Module%202%20-%20Building%20REST%20APIs%20using%20ExpressJS/03%20Define%20routes.md) — 라우트·쿼리 파라미터
- [ ] [07 Implement Middleware using Express.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/02%20Building%20RESTful%20APIs%20Using%20Node.js%20and%20Express/Module%202%20-%20Building%20REST%20APIs%20using%20ExpressJS/07%20Implement%20Middleware%20using%20Express.md) — **미들웨어와 호출 순서**
- [ ] [12 Document the API using Swagger.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/02%20Building%20RESTful%20APIs%20Using%20Node.js%20and%20Express/Module%202%20-%20Building%20REST%20APIs%20using%20ExpressJS/12%20Document%20the%20API%20using%20Swagger.md) — **Swagger/OpenAPI 문서화**
- [ ] [04 Describe how JWT works.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/02%20Building%20RESTful%20APIs%20Using%20Node.js%20and%20Express/Module%203%20-%20Securing%20REST%20APIs%20using%20JSON%20Web%20Tokens%20and%20OAuth/04%20Describe%20how%20JWT%20works.md) — **JWT 구조·클레임·동작**
- [ ] [09 Describe OAuth2.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/02%20Building%20RESTful%20APIs%20Using%20Node.js%20and%20Express/Module%203%20-%20Securing%20REST%20APIs%20using%20JSON%20Web%20Tokens%20and%20OAuth/09%20Describe%20OAuth2.md) — OAuth2 3요소와 4단계

## 2-B. 데이터베이스 연동

- [ ] [02 Explain ER Model and Data Normalization.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/03%20Implement%20Polyglot%20Persistence%20Using%20SQL%20and%20NoSQL%20Databases/Module%201%20-%20Eliminate%20Data%20Redundancy%20Using%20Relational%20Data%20Model/02%20Explain%20ER%20Model%20and%20Data%20Normalization.md) — **ER 모델·정규화·기본 키/외래 키**
- [ ] [05 Implement SQL commands to perform CRUD operations.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/03%20Implement%20Polyglot%20Persistence%20Using%20SQL%20and%20NoSQL%20Databases/Module%201%20-%20Eliminate%20Data%20Redundancy%20Using%20Relational%20Data%20Model/05%20Implement%20SQL%20commands%20to%20perform%20CRUD%20operations.md) — DDL·DML·DQL과 제약 조건 6가지
- [ ] [09 Build RESTful API using Node.js and MySQL database.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/03%20Implement%20Polyglot%20Persistence%20Using%20SQL%20and%20NoSQL%20Databases/Module%201%20-%20Eliminate%20Data%20Redundancy%20Using%20Relational%20Data%20Model/09%20Build%20RESTful%20API%20using%20Node.js%20and%20MySQL%20database.md) — `mysql` 드라이버와 **4계층 REST API**
- [ ] [02 Model data using MongoDB.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/03%20Implement%20Polyglot%20Persistence%20Using%20SQL%20and%20NoSQL%20Databases/Module%202%20-%20Minimizing%20Impedance%20Mismatch%20Using%20NoSQL%20Database/02%20Model%20data%20using%20MongoDB.md) — **임피던스 불일치**와 MongoDB 데이터 모델링
- [ ] [05 Make use of Mongo shell commands to perform CRUD operations.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/03%20Implement%20Polyglot%20Persistence%20Using%20SQL%20and%20NoSQL%20Databases/Module%202%20-%20Minimizing%20Impedance%20Mismatch%20Using%20NoSQL%20Database/05%20Make%20use%20of%20Mongo%20shell%20commands%20to%20perform%20CRUD%20operations.md) — shell CRUD 개관
- [ ] [11 Model application data to develop a schema-based solution using Mongoose.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/03%20Implement%20Polyglot%20Persistence%20Using%20SQL%20and%20NoSQL%20Databases/Module%202%20-%20Minimizing%20Impedance%20Mismatch%20Using%20NoSQL%20Database/11%20Model%20application%20data%20to%20develop%20a%20schema-based%20solution%20using%20Mongoose.md) — **Mongoose ODM**: 스키마→모델→문서
- [ ] [13 Build RESTful API using Node.js and MongoDB.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/03%20Implement%20Polyglot%20Persistence%20Using%20SQL%20and%20NoSQL%20Databases/Module%202%20-%20Minimizing%20Impedance%20Mismatch%20Using%20NoSQL%20Database/13%20Build%20RESTful%20API%20using%20Node.js%20and%20MongoDB.md) — MongoDB 4대 특징과 REST 구조

함께 보기: Meta Database Engineer `03`·`04` (MySQL을 정면으로 다룬다. SQL이 약하면 여기부터)

- [ ] [01 Introduction to the program.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%201%20-%20Intro%20to%20MySQL/01%20Introduction%20to%20the%20program.md)
- [ ] [02 Introduction to the course.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%201%20-%20Intro%20to%20MySQL/02%20Introduction%20to%20the%20course.md)
- [ ] [03 How Meta uses MySQL.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%201%20-%20Intro%20to%20MySQL/03%20How%20Meta%20uses%20MySQL.md)
- [ ] [04 Filtering data using AND, OR and NOT logical operators.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%201%20-%20Intro%20to%20MySQL/04%20Filtering%20data%20using%20AND,%20OR%20and%20NOT%20logical%20operators.md)
- [ ] [05 Filtering data using IN, BETWEEN and LIKE logical operators.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%201%20-%20Intro%20to%20MySQL/05%20Filtering%20data%20using%20IN,%20BETWEEN%20and%20LIKE%20logical%20operators.md)
- [ ] [06 MySQL aliases.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%201%20-%20Intro%20to%20MySQL/06%20MySQL%20aliases.md)
- [ ] [07 JOINS.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%201%20-%20Intro%20to%20MySQL/07%20JOINS.md)
- [ ] [08 INNER JOIN.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%201%20-%20Intro%20to%20MySQL/08%20INNER%20JOIN.md)
- [ ] [09 LEFT and RIGHT JOIN.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%201%20-%20Intro%20to%20MySQL/09%20LEFT%20and%20RIGHT%20JOIN.md)
- [ ] [10 SELF-JOIN.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%201%20-%20Intro%20to%20MySQL/10%20SELF-JOIN.md)
- [ ] [11 MySQL UNION operator.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%201%20-%20Intro%20to%20MySQL/11%20MySQL%20UNION%20operator.md)
- [ ] [12 MySQL GROUP BY.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%201%20-%20Intro%20to%20MySQL/12%20MySQL%20GROUP%20BY.md)
- [ ] [13 MySQL HAVING.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%201%20-%20Intro%20to%20MySQL/13%20MySQL%20HAVING.md)
- [ ] [14 Module summary - Intro to MySQL.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%201%20-%20Intro%20to%20MySQL/14%20Module%20summary%20-%20Intro%20to%20MySQL.md)
- [ ] [01 MySQL REPLACE statement.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%202%20-%20Updating%20databases%20and%20working%20with%20views/01%20MySQL%20REPLACE%20statement.md)
- [ ] [02 Constraints in MySQL.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%202%20-%20Updating%20databases%20and%20working%20with%20views/02%20Constraints%20in%20MySQL.md)
- [ ] [03 Constraints in practice.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%202%20-%20Updating%20databases%20and%20working%20with%20views/03%20Constraints%20in%20practice.md)
- [ ] [04 MySQL ALTER TABLE.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%202%20-%20Updating%20databases%20and%20working%20with%20views/04%20MySQL%20ALTER%20TABLE.md)
- [ ] [05 MySQL COPY TABLE.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%202%20-%20Updating%20databases%20and%20working%20with%20views/05%20MySQL%20COPY%20TABLE.md)
- [ ] [06 Subqueries in MySQL.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%202%20-%20Updating%20databases%20and%20working%20with%20views/06%20Subqueries%20in%20MySQL.md)
- [ ] [07 Subqueries and complex comparison operators.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%202%20-%20Updating%20databases%20and%20working%20with%20views/07%20Subqueries%20and%20complex%20comparison%20operators.md)
- [ ] [08 MySQL CREATE VIEW.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%202%20-%20Updating%20databases%20and%20working%20with%20views/08%20MySQL%20CREATE%20VIEW.md)
- [ ] [09 Module summary - Updating databases and working with views.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%202%20-%20Updating%20databases%20and%20working%20with%20views/09%20Module%20summary%20-%20Updating%20databases%20and%20working%20with%20views.md)
- [ ] [01 Numeric functions.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%203%20-%20Functions%20and%20MySQL%20stored%20procedures/01%20Numeric%20functions.md)
- [ ] [02 String functions.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%203%20-%20Functions%20and%20MySQL%20stored%20procedures/02%20String%20functions.md)
- [ ] [03 Date functions.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%203%20-%20Functions%20and%20MySQL%20stored%20procedures/03%20Date%20functions.md)
- [ ] [04 Comparison functions.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%203%20-%20Functions%20and%20MySQL%20stored%20procedures/04%20Comparison%20functions.md)
- [ ] [05 Control flow functions.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%203%20-%20Functions%20and%20MySQL%20stored%20procedures/05%20Control%20flow%20functions.md)
- [ ] [06 Stored procedures in MySQL.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%203%20-%20Functions%20and%20MySQL%20stored%20procedures/06%20Stored%20procedures%20in%20MySQL.md)
- [ ] [07 Module summary - Functions and MySQL stored procedures.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%203%20-%20Functions%20and%20MySQL%20stored%20procedures/07%20Module%20summary%20-%20Functions%20and%20MySQL%20stored%20procedures.md)
- [ ] [01 Course Recap.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%204%20-%20Graded%20assessment/01%20Course%20Recap.md)
- [ ] [02 Course wrap up.md](../../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%204%20-%20Graded%20assessment/02%20Course%20wrap%20up.md)

## 2-C. 구조화된 서버 프레임워크 — NestJS

메인: Fundamentals of NestJS → Mastering NestJS. **"확장 가능한 서버 애플리케이션"이라는 교과목해설의 표현에 가장 가까운 부분이다**

- [ ] [01 Introduction to the Course.md](../../../courses/mooc/Web%20and%20APIs/Fundamentals%20of%20NestJS/Module%201%20-%20Getting%20Started%20with%20NestJS/01%20Introduction%20to%20the%20Course.md)
- [ ] [02 Meet Your Instructor.md](../../../courses/mooc/Web%20and%20APIs/Fundamentals%20of%20NestJS/Module%201%20-%20Getting%20Started%20with%20NestJS/02%20Meet%20Your%20Instructor.md)
- [ ] [03 What You Will Learn in This Lesson.md](../../../courses/mooc/Web%20and%20APIs/Fundamentals%20of%20NestJS/Module%201%20-%20Getting%20Started%20with%20NestJS/03%20What%20You%20Will%20Learn%20in%20This%20Lesson.md)
- [ ] [04 Overview of NestJS.md](../../../courses/mooc/Web%20and%20APIs/Fundamentals%20of%20NestJS/Module%201%20-%20Getting%20Started%20with%20NestJS/04%20Overview%20of%20NestJS.md)
- [ ] [05 Setting Up the Development Environment.md](../../../courses/mooc/Web%20and%20APIs/Fundamentals%20of%20NestJS/Module%201%20-%20Getting%20Started%20with%20NestJS/05%20Setting%20Up%20the%20Development%20Environment.md)
- [ ] [06 Exploring the Project Structure.md](../../../courses/mooc/Web%20and%20APIs/Fundamentals%20of%20NestJS/Module%201%20-%20Getting%20Started%20with%20NestJS/06%20Exploring%20the%20Project%20Structure.md)
- [ ] [07 What You Will Learn in This Lesson.md](../../../courses/mooc/Web%20and%20APIs/Fundamentals%20of%20NestJS/Module%201%20-%20Getting%20Started%20with%20NestJS/07%20What%20You%20Will%20Learn%20in%20This%20Lesson.md)
- [ ] [08 Understanding Controllers.md](../../../courses/mooc/Web%20and%20APIs/Fundamentals%20of%20NestJS/Module%201%20-%20Getting%20Started%20with%20NestJS/08%20Understanding%20Controllers.md)
- [ ] [09 Route Parameters and Query Strings.md](../../../courses/mooc/Web%20and%20APIs/Fundamentals%20of%20NestJS/Module%201%20-%20Getting%20Started%20with%20NestJS/09%20Route%20Parameters%20and%20Query%20Strings.md)
- [ ] [10 Handling Requests and Responses.md](../../../courses/mooc/Web%20and%20APIs/Fundamentals%20of%20NestJS/Module%201%20-%20Getting%20Started%20with%20NestJS/10%20Handling%20Requests%20and%20Responses.md)
- [ ] [01 What You Will Learn in This Lesson.md](../../../courses/mooc/Web%20and%20APIs/Fundamentals%20of%20NestJS/Module%202%20-%20Services,%20Middleware,%20and%20Exception%20Filters/01%20What%20You%20Will%20Learn%20in%20This%20Lesson.md)
- [ ] [02 Creating Services.md](../../../courses/mooc/Web%20and%20APIs/Fundamentals%20of%20NestJS/Module%202%20-%20Services,%20Middleware,%20and%20Exception%20Filters/02%20Creating%20Services.md)
- [ ] [03 Using Providers.md](../../../courses/mooc/Web%20and%20APIs/Fundamentals%20of%20NestJS/Module%202%20-%20Services,%20Middleware,%20and%20Exception%20Filters/03%20Using%20Providers.md)
- [ ] [04 Modules and Service Scopes.md](../../../courses/mooc/Web%20and%20APIs/Fundamentals%20of%20NestJS/Module%202%20-%20Services,%20Middleware,%20and%20Exception%20Filters/04%20Modules%20and%20Service%20Scopes.md)
- [ ] [05 What You Will Learn in This Lesson.md](../../../courses/mooc/Web%20and%20APIs/Fundamentals%20of%20NestJS/Module%202%20-%20Services,%20Middleware,%20and%20Exception%20Filters/05%20What%20You%20Will%20Learn%20in%20This%20Lesson.md)
- [ ] [06 Understanding Middleware.md](../../../courses/mooc/Web%20and%20APIs/Fundamentals%20of%20NestJS/Module%202%20-%20Services,%20Middleware,%20and%20Exception%20Filters/06%20Understanding%20Middleware.md)
- [ ] [07 Exception Filters.md](../../../courses/mooc/Web%20and%20APIs/Fundamentals%20of%20NestJS/Module%202%20-%20Services,%20Middleware,%20and%20Exception%20Filters/07%20Exception%20Filters.md)
- [ ] [08 Putting It All Together.md](../../../courses/mooc/Web%20and%20APIs/Fundamentals%20of%20NestJS/Module%202%20-%20Services,%20Middleware,%20and%20Exception%20Filters/08%20Putting%20It%20All%20Together.md)

Mastering NestJS — 파이프·미들웨어·가드·인터셉터

- [ ] [01 Understanding Controllers.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%202%20-%20NestJS%20Fundamentals/01%20Understanding%20Controllers.md)
- [ ] [02 Controller Fundamentals - GET Handler.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%202%20-%20NestJS%20Fundamentals/02%20Controller%20Fundamentals%20-%20GET%20Handler.md)
- [ ] [03 Controller Fundamentals - Headers.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%202%20-%20NestJS%20Fundamentals/03%20Controller%20Fundamentals%20-%20Headers.md)
- [ ] [04 Controller Fundamentals - POST Handler.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%202%20-%20NestJS%20Fundamentals/04%20Controller%20Fundamentals%20-%20POST%20Handler.md)
- [ ] [05 Controller Fundamentals - POST Handler Part 2 with Modules.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%202%20-%20NestJS%20Fundamentals/05%20Controller%20Fundamentals%20-%20POST%20Handler%20Part%202%20with%20Modules.md)
- [ ] [06 Controller Fundamentals - Fetching Params.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%202%20-%20NestJS%20Fundamentals/06%20Controller%20Fundamentals%20-%20Fetching%20Params.md)
- [ ] [07 Controller Fundamentals - PUT Handler.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%202%20-%20NestJS%20Fundamentals/07%20Controller%20Fundamentals%20-%20PUT%20Handler.md)
- [ ] [08 Controller Fundamentals - PATCH Handler.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%202%20-%20NestJS%20Fundamentals/08%20Controller%20Fundamentals%20-%20PATCH%20Handler.md)
- [ ] [09 Controller Fundamentals - DELETE Handler.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%202%20-%20NestJS%20Fundamentals/09%20Controller%20Fundamentals%20-%20DELETE%20Handler.md)
- [ ] [10 Request Object.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%202%20-%20NestJS%20Fundamentals/10%20Request%20Object.md)
- [ ] [11 Response Object.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%202%20-%20NestJS%20Fundamentals/11%20Response%20Object.md)
- [ ] [12 Fetching Queries.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%202%20-%20NestJS%20Fundamentals/12%20Fetching%20Queries.md)
- [ ] [13 HttpCode vs Res Decorator.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%202%20-%20NestJS%20Fundamentals/13%20HttpCode%20vs%20Res%20Decorator.md)
- [ ] [14 HTTP Response Status.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%202%20-%20NestJS%20Fundamentals/14%20HTTP%20Response%20Status.md)

- [ ] [01 Introduction to Pipes.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%203%20-%20Working%20with%20Pipes/01%20Introduction%20to%20Pipes.md)
- [ ] [02 Built-in Pipes - ParseIntPipe.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%203%20-%20Working%20with%20Pipes/02%20Built-in%20Pipes%20-%20ParseIntPipe.md)
- [ ] [03 Built-in Pipes - ParseFloatPipe.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%203%20-%20Working%20with%20Pipes/03%20Built-in%20Pipes%20-%20ParseFloatPipe.md)
- [ ] [04 Built-in Pipes - ParseBoolPipe.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%203%20-%20Working%20with%20Pipes/04%20Built-in%20Pipes%20-%20ParseBoolPipe.md)
- [ ] [05 Built-in Pipes - ParseArrayPipe.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%203%20-%20Working%20with%20Pipes/05%20Built-in%20Pipes%20-%20ParseArrayPipe.md)
- [ ] [06 Built-in Pipes - ParseUUIDPipe.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%203%20-%20Working%20with%20Pipes/06%20Built-in%20Pipes%20-%20ParseUUIDPipe.md)
- [ ] [07 Built-in Pipes - ValidationPipe.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%203%20-%20Working%20with%20Pipes/07%20Built-in%20Pipes%20-%20ValidationPipe.md)
- [ ] [08 Validating Empty Fields.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%203%20-%20Working%20with%20Pipes/08%20Validating%20Empty%20Fields.md)
- [ ] [09 Validating Field Length.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%203%20-%20Working%20with%20Pipes/09%20Validating%20Field%20Length.md)
- [ ] [10 Custom Validation Messages.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%203%20-%20Working%20with%20Pipes/10%20Custom%20Validation%20Messages.md)
- [ ] [11 Validating Field Using IsEnum Validator.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%203%20-%20Working%20with%20Pipes/11%20Validating%20Field%20Using%20IsEnum%20Validator.md)
- [ ] [12 Validating Dates in NestJS.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%203%20-%20Working%20with%20Pipes/12%20Validating%20Dates%20in%20NestJS.md)
- [ ] [13 Validating Optional Fields.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%203%20-%20Working%20with%20Pipes/13%20Validating%20Optional%20Fields.md)
- [ ] [14 Validating Regex Pattern.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%203%20-%20Working%20with%20Pipes/14%20Validating%20Regex%20Pattern.md)
- [ ] [15 Creating a Custom Pipe.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%203%20-%20Working%20with%20Pipes/15%20Creating%20a%20Custom%20Pipe.md)
- [ ] [16 Understanding ArgumentMetadata - type.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%203%20-%20Working%20with%20Pipes/16%20Understanding%20ArgumentMetadata%20-%20type.md)
- [ ] [17 Assignment - Custom Pipe Handling Different Type Arguments.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%203%20-%20Working%20with%20Pipes/17%20Assignment%20-%20Custom%20Pipe%20Handling%20Different%20Type%20Arguments.md)
- [ ] [18 Understanding ArgumentMetadata - metatype.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%203%20-%20Working%20with%20Pipes/18%20Understanding%20ArgumentMetadata%20-%20metatype.md)
- [ ] [19 Understanding ArgumentMetadata - data.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%203%20-%20Working%20with%20Pipes/19%20Understanding%20ArgumentMetadata%20-%20data.md)
- [ ] [20 Implementing Global Pipes.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%203%20-%20Working%20with%20Pipes/20%20Implementing%20Global%20Pipes.md)

- [ ] [01 Introduction to Nest Middlewares.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%204%20-%20NestJS%20Middleware/01%20Introduction%20to%20Nest%20Middlewares.md)
- [ ] [02 Implementing Middleware.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%204%20-%20NestJS%20Middleware/02%20Implementing%20Middleware.md)
- [ ] [03 Registering a Middleware.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%204%20-%20NestJS%20Middleware/03%20Registering%20a%20Middleware.md)
- [ ] [04 Route-Specific Middleware.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%204%20-%20NestJS%20Middleware/04%20Route-Specific%20Middleware.md)
- [ ] [05 Assignment - Checking Content Type with Middleware.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%204%20-%20NestJS%20Middleware/05%20Assignment%20-%20Checking%20Content%20Type%20with%20Middleware.md)
- [ ] [06 Handling Route Wildcards.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%204%20-%20NestJS%20Middleware/06%20Handling%20Route%20Wildcards.md)
- [ ] [07 Middleware for Specific Route Handlers.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%204%20-%20NestJS%20Middleware/07%20Middleware%20for%20Specific%20Route%20Handlers.md)
- [ ] [08 Excluding Routes.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%204%20-%20NestJS%20Middleware/08%20Excluding%20Routes.md)
- [ ] [09 Controller-Driven Route Middleware.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%204%20-%20NestJS%20Middleware/09%20Controller-Driven%20Route%20Middleware.md)
- [ ] [10 Understanding Functional Middleware.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%204%20-%20NestJS%20Middleware/10%20Understanding%20Functional%20Middleware.md)
- [ ] [11 Applying Multiple Middlewares.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%204%20-%20NestJS%20Middleware/11%20Applying%20Multiple%20Middlewares.md)
- [ ] [12 Applying Global Middlewares.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%204%20-%20NestJS%20Middleware/12%20Applying%20Global%20Middlewares.md)
- [ ] [13 Assignment - Password Encryption Middleware.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%204%20-%20NestJS%20Middleware/13%20Assignment%20-%20Password%20Encryption%20Middleware.md)

- [ ] [01 Introduction to Guards.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%205%20-%20NestJS%20Guards/01%20Introduction%20to%20Guards.md)
- [ ] [02 Understanding Guard.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%205%20-%20NestJS%20Guards/02%20Understanding%20Guard.md)
- [ ] [03 Understanding ExecutionContext.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%205%20-%20NestJS%20Guards/03%20Understanding%20ExecutionContext.md)
- [ ] [04 Accessing Arguments with getArgs.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%205%20-%20NestJS%20Guards/04%20Accessing%20Arguments%20with%20getArgs.md)
- [ ] [05 Limiting Controller Access with Guard.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%205%20-%20NestJS%20Guards/05%20Limiting%20Controller%20Access%20with%20Guard.md)
- [ ] [06 Understanding switchToHttp Method.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%205%20-%20NestJS%20Guards/06%20Understanding%20switchToHttp%20Method.md)
- [ ] [07 Assignment - API Key Authorization.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%205%20-%20NestJS%20Guards/07%20Assignment%20-%20API%20Key%20Authorization.md)
- [ ] [08 Applying Multiple Guards.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%205%20-%20NestJS%20Guards/08%20Applying%20Multiple%20Guards.md)
- [ ] [09 Defining Custom Metadata.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%205%20-%20NestJS%20Guards/09%20Defining%20Custom%20Metadata.md)
- [ ] [10 Setting Custom Metadata - A Better Way.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%205%20-%20NestJS%20Guards/10%20Setting%20Custom%20Metadata%20-%20A%20Better%20Way.md)
- [ ] [11 Applying Role for Specific Handlers.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%205%20-%20NestJS%20Guards/11%20Applying%20Role%20for%20Specific%20Handlers.md)
- [ ] [12 Applying Multiple Roles.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%205%20-%20NestJS%20Guards/12%20Applying%20Multiple%20Roles.md)
- [ ] [13 Applying Global Guards.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%205%20-%20NestJS%20Guards/13%20Applying%20Global%20Guards.md)

- [ ] [01 Introduction to Interceptors.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%206%20-%20NestJS%20Interceptors/01%20Introduction%20to%20Interceptors.md)
- [ ] [02 Understanding Interceptor.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%206%20-%20NestJS%20Interceptors/02%20Understanding%20Interceptor.md)
- [ ] [03 Assignment - Transforming Response Data.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%206%20-%20NestJS%20Interceptors/03%20Assignment%20-%20Transforming%20Response%20Data.md)
- [ ] [04 Assignment - Modifying Request Headers.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%206%20-%20NestJS%20Interceptors/04%20Assignment%20-%20Modifying%20Request%20Headers.md)
- [ ] [05 Assignment - Hiding Sensitive Information.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%206%20-%20NestJS%20Interceptors/05%20Assignment%20-%20Hiding%20Sensitive%20Information.md)
- [ ] [06 Exception Mapping.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%206%20-%20NestJS%20Interceptors/06%20Exception%20Mapping.md)
- [ ] [07 Data Validation with Interceptor.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%206%20-%20NestJS%20Interceptors/07%20Data%20Validation%20with%20Interceptor.md)
- [ ] [08 Authentication and Authorization.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%206%20-%20NestJS%20Interceptors/08%20Authentication%20and%20Authorization.md)
- [ ] [09 Applying Global Interceptors.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%206%20-%20NestJS%20Interceptors/09%20Applying%20Global%20Interceptors.md)

DB 연동과 인증

- [ ] [01 Connecting to MySQL Database Using TypeORM.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%207%20-%20NestJS%20With%20MySQL/01%20Connecting%20to%20MySQL%20Database%20Using%20TypeORM.md)
- [ ] [02 Creating Entity with TypeORM.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%207%20-%20NestJS%20With%20MySQL/02%20Creating%20Entity%20with%20TypeORM.md)
- [ ] [03 Inserting Product Data - CRUD.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%207%20-%20NestJS%20With%20MySQL/03%20Inserting%20Product%20Data%20-%20CRUD.md)
- [ ] [04 Fetching the Product Data - CRUD.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%207%20-%20NestJS%20With%20MySQL/04%20Fetching%20the%20Product%20Data%20-%20CRUD.md)
- [ ] [05 Updating Product Record - CRUD.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%207%20-%20NestJS%20With%20MySQL/05%20Updating%20Product%20Record%20-%20CRUD.md)
- [ ] [06 Deleting Product Record - CRUD.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%207%20-%20NestJS%20With%20MySQL/06%20Deleting%20Product%20Record%20-%20CRUD.md)

- [ ] [01 Section Introduction.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/01%20Section%20Introduction.md)
- [ ] [02 Setting Up the Sign-Up Route.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/02%20Setting%20Up%20the%20Sign-Up%20Route.md)
- [ ] [03 Designing the Sign-Up Form.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/03%20Designing%20the%20Sign-Up%20Form.md)
- [ ] [04 Implementing Show-Hide Password Functionality.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/04%20Implementing%20Show-Hide%20Password%20Functionality.md)
- [ ] [05 Validating Password.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/05%20Validating%20Password.md)
- [ ] [06 Registering User to the Database.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/06%20Registering%20User%20to%20the%20Database.md)
- [ ] [07 Configuring Login Page.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/07%20Configuring%20Login%20Page.md)
- [ ] [08 Validating User - Sending Cookie.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/08%20Validating%20User%20-%20Sending%20Cookie.md)
- [ ] [09 Reading a Cookie.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/09%20Reading%20a%20Cookie.md)
- [ ] [10 Rendering DOM Based on Login Status.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/10%20Rendering%20DOM%20Based%20on%20Login%20Status.md)
- [ ] [11 Implementing Logout.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/11%20Implementing%20Logout.md)
- [ ] [12 Configuring Express Session.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/12%20Configuring%20Express%20Session.md)
- [ ] [13 Sending and Reading Session Cookie.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/13%20Sending%20and%20Reading%20Session%20Cookie.md)
- [ ] [14 Storing Sessions in MySQL.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/14%20Storing%20Sessions%20in%20MySQL.md)
- [ ] [15 Destroying the Session - Logout.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/15%20Destroying%20the%20Session%20-%20Logout.md)
- [ ] [16 Optimizing Session Storage.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/16%20Optimizing%20Session%20Storage.md)
- [ ] [17 Implementing JWT Token.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/17%20Implementing%20JWT%20Token.md)
- [ ] [18 Validating Request with Middleware.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/18%20Validating%20Request%20with%20Middleware.md)
- [ ] [19 Conditional Rendering with Token.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/19%20Conditional%20Rendering%20with%20Token.md)
- [ ] [20 Hashing the Password on Sign-Up.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/20%20Hashing%20the%20Password%20on%20Sign-Up.md)
- [ ] [21 Validating Login Credentials.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/21%20Validating%20Login%20Credentials.md)
- [ ] [22 Finalizing MyStore Application.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/22%20Finalizing%20MyStore%20Application.md)

- [ ] [01 Connecting to MongoDB Database.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2011%20-%20NestJS%20With%20MongoDB%20and%20Mongoose/01%20Connecting%20to%20MongoDB%20Database.md)
- [ ] [02 Creating a Schema.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2011%20-%20NestJS%20With%20MongoDB%20and%20Mongoose/02%20Creating%20a%20Schema.md)
- [ ] [03 Registering the Schema.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2011%20-%20NestJS%20With%20MongoDB%20and%20Mongoose/03%20Registering%20the%20Schema.md)
- [ ] [04 Create-Save Product to MongoDB.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2011%20-%20NestJS%20With%20MongoDB%20and%20Mongoose/04%20Create-Save%20Product%20to%20MongoDB.md)
- [ ] [05 Fetching Documents from MongoDB.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2011%20-%20NestJS%20With%20MongoDB%20and%20Mongoose/05%20Fetching%20Documents%20from%20MongoDB.md)
- [ ] [06 Updating a Document in MongoDB.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2011%20-%20NestJS%20With%20MongoDB%20and%20Mongoose/06%20Updating%20a%20Document%20in%20MongoDB.md)
- [ ] [07 Deleting a Document from MongoDB.md](../../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2011%20-%20NestJS%20With%20MongoDB%20and%20Mongoose/07%20Deleting%20a%20Document%20from%20MongoDB.md)

## 2-D. 서버 아키텍처

메인: Software Design and Architecture, `Course 4 - Service-Oriented Architecture`

- [ ] [01 4.1.1 – Introduction to Service-Oriented Architecture.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%201%20-%20Web%20Technologies/01%204.1.1%20%E2%80%93%20Introduction%20to%20Service-Oriented%20Architecture.md)
- [ ] [02 4.1.2 – Service Principles.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%201%20-%20Web%20Technologies/02%204.1.2%20%E2%80%93%20Service%20Principles.md)
- [ ] [03 4.1.3 - Web Systems Evolution.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%201%20-%20Web%20Technologies/03%204.1.3%20-%20Web%20Systems%20Evolution.md)
- [ ] [04 4.1.4 – Web Systems Architecture.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%201%20-%20Web%20Technologies/04%204.1.4%20%E2%80%93%20Web%20Systems%20Architecture.md)
- [ ] [05 4.1.5 – HTML - XML - JSON.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%201%20-%20Web%20Technologies/05%204.1.5%20%E2%80%93%20HTML%20-%20XML%20-%20JSON.md)
- [ ] [06 4.1.6 – HTTP.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%201%20-%20Web%20Technologies/06%204.1.6%20%E2%80%93%20HTTP.md)
- [ ] [07 4.1.7 – JavaScript.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%201%20-%20Web%20Technologies/07%204.1.7%20%E2%80%93%20JavaScript.md)
- [ ] [08 4.1.8 – Remote Procedure Call (RPC).md](../../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%201%20-%20Web%20Technologies/08%204.1.8%20%E2%80%93%20Remote%20Procedure%20Call%20%28RPC%29.md)
- [ ] [09 4.1.9 – Object Brokers.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%201%20-%20Web%20Technologies/09%204.1.9%20%E2%80%93%20Object%20Brokers.md)
- [ ] [01 4.2.1 – Introduction to Web Services.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%202%20-%20Web%20Services/01%204.2.1%20%E2%80%93%20Introduction%20to%20Web%20Services.md)
- [ ] [02 4.2.2 – Service Invocation (SOAP).md](../../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%202%20-%20Web%20Services/02%204.2.2%20%E2%80%93%20Service%20Invocation%20%28SOAP%29.md)
- [ ] [03 4.2.3 – Service Description (WSDL).md](../../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%202%20-%20Web%20Services/03%204.2.3%20%E2%80%93%20Service%20Description%20%28WSDL%29.md)
- [ ] [04 4.2.4 – Service Publication and Discovery (UDDI).md](../../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%202%20-%20Web%20Services/04%204.2.4%20%E2%80%93%20Service%20Publication%20and%20Discovery%20%28UDDI%29.md)
- [ ] [05 4.2.5 – Service Composition (BPEL).md](../../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%202%20-%20Web%20Services/05%204.2.5%20%E2%80%93%20Service%20Composition%20%28BPEL%29.md)
- [ ] [01 4.3.1 – Introduction to REST.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%203%20-%20REST%20Architecture%20for%20SOA/01%204.3.1%20%E2%80%93%20Introduction%20to%20REST.md)
- [ ] [02 4.3.2 – Designing a REST Service.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%203%20-%20REST%20Architecture%20for%20SOA/02%204.3.2%20%E2%80%93%20Designing%20a%20REST%20Service.md)
- [ ] [03 4.3.3 – Introduction to Microservices.md](../../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%203%20-%20REST%20Architecture%20for%20SOA/03%204.3.3%20%E2%80%93%20Introduction%20to%20Microservices.md)

마이크로서비스 패턴

- [ ] [02 Explain Monolithic Applications.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/04%20Build%20and%20Implement%20Microservices%20Patterns/Module%201%20-%20Building%20Microservices/02%20Explain%20Monolithic%20Applications.md) — 모놀리식의 8가지 단점과 확장 방식의 차이
- [ ] [03 Define Microservices.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/04%20Build%20and%20Implement%20Microservices%20Patterns/Module%201%20-%20Building%20Microservices/03%20Define%20Microservices.md) — **정의·장점 11가지·과제 4가지**
- [ ] [04 Explore the Microservices Architecture.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/04%20Build%20and%20Implement%20Microservices%20Patterns/Module%201%20-%20Building%20Microservices/04%20Explore%20the%20Microservices%20Architecture.md) — SOA와의 관계, 적합한 상황
- [ ] [02 Explore microservices communication.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/04%20Build%20and%20Implement%20Microservices%20Patterns/Module%202%20-%20Establishing%20Communication%20between%20Microservices/02%20Explore%20microservices%20communication.md) — **동기 vs 비동기**
- [ ] [03 Implement synchronous communication between microservices.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/04%20Build%20and%20Implement%20Microservices%20Patterns/Module%202%20-%20Establishing%20Communication%20between%20Microservices/03%20Implement%20synchronous%20communication%20between%20microservices.md) — customer·product·order 3서비스 구조
- [ ] [08 Explore asynchronous communication between microservices using RabbitMQ.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/04%20Build%20and%20Implement%20Microservices%20Patterns/Module%202%20-%20Establishing%20Communication%20between%20Microservices/08%20Explore%20asynchronous%20communication%20between%20microservices%20using%20RabbitMQ.md) — **RabbitMQ와 exchange**
- [ ] [10 Implement messaging using RabbitMQ.md](../../../courses/mooc/Web%20and%20APIs/RESTful%20Microservices%20Using%20Node.js%20and%20Express/04%20Build%20and%20Implement%20Microservices%20Patterns/Module%202%20-%20Establishing%20Communication%20between%20Microservices/10%20Implement%20messaging%20using%20RabbitMQ.md) — producer/consumer 구현

## 2-E. API 보호

함께 보기: Protecting and Managing APIs (인증·인가·레이트 리밋·게이트웨이)

- [ ] [01.Specialization Introduction.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/01.Specialization%20Introduction.md)
- [ ] [02.Course Introduction.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/02.Course%20Introduction.md)
- [ ] [03.Welcome to Protecting and Managing APIs.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/03.Welcome%20to%20Protecting%20and%20Managing%20APIs.md)
- [ ] [04.Protecting and Managing APIs - Self Check-In (Dialogue).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/04.Protecting%20and%20Managing%20APIs%20-%20Self%20Check-In%20%28Dialogue%29.md)
- [ ] [05.API Authentication Methods.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/05.API%20Authentication%20Methods.md)
- [ ] [06.Basic Authentication and API Keys.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/06.Basic%20Authentication%20and%20API%20Keys.md)
- [ ] [07.OAuth 2.0 and JWT.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/07.OAuth%202.0%20and%20JWT.md)
- [ ] [08.Demonstration - Implementing OAuth in an API.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/08.Demonstration%20-%20Implementing%20OAuth%20in%20an%20API.md)
- [ ] [09.Authentication Methods (Reading).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/09.Authentication%20Methods%20%28Reading%29.md)
- [ ] [01.Role-Based Access Control (RBAC).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%202%20-%20Authorization%20and%20Access%20Control/01.Role-Based%20Access%20Control%20%28RBAC%29.md)
- [ ] [02.Attribute-Based Access Control (ABAC).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%202%20-%20Authorization%20and%20Access%20Control/02.Attribute-Based%20Access%20Control%20%28ABAC%29.md)
- [ ] [03.Scopes in Oauth.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%202%20-%20Authorization%20and%20Access%20Control/03.Scopes%20in%20Oauth.md)
- [ ] [04.Fine-Grained Access Control & Auditing.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%202%20-%20Authorization%20and%20Access%20Control/04.Fine-Grained%20Access%20Control%20&%20Auditing.md)
- [ ] [05.Demonstration - Setting Up RBAC for an API.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%202%20-%20Authorization%20and%20Access%20Control/05.Demonstration%20-%20Setting%20Up%20RBAC%20for%20an%20API.md)
- [ ] [06.Comparing RBAC and ABAC (Reading).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%202%20-%20Authorization%20and%20Access%20Control/06.Comparing%20RBAC%20and%20ABAC%20%28Reading%29.md)
- [ ] [01.Common API Attacks Overview.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%203%20-%20Securing%20APIs%20Against%20Threats/01.Common%20API%20Attacks%20Overview.md)
- [ ] [02.Injection Attacks.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%203%20-%20Securing%20APIs%20Against%20Threats/02.Injection%20Attacks.md)
- [ ] [03.Man-in-the-Middle & DoS Attacks.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%203%20-%20Securing%20APIs%20Against%20Threats/03.Man-in-the-Middle%20&%20DoS%20Attacks.md)
- [ ] [04.Security Best Practices & Preventive Measures.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%203%20-%20Securing%20APIs%20Against%20Threats/04.Security%20Best%20Practices%20&%20Preventive%20Measures.md)
- [ ] [05.Demonstration - Conducting Security Testing on an API (Part 1 - script.js and index.html Setup).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%203%20-%20Securing%20APIs%20Against%20Threats/05.Demonstration%20-%20Conducting%20Security%20Testing%20on%20an%20API%20%28Part%201%20-%20script.js%20and%20index.html%20Setup%29.md)
- [ ] [06.Demonstration - Conducting Security Testing on an API (Part 2 - Vulnerable and Hardened Server Setup).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%203%20-%20Securing%20APIs%20Against%20Threats/06.Demonstration%20-%20Conducting%20Security%20Testing%20on%20an%20API%20%28Part%202%20-%20Vulnerable%20and%20Hardened%20Server%20Setup%29.md)
- [ ] [07.Demonstration - Conducting Security Testing on an API (Part 3 - Final Execution).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%203%20-%20Securing%20APIs%20Against%20Threats/07.Demonstration%20-%20Conducting%20Security%20Testing%20on%20an%20API%20%28Part%203%20-%20Final%20Execution%29.md)
- [ ] [08.Understanding and Preventing the OWASP Top API Security Threats.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%203%20-%20Securing%20APIs%20Against%20Threats/08.Understanding%20and%20Preventing%20the%20OWASP%20Top%20API%20Security%20Threats.md)
- [ ] [01.Data Encryption & HTTPS.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%204%20-%20Encryption%20and%20Compliance/01.Data%20Encryption%20&%20HTTPS.md)
- [ ] [02.Encrypting Sensitive Data & Compliance Standards.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%204%20-%20Encryption%20and%20Compliance/02.Encrypting%20Sensitive%20Data%20&%20Compliance%20Standards.md)
- [ ] [03.Demonstration - Implementing HTTPS for an API.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%204%20-%20Encryption%20and%20Compliance/03.Demonstration%20-%20Implementing%20HTTPS%20for%20an%20API.md)
- [ ] [04.Encryption and Compliance (Reading).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%204%20-%20Encryption%20and%20Compliance/04.Encryption%20and%20Compliance%20%28Reading%29.md)
- [ ] [01.Summary of API Security Fundamentals.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%205%20-%20Module%20Wrap-Up%20and%20Assessment/01.Summary%20of%20API%20Security%20Fundamentals.md)
- [ ] [02.Practice Project - Building a Secure and Compliant Healthcare API Ecosystem.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%205%20-%20Module%20Wrap-Up%20and%20Assessment/02.Practice%20Project%20-%20Building%20a%20Secure%20and%20Compliant%20Healthcare%20API%20Ecosystem.md)
- [ ] [01.What is an API Gateway.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%201%20-%20API%20Gateways/01.What%20is%20an%20API%20Gateway.md)
- [ ] [02.Popular API Gateways.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%201%20-%20API%20Gateways/02.Popular%20API%20Gateways.md)
- [ ] [03.Routing and Proxying.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%201%20-%20API%20Gateways/03.Routing%20and%20Proxying.md)
- [ ] [04.Introduction to API Gateways (Reading).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%201%20-%20API%20Gateways/04.Introduction%20to%20API%20Gateways%20%28Reading%29.md)
- [ ] [05.Kong API Gateway with Python (Reading).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%201%20-%20API%20Gateways/05.Kong%20API%20Gateway%20with%20Python%20%28Reading%29.md)
- [ ] [01.Why Monitor APIs & Logging Best Practices.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%202%20-%20Monitoring%20and%20Analytics/01.Why%20Monitor%20APIs%20&%20Logging%20Best%20Practices.md)
- [ ] [02.Monitoring Tools, Alerting & Analytics.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%202%20-%20Monitoring%20and%20Analytics/02.Monitoring%20Tools,%20Alerting%20&%20Analytics.md)
- [ ] [03.Demonstration - Implementing Monitoring for an API.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%202%20-%20Monitoring%20and%20Analytics/03.Demonstration%20-%20Implementing%20Monitoring%20for%20an%20API.md)
- [ ] [04.API Usage & Key Metrics.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%202%20-%20Monitoring%20and%20Analytics/04.API%20Usage%20&%20Key%20Metrics.md)
- [ ] [05.Dashboards and A-B Testing for APIs.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%202%20-%20Monitoring%20and%20Analytics/05.Dashboards%20and%20A-B%20Testing%20for%20APIs.md)
- [ ] [06.Improving API Adoption.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%202%20-%20Monitoring%20and%20Analytics/06.Improving%20API%20Adoption.md)
- [ ] [07.Demonstration - Setting Up Analytics for an API.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%202%20-%20Monitoring%20and%20Analytics/07.Demonstration%20-%20Setting%20Up%20Analytics%20for%20an%20API.md)
- [ ] [08.API Monitoring and Analytics (Reading).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%202%20-%20Monitoring%20and%20Analytics/08.API%20Monitoring%20and%20Analytics%20%28Reading%29.md)
- [ ] [01.Turning APIs into Products.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%203%20-%20API%20Productization/01.Turning%20APIs%20into%20Products.md)
- [ ] [02.API Monetization.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%203%20-%20API%20Productization/02.API%20Monetization.md)
- [ ] [03.Developer Portals & API Marketplaces.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%203%20-%20API%20Productization/03.Developer%20Portals%20&%20API%20Marketplaces.md)
- [ ] [04.Governance in API Ecosystem.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%203%20-%20API%20Productization/04.Governance%20in%20API%20Ecosystem.md)
- [ ] [05.Demonstration - Creating a Developer Portal for an API.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%203%20-%20API%20Productization/05.Demonstration%20-%20Creating%20a%20Developer%20Portal%20for%20an%20API.md)
- [ ] [06.API Productization (Reading).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%203%20-%20API%20Productization/06.API%20Productization%20%28Reading%29.md)
- [ ] [01.Summary of API Management and Monitoring.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%204%20-%20Module%20Wrap-Up%20and%20Assessment/01.Summary%20of%20API%20Management%20and%20Monitoring.md)
- [ ] [02.Practice Project - Modern API Management with Monitoring and Analytics.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%204%20-%20Module%20Wrap-Up%20and%20Assessment/02.Practice%20Project%20-%20Modern%20API%20Management%20with%20Monitoring%20and%20Analytics.md)
- [ ] [01.Practice Project - Building a Secure and Scalable API Management Platform.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%203%20-%20Course%20Wrap-Up%20and%20Assessment/01.Practice%20Project%20-%20Building%20a%20Secure%20and%20Scalable%20API%20Management%20Platform.md)
- [ ] [02.The Case of the Compromised API Key (Dialogue).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%203%20-%20Course%20Wrap-Up%20and%20Assessment/02.The%20Case%20of%20the%20Compromised%20API%20Key%20%28Dialogue%29.md)
- [ ] [03.Course Summary - Protecting and Managing APIs.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%203%20-%20Course%20Wrap-Up%20and%20Assessment/03.Course%20Summary%20-%20Protecting%20and%20Managing%20APIs.md)

## 산출물

**[T3](../T3%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D%EA%B3%BC%20%EB%94%A5%EB%9F%AC%EB%8B%9D/README.md)·[T4](../T4%20%EC%9D%91%EC%9A%A9%20AI%20%EC%96%B8%EC%96%B4%20%EC%8B%9C%EA%B0%81%20%EB%A1%9C%EB%B4%87/README.md)에서 만든 모델을 감싼 API 서버 하나.**

1. 엔드포인트 설계 문서 — 자원·메서드·상태 코드·요청/응답 예시
2. 예측 요청과 결과를 DB에 저장 (나중에 성능 모니터링의 재료가 된다)
3. 인증 — API 키나 JWT 중 하나
4. 에러 처리 — 잘못된 입력·모델 실패·타임아웃 각각에 다른 상태 코드
5. [Phase 1](01%20Phase%201%20-%20%EC%9B%B9%20%EA%B0%9C%EB%B0%9C%20%EA%B8%B0%EC%B4%88%EC%99%80%20%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8.md)의 웹 페이지를 이 서버에 붙여 동작 확인

## 다음 단계

→ [03 Phase 3 - 인공지능 앱 개발](03%20Phase%203%20-%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%95%B1%20%EA%B0%9C%EB%B0%9C.md)
