# Train a Model using the Python SDK

## 개요
- Azure ML SDK v2의 공식 "Getting Started" 샘플 노트북을 복제해, 학습 스크립트를 작성 → 재현 가능한 job으로 제출 → MLflow 실험 결과·Dockerfile·메트릭을 확인하고 온라인 엔드포인트로 배포하는 전체 흐름을 시연하는 6분 데모.

## 내용

### 샘플 노트북 복제
- Azure ML Studio → Notebooks → 샘플 디렉토리에서 SDK v1/v2 튜토리얼 등 다양한 예제 확인 가능.
- "AzureML getting started" 노트북을 선택해 **Clone this notebook**으로 자신의 워크스페이스로 가져옴.

### 노트북 → 스크립트 변환
- 자격 증명(credentials)을 입력하는 셀 실행.
- `%%writefile` 매직 커맨드로 노트북 셀 내용을 `main.py` 스크립트 파일로 작성 — Python 표준 라이브러리로 커맨드라인 인자 파싱(argument parsing) 처리, pandas 사용, **MLflow**로 실험 추적(정확도 등 파라미터 캡처), scikit-learn 모델 사용.

### Azure ML SDK로 Job 구성
- `azure.ai.ml`에서 `command`, `Input` 임포트 → **URI 파일** 방식으로 데이터셋 경로 지정.
- 하이퍼파라미터를 손쉽게 조정 가능 — 예: test/train 비율을 0.1 vs 0.2로, 학습률(learning rate)도 조정 가능.
- 모든 것이 애플리케이션 파일로 기록되어 있어 실험을 그대로 재현 가능.

### Job 제출과 결과 확인
- `ml_client.create_or_update(job)`으로 job 제출 — 구독 ID(subscription ID) 등 필요한 파라미터가 설정되어 있어야 함.
- 완료 후 MLflow 기반 학습 job 실험 결과를 확인 가능:
  - **재현 가능한 커맨드**: 이 실험을 그대로 재현할 수 있는 정확한 명령어 확인 가능.
  - **환경(environment)**: 링크를 클릭하면 **Dockerfile**이 단계별로 완전히 재현 가능하게 기록되어 있음 — 베이스 이미지, 설치 명령, 변수, pip 의존성, 환경 변수까지 모두 확인 가능.
  - **메트릭**: 학습 정확도, F1 점수 등 성능 지표와 시각화(모델 성능을 보여주는 이미지) 확인 가능.
  - **코드**: 실제 코드 자체도 확인 가능해 향후 다시 실행할 수 있는 완전히 재현 가능한 산출물 완성.

### 온라인 엔드포인트 배포
- 이 모델을 **온라인 엔드포인트(online endpoint)**로 배포하는 것도 아주 적은 코드로 가능.
- 배포 후 딕셔너리 형태의 입력으로 실제 모델을 호출·테스트하고 프로덕션에 투입 가능. 필요 시 정리(clean up)도 가능.

### 핵심 통찰
- 강사는 **SDK v2 샘플 튜토리얼**로 시작하는 것을 이 인터페이스에 입문하는 가장 좋은 방법으로 추천 — Microsoft Azure Machine Learning Studio를 활용한 재현 가능한 MLOps 워크플로 구축 과정을 단계별로 안내해줌.

## 예시
```python
from azure.ai.ml import command, Input

job = command(
    code="./src",
    command="python main.py --data ${{inputs.data}} --test_train_ratio ${{inputs.test_train_ratio}} --learning_rate ${{inputs.learning_rate}}",
    inputs={
        "data": Input(type="uri_file", path="<data-path>"),
        "test_train_ratio": 0.2,
        "learning_rate": 0.1,
    },
    environment="<environment-name>@latest",
    compute="cpu-cluster",
    display_name="sklearn-credit-default"
)

ml_client.create_or_update(job)
```

## 요약
- Azure ML SDK v2는 노트북 셀을 스크립트로 변환 → command job으로 제출 → MLflow 실험 추적(재현 가능한 명령어, Dockerfile, 메트릭, 코드까지 모두 기록) → 온라인 엔드포인트 배포로 이어지는 완전히 재현 가능한 MLOps 워크플로를 몇 줄의 코드만으로 구현할 수 있게 해준다.
