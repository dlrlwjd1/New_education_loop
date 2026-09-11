# Key Terms — More Advanced Azure ML and MLOps Concepts

## 개요
- Lesson 3 핵심 용어 정리. Azure CLI 확장, Experiment, 하이퍼파라미터 튜닝, Notebook, Python SDK를 다룬다.

## 내용

| 용어 | 설명 |
|---|---|
| **CLI Extension** | 커맨드라인에서 데이터셋, 모델, 파이프라인 같은 Azure ML 워크로드를 관리하는 Azure CLI 도구. |
| **Experiment(실험)** | 모델 학습 스크립트의 실행 이력, 메트릭, 출력을 조직하는 Azure ML 워크스페이스 내 컨테이너. |
| **Hyperparameter Tuning(하이퍼파라미터 튜닝)** | 최적 값을 찾기 위해 모델 하이퍼파라미터 조합을 자동으로 반복 탐색하는 것. |
| **Notebook** | 코드 작성, 시각화, ML 실험 문서화를 위한 Azure ML 환경. |
| **SDK** | ML 워크플로 구축을 위한 API를 제공하는 Azure Machine Learning Python 소프트웨어 개발 키트. |

## 예시
```python
from azureml.core import Experiment

# Get experiment by name
experiment = Experiment(workspace, "automl-experiment")

# Submit a run under the experiment
run = experiment.submit(config)

print(run.get_portal_url())
```

```python
from azureml.train.hyperdrive import GridParameterSampling, BanditPolicy
from azureml.train.hyperdrive import choice, uniform

# Define hyperparameter search space
hparams = GridParameterSampling({
    "learning_rate": choice(0.01, 0.1),
    "momentum": uniform(0.9, 0.99)
})

# Configure early stopping policy
policy = BanditPolicy(slack_amount=0.2, evaluation_interval=1)
```

## 요약
- 이번 레슨은 Azure CLI 확장으로 커맨드라인에서 ML 워크로드를 관리하고, Experiment로 실행 이력을 조직하고, HyperDrive로 하이퍼파라미터를 튜닝하고, Notebook과 Python SDK로 ML 워크플로를 구축하는 더 심화된 Azure ML 개념들을 다룬다.
