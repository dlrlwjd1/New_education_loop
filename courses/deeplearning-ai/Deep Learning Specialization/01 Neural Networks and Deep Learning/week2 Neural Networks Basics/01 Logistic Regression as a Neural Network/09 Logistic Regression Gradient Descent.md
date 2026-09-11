# 09 Logistic Regression Gradient Descent

## 개요
- 계산 그래프를 이용해 로지스틱 회귀의 역전파(backpropagation)를 유도
- **단일 훈련 예제**에서 경사 하강법 구현에 필요한 핵심 수식 도출
- 최종 목표: dw1, dw2, db를 계산하여 파라미터 업데이트

---

## 내용

### 순전파 계산 그래프 (특징 x1, x2만 있는 경우)

```
x1, x2
w1, w2  →  [z = w1x1 + w2x2 + b]  →  [a = σ(z)]  →  [L(a, y)]
b
```

- z = w1x1 + w2x2 + b
- a = σ(z) (로지스틱 회귀 예측값 ŷ)
- L(a, y) = -[y·log(a) + (1-y)·log(1-a)]

### 역전파: 오른쪽 → 왼쪽

**Step 1. da = dL/da**

```
da = -y/a + (1-y)/(1-a)
```

**Step 2. dz = dL/dz (연쇄 법칙)**

```
dz = dL/dz = (dL/da) × (da/dz)
           = da × a(1-a)
           = a - y
```

- da/dz = a(1-a): 시그모이드 함수의 도함수
- 최종적으로 **dz = a - y** (매우 간결한 결과)

**Step 3. dw1, dw2, db 계산**

```
dw1 = x1 × dz
dw2 = x2 × dz
db  = dz
```

### 역전파 흐름 요약

```
da = -y/a + (1-y)/(1-a)
          ↓
dz = a - y
          ↓
dw1 = x1 · dz
dw2 = x2 · dz
db  = dz
```

### 파라미터 업데이트 (단일 예제 1번의 경사 하강)

```
w1 := w1 - α · dw1
w2 := w2 - α · dw2
b  := b  - α · db
```

---

## 예시

```python
import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

def logistic_regression_gradient_step(x1, x2, y, w1, w2, b, alpha):
    # 순전파
    z = w1*x1 + w2*x2 + b
    a = sigmoid(z)
    loss = -(y*np.log(a) + (1-y)*np.log(1-a))

    # 역전파
    dz  = a - y
    dw1 = x1 * dz
    dw2 = x2 * dz
    db  = dz

    # 파라미터 업데이트
    w1 = w1 - alpha * dw1
    w2 = w2 - alpha * dw2
    b  = b  - alpha * db

    return w1, w2, b, loss

# 예시 실행
x1, x2, y = 1.0, 0.5, 1
w1, w2, b = 0.0, 0.0, 0.0
alpha = 0.1

for i in range(5):
    w1, w2, b, loss = logistic_regression_gradient_step(x1, x2, y, w1, w2, b, alpha)
    print(f"Step {i+1}: loss={loss:.4f}, w1={w1:.4f}, w2={w2:.4f}, b={b:.4f}")
```

---

## 요약
- 역전파 핵심 수식 3가지:
  - `dz = a - y`
  - `dw1 = x1 · dz`, `dw2 = x2 · dz`
  - `db = dz`
- dz = a - y는 연쇄 법칙을 거친 결과지만 형태가 매우 간결
- 이 계산은 **단일 예제**에 대한 한 번의 경사 하강
- 다음 강의: m개 훈련 예제 전체에 대해 경사 하강법 적용
