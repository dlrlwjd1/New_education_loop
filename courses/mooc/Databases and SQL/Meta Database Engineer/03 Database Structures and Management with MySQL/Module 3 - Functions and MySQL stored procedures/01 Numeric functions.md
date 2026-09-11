# Numeric functions

## 개요

- MySQL 함수의 5개 범주 개관과 숫자 함수(numeric functions)의 두 갈래: 집계 함수와 수학 함수
- ROUND·MOD 함수 실습 (보석상 M&G 예제)

## 내용

### 함수란

- **연산을 수행하고 결과를 반환하는 코드 조각.** 매개변수(인자)를 받는 함수도, 받지 않는 함수도 있다.
- MySQL 함수의 5개 범주: **숫자(numeric), 문자열(string), 날짜(date), 비교(comparison), 제어 흐름(control flow)** 함수.

### 숫자 함수의 두 범주

1. **집계 함수(aggregate)** — 값들의 집합에 적용: SUM, AVG, MAX, MIN, COUNT
2. **수학 함수(math)** — 기본 수학 작업:
   - **ROUND(값, 자릿수)** — 지정한 소수 자릿수로 반올림. 첫 인자는 컬럼명 또는 숫자, 둘째 인자는 소수 자릿수.
   - **MOD(값, 나누는 수)** — 첫 인자를 둘째 인자로 나눈 **나머지** 반환.

## 예시

```sql
-- 고객별 평균 지출을 소수 둘째 자리로 반올림
SELECT client_id, ROUND(AVG(cost), 2)
FROM client_orders
GROUP BY client_id;

-- 주문 수량이 짝수인 품목 찾기 (나머지 0 = 짝수)
SELECT order_id, item_id, MOD(quantity, 2)
FROM mg_orders;
-- 결과: 품목 1, 3, 5, 6이 짝수 수량
```

## 요약

- MySQL 함수는 숫자·문자열·날짜·비교·제어 흐름의 5개 범주로 나뉜다.
- 숫자 함수는 집계(SUM·AVG·MAX·MIN·COUNT)와 수학(ROUND·MOD)으로 구분된다.
- ROUND는 소수 자릿수 반올림, MOD는 나머지 계산(짝홀 판별 등)에 쓴다.
