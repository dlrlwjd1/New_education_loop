# Lesson Reflection — Hugging Face Automation

## 개요
- Lesson 3(및 Module 3 전체)를 요약하는 공식 회고 자료: GitHub Actions로 컨테이너 빌드·테스트·안정적인 클라우드 배포까지 Hugging Face 파이프라인을 자동화하는 법을 다뤘다.

## 내용

### 회고 질문
- GitHub Actions가 릴리즈 속도(release velocity)를 어떻게 개선할 수 있는가?
- 컨테이너 레지스트리 선택에 영향을 미치는 요인은 무엇인가?
- ML 시스템에서 자동화가 핵심인 이유는 무엇인가?

### 도전 과제
1. 컨테이너 배포 단계 전에 테스트 추가해보기.
2. Docker Hub나 AWS ECR을 레지스트리로 사용해보기.
3. 배포를 모니터링하고 실패 시 롤백을 설정해보기.

## 요약
- Lesson 3은 GitHub Actions로 GHCR/ACR/Docker Hub 세 가지 레지스트리에 컨테이너를 자동 패키징하는 법(Using/Automating with GitHub Actions, ACR, Docker Hub)을 다뤘다.
- 이것으로 **Module 3 "Deploying Hugging Face" 전체(Packaging → Azure ML Studio → Automation)가 완료**되었다. 다음은 Module 4 "Applied Hugging Face"로 이어진다.
