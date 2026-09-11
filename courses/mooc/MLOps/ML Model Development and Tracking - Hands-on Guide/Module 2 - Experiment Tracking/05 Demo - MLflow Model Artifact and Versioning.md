# Demo: MLflow Model Artifact and Versioning

## 개요
- 결정 트리 회귀 모델(Decision Tree Regressor)의 아티팩트(pickle 파일)를 확인하고 이를 **모델 레지스트리**에 등록해 버전을 부여하는 과정, 그리고 모델 파일을 로컬로 다운로드하는 방법을 다루는 3분 데모.

## 내용

### 모델 선택과 아티팩트 확인
- 이전 데모의 실험(`ML model experiment`)에서, 이번 데모를 위해 (실제로는 이렇게 결정하지 않지만) 학습 시간이 짧다는 이유로 **Decision Tree Regressor**를 선택한다고 가정.
- 해당 모델 실행의 **Artifacts** 탭 확인 — 이 모델을 위해 생성된 패키지들이 존재하며, 이를 **pickle 파일**이라고도 부름.
- 이 파일이 바로 서빙(serving) 측에서 통합되어야 할 파일 — 모델 배포가 이뤄질 때 실제로 API에서 서빙되는 것이 바로 이 pickle 파일. **JAR 파일**이나 **PyPI 패키지**와 유사하다고 생각하면 됨.

### 모델 레지스트리에 등록
1. **Register Model** 옵션 클릭.
2. 모델 선택 — 기존 모델이 없으므로 **Create a New Model** 클릭 후 이름 지정(예: `New ML Deployment`).
3. **Register Model** 클릭 → Models 탭으로 이동 → 새 모델이 생성되고 **버전 1(version 1)**로 태그됨.
4. 동일 실험을 다시 실행해 모델을 다시 저장하면 **버전 2**가 생성됨.

### 왜 모델을 저장해야 하는가
- 이는 **Docker 레지스트리**와 유사한 개념 — Docker 이미지를 레지스트리에 저장하는 이유는 여러 사람이 소비할 수 있게 하고 버전 관리 등의 기능을 제공하기 위함.
- ML 모델도 동일한 생애주기를 거치므로, 모델을 레지스트리에 저장하는 것이 모델 배포·서빙으로 넘어가기 전 **첫 단계**.

### 모델 파일 다운로드
- 로컬에서 모델을 테스트하고 싶다면 다운로드 옵션 사용 가능: Experiments → `ML model experiment` → Decision Tree Regressor → Artifacts → `model.pkl` 파일 → 다운로드 옵션 클릭.
- 이를 통해 `model.pkl` 파일을 로컬로 받아 서빙 코드를 로컬에서 빌드·테스트 가능.

## 요약
- MLflow 모델 레지스트리는 Docker 레지스트리와 유사하게 모델(pickle 파일)을 버전별로 등록·관리해, 배포·서빙 전 단계에서 모델을 중앙화하고 필요 시 로컬로 다운로드해 테스트할 수 있게 해준다.
