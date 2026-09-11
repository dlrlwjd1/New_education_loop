# Date and Time Functions

## 학습 목표

- 날짜·시간 함수 정의
- 날짜·시간 산술 연산 설명

---

## SQL 날짜·시간 데이터 타입

| 타입 | 자릿수 | 형식 | 예시 |
|------|--------|------|------|
| `DATE` | 8자리 | `YYYYMMDD` | `20180529` |
| `TIME` | 6자리 | `HHMMSS` | `143000` |
| `TIMESTAMP` | 20자리 | `YYYYXXDDHHMMSSZZZZZZ` | `20180529143000000000` |

> XX = 월(Month), ZZZZZZ = 마이크로초(Microseconds)

---

## 날짜·시간 추출 함수

| 함수 | 반환 값 |
|------|--------|
| `YEAR(date)` | 연도 |
| `MONTH(date)` | 월 (1~12) |
| `DAY(date)` | 일 (1~31) |
| `DAYOFMONTH(date)` | 월의 몇 번째 날 |
| `DAYOFWEEK(date)` | 요일 (1=일요일) |
| `DAYOFYEAR(date)` | 연중 몇 번째 날 |
| `WEEK(date)` | 연중 몇 번째 주 |
| `HOUR(time)` | 시 |
| `MINUTE(time)` | 분 |
| `SECOND(time)` | 초 |

---

## 예시 — PETRESCUE 테이블 기준

### 날짜 추출

```sql
-- 고양이 구조 거래의 날짜(일) 부분 추출
SELECT DAY(RESCUE_DATE) FROM PETRESCUE WHERE ANIMAL = 'Cat';

-- 5월(Month 5)의 구조 건수
SELECT COUNT(*) FROM PETRESCUE WHERE MONTH(RESCUE_DATE) = 5;
```

---

## 날짜·시간 산술 연산

### DATE_ADD — 날짜 더하기

```sql
-- 각 구조일로부터 3일 후 날짜 계산 (주문 처리 기한 등)
SELECT DATE_ADD(RESCUE_DATE, INTERVAL 3 DAY) FROM PETRESCUE;
```

지원하는 INTERVAL 단위: `DAY`, `MONTH`, `YEAR`, `HOUR`, `MINUTE`, `SECOND`

### DATE_SUB — 날짜 빼기

```sql
-- 구조일로부터 1주 전 날짜
SELECT DATE_SUB(RESCUE_DATE, INTERVAL 1 WEEK) FROM PETRESCUE;
```

### 날짜 차이 계산

```sql
-- 각 구조일로부터 오늘까지 경과 일수 (결과: 연-월-일 형식)
SELECT CURRENT_DATE - RESCUE_DATE FROM PETRESCUE;

-- 정확한 일수 차이 (MySQL)
SELECT DATEDIFF(CURRENT_DATE, RESCUE_DATE) FROM PETRESCUE;
```

---

## 특수 레지스터 (Special Registers)

```sql
SELECT CURRENT_DATE;   -- 오늘 날짜
SELECT CURRENT_TIME;   -- 현재 시각
SELECT NOW();          -- 현재 날짜 + 시각 (MySQL)
```

---

## WHERE 절에서 날짜 함수 활용

```sql
-- 6월에 구조된 동물 목록
SELECT * FROM PETRESCUE WHERE MONTH(RESCUE_DATE) = 6;

-- 2018년 거래만 조회
SELECT * FROM PETRESCUE WHERE YEAR(RESCUE_DATE) = 2018;
```

---

## 핵심 요약

| 분류 | 함수 / 표현 | 설명 |
|------|------------|------|
| 추출 | `DAY()`, `MONTH()`, `YEAR()` | 날짜 부분 추출 |
| 추출 | `HOUR()`, `MINUTE()`, `SECOND()` | 시간 부분 추출 |
| 산술 | `DATE_ADD(date, INTERVAL n unit)` | 날짜 더하기 |
| 산술 | `DATE_SUB(date, INTERVAL n unit)` | 날짜 빼기 |
| 산술 | `DATEDIFF(date1, date2)` | 두 날짜 간 일수 차이 |
| 레지스터 | `CURRENT_DATE`, `CURRENT_TIME` | 현재 날짜·시각 |
