# 02강 연습문제 — 테이블 설계와 DDL

## 학습 목표

- `CREATE TABLE`로 데이터 타입과 제약 조건을 지정해 테이블을 만든다.
- `ALTER TABLE`로 기존 테이블 구조를 변경한다.
- `DROP TABLE`과 `TRUNCATE TABLE`의 차이를 구분하고 안전하게 사용한다.
- 기본 키(Primary Key)와 외래 키(Foreign Key) 제약 조건의 역할을 이해한다.

## 사전 준비

이 연습문제는 테이블을 **직접 만드는** 것이 목적입니다.
데이터 파일은 다음 순서로 확인용으로 사용하세요.

```sql
-- 완성된 테이블/데이터 확인: data/02_ddl_data.sql
```

---

## 연습 문제

### 문제 1 — CREATE TABLE: AUTHOR

**과제:** 아래 사양에 맞는 AUTHOR 테이블을 생성하세요.

| 컬럼 | 타입 | 제약 조건 |
|------|------|----------|
| AUTHOR_ID | CHAR(2) | Primary Key |
| FIRSTNAME | VARCHAR(20) | - |
| LASTNAME | VARCHAR(20) | - |
| COUNTRY | VARCHAR(20) | - |
| BIRTHDATE | DATE | - |

> **힌트:** `CREATE TABLE 테이블명 (컬럼명 타입 제약조건, ...);`

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
CREATE TABLE AUTHOR (
    AUTHOR_ID  CHAR(2)       PRIMARY KEY,
    FIRSTNAME  VARCHAR(20),
    LASTNAME   VARCHAR(20),
    COUNTRY    VARCHAR(20),
    BIRTHDATE  DATE
);
```

**설명:**
- `CHAR(2)`: 항상 2자리 고정 길이 문자열. 코드나 ID처럼 길이가 정해진 값에 적합합니다.
- `VARCHAR(20)`: 최대 20자, 실제 저장된 길이만 차지합니다.
- `PRIMARY KEY`: 해당 컬럼이 행을 고유하게 식별하며, 중복과 NULL을 허용하지 않습니다.
- `DATE`: 날짜 타입 (`'YYYY-MM-DD'` 형식).

</details>

---

### 문제 2 — CREATE TABLE: BOOK (외래 키 포함)

**과제:** 아래 사양에 맞는 BOOK 테이블을 생성하세요.
AUTHOR_ID는 AUTHOR 테이블의 AUTHOR_ID를 참조하는 외래 키입니다.

| 컬럼 | 타입 | 제약 조건 |
|------|------|----------|
| BOOK_ID | CHAR(4) | Primary Key |
| TITLE | VARCHAR(100) | - |
| AUTHOR_ID | CHAR(2) | Foreign Key → AUTHOR(AUTHOR_ID) |
| PRICE | DECIMAL(6, 2) | - |
| YEAR_PUBLISHED | INTEGER | - |

> **힌트:** 외래 키는 `FOREIGN KEY (컬럼명) REFERENCES 참조테이블(참조컬럼)`

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
CREATE TABLE BOOK (
    BOOK_ID        CHAR(4)        PRIMARY KEY,
    TITLE          VARCHAR(100),
    AUTHOR_ID      CHAR(2),
    PRICE          DECIMAL(6, 2),
    YEAR_PUBLISHED INTEGER,
    FOREIGN KEY (AUTHOR_ID) REFERENCES AUTHOR(AUTHOR_ID)
);
```

**설명:**
- 외래 키(Foreign Key)는 두 테이블의 관계를 정의합니다. BOOK의 AUTHOR_ID는 반드시 AUTHOR 테이블에 존재하는 AUTHOR_ID여야 합니다.
- `DECIMAL(6, 2)`: 전체 6자리, 소수점 이하 2자리 (예: 9999.99).
- **중요:** BOOK 테이블은 AUTHOR 테이블을 참조하므로 AUTHOR가 먼저 만들어져 있어야 합니다.

</details>

---

### 문제 3 — INSERT: AUTHOR 데이터 삽입

**과제:** AUTHOR 테이블에 아래 저자 3명을 삽입하세요.

| AUTHOR_ID | FIRSTNAME | LASTNAME | COUNTRY | BIRTHDATE |
|-----------|-----------|----------|---------|-----------|
| A1 | Patrick | Modiano | France | 1945-07-30 |
| A2 | Haruki | Murakami | Japan | 1949-01-12 |
| A3 | Gabriel | Silva | Brazil | 1960-03-15 |

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
INSERT INTO AUTHOR (AUTHOR_ID, FIRSTNAME, LASTNAME, COUNTRY, BIRTHDATE)
VALUES ('A1', 'Patrick',  'Modiano',  'France', '1945-07-30'),
       ('A2', 'Haruki',   'Murakami', 'Japan',  '1949-01-12'),
       ('A3', 'Gabriel',  'Silva',    'Brazil', '1960-03-15');
```

**검증:**
```sql
SELECT * FROM AUTHOR;
```

**설명:**
여러 행을 한 번에 삽입할 때는 `VALUES` 뒤에 괄호로 묶인 값들을 쉼표로 나열합니다. 컬럼명을 명시하면 순서에 의존하지 않아 안전합니다.

</details>

---

### 문제 4 — INSERT: BOOK 데이터 삽입

**과제:** BOOK 테이블에 아래 책 2권을 삽입하세요.

| BOOK_ID | TITLE | AUTHOR_ID | PRICE | YEAR_PUBLISHED |
|---------|-------|-----------|-------|----------------|
| B001 | The Night Watch | A1 | 15.99 | 1999 |
| B002 | Norwegian Wood | A2 | 18.50 | 1987 |

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
INSERT INTO BOOK (BOOK_ID, TITLE, AUTHOR_ID, PRICE, YEAR_PUBLISHED)
VALUES ('B001', 'The Night Watch', 'A1', 15.99, 1999),
       ('B002', 'Norwegian Wood',  'A2', 18.50, 1987);
```

**설명:**
AUTHOR_ID는 외래 키이므로 반드시 AUTHOR 테이블에 존재하는 값이어야 합니다. 존재하지 않는 A9 같은 값을 넣으면 외래 키 제약 위반 오류가 발생합니다.

</details>

---

### 문제 5 — ALTER TABLE: 열 추가

**과제:** AUTHOR 테이블에 `EMAIL` 컬럼(`VARCHAR(50)`)을 추가하세요.

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
ALTER TABLE AUTHOR
ADD COLUMN EMAIL VARCHAR(50);
```

**확인:**
```sql
SELECT * FROM AUTHOR;
```

**설명:**
`ALTER TABLE`은 이미 존재하는 테이블의 구조를 변경합니다. 새 컬럼을 추가하면 기존 행에는 해당 컬럼 값이 `NULL`로 채워집니다. `ADD COLUMN` 문법은 SQLite와 MySQL에서 유효하며, Db2에서는 `ADD` 뒤에 `COLUMN` 키워드가 필요 없을 수 있습니다.

</details>

---

### 문제 6 — ALTER TABLE: 기존 열 타입 변경

**과제:** AUTHOR 테이블의 EMAIL 컬럼 타입을 `VARCHAR(100)`으로 변경하세요.

> **참고:** SQLite는 컬럼 타입 변경을 직접 지원하지 않습니다. MySQL 기준으로 작성하세요.

<details>
<summary>풀이 보기</summary>

**MySQL / MariaDB:**
```sql
ALTER TABLE AUTHOR
MODIFY EMAIL VARCHAR(100);
```

**IBM Db2:**
```sql
ALTER TABLE AUTHOR
ALTER COLUMN EMAIL SET DATA TYPE VARCHAR(100);
```

**SQLite (직접 변경 불가 — 우회 방법):**
SQLite에서는 컬럼 타입을 직접 바꿀 수 없습니다.
대신 새 테이블을 만들고 데이터를 옮기거나, SQLite 3.35+ 에서 `ALTER TABLE RENAME COLUMN`을 활용하는 우회 방법을 사용합니다.

**설명:**
`ALTER TABLE`의 컬럼 타입 변경 문법은 DBMS마다 다릅니다. 항상 사용하는 DBMS의 공식 문서를 확인하세요.

</details>

---

### 문제 7 — DROP TABLE IF EXISTS

**과제:** 아래 순서를 수행하세요.
1. TEST 테이블을 만든다 (ID INTEGER, NOTE VARCHAR(50))
2. 데이터를 2행 넣는다
3. TEST 테이블을 삭제한다
4. 다시 같은 이름으로 만들어도 오류가 없도록 안전한 패턴을 사용한다

<details>
<summary>풀이 보기</summary>

**1단계 — 테이블 생성:**
```sql
CREATE TABLE TEST (
    ID    INTEGER,
    NOTE  VARCHAR(50)
);
```

**2단계 — 데이터 삽입:**
```sql
INSERT INTO TEST VALUES (1, 'First note');
INSERT INTO TEST VALUES (2, 'Second note');

SELECT * FROM TEST;
```

**3단계 — 삭제 (안전 패턴 포함):**
```sql
DROP TABLE IF EXISTS TEST;
```

**4단계 — 다시 만들 때도 동일 패턴 사용:**
```sql
DROP TABLE IF EXISTS TEST;

CREATE TABLE TEST (
    ID    INTEGER,
    NOTE  VARCHAR(50)
);
```

**설명:**
`DROP TABLE IF EXISTS`는 테이블이 없어도 오류를 내지 않습니다. 실습에서 스크립트를 반복 실행할 때 필수 패턴입니다. `DROP TABLE`은 구조와 데이터를 모두 삭제합니다.

</details>

---

### 문제 8 — TRUNCATE TABLE

**과제:** BOOK 테이블의 모든 데이터를 삭제하되, 테이블 구조(스키마)는 유지하세요.

> **힌트:** `TRUNCATE`와 `DROP`의 차이를 생각해보세요.

<details>
<summary>풀이 보기</summary>

**정답:**
```sql
TRUNCATE TABLE BOOK;
```

**실행 전 확인:**
```sql
SELECT COUNT(*) FROM BOOK;  -- 데이터 있음
```

**실행 후 확인:**
```sql
SELECT COUNT(*) FROM BOOK;  -- 0
SELECT * FROM BOOK;         -- 테이블 구조는 그대로
```

**설명:**
| 명령어 | 결과 |
|--------|------|
| `TRUNCATE TABLE` | 데이터 전체 삭제, 구조 유지 |
| `DROP TABLE` | 데이터와 구조 모두 삭제 |
| `DELETE FROM` (WHERE 없이) | 데이터 전체 삭제, 구조 유지 (느림) |

`TRUNCATE`는 내부적으로 더 빠르게 동작하지만, 트랜잭션 롤백이 안 되는 DBMS도 있습니다.

> **참고:** SQLite에서는 `TRUNCATE TABLE` 문법이 없습니다. `DELETE FROM BOOK;`을 사용하세요.

</details>

---

### 문제 9 — 제약 조건 이해: 엔티티 무결성 테스트

**과제:** AUTHOR 테이블에 이미 존재하는 AUTHOR_ID('A1')로 새 행을 삽입하면 어떤 일이 발생하는지 확인하세요.

<details>
<summary>풀이 보기</summary>

**실행:**
```sql
INSERT INTO AUTHOR (AUTHOR_ID, FIRSTNAME, LASTNAME, COUNTRY, BIRTHDATE)
VALUES ('A1', 'Duplicate', 'Author', 'USA', '2000-01-01');
```

**예상 오류 (SQLite 예시):**
```
UNIQUE constraint failed: AUTHOR.AUTHOR_ID
```

**설명:**
이것이 엔티티 무결성(Entity Integrity)입니다. Primary Key는 중복 값을 허용하지 않습니다. 데이터베이스가 자동으로 규칙을 강제하므로 잘못된 데이터가 들어오는 것을 방지합니다.

</details>

---

## 통합 문제 — SQL Script 작성

**과제:** 반복 실행 가능한 완전한 SQL 스크립트를 작성하세요.
아래 순서를 따르는 스크립트를 하나의 파일로 작성합니다.

1. 기존 BOOK, AUTHOR 테이블을 안전하게 삭제
2. AUTHOR 테이블 생성 (AUTHOR_ID PK, FIRSTNAME, LASTNAME, COUNTRY, BIRTHDATE)
3. BOOK 테이블 생성 (BOOK_ID PK, TITLE, AUTHOR_ID FK, PRICE, YEAR_PUBLISHED)
4. AUTHOR 데이터 3행 삽입
5. BOOK 데이터 2행 삽입
6. 두 테이블 확인

<details>
<summary>풀이 보기</summary>

```sql
-- 안전한 삭제 (FK 관계 때문에 BOOK 먼저)
DROP TABLE IF EXISTS BOOK;
DROP TABLE IF EXISTS AUTHOR;

-- AUTHOR 테이블 생성
CREATE TABLE AUTHOR (
    AUTHOR_ID  CHAR(2)       PRIMARY KEY,
    FIRSTNAME  VARCHAR(20),
    LASTNAME   VARCHAR(20),
    COUNTRY    VARCHAR(20),
    BIRTHDATE  DATE
);

-- BOOK 테이블 생성 (FK 포함)
CREATE TABLE BOOK (
    BOOK_ID        CHAR(4)        PRIMARY KEY,
    TITLE          VARCHAR(100),
    AUTHOR_ID      CHAR(2),
    PRICE          DECIMAL(6, 2),
    YEAR_PUBLISHED INTEGER,
    FOREIGN KEY (AUTHOR_ID) REFERENCES AUTHOR(AUTHOR_ID)
);

-- 데이터 삽입
INSERT INTO AUTHOR VALUES
    ('A1', 'Patrick', 'Modiano',  'France', '1945-07-30'),
    ('A2', 'Haruki',  'Murakami', 'Japan',  '1949-01-12'),
    ('A3', 'Gabriel', 'Silva',    'Brazil', '1960-03-15');

INSERT INTO BOOK VALUES
    ('B001', 'The Night Watch', 'A1', 15.99, 1999),
    ('B002', 'Norwegian Wood',  'A2', 18.50, 1987);

-- 확인
SELECT * FROM AUTHOR;
SELECT * FROM BOOK;
```

**설명:**
외래 키 관계가 있으면 **삭제는 자식(BOOK)부터, 생성은 부모(AUTHOR)부터**입니다. 이 순서를 지키지 않으면 참조 무결성 오류가 발생합니다.

</details>

---

## 핵심 정리

| 명령어 | 역할 | 주의점 |
|--------|------|--------|
| `CREATE TABLE` | 테이블 생성 | 부모 테이블 먼저 생성 |
| `ALTER TABLE ADD COLUMN` | 열 추가 | 기존 행은 NULL로 채워짐 |
| `ALTER TABLE MODIFY` | 열 타입 변경 | DBMS마다 문법 다름 |
| `DROP TABLE IF EXISTS` | 테이블 삭제 | 구조 + 데이터 모두 삭제 |
| `TRUNCATE TABLE` | 데이터만 삭제 | 구조 유지, 빠름 |
| `PRIMARY KEY` | 행 고유 식별 | 중복·NULL 불가 |
| `FOREIGN KEY` | 테이블 간 관계 | 참조 무결성 강제 |
