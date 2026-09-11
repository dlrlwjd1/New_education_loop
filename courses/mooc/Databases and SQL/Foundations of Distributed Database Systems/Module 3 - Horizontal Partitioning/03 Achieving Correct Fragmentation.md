# Achieving Correct Fragmentation

## 개요

- fragment 설계가 만족해야 할 완전성, 재구성 가능성, 분리성의 세 조건을 정의한다.
- 현재 데이터뿐 아니라 앞으로 들어올 데이터에도 조건이 성립해야 한다.

## 내용

### 완전성(completeness)

원본 릴레이션의 모든 데이터 항목은 적어도 하나의 fragment에 속해야 한다. predicate는 미래의 가능한 값까지 빠짐없이 분류해야 한다.

### 재구성(reconstruction)

fragment에서 원본 릴레이션을 되살릴 관계 연산이 존재해야 한다. 수평 분할은 `UNION`, 수직 분할은 공통 key를 이용한 `JOIN`이 일반적이다.

### 분리성(disjointness)

수평 fragment의 행은 정확히 하나에만 존재해야 한다. 수직 fragment의 비-key 열도 하나에만 속하고, 원본 재구성을 위한 key 열만 여러 fragment에 중복될 수 있다.

## 예시

```sql
-- 완전하고 서로 겹치지 않는 조건
WHERE budget <= 200000
WHERE budget > 200000

-- 수평 원본 재구성
SELECT * FROM project_low
UNION ALL
SELECT * FROM project_high;
```

`budget IS NULL`을 허용한다면 별도 fragment나 명시적 NULL 처리 조건이 있어야 완전하다.

## 요약

- 완전성은 누락, 분리성은 불필요한 중복을 막는다.
- 재구성 가능해야 전역 릴레이션의 의미를 유지할 수 있다.
- predicate 경계와 NULL을 포함한 전체 값 영역을 점검한다.
