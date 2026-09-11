# Training a Multiple Linear Regression Model

## 개요
- 다중 회귀는 단순 회귀와 거의 같은 코드 — x를 **예측 변수 리스트**로 만들면 된다.
- 각 독립 변수마다 계수(m1·m2…)가 생기고, price = m1·carat + m2·x + b 형태.

## 내용

### 예측 변수 리스트로 학습
- `predictors = ["carat", "x"]`, `x = sm.add_constant(df[predictors])` → 상수·carat·x 3개 열.
- `sm.OLS(y, x).fit()` → 각 열마다 계수. `results.summary()`.
- 예: carat 추가 후 R²가 약 0.5%p↑. 세 계수 모두 유의(p 낮음). 새 변수가 기존 계수도 조정(carat 계수 $10,130, x 계수 −$1,027, 절편 $1,738 — 모두 연결됨).

### 예측
- `m1 = results.params["carat"]`, `m2 = results.params["x"]`, `b = results.params["const"]`.
- `price = m1*carat + m2*x + b`. 예: carat=1.5, x=7.13 → $9,605(실제 $8,580).

### 변수 더 추가
- `predictors = ["carat", "x", "y", "z"]` 로 확장. R²가 0.1%p만 개선(미미)하나 계수 유의.
- 특정 다이아 예측은 더 정확해지지 않을 수 있음 — **회귀는 반복적(iterative)** 과정, 실험 필요.

## 예시

### 다중 회귀 학습·예측
```python
predictors = ["carat", "x", "y", "z"]
x = sm.add_constant(df[predictors])
results = sm.OLS(df["price"], x).fit()
print(results.summary())
# 예측
price = (results.params["carat"]*c + results.params["x"]*xv +
         results.params["y"]*yv + results.params["z"]*zv + results.params["const"])
```

## 요약
- 다중 회귀는 x를 **예측 변수 리스트**(`df[predictors]`)로 만들고 **add_constant** 후 학습하는 것만 다르다.
- summary에 변수별 **p-값·계수**가 나오며, 각 계수를 방정식에 넣어 예측한다.
- 모델 구축은 반복 실험이다. 다음 강의는 **다중 회귀 해석**의 뉘앙스다.
