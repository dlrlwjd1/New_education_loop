# Key Terms — Selecting the Appropriate Model(s) for a Given Machine Learning Problem

## 개요
- Lesson 1 핵심 용어 정리. 지도학습(회귀·분류)과 비지도학습(클러스터링)의 기본 개념과 코드 예시를 다룬다.

## 내용

| 용어 | 설명 |
|---|---|
| **Supervised learning(지도학습)** | 레이블이 있는 과거 데이터로 모델을 학습시켜 새로운 데이터에 대한 예측을 하는 것. 분류(classification)와 회귀(regression)가 대표적 예시. |
| **Unsupervised learning(비지도학습)** | 레이블이 없는 데이터에서 숨겨진 패턴을 찾는 것. 클러스터링과 차원 축소(dimensionality reduction)가 대표적 예시. |
| **Regression(회귀)** | 급여나 매출 같은 수치값을 예측하는 지도학습 기법. |
| **Clustering(클러스터링)** | 유사한 데이터 포인트를 함께 그룹화하는 비지도학습 기법. 데이터 내 범주를 식별하는 데 도움. |
| **Classification(분류)** | 스팸/정상, 사기/정상 같은 범주를 예측하는 지도학습 기법. |

## 예시
```python
import numpy as np
from sklearn.linear_model import LinearRegression

# 지도학습 - 회귀
X = np.array([[1], [2], [3]])  # 피처
y = np.array([100, 150, 200])  # 레이블
model = LinearRegression()
model.fit(X, y)
print(model.predict([[4]]))  # 학습된 모델로 예측
```

```python
from sklearn.neighbors import KNeighborsClassifier

# 지도학습 - 분류
X = [[0], [1], [2], [3]]
y = [0, 0, 1, 1]

model = KNeighborsClassifier(n_neighbors=3)
model.fit(X, y)
```

```python
from sklearn.cluster import KMeans

# 비지도학습 - 클러스터링
X = [[1, 1], [1, 2], [10, 20], [10, 21]]

clusterer = KMeans(n_clusters=2)
clusterer.fit(X)
```

## 요약
- 이번 레슨은 지도학습(회귀·분류)과 비지도학습(클러스터링)의 근본적 차이 — 레이블 유무 — 를 중심으로, 문제 유형에 맞는 모델을 선택하는 기초를 다진다.
