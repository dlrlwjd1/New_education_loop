# SQL Cheat Sheet — Functions and Multiple Tables

이 치트시트는 SQL 함수, 날짜 함수, 서브쿼리, 암시적 조인의 문법과 예시를 빠르게 복습하기 위한 자료입니다.

---

## 집계 함수

집계 함수는 여러 행의 값을 하나의 결과로 계산합니다.

### COUNT

조건에 맞는 행의 개수를 반환합니다.

```sql
-- 문법 (MySQL/DB2)
SELECT COUNT(column_name) FROM table_name WHERE condition;

-- 예시
SELECT COUNT(dep_id) FROM employees;
```

> `COUNT(column_name)`은 해당 컬럼이 `NULL`이 아닌 행만 셉니다. 모든 행을 세려면 `COUNT(*)`를 사용합니다.

---

### AVG

숫자 컬럼의 평균값을 반환합니다.

```sql
-- 문법 (MySQL/DB2)
SELECT AVG(column_name) FROM table_name WHERE condition;

-- 예시
SELECT AVG(salary) FROM employees;
```

---

### SUM

숫자 컬럼의 합계를 반환합니다.

```sql
-- 문법 (MySQL/DB2)
SELECT SUM(column_name) FROM table_name WHERE condition;

-- 예시
SELECT SUM(salary) FROM employees;
```

---

### MIN

선택한 컬럼의 가장 작은 값을 반환합니다.

```sql
-- 문법 (MySQL/DB2)
SELECT MIN(column_name) FROM table_name WHERE condition;

-- 예시
SELECT MIN(salary) FROM employees;
```

---

### MAX

선택한 컬럼의 가장 큰 값을 반환합니다.

```sql
-- 문법 (MySQL/DB2)
SELECT MAX(column_name) FROM table_name WHERE condition;

-- 예시
SELECT MAX(salary) FROM employees;
```

---

## 숫자 함수

### ROUND

숫자를 지정한 소수 자릿수로 반올림합니다.

```sql
-- 문법 (MySQL/DB2)
SELECT ROUND(number, decimals);

-- 예시: 급여를 정수로 반올림
SELECT ROUND(salary) FROM employees;

-- 예시: 급여를 소수점 둘째 자리까지 반올림
SELECT ROUND(salary, 2) FROM employees;
```

---

## 문자열 함수

### LENGTH

문자열의 길이를 반환합니다.

```sql
-- 문법 (MySQL/DB2)
SELECT LENGTH(column_name) FROM table_name;

-- 예시
SELECT LENGTH(f_name) FROM employees;
```

> `LENGTH`는 DBMS에 따라 문자 수가 아니라 바이트 수를 반환할 수 있습니다. 한글처럼 멀티바이트 문자를 다룰 때는 DBMS별 문자 길이 함수를 확인해야 합니다.

---

### UCASE

문자열을 대문자로 변환합니다.

```sql
-- 문법 (MySQL/DB2)
SELECT UCASE(column_name) FROM table_name;

-- 예시
SELECT UCASE(f_name) FROM employees;
```

---

### LCASE

문자열을 소문자로 변환합니다.

```sql
-- 문법 (MySQL/DB2)
SELECT LCASE(column_name) FROM table_name;

-- 예시
SELECT LCASE(f_name) FROM employees;
```

---

### DISTINCT

중복을 제거한 고유한 값만 반환합니다.

```sql
-- 문법 (MySQL/DB2)
SELECT DISTINCT column_name FROM table_name;

-- 예시
SELECT DISTINCT UCASE(f_name) FROM employees;
```

> `DISTINCT`는 함수라기보다는 `SELECT` 결과에서 중복 행을 제거하는 키워드입니다.

---

## 날짜 함수

### DAY

날짜에서 일(day of month)을 반환합니다.

```sql
-- 문법 (MySQL/DB2)
SELECT DAY(column_name) FROM table_name;

-- 예시
SELECT DAY(b_date)
FROM employees
WHERE emp_id = 'E1002';
```

---

### CURRENT_DATE

현재 날짜를 반환합니다.

```sql
-- 문법 (MySQL/DB2)
SELECT CURRENT_DATE;

-- 예시
SELECT CURRENT_DATE;
```

---

### DATEDIFF

두 날짜 또는 타임스탬프 사이의 차이를 계산합니다. 일반적으로 일(day) 단위 차이를 반환합니다.

```sql
-- 문법 (MySQL)
SELECT DATEDIFF(date1, date2);

-- 예시
SELECT DATEDIFF(CURRENT_DATE, b_date)
FROM employees;
```

> `DATEDIFF` 문법은 DBMS마다 다를 수 있습니다. DB2에서는 환경에 따라 날짜끼리 직접 빼거나 전용 함수 문법을 사용할 수 있습니다.

---

### FROM_DAYS

일 수(number of days)를 날짜 형식으로 변환합니다.

```sql
-- 문법 (MySQL)
SELECT FROM_DAYS(number_of_days);

-- 예시
SELECT FROM_DAYS(DATEDIFF(CURRENT_DATE, b_date))
FROM employees;
```

> `FROM_DAYS`는 MySQL에서 주로 사용하는 함수입니다. DB2에서는 동일 문법이 지원되지 않을 수 있습니다.

---

### DATE_ADD

지정한 날짜에 일정 기간을 더한 날짜를 반환합니다.

```sql
-- 문법 (MySQL)
SELECT DATE_ADD(date, INTERVAL n unit);

-- 예시: 현재 날짜에서 3일 후
SELECT DATE_ADD(CURRENT_DATE, INTERVAL 3 DAY);
```

`unit`에는 `DAY`, `MONTH`, `YEAR` 등을 사용할 수 있습니다.

---

### DATE_SUB

지정한 날짜에서 일정 기간을 뺀 날짜를 반환합니다.

```sql
-- 문법 (MySQL)
SELECT DATE_SUB(date, INTERVAL n unit);

-- 예시: 현재 날짜에서 3일 전
SELECT DATE_SUB(CURRENT_DATE, INTERVAL 3 DAY);
```

`unit`에는 `DAY`, `MONTH`, `YEAR` 등을 사용할 수 있습니다.

---

## 서브쿼리

서브쿼리는 다른 SQL 쿼리 안에 포함된 쿼리입니다.

주로 메인 쿼리에서 사용할 조건 값을 반환하기 위해 사용합니다.

### 기본 문법

```sql
SELECT column_name
FROM table_name
WHERE column_name OPERATOR (
    SELECT column_name
    FROM table_name
    WHERE condition
);
```

### 예시 1: 평균 급여보다 낮은 직원 조회

```sql
SELECT emp_id, f_name, l_name, salary
FROM employees
WHERE salary < (
    SELECT AVG(salary)
    FROM employees
);
```

### 예시 2: FROM 절의 서브쿼리

```sql
SELECT *
FROM (
    SELECT emp_id, f_name, l_name, dep_id
    FROM employees
) AS emp4all;
```

### 예시 3: IN과 서브쿼리

```sql
SELECT *
FROM employees
WHERE job_id IN (
    SELECT job_ident
    FROM jobs
);
```

---

## 암시적 조인

암시적 조인은 `JOIN` 키워드를 직접 쓰지 않고, `FROM` 절에 여러 테이블을 나열한 뒤 `WHERE` 절에서 연결 조건을 지정하는 방식입니다.

### Implicit Inner Join

두 테이블에서 연결 조건이 일치하는 행만 반환합니다.

```sql
-- 문법 (MySQL/DB2)
SELECT column_name(s)
FROM table1, table2
WHERE table1.column_name = table2.column_name;

-- 예시
SELECT *
FROM employees, jobs
WHERE employees.job_id = jobs.job_ident;
```

---

### Implicit Cross Join

두 테이블의 모든 행 조합을 반환합니다.

결과 행 수는 첫 번째 테이블의 행 수와 두 번째 테이블의 행 수를 곱한 값이 됩니다.

```sql
-- 문법 (MySQL/DB2)
SELECT column_name(s)
FROM table1, table2;

-- 예시
SELECT *
FROM employees, jobs;
```

> 연결 조건 없이 여러 테이블을 나열하면 Cartesian product가 발생하므로, 의도한 경우가 아니라면 주의해야 합니다.

---

## 한눈에 보기

| 구분 | 구문/함수 | 용도 |
|------|-----------|------|
| 집계 | `COUNT` | 행 개수 계산 |
| 집계 | `AVG` | 평균 계산 |
| 집계 | `SUM` | 합계 계산 |
| 집계 | `MIN` | 최솟값 반환 |
| 집계 | `MAX` | 최댓값 반환 |
| 숫자 | `ROUND` | 반올림 |
| 문자열 | `LENGTH` | 문자열 길이 반환 |
| 문자열 | `UCASE` | 대문자 변환 |
| 문자열 | `LCASE` | 소문자 변환 |
| 중복 제거 | `DISTINCT` | 고유 값 반환 |
| 날짜 | `DAY` | 날짜에서 일 반환 |
| 날짜 | `CURRENT_DATE` | 현재 날짜 반환 |
| 날짜 | `DATEDIFF` | 두 날짜 차이 계산 |
| 날짜 | `FROM_DAYS` | 일 수를 날짜 형식으로 변환 |
| 날짜 | `DATE_ADD` | 날짜 더하기 |
| 날짜 | `DATE_SUB` | 날짜 빼기 |
| 다중 테이블 | 서브쿼리 | 다른 쿼리 결과를 조건으로 사용 |
| 다중 테이블 | Implicit Inner Join | 조건이 일치하는 행 연결 |
| 다중 테이블 | Implicit Cross Join | 모든 행 조합 반환 |
