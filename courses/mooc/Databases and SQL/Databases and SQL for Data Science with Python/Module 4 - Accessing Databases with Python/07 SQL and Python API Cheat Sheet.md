# SQL and Python API Cheat Sheet

이 치트시트는 SQLite, Pandas, Seaborn, SQL, IBM Db2 관련 명령어와 함수의 문법, 설명, 예시를 빠르게 복습하기 위한 자료입니다.

---

## SQLite

### `sqlite3.connect()`

SQLite 데이터베이스에 연결합니다. 지정한 데이터베이스 파일이 없으면 새로 생성합니다.

```python
# 문법
sqlite3.connect("database_name.db")

# 예시
import sqlite3

con = sqlite3.connect("INSTRUCTOR.db")
```

`INSTRUCTOR.db`는 현재 작업 디렉터리에 생성되거나, 이미 존재한다면 해당 파일에 연결됩니다.

---

### `con.cursor()`

SQL 문을 실행하고 쿼리 결과를 가져오기 위한 커서 객체를 생성합니다.

```python
# 문법
con.cursor()

# 예시
cursor_obj = con.cursor()
```

커서는 SQL 실행 결과를 순회하고 가져오는 데 사용됩니다.

---

### `cursor_obj.execute()`

SQL 명령을 실행합니다. `SELECT`, `INSERT`, `CREATE TABLE` 등 다양한 SQL 문을 실행할 수 있습니다.

```python
# 문법
cursor_obj.execute("SQL statement")

# 예시
cursor_obj.execute(
    "INSERT INTO INSTRUCTOR VALUES (1, 'Rav', 'Ahuja', 'TORONTO', 'CA')"
)
```

`SELECT` 문을 실행한 경우 결과는 커서에 저장되며, `fetchall()`이나 `fetchmany()`로 가져올 수 있습니다.

---

### `cursor_obj.fetchall()`

쿼리 결과의 모든 행을 가져옵니다.

반환값은 일반적으로 튜플(tuple)의 리스트입니다.

```python
# 문법
cursor_obj.fetchall()

# 예시
statement = "SELECT * FROM INSTRUCTOR"
cursor_obj.execute(statement)

output_all = cursor_obj.fetchall()

for row_all in output_all:
    print(row_all)
```

---

### `cursor_obj.fetchmany()`

쿼리 결과에서 지정한 개수만큼의 행을 가져옵니다.

```python
# 문법
cursor_obj.fetchmany(number_of_rows)

# 예시
statement = "SELECT * FROM INSTRUCTOR"
cursor_obj.execute(statement)

output_many = cursor_obj.fetchmany(2)

for row_many in output_many:
    print(row_many)
```

`fetchmany(2)`는 결과 집합에서 다음 2개 행을 가져옵니다.

---

### `con.close()`

SQLite 데이터베이스 연결을 닫습니다.

```python
# 문법
con.close()

# 예시
con.close()
```

작업이 끝나면 연결을 닫아 리소스 누수를 방지해야 합니다.

---

## Pandas

### `pd.read_csv()`

CSV 파일을 읽어 Pandas DataFrame으로 불러옵니다.

```python
# 문법
df = pd.read_csv("file_path.csv")

# 예시
import pandas as pd

df = pd.read_csv("https://data.cityofchicago.org/resource/jcxq-k9xf.csv")
```

---

### `pd.read_sql_query()`

SQL 쿼리를 실행하고 결과를 Pandas DataFrame으로 반환합니다.

```python
# 문법
df = pd.read_sql_query("SQL query", con)

# 예시
df = pd.read_sql_query("SELECT * FROM instructor;", con)
```

`read_sql_query()`는 SQLite뿐 아니라 여러 SQL 데이터베이스 연결 객체와 함께 사용할 수 있습니다.

---

### `pd.read_sql()`

SQL 쿼리 또는 테이블을 읽어 Pandas DataFrame으로 반환합니다.

```python
# 문법
df = pd.read_sql(sql_query, con)

# 예시
select_query = "SELECT * FROM INSTRUCTOR"
df = pd.read_sql(select_query, con)
```

---

### `df.to_sql()`

DataFrame의 내용을 SQL 데이터베이스 테이블로 저장합니다.

```python
# 문법
df.to_sql("table_name", con, if_exists="replace", index=False)

# 예시
import pandas as pd

df = pd.read_csv("https://data.cityofchicago.org/resource/jcxq-k9xf.csv")
df.to_sql(
    "chicago_socioeconomic_data",
    con,
    if_exists="replace",
    index=False,
    method="multi"
)
```

| 인자 | 설명 |
|------|------|
| `table_name` | 저장할 SQL 테이블 이름 |
| `con` | 데이터베이스 연결 객체 |
| `if_exists="replace"` | 같은 이름의 테이블이 있으면 대체 |
| `index=False` | DataFrame 인덱스를 별도 컬럼으로 저장하지 않음 |
| `method="multi"` | 여러 행을 한 번에 삽입 |

---

### `df.shape`

DataFrame 또는 Series의 크기를 반환합니다.

```python
# 문법
dataframe.shape

# 예시
df.shape
```

반환값은 `(행 수, 열 수)` 형태의 튜플입니다.

```text
(100, 5)
```

---

## SQL

### `CREATE TABLE`

데이터베이스에 새 테이블을 생성합니다.

```sql
-- 문법
CREATE TABLE table_name (
    column1 datatype constraints,
    column2 datatype constraints,
    ...
);

-- 예시
CREATE TABLE INTERNATIONAL_STUDENT_TEST_SCORES (
    country VARCHAR(50),
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    test_score INT
);
```

`CREATE TABLE`은 테이블 이름, 컬럼 구조, 데이터 타입, 제약 조건을 정의합니다.

---

## Seaborn

### `seaborn.barplot()`

막대 그래프를 생성합니다. 범주형 변수와 수치형 변수의 관계를 표시할 때 자주 사용합니다.

```python
# 문법
seaborn.barplot(x="x_axis_variable", y="y_axis_variable", data=dataframe)

# 예시
import seaborn

seaborn.barplot(x="Test_Score", y="Frequency", data=dataframe)
```

기본적으로 각 범주에 대한 평균값과 신뢰구간을 표시할 수 있습니다.

---

## IBM Db2

### `ibm_db.connect()`

IBM Db2 또는 IBM Db2 Warehouse 데이터베이스에 연결합니다.

```python
# 문법
conn = ibm_db.connect(
    "DATABASE=dbname;HOST=hostname;PORT=port;UID=username;PWD=password;",
    "",
    ""
)

# 예시
import ibm_db

conn = ibm_db.connect(
    "DATABASE=mydb;HOST=example.com;PORT=50000;UID=myuser;PWD=mypassword;",
    "",
    ""
)
```

---

### `ibm_db.server_info()`

연결된 IBM Db2 서버 정보를 가져옵니다.

```python
# 문법
ibm_db.server_info(conn)

# 예시
server = ibm_db.server_info(conn)

print("DBMS_NAME: ", server.DBMS_NAME)
print("DBMS_VER:  ", server.DBMS_VER)
print("DB_NAME:   ", server.DB_NAME)
```

---

### `ibm_db.exec_immediate()`

SQL 문을 즉시 실행합니다. 별도의 prepare/bind 과정 없이 실행할 수 있는 SQL 문에 사용합니다.

```python
# 문법
sql_statement = "SQL statement goes here"
stmt = ibm_db.exec_immediate(conn, sql_statement)

# 예시
sql_statement = "SELECT * FROM INSTRUCTOR"
stmt = ibm_db.exec_immediate(conn, sql_statement)
```

DDL이나 간단한 쿼리를 즉시 실행할 때 유용합니다.

---

### `ibm_db.close()`

IBM Db2 데이터베이스 연결을 닫습니다.

```python
# 문법
ibm_db.close(conn)

# 예시
ibm_db.close(conn)
```

원문 예시에는 `con.close()`가 제시되어 있지만, `ibm_db` 라이브러리에서는 일반적으로 `ibm_db.close(conn)` 형태를 사용합니다.

---

## 전체 흐름 예시: SQLite + Pandas

```python
import sqlite3
import pandas as pd

# 1. SQLite 데이터베이스 연결
con = sqlite3.connect("INSTRUCTOR.db")
cursor_obj = con.cursor()

# 2. 테이블 생성
cursor_obj.execute("""
CREATE TABLE IF NOT EXISTS INSTRUCTOR (
    ID INTEGER,
    FNAME VARCHAR(20),
    LNAME VARCHAR(20),
    CITY VARCHAR(20),
    CCODE CHAR(2)
)
""")

# 3. 데이터 삽입
cursor_obj.execute(
    "INSERT INTO INSTRUCTOR VALUES (1, 'Rav', 'Ahuja', 'TORONTO', 'CA')"
)
con.commit()

# 4. 쿼리 결과를 DataFrame으로 읽기
df = pd.read_sql("SELECT * FROM INSTRUCTOR", con)

# 5. 크기 확인
print(df.shape)

# 6. 연결 종료
con.close()
```

---

## 한눈에 보기

| 구분 | 명령어/함수 | 용도 |
|------|-------------|------|
| SQLite | `sqlite3.connect()` | 데이터베이스 연결 또는 생성 |
| SQLite | `con.cursor()` | 커서 객체 생성 |
| SQLite | `cursor_obj.execute()` | SQL 문 실행 |
| SQLite | `cursor_obj.fetchall()` | 모든 결과 행 가져오기 |
| SQLite | `cursor_obj.fetchmany()` | 지정한 개수만큼 결과 행 가져오기 |
| SQLite | `con.close()` | 데이터베이스 연결 종료 |
| Pandas | `pd.read_csv()` | CSV 파일 읽기 |
| Pandas | `pd.read_sql_query()` | SQL 쿼리 결과를 DataFrame으로 읽기 |
| Pandas | `pd.read_sql()` | SQL 쿼리 또는 테이블을 DataFrame으로 읽기 |
| Pandas | `df.to_sql()` | DataFrame을 SQL 테이블로 저장 |
| Pandas | `df.shape` | DataFrame의 행/열 수 확인 |
| SQL | `CREATE TABLE` | 새 테이블 생성 |
| Seaborn | `seaborn.barplot()` | 막대 그래프 생성 |
| Db2 | `ibm_db.connect()` | Db2 연결 |
| Db2 | `ibm_db.server_info()` | Db2 서버 정보 확인 |
| Db2 | `ibm_db.exec_immediate()` | SQL 문 즉시 실행 |
| Db2 | `ibm_db.close()` | Db2 연결 종료 |
