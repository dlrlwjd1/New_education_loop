# Date functions

## 개요

- 날짜·시간 값을 다양한 형식으로 추출하는 MySQL 날짜 함수: CURRENT_DATE, CURRENT_TIME, DATE_FORMAT, DATEDIFF
- 주문일-배송일 사이 경과 일수 계산 실습 (M&G 예제)

## 내용

### 대표 날짜 함수

- **CURRENT_DATE()** — 오늘 날짜를 연-월-일 형식으로 반환
- **CURRENT_TIME()** — 현재 시각을 시:분:초 형식으로 반환
- **DATE_FORMAT(날짜, 형식)** — 날짜를 MySQL이 인정하는 형식 문자열로 변환. 날짜는 쌍따옴표의 연-월-일, 형식은 작은따옴표 (예: 월 이름 전체 표시)
- **DATEDIFF(날짜1, 날짜2)** — **두 날짜 값 사이의 일수** 반환. 두 값 모두 연-월-일 형식.

## 예시

```sql
-- 현재 날짜·시각
SELECT CURRENT_DATE();
SELECT CURRENT_TIME();

-- 주문일의 월 이름 표시
SELECT DATE_FORMAT(order_date, '%M') FROM mg_orders;

-- 배송일 - 주문일 경과 일수 (배송일이 NULL이 아닌 주문만)
SELECT DATEDIFF(delivery_date, order_date)
FROM mg_orders
WHERE delivery_date IS NOT NULL;
```

## 요약

- CURRENT_DATE/CURRENT_TIME은 현재 날짜·시각을, DATE_FORMAT은 원하는 표시 형식을, DATEDIFF는 두 날짜 간 일수를 반환한다.
- 배송 소요일 같은 실무 지표를 WHERE(NULL 제외)와 결합해 바로 계산할 수 있다.
