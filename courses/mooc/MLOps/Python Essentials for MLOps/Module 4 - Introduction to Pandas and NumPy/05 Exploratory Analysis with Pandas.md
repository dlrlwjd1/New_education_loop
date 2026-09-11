# Exploratory Analysis with Pandas

## 개요
- 데이터를 로드한 뒤 가장 먼저 하게 되는 **탐색적 분석(exploratory analysis)** 작업들 — `.head()`, `.describe()`, `.info()`, 정렬(`sort_values`), 컬럼 삭제(`drop`), 그룹화(`groupby`) — 를 와인 평점 데이터셋으로 실습한다.

## 내용

### `.head(n)` — 상위 n개 행 확인
- 인자 없이 호출하면 기본으로 5개 행을 보여준다. `df.head(15)`처럼 숫자를 넘기면 원하는 개수만큼 볼 수 있다.

### `.describe()` — 통계 요약
- 데이터에 대한 유용한 통계 수치를 보여준다 — 예: 결측치가 많은 컬럼(`grape` 컬럼이 거의 비어있음), 평점(`rating`)의 최댓값/최솟값/평균/75퍼센타일 등.
- 이 데이터셋에서는 평점 최댓값이 99(100점 만점 와인 없음), 평균 91, 상위 75%가 92점 정도임을 바로 파악할 수 있다.

### `.info()` — 구조 정보
- `.describe()`와는 다른 종류의 정보를 준다 — 전체 항목 수(예: 32,000개), 인덱스 범위, 컬럼 개수, **각 컬럼의 타입**(float 2개, 나머지는 object), 메모리 사용량(예: 1.8MB)을 확인할 수 있다.
- 인덱스 범위를 통해 **인덱스가 꼬였는지(문제가 있는지)**도 바로 확인 가능.

### `.sort_values()` — 정렬
- `df.sort_values("rating", ascending=False)`처럼 특정 컬럼 기준으로 정렬한다. `ascending=False`는 내림차순(가장 높은 값부터).

### `.drop()` — 컬럼 삭제
- `NaN`(Not a Number, 결측치)이 많아 쓸모없는 컬럼(`grape`)을 삭제할 때 사용: `df.drop("grape", axis=1, inplace=True)`.
- `axis=1`은 "컬럼 기준으로 삭제"라는 뜻, `inplace=True`는 **새 DataFrame을 만들지 않고 원본을 그대로 수정**하라는 뜻.

### `.groupby()` — 그룹화 집계
- `df.groupby("region")["rating"].mean()`처럼 특정 컬럼(지역)으로 그룹화한 뒤 다른 컬럼(평점)의 평균 등을 구할 수 있다.
- 예: 이탈리아 와인의 평균 평점은 90에 가깝고, 나파 밸리(93)·파소 로블스(92) 같은 지역은 특히 평점이 높게 나타남 — 유명 와인 산지임을 데이터로 확인 가능.

## 예시
```python
import pandas as pd

df = pd.read_csv(url, index_col=0)

df.head(15)                 # 상위 15개 행
df.describe()                # 통계 요약 (결측치, min/max/mean 등)
df.info()                    # 구조 정보 (행 수, 컬럼 타입, 메모리)

df.sort_values("rating", ascending=False)   # 평점 내림차순 정렬

df.drop("grape", axis=1, inplace=True)      # 결측치 많은 컬럼 삭제

df.groupby("region")["rating"].mean()        # 지역별 평균 평점
```

## 요약
- 탐색적 분석의 기본 도구: `.head()`(미리보기), `.describe()`(통계 요약), `.info()`(구조/타입/메모리).
- `.sort_values()`로 정렬, `.drop(axis=1, inplace=True)`로 불필요한 컬럼 제거, `.groupby()`로 카테고리별 집계까지가 이 레슨에서 다룬 기본 워크플로.
