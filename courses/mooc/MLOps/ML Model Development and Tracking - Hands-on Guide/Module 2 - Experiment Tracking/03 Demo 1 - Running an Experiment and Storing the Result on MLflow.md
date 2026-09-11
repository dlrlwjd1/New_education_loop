# Demo 1: Running an experiment and storing the result on MLflow

## 개요
- scikit-learn으로 합성 회귀 데이터를 생성해 3개 모델(선형 회귀, 결정 트리, 랜덤 포레스트)을 학습·비교하고, 그 결과를 MLflow에 기록하는 `example_mlflow.py` 스크립트를 준비하는 2분 데모(Part 1).

## 내용

### 환경 준비
- 실험을 실행하려면 사용 사례와 데이터 과학 패키지가 필요 — 이번엔 **scikit-learn** 사용.
- MLflow UI가 실행 중인 터미널에서 `pip install`을 하면 UI가 중지되므로, **새 터미널**을 열어 설치 진행.
- 새 파일 `example_mlflow.py` 생성.

### 코드 구조
- scikit-learn을 사용하며, 먼저 MLflow UI에 연결(**tracking URL** 설정) — 실험이 실행되거나 모델이 학습될 때 모든 결과가 원격 MLflow 서버로 전송·저장되도록 함.
- 회귀 분석을 위한 **합성 데이터(synthetic data)** 생성 후 학습/테스트로 분할.
- 실험 이름을 `ML model experiment`로 지정.
- 모델을 학습시키고 예측을 수행한 뒤 핵심 지표(metrics)를 계산하는 함수 정의 — 이 지표들이 MLflow 서버에 저장되는 값.
- **선형 회귀(Linear Regression)**, **결정 트리(Decision Tree)**, **랜덤 포레스트(Random Forest)** 세 모델을 각각 실행하고, 각 모델이 생성한 지표를 동일 실험에 저장.
- 결과: 하나의 실험(experiment) 안에 세 개의 모델 지표(model metrics)가 기록됨.
- 코드를 실행하려면 scikit-learn 관련 Python 패키지 설치 필요.

## 예시
```python
# example_mlflow.py (개념 구조)
import mlflow
from sklearn.datasets import make_regression
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error

mlflow.set_tracking_uri("http://localhost:5000")
mlflow.set_experiment("ML model experiment")

X, y = make_regression(n_samples=1000, n_features=10, noise=0.1)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

def train_and_log(model, model_name):
    with mlflow.start_run(run_name=model_name):
        model.fit(X_train, y_train)
        predictions = model.predict(X_test)
        mse = mean_squared_error(y_test, predictions)
        mlflow.log_metric("mse", mse)

train_and_log(LinearRegression(), "linear_regression")
train_and_log(DecisionTreeRegressor(), "decision_tree")
train_and_log(RandomForestRegressor(), "random_forest")
```

## 요약
- 이 데모는 scikit-learn으로 3가지 회귀 모델(선형 회귀, 결정 트리, 랜덤 포레스트)을 학습시키고, MLflow의 tracking URI를 설정해 하나의 실험 아래 세 모델의 성능 지표를 기록하는 스크립트를 준비하는 과정을 다룬다.
