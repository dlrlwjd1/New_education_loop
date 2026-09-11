# 04 Vectorizing Logistic Regression's Gradient Output

## 개요
- 로지스틱 회귀의 **역전파(backward propagation)**, 즉 gradient 계산을 벡터화
- m개의 학습 예제(training examples) 전체에 대한 gradient를 **for 루프 없이** 한 번에 계산
- 순전파 + 역전파를 합쳐, 경사하강법(gradient descent) **1회 반복을 for 루프 없이** 구현
- 단, 여러 번 반복하려면 반복 횟수를 도는 최외곽 for 루프는 남는다

---

## 내용

### dZ 한 줄로 계산

기존에는 예제마다 dz를 따로 계산:
```
dz⁽¹⁾ = a⁽¹⁾ - y⁽¹⁾,  dz⁽²⁾ = a⁽²⁾ - y⁽²⁾,  ...
```

이를 가로로 쌓아 **dZ** (1 × m)로 정의. 이미 만든 A, Y를 이용하면:

```
dZ = A - Y
```
- A = [a⁽¹⁾ ... a⁽ᵐ⁾], Y = [y⁽¹⁾ ... y⁽ᵐ⁾] (둘 다 1 × m)
- 뺄셈 한 번으로 모든 dz⁽ⁱ⁾ 동시 계산

### db 벡터화

db는 모든 dz를 더한 뒤 m으로 나눈 것:

```
db = (1/m) Σ dz⁽ⁱ⁾
```
```python
db = (1/m) * np.sum(dZ)
```

### dw 벡터화

기존 방식(for 루프)은 `dw += x⁽ⁱ⁾ dz⁽ⁱ⁾`를 m번 반복. 이를 행렬곱으로:

```
dw = (1/m) X · dZᵀ
```

**왜 성립하나:**
```
X · dZᵀ = [x⁽¹⁾ ... x⁽ᵐ⁾] · [dz⁽¹⁾; ...; dz⁽ᵐ⁾]
        = x⁽¹⁾dz⁽¹⁾ + ... + x⁽ᵐ⁾dz⁽ᵐ⁾     (nx × 1 벡터)
```
→ for 루프로 xᵢ·dzᵢ를 더하던 것과 정확히 동일

```python
dw = (1/m) * np.dot(X, dZ.T)
```

### 전체 통합 — for 루프 없는 경사하강법 1회

**Before (비효율적, for 루프 2개):** 예제 루프 + 특성 루프

**After (완전 벡터화, 5줄):**
```python
Z  = np.dot(w.T, X) + b     # 순전파: 모든 z
A  = sigmoid(Z)             # 순전파: 모든 a
dZ = A - Y                  # 역전파: 모든 dz
dw = (1/m) * np.dot(X, dZ.T)
db = (1/m) * np.sum(dZ)

# 파라미터 업데이트 (alpha = 학습률)
w = w - alpha * dw
b = b - alpha * db
```

→ 순전파·역전파·gradient를 m개 예제 전체에 대해 **for 루프 없이** 처리

### 남는 for 루프

- gradient descent를 **여러 번 반복**하려면 (예: 1000회), 반복 횟수를 도는 최외곽 for 루프는 필요
- 이 루프는 제거 불가 — 하지만 **1회 반복 안쪽은 완전히 벡터화** 가능

```python
for iteration in range(1000):   # 이 루프만 남음
    # ... 위의 벡터화된 5줄 ...
```

---

## 예시

```python
import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

# nx=3, m=4
X = np.random.rand(3, 4)
Y = np.array([[1, 0, 1, 0]])   # (1, m)
w = np.zeros((3, 1))
b = 0.0
alpha = 0.1

for i in range(1000):          # 반복 루프만 유지
    Z  = np.dot(w.T, X) + b
    A  = sigmoid(Z)
    dZ = A - Y
    dw = (1/X.shape[1]) * np.dot(X, dZ.T)
    db = (1/X.shape[1]) * np.sum(dZ)
    w  = w - alpha * dw
    b  = b - alpha * db
```

---

## 요약
- `dZ = A - Y` → 모든 dz⁽ⁱ⁾ 동시 계산 (1 × m)
- `db = (1/m) * np.sum(dZ)` → 편향 gradient
- `dw = (1/m) * np.dot(X, dZ.T)` → 가중치 gradient (nx × 1)
- 순전파 2줄 + 역전파 3줄 = **for 루프 없이 gradient descent 1회 반복** 구현
- 여러 번 반복하려면 반복 횟수를 도는 최외곽 for 루프만 남는다 (제거 불가)
- 다음 강의: 코드 곳곳에서 쓰인 **브로드캐스팅(broadcasting)** 상세
