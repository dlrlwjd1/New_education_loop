# 01강 연습문제 — 데이터베이스와 SQL 기본 CRUD

## 학습 목표

- `SELECT`, `WHERE`, `COUNT`, `DISTINCT`, `LIMIT`로 데이터를 조회한다.
- `INSERT`, `UPDATE`, `DELETE`로 데이터를 조작한다.
- `UPDATE`와 `DELETE` 전에 `SELECT`로 대상을 확인하는 습관을 익힌다.

## 사전 준비

```sql
-- 아래 파일을 먼저 실행하세요.
-- data/01_crud_data.sql
```

## 테이블 구조

### EMPLOYEE

| 컬럼 | 타입 | 설명 |
|------|------|------|
| EMP_ID | CHAR(4) | 직원 ID (PK) |
| NAME | VARCHAR(30) | 이름 |
| DEPT | VARCHAR(20) | 부서 |
| SALARY | DECIMAL(10,2) | 급여 |
| COUNTRY | VARCHAR(30) | 국가 |

### MEDALS

| 컬럼 | 타입 | 설명 |
|------|------|------|
| ID | INTEGER | (PK) |
| COUNTRY | VARCHAR(30) | 국가 |
| YEAR | INTEGER | 연도 |
| SPORT | VARCHAR(30) | 종목 |
| GOLD / SILVER / BRONZE | INTEGER | 메달 수 |

### INSTRUCTOR

| 컬럼 | 타입 | 설명 |
|------|------|------|
| ID | CHAR(2) | (PK) |
| NAME | VARCHAR(30) | 이름 |
| DEPT | VARCHAR(30) | 담당 과목 |

---

## 연습 문제

### 문제 1 — 전체 조회

**과제:** EMPLOYEE 테이블의 모든 행과 열을 조회하세요.

> **힌트:** `SELECT *` 를 사용하면 모든 열을 가져올 수 있습니다.

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
SELECT *
FROM EMPLOYEE;
```

**설명:**
`SELECT *`는 테이블의 모든 열을 가져옵니다. `FROM` 뒤에 테이블 이름을 씁니다. 처음 테이블 구조를 파악할 때 유용하지만, 실제 분석에서는 필요한 열만 명시하는 것이 좋습니다.

**예상 결과:** 10행 (E001 ~ E010), 5개 컬럼 출력

</details>

---

### 문제 2 — 특정 열만 조회

**과제:** 모든 직원의 이름(NAME)과 부서(DEPT)만 조회하세요.

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
SELECT NAME, DEPT
FROM EMPLOYEE;
```

**설명:**
`SELECT` 뒤에 원하는 열 이름을 쉼표로 구분해 나열합니다. 불필요한 열을 제외하면 결과를 읽기 쉽고 쿼리 성능도 좋아집니다.

</details>

---

### 문제 3 — WHERE 조건 (숫자)

**과제:** 급여(SALARY)가 60000 이상인 직원의 이름과 급여를 조회하세요.

> **힌트:** `>=` 연산자를 사용합니다.

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
SELECT NAME, SALARY
FROM EMPLOYEE
WHERE SALARY >= 60000;
```

**설명:**
`WHERE` 절에 조건을 씁니다. 숫자 비교에는 `=`, `<>`, `>`, `<`, `>=`, `<=`를 사용합니다. 이 쿼리는 급여가 60000 이상인 행만 반환합니다.

**예상 결과:** Kim Minjun, John Smith, Maria Garcia, Priya Sharma, Liu Wei, Ana Silva (6명)

</details>

---

### 문제 4 — WHERE 조건 (문자열)

**과제:** HR 부서(DEPT = 'HR')에 속한 직원 전체를 조회하세요.

> **힌트:** 문자열 값은 작은따옴표로 감쌉니다.

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
SELECT *
FROM EMPLOYEE
WHERE DEPT = 'HR';
```

**설명:**
문자열 조건을 쓸 때는 값을 작은따옴표(`'`)로 감쌉니다. 대부분의 DBMS에서 문자열 비교는 대소문자를 구분합니다. `'hr'`이나 `'Hr'`로 쓰면 결과가 달라질 수 있습니다.

**예상 결과:** Park Jinho, James Brown, Tom Wilson (3명)

</details>

---

### 문제 5 — COUNT

**과제:** EMPLOYEE 테이블의 전체 직원 수를 구하세요.

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
SELECT COUNT(*)
FROM EMPLOYEE;
```

**설명:**
`COUNT(*)`는 테이블의 전체 행 수를 셉니다. 결과는 단일 숫자로 반환됩니다. `COUNT(컬럼명)`을 쓰면 해당 컬럼에서 NULL이 아닌 값의 수만 셉니다.

**예상 결과:** 10

</details>

---

### 문제 6 — DISTINCT

**과제:** MEDALS 테이블에서 국가(COUNTRY) 목록을 중복 없이 조회하세요.

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
SELECT DISTINCT COUNTRY
FROM MEDALS;
```

**설명:**
`DISTINCT`는 결과에서 중복 값을 제거합니다. USA가 여러 종목에 걸쳐 등장해도 결과에는 한 번만 나옵니다. 어떤 고유한 값들이 있는지 파악할 때 자주 사용합니다.

**예상 결과:** USA, China, Japan, Korea, UK, Australia, France, Germany, Canada (9개국)

</details>

---

### 문제 7 — LIMIT

**과제:** EMPLOYEE 테이블에서 처음 3행만 조회하세요.

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
SELECT *
FROM EMPLOYEE
LIMIT 3;
```

**설명:**
`LIMIT`는 결과 행 수를 제한합니다. 테이블이 크면 전체를 가져오기 전에 먼저 몇 행만 확인하는 데 유용합니다. `LIMIT`는 SQLite, MySQL, PostgreSQL에서 사용하며, IBM Db2에서는 `FETCH FIRST 3 ROWS ONLY`를 사용합니다.

</details>

---

### 문제 8 — INSERT

**과제:** 아래 정보를 가진 새 직원을 EMPLOYEE 테이블에 추가하세요.
- ID: E011, 이름: Yuna Kim, 부서: Marketing, 급여: 55000, 국가: Korea

> **힌트:** `INSERT INTO 테이블명 (컬럼...) VALUES (값...)`

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
INSERT INTO EMPLOYEE (EMP_ID, NAME, DEPT, SALARY, COUNTRY)
VALUES ('E011', 'Yuna Kim', 'Marketing', 55000.00, 'Korea');
```

**검증 쿼리:**
```sql
SELECT * FROM EMPLOYEE WHERE EMP_ID = 'E011';
```

**설명:**
`INSERT INTO`에 컬럼 이름을 명시하면 순서에 관계없이 정확히 값을 넣을 수 있어 안전합니다. 삽입 후 반드시 `SELECT`로 제대로 들어갔는지 확인하는 습관이 좋습니다.

</details>

---

### 문제 9 — UPDATE

**과제:** Priya Sharma(E007)의 급여를 75000으로 수정하세요.
단, 수정 전에 반드시 SELECT로 대상을 먼저 확인하세요.

> **주의:** `WHERE` 없이 UPDATE를 실행하면 모든 행이 바뀝니다.

<details>
<summary>풀이 보기</summary>

**1단계 — 먼저 대상 확인:**
```sql
SELECT EMP_ID, NAME, SALARY
FROM EMPLOYEE
WHERE EMP_ID = 'E007';
```

**2단계 — 수정 실행:**
```sql
UPDATE EMPLOYEE
SET SALARY = 75000.00
WHERE EMP_ID = 'E007';
```

**3단계 — 결과 확인:**
```sql
SELECT EMP_ID, NAME, SALARY
FROM EMPLOYEE
WHERE EMP_ID = 'E007';
```

**설명:**
`UPDATE`에서 `WHERE`는 필수입니다. `WHERE`가 없으면 테이블의 모든 직원 급여가 75000으로 바뀝니다. 실무에서는 수정 전 `SELECT`로 확인하는 것을 습관으로 만드세요.

</details>

---

### 문제 10 — DELETE

**과제:** INSTRUCTOR 테이블에서 ID가 'A3'인 강사를 삭제하세요.
삭제 전에 SELECT로 확인하고, 삭제 후에도 확인하세요.

<details>
<summary>풀이 보기</summary>

**1단계 — 삭제 전 확인:**
```sql
SELECT * FROM INSTRUCTOR WHERE ID = 'A3';
```

**2단계 — 삭제 실행:**
```sql
DELETE FROM INSTRUCTOR
WHERE ID = 'A3';
```

**3단계 — 삭제 후 확인:**
```sql
SELECT * FROM INSTRUCTOR;
```

**설명:**
`DELETE FROM 테이블`처럼 `WHERE` 없이 실행하면 테이블의 모든 행이 삭제됩니다. 항상 `WHERE`로 대상을 명확히 지정하세요. 삭제된 행은 복구하기 어려우므로 트랜잭션(ROLLBACK)을 함께 이해하는 것이 중요합니다.

</details>

---

## 통합 문제

**과제:** 아래 조건을 모두 만족하는 쿼리를 작성하세요.

1. `MEDALS` 테이블에서 Swimming 종목을 제외한 데이터를 조회
2. 금메달(GOLD) 수가 5개 이상인 국가만 필터링
3. 결과에 COUNTRY, SPORT, GOLD 컬럼만 표시
4. 금메달 수 내림차순으로 정렬

> 이 문제는 `WHERE`, 여러 조건(`AND`), `<>`, `>=`, `ORDER BY`를 모두 사용합니다.

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
SELECT COUNTRY, SPORT, GOLD
FROM MEDALS
WHERE SPORT <> 'Swimming'
  AND GOLD >= 5
ORDER BY GOLD DESC;
```

**설명:**
- `SPORT <> 'Swimming'`: Swimming이 아닌 행만 필터링 (`<>`는 같지 않다는 연산자)
- `AND GOLD >= 5`: 금메달이 5개 이상인 조건 추가
- `ORDER BY GOLD DESC`: 금메달 수 기준 내림차순 정렬

**예상 결과:**
| COUNTRY | SPORT | GOLD |
|---------|-------|------|
| USA | Athletics | 10 |
| Japan | Judo | 9 |
| UK | Cycling | 6 |

</details>

---

## 핵심 정리

| 구문 | 역할 | 주의점 |
|------|------|--------|
| `SELECT *` | 전체 열 조회 | 큰 테이블에서는 비효율 |
| `WHERE` | 행 필터링 | 문자열은 `''`, 숫자는 그냥 씀 |
| `COUNT(*)` | 행 수 계산 | NULL 포함 |
| `DISTINCT` | 중복 제거 | |
| `LIMIT n` | 결과 n행만 반환 | DBMS별 문법 다름 |
| `INSERT INTO` | 행 추가 | 컬럼명 명시 권장 |
| `UPDATE SET` | 행 수정 | **`WHERE` 필수** |
| `DELETE FROM` | 행 삭제 | **`WHERE` 필수** |
