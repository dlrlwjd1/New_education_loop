# 05 Python에서 SQL 사용하기

## 영상 목표

- Python DB-API의 기본 흐름을 설명한다.
- Connection과 Cursor의 역할을 이해한다.
- Jupyter SQL Magic을 사용한 데이터베이스 접근 방식을 설명한다.
- Pandas로 SQL 결과를 읽고 간단한 분석을 수행한다.
- 실제 데이터셋을 데이터베이스에 불러오는 흐름을 이해한다.

권장 길이: 60-65분

---

## Slide 1. 오늘의 주제

### 슬라이드 문구

Python + SQL

- DB-API
- SQLite
- Cursor
- SQL Magic
- Pandas
- Real-world datasets

### 스크립트

이번 영상에서는 SQL을 Python과 연결합니다.

데이터 분석에서는 SQL만 따로 쓰는 것보다, Python에서 데이터베이스에 연결하고 쿼리 결과를 DataFrame으로 가져와 분석하는 흐름이 중요합니다.

이번 영상에서는 DB-API의 기본 구조, Jupyter Notebook의 SQL Magic, Pandas를 사용한 분석 흐름을 하나로 연결해 보겠습니다.

---

## Slide 2. Python에서 DB를 사용하는 이유

### 슬라이드 문구

왜 Python과 SQL을 함께 쓰는가

- DB에서 필요한 데이터만 조회
- Python으로 후처리와 분석
- Pandas DataFrame으로 변환
- 시각화와 통계 분석 연결

### 스크립트

SQL은 데이터베이스에서 필요한 데이터를 정확히 가져오는 데 강합니다.

Python은 가져온 데이터를 분석하고 시각화하고 모델링하는 데 강합니다.

따라서 실무 데이터 분석 흐름은 데이터베이스에서 SQL로 필요한 데이터를 가져오고, Python에서 Pandas와 시각화 라이브러리로 분석하는 방식이 많습니다.

---

## Slide 3. Python DB-API

### 슬라이드 문구

DB-API 기본 흐름

1. 모듈 import
2. 데이터베이스 연결
3. cursor 생성
4. SQL 실행
5. 결과 가져오기
6. 연결 종료

### 스크립트

Python DB-API는 Python에서 데이터베이스를 다루는 표준적인 인터페이스입니다.

기본 흐름은 간단합니다. 데이터베이스 모듈을 가져오고, 연결을 만들고, cursor를 생성합니다.

그 다음 SQL을 실행하고 결과를 가져온 뒤, 마지막에 연결을 닫습니다.

---

## Slide 4. Connection과 Cursor

### 슬라이드 문구

Connection Object
- 데이터베이스와의 연결
- commit / rollback / close

Cursor Object
- SQL 실행 담당
- 결과 fetch 담당

### 스크립트

DB-API에서 가장 중요한 두 객체는 connection과 cursor입니다.

Connection은 데이터베이스와의 연결을 나타냅니다. 트랜잭션을 commit하거나 rollback하고, 연결을 닫는 역할을 합니다.

Cursor는 SQL을 실행하고 결과를 가져오는 객체입니다. 실제로 `execute`, `fetchall`, `fetchmany` 같은 메서드를 사용합니다.

---

## Slide 5. SQLite 예제

### 슬라이드 문구

기본 코드

```python
import sqlite3

con = sqlite3.connect("example.db")
cur = con.cursor()

cur.execute("SELECT * FROM EMPLOYEE")
rows = cur.fetchall()

con.close()
```

### 스크립트

SQLite는 로컬 파일 기반 데이터베이스라 실습에 좋습니다.

`sqlite3.connect`로 데이터베이스 파일에 연결하고, `cursor()`로 cursor를 만듭니다.

`execute`로 SQL을 실행하고, `fetchall`로 결과를 가져옵니다. 마지막에는 연결을 닫습니다.

---

## Slide 6. fetchall과 fetchmany

### 슬라이드 문구

결과 가져오기

```python
cur.fetchall()
cur.fetchmany(5)
```

주의:
- 큰 테이블에서 `fetchall`은 부담이 될 수 있음
- SQL에서 `LIMIT`로 줄이는 것이 좋음

### 스크립트

`fetchall`은 결과 전체를 가져옵니다. 작은 테이블에서는 편하지만, 큰 테이블에서는 메모리 부담이 될 수 있습니다.

`fetchmany`는 지정한 수만큼 가져옵니다.

하지만 분석에서는 가능하면 SQL 단계에서 `LIMIT`나 조건을 사용해 필요한 데이터만 가져오는 것이 좋습니다.

---

## Slide 7. Pandas로 SQL 읽기

### 슬라이드 문구

SQL 결과를 DataFrame으로

```python
import pandas as pd

df = pd.read_sql_query(
    "SELECT * FROM MENU",
    con
)
```

### 스크립트

Pandas를 사용하면 SQL 결과를 바로 DataFrame으로 가져올 수 있습니다.

`pd.read_sql_query`에 SQL 문자열과 connection을 전달하면 결과가 DataFrame으로 반환됩니다.

이후에는 `head`, `describe`, `shape`, `groupby` 같은 Pandas 기능을 사용할 수 있습니다.

---

## Slide 8. CSV를 데이터베이스로 불러오기

### 슬라이드 문구

CSV -> DataFrame -> SQL Table

```python
df = pd.read_csv("menu.csv")
con = sqlite3.connect("menu.db")
df.to_sql("MENU", con, if_exists="replace", index=False)
```

### 스크립트

실제 데이터셋은 CSV로 주어질 때가 많습니다.

Pandas로 CSV를 읽고, SQLite connection을 만든 뒤, `to_sql`을 사용하면 DataFrame을 데이터베이스 테이블로 저장할 수 있습니다.

이렇게 하면 CSV 파일도 SQL 쿼리 대상으로 사용할 수 있습니다.

---

## Slide 9. SQL Magic

### 슬라이드 문구

Jupyter에서 SQL 실행

```python
%load_ext sql
%sql sqlite:///example.db
```

Line magic:
```python
%sql SELECT * FROM EMPLOYEE
```

Cell magic:
```python
%%sql
SELECT *
FROM EMPLOYEE;
```

### 스크립트

Jupyter Notebook에서는 SQL Magic을 사용해 SQL을 더 편하게 실행할 수 있습니다.

`%sql`은 한 줄짜리 line magic이고, `%%sql`은 셀 전체를 SQL로 실행하는 cell magic입니다.

짧은 쿼리는 line magic으로, 여러 줄 쿼리는 cell magic으로 쓰는 것이 편합니다.

---

## Slide 10. SQL Magic 사용 흐름

### 슬라이드 문구

기본 흐름

1. extension load
2. database 연결
3. line/cell magic으로 쿼리 실행
4. 결과 확인
5. 필요하면 DataFrame으로 변환

### 스크립트

SQL Magic의 흐름은 단순합니다.

먼저 extension을 로드하고 데이터베이스에 연결합니다. 그 다음 `%sql` 또는 `%%sql`로 쿼리를 실행합니다.

Notebook 안에서 SQL 결과를 바로 확인할 수 있기 때문에 학습과 탐색에 유용합니다.

---

## Slide 11. 실제 데이터셋 분석

### 슬라이드 문구

예시: 메뉴 영양 정보

분석 흐름:
1. CSV 읽기
2. SQLite 테이블 저장
3. SQL로 조회
4. Pandas로 요약 통계
5. 시각화

### 스크립트

강의에서는 맥도날드 메뉴 영양 정보 같은 실제 데이터셋을 예로 사용합니다.

CSV를 읽고 SQLite 테이블로 저장한 뒤, SQL로 필요한 데이터를 조회합니다.

그 다음 Pandas로 요약 통계를 보고, 나트륨 최댓값을 찾거나 단백질과 지방의 관계를 시각화합니다.

---

## Slide 12. LIMIT는 DB에서 먼저

### 슬라이드 문구

비효율적 방식

```python
df = pd.read_sql("SELECT * FROM MENU", con)
df.head()
```

더 나은 방식

```sql
SELECT *
FROM MENU
LIMIT 5;
```

### 스크립트

큰 테이블을 다룰 때는 전체 데이터를 가져온 뒤 `head()`를 보는 방식이 비효율적입니다.

가능하면 SQL에서 `LIMIT`를 사용해 데이터베이스가 처음부터 필요한 행만 반환하게 하는 것이 좋습니다.

데이터베이스는 데이터를 필터링하고 제한하는 데 특화되어 있으므로, DB에서 줄일 수 있는 것은 먼저 줄이는 습관이 좋습니다.

---

## Slide 13. 컬럼명과 따옴표 처리

### 슬라이드 문구

공백이 있는 컬럼명

```sql
SELECT "Serving Size"
FROM MENU;
```

Python 문자열 안의 SQL

```python
query = 'SELECT "Serving Size" FROM MENU'
```

### 스크립트

실제 데이터셋에서는 컬럼명에 공백이나 특수문자가 들어 있을 수 있습니다.

이 경우 SQL에서는 컬럼명을 쌍따옴표로 감싸야 할 수 있습니다.

Python 문자열 안에서 SQL을 작성할 때는 바깥 따옴표와 SQL 내부 따옴표가 충돌하지 않도록 주의해야 합니다.

---

## Slide 14. 실습 데모

### 슬라이드 문구

데모 흐름

1. SQLite 연결
2. CSV를 테이블로 저장
3. SQL로 5행 조회
4. Pandas DataFrame으로 읽기
5. `describe()`로 요약
6. 특정 최댓값 행 찾기

### 스크립트

이번 데모에서는 Python과 SQL을 함께 사용합니다.

먼저 SQLite 데이터베이스에 연결하고, CSV를 DataFrame으로 읽은 뒤 SQL 테이블로 저장합니다.

그 다음 SQL로 일부 행을 조회하고, Pandas로 전체 분석용 DataFrame을 가져옵니다. 마지막으로 요약 통계와 특정 컬럼의 최댓값을 찾는 흐름을 보여줍니다.

---

## Slide 15. 연습 문제

### 슬라이드 문구

직접 작성해보기

1. SQLite 데이터베이스 연결
2. CSV를 테이블로 저장
3. SQL로 처음 10행 조회
4. 특정 컬럼 평균 계산
5. Pandas로 결과를 DataFrame으로 읽기

### 스크립트

이번 연습은 Python 코드와 SQL을 함께 작성합니다.

단순히 SQL 문법만 보는 것이 아니라, 실제 분석 workflow처럼 데이터를 불러오고, 데이터베이스에 저장하고, 필요한 데이터를 조회합니다.

이 흐름이 익숙해지면 SQL과 Python을 함께 쓰는 실무 분석에 접근할 수 있습니다.

---

## Slide 16. 이번 영상 정리

### 슬라이드 문구

정리

- Python DB-API는 connection과 cursor 중심
- SQL 실행 후 fetch로 결과를 가져온다
- Pandas는 SQL 결과를 DataFrame으로 읽을 수 있다
- SQL Magic은 Notebook에서 SQL 실행을 편하게 해준다
- 실제 분석에서는 DB에서 먼저 줄이고 Python에서 분석한다

### 스크립트

이번 영상에서는 SQL을 Python과 연결했습니다.

데이터베이스에서 데이터를 가져오는 것과 Python에서 분석하는 것은 서로 경쟁하는 방식이 아니라 함께 쓰는 방식입니다.

다음 마지막 영상에서는 고급 SQL 개념을 다룹니다. View, Stored Procedure, ACID Transaction, 그리고 JOIN을 정리하면서 전체 코스를 마무리하겠습니다.

