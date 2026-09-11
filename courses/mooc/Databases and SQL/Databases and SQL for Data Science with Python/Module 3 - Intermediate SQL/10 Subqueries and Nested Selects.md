# Subqueries and Nested Selects

## 학습 목표

- 서브쿼리(Subquery) / 중첩 SELECT 문 작성 방법 이해
- 서브쿼리를 WHERE 절, 열 목록, FROM 절에서 사용하는 방법 학습

---

## 서브쿼리란?

괄호 안에 감싸져 다른 쿼리 내부에 중첩된 일반 쿼리입니다.  
집계 함수의 제한을 우회하거나 더 복잡한 조건을 표현할 때 사용합니다.

---

## 예시 테이블 — EMPLOYEES

| EMP_ID | FIRSTNAME | LASTNAME | SALARY | DEP_ID |
|--------|-----------|----------|--------|--------|
| E001 | Alice | Park | 70000 | D01 |
| E002 | Bob | Kim | 45000 | D02 |
| E003 | Carol | Lee | 90000 | D01 |
| E004 | Dave | Choi | 55000 | D03 |
| E005 | Eve | Han | 60000 | D02 |

---

## 1. WHERE 절의 서브쿼리

### 문제 — 집계 함수를 WHERE에서 직접 사용하면 오류 발생

```sql
-- 오류: aggregate functions are not allowed in WHERE
SELECT * FROM employees WHERE salary > AVG(salary);
```

### 해결 — 서브쿼리로 우회

```sql
-- 평균 급여보다 높은 직원 조회
SELECT emp_id, firstname, lastname, salary
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);
```

서브쿼리 `(SELECT AVG(salary) FROM employees)`가 먼저 실행되어 평균값을 반환하고,  
그 결과를 바깥 쿼리의 WHERE 조건에 사용합니다.

---

## 2. 열 목록(Column Expression)의 서브쿼리

각 직원의 급여와 전체 평균 급여를 나란히 비교하고 싶을 때:

```sql
-- 오류: AVG without GROUP BY
SELECT emp_id, salary, AVG(salary) AS avg_salary FROM employees;
```

```sql
-- 서브쿼리를 열로 사용 (Column Expression)
SELECT emp_id,
       salary,
       (SELECT AVG(salary) FROM employees) AS avg_salary
FROM employees;
```

결과 예시:

| EMP_ID | SALARY | AVG_SALARY |
|--------|--------|------------|
| E001 | 70000 | 64000 |
| E002 | 45000 | 64000 |
| E003 | 90000 | 64000 |

---

## 3. FROM 절의 서브쿼리 (Derived Table / Table Expression)

서브쿼리를 FROM 절에 사용하면 서브쿼리의 결과 자체가 **임시 테이블**처럼 동작합니다.  
민감한 정보(생년월일, 급여 등)를 제외한 안전한 뷰를 만들 때 유용합니다.

```sql
-- 민감 정보를 제외한 파생 테이블 생성
SELECT *
FROM (
    SELECT emp_id, firstname, lastname, dep_id
    FROM employees
) AS employee_public;
```

> `AS employee_public`처럼 파생 테이블에는 반드시 **별칭(Alias)**을 지정해야 합니다.

---

## 서브쿼리 위치별 정리

| 위치 | 명칭 | 사용 목적 |
|------|------|----------|
| `WHERE` 절 | 일반 서브쿼리 | 집계 함수 결과를 조건으로 사용 |
| `SELECT` 열 목록 | Column Expression | 집계 값을 각 행에 함께 표시 |
| `FROM` 절 | Derived Table / Table Expression | 중간 결과를 임시 테이블로 활용 |

---

## 핵심 요약

- 서브쿼리는 **괄호** 안에 작성하며 바깥 쿼리보다 먼저 실행됩니다.
- `AVG`, `SUM` 등 집계 함수는 WHERE에서 직접 사용 불가 → 서브쿼리로 해결합니다.
- FROM 절의 서브쿼리(파생 테이블)에는 반드시 별칭(`AS`)을 붙여야 합니다.
- 서브쿼리는 다중 테이블 조인과 같은 복잡한 상황에서 특히 강력합니다.
