# INSERT Statement

## 학습 목표

- INSERT 문의 문법 파악
- 테이블에 행을 추가하는 두 가지 방법 설명

---

## INSERT란?

**INSERT 문**은 테이블에 새로운 행을 추가하는 DML 구문입니다.

- 테이블을 생성한 후, 데이터를 채울 때 사용
- DML (Data Manipulation Language) — 데이터를 읽고 수정하는 구문

---

## 기본 문법

```sql
INSERT INTO tablename (column1, column2, ...) VALUES (value1, value2, ...);
```

| 구성 요소 | 역할 |
|-----------|------|
| `tablename` | 데이터를 삽입할 테이블 이름 |
| `(column1, column2, ...)` | 값을 넣을 열 이름 목록 |
| `VALUES (value1, value2, ...)` | 각 열에 넣을 값 목록 |

> **중요:** 열 이름의 수와 VALUES의 값 수는 반드시 일치해야 합니다.

---

## 방법 1 — 한 번에 한 행 삽입

```sql
INSERT INTO AUTHOR (AUTHOR_ID, LASTNAME, FIRSTNAME, EMAIL, CITY, COUNTRY)
VALUES ('A1', 'Chong', 'Raul', 'RFC@IBM.com', 'Toronto', 'CA');
```

- AUTHOR 테이블의 6개 열에 대응하는 값 6개를 순서대로 입력

---

## 방법 2 — 한 번에 여러 행 삽입

VALUES 절에서 각 행을 쉼표로 구분하면 여러 행을 한 번에 삽입할 수 있습니다.

```sql
INSERT INTO AUTHOR (AUTHOR_ID, LASTNAME, FIRSTNAME, EMAIL, CITY, COUNTRY)
VALUES
  ('A1', 'Chong', 'Raul', 'RFC@IBM.com', 'Toronto', 'CA'),
  ('A2', 'Ahuja', 'Rav', 'RA@IBM.com', 'Toronto', 'CA');
```

- 행마다 괄호로 값을 묶고 쉼표로 구분
- 한 번의 INSERT 문으로 여러 행을 효율적으로 추가 가능

---

## 핵심 요약

| 개념 | 설명 |
|------|------|
| **INSERT INTO** | 테이블에 새 행을 추가하는 DML 구문 |
| **열 이름 = 값 수** | 열 목록과 VALUES의 값 개수는 반드시 일치 |
| **단일 행 삽입** | `VALUES (값1, 값2, ...)` |
| **다중 행 삽입** | `VALUES (행1), (행2), ...` |
