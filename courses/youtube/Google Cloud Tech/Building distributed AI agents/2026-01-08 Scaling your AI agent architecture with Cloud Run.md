# Cloud Run을 사용하여 AI 에이전트 아키텍처 확장하기 (Scaling your AI agent architecture with Cloud Run)

## 개요
- **핵심 개념 요약**: Cloud Run 서버리스 컴퓨팅 환경에 분산 에이전트 서비스를 올릴 때 맞닥뜨리는 동시 인스턴스 스케일 아웃 상황에서, 대화 맥락과 세션 상태(Session state) 데이터가 소실되지 않도록 공유 메모리 캐시 계층(**Google Cloud Memorystore/Redis**)을 결합해 확장성을 극대화하는 인프라 실무 설계 요령을 배웁니다.
- **업로드일**: 2026-01-08
- **YouTube 링크**: [Watch Video](https://www.youtube.com/watch?v=TxfMGxOkrcQ)

## 내용
### 1. 무상태(Stateless) 인프라인 Cloud Run의 한계점
- Cloud Run은 트래픽 변화에 따라 컨테이너가 수십 개로 늘어났다 줄어듭니다(Scale out/in).
- 에이전트 대화 맥락이나 진행 중인 과업 상태를 컨테이너 내부 변수(로컬 메모리)에 저장해 두면, 사용자의 두 번째 요청이 다른 컨테이너 인스턴스로 전달될 경우 이전 대화 맥락을 전혀 기억하지 못해 대답이 끊기는 치명적인 문제가 발생합니다.

### 2. 세션 상태의 외부 영속화: Memorystore(Redis) 결합
- 인프라를 무상태(Stateless)로 온전히 유지하기 위해, 모든 대화 기록과 에이전트 가동 체크포인트 상태는 컨테이너 외부의 고속 인 메모리 데이터베이스인 **Google Cloud Memorystore (Redis)**에 위임 저장합니다.
- 어떤 복제 서버로 트래픽이 인입되든 간에, 요청과 함께 전달받은 `session_id`를 기반으로 외부 Redis에서 실시간으로 대화 맥락을 읽어 에이전트에 공급(**Hydration**)합니다.

### 3. 연결 병목 제어: Redis Connection Pool
- 에이전트 가동 인스턴스 개수가 수십 개로 늘어날 때 Redis 서버 커넥션 고갈을 피하기 위해 Redis Connection Pool 설정을 최적화해야 합니다.

## 예시
아래 예시 코드는 Cloud Run에 배포된 FastAPI 서버가 에이전트의 대화 히스토리 상태를 로컬 램 대신 외부 Google Cloud Memorystore(Redis) 계층에 실시간 기록하고 조회하여 무상태 확장을 달성하는 파이썬 코드 예제입니다.

```python
from fastapi import FastAPI
from google_cloud_adk import Agent
import redis
import json
import os

app = FastAPI()

# 1. Google Cloud Memorystore (Redis) 원격 주소 연결 설정
REDIS_HOST = os.environ.get("REDIS_HOST", "10.0.0.3") # VPC 내부 사설 IP 주소
redis_client = redis.Redis(host=REDIS_HOST, port=6379, db=0, decode_responses=True)

# 2. 에이전트 초기화
agent = Agent(name="ScalingAssistant", instructions="무상태로 확장 가동하는 어시스턴트입니다.")

@app.post("/chat")
def chat_with_session(session_id: str, message: str):
    # 3. 외부 Redis 저장소에서 이전 대화 이력 로드 (State Hydration)
    history_raw = redis_client.get(f"chat_history:{session_id}")
    chat_history = json.loads(history_raw) if history_raw else []
    
    # 에이전트에 과거 이력을 콘텍스트로 주입하여 추론
    response = agent.run(message, history_context=chat_history)
    
    # 4. 신규 대화 한 쌍을 이력에 추가한 뒤 다시 Redis에 실시간 저장 (Serialization)
    chat_history.append({"user": message, "agent": response.content})
    redis_client.set(f"chat_history:{session_id}", json.dumps(chat_history))
    
    return {"reply": response.content}
```

## 요약
- Cloud Run 서버리스의 강점인 무한 오토스케일링 혜택을 온전히 보장받으려면, 에이전트 아키텍처를 철저히 **무상태(Stateless)** 형태로 재설계해야 합니다.
- 대화 히스토리와 진행 상태를 컨테이너 외부 계층인 **Memorystore(Redis)**로 분리 격리하는 것이 엔터프라이즈 에이전트 인프라 확장의 업계 표준 패턴입니다.
- Redis 통신 시 보안을 위해 Serverless VPC Access 커넥터를 연결하여 내부 사설망으로만 Redis 자원에 안전하게 액세스하게 제한해야 합니다.
