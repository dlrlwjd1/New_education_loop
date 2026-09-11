# SQL Cheat Sheet — Filtering and Grouping

## LIKE

`WHERE` 절에서 열의 패턴을 검색합니다.

| 와일드카드 | 의미 |
|-----------|------|
| `%` | 0개 이상의 임의 문자 |
| `_` | 정확히 1개의 임의 문자 |

```sql
-- 문법 (MySQL/DB2)
SELECT column1, column2, ... FROM table_name WHERE columnN LIKE pattern;

-- 예시: 주소에 'Elgin,IL'이 포함된 직원 조회
SELECT f_name, l_name FROM employees WHERE address LIKE '%Elgin,IL%';
```

---

## BETWEEN

지정한 범위 내의 값을 선택합니다. 숫자, 문자, 날짜 모두 사용 가능하며 양 끝 값이 포함됩니다.

```sql
-- 문법 (MySQL/DB2)
SELECT column_name(s) FROM table_name WHERE column_name BETWEEN value1 AND value2;

-- 예시: 급여가 40,000 ~ 80,000인 직원 조회
SELECT * FROM employees WHERE salary BETWEEN 40000 AND 80000;
```

---

## ORDER BY

결과를 오름차순(`ASC`) 또는 내림차순(`DESC`)으로 정렬합니다. 기본값은 오름차순입니다.  
여러 열을 지정하면 앞에 나온 열부터 순서대로 정렬됩니다.

```sql
-- 문법 (MySQL/DB2)
SELECT column1, column2, ... FROM table_name ORDER BY column1, column2, ... ASC|DESC;

-- 예시: 부서 ID 내림차순 → 같은 부서 내에서 성(l_name) 알파벳 오름차순
SELECT f_name, l_name, dep_id FROM employees ORDER BY dep_id DESC, l_name;
```

---

## GROUP BY

동일한 값을 가진 행을 그룹으로 묶어 집계합니다. `SELECT`와 함께 사용합니다.

```sql
-- 문법 (MySQL/DB2)
SELECT column_name(s) FROM table_name GROUP BY column_name(s);

-- 예시: 부서별 직원 수 조회
SELECT dep_id, COUNT(*) FROM employees GROUP BY dep_id;
```

---

## HAVING

`GROUP BY`로 묶인 그룹에 조건을 적용할 때 사용합니다. `WHERE`는 그룹화 전 행에 적용되고, `HAVING`은 그룹화 후 그룹에 적용됩니다.

```sql
-- 문법 (MySQL/DB2)
SELECT column_name(s) FROM table_name GROUP BY column_name(s) HAVING condition;

-- 예시: 직원이 4명 미만인 부서의 ID, 직원 수, 평균 급여를 평균 급여 오름차순으로 조회
SELECT dep_id,
       COUNT(*)      AS "NUM_EMPLOYEES",
       AVG(salary)   AS "AVG_SALARY"
FROM employees
GROUP BY dep_id
HAVING COUNT(*) < 4
ORDER BY AVG_SALARY;
```

---

## 한눈에 보기

| 구문 | 용도 | WHERE 대체 가능 여부 |
|------|------|-------------------|
| `LIKE` | 패턴 검색 (`%`, `_`) | 행 필터 (WHERE 내에서 사용) |
| `BETWEEN AND` | 연속 범위 필터 | 행 필터 (WHERE 내에서 사용) |
| `ORDER BY` | 결과 정렬 (ASC/DESC) | — |
| `GROUP BY` | 동일 값 행 그룹화 | — |
| `HAVING` | 그룹 조건 필터 | WHERE로 대체 불가 (집계 함수 사용 시) |
