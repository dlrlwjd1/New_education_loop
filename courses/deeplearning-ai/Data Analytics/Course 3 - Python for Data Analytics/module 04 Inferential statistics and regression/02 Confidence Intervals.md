# Confidence Intervals

## 개요
- Python으로 평균의 **신뢰 구간(confidence interval)** 을 계산 — **SciPy**의 `stats.norm.interval` 을 사용한다.
- 필요 값: 표본 통계(평균)·표본 크기·표본 표준편차·신뢰 수준 → 표준 오차 계산.

## 내용

### 배경 — 다이아몬드 가격
- 온라인 보석 소매업체의 다이아몬드 가격 책정. 4C(cut·color·clarity·carat)로 평가.
- `import scipy.stats as stats` (추론 통계용, pandas·NumPy 이상). `df = pd.read_csv("diamonds.csv")`. ~54,000행, 평균 가격 ~$3,900, 가격 분포는 왜곡(비싼 다이아 희소). CLT로 **평균의 표집 분포는 정규** → 신뢰 구간 가능.

### 계산
- `n = df["price"].count()`, `xbar = df["price"].mean()`, `s = df["price"].std()`, `conf = 0.95`.
- **표준 오차 SEM = s / np.sqrt(n)** (NumPy sqrt). 표본이 커서 SEM 매우 작음(~17).
- **stats.norm.interval(confidence=conf, loc=xbar, scale=sem)** → (3899, 3966) 시퀀스.
  - 정규 분포 사용(표본 커서 t 분포와 거의 동일). loc=평균, scale=표준 오차.
- 결과는 시퀀스라 `interval[0]`·`interval[1]` 로 접근(print 정리).

## 예시

### 신뢰 구간 (SciPy)
```python
import scipy.stats as stats
import numpy as np
n = df["price"].count()
xbar = df["price"].mean()
s = df["price"].std()
sem = s / np.sqrt(n)
interval = stats.norm.interval(confidence=0.95, loc=xbar, scale=sem)
# → (3899, 3966)
```

## 요약
- 평균 신뢰 구간은 **stats.norm.interval(confidence=, loc=평균, scale=표준오차)** 로 계산한다.
- **표준 오차 = s/np.sqrt(n)**, 표본이 크면 정규·t 분포가 거의 같다.
- 결과는 시퀀스([0]·[1])로 접근한다. 다음 강의는 **단일 표본 t-검정**이다.
