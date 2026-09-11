# Key Terms — Performing Feature Engineering

## 개요
- Lesson 2("Performing Feature Engineering") 핵심 용어 정리. EDA, 하이퍼파라미터 최적화, MLflow 모델 트래킹, SageMaker KMeans 하이퍼파라미터 튜닝을 다룬다.

## 내용

| 용어 | 설명 |
|---|---|
| **Exploratory Data Analysis(EDA)** | 모델링 전에 데이터의 속성을 이해하기 위해 시각적·통계적으로 분석하는 것. |
| **Hyperparameter optimization** | 성능을 극대화하는 최적의 모델 설정값을 찾는 것. |
| **MLflow model tracking** | 실행(run) 중의 파라미터, 메트릭, 결과 모델을 로깅해 실험을 추적하는 것. |
| **SageMaker KMeans++ hyperparameter optimization** | KMeans 추정기(estimator)에 대한 하이퍼파라미터 범위를 정의하고 튜닝하는 것. |

## 예시
```python
import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

data = pd.read_csv("data.csv")

# Histogram of labels
sns.displot(data['quality'])

# Feature correlation plots
sns.boxplot(x="high_quality", y="alcohol", data=data)
plt.show()
```

```python
# 하이퍼파라미터 최적화 (개념 구조)
from hyperopt import fmin, hp, SparkTrials

space = {"learning_rate": hp.loguniform("lr", -5, -1),
         "max_depth": hp.randint("md", 4, 100)}

def train_model(params):
    # XGBoost training
    return AUC

best_params = fmin(fn=train_model, space=space,
                    trials=SparkTrials(), algo=tpe.suggest,
                    max_evals=100)
```

```python
import mlflow

with mlflow.start_run():
    mlflow.log_metric("auc", 0.91)
    mlflow.log_params(best_params)
    mlflow.xgboost.log_model(model, "xgb_model")
```

```python
# SageMaker KMeans 하이퍼파라미터 튜닝 (개념 구조)
import boto3
from sagemaker.tuner import IntegerParameter, CategoricalParameter, HyperparameterTuner

sagemaker_session = boto3.Session().client(service_name='sagemaker')

hyperparameter_ranges = {
    'k': IntegerParameter(2, 10),
    'init': CategoricalParameter(['kmeans++', 'random']),
    'max_iterations': IntegerParameter(50, 200),
}

tuner = HyperparameterTuner(
    sagemaker_session=sagemaker_session,
    estimator=kmeans_estimator,
    objective_metric_name='test:msd',
    hyperparameter_ranges=hyperparameter_ranges,
    max_jobs=20,
    max_parallel_jobs=3)

tuner.fit(inputs={'train': s3_train_data, 'test': s3_test_data})

best_params = tuner.best_training_job().hyperparameters
```

핵심 단계:
1. KMeans 추정기에 대한 하이퍼파라미터 범위 정의.
2. 추정기·하이퍼파라미터 범위·튜닝 목표로 `HyperparameterTuner` 생성.
3. `.fit()`을 호출해 하이퍼파라미터 최적화 작업 실행.
4. `.best_training_job()`으로 최적 하이퍼파라미터 확인.

## 요약
- 이번 레슨은 EDA로 데이터 속성을 파악한 뒤, Hyperopt·MLflow·SageMaker HyperparameterTuner를 활용해 모델 하이퍼파라미터를 최적화하고 실험을 추적하는 피처 엔지니어링 워크플로 전반을 다룬다.
