# Built-in SQL Functions

## 학습 목표

- 집계 함수(Aggregate Functions) 이해 및 사용
- 스칼라·문자열 함수(Scalar & String Functions) 이해 및 사용

## 내장 함수를 사용하는 이유

- 데이터베이스 내부에서 연산 → 앱으로 전송하는 데이터 양 감소
- 네트워크 트래픽·대역폭 절약
- 대용량 데이터에서 애플리케이션 레벨 처리보다 빠름

---

## 예시 테이블 — PETRESCUE

| ID | ANIMAL | QUANTITY | COST | RESCUE_DATE |
|----|--------|----------|------|-------------|
| 1 | Cat | 9 | 450.09 | 2018-05-29 |
| 2 | Dog | 3 | 666.66 | 2018-06-01 |
| 3 | Dog | 1 | 100.00 | 2018-06-04 |
| 4 | Parrot | 2 | 50.00 | 2018-06-04 |
| 5 | Dog | 1 | 75.75 | 2018-06-10 |
| 6 | Hamster | 6 | 60.60 | 2018-06-11 |
| 7 | Cat | 1 | 44.44 | 2018-06-11 |
| 8 | Turtle | 2 | 100.00 | 2018-06-14 |
| 9 | Parrot | 3 | 90.00 | 2018-06-14 |

---

## 1. 집계 함수 (Aggregate Functions)

열 전체(또는 부분집합)의 값을 입력으로 받아 **단일 값**을 반환합니다.

| 함수 | 설명 |
|------|------|
| `SUM` | 합계 |
| `MIN` | 최솟값 |
| `MAX` | 최댓값 |
| `AVG` | 평균값 |
| `COUNT` | 행 개수 |

### SUM — 합계

```sql
-- COST 열 합계
SELECT SUM(COST) FROM PETRESCUE;

-- 열 이름 별칭 지정
SELECT SUM(COST) AS SUM_OF_COST FROM PETRESCUE;
```

### MIN / MAX — 최솟값 / 최댓값

```sql
-- 단일 거래에서 가장 많이 구조한 수량
SELECT MAX(QUANTITY) FROM PETRESCUE;

-- 개(Dog) 거래 중 가장 낮은 ID
SELECT MIN(ID) FROM PETRESCUE WHERE ANIMAL = 'Dog';
```

### AVG — 평균

```sql
-- 전체 비용 평균
SELECT AVG(COST) FROM PETRESCUE;

-- 개 1마리당 평균 비용 (열 간 산술 연산 후 집계)
SELECT AVG(COST / QUANTITY) FROM PETRESCUE WHERE ANIMAL = 'Dog';
```

> 집계 함수는 `WHERE`로 필터링된 부분 집합에도 적용됩니다.

---

## 2. 스칼라 함수 (Scalar Functions)

개별 값 하나하나에 대해 연산을 수행합니다.

### ROUND — 반올림

```sql
-- COST 열의 모든 값을 가장 가까운 정수로 반올림
SELECT ROUND(COST) FROM PETRESCUE;

-- 소수점 두 자리까지 반올림
SELECT ROUND(COST, 2) FROM PETRESCUE;
```

---

## 3. 문자열 함수 (String Functions)

`CHAR`, `VARCHAR` 값에 대한 연산을 수행합니다.

### LENGTH — 문자열 길이

```sql
SELECT LENGTH(ANIMAL) FROM PETRESCUE;
```

### UCASE / LCASE — 대소문자 변환

```sql
-- 대문자로 변환
SELECT UCASE(ANIMAL) FROM PETRESCUE;

-- 소문자 변환을 WHERE 조건에 활용 (대소문자 혼용 방지)
SELECT * FROM PETRESCUE WHERE LCASE(ANIMAL) = 'cat';
```

> `WHERE LCASE(ANIMAL) = 'cat'`은 테이블에 'Cat', 'CAT', 'cat' 등이 혼재할 때 유용합니다.

### 함수 중첩 (Nested Functions)

```sql
-- 고유한 동물 이름을 대문자로 조회
SELECT DISTINCT(UCASE(ANIMAL)) FROM PETRESCUE;
```

---

## 핵심 요약

| 분류 | 함수 | 설명 |
|------|------|------|
| 집계 | `SUM(col)` | 합계 |
| 집계 | `MIN(col)` | 최솟값 |
| 집계 | `MAX(col)` | 최댓값 |
| 집계 | `AVG(col)` | 평균 |
| 집계 | `COUNT(col)` | 행 개수 |
| 스칼라 | `ROUND(col, n)` | n 자리까지 반올림 |
| 문자열 | `LENGTH(col)` | 문자열 길이 반환 |
| 문자열 | `UCASE(col)` | 대문자 변환 |
| 문자열 | `LCASE(col)` | 소문자 변환 |
