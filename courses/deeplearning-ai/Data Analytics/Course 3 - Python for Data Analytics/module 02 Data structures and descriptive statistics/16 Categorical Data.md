# Categorical Data

## 개요
- **범주형(categorical) 데이터**(object 타입, 텍스트)는 수치와 다르게 분석 — 핵심 도구는 **.value_counts()** 와 **.plot(kind="bar")**.
- value_counts는 각 고유 값의 개수를 내림차순 시리즈로 반환한다.

## 내용

### value_counts()
- `df.dtypes` 로 범주형(object) 열 확인(gender, country, language 등).
- `counts_of_gender = df["gender"].value_counts()` → 각 값과 개수(예: 남 78%, 여 21%, 다양 1%).
- 결과는 **시리즈** — 인덱스=고유 값, 값=개수. `len()` 은 고유 값 개수(예: 언어 148개).

### 막대 그래프 — .plot(kind="bar")
- 수치는 `.hist()`, 범주형은 `counts.plot(kind="bar")` (명명 인수 kind로 종류 지정).
- LLM으로 꾸미기(plot 인자만). 명명 인수를 줄마다 쓰면 가독성↑.
- "column"은 유효하지 않음("column is not a valid plot type") — bar·line 등 사용(엄밀히는 세로 막대지만 bar라 부름).

### 상위 N개
- 언어 148개 전부 막대로 그리면 읽기 불가 → **.head()** 로 상위 5개만: `df["language at home"].value_counts().head().plot(kind="bar")`.
- head는 인수 없으면 5개. 슬라이스도 시리즈("케이크 한 조각도 케이크").

## 예시

### 범주형 분석
```python
counts = df["gender"].value_counts()   # 값별 개수 (Series)
counts.plot(kind="bar")                # 막대 그래프
df["language at home"].value_counts().head().plot(kind="bar")  # 상위 5개
```

## 요약
- 범주형 데이터는 **.value_counts()**(고유 값별 개수, 내림차순 시리즈)로 분석한다.
- **.plot(kind="bar")** 로 막대 그래프를 그리고, 값이 많으면 **.head()** 로 상위만 시각화한다.
- 다음 강의는 데이터 내 관계(**상관**)를 파고든다.
