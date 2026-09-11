# Filtering data using IN, BETWEEN and LIKE logical operators

## 개요

- IN(다중 값 지정), BETWEEN(범위), LIKE(패턴 매칭) 연산자의 문법과 와일드카드 사용법
- Lucky Shrub customer_purchases 테이블 예제

## 내용

### IN — 다중 값 지정

- WHERE 절에서 컬럼 뒤에 IN 연산자와 **괄호 안의 값 집합**을 나열한다.
- 레코드의 컬럼 값이 집합의 **어느 값과든 일치**하면 결과에 포함 — **여러 OR 조건의 축약형**이다.
- `NOT IN`을 쓰면 반대 결과를 얻는다.

### BETWEEN — 범위 선택

- 컬럼 뒤에 BETWEEN과 **범위의 시작·끝 값 두 개**(AND로 연결)를 지정한다.
- 숫자·텍스트·날짜 모두 가능하며, **경계값을 포함**한다 (>= 시작 AND <= 끝의 빠른 표현).

### LIKE — 패턴 매칭

- 컬럼 뒤에 LIKE와 패턴(작은따옴표)을 지정한다. 와일드카드:
  - `%` — 0개, 1개 또는 여러 문자
  - `_` — 정확히 한 문자
- 예: `'g__%'` — g로 시작하고 **최소 3글자** 이상인 값 검색 (언더스코어 2개 = 최소 2자 추가, %로 그 이상 허용)

## 예시

```sql
-- IN: 두 카운티 고객 (OR 두 개와 동일한 결과) → 3명
SELECT * FROM customer_purchases
WHERE location IN ('Gila County', 'Santa Cruz County');

-- BETWEEN: 구매액 $1,000~$2,000 (경계 포함)
SELECT * FROM customer_purchases
WHERE purchases BETWEEN 1000 AND 2000;

-- LIKE: g로 시작하고 3글자 이상인 위치 → 3건
SELECT * FROM customer_purchases
WHERE location LIKE 'g__%';
```

## 요약

- IN은 값 집합 매칭(다중 OR의 축약), BETWEEN은 경계 포함 범위, LIKE는 와일드카드(%·_) 패턴 매칭이다.
- NOT IN으로 반대 집합을 얻을 수 있다.
