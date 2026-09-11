# 11 TensorFlow

## 개요
- TensorFlow의 기본 구조를 예제로 살펴본다. **핵심: 순전파(비용 계산)만 정의하면 역전파(미분)는 자동.**

---

## 내용

### 예제: J(w) = w² − 10w + 25 최소화
- (= (w−5)² 이므로 최소값은 w=5)

```python
import numpy as np
import tensorflow as tf

w = tf.Variable(0, dtype=tf.float32)          # 최적화할 파라미터
optimizer = tf.keras.optimizers.Adam(0.1)     # 학습률 0.1

def train_step():
    with tf.GradientTape() as tape:           # 연산 순서 기록
        cost = w**2 - 10*w + 25
    trainable_variables = [w]
    grads = tape.gradient(cost, trainable_variables)
    optimizer.apply_gradients(zip(grads, trainable_variables))

for i in range(1000):
    train_step()
print(w)   # ≈ 5
```

### GradientTape
- **순전파 단계의 연산 순서를 "녹음"** (카세트 테이프 비유) → 거꾸로 재생하며 역전파·gradient를 자동 계산.
- 그래서 **forward prop만 구현**하면 됨.

### 데이터를 비용 함수에 넣기
- 비용이 파라미터 w뿐 아니라 데이터 x, y에도 의존할 때:
```python
x = np.array([1.0, -10.0, 25.0], dtype=np.float32)   # 계수 역할
# cost = x[0]*w**2 + x[1]*w + x[2]
```
- 간단 문법: `optimizer.minimize(cost_fn, [w])` 로 GradientTape+apply_gradients를 한 줄로 대체 가능.

### 계산 그래프(computation graph)
- 비용 계산 코드가 **계산 그래프**를 구성 → TensorFlow가 forward만 보고 **backward(역전파)를 자동 도출**.
- 옵티마이저 교체 등도 **한 줄**로 변경 가능 → 복잡한 신경망 개발이 훨씬 쉬움.

---

## 요약
- TensorFlow는 비용 함수(순전파)만 정의하면 GradientTape로 미분·역전파를 자동 처리.
- `tf.Variable`(파라미터), optimizer, GradientTape가 핵심. 옵티마이저/설정 변경이 한 줄.

## Course 2 마무리
- 하이퍼파라미터 탐색, Batch Norm, 프로그래밍 프레임워크(TensorFlow) 학습 완료.
- 다음: **Course 3 — Structuring Machine Learning Projects**
