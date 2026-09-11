# SELECT Statement

## 학습 목표

- 관계형 데이터베이스 테이블에서 데이터 조회
- Predicate(조건식)의 개념 이해
- WHERE 절을 사용한 SELECT 문 문법 파악
- RDBMS가 지원하는 비교 연산자 목록 파악

---

## DML과 SELECT

**DML (Data Manipulation Language, 데이터 조작 언어)** 은 데이터를 읽고 수정하는 데 사용하는 구문입니다.

- SELECT 문은 DML 구문에 해당
- SELECT 문 자체를 **쿼리(Query)** 라고 부름
- 쿼리 실행 결과를 **결과 집합(Result Set)** 또는 **결과 테이블(Result Table)** 이라고 부름

---

## SELECT 기본 문법

### 모든 열 조회

```sql
SELECT * FROM book;
```

- `*` 는 테이블의 모든 열을 의미
- 테이블 `book`의 모든 행·모든 열이 출력됨

열 이름을 직접 나열해도 동일한 결과:

```sql
SELECT book_id, title, author, page_count FROM book;
```

### 특정 열만 조회

```sql
SELECT book_id, title FROM book;
```

- 원하는 열만 선택해서 조회 가능
- 출력 순서는 SELECT 문에 명시한 열 순서를 따름

---

## WHERE 절 — 행 필터링

특정 조건을 만족하는 행만 조회하고 싶을 때 **WHERE 절**을 사용합니다.

```sql
SELECT book_id, title FROM book WHERE book_id = 'B1';
```

- 조건을 만족하는 행(book_id = 'B1')만 결과에 포함
- WHERE 절은 반드시 **Predicate(조건식)** 를 필요로 함

### Predicate란?

> 참(true), 거짓(false), 또는 알 수 없음(unknown)으로 평가되는 조건식

- WHERE 절의 검색 조건에 사용됨
- 조건이 **true**인 행만 결과 집합에 포함됨

---

## 비교 연산자

RDBMS에서 WHERE 절에 사용할 수 있는 비교 연산자:

| 연산자 | 의미 |
|--------|------|
| `=` | 같다 |
| `>` | 크다 |
| `<` | 작다 |
| `>=` | 크거나 같다 |
| `<=` | 작거나 같다 |
| `<>` | 같지 않다 (not equal) |

---

## 핵심 요약

| 개념 | 설명 |
|------|------|
| **SELECT** | 테이블에서 데이터를 조회하는 DML 구문 |
| **`SELECT *`** | 모든 열 조회 |
| **특정 열 지정** | `SELECT col1, col2 FROM table` |
| **WHERE 절** | 조건을 만족하는 행만 필터링 |
| **Predicate** | true/false/unknown으로 평가되는 조건식 |
| **비교 연산자** | `=`, `>`, `<`, `>=`, `<=`, `<>` |
