# Module 6 Summary

## 핵심 정리

| 개념 | 설명 |
|------|------|
| JOIN | 특정 컬럼의 관계를 기반으로 두 개 이상의 테이블에서 행을 결합 |
| 다중 테이블 JOIN | JOIN 절을 연속으로 추가해 세 개 이상의 테이블 결합 가능 |
| INNER JOIN | 두 테이블에서 공통 컬럼 값이 일치하는 행만 반환 (가장 일반적인 JOIN) |
| LEFT OUTER JOIN | 왼쪽 테이블의 모든 행 + 오른쪽 테이블의 일치 행 |
| RIGHT OUTER JOIN | 오른쪽 테이블의 모든 행 + 왼쪽 테이블의 일치 행 |
| FULL OUTER JOIN | 양쪽 테이블의 모든 행 |
| Alias (별칭) | 테이블 또는 컬럼 이름을 짧게 표현하는 약칭 (`AS` 키워드 사용) |

## JOIN 유형 비교

```text
INNER JOIN     :  A ∩ B  (교집합)
LEFT OUTER     :  A 전체 + B 일치
RIGHT OUTER    :  B 전체 + A 일치
FULL OUTER     :  A ∪ B  (합집합)
```

## 예시로 보는 흐름

```sql
-- INNER JOIN: borrower_id가 일치하는 행만 반환
SELECT B.lastname, L.loan_date
FROM borrower AS B
INNER JOIN loan AS L
ON B.borrower_id = L.borrower_id;

-- 3개 테이블 JOIN
SELECT B.lastname, L.loan_date, C.book_id
FROM borrower AS B
INNER JOIN loan AS L ON B.borrower_id = L.borrower_id
INNER JOIN copy  AS C ON L.copy_id = C.copy_id;
```
