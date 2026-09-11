# Advanced MySQL Topics

Meta Database Engineer 전문 자격증의 네 번째 강좌. 복합 저장 프로시저·사용자 정의 함수, 트리거와 예약 이벤트, 데이터베이스 최적화(인덱스·트랜잭션·CTE·준비된 문·JSON), 데이터 분석용 MySQL(FULL OUTER JOIN 에뮬레이션 포함)을 다룬다.

- 강좌: https://www.mooc.org/learn/advanced-mysql-topics
- 구성: 학습 모듈 3개 + 최종 프로젝트 모듈 1개, 강의 영상 27개
- 노트: 강의별 Transcript 기반 한국어 정리 (형식: 개요/내용/예시/요약, 기술 용어 영어 병기)
- 제외: 읽기 자료·퀴즈·채점 평가 (학업 정직성 정책)

## 모듈 구성

### Module 1 - Functions and Triggers (10강)

강좌 소개, 함수 vs 프로시저(매개변수·반환·용도 차이), 변수(SET·DECLARE·:=)와 매개변수(IN/OUT/INOUT), 사용자 정의 함수(DELIMITER·BEGIN/END), 복합 프로시저, 트리거 개념·유형(BEFORE/AFTER × INSERT/UPDATE/DELETE)·생성/삭제(NEW·OLD), 예약 이벤트(AT/EVERY).

### Module 2 - Database Optimization (9강)

최적화 개관(검색 문 vs 변경 문), SELECT 최적화 5원칙과 실전 적용, 인덱스(기본/2차, EXPLAIN), 트랜잭션(START TRANSACTION·COMMIT·ROLLBACK), CTE(WITH), 준비된 문(PREPARE·EXECUTE USING), JSON 타입.

### Module 3 - MySQL for Data Analytics (6강)

데이터 분석학 개관과 분석 유형 5가지, 분석 도구로서 MySQL의 장단점, SQL 쿼리(서브쿼리·조인·뷰) 기반 분석, FULL OUTER JOIN 에뮬레이션(LEFT+RIGHT+UNION), 3중 테이블 JOIN 분석.

### Module 4 - Final Project (2강)

강좌 총정리와 수료 마무리. 랩 프로젝트·채점 평가는 정리 제외.

## 강의 목록

<!-- course-inventory:start -->
### Module 1 - Functions and Triggers

- [01 Introduction to advanced MySQL topics](Module%201%20-%20Functions%20and%20Triggers/01%20Introduction%20to%20advanced%20MySQL%20topics.md)
- [02 Functions and stored procedures in MySQL](Module%201%20-%20Functions%20and%20Triggers/02%20Functions%20and%20stored%20procedures%20in%20MySQL.md)
- [03 Variables and parameters](Module%201%20-%20Functions%20and%20Triggers/03%20Variables%20and%20parameters.md)
- [04 Developing user-defined functions](Module%201%20-%20Functions%20and%20Triggers/04%20Developing%20user-defined%20functions.md)
- [05 Create complex stored procedures](Module%201%20-%20Functions%20and%20Triggers/05%20Create%20complex%20stored%20procedures.md)
- [06 What are MySQL triggers](Module%201%20-%20Functions%20and%20Triggers/06%20What%20are%20MySQL%20triggers.md)
- [07 Types of MySQL triggers](Module%201%20-%20Functions%20and%20Triggers/07%20Types%20of%20MySQL%20triggers.md)
- [08 Create and drop triggers in MySQL](Module%201%20-%20Functions%20and%20Triggers/08%20Create%20and%20drop%20triggers%20in%20MySQL.md)
- [09 Working with MySQL Scheduled Events](Module%201%20-%20Functions%20and%20Triggers/09%20Working%20with%20MySQL%20Scheduled%20Events.md)
- [10 Module summary - Functions and triggers](Module%201%20-%20Functions%20and%20Triggers/10%20Module%20summary%20-%20Functions%20and%20triggers.md)

### Module 2 - Database Optimization

- [01 Overview of database optimization](Module%202%20-%20Database%20Optimization/01%20Overview%20of%20database%20optimization.md)
- [02 Optimizing database SELECT statements](Module%202%20-%20Database%20Optimization/02%20Optimizing%20database%20SELECT%20statements.md)
- [03 Optimizing database SELECT statements in practice](Module%202%20-%20Database%20Optimization/03%20Optimizing%20database%20SELECT%20statements%20in%20practice.md)
- [04 Indexes in MySQL](Module%202%20-%20Database%20Optimization/04%20Indexes%20in%20MySQL.md)
- [05 MySQL Transaction](Module%202%20-%20Database%20Optimization/05%20MySQL%20Transaction.md)
- [06 MySQL Common table expression (CTE)](Module%202%20-%20Database%20Optimization/06%20MySQL%20Common%20table%20expression%20%28CTE%29.md)
- [07 MySQL Prepared Statement](Module%202%20-%20Database%20Optimization/07%20MySQL%20Prepared%20Statement.md)
- [08 MySQL JSON](Module%202%20-%20Database%20Optimization/08%20MySQL%20JSON.md)
- [09 Module summary - Database optimization](Module%202%20-%20Database%20Optimization/09%20Module%20summary%20-%20Database%20optimization.md)

### Module 3 - MySQL for Data Analytics

- [01 Overview of database analytics](Module%203%20-%20MySQL%20for%20Data%20Analytics/01%20Overview%20of%20database%20analytics.md)
- [02 Using MySQL for data analysis](Module%203%20-%20MySQL%20for%20Data%20Analytics/02%20Using%20MySQL%20for%20data%20analysis.md)
- [03 Data analysis in MySQL using SQL queries](Module%203%20-%20MySQL%20for%20Data%20Analytics/03%20Data%20analysis%20in%20MySQL%20using%20SQL%20queries.md)
- [04 Emulating the Full Outer JOIN in MySQL](Module%203%20-%20MySQL%20for%20Data%20Analytics/04%20Emulating%20the%20Full%20Outer%20JOIN%20in%20MySQL.md)
- [05 Extracting data from multiple tables with JOINS](Module%203%20-%20MySQL%20for%20Data%20Analytics/05%20Extracting%20data%20from%20multiple%20tables%20with%20JOINS.md)
- [06 Module summary - MySQL for data analytics](Module%203%20-%20MySQL%20for%20Data%20Analytics/06%20Module%20summary%20-%20MySQL%20for%20data%20analytics.md)

### Module 4 - Final Project

- [01 Course Recap - Advanced MySQL](Module%204%20-%20Final%20Project/01%20Course%20Recap%20-%20Advanced%20MySQL.md)
- [02 Course wrap up](Module%204%20-%20Final%20Project/02%20Course%20wrap%20up.md)

<!-- course-inventory:end -->
