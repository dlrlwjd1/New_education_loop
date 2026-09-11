# Creating and reading data in a MySQL database using Python

## 개요

- Python에서 INSERT(생성)와 SELECT(읽기)를 수행하는 절차 — SQL을 문자열로 만들어 execute, commit, fetchall

## 내용

### 생성(Create) — INSERT

- SQL 문을 평소처럼 작성 → **따옴표로 Python 문자열 인자로 변환** → 변수에 저장.
- 문자열은 커넥터를 통해 MySQL이 이해하는 형식으로 파싱된다.
- 절차: 커서 생성(cursor 메서드) → INSERT 쿼리를 execute에 전달 → **connection의 commit 메서드로 변경을 커밋** — 이때 새 고객 데이터가 실제로 테이블에 추가된다.

### 읽기(Read) — SELECT

- SELECT 쿼리도 Python 문자열 변수로 만들고 execute에 전달.
- 결과 수령: **cursor.fetchall()** → results 변수에 저장.
  - results는 **튜플의 리스트** — 각 튜플이 테이블에서 추출된 한 행이며, 전 레코드 조회 시 튜플 항목 순서는 테이블 컬럼 순서와 같다.
- **컬럼 이름**: `cursor.column_names`를 columns 변수에 담아 활용.
- 작업이 끝나면 **커서와 연결을 닫는 것이 좋은 습관.**

## 예시

```python
cursor = connection.cursor()

insert_query = """INSERT INTO bookings (customer_name, time)
VALUES ('Yusuf', '19:00');"""
cursor.execute(insert_query)
connection.commit()                # 커밋해야 실제 반영

read_data_query = """SELECT * FROM bookings;"""
cursor.execute(read_data_query)
results = cursor.fetchall()        # 튜플의 리스트
columns = cursor.column_names

for row in results:
    print(row)

cursor.close()
connection.close()
```

## 요약

- Python의 CRUD는 SQL을 문자열 변수로 만들어 execute에 넘기는 것이 기본이다.
- INSERT는 commit으로 확정하고, SELECT 결과는 fetchall()로 튜플 리스트로 받는다.
- column_names로 컬럼 이름을 얻고, 끝나면 커서·연결을 닫는다.
