# 03 Logistic Regression Cost Function

## 개요
- 로지스틱 회귀의 파라미터 w, b를 학습하려면 **손실 함수(loss function)**와 **비용 함수(cost function)**를 정의해야 함
- 제곱 오차(squared error) 대신 **로그 손실(log loss)**을 사용 — 볼록 최적화(convex optimization) 문제가 되어 경사 하강법이 전역 최솟값으로 수렴

---

## 내용

### 표기 규칙 (Notation)
- 상첨자 괄호 (i): i번째 훈련 예제를 의미
  - x^(i): i번째 입력 벡터
  - y^(i): i번째 정답 레이블
  - ŷ^(i) = σ(wᵀx^(i) + b): i번째 예측값
  - z^(i) = wᵀx^(i) + b

### 손실 함수 (Loss Function) L(ŷ, y)
단일 훈련 예제에 대해 예측이 얼마나 좋은지 측정.

**왜 제곱 오차를 쓰지 않는가?**
- L(ŷ, y) = ½(ŷ - y)²은 직관적이지만, 최적화 문제가 **비볼록(non-convex)**이 됨
- 경사 하강법(gradient descent)이 **지역 최솟값(local optima)**에 빠질 수 있음

**로지스틱 회귀에서 사용하는 손실 함수:**

```
L(ŷ, y) = -[y·log(ŷ) + (1-y)·log(1-ŷ)]
```

**직관적 이해:**

| y | 손실 함수 | 의미 |
|---|---|---|
| y = 1 | L = -log(ŷ) | 손실을 줄이려면 ŷ → 1 |
| y = 0 | L = -log(1-ŷ) | 손실을 줄이려면 ŷ → 0 |

- **y = 1일 때**: -log(ŷ)를 최소화 → log(ŷ)를 최대화 → ŷ를 최대화 → ŷ → 1
- **y = 0일 때**: -log(1-ŷ)를 최소화 → log(1-ŷ)를 최대화 → ŷ → 0
- 두 경우 모두 정답 레이블 방향으로 ŷ를 밀어냄

### 비용 함수 (Cost Function) J(w, b)
전체 훈련 세트에 대한 평균 손실 — 파라미터 전체의 성능을 측정.

```
J(w, b) = (1/m) · Σᵢ L(ŷ^(i), y^(i))
         = -(1/m) · Σᵢ [y^(i)·log(ŷ^(i)) + (1-y^(i))·log(1-ŷ^(i))]
```

- m: 훈련 예제 수
- 훈련 목표: J(w, b)를 **최소화**하는 w, b를 찾는 것

### 손실 함수 vs 비용 함수 구분

| 구분 | 대상 | 수식 |
|---|---|---|
| 손실 함수 L | 단일 훈련 예제 | L(ŷ, y) |
| 비용 함수 J | 전체 훈련 세트 | J(w,b) = (1/m)ΣL |

---

## 예시

```python
import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

def compute_loss(y_hat, y):
    return -(y * np.log(y_hat) + (1 - y) * np.log(1 - y_hat))

def compute_cost(X, Y, w, b):
    m = X.shape[1]  # 훈련 예제 수
    Z = np.dot(w.T, X) + b      # (1, m)
    A = sigmoid(Z)               # ŷ: 예측값
    cost = -(1/m) * np.sum(Y * np.log(A) + (1 - Y) * np.log(1 - A))
    return cost

# 예시
# X: (nx, m), Y: (1, m)
np.random.seed(0)
nx, m = 3, 5
X = np.random.randn(nx, m)
Y = np.array([[1, 0, 1, 1, 0]])
w = np.zeros((nx, 1))
b = 0

cost = compute_cost(X, Y, w, b)
print(f"초기 비용: {cost:.4f}")  # w, b가 0이면 ŷ = 0.5 → 비용 ≈ log(2) ≈ 0.693
```

---

## 요약
- 로지스틱 회귀의 손실 함수: `L(ŷ, y) = -[y·log(ŷ) + (1-y)·log(1-ŷ)]`
- 제곱 오차를 쓰지 않는 이유: 비볼록 문제 → 지역 최솟값 문제 발생
- 비용 함수 J(w, b)는 손실 함수의 전체 훈련 세트 평균
- 목표: J(w, b)를 최소화하는 w, b 탐색 → 다음 강의에서 **경사 하강법(gradient descent)** 적용
