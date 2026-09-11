# Phase 4 — 정규화와 함수 종속

- 목표: Phase 3의 관계 스키마에서 함수 종속을 모두 찾아내고, 3NF와 BCNF를 만족하는지 검증해 분해한다.
- 분량: 약 10시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 테이블에서 함수 종속(functional dependency)을 찾아 `X → Y` 형식으로 적을 수 있다
- 완전·부분·이행 함수 종속을 구분할 수 있다
- 속성 폐포(attribute closure)를 계산해 후보키를 기계적으로 구할 수 있다
- 1NF·2NF·3NF·BCNF를 각각 판정하고 위반 시 분해할 수 있다
- 분해가 무손실(lossless)인지 확인할 수 있다
- 성능을 위해 비정규화할 때 무엇을 잃는지 설명할 수 있다

> **Phase 1의 이상(anomaly) 재현 노트를 꺼내 놓고 시작한다.** 이 Phase의 모든 규칙은 그 세 가지 이상을 없애기 위한 것이다. 규칙부터 외우면 왜 하는지 모른 채 끝난다.

## 4-A. 함수 종속

**여기가 이 로드맵 전체에서 가장 이론적이고, 가장 중요하다.** 정규형은 전부 함수 종속으로 정의되므로 이걸 건너뛰면 나머지가 암기가 된다.

메인: [Relational Database Design (Illinois Tech)](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design%20%28Illinois%20Tech%29/README.md), Module 2

- [ ] [01 Functional Dependency (FD).md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design%20%28Illinois%20Tech%29/Module%202%20-%20Functional%20Dependency/01%20Functional%20Dependency%20%28FD%29.md) — **`X → Y`는 "X가 같으면 Y도 반드시 같다"는 뜻이다.** 데이터를 보고 정하는 게 아니라 업무 규칙에서 나온다
- [ ] [02 Attribute Closure and Candidate Keys.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design%20%28Illinois%20Tech%29/Module%202%20-%20Functional%20Dependency/02%20Attribute%20Closure%20and%20Candidate%20Keys.md) — **후보키를 눈대중이 아니라 계산으로 구한다.** Phase 3에서 감으로 고른 기본키를 여기서 검산한다
- [ ] [03 Canonical (Minimal) Cover of FDs.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design%20%28Illinois%20Tech%29/Module%202%20-%20Functional%20Dependency/03%20Canonical%20%28Minimal%29%20Cover%20of%20FDs.md) — 종속 집합에서 군더더기를 걷어낸다. 3NF 분해의 입력이 된다

함께 보기: [Relational Database Design](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/README.md) Module 3 — 같은 개념을 덜 형식적으로, 예제 중심으로

- [ ] [02 Functional Dependencies.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/Module%203%20-%20Normalization/02%20Functional%20Dependencies.md)
- [ ] [03 Full Partial and Transitive Functional Dependencies.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/Module%203%20-%20Normalization/03%20Full%20Partial%20and%20Transitive%20Functional%20Dependencies.md) — **부분 종속은 2NF가, 이행 종속은 3NF가 없애는 대상이다.** 이 대응을 외워 두면 정규형 판정이 기계적으로 된다

> ⚠️ 이 두 강의는 **DB 운영 안정화 10 부록**에도 걸려 있다. 거기서 이미 봤다면 **양쪽에 학습일을 적는다.**

## 4-B. 정규형 1NF~3NF

메인: [Database Design - A Modern Approach](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/README.md), Module 4

- [ ] [01 Lesson Introduction.md](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/Module%204%20-%20Normalizing%20Data/01%20Lesson%20Introduction.md)
- [ ] [02 Avoid Common Database Design Errors.md](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/Module%204%20-%20Normalizing%20Data/02%20Avoid%20Common%20Database%20Design%20Errors.md) — **반복 그룹·다목적 컬럼 같은 실제로 자주 나오는 실수들**

함께 보기: 같은 내용의 세 가지 버전. **하나만 골라 보고 나머지는 헷갈릴 때 참고한다.**

- [ ] [04 Normal Forms and Normalization Process.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/Module%203%20-%20Normalization/04%20Normal%20Forms%20and%20Normalization%20Process.md) — 한 강에 1NF~3NF를 압축
- [ ] [01 Database Normalization.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design%20%28Illinois%20Tech%29/Module%203%20-%20Database%20Normalization/01%20Database%20Normalization.md) — 형식적 정의 중심
- [ ] [04 Database Normalization.md](../../courses/mooc/Databases%20and%20SQL/PostgreSQL%20for%20Everybody/Course%201%20-%20Database%20Design%20and%20Basic%20SQL%20in%20PostgreSQL/Module%203%20-%20One-To-Many%20Data%20Models/04%20Database%20Normalization.md) — 가장 짧다. 실무 감각 위주

MySQL 맥락에서 단계별로 천천히 가고 싶으면: [Meta 01](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/01%20Introduction%20to%20Databases/README.md) Module 4. 강의 하나에 정규형 하나씩이라 처음이면 이쪽이 편하다.

- [ ] [08 What is database normalization.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/01%20Introduction%20to%20Databases/Module%204%20-%20Database%20design/08%20What%20is%20database%20normalization.md)
- [ ] [09 First normal form 1NF.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/01%20Introduction%20to%20Databases/Module%204%20-%20Database%20design/09%20First%20normal%20form%201NF.md)
- [ ] [10 Second normal form 2NF.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/01%20Introduction%20to%20Databases/Module%204%20-%20Database%20design/10%20Second%20normal%20form%202NF.md)
- [ ] [11 Third normal form 3NF.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/01%20Introduction%20to%20Databases/Module%204%20-%20Database%20design/11%20Third%20normal%20form%203NF.md)
- [ ] [12 Module summary - Database design.md](../../courses/mooc/Databases%20and%20SQL/Meta%20Database%20Engineer/01%20Introduction%20to%20Databases/Module%204%20-%20Database%20design/12%20Module%20summary%20-%20Database%20design.md)

## 4-C. BCNF와 고차 정규형

메인: Relational Database Design (Illinois Tech), Module 3

- [ ] [02 Boyce-Codd Normal Form.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design%20%28Illinois%20Tech%29/Module%203%20-%20Database%20Normalization/02%20Boyce-Codd%20Normal%20Form.md) — **3NF는 만족하는데 BCNF는 위반하는 경우가 언제 생기는가.** 후보키가 여럿이고 겹칠 때다
- [ ] [03 Database Design Example (Normalization + ERD).md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design%20%28Illinois%20Tech%29/Module%203%20-%20Database%20Normalization/03%20Database%20Design%20Example%20%28Normalization%20+%20ERD%29.md) — ERD와 정규화를 같이 놓고 푸는 예제

메인: Database Design - A Modern Approach, Module 4

- [ ] [03 Comply with Higher Normal Forms.md](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/Module%204%20-%20Normalizing%20Data/03%20Comply%20with%20Higher%20Normal%20Forms.md) — **BCNF·4NF·5NF.** 저장소에서 4NF 이상을 다루는 유일한 자료다. 실무에서 4NF까지 갈 일은 드물지만 "다치 종속(multivalued dependency)이 무엇인지"는 알아 둔다
- [ ] [04 Lesson Summary.md](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/Module%204%20-%20Normalizing%20Data/04%20Lesson%20Summary.md)

## 4-D. 되돌리기 — 비정규화는 언제 하는가

**강의 없이 판단하는 절이다.** 저장소에 비정규화를 정면으로 다루는 강의는 없고, 인접 자료로 감각을 잡는다.

- 참고: **DB 운영 안정화 Phase 6** — 운영 관점에서 스키마가 성능에 미치는 영향
- 참고: [Phase 8](08%20Phase%208%20-%20분석계%20모델링.md) — 분석계는 아예 처음부터 비정규화로 설계한다. 그 논리를 여기서 미리 본다

판단 기준을 문장으로 만들어 둔다. 최소한 이 셋은 답을 갖는다.

1. 조인이 몇 개를 넘으면 비정규화를 고려하는가, 그 숫자의 근거는 무엇인가
2. 비정규화로 만든 중복을 **무엇이 동기화 책임을 지는가** (트리거·애플리케이션·배치 중)
3. 동기화가 깨졌을 때 **어떻게 알아차리는가** — 검출 수단 없는 비정규화는 하지 않는다

## 산출물

1. **함수 종속 목록** — Phase 3의 테이블마다 발견한 종속을 `X → Y`로 전부 나열한다. **데이터를 보고 추측한 것과 업무 규칙에서 나온 것을 구분해 표시한다.** 지금 데이터에서 우연히 성립하는 종속을 규칙으로 착각하는 것이 가장 흔한 실수다.
2. **정규형 판정서** — 테이블마다 어느 정규형까지 만족하는지, 위반이면 어느 종속 때문인지, 어떻게 분해했는지를 적는다. **분해 전후 스키마를 나란히 둔다.**
3. **Phase 1 이상(anomaly) 재현 노트 재검증** — Phase 1에서 만든 비정규 테이블을 3NF로 분해한 뒤, 같은 세 가지 조작(갱신·삽입·삭제)을 반복해 이상이 사라졌는지 확인한다. **이 확인이 Phase 4가 끝났다는 증거다.**
4. **BCNF 검토 결과** — 3NF를 만족하는 테이블 중 BCNF를 위반하는 것이 있는지 확인하고, 있다면 분해할지 말지 판단한다. (BCNF 분해는 종속성 보존을 깨뜨릴 수 있으므로 항상 분해하는 것이 정답은 아니다 — 그 판단을 문장으로 남긴다)

## 다음 단계

→ [05 Phase 5 - 다대다와 이력 설계](05%20Phase%205%20-%20다대다와%20이력%20설계.md)
