# Filtering and sorting data in MySQL using Python

## 개요

- WHERE + 비교 연산자 필터링과 ORDER BY 정렬을 Python 쿼리 문자열로 결합하는 실습

## 내용

### 기법 복습

- **WHERE 절** — 조건을 만족하는 레코드만 필터링. 등호(=)만으로 부족하면 **비교 연산자(>=)** 로 범위를 정확히 지정한다.
- **ORDER BY 절** — SELECT에 추가하는 선택 절, ASC/DESC로 정렬.

### Python으로 결합하기 (Little Lemon 과제)

- 요구: 최종 청구액이 **$40 이상**인 예약 레코드를 **청구액 오름차순**으로.
- 절차: SELECT 쿼리를 Python 문자열 변수(my_sql_query)로 작성 → 커넥터로 연결 → cursor() → execute → **fetchall()로 results 변수에 수령** — 결과는 튜플의 리스트로 대시보드에 표시 가능.

## 예시

```python
my_sql_query = """SELECT booking_id, bill_amount
FROM orders
WHERE bill_amount >= 40
ORDER BY bill_amount ASC;"""

cursor = connection.cursor()
cursor.execute(my_sql_query)
results = cursor.fetchall()      # 튜플의 리스트
for row in results:
    print(row)
```

## 요약

- 필터링(WHERE + 비교 연산자)과 정렬(ORDER BY)은 SQL과 동일하게 Python 문자열 쿼리 안에서 결합한다.
- execute → fetchall 흐름으로 조건에 맞는 결과 리스트를 받는다.
