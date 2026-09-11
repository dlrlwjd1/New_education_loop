# Azure ML Python SDK

## 개요
- 지금까지 웹 UI로 해온 작업(모델·데이터셋 등록)을 **Azure ML Python SDK 공식 문서**를 훑어보며 프로그래매틱하게도 동일하게 할 수 있음을 확인하는 5분 영상.

## 내용

### SDK의 전반적 역할
- UI로 했던 대부분의 작업이 **Python SDK와 대응(parity)**됨 — 인프라 설정, 노드 구성, **웹 서비스 배포**(모델을 즉시 배포·서빙), 특화된 인프라로 모델 학습 트리거 등 다양한 기능 제공.
- 문서가 매우 방대하고 상세함 — 강사도 "스크롤해도 절반도 못 갔다"고 언급할 정도.

### Workspace(WS) — 모든 상호작용의 출발점
- Azure ML과 상호작용할 때 항상 필요한 핵심 개념은 **Workspace(문서에서 `ws`로 표기)**.
- `Workspace.create()`: 워크스페이스 이름, **구독 ID(subscription ID)**, 리소스 그룹(없으면 자동 생성 가능), 위치(location) 지정.
- 한 번 만든 워크스페이스는 **`config.json`** 설정 파일로 저장해두고 재사용 가능 — 인증을 매번 새로 하지 않아도 됨.
- **로컬에서도 실행 가능** — 클라우드에서 실행할 필요 없이, 인증만 완료되면 로컬 개발 환경에서도 Azure ML과 상호작용 가능.

### 모델 등록 — SDK 버전
- 모델에 이름을 붙이고 등록하는 과정이 웹 UI의 폼과 동일한 정보를 담음 — 인증 후에는 모델과 상호작용(등록/삭제/다운로드)을 프로그래매틱하게 수행 가능.

### 데이터셋 API
```python
from azureml.core import Dataset

dataset = Dataset.get_by_name(workspace, name="wine-dataset")
df = dataset.to_pandas_dataframe()
```
- Hugging Face `datasets`와 유사하게, Azure에 이미 등록된 데이터셋을 **pandas DataFrame으로 변환**하는 기능 제공.
- URL 경로로부터 데이터를 등록하는 기능도 있음(이 영상에서 자세히 다루지는 않음, 문서에서 추가 탐색 권장).

### 왜 중요한가
- Azure 클라우드 인프라 안에서, Hugging Face로부터 가져온 것들을 **자신의 모델 탐색·학습·배포**에 활용할 수 있다는 것 — 클라우드 제공자의 힘을 레버리지하는 데 유용.

## 예시
```python
from azureml.core import Workspace

ws = Workspace.create(
    name="demo-ml",
    subscription_id="<subscription-id>",
    resource_group="demo-ml",
    location="eastus",
)
ws.write_config(path=".", file_name="config.json")

# 이후 재사용
ws = Workspace.from_config()
```

```python
from azureml.core import Dataset

dataset = Dataset.get_by_name(ws, name="wine-dataset")
df = dataset.to_pandas_dataframe()
```

## 요약
- Azure ML Python SDK는 **Workspace(인증/구독/리소스그룹) → 모델 등록/배포 → 데이터셋 조회(pandas 변환)**라는 흐름으로, 지금까지 웹 UI에서 수행한 모든 작업을 프로그래매틱하게 재현할 수 있게 해준다.
- `config.json`으로 워크스페이스 인증 정보를 저장해두면 로컬 환경에서도 반복적으로 Azure ML과 상호작용할 수 있다는 것이 실무적으로 중요한 포인트다.
