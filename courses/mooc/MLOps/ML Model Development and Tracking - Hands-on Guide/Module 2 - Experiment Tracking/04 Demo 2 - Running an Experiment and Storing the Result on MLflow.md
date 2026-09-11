# Demo 2: Running an experiment and storing the result on MLflow

## 개요
- `example_mlflow.py`를 실행해 실험 결과를 MLflow UI에서 확인하고, 3개 모델의 지표를 **Compare** 기능으로 비교하는 2분 데모(Part 2, 마지막).

## 내용

### 스크립트 실행
- `python3 example_mlflow.py` 실행 — 이 코드가 성공하려면 MLflow UI가 실행 중이어야 함.
- 대규모 조직에서는 일반적으로 MLflow UI를 **Kubernetes 서비스**에 호스팅해 모든 데이터 과학자가 접근할 수 있도록 하며, 각 데이터 과학자에게 사용자명·비밀번호를 부여하는 등 결과 저장 전 **인증(authentication)** 관련 보안 규칙을 구성할 수 있음.

### MLflow UI에서 결과 확인
- Experiments로 이동 → 새로 생성된 `ml model experiment` 확인.
- 이 실험 안에 서로 다른 데이터 과학 모델(ML 모델) 각각에 대응하는 **3개의 실행(run)** 존재 — 각 실행의 소요 시간, 사용된 예시 데이터, scikit-learn 모델 사용 여부 등 확인 가능.

### Evaluation — 모델 비교
- **Evaluation** 탭으로 이동 → 세 모델 실행을 모두 선택 후 **Compare** 클릭.
- 세 모델에 대해 생성된 지표(metric)들을 비교 확인 가능 — 이 지표들은 모델의 파라미터처럼 생각할 수 있으며, 최고의 지표를 가진 모델이 향후 모델 개발에 선택해야 할 모델.
- 5개의 지표가 제공되며, 세 모델 각각의 값을 확인하고 다양한 시각화 옵션으로도 볼 수 있음.
- 이 UI는 특정 사용 사례에 어떤 모델을 채택할지 결정해야 하는 모든 종류의 데이터 과학 실험에 매우 유용.

### 다음 단계 예고
- 다음 영상에서는 **모델 파일을 모델 레지스트리(Model Registry)에 저장하는 방법**을 다룰 예정.

## 요약
- 이 데모는 MLflow UI의 Experiments 탭에서 3개 모델 실행 결과를 확인하고, Evaluation의 Compare 기능으로 5개 지표를 나란히 비교해 최적 모델을 선택하는 실전 워크플로를 보여준다.
