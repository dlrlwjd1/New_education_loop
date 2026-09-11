# 02 More Vectorization Examples

## 개요
- 벡터화(vectorization)의 추가 예시 — 행렬-벡터 곱, 원소별(element-wise) 함수
- **황금 규칙(rule of thumb)**: 신경망·로지스틱 회귀를 짤 때 **가능한 한 명시적 for 루프를 피하라**
- for 루프를 쓰고 싶을 때마다, NumPy 내장 함수로 대체할 수 있는지 먼저 확인
- 로지스틱 회귀 경사하강법(gradient descent)에서 두 개의 for 루프 중 하나(특성 루프)를 제거

---

## 내용

### 예시 1: 행렬 × 벡터 (matrix-vector product)

`u = A·v` 를 계산할 때. 수학 정의: **uᵢ = Σⱼ Aᵢⱼ vⱼ**

**비벡터화 (for 루프 2개):**
```python
u = np.zeros((n, 1))
for i in ...:
    for j in ...:
        u[i] += A[i][j] * v[j]
```

**벡터화 (한 줄):**
```python
u = np.dot(A, v)
```

→ 이중 for 루프를 통째로 제거, 훨씬 빠름

### 예시 2: 원소별(element-wise) 함수

벡터 `v`의 모든 원소에 지수함수(exponential)를 적용: u = [e^v1, e^v2, ..., e^vn]

**비벡터화:**
```python
u = np.zeros((n, 1))
for i in range(n):
    u[i] = math.exp(v[i])
```

**벡터화:**
```python
import numpy as np
u = np.exp(v)   # 전체 원소에 e^v 적용, 한 줄
```

**자주 쓰는 NumPy 원소별 함수:**

| 코드 | 하는 일 |
|---|---|
| `np.exp(v)` | 각 원소에 e^vᵢ |
| `np.log(v)` | 각 원소에 로그 |
| `np.abs(v)` | 절댓값 |
| `np.maximum(v, 0)` | 각 원소와 0 중 큰 값 (ReLU에 유용) |
| `v ** 2` | 각 원소 제곱 |
| `1 / v` | 각 원소 역수 |

> 💡 for 루프를 쓰고 싶을 때마다 "NumPy 내장 함수로 대체 가능한가?"를 먼저 떠올린다.

### 로지스틱 회귀에 적용 — for 루프 하나 제거

원래 로지스틱 회귀 경사하강법 코드에는 for 루프가 **2개**:
1. **바깥 루프**: m개의 학습 예제(training examples)를 도는 루프
2. **안쪽 루프**: 특성(feature) `dw1, dw2, ...`를 도는 루프 (nx개 특성이면 `for j = 1 to nx`)

이 영상에서는 **안쪽 루프(특성 루프)를 제거**한다.

**Before — dw를 개별 변수로:**
```python
dw1 = 0
dw2 = 0
# 특성 개수만큼: for j: dwj += x_j * dz
```

**After — dw를 벡터로:**
```python
dw = np.zeros((nx, 1))    # nx차원 벡터 하나로 통합
# 예제 루프 안에서:
    dw += x[i] * dz[i]    # 벡터 연산 한 번으로 모든 dwj 동시 처리
# 루프 종료 후:
dw /= m
```

결과: for 루프 **2개 → 1개** (학습 예제를 도는 바깥 루프는 아직 남음)

---

## 예시

```python
import numpy as np

# 원소별 함수 예시
v = np.array([1.0, 2.0, 3.0])

print(np.exp(v))        # [ 2.718  7.389 20.086]
print(np.log(v))        # [0.     0.693  1.099]
print(np.maximum(v, 0)) # [1. 2. 3.]  (ReLU)
print(v ** 2)           # [1. 4. 9.]
print(1 / v)            # [1.    0.5   0.333]

# 행렬-벡터 곱
A = np.array([[1, 2], [3, 4]])
v = np.array([1, 1])
print(np.dot(A, v))     # [3 7]
```

---

## 요약
- 행렬-벡터 곱 `u = np.dot(A, v)` 한 줄로 이중 for 루프 제거
- `np.exp`, `np.log`, `np.abs`, `np.maximum`, `v**2`, `1/v` 등 원소별 함수로 for 루프 제거
- **규칙**: for 루프를 쓰기 전에 항상 NumPy 내장 함수 대체 가능성부터 확인
- 로지스틱 회귀: dw를 벡터로 만들어 특성 루프 제거 → for 루프 2개에서 1개로
- 다음 강의: 남은 학습 예제 루프까지 제거해 for 루프 없이 전체 학습 세트를 한 번에 처리
