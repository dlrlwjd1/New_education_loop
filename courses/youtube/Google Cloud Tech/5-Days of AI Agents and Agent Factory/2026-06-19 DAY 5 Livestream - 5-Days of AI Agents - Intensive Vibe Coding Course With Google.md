# 5일 차 라이브 스트림 - AI 에이전트 5일 완성: Google과 함께하는 바이브 코딩 집중 과정 (DAY 5 Livestream - 5-Days of AI Agents: Intensive Vibe Coding Course With Google)

## 개요
- **핵심 개념 요약**: 5일 집중 바이브 코딩 코스의 최종 5일차 실습 자료입니다. 구축 완료한 다중 에이전트 및 MCP 연동 애플리케이션을 Docker 기반의 컨테이너 이미지로 패키징하고, GCP의 **Cloud Run** 서버리스 컴퓨팅 환경에 배포하여 누구나 호출할 수 있는 웹 서비스 엔드포인트를 구축하는 과정을 완성합니다.
- **업로드일**: 2026-06-19
- **YouTube 링크**: [Watch Video](https://www.youtube.com/watch?v=Y3HfV4IroCU)

## 내용
### 1. 5일차 여정의 완성: 배포 및 서비스화
- 로컬 CLI 환경에서 정상 구동되는 에이전트라 하더라도, 다른 비즈니스 시스템이나 사용자가 사용하려면 공용 네트워크(HTTPS) 상에서 항시 응답할 수 있는 프로덕션 배포가 필수적입니다.
- Google Cloud Run은 컨테이너 배포 프로세스를 극도로 단순화하여 지원합니다.

### 2. 가동을 위한 주요 배포 명세
- **Uvicorn/FastAPI 설정**: 에이전트를 실시간 비동기 HTTP 요청을 받는 FastAPI 프레임워크와 결합하여 라우팅 경로를 설계합니다.
- **Dockerfile 작성**: 파이썬 런타임 환경과 ADK 등 핵심 라이브러리 의존성을 명시하여 일관된 컨테이너 실행 이미지를 구성합니다.
- **Cloud Run Deploy**: Google Artifact Registry에 컨테이너를 올리고, 단 한 줄의 gcloud 명령어로 인프라를 프로비저닝 및 서빙합니다.

### 3. 실시간 응답을 위한 SSE (Server-Sent Events) 스트리밍
- LLM의 답변 생성 시간이 길기 때문에, 사용자에게 끊김 없는 인터랙션을 주기 위해 HTTP 연결을 끊지 않고 실시간 응답 토큰을 즉시 흘려보내는 SSE 스트리밍 엔드포인트를 Cloud Run 환경에서 배포 검증합니다.

## 예시
아래 예시는 5일차 집중 과정의 최종 완성본으로, FastAPI 엔드포인트를 개방하고 ADK 에이전트를 REST API 형태로 웹에 노출시켜 Cloud Run 배포를 대기하는 파이썬 코드 구조입니다.

```python
from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from google_cloud_adk import Agent
import uvicorn
import os

app = FastAPI(title="DeployedAgentAPI")

# 에이전트 인스턴스
web_agent = Agent(
    name="ProductionAssistant",
    instructions="운영 환경에서 질의에 답하는 유능한 웹 에이전트입니다."
)

@app.get("/chat")
def chat_endpoint(query: str):
    # 단일 응답 API 라우트
    response = web_agent.run(query)
    return {"response": response.content}

@app.get("/chat/stream")
def chat_stream_endpoint(query: str):
    # 실시간 답변 토큰을 방출하는 SSE 스트리밍 라우트 구현
    def token_generator():
        # 에이전트 스트리밍 추론 호출
        for token in web_agent.run_stream(query):
            yield f"data: {token}\n\n"
            
    return StreamingResponse(token_generator(), media_type="text/event-stream")

if __name__ == "__main__":
    # Cloud Run이 주입하는 PORT 환경 변수를 기반으로 구동
    port = int(os.environ.get("PORT", 8080))
    uvicorn.run(app, host="0.0.0.0", port=port)
```

## 요약
- 5일차 실습 완수를 통해 자율 에이전트의 '개발'부터 '프로덕션 배포'까지의 전체 생명주기(Lifecycle) 파이프라인을 완성했습니다.
- Cloud Run 환경은 에이전트 웹 서버를 가용성 높게 운영하면서도, 요청이 없을 때는 과금을 0원으로 차단해 주는 비용 최적화(Pay-as-you-go) 관점의 큰 장점을 제공합니다.
- SSE 스트리밍 라우트는 에이전트 사용자의 대기 피로도(INP - Interaction to Next Paint)를 줄이는 고성능 UX 구현의 필수 요소입니다.
