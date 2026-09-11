# Visualizing Data with Pandas

## 개요
- Pandas의 내장 플로팅 기능(`matplotlib` 기반)으로 데이터를 시각화하는 법을 다룬다. 결측치(NaN) 정리가 왜 선행되어야 하는지, 숫자형 데이터만 플롯 가능하다는 제약, 히스토그램과 산점도(scatter plot)의 기본 사용법을 실습으로 보여준다.

## 내용

### 사전 준비 — matplotlib 설치와 결측치 정리
- Pandas 시각화는 대체로 **`matplotlib`이 설치되어 있어야** 한다: `pip install matplotlib`.
- 시각화 전에 **결측치(NaN, Not a Number)가 있으면 문제가 생길 수 있다** — `df.dropna(inplace=True)`로 NaN이 있는 행을 제거해야 한다.
  - `inplace=True`를 쓰면 변수에 재할당할 필요가 없다 (반대로 `dropna()`만 쓰면 결과를 다시 할당해야 함).

### 기본 플롯 — `.plot()`
- `df.plot()`처럼 DataFrame에서 바로 호출하면 기본 플롯(예: 선 그래프)이 그려진다.
- 특정 컬럼만 보고 싶다면 `df["rating"].plot()`처럼 컬럼을 먼저 선택한 뒤 플롯한다.

### 숫자형 데이터만 플롯 가능
- `variety`처럼 **텍스트(범주형) 데이터가 담긴 컬럼은 그대로 플롯할 수 없다** — "no numeric data to plot"이라는 에러가 발생.
- 반면 `rating`처럼 숫자형 데이터는 문제없이 플롯된다.

### 산점도(Scatter Plot) — 두 변수 관계 보기
- `df.plot.scatter(x="variety", y="rating")`처럼 **범주형 변수(x)와 숫자형 변수(y)를 함께 시각화**할 수 있다.
- 산점도를 통해 예상치 못한 값(예: 데이터에 없어야 할 이상한 variety 값)이 눈에 띄게 드러날 수 있다 — 시각화 자체가 데이터 품질을 점검하는 도구가 되기도 함.

## 예시
```python
df.dropna(inplace=True)      # NaN 있는 행 제거 (플롯 전 필수)

df.plot()                     # DataFrame 전체를 기본 플롯
df["rating"].plot()           # 특정 컬럼만 플롯

df.plot.scatter(x="variety", y="rating")   # 산점도로 두 변수 관계 확인
```

## 요약
- Pandas 시각화는 matplotlib 설치와 결측치 제거(`dropna`)가 선행되어야 하며, 숫자형 컬럼만 플롯 가능하다.
- 기본 `.plot()` 외에 `.plot.scatter(x=, y=)` 같은 다양한 플롯 타입으로 데이터의 관계와 이상치를 눈으로 확인할 수 있다.
