# Azure ML Python SDK (Reading)

## 개요
- Azure ML Python SDK의 5대 핵심 개념(Workspaces, Experiments, Runs, Models, Pipelines)을 정리하는 공식 읽기 자료.

## 내용

### 핵심 요점
- Python SDK로 Azure ML 서비스에서 ML 워크플로를 구축·실행 가능 — 데이터 준비, 모델 학습/검증, AutoML, 배포를 아우름.

### 5대 핵심 개념
1. **Workspaces** — Azure 구독을 리소스에 연결해 실험하고 모델을 배포하는 단위.
2. **Experiments** — 모델 학습 실행(run)들의 모음을 조직화.
3. **Runs** — 실행을 모니터링하기 위해 개별 시도(trial)를 추적.
4. **Models** — 관리·배포를 위한 ML 모델의 클라우드 버전.
5. **Pipelines** — 전체 ML 작업의 워크플로를 일련의 단계로 자동화.

### 회고 질문
1. 자체 ML 플랫폼을 구축하는 것 대비 Azure ML Python SDK를 사용하는 잠재적 이점은?
2. Experiments를 사용해 하이퍼파라미터 튜닝을 조직화하거나 모델을 비교하려면 어떻게 해야 하는가?
3. 수동 모델 구축 대비 AutoML이 해결할 수 있는 어려움은 무엇인가?
4. SDK를 통한 모델 관리와 배포를 어떻게 활용할 수 있는가?
5. 어떤 유형의 ML 워크플로가 파이프라인으로 전환하기 좋은 후보인가?

### 도전 과제
1. Azure ML 워크스페이스와 실험을 생성하는 코드 작성하기.
2. 테스트 모델 학습 스크립트의 성능을 추적하는 실행(run)을 제출해보기.

## 요약
- Azure ML Python SDK는 **Workspace(연결) → Experiment(조직화) → Run(개별 시도 추적) → Model(클라우드 버전 관리) → Pipeline(전체 워크플로 자동화)**이라는 계층 구조로 ML 워크플로를 다루며, 앞선 영상에서 다룬 Workspace/Model/Dataset은 이 구조의 일부임을 확인할 수 있다.
