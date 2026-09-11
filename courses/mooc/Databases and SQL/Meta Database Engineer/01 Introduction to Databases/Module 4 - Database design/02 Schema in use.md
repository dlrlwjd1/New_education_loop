# Schema in use

## 개요

- 쇼핑카트 데이터베이스(테이블 3개)를 만들며 간단한 스키마를 SQL로 구축하는 실습
- 기본 키 지정과 FOREIGN KEY ... REFERENCES 구문으로 테이블 관계 설정

## 내용

### 구축 절차

1. **데이터베이스 생성**: `CREATE DATABASE shopping_cart_db;`
2. **customer 테이블** — 고객 ID(INT, PRIMARY KEY), 이름·이메일(VARCHAR(100)), 주소(VARCHAR(255)), 전화(VARCHAR(10))
3. **product 테이블** — 상품 ID(INT, PRIMARY KEY), 이름(VARCHAR(100)), 가격(NUMERIC(8,2)), 설명(VARCHAR(255))
4. **cart_order 테이블** — 주문 ID·고객 ID·상품 ID·수량(INT), 주문일(DATE), 상태(VARCHAR(100)). 주문 ID가 기본 키이고 **외래 키 2개**가 추가된다.

### 기본 키와 외래 키의 관계

- cart_order의 customer_id·product_id 필드는 다른 두 테이블의 같은 필드와 **직접 연결**된다.
- 관계 성립 조건: 각 테이블에 기본 키가 있어야 하고, **참조하는(referencing) 테이블이 외래 키로 원본(referenced) 테이블을 가리킨다.**
- 구문: `FOREIGN KEY (컬럼) REFERENCES 원본테이블(컬럼)`

## 예시

```sql
CREATE DATABASE shopping_cart_db;

CREATE TABLE customer (
  customer_id INT PRIMARY KEY,
  name    VARCHAR(100),
  address VARCHAR(255),
  email   VARCHAR(100),
  phone   VARCHAR(10)
);

CREATE TABLE product (
  product_id  INT PRIMARY KEY,
  name        VARCHAR(100),
  price       NUMERIC(8, 2),
  description VARCHAR(255)
);

CREATE TABLE cart_order (
  order_id    INT PRIMARY KEY,
  customer_id INT,
  product_id  INT,
  quantity    INT,
  order_date  DATE,
  status      VARCHAR(100),
  FOREIGN KEY (customer_id) REFERENCES customer(customer_id),
  FOREIGN KEY (product_id)  REFERENCES product(product_id)
);
```

## 요약

- 스키마 구축은 데이터베이스 생성 → 테이블별 컬럼·타입·기본 키 정의 → 외래 키로 관계 설정 순서다.
- FOREIGN KEY ... REFERENCES 구문이 참조 테이블과 원본 테이블을 잇는다.
- 같은 절차가 소규모든 대규모든 동일하게 적용된다.
