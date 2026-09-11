# 10 Gradient Descent on m Examples

## 개요
- 단일 예제의 경사 하강을 **m개 전체 훈련 세트**로 확장
- 전체 비용 함수의 기울기 = 각 예제 기울기의 **평균**
- 현재 구현의 한계: for 루프 2개 → 다음 강의에서 **벡터화(vectorization)**로 해결

---

## 내용

### 비용 함수와 기울기의 관계

J(w, b) = (1/m) Σ L(a^(i), y^(i)) 이므로:

```
∂J/∂w1 = (1/m) Σ ∂L^(i)/∂w1
∂J/∂w2 = (1/m) Σ ∂L^(i)/∂w2
∂J/∂b  = (1/m) Σ ∂L^(i)/∂b
```

→ 개별 예제의 기울기를 계산하고 평균 내면 전체 비용 함수의 기울기가 됨

### 알고리즘 (for 루프 버전)

```
J = 0, dw1 = 0, dw2 = 0, db = 0

for i = 1 to m:
    z^(i)  = w1·x1^(i) + w2·x2^(i) + b
    a^(i)  = σ(z^(i))
    J     += -[y^(i)·log(a^(i)) + (1-y^(i))·log(1-a^(i))]

    dz^(i) = a^(i) - y^(i)
    dw1   += x1^(i) · dz^(i)
    dw2   += x2^(i) · dz^(i)
    db    += dz^(i)

J  /= m
dw1 /= m
dw2 /= m
db  /= m

# 파라미터 업데이트 (1 step)
w1 -= α · dw1
w2 -= α · dw2
b  -= α · db
```

**주의:** dw1, dw2, db는 누산기(accumulator) — 모든 예제에 대해 합산 후 m으로 나눔

### for 루프가 2개인 문제
1. **훈련 예제 루프**: i = 1 ~ m
2. **특징 루프**: dw1, dw2, ..., dwn (n개 특징 각각 업데이트)

딥러닝에서는 데이터셋이 매우 크기 때문에, for 루프를 사용하면 계산이 비효율적

→ 해결책: **벡터화(vectorization)** — for 루프 없이 행렬 연산으로 처리

---

## 예시

```python
import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

def gradient_descent_m_examples(X, Y, w, b, alpha, num_iterations):
    """
    X: (nx, m) — nx개 특징, m개 훈련 예제
    Y: (1, m)
    w: (nx, 1)
    """
    nx, m = X.shape

    for _ in range(num_iterations):
        J = 0
        dw = np.zeros((nx, 1))  # 누산기
        db = 0

        # for 루프 버전 (비효율적)
        for i in range(m):
            xi = X[:, i:i+1]          # (nx, 1)
            yi = Y[0, i]

            zi = np.dot(w.T, xi) + b  # 스칼라
            ai = sigmoid(zi)

            J  -= yi*np.log(ai) + (1-yi)*np.log(1-ai)

            dzi = ai - yi
            dw += xi * dzi
            db += dzi

        J  /= m
        dw /= m
        db /= m

        # 파라미터 업데이트
        w -= alpha * dw
        b -= alpha * db

    return w, b, J

# 실행 예시
np.random.seed(0)
nx, m = 2, 100
X = np.random.randn(nx, m)
Y = (np.random.randn(1, m) > 0).astype(float)
w = np.zeros((nx, 1))
b = 0.0

w, b, J = gradient_descent_m_examples(X, Y, w, b, alpha=0.1, num_iterations=100)
print(f"최종 비용: {J:.4f}")
```

---

## 요약
- 전체 비용 J의 기울기 = 각 훈련 예제 기울기의 평균
- 구현 순서: 누산 → 평균(/m) → 업데이트
- 변수 구분:
  - `dz^(i)`: i번째 예제에 대한 값 (상첨자 있음)
  - `dw`, `db`: 전체 평균 누산기 (상첨자 없음)
- **현재 한계**: for 루프 2개(예제 루프 + 특징 루프) → 대규모 데이터에서 비효율
- 다음 강의: 벡터화로 for 루프 제거, 행렬 연산으로 효율적 구현
