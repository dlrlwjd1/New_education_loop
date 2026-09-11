# Phase 7 — 모델링 도구와 코드로 옮기기

- 목표: 손으로 그리던 ERD를 도구로 옮겨 DDL과 왕복시키고, 스키마를 코드처럼 버전 관리한다.
- 분량: 약 8시간
- 저장소 자료: **부분** — 도구(MySQL Workbench)와 ORM은 있으나 **마이그레이션 도구와 데이터 계약은 강의가 없다**
- 마지막 학습일: (미학습)

## 왜 이 Phase가 필요한가

[Phase 6](06%20Phase%206%20-%20물리%20모델과%20무결성.md)까지 오면 스키마가 완성된다. 그런데 실무에서 설계가 실패하는 지점은 대개 그 다음이다 — **ERD와 실제 DB가 어긋나고, 스키마 변경 이력이 어디에도 남지 않는다.** 처음 만드는 것보다 바꾸는 것이 어렵다.

## 이 단계가 끝나면 할 수 있어야 하는 것

- MySQL Workbench로 ERD를 그리고 DDL을 생성(forward engineer)할 수 있다
- 이미 있는 DB에서 ERD를 역생성(reverse engineer)해 문서와 실물의 차이를 찾을 수 있다
- ORM 엔티티가 스키마가 되는 경로와 그 위험을 설명할 수 있다
- 스키마 변경을 버전이 붙은 마이그레이션 파일로 관리할 수 있다
- 스키마를 소비하는 쪽에 무엇을 약속하고 무엇을 바꿔도 되는지 구분할 수 있다

## 7-A. MySQL Workbench로 모델링

메인: [Meta 07 Advanced Data Modeling](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/07%20Advanced%20Data%20Modeling/README.md), Module 1

- [ ] [01 Introduction to Advanced Data Modeling.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/07%20Advanced%20Data%20Modeling/Module%201%20-%20Data%20Modeling%20and%20Management/01%20Introduction%20to%20Advanced%20Data%20Modeling.md)
- [ ] [02 How is data modeling used at Meta.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/07%20Advanced%20Data%20Modeling/Module%201%20-%20Data%20Modeling%20and%20Management/02%20How%20is%20data%20modeling%20used%20at%20Meta.md) — 조직에서 모델링이 어떤 일인지. 건너뛰어도 된다
- [ ] [03 Overview of data modeling.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/07%20Advanced%20Data%20Modeling/Module%201%20-%20Data%20Modeling%20and%20Management/03%20Overview%20of%20data%20modeling.md)
- [ ] [04 Types of data models.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/07%20Advanced%20Data%20Modeling/Module%201%20-%20Data%20Modeling%20and%20Management/04%20Types%20of%20data%20models.md) — 개념·논리·물리를 Meta 방식으로 다시 정리한다
- [ ] [05 Recap - Normalization of relational database models.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/07%20Advanced%20Data%20Modeling/Module%201%20-%20Data%20Modeling%20and%20Management/05%20Recap%20-%20Normalization%20of%20relational%20database%20models.md) — [Phase 4](04%20Phase%204%20-%20정규화와%20함수%20종속.md) 복습. 건너뛰어도 된다
- [ ] [06 Introduction to MySQL Workbench.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/07%20Advanced%20Data%20Modeling/Module%201%20-%20Data%20Modeling%20and%20Management/06%20Introduction%20to%20MySQL%20Workbench.md)
- [ ] [07 Data management in MySQL Workbench.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/07%20Advanced%20Data%20Modeling/Module%201%20-%20Data%20Modeling%20and%20Management/07%20Data%20management%20in%20MySQL%20Workbench.md)
- [ ] [08 Database modeling in MySQL Workbench.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/07%20Advanced%20Data%20Modeling/Module%201%20-%20Data%20Modeling%20and%20Management/08%20Database%20modeling%20in%20MySQL%20Workbench.md) — **이 절의 본체.** EER 다이어그램을 그리고 DDL로 내리는 왕복을 여기서 배운다
- [ ] [09 Module summary - Data modeling and management.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/07%20Advanced%20Data%20Modeling/Module%201%20-%20Data%20Modeling%20and%20Management/09%20Module%20summary%20-%20Data%20modeling%20and%20management.md)

> **Phase 2에서 손으로 그린 ERD를 Workbench로 다시 그린다.** 옮기는 과정에서 Workbench가 표현하지 못하는 것(예: 관계에 붙인 주석, 아직 못 정한 미결 사항)이 드러난다. 그게 도구의 한계이자, 문서를 따로 남겨야 하는 이유다.

## 7-B. 엔티티가 스키마가 될 때 — ORM

메인: [Mastering NestJS](../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/README.md), Module 7

> ⚠️ 이 강좌의 진행 기록 원본은 [인공지능융합공학부 T5 Phase 2](../인공지능융합공학부%20로드맵/T5%20AI%20서비스%20개발과%20인프라/02%20Phase%202%20-%20서버%20프로그래밍.md)다. 저쪽은 서버 개발 관점, 이쪽은 "코드가 스키마를 만들 때 무엇이 위험한가"만 본다. **양쪽에 학습일을 적는다.**

- [ ] [01 Connecting to MySQL Database Using TypeORM.md](../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%207%20-%20NestJS%20With%20MySQL/01%20Connecting%20to%20MySQL%20Database%20Using%20TypeORM.md)
- [ ] [02 Creating Entity with TypeORM.md](../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%207%20-%20NestJS%20With%20MySQL/02%20Creating%20Entity%20with%20TypeORM.md) — **엔티티 클래스가 테이블을 만든다.** 편하지만, 이때 설계 판단은 누가 하는가?

함께 보기: 한국어 실무 관점

- [ ] [2026-07-27 AI가 SQL 작성이 가능한데도 ORM을 써야할까 #3.md](../../courses/youtube/개발바닥/2026-07-27%20AI가%20SQL%20작성이%20가능한데도%20ORM을%20써야할까%20%233.md)

**이 절에서 잡아야 할 것**: ORM의 `synchronize: true`는 개발 편의를 주는 대신 **스키마 변경 이력을 남기지 않는다.** Phase 6에서 만든 제약 조건 중 ORM이 표현하지 못하는 것이 무엇인지 목록으로 확인한다. 그게 7-C가 필요한 이유다.

## 7-C. 스키마를 버전 관리한다 — 강의 없음

**저장소에 자료가 없다.** MOOC·Udemy에서도 이 주제를 정면으로 다루는 강좌를 확인하지 못했다 (조사일 2026-09-08, [13 부록](13%20부록%20-%20추천%20강의%20종합.md) 참조). 공식 문서와 산출물 과제로 채운다.

**개념만 먼저**: 스키마 변경을 순서 있는 파일(`V1__create_course.sql`, `V2__add_index.sql`, …)로 남기고, DB에 "지금 몇 번까지 적용됐는지"를 기록하는 테이블을 두는 방식이다. 애플리케이션 코드를 git으로 관리하는 것과 같은 발상이며, [Meta 02 Version Control](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/02%20Version%20Control/README.md)에서 배운 git의 사고를 스키마로 옮긴 것이다.

도구는 크게 둘이다. 웹 조사(2026-09-08)로 확인한 차이:

| 도구 | 변경 기술 방식 | 고르는 기준 |
|---|---|---|
| Flyway | SQL 파일 중심 (Java 확장 가능) | 팀이 SQL을 직접 쓰는 게 편하고, 변경이 단순 추가·변경 위주일 때 |
| Liquibase | XML·YAML·JSON·SQL | 롤백·전제조건(precondition)·드리프트 탐지 같은 통제가 필요할 때 |

- 참고: [Flyway 공식 문서](https://documentation.red-gate.com/flyway) · [Liquibase 공식 문서](https://docs.liquibase.com/)
- ⚠️ 위 두 링크는 **원문을 열어 확인하지 않았다.** 실제로 쓸 때 직접 연다.

## 7-D. 스키마를 소비하는 쪽과의 약속 — 강의 없음

**저장소에도 강좌 플랫폼에도 자료가 없다.** 2026년 데이터 관리 논의에서 가장 자주 나오는 주제인데([Dataversity](https://www.dataversity.net/articles/data-management-trends/), 조사일 2026-09-08) 강의로는 아직 정리되지 않았다.

핵심만: **데이터 계약(data contract)** 은 "이 테이블은 무엇을 보장하는가"를 명시적으로 적어 두는 것이다. 스키마(컬럼·타입), 신선도, 볼륨, 의미. 계약이 있으면 스키마를 바꿀 때 "이건 깨는 변경인가"를 판단할 수 있다.

- **깨지 않는 변경**: 컬럼 추가, 인덱스 추가, 제약 완화
- **깨는 변경**: 컬럼 삭제·개명, 타입 축소, 제약 강화, 의미 변경 (**같은 컬럼 이름으로 다른 뜻을 넣는 것이 가장 위험하다**)

## 산출물

1. **Workbench 모델 파일(`.mwb`)** — Phase 2의 ERD를 옮겨 그리고, Phase 6의 `schema.sql`과 일치시킨다. **역생성으로 실제 DB와 대조해 차이가 0이 되게 한다.**
2. **마이그레이션 파일 세트** — Phase 6의 `schema.sql`을 순서 있는 마이그레이션 파일로 쪼갠다. 도구를 안 써도 된다 — `migrations/001_*.sql` 같은 파일 규칙과 적용 이력 테이블만 있어도 충분하다. 그 뒤 **의도적으로 스키마를 한 번 바꿔 본다**(예: 강의에 `추정 학습시간` 컬럼 추가) — 마이그레이션 파일 하나가 늘고, 처음부터 다시 적용해도 같은 결과가 나오는지 확인한다.
3. **데이터 계약 문서 v1** — 이 저장소 스키마를 읽는 쪽(진행률 조회 스크립트, 대시보드, 다른 도구)에 무엇을 약속할지 적는다. 테이블마다 "이 컬럼은 절대 안 바뀐다 / 바뀔 수 있다"를 표시한다. **Phase 9의 데이터 사전과 합쳐진다.**
4. **ORM 한계 목록** — Phase 6의 제약 중 TypeORM 엔티티로 표현되지 않는 것을 나열한다. 그게 "ORM만 믿으면 안 되는 이유"의 근거가 된다.

## 다음 단계

→ [08 Phase 8 - 분석계 모델링](08%20Phase%208%20-%20분석계%20모델링.md)
