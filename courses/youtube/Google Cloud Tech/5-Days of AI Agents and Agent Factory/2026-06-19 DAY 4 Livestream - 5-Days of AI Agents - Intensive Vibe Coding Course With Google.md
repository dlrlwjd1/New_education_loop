# 4일차 라이브 스트림 - AI 에이전트 5일 집중 과정: Google과 함께하는 바이브 코딩 강좌 (DAY 4 Livestream - 5-Days of AI Agents: Intensive Vibe Coding Course With Google)

## 개요
- **핵심 개념 요약**: 5일 집중 바이브 코딩 코스의 4일차 학습 자료입니다. 더 이상 단일 에이전트 루프에 의존하지 않고, 특화된 역할을 가진 복수의 에이전트들을 통제 및 조율하는 **다중 에이전트 오케스트레이션(Multi-agent Orchestration)** 기술을 다룹니다.
- **업로드일**: 2026-06-19
- **YouTube 링크**: [Watch Video](https://www.youtube.com/watch?v=suWoYLD7uGY)

## 내용
### 1. 4일차 설계 진화: 복잡성 극복을 위한 조직화
- 하나의 에이전트가 복잡한 문서 검토, 코드 수정, 배포를 한 번에 처리하려 들면 컨텍스트 윈도우 유실과 추론 정확도 손실이 심각해집니다.
- 작업을 분배하는 감독자(Supervisor), 분석을 담당하는 분석가(Analyst), 실제 파일 처리를 맡는 실행자(Executor) 에이전트를 선언하여 계층형 구조로 연결합니다.

### 2. ADK `Coordinator` 모듈을 통한 협업 제어
- Google Cloud ADK가 제공하는 `Coordinator` 또는 `Workflow` 모듈을 사용해 에이전트 간의 정형화된 호출 흐름과 상태 전이 조건(State routing)을 설정합니다.
- 공통으로 공유되는 `SharedState`를 매개로 각 에이전트 노드가 실행을 마친 뒤 출력을 상태에 밀어 넣고 다음 실행자에게 제어권을 인계(Handoff)합니다.

## 예시
아래 예시 코드는 4일차 과정에서 실습하는 분석 에이전트(`Analyst`)와 코드 작성 에이전트(`Coder`)가 공유 상태(State)를 통해 단계별로 업무를 완성하고 결과를 오케스트레이션하는 ADK 워크플로 코드 구조입니다.

```python
from google_cloud_adk import Agent, State, Workflow, node

# 1. 에이전트 간 공유할 데이터 상태(State) 스키마 정의
class MigrationState(State):
    source_code: str = ""
    analysis_report: str = ""
    migrated_code: str = ""

# 2. 개별 전문 에이전트 정의
analyst_agent = Agent(
    name="Analyst",
    instructions="입력된 소스 코드의 아키텍처적 결함과 마이그레이션 전략 리포트를 작성하세요."
)
coder_agent = Agent(
    name="Coder",
    instructions="이전 단계의 분석 리포트를 바탕으로 소스 코드를 새 프레임워크 스펙으로 재작성하세요."
)

# 3. 워크플로 노드 선언
@node
def run_analysis(state: MigrationState) -> MigrationState:
    print("[Node Analyst] Analyzing legacy code...")
    state.analysis_report = analyst_agent.run(state.source_code).content
    return state

@node
def run_migration(state: MigrationState) -> MigrationState:
    print("[Node Coder] Migrating legacy code...")
    prompt = f"원본 코드:\n{state.source_code}\n\n전략 리포트:\n{state.analysis_report}"
    state.migrated_code = coder_agent.run(prompt).content
    return state

# 4. 멀티 에이전트 워크플로 파이프라인 컴파일
workflow = Workflow(state_schema=MigrationState)
workflow.add_node("analysis", run_analysis)
workflow.add_node("migration", run_migration)

workflow.add_edge("analysis", "migration")
workflow.set_entry_point("analysis")

# 실행
initial_data = MigrationState(source_code="def old_function(): print('hello legacy')")
final_output = workflow.compile().run(initial_data)
print("\n[Result] Migrated Code:\n", final_output.migrated_code)
```

## 요약
- 다중 에이전트 아키텍처는 개별 LLM의 파라미터 크기와 추론 과부하를 분할 정복(Divide and conquer)하여 해결하는 산업계의 지배적 패턴입니다.
- ADK는 이러한 에이전트 단위 간의 상태 조율과 실행 분기(Condition branch)를 안전하게 오케스트레이션하는 인터페이스인 `Workflow` 모델을 제시합니다.
- 5일차(최종일)에는 이렇게 협력하여 완성한 에이전트 마이크로서비스를 프로덕션 환경인 Cloud Run에 서버리스 형태로 배포 및 가동하는 방법을 완성합니다.
