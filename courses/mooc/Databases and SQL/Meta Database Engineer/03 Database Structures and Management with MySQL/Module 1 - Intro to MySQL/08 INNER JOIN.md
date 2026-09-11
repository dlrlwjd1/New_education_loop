# INNER JOIN

## 개요

- INNER JOIN으로 두 테이블(clients, orders)의 공통 컬럼이 일치하는 레코드를 질의하는 실습
- 다중 테이블 질의에서 테이블명.컬럼 표기와 별칭(AS) 활용

## 내용

### 배경

- 정규화 규칙상 관련 데이터는 별도 테이블에 나뉘어 있다 — clients(client ID, full name, 연락처, 주소)와 orders(order ID, client ID, product ID, 수량, 비용).
- 두 테이블을 동시에 뒤지지 않고 한 번에 보는 방법이 INNER JOIN이다.

### 기본 INNER JOIN

- `SELECT clients.full_name FROM clients INNER JOIN orders ON clients.client_id = orders.client_id`
- INNER JOIN 절은 **매칭되는 레코드마다 새 행을 생성**하고, ON의 등호가 매칭 조건을 강제한다.
- **주의**: 여러 테이블을 다룰 때는 컬럼마다 소속 테이블명을 명시해야 한다 — 특히 client ID처럼 **두 테이블 모두에 존재하는 컬럼**은 필수.

### 별칭과 결합한 다중 컬럼 JOIN

- clients의 client ID·full name·연락처와 orders의 product ID·수량·총비용을 함께 뽑으며, **각 컬럼 뒤 AS로 읽기 좋은 라벨** 부여.
- 결과: 매칭되는 클라이언트 ID(CL1, CL2, CL4, CL6) 관련 데이터가 하나의 테이블로 반환된다.

## 예시

```sql
-- 주문한 모든 고객의 이름
SELECT clients.full_name
FROM clients
INNER JOIN orders ON clients.client_id = orders.client_id;

-- 별칭으로 라벨을 정리한 다중 컬럼 조인
SELECT clients.client_id   AS "Client ID",
       clients.full_name   AS "Client Name",
       clients.contact_number AS "Contact",
       orders.product_id   AS "Product",
       orders.quantity     AS "Quantity",
       orders.cost         AS "Total Cost"
FROM clients
INNER JOIN orders ON clients.client_id = orders.client_id;
```

## 요약

- INNER JOIN은 ON 조건의 공통 컬럼 값이 양쪽 테이블에서 일치하는 레코드만 반환한다.
- 다중 테이블 질의에서는 테이블명.컬럼으로 소속을 명시하고, AS 별칭으로 출력 라벨을 다듬는다.
