# Lesson Reflection — Packaging Hugging Face

## 개요
- Lesson 1 "Packaging Hugging Face" 전체를 요약하는 공식 회고 자료: FastAPI로 Hugging Face 모델을 컨테이너화하고 GitHub Actions로 빌드 프로세스를 자동화(CI/CD)하는 법을 다뤘다.

## 내용

### 회고 질문
- 모델과 API를 컨테이너로 패키징하는 이유는 무엇인가?
- CI/CD로 컨테이너화를 자동화하는 이점은 무엇인가?
- 패키징이 모델 배포 워크플로에 어떻게 도움이 될 수 있는가?

### 도전 과제
1. FastAPI-Hugging Face 통합에 커스텀 예측 로직 추가해보기.
2. 배포 단계 전에 CI/CD 파이프라인에 테스트 설정해보기.
3. 컨테이너 레지스트리로부터 모델을 서빙하는 옵션 조사해보기.

## 요약
- Lesson 1은 `transformers.pipeline` + FastAPI로 GPT-2 텍스트 생성 API를 만들고(Hugging Face and FastAPI), Dockerfile로 컨테이너화하고(Containerizing Hugging Face), 로컬→컨테이너 순으로 검증한 뒤(Running FastAPI with Hugging Face), GitHub Actions의 `workflow_dispatch`로 GHCR에 자동 배포(CI/CD Packaging)까지 완성했다.
- 다음 레슨("Hugging Face and Azure ML Studio")에서는 Azure ML Studio에 Hugging Face 모델·데이터셋을 등록하는 단계로 이어진다.
