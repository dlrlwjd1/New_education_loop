# DDL Cheat Sheet — Module 2

## CREATE TABLE

테이블을 생성합니다. 각 열의 이름, 데이터 타입, 선택적 키워드(PRIMARY KEY, NOT NULL 등)를 지정합니다.

```sql
-- 문법 (MySQL/DB2)
CREATE TABLE table_name (
    col1 datatype optional_keyword,
    col2 datatype optional_keyword,
    ...
);

-- 예시
CREATE TABLE employee (
    employee_id CHAR(2)      PRIMARY KEY,
    first_name  VARCHAR(30)  NOT NULL,
    mobile      INT
);
```

---

## ALTER TABLE — ADD COLUMN (열 추가)

```sql
-- 문법 옵션 1 (MySQL/DB2)
ALTER TABLE table_name ADD column_name datatype;

-- 문법 옵션 2 (MySQL/DB2)
ALTER TABLE table_name ADD COLUMN column_name datatype;

-- 예시 옵션 1
ALTER TABLE employee ADD income BIGINT;

-- 예시 옵션 2
ALTER TABLE employee ADD COLUMN income BIGINT;
```

> 새로 추가된 열의 기존 행 값은 모두 `NULL`로 초기화됩니다.

---

## ALTER TABLE — MODIFY / ALTER COLUMN (데이터 타입 변경)

```sql
-- MySQL 문법
ALTER TABLE table_name MODIFY column_name new_datatype;

-- DB2 문법
ALTER TABLE table_name ALTER COLUMN column_name SET DATA TYPE new_datatype;

-- MySQL 예시
ALTER TABLE employee MODIFY mobile CHAR(20);

-- DB2 예시
ALTER TABLE employee ALTER COLUMN mobile SET DATA TYPE CHAR(20);
```

---

## ALTER TABLE — DROP COLUMN (열 삭제)

```sql
-- 문법 (MySQL/DB2)
ALTER TABLE table_name DROP COLUMN column_name;

-- 예시
ALTER TABLE employee DROP COLUMN mobile;
```

> 삭제된 열과 그 데이터는 복구할 수 없습니다.

---

## ALTER TABLE — RENAME COLUMN (열 이름 변경)

```sql
-- MySQL 문법 (CHANGE COLUMN)
ALTER TABLE table_name CHANGE COLUMN current_name new_name datatype [optional_keywords];

-- DB2 문법 (RENAME COLUMN)
ALTER TABLE table_name RENAME COLUMN current_name TO new_name;

-- MySQL 예시
ALTER TABLE employee CHANGE COLUMN first_name name VARCHAR(255);

-- DB2 예시
ALTER TABLE employee RENAME COLUMN first_name TO name;
```

> MySQL의 `CHANGE COLUMN`은 이름 변경 시 데이터 타입도 함께 명시해야 합니다.

---

## TRUNCATE TABLE (모든 행 삭제)

테이블의 모든 행을 삭제합니다. 테이블 구조(스키마)는 유지됩니다.

```sql
-- MySQL 문법
TRUNCATE TABLE table_name;

-- DB2 문법 (IMMEDIATE: 즉시 실행, 롤백 불가)
TRUNCATE TABLE table_name IMMEDIATE;

-- MySQL 예시
TRUNCATE TABLE employee;

-- DB2 예시
TRUNCATE TABLE employee IMMEDIATE;
```

---

## DROP TABLE (테이블 삭제)

테이블 자체를 데이터베이스에서 삭제합니다. 테이블 안의 데이터도 함께 삭제됩니다.

```sql
-- 문법 (MySQL/DB2)
DROP TABLE table_name;

-- 예시
DROP TABLE employee;
```

---

## 한눈에 보기

| 구문 | 용도 | DB 차이 |
|------|------|---------|
| `CREATE TABLE` | 테이블 생성 | 동일 |
| `ALTER TABLE ... ADD` | 열 추가 | 동일 |
| `ALTER TABLE ... MODIFY` / `ALTER COLUMN ... SET DATA TYPE` | 타입 변경 | MySQL vs DB2 |
| `ALTER TABLE ... DROP COLUMN` | 열 삭제 | 동일 |
| `ALTER TABLE ... CHANGE COLUMN` / `RENAME COLUMN` | 열 이름 변경 | MySQL vs DB2 |
| `TRUNCATE TABLE` | 모든 행 삭제 (구조 유지) | DB2는 `IMMEDIATE` 추가 |
| `DROP TABLE` | 테이블 + 데이터 전체 삭제 | 동일 |
