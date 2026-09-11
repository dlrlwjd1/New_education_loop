# ADK를 사용하여 장기 실행 AI 에이전트 구축하기 (Building long-running AI agents with ADK)

## 개요
- **핵심 개념 요약**: 단일 대화형 세션을 넘어 며칠, 혹은 몇 주 동안 주기적으로 백그라운드에서 백엔드 작업을 자율 수행하는 **장기 실행(Long-running) AI 에이전트**의 구동 방식과 Google Cloud ADK를 사용해 지속성(Persistence)을 갖춘 안정적인 루프를 설계하는 방법을 배웁니다.
- **업로드일**: 2026-06-16
- **YouTube 링크**: [Watch Video](https://www.youtube.com/watch?v=JsNbFnT0QCw)

## 내용
### 1. 장기 실행(Long-running) 에이전트의 도전 과제
- **서버 불안정 및 재시작**: 서버가 업데이트되거나 장애로 꺼졌을 때, 메모리 상에만 올라가 있던 에이전트의 대화 맥락과 작업 수행 진행 단계 데이터가 모두 소멸할 수 있습니다.
- **작업 실행 시간 초과 (Timeout)**: 한 번의 API 콜이 몇 분씩 지속되면 네트워크 레벨에서 타임아웃을 유발합니다. 작업을 여러 단위로 쪼개어 단계별 비동기 완료 처리를 유도해야 합니다.

### 2. 상태 보존 및 복구: State Hydration & Serialization
- 에이전트의 현재 작업 계획 단계, 최근 사용한 도구의 반환값, 대화 세션 히스토리를 데이터베이스(예: PostgreSQL, Cloud Spanner)에 실시간 **직렬화(Serialization)**하여 체크포인트(Checkpoint)를 저장합니다.
- 서버 리부팅이나 프로세스 재가동 시, 데이터베이스에서 최종 보존된 체크포인트를 읽어 에이전트 상태를 원래대로 복원(**State Hydration**)하여 멈춘 지점부터 즉시 연산을 재개합니다.

### 3. ADK의 장기 지속성 솔루션
- ADK는 에이전트의 실행 주기(Run cycle)마다 자동으로 데이터베이스 체크포인팅을 유발하는 영구 영속화 브릿지 모듈을 기본 인터페이스로 지원합니다.

## 예시
아래 파이썬 코드는 에이전트가 긴 리포팅 작업을 실행하는 중간 단계마다 DB 체크포인트를 저장하고, 프로세스가 불시에 끊겨 재실행될 때 마지막 안전 지점부터 복구하여 이어서 실행하는 ADK 스타일의 모의 예시 코드입니다.

```python
from google_cloud_adk import Agent, StateManager
import time

# 1. 영속적 상태 저장을 위한 DB 매니저
class SpannerStateManager(StateManager):
    def save_agent_state(self, agent_id: str, state_json: str):
        # Google Cloud Spanner에 에이전트 실행 상태 기록
        print(f"[Database Spanner] Saved Checkpoint for {agent_id}.")
        
    def load_agent_state(self, agent_id: str) -> str:
        # 마지막 중단 지점 상태 로딩
        return "{'current_step': 2, 'tasks_done': ['DataFetch', 'DataClean']}"

# 2. 에이전트 구동 파이프라인
class LongRunningAgentExecutor:
    def __init__(self, agent_id: str):
        self.agent_id = agent_id
        self.state_manager = SpannerStateManager()
        self.agent = Agent(name="BatchReportAgent", instructions="주간 보고서를 자율 분석 및 작성하세요.")

    def resume_and_run(self):
        # 3. 데이터베이스에서 이전 상태를 복구하여 Hydrate
        saved_state = self.state_manager.load_agent_state(self.agent_id)
        print(f"[Hydration] Resuming agent from state: {saved_state}")
        
        # 가상의 복제 실행 흐름
        # step 1, 2는 완료했으므로 스킵하고 step 3부터 시작
        print("[Agent Loop] Step 3: Generating Final PDF Report starts...")
        time.sleep(2)
        
        # 작업 완료 후 상태 갱신 및 최종 완료 저장
        self.state_manager.save_agent_state(self.agent_id, "{'status': 'COMPLETED'}")
        print("[Agent Loop] Work finished successfully.")

runner = LongRunningAgentExecutor("job_batch_0099")
runner.resume_and_run()
```

## 요약
- 24시간 자율 가동되는 엔터프라이즈급 에이전트를 실현하기 위해서는 체크포인팅(Checkpointing) 기반의 아키텍처 구성이 전제되어야 합니다.
- ADK는 상태 직렬화(State Serialization) 기능을 API 내부 레벨에서 처리하여 인프라 실패 회복력(Resilience)을 간편하게 보장합니다.
- 장기 실행 설계 시 체크포인트를 지나치게 자주 저장하면 DB 입출력 오버헤드가 크고, 너무 드물게 저장하면 데이터 복구 손실이 커지므로 적절한 태스크 단위 구획 설정이 중요합니다.
