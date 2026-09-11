# Optimizing database SELECT statements in practice

## 개요

- SELECT 최적화 지침을 실제 시나리오 3가지에 적용하는 실습: 함수 회피, 선행 와일드카드 회피, INNER JOIN 사용

## 내용

### 시나리오 1 — WHERE 절 함수 제거

- 문제: 9월 12일 도착 주문을 찾으려고 WHERE 절에서 DATE_ADD 함수로 배송일을 계산하면 부하가 크다.
- 해법: orders 테이블에 **expected_delivery_date 커스텀 컬럼**을 만들어 배송 예정일을 저장 → 함수 없이 그 컬럼에서 9월 12일 값만 스캔.

### 시나리오 2 — 선행 와일드카드 대신 역순 컬럼 + 인덱스

- 문제: 성(Ito)으로 고객을 찾을 때 `LIKE '%Ito'`(선행 와일드카드)는 인덱스를 못 쓴다.
- 해법:
  1. ALTER TABLE로 **reverse_full_name 컬럼** 추가 — 성이 앞에 오도록 이름을 뒤집어 저장(UPDATE 문으로 채움)
  2. 새 컬럼에 **CREATE INDEX**로 인덱스 생성
  3. 이제 **후행(trailing) 와일드카드** `LIKE 'Ito%'`로 같은 결과를 얻으면서 인덱스를 활용

### 시나리오 3 — OUTER JOIN 대신 INNER JOIN

- 문제: 전체 주문 리포트에 OUTER JOIN을 쓰면 매칭 없는 레코드까지 반환된다.
- 해법: product·orders 테이블의 공유 product ID 컬럼을 대상으로 **INNER JOIN** — 매칭 레코드만 반환해 훨씬 효율적.

## 예시

```sql
-- 1. 함수 대신 사전 계산 컬럼
SELECT * FROM orders WHERE expected_delivery_date = '2022-09-12';

-- 2. 역순 이름 컬럼 + 인덱스 + 후행 와일드카드
ALTER TABLE clients ADD COLUMN reverse_full_name VARCHAR(100);
UPDATE clients SET reverse_full_name = CONCAT(last_name, ' ', first_name);
CREATE INDEX idx_reverse_name ON clients(reverse_full_name);
SELECT * FROM clients WHERE reverse_full_name LIKE 'Ito%';

-- 3. INNER JOIN으로 매칭 레코드만
SELECT p.product_id, o.order_id
FROM products p
INNER JOIN orders o ON p.product_id = o.product_id;
```

## 요약

- 함수 계산은 미리 컬럼으로 저장해 WHERE에서 함수를 없앤다.
- 선행 와일드카드는 역순 저장 컬럼 + 인덱스 + 후행 와일드카드로 대체한다.
- 매칭 레코드만 필요하면 항상 INNER JOIN을 쓴다.
