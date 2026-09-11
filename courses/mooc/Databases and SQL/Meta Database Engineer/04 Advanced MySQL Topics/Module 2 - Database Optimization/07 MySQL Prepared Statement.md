# MySQL Prepared Statement

## 개요

- 준비된 문(prepared statement) — MySQL이 한 번만 컴파일·파싱하고 반복 사용하는 쿼리 템플릿
- PREPARE ... FROM, EXECUTE ... USING 구문 실습

## 내용

### 준비된 문이란

- 일반 문장은 실행 때마다 컴파일·파싱되어 자원을 많이 쓴다.
- 준비된 문은 **한 번만 컴파일·파싱된 뒤 반복 사용**할 수 있다 — **미지정 값을 매개변수(?)로 갖는 템플릿**으로 동작하며, 필요할 때 값을 넣어 호출한다. 호출될 때마다 MySQL은 안전하게 실행할 수 있음을 안다.
- 자원 절약과 성능 면에서 훨씬 효율적이다.

### 사용 절차

1. **PREPARE 문이름 FROM '...SQL...'** — 작은따옴표 안의 SELECT에서 값 자리는 `?`로 남긴다. 실행하면 "Statement prepared" 확인 메시지.
2. **변수 선언**: `SET @order_id = 10;`
3. **EXECUTE 문이름 USING @변수** — USING이 변수 값을 준비된 문의 매개변수로 전달한다.
- 같은 문을 어떤 order ID로든 재실행할 수 있고, 재컴파일을 기다릴 필요가 없다.

## 예시

```sql
PREPARE GetOrderStatement FROM
  'SELECT client_id, product_id, quantity, cost
   FROM orders
   WHERE order_id = ?';

SET @order_id = 10;
EXECUTE GetOrderStatement USING @order_id;   -- order 10의 데이터 반환
```

## 요약

- 준비된 문은 ?를 매개변수로 갖는 쿼리 템플릿으로, 한 번 컴파일 후 반복 실행한다.
- PREPARE 이름 FROM '쿼리' → SET 변수 → EXECUTE 이름 USING 변수 순으로 쓴다.
- 반복 쿼리의 컴파일·파싱 비용을 없애는 최적화 수단이다.
