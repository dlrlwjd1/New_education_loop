# Database Structures and Management with MySQL

Meta Database Engineer 전문 자격증의 세 번째 강좌. 논리 연산자 필터링, 조인·UNION, GROUP BY·HAVING, REPLACE·제약조건·ALTER/COPY TABLE, 서브쿼리·뷰, MySQL 함수(숫자·문자열·날짜·비교·제어 흐름)와 저장 프로시저를 다룬다.

- 강좌: https://www.mooc.org/learn/database-structures-and-management-with-mysql
- 구성: 학습 모듈 3개 + 평가 모듈 1개, 강의 영상 32개
- 노트: 강의별 Transcript 기반 한국어 정리 (형식: 개요/내용/예시/요약, 기술 용어 영어 병기)
- 제외: 읽기 자료·퀴즈·채점 평가 (학업 정직성 정책)

## 모듈 구성

### Module 1 - Intro to MySQL (14강)

프로그램·강좌 소개, Meta의 MySQL 활용, AND/OR/NOT·IN/BETWEEN/LIKE 필터링, 별칭, JOIN 개념과 INNER/LEFT·RIGHT/SELF JOIN, UNION(ALL), GROUP BY와 집계 함수, HAVING.

### Module 2 - Updating databases and working with views (9강)

REPLACE 문(INTO/SET), 제약조건 3유형(키·도메인·참조 무결성)과 CASCADE, 제약 실습(NOT NULL·UNIQUE·CHECK·FK), ALTER TABLE, COPY TABLE(SELECT/LIKE/DB 간), 서브쿼리, ANY·ALL·EXISTS 복합 연산자, CREATE VIEW.

### Module 3 - Functions and MySQL stored procedures (7강)

숫자 함수(ROUND·MOD), 문자열 함수(CONCAT·SUBSTRING·UCASE·LCASE), 날짜 함수(CURRENT_DATE·DATE_FORMAT·DATEDIFF), 비교 함수(GREATEST·LEAST·ISNULL), 제어 흐름(CASE), 저장 프로시저(CREATE/CALL/DROP).

### Module 4 - Graded assessment (2강)

강좌 총정리와 수료 마무리. 채점 평가는 정리 제외.

## 강의 목록

<!-- course-inventory:start -->
### Module 1 - Intro to MySQL

- [01 Introduction to the program](Module%201%20-%20Intro%20to%20MySQL/01%20Introduction%20to%20the%20program.md)
- [02 Introduction to the course](Module%201%20-%20Intro%20to%20MySQL/02%20Introduction%20to%20the%20course.md)
- [03 How Meta uses MySQL](Module%201%20-%20Intro%20to%20MySQL/03%20How%20Meta%20uses%20MySQL.md)
- [04 Filtering data using AND, OR and NOT logical operators](Module%201%20-%20Intro%20to%20MySQL/04%20Filtering%20data%20using%20AND%2C%20OR%20and%20NOT%20logical%20operators.md)
- [05 Filtering data using IN, BETWEEN and LIKE logical operators](Module%201%20-%20Intro%20to%20MySQL/05%20Filtering%20data%20using%20IN%2C%20BETWEEN%20and%20LIKE%20logical%20operators.md)
- [06 MySQL aliases](Module%201%20-%20Intro%20to%20MySQL/06%20MySQL%20aliases.md)
- [07 JOINS](Module%201%20-%20Intro%20to%20MySQL/07%20JOINS.md)
- [08 INNER JOIN](Module%201%20-%20Intro%20to%20MySQL/08%20INNER%20JOIN.md)
- [09 LEFT and RIGHT JOIN](Module%201%20-%20Intro%20to%20MySQL/09%20LEFT%20and%20RIGHT%20JOIN.md)
- [10 SELF-JOIN](Module%201%20-%20Intro%20to%20MySQL/10%20SELF-JOIN.md)
- [11 MySQL UNION operator](Module%201%20-%20Intro%20to%20MySQL/11%20MySQL%20UNION%20operator.md)
- [12 MySQL GROUP BY](Module%201%20-%20Intro%20to%20MySQL/12%20MySQL%20GROUP%20BY.md)
- [13 MySQL HAVING](Module%201%20-%20Intro%20to%20MySQL/13%20MySQL%20HAVING.md)
- [14 Module summary - Intro to MySQL](Module%201%20-%20Intro%20to%20MySQL/14%20Module%20summary%20-%20Intro%20to%20MySQL.md)

### Module 2 - Updating databases and working with views

- [01 MySQL REPLACE statement](Module%202%20-%20Updating%20databases%20and%20working%20with%20views/01%20MySQL%20REPLACE%20statement.md)
- [02 Constraints in MySQL](Module%202%20-%20Updating%20databases%20and%20working%20with%20views/02%20Constraints%20in%20MySQL.md)
- [03 Constraints in practice](Module%202%20-%20Updating%20databases%20and%20working%20with%20views/03%20Constraints%20in%20practice.md)
- [04 MySQL ALTER TABLE](Module%202%20-%20Updating%20databases%20and%20working%20with%20views/04%20MySQL%20ALTER%20TABLE.md)
- [05 MySQL COPY TABLE](Module%202%20-%20Updating%20databases%20and%20working%20with%20views/05%20MySQL%20COPY%20TABLE.md)
- [06 Subqueries in MySQL](Module%202%20-%20Updating%20databases%20and%20working%20with%20views/06%20Subqueries%20in%20MySQL.md)
- [07 Subqueries and complex comparison operators](Module%202%20-%20Updating%20databases%20and%20working%20with%20views/07%20Subqueries%20and%20complex%20comparison%20operators.md)
- [08 MySQL CREATE VIEW](Module%202%20-%20Updating%20databases%20and%20working%20with%20views/08%20MySQL%20CREATE%20VIEW.md)
- [09 Module summary - Updating databases and working with views](Module%202%20-%20Updating%20databases%20and%20working%20with%20views/09%20Module%20summary%20-%20Updating%20databases%20and%20working%20with%20views.md)

### Module 3 - Functions and MySQL stored procedures

- [01 Numeric functions](Module%203%20-%20Functions%20and%20MySQL%20stored%20procedures/01%20Numeric%20functions.md)
- [02 String functions](Module%203%20-%20Functions%20and%20MySQL%20stored%20procedures/02%20String%20functions.md)
- [03 Date functions](Module%203%20-%20Functions%20and%20MySQL%20stored%20procedures/03%20Date%20functions.md)
- [04 Comparison functions](Module%203%20-%20Functions%20and%20MySQL%20stored%20procedures/04%20Comparison%20functions.md)
- [05 Control flow functions](Module%203%20-%20Functions%20and%20MySQL%20stored%20procedures/05%20Control%20flow%20functions.md)
- [06 Stored procedures in MySQL](Module%203%20-%20Functions%20and%20MySQL%20stored%20procedures/06%20Stored%20procedures%20in%20MySQL.md)
- [07 Module summary - Functions and MySQL stored procedures](Module%203%20-%20Functions%20and%20MySQL%20stored%20procedures/07%20Module%20summary%20-%20Functions%20and%20MySQL%20stored%20procedures.md)

### Module 4 - Graded assessment

- [01 Course Recap](Module%204%20-%20Graded%20assessment/01%20Course%20Recap.md)
- [02 Course wrap up](Module%204%20-%20Graded%20assessment/02%20Course%20wrap%20up.md)

<!-- course-inventory:end -->
