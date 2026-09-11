# Join Overview

## 학습 목표

- JOIN 연산자의 정의 설명
- JOIN 연산에서 기본 키(Primary Key)와 외래 키(Foreign Key)의 역할 설명
- JOIN 연산자의 종류 나열

---

## JOIN이란?

단순 SELECT 문은 단일 테이블에서 데이터를 조회합니다. 두 개 이상의 테이블에서 데이터를 조회해야 할 때 **JOIN 연산자**를 사용합니다.

**JOIN**은 테이블 간 특정 컬럼의 관계를 기반으로 두 개 이상의 테이블에서 행을 결합합니다.

---

## 기본 키(Primary Key)와 외래 키(Foreign Key)

JOIN을 이해하려면 먼저 테이블 간 관계를 정의하는 두 가지 키 개념을 알아야 합니다.

| 키 종류 | 설명 |
|---------|------|
| **Primary Key (기본 키)** | 테이블 내 각 행을 고유하게 식별하는 컬럼 |
| **Foreign Key (외래 키, FK)** | 다른 테이블의 기본 키를 참조하는 컬럼 |

### 도서관 데이터베이스 예시

| 테이블 | 기본 키 | 설명 |
|--------|---------|------|
| `author` | `author_id` | 저자 정보 |
| `book` | `book_id` | 도서 정보 |
| `borrower` | `borrower_id` | 대출자 정보 |
| `loan` | — | `borrower_id (FK)`, `copy_id (FK)` 포함 |
| `copy` | `copy_id` | 도서 복사본 정보 |

예: `loan` 테이블의 `borrower_id`는 `borrower` 테이블의 기본 키를 참조하는 외래 키입니다.

---

## 두 테이블 JOIN

어떤 대출자가 어떤 책을 빌렸는지 알려면 `borrower` 테이블과 `loan` 테이블을 `borrower_id`로 연결합니다.

```sql
SELECT borrower.borrower_id, borrower.name, loan.copy_id
FROM borrower
JOIN loan ON borrower.borrower_id = loan.borrower_id;
```

---

## 세 개 이상의 테이블 JOIN

대출자 정보와 어떤 복사본을 빌렸는지까지 알려면 테이블을 하나 더 연결합니다.

```sql
-- 1단계: borrower + loan (borrower_id로 연결)
-- 2단계: loan + copy (copy_id로 연결)
SELECT borrower.name, loan.loan_date, copy.book_id
FROM borrower
JOIN loan ON borrower.borrower_id = loan.borrower_id
JOIN copy  ON loan.copy_id = copy.copy_id;
```

테이블을 추가할수록 `JOIN` 절을 계속 이어 붙이면 됩니다.

---

## JOIN의 종류

| JOIN 종류 | 설명 |
|-----------|------|
| **INNER JOIN** | 두 테이블에서 공통 컬럼 값이 일치하는 행만 반환 |
| **OUTER JOIN** | 일치하는 행뿐만 아니라 한쪽 또는 양쪽 테이블의 불일치 행도 반환 |

### INNER JOIN

두 테이블 모두에 일치하는 값이 있는 행만 결과에 포함됩니다.

```text
테이블 A ∩ 테이블 B  →  교집합만 반환
```

### OUTER JOIN

일치하지 않는 행도 포함하며, 세부 종류로 나뉩니다.

| 종류 | 반환 범위 |
|------|-----------|
| LEFT OUTER JOIN | 왼쪽 테이블의 모든 행 + 오른쪽 테이블의 일치 행 |
| RIGHT OUTER JOIN | 오른쪽 테이블의 모든 행 + 왼쪽 테이블의 일치 행 |
| FULL OUTER JOIN | 양쪽 테이블의 모든 행 |

---

## 핵심 요약

- JOIN 연산자는 두 개 이상의 테이블에서 행을 결합할 때 사용합니다.
- 테이블은 한 테이블의 기본 키(PK)와 다른 테이블의 외래 키(FK)인 공통 컬럼으로 연결됩니다.
- 세 개 이상의 테이블도 JOIN 절을 연속으로 추가해 연결할 수 있습니다.
- JOIN의 두 가지 유형: **INNER JOIN** (교집합만), **OUTER JOIN** (불일치 행 포함)
