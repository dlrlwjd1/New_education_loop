# CI/CD Packaging with GitHub Actions

## 개요
- **GitHub Actions**로 Hugging Face + FastAPI 컨테이너를 **GitHub Container Registry(GHCR)**에 자동으로 빌드·푸시하는 CI/CD 파이프라인을 구성하는 9분 실습. GitHub이 제공하는 사전 제작 템플릿을 살펴본 뒤, 강사가 미리 만들어둔 더 단순한 워크플로를 실행한다.

## 내용

### 왜 자동화가 필요한가
- Docker 컨테이너를 수동으로 빌드해 레지스트리(Docker Hub, Azure Container Registry, AWS 등)에 푸시하려면 매번 Docker 설치 확인, 태깅 등 여러 단계를 반복해야 함 — **자동화(automation)는 이 모든 과정을 "한 번의 클릭"으로 줄이는 기초 프로세스**.

### GitHub Actions 템플릿 살펴보기
- GitHub의 **Actions → New workflow**에서 "container"로 검색하면 **"Publish Docker container"** 같은 사전 제작 템플릿이 존재 — 서명(cosigning) 등 다양한 기능이 이미 포함되어 있으며, 레지스트리로 **`ghcr.io`(GitHub Container Registry)**를 사용하면 별도 계정 설정 없이 GitHub Actions 자격증명으로 바로 인증 가능.
- 강사는 이 템플릿을 그대로 쓰지 않고, **서명 없는 훨씬 단순한 자체 워크플로**를 예시로 사용 — "이 리포지토리를 기초로 삼아 그대로 복사해서 써도 된다"고 안내.

### 워크플로 구조
- **트리거**: `push`/`pull_request`는 주석 처리(머지 시 자동 배포하지 않도록)하고, 대신 **`workflow_dispatch`**를 사용 — 버튼 클릭으로 수동 빌드 트리거 가능.
- **Job**: `ubuntu-latest`에서 실행.
- **단계**:
  1. 리포지토리 체크아웃(`actions/checkout`).
  2. **Docker Buildx 설정** — Docker 빌드에 필요한 툴체인 준비.
  3. **GHCR 인증** — 이미 정의된 변수로 처리되어 별도 설정 불필요.
  4. **리포지토리 이름 소문자 변환** — GitHub 리포지토리 이름에 대문자/카멜케이스가 있으면 컨테이너 퍼블리싱 규칙상 모두 소문자로 변환해야 하므로 이를 처리하는 몇 줄의 스크립트 포함.
  5. **빌드 및 푸시**: `push: true`로 설정(빌드만 하고 싶으면 `false`) — **태그는 GitHub SHA(커밋 해시)**를 사용해 매번 자동으로 버전 관리.
- 핵심 메시지: 이 워크플로는 **하드코딩된 변수가 없어 그대로 복사-붙여넣기해도 동작**한다는 것.

### 실행 — `workflow_dispatch`로 수동 트리거
- Actions → CI 워크플로 선택 → **"Run workflow"** → main 브랜치에서 실행 → 큐(queued) → 진행 중(in progress) → 각 단계(체크아웃, 빌드 설정, 인증, 이름 소문자화, 빌드/푸시)가 순서대로 로그에 나타남.
- 완료 후 리포지토리의 **Packages** 섹션에서 방금 게시된 컨테이너 이미지(`huggingface-ghcr`, "1분 전 게시됨")를 확인 — 이제 누구나(인증 후) **`docker pull`**로 이 이미지를 받아 어디서든 FastAPI + Hugging Face 서비스를 실행할 수 있음.

## 예시
```yaml
# .github/workflows/ci.yml (핵심 구조 요약)
name: CI
on:
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: docker/setup-buildx-action@v2
      - name: Log in to GHCR
        uses: docker/login-action@v2
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
      - name: Lowercase repository name
        run: echo "REPO=$(echo ${{ github.repository }} | tr '[:upper:]' '[:lower:]')" >> $GITHUB_ENV
      - name: Build and push
        uses: docker/build-push-action@v4
        with:
          push: true
          tags: ghcr.io/${{ env.REPO }}:${{ github.sha }}
```

```bash
# 게시된 이미지 사용
docker pull ghcr.io/<owner>/<repo>:<sha>
```

## 요약
- `workflow_dispatch`로 수동 트리거되는 GitHub Actions 워크플로 하나면, 체크아웃→Buildx 설정→GHCR 인증(GitHub 자격증명 재사용)→리포지토리 이름 소문자화→빌드·푸시(태그는 커밋 SHA)까지 **하드코딩 없이 그대로 복사해 쓸 수 있는** CI/CD 파이프라인을 완성할 수 있다.
- 결과물은 GitHub의 Packages 섹션에 자동 게시되며, 이후 누구나 `docker pull`로 받아 FastAPI + Hugging Face 서비스를 어디서든 실행할 수 있다는 것이 자동화의 실질적 가치다.
