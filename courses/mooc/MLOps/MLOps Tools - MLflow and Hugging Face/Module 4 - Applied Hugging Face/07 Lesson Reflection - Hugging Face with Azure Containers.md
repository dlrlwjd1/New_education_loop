# Lesson Reflection — Hugging Face with Azure Containers

## 개요
- Lesson 1 전체를 요약하는 공식 회고 자료: GitHub Actions 자동화로 컨테이너화된 Hugging Face 모델을 Azure Container Apps에 배포하는 법을 다뤘다.

## 내용

### 회고 질문
- Container Apps가 ML 애플리케이션 관리를 어떻게 간소화할 수 있는가?
- 수동 컨테이너 배포 프로세스에서 어떤 위험이 발생하는가?
- 실패 시 롤백이 가능하도록 워크플로를 어떻게 확장할 수 있는가?

### 도전 과제
1. 성능, 실패, 트래픽 같은 앱 인사이트 모니터링해보기.
2. Azure의 배포 링(deployment rings)을 활용해 카나리(canary) 배포 구현해보기.
3. 스테이징과 프로덕션 환경 설정해보기.

## 요약
- Lesson 1은 Azure Container App 생성(포트 8000 Ingress 설정) → 리소스 증설(CPU 2코어/RAM 4GB) → 서비스 프린시펄+ACR 자격증명으로 GitHub Actions 자동 배포 → 잘못된 포트/문법 오류 트러블슈팅까지 컨테이너 배포의 전체 사이클을 다뤘다.
- 다음 레슨("Fine-Tuning and ONNX Exporting")에서는 모델 파인튜닝과 ONNX 포맷으로의 내보내기로 이어진다.
