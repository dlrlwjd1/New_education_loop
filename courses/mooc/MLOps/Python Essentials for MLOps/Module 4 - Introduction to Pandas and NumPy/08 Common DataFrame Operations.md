# Common DataFrame Operations

## 개요
- 컬럼 선택, 조건으로 행 필터링(square bracket 조건과 `.query()` 메서드), 복합 조건, 문자열 부분 일치 검색(`str.contains`)까지 DataFrame을 다루는 실전 패턴을 다룬다.

## 내용

### 특정 컬럼 선택
- `df["notes"]`처럼 대괄호와 컬럼명으로 특정 컬럼(Series)을 가져올 수 있다.
- `df[["name", "rating"]]`처럼 리스트로 여러 컬럼을 함께 선택해 **부분 DataFrame**을 만들고 변수에 할당할 수도 있다 — 이후 이 부분집합을 별도로 내보내는 등 재활용 가능.

### 조건으로 행 필터링 — 대괄호 방식
- `df[df["rating"] > 96]`처럼 **대괄호 안에 조건식**을 넣으면 조건을 만족하는 행만 걸러진다.
- 조건식만 단독으로 실행(`df["rating"] > 96`)하면 각 행에 대해 True/False가 나열된 결과를 보여준다 — 데이터가 많으면 중간이 생략되어 표시(`...`)된다.

### `.query()` 메서드 — 더 선호되는 방식
- `df.query("rating > 93")`처럼 **문자열로 조건을 표현**하는 `.query()` 방식을 강사가 특히 좋아한다고 언급.
- **복합 조건**은 `&`(and)로 연결: `df.query("rating > 94 & region == 'Ribera del Duero, Spain'")`.

### 문자열 부분 일치 — `str.contains`
- 지역명 표기가 정확히 일치하지 않을 수 있을 때(띄어쓰기, 언더스코어 차이 등), **정확히 일치하는 대신 부분 문자열 포함 여부**로 필터링하고 싶다면 `str.contains`를 쓴다.
- `df.query("region.str.contains('robles') & rating > 95", na=False, engine="python")` 형태로 사용.
  - `na=False`: 결측치(NaN)가 있는 행에서 에러 대신 그냥 False로 처리하라는 의미.
  - `engine="python"`: 이 조건식을 Python 엔진으로 해석하라는 지시 — 문자열 메서드(`.str.contains`)처럼 Python 고유 연산을 쓸 때 필요.

## 예시
```python
notes = df["notes"]                       # 단일 컬럼(Series)
name_ratings = df[["name", "rating"]]      # 여러 컬럼 선택 (부분 DataFrame)

top_wines = name_ratings[name_ratings["rating"] > 96]   # 대괄호 조건 필터링

top_wines = df.query("rating > 93").head(10)             # query 메서드

top_wines = df.query(
    "rating > 94 & region == 'Ribera del Duero, Spain'"
).head(10)                                                 # 복합 조건

paso_robles = df.query(
    "region.str.contains('robles') & rating > 95",
    na=False, engine="python"
)
paso_robles.head()
```

## 요약
- 컬럼은 대괄호(`df["col"]`, `df[["a","b"]]`)로 선택하고, 행은 조건식(`df[조건]`)이나 더 읽기 쉬운 `.query("조건 문자열")`로 필터링한다.
- 복합 조건은 `&`로 연결하며, 부분 문자열 검색은 `str.contains`를 `na=False, engine="python"`과 함께 사용한다.
