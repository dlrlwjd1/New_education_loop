# Module 2 Graded Quiz

## Q1. 데이터베이스에 대한 올바른 설명은?

**정답: 데이터베이스는 내재적 의미를 가진 논리적으로 일관된 데이터의 집합이다.**

| 오답 | 이유 |
|------|------|
| 데이터를 추가·조회만 할 수 있고 수정은 불가 | `UPDATE`, `DELETE` 등 수정 구문이 존재함 |
| 데이터베이스 쿼리에는 SQL만 사용 가능 | NoSQL, XQuery 등 다른 쿼리 언어도 존재함 |
| 위 모두 맞다 | 나머지 두 항목이 틀렸으므로 해당 없음 |

---

## Q2. 엔티티의 속성(Attribute)은 테이블에서 ______이 된다.

**정답: 열(Columns)**

```
엔티티(Entity)  →  테이블(Table)
속성(Attribute) →  열(Column)
인스턴스(Instance) →  행(Row)
```

| 오답 | 이유 |
|------|------|
| 제약 조건(Constraints) | PRIMARY KEY, NOT NULL 등 규칙, 속성의 변환 결과가 아님 |
| 키(Keys) | 기본 키/외래 키는 열의 특수한 형태 |
| 행(Rows) | 행은 엔티티의 개별 인스턴스(데이터 값)에 해당 |

---

## Q3. `CREATE TABLE` 문은 어떤 종류의 구문인가?

**정답: DDL (Data Definition Language) 구문**

| 분류 | 구문 | 역할 |
|------|------|------|
| DDL | `CREATE`, `ALTER`, `DROP`, `TRUNCATE` | 구조 정의·변경 |
| DML | `SELECT`, `INSERT`, `UPDATE`, `DELETE` | 데이터 조작 |
| DQL | `SELECT` (일부 분류에서 별도 구분) | 데이터 조회 |

> `CREATE TABLE`은 테이블 **구조**를 정의하므로 DDL입니다.

---

## Q4. 테이블과 모든 데이터를 데이터베이스에서 제거하는 명령어는?

**정답: `DROP TABLE`**

| 명령어 | 결과 |
|--------|------|
| `DROP TABLE` | 테이블 구조 + 모든 데이터 삭제 (복구 불가) |
| `TRUNCATE TABLE` | 모든 행 삭제, 테이블 구조는 유지 |
| `CREATE` | 테이블 생성 |
| `ALTER TABLE` | 테이블 구조 변경 |

---

## Q5. MySQL에서 `Employees` 테이블에 7자리 영숫자 값을 담는 `ID` 열을 추가하는 올바른 문법은?

**정답:**

```sql
ALTER TABLE Employees ADD ID char(7);
```

- `char(7)`: 고정 7자리 문자열 — 영문자·숫자 혼합(alphanumeric) 저장에 적합
- `ADD` 뒤에 열 이름과 데이터 타입 순서

| 오답 | 이유 |
|------|------|
| `ALTER Employees TABLE ADD ID char` | `TABLE` 키워드 위치 오류, 길이 미지정 |
| `ALTER Employees ADD COLUMN ID varchar(7)` | `ALTER TABLE` 없이 `ALTER Employees`만으로는 유효하지 않은 문법 |
| `ALTER TABLE COLUMN Employees ID char(7)` | `COLUMN` 키워드 위치 오류 |

> `varchar(7)`은 가변 길이 — 영숫자 ID처럼 **길이가 항상 동일한** 경우 `char(7)`이 더 적합합니다.
