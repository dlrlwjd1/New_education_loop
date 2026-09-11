# ML Model Development and Tracking: Hands-on Guide

**Course URL:** [mooc.org/learn/model-development-experiment-tracking-for-mlops](https://www.mooc.org/learn/model-development-experiment-tracking-for-mlops)

MOOC / KodeKloud. "Hands-On MLOps Fundamentals for ML Engineers" 스페셜라이제이션의 두 번째 코스(Course 2 of 3). 실험적인 코딩과 프로덕션 준비가 된 머신러닝 사이의 간극을 메우는 MLOps 생애주기의 "미들 루프(Middle Loop)"를 다루는 코스로, 3개 모듈로 구성. 실전 애플리케이션을 위한 ML 모델 개발, 모델 추적·버전 관리를 위한 MLOps 실천법, 컴퓨트 전략을 활용한 모델 성능 최적화, 데이터 처리·운영 자동화 시스템 구축을 다룸. 강사는 Mumshad Mannambeth.

## 모듈 구성
- [Module 1 - Model Development](Module%201%20-%20Model%20Development/) — 모델 개발 개요(약국 재고 예측 사례, Jupyter/Colab/SageMaker/Vertex AI), 모델 학습·하이퍼파라미터 튜닝(정밀도·재현율, 그리드 서치, 교차 검증), CPU vs GPU 비교
- [Module 2 - Experiment Tracking](Module%202%20-%20Experiment%20Tracking/) — MLflow 개요(Tracking/Projects/Models/Model Registry), 설치·설정, 실험 실행·비교(scikit-learn 3개 회귀 모델), 모델 아티팩트·버전 관리(모델 레지스트리)
- [Module 3 - Automating Insurance Claim Reviews with MLflow and BentoML](Module%203%20-%20Automating%20Insurance%20Claim%20Reviews%20with%20MLflow%20and%20BentoML/) — 보험 청구 자동화 캡스톤 프로젝트: 합성 데이터 생성, MLflow로 Isolation Forest 이상 탐지 모델 학습·추적, BentoML 모델 등록·서빙(`/predict`), Flask 앱으로 청구 업로드 UI 구축까지 엔드투엔드 파이프라인 구현

## 진행 상황
- [x] Module 1 — Model Development
- [x] Module 2 — Experiment Tracking
- [x] Module 3 — Automating Insurance Claim Reviews with MLflow and BentoML

## 강의 목록

<!-- course-inventory:start -->
### Module 1 - Model Development

- [01 Course Introduction](Module%201%20-%20Model%20Development/01%20Course%20Introduction.md)
- [02 Model Development Overview](Module%201%20-%20Model%20Development/02%20Model%20Development%20Overview.md)
- [03 Model Training and Hyperparameter Tuning](Module%201%20-%20Model%20Development/03%20Model%20Training%20and%20Hyperparameter%20Tuning.md)
- [04 World of CPUs and GPUs](Module%201%20-%20Model%20Development/04%20World%20of%20CPUs%20and%20GPUs.md)
- [05 How to Reach Out and Engage with the Community](Module%201%20-%20Model%20Development/05%20How%20to%20Reach%20Out%20and%20Engage%20with%20the%20Community.md)
- [06 Quiz - Model Development (Graded Assignment)](Module%201%20-%20Model%20Development/06%20Quiz%20-%20Model%20Development%20%28Graded%20Assignment%29.md)

### Module 2 - Experiment Tracking

- [01 Introduction to MLflow](Module%202%20-%20Experiment%20Tracking/01%20Introduction%20to%20MLflow.md)
- [02 Demo - Setting up MLflow](Module%202%20-%20Experiment%20Tracking/02%20Demo%20-%20Setting%20up%20MLflow.md)
- [03 Demo 1 - Running an Experiment and Storing the Result on MLflow](Module%202%20-%20Experiment%20Tracking/03%20Demo%201%20-%20Running%20an%20Experiment%20and%20Storing%20the%20Result%20on%20MLflow.md)
- [04 Demo 2 - Running an Experiment and Storing the Result on MLflow](Module%202%20-%20Experiment%20Tracking/04%20Demo%202%20-%20Running%20an%20Experiment%20and%20Storing%20the%20Result%20on%20MLflow.md)
- [05 Demo - MLflow Model Artifact and Versioning](Module%202%20-%20Experiment%20Tracking/05%20Demo%20-%20MLflow%20Model%20Artifact%20and%20Versioning.md)
- [06 Lab - Hands on with MLflow](Module%202%20-%20Experiment%20Tracking/06%20Lab%20-%20Hands%20on%20with%20MLflow.md)
- [07 Quiz - Model Development and Training (Lab Access Reading)](Module%202%20-%20Experiment%20Tracking/07%20Quiz%20-%20Model%20Development%20and%20Training%20%28Lab%20Access%20Reading%29.md)
- [08 Quiz - Experiment Tracking (Graded Assignment)](Module%202%20-%20Experiment%20Tracking/08%20Quiz%20-%20Experiment%20Tracking%20%28Graded%20Assignment%29.md)
- [09 The MLflow Migration - Role Play](Module%202%20-%20Experiment%20Tracking/09%20The%20MLflow%20Migration%20-%20Role%20Play.md)

### Module 3 - Automating Insurance Claim Reviews with MLflow and BentoML

- [01 Deploy App for Insurance Agents to Upload all Insurance Claims](Module%203%20-%20Automating%20Insurance%20Claim%20Reviews%20with%20MLflow%20and%20BentoML/01%20Deploy%20App%20for%20Insurance%20Agents%20to%20Upload%20all%20Insurance%20Claims.md)
- [02 Demo - Generate Dummy Data for the Project](Module%203%20-%20Automating%20Insurance%20Claim%20Reviews%20with%20MLflow%20and%20BentoML/02%20Demo%20-%20Generate%20Dummy%20Data%20for%20the%20Project.md)
- [03 Demo - Setup MLflow Server and Run the ML Experiment](Module%203%20-%20Automating%20Insurance%20Claim%20Reviews%20with%20MLflow%20and%20BentoML/03%20Demo%20-%20Setup%20MLflow%20Server%20and%20Run%20the%20ML%20Experiment.md)
- [04 Demo - Register the Model and Setup BentoML for Serving ML models](Module%203%20-%20Automating%20Insurance%20Claim%20Reviews%20with%20MLflow%20and%20BentoML/04%20Demo%20-%20Register%20the%20Model%20and%20Setup%20BentoML%20for%20Serving%20ML%20models.md)
- [05 Demo - Upgrade Python Flask App to Connect to BentoML for Online Serving](Module%203%20-%20Automating%20Insurance%20Claim%20Reviews%20with%20MLflow%20and%20BentoML/05%20Demo%20-%20Upgrade%20Python%20Flask%20App%20to%20Connect%20to%20BentoML%20for%20Online%20Serving.md)
- [06 Lab - Deploy App for Insurance Agents to Upload all Insurance Claims](Module%203%20-%20Automating%20Insurance%20Claim%20Reviews%20with%20MLflow%20and%20BentoML/06%20Lab%20-%20Deploy%20App%20for%20Insurance%20Agents%20to%20Upload%20all%20Insurance%20Claims.md)
- [07 Quiz - MLflow and BentoML (Graded Assignment)](Module%203%20-%20Automating%20Insurance%20Claim%20Reviews%20with%20MLflow%20and%20BentoML/07%20Quiz%20-%20MLflow%20and%20BentoML%20%28Graded%20Assignment%29.md)

<!-- course-inventory:end -->
