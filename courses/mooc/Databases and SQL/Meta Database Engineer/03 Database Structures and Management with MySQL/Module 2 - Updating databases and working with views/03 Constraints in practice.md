# Constraints in practice

## 개요

- NOT NULL, UNIQUE, CHECK, FOREIGN KEY 제약을 실제 CREATE TABLE 문에 적용하는 실습 (Little Lemon customers·bookings 테이블)
- SHOW COLUMNS로 구조 확인, MUL 키 표시의 의미

## 내용

### customers 테이블

- CustomerID — **NOT NULL + PRIMARY KEY** (모든 행에서 유일, 빈 값 불가)
- FullName — **NOT NULL**, VARCHAR(100)
- PhoneNumber — **NOT NULL UNIQUE** (고객마다 유일한 번호)
- `SHOW COLUMNS FROM customers;`로 제약이 적용된 구조 확인

### bookings 테이블 — 참조 무결성과 CHECK

- 모든 컬럼 NOT NULL, BookingDate만 DATE, 나머지는 INT
- BookingID — PRIMARY KEY
- NumberOfGuests — **CHECK 제약**으로 `<= 8` (최대 8명)
- CustomerID — **FOREIGN KEY ... REFERENCES customers(CustomerID)** + **ON DELETE CASCADE ON UPDATE CASCADE**
  - customers에서 삭제·갱신이 일어나면 bookings의 관련 행이 자동 삭제·갱신된다
- `SHOW COLUMNS FROM bookings;`에서 CustomerID의 키 표시가 **MUL** — 유일 키가 아니어서 **여러 행이 같은 키 값을 가질 수 있다**는 뜻 (한 고객이 여러 번 예약 가능하므로 자연스럽다)

## 예시

```sql
CREATE TABLE customers (
  customer_id  INT NOT NULL PRIMARY KEY,
  full_name    VARCHAR(100) NOT NULL,
  phone_number INT NOT NULL UNIQUE
);

CREATE TABLE bookings (
  booking_id       INT NOT NULL PRIMARY KEY,
  booking_date     DATE NOT NULL,
  table_number     INT NOT NULL,
  number_of_guests INT NOT NULL CHECK (number_of_guests <= 8),
  customer_id      INT NOT NULL,
  FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
    ON DELETE CASCADE
    ON UPDATE CASCADE
);

SHOW COLUMNS FROM bookings;
```

## 요약

- CREATE TABLE 안에서 NOT NULL·UNIQUE·CHECK·PRIMARY/FOREIGN KEY 제약을 함께 선언해 데이터 일관성·무결성을 확보한다.
- FK에 ON DELETE/UPDATE CASCADE를 붙이면 부모 변경이 자식에 자동 전파된다.
- SHOW COLUMNS의 MUL은 중복 가능한 (비유일) 키를 의미한다.
