# MySQL aliases

## 개요

- 별칭(alias) — 컬럼·테이블에 임시 이름을 부여해 출력의 가독성을 높이는 기법
- 별칭이 유용한 3가지 상황: 긴 이름 축약, 연결(concatenation) 결과 컬럼 명명, 다중 테이블 질의
- Little Lemon 레스토랑 데이터베이스 예제

## 내용

### 별칭이란

- **컬럼·테이블에 임시 이름을 붙여** 출력의 사용·읽기·이해를 쉽게 하는 SQL 기능. `AS` 키워드로 만든다.

### 상황 1 — 길거나 기술적인 컬럼 이름 축약

- `SELECT 원래컬럼 AS 별칭, ... FROM 테이블` — 별칭이 필요한 컬럼마다 AS를 쓴다.
- **별칭에 공백이 있으면 큰따옴표로 감싼다** (없으면 따옴표 생략 가능).

### 상황 2 — CONCAT 결과를 하나의 컬럼으로

- `CONCAT(컬럼1, " ", 컬럼2)` — 괄호 안 컬럼 값을 결합하고, 따옴표 쌍이 값 사이 빈칸을 만든다.
- 뒤에 `AS 새컬럼명`으로 결합 결과 컬럼의 이름을 지정한다.

### 상황 3 — 다중 테이블 질의

- 테이블마다 **한 글자 별칭**(예: Table1 = x, Table2 = y)을 부여하고 **점 표기법(dot notation)**으로 컬럼을 지정한다: `x.column1`, `y.column2`
- `FROM 테이블1 AS x, 테이블2 AS y` + WHERE 조건.

## 예시

Little Lemon 데이터베이스:

```sql
-- 1. 긴 컬럼 이름 축약
SELECT order_id,
       date_food_order_placed_with_supplier   AS date_order_placed,
       date_food_order_received_from_supplier AS "Date Order Received"
FROM food_orders_delivery_status;

-- 2. 주문 ID와 상태를 한 컬럼으로 연결
SELECT CONCAT(order_id, " ", order_status) AS order_status
FROM food_orders_delivery_status;

-- 3. 다중 테이블: $7 이하 스타터와 $15 이하 메인 코스
SELECT s.name, s.cost, c.name, c.cost
FROM starters AS s, courses AS c
WHERE s.cost <= 7 AND c.cost <= 15;
```

## 요약

- 별칭은 AS 키워드로 만드는 임시 이름으로 출력 가독성과 질의 효율을 높인다.
- 긴 이름 축약, CONCAT 결과 명명, 다중 테이블(한 글자 별칭 + 점 표기법)의 세 상황에서 특히 유용하다.
- 공백이 든 별칭은 따옴표로 감싼다.
