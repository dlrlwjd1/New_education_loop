# Database Design: A Modern Approach

> 플랫폼: MOOC (Logical Operations) · [강좌 링크](https://www.mooc.org/learn/database-design-modern-approach-lo094020)

## 개요
관계형 데이터베이스(relational database)를 **계획하고 설계하는 전 과정**을 다루는 강좌. 요구사항 수집부터 개념·논리·물리 모델링, 정규화, 무결성 통제, 클라우드 설계까지, 특정 DBMS에 종속되지 않는 범용 설계 원리를 학습한다. (동영상이 아닌 인터랙티브 읽기형 SCORM 콘텐츠 기반, Course 094020)

전체 **6개 모듈 · 28개 학습 항목** 정리본으로 구성.

## 핵심 흐름
**요구사항 수집 → 개념 모델 → 논리 모델 → 정규화 → 물리 모델·무결성 통제**

## 모듈 구성

### [Module 1 - Getting Started with Relational Database Design](<Module 1 - Getting Started with Relational Database Design>) (7)
강좌 개요, DB 구성 요소(테이블·행·열·스키마·DBMS·SQL·관계형 DB), 흔한 설계 문제(삽입/갱신/삭제 이상), 설계 프로세스(생애주기·모델링 방법론), 요구사항 수집.

### [Module 2 - Defining the Database Conceptual Model](<Module 2 - Defining the Database Conceptual Model>) (4)
개념 모델 — 엔티티(개념) 식별, 데이터 독립성, 엔티티 관계 식별(ER 다이어그램).

### [Module 3 - Defining the Database Logical Model](<Module 3 - Defining the Database Logical Model>) (5)
논리 모델 — 열 식별과 데이터 타입/크기, 기본 키 선택, 관계 다이어그램(1:N·1:1·N:N, junction table, 외래 키, crow's foot).

### [Module 4 - Normalizing Data](<Module 4 - Normalizing Data>) (4)
정규화 — 1NF·2NF·3NF(함수 종속·이행 종속), 고차 정규형 BCNF·4NF·5NF, 비정규화 판단.

### [Module 5 - Finalizing the Database Design](<Module 5 - Finalizing the Database Design>) (7)
설계 완성 — 물리 모델(시스템별 명명·데이터 타입), 참조 무결성(캐스케이딩), 열/테이블 수준 데이터 무결성, 데이터 정제, 클라우드 설계(샤딩·캐싱·NoSQL).

### [Module 6 - Completing the Course](<Module 6 - Completing the Course>) (1)
강좌 마무리 요약.

## 핵심 키워드
- **설계 생애주기**: 요구사항 → 개념 → 논리 → 물리 → 테스트/구현 → 유지보수
- **모델 3단계**: 개념(엔티티·관계) / 논리(열·데이터 타입·키·카디널리티) / 물리(DBMS별 청사진)
- **키**: 기본 키(primary key), 외래 키(foreign key), 복합 키(compound key), 후보 키
- **관계**: 일대다(1:N)·일대일(1:1)·다대다(N:N), junction table, 재귀 관계, crow's foot notation
- **정규화**: 1NF·2NF·3NF·BCNF·4NF·5NF, 함수 종속·이행 종속·다치 종속·순환 종속
- **무결성**: 참조 무결성, 데이터 무결성(열/테이블 수준), 제약·검증 테이블·NULL
- **클라우드**: 가상화, 샤딩, 캐싱, NoSQL, 비정규화

## 참고
이 강좌는 Logical Operations의 인터랙티브 읽기형(SCORM) 콘텐츠로, 동영상·Transcript가 없어 각 항목의 페이지 텍스트를 기반으로 한국어 정리본을 작성했다.

## 강의 목록

<!-- course-inventory:start -->
### Module 1 - Getting Started with Relational Database Design

- [01 Getting Started - Course Overview](Module%201%20-%20Getting%20Started%20with%20Relational%20Database%20Design/01%20Getting%20Started%20-%20Course%20Overview.md)
- [02 Lesson Introduction](Module%201%20-%20Getting%20Started%20with%20Relational%20Database%20Design/02%20Lesson%20Introduction.md)
- [03 Identify Database Components](Module%201%20-%20Getting%20Started%20with%20Relational%20Database%20Design/03%20Identify%20Database%20Components.md)
- [04 Identify Common Database Design Problems](Module%201%20-%20Getting%20Started%20with%20Relational%20Database%20Design/04%20Identify%20Common%20Database%20Design%20Problems.md)
- [05 Follow a Database Design Process](Module%201%20-%20Getting%20Started%20with%20Relational%20Database%20Design/05%20Follow%20a%20Database%20Design%20Process.md)
- [06 Gather Requirements](Module%201%20-%20Getting%20Started%20with%20Relational%20Database%20Design/06%20Gather%20Requirements.md)
- [07 Lesson Summary](Module%201%20-%20Getting%20Started%20with%20Relational%20Database%20Design/07%20Lesson%20Summary.md)

### Module 2 - Defining the Database Conceptual Model

- [01 Lesson Introduction](Module%202%20-%20Defining%20the%20Database%20Conceptual%20Model/01%20Lesson%20Introduction.md)
- [02 Create the Conceptual Model](Module%202%20-%20Defining%20the%20Database%20Conceptual%20Model/02%20Create%20the%20Conceptual%20Model.md)
- [03 Identify Entity Relationships](Module%202%20-%20Defining%20the%20Database%20Conceptual%20Model/03%20Identify%20Entity%20Relationships.md)
- [04 Lesson Summary](Module%202%20-%20Defining%20the%20Database%20Conceptual%20Model/04%20Lesson%20Summary.md)

### Module 3 - Defining the Database Logical Model

- [01 Lesson Introduction](Module%203%20-%20Defining%20the%20Database%20Logical%20Model/01%20Lesson%20Introduction.md)
- [02 Identify Columns](Module%203%20-%20Defining%20the%20Database%20Logical%20Model/02%20Identify%20Columns.md)
- [03 Identify Primary Keys](Module%203%20-%20Defining%20the%20Database%20Logical%20Model/03%20Identify%20Primary%20Keys.md)
- [04 Identify and Diagram Relationships](Module%203%20-%20Defining%20the%20Database%20Logical%20Model/04%20Identify%20and%20Diagram%20Relationships.md)
- [05 Lesson Summary](Module%203%20-%20Defining%20the%20Database%20Logical%20Model/05%20Lesson%20Summary.md)

### Module 4 - Normalizing Data

- [01 Lesson Introduction](Module%204%20-%20Normalizing%20Data/01%20Lesson%20Introduction.md)
- [02 Avoid Common Database Design Errors](Module%204%20-%20Normalizing%20Data/02%20Avoid%20Common%20Database%20Design%20Errors.md)
- [03 Comply with Higher Normal Forms](Module%204%20-%20Normalizing%20Data/03%20Comply%20with%20Higher%20Normal%20Forms.md)
- [04 Lesson Summary](Module%204%20-%20Normalizing%20Data/04%20Lesson%20Summary.md)

### Module 5 - Finalizing the Database Design

- [01 Lesson Introduction](Module%205%20-%20Finalizing%20the%20Database%20Design/01%20Lesson%20Introduction.md)
- [02 Adapt the Physical Model for Different Systems](Module%205%20-%20Finalizing%20the%20Database%20Design/02%20Adapt%20the%20Physical%20Model%20for%20Different%20Systems.md)
- [03 Ensure Referential Integrity](Module%205%20-%20Finalizing%20the%20Database%20Design/03%20Ensure%20Referential%20Integrity.md)
- [04 Ensure Data Integrity at the Column Level](Module%205%20-%20Finalizing%20the%20Database%20Design/04%20Ensure%20Data%20Integrity%20at%20the%20Column%20Level.md)
- [05 Ensure Data Integrity at the Table Level](Module%205%20-%20Finalizing%20the%20Database%20Design/05%20Ensure%20Data%20Integrity%20at%20the%20Table%20Level.md)
- [06 Design for the Cloud](Module%205%20-%20Finalizing%20the%20Database%20Design/06%20Design%20for%20the%20Cloud.md)
- [07 Lesson Summary](Module%205%20-%20Finalizing%20the%20Database%20Design/07%20Lesson%20Summary.md)

### Module 6 - Completing the Course

- [01 Course Summary](Module%206%20-%20Completing%20the%20Course/01%20Course%20Summary.md)

<!-- course-inventory:end -->
