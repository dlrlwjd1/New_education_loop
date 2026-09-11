# Module 3 Graded Quiz

## Q1. 성(lastname)이 J로 시작하는 저자를 조회하는 올바른 패턴은?

**정답:**

```sql
SELECT lastname FROM author WHERE lastname LIKE 'J%';
```

| 와일드카드 | SQL 지원 여부 | 의미 |
|-----------|-------------|------|
| `%` | O | 0개 이상의 임의 문자 |
| `*` | X (SQL 외 언어) | SQL LIKE에서 사용 불가 |
| `$` | X | SQL LIKE에서 사용 불가 |
| `#` | X | SQL LIKE에서 사용 불가 |

---

## Q2. 결과 집합을 내림차순으로 정렬하는 올바른 쿼리는?

**정답:**

```sql
SELECT * FROM TABLE_NAME ORDER BY ID DESC;
```

- `DESC` 키워드로 내림차순 지정
- `ORDER BY`의 기본값은 `ASC`(오름차순)이므로 생략 시 오름차순

> `SELECT ID ...`와 `SELECT * ...` 모두 `DESC`가 붙으면 내림차순이지만,  
> 전체 열(`*`)을 반환하며 명확히 내림차순을 지정한 `SELECT * ... ORDER BY ID DESC`가 대표 정답입니다.

---

## Q3. MySQL에서 `HAVING` 절의 역할은?

**정답: `GROUP BY` 절과 함께 결과 집합을 필터링(제한)한다.**

| 구분 | 설명 |
|------|------|
| `WHERE` | 그룹화 **전** 개별 행 필터 (집계 함수 사용 불가) |
| `HAVING` | 그룹화 **후** 그룹 필터 (집계 함수 사용 가능) |

| 오답 | 이유 |
|------|------|
| WHERE 절의 대안 | 대안이 아닌 보완 관계, 적용 시점이 다름 |
| 결과를 특정 순서로 정렬 | 정렬은 `ORDER BY`의 역할 |
| 개별 레코드의 조건 충족 여부 확인 | 그룹 단위로 작동, 개별 행은 `WHERE` |

---

## Q4. 다음 쿼리의 기능은?

```sql
SELECT * FROM employees ORDER BY emp_name LIMIT 5;
```

**정답: 전체 열을 포함하여 `emp_name` 알파벳 오름차순으로 정렬된 상위 5개 행을 반환한다.**

- `SELECT *` → 모든 열 반환
- `ORDER BY emp_name` → 알파벳 오름차순(기본값 ASC)
- `LIMIT 5` → 앞에서 5행만 반환

| 오답 | 이유 |
|------|------|
| 전체 테이블 내용 반환 | `LIMIT 5`로 5행으로 제한됨 |
| `emp_name` 열만 상위 5개 반환 | `SELECT *`이므로 모든 열 반환 |
| 역알파벳 순 정렬 | `DESC` 없으므로 기본 오름차순(ASC) |

---

## Q5. 국가별 고객 수를 보여주되 5명을 초과하는 국가만 표시하는 쿼리는?

**정답:**

```sql
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5;
```

| 오답 | 이유 |
|------|------|
| `HAVING CustomerID > 5` | 집계 없이 개별 ID 비교 — 그룹 조건이 아님 |
| `HAVING COUNT(Customers) > 5` | `Customers`는 테이블 이름, 열 이름이 아님 |
| `HAVING COUNT(CustomerID) < 5` | `<` 는 5명 미만 — 조건 방향이 반대 |
