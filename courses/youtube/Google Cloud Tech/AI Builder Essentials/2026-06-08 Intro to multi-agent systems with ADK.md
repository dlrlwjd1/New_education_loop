# ADK를 사용한 다중 에이전트 시스템 소개 (Intro to multi-agent systems with ADK)

## 개요
- **핵심 개념 요약**: 하나의 에이전트가 복잡한 일처리를 도맡아 할 때 겪는 기억 유실 및 추론 정확도 손실 한계를 분할 정복(Divide and conquer)으로 극복하는 **다중 에이전트 시스템(Multi-agent Systems)**의 개념과 Google Cloud ADK를 활용한 기초 구현 아키텍처를 학습합니다.
- **업로드일**: 2026-06-08
- **YouTube 링크**: [Watch Video](https://www.youtube.com/watch?v=0Z0GUDakR_A)

## 내용
### 1. 왜 다중 에이전트인가?
- 단일 에이전트에 너무 많은 지침(System Instructions)과 너무 다양한 도구(Tools)를 부여하면, LLM이 문맥을 놓치거나 적절하지 않은 도구를 잘못 호출할 확률(Tool calling error)이 크게 올라갑니다.
- 기획안을 초안 작성하는 'Writer 에이전트', 작성된 안을 규칙에 맞게 피드백하는 'Reviewer 에이전트'로 역할을 세분화하여 협업 네트워크를 구성하면 전체 결함률이 현저히 낮아집니다.

### 2. ADK를 통한 상태 기반 라우팅(State-based Routing)
- 다중 에이전트 협업의 중추는 공통으로 조율되는 **상태(State)** 객체입니다.
- 각 에이전트 노드는 실행을 마치고 그 결과 데이터를 공통 상태 구조체에 업데이트한 뒤, 다음 에이전트 노드로 바통을 터치(Handoff)하여 비동기 실행 루프를 이어갑니다.

## 예시
아래 예시는 기획안을 초안 작성하는 `WriterAgent`와 품질을 검토해 승인 혹은 반려하는 `ReviewerAgent`가 협력하여 최종 통과할 때까지 교차 실행 루프를 도는 ADK 기반 다중 에이전트 핵심 파이썬 템플릿입니다.

```python
from google_cloud_adk import Agent, State, Workflow, node

# 1. 협업 에이전트들이 공동 관리할 기획서 상태 정의
class PlanningState(State):
    draft_content: str = ""
    review_feedback: str = ""
    is_passed: bool = False

# 2. 전문 에이전트 인스턴스
writer = Agent(name="Writer", instructions="마케팅 캠페인 초안을 간결하게 작성하세요.")
reviewer = Agent(name="Reviewer", instructions="작성된 초안을 평가하여 수정할 부분과 통과(PASS) 여부를 기록하세요.")

# 3. 워크플로 노드 정의
@node
def write_draft(state: PlanningState) -> PlanningState:
    print("[Workflow] Writer is working...")
    state.draft_content = writer.run("신규 클라우드 모바일 앱 런칭 마케팅 계획서").content
    return state

@node
def review_draft(state: PlanningState) -> PlanningState:
    print("[Workflow] Reviewer is auditing...")
    prompt = f"초안 내용:\n{state.draft_content}\n\n이 초안에 문제점이 있으면 피드백하고, 완벽하면 내용 끝에 'PASS' 단어를 포함하여 리포트를 남겨주세요."
    response = reviewer.run(prompt).content
    state.review_feedback = response
    
    if "PASS" in response:
        state.is_passed = True
    return state

# 4. 워크플로 그래프 빌드 및 분기 제어
flow = Workflow(state_schema=PlanningState)
flow.add_node("write", write_draft)
flow.add_node("review", review_draft)

# 시작 -> 작성 -> 리뷰
flow.set_entry_point("write")
flow.add_edge("write", "review")

# 리뷰 결과가 통과되지 않았으면 재작성하도록 조건부 분기(Routing) 설정
def routing_condition(state: PlanningState) -> str:
    if state.is_passed:
        return "END"
    else:
        return "write"  # 다시 작성 노드로 반려

flow.add_conditional_edges("review", routing_condition)

# 워크플로 컴파일 및 모의 실행
compiled_flow = flow.compile()
final_state = compiled_flow.run(PlanningState())
print("\n[Result] Passed Marketing Draft:\n", final_state.draft_content)
```

## 요약
- 다중 에이전트의 강점은 **'역할의 격리'**와 **'명확한 규칙 기반 상태 라우팅'**에 있습니다.
- Google Cloud ADK는 다중 에이전트 오케스트레이션 설계 시 노드(Node), 엣지(Edge), 조건부 분기(Conditional Edges) 그래프 모델을 지원해 복잡한 비즈니스 로직을 완벽히 모듈화할 수 있도록 돕습니다.
- 에이전트 간 반려 루프가 무한 루프에 빠지지 않도록 최대 반복 실행 횟수(Max Iterations) 등의 안전 예외 장치를 설계에 포함해야 합니다.
