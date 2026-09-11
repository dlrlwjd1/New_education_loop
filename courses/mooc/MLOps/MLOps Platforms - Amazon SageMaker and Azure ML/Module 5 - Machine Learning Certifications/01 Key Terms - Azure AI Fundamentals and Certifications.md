# Key Terms — Azure AI Fundamentals and other Azure Certifications

## 개요
- Lesson 1 핵심 용어 정리. Azure Machine Learning Studio, Automated ML, Microsoft 인증 커리큘럼의 Learning Path/Module 개념을 다룬다.

## 내용

| 용어 | 설명 |
|---|---|
| **Azure Machine Learning Studio** | Azure ML 모델을 구축·배포하는 웹 기반 인터페이스. AutoML, 파이프라인, 컴퓨트 클러스터 같은 Azure ML 기능에 손쉽게 접근 가능. |
| **Automated ML(AutoML)** | 주어진 데이터셋에 대해 최고 성능의 모델을 찾기 위해 다양한 모델과 하이퍼파라미터를 자동으로 반복 시도하는 Azure ML 기능. 수동 시행착오보다 시간을 절약. |
| **Learning Path** | Microsoft 인증 커리큘럼에서 하나의 주제를 중심으로 묶인 관련 학습 모듈들의 집합. |
| **Learning Module** | 하나의 학습 목표에 초점을 맞춘 단일 페이지. 특정 개념을 가르치기 위한 비디오, 텍스트, 지식 확인(knowledge check)을 포함. |

## 예시
```python
from azureml.core import Workspace

# Connect to Azure Machine Learning Studio
ws = Workspace.from_config()

print(ws.name)
```

```python
from azureml.train.automl import AutoMLConfig

# Set up automated ML experiment
automl_config = AutoMLConfig(task='regression')

experiment = Experiment(ws, "auto-ml-experiment")
local_run = experiment.submit(automl_config)

print(local_run.get_status())
```

## 요약
- 이번 레슨은 Azure ML Studio(웹 인터페이스)와 AutoML(자동 모델 탐색)이라는 Azure 핵심 도구, 그리고 Microsoft 인증 커리큘럼의 Learning Path/Learning Module 구조를 다룬다.
