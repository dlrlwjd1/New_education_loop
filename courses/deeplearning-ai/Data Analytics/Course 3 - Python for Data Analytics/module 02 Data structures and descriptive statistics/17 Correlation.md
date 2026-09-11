# Correlation

## 개요
- **상관(correlation)** 은 두 수치 특성 간 관계의 강도·방향을 정량화한다. **산점도**(scatter plot)로 시각화하고 **.corr()** 로 계수를 계산한다.
- 두 열이 필요하므로 **데이터프레임**에 메서드를 호출한다.

## 내용

### 산점도 — .plot(kind="scatter")
- 두 열이 필요 → 데이터프레임에서 시작: `df.plot(kind="scatter", x="income", y="money...")`.
- **x·y 명명 인수**에 열 이름만 지정(열을 따로 선택하지 않음 — 데이터프레임에 호출하므로).

### 상관 계수 — .corr()
- **피어슨 상관 계수(Pearson correlation coefficient)** 계산. 두 열 필요 → 데이터프레임에 호출.
- describe와 달리 **범주형을 자동 제거하지 않아** 그냥 df.corr()은 오류 → **수치 열만 먼저 선택** 후 호출.
  - `columns = ["age", "children", "money...", "months...", "income"]`, `df[columns].corr()`.
- 결과는 모든 쌍의 상관 표. **대각선은 1**(자기 자신), **대칭**이라 절반은 중복.
- 예: income–money ≈ 0.08(약한 양의 상관), age–months programming도 약한 양의 상관(신규 프로그래머 대상이라 나이 든 응답자 과소대표).

## 예시

### 산점도와 상관
```python
df.plot(kind="scatter", x="income", y="money_spent")  # 산점도
cols = ["age", "children", "money_spent", "months", "income"]
df[cols].corr()   # 수치 열만 → 상관 표 (대각선=1, 대칭)
```

## 요약
- **산점도**는 `df.plot(kind="scatter", x=, y=)`, **상관 계수**는 `df[수치열].corr()` 로 구한다.
- corr는 범주형을 자동 제거하지 않으므로 **수치 열을 먼저 선택**해야 하며, 표는 대각선 1·대칭이다.
- 다음 (마지막) 두 강의는 **세분화(segmentation)** 다.
