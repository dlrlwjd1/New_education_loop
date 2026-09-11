# Creating report queries for Little Lemon sales data

## 개요

- 판매 보고서 작성에 쓸 4가지 기법 복습: 가상 테이블(뷰), 조인, 저장 프로시저, 프리페어드 스테이트먼트

## 내용

### 가상 테이블 (virtual table)

- 다른 테이블에 존재하는 데이터를 활용 — 물리적으로 데이터를 저장하지 않는 **인터페이스**
- 이점: 데이터 접근·질의 단순화, 가상+베이스 테이블 조인 구성, 효율적 조작·필터링, 데이터베이스 보안 지원

### 조인 (JOIN)

- 공통 컬럼 기반으로 테이블 간 레코드 연결 — 여러 테이블에 흩어진 정보 조회에 사용
- 종류: INNER JOIN, LEFT JOIN, RIGHT JOIN, SELF JOIN, FULL OUTER JOIN
- 가상 테이블 생성 시 여러 테이블로부터 뷰를 만드는 데 활용

### 저장 프로시저 (stored procedure)

- 재사용 코드를 저장해 필요 시 호출·실행 — 일관성·재사용성·유지보수성 향상
- 여러 개 생성 가능, 다중 매개변수와 다양한 SQL 코드 포함 가능, **고유한 이름** 필수
- 작성 방식은 달성할 작업에 따라 달라짐

### 프리페어드 스테이트먼트 (prepared statement)

- 일반 SQL 문은 실행 전마다 MySQL이 컴파일·파싱 필요
- 프리페어드 스테이트먼트는 **한 번만 컴파일·파싱**되고 반복 사용 — 호출 시 바로 실행 가능하고 안전
- MySQL 자원을 아끼는 효율적·최적화된 실행 방식

## 예시

```sql
-- 가상 테이블(뷰) + 조인
CREATE VIEW OrdersView AS
SELECT o.OrderID, c.CustomerName, o.TotalCost
FROM Orders o
INNER JOIN Customers c ON o.CustomerID = c.CustomerID;

-- 저장 프로시저
CREATE PROCEDURE GetMaxQuantity()
SELECT MAX(Quantity) AS 'Max Quantity in Order' FROM Orders;

-- 프리페어드 스테이트먼트
PREPARE GetOrderDetail FROM
  'SELECT OrderID, Quantity, TotalCost FROM Orders WHERE CustomerID = ?';
SET @id = 1;
EXECUTE GetOrderDetail USING @id;
```

## 요약

- 뷰는 저장 없는 인터페이스로 접근을 단순화하고, 조인은 공통 컬럼으로 테이블을 연결한다.
- 저장 프로시저는 재사용 코드 블록, 프리페어드 스테이트먼트는 1회 컴파일로 자원을 아끼는 실행 방식이다.
