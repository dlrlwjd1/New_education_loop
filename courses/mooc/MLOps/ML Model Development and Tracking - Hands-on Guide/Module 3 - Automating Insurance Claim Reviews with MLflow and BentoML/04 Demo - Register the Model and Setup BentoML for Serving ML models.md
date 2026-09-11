# Demo: Register the Model and Setup BentoML for Serving ML models

## 개요
- MLflow에서 학습된 모델(pickle 파일)을 BentoML 모델 레지스트리에 등록하고, BentoML 서비스로 `/predict` 엔드포인트를 띄우는 3분 데모.

## 내용

### 모델 다운로드
- MLflow UI에서 해당 모델의 다운로드 버튼을 클릭 → `model.pickle` 파일 다운로드 → VS Code 편집기가 사용 중인 프로젝트 경로로 이동.

### BentoML 모델 등록 (`registermodel.py`)
- 새 파일 `registermodel.py` 생성 — 내용: `model.pickle` 경로의 모델을 읽어와 **health insurance anomaly detector** 라는 이름으로 BentoML 모델 레지스트리에 등록.
- `python3 registermodel.py` 실행 → 등록 완료.
- `bentoml models list` 명령으로 확인 → 등록된 모델이 BentoML 아티팩트 저장소(repository)에 존재함을 확인.
- **MLflow 아티팩트와 BentoML 아티팩트의 차이**: MLflow에는 수십 개의 실험을 실행한 만큼 많은 모델이 쌓일 수 있지만, BentoML 모델 목록에는 실제로 **서빙(serving)에 사용할 모델만** 등록해 두면 됨 — 즉 MLflow는 실험 전체의 기록소, BentoML은 프로덕션 서빙용 선별 저장소.

### 서빙 스크립트 (`service.py`)
- 새 파일 `service.py` 생성 — 내용: BentoML 모델 레지스트리에서 방금 등록한 ML 모델을 선택해 서빙에 사용하도록 지정. 특정 데이터 포맷(피처 스키마)을 입력으로 기대함.

### BentoML 서비스 실행
- 명령: `bentoml serve service.py --reload` 실행 — `--reload` 옵션은 로컬에서 코드를 수정할 때 BentoML UI에 즉시 반영되도록 함.
- 서비스가 **포트 3000**에서 실행됨 → 브라우저로 접속하면 `/predict` 엔드포인트 확인 가능.
- 이 `/predict` 엔드포인트는 어떤 프레임워크든 연결하여 필요한 피처 데이터를 전달하면 예측 결과를 받을 수 있는 구조.

### 다음 단계 예고
- BentoML 서비스는 준비되었지만, 최종 사용자(보험 청구 담당자)가 BentoML UI를 직접 사용하지는 않음 — 청구 담당자가 CSV 파일을 업로드할 수 있는 **웹 앱**을 별도로 구축해야 하며, 이를 다음 영상에서 다룸.

## 예시
```python
# registermodel.py (개념 구조)
import bentoml
import pickle

with open("model.pickle", "rb") as f:
    model = pickle.load(f)

bentoml.sklearn.save_model("health_insurance_anomaly_detector", model)
```

```bash
python3 registermodel.py
bentoml models list
```

```python
# service.py (개념 구조)
import bentoml
from bentoml.io import JSON

model_ref = bentoml.sklearn.get("health_insurance_anomaly_detector:latest")
model_runner = model_ref.to_runner()

svc = bentoml.Service("health_insurance_service", runners=[model_runner])

@svc.api(input=JSON(), output=JSON())
def predict(input_data):
    result = model_runner.predict.run(input_data)
    return {"prediction": result.tolist()}
```

```bash
bentoml serve service.py --reload
# 서빙 시작 → http://localhost:3000 에서 /predict 엔드포인트 확인
```

## 요약
- 이 데모는 MLflow에서 학습한 이상 탐지 모델을 BentoML 레지스트리에 등록(`registermodel.py`)하고, `service.py`로 `/predict` API 서비스를 정의해 `bentoml serve`로 포트 3000에서 서빙을 시작하며, 다음 단계로 실제 사용자용 웹 앱 구축을 예고한다.
