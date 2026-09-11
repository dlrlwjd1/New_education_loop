# Creating an Entity - Relationship Diagram (ERD)

## 개요

- 비즈니스 서술(narrative) → 비즈니스 규칙 → 작은 ERD → 통합 ERD → 검토의 5단계 ERD 작성 프로세스
- 사례 1: 은행(banking) 데이터베이스 — 비즈니스 규칙을 ERD로 변환하고 관계 스키마(relational schema)까지 축약(reduction)
- 사례 2: 이커머스 ERD — 다이어그램을 읽고 비즈니스 규칙을 역으로 서술
- 다대다(M:N) 관계를 브리지 엔터티(bridge entity)로 해소하는 방법

## 내용

### ERD 작성 5단계

1. **상세 서술(detailed narrative) 작성** — 비즈니스 환경에서 추출
2. **비즈니스 규칙(business rules) 식별** — 규칙은 데이터베이스의 특정 측면(엔터티나 관계)에 제약을 부과하는 문장
3. **규칙별로 작은 ERD 작성**
4. **작은 ERD들을 하나의 ERD로 통합**
5. **검토·수정(review and revise)**

### 사례 1 — 은행 데이터베이스 (규칙 → ERD)

비즈니스 규칙과 UML 표현:

| # | 비즈니스 규칙 | 다중성 표현 |
|---|---|---|
| 1 | 고객은 **최소 2개** 계좌를 가질 수 있다 | Customer —has— `2..*` Accounts (2 = 최소, `*` = 최대 many) |
| 2 | 고객은 이름·주소·전화번호를 제공해야 한다 | Customer 속성: CustomerName, Address, Phone |
| 3 | 거래는 특정 계좌 하나에 연결되어야 하고, 계좌는 여러 거래를 **가질 수도** 있다 | Transaction `1..1` Account / Account `0..*` Transaction ("may" = 참여 0) |
| 4 | 거래는 한 지점(branch)에서 이루어지고, 지점은 하루에 많은 거래를 만든다 | Transaction `1..1` Branch / Branch `1..*` Transaction |
| 5 | 거래는 날짜·금액을 가져야 한다 | Transaction 속성: Date, Amount (+ FK: AccountNumber, BranchID) |
| 6 | 직원은 **최대 1개**(at most one) 지점에서 일하고, 지점은 여러 직원을 고용한다 | Employee `0..1` Branch / Branch `1..*` Employee |

읽기 요령:

- 항상 **한 인스턴스를 기준으로 검증**한다("a/each/one/specific customer" 모두 1로 테스트).
- "may" 같은 선택 표현 → 참여(participation) `0`. 선택 표현이 없으면 필수 `1`.
- "at least two" → 최소값 2. "at most one" → `0..1`.

### 키 이동의 기본 원리 (Fundamental of Moving Keys)

- 관계 유형은 표기 `X..Y`의 **둘째 자리(카디널리티 = 최대값)**를 양쪽에서 읽어 판별한다.
- 1:N 관계에서는 **one 쪽의 기본 키를 many 쪽으로 옮겨 외래 키로 삼는다.**
  - Customer(1) : Account(N) → Account에 CustomerID(FK)
  - Account(1) : Transaction(N) → Transaction에 AccountNumber(FK)
  - Branch(1) : Transaction(N) → Transaction에 BranchID(FK)
  - Branch(1) : Employee(N) → Employee에 BranchID(FK)
- 모든 엔터티에는 레코드를 유일하게 식별할 기본 키가 있어야 한다.

### ERD → 관계 스키마(Relational Schema) 축약

- 각 엔터티를 `엔터티명(속성, ...)` 형식으로 옮긴다. **기본 키는 밑줄**로 표시하고 맨 앞에 쓴다. 외래 키는 밑줄 없이 나열한다.

```text
Customer(CustomerID, CustomerName, Address, Phone)
Accounts(AccountNumber, AccountType, Balance, CustomerID)      -- CustomerID = FK
Transactions(TransactionID, Date, Amount, AccountNumber, BranchID)
Branch(BranchID, BranchName, Location)
Employee(EmployeeID, EmployeeName, Position, BranchID)
```

- 검토 단계에서 관계 유형별로 기본 키가 올바른 쪽으로 이동했는지 재확인한다.

### 사례 2 — ERD를 읽고 비즈니스 규칙 쓰기 (이커머스)

- 관계는 **양방향**이므로 규칙도 반드시 양쪽 방향으로 서술해야 완성된다.
  - "한 고객은 하나 이상의(one or more) 주문을 한다" — `1..*`는 "or"로 읽는다 ("one **and** more"가 아님)
  - "한 주문은 정확히 한(one and only one) 고객에 연결된다" — `1..1`은 "and"로 읽는다
- Customer(CustomerID, 이름, 전화, 이메일), Order(OrderID, 주문일, 총액 + CustomerID FK), Product(ProductID, 이름, 가격), Category(CategoryID, 이름, 설명)
- "각 주문은 여러 상품을 담고, 각 상품은 여러 주문에 속할 수 있다" → **다대다(M:N)** — 개념 설계에서는 허용되지만 **논리 설계에서는 허용되지 않는다.**
- "각 상품은 특정 카테고리 하나에 속하고, 카테고리는 여러 상품을 가진다" → Category(1) : Product(N), Product에 CategoryID(FK)

### 다대다 해소 — 브리지 엔터티(Bridge Entity)

- M:N 사이에 **브리지 엔터티**를 도입해 사슬을 **두 개의 1:N**으로 쪼갠다. 브리지 쪽 표기가 many, 원본 엔터티 쪽이 one이 된다.
- 브리지 엔터티가 양쪽의 외래 키를 저장한다. 이름은 설계 단계에서는 두 엔터티 이름의 조합(예: ProductOrder)으로 충분.
- **기본 키 선택지 2가지**:
  1. 양쪽 링크 테이블이 기여한 두 외래 키의 조합 = **복합 키(composite key)** — 각 속성은 FK이면서 동시에 PK의 일부
  2. 새로 만든 **대리 키(surrogate key)** (예: POID, 자동 생성, 식별 목적 전용)
- 브리지 엔터티에는 두 테이블 정보를 함께 쓰는 **2차 속성(secondary attributes)**을 둘 수 있다. 예: 주문 수량(Quantity)

```text
Customer(CustomerID, CustomerName, Email, Phone)
Order(OrderID, OrderDate, TotalAmount, CustomerID)
ProductOrder(OrderID, ProductID)        -- 복합 PK, 각각 FK이기도 함
Product(ProductID, ProductName, Price, CategoryID)
Category(CategoryID, CategoryName, Description)
```

## 요약

- ERD는 서술 → 규칙 → 작은 ERD → 통합 → 검토의 5단계로 만든다.
- 다중성은 항상 한 인스턴스 기준으로 양방향 검증하며, "may"는 참여 0, "at least/at most"는 구체적 최소/최대값으로 표기한다.
- 1:N에서는 one 쪽 기본 키가 many 쪽의 외래 키가 된다.
- 관계 스키마에서 기본 키는 밑줄로 표시하고, 시험 유형은 규칙→ERD, ERD→규칙, ERD→스키마 세 방향 모두 나온다.
- M:N은 논리 설계에서 허용되지 않으므로 브리지 엔터티로 1:N 두 개로 분해하고, 복합 키 또는 대리 키를 기본 키로 삼는다.
- 다음 강의는 확장 ERD(extended ERD)의 고급 기능을 다룬다.
