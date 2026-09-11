# 중간 계획: 에이전트 루프에서 진행 상황 추적하기

## 왜 진행 추적이 필요한가

복잡한 작업에서는 에이전트가 **주기적으로 멈추고 현재 상태를 평가**해야 한다.

사전 계획(Plan First)이 시작 전 전략을 세운다면, **진행 추적(Progress Tracking)** 은 각 루프 반복이 끝날 때마다 돌아보고 다음 단계를 조율하는 역할을 한다.

> 사람이 문제를 푸는 방식: **계획 → 행동 → 평가 → 조정**
> 에이전트도 같은 사이클을 갖는다.

---

## track_progress 함수

```python
@register_tool(tags=["prompts"])
def track_progress(action_context: ActionContext,
                   _memory: Memory,
                   action_registry: ActionRegistry) -> str:
    """현재 작업, 사용 가능한 도구, 메모리 컨텍스트를 바탕으로 진행 보고서를 생성한다."""

    tool_descriptions = "\n".join(
        f"- {action.name}: {action.description}"
        for action in action_registry.get_actions()
    )

    memory_content = "\n".join(
        f"{m['type']}: {m['content']}"
        for m in _memory.items
        if m['type'] in ['user', 'system']
    )

    prompt = f"""현재 작업과 사용 가능한 도구를 바탕으로 진행 보고서를 작성하라.
단계별로 생각하라:

1. 작업의 핵심 구성 요소와 의도된 결과를 파악한다
2. 지금까지의 진행 상황을 평가한다
3. 완료를 가로막는 장애물이나 문제가 있으면 파악한다
4. 효율적으로 앞으로 나아가기 위한 다음 단계를 제안한다
5. 작업 완료에 도움이 될 도구 사용을 추천한다

명확하고 구조적인 항목으로 진행 보고서를 작성하라.

사용 가능한 도구:
{tool_descriptions}

메모리의 작업 컨텍스트:
{memory_content}

현재 진행 상황과 다음 단계에 대한 잘 정리된 보고서를 작성하라."""

    return prompt_llm(action_context=action_context, prompt=prompt)
```

### create_plan과의 차이

| | create_plan | track_progress |
|---|---|---|
| 실행 시점 | 에이전트 시작 시 (1회) | 각 루프 반복 종료 시 |
| 초점 | 앞으로 무엇을 할 것인가 | 지금까지 무엇을 했는가 |
| 역할 | 전략 수립 | 평가 및 조정 |

---

## ProgressTrackingCapability 구현

```python
class ProgressTrackingCapability(Capability):
    def __init__(self, memory_type="system", track_frequency=1):
        super().__init__(
            name="Progress Tracking",
            description="Tracks progress and enables reflection after actions"
        )
        self.memory_type = memory_type
        self.track_frequency = track_frequency  # N번마다 1회 추적
        self.iteration_count = 0

    def end_agent_loop(self, agent, action_context: ActionContext):
        """각 루프 반복 종료 시 진행 보고서를 생성하고 메모리에 저장한다."""
        self.iteration_count += 1
        
        # 지정된 빈도에만 추적 (매번이 아닐 수도 있음)
        if self.iteration_count % self.track_frequency != 0:
            return
            
        memory = action_context.get_memory()
        action_registry = action_context.get_action_registry()
        
        # 진행 보고서 생성
        progress_report = track_progress(
            action_context=action_context,
            _memory=memory,
            action_registry=action_registry
        )
        
        # 보고서를 메모리에 저장
        memory.add_memory({
            "type": self.memory_type,
            "content": f"진행 보고서 (반복 {self.iteration_count}회차):\n{progress_report}"
        })
```

### 주요 파라미터

| 파라미터 | 설명 |
|---|---|
| `memory_type` | 보고서를 저장할 메모리 타입 (기본: `"system"`) |
| `track_frequency` | N번 반복마다 1회 추적 (기본: 매 반복) |

---

## 사용 방법

```python
agent = Agent(
    goals=[
        Goal(
            name="data_processing",
            description="고객 피드백 데이터를 처리하고 분석한다"
        )
    ],
    capabilities=[
        ProgressTrackingCapability(track_frequency=2)  # 2번마다 1회 추적
    ],
    # ... 기타 에이전트 설정
)

memory = agent.run("Q4 고객 피드백을 분석하고 주요 문제를 파악해줘")
```

`track_frequency=2` 설정 시, 2번째·4번째·6번째 루프 반복 후에만 보고서가 생성된다.
복잡도가 낮으면 주기를 늘려 오버헤드를 줄일 수 있다.

---

## 루프 종료 후 추적의 장점

진행 추적을 루프 **시작** 이 아닌 **종료** 시점에 두는 이유:

1. **최신 결과 기반** — 방금 실행한 행동의 실제 결과를 평가에 반영
2. **오래된 가정 방지** — 초기 계획의 전제가 아닌 현재 상태를 기준으로 판단
3. **전략 실시간 조정** — 예상과 다른 결과가 나왔을 때 즉시 방향을 바꿀 수 있음
4. **감사 추적(Audit Trail)** — 에이전트 의사결정 과정이 보고서로 기록됨

---

## 진행 보고서가 의사결정에 미치는 영향

저장된 보고서는 에이전트 메모리의 일부가 되어 이후 행동에 영향을 준다.

에이전트는 보고서를 참조해:
- **완료된 단계를 반복하지 않는다**
- **식별된 장애물을 해결**하는 방향으로 행동한다
- **추천된 다음 단계**를 실행한다
- **권장된 도구**를 우선 활용한다

---

## 비용과 효과 트레이드오프

> 진행 추적은 **루프마다 LLM 호출을 1회 추가**한다 — 속도와 비용이 늘어난다.

| 작업 유형 | 권장 설정 |
|---|---|
| 단순한 단기 작업 | 추적 불필요 |
| 중간 복잡도 작업 | `track_frequency=2~3` |
| 장기 복잡 작업 | `track_frequency=1` (매 반복 추적) |

---

## 핵심 요약

- **ProgressTrackingCapability**는 각 루프 반복 후 `end_agent_loop`에서 자동 실행된다
- 진행 보고서는 메모리에 누적되어 에이전트의 장기 컨텍스트를 형성한다
- **계획(Plan First) + 진행 추적(Progress Tracking)** 을 함께 쓰면, 에이전트가 전략적으로 시작하고 실행 중에도 방향을 유지할 수 있다

> **장기 실행 작업에서 에이전트가 길을 잃거나 같은 행동을 반복한다면, 진행 추적을 추가하라.**
