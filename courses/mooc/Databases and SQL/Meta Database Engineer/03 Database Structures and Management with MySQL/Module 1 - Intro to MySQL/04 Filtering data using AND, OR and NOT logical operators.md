# Filtering data using AND, OR and NOT logical operators

## 개요

- WHERE 절에 여러 조건을 결합하는 논리 연산자 AND, OR, NOT의 동작과 문법
- Lucky Shrub(원예 상점) customer_purchases 테이블 예제

## 내용

### 논리 연산자의 동작

- **AND** — 결합된 **모든 조건이 참**이어야 레코드가 결과에 포함된다.
- **OR** — 결합된 조건 중 **하나라도 참**이면 레코드가 포함된다.
- **NOT** — 조건이 **참이 아닐 때만** 포함한다. 조건 평가 결과를 **반전(negate)**시킨다. WHERE 뒤에 NOT을 쓰고 조건을 나열한다.
- **여러 조건에 NOT을 적용할 때는 조건들을 괄호로 묶는다.** 조건이 하나면 괄호가 필요 없다.

## 예시

customer_purchases 테이블(customer_id, 이름, 위치, 구매액)에 대한 Lucky Shrub의 질의:

```sql
-- 1. Gila County 거주 + $2,000 초과 구매 고객 (AND: 두 조건 모두 참) → 2명
SELECT * FROM customer_purchases
WHERE purchases > 2000 AND location = 'Gila County';

-- 2. Gila County 또는 Santa Cruz County 고객 (OR: 하나만 참이어도) → 3명
SELECT * FROM customer_purchases
WHERE location = 'Gila County' OR location = 'Santa Cruz County';

-- 3. 두 카운티에 살지 않는 고객 (NOT: 결과 반전, 다중 조건은 괄호) → 4명
SELECT * FROM customer_purchases
WHERE NOT (location = 'Gila County' OR location = 'Santa Cruz County');
```

## 요약

- AND는 모든 조건 충족, OR는 최소 한 조건 충족, NOT은 조건 불충족 레코드를 반환한다.
- NOT에 여러 조건을 걸 때는 괄호로 묶는다.
- 논리 연산자로 WHERE 절 하나에 복수의 필터 규칙을 결합할 수 있다.
