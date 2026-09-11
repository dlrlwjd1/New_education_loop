# Practical Scenario — Tracking Model Versions

## 개요
- AI가 생성한 실전 시나리오형 성찰 활동(real-world application, ungraded). 감성 분석 모델의 여러 버전을 추적하는 데 어떤 모델 관리 컴포넌트가 가장 중요한지 생각해보는 연습.

## 내용

### 시나리오
- 새 감성 분석 모델을 개발 중인 ML 엔지니어. 여러 버전의 모델을 학습했고, 향후 배포를 위해 적절한 버전 관리와 추적성(traceability)을 확보해야 함.
- **질문**: 방금 배운 모델 관리 컴포넌트 중 어떤 것이 감성 분석 모델의 서로 다른 버전을 추적하는 데 가장 중요하며 그 이유는?

### 정리
- **Model Registry**가 정답에 해당 — 앞선 "Registering a Hugging Face Dataset on Azure"에서 확인했듯, Azure ML Studio에 등록된 데이터/모델 자산은 자동으로 **버전(version)**이 매겨지고 쌓인다.
- Model Registry는 모델을 중앙에서 관리하며 **계보(lineage)를 추적**하므로, 여러 버전의 모델을 체계적으로 비교·롤백·배포할 수 있게 해준다.

## 요약
- 모델의 여러 버전을 추적하고 재현성을 확보하려면 **Model Registry**가 핵심 컴포넌트이며, 이는 Azure ML Studio가 데이터/모델 자산에 자동으로 버전을 부여하는 방식과 직접 연결된다.
