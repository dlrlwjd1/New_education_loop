# Module 2 Quiz

## Q1. 기본 키(Primary Key)의 역할은?

**정답: 테이블에서 각 행(Row)을 고유하게 식별한다.**

| 오답 | 이유 |
|------|------|
| NULL 값을 포함한 행을 식별 | 기본 키 자체가 NULL일 수 없음 |
| 테이블 접근 권한 부여 | 권한은 GRANT/REVOKE로 관리 |
| 열에 데이터 추가 가능하게 함 | INSERT 구문의 역할 |

---

## Q2. INSERT, SELECT, UPDATE, DELETE는 데이터를 읽고 수정하는 DML 구문이다. (참/거짓)

**정답: True**

| 구분 | 구문 | 역할 |
|------|------|------|
| DML (Data Manipulation Language) | `SELECT` | 데이터 조회 |
| | `INSERT` | 새 행 삽입 |
| | `UPDATE` | 기존 행 수정 |
| | `DELETE` | 행 삭제 |
| DDL (Data Definition Language) | `CREATE`, `ALTER`, `DROP`, `TRUNCATE` | 구조 정의/변경 |

---

## Q3. DDL 구문만으로 구성된 것은?

**정답: CREATE, ALTER, DROP**

- `CREATE` — 테이블/객체 생성
- `ALTER` — 구조 변경
- `DROP` — 테이블/객체 삭제

| 오답 | 이유 |
|------|------|
| SELECT and DELETE | SELECT와 DELETE는 DML |
| SELECT, INSERT, UPDATE | 모두 DML |
| INSERT and UPDATE | 모두 DML |

---

## Q4. 기존 열 `phone`의 데이터 타입을 VARCHAR로 변경하는 올바른 쿼리는?

**정답:**

```sql
ALTER TABLE author MODIFY phone VARCHAR(20);
```

| 오답 | 이유 |
|------|------|
| `ALTER COLUMN phone SET TYPE VARCHAR(20)` | MySQL에서 유효하지 않은 문법 |
| `ALTER TABLE author ALTER COLUMN phone DATA TYPE = VARCHAR(20)` | `=` 사용은 잘못된 문법 |
| `ALTER COLUMN phone SET DATA TYPE VARCHAR(20)` | `ALTER TABLE` 없이 단독 사용 불가 |

> `MODIFY`는 MySQL 문법, DB2는 `ALTER COLUMN ... SET DATA TYPE` 사용 (**05 참고**.md))

---

## Q5. 5가지 기본 SQL 명령어는?

**정답: CREATE, SELECT, INSERT, UPDATE, DELETE**

| 명령어 | 분류 | 역할 |
|--------|------|------|
| `CREATE` | DDL | 테이블 생성 |
| `SELECT` | DML | 데이터 조회 |
| `INSERT` | DML | 데이터 삽입 |
| `UPDATE` | DML | 데이터 수정 |
| `DELETE` | DML | 데이터 삭제 |

| 오답 | 이유 |
|------|------|
| SELECT, COPY, PASTE, INSERT, ALTER | COPY, PASTE는 SQL 명령어가 아님 |
| CREATE, INSERT, RETRIEVE, MODIFY, DELETE | RETRIEVE, MODIFY는 SQL 명령어가 아님 |
