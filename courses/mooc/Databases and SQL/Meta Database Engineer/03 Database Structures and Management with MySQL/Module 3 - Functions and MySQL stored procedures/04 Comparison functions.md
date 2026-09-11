# Comparison functions

## 개요

- 값 비교용 MySQL 함수: GREATEST(최대), LEAST(최소), ISNULL(NULL 검사)
- 분기별 매출에서 품목별 최고·최저 찾기와 미배송 주문 필터링 (M&G 예제)

## 내용

### 비교 함수란

- **데이터베이스 안의 값들을 비교**하는 함수 — 최고값·최저값 등을 판별한다.
- 숫자뿐 아니라 문자열·문자 등 넓은 범위의 값에 쓸 수 있는 것이 장점.

### 대표 비교 함수

- **GREATEST(값들...)** — 나열한 값(컬럼들) 중 **가장 큰 값** 반환
- **LEAST(값들...)** — **가장 작은 값** 반환
- **ISNULL(컬럼)** — 등호 연산자의 대안으로 **값이 NULL인지 검사**. WHERE 절과 함께 쓰면 NULL인 레코드만 필터링. NULL이면 1(true)을 반환.
- GREATEST/LEAST에는 AS 별칭(highest, lowest)을 붙여 결과 컬럼 이름을 정리하는 것이 일반적.

## 예시

sales_revenue 테이블(ItemID + 분기별 컬럼 4개):

```sql
-- 품목별 4개 분기 중 최고·최저 매출
SELECT item_id,
       GREATEST(q1, q2, q3, q4) AS highest,
       LEAST(q1, q2, q3, q4)    AS lowest
FROM sales_revenue;
-- 예: ID 1 품목은 최고 $138,000, 최저 $60,000

-- 아직 배송되지 않은 주문 (delivery_date가 NULL)
SELECT * FROM mg_orders
WHERE ISNULL(delivery_date);
```

## 요약

- GREATEST/LEAST는 여러 컬럼 값 가운데 최대/최소를 행 단위로 뽑는다.
- ISNULL은 NULL 여부를 검사해 미완료(미배송 등) 레코드 필터링에 쓴다.
- 비교 함수는 숫자·문자열·문자 모두에 적용 가능하다.
