# Working with MySQL Scheduled Events

## 개요

- 예약 이벤트(scheduled event) — 지정한 일정에 따라 실행되는 작업
- 일회성(one-time) 이벤트(AT 절)와 반복(recurring) 이벤트(EVERY 절)의 생성과 삭제

## 내용

### 예약 이벤트란

- **주어진 일정에 따라 실행되는 태스크.** 고유한 이름을 가지며 하나 이상의 SQL 문을 담고 데이터베이스에 저장된다.
- 두 유형:
  - **일회성 이벤트** — 한 번만 실행 (예: 한 시간 뒤 데이터 삽입)
  - **반복 이벤트** — 정기적으로 실행 (예: 주간 리포트 생성)

### 생성 문법

1. `CREATE EVENT [IF NOT EXISTS] 이벤트이름` — IF NOT EXISTS는 없을 때만 생성
2. `ON SCHEDULE` + 일정 지정:
   - 일회성: **`AT 타임스탬프 + INTERVAL ...`** (예: 지금부터 12시간 뒤)
   - 반복: **`EVERY 간격`** (+ 필요 시 **STARTS/ENDS**로 시작·종료 시점 지정)
3. `DO` + 이벤트 본문 — BEGIN...END 블록 안에 SQL 로직

### 삭제

- `DROP EVENT IF EXISTS 이벤트이름;` — IF EXISTS로 이미 삭제된 이벤트에 대한 에러 방지

## 예시

```sql
-- 일회성: 12시간 뒤 월간 매출 리포트 생성
CREATE EVENT IF NOT EXISTS GenerateRevenueReport
ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 12 HOUR
DO
BEGIN
  -- 이번 달 orders 데이터를 report_data 테이블로
  INSERT INTO report_data
  SELECT * FROM orders
  WHERE MONTH(order_date) = MONTH(CURRENT_DATE());
END;

-- 반복: 매일 재고 확인·보충 (50개 미만이면 갱신)
CREATE EVENT DailyRestock
ON SCHEDULE EVERY 1 DAY
DO
BEGIN
  UPDATE products
  SET number_of_items = 50
  WHERE number_of_items < 50;
END;

DROP EVENT IF EXISTS DailyRestock;
```

## 요약

- 예약 이벤트는 CREATE EVENT + ON SCHEDULE + DO 구조로 만들며, AT은 일회성·EVERY는 반복 일정이다.
- STARTS/ENDS로 반복 이벤트의 유효 기간을 정할 수 있다.
- DROP EVENT IF EXISTS로 제거한다.
