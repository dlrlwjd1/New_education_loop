# Training the Model

## 개요
- **statsmodels** 로 선형 회귀 모델을 학습 — **y=mx+b** 의 최적 기울기(m)·절편(b)을 찾는다.
- 절차: x·y 설정 → **sm.add_constant** → **sm.OLS(y, x)** → **.fit()** → **.summary()**.

## 내용

### 기울기·절편
- **m(기울기, slope)**: x가 1 증가할 때 y의 변화. **b(절편, intercept)**: x=0일 때 y.
- b는 모델의 **유연성** 제공 — b=0이면 원점 통과 강제라 대개 부정확.

### 학습 코드
- `import statsmodels.api as sm`.
- **y** = `df["price"]` (종속). **x** = `df["carat"]` (독립).
- **sm.add_constant(x)**: statsmodels는 각 열마다 계수를 만듦. x가 carat 한 열뿐이면 b를 0으로 무시 → 상수 열을 추가해 **m·b 둘 다** 추정. (데이터 형식 맞추기)
- **sm.OLS(y, x)**: **최소제곱(ordinary least squares)** 회귀. **y를 먼저**(회귀는 비대칭, 순서 바꾸면 잘못된 모델).
- **results = model.fit()**: 학습(실제 m·b 계산).
- **results.summary()**: R², 계수(const·carat) 등 결과표(그냥 print하면 wrapper만).

## 예시

### 회귀 학습
```python
import statsmodels.api as sm
y = df["price"]
x = sm.add_constant(df["carat"])   # 상수 열 추가 (절편용)
model = sm.OLS(y, x)               # y 먼저!
results = model.fit()             # 학습
print(results.summary())          # 결과표
```

## 요약
- **statsmodels**로 회귀를 학습: **sm.add_constant(x)** → **sm.OLS(y, x)** → **.fit()** → **.summary()**.
- 상수 열을 추가해야 절편 b가 추정되며, OLS는 **y를 먼저** 넣는다(비대칭).
- summary에 R²·계수 등이 나온다. 다음 강의는 이 출력 해석이다.
