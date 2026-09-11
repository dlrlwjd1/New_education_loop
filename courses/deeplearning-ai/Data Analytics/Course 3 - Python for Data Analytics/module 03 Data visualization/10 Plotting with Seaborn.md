# Plotting with Seaborn

## 개요
- **Seaborn**(`import seaborn as sns`)은 Matplotlib 위에 구축된 시각화 도구 — 더 예쁘고, 그룹·집계를 **자동 처리**하며, 추가 플롯 유형을 제공한다.
- 데이터를 미리 가공(groupby·unstack)할 필요 없이 데이터프레임을 바로 넘긴다.

## 내용

### Matplotlib vs Seaborn (그룹 막대)
- Matplotlib: groupby → 집계 → unstack → plot (수작업 많음).
- Seaborn: `sns.barplot(filter_df, x="state", y="loan amount")` — **그룹·평균 자동 계산**. `plt.show()`.

### hue (색 = 추가 범주)
- `sns.barplot(filter_df, x="state", y="loan amount", hue="grade")` — **hue**(색)로 등급 구분 → 오차 막대·라벨 자동 포함된 예쁜 그룹 막대.

### Matplotlib과 결합
- Seaborn은 Matplotlib 위에 있어 `plt.title·xlabel·ylabel·legend(bbox_to_anchor=)` 함께 사용 가능.

### estimator (집계 함수)
- 기본은 **np.mean**(그룹 평균). `estimator=np.max`, `np.std`, `np.size` 등으로 변경.
- (내부적으로 seaborn·matplotlib·pandas 모두 **NumPy** 기반)

## 예시

### Seaborn 막대 플롯
```python
import seaborn as sns
import numpy as np
sns.barplot(filter_df, x="state", y="loan amount", hue="grade")  # 자동 그룹·평균
sns.barplot(filter_df, x="state", y="interest rate", estimator=np.max)  # 집계 변경
plt.show()
```

## 요약
- **Seaborn**(`sns`)은 데이터프레임을 바로 받아 **그룹·집계를 자동 처리**하고 예쁜 차트를 빠르게 만든다.
- **hue** 로 색 구분, **estimator** 로 집계 함수(기본 np.mean)를 바꾸며, Matplotlib 함수와 결합된다.
- 다음 강의는 테마·팔레트로 차트를 더 꾸민다.
