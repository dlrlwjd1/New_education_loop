# Module 1 Quiz

## Q1. 데이터베이스에 대한 설명으로 올바른 것은? (복수 선택)

- [x] 데이터베이스는 데이터를 저장하고 쿼리를 실행할 수 있다.
- [x] 관계형(Relational), 계층형(Hierarchical), NoSQL 등 다양한 종류의 데이터베이스가 존재한다.
- [ ] 모든 데이터베이스는 고정된 행/열 테이블 형태로만 데이터를 저장한다. ← NoSQL은 그렇지 않음
- [x] 데이터베이스는 데이터 저장소(repository) 역할을 한다.

---

## Q2. 테이블에서 데이터를 조회할 때 주로 사용하는 SQL 구문은?

**정답: `SELECT`**

| 구문 | 용도 |
|------|------|
| `SELECT` | 데이터 조회 |
| `INSERT` | 새 행 삽입 |
| `UPDATE` | 기존 데이터 수정 |
| `DELETE` | 행 삭제 |

---

## Q3. 다음 쿼리가 2019년 영화만 표시하지 못하는 이유는?

```sql
SELECT Title, ReleaseYear, Locations FROM FilmLocations;
```

**정답: `WHERE` 절이 없기 때문**

```sql
-- 올바른 쿼리
SELECT Title, ReleaseYear, Locations
FROM FilmLocations
WHERE ReleaseYear = 2019;
```

> `WHERE` 절 없이 실행하면 테이블의 모든 행이 반환됩니다.

---

## Q4. `Instructor` 테이블에 새 행을 삽입하는 올바른 구문은?

**정답:**

```sql
INSERT INTO Instructor(ins_id, lastname, firstname, city, country)
VALUES(4, 'Doe', 'John', 'Sydney', 'AU');
```

| 오답 | 이유 |
|------|------|
| `ADD INTO ...` | 존재하지 않는 구문 |
| `SELECT ... FROM VALUES(...)` | 삽입이 아닌 조회 구문 |
| `UPDATE ... WITH VALUES(...)` | 수정 구문, 삽입 불가 |

---

## Q5. `UPDATE` 문에서 `WHERE` 절의 역할은?

**정답: 어떤 행(row)을 수정할지 특정한다.**

```sql
UPDATE Instructor
SET city = 'Toronto'
WHERE ins_id = 4;   -- WHERE가 없으면 모든 행의 city가 바뀜
```

> `WHERE` 절을 생략하면 테이블의 **모든 행**이 수정됩니다.
