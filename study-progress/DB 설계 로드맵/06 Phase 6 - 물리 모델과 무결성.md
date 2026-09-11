# Phase 6 — 물리 모델과 무결성

- 목표: 논리 모델을 MySQL DDL로 내리고, 지금까지 문서로만 적어 온 규칙을 DB가 강제하게 만든다.
- 분량: 약 10시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 컬럼마다 적절한 MySQL 데이터 타입과 길이를 근거를 대고 고를 수 있다
- PK·FK·UNIQUE·NOT NULL·CHECK·DEFAULT를 DDL로 걸 수 있다
- 외래키의 참조 동작(CASCADE·RESTRICT·SET NULL)을 관계 의미에 맞게 고를 수 있다
- 서브타입을 물리 테이블로 내리는 세 방식을 비교해 고를 수 있다
- 설계 시점에 어떤 인덱스를 걸어 둘지 판단할 수 있다
- 뷰로 조회 경로를 감쌀 수 있다

> **이 Phase에서 실행되는 `schema.sql`이 나온다.** 지금까지의 산출물은 전부 문서였다.

## 6-A. 데이터 타입과 길이

메인: [Meta 01 Introduction to Databases](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/01%20Introduction%20to%20Databases/README.md), Module 2

- [ ] [01 Numeric data types.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/01%20Introduction%20to%20Databases/Module%202%20-%20Create,%20Read,%20Update%20and%20Delete%20%28CRUD%29%20Operations/01%20Numeric%20data%20types.md) — **`INT`·`BIGINT`·`DECIMAL`의 선택 기준.** 돈이나 비율에 `FLOAT`을 쓰면 안 되는 이유
- [ ] [02 String data types.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/01%20Introduction%20to%20Databases/Module%202%20-%20Create,%20Read,%20Update%20and%20Delete%20%28CRUD%29%20Operations/02%20String%20data%20types.md) — **`CHAR` vs `VARCHAR` vs `TEXT`.** 이 저장소의 강의 제목·파일 경로가 어디에 해당하는지 판단한다
- [ ] [03 Default values.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/01%20Introduction%20to%20Databases/Module%202%20-%20Create,%20Read,%20Update%20and%20Delete%20%28CRUD%29%20Operations/03%20Default%20values.md)

함께 보기: PostgreSQL 쪽 대조. 타입 체계가 어떻게 다른지 보면 "타입은 DBMS마다 다르다"가 실감된다.

- [ ] [02 Data Types in PostgreSQL.md](../../courses/mooc/Databases%20and%20SQL/PostgreSQL%20for%20Everybody/Course%201%20-%20Database%20Design%20and%20Basic%20SQL%20in%20PostgreSQL/Module%202%20-%20Single%20Table%20SQL/02%20Data%20Types%20in%20PostgreSQL.md)

## 6-B. 제약 조건 — 규칙을 DB에 새긴다

**이 절이 Phase 6의 핵심이다.** Phase 1에서 문장으로 적은 업무 규칙 중 DB가 강제할 수 있는 것을 전부 제약으로 내린다.

메인: [Meta 03 Database Structures and Management with MySQL](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/README.md), Module 2

- [ ] [02 Constraints in MySQL.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%202%20-%20Updating%20databases%20and%20working%20with%20views/02%20Constraints%20in%20MySQL.md)
- [ ] [03 Constraints in practice.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%202%20-%20Updating%20databases%20and%20working%20with%20views/03%20Constraints%20in%20practice.md) — **실제로 걸어 보고 위반시켜 본다**
- [ ] [04 MySQL ALTER TABLE.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%202%20-%20Updating%20databases%20and%20working%20with%20views/04%20MySQL%20ALTER%20TABLE.md) — 이미 데이터가 있는 테이블에 제약을 추가하는 경우. [Phase 7](07%20Phase%207%20-%20모델링%20도구와%20코드로%20옮기기.md)의 마이그레이션과 이어진다

메인: [Database Design - A Modern Approach](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/README.md), Module 5

- [ ] [01 Lesson Introduction.md](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/Module%205%20-%20Finalizing%20the%20Database%20Design/01%20Lesson%20Introduction.md)
- [ ] [03 Ensure Referential Integrity.md](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/Module%205%20-%20Finalizing%20the%20Database%20Design/03%20Ensure%20Referential%20Integrity.md) — **참조 무결성과 삭제·갱신 시 동작.** 코스를 지우면 그 강의들은 어떻게 되어야 하는가
- [ ] [04 Ensure Data Integrity at the Column Level.md](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/Module%205%20-%20Finalizing%20the%20Database%20Design/04%20Ensure%20Data%20Integrity%20at%20the%20Column%20Level.md) — `CHECK`·`NOT NULL`·도메인 제약
- [ ] [05 Ensure Data Integrity at the Table Level.md](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/Module%205%20-%20Finalizing%20the%20Database%20Design/05%20Ensure%20Data%20Integrity%20at%20the%20Table%20Level.md) — **여러 컬럼에 걸친 제약.** SCD2의 "이력이 겹치지 않는다"가 여기 해당한다

함께 보기: 제약을 DBMS가 어떻게 강제하는지의 이론

- [ ] [01 Enforcing Semantic Integrity.md](../../courses/mooc/Databases%20and%20SQL/Distributed%20Query%20Optimization%20and%20Security/Module%202%20-%20Semantic%20Data%20Control/01%20Enforcing%20Semantic%20Integrity.md) — **제약 검사가 공짜가 아니라는 것**을 알게 된다. Phase 8과 **DB 운영 안정화 로드맵**의 성능 논의로 이어진다

DDL 문법 자체가 흔들리면: [Databases and SQL for Data Science with Python](../../courses/mooc/Databases%20and%20SQL/Databases%20and%20SQL%20for%20Data%20Science%20with%20Python/README.md) Module 2

- [ ] [03 CREATE TABLE Statement.md](../../courses/mooc/Databases%20and%20SQL/Databases%20and%20SQL%20for%20Data%20Science%20with%20Python/Module%202%20-%20Introduction%20to%20Relational%20Databases%20and%20Tables/03%20CREATE%20TABLE%20Statement.md)
- [ ] [05 ALTER TABLE and TRUNCATE (MySQL).md](../../courses/mooc/Databases%20and%20SQL/Databases%20and%20SQL%20for%20Data%20Science%20with%20Python/Module%202%20-%20Introduction%20to%20Relational%20Databases%20and%20Tables/05%20ALTER%20TABLE%20and%20TRUNCATE%20%28MySQL%29.md) — MySQL 문법 버전
- [ ] [07 Relational Model Constraints.md](../../courses/mooc/Databases%20and%20SQL/Databases%20and%20SQL%20for%20Data%20Science%20with%20Python/Module%202%20-%20Introduction%20to%20Relational%20Databases%20and%20Tables/07%20Relational%20Model%20Constraints.md) — **개체 무결성·참조 무결성·의미 무결성**의 교과서적 분류
- [ ] [11 DDL Cheat Sheet.md](../../courses/mooc/Databases%20and%20SQL/Databases%20and%20SQL%20for%20Data%20Science%20with%20Python/Module%202%20-%20Introduction%20to%20Relational%20Databases%20and%20Tables/11%20DDL%20Cheat%20Sheet.md) — 손에 두고 쓴다

## 6-C. 물리 모델을 시스템에 맞춘다

메인: Database Design - A Modern Approach, Module 5

- [ ] [02 Adapt the Physical Model for Different Systems.md](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/Module%205%20-%20Finalizing%20the%20Database%20Design/02%20Adapt%20the%20Physical%20Model%20for%20Different%20Systems.md) — **같은 논리 모델이 DBMS마다 다른 물리 모델이 된다.** 5-A에서 PostgreSQL 데모를 MySQL로 옮긴 경험이 여기서 정리된다
- [ ] [06 Design for the Cloud.md](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/Module%205%20-%20Finalizing%20the%20Database%20Design/06%20Design%20for%20the%20Cloud.md) — 관리형 DB에서 달라지는 제약. 더 필요하면 [11 부록](11%20부록%20-%20관계형을%20벗어날%20때.md)
- [ ] [07 Lesson Summary.md](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/Module%205%20-%20Finalizing%20the%20Database%20Design/07%20Lesson%20Summary.md)

**서브타입 물리 변환** — [Phase 2](02%20Phase%202%20-%20개념%20모델과%20ERD.md)에서 미뤄 둔 판단을 여기서 닫는다. 저장소에 이 세 방식을 비교하는 강의는 없으므로 직접 결정한다.

| 방식 | 이 저장소에 적용하면 | 대가 |
|---|---|---|
| 슈퍼타입 하나로 통합 | `코스` 테이블 하나에 MOOC·Udemy·YouTube 컬럼을 다 둔다 | NULL 컬럼이 많아진다. "YouTube 코스에 카테고리가 없다"를 DB가 강제 못 한다 |
| 서브타입별 개별 테이블 | `mooc_코스`·`udemy_코스`·`youtube_코스` | 공통 조회에 `UNION`이 필요하다. 로드맵→코스 외래키를 어디로 걸지 곤란해진다 |
| 1:1 분리 | `코스`(공통) + `코스_mooc`(카테고리 등) | 조인이 늘고, "코스마다 하나의 서브타입만 갖는다"를 강제하기 어렵다 |

**정답은 없다.** 어떤 조회를 자주 할지에 달렸으므로, [Phase 1](01%20Phase%201%20-%20설계%20프로세스와%20요구사항%20수집.md)에서 만든 질문 목록을 보고 고른다.

## 6-D. 인덱스와 뷰 — 설계 시점의 판단

- [ ] [03 Database Keys and Indexes in PostgreSQL.md](../../courses/mooc/Databases%20and%20SQL/PostgreSQL%20for%20Everybody/Course%201%20-%20Database%20Design%20and%20Basic%20SQL%20in%20PostgreSQL/Module%202%20-%20Single%20Table%20SQL/03%20Database%20Keys%20and%20Indexes%20in%20PostgreSQL.md) — 키와 인덱스가 어떻게 얽혀 있는지
- [ ] [08 MySQL CREATE VIEW.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/03%20Database%20Structures%20and%20Management%20with%20MySQL/Module%202%20-%20Updating%20databases%20and%20working%20with%20views/08%20MySQL%20CREATE%20VIEW.md) — **뷰는 ANSI-SPARC의 외부 스키마다.** [Phase 1](01%20Phase%201%20-%20설계%20프로세스와%20요구사항%20수집.md)의 3층 구조가 여기서 실물이 된다

> **인덱스 튜닝은 이 로드맵의 범위가 아니다.** 여기서는 "외래키에는 인덱스가 필요하다", "자주 거는 조건에는 인덱스를 고려한다" 수준까지만 판단한다. 복합 인덱스 컬럼 순서·커버링 인덱스·실행계획은 **DB 운영 안정화 Phase 3**가 다룬다.

## 산출물

1. **실행되는 `schema.sql`** — MySQL 8에서 오류 없이 처음부터 끝까지 돌아간다. 테이블·제약·인덱스·뷰가 전부 들어 있다. **`DROP DATABASE` 후 재실행해도 같은 결과가 나와야 한다.**
2. **제약 조건표** — Phase 1의 업무 규칙 문장마다 다음 중 하나로 판정한다.
   - DB 제약으로 강제됨 → 어느 제약인지 적는다
   - 애플리케이션이 지켜야 함 → **왜 DB가 못 하는지 이유를 적는다**
   - 지킬 수 없음 → 그래도 되는 이유를 적는다
3. **참조 동작 결정표** — 외래키마다 `ON DELETE` / `ON UPDATE`를 무엇으로 했는지와 이유. 예: 로드맵을 지우면 그 로드맵의 학습 기록도 지워야 하는가, 남겨야 하는가?
4. **명명 규칙 문서** — 테이블·컬럼·제약·인덱스 이름 규칙을 정하고 스키마 전체에 일관되게 적용한다. **단수형인가 복수형인가, 영어인가 한글인가**를 먼저 정하고 시작한다 — 중간에 바꾸면 전부 고쳐야 한다.
5. **서브타입 변환 판단서** — 세 방식 중 무엇을 골랐는지와, 버린 두 방식이 어떤 조회에서 유리했을지.

## 다음 단계

→ [07 Phase 7 - 모델링 도구와 코드로 옮기기](07%20Phase%207%20-%20모델링%20도구와%20코드로%20옮기기.md)
