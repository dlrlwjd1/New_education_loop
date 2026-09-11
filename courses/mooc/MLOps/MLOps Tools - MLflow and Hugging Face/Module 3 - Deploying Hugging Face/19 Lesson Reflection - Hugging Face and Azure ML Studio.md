# Lesson Reflection — Hugging Face and Azure ML Studio

## 개요
- Lesson 2 전체를 요약하는 공식 회고 자료: 중앙 집중식 추적·버전관리·배포·라이프사이클 관리를 위해 Hugging Face 모델과 데이터셋을 Azure ML Studio에 등록하는 법을 다뤘다.

## 내용

### 회고 질문
- Azure ML Studio 같은 엔터프라이즈 ML 플랫폼이 협업에 어떻게 도움이 되는가?
- 코드만이 아니라 모델과 데이터셋도 등록해야 하는 이유는 무엇인가?
- Azure ML Studio는 어떤 배포 옵션을 제공하는가?

### 도전 과제
1. 노트북에서 학습한 모델을 Azure 레지스트리에 등록해보기.
2. 데이터셋 버전 변경과 모델 재학습에 미치는 영향을 추적해보기.
3. 레지스트리·배포를 자동화하는 Azure ML SDK를 조사해보기.

## 요약
- Lesson 2는 Hugging Face 데이터셋/모델을 다운로드해 Azure ML Studio에 등록(웹 UI)하고, Explore/Profile로 탐색적 분석을 수행하고, Azure ML Python SDK(Workspace/Model/Dataset)로 이 모든 것을 프로그래매틱하게 재현하는 법을 다뤘다.
- 다음 레슨("Hugging Face Automation")에서는 GitHub Actions와 Azure Container Registry/Docker Hub를 활용한 완전 자동화된 배포 파이프라인으로 이어진다.
