# UPDATE and DELETE Statement

## 학습 목표

- UPDATE 문과 DELETE 문의 문법 파악
- 두 구문에서 WHERE 절의 중요성 설명

---

## UPDATE 문

**UPDATE 문**은 테이블에 이미 있는 데이터를 수정하는 DML 구문입니다.

### 문법

```sql
UPDATE tablename SET column1 = value1, column2 = value2 WHERE condition;
```

| 구성 요소 | 역할 |
|-----------|------|
| `tablename` | 수정할 테이블 이름 |
| `SET column = value` | 변경할 열과 새 값 |
| `WHERE condition` | 수정할 행을 특정하는 조건 |

### 예시 — AUTHOR_ID가 A2인 저자의 이름 변경

```sql
-- 변경 전 확인
SELECT * FROM AUTHOR;

-- 이름 수정
UPDATE AUTHOR
SET LASTNAME = 'Katta', FIRSTNAME = 'Lakshmi'
WHERE AUTHOR_ID = 'A2';

-- 변경 후 확인
SELECT * FROM AUTHOR;
```

- 변경 전: `A2 | Rav | Ahuja`
- 변경 후: `A2 | Lakshmi | Katta`

### ⚠️ WHERE 절 없이 UPDATE하면?

```sql
-- 위험: 모든 행의 이름이 Lakshmi Katta로 바뀜
UPDATE AUTHOR SET LASTNAME = 'Katta', FIRSTNAME = 'Lakshmi';
```

> WHERE 절을 생략하면 테이블의 **모든 행**이 수정됩니다.

---

## DELETE 문

**DELETE 문**은 테이블에서 하나 이상의 행을 삭제하는 DML 구문입니다.

### 문법

```sql
DELETE FROM tablename WHERE condition;
```

| 구성 요소 | 역할 |
|-----------|------|
| `tablename` | 삭제할 테이블 이름 |
| `WHERE condition` | 삭제할 행을 특정하는 조건 |

### 예시 — AUTHOR_ID가 A2, A3인 행 삭제

```sql
DELETE FROM AUTHOR WHERE AUTHOR_ID IN ('A2', 'A3');
```

- `IN ('A2', 'A3')` : A2와 A3 두 행을 한 번에 삭제

### ⚠️ WHERE 절 없이 DELETE하면?

```sql
-- 위험: 테이블의 모든 행이 삭제됨
DELETE FROM AUTHOR;
```

> WHERE 절을 생략하면 테이블의 **모든 행**이 삭제됩니다.

---

## 핵심 요약

| 구문 | 용도 | WHERE 생략 시 |
|------|------|--------------|
| `UPDATE` | 기존 데이터 수정 | 모든 행이 수정됨 |
| `DELETE` | 행 삭제 | 모든 행이 삭제됨 |

> **UPDATE와 DELETE 모두 WHERE 절을 빠뜨리지 않도록 주의해야 합니다.**
