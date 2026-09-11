# Inner Join

## 학습 목표

- INNER JOIN의 개념 설명
- INNER JOIN을 사용하는 상황 설명
- INNER JOIN 구문 설명

---

## INNER JOIN이란?

**INNER JOIN**은 두 테이블에서 공통 컬럼의 값이 일치하는 행만 결과로 반환하는 JOIN입니다.

```text
테이블 A ∩ 테이블 B  →  양쪽 모두 일치하는 행만 반환
일치하지 않는 행은 결과에 포함되지 않음
```

일치 기준은 보통 **한 테이블의 기본 키(PK) = 다른 테이블의 외래 키(FK)** 입니다.

---

## INNER JOIN 구문

```sql
SELECT column_list
FROM table1 AS alias1
INNER JOIN table2 AS alias2
ON alias1.common_column = alias2.common_column;
```

| 구성 요소 | 설명 |
|-----------|------|
| `INNER JOIN` | 두 테이블을 결합하는 키워드 |
| `ON` | 두 테이블을 연결하는 조건(JOIN predicate) |
| `AS alias` | 테이블에 짧은 별칭을 부여해 컬럼 참조를 간결하게 만듦 |
| 왼쪽 테이블 | `JOIN` 키워드 왼쪽에 위치한 테이블 |

---

## 예시: 도서 대출자와 대출일 조회

대출자 목록과 대출일을 조회하려면 `borrower` 테이블과 `loan` 테이블을 `borrower_id`로 연결합니다.

```sql
SELECT B.borrower_id, B.lastname, B.country,
       L.borrower_id, L.loan_date
FROM borrower AS B
INNER JOIN loan AS L
ON B.borrower_id = L.borrower_id;
```

### 동작 방식

| 단계 | 설명 |
|------|------|
| `FROM borrower AS B` | 왼쪽 테이블: `borrower` (별칭 `B`) |
| `INNER JOIN loan AS L` | 오른쪽 테이블: `loan` (별칭 `L`) |
| `ON B.borrower_id = L.borrower_id` | 두 테이블의 `borrower_id`가 일치하는 행만 결합 |

### 결과 예시

| B.borrower_id | B.lastname | B.country | L.borrower_id | L.loan_date |
|---------------|------------|-----------|---------------|-------------|
| 1 | Smith | Canada | 1 | 2023-01-10 |
| 3 | Lee | Korea | 3 | 2023-02-05 |

- `borrower_id`가 일치하는 행만 포함
- `borrower` 테이블에는 있지만 `loan` 테이블에 없는 대출자는 결과에 나타나지 않음

---

## 핵심 요약

- INNER JOIN은 두 테이블에서 공통 컬럼 값이 일치하는 행만 반환합니다.
- 일치하지 않는 행은 결과에 포함되지 않습니다.
- `ON` 절에 JOIN 조건(predicate)을 지정합니다.
- 테이블 별칭(alias)을 사용하면 컬럼 참조를 간결하게 작성할 수 있습니다.
