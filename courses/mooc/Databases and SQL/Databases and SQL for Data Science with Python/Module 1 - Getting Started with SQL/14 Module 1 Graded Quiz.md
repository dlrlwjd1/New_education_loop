# Module 1 Graded Quiz

## Q1. `SELECT DISTINCT FIRSTNAME FROM INSTRUCTOR` 의 결과는?

**정답: LEON, PAUL, JOE** (각 이름이 한 번씩만 나옴)

`DISTINCT`는 중복을 제거하므로, LEON이 여러 행에 있더라도 한 번만 반환됩니다.

| 오답 | 이유 |
|------|------|
| LEON, LEON, PAUL, PAUL | DISTINCT 없이 조회한 결과 |
| LEON KATSNELSON, PAUL ZIKOPOLOUS, ... | FIRSTNAME + LASTNAME 조합 — SELECT에 없는 열 |
| LEON, PAUL, LEON, JOE | 여전히 중복 포함 |

---

## Q2. 다음 UPDATE 문의 결과는?

```sql
UPDATE INSTRUCTOR SET LASTNAME = 'Brewster' WHERE LASTNAME = 'Smith';
```

**정답: LASTNAME이 'Smith'인 모든 강사의 성을 'Brewster'로 변경한다.**

| 오답 | 이유 |
|------|------|
| 모든 행의 성을 'Smith'로 변경 | WHERE 조건과 SET 방향이 반대 |
| 'Brewster'인 강사의 성을 'Smith'로 변경 | SET과 WHERE가 바뀐 해석 |
| 모든 행의 성을 'Brewster'로 변경 | WHERE 절이 없을 때의 동작 |

---

## Q3. `WHERE` 절 없이 `DELETE FROM table_name`을 실행하면?

**정답: 테이블의 모든 행이 삭제되고, 테이블 구조(스키마)는 데이터베이스에 남는다.**

```sql
-- 위험: 모든 행 삭제
DELETE FROM INSTRUCTOR;

-- 테이블 자체를 삭제하려면 DROP 사용
DROP TABLE INSTRUCTOR;
```

> `DELETE`는 행만 지우고 테이블은 남깁니다. 테이블까지 삭제하려면 `DROP TABLE`이 필요합니다.

---

## Q4. `SELECT COUNT(DISTINCT FIRSTNAME) FROM INSTRUCTOR` 의 결과는?

**정답: INSTRUCTOR 테이블에서 고유한 FIRSTNAME의 개수(숫자 한 개)**

```sql
-- 예: LEON, PAUL, JOE 세 종류 → 결과: 3
SELECT COUNT(DISTINCT FIRSTNAME) FROM INSTRUCTOR;
```

| 오답 | 이유 |
|------|------|
| 고유한 FIRSTNAME 목록 | `COUNT`는 숫자만 반환, 목록은 `SELECT DISTINCT`로 조회 |
| 개수 + 목록 동시 반환 | SQL은 집계 함수와 일반 열을 동시에 반환하지 않음 |
| 오류 발생 | `COUNT(DISTINCT col)`는 유효한 문법 |

---

## Q5. 다음 쿼리의 결과는?

```sql
SELECT * FROM INSTRUCTOR WHERE LASTNAME = 'Smith' LIMIT 5;
```

**정답: LASTNAME이 'Smith'인 행 중 앞에서 5개만 반환한다.**

- `WHERE LASTNAME = 'Smith'` → 먼저 조건 필터링
- `LIMIT 5` → 그 결과에서 최대 5행만 반환

| 오답 | 이유 |
|------|------|
| 테이블 전체 앞 5행 | WHERE 조건을 무시한 해석 |
| 테이블 마지막 5행 | LIMIT은 앞에서부터 자름 |
| Smith인 행 중 마지막 5개 | LIMIT은 기본적으로 처음 N개 |
