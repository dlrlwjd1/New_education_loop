# Types of SQL Statements

## 학습 목표

- SQL 문(statement)의 두 가지 주요 유형 구분
- DDL(Data Definition Language)의 역할 설명
- DML(Data Manipulation Language)의 역할 설명
- 자주 사용하는 DDL, DML 명령어 식별

---

## SQL 문이란?

SQL 문은 관계형 데이터베이스에서 다음 요소들과 상호작용하기 위해 사용됩니다.

| 데이터베이스 요소 | 의미 |
|------------------|------|
| Entity | 테이블(Table) |
| Attribute | 열(Column) |
| Tuple | 데이터 값을 가진 행(Row) |

SQL 문은 크게 두 가지 범주로 나뉩니다.

1. **DDL(Data Definition Language)**
2. **DML(Data Manipulation Language)**

---

## DDL (Data Definition Language)

DDL은 데이터베이스 객체를 **정의하거나 변경하거나 삭제**할 때 사용하는 SQL 문입니다.

대표적인 데이터베이스 객체는 **테이블**입니다.

| 명령어 | 역할 |
|--------|------|
| `CREATE` | 테이블을 생성하고 열을 정의 |
| `ALTER` | 테이블 구조 변경: 열 추가, 열 삭제, 데이터 타입 수정 |
| `TRUNCATE` | 테이블 자체는 유지하고 테이블 안의 데이터만 삭제 |
| `DROP` | 테이블 삭제 |

### 예시

```sql
CREATE TABLE students (
    id INTEGER,
    name VARCHAR(100)
);

ALTER TABLE students ADD email VARCHAR(100);

TRUNCATE TABLE students;

DROP TABLE students;
```

---

## DML (Data Manipulation Language)

DML은 테이블 안의 데이터를 **읽거나 수정**할 때 사용하는 SQL 문입니다.

DML은 CRUD 작업이라고도 불립니다.

| CRUD | 의미 | SQL 명령어 |
|------|------|------------|
| Create | 행 생성 | `INSERT` |
| Read | 행 조회 | `SELECT` |
| Update | 행 수정 | `UPDATE` |
| Delete | 행 삭제 | `DELETE` |

### 주요 DML 명령어

| 명령어 | 역할 |
|--------|------|
| `INSERT` | 테이블에 하나 또는 여러 행 삽입 |
| `SELECT` | 테이블에서 하나 또는 여러 행 조회 |
| `UPDATE` | 테이블의 하나 또는 여러 행 수정 |
| `DELETE` | 테이블에서 하나 또는 여러 행 삭제 |

### 예시

```sql
INSERT INTO students (id, name, email)
VALUES (1, 'Alice', 'alice@example.com');

SELECT * FROM students;

UPDATE students
SET email = 'alice.new@example.com'
WHERE id = 1;

DELETE FROM students
WHERE id = 1;
```

---

## DDL과 DML 비교

| 구분 | DDL | DML |
|------|-----|-----|
| 전체 이름 | Data Definition Language | Data Manipulation Language |
| 목적 | 데이터베이스 객체 정의 및 변경 | 테이블의 데이터 조작 |
| 대상 | 테이블 구조, 열, 데이터 타입 등 | 테이블 안의 행 데이터 |
| 대표 명령어 | `CREATE`, `ALTER`, `TRUNCATE`, `DROP` | `INSERT`, `SELECT`, `UPDATE`, `DELETE` |

---

## 핵심 요약

- SQL 문은 관계형 데이터베이스의 테이블, 열, 행과 상호작용하는 데 사용됩니다.
- **DDL**은 테이블 같은 데이터베이스 객체를 정의하거나 변경하거나 삭제합니다.
- **DML**은 테이블 안의 데이터를 생성, 조회, 수정, 삭제합니다.
- `CREATE`, `ALTER`, `TRUNCATE`, `DROP`은 DDL에 속합니다.
- `INSERT`, `SELECT`, `UPDATE`, `DELETE`는 DML에 속합니다.
