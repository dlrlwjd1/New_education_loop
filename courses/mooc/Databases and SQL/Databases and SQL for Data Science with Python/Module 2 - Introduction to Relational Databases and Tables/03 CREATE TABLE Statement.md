# CREATE TABLE Statement

## 학습 목표

- 엔티티 이름과 속성을 이용해 관계형 데이터베이스 테이블을 생성하는 방법 설명

---

## CREATE TABLE 문법

`CREATE`는 DDL(Data Definition Language) 구문으로 테이블(엔티티)을 생성합니다.

```sql
CREATE TABLE table_name (
    column1 datatype optional_constraints,
    column2 datatype optional_constraints,
    ...
);
```

- 각 행은 열 이름, 데이터 타입, (선택) 제약 조건으로 구성
- 각 열 정의는 `,`(쉼표)로 구분

---

## 예시 1 — 캐나다 주(Province) 테이블

```sql
CREATE TABLE provinces (
    id   CHAR(2)      PRIMARY KEY NOT NULL,
    name VARCHAR(24)
);
```

| 열 | 데이터 타입 | 설명 |
|----|------------|------|
| `id` | `CHAR(2)` | 고정 2자리 약자 (AB, BC 등) |
| `name` | `VARCHAR(24)` | 최대 24자의 주 전체 이름 (Alberta 등) |

---

## 예시 2 — 도서관 AUTHOR 테이블

```sql
CREATE TABLE author (
    author_id CHAR(2)      PRIMARY KEY NOT NULL,
    lastname  VARCHAR(15)  NOT NULL,
    firstname VARCHAR(15)  NOT NULL,
    email     VARCHAR(40),
    city      VARCHAR(15),
    country   CHAR(2)
);
```

| 열 | 데이터 타입 | 제약 조건 | 설명 |
|----|------------|----------|------|
| `author_id` | `CHAR(2)` | `PRIMARY KEY NOT NULL` | 각 저자를 고유하게 식별 |
| `lastname` | `VARCHAR(15)` | `NOT NULL` | 저자 성 (반드시 입력) |
| `firstname` | `VARCHAR(15)` | `NOT NULL` | 저자 이름 (반드시 입력) |
| `email` | `VARCHAR(40)` | — | 이메일 (선택) |
| `city` | `VARCHAR(15)` | — | 도시 (선택) |
| `country` | `CHAR(2)` | — | 국가 코드 (선택) |

---

## 제약 조건 (Constraints)

| 제약 조건 | 설명 |
|----------|------|
| `PRIMARY KEY` | 각 행을 고유하게 식별, 중복 방지 |
| `NOT NULL` | 해당 열에 NULL 값 입력 불가 |

> `lastname`과 `firstname`에 `NOT NULL`을 지정한 이유: 저자는 반드시 이름이 있어야 하기 때문입니다.

---

## 핵심 요약

| 항목 | 설명 |
|------|------|
| `CREATE TABLE` | DDL 구문, 테이블 생성 |
| 열 이름 | 엔티티의 속성(Attribute)에서 매핑 |
| 데이터 타입 | `CHAR`, `VARCHAR`, `INTEGER` 등 |
| 선택적 제약 조건 | `PRIMARY KEY`, `NOT NULL` 등 |
