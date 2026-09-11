# Control flow functions

## 개요

- 조건을 평가해 쿼리의 실행 경로를 결정하는 제어 흐름 함수 — 대표적으로 **CASE 함수**
- 손익 판정 실습: 분기 최저 매출이 기준 이하이면 loss, 아니면 profit (M&G 예제)

## 내용

### CASE 함수의 동작

- CASE 블록 안에서 조건 목록을 순서대로 평가하는 **if-then-else와 유사한** 구조:
  - **첫 번째로 참이 되는 조건**의 결과를 반환
  - 참인 조건이 없으면 **ELSE 절의 값** 반환
  - ELSE 절도 없고 참인 조건도 없으면 **NULL** 반환

### 구문 구조

1. `SELECT 컬럼(들)` — 결과를 표시할 기준 컬럼
2. `CASE` — 케이스 블록 시작
3. `WHEN 조건 THEN 값` — 조건 목록 (참일 때 표시할 값)
4. `ELSE 값` — 모든 조건이 거짓일 때 값
5. `END` — 블록 종료 (+ 필요 시 `AS 별칭`)
6. `FROM 테이블`

## 예시

sales_revenue 테이블에서 연매출 $25,000 이하 품목은 loss, 초과는 profit으로 표시:

```sql
SELECT item_id,
  CASE
    WHEN LEAST(q1, q2, q3, q4) <= 25000 THEN 'loss'
    ELSE 'profit'
  END AS profit_loss
FROM sales_revenue;
-- 결과: 품목 1, 4, 5, 6 = profit / 품목 2, 3 = loss
```

- LEAST 같은 다른 함수를 CASE의 조건 안에 결합할 수 있다는 점이 포인트.

## 요약

- CASE는 WHEN-THEN 조건들을 순서대로 평가해 첫 참 조건의 값을, 없으면 ELSE 값을(그마저 없으면 NULL) 반환한다.
- END로 블록을 닫고 AS 별칭으로 결과 컬럼 이름을 지정한다.
- 비교 함수 등과 결합해 행별 분류(손익 판정 등)에 활용한다.
