# Automating Packaging with Docker Hub

## 개요
- GitHub Actions로 Hugging Face 모델 컨테이너를 **Docker Hub**에 자동 푸시하는 워크플로를 구성하는 6분 실습. ACR/GHCR과 달리 **Docker Hub 액세스 토큰** 발급 과정이 핵심이다.

## 내용

### 워크플로 트리거
- 이번 예제는 **main 브랜치에 푸시할 때마다 자동 트리거**되도록 구성(이전 예제들과 달리 push 트리거를 활성 상태로 둠), 동시에 **`workflow_dispatch`**도 추가해 수동 트리거도 가능하게 함.

### 워크플로 단계
1. 리포지토리 체크아웃.
2. **`docker/login-action@v1`**로 Docker Hub 인증 — **사용자 이름 + 액세스 토큰(access token)**이 필요.
3. **빌드 및 푸시**: 컨텍스트는 루트, Dockerfile은 루트에 위치, `push: true`, 태그는 **`huggingface-fastapi:latest`**.

### Docker Hub 액세스 토큰 발급
- `hub.docker.com`에 로그인 → **Account Settings → Security → Access Tokens**.
- **"New Access Token"** → 설명 입력(예: "GitHub Actions packaging for ML") → 권한: **Read, Write, Delete**(이번 목적엔 이 조합이 적절) → 생성된 토큰을 즉시 복사(다시 볼 수 없음).

### GitHub Secrets 등록
- 리포지토리 **Settings → Secrets and variables → Actions**에서:
  - **`DOCKERHUB_USERNAME`**
  - **`DOCKERHUB_TOKEN`**
- 워크플로 YAML에서 참조하는 변수명과 **정확히 일치**해야 함 — 강사가 실제로 워크플로 파일을 다시 열어 이름이 일치하는지 재확인하는 과정을 보여줌.

### 실행 및 검증
- Actions → **"Docker Image CI"** 워크플로 선택 → `workflow_dispatch`로 **"Run Workflow"** 클릭.
- 실행 완료까지 **약 2분 18초** 소요.
- Docker Hub로 돌아가 확인 — **`huggingface-fastapi`** 리포지토리에 `latest` 태그로 이미지가 "7분 전"에 푸시된 것을 확인.

## 예시
```yaml
# .github/workflows/docker-image.yml (핵심 구조)
name: Docker Image CI
on:
  push:
    branches: [main]
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Login to Docker Hub
        uses: docker/login-action@v1
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}
      - name: Build and push
        uses: docker/build-push-action@v4
        with:
          context: .
          file: ./Dockerfile
          push: true
          tags: <username>/huggingface-fastapi:latest
```

## 요약
- Docker Hub를 타깃으로 한 자동화는 **Docker Hub 액세스 토큰 발급(Read/Write/Delete 권한) → GitHub Secrets(DOCKERHUB_USERNAME/DOCKERHUB_TOKEN) 등록 → 워크플로의 변수명 일치 확인**이라는 절차로 완성되며, ACR/GHCR과 비교해 인증 방식(사용자명+액세스 토큰)이 가장 큰 차이점이다.
- 이것으로 Lesson 3에서 다룬 세 가지 레지스트리(GHCR, ACR, Docker Hub) 모두에 대한 자동 패키징 파이프라인 구성법을 확인했다.
