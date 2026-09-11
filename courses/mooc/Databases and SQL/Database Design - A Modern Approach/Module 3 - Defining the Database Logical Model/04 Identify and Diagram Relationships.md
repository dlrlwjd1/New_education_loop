# Identify and Diagram Relationships (관계 식별과 다이어그램 작성)

> 강좌: Database Design: A Modern Approach (Logical Operations, MOOC) · 모듈 3: Defining the Database Logical Model · 토픽 3C

## 개요
- 테이블 간 관계를 정교화하고, 각 관계에 **선택성(optionality)·카디널리티(cardinality)** 규칙과 **crow's foot 표기법**을 적용한다. 외래 키(foreign key)도 다룬다.

## 내용

### 테이블 관계의 세 가지 유형
관계형 DB는 데이터를 여러 테이블에 분산. 관계 유형:
- **일대다(one-to-many, 1:N)**
- **일대일(one-to-one, 1:1)**
- **다대다(many-to-many, N:N)**
- 유형을 정하려면 한 테이블의 행이 다른 테이블의 행과 **양방향으로 몇 개** 관계되는지 검토.
  - 예(Cars↔Drivers): "한 차에 몇 명 등록?" "한 직원이 몇 대?" = **카디널리티**(몇 개), "모든 직원이 차가 있어야?" "모든 차에 직원이 있어야?" = **선택성**(대응 행이 필수인가).
- 업무 규칙을 이해해야 하며, 불확실하면 데이터를 잘 아는 사람과 상의.

### 일대다 (1:N)
- 예: `Purchases`(거래) 테이블. 하나의 플랫 테이블에 고객·판매원 이름을 매 행 반복하면 **낭비·갱신 문제**(이메일 변경 시 여러 곳 수정).
- 개선: 고객·판매원을 **별도 `Customers`·`Personnel` 테이블**(각각 "진실의 원천")로 두고, `Purchases`에는 **ID만** 저장 → ID로 조회(lookup). `Personnel`↔`Purchases`, `Customers`↔`Purchases`가 **1:N**(한 판매원/고객이 여러 거래에 등장).

### 일대일 (1:1)
- Table A의 각 행이 Table B의 정확히 한 행과, 반대도 마찬가지. 예: `Personnel`↔`Pay`를 `EmployeeID`로 연결. 어느 쪽이든 부모(parent) 테이블이 될 수 있음.

### 다대다 (N:N)
- Table A의 각 행이 B의 여러 행과, 반대도 여러 행. 예: `Projects`↔`Personnel`(한 프로젝트에 여러 직원, 한 직원이 여러 프로젝트).
- **실제 DB에서는 두 테이블 간에 직접 구현하지 않는다.** 숨겨진 엔티티(`Assignment`)를 **junction table**로 드러내야 함.

### 정션 테이블 (junction table)
- 다대다를 **제3의 테이블**로 구현. 예: `Projects`↔`Assignments`↔`Personnel` — 이제 각각 1:N 두 개가 되고 Projects-Personnel 직접 관계는 없어짐.
- `Assignments`는 **복합 기본 키**(`project_id`+`employee_id`)를 가짐(같은 조합의 두 행 불가). 별도 `assignment_id`를 둘 수도 있음. 필요 시 `date_assigned`·`project_role` 등 추가 가능.
- (= 연관/교차 테이블. composite key, multi-column key로도 불림.)

### 재귀 관계 (recursive relationship)
- 테이블이 **자기 자신과 관계**. 예: `Personnel`의 `supervisor_id`가 같은 테이블의 다른 직원 ID를 참조(모든 상사도 직원).

### 관계 다이어그램 표기 — crow's foot notation
- 선의 양 끝에 기호를 붙여 카디널리티·선택성 표현. 각 기호는 두 부분:
  - **엔티티에 가까운 쪽** = 최대 수량 — 까마귀발(many) 또는 세로 막대(one).
  - **먼 쪽** = 최소 수량 — 세로 막대(one) 또는 원(none/zero).
  - 기억법: 까마귀발 ≈ 옆으로 누운 "M"(many), 원 ≈ "0"(zero/none), "|" ≈ "1"(one).

### 외래 키 (foreign key)
- 기본 키는 종종 다른 테이블과 관계를 맺는 데 사용됨. 관계를 성립시키려고 (기본 키가 아닌) 열을 추가하기도 함(예: `Purchases`의 `salesclerk_id`).
- 다른(외래) 테이블의 기본 키 값을 참조하는 열 = **외래 키**. 다이어그램에서 `FK`/`@`로 표기(기본 키는 `PK`). 전통적 ER 다이어그램의 일부는 아님.
- 기본 키도 외래 키도 아닌 열 = **비키 열(non-key columns)**.

## 예시 — 활동 3-5 / 3-6 (Canal House Books)
- **3-5**: `ProductsPurchased`(한 구매의 각 제품이 한 행) 추가. crow's foot로 관계 표기 + 문장 설명(의미 모델링):
  - Personnel→Purchases: 직원은 0~다수 구매 처리, 구매는 정확히 1명 직원이 처리.
  - Purchases→ProductsPurchased: 모든 구매는 1개 이상 제품 구매를 가지며, 각 제품 구매 상세는 정확히 1개 구매에 연결.
  - ProductsPurchased→Products: 각 제품 구매는 정확히 1개 제품, 각 제품은 여러 제품 구매에 연결 가능.
  - Purchases→Customers: 각 구매는 정확히 1명 고객, 각 고객은 0~다수 구매.
  - Products→BookDetails: 책이면 1개 book detail, 아니면 없음(1:1 선택적).
- **3-6**: 한 제품이 여러 공급업체에서, 일시적으로 공급업체가 없을 수도, 제품 없는 공급업체 정보도 보관 → `Products`↔`Suppliers`를 **다대다**로 만들기 위해 **`ProductSources` 정션 테이블** 추가. 기본 키는 별도 `source_id` 또는 `product_id`+`supplier_id` **복합 키**.

## 요약
- 관계 유형: **1:N, 1:1, N:N**. 결정에는 **카디널리티(몇 개)**와 **선택성(필수 여부)**을 양방향으로 분석.
- **다대다는 junction table**로 구현(복합 키). 테이블이 자기 자신을 참조하면 **재귀 관계**.
- **외래 키**는 다른 테이블의 기본 키를 참조해 관계를 성립. **crow's foot 표기**로 카디널리티·선택성을 다이어그램에 표현.
