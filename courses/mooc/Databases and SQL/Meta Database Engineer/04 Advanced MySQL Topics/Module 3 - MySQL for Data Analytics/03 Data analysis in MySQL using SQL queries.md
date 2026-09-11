# Data analysis in MySQL using SQL queries

## 개요

- 서브쿼리·조인·뷰 등 SQL 쿼리가 데이터 분석 프로세스에서 하는 역할
- 판매 데이터 분석 3종 실습: 서브쿼리, INNER JOIN + BETWEEN, CREATE VIEW

## 내용

### 프로세스

1. 하나 이상의 SQL 쿼리(조인·서브쿼리·뷰·함수·연산자)로 필요한 데이터 **추출**
2. 추가 쿼리로 분석 결과 **서술(기술)**
3. 데이터 분석학으로 **추가 통찰** 확보 → 사업 전략(잘 팔리는 상품 추가 매입, 안 팔리는 상품 축소, 할인 기획 등)

### 분석 도구로서의 쿼리

- **서브쿼리** — 쿼리 안의 쿼리로 원하는 데이터 필터링
- **조인** — 데이터 사이의 관계 탐색 (두 테이블 결합)
- **뷰** — 특정 데이터에 집중하는 가상 테이블 생성
- 어떤 쿼리를 쓸지는 추출·분석할 데이터와 분석의 목적에 달렸다.

## 예시

```sql
-- 1. 서브쿼리: 10개 이상 팔린 상품 목록
SELECT product_id FROM orders
WHERE product_id IN (
  SELECT product_id FROM orders WHERE quantity >= 10
);

-- 2. INNER JOIN + BETWEEN: 최근 10일간 고객·주문 데이터
SELECT o.client_id, o.order_id, p.product_name
FROM orders o
INNER JOIN products p ON o.product_id = p.product_id
WHERE o.order_date BETWEEN '...' AND '...';

-- 3. 뷰: 베스트셀러 상위 5개 가상 테이블
CREATE VIEW top_products AS
SELECT p.name, o.quantity, o.cost
FROM products p
INNER JOIN orders o ON p.product_id = o.product_id
ORDER BY o.quantity DESC
LIMIT 5;

SELECT * FROM top_products;   -- 추가 분석용
```

## 요약

- 데이터 분석은 SQL 쿼리로 데이터를 추출·서술한 뒤 분석학으로 통찰을 얻는 흐름이다.
- 서브쿼리는 필터링, 조인은 관계 탐색, 뷰는 특정 데이터 집중에 쓰이며, 목적에 맞게 조합한다.
