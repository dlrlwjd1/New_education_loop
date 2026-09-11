# Create complex stored procedures

## 개요

- 여러 문장이 필요한 복합 저장 프로시저 작성 — DELIMITER, BEGIN...END, OUT 매개변수 2개, 변수로 결과 받기

## 내용

### 작업 절차 (Lucky Shrub 세일 준비 — $50 기준 저가/고가 상품 집계)

1. **DELIMITER 변경**: BEGIN-END 블록을 하나의 복합문으로 컴파일하도록 세미콜론 → `//`
2. **CREATE PROCEDURE GetProductSummary(OUT 매개변수 2개)** — 저가 상품 수와 고가 상품 수를 밖으로 출력하고 변수에 저장
3. **본문(BEGIN...END)**: SELECT + COUNT 문 2개
   - 첫 문장: $50 미만 상품의 ID 수 집계 → 첫 OUT 매개변수로
   - 둘째 문장: $50 초과 상품 집계 → 둘째 OUT 매개변수로
4. `//`로 쿼리 종료 후 DELIMITER를 세미콜론으로 복원
5. **호출**: `CALL GetProductSummary(@변수1, @변수2)` — OUT 결과를 변수에 담는다
6. **확인**: `SELECT @변수1, @변수2;`

## 예시

```sql
DELIMITER //
CREATE PROCEDURE GetProductSummary(
  OUT number_of_low_price_products INT,
  OUT number_of_high_price_products INT)
BEGIN
  SELECT COUNT(product_id) INTO number_of_low_price_products
  FROM products WHERE price < 50;
  SELECT COUNT(product_id) INTO number_of_high_price_products
  FROM products WHERE price > 50;
END //
DELIMITER ;

CALL GetProductSummary(@total_low_price_products, @total_high_price_products);
SELECT @total_low_price_products, @total_high_price_products;
```

## 요약

- 복합 프로시저는 DELIMITER 변경 → BEGIN...END 본문 → DELIMITER 복원의 틀로 만든다.
- OUT 매개변수 여러 개로 복수의 집계 결과를 내보내고, CALL 시 변수로 받아 SELECT로 확인한다.
