# MySQL Common table expression (CTE)

## 개요

- 공통 테이블 표현식(CTE) — 복잡한 쿼리를 읽기 쉬운 코드 블록으로 컴파일해 관리하는 방법
- WITH 절 문법(단일/다중 CTE)과 UNION 결합

## 내용

### CTE란

- **복잡한 데이터베이스 쿼리를 단순한 코드 블록으로 컴파일해 최적화하는 방법.** 필요할 때 CTE 이름을 호출해 쿼리를 다시 쓰며, 가독성과 유지보수성이 좋아진다.
- 요구에 따라 하나 또는 여러 쿼리에 대해 만들 수 있다.

### 문법

- **단일 CTE**:
  1. `WITH CTE이름 AS (쿼리)` — WITH 절로 시작, AS로 괄호 안 쿼리를 이름에 연결
  2. `SELECT ... FROM CTE이름` — CTE 이름을 질의
- **다중 CTE**: WITH 절 아래에 쿼리들을 나열하되 각각 **고유 이름 + 쉼표로 구분**. 실행 시 CTE마다 SELECT를 쓰고 **UNION 연산자**로 결과를 결합한다.

## 예시

Lucky Shrub — 최근 3개 회계연도의 연도별 평균 판매액. 원래는 복잡한 SELECT 3개를 UNION으로 묶었지만, CTE로 정리:

```sql
WITH
average_sales_2020 AS (
  SELECT CONCAT('2020: ', AVG(cost)) AS average_sale
  FROM orders WHERE YEAR(order_date) = 2020),
average_sales_2021 AS (
  SELECT CONCAT('2021: ', AVG(cost)) AS average_sale
  FROM orders WHERE YEAR(order_date) = 2021),
average_sales_2022 AS (
  SELECT CONCAT('2022: ', AVG(cost)) AS average_sale
  FROM orders WHERE YEAR(order_date) = 2022)

SELECT * FROM average_sales_2020
UNION
SELECT * FROM average_sales_2021
UNION
SELECT * FROM average_sales_2022;
```

- 결과는 기존 쿼리와 동일하지만 표현식들이 읽고 유지보수하기 쉬운 블록에 담긴다.

## 요약

- CTE는 WITH 이름 AS (쿼리) 형태로 복잡한 쿼리를 명명된 블록으로 만든다.
- 여러 CTE는 쉼표로 나열하고 SELECT + UNION으로 결과를 합친다.
- 동일한 결과를 더 읽기 쉽고 관리하기 쉬운 구조로 얻는 최적화 기법이다.
