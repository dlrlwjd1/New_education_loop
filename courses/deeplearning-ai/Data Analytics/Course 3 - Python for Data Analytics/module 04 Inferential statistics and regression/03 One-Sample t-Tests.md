# One-Sample t-Tests

## 개요
- **단일 표본 t-검정(one-sample t-test)** 은 한 표본을 가설값과 비교한다 — **scipy.stats.ttest_1samp** 사용.
- 예: 프리미엄 컷 다이아 평균 가격이 $4,500 초과인지.

## 내용

### 가설 검정 복습
- **H₀(귀무)**: 현상 유지(프리미엄 컷 ≤ $4,500). **H₁(대립)**: 검정 대상(> $4,500).
- **유의 수준 α** = 1 − 신뢰 수준(흔히 0.05). 높은 신뢰 → 낮은 α → 기각 어려움.
- **p-값**: 귀무가설이 참일 때 관측(또는 더 극단) 확률. **p < α → 기각**, **p ≥ α → 기각 실패**.

### Python 수행
- 값 확인(대소문자 구분): cut에 "Premium" 존재. 그룹 평균: `df.groupby("cut")["price"].mean()` → 프리미엄 $4,584.
- 검정:
  - `alpha = 0.05`.
  - `stats.ttest_1samp(df[df["cut"]=="Premium"]["price"], popmean=4500)`.
  - **popmean** = 귀무가설 하 평균($4,500).
- 결과: 검정 통계량·**p-값**·df. p-값은 시퀀스의 **[1]**. 예 p=0.023.
- if문으로 결론: `if test_results[1] > 0.05: 기각 실패 else: 기각`. → 여기선 기각(p 작음).

## 예시

### 단일 표본 t-검정
```python
alpha = 0.05
test = stats.ttest_1samp(df[df["cut"]=="Premium"]["price"], popmean=4500)
if test[1] > alpha:
    print("기각 실패", test[1])
else:
    print("기각", test[1])   # p=0.023 → 기각
```

## 요약
- **stats.ttest_1samp(표본, popmean=가설값)** 으로 단일 표본 t-검정을 하며, 반환 시퀀스의 **[1]** 이 p-값이다.
- **p < α** 면 귀무가설 기각(예: p=0.023 → 프리미엄 컷 평균이 $4,500 초과라는 증거).
- if문으로 결론을 자동화한다. 다음 강의는 **두 표본 t-검정**이다.
