# Practical Scenario — Choosing a Cloud Dev Environment

## 개요
- 클라우드 개발자 워크스페이스(SageMaker Studio Lab, AWS CloudShell 등)의 장점을 적용해보는 5분짜리 AI 생성 인터랙티브 성찰 활동.

## 내용

### 시나리오
- 새로운 머신러닝 프로젝트를 시작하는 데이터 과학자 — 모델을 빠르게 프로토타이핑하고 버전 관리(version control)를 해야 하며, 학습(training)에 상당한 컴퓨팅 자원이 필요할 것으로 예상됨.
- 질문: 어떤 클라우드 기반 개발 환경을 선택할 것이며, 어떤 구체적 기능이 이 프로젝트에 적합한가?

### 종합 답변 (강의 개념 기반)
- 이 시나리오에는 **GitHub Codespaces**가 가장 적합하다.
  - **빠른 프로토타이핑**: Codespaces는 사전 설정된 환경을 즉시 제공하며, GitHub Copilot과의 긴밀한 통합으로 코드 작성 속도를 높여줌.
  - **버전 관리**: GitHub와 가장 긴밀하게 결합된 환경이므로, 별도 설정 없이 Git 기반 버전 관리가 자연스럽게 이뤄짐. GitHub Actions와의 손쉬운 연동으로 CI 파이프라인 구축도 용이.
  - **컴퓨팅 자원**: 다만 GPU가 크게 필요한 학습이라면, Codespaces 단독보다는 **AWS SageMaker Studio Lab**(무료 GPU 제공, Jupyter Notebook 기반)이나 **AWS Cloud9**(Lambda·S3 등 서버리스 학습 파이프라인과의 통합)을 보완적으로 함께 고려할 수 있음.
- 정리하면: 버전 관리와 협업 워크플로 중심이라면 GitHub Codespaces, 노트북 기반 프로토타이핑과 무료 GPU가 우선이라면 SageMaker Studio Lab이 적합하며, 실제로는 두 환경을 프로젝트 단계에 따라 함께 사용하는 것이 일반적이다.

## 요약
- 이 활동은 "버전 관리·협업 중심(Codespaces)"과 "노트북·GPU 프로토타이핑 중심(SageMaker Studio Lab)"이라는 두 축으로 클라우드 개발 환경을 선택하는 기준을 정리해보는 연습이다.
