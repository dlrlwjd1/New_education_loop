# Automating Packaging with Azure Container Registry

## 개요
- 앞서 만든 GitHub Actions 워크플로를 **Azure Container Registry(ACR)를 타깃으로 수정**하고, GitHub Secrets에 ACR 인증 정보를 등록해 실제로 컨테이너를 자동 푸시하는 7분 실습.

## 내용

### GitHub Secrets 등록
- 리포지토리 **Settings → Secrets → Actions → New repository secret**에서 두 개의 시크릿 생성:
  - **`ACR_USERNAME`** — ACR 포털에서 확인한 사용자 이름(예: `demoalfredo`).
  - **`ACR_PASSWORD`** — ACR 포털의 두 비밀번호 중 하나.
- **중요한 보안 특성**: 시크릿은 한 번 등록하면 **평문으로 다시 읽을 수 없음**(업데이트·삭제만 가능) — 등록 시 정확히 입력해야 함.

### 워크플로 YAML 수정
- 이번엔 **배포(deploy) 단계는 다루지 않고 컨테이너화·푸시(패키징)만 진행**.
- **레지스트리 로그인 서버**를 ACR 포털에서 복사해 `registry` 값으로 사용(예: `demoalfredo.azurecr.io`).
- 사용자 이름/비밀번호는 `${{ secrets.ACR_USERNAME }}` / `${{ secrets.ACR_PASSWORD }}`로 참조.
- 리포지토리 이름 소문자화 단계는 그대로 유지.
- **빌드/푸시 단계**: `push: true`, 태그는 `<레지스트리 로그인 서버>/<repo>:<github.sha>` 형태로 구성(예: `demoalfredo.azurecr.io/<repo>:<sha>`).
- 변경사항 커밋(`Update main.yaml`).

### 워크플로 수동 실행 및 검증
- Actions 탭 → `workflow_dispatch`로 등록된 워크플로 이름 확인 → **"Run workflow"** 클릭.
- 큐(queued) → 진행 중(in progress) → 로그에서 **ACR 로그인 → 이미지 빌드 → 푸시** 순서로 진행되는 것을 확인 — 전체 약 **3분 이상** 소요.
- 각 단계 이름이 로그에 그대로 반영되므로(예: "logging into ACR registry"), 어떤 단계에서 무엇이 일어나는지 추적하기 쉬움.

### 결과 확인
- Azure 포털의 ACR 리소스 → **Activity log**에서 로그인 자격 증명 사용 등 관련 작업(operations) 이력 확인.
- **Repositories** 탭에서 실제로 푸시된 이미지(`alfredodeza/hugging-face` 등 리포지토리 이름 기반) 확인 — 태그 개수, 매니페스트 개수, 마지막 수정 시각("몇 분 전")이 방금 실행한 워크플로와 정확히 일치.

## 예시
```yaml
# main.yaml 수정 핵심 부분
- name: Login to ACR
  uses: docker/login-action@v2
  with:
    registry: demoalfredo.azurecr.io
    username: ${{ secrets.ACR_USERNAME }}
    password: ${{ secrets.ACR_PASSWORD }}

- name: Build and push to ACR
  uses: docker/build-push-action@v4
  with:
    push: true
    tags: demoalfredo.azurecr.io/${{ env.REPO }}:${{ github.sha }}
```

## 요약
- ACR을 타깃으로 한 GitHub Actions 자동화는 **GitHub Secrets(ACR_USERNAME/ACR_PASSWORD) 등록 + 워크플로의 레지스트리 로그인 서버·태그 값 수정**만으로 완성되며, `workflow_dispatch`로 수동 실행 후 Azure 포털의 Activity log와 Repositories 탭에서 실제 결과를 검증할 수 있다.
- 시크릿은 한 번 등록하면 다시 읽을 수 없다는 점(업데이트/삭제만 가능)을 유의해야 한다.
