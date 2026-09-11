# DISTINCT / GROUP BY

## 개요
- 수직 복제(vertical duplication)를 제거하는 두 가지 도구인 `DISTINCT`(`DISTINCT ON` 포함)와 `GROUP BY`(+ 집계 함수, `HAVING`)의 차이와 사용법을 다루는 강의

## 내용
### 수직 복제가 다시 나타나는 이유
- Course 1에서 정규화를 통해 수직 복제를 제거했지만, JOIN으로 여러 테이블을 다시 합치면 문자열 복제가 재등장할 수 있다. `DISTINCT`와 `GROUP BY`는 이렇게 재등장한 중복을 다루는 도구다.

### DISTINCT
- `SELECT DISTINCT 열목록 FROM ...`은 SELECT한 열 조합이 완전히 같은 행을 하나만 남기고 나머지를 버린다. SELECT하는 열의 폭(width)을 좁힐수록 더 많은 행이 중복 판정되어 제거된다는 점이 핵심이다 — 즉 `SELECT *`처럼 모든 열을 가져오면 DISTINCT의 효과가 거의 없어진다.
- `DISTINCT ON (열)`은 특정 열 기준으로만 중복을 제거하고 싶을 때 사용한다. 이때 어떤 행이 대표로 남을지는 `ORDER BY`로 결정된다 — DISTINCT ON 앞에 지정한 열로 먼저 정렬한 뒤, 각 그룹의 첫 번째 행만 남긴다.

### GROUP BY와 집계 함수
- `GROUP BY 열`은 지정한 열의 값이 같은 행들을 하나의 그룹으로 묶고, `COUNT`, `SUM`, `AVG`, `MAX`, `MIN` 같은 집계 함수(aggregate function)와 함께 사용해 그룹별 통계를 계산한다.
- `WHERE` 절은 `GROUP BY`가 실행되기 **전에** 행을 필터링한다. 반면 그룹화·집계 이후의 결과(예: `COUNT(*)` 값)를 기준으로 필터링하려면 `WHERE`가 아니라 `HAVING` 절을 사용해야 한다 — `HAVING`은 "GROUP BY 이후에 적용되는 WHERE"라고 이해하면 된다.
- 실행 순서: `WHERE`(그룹화 전 필터) → `GROUP BY`(그룹화) → `HAVING`(그룹화 후 필터) → `ORDER BY`(정렬).

## 예시
```sql
-- DISTINCT: make, model 조합이 겹치는 행 제거
SELECT DISTINCT make, model FROM racing;

-- DISTINCT ON: model별로 대표 행 하나만, 연도 내림차순 기준 최신 것 선택
SELECT DISTINCT ON (model) make, model, year
FROM racing
ORDER BY model, year DESC;

-- GROUP BY + 집계 함수 + WHERE + HAVING
SELECT abbrev, COUNT(*) AS ct
FROM pg_timezone_names
WHERE is_dst = true
GROUP BY abbrev
HAVING COUNT(*) > 10
ORDER BY ct DESC;
```

## 요약
- `DISTINCT`는 지정한 열 조합이 완전히 같은 행의 중복을 제거하고, `DISTINCT ON`은 특정 열 기준으로만 중복을 제거하며 `ORDER BY`로 대표 행을 결정한다.
- `GROUP BY`는 집계 함수와 결합해 그룹별 통계를 계산하며, 그룹화 전 필터는 `WHERE`, 그룹화 후 필터는 `HAVING`으로 구분한다.
- SELECT하는 열의 폭을 좁게 유지하는 것이 DISTINCT/GROUP BY를 효율적으로 활용하는 핵심이다.
