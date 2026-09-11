# Demonstration: GROUP BY

## 개요
- PostgreSQL 내장 시간대 테이블(`pg_timezone_names`)을 이용해 `GROUP BY`, 집계 함수, `WHERE`/`HAVING`의 차이를 실습하는 강의

## 내용
### 기본 집계와 GROUP BY
- `SELECT COUNT(*) FROM pg_timezone_names;`로 전체 행 수(591개)를 확인한 뒤, `SELECT DISTINCT is_dst FROM ...`로 `is_dst` 열에 참/거짓 두 값만 있음을 확인한다.
- `SELECT is_dst, COUNT(*) FROM pg_timezone_names GROUP BY is_dst;`로 참/거짓 그룹별 개수를 집계한다 — 이는 개념적으로 DISTINCT와 비슷하지만, 그룹별로 몇 개의 행이 뭉쳐졌는지까지 함께 계산해준다는 점이 다르다.
- 같은 방식으로 `abbrev`(시간대 약어) 기준 GROUP BY도 실습한다.

### WHERE vs HAVING 실습
- `WHERE is_dst = true`를 GROUP BY 앞에 붙이면, 그룹화가 일어나기 전에 행이 걸러진다 — 즉 집계 대상 자체가 줄어든다.
- 반면 그룹화 후 개수(`COUNT(*)`) 자체를 기준으로 거르고 싶을 때는 `HAVING COUNT(*) > 10`처럼 GROUP BY 뒤에 HAVING을 사용해야 한다. WHERE 절에는 아직 계산되지 않은 COUNT 값을 조건으로 넣을 수 없다는 점을 실제 오류로 확인한다.
- `ORDER BY 집계결과 DESC`를 덧붙여 가장 흔한 약어부터 내림차순으로 정렬해 보여준다(예: 10회 넘게 등장하는 약어는 12개뿐).

## 예시
```sql
SELECT COUNT(*) FROM pg_timezone_names;
SELECT DISTINCT is_dst FROM pg_timezone_names;
SELECT is_dst, COUNT(*) FROM pg_timezone_names GROUP BY is_dst;

SELECT abbrev, COUNT(*) AS ct
FROM pg_timezone_names
WHERE is_dst = true
GROUP BY abbrev;

SELECT abbrev, COUNT(*) AS ct
FROM pg_timezone_names
GROUP BY abbrev
HAVING COUNT(*) > 10
ORDER BY ct DESC;
```

## 요약
- `GROUP BY` + 집계 함수는 DISTINCT의 확장판으로, 그룹별 개수·합계 등을 함께 계산해준다.
- `WHERE`는 그룹화 전에 행을 거르고, `HAVING`은 그룹화·집계 후의 결과를 거른다 — 이 순서(WHERE → GROUP BY → HAVING → ORDER BY)를 지켜야 한다.
- 집계 결과(COUNT 등) 자체를 조건으로 걸어야 할 때는 반드시 HAVING을 사용해야 한다.
