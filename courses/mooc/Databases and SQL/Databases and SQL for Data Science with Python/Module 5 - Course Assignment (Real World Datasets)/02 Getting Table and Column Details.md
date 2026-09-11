# Getting Table and Column Details

## 학습 목표

- 데이터베이스에서 테이블 목록을 조회하는 방법 설명
- SQLite3 데이터베이스에서 테이블 목록을 조회하는 방법 설명

---

## 테이블 목록 조회

데이터베이스에 여러 테이블이 있을 때, 정확한 테이블 이름이 기억나지 않을 수 있습니다. (예: `dog`, `dogs`, `four-legged mammals` 중 어느 것인지)

데이터베이스 시스템은 **시스템 카탈로그 테이블**을 제공하며, 여기서 테이블 목록과 속성을 조회할 수 있습니다.

### DBMS별 테이블 목록 조회 방법

| DBMS | 카탈로그 / 명령어 |
|------|------------------|
| IBM DB2 | `SYSCAT.TABLES` |
| SQL Server | `information_schema.tables` |
| SQLite3 | `sqlite_master` |
| MySQL | `SHOW TABLES` |

### SQLite3에서 테이블 목록 조회

```sql
SELECT name FROM sqlite_master WHERE type = 'table';
```

### MySQL에서 테이블 목록 조회

```sql
SHOW TABLES;
```

---

## 컬럼(속성) 정보 조회

테이블의 컬럼명과 속성 정보를 확인하는 명령어도 DBMS마다 다릅니다.

| DBMS | 명령어 |
|------|--------|
| SQLite3 | `PRAGMA table_info(table_name);` |
| MySQL | `DESCRIBE table_name;` |

### SQLite3 예시

```sql
PRAGMA table_info(dogs);
```

출력 예시:

| cid | name | type | notnull | dflt_value | pk |
|-----|------|------|---------|------------|----|
| 0 | ID | INTEGER | 0 | NULL | 0 |
| 1 | Name of Dog | TEXT | 0 | NULL | 0 |
| 2 | Breed | TEXT | 0 | NULL | 0 |

---

## 핵심 요약

- 데이터베이스 시스템은 시스템 카탈로그 테이블을 통해 테이블 목록과 속성 정보를 제공합니다.
- SQLite3에서 테이블 목록: `SELECT name FROM sqlite_master WHERE type='table'`
- SQLite3에서 컬럼 정보: `PRAGMA table_info(table_name)`
- MySQL에서 테이블 목록: `SHOW TABLES`
- MySQL에서 컬럼 정보: `DESCRIBE table_name`
