# ALTER TABLE and TRUNCATE (MySQL)

> 이전 강의(04)의 ALTER/TRUNCATE 문법은 **DB2** 기준입니다.  
> 이 노트는 **MySQL** 기준 문법을 다룹니다. DB2와 세부 문법에 차이가 있습니다.

## 학습 목표

- `ALTER TABLE` 문을 올바른 문법으로 사용
- `TRUNCATE` 문을 올바른 문법으로 사용
- 각 구문의 실제 예시 실행

---

## ALTER TABLE

`ALTER TABLE`은 이미 존재하는 테이블의 구조를 변경하는 DDL 구문입니다.

| 가능한 작업 | 설명 |
|------------|------|
| `ADD COLUMN` | 새 열 추가 |
| `DROP COLUMN` | 기존 열 삭제 |
| `MODIFY` | 열의 데이터 타입 변경 |
| `ADD` / `DROP` key | 기본 키, 외래 키 추가 또는 제거 |
| `ADD` / `DROP` constraint | 제약 조건 추가 또는 제거 |

---

### 1. 열 추가 (ADD COLUMN)

```sql
-- 기본 문법
ALTER TABLE table_name
ADD column_name data_type;

-- 동일한 의미의 대체 문법 (MySQL)
ALTER TABLE table_name
ADD COLUMN column_name data_type;
```

> 새로 추가된 열의 기존 행 값은 모두 `NULL`로 초기화됩니다.  
> 이후 `UPDATE` 문으로 값을 채울 수 있습니다.

**예시 — `author` 테이블에 전화번호 열 추가**

```sql
ALTER TABLE author
ADD telephone_number BIGINT;
```

추가 후 테이블 예시:

| author_id | lastname | firstname | email | city | country | telephone_number |
|-----------|----------|-----------|-------|------|---------|-----------------|
| A1 | Ahuja | Rav | r@ibm.com | Toronto | CA | NULL |
| A2 | Doe | John | j@ibm.com | Sydney | AU | NULL |

> `BIGINT`: 매우 큰 정수형 데이터 타입. 단, 괄호, `+`, `-` 등의 기호를 저장할 수 없습니다.

---

### 2. 데이터 타입 변경 (MODIFY)

```sql
ALTER TABLE table_name
MODIFY column_name data_type;
```

**예시 — `telephone_number`의 타입을 `BIGINT` → `CHAR(20)`으로 변경**

```sql
ALTER TABLE author
MODIFY telephone_number CHAR(20);
```

변경 후 `UPDATE`로 값을 입력한 테이블 예시:

| author_id | lastname | firstname | telephone_number |
|-----------|----------|-----------|-----------------|
| A1 | Ahuja | Rav | +1 (416) 555-0101 |
| A2 | Doe | John | +61 2 5550-1234 |

> `CHAR(20)`을 사용하면 `+`, `(`, `)`, `-` 등의 문자를 포함한 전화번호 형식을 저장할 수 있습니다.

---

### 3. 열 삭제 (DROP COLUMN)

```sql
ALTER TABLE table_name
DROP COLUMN column_name;
```

**예시 — `telephone_number` 열 삭제**

```sql
ALTER TABLE author
DROP COLUMN telephone_number;
```

---

### 4. DB2 vs MySQL 문법 비교

| 작업 | DB2 | MySQL |
|------|-----|-------|
| 열 추가 | `ADD COLUMN col type` | `ADD col type` 또는 `ADD COLUMN col type` |
| 타입 변경 | `ALTER COLUMN col SET DATA TYPE type` | `MODIFY col type` |
| 열 삭제 | `DROP COLUMN col` | `DROP COLUMN col` |

---

## TRUNCATE TABLE

`TRUNCATE TABLE`은 테이블의 **모든 행을 삭제**합니다. 테이블 구조(스키마)는 유지됩니다.

```sql
TRUNCATE TABLE table_name;
```

**예시 — `author` 테이블의 모든 행 삭제**

```sql
TRUNCATE TABLE author;
```

실행 후 결과:

| author_id | lastname | firstname | email | city | country |
|-----------|----------|-----------|-------|------|---------|
| (행 없음) | | | | | |

> 테이블 자체는 데이터베이스에 남아 있습니다. 테이블까지 삭제하려면 `DROP TABLE`을 사용합니다.

---

## 핵심 요약

| 구문 | 용도 | 테이블 구조 유지 |
|------|------|----------------|
| `ALTER TABLE ... ADD` | 열 추가 | O |
| `ALTER TABLE ... MODIFY` | 데이터 타입 변경 | O |
| `ALTER TABLE ... DROP COLUMN` | 열 삭제 | O |
| `TRUNCATE TABLE` | 모든 행 삭제 | O |
| `DROP TABLE` | 테이블 자체 삭제 | X |
