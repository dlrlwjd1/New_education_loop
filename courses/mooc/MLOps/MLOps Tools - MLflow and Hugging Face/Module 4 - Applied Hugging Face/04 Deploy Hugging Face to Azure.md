# Deploy Hugging Face to Azure

## 개요
- **Azure 서비스 프린시펄(Service Principal) 발급 → GitHub Secrets 등록 → 워크플로 완성 → 실제 Azure Container App 배포**까지 전체 자동화 파이프라인을 완결하는 12분 실습. 이 코스의 컨테이너 배포 실습 중 가장 종합적인 영상이다.

## 내용

### 이번엔 PAT가 아니라 Azure 서비스 프린시펄
- **GitHub Personal Access Token(PAT)은 필요 없음** — GitHub Container Registry가 아니라 **Azure Container Registry**를 쓰기 때문.
- 대신 **Azure 서비스 프린시펄**을 생성하는 CLI 명령을 실행(자신의 **Azure 구독 ID**를 정확히 파악해 사용해야 함) → 결과로 나온 **JSON 출력 전체**를 GitHub Secrets에 **`AZURE_CREDENTIALS`**로 등록.

### GitHub Secrets 최종 목록
- 이전에 등록한 `ACR_USERNAME`, `ACR_PASSWORD`에 더해 **`AZURE_CREDENTIALS`**까지 총 3개의 시크릿이 필요.

### 워크플로 YAML의 배포 단계
- 빌드 단계는 이전과 동일(ACR 로그인 → 이름 소문자화 → 빌드/푸시, 태그에 **`demoalfredo.azurecr.io`**를 반드시 포함 — 빠뜨리면 Docker가 기본적으로 Docker Hub로 푸시하려고 시도하는 문제 발생).
- **배포 단계**: `azure/CLI` 액션으로 Azure CLI 명령 실행:
  1. `az extension add --upgrade -n containerapp -y`(컨테이너 앱 확장 자동 설치, 프롬프트 없이).
  2. `az containerapp registry set` — 컨테이너 앱 이름(`demo-container`, 그룹명과 동일), 레지스트리 서버(`demoalfredo.azurecr.io`), 사용자명/비밀번호(시크릿) 설정.
  3. `az containerapp update --cpu 2 --memory 4Gi` — CPU 2코어, 메모리 4GB로 컨테이너 앱 리소스 갱신(Azure가 컨테이너 앱에 허용하는 최대치에 가깝게 설정).
  4. `az containerapp update --image demoalfredo.azurecr.io/<repo>:<github.sha>` — 방금 빌드한 이미지로 실제 이미지 업데이트, 태그는 커밋 SHA.

### 워크플로 실행 및 로그 확인
- Actions에서 `workflow_dispatch`로 실행 → **빌드 4분 + 배포 1분 45초** 소요.
- 빌드 단계: Docker Buildx → 이미지 빌드 → ACR 푸시(이전과 동일).
- 배포 단계: Azure 로그인(시크릿 기반) → 컨테이너 앱 업데이트 → 완료(자격증명은 시크릿 처리되어 로그에 노출되지 않음).

### 실시간 로그로 배포 검증 — `az containerapp logs show`
```bash
az containerapp logs show \
  --name demo-container \
  --resource-group demo-container \
  --follow
```
- 터미널에서 이 명령으로 실시간 로그를 스트리밍 — Hugging Face가 **모델을 동적으로 다운로드하는 진행률(30%, 40%, 50%, 60%...)**을 실시간으로 확인.
- 다운로드 완료 후 **uvicorn이 애플리케이션 시작을 대기하다가 실행**되고, **포트 8000**에 매핑된 것을 확인 — Ingress 설정이 실제 컨테이너 포트와 일치해야 하는 이유가 여기서 확인됨.
- 이후 로그에 200 응답이 찍히는 것으로 정상 동작 확인.

### 웹에서 최종 검증
- Azure 포털의 Container App 리소스에서 **이미지 소스가 ACR로 변경**되고(`demoalfredo.azurecr.io`), 이미지 이름이 `huggingface-azure-acr`, 태그가 최신 커밋 SHA로 바뀐 것을 확인. 리소스 할당도 2 CPU / 4GB로 갱신됨.
- 애플리케이션 URL의 **`/docs`**(Swagger)로 접속 → 텍스트 생성 프롬프트("Cloud deployments are...")를 입력해 **Execute** → GPT-2가 생성한 텍스트를 실제로 확인 — 클라우드에 배포된 모델이 정상 작동함을 최종 검증.

## 예시
```bash
# 서비스 프린시펄 생성 (JSON 출력을 AZURE_CREDENTIALS 시크릿으로 등록)
az ad sp create-for-rbac --name demo-container-sp \
  --role contributor \
  --scopes /subscriptions/<subscription-id>/resourceGroups/demo-container \
  --sdk-auth
```

```yaml
# 배포 단계 (핵심 요약)
- name: Azure Login
  uses: azure/login@v1
  with:
    creds: ${{ secrets.AZURE_CREDENTIALS }}

- name: Deploy to Container App
  uses: azure/CLI@v1
  with:
    inlineScript: |
      az extension add --upgrade -n containerapp -y
      az containerapp registry set --name demo-container --resource-group demo-container \
        --server demoalfredo.azurecr.io \
        --username ${{ secrets.ACR_USERNAME }} --password ${{ secrets.ACR_PASSWORD }}
      az containerapp update --name demo-container --resource-group demo-container --cpu 2 --memory 4Gi
      az containerapp update --name demo-container --resource-group demo-container \
        --image demoalfredo.azurecr.io/<repo>:${{ github.sha }}
```

```bash
# 실시간 로그 확인
az containerapp logs show --name demo-container --resource-group demo-container --follow
```

## 요약
- Azure Container App으로의 완전 자동 배포는 **서비스 프린시펄(AZURE_CREDENTIALS) + ACR 인증(ACR_USERNAME/PASSWORD)**을 GitHub Secrets에 등록하고, 워크플로에서 `az containerapp registry set → update --cpu/--memory → update --image`를 순서대로 실행하는 것으로 완성된다.
- `az containerapp logs show --follow`로 실시간 로그를 스트리밍하면 Hugging Face 모델의 동적 다운로드 진행률부터 uvicorn 시작까지 배포 과정을 직접 눈으로 확인할 수 있으며, 최종적으로 `/docs`의 Swagger UI에서 실제 텍스트 생성 결과로 배포 성공을 검증한다.
