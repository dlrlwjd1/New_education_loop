# Module 3 Graded Quiz 2 — Functions & Subqueries

## Q1. 부서 ID가 가장 높은 부서에 속한 직원 데이터를 반환하는 쿼리는?

**정답:**

```sql
SELECT * FROM EMPLOYEES
WHERE DEP_ID = (SELECT MAX(DEPT_ID_DEP) FROM DEPARTMENTS);
```

- 서브쿼리 `(SELECT MAX(DEPT_ID_DEP) FROM DEPARTMENTS)`가 최댓값을 먼저 계산
- 그 값과 `DEP_ID`가 일치하는 직원만 반환

| 오답 | 이유 |
|------|------|
| `WHERE DEPT_ID_DEP IS MAX` | `IS MAX`는 유효하지 않은 문법 |
| `WHERE DEP_ID = MAX(DEP_ID)` | 집계 함수를 WHERE에서 직접 사용 불가 |
| `MAX(SELECT DEPT_ID_DEP ...)` | `MAX()`가 서브쿼리 바깥에 위치 — 잘못된 문법 |

---

## Q2. 각 직원의 이름(F_NAME)과 부서 이름(DEP_NAME)을 조회하는 올바른 쿼리는?

> EMPLOYEES 테이블: `F_NAME`, `DEP_ID`  
> DEPARTMENTS 테이블: `DEP_NAME`, `DEPT_ID_DEP`

**정답:**

```sql
SELECT F_NAME, DEP_NAME
FROM EMPLOYEES, DEPARTMENTS
WHERE DEPT_ID_DEP = DEP_ID;
```

- 두 테이블 모두 `FROM`에 명시
- `WHERE DEPT_ID_DEP = DEP_ID` — 각 열 이름이 테이블 내에서 고유하므로 별칭 없이도 동작

| 오답 | 이유 |
|------|------|
| `SELECT D.F_NAME, E.DEP_NAME ...` | 별칭 E(EMPLOYEES)에 DEP_NAME 없음, 별칭 D(DEPARTMENTS)에 F_NAME 없음 |
| `WHERE E.DEPT_ID_DEP = D.DEP_ID` | EMPLOYEES에 DEPT_ID_DEP 없음, DEPARTMENTS에 DEP_ID 없음 |
| `FROM EMPLOYEES, DEPARTMENTS` (WHERE 없음) | 조인 조건 없으면 카테시안 곱(모든 행의 조합) 발생 |

---

## Q3. 총 구조 비용을 `Total_Cost`라는 열 이름으로 반환하는 쿼리는?

**정답:**

```sql
SELECT SUM(Cost) AS Total_Cost FROM PetRescue;
```

- `SUM(Cost)` — Cost 열 전체 합산
- `AS Total_Cost` — 결과 열 이름 지정

| 오답 | 이유 |
|------|------|
| `SELECT SUM(Cost) FROM PetRescue` | 결과 열 이름이 자동 생성(숫자 등)되어 Total_Cost가 아님 |
| `SELECT SUM(Total_Cost) FROM PetRescue` | Total_Cost라는 열이 테이블에 존재하지 않음 |
| `SELECT Total_Cost FROM PetRescue` | 존재하지 않는 열 참조 |

---

## Q4. 직원이 살아온 총 일수를 계산하는 올바른 MySQL 쿼리는?

**정답:**

```sql
SELECT DATEDIFF(CURRENT_DATE, DOB) FROM Employees;
```

- `DATEDIFF(date1, date2)` — 두 날짜 사이의 **정수 일수** 반환

| 오답 | 이유 |
|------|------|
| `SELECT (CURRENT_DATE - DOB) FROM Employees` | 결과가 연-월-일 형식, 순수 일수(정수)가 아님 |
| `SELECT FROM_DAYS(DATEDIFF(...)) FROM Employees` | `FROM_DAYS()`는 일수를 날짜로 변환 — 경과 일수가 아닌 날짜 반환 |
| `SELECT FROM_DAYS(DATE_SUB(CURRENT_DATE, DOB) ...)` | `DATE_SUB`는 `INTERVAL` 문법이 필요하고 괄호도 누락 |

---

## Q5. 제조일(`DOM`)로부터 1년 후의 유통기한을 `DOE`로 표시하는 MySQL 쿼리는?

**정답:**

```sql
SELECT NAME, DATE_ADD(DOM, INTERVAL 1 YEAR) AS DOE FROM MEDS;
```

- `DATE_ADD(date, INTERVAL n unit)` — MySQL 날짜 더하기 함수
- 단위: `YEAR` (복수형 `YEARS`는 유효하지 않음)
- `AS DOE` — 결과 열 이름 지정

| 오답 | 이유 |
|------|------|
| `INTERVAL 1 YEARS` | MySQL에서 `YEARS`는 유효하지 않은 단위, `YEAR` 사용 |
| `DATEADD(DOM, INTERVAL 1 YEAR)` | `DATEADD`는 SQL Server 문법, MySQL은 `DATE_ADD` 사용 |
| `DATEADD(...) AS DOE` | `DATEADD` 자체가 MySQL에서 유효하지 않음 |
