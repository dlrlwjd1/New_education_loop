# 서로 소통하는 AI 에이전트 구축 (Building AI agents that speak to each other)

## 개요
- **핵심 개념 요약**: 독립적으로 격리 구동되는 다수의 마이크로서비스 에이전트들이 공용 메시지 브로커(구글 Cloud Pub/Sub)를 통해 비동기 이벤트 스트림으로 소통하고, 한 에이전트의 수행 결과가 다른 에이전트의 입력으로 꼬리를 물며 연쇄 처리되는 **이벤트 기반 에이전트 통신 구조**를 정립합니다.
- **업로드일**: 2026-01-07
- **YouTube 링크**: [Watch Video](https://www.youtube.com/watch?v=_79txIhM_tQ)

## 내용
### 1. 비동기 메시지 브로커의 결합 이유
- 에이전트가 다른 에이전트를 동기식(HTTP Block call)으로 호출하고 대답이 올 때까지 하염없이 기다리는 설계는 시스템 가용률을 극도로 저하시키며 타임아웃 오류를 빈번하게 유발합니다.
- 에이전트가 작업을 마친 뒤 결과 메시지를 **메시지 큐/토픽(Topic)**에 발행(Publish)하면, 관심이 있는 다른 에이전트들이 이를 즉각 수신(Subscribe)하여 다음 단계를 독립 실행하는 비동기 방식(Pub/Sub pattern)이 권장됩니다.

### 2. 구글 Cloud Pub/Sub과 AI 에이전트 연동
- 구글의 완전관리형 메시지 큐 서비스인 **Cloud Pub/Sub**을 채널 허브로 채택합니다.
- 예: `marketing-drafts` 토픽에 초안이 발행되면, 검수 에이전트가 그 메시지를 안전하게 풀(Pull)해 간 뒤 교정본을 `audited-drafts` 토픽에 다시 던져 배포 파이프라인으로 흘려보냅니다.

## 예시
아래 파이썬 코드는 구글 Cloud Pub/Sub SDK 구조를 본떠, 하나의 에이전트가 작업을 완료하고 결과 메시지를 토픽에 발행하면, 수신 대기하고 있던 검수 에이전트가 이를 가로채어 자율 검토를 재개하는 비동기 통신 연동 코드의 핵심 예시입니다.

```python
# 에이전트 간 비동기 메시지 수발신을 처리하는 구조 예시
from google_cloud_adk import Agent
import json

# 1. 메시지 브로커 모의 클래스
class SimpleMessageBroker:
    def __init__(self):
        self.queues = {}

    def publish(self, topic: str, message: str):
        if topic not in self.queues:
            self.queues[topic] = []
        self.queues[topic].append(message)
        print(f"[Broker] Published message to Topic: {topic}")

    def subscribe(self, topic: str) -> str:
        if topic in self.queues and len(self.queues[topic]) > 0:
            return self.queues[topic].pop(0)
        return ""

broker = SimpleMessageBroker()

# 2. 전문 작가 에이전트 및 검수 에이전트 정의
writer_agent = Agent(name="Novelist", instructions="짧은 이야기를 한 편 쓰세요.")
critic_agent = Agent(name="Critic", instructions="받은 이야기를 논리적으로 평가하세요.")

# 3. 비동기 연쇄 구동 루프
# 작가가 글을 작성하여 'drafts' 채널에 투척
story = writer_agent.run("우주선에서 발생한 미스터리 사건").content
broker.publish("drafts", json.dumps({"author": "Novelist", "content": story}))

# ... (임의의 비동기 시간 흐름) ...

# 검수기가 'drafts' 채널 구독 감지 후 자동 실행
received_raw = broker.subscribe("drafts")
if received_raw:
    data = json.loads(received_raw)
    print(f"[Critic Agent] Retreived draft from Author: {data['author']}.")
    
    # 검수 작업 수행 및 최종 평가 발행
    feedback = critic_agent.run(f"Story: {data['content']}").content
    broker.publish("reviews", json.dumps({"status": "AUDITED", "feedback": feedback}))
```

## 요약
- 분산 다중 에이전트 환경에서 시스템 타임아웃과 자원 병목을 해결하는 핵심 열쇠는 **'비동기 Pub/Sub 이벤트 기반 설계'**의 적용에 있습니다.
- Google Cloud Pub/Sub 인프라를 활용하면 수백 개의 마이크로서비스 에이전트 간의 엉킴 현상을 완전 제거할 수 있습니다.
- 통신의 신뢰성 보장을 위해 전송 실패 시의 재시도(Retry with exponential backoff) 정책과 데드 레터 큐(Dead letter queue) 처리를 아키텍처에 포함해야 누락 없는 거래 처리가 보장됩니다.
