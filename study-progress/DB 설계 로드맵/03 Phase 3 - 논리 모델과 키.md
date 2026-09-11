# Phase 3 — 논리 모델과 키

- 목표: Phase 2의 ERD를 관계 스키마(테이블 목록)로 변환하고, 테이블마다 기본키를 근거 있게 고른다.
- 분량: 약 8시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- ERD를 관계 스키마로 바꾸는 변환 규칙을 관계 유형별로 적용할 수 있다
- 후보키·기본키·대체키·복합키·슈퍼키를 구분할 수 있다
- 자연키(natural key)와 대리키(surrogate key) 중 무엇을 쓸지 근거를 대고 고를 수 있다
- 외래키로 관계를 표현하고 참조 무결성이 무엇을 보장하는지 설명할 수 있다
- 어떤 컬럼에 NULL을 허용할지 판단할 수 있다

## 3-A. 관계 모델의 용어

메인: [Relational Database Design](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/README.md), Module 2

- [ ] [01 What are Relations.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/Module%202%20-%20Relational%20Models/01%20What%20are%20Relations.md) — 릴레이션·튜플·도메인. **"테이블"과 "릴레이션"은 같은 말이 아니다** — 릴레이션에는 순서가 없고 중복 행이 없다
- [ ] [03 What are Relational Schemas.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/Module%202%20-%20Relational%20Models/03%20What%20are%20Relational%20Schemas.md)

## 3-B. 키 — 무엇을 기본키로 삼을 것인가

**이 절의 판단이 이후 전부에 남는다.** 기본키를 잘못 고르면 Phase 4의 정규화가 어긋나고 Phase 6의 외래키가 전부 뒤틀린다.

메인: Relational Database Design, Module 2

- [ ] [02 What are Keys.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/Module%202%20-%20Relational%20Models/02%20What%20are%20Keys.md) — **후보키·기본키·대체키·복합키.** 후보키가 여럿일 때 무엇을 기본키로 올릴지가 설계 판단이다

메인: [Database Design - A Modern Approach](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/README.md), Module 3

- [ ] [01 Lesson Introduction.md](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/Module%203%20-%20Defining%20the%20Database%20Logical%20Model/01%20Lesson%20Introduction.md)
- [ ] [02 Identify Columns.md](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/Module%203%20-%20Defining%20the%20Database%20Logical%20Model/02%20Identify%20Columns.md) — 개념 모델의 속성을 컬럼으로 내린다. **아직 타입은 정하지 않는다**
- [ ] [03 Identify Primary Keys.md](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/Module%203%20-%20Defining%20the%20Database%20Logical%20Model/03%20Identify%20Primary%20Keys.md) — **기본키의 조건: 유일하고, 변하지 않고, NULL이 아니다.** 이 저장소에서 파일 경로를 키로 쓰면 안 되는 이유가 두 번째 조건이다

함께 보기: [PostgreSQL for Everybody](../../courses/mooc/Databases%20and%20SQL/PostgreSQL%20for%20Everybody/README.md) Course 1 Module 3 — 대리키를 쓰는 실무 관행을 데모로 보여준다

- [ ] [01 Relational Database Design Part 1.md](../../courses/mooc/Databases%20and%20SQL/PostgreSQL%20for%20Everybody/Course%201%20-%20Database%20Design%20and%20Basic%20SQL%20in%20PostgreSQL/Module%203%20-%20One-To-Many%20Data%20Models/01%20Relational%20Database%20Design%20Part%201.md)
- [ ] [02 Relational Database Design Part 2.md](../../courses/mooc/Databases%20and%20SQL/PostgreSQL%20for%20Everybody/Course%201%20-%20Database%20Design%20and%20Basic%20SQL%20in%20PostgreSQL/Module%203%20-%20One-To-Many%20Data%20Models/02%20Relational%20Database%20Design%20Part%202.md)
- [ ] [03 Keys.md](../../courses/mooc/Databases%20and%20SQL/PostgreSQL%20for%20Everybody/Course%201%20-%20Database%20Design%20and%20Basic%20SQL%20in%20PostgreSQL/Module%203%20-%20One-To-Many%20Data%20Models/03%20Keys.md) — **강사가 대리키를 기본으로 쓰는 이유를 명시적으로 말한다.** 자연키 진영의 반론과 함께 판단한다

MySQL 관점으로 한 번 더: [Meta 01 Introduction to Databases](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/01%20Introduction%20to%20Databases/README.md) Module 4

- [ ] [05 Primary key.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/01%20Introduction%20to%20Databases/Module%204%20-%20Database%20design/05%20Primary%20key.md)
- [ ] [06 Foreign key.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/01%20Introduction%20to%20Databases/Module%204%20-%20Database%20design/06%20Foreign%20key.md)

## 3-C. ERD를 관계 스키마로 변환한다

메인: Relational Database Design, Module 2

- [ ] [04 How to Convert ERDs to Relational Models.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/Module%202%20-%20Relational%20Models/04%20How%20to%20Convert%20ERDs%20to%20Relational%20Models.md) — **변환 규칙 본편.** 1:1·1:N·N:M·약한 엔티티마다 규칙이 다르다
- [ ] [05 Practice.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/Module%202%20-%20Relational%20Models/05%20Practice.md) — 직접 변환해 본다

메인: Database Design - A Modern Approach, Module 3

- [ ] [04 Identify and Diagram Relationships.md](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/Module%203%20-%20Defining%20the%20Database%20Logical%20Model/04%20Identify%20and%20Diagram%20Relationships.md)
- [ ] [05 Lesson Summary.md](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/Module%203%20-%20Defining%20the%20Database%20Logical%20Model/05%20Lesson%20Summary.md)

함께 보기: [Meta 01](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/01%20Introduction%20to%20Databases/README.md) Module 4 — 스키마라는 말이 무엇을 가리키는지부터 정리한다

- [ ] [01 Database schema.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/01%20Introduction%20to%20Databases/Module%204%20-%20Database%20design/01%20Database%20schema.md)
- [ ] [02 Schema in use.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/01%20Introduction%20to%20Databases/Module%204%20-%20Database%20design/02%20Schema%20in%20use.md)
- [ ] [03 Types of database schema.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/01%20Introduction%20to%20Databases/Module%204%20-%20Database%20design/03%20Types%20of%20database%20schema.md) — 개념·논리·물리 스키마를 MySQL 맥락에서 다시 짚는다
- [ ] [04 Table relationships.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/01%20Introduction%20to%20Databases/Module%204%20-%20Database%20design/04%20Table%20relationships.md)
- [ ] [07 Finding entities.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/01%20Introduction%20to%20Databases/Module%204%20-%20Database%20design/07%20Finding%20entities.md)

## 산출물

1. **관계 스키마 목록** — 테이블마다 `테이블명(컬럼1, 컬럼2, …)` 형식으로 적고 기본키에 밑줄, 외래키에 화살표를 표시한다. 타입은 아직 적지 않는다.
2. **키 선택 근거서** — 테이블마다 후보키를 모두 나열하고, 그중 무엇을 기본키로 골랐는지와 그 이유를 한 줄씩 적는다. 최소한 아래 셋은 반드시 판단한다.
   - **코스** — 자연키(플랫폼+카테고리+코스명)인가 대리키(`course_id`)인가. 폴더명이 바뀌면 어떻게 되는지가 판단 근거다
   - **강의** — `코스ID + 모듈번호 + 강의번호` 복합키인가 대리키인가. **강의 번호가 모듈마다 01부터 다시 시작하므로 강의번호 단독으로는 유일하지 않다**
   - **체크 기록** — 무엇 하나가 한 행인가. 이 판단이 [Phase 5](05%20Phase%205%20-%20다대다와%20이력%20설계.md)의 입구다
3. **NULL 허용 판정표** — NULL을 허용하는 컬럼마다 "NULL이 무엇을 뜻하는지"를 문장으로 적는다. 뜻을 못 적는 NULL은 설계가 잘못된 신호다. (예: 강의의 `모듈ID`가 NULL이면 "YouTube 자료라 모듈 계층이 없다"인가, "아직 분류 안 됨"인가? 둘 다 뜻하면 안 된다)

## 다음 단계

→ [04 Phase 4 - 정규화와 함수 종속](04%20Phase%204%20-%20정규화와%20함수%20종속.md)
