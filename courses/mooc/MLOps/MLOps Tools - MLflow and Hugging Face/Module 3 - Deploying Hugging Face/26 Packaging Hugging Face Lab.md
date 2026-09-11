# Packaging Hugging Face Lab

## 개요
- `alfredodeza/huggingface-ghcr` 리포지토리를 포크해 GitHub Actions로 컨테이너를 빌드·게시하는 실습(ungraded lab). 이번 모듈에서 다룬 CI/CD 패키징 실습을 자신의 계정에서 직접 재현한다.

## 내용

### 사전 준비
- 리포지토리 **`alfredodeza/huggingface-ghcr`**(MLOps packaging: GitHub Container Registry에 빌드·푸시)를 자신의 계정으로 **포크**.
- 이 리포지토리는 Dockerfile, GitHub Actions 워크플로, Python 코드(FastAPI + Hugging Face, 단일 엔드포인트 노출)의 좋은 시작점을 제공.

### 실습 단계
1. 리포지토리 포크.
2. **수정 없이 그대로 GitHub Actions를 실행**해 자신의 컨테이너화된 애플리케이션을 등록.
3. 컨테이너가 **GitHub 패키지(Package)**로 등록되었는지 확인.
4. 애플리케이션에 새로운 변경을 가하고 **컨테이너 재게시**.
5. 워크플로 파일의 **트리거를 변경**해 main에 코드가 머지될 때 자동으로 게시되도록 설정.

## 요약
- 이번 랩은 Lesson 1의 "CI/CD Packaging with GitHub Actions"에서 다룬 워크플로를 자신의 GitHub 계정에서 그대로(수정 없이) 실행해보고, 이후 코드를 변경해 재게시하고 트리거 방식(수동 → main 머지 시 자동)까지 바꿔보는 종합 실습이다.
