# Module 3 Quiz 2 — Built-in Functions & Subqueries

## Q1. 내장 데이터베이스 함수에 대한 올바른 설명은?

**정답: 내장 함수는 데이터베이스에서 가져오는 데이터의 양을 줄인다.**

- DB 내부에서 처리 → 앱으로 전송되는 데이터 감소 → 네트워크 트래픽·대역폭 절약

| 오답 | 이유 |
|------|------|
| Python 같은 언어에서만 호출 가능 | SQL 문 안에서 직접 사용 가능 |
| 네트워크 대역폭을 증가시킴 | 오히려 감소시킴 |
| 처리 시간을 늘림 | 대용량 데이터에서 앱 처리보다 빠름 |

---

## Q2. 각 개(Dog)가 구조된 요일(day of week)을 반환하는 쿼리는?

**정답:**

```sql
SELECT DAYOFWEEK(RescueDate) FROM PetRescue WHERE Animal = 'Dog';
```

- `DAYOFWEEK()` — 요일 번호 반환 (1=일요일 ~ 7=토요일)
- `WHERE Animal = 'Dog'` — 개만 필터링

| 오답 | 이유 |
|------|------|
| `SELECT DAY(RescueDate)` | `DAY()`는 날짜의 '일(1~31)'을 반환, 요일이 아님 |
| `SELECT RescueDate ...` | 날짜 전체 반환, 요일 추출 없음 |
| `SELECT DAYOFWEEK(...) FROM PetRescue` | WHERE 절이 없어 모든 동물 포함 |

---

## Q3. 다음 쿼리의 결과는?

```sql
SELECT (CURRENT_DATE - RescueDate) FROM PetRescue;
```

**정답: 각 구조 이후 현재까지 경과한 기간을 반환한다.**

- `CURRENT_DATE` — 오늘 날짜
- `CURRENT_DATE - RescueDate` — 각 행의 구조일로부터 오늘까지의 차이 (연-월-일 형식)

| 오답 | 이유 |
|------|------|
| 각 구조의 날짜만 반환 | RescueDate 단독 조회가 아님 |
| 현재 날짜와 구조 날짜 두 열 반환 | 두 값의 차이(연산 결과)를 반환 |
| 오늘 날짜만 반환 | `CURRENT_DATE` 단독이 아닌 뺄셈 연산 |

---

## Q4. 평균 급여보다 적게 받는 직원을 조회하는 올바른 쿼리는?

**정답:**

```sql
SELECT * FROM Employees
WHERE Salary < (SELECT AVG(Salary) FROM Employees);
```

- `AVG()`는 WHERE 절에서 직접 사용 불가 → 서브쿼리로 우회
- 서브쿼리에는 반드시 `FROM` 테이블을 명시해야 함

| 오답 | 이유 |
|------|------|
| `WHERE Salary < AVG(Salary)` | 집계 함수를 WHERE에서 직접 사용 → 오류 |
| `SELECT AVG(Salary) FROM Employees WHERE Salary < AVG(Salary)` | 집계 함수를 WHERE에서 직접 사용 → 오류 |
| `WHERE Salary < (SELECT AVG(Salary))` | 서브쿼리에 `FROM Employees` 누락 → 오류 |

---

## Q5. 하나의 쿼리에서 여러 테이블을 다루는 세 가지 방법은?

**정답: 서브쿼리(Sub-queries), 암시적 조인(Implicit joins), JOIN 연산자**

| 방법 | 설명 |
|------|------|
| 서브쿼리 | 괄호 안에 중첩된 SELECT |
| 암시적 조인 | `FROM table1, table2 WHERE t1.id = t2.id` 형태 |
| JOIN 연산자 | `INNER JOIN`, `LEFT JOIN` 등 명시적 조인 |

| 오답 | 이유 |
|------|------|
| APPEND | SQL 표준 다중 테이블 조작 방법이 아님 |
| normalization | 테이블 설계 기법, 쿼리 방법이 아님 |
| Built-in functions | 함수는 테이블 결합 방법이 아님 |
