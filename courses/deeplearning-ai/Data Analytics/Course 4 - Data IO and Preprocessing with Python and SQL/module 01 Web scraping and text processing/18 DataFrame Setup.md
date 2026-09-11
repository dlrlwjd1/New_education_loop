# DataFrame Setup

## 개요
- 스크래핑한 데이터프레임을 정리 — **열 이름 지정**, **.str.replace/.str.split** 로 값 정리, 날짜 캐스팅.
- **.str.split의 n 인수**로 분할 횟수를 제어한다.

## 내용

### 열 이름
- `df.columns = ["date", "title", "description"]`.

### 값 정리
- 제목의 불필요한 마침표 제거: `df["title"].str.replace(".", "")`.
- 날짜 범위(예 "January 3, 4")를 시작일만: `df["date"].str.split(",").str[0]`.
- 설명은 첫 마침표 뒤부터: 문장이 여럿이라 마침표 다수 → **n=1** 로 한 번만 분할: `df["description"].str.split(".", n=1).str[1]` (두 번째 부분).

### 날짜 캐스팅
- 스크래핑 날짜는 텍스트(dtypes 확인) → 헬퍼 함수 `convert_datetime_column(df, "date", 2030)` (데이터프레임·열·연도).

### 분석
- 월별 이벤트 수: `df["date"].dt.month`, `.value_counts().sort_index()` → 12·11월 최다(마케팅 적기). `.plot(kind="bar")` 시각화.

## 예시

### 데이터프레임 정리
```python
df.columns = ["date", "title", "description"]
df["title"] = df["title"].str.replace(".", "")
df["date"] = df["date"].str.split(",").str[0]
df["description"] = df["description"].str.split(".", n=1).str[1]  # n=분할 횟수
df["date"].dt.month.value_counts().sort_index().plot(kind="bar")
```

## 요약
- **df.columns** 로 열 이름을, **.str.replace/.str.split(n=)** 로 값을 정리하고, 날짜를 datetime으로 캐스팅한다.
- **.str.split의 n** 은 분할 횟수를 정하고, 캐스팅 후 시계열로 분석(월별 집계) 가능하다.
- 다음 강의는 유연한 텍스트 패턴 검색(**정규 표현식**)이다.
