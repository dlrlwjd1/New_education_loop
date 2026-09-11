# 03 Vectorizing Logistic Regression

## 개요
- 로지스틱 회귀의 **순전파(forward propagation)** 를 벡터화하는 방법
- 목표: m개의 학습 예제(training examples) 전체에 대한 경사하강법 1회 반복을 **명시적 for 루프 없이** 처리
- 학습 예제를 도는 바깥 루프까지 제거 → 전체 학습 세트를 한 번에 계산
- 핵심 도구: 입력을 열(column)로 쌓은 행렬 X, 그리고 브로드캐스팅(broadcasting)

---

## 내용

### 문제: for 루프로 예제를 하나씩 처리

기존 방식은 예제마다 z와 a를 따로 계산:
```
예제 1: z⁽¹⁾ = wᵀx⁽¹⁾ + b  →  a⁽¹⁾ = σ(z⁽¹⁾)
예제 2: z⁽²⁾ = wᵀx⁽²⁾ + b  →  a⁽²⁾ = σ(z⁽²⁾)
...
예제 m: z⁽ᵐ⁾ = wᵀx⁽ᵐ⁾ + b  →  a⁽ᵐ⁾ = σ(z⁽ᵐ⁾)
```
→ m번 반복하는 for 루프 필요

### 입력 행렬 X

모든 학습 입력을 **열 방향으로 나란히 쌓은** 행렬:

```
X = [ x⁽¹⁾  x⁽²⁾  ...  x⁽ᵐ⁾ ]      shape: (nx, m)
```
- 각 열(column)이 하나의 학습 예제
- 크기: **nx × m** (nx = 특성 수, m = 예제 수)

### Z를 한 줄로 계산

lowercase z들을 가로로 쌓아 **Z** (1 × m 행 벡터)로 정의:

```
Z = [ z⁽¹⁾  z⁽²⁾  ...  z⁽ᵐ⁾ ] = wᵀX + [b b ... b]
```

- `wᵀX` → [wᵀx⁽¹⁾, wᵀx⁽²⁾, ..., wᵀx⁽ᵐ⁾] (1 × m 행 벡터)
- 여기에 b를 각 원소에 더하면 정확히 z⁽¹⁾, z⁽²⁾, ... 정의와 일치

**NumPy 코드:**
```python
Z = np.dot(w.T, X) + b
```

### 브로드캐스팅(broadcasting)

- 위 코드에서 `b`는 실수 하나(1×1)인데, `wᵀX`는 1×m 벡터
- 파이썬이 자동으로 b를 1×m 벡터 `[b b ... b]`로 **확장(expand)** 해서 더해줌
- 이 자동 확장을 **broadcasting**이라 부름 (다음 영상에서 자세히 다룸)

### A를 한 번에 계산

lowercase a들을 가로로 쌓아 **A** (1 × m)로 정의. 벡터화된 sigmoid 함수에 Z를 넣으면 A를 효율적으로 출력:

```python
A = sigma(Z)    # Z를 입력받아 모든 a⁽ⁱ⁾를 한 번에 출력
```

### 대문자 쌓기 규칙 정리

| 소문자 (예제별) | 대문자 (가로로 쌓음) | shape |
|---|---|---|
| x⁽ⁱ⁾ | X | (nx, m) |
| z⁽ⁱ⁾ | Z | (1, m) |
| a⁽ⁱ⁾ | A | (1, m) |

---

## 예시

```python
import numpy as np

def sigmoid(z):
    return 1 / (1 + np.exp(-z))

# nx=3 특성, m=4 예제
X = np.random.rand(3, 4)   # (nx, m)
w = np.random.rand(3, 1)   # (nx, 1)
b = 0.5                     # 실수 → 브로드캐스팅됨

# 순전파 전체를 for 루프 없이 2줄로
Z = np.dot(w.T, X) + b      # (1, 4)
A = sigmoid(Z)              # (1, 4)

print(Z.shape, A.shape)     # (1, 4) (1, 4)
```

---

## 요약
- 학습 입력을 열로 쌓아 행렬 **X (nx × m)** 구성
- 순전파 전체를 for 루프 없이 **2줄**로:
  - `Z = np.dot(w.T, X) + b` → 모든 z⁽ⁱ⁾ 동시 계산 (1 × m)
  - `A = sigmoid(Z)` → 모든 a⁽ⁱ⁾ 동시 계산 (1 × m)
- 실수 b가 벡터에 더해질 때 **브로드캐스팅**으로 자동 확장
- 소문자를 가로로 쌓으면 대문자: x→X, z→Z, a→A
- 다음 강의: **역전파(backward propagation)** 의 gradient 계산도 벡터화
