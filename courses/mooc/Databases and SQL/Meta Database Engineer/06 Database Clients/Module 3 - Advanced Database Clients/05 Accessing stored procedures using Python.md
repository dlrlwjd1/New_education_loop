# Accessing stored procedures using Python

## 개요

- Python에서 저장 프로시저를 생성(execute)하고 호출(callproc)해 결과를 받는(stored_results → fetchall) 전체 흐름

## 내용

### 프로시저 생성 (Python 문자열)

- CREATE PROCEDURE + BEGIN...END 블록의 로직을 하나의 Python 문자열로 작성한다.
- **Python에서는 DELIMITER 변경이 필요 없다** — MySQL을 직접 다룰 때는 전체 프로시저를 단일 문으로 실행하기 위해 구분자를 바꿔야 하지만, Python은 프로시저를 단일 문자열로 넘기고 커서의 execute가 이를 데이터베이스에 저장한다.
- 예제 로직: bookings와 orders를 booking ID로 INNER JOIN, CONCAT으로 고객명 결합, $50 이상 소비 고객만, 청구액 내림차순.

### 호출과 결과 수령

1. `cursor.callproc("프로시저이름")` — 프로시저 호출(invoke)
2. `results = next(cursor.stored_results())` — **next 내장 함수**가 stored results 반복자에서 다음 항목을 반환, 전체 결과 집합이 results에 버퍼링됨
3. `dataset = results.fetchall()` — 튜플의 리스트(행마다 하나)
4. 인덱싱하거나 for 루프로 출력

## 예시

```python
stored_procedure_query = """
CREATE PROCEDURE GetCustomersAndBillAmount()
BEGIN
  SELECT bookings.booking_id,
         CONCAT(bookings.guest_first_name, bookings.guest_last_name) AS customer_name,
         orders.bill_amount
  FROM bookings
  INNER JOIN orders ON bookings.booking_id = orders.booking_id
  WHERE bill_amount >= 50
  ORDER BY bill_amount DESC;
END
"""
cursor.execute(stored_procedure_query)     # 프로시저 저장

cursor.callproc("GetCustomersAndBillAmount")
results = next(cursor.stored_results())
dataset = results.fetchall()
for data in dataset:
    print(data)
```

## 요약

- 프로시저 생성은 문자열 execute로(구분자 변경 불필요), 호출은 callproc으로 한다.
- 결과는 next(cursor.stored_results())로 버퍼링한 뒤 fetchall로 꺼낸다.
- 반복 JOIN을 프로시저 하나로 대체해 시간을 절약하는 것이 실무 포인트다.
