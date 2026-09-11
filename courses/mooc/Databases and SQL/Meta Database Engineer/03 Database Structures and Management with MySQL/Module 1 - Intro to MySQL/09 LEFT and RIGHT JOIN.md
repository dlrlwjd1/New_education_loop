# LEFT and RIGHT JOIN

## 개요

- LEFT JOIN·RIGHT JOIN으로 clients-orders 테이블을 결합하는 실습
- 테이블 별칭(c, o)으로 문장을 간결하게 만들기, NULL이 나타나는 이유

## 내용

### LEFT JOIN

- **왼쪽 테이블(clients)의 매칭 레코드마다 새 행을 만들되, 오른쪽 테이블(orders)에 매칭이 없어도 왼쪽 레코드를 포함**한다.
- 아직 주문하지 않은 고객(CL3, CL5)은 오른쪽 테이블 컬럼 자리에 **NULL**이 들어간다.
- 테이블 별칭: `FROM clients AS c LEFT JOIN orders AS o` — 이후 clients 대신 c, orders 대신 o로 컬럼 소속을 표기해 반복 타이핑을 줄인다.

### RIGHT JOIN

- 같은 구문에서 **LEFT를 RIGHT로만 교체**. clients가 왼쪽, orders가 오른쪽.
- **오른쪽(orders) 테이블에서 주문이 있는 모든 레코드**를 반환하고 client ID 기준으로 왼쪽(clients)의 매칭 레코드를 붙인다.
- 이 예제에서는 NULL이 없다 — **주문한 고객은 모두 clients 테이블에 존재**하기 때문.

## 예시

```sql
-- LEFT JOIN: 모든 고객 + 있으면 주문 정보 (미주문 고객은 NULL)
SELECT c.client_id, c.full_name,
       o.order_id, o.quantity, o.cost
FROM clients AS c
LEFT JOIN orders AS o ON c.client_id = o.client_id;

-- RIGHT JOIN: 모든 주문 + 주문한 고객 정보
SELECT c.client_id, c.full_name,
       o.order_id, o.quantity, o.cost
FROM clients AS c
RIGHT JOIN orders AS o ON c.client_id = o.client_id;
```

## 요약

- LEFT JOIN은 왼쪽 테이블 전체 + 오른쪽 매칭(없으면 NULL), RIGHT JOIN은 오른쪽 테이블 기준으로 동일하게 동작한다.
- 문법은 키워드 하나(LEFT ↔ RIGHT)만 다르다.
- 테이블 별칭(c, o)으로 다중 테이블 문장의 가독성을 높인다.
