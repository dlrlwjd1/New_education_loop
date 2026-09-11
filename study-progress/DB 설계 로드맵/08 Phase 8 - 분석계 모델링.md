# Phase 8 — 분석계 모델링

- 목표: "지난 3개월 로드맵별 진도가 어떻게 변했나"를 답하는 분석용 스키마를 따로 설계하고, 왜 운영 스키마와 다르게 만드는지 설명한다.
- 분량: 약 9시간
- 저장소 자료: **부분** — 스타·스노우플레이크 스키마는 있으나 **OBT 논쟁은 강의가 없다**
- 마지막 학습일: (미학습)

## 왜 정규화를 다시 되돌리는가

[Phase 4](04%20Phase%204%20-%20정규화와%20함수%20종속.md)에서 중복을 없애느라 테이블을 쪼갰다. 그런데 "로드맵별·월별 진도 추이"를 뽑으려면 그 쪼갠 것을 전부 다시 조인해야 한다. **운영에서 옳은 설계가 분석에서는 틀린 설계가 된다.**

순서를 이렇게 잡은 이유가 여기 있다. 정규화를 먼저 몸에 붙이지 않고 팩트·디멘션부터 배우면 "중복해도 된다"만 남는다. **되돌리는 것과 처음부터 안 쪼개는 것은 다르다.**

## 이 단계가 끝나면 할 수 있어야 하는 것

- OLTP 모델과 OLAP 모델이 왜 달라야 하는지 설명할 수 있다
- 팩트 테이블과 디멘션 테이블을 구분해 스타 스키마를 그릴 수 있다
- 그레인(granularity)을 한 문장으로 정의할 수 있다 — "이 팩트 테이블의 한 행은 무엇 하나인가"
- 스타와 스노우플레이크 중 무엇을 쓸지 근거를 대고 고를 수 있다
- OBT(One Big Table)가 유리한 조건과 그 대가를 설명할 수 있다

## 8-A. 데이터 모델의 종류와 그레인

메인: [Data Modeling and Architecture](../../courses/mooc/Databases%20and%20SQL/Data%20Modeling%20and%20Architecture/README.md), Module 1

> ⚠️ 02~05 네 강의의 진행 기록 원본은 **디지털 트윈 로드맵 Phase 1**이다. 저쪽은 물리 자산의 측정 그레인, 이쪽은 학습 진도의 그레인이다. **양쪽에 학습일을 적는다.**

- [ ] [01 Course Introduction.md](../../courses/mooc/Databases%20and%20SQL/Data%20Modeling%20and%20Architecture/Module%201%20-%20Data%20Modeling%20Basics/01%20Course%20Introduction.md)
- [ ] [02 Introduction to Data Models.md](../../courses/mooc/Databases%20and%20SQL/Data%20Modeling%20and%20Architecture/Module%201%20-%20Data%20Modeling%20Basics/02%20Introduction%20to%20Data%20Models.md)
- [ ] [03 Cardinality and Granularity.md](../../courses/mooc/Databases%20and%20SQL/Data%20Modeling%20and%20Architecture/Module%201%20-%20Data%20Modeling%20Basics/03%20Cardinality%20and%20Granularity.md) — **그레인을 여기서 정한다.** 우리 경우 한 행이 "강의 하나를 체크한 사건"인가, "하루치 진도 요약"인가, "로드맵-월 조합"인가. 이 선택이 이후 저장량과 답할 수 있는 질문을 모두 결정한다
- [ ] [04 Data Schema Types.md](../../courses/mooc/Databases%20and%20SQL/Data%20Modeling%20and%20Architecture/Module%201%20-%20Data%20Modeling%20Basics/04%20Data%20Schema%20Types.md) — 스키마 유형 비교
- [ ] [05 Fact and Dimension Tables.md](../../courses/mooc/Databases%20and%20SQL/Data%20Modeling%20and%20Architecture/Module%201%20-%20Data%20Modeling%20Basics/05%20Fact%20and%20Dimension%20Tables.md) — **측정값은 팩트, 설명은 디멘션.** 학습일·강의 수가 팩트고 코스·로드맵·날짜가 디멘션이다
- [ ] [06 Building a Star Schema in Power BI.md](../../courses/mooc/Databases%20and%20SQL/Data%20Modeling%20and%20Architecture/Module%201%20-%20Data%20Modeling%20Basics/06%20Building%20a%20Star%20Schema%20in%20Power%20BI.md) — 도구는 Power BI지만 **스키마 형태 자체를 보는 것이 목적**이다
- [ ] [07 Building a Snowflake Schema in Power BI.md](../../courses/mooc/Databases%20and%20SQL/Data%20Modeling%20and%20Architecture/Module%201%20-%20Data%20Modeling%20Basics/07%20Building%20a%20Snowflake%20Schema%20in%20Power%20BI.md) — **스노우플레이크는 디멘션을 정규화한 것이다.** 우리 카테고리→코스 계층이 딱 이 형태가 된다

> Module 2(DAX)는 Power BI 수식 언어라 이 로드맵 범위 밖이다. 건너뛴다. Module 3은 [10 부록](10%20부록%20-%20개인정보와%20데이터%20거버넌스.md)에서 본다.

## 8-B. 데이터 웨어하우스와 차원 모델링

메인: [Meta 07 Advanced Data Modeling](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/07%20Advanced%20Data%20Modeling/README.md), Module 2

- [ ] [01 Overview of data warehousing.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/07%20Advanced%20Data%20Modeling/Module%202%20-%20Data%20Warehousing/01%20Overview%20of%20data%20warehousing.md) — **운영 DB와 분리하는 이유.** 무거운 분석 쿼리가 운영을 잡아먹는 사고가 **DB 운영 안정화 로드맵**이 만들어진 계기였다
- [ ] [02 Data warehouse architecture.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/07%20Advanced%20Data%20Modeling/Module%202%20-%20Data%20Warehousing/02%20Data%20warehouse%20architecture.md)
- [ ] [03 Case Study - Real world data project.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/07%20Advanced%20Data%20Modeling/Module%202%20-%20Data%20Warehousing/03%20Case%20Study%20-%20Real%20world%20data%20project.md)
- [ ] [04 Fundamentals of dimensional data modeling.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/07%20Advanced%20Data%20Modeling/Module%202%20-%20Data%20Warehousing/04%20Fundamentals%20of%20dimensional%20data%20modeling.md) — **차원 모델링 본편**
- [ ] [05 Dimensional data modeling in practice.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/07%20Advanced%20Data%20Modeling/Module%202%20-%20Data%20Warehousing/05%20Dimensional%20data%20modeling%20in%20practice.md)
- [ ] [06 Module summary - Data warehousing.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/07%20Advanced%20Data%20Modeling/Module%202%20-%20Data%20Warehousing/06%20Module%20summary%20-%20Data%20warehousing.md)

**[Phase 5](05%20Phase%205%20-%20다대다와%20이력%20설계.md)의 SCD2가 여기서 제자리를 찾는다.** SCD2는 원래 차원 모델링 기법이다. Phase 5에서는 운영 테이블의 이력 보존으로 배웠지만, 원래 용도는 "디멘션이 바뀌어도 과거 팩트가 당시 디멘션을 가리키게" 하는 것이다. 필요하면 Phase 5의 5-C를 다시 훑는다.

## 8-C. 스타 스키마 vs OBT — 강의 없음

**저장소에 자료가 없다.** 스타·스노우플레이크는 8-A에서 다뤘지만, 최근 이 둘을 흔든 세 번째 선택지는 강의로 정리된 것이 없다.

웹 조사(2026-09-08)로 확인한 논점:

- **OBT(One Big Table)** — 팩트와 디멘션을 조인 없이 하나의 아주 넓은 테이블에 다 넣는다. BigQuery·Snowflake·Redshift 같은 **컬럼형(columnar) 저장 엔진**이 퍼지면서 실용화됐다. 읽지 않는 컬럼은 아예 스캔하지 않으므로 넓은 테이블의 대가가 예전만큼 크지 않다.
- **성능 주장** — [Fivetran](https://www.fivetran.com/blog/star-schema-vs-obt)은 Redshift·Snowflake·BigQuery에서 와이드 테이블이 스타 스키마 대비 25~50% 빠르다고 보고한다.
- **정리된 결론** — "스타 스키마는 아직 안 떠올린 질문에도 답하는 유연한 바닥이고, OBT는 이미 아는 질문에 빠르게 답하는 것이다. 성숙한 구성에서 둘은 경쟁자가 아니라 **레이어**다."
- ⚠️ 위 출처는 **검색 결과로 확인했고 원문 전체를 열어 읽지는 않았다.** 인용할 때 직접 연다.

**MySQL은 행 기반(row-oriented)이라 OBT의 이점이 그대로 오지 않는다.** 이 저장소 규모에서는 어느 쪽도 성능 차이가 안 난다. 그러니 이 절의 목적은 성능이 아니라 **"어떤 조건에서 이 판단이 뒤집히는지 아는 것"** 이다.

## 산출물

1. **학습 진도 스타 스키마** — 팩트 하나와 디멘션 서너 개. 최소 요건:
   - 그레인을 **한 문장**으로 명시한다. 예: "이 팩트 테이블의 한 행은 한 사람이 하루에 강의 하나를 완료한 사건이다"
   - 날짜 디멘션을 따로 둔다 (연·월·주차·요일). **"주말에 더 많이 공부하는가"를 답하려면 필요하다**
   - 로드맵 디멘션이 SCD2인지 아닌지 판단한다 — 로드맵 Phase 구조가 바뀌었을 때 과거 진도를 어느 기준으로 볼 것인가
2. **운영 스키마 대비표** — Phase 6의 운영 스키마와 이 분석 스키마가 어디서 어떻게 다른지, 각 차이가 어떤 질문 때문에 생겼는지 적는다.
3. **OBT 판단서** — 같은 데이터를 OBT 한 장으로도 만들어 보고, 두 방식으로 같은 질문 3개를 조회해 SQL 길이와 실행 시간을 비교한다. **"이 규모에서는 차이가 없다"가 결론이어도 된다** — 중요한 건 언제 뒤집히는지를 적는 것이다.
4. **적재 방법 메모** — 운영 스키마에서 분석 스키마로 데이터를 옮기는 방법을 정한다. 이 로드맵은 파이프라인 구축을 다루지 않으므로 **SQL 한 벌이면 충분하다.** 자동화가 필요해지면 **디지털 트윈 로드맵 Phase 4**로 간다.

## 다음 단계

→ [09 Phase 9 - 완성과 검증](09%20Phase%209%20-%20완성과%20검증.md)
