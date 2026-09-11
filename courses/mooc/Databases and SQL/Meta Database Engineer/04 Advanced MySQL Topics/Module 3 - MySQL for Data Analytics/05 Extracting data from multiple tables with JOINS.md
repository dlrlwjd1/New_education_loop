# Extracting data from multiple tables with JOINS

## 개요

- 세 테이블(clients·orders·products)을 INNER JOIN 두 개로 연결해 복합 조건의 데이터를 추출하는 분석 실습

## 내용

### 과제 조건 (특가 제안 대상 고객 찾기)

1. 특정 제품군에서 **10개 이상** 구매한 고객
2. 구매 시점은 **2020년 9월 5일 이후**
3. 특가 제공이 가능하도록 해당 제품의 **재고 50개 이상**

### 질의 구성

- 대상 컬럼: clients의 client ID·연락처, orders의 order ID·수량·날짜, products의 number of items(→ AS로 items in stock 별칭)
- **INNER JOIN 2개**:
  - clients ↔ orders: 양쪽에 존재하는 client ID로 연결
  - orders ↔ products: 각자의 product ID로 연결
- WHERE 절 괄호 안에 세 조건을 함께 명시

## 예시

```sql
SELECT c.client_id, c.contact_number,
       o.order_id, o.quantity, o.date,
       p.number_of_items AS items_in_stock
FROM clients c
INNER JOIN (orders o
  INNER JOIN products p ON o.product_id = p.product_id)
  ON c.client_id = o.client_id
WHERE (o.quantity >= 10
  AND o.date > '2020-09-05'
  AND p.number_of_items >= 50);
```

## 요약

- 세 테이블 분석은 공유 키(client ID, product ID)로 INNER JOIN을 연쇄해 구성한다.
- WHERE 절에 여러 비즈니스 조건을 결합해 마케팅 대상 같은 실무 질의를 한 번에 수행한다.
