# Selecting Columns

## 개요
- **선택(selection)** 은 데이터의 특정 부분(행·열·값)을 고르는 것. 열 선택은 `df["열이름"]` 형태.
- 단일 열은 **시리즈(Series)**, 여러 열은 **데이터프레임**을 반환한다.

## 내용

### 단일 열 선택
- `languages = df["language at home"]` — 대괄호 안에 열 이름을 **문자열**로.
- 결과는 **시리즈(Series)** — 1차원 리스트 같은 구조(데이터프레임의 각 열이 시리즈).
- `.head()·.sample()` 로 확인, `len(languages)` = 응답 수(행마다 하나).
- `pd.unique(languages)` → 고유 언어(149개). 다양한 글로벌 설문 확인.

### 여러 열 선택
- 열 이름 **리스트**를 대괄호 안에: `columns = ["country of residence", "language at home"]`, `country_columns = df[columns]`.
- 결과는 **데이터프레임**(2차원). `.head()·.sample()` 로 확인.

### 흔한 오류 — KeyError
- 존재하지 않는 열 접근 시 **KeyError**. 대개 오타(예: "Country Of Residence" — Of의 O 대문자).
- **열 이름은 대소문자 구분** — 데이터프레임과 정확히 일치해야 함. LLM으로 디버깅.

## 예시

### 열 선택
```python
languages = df["language at home"]           # 단일 열 → Series
cols = ["country of residence", "language at home"]
country_cols = df[cols]                       # 여러 열 → DataFrame
pd.unique(languages)                          # 고유 값
```

## 요약
- **열 선택**은 `df["열이름"]`(단일 → Series) 또는 `df[리스트]`(여러 → DataFrame)로 한다.
- 열 이름은 **문자열·대소문자 구분**이며, 틀리면 **KeyError**(주로 오타)가 난다.
- 다음 강의는 카운트·합계·시각화다.
