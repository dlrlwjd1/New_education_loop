# MySQL UNION operator

## 개요

- UNION 연산자로 여러 SELECT 문의 결과 집합을 하나의 테이블로 결합하는 방법
- UNION의 3가지 규칙과 중복 값을 유지하는 UNION ALL

## 내용

### UNION이란

- **같은 질의 안에서 여러 문장의 결과 집합을 결합**하는 연산자. 두 SELECT 문을 이어 하나의 결과 테이블로 제시한다.
- 구문: `SELECT ... FROM 테이블1 UNION SELECT ... FROM 테이블2`

### 3가지 규칙 (모범 사례)

1. 모든 SELECT 문의 **컬럼 수가 같아야** 한다
2. 대응하는 컬럼의 **데이터 타입이 유사**해야 한다
3. 대응 컬럼의 **순서가 모든 SELECT 문에서 동일**해야 한다

### UNION vs UNION ALL

- **UNION은 유일 값(distinct)만 반환**한다 — 두 테이블에 같은 값이 있으면 결합 결과에는 한 번만 나타난다.
- 중복까지 모두 나열하려면 **UNION ALL** — ALL 키워드가 중복 값도 유지한다.

## 예시

Lucky Shrub의 연말 세무 신고 — 정규직·파트타임 직원 테이블(둘 다 EmployeeID, FullName, ContactNumber, Location 컬럼)을 결합:

```sql
-- 유일 값만 (동명이인 Julia Marr가 한 번만 나옴)
SELECT full_name, location FROM full_time_employees
UNION
SELECT full_name, location FROM part_time_employees;

-- 중복 포함 (정규직·파트타임 Julia Marr 둘 다 표시)
SELECT full_name, location FROM full_time_employees
UNION ALL
SELECT full_name, location FROM part_time_employees;
```

## 요약

- UNION은 여러 SELECT 결과를 한 테이블로 합치되 컬럼 수·타입·순서가 일치해야 한다.
- 기본 UNION은 중복을 제거하므로, 중복(동명이인 등)을 보존하려면 UNION ALL을 쓴다.
