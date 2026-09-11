# Lesson Reflection — More Advanced Azure ML and MLOps Concepts

## 개요
- Lesson 3 전체를 요약하는 공식 회고 자료: Azure Machine Learning Studio의 핵심 심화 기능(CLI, Experiments, 하이퍼파라미터 튜닝, Notebooks, SDK) 개요를 다뤘다.

## 내용

### 핵심 포인트
- CLI 확장은 커맨드라인에서 데이터셋·모델 같은 ML 자산을 관리할 수 있게 해준다.
- Experiment는 실행을 조직하고 학습 스크립트에 대한 추적을 제공한다.
- 하이퍼파라미터 튜닝은 최적 조합을 탐색해 모델 반복을 자동화한다.
- Notebook은 코드를 작성·시각화해 실험을 문서화할 수 있게 해준다.
- SDK는 Python으로 엔드투엔드 ML 워크플로를 구축하는 API를 제공한다.

### 회고 질문
1. 자신의 역할에 가장 유용해 보이는 CLI 기능은 무엇인가?
2. 여러 학습 실행(run)을 어떻게 조직하겠는가?
3. 하이퍼파라미터 튜닝에서 언제 조기 종료를 활성화하겠는가?
4. 어떤 노트북 기능이 협업에 도움이 되는가?
5. 어떤 SDK 기능이 자신의 모델 구축을 가속화할 수 있는가?

### 도전 탐구
1. CLI로 등록된 데이터셋을 관리해보기.
2. 학습 실행의 메트릭을 실험에 로깅해보기.
3. 분류 모델의 하이퍼파라미터를 튜닝해보기.
4. 노트북에 모델 학습 스크립트를 문서화해보기.
5. 데이터 준비와 모델링을 포함한 엔드투엔드 SDK 파이프라인을 구축해보기.

## 요약
- Lesson 3는 CLI(커맨드라인 관리) → GitHub Actions 트리거 → 하이퍼파라미터 튜닝 → Python SDK v2로 재현 가능한 학습 job까지, Azure ML의 심화 MLOps 기능을 다뤘으며, 이것으로 Module 5와 "MLOps Platforms: Amazon SageMaker and Azure ML" 코스 전체가 마무리된다.
