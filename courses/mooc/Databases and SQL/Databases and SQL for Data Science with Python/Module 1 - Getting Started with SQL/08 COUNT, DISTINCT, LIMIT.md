# COUNT, DISTINCT, LIMIT

## SELECT와 함께 쓰는 유용한 표현 3가지

---

## 1. COUNT

**COUNT**는 쿼리 조건에 맞는 **행의 수**를 반환하는 내장 함수입니다.

### 문법

```sql
-- 테이블 전체 행 수
SELECT COUNT(*) FROM tablename;

-- 조건에 맞는 행 수
SELECT COUNT(column) FROM tablename WHERE <predicate>;
```

### 예시 — MEDALS 테이블에서 캐나다 수상 횟수 조회

```sql
SELECT COUNT(COUNTRY) FROM MEDALS WHERE COUNTRY = 'CANADA';
```

- `COUNTRY = 'CANADA'` 조건을 만족하는 행이 몇 개인지 숫자로 반환

---

## 2. DISTINCT

**DISTINCT**는 결과 집합에서 **중복 값을 제거**합니다.

### 문법

```sql
SELECT DISTINCT columnname FROM tablename;
```

### 예시 — 금메달을 받은 나라 목록 (중복 제거)

```sql
SELECT DISTINCT COUNTRY FROM MEDALS WHERE MEDALTYPE = 'GOLD';
```

- 같은 나라가 금메달을 여러 번 받아도 목록에 한 번만 표시
- 중복 없이 고유한 값만 반환

---

## 3. LIMIT

**LIMIT**는 조회할 **행의 수를 제한**합니다.

### 문법

```sql
SELECT * FROM tablename LIMIT n;
```

### 예시 — 전체 테이블에서 첫 10행만 조회

```sql
SELECT * FROM tablename LIMIT 10;
```

### 예시 — 2018년 데이터 중 5행만 조회

```sql
SELECT * FROM MEDALS WHERE YEAR = 2018 LIMIT 5;
```

- 결과 집합이 매우 클 때 일부만 미리 확인하는 용도로 유용

---

## 핵심 요약

| 표현 | 용도 | 예시 |
|------|------|------|
| `COUNT(*)` | 전체 행 수 반환 | `SELECT COUNT(*) FROM MEDALS` |
| `COUNT(column)` | 조건에 맞는 행 수 반환 | `SELECT COUNT(COUNTRY) FROM MEDALS WHERE COUNTRY = 'CANADA'` |
| `DISTINCT` | 중복 값 제거 | `SELECT DISTINCT COUNTRY FROM MEDALS` |
| `LIMIT n` | 결과를 n행으로 제한 | `SELECT * FROM MEDALS LIMIT 10` |
