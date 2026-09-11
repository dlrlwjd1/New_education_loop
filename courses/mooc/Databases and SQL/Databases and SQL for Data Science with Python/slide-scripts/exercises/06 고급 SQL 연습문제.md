# 06강 연습문제 — 고급 SQL: View, Transaction, Join

## 학습 목표

- `CREATE VIEW`로 가상 테이블을 만들고 재사용한다.
- `COMMIT`과 `ROLLBACK`으로 Transaction을 제어하는 개념을 이해한다.
- `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`으로 여러 테이블을 연결한다.
- JOIN 결과의 `NULL` 값을 해석한다.
- 3개 이상의 테이블을 JOIN하는 복합 쿼리를 작성한다.

## 사전 준비

```sql
-- data/06_advanced_data.sql 실행
-- (DEPARTMENTS, EMPLOYEES가 필요하면 04_functions_data.sql도 실행)
-- 또는 data/all_setup.sql 한 번에 실행
```

## 테이블 구조

**EMPLOYEES:** EMP_ID, F_NAME, L_NAME, DEP_ID, SALARY, JOB_TITLE

**DEPARTMENTS:** DEPT_ID_DEP, DEP_NAME, MANAGER_ID, LOCATION

**JOBS:** JOB_ID, JOB_TITLE, MIN_SALARY, MAX_SALARY

**BORROWER:** BORROWER_ID, NAME, EMAIL, CITY

**LOAN:** LOAN_ID, BORROWER_ID, BOOK_ID, LOAN_DATE, RETURN_DATE

---

## Part 1. View

### 문제 1 — CREATE VIEW: 기본 뷰 생성

**과제:** EMPLOYEES 테이블에서 급여(SALARY)를 제외한 공개용 뷰 `emp_public`을 만드세요.
뷰 생성 후 SELECT로 조회하세요.

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
CREATE VIEW emp_public AS
SELECT EMP_ID, F_NAME, L_NAME, DEP_ID, JOB_TITLE
FROM EMPLOYEES;

SELECT * FROM emp_public;
```

**설명:**
View는 실제 데이터를 복사하지 않습니다. `SELECT * FROM emp_public`을 실행하면 정의된 SELECT 쿼리가 그 자리에서 실행됩니다. 민감한 컬럼(급여, 개인정보)을 제외한 뷰를 만들어 권한에 따라 접근 범위를 제한할 수 있습니다.

</details>

---

### 문제 2 — CREATE VIEW: 조건이 있는 뷰

**과제:** JOBS 테이블에서 최소 급여(MIN_SALARY)가 50000 이상인 직종만 담은 뷰 `high_salary_jobs`를 만드세요.

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
CREATE VIEW high_salary_jobs AS
SELECT JOB_ID, JOB_TITLE, MIN_SALARY, MAX_SALARY
FROM JOBS
WHERE MIN_SALARY >= 50000;

-- 뷰 조회
SELECT * FROM high_salary_jobs;

-- 뷰 위에 추가 조건도 가능
SELECT JOB_TITLE, MIN_SALARY
FROM high_salary_jobs
WHERE MAX_SALARY > 130000;
```

**설명:**
뷰는 일반 테이블처럼 `WHERE`, `ORDER BY`, `JOIN` 등을 사용할 수 있습니다. 반복해서 쓰는 필터링 조건을 뷰로 저장하면 매번 조건을 다시 쓸 필요가 없습니다.

**예상 결과:** Software Engineer(60000), Data Scientist(75000), Senior Engineer(80000), ML Engineer(85000)

</details>

---

### 문제 3 — DROP VIEW

**과제:** `emp_public` 뷰를 삭제하고, 원본 EMPLOYEES 테이블은 그대로 남아 있는지 확인하세요.

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
DROP VIEW IF EXISTS emp_public;

-- 원본 테이블 확인 (변화 없음)
SELECT COUNT(*) FROM EMPLOYEES;
```

**설명:**
`DROP VIEW`는 뷰 정의만 삭제합니다. 원본 테이블의 데이터는 전혀 영향을 받지 않습니다. `IF EXISTS`를 붙이면 뷰가 없어도 오류 없이 실행됩니다.

</details>

---

## Part 2. Transaction

### 문제 4 — COMMIT: 변경 사항 확정

**과제:** EMPLOYEES 테이블에서 Ana Silva(E009)의 급여를 95000으로 수정하고,
`COMMIT`으로 확정하는 흐름을 작성하세요.

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
-- 1. 수정 전 확인
SELECT EMP_ID, F_NAME, L_NAME, SALARY
FROM EMPLOYEES
WHERE EMP_ID = 'E009';

-- 2. 수정
UPDATE EMPLOYEES
SET SALARY = 95000.00
WHERE EMP_ID = 'E009';

-- 3. 확정
COMMIT;

-- 4. 수정 후 확인
SELECT EMP_ID, F_NAME, L_NAME, SALARY
FROM EMPLOYEES
WHERE EMP_ID = 'E009';
```

**설명:**
`COMMIT`은 지금까지의 모든 변경 사항을 데이터베이스에 영구적으로 반영합니다. 많은 DBMS에서 Auto-commit 모드가 기본으로 활성화되어 있어 각 SQL 문 후 자동으로 commit됩니다. SQLite에서는 `con.commit()`을 Python에서 호출합니다.

</details>

---

### 문제 5 — ROLLBACK: 변경 사항 취소

**과제:** EMPLOYEES 테이블에서 모든 직원 급여를 일괄 10% 인상했다가,
의도하지 않은 변경임을 알고 `ROLLBACK`으로 되돌리는 흐름을 작성하세요.

> **참고:** SQLite에서는 `BEGIN TRANSACTION`으로 트랜잭션을 시작합니다.

<details>
<summary>풀이 보기</summary>

**정답 (MySQL / Db2):**
```sql
-- 트랜잭션 시작
START TRANSACTION;

-- 잘못된 작업 (WHERE 없이 전체 수정)
UPDATE EMPLOYEES
SET SALARY = SALARY * 1.1;

-- 확인
SELECT EMP_ID, SALARY FROM EMPLOYEES;

-- 실수 발견 → 되돌리기
ROLLBACK;

-- 원래대로 복구됐는지 확인
SELECT EMP_ID, SALARY FROM EMPLOYEES;
```

**SQLite 버전:**
```sql
BEGIN TRANSACTION;

UPDATE EMPLOYEES SET SALARY = SALARY * 1.1;

SELECT EMP_ID, SALARY FROM EMPLOYEES;

ROLLBACK;

SELECT EMP_ID, SALARY FROM EMPLOYEES;
```

**Python에서 ROLLBACK:**
```python
import sqlite3

con = sqlite3.connect(":memory:")
# ... 테이블 생성 및 데이터 삽입 ...

try:
    cur = con.cursor()
    cur.execute("UPDATE EMPLOYEES SET SALARY = SALARY * 1.1")
    # 문제 발생
    raise Exception("실수 발견!")
    con.commit()
except Exception as e:
    con.rollback()
    print(f"롤백 완료: {e}")
```

**설명:**
ACID의 Atomicity(원자성)는 ROLLBACK으로 구현됩니다. 여러 작업 중 하나라도 실패하면 모두 취소해 데이터 일관성을 유지합니다. `DELETE`, `UPDATE` 같은 위험한 작업 전에 트랜잭션을 시작하는 습관이 중요합니다.

</details>

---

## Part 3. Join

### 문제 6 — INNER JOIN: 대출 기록이 있는 대출자

**과제:** BORROWER와 LOAN 테이블을 INNER JOIN으로 연결해
대출 기록이 있는 대출자의 이름, 도시, 대출 날짜를 조회하세요.

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
SELECT B.NAME, B.CITY, L.LOAN_DATE, L.BOOK_ID
FROM BORROWER B
INNER JOIN LOAN L
  ON B.BORROWER_ID = L.BORROWER_ID
ORDER BY L.LOAN_DATE;
```

**설명:**
`INNER JOIN`은 양쪽 테이블 모두에 매칭되는 행만 반환합니다. BORROWER_ID가 LOAN 테이블에 없는 대출자(Choi Dongwoo, Jung Haerin)는 결과에 포함되지 않습니다.

**예상 결과:** 5행 (Kim Jiyeon 2건, Park Sungmin 2건, Lee Narae 1건)

</details>

---

### 문제 7 — LEFT JOIN: 모든 대출자 포함

**과제:** BORROWER와 LOAN 테이블을 LEFT JOIN으로 연결해
**모든 대출자를** 조회하세요. 대출 기록이 없는 대출자는 LOAN 관련 컬럼이 NULL로 표시됩니다.

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
SELECT B.BORROWER_ID, B.NAME, B.CITY,
       L.LOAN_ID, L.LOAN_DATE
FROM BORROWER B
LEFT JOIN LOAN L
  ON B.BORROWER_ID = L.BORROWER_ID
ORDER BY B.BORROWER_ID;
```

**설명:**
`LEFT JOIN`은 왼쪽 테이블(BORROWER)의 모든 행을 유지합니다. 오른쪽 테이블(LOAN)에 매칭되는 행이 없으면 LOAN 관련 컬럼이 NULL로 채워집니다.

**예상 결과:**
| BORROWER_ID | NAME | LOAN_ID | LOAN_DATE |
|-------------|------|---------|-----------|
| B001 | Kim Jiyeon | L001 | 2024-01-10 |
| B001 | Kim Jiyeon | L003 | 2024-02-01 |
| B002 | Park Sungmin | L002 | 2024-01-15 |
| B002 | Park Sungmin | L005 | 2024-03-05 |
| B003 | Lee Narae | L004 | 2024-02-20 |
| B004 | Choi Dongwoo | **NULL** | **NULL** |
| B005 | Jung Haerin | **NULL** | **NULL** |

</details>

---

### 문제 8 — NULL 해석: 한 번도 대출하지 않은 사람 찾기

**과제:** 대출 기록이 **전혀 없는** 대출자만 조회하세요.

> **힌트:** LEFT JOIN 결과에서 LOAN 컬럼이 NULL인 행만 필터링합니다.

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
SELECT B.BORROWER_ID, B.NAME, B.EMAIL, B.CITY
FROM BORROWER B
LEFT JOIN LOAN L
  ON B.BORROWER_ID = L.BORROWER_ID
WHERE L.LOAN_ID IS NULL;
```

**설명:**
LEFT JOIN 후 오른쪽 테이블의 컬럼이 NULL인 행은 매칭이 없었다는 의미입니다. `WHERE L.LOAN_ID IS NULL`로 대출 기록이 없는 대출자만 필터링할 수 있습니다. 이 패턴은 "A에는 있지만 B에는 없는" 데이터를 찾을 때 자주 사용합니다.

**예상 결과:** Choi Dongwoo(B004), Jung Haerin(B005)

</details>

---

### 문제 9 — 아직 반납하지 않은 대출 조회

**과제:** 현재 반납이 완료되지 않은(RETURN_DATE가 NULL인) 대출 기록과 대출자 이름을 조회하세요.

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
SELECT B.NAME, L.LOAN_ID, L.BOOK_ID, L.LOAN_DATE
FROM BORROWER B
INNER JOIN LOAN L
  ON B.BORROWER_ID = L.BORROWER_ID
WHERE L.RETURN_DATE IS NULL
ORDER BY L.LOAN_DATE;
```

**설명:**
`IS NULL`은 NULL 값을 확인할 때 사용합니다. `= NULL`이나 `<> NULL`은 SQL에서 올바르게 동작하지 않습니다. NULL은 "알 수 없음"이기 때문에 비교 연산자로 판단할 수 없고, 반드시 `IS NULL` / `IS NOT NULL`을 사용해야 합니다.

**예상 결과:** Park Sungmin(L002), Lee Narae(L004) — 2건

</details>

---

### 문제 10 — JOIN으로 대출자별 대출 횟수

**과제:** 각 대출자의 총 대출 횟수를 구하세요.
대출 기록이 없는 대출자도 포함하며, 대출 횟수 0으로 표시합니다.

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
SELECT
    B.BORROWER_ID,
    B.NAME,
    COUNT(L.LOAN_ID) AS loan_count
FROM BORROWER B
LEFT JOIN LOAN L
  ON B.BORROWER_ID = L.BORROWER_ID
GROUP BY B.BORROWER_ID, B.NAME
ORDER BY loan_count DESC;
```

**설명:**
`LEFT JOIN` 후 `GROUP BY`를 사용합니다. `COUNT(L.LOAN_ID)`는 NULL을 세지 않으므로, 대출 기록이 없는 대출자는 자동으로 0이 됩니다. `COUNT(*)`를 쓰면 NULL 행도 1로 세기 때문에 여기서는 특정 컬럼의 COUNT를 써야 합니다.

**예상 결과:**
| BORROWER_ID | NAME | loan_count |
|-------------|------|------------|
| B001 | Kim Jiyeon | 2 |
| B002 | Park Sungmin | 2 |
| B003 | Lee Narae | 1 |
| B004 | Choi Dongwoo | 0 |
| B005 | Jung Haerin | 0 |

</details>

---

### 문제 11 — INNER JOIN 3개 테이블

**과제:** EMPLOYEES, DEPARTMENTS, JOBS 테이블을 사용해
직원 이름, 부서명, 담당 직무의 급여 범위를 함께 조회하세요.

> JOB_TITLE이 EMPLOYEES와 JOBS에 모두 있습니다. 이 컬럼으로 연결합니다.

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
SELECT
    E.F_NAME,
    E.L_NAME,
    D.DEP_NAME,
    E.JOB_TITLE,
    J.MIN_SALARY,
    J.MAX_SALARY,
    E.SALARY
FROM EMPLOYEES E
INNER JOIN DEPARTMENTS D
  ON E.DEP_ID = D.DEPT_ID_DEP
INNER JOIN JOBS J
  ON E.JOB_TITLE = J.JOB_TITLE
ORDER BY D.DEP_NAME, E.SALARY DESC;
```

**설명:**
두 번째 `INNER JOIN`을 추가하면 세 번째 테이블을 연결할 수 있습니다. JOIN은 순서대로 적용됩니다: 먼저 EMPLOYEES와 DEPARTMENTS를 연결하고, 그 결과에 JOBS를 연결합니다. 각 JOIN에 `ON` 절로 연결 조건을 명시합니다.

</details>

---

## 통합 문제 — 도서관 분석 쿼리

**과제:** 아래 분석 질문에 답하는 쿼리를 작성하세요.

**질문:** "대출 기록이 있는 대출자 중, 2024년 1월에 대출을 시작했고 아직 반납하지 않은 기록을 가진 대출자의 이름, 도시, 대출 날짜를 조회하세요."

<details>
<summary>풀이 보기</summary>

**정답 (MySQL / Db2):**
```sql
SELECT B.NAME, B.CITY, L.LOAN_DATE, L.BOOK_ID
FROM BORROWER B
INNER JOIN LOAN L
  ON B.BORROWER_ID = L.BORROWER_ID
WHERE YEAR(L.LOAN_DATE) = 2024
  AND MONTH(L.LOAN_DATE) = 1
  AND L.RETURN_DATE IS NULL
ORDER BY L.LOAN_DATE;
```

**SQLite 버전:**
```sql
SELECT B.NAME, B.CITY, L.LOAN_DATE, L.BOOK_ID
FROM BORROWER B
INNER JOIN LOAN L
  ON B.BORROWER_ID = L.BORROWER_ID
WHERE strftime('%Y-%m', L.LOAN_DATE) = '2024-01'
  AND L.RETURN_DATE IS NULL
ORDER BY L.LOAN_DATE;
```

**설명:**
여러 조건을 `AND`로 결합합니다:
1. `YEAR = 2024 AND MONTH = 1`: 2024년 1월 대출
2. `RETURN_DATE IS NULL`: 아직 미반납

**예상 결과:** Park Sungmin, Busan, 2024-01-15 (L002)

</details>

---

## 핵심 정리

### View

| 구문 | 설명 |
|------|------|
| `CREATE VIEW name AS SELECT ...` | 뷰 생성 |
| `SELECT * FROM name` | 뷰 조회 (일반 테이블처럼) |
| `DROP VIEW IF EXISTS name` | 뷰 삭제 (원본 데이터 영향 없음) |

### Transaction

| 구문 | 설명 |
|------|------|
| `BEGIN TRANSACTION` | 트랜잭션 시작 (SQLite) |
| `START TRANSACTION` | 트랜잭션 시작 (MySQL) |
| `COMMIT` | 변경 사항 확정 |
| `ROLLBACK` | 변경 사항 취소 |

### Join

| JOIN 유형 | 결과 | 사용 시점 |
|-----------|------|-----------|
| `INNER JOIN` | 양쪽에 모두 있는 행 | 매칭되는 데이터만 필요 |
| `LEFT JOIN` | 왼쪽 전체 + 오른쪽 매칭 | 왼쪽 기준 전체 + 있으면 추가 정보 |
| `RIGHT JOIN` | 오른쪽 전체 + 왼쪽 매칭 | 오른쪽 기준 전체 |
| `FULL OUTER JOIN` | 양쪽 전체 | 누락 데이터 파악 |

### NULL 처리

| 표현 | 의미 |
|------|------|
| `IS NULL` | NULL인 행 (= NULL 은 안 됨) |
| `IS NOT NULL` | NULL이 아닌 행 |
| `COUNT(컬럼)` | NULL 제외 카운트 |
| `COUNT(*)` | NULL 포함 전체 카운트 |
