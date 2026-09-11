# Key Terms — APIs and SDKs

## 개요
- "Working with APIs and SDKs" 레슨의 용어 정리(reading). Azure CLI/Azure ML Studio/Hugging Face Transformers·Datasets/Azure Open Datasets의 정의와 기본 코드 예시를 미리 소개한다.

## 내용

| 용어 | 정의 |
|---|---|
| Azure CLI | Azure 서비스와 리소스를 관리·상호작용하는 커맨드라인 도구 |
| Azure ML Studio | 머신러닝 개발·배포를 위한 클라우드 기반 환경 |
| Transformers | 자연어 처리 작업을 위한 Hugging Face 라이브러리 |
| Datasets | 데이터셋을 로드하기 위한 Hugging Face 라이브러리 |
| Open Datasets | 큐레이션된 공개 데이터셋을 로드하는 Azure 리소스 |

## 예시
```python
# Azure CLI
import azure.cli.core
cli = azure.cli.core.AzureCli()
cli.invoke(["storage", "account", "list"])

# Azure ML Studio
from azureml.core import Workspace
ws = Workspace.create(name='myworkspace',
                       subscription_id='...',
                       resource_group='myresourcegroup',
                       location='eastus')

# Hugging Face Transformers
from transformers import pipeline
classifier = pipeline("sentiment-analysis")
result = classifier("I love this course!")

# Hugging Face Datasets
from datasets import load_dataset
dataset = load_dataset("glue", "mrpc")
train_dataset = dataset["train"]

# Azure Open Datasets
from azureml.opendatasets import PublicHolidays
holidays = PublicHolidays()
holidays_df = holidays.to_pandas_dataframe()
```

## 요약
- MLOps 실무에서 자주 쓰는 클라우드/모델/데이터셋 SDK 5가지의 기초 진입점을 미리 훑어본다.
