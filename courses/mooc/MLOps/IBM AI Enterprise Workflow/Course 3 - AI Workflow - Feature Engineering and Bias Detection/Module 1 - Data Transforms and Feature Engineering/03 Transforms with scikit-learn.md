# Transforms with scikit-learn

## 개요
- 형식: 읽기 자료 (약 3분)
- 핵심: scikit-learn API의 **세 인터페이스**를 정리한다. 이 강좌의 나머지 용어가 전부 여기에 기댄다.

## 내용

### 서로 연동되도록 설계된 세 인터페이스

| 인터페이스 | 하는 일 | 대표 메서드 |
|---|---|---|
| **Transformer** | 데이터를 한 형식에서 다른 형식으로 변환 | `.transform()` |
| **Estimator** | 모델을 구축하고 학습 | `.fit()` |
| **Predictor** | 예측 수행 | `.predict()` |

입력은 **NumPy 배열**과 **SciPy 스파스 행렬**로 표준화되어 있다.

### 무엇이 Estimator인가
`.fit()`을 제공하는 것이 Estimator 인터페이스다. 그리고 그 범위가 생각보다 넓다.

- 모든 지도 학습·비지도 학습 알고리즘
- **특징 추출(feature extraction)**
- **특징 선택(feature selection)**
- **차원 축소(dimensionality reduction)**

즉 차원 축소도 `.fit()`을 갖는 Estimator다. 이 점이 파이프라인에 끼워 넣을 수 있는 근거가 된다.

### 두 인터페이스를 함께 갖는 경우
`StandardScaler` 같은 일부 Estimator는 Transformer 인터페이스도 갖는다.

## 예시

```python
from sklearn import preprocessing

scaler = preprocessing.StandardScaler().fit(X_train)
X_train = scaler.transform(X_train)
X_test = scaler.transform(X_test)
```

> **주의할 점** — `fit`은 `X_train`에만 하고, `X_test`에는 `transform`만 적용한다. 테스트 데이터의 통계를 학습에 흘리지 않기 위해서다.

## 요약
- scikit-learn은 Transformer / Estimator / Predictor 세 인터페이스로 되어 있다.
- 차원 축소·특징 선택도 Estimator라서 파이프라인 단계로 들어갈 수 있다.
- 이 모듈은 그중 **Transformer와 Estimator**에 집중한다.
