# Key Terms — Evaluating Machine Learning Problems

## 개요
- Lesson 3 핵심 용어 정리. 모델 평가 지표(AUC, 혼동 행렬)와 언더피팅/오버피팅 개념을 코드 예시와 함께 다룬다.

## 내용

| 용어 | 설명 |
|---|---|
| **Area Under ROC Curve(AUC)** | 모델의 참 양성(true positive)과 거짓 양성(false positive) 예측 사이의 균형을 평가하는 지표. 높을수록 좋음. |
| **Confusion matrix(혼동 행렬)** | 실제 클래스별로 모델의 올바른/잘못된 예측을 요약한 표. 분류 평가에 사용. |
| **Underfitting(언더피팅)** | 모델이 데이터의 중요한 패턴을 포착하지 못하는 것. 모델 복잡도나 학습이 너무 부족한 데서 비롯됨. |
| **Overfitting(오버피팅)** | 모델이 학습 데이터에는 너무 가깝게 맞지만 새 데이터에 일반화가 잘 안 되는 것. 모델 복잡도가 지나치게 높은 데서 비롯됨. |

## 예시
```python
from sklearn.metrics import roc_auc_score

y_true = [0, 0, 1, 1]
y_pred = [0.1, 0.3, 0.8, 0.9]

auc = roc_auc_score(y_true, y_pred)
print("AUC:", auc)
# AUC: 0.75
```

```python
from sklearn.metrics import confusion_matrix

y_true = [1, 0, 1, 1, 0]
y_pred = [0, 1, 1, 1, 0]

conf_mat = confusion_matrix(y_true, y_pred)
print(conf_mat)
# [[1 1]
#  [1 2]]
```

```python
import numpy as np
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

# 비선형 데이터
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([1, 3, 2, 3, 5])

# 단순 선형 모델 적합
model = LinearRegression()
model.fit(X, y)

plt.plot(X, y, '.')
plt.plot(X, model.predict(X), 'r-')
plt.title("Underfit model")
plt.show()
```

```python
from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline
from sklearn.linear_model import LinearRegression
import matplotlib.pyplot as plt

X = [[1], [2], [3], [4], [5]]
y = [1, 3, 2, 3, 5]

model = make_pipeline(PolynomialFeatures(7), LinearRegression())
model.fit(X, y)

plt.plot(X, y, '.')
plt.plot(X, model.predict(X), 'r-')
plt.title("Overfit model")
plt.show()
```

## 요약
- 이번 레슨은 AUC와 혼동 행렬로 분류 모델을 평가하는 방법, 그리고 모델 복잡도가 너무 낮으면 언더피팅, 너무 높으면 오버피팅으로 이어지는 트레이드오프를 코드 예시로 다룬다.
