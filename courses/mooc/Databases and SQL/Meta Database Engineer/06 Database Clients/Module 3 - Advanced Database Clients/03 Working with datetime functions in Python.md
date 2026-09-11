# Working with datetime functions in Python

## 개요

- Python datetime 라이브러리(now·date·time·timedelta)로 예약 시간을 일괄 조정하는 강의
- 앞 강의(02 Accessing MySQL functions using Python)와 Transcript 내용이 동일한 중복 영상 — 상세 정리는 02 노트 참조

## 내용

### 핵심 요점 (02 노트와 동일)

- datetime은 pip 없이 임포트하는 네이티브 클래스: `import datetime as dt`
- **datetime.now()**(현재 일시), **.date()/.time()**(날짜/시각 분리), **timedelta**(두 값의 차이·시간 이동)
- Little Lemon 실습: bookings 테이블을 SELECT → 각 행의 booking slot(4번째 값)에 `dt.timedelta(hours=1)`을 더해 새 슬롯 계산 → 예약 ID(1번째 값)와 함께 기존/새 슬롯 출력

## 요약

- datetime의 now/date/time/timedelta로 DB에서 가져온 시각 데이터를 계산·조정한다.
- 상세 예시 코드는 같은 모듈의 02 노트에 정리되어 있다.
