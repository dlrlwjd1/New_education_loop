# Demo: Setting up MLflow

## 개요
- VS Code에서 `pip install mlflow`로 MLflow를 설치하고 `mlflow ui`로 로컬 서버를 띄운 뒤, MLflow UI의 기본 구조(Experiments, Evaluation/Trace, Models)를 살펴보는 2분 데모.

## 내용

### MLflow 설치와 실행
- VS Code 터미널에서 `pip install mlflow` 실행 — MLflow는 PyPI에 등록된 Python 패키지이므로 pip으로 바로 설치 가능.
- 설치 완료 후 `mlflow ui` 실행 → **포트 5000**에서 MLflow 서비스 시작.
- 포트를 열어 새 탭에서 MLflow 서비스 노출 → 기본(default) 실험이 존재하지만 아직 정보는 없음.
- 사용된 버전은 **2.17.2**(설치 시 버전을 지정하지 않아 최신 안정 버전이 자동 선택됨).

### MLflow가 저장하는 것
- 데이터 엔지니어·분석가·과학자가 실행한 모든 실험이 MLflow에 저장됨 — 이 정보를 바탕으로 어떤 모델이 특정 사용 사례에 가장 적합한지 판단하고, 수행한 모든 반복(iteration)의 이력을 확인 가능.

### MLflow UI 구조
- **실험(Experiments)**: 실험을 실행할 때 이름(예: `default`)과 함께 저장.
- **Evaluation/Trace**: **Trace**는 요청이나 로그로 볼 수 있고, **Evaluation**은 동일 모델 내 여러 실행(run)을 비교하는 것.
- **Models**: MLflow의 모델 저장소 역할 — 다음 데모에서 더 자세히 다룰 예정.

## 예시
```bash
# MLflow 설치
pip install mlflow

# MLflow UI 서버 실행 (기본 포트 5000)
mlflow ui
```

## 요약
- 이 데모는 `pip install mlflow`와 `mlflow ui` 명령만으로 로컬 MLflow 서버를 손쉽게 띄울 수 있음을 보여주며, MLflow UI가 Experiments(실험 저장), Evaluation/Trace(비교·로그), Models(모델 저장소)로 구성되어 있음을 소개한다.
