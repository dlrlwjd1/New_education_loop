# Phase 5 — 다대다와 이력 설계

- 목표: 이 저장소의 가장 어려운 관계 — 강의 하나가 여러 로드맵에 속하고, 소유와 참조가 다르고, 같은 강의를 서로 다른 날 체크하는 구조 — 를 테이블로 정확히 표현한다.
- 분량: 약 8시간
- 마지막 학습일: (미학습)

## 왜 이 Phase가 따로 있는가

교과서 순서대로라면 다대다는 [Phase 3](03%20Phase%203%20-%20논리%20모델과%20키.md)의 변환 규칙 한 줄로 끝난다. 그런데 **이 저장소의 난점이 전부 여기 몰려 있다.**

- 강의 하나를 여러 로드맵의 여러 Phase가 체크한다 (N:M)
- 그 관계는 **속성을 갖는다** — 학습일, 그리고 "왜 이 로드맵이 이 강의를 쓰는가"라는 설명
- 로드맵이 코스를 **소유**하기도 하고 **참조만** 하기도 한다 (**디지털 트윈 로드맵**의 소유 Phase / 참조 Phase가 그 예다)
- 같은 강의를 두 로드맵에서 **각각 다른 날** 체크한다 ([AI 네이티브 회사 로드맵](../AI%20네이티브%20회사%20로드맵/README.md) 방식)
- 로드맵 구조가 바뀌어도 **과거 학습 기록은 남아야 한다**

이걸 단순 N:M 연결 테이블 하나로 풀면 반드시 틀린다. 한 Phase를 통째로 줄 값어치가 있다.

## 이 단계가 끝나면 할 수 있어야 하는 것

- N:M 관계를 연결 엔티티(associative entity)로 풀고, 연결 테이블의 기본키를 정할 수 있다
- 관계 자체가 갖는 속성을 어디에 둘지 판단할 수 있다
- 같은 두 엔티티 사이에 여러 종류의 관계가 있을 때 관계를 나눌지 유형 컬럼을 둘지 판단할 수 있다
- 과거 상태를 잃지 않는 이력 테이블(SCD2)을 SQL로 만들 수 있다
- 이력 테이블에서 "특정 시점의 상태"를 조회할 수 있다

## 5-A. 다대다를 푼다

메인: [PostgreSQL for Everybody](../../courses/mooc/Databases%20and%20SQL/PostgreSQL%20for%20Everybody/README.md), Course 1 Module 4

- [ ] [01 Many-to-Many Relationships.md](../../courses/mooc/Databases%20and%20SQL/PostgreSQL%20for%20Everybody/Course%201%20-%20Database%20Design%20and%20Basic%20SQL%20in%20PostgreSQL/Module%204%20-%20Many-To-Many%20Data%20Models/01%20Many-to-Many%20Relationships.md) — **연결 테이블(junction table)의 기본형.** 두 외래키를 묶은 복합 기본키로 갈지, 별도 대리키를 둘지가 첫 판단이다
- [ ] [02 Demonstration - Database Design and Many to Many.md](../../courses/mooc/Databases%20and%20SQL/PostgreSQL%20for%20Everybody/Course%201%20-%20Database%20Design%20and%20Basic%20SQL%20in%20PostgreSQL/Module%204%20-%20Many-To-Many%20Data%20Models/02%20Demonstration%20-%20Database%20Design%20and%20Many%20to%20Many.md) — **실제로 만들어 보는 데모.** 강좌-수강생 예제인데, 우리 경우의 강의-로드맵과 구조가 같다
- [ ] [03 Up Next - Beyond CRUD and JOIN.md](../../courses/mooc/Databases%20and%20SQL/PostgreSQL%20for%20Everybody/Course%201%20-%20Database%20Design%20and%20Basic%20SQL%20in%20PostgreSQL/Module%204%20-%20Many-To-Many%20Data%20Models/03%20Up%20Next%20-%20Beyond%20CRUD%20and%20JOIN.md) — 짧다

> 명령어는 PostgreSQL이다. **MySQL로 바꿔 적으면서 따라간다** — `SERIAL` → `AUTO_INCREMENT` 같은 차이를 손으로 옮기는 것 자체가 [Phase 6](06%20Phase%206%20-%20물리%20모델과%20무결성.md)의 예습이 된다.

## 5-B. 관계가 속성을 가질 때

**강의 없이 판단하는 절이다.** 저장소에 이 주제를 정면으로 다루는 강의가 없어 5-A의 연결 테이블 개념을 확장해 직접 결정한다.

연결 테이블에 `학습일`을 넣는 순간 그 테이블은 단순 연결이 아니라 **독립된 엔티티**가 된다. 판단할 것:

1. **"이 로드맵이 이 강의를 쓴다"와 "이 강의를 이 로드맵에서 봤다"는 같은 행인가, 다른 행인가?**
   - 같은 행이면: 연결 테이블에 `학습일` 컬럼을 두고 NULL이면 미학습. 간단하지만 [Phase 3](03%20Phase%203%20-%20논리%20모델과%20키.md)에서 만든 "뜻을 적을 수 있는 NULL" 규칙에 걸린다
   - 다른 행이면: `로드맵Phase_강의`(구성)와 `학습기록`(사건)을 분리한다. 로드맵에서 강의를 빼도 학습 기록이 남는다
2. **AI 네이티브 회사 로드맵 방식(같은 강의를 두 로드맵에서 각각 체크)을 어떻게 표현하는가?**
   - 학습 기록의 기본키에 로드맵이 들어가는가, 아니면 강의 단위로 한 번만 기록하고 로드맵별 표시는 뷰로 만드는가
   - **AGENTS.md는 "한쪽에서 봤으면 다른 쪽에도 학습일을 옮겨 적는다"고 한다.** 이건 사람이 손으로 동기화하는 규칙이다 — DB에서는 그럴 필요가 없게 만들 수 있는가?
3. **소유 vs 참조를 어떻게 표현하는가?**
   - 관계를 둘로 나눈다: `로드맵_소유_코스`와 `로드맵_참조_코스` 두 테이블
   - 하나에 유형 컬럼을 둔다: `로드맵_코스(로드맵ID, 코스ID, 관계유형)`
   - **판단 근거**: "한 코스의 소유 로드맵은 최대 하나"라는 제약을 DB가 강제할 수 있어야 하는가? 강제해야 한다면 어느 쪽이 그걸 표현할 수 있는가?

## 5-C. 과거를 잃지 않는 이력 테이블 (SCD2)

메인: [Open Source Data Engineering with Spark, dbt & Airflow](../../courses/mooc/Data%20Engineering/Open%20Source%20Data%20Engineering%20with%20Spark,%20dbt%20%26%20Airflow/README.md), Course 1 Module 7~8

> ⚠️ **이 5강의 진행 기록 원본은 **디지털 트윈 로드맵 Phase 4**다.** 저쪽은 센서·자산 이력 파이프라인 관점, 이쪽은 스키마 설계 관점으로 본다. **한쪽에서 이미 봤다면 양쪽에 학습일을 적는다.**

- [ ] [01 Why SCD2 Matters in Enterprise Data Warehouses.md](../../courses/mooc/Data%20Engineering/Open%20Source%20Data%20Engineering%20with%20Spark,%20dbt%20%26%20Airflow/Course%201%20-%20Building%20Automated%20Data%20Pipelines%20with%20Spark,%20dbt,%20and%20Airflow/Module%207%20-%20SCD2%20Historical%20Tracking/01%20Why%20SCD2%20Matters%20in%20Enterprise%20Data%20Warehouses.md) — **덮어쓰면(SCD Type 1) 무엇을 잃는가**
- [ ] [02 Understanding SCD2 Core Components and Business Logic.md](../../courses/mooc/Data%20Engineering/Open%20Source%20Data%20Engineering%20with%20Spark,%20dbt%20%26%20Airflow/Course%201%20-%20Building%20Automated%20Data%20Pipelines%20with%20Spark,%20dbt,%20and%20Airflow/Module%207%20-%20SCD2%20Historical%20Tracking/02%20Understanding%20SCD2%20Core%20Components%20and%20Business%20Logic.md) — **유효 시작·종료 시각과 현재 플래그.** 이력 테이블의 표준형이다
- [ ] [03 Building Your First SCD2 Table Structure in SQL.md](../../courses/mooc/Data%20Engineering/Open%20Source%20Data%20Engineering%20with%20Spark,%20dbt%20%26%20Airflow/Course%201%20-%20Building%20Automated%20Data%20Pipelines%20with%20Spark,%20dbt,%20and%20Airflow/Module%207%20-%20SCD2%20Historical%20Tracking/03%20Building%20Your%20First%20SCD2%20Table%20Structure%20in%20SQL.md) — **직접 만든다.** 이 Phase의 실습 본체
- [ ] [01 dbt Snapshots for Automated SCD2 Change Detection.md](../../courses/mooc/Data%20Engineering/Open%20Source%20Data%20Engineering%20with%20Spark,%20dbt%20%26%20Airflow/Course%201%20-%20Building%20Automated%20Data%20Pipelines%20with%20Spark,%20dbt,%20and%20Airflow/Module%208%20-%20dbt%20SCD2%20Implementation/01%20dbt%20Snapshots%20for%20Automated%20SCD2%20Change%20Detection.md) — 변경 감지를 도구가 대신하는 경우. **dbt를 쓸지는 이 로드맵의 관심사가 아니다** — 무엇을 자동화할 수 있는지만 본다
- [ ] [02 Building Complete dbt SCD2 Model with Validity Periods.md](../../courses/mooc/Data%20Engineering/Open%20Source%20Data%20Engineering%20with%20Spark,%20dbt%20%26%20Airflow/Course%201%20-%20Building%20Automated%20Data%20Pipelines%20with%20Spark,%20dbt,%20and%20Airflow/Module%208%20-%20dbt%20SCD2%20Implementation/02%20Building%20Complete%20dbt%20SCD2%20Model%20with%20Validity%20Periods.md) — 완성형

이 저장소에서 SCD2가 필요한 자리:

- **로드맵 Phase 구성** — Phase 구조를 개편하면 예전 구성은 사라진다. "2026년 8월에는 Phase 6이 무엇이었나"를 답할 수 있어야 하는가?
- **코스 위치** — 코스가 카테고리를 옮기거나 폴더명이 바뀐다. 과거 학습 기록이 가리키던 코스를 계속 찾을 수 있어야 한다
- **강의 파일** — 강의가 재정리되어 번호가 바뀌면 학습 기록은 어디를 가리키는가

**셋 다 SCD2로 갈 필요는 없다.** 어디에 이력이 필요하고 어디는 덮어써도 되는지 판단하는 것이 이 절의 산출물이다.

## 산출물

1. **N:M 설계안** — 연결 테이블의 컬럼·기본키·외래키를 확정하고, 5-B의 세 가지 판단에 각각 답을 문장으로 적는다. **선택하지 않은 쪽을 왜 버렸는지도 적는다** — Phase 9의 데이터 사전에 그대로 들어간다.
2. **SCD2 학습 이력 테이블** — MySQL에 실제로 만든다. 최소 요건:
   - 유효 시작·종료 시각과 현재 플래그를 갖는다
   - 같은 대상의 이력이 시간상 겹치지 않는다 (겹침을 무엇이 막는지 함께 적는다)
   - "2026년 8월 31일 기준 진도"를 조회하는 SQL이 동작한다
3. **이력 필요성 판정표** — 이 저장소의 테이블마다 `이력 불필요(덮어쓰기) / 갱신 시각만 / SCD2 전체` 중 하나로 판정하고 이유를 적는다. **전부 SCD2로 하면 스키마가 두 배로 늘고 모든 조회에 시점 조건이 붙는다** — 그 비용을 감수할 곳만 고른다.
4. **동기화 규칙 검증** — AGENTS.md의 "한쪽에서 봤으면 다른 쪽에도 옮겨 적는다"가 내 스키마에서는 불필요해졌는지 확인한다. 여전히 필요하다면 왜 그런지 적는다.

## 다음 단계

→ [06 Phase 6 - 물리 모델과 무결성](06%20Phase%206%20-%20물리%20모델과%20무결성.md)
