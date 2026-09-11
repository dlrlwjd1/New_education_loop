# Two-Sample t-Tests

## 개요
- **두 표본 t-검정(two-sample t-test)** 은 두 그룹의 평균을 직접 비교한다 — **scipy.stats.ttest_ind**(ind=independent).
- 예: good vs very good 컷 다이아 가격이 유의하게 다른지.

## 내용

### 탐색
- 그룹 평균 막대: `df.groupby("cut")["price"].mean().sort_values().plot(kind="bar")`. (fair가 ideal보다 비싼 의외 결과)
- 박스플롯: `sns.boxplot(df, x="price", y="cut", order=[...], palette="Blues_r")`. good·very good 중앙값은 다르나 유의성 불명확 → 검정.

### 두 표본 t-검정
- `stats.ttest_ind(very_good_prices, good_prices)`:
  - 두 인수 = 각 그룹 데이터 시리즈(가격 열을 cut으로 필터). 변수로 저장하면 가독성↑.
  - **독립(independent)** 가정 — 두 그룹 다이아 간 관계 없음.
  - **popmean 없음** — 특정 값이 아닌 두 그룹 평균을 직접 비교.
- 반환은 t-검정 결과(단일 표본과 동일 타입), p-값은 **[1]**. 예 p=0.41.
- if문 재사용 → p=0.41 > 0.05 → **기각 실패**(good·very good 가격 차이 증거 없음 → 유사 전략 가능).

## 예시

### 두 표본 t-검정
```python
very_good = df[df["cut"]=="Very Good"]["price"]
good = df[df["cut"]=="Good"]["price"]
test = stats.ttest_ind(very_good, good)   # 독립 두 표본
if test[1] > 0.05:
    print("기각 실패", test[1])   # p=0.41 → 기각 실패
else:
    print("기각", test[1])
```

## 요약
- **stats.ttest_ind(표본1, 표본2)** 로 두 독립 그룹의 평균을 비교하며 **popmean은 없다**.
- 반환 시퀀스의 **[1]** 이 p-값이며, α와 비교해 결론짓는다(예: p=0.41 → 기각 실패).
- 다음 강의는 데이터가 부족할 때 표본을 **시뮬레이션**하는 법이다.
