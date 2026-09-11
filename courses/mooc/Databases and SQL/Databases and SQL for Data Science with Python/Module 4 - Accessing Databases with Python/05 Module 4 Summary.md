# Module 4 Summary

## 학습 완료 요약

이번 레슨을 마치면 Python, Jupyter Notebook, SQL Magic, DB-API, Pandas를 사용해 데이터베이스에 접근하고 데이터를 분석하는 기본 흐름을 이해할 수 있습니다.

---

## 핵심 개념 정리

| 개념 | 설명 |
|------|------|
| Magic Command | Jupyter Notebook에서 특수 기능을 제공하는 명령어 |
| Line Magic | `%`로 시작하며 한 줄 입력에 적용 |
| Cell Magic | `%%`로 시작하며 여러 줄 또는 셀 전체에 적용 |
| DB-API | Python에서 데이터베이스에 연결하고 SQL을 실행하기 위한 표준 API |
| Connection Object | 데이터베이스 연결과 트랜잭션을 관리하는 객체 |
| Cursor Object | SQL을 실행하고 결과 레코드를 순회하는 객체 |
| Pandas | 데이터 읽기, 처리, 통계 분석에 사용하는 Python 라이브러리 |
| SQLite3 | Python에서 쉽게 사용할 수 있는 경량 관계형 데이터베이스 |
| Seaborn | 통계적 데이터 시각화에 사용하는 Python 라이브러리 |

> 원문에는 "DB APIs are commands prefixed with two %% characters"라는 문장이 있지만, 이는 **Cell Magic** 설명에 해당합니다. DB-API는 `%` 또는 `%%` 명령어가 아니라 Python에서 데이터베이스 연결과 쿼리 실행을 위한 API입니다.

---

## Magic Command

Magic command는 Jupyter Notebook에서 특별한 기능을 제공하는 명령어입니다.

예를 들어 현재 디렉터리 확인, 변수 목록 조회, 실행 시간 측정, SQL 실행 등을 할 수 있습니다.

| Magic 유형 | 접두사 | 적용 범위 | 예시 |
|------------|--------|-----------|------|
| Line Magic | `%` | 한 줄 | `%pwd`, `%ls`, `%timeit` |
| Cell Magic | `%%` | 셀 전체 | `%%timeit`, `%%sql`, `%%bash` |

---

## Python DB-API

Python DB-API의 핵심 개념은 크게 두 가지입니다.

| 객체 | 역할 |
|------|------|
| Connection Object | 데이터베이스 연결 생성, 트랜잭션 관리, 연결 종료 |
| Cursor Object | SQL 실행, 쿼리 결과 가져오기, 레코드 순회 |

커서(cursor)는 데이터베이스 레코드를 순회할 수 있게 해주는 제어 구조입니다.

기본 흐름은 다음과 같습니다.

```python
import sqlite3

conn = sqlite3.connect("example.db")
cursor = conn.cursor()

cursor.execute("SELECT * FROM table_name")
rows = cursor.fetchall()

conn.close()
```

---

## Pandas로 데이터 읽기

Pandas는 데이터 분석에 자주 사용하는 수학 및 통계 메서드를 제공합니다.

CSV 파일을 읽을 때는 `pandas.read_csv()` 함수를 사용합니다.

```python
import pandas as pd

df = pd.read_csv("data.csv")
```

---

## SQLite3 데이터베이스 연결

SQLite 데이터베이스에 연결할 때는 `sqlite3.connect()` 함수를 사용합니다.

```python
import sqlite3

conn = sqlite3.connect("database.db")
```

데이터베이스 파일이 없으면 새 파일이 생성됩니다.

---

## Pandas로 SQL 결과 가져오기

Pandas에서 데이터베이스 테이블의 데이터를 가져오려면 `read_sql()`을 사용합니다.

`read_sql()`에는 SQL `SELECT` 쿼리와 데이터베이스 연결 객체를 전달합니다.

```python
query = "SELECT * FROM employees"
df = pd.read_sql(query, conn)
```

이렇게 하면 SQL 쿼리 결과가 Pandas DataFrame으로 반환되어 바로 분석할 수 있습니다.

---

## Seaborn으로 시각화하기

Seaborn의 `swarmplot()` 메서드는 범주형 산점도(categorical scatterplot)를 만들 때 사용합니다.

```python
import seaborn as sns

sns.swarmplot(x="Category", y="Sodium", data=df)
```

이 그래프는 범주별 데이터 분포와 이상치를 확인할 때 유용합니다.

---

## 전체 작업 흐름

Python으로 데이터베이스 데이터를 분석하는 대표적인 흐름은 다음과 같습니다.

1. CSV 파일을 Pandas DataFrame으로 읽기
2. SQLite 데이터베이스에 연결
3. DataFrame을 데이터베이스 테이블로 저장
4. SQL 쿼리로 필요한 데이터 조회
5. `read_sql()`로 쿼리 결과를 DataFrame으로 불러오기
6. Pandas로 통계 분석 수행
7. Seaborn으로 데이터 시각화

```python
import pandas as pd
import sqlite3
import seaborn as sns

df = pd.read_csv("data.csv")

conn = sqlite3.connect("database.db")
df.to_sql("table_name", conn, if_exists="replace", index=False)

result = pd.read_sql("SELECT * FROM table_name", conn)

sns.swarmplot(x="Category", y="Value", data=result)

conn.close()
```

---

## 핵심 요약

- Magic command는 Jupyter Notebook에서 특수 기능을 제공하는 명령어입니다.
- Cell Magic은 `%%`로 시작하며 여러 줄 또는 셀 전체에 적용됩니다.
- DB-API의 핵심 개념은 Connection Object와 Cursor Object입니다.
- Cursor는 데이터베이스 레코드를 순회하고 쿼리 결과를 가져오는 데 사용됩니다.
- `pd.read_csv()`는 CSV 파일을 DataFrame으로 읽습니다.
- `sqlite3.connect()`는 SQLite 데이터베이스에 연결합니다.
- `pd.read_sql()`은 SQL `SELECT` 쿼리 결과를 DataFrame으로 불러옵니다.
- `sns.swarmplot()`은 범주형 산점도를 만드는 데 사용됩니다.
