# Phase 9 — 완성과 검증

- 목표: **이 로드맵의 도착점.** 설계 전 과정을 한 번 더 압축해 따라가며 내 스키마를 검산하고, 요구 질의 20개에 SQL로 답한다.
- 분량: 약 9시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 요구사항에서 최종 스키마까지의 전 과정을 남에게 설명할 수 있다
- 설계한 스키마가 요구 질의에 실제로 답하는지 검증할 수 있다
- 샘플 데이터를 넣어 이상(anomaly)이 생기지 않는지 확인할 수 있다
- 데이터 사전(data dictionary)을 작성해 설계 판단의 근거를 남길 수 있다

## 9-A. 케이스 스터디를 통으로 따라간다

**[Phase 1](01%20Phase%201%20-%20설계%20프로세스와%20요구사항%20수집.md)에서 미뤄 둔 것을 여기서 연다.** 이 6강은 이 로드맵 Phase 1~6의 축소판이라, 처음에 보면 답을 미리 보는 셈이 된다. 지금 보면 **내가 8주 동안 한 것과 강사가 하는 것을 대조하는 검산**이 된다.

메인: [Relational Database Design](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/README.md), Module 4

- [ ] [01 Background and Requirements Discovery.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/Module%204%20-%20Case%20Study/01%20Background%20and%20Requirements%20Discovery.md) — Phase 1 대조. **내가 뽑은 업무 규칙에 빠진 종류가 있는지 본다**
- [ ] [02 Build the Entity Relationship Model.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/Module%204%20-%20Case%20Study/02%20Build%20the%20Entity%20Relationship%20Model.md) — Phase 2 대조
- [ ] [03 Create the Entity Relationship Diagram.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/Module%204%20-%20Case%20Study/03%20Create%20the%20Entity%20Relationship%20Diagram.md) — Phase 2 대조
- [ ] [04 Convert the ERD to the Relational Model.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/Module%204%20-%20Case%20Study/04%20Convert%20the%20ERD%20to%20the%20Relational%20Model.md) — Phase 3 대조
- [ ] [05 Normalize the Relational Model to 3NF.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/Module%204%20-%20Case%20Study/05%20Normalize%20the%20Relational%20Model%20to%203NF.md) — Phase 4 대조
- [ ] [06 Final Output for Implementation.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/Module%204%20-%20Case%20Study/06%20Final%20Output%20for%20Implementation.md) — **최종 산출물이 어떤 형태여야 하는지.** 내 산출물 목록과 비교한다

## 9-B. 실전 과제 — Little Lemon 캡스톤

메인: [Meta 08 Database Engineer Capstone](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/08%20Database%20Engineer%20Capstone/README.md)

식당 예약·주문 시스템을 MySQL로 설계하고 구현하는 과제다. **내 저장소 스키마와 도메인이 완전히 달라서 좋다** — 배운 절차가 다른 도메인에도 적용되는지 확인하는 자리다.

- [ ] [01 Introduction to the course.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/08%20Database%20Engineer%20Capstone/Module%201%20-%20Project%20Info/01%20Introduction%20to%20the%20course.md)
- [ ] [02 Project overview and set up.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/08%20Database%20Engineer%20Capstone/Module%201%20-%20Project%20Info/02%20Project%20overview%20and%20set%20up.md)
- [ ] [03 Module summary.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/08%20Database%20Engineer%20Capstone/Module%201%20-%20Project%20Info/03%20Module%20summary.md)
- [ ] [01 Creating report queries for Little Lemon sales data.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/08%20Database%20Engineer%20Capstone/Module%202%20-%20Database%20Queries%20Procedures%20and%20Prepared%20Statements/01%20Creating%20report%20queries%20for%20Little%20Lemon%20sales%20data.md) — **설계한 스키마에서 리포트 질의를 뽑는다.** 9-C가 하려는 일과 같다
- [ ] [02 Develop a table booking system.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/08%20Database%20Engineer%20Capstone/Module%202%20-%20Database%20Queries%20Procedures%20and%20Prepared%20Statements/02%20Develop%20a%20table%20booking%20system.md)
- [ ] [03 Module summary.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/08%20Database%20Engineer%20Capstone/Module%202%20-%20Database%20Queries%20Procedures%20and%20Prepared%20Statements/03%20Module%20summary.md)
- [ ] [01 Data analytics and visualization.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/08%20Database%20Engineer%20Capstone/Module%203%20-%20Clients%20and%20Visualization/01%20Data%20analytics%20and%20visualization.md) — [Phase 8](08%20Phase%208%20-%20분석계%20모델링.md)과 이어진다
- [ ] [02 Creating a database client.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/08%20Database%20Engineer%20Capstone/Module%203%20-%20Clients%20and%20Visualization/02%20Creating%20a%20database%20client.md)
- [ ] [03 Module summary.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/08%20Database%20Engineer%20Capstone/Module%203%20-%20Clients%20and%20Visualization/03%20Module%20summary.md)
- [ ] [01 Course recap for Capstone project.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/08%20Database%20Engineer%20Capstone/Module%204%20-%20Project%20Assessment/01%20Course%20recap%20for%20Capstone%20project.md)
- [ ] [02 Congratulations - you have completed the Capstone project.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/08%20Database%20Engineer%20Capstone/Module%204%20-%20Project%20Assessment/02%20Congratulations%20-%20you%20have%20completed%20the%20Capstone%20project.md)

## 9-C. 설계를 마무리한다

메인: [Database Design - A Modern Approach](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/README.md), Module 6

- [ ] [01 Course Summary.md](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/Module%206%20-%20Completing%20the%20Course/01%20Course%20Summary.md)

## 산출물 — 도착점

이 다섯 개가 갖춰지면 로드맵이 끝난 것이다. 강의 체크만으로는 끝나지 않는다.

1. **완성 스키마 한 벌** — `schema.sql`(운영) + `analytics.sql`(분석) + 마이그레이션 파일들. MySQL 8에서 처음부터 끝까지 실행된다.
2. **요구 질의 20개와 그 SQL** — [Phase 1](01%20Phase%201%20-%20설계%20프로세스와%20요구사항%20수집.md)에서 만든 "현행 구조의 문제점 목록"이 그대로 질의 목록이 된다. 반드시 포함할 것:
   - 이 강의를 체크한 로드맵이 몇 개인가
   - 어느 로드맵에도 속하지 않은 코스는 무엇인가 (**지금 `study-progress/{코스명}.md` 파일 6개를 손으로 관리하는 그 문제다**)
   - 지난 30일 로드맵별 진도는 몇 강인가
   - 한 로드맵이 소유한 강의와 참조만 하는 강의는 각각 몇 개인가
   - 같은 강의를 두 로드맵에서 서로 다른 날 체크한 경우가 있는가 (**동기화 누락 탐지**)
   - 2026년 8월 31일 시점의 로드맵 Phase 구조는 무엇이었나 ([Phase 5](05%20Phase%205%20-%20다대다와%20이력%20설계.md)의 SCD2 검증)
3. **샘플 데이터와 이상 재검증** — 실제 저장소 내용 일부(코스 10개, 로드맵 3개, 강의 200개 정도)를 넣고, [Phase 1](01%20Phase%201%20-%20설계%20프로세스와%20요구사항%20수집.md)의 세 가지 이상 조작을 다시 시도해 **제약 조건에 막히는지** 확인한다.
4. **데이터 사전(data dictionary)** — 테이블·컬럼마다 뜻·타입·제약·NULL 의미를 적는다. **여기에 설계 판단의 근거도 함께 남긴다** — 대리키를 쓴 이유, 서브타입을 통합한 이유, SCD2를 어디에만 건 이유. 6개월 뒤의 내가 읽을 문서다.
5. **회고 — 어디가 틀렸나** — 9-A의 케이스 스터디와 대조해 내 설계에서 뒤늦게 고친 것을 정리한다. **Phase 2의 ERD와 최종 스키마가 얼마나 달라졌는지**가 이 로드맵에서 실제로 배운 양이다.

## 다음에 할 것

- **운영 관점으로 넘어간다** → **DB 운영 안정화 로드맵**. 만든 스키마에 수백만 행을 넣고 실행계획을 뜨는 것이 그 로드맵의 Phase 2다. **이 로드맵의 산출물이 그대로 그쪽의 실습 대상이 된다.**
- **개인정보를 다루는 스키마를 설계하게 되면** → [10 부록](10%20부록%20-%20개인정보와%20데이터%20거버넌스.md), 그리고 **AI 네이티브 CRM 구축 로드맵 Phase 4**
- **관계형이 안 맞는 데이터를 만나면** → [11 부록](11%20부록%20-%20관계형을%20벗어날%20때.md)
- **한 대로 감당이 안 되면** → [12 부록](12%20부록%20-%20분산과%20파티셔닝.md)
