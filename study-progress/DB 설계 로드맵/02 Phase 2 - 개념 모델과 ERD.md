# Phase 2 — 개념 모델과 ERD

- 목표: Phase 1의 업무 규칙 문장을 엔티티·속성·관계로 옮겨, learning-hub 저장소 전체를 담은 ERD를 그린다.
- 분량: 약 9시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 요구사항 문장에서 엔티티와 속성과 관계를 갈라낼 수 있다
- 관계마다 차수(degree)·카디널리티·참여 제약을 판정해 표기할 수 있다
- 까마귀발(Crow's Foot) 표기법으로 ERD를 읽고 그릴 수 있다
- 약한 엔티티와 식별 관계(identifying relationship)를 알아보고 실선/점선으로 구분할 수 있다
- 서브타입·슈퍼타입이 필요한 자리를 알아볼 수 있다

> **도구**: 무엇으로 그려도 된다. MySQL Workbench는 [Phase 7](07%20Phase%207%20-%20모델링%20도구와%20코드로%20옮기기.md)에서 정식으로 배우므로, 여기서는 종이·화이트보드·Mermaid 중 편한 것을 쓴다. **도구를 고르느라 시작을 미루지 않는다.**

## 2-A. 엔티티와 속성

메인: [Relational Database Design](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/README.md), Module 1

- [ ] [05 What are Entities and Attributes (Identifiers).md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/Module%201%20-%20Introduction%20to%20DBMS%20and%20Entity%20Relational%20Models/05%20What%20are%20Entities%20and%20Attributes%20%28Identifiers%29.md) — **엔티티와 속성을 가르는 기준.** "이것은 따로 존재하는가, 아니면 무언가를 설명할 뿐인가"

함께 보기: [Database Design - A Modern Approach](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/README.md) Module 2 — 같은 내용을 설계 프로세스 흐름 안에서 다룬다

- [ ] [01 Lesson Introduction.md](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/Module%202%20-%20Defining%20the%20Database%20Conceptual%20Model/01%20Lesson%20Introduction.md)
- [ ] [02 Create the Conceptual Model.md](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/Module%202%20-%20Defining%20the%20Database%20Conceptual%20Model/02%20Create%20the%20Conceptual%20Model.md) — **개념 모델에서는 아직 컬럼도 타입도 정하지 않는다.** 이걸 못 참고 타입을 적기 시작하면 Phase 3·6이 무의미해진다

## 2-B. 관계 — 차수·카디널리티·참여 제약

**여기가 Phase 2에서 가장 오래 붙잡고 있어야 할 곳이다.** 이 저장소의 관계는 대부분 단순하지 않다.

메인: Relational Database Design, Module 1

- [ ] [06 What are Relationships - Degree, Cardinality and Participation.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/Module%201%20-%20Introduction%20to%20DBMS%20and%20Entity%20Relational%20Models/06%20What%20are%20Relationships%20-%20Degree,%20Cardinality%20and%20Participation.md) — **카디널리티(몇 개와 연결되는가)와 참여 제약(반드시 연결되어야 하는가)은 다른 질문이다.** 이 저장소로 치면 "로드맵 없는 코스가 있는가"가 참여 제약이고, 실제로 있다

함께 보기: Database Design - A Modern Approach, Module 2

- [ ] [03 Identify Entity Relationships.md](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/Module%202%20-%20Defining%20the%20Database%20Conceptual%20Model/03%20Identify%20Entity%20Relationships.md)
- [ ] [04 Lesson Summary.md](../../courses/mooc/Databases%20and%20SQL/Database%20Design%20-%20A%20Modern%20Approach/Module%202%20-%20Defining%20the%20Database%20Conceptual%20Model/04%20Lesson%20Summary.md)

## 2-C. ERD 표기법

메인: Relational Database Design, Module 1

- [ ] [07 Entity Relationship Model Representation.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/Module%201%20-%20Introduction%20to%20DBMS%20and%20Entity%20Relational%20Models/07%20Entity%20Relationship%20Model%20Representation.md) — 첸(Chen) 표기법. 학술 문헌에서 만나는 형태다
- [ ] [08 Crow's Foot Notation.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/Module%201%20-%20Introduction%20to%20DBMS%20and%20Entity%20Relational%20Models/08%20Crow's%20Foot%20Notation.md) — **실무 표준은 이쪽이다.** MySQL Workbench·ERwin·dbdiagram 전부 까마귀발이므로 이 표기로 그린다
- [ ] [09 In-Class Exercise (Drawing an ERD).md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design/Module%201%20-%20Introduction%20to%20DBMS%20and%20Entity%20Relational%20Models/09%20In-Class%20Exercise%20%28Drawing%20an%20ERD%29.md) — **반드시 손으로 따라 그린다.** 읽기만 하면 안 그려진다

함께 보기: [Relational Database Design (Illinois Tech)](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design%20%28Illinois%20Tech%29/README.md) Module 1 — 더 형식적이고 짧다

- [ ] [01 Instructor Welcome and Course Introduction.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design%20%28Illinois%20Tech%29/Module%201%20-%20Design%20Overview/01%20Instructor%20Welcome%20and%20Course%20Introduction.md)
- [ ] [02 Entity - Relationship (ER) Model.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design%20%28Illinois%20Tech%29/Module%201%20-%20Design%20Overview/02%20Entity%20-%20Relationship%20%28ER%29%20Model.md)
- [ ] [03 Creating an Entity - Relationship Diagram (ERD).md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design%20%28Illinois%20Tech%29/Module%201%20-%20Design%20Overview/03%20Creating%20an%20Entity%20-%20Relationship%20Diagram%20%28ERD%29.md)

## 2-D. 확장 ER — 약한 엔티티와 서브타입

메인: Relational Database Design (Illinois Tech), Module 1

- [ ] [04 Extended ER Model-Diagram.md](../../courses/mooc/Databases%20and%20SQL/Relational%20Database%20Design%20%28Illinois%20Tech%29/Module%201%20-%20Design%20Overview/04%20Extended%20ER%20Model-Diagram.md) — **일반화·특수화(서브타입/슈퍼타입)와 약한 엔티티.** 저장소 유일 자료다

이 저장소에서 실제로 걸리는 자리는 이렇다. 강의를 보고 나서 각각 판단해 본다.

- **약한 엔티티** — 모듈은 코스 없이 존재할 수 있는가? 강의는 모듈 없이 존재할 수 있는가? (YouTube 자료는 모듈이 없다)
- **서브타입** — 코스는 MOOC·Udemy·YouTube·DeepLearning.AI마다 구조가 다르다. MOOC만 카테고리가 있고, Udemy는 섹션, YouTube는 평면 구조에 날짜 파일명이다. **하나의 `코스` 엔티티로 갈 것인가, 플랫폼별 서브타입으로 갈 것인가**가 이 저장소 설계의 첫 갈림길이다.
- **식별 관계 vs 비식별 관계** — 모듈의 식별자에 코스가 포함되는가(`코스ID + 모듈번호`), 아니면 모듈이 독립 ID를 갖고 코스를 참조만 하는가. **강의 번호가 모듈마다 `01`부터 다시 시작한다**는 AGENTS.md 규칙이 이 판단의 근거가 된다.

> 서브타입을 **물리 테이블로 어떻게 내릴지**(1:1 분리 / 슈퍼타입 통합 / 서브타입 개별)는 아직 정하지 않는다. 개념 모델 단계에서는 "서브타입이 있다"까지만 표시하고, 물리 변환은 [Phase 6](06%20Phase%206%20-%20물리%20모델과%20무결성.md)에서 결정한다.

## 산출물

1. **learning-hub ERD v1** — 까마귀발 표기. 아래를 반드시 담는다.
   - 계층: 플랫폼 → (MOOC만) 카테고리 → 코스 → 모듈/섹션 → 강의
   - 로드맵 → Phase → 체크 항목
   - 세미나 (원본 파일 + 자동 변환본이라는 1:N 구조)
   - 학습 이력 (누가 언제 무엇을 체크했나)
2. **관계 판정표** — 관계마다 카디널리티·참여 제약·식별 여부를 한 줄씩 적는다. 특히 아래 셋은 근거를 문장으로 남긴다.
   - 강의 ↔ 로드맵 Phase: N:M이다. **관계 자체가 속성(학습일)을 갖는다** — 이건 Phase 5의 재료다
   - 로드맵 ↔ 코스: "소유"와 "참조"라는 **두 종류의 관계**다. 관계를 둘로 나눌 것인가, 하나에 유형 속성을 둘 것인가
   - 코스 ↔ 모듈: YouTube 코스에는 모듈이 없다. **선택적 참여**로 그릴 것인가, 서브타입으로 뺄 것인가
3. **미결 사항 목록** — 지금 못 정하겠는 것을 적어 둔다. Phase 3·4에서 하나씩 닫는다. **여기서 억지로 다 정하지 않는 것이 중요하다** — 개념 모델은 원래 미완성인 채로 넘어간다.

## 다음 단계

→ [03 Phase 3 - 논리 모델과 키](03%20Phase%203%20-%20논리%20모델과%20키.md)
