# Stored procedures in MySQL

## 개요

- 저장 프로시저(stored procedure) — 데이터베이스에 저장해 두고 CALL로 재사용하는 미리 준비된 쿼리 블록
- 매개변수 없는/있는 프로시저의 생성, 호출, 삭제 (Lucky Shrub 예제)

## 내용

### 저장 프로시저란

- **데이터베이스에 저장할 수 있는 코드 블록(미리 준비된 쿼리)**로, CALL 명령으로 호출(invoke)한다.
- 이점:
  1. 코드의 **일관성(consistency)**
  2. **재사용성** — 같은 SQL을 반복 작성할 필요 없음
  3. **사용·유지보수 용이**

### 문법

- **생성**: `CREATE PROCEDURE 이름(매개변수 목록)` + 프로시저 로직. **매개변수가 없어도 괄호는 필수.**
- **호출**: `CALL 이름();` — 괄호 포함
- **삭제**: `DROP PROCEDURE 이름;` — 괄호 불필요
- 매개변수가 있으면 괄호 안에 이름과 데이터 타입을 선언하고, 호출 시마다 처리할 값을 지정한다.

## 예시

Lucky Shrub products 테이블(productID, item, price):

```sql
-- 1. 매개변수 없는 프로시저: 전체 상품 조회
CREATE PROCEDURE GetProductsDetails()
SELECT * FROM products;

CALL GetProductsDetails();

-- 2. 매개변수 있는 프로시저: 지정 가격 이하 상품 조회
CREATE PROCEDURE GetLowestPricedProducts(lowest_price INT)
SELECT * FROM products
WHERE price <= lowest_price;

CALL GetLowestPricedProducts(50);   -- $50 이하 상품 목록

-- 3. 프로시저 삭제
DROP PROCEDURE GetProductsDetails;
```

## 요약

- 저장 프로시저는 자주 쓰는 쿼리를 저장해 CALL로 재사용하는 방법으로 일관성·재사용성·유지보수성을 높인다.
- CREATE PROCEDURE 이름() ... 으로 만들고(괄호 필수), CALL 이름(값)으로 호출하며, DROP PROCEDURE로 제거한다.
- 매개변수를 선언하면 호출 시 값을 전달해 동적으로 필터링할 수 있다.
