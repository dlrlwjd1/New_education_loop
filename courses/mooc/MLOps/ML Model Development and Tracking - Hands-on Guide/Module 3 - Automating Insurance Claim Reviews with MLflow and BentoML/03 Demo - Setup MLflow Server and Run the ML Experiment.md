# Demo: Setup MLflow server and run the ML Experiment

## 개요
- MLflow 서버를 실행하고, **Isolation Forest**(이상 탐지) 모델로 합성 보험 청구 데이터를 학습시켜 결과를 MLflow에 기록하는 4분 데모.

## 내용

### MLflow 서버 실행
- `mlflow ui` 실행 → MLflow 서비스 시작 → 팝업 알림에서 "Open Browser"를 클릭해 웹 UI 접근성 확인.
- MLflow UI가 실행 중인 터미널은 계속 사용해야 하므로, **새 터미널**(bash)을 열어 다음 작업 진행.

### Isolation Forest 모델 학습 스크립트
- 새 파일 `isolation_model.py` 생성 — 코드 구성:
  1. 디렉토리의 청구 데이터(claims data) 읽기.
  2. 모든 결과를 **MLflow 서버**(지정된 URL)에서 추적하도록 설정.
  3. 모델에 사용할 **피처(feature)**: 청구 금액(claim amount), 서비스 수(number of services), 환자 나이(patient age), 제공자 ID(provider ID), 마지막 청구 이후 경과일(days since last claim) — **`claim ID`는 피처가 아님**(모델의 최종 판단에 사용되지 않는 식별자일 뿐).
  4. 데이터를 학습/테스트 세트로 분할, 실험 이름 지정.
  5. 모델(Isolation Forest) 생성·학습 후 모든 로그 지표를 MLflow UI에 저장.
- `python3 isolation_model.py` 실행 — 이 단계는 조직에서 보통 데이터 과학자가 수행하지만, 이를 위해서는 MLflow가 어딘가에서 실행 중이어야 함. **MLOps 엔지니어**로서 이 MLflow 서버를 Kubernetes, EC2, 또는 조직의 인프라에 맞는 곳에 설정하는 역할을 맡게 됨.

### MLflow UI에서 결과 확인
- 모델 실행 완료 → MLflow UI에서 새로고침 → `health insurance claim` 실험 선택 → 임의의 실행(run)을 선택하면 모델과 지표들을 확인 가능.
- 실제 조직에서는 첫 번째 반복(iteration)이 곧바로 프로덕션에 쓰이지 않고 여러 번 반복해 비즈니스 사용 사례에 맞는 최종 반복을 사용 — 하지만 이 데모에서는 첫 번째 반복을 바로 사용.
- 이 모델도 아티팩트(artifact)를 생성하며, 이는 **pickle 파일**(모델 파일 자체가 저장된 형식) 형태 — 다운로드 버튼으로 로컬에 받아 추가 테스트·개발에 활용 가능.

### 다음 단계 예고
- 모델 학습·실험 실행·pickle 파일 확보가 끝났으니, 다음 단계는 **BentoML**로 서비스를 구축하는 것 — 다음 영상에서 다룰 예정.

## 예시
```python
# isolation_model.py (개념 구조)
import mlflow
import pandas as pd
from sklearn.ensemble import IsolationForest
from sklearn.model_selection import train_test_split

mlflow.set_tracking_uri("http://localhost:5000")
mlflow.set_experiment("health insurance claim")

df = pd.read_csv("synthetic_health_claims.csv")

features = ["claim_amount", "number_of_services", "patient_age",
            "provider_id", "days_since_last_claim"]
X = df[features]

X_train, X_test = train_test_split(X, test_size=0.2)

with mlflow.start_run():
    model = IsolationForest(contamination=0.1)
    model.fit(X_train)

    predictions = model.predict(X_test)
    anomaly_rate = (predictions == -1).mean()

    mlflow.log_param("contamination", 0.1)
    mlflow.log_metric("anomaly_rate", anomaly_rate)
    mlflow.sklearn.log_model(model, "isolation_forest_model")
```

## 요약
- 이 데모는 MLflow 서버를 실행한 뒤, `claim_id`를 제외한 5개 피처로 Isolation Forest 이상 탐지 모델을 학습시켜 그 결과(모델 파일 포함)를 MLflow에 기록하며, 다음 단계인 BentoML 서빙으로 이어지는 다리 역할을 한다.
