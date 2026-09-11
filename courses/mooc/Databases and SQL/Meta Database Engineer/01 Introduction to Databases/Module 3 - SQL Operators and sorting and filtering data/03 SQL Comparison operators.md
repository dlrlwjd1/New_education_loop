# SQL Comparison operators

## 개요

- 비교 연산자(comparison operator)의 개념 — 두 값·식을 비교해 참/거짓을 판정하고 데이터를 필터링
- =, <, >, <=, >=, <> 연산자를 WHERE 절에서 사용하는 방법

## 내용

### 비교 연산자란

- **두 값이나 식을 비교해 결과가 참(true) 또는 거짓(false)이 되는 연산자**.
- 데이터를 **필터링**하거나 포함/제외하는 데 쓴다.
- 종류: `=`(같음), `<`(미만), `>`(초과), `<=`(이하), `>=`(이상), `<>`(같지 않음)

### WHERE 절과 결합하는 패턴

- `SELECT * FROM 테이블 WHERE 컬럼 연산자 값;`
- SELECT는 검색, `*`는 전체 컬럼, FROM은 원본 테이블, **WHERE 절이 조건을 정의**한다. 각 레코드의 값을 조건과 비교해 **참인 레코드만 반환**한다.

## 예시

employee 테이블(ID, 이름, salary)에서 급여 조건별 조회:

```sql
-- 연봉이 정확히 $18,000인 직원 → Carl, John
SELECT * FROM employee WHERE salary = 18000;

-- $24,000 미만
SELECT * FROM employee WHERE salary < 24000;

-- $24,000 이하 → 4명
SELECT * FROM employee WHERE salary <= 24000;

-- $24,000 이상 → 3명
SELECT * FROM employee WHERE salary >= 24000;

-- $24,000이 아닌 직원 → 3명
SELECT * FROM employee WHERE salary <> 24000;
```

- 부등호 조합 `<>`가 "같지 않음"을 나타낸다.

## 요약

- 비교 연산자는 참/거짓 판정으로 데이터를 필터링하는 도구다.
- WHERE 절에서 `컬럼 연산자 값` 형태로 조건을 걸어 조건이 참인 레코드만 조회한다.
- =, <, >, <=, >=, <>의 6가지가 있다.
