# 05강 연습문제 — Python에서 SQL 사용하기

## 학습 목표

- Python DB-API의 connection, cursor 흐름을 직접 작성한다.
- `fetchall`, `fetchmany`로 결과를 가져오는 방법을 이해한다.
- Pandas `read_sql_query`와 `to_sql`을 사용해 SQL 결과를 DataFrame으로 읽고, CSV를 테이블로 저장한다.
- Jupyter에서 SQL Magic(`%sql`, `%%sql`)을 사용하는 방법을 이해한다.

## 사전 준비

```bash
pip install pandas ipython-sql
```

```python
# 필요한 모듈
import sqlite3
import pandas as pd
```

데이터 파일: `data/05_python_data.sql` (SQL 참고용)
또는 아래 Python 코드로 직접 생성합니다.

---

## 연습 문제

### 문제 1 — SQLite 연결 및 테이블 생성

**과제:** Python에서 SQLite 인메모리 데이터베이스에 연결하고,
MENU 테이블을 생성한 뒤 연결 객체를 확인하세요.

<details>
<summary>풀이 보기</summary>

**정답:**
```python
import sqlite3

# 인메모리 DB 연결 (파일 저장은 "menu.db" 처럼 파일명 지정)
con = sqlite3.connect(":memory:")
cur = con.cursor()

# 테이블 생성
cur.execute("""
    CREATE TABLE IF NOT EXISTS MENU (
        Item         TEXT,
        Category     TEXT,
        Serving_Size TEXT,
        Calories     INTEGER,
        Total_Fat    REAL,
        Sodium       INTEGER,
        Protein      REAL
    )
""")

con.commit()
print(type(con))   # <class 'sqlite3.Connection'>
print(type(cur))   # <class 'sqlite3.Cursor'>
```

**설명:**
- `sqlite3.connect(":memory:")`: 메모리 내 임시 DB. 프로세스가 종료되면 사라집니다.
- `sqlite3.connect("menu.db")`: 파일로 저장되는 영구 DB.
- `con.cursor()`: SQL을 실행할 Cursor 객체 생성.
- `con.commit()`: DDL 실행 후 변경 사항을 확정합니다.

</details>

---

### 문제 2 — CSV를 테이블로 저장 (to_sql)

**과제:** 아래 메뉴 데이터를 DataFrame으로 만들고,
SQLite 데이터베이스에 MENU 테이블로 저장하세요.

```python
menu_data = {
    "Item":         ["Big Mac", "McChicken", "McDouble", "Filet-O-Fish",
                     "Quarter Pounder", "McNuggets (10pc)", "Egg McMuffin",
                     "French Fries (M)", "Apple Pie", "Iced Coffee",
                     "Chocolate Shake", "Caesar Salad"],
    "Category":     ["Burgers", "Chicken", "Burgers", "Fish",
                     "Burgers", "Chicken", "Breakfast",
                     "Sides", "Desserts", "Beverages",
                     "Beverages", "Salads"],
    "Serving_Size": ["219g", "164g", "174g", "142g",
                     "198g", "162g", "135g",
                     "117g", "77g", "355mL",
                     "473mL", "225g"],
    "Calories":     [540, 400, 390, 390, 520, 440, 300,
                     340, 250, 140, 530, 90],
    "Total_Fat":    [28.0, 16.0, 19.0, 19.0, 26.0, 27.0, 13.0,
                     16.0, 11.0, 6.0, 13.0, 4.0],
    "Sodium":       [950, 700, 750, 580, 1100, 900, 760,
                     310, 170, 95, 290, 190],
    "Protein":      [25.0, 14.0, 23.0, 15.0, 30.0, 23.0, 17.0,
                     4.0, 2.0, 2.0, 12.0, 7.0]
}
```

<details>
<summary>풀이 보기</summary>

**정답:**
```python
import sqlite3
import pandas as pd

# 데이터 준비
menu_data = {
    "Item":         ["Big Mac", "McChicken", "McDouble", "Filet-O-Fish",
                     "Quarter Pounder", "McNuggets (10pc)", "Egg McMuffin",
                     "French Fries (M)", "Apple Pie", "Iced Coffee",
                     "Chocolate Shake", "Caesar Salad"],
    "Category":     ["Burgers", "Chicken", "Burgers", "Fish",
                     "Burgers", "Chicken", "Breakfast",
                     "Sides", "Desserts", "Beverages",
                     "Beverages", "Salads"],
    "Serving_Size": ["219g","164g","174g","142g","198g","162g","135g",
                     "117g","77g","355mL","473mL","225g"],
    "Calories":     [540,400,390,390,520,440,300,340,250,140,530,90],
    "Total_Fat":    [28.0,16.0,19.0,19.0,26.0,27.0,13.0,16.0,11.0,6.0,13.0,4.0],
    "Sodium":       [950,700,750,580,1100,900,760,310,170,95,290,190],
    "Protein":      [25.0,14.0,23.0,15.0,30.0,23.0,17.0,4.0,2.0,2.0,12.0,7.0]
}

df = pd.DataFrame(menu_data)

# SQLite 연결 후 테이블로 저장
con = sqlite3.connect(":memory:")
df.to_sql("MENU", con, if_exists="replace", index=False)

print(f"저장된 행 수: {len(df)}")
```

**설명:**
- `pd.DataFrame(dict)`: 딕셔너리로 DataFrame 생성.
- `df.to_sql("MENU", con, if_exists="replace", index=False)`: DataFrame을 SQL 테이블로 저장.
  - `if_exists="replace"`: 테이블이 이미 있으면 덮어씀.
  - `if_exists="append"`: 기존 테이블에 추가.
  - `index=False`: DataFrame의 행 번호(index) 컬럼을 제외.

</details>

---

### 문제 3 — DB-API로 SQL 실행: fetchall

**과제:** cursor를 사용해 MENU 테이블의 모든 행을 조회하고,
결과를 Python 리스트로 출력하세요.

<details>
<summary>풀이 보기</summary>

**정답:**
```python
cur = con.cursor()
cur.execute("SELECT Item, Category, Calories FROM MENU")

rows = cur.fetchall()

for row in rows:
    print(row)

print(f"\n총 {len(rows)}개 항목")
```

**설명:**
- `cur.execute("SQL문")`: SQL 실행. 결과는 cursor 내부에 저장됩니다.
- `cur.fetchall()`: 모든 결과를 튜플의 리스트로 반환합니다.
- 각 행은 `(값1, 값2, ...)` 형태의 튜플입니다.

**주의:** 테이블이 크면 `fetchall()`은 메모리에 모든 행을 올립니다. 대용량 데이터에서는 `fetchmany(n)`을 사용하거나 SQL에서 `LIMIT`로 먼저 줄이는 것이 좋습니다.

</details>

---

### 문제 4 — fetchmany로 일부만 가져오기

**과제:** MENU 테이블에서 처음 5행만 `fetchmany`로 가져오세요.

<details>
<summary>풀이 보기</summary>

**정답:**
```python
cur.execute("SELECT Item, Calories, Protein FROM MENU")

first_five = cur.fetchmany(5)

print("처음 5개 항목:")
for row in first_five:
    print(f"  {row[0]}: {row[1]} kcal, 단백질 {row[2]}g")
```

**더 나은 방법 — SQL에서 LIMIT 사용:**
```python
cur.execute("SELECT Item, Calories, Protein FROM MENU LIMIT 5")
rows = cur.fetchall()
```

**설명:**
`fetchmany(n)`: 한 번에 n개 행만 가져옵니다. 여러 번 호출하면 다음 n개를 가져옵니다.

하지만 데이터베이스는 데이터를 줄이는 데 특화되어 있으므로, 가능하면 SQL `LIMIT`로 먼저 줄이는 것이 더 효율적입니다. Python으로 가져온 뒤 `df.head(5)`를 쓰는 방식은 불필요한 데이터를 모두 가져온 뒤 자르는 것입니다.

</details>

---

### 문제 5 — Pandas로 SQL 결과 읽기 (read_sql_query)

**과제:** Pandas `read_sql_query`를 사용해 MENU 테이블의 모든 데이터를 DataFrame으로 읽고,
`head()`와 `shape`를 출력하세요.

<details>
<summary>풀이 보기</summary>

**정답:**
```python
df_menu = pd.read_sql_query("SELECT * FROM MENU", con)

print(df_menu.head())
print(f"\n크기: {df_menu.shape}")  # (12, 7)
print(df_menu.dtypes)
```

**설명:**
`pd.read_sql_query(sql, con)`: SQL 결과를 바로 DataFrame으로 반환합니다. cursor를 직접 다룰 필요가 없어 편리합니다.

반환된 DataFrame은 일반 Pandas DataFrame과 완전히 동일합니다. `head()`, `describe()`, `groupby()` 등을 그대로 사용할 수 있습니다.

</details>

---

### 문제 6 — SQL 조건 쿼리를 DataFrame으로

**과제:** Burgers 카테고리 메뉴 중 칼로리가 400 이상인 항목을
DataFrame으로 읽어 출력하세요.

<details>
<summary>풀이 보기</summary>

**정답:**
```python
query = """
    SELECT Item, Calories, Total_Fat, Protein
    FROM MENU
    WHERE Category = 'Burgers'
      AND Calories >= 400
    ORDER BY Calories DESC
"""

df_burgers = pd.read_sql_query(query, con)
print(df_burgers)
```

**설명:**
Python 문자열에서 SQL을 여러 줄로 작성할 때는 `"""..."""` 삼중따옴표를 사용하면 편합니다. SQL 안에 작은따옴표(`'Burgers'`)가 있으면 바깥을 큰따옴표로 감싸거나 반대로 하면 충돌을 피할 수 있습니다.

**예상 결과:**
| Item | Calories | Total_Fat | Protein |
|------|----------|-----------|---------|
| Big Mac | 540 | 28.0 | 25.0 |
| Quarter Pounder | 520 | 26.0 | 30.0 |
| McDouble | 390 | 19.0 | 23.0 |

</details>

---

### 문제 7 — 요약 통계: describe()

**과제:** MENU 테이블 전체를 DataFrame으로 읽은 뒤,
숫자 컬럼의 요약 통계를 출력하고 아래 질문에 답하세요.

1. Calories 컬럼의 평균은?
2. Sodium 컬럼의 최댓값은?
3. Protein 컬럼의 최솟값은?

<details>
<summary>풀이 보기</summary>

**정답:**
```python
df = pd.read_sql_query("SELECT * FROM MENU", con)

print(df.describe())

print(f"\n1. 평균 칼로리: {df['Calories'].mean():.1f}")
print(f"2. 최대 나트륨: {df['Sodium'].max()}")
print(f"3. 최소 단백질: {df['Protein'].min()}")
```

**예상 출력:**
```
1. 평균 칼로리: 367.5
2. 최대 나트륨: 1100
3. 최소 단백질: 2.0
```

**설명:**
`df.describe()`는 count, mean, std, min, 25%, 50%, 75%, max를 한 번에 보여줍니다. 데이터를 처음 받았을 때 이 명령 하나로 전반적인 분포를 파악할 수 있습니다.

</details>

---

### 문제 8 — SQL Magic (Jupyter Notebook)

**과제:** Jupyter Notebook에서 SQL Magic을 사용해
MENU 테이블에서 Beverages 카테고리를 조회하세요.

<details>
<summary>풀이 보기</summary>

**셀 1 — 설치 및 로드:**
```python
%load_ext sql
%sql sqlite:///menu.db
```

> 인메모리가 아닌 파일 DB를 사용해야 SQL Magic과 연결됩니다.
> 먼저 `menu.db` 파일로 데이터를 저장한 뒤 연결하세요.

**셀 2 — 데이터 준비 (파일 DB에 저장):**
```python
import sqlite3, pandas as pd

con_file = sqlite3.connect("menu.db")
df.to_sql("MENU", con_file, if_exists="replace", index=False)
con_file.close()
```

**셀 3 — Line Magic (한 줄 쿼리):**
```python
%sql SELECT Item, Category, Calories FROM MENU WHERE Category = 'Beverages'
```

**셀 4 — Cell Magic (여러 줄 쿼리):**
```python
%%sql
SELECT Category,
       COUNT(*) AS item_count,
       AVG(Calories) AS avg_calories
FROM MENU
GROUP BY Category
ORDER BY avg_calories DESC;
```

**설명:**
- `%sql`: 한 줄짜리 간단한 쿼리에 사용.
- `%%sql`: 셀 전체를 SQL로 실행. 복잡한 쿼리에 적합.
- SQL Magic 결과는 Notebook에서 직접 표로 보여줍니다.
- DataFrame으로 변환: `result = %sql SELECT ...` 후 `result.DataFrame()`

</details>

---

### 문제 9 — 최댓값 행 찾기

**과제:** MENU 테이블에서 나트륨(Sodium) 함량이 가장 높은 메뉴 항목을 찾으세요.
SQL 쿼리로 찾는 방법과 Pandas로 찾는 방법 모두 작성하세요.

<details>
<summary>풀이 보기</summary>

**방법 1 — SQL (서브쿼리):**
```python
query = """
    SELECT Item, Category, Sodium
    FROM MENU
    WHERE Sodium = (SELECT MAX(Sodium) FROM MENU)
"""
df_max = pd.read_sql_query(query, con)
print(df_max)
```

**방법 2 — Pandas:**
```python
df = pd.read_sql_query("SELECT * FROM MENU", con)
max_sodium_row = df.loc[df['Sodium'].idxmax()]
print(max_sodium_row[['Item', 'Category', 'Sodium']])
```

**설명:**
- SQL: 서브쿼리로 최댓값을 먼저 구한 뒤 `WHERE`로 필터링.
- Pandas: `df['Sodium'].idxmax()`로 최댓값을 가진 행의 인덱스를 구하고 `loc`으로 접근.

**예상 결과:** Quarter Pounder, Burgers, 1100mg

</details>

---

### 문제 10 — 통합 분석 워크플로우

**과제:** 아래 분석 시나리오를 Python 코드로 구현하세요.

1. MENU 데이터를 SQLite에 저장
2. SQL로 카테고리별 평균 칼로리와 최대 단백질 계산
3. 결과를 DataFrame으로 가져오기
4. 칼로리가 높은 순으로 정렬하여 출력

<details>
<summary>풀이 보기</summary>

**완전한 워크플로우:**
```python
import sqlite3
import pandas as pd

# 1. 데이터 준비 및 저장
menu_data = {
    "Item":      ["Big Mac","McChicken","McDouble","Filet-O-Fish",
                  "Quarter Pounder","McNuggets (10pc)","Egg McMuffin",
                  "French Fries (M)","Apple Pie","Iced Coffee",
                  "Chocolate Shake","Caesar Salad"],
    "Category":  ["Burgers","Chicken","Burgers","Fish",
                  "Burgers","Chicken","Breakfast",
                  "Sides","Desserts","Beverages","Beverages","Salads"],
    "Serving_Size": ["219g","164g","174g","142g","198g","162g","135g",
                     "117g","77g","355mL","473mL","225g"],
    "Calories":  [540,400,390,390,520,440,300,340,250,140,530,90],
    "Total_Fat": [28.0,16.0,19.0,19.0,26.0,27.0,13.0,16.0,11.0,6.0,13.0,4.0],
    "Sodium":    [950,700,750,580,1100,900,760,310,170,95,290,190],
    "Protein":   [25.0,14.0,23.0,15.0,30.0,23.0,17.0,4.0,2.0,2.0,12.0,7.0]
}

con = sqlite3.connect(":memory:")
df_raw = pd.DataFrame(menu_data)
df_raw.to_sql("MENU", con, if_exists="replace", index=False)

# 2. SQL 집계 쿼리
query = """
    SELECT
        Category,
        COUNT(*)              AS item_count,
        ROUND(AVG(Calories), 1) AS avg_calories,
        MAX(Protein)          AS max_protein
    FROM MENU
    GROUP BY Category
    ORDER BY avg_calories DESC
"""

# 3. DataFrame으로 읽기
df_summary = pd.read_sql_query(query, con)

# 4. 출력
print("=== 카테고리별 영양 정보 요약 ===")
print(df_summary.to_string(index=False))

con.close()
```

**예상 출력:**
```
=== 카테고리별 영양 정보 요약 ===
  Category  item_count  avg_calories  max_protein
   Burgers           3         483.3         30.0
   Chicken           2         420.0         23.0
 Beverages           2         335.0         12.0
     Sides           1         340.0          4.0
 Breakfast           1         300.0         17.0
      Fish           1         390.0         15.0
  Desserts           1         250.0          2.0
    Salads           1          90.0          7.0
```

</details>

---

## 핵심 정리

| 항목 | 코드 | 설명 |
|------|------|------|
| DB 연결 | `con = sqlite3.connect("파일.db")` | `:memory:` = 인메모리 |
| Cursor 생성 | `cur = con.cursor()` | SQL 실행 담당 |
| SQL 실행 | `cur.execute("SQL")` | |
| 전체 결과 | `cur.fetchall()` | 리스트 of 튜플 |
| 일부 결과 | `cur.fetchmany(n)` | n행씩 |
| DataFrame으로 읽기 | `pd.read_sql_query(sql, con)` | |
| DataFrame → 테이블 | `df.to_sql("TABLE", con, if_exists="replace")` | |
| SQL Magic 로드 | `%load_ext sql` | Jupyter 전용 |
| SQL Magic 연결 | `%sql sqlite:///파일.db` | |
| 한 줄 쿼리 | `%sql SELECT ...` | |
| 여러 줄 쿼리 | `%%sql` (셀 첫 줄) | |
