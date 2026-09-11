# String functions

## 개요

- 문자열 값을 조작하는 MySQL 문자열 함수: CONCAT, SUBSTRING(SUBSTR), UCASE(UPPER), LCASE(LOWER)
- 두 테이블에 걸친 CONCAT 활용과 SUBSTRING의 3개 인자

## 내용

### 대표 문자열 함수

- **CONCAT** — 여러 문자열을 이어 붙인다. 괄호 안에 문자열 값(쌍따옴표)이나 컬럼명을 쉼표로 나열. 사이에 `'-'` 같은 구분 문자열(작은따옴표)을 끼울 수 있다.
- **SUBSTRING** — 부모 문자열에서 일부를 추출. **3개 인자**: (문자열/컬럼, 시작 인덱스, 추출 길이)
- **UCASE(컬럼)** — 값을 대문자로 변환
- **LCASE(컬럼)** — 값을 소문자로 변환
- 두 테이블의 값을 결합할 때는 SELECT의 CONCAT 인자로 각 테이블 컬럼을 넣고, FROM에 두 테이블을, WHERE에 결합 조건을 지정한다.

## 예시

M&G 재고 검토 — items(ItemID, Name, Cost)와 mg_orders(OrderID, ItemID, Quantity, ...) 테이블:

```sql
-- 1. "품목명 - 수량" 형태의 목록 (두 테이블 결합)
SELECT CONCAT(items.name, ' - ', mg_orders.quantity)
FROM items, mg_orders
WHERE items.item_id = mg_orders.item_id;

-- 2. 주문 상태를 대문자로/소문자로
SELECT UCASE(order_status) FROM mg_orders;
SELECT LCASE(order_status) FROM mg_orders;

-- 3. 고객 이름(Kation, 6글자)에서 이름 부분 추출
SELECT SUBSTRING(client_name, 1, 6)
FROM clients
WHERE client_id = 1;
```

## 요약

- CONCAT은 문자열·컬럼 결합(구분자 포함 가능), SUBSTRING은 (대상, 시작, 길이)로 부분 추출한다.
- UCASE/LCASE로 대소문자를 변환한다.
- 다중 테이블 결합 시 WHERE 조건으로 두 테이블을 연결한다.
