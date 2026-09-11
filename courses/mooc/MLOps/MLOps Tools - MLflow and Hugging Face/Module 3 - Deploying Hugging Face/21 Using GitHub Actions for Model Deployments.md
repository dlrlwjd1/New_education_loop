# Using GitHub Actions for Model Deployments

## 개요
- `huggingface-deploy-azure` 리포지토리를 예제로, **컨테이너 빌드/푸시 → Azure Container App 배포**까지 이어지는 GitHub Actions 워크플로 전체 구조를 개괄하는 5분 영상. 이번 영상은 개념 설명 위주이며, 실제 패키징/배포는 다음 영상들에서 이어진다.

## 내용

### 예제 애플리케이션
- 이전과 유사한 GPT-2 텍스트 생성 FastAPI 웹 앱.
- **Dockerfile**(15줄): 의존성 설치 → 웹 앱 복사 → **포트 8000 노출** → 엔트리포인트 `uvicorn` → `--host 0.0.0.0`으로 바인딩, `main` 모듈 실행.
- `requirements.txt`: `transformers`, `tensorflow`, `fastapi`, `uvicorn`.

### GitHub Actions 워크플로 구조 (`.github/workflows/main.yml`)
- **Azure Container App 이름**과 **리소스 그룹 이름**을 변수로 지정 — 강사는 리소스 그룹 이름을 앱 이름과 동일하게 지어 나중에 리소스를 찾아 삭제하기 쉽게 하는 습관을 언급.
- `push`/`pull_request` 트리거는 주석 처리 — 프로덕션 환경이라면 주석을 해제해 main 브랜치 변경 시 자동 트리거하도록 설정 가능.
- **`workflow_dispatch`**를 사용해 수동으로 파이프라인을 트리거 — "이름이 이상하고 기억하기 어렵지만, 워크플로/파이프라인을 설계할 때 알아둬야 할 유용한 기능"이라고 강조(이전 레슨에서도 반복 언급된 내용).

### 빌드 단계
1. **Docker 이미지 생성**을 위한 **Docker Buildx** 설정.
2. **레지스트리 인증** — `ghcr.io`(GitHub Container Registry)에 인증. 별도 시크릿 추가 없이 GitHub Actions에 기본 제공되는 자격증명 사용.
3. **리포지토리 이름을 소문자로 정규화**(셸 스크립트로 처리) — 컨테이너 이름 규칙 준수.
4. **빌드 및 푸시**: 리포지토리 이름 + 커밋 해시로 태깅해 GHCR에 푸시.

### 배포 단계
1. **Azure 로그인**(Azure 자격증명 필요 — 설정 방법은 별도로 안내).
2. 다시 한번 이름을 소문자로 정규화.
3. **Azure CLI 액션**으로 **Container App**에 배포 — 인라인 스크립트 안에서 GHCR 인증 시 **`secrets.PAT`**(Personal Access Token) 같은 시크릿을 전달.

### 타깃별 차이 예고
- 이번 예제는 GHCR을 사용했지만, **Docker Hub**나 **Azure Container Registry**를 타깃으로 할 때는 세부 사항이 달라짐 — 다음 영상들에서 각각 다룰 예정.
- 이번 영상은 **패키징(빌드+푸시)에만 집중**하며, 실제 배포(deploy)는 이후 영상에서 별도로 다룸.

## 예시
```yaml
# .github/workflows/main.yml (핵심 구조 요약)
name: Deploy
on:
  workflow_dispatch:

env:
  CONTAINER_APP_NAME: demo-container
  RESOURCE_GROUP: demo-container

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: docker/setup-buildx-action@v2
      - name: Login to GHCR
        uses: docker/login-action@v2
        with:
          registry: ghcr.io
          username: ${{ github.actor }}
          password: ${{ secrets.GITHUB_TOKEN }}
      - name: Lowercase repo name
        run: echo "REPO=$(echo ${{ github.repository }} | tr '[:upper:]' '[:lower:]')" >> $GITHUB_ENV
      - name: Build and push
        uses: docker/build-push-action@v4
        with:
          push: true
          tags: ghcr.io/${{ env.REPO }}:${{ github.sha }}

  deploy:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Azure Login
        uses: azure/login@v1
        with:
          creds: ${{ secrets.AZURE_CREDENTIALS }}
      - name: Deploy to Container App
        uses: azure/CLI@v1
        with:
          inlineScript: |
            az containerapp update ... --image ghcr.io/${{ env.REPO }}:${{ github.sha }}
```

## 요약
- Hugging Face 모델을 GitHub Actions로 배포하는 워크플로는 **빌드(Buildx→레지스트리 인증→이름 정규화→빌드/푸시)**와 **배포(Azure 로그인→이름 정규화→Container App 업데이트)** 두 단계로 나뉘며, `workflow_dispatch`로 수동 트리거하는 것이 개발 단계에서 유용한 패턴이다.
- 타깃 레지스트리(GHCR/Docker Hub/Azure Container Registry)에 따라 인증·태깅 세부사항이 달라지며, 이는 다음 영상들에서 각각 실습으로 이어진다.
