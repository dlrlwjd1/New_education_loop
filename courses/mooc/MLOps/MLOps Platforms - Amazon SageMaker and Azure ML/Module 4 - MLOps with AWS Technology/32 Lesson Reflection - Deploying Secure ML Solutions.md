# Lesson Reflection — Deploying and Operationalizing Secure Machine Learning Solutions

## 개요
- Lesson 3 전체를 요약하는 공식 회고 자료: 서버리스와 컨테이너화 옵션을 통해 AWS에 ML 솔루션을 배포하는 방법을 다뤘다. SageMaker로 모델을 운영화하고 최소 권한 원칙으로 접근을 보안하는 내용도 포함했다.

## 내용

### 핵심 포인트
- Lambda는 이벤트 기반 서버리스 컴퓨트를 가능하게 한다.
- SageMaker는 학습부터 배포까지 ML 생애주기를 관리한다.
- App Runner는 컨테이너화된 웹 앱을 빠르게 배포한다.
- 데이터 드리프트 탐지는 모델 재학습을 촉발한다.
- 접근을 제한하는 것이 보안을 개선한다.

### 회고 질문
1. 컨테이너화된 솔루션보다 Lambda가 더 쉬운 경우는 언제인가?
2. SageMaker가 수동 ML 배포보다 생산성을 어떻게 개선할 수 있는가?
3. 자체 EC2 서버를 프로비저닝하는 것보다 App Runner가 어떤 이점을 제공하는가?
4. 데이터 드리프트를 위해 모델을 모니터링해야 하는 이유는 무엇인가?
5. 최소 권한 원칙이 거버넌스에 어떻게 도움이 되는가?

### 도전 과제
1. S3 업로드에 의해 트리거되는 Lambda 함수를 만들어보기.
2. 지연시간 KPI에 따라 SageMaker 엔드포인트를 오토스케일링해보기.
3. App Runner로 FastAPI 앱을 배포해보기.
4. SageMaker 모델에 드리프트 탐지를 구성해보기.
5. App Runner 서비스 역할을 특정 S3 버킷에만 접근하도록 제한해보기.

## 요약
- Lesson 3는 최소 권한 원칙과 통합 보안 → SageMaker Studio 워크플로·Canvas 예측 → 데이터 드리프트 모니터링 → PyTorch+App Runner 배포 실습까지 다뤘으며, 이것으로 Module 4(MLOps with AWS Technology)가 마무리된다.
