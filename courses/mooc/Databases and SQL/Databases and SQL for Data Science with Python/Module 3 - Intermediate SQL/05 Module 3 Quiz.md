# Module 3 Quiz

## Q1. `Employees` 테이블에서 `Lastname` 알파벳 오름차순으로 조회하는 쿼리는?

**정답:**

```sql
SELECT * FROM Employees ORDER BY Lastname;
```

`ORDER BY`의 기본값은 오름차순(`ASC`)이므로 생략 가능합니다.

| 오답 | 이유 |
|------|------|
| `SORT BY Lastname` | SQL 표준 문법이 아님 |
| `ORDER BY Lastname DESC` | 내림차순(Z→A) — 알파벳 역순 |
| `GROUP BY Lastname` | 정렬이 아닌 그룹화 |

---

## Q2. `GROUP BY` 절과 함께 필터 조건을 설정하는 키워드는?

**정답: `HAVING`**

| 키워드 | 역할 |
|--------|------|
| `WHERE` | 개별 행 필터 (GROUP BY 전에 적용) |
| `HAVING` | 그룹 필터 (GROUP BY 후에 적용) |
| `SELECT` | 반환할 열 지정 |
| `ORDER BY` | 결과 정렬 |

---

## Q3. `Author` 테이블에서 Australia, Canada, India 저자를 조회하는 올바른 쿼리는?

**정답:**

```sql
SELECT * FROM Author WHERE Country IN ('Australia', 'Canada', 'India');
```

| 오답 | 이유 |
|------|------|
| `WHERE Country LIST (...)` | `LIST`는 존재하지 않는 SQL 키워드 |
| `WHERE Country BETWEEN(...)` | `BETWEEN`은 연속 범위용, 3개 값 목록에 사용 불가 |
| `IF Country (...)` | `IF`는 WHERE 조건 키워드가 아님 |

---

## Q4. `Book` 테이블에서 가격이 $10~$25인 책을 조회하는 두 가지 방법은?

**정답:**

```sql
-- 방법 1: BETWEEN AND (양 끝 포함)
SELECT Title, Price FROM Book WHERE Price BETWEEN 10 AND 25;

-- 방법 2: 비교 연산자
SELECT Title, Price FROM Book WHERE Price >= 10 AND Price <= 25;
```

| 오답 | 이유 |
|------|------|
| `WHERE Price 10 to 25` | 유효하지 않은 문법 |
| `WHERE Price IN (10, 25)` | 정확히 10 또는 25인 값만 반환 (범위 아님) |

---

## Q5. `Ed`의 급여 정보만 조회하려면 어떤 절을 추가해야 하는가?

**정답:**

```sql
SELECT Firstname, Lastname, Salary FROM Employees
WHERE Firstname = 'Ed';
```

| 오답 | 이유 |
|------|------|
| `GROUP BY Firstname = 'Ed'` | `GROUP BY`는 조건 필터 불가, 문법도 틀림 |
| `ORDER BY Firstname` | 정렬만 할 뿐 행 수를 줄이지 않음 |
| `WHERE Employees = 'Ed'` | 열 이름이 아닌 테이블 이름 사용 |
