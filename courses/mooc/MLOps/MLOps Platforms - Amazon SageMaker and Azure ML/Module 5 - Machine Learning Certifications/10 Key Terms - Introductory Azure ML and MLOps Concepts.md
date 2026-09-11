# Key Terms — Introductory Azure ML and MLOps Concepts

## 개요
- Lesson 2 핵심 용어 정리. Azure ML Studio, Automated ML, Workspace, Dataset, Deployment 개념을 코드 예시와 함께 다룬다.

## 내용

| 용어 | 설명 |
|---|---|
| **Azure Machine Learning Studio** | Automated ML, 파이프라인, 컴퓨트 클러스터 같은 Azure ML 기능에 접근할 수 있는 웹 기반 인터페이스. |
| **Automated ML** | 최고 성능의 모델을 결정하기 위해 모델과 하이퍼파라미터를 자동으로 반복 탐색하는 Azure ML 기능. |
| **Workspace(워크스페이스)** | Azure ML Studio와 모델 구축·배포 관련 서비스에 중앙화된 접근을 제공하는 Azure 리소스. |
| **Dataset(데이터셋)** | 모델 학습·스코어링에 사용하기 위해 Azure ML 워크스페이스에 등록된 구조화된 데이터. |
| **Deployment(배포)** | 학습된 모델을 의존성 및 설정과 함께 패키징해 애플리케이션에 통합하는 것. |

## 예시
```python
from azureml.train.automl import AutoMLConfig

# Configure Automated ML run
automl_config = AutoMLConfig(task='regression')

# Start experiment
experiment = Experiment(ws, "automl-experiment")
experiment.submit(automl_config)
```

```python
from azureml.core import Workspace

# Connect to the Azure Machine Learning workspace
ws = Workspace.from_config()

print(ws.name)
```

```python
# Register dataset
dataset = Dataset.File.from_files(path=data_urls)

dataset = dataset.register(
    workspace=ws,
    name="wine-ratings",
    description="Wine rating data"
)
```

## 요약
- 이번 레슨은 Workspace(중앙 접근점), Dataset(등록된 데이터), Automated ML(자동 모델 탐색), Deployment(패키징·통합)까지 Azure ML의 핵심 개념들을 boto3와 유사한 방식으로 Python SDK 코드와 함께 다룬다.
