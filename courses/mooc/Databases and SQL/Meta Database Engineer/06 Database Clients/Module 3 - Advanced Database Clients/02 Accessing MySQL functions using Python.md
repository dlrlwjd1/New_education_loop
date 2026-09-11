# Accessing MySQL functions using Python

## 개요

- Python 네이티브 datetime 라이브러리의 함수들(now·date·time·timedelta)과 예약 시간 일괄 이동 실습

## 내용

### datetime 클래스

- **날짜·시간 변수를 형식화·변경하는 내장 함수를 가진 Python 클래스** — 네이티브라 pip 없이 임포트한다.
- 주요 함수:
  - **datetime.now()** — 오늘 날짜·현재 시각 (날짜는 연-월-일, 시각은 시:분:초)
  - **datetime.date / datetime.time** — 날짜만 / 시각만
  - **timedelta** — **두 값의 차이 계산** (예: 7일 뒤 날짜, 1시간 추가)
- 임포트 관례: `import datetime as dt` — 별칭으로 효율적으로 호출.

### 실습 — 예약을 한 시간씩 미루기 (Little Lemon)

1. `import datetime as dt`
2. bookings 테이블 전체를 SELECT해 execute
3. 컬럼 이름을 출력해 행 구조 확인 (booking ID가 1번째, booking slot이 4번째 값)
4. 루프에서 각 행의 booking slot에 **`dt.timedelta(hours=1)`을 더해** new_booking_slot 계산
5. 예약 ID와 기존/새 슬롯을 문자열로 출력

## 예시

```python
import datetime as dt

current_time = dt.datetime.now()
print(current_time.date())               # 오늘 날짜
print(current_time.time())               # 현재 시각

week = dt.timedelta(days=7)
print(current_time + week)               # 일주일 뒤

cursor.execute("SELECT * FROM bookings;")
print(cursor.column_names)
for row in cursor.fetchall():
    booking_id, booking_slot = row[0], row[3]
    new_slot = booking_slot + dt.timedelta(hours=1)
    print(f"Booking {booking_id}: {booking_slot} -> {new_slot}")
```

## 요약

- datetime은 pip 없이 쓰는 내장 클래스이며 now/date/time으로 현재 값을, timedelta로 시간 차이·이동을 다룬다.
- DB에서 가져온 시각 값에 timedelta를 더하는 패턴으로 예약 일괄 조정 같은 실무 작업을 수행한다.
