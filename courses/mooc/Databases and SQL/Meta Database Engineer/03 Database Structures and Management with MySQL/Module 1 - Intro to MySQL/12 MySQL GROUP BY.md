# MySQL GROUP BY

## 개요

- GROUP BY 절로 같은 값을 가진 행들을 요약 행(subgroup)으로 묶는 방법
- 집계 함수(SUM·AVG·MAX·MIN·COUNT)와 결합해 그룹별 통계 내기

## 내용

### GROUP BY란

- 지정한 컬럼 기준으로 **테이블의 행들을 요약 행(subgroup)으로 그룹화**하는 절.
- 구문: `SELECT 컬럼 FROM 테이블 GROUP BY 컬럼목록`
- 규칙:
  - WHERE 절이 있으면 **GROUP BY는 그 뒤에** 온다.
  - **SELECT 절의 컬럼 목록에 GROUP BY 컬럼이 포함**되어야 한다.

### 집계 함수(Aggregate Functions)

- GROUP BY와 함께 써서 **하위 그룹마다 계산 결과 하나**를 반환한다:
  - `SUM()` — 값 합산
  - `AVG()` — 평균
  - `MAX()` — 최대값
  - `MIN()` — 최소값
  - `COUNT()` — 값의 발생 횟수 세기
- 구문: SELECT에서 대상 컬럼을 괄호에 넣어 함수 적용, FROM, GROUP BY 순.

## 예시

Lucky Shrub orders 테이블(Order ID, Department, Order Date, Order Quantity, Order Total) — 같은 부서(Lawn Care 5건 등)의 여러 레코드를 요약:

```sql
-- 부서를 5개 그룹으로 축약 (부서별 한 행)
SELECT department FROM orders GROUP BY department;

-- 부서별 주문 건수
SELECT department, COUNT(order_id) FROM orders GROUP BY department;

-- 부서별 매출 합계
SELECT department, SUM(order_total) FROM orders GROUP BY department;

-- 부서별 최소 주문 수량
SELECT department, MIN(order_qty) FROM orders GROUP BY department;

-- 부서별 평균 주문 총액
SELECT department, AVG(order_total) FROM orders GROUP BY department;
```

## 요약

- GROUP BY는 컬럼 값이 같은 행들을 하나의 요약 행으로 묶는다 (WHERE 뒤에 위치, SELECT에 그룹 컬럼 포함).
- SUM·AVG·MAX·MIN·COUNT 집계 함수와 결합하면 그룹별 건수·합계·평균·최소·최대를 한 번에 구할 수 있다.
