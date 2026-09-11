# Key Terms — Training Machine Learning Models

## 개요
- Lesson 2 핵심 용어 정리. 손실 함수 최적화(전역/지역 최솟값), 경사하강법, 과적합과 K-폴드 교차 검증, 신경망을 다룬다.

## 내용

| 용어 | 설명 |
|---|---|
| **Global minimum(전역 최솟값)** | 모델이 도달할 수 있는 손실 함수(loss function)의 가능한 가장 낮은 오차값. 이를 찾는 것이 모델 정확도를 최적화한다. |
| **Local minimum(지역 최솟값)** | 오차 지형(error landscape)에서 낮지만 준최적인 지점 — 머신러닝 모델이 여기에 갇혀 전역 최솟값을 찾지 못하게 할 수 있음. |
| **Gradient descent(경사하강법)** | 손실을 최소화하기 위해 모델 파라미터를 반복적으로 조정하는 최적화 알고리즘. 학습률(learning rate)이 스텝 크기를 조절. |
| **Overfitting(과적합)** | 모델이 학습 데이터에는 지나치게 잘 맞지만 새 데이터에는 일반화가 잘 안 되는 현상. 교차 검증으로 과적합 여부를 평가. |
| **K-Fold Cross Validation(K-폴드 교차 검증)** | 모델 성능을 평가하고 과적합을 방지하는 기법. 학습 데이터를 k개 파티션(폴드)으로 나눠, k-1개 폴드로 학습하고 남은 폴드로 성능을 테스트. |
| **Neural network(신경망)** | 신호를 전달하는 상호 연결된 노드의 여러 층으로 구성된 머신러닝 모델. |

## 예시
```python
import matplotlib.pyplot as plt

loss = [0.8, 0.5, 0.3, 0.1, 0.15, 0.05]
epochs = [0, 1, 2, 3, 4, 5]

plt.plot(epochs, loss)
plt.scatter([3], [0.1], color='red')    # 지역 최솟값
plt.scatter([5], [0.05], color='green')  # 전역 최솟값
plt.title("Convergence to Minimum Loss")
plt.show()
```

```python
import numpy as np

# 최소화할 예시 함수
def f(x):
    return x**2

# 함수의 도함수
def df(x):
    return 2*x

learning_rate = 0.1

# 경사하강법 알고리즘
x = 5  # 초기값
for i in range(10):
    x -= learning_rate * df(x)
    print(f"Iteration {i+1}: x = {x}")

print(f"Final value of x: {x}")
```

```python
from sklearn.model_selection import KFold
from sklearn.neighbors import KNeighborsClassifier

X = np.array([1, 2, 3, 4, 5])
y = np.array([0, 1, 2, 2, 1])

kf = KFold(n_splits=3, shuffle=True)
test_error = []

for train_index, test_index in kf.split(X):
    X_train, X_test = X[train_index], X[test_index]
    y_train, y_test = y[train_index], y[test_index]

    model = KNeighborsClassifier(n_neighbors=1)
    model.fit(X_train.reshape(-1, 1), y_train)

    test_error.append(1 - model.score(X_test.reshape(-1, 1), y_test))

print("Test Errors:", test_error)
```

```python
from sklearn.neural_network import MLPClassifier

X = [[0, 0], [1, 1]]
y = [0, 1]

mlp = MLPClassifier(hidden_layer_sizes=(10, 10, 10), max_iter=500)
mlp.fit(X, y)

print(mlp.predict([[2., 2.]]))
```

## 요약
- 이번 레슨은 경사하강법으로 손실을 최소화해 전역 최솟값을 찾는 과정(지역 최솟값에 갇히는 위험 포함), K-폴드 교차 검증으로 과적합을 평가하는 방법, 그리고 다층 신경망의 기본 구조까지 모델 학습의 핵심 최적화 개념을 다룬다.
