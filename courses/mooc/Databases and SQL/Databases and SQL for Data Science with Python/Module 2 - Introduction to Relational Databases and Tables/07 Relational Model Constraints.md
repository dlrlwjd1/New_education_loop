# Relational Model Constraints

## 학습 목표

- 엔티티 무결성, 참조 무결성, 도메인 무결성 제약 조건 정의 및 식별
- 각 제약 조건이 데이터 무결성을 유지하는 방법 설명
- SQL에서 이 제약 조건들이 구현되는 예시 인식

---

## 개요

잘 설계된 데이터베이스는 저장된 데이터의 **정확성, 일관성, 신뢰성**을 보장해야 합니다.  
이를 위해 관계형 모델의 세 가지 핵심 제약 조건을 사용합니다.

| 제약 조건 | 보장하는 것 |
|----------|------------|
| 엔티티 무결성 | 각 행이 고유하게 식별됨 |
| 참조 무결성 | 테이블 간 관계가 일관성 있게 유지됨 |
| 도메인 무결성 | 열의 값이 허용된 범위/형식 안에 있음 |

---

## 예시 데이터베이스: BookShopDB

**BookShop 테이블**

| BOOK_ID | TITLE | AUTHOR_ID | PRICE | PUBLISHED_DATE |
|---------|-------|-----------|-------|----------------|
| 1 | Learning SQL | 101 | 29.99 | 2021-03-15 |
| 2 | Database Design | 102 | 45.00 | 2019-07-20 |
| 3 | Python for Data | 101 | 35.50 | 2022-11-01 |

**BookShop_AuthorDetails 테이블**

| AUTHOR_ID | AUTHOR_NAME |
|-----------|-------------|
| 101 | Jane Smith |
| 102 | John Doe |

---

## 1. 엔티티 무결성 (Entity Integrity)

모든 테이블은 **기본 키(Primary Key)**를 가져야 합니다.  
기본 키는 각 행을 고유하게 식별하며 다음을 보장합니다.

- `NULL` 값을 가질 수 없음
- 모든 행에서 고유해야 함

```sql
CREATE TABLE BookShop (
    BOOK_ID   INT          PRIMARY KEY,
    TITLE     VARCHAR(100),
    AUTHOR_ID INT
);
```

- `BOOK_ID`가 기본 키: 두 책이 같은 ID를 가질 수 없고, ID가 없는 책도 존재할 수 없음

---

## 2. 참조 무결성 (Referential Integrity)

한 테이블의 **외래 키(Foreign Key)**는 반드시 다른 테이블의 유효한 기본 키를 참조해야 합니다.  
이를 통해 테이블 간의 논리적 관계가 일관되게 유지됩니다.

```sql
CREATE TABLE BookShop_AuthorDetails (
    AUTHOR_ID   INT          PRIMARY KEY,
    AUTHOR_NAME VARCHAR(100)
);

CREATE TABLE BookShop (
    BOOK_ID   INT          PRIMARY KEY,
    TITLE     VARCHAR(100),
    AUTHOR_ID INT,
    FOREIGN KEY (AUTHOR_ID) REFERENCES BookShop_AuthorDetails(AUTHOR_ID)
);
```

- `BookShop.AUTHOR_ID`는 반드시 `BookShop_AuthorDetails.AUTHOR_ID`에 존재해야 함
- 존재하지 않는 `AUTHOR_ID`로 책을 삽입하면 **오류 발생**
- 이처럼 참조 대상이 없는 행을 **고아 레코드(Orphaned Record)**라 하며, 참조 무결성이 이를 방지함

> **위반 시 동작 옵션** (선택적으로 지정 가능)
>
> | 옵션 | 설명 |
> |------|------|
> | `ON DELETE CASCADE` | 부모 행 삭제 시 자식 행도 자동 삭제 |
> | `ON DELETE SET NULL` | 부모 행 삭제 시 외래 키를 NULL로 설정 |
> | `ON DELETE RESTRICT` | 자식 행이 있으면 부모 행 삭제 불가 (기본값) |

---

## 3. 도메인 무결성 (Domain Integrity)

열에 저장되는 모든 값이 **정의된 도메인(허용 범위)** 안에 있어야 합니다.  
다음 규칙들을 포함합니다.

- 데이터 타입
- 허용 값의 범위 또는 패턴
- NULL 허용 여부

```sql
CREATE TABLE BookShop (
    BOOK_ID        INT            PRIMARY KEY,
    TITLE          VARCHAR(100)   NOT NULL,
    PRICE          DECIMAL(5, 2)  CHECK (PRICE >= 0),
    PUBLISHED_DATE DATE
);
```

### 도메인 무결성을 강제하는 주요 제약 조건

| 제약 조건 | 역할 | 예시 |
|----------|------|------|
| `NOT NULL` | 열이 반드시 값을 가져야 함 | `TITLE NOT NULL` — 제목 없는 책 불가 |
| `CHECK` | 값이 조건을 만족해야 함 | `PRICE >= 0` — 음수 가격 불가 |
| `DATA TYPE` | 열에 허용된 형식만 저장 | `DATE` — 날짜 형식만 허용 |
| `DEFAULT` | 값이 없을 때 기본값 사용 | `DEFAULT 0` — 미입력 시 0으로 설정 |

---

## 세 가지 제약 조건 비교

| 제약 조건 | 대상 | 핵심 키워드 | 방지하는 문제 |
|----------|------|------------|--------------|
| 엔티티 무결성 | 행(Row) | `PRIMARY KEY` | 중복 행, 식별 불가 행 |
| 참조 무결성 | 테이블 간 관계 | `FOREIGN KEY` | 고아 레코드, 끊어진 참조 |
| 도메인 무결성 | 열(Column) 값 | `NOT NULL`, `CHECK` | 잘못된 형식/범위의 데이터 |
