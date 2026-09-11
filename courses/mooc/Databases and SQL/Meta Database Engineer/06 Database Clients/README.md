# Database Clients

Meta Database Engineer 전문 자격증의 여섯 번째 강좌. MySQL Connector/Python API로 연결·커서를 다루고, Python으로 CRUD·필터링·정렬·JOIN을 수행하며, 함수·datetime·저장 프로시저(callproc)·연결 풀(MySQLConnectionPool)까지 다룬다.

- 강좌: https://www.mooc.org/learn/database-clients
- 구성: 학습 모듈 3개 + 평가 모듈 1개, 강의 영상 24개
- 노트: 강의별 Transcript 기반 한국어 정리 (형식: 개요/내용/예시/요약, 기술 용어 영어 병기)
- 제외: 읽기 자료·퀴즈·채점 평가 (학업 정직성 정책)

## 모듈 구성

### Module 1 - Interacting with a MySQL database using Python (9강)

강좌 소개, Meta의 데이터베이스 엔지니어링(설계 철학 인터뷰), API 연결 개념, 설치·설정(pip·Jupyter·Connector), 연결 생성(connect), 데이터베이스·테이블 생성(커서·execute), 커서 개념(특성·DECLARE/OPEN/FETCH/CLOSE), 커서 서브클래스(raw·dictionary·buffered·인터리빙).

### Module 2 - Performing queries in MySQL using Python (5강)

생성·읽기(INSERT·SELECT·commit·fetchall), 갱신·삭제(UPDATE·DELETE), 필터링·정렬(WHERE·비교 연산자·ORDER BY), JOIN(INNER JOIN + column_names).

### Module 3 - Advanced Database Clients (8강)

MySQL 함수 5범주 복습, Python에서 함수 접근, datetime 함수(now·timedelta, 중복 영상 포함), 저장 프로시저 복습, callproc·stored_results·next로 프로시저 접근, 연결 풀링 개념, MySQLConnectionPool 구현.

### Module 4 - Working with a Database Client (2강)

강좌 총정리와 수료 마무리. 랩 프로젝트·채점 평가는 정리 제외.

## 강의 목록

<!-- course-inventory:start -->
### Module 1 - Interacting with a MySQL database using Python

- [01 Introduction to the course - Database clients](Module%201%20-%20Interacting%20with%20a%20MySQL%20database%20using%20Python/01%20Introduction%20to%20the%20course%20-%20Database%20clients.md)
- [02 Database engineering at Meta](Module%201%20-%20Interacting%20with%20a%20MySQL%20database%20using%20Python/02%20Database%20engineering%20at%20Meta.md)
- [03 MySQL-Python connection](Module%201%20-%20Interacting%20with%20a%20MySQL%20database%20using%20Python/03%20MySQL-Python%20connection.md)
- [04 Installation and setup](Module%201%20-%20Interacting%20with%20a%20MySQL%20database%20using%20Python/04%20Installation%20and%20setup.md)
- [05 Connecting to a MySQL database using a Python client](Module%201%20-%20Interacting%20with%20a%20MySQL%20database%20using%20Python/05%20Connecting%20to%20a%20MySQL%20database%20using%20a%20Python%20client.md)
- [06 Creating a database and tables in a MySQL database using Python](Module%201%20-%20Interacting%20with%20a%20MySQL%20database%20using%20Python/06%20Creating%20a%20database%20and%20tables%20in%20a%20MySQL%20database%20using%20Python.md)
- [07 Cursors and MySQL](Module%201%20-%20Interacting%20with%20a%20MySQL%20database%20using%20Python/07%20Cursors%20and%20MySQL.md)
- [08 Cursor subclasses](Module%201%20-%20Interacting%20with%20a%20MySQL%20database%20using%20Python/08%20Cursor%20subclasses.md)
- [09 Module summary - Interacting with MySQL using Python](Module%201%20-%20Interacting%20with%20a%20MySQL%20database%20using%20Python/09%20Module%20summary%20-%20Interacting%20with%20MySQL%20using%20Python.md)

### Module 2 - Performing queries in MySQL using Python

- [01 Creating and reading data in a MySQL database using Python](Module%202%20-%20Performing%20queries%20in%20MySQL%20using%20Python/01%20Creating%20and%20reading%20data%20in%20a%20MySQL%20database%20using%20Python.md)
- [02 Updating and deleting records in a MySQL database using Python](Module%202%20-%20Performing%20queries%20in%20MySQL%20using%20Python/02%20Updating%20and%20deleting%20records%20in%20a%20MySQL%20database%20using%20Python.md)
- [03 Filtering and sorting data in MySQL using Python](Module%202%20-%20Performing%20queries%20in%20MySQL%20using%20Python/03%20Filtering%20and%20sorting%20data%20in%20MySQL%20using%20Python.md)
- [04 Joining data from different tables in MySQL database using Python](Module%202%20-%20Performing%20queries%20in%20MySQL%20using%20Python/04%20Joining%20data%20from%20different%20tables%20in%20MySQL%20database%20using%20Python.md)
- [05 Module summary - Performing advanced queries on a MySQL database using Python](Module%202%20-%20Performing%20queries%20in%20MySQL%20using%20Python/05%20Module%20summary%20-%20Performing%20advanced%20queries%20on%20a%20MySQL%20database%20using%20Python.md)

### Module 3 - Advanced Database Clients

- [01 A quick review of MySQL Functions](Module%203%20-%20Advanced%20Database%20Clients/01%20A%20quick%20review%20of%20MySQL%20Functions.md)
- [02 Accessing MySQL functions using Python](Module%203%20-%20Advanced%20Database%20Clients/02%20Accessing%20MySQL%20functions%20using%20Python.md)
- [03 Working with datetime functions in Python](Module%203%20-%20Advanced%20Database%20Clients/03%20Working%20with%20datetime%20functions%20in%20Python.md)
- [04 A quick review of stored procedures](Module%203%20-%20Advanced%20Database%20Clients/04%20A%20quick%20review%20of%20stored%20procedures.md)
- [05 Accessing stored procedures using Python](Module%203%20-%20Advanced%20Database%20Clients/05%20Accessing%20stored%20procedures%20using%20Python.md)
- [06 Database connection pooling](Module%203%20-%20Advanced%20Database%20Clients/06%20Database%20connection%20pooling.md)
- [07 Python - MySQL connection pool](Module%203%20-%20Advanced%20Database%20Clients/07%20Python%20-%20MySQL%20connection%20pool.md)
- [08 Module summary - Advanced Database Clients](Module%203%20-%20Advanced%20Database%20Clients/08%20Module%20summary%20-%20Advanced%20Database%20Clients.md)

### Module 4 - Working with a Database Client

- [01 Course Recap - Database Clients](Module%204%20-%20Working%20with%20a%20Database%20Client/01%20Course%20Recap%20-%20Database%20Clients.md)
- [02 Course wrap up](Module%204%20-%20Working%20with%20a%20Database%20Client/02%20Course%20wrap%20up.md)

<!-- course-inventory:end -->
