# Deploying Hugging Face (Lab)

## 개요
- FastAPI로 감싼 ML 컨테이너를 **GitHub Actions**를 통해 **Azure Container Apps**에 배포하는 1시간짜리 실습 랩(ungraded lab). GPT-2 기반 텍스트 생성 애플리케이션을 대상으로 한다.

## 내용

### 랩 목표
- Dockerfile, GitHub Actions 워크플로, GPT-2(HuggingFace Transformers) 기반 텍스트 생성 Python 코드가 이미 준비된 [alfredodeza/huggingface-azure-acr](https://github.com/alfredodeza/huggingface-azure-acr) 리포지토리를 포크해서 시작.
- 먼저 최종 아키텍처 개요를 살펴본 뒤, Azure ↔ GitHub Actions ↔ GitHub Container Registry 간 자동화를 위한 모든 설정 항목을 구성.
- 마지막으로 **ingress 포트**, **적절한 RAM/CPU** 설정 등 배포에 필요한 핵심 요구사항을 처리하며 실제 배포까지 진행.

### 진행 단계
1. **GitHub Container Registry(GHCR)**로 빌드한 컨테이너 push.
2. GitHub Action 내에서 **Azure CLI**로 Azure에 인증.
3. 인증을 위한 **Azure 서비스 주체(Service Principal)**와 **개인용 액세스 토큰(PAT)** 생성 방법 학습.
4. **Azure Container Apps**를 모델을 서빙하기에 충분한 리소스로 구성.
5. 배포 로그를 확인해 정상 동작 여부 검증.

### 요구 사항
- 위 GitHub 리포지토리를 포크.
- Azure 계정 생성(또는 로그인) — Azure for Students 계정(신용카드 불필요, 무료 크레딧 제공) 이용 가능.
- 리포지토리 README의 단계를 따라 토큰, 시크릿, 애플리케이션 이름 등 필요한 구성 요소를 모두 확보.
- 권장: 코스의 관련 비디오 레슨(Create/Configure Azure Container Application, Deploy Hugging Face to Azure)을 배포 참고 자료로 활용.

### 추가 도전 과제
- 다른 Hugging Face 모델로 교체해보기.
- 다른 엔드포인트를 추가해보기.

## 예시
```dockerfile
# Dockerfile (개념 구조 — 리포지토리 제공)
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

```yaml
# .github/workflows/deploy.yml (개념 구조)
- name: Build and push to GHCR
  run: |
    docker build -t ghcr.io/${{ github.repository }}:latest .
    docker push ghcr.io/${{ github.repository }}:latest

- name: Azure Login
  uses: azure/login@v1
  with:
    creds: ${{ secrets.AZURE_CREDENTIALS }}

- name: Deploy to Azure Container Apps
  run: |
    az containerapp update \
      --name huggingface-azure-acr \
      --resource-group myResourceGroup \
      --image ghcr.io/${{ github.repository }}:latest \
      --cpu 1.0 --memory 2.0Gi
```

## 요약
- 이 랩은 Module 3에서 배운 FastAPI 서빙·Docker 컨테이너화·GitHub Actions CI/CD 개념을 Azure Container Apps 배포까지 실제로 완성해보는 종합 실습이다.
- 핵심은 GHCR 이미지 push, 서비스 주체 기반 Azure 인증, 그리고 ingress 포트·CPU/RAM 설정을 올바르게 맞추는 것이다.
