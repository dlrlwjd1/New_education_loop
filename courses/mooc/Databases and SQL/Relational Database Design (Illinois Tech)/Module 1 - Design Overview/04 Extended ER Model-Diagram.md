# Extended ER Model/Diagram

## 개요

- 전통적 ER 모델을 확장한 **확장 ER 모델(Extended/Enhanced ER Model, EERD)**의 새 기능들: 슈퍼타입/서브타입, 특수화/일반화, 중첩(overlapping)/분리(disjoint) 제약, 완전성(completeness) 제약
- 약한 엔터티(weak entity)·강한 엔터티, 식별 관계(identifying relationship)
- 복합 속성·다중값 속성을 관계 스키마로 표현하는 방법과 4가지 ER 설계 이슈

## 내용

### 슈퍼타입과 서브타입

- **슈퍼타입(supertype)**: 계층의 상위(high-level) 엔터티. 하위 엔터티들의 **공통 특성**을 담는다.
- **서브타입(subtype)**: 하위(low-level) 엔터티. 엔터티의 **특수화된 측면**을 담고, 슈퍼타입의 **모든 속성과 관계를 상속(inherit)**한다.
- 슈퍼타입-서브타입 관계는 **ISA 관계**로 표현한다.
- 예: Person(슈퍼타입) ← Student, Staff(서브타입), Student ← TA(teaching assistant), RA(research assistant)
- 상속에는 관계도 포함된다. 예: Person이 Dependent(부양가족)와 맺는 관계도 서브타입이 물려받는다.

### 특수화(Specialization)와 일반화(Generalization)

- **특수화 = 하향식(top-down) 설계** — 다이어그램에서 아래로 향하는 화살표. 상위 엔터티의 레코드를 **고유한 특성**에 따라 하위 그룹으로 나눈다. 예: Person의 레코드 중 학생 특성을 가진 것을 Student로, 교직원 특성을 가진 것을 Staff로 그룹화.
- **일반화 = 상향식(bottom-up) 설계** — 하위 엔터티들에서 **공통(일반) 특성**을 묶어 상위 엔터티를 만든다. 예: TA와 RA에 공통인 레코드가 Student를, Student와 Staff에 공통인 레코드가 Person을 이룬다.

### 중첩(Overlapping) vs 분리(Disjoint) 제약

- **중첩 서브타입**: 서브타입들에서 나온 화살표가 **분리되어(separated)** 그려진다. 각 서브타입은 슈퍼타입의 **공통 부분집합**을 가질 수 있다. → 슈퍼타입 인스턴스가 여러 서브타입에 동시에 존재 가능. 예: PersonID 1이 Student이면서 동시에 Staff일 수 있다.
- **분리(비중첩) 서브타입**: 화살표가 **합쳐져서(merged)** 그려진다. 각 서브타입은 슈퍼타입의 **고유 부분집합**을 가진다. → 인스턴스는 서브타입 중 하나에만 존재. 예: 학생은 TA이거나 RA일 수 있지만 둘 다일 수는 없다.

### 완전성 제약(Completeness Constraint)

- 슈퍼타입 인스턴스가 서브타입 어딘가에 반드시 속해야 하는지를 지정한다.
- **전체(total) 완전성**: 화살표를 가로지르는 **점선**으로 표시. 모든 슈퍼타입 인스턴스는 **최소 하나의 서브타입**에 속해야 한다.
- **부분(partial) 완전성**: 기본값(점선 없음). 일부 인스턴스는 어느 서브타입에도 속하지 않아도 된다. 예: Peter와 John이 Student나 Staff 어디에도 안 나타나거나 일부만 나타나도 부분 완전성.

### 확장 ERD의 관계 스키마

- 서브타입 스키마는 **슈퍼타입의 모든 속성을 상속받아 나열**하고, 자기 고유 속성을 덧붙인다.
- 서브타입의 기본 키는 **기본 키이자 동시에 외래 키**(PK & FK)다 — 엔터티는 기본 키 없이 존재할 수 없다.

```text
Person(PersonID, FirstName, LastName, BirthDate)
Student(PersonID, FirstName, LastName, BirthDate, Major, GPA)      -- PersonID = PK & FK
Staff(PersonID, FirstName, LastName, BirthDate, Department)
TA(PersonID, ..., Hours, Credit)
RA(PersonID, ..., Date, Topic)
Dependent(PersonID, DependentID, ...)                              -- 복합 PK
```

### 약한 엔터티와 강한 엔터티

- **약한 엔터티(weak entity)**: 자신의 속성만으로 유일하게 식별할 수 없는 엔터티. **존재 종속(existence-dependent)** — 강한(부모) 엔터티의 존재에 의존한다. 기본 키는 부모 엔터티에서 부분적 또는 전체적으로 파생되어야 한다.
  - 예: Dependent의 기본 키 = 부모의 PersonID + 자신의 약한 키의 **조합(복합 키)** — 약한 키와 강한 키를 결합하면 강한 기본 키가 된다.
- **강한 엔터티(strong entity)**: 자신의 속성만으로 유일하게 식별 가능. **존재 독립(existence-independent)**.
- **약한 관계(비식별 관계, non-identifying)**: 약한 엔터티의 기본 키에 부모 엔터티의 구성요소가 포함되지 않는 관계.
- **강한 관계(식별 관계, identifying)**: 약한 엔터티의 기본 키에 강한 엔터티의 기본 키가 포함되는 관계. 예: Dependent의 기본 키에 PersonID 포함.

### 복합 속성의 관계 스키마 표현

- 복합 속성은 구성요소를 **단일값 속성으로 분해**하고, `복합속성명_구성요소명`으로 이름 붙인다(서술적이면 다른 규칙도 가능).

```text
-- AuthorName(FirstName, LastName)이 복합 속성일 때
Author(AuthorID, AuthorName_FirstName, AuthorName_LastName, BirthDate)
```

- 파생 속성(예: BirthDate로 계산하는 Age)은 시간 변화(time variance) 문제로 **관계 스키마에 포함하지 않는다.**

### 다중값 속성(MVA)의 관계 스키마 표현

- 방법: **소속 엔터티의 기본 키 + 다중값 속성**을 결합해 **새 관계(relation)를 생성**하고, 그 조합을 새 관계의 기본 키로 삼는다.
- 새 관계 이름은 `엔터티명_속성명` 형태(예: Author_ContactInfo).

```text
Author(AuthorID, AuthorName_FirstName, AuthorName_LastName, BirthDate)
Author_ContactInfo(AuthorID, ContactInfo)    -- 조합 전체가 PK
```

- 검증: AuthorID 111이 전화번호 234와 345 두 개를 등록하면 (111, 234), (111, 345) 두 튜플이 되고, 조합 키가 각 튜플을 유일하게 식별하므로 무결성을 위반하지 않는다.

### ER 설계 이슈 4가지

1. **엔터티 집합 vs 속성** — 전화번호를 하나만 수집하면 속성으로 충분하지만, 전화의 부가 정보(타입, 통신사)를 수집하거나 여러 개를 수집한다면 Phone을 별도 엔터티로 설계한다. 조직(enterprise)의 구조에 따라 판단.
2. **엔터티 vs 관계** — 예: "고객이 지점에서 특정 금액의 대출을 받는다"에서 loan은 금액 같은 속성을 가지므로 관계가 아니라 **엔터티로 만드는 것을 권장**.
3. **이진(binary) vs 비이진(non-binary) 관계** — 참여 엔터티 수(NRE)에 따라 이진(2개)/삼진(ternary, 3개). 예: 아버지-어머니-자식 삼진 관계는 "parent is father of child" + "parent is mother of child" 두 이진 관계로 분해 가능. 자연적으로 비이진인 관계도 있지만, **이진으로 분해할 수 있으면 분해하는 것이 좋은 설계**.
4. **관계 속성의 배치** — 관계 자체가 속성을 가질 때(예: 입금 deposit의 날짜·금액):
   - **1:N** → 속성을 **many 쪽으로** 이동
   - **1:1** → 어느 쪽이든 가능
   - **M:N** → 브리지 엔터티를 도입해야 하며, 관계 속성은 브리지 엔터티에 둔다

## 요약

- 확장 ER 모델은 슈퍼타입/서브타입, 특수화(top-down)/일반화(bottom-up), 중첩/분리 제약, 전체/부분 완전성 제약으로 복잡한 관계와 제약을 표현한다.
- 서브타입은 슈퍼타입의 속성·관계를 모두 상속하며, 스키마에서 기본 키가 곧 외래 키다.
- 약한 엔터티의 기본 키는 강한 엔터티의 기본 키를 포함한 복합 키이며, 이때의 관계를 식별 관계라 한다.
- 복합 속성은 단일값으로 분해하고, 다중값 속성은 별도 관계로 분리하며, 파생 속성은 스키마에 넣지 않는다.
- 설계 판단(엔터티 vs 속성, 엔터티 vs 관계, 관계 분해, 관계 속성 배치)은 조직의 요구와 관계 유형에 따라 내린다.
- 다음 강의는 함수 종속성(functional dependency)이다.
