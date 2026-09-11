# MySQL HAVING

## 개요

- HAVING 절 — GROUP BY가 만든 **그룹 데이터에 필터 조건**을 지정하는 방법
- WHERE와의 차이, 별칭을 이용한 간결한 작성법

## 내용

### WHERE로는 안 되는 이유

- WHERE 절은 GROUP BY **앞에** 위치하며, GROUP BY가 생성한 **그룹 데이터에는 필터 조건을 걸 수 없다**.
- 그룹 결과를 필터링하려면 **GROUP BY 뒤에 HAVING 절**을 추가한다.

### HAVING의 동작

- HAVING은 GROUP BY가 반환한 **각 그룹에 대해 조건을 평가**해, 참인 그룹만 결과 집합에 포함한다.
- GROUP BY를 생략하면 HAVING은 WHERE처럼 동작한다.
- 집계 함수와 함께 쓰는 것이 일반적이다 (예: 그룹 합계가 특정 금액을 넘는 부서 찾기).

### 별칭으로 간결하게

- SELECT 절의 집계 함수에 별칭(예: total)을 붙이면 HAVING 절에서 그 별칭을 참조할 수 있어 조건이 더 읽기 쉬워진다.

## 예시

Lucky Shrub — 월 매출 목표 $2,275를 달성한 부서 찾기:

```sql
-- 1. 부서별 매출 합계
SELECT department, SUM(order_total)
FROM orders
GROUP BY department;

-- 2. 합계가 $2,275 초과인 부서만 필터링
SELECT department, SUM(order_total)
FROM orders
GROUP BY department
HAVING SUM(order_total) > 2275;

-- 3. 별칭으로 간결하게
SELECT department, SUM(order_total) AS total
FROM orders
GROUP BY department
HAVING total > 2275;      -- 결과: 목표 달성 부서 3곳
```

## 요약

- HAVING은 GROUP BY 뒤에 위치해 그룹 단위 결과를 필터링한다 (WHERE는 그룹화 전 행 필터).
- 그룹별 집계 값에 조건을 걸 때 사용하며, GROUP BY가 없으면 WHERE처럼 동작한다.
- 집계 함수 별칭을 HAVING에서 재사용하면 문장이 간결해진다.
