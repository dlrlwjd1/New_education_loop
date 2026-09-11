# Updating and deleting records in a MySQL database using Python

## 개요

- Python에서 UPDATE·DELETE 문을 실행하고 commit으로 확정하는 절차 (Little Lemon bookings 테이블)

## 내용

### 갱신(Update)

- WHERE 절이 든 UPDATE 문을 **Python 문자열로 작성**해 변수(update_bookings)에 담고, 구체적 값만 바꿔 재사용한다.
- execute로 실행 → **connection.commit()으로 커밋** → 노트북 출력으로 반영 확인 (예: booking ID 6번 Diana Pinto를 10번 테이블로 이동).

### 삭제(Delete)

- 특정 손님 레코드를 지우는 DELETE 문에 **WHERE booking_id 조건** 사용.
- execute → commit → 확인 (예: booking ID 4번 Marcos Romero의 데이터가 사라짐).
- 응용: WHERE 절을 바꿔 **직원 ID가 NULL인 값**을 검사해 삭제 대상 예약을 지정할 수도 있다.

## 예시

```python
update_bookings = """UPDATE bookings
SET table_no = 10
WHERE booking_id = 6;"""
cursor.execute(update_bookings)
connection.commit()

delete_booking = """DELETE FROM bookings
WHERE booking_id = 4;"""
cursor.execute(delete_booking)
connection.commit()
```

## 요약

- UPDATE·DELETE도 SQL을 문자열 변수로 만들어 execute하고 반드시 commit으로 확정한다.
- WHERE 절이 갱신·삭제 대상 레코드를 특정하며, 조건을 바꿔 다양한 시나리오(취소, NULL 검사)에 재사용한다.
