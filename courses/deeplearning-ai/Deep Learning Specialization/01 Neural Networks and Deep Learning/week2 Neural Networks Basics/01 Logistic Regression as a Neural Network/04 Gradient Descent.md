# 04 Gradient Descent

## 개요
- **경사 하강법(gradient descent)**은 비용 함수 J(w, b)를 최소화하는 파라미터 w, b를 학습하는 알고리즘
- J가 볼록 함수(convex function)이기 때문에 어디서 시작하든 전역 최솟값(global optimum)에 수렴

---

## 내용

### 왜 볼록 함수인가?
- 로지스틱 회귀의 비용 함수 J(w, b)는 **볼록 함수(convex)** — 하나의 최솟값만 존재하는 그릇(bowl) 형태
- 반면 비볼록(non-convex) 함수는 지역 최솟값(local optima)이 여럿 존재 → 경사 하강법이 전역 최솟값에 도달 못할 수 있음
- 이것이 로지스틱 회귀에서 이 특정 비용 함수를 사용하는 주요 이유

### 경사 하강법 작동 원리
1. w, b를 초기값으로 설정 (보통 0으로 초기화, 로지스틱 회귀에서는 어떤 값이든 동작)
2. 현재 위치에서 **가장 가파른 내리막 방향(steepest descent)**으로 한 걸음 이동
3. 비용 함수가 수렴할 때까지 반복

### 업데이트 규칙 (단일 파라미터 w)

```
w := w - α · (dJ/dw)
```

- **α (alpha)**: 학습률(learning rate) — 각 이터레이션에서 얼마나 크게 이동할지 결정
- **dJ/dw**: 현재 w에서 J의 기울기(slope) = 도함수(derivative)

**기울기 부호에 따른 동작:**

| 현재 w 위치 | dJ/dw 부호 | 업데이트 결과 |
|---|---|---|
| 최솟값 오른쪽 | 양수(+) | w 감소 → 왼쪽으로 이동 |
| 최솟값 왼쪽 | 음수(-) | w 증가 → 오른쪽으로 이동 |

→ 양쪽 어디서 시작해도 최솟값 방향으로 이동

### 로지스틱 회귀의 경사 하강법 (w, b 둘 다 업데이트)

```
w := w - α · ∂J(w,b)/∂w
b := b - α · ∂J(w,b)/∂b
```

코드에서는 다음 변수명 규칙을 사용:
- `dw` = ∂J/∂w (w 업데이트량)
- `db` = ∂J/∂b (b 업데이트량)

```python
w = w - alpha * dw
b = b - alpha * db
```

### 편미분 기호 참고 (∂ vs d)
- J가 **변수 1개**의 함수: 일반 미분 기호 `d` 사용 → `dJ/dw`
- J가 **변수 2개 이상**의 함수: 편미분 기호 `∂` 사용 → `∂J/∂w`
- 의미는 동일 — 하나의 변수 방향으로의 기울기를 측정

---

## 예시

```python
import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

def gradient_descent(X, Y, w, b, alpha, num_iterations):
    m = X.shape[1]

    for i in range(num_iterations):
        # 순전파(forward propagation)
        Z = np.dot(w.T, X) + b   # (1, m)
        A = sigmoid(Z)            # ŷ

        # 비용 함수
        cost = -(1/m) * np.sum(Y * np.log(A) + (1-Y) * np.log(1-A))

        # 기울기 계산
        dw = (1/m) * np.dot(X, (A - Y).T)   # (nx, 1)
        db = (1/m) * np.sum(A - Y)           # 스칼라

        # 파라미터 업데이트
        w = w - alpha * dw
        b = b - alpha * db

        if i % 100 == 0:
            print(f"Iteration {i}: cost = {cost:.4f}")

    return w, b

# 예시 실행
np.random.seed(1)
nx, m = 3, 10
X = np.random.randn(nx, m)
Y = np.random.randint(0, 2, (1, m))
w = np.zeros((nx, 1))
b = 0.0

w, b = gradient_descent(X, Y, w, b, alpha=0.01, num_iterations=500)
```

---

## 요약
- 경사 하강법: 비용 함수의 기울기 방향 반대로 파라미터를 반복 업데이트
- 업데이트 규칙: `w := w - α·dw`, `b := b - α·db`
- 학습률 α: 이동 보폭 결정 — 너무 크면 발산, 너무 작으면 수렴 느림
- J가 볼록 함수이므로 초기화 위치와 무관하게 전역 최솟값 수렴 보장
- 코드 변수명: `dw` = ∂J/∂w, `db` = ∂J/∂b
