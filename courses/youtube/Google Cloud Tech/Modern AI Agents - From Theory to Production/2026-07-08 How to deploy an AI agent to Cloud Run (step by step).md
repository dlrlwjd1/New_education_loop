# AI 에이전트를 Cloud Run에 배포하는 방법 (단계별 가이드) (How to deploy an AI agent to Cloud Run (step by step))

## 개요
- **핵심 개념 요약**: 개발 완료된 AI 에이전트와 MCP 서버 시스템을 Google Cloud Platform (GCP)의 완전 관리형 서버리스 컨테이너 환경인 **Cloud Run**에 안전하게 배포하고 서빙하는 단계별 프로덕션 가이드를 학습합니다.
- **업로드일**: 2026-07-08
- **YouTube 링크**: [Watch Video](https://www.youtube.com/watch?v=bjZ2M7ThOBc)

## 내용
### 1. Cloud Run 서버리스 컨테이너의 장점
- **오토스케일링**: 트래픽이 몰릴 때 자동으로 확장되고, 사용하지 않을 때는 0개의 인스턴스로 자동 축소되어 비용 효율이 좋습니다.
- **SSE 지원**: HTTP Server-Sent Events 프로토콜을 온전히 지원하여 원격 MCP 연결이나 실시간 에이전트 답변 스트리밍에 최적화되어 있습니다.

### 2. 단계별 배포 아키텍처
- **단계 1: 에이전트 앱 컨테이너화**: Dockerfile을 생성하여 빌드 환경을 정의합니다.
- **단계 2: Google Artifact Registry 업로드**: 빌드된 Docker 이미지를 GCP 저장소에 푸시합니다.
- **단계 3: Secret Manager 연동**: LLM API 키(예: GEMINI_API_KEY)와 자격 증명을 코드에 노출하지 않고 GCP 보안 비밀 관리자(Secret Manager)에 보관해 Cloud Run 실행 시점에 환경 변수로 동적 주입합니다.
- **단계 4: 서비스 배포**: Cloud Run CLI 또는 웹 콘솔에서 컨테이너 서비스를 배포하고 엔드포인트를 개방합니다.

## 예시
아래는 ADK 기반 에이전트 애플리케이션을 패키징하기 위한 Dockerfile 예시와 GCP Cloud Run에 이를 배포하기 위한 터미널 명령어 예시입니다.

### 1. Dockerfile 예시
```dockerfile
# Base 이미지 설정
FROM python:3.11-slim

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 복사 및 설치
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# 소스 코드 복사
COPY . .

# 포트 포워딩 설정 (Cloud Run은 기본적으로 PORT 환경 변수를 주입함)
ENV PORT 8080
EXPOSE 8080

# 에이전트 실행 명령 (FastAPI 등을 사용하여 SSE 웹 엔드포인트 제공)
CMD exec uvicorn main:app --host 0.0.0.0 --port $PORT
```

### 2. Google Cloud CLI 배포 명령어 예시
```bash
# 1. Docker 이미지 빌드 및 Artifact Registry에 업로드
gcloud builds submit --tag gcr.io/your-project-id/adk-agent-service:latest

# 2. Cloud Run 배포 (Secret Manager에서 API Key 주입)
gcloud run deploy adk-agent-service \
  --image gcr.io/your-project-id/adk-agent-service:latest \
  --platform managed \
  --region asia-northeast3 \
  --allow-unauthenticated \
  --set-secrets="GEMINI_API_KEY=gemini-api-key-secret:latest"
```

## 요약
- Cloud Run은 확장 가능하고 관리가 없는(No-ops) 인프라로 AI 에이전트를 빠르게 배포하기에 가장 알맞은 가상화 환경입니다.
- 보안을 확보하기 위해 환경 변수나 코드 내에 민감정보를 남기지 말고 반드시 **GCP Secret Manager**를 통해 동적으로 자격 증명을 연동해야 합니다.
- 완전 배포가 끝나면 발급되는 HTTPS 공용 URL을 통해 타사 서비스의 웹훅이나 MCP 클라이언트 인프라로 손쉽게 연결할 수 있습니다.
