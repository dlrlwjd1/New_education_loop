# 사전 계획(Plan First)으로 에이전트 추론 개선하기

## 핵심 아이디어

에이전트를 더 효과적으로 만드는 방법 중 하나는, **행동하기 전에 먼저 전략적으로 생각하게** 만드는 것이다.

도구를 바로 실행하는 대신, 에이전트가 먼저 **전체 계획을 수립**하도록 강제한다.

---

## Plan First 패턴의 동작 방식

1. 에이전트가 시작될 때 **상세한 계획을 먼저 작성**하게 프롬프트한다
2. 이 계획을 에이전트의 **메모리에 저장**한다
3. 에이전트는 실행 내내 이 계획을 **참조**하며 작업을 수행한다

---

## 구현: PlanFirstCapability

```python
class PlanFirstCapability(Capability):
    def __init__(self, plan_memory_type="system", track_progress=False):
        super().__init__(
            name="Plan First Capability",
            description="The Agent will always create a plan and add it to memory"
        )
        self.plan_memory_type = plan_memory_type
        self.first_call = True
        self.track_progress = track_progress

    def init(self, agent, action_context):
        if self.first_call:
            self.first_call = False
            # 계획 생성
            plan = create_plan(
                action_context=action_context,
                memory=action_context.get_memory(),
                action_registry=action_context.get_action_registry()
            )
            # 계획을 메모리에 저장
            action_context.get_memory().add_memory({
                "type": self.plan_memory_type,
                "content": "다음 지침을 따라 작업을 완료하라:\n" + plan
            })
```

- `first_call` 플래그로 계획 수립은 **최초 1회**만 실행된다
- 계획은 `system` 타입 메모리로 저장되어 이후 모든 단계에서 참조된다

---

## 계획 생성 함수: create_plan

```python
@register_tool(tags=["planning"])
def create_plan(action_context: ActionContext,
                memory: Memory,
                action_registry: ActionRegistry) -> str:
    """사용 가능한 도구와 메모리를 바탕으로 상세 실행 계획을 수립한다."""

    # 사용 가능한 도구 목록 정리
    tool_descriptions = "\n".join(
        f"- {action.name}: {action.description}"
        for action in action_registry.get_actions()
    )

    # 메모리에서 관련 컨텍스트 추출
    memory_content = "\n".join(
        f"{m['type']}: {m['content']}"
        for m in memory.items
        if m['type'] in ['user', 'system']
    )

    prompt = f"""주어진 작업과 사용 가능한 도구를 바탕으로 상세한 계획을 수립하라.
단계별로 생각하라:

1. 작업의 핵심 구성 요소를 파악한다
2. 사용 가능한 도구를 검토한다
3. 작업을 논리적인 단계로 분해한다
4. 각 단계별로 다음을 명시한다:
   - 무엇을 해야 하는가
   - 어떤 도구를 사용할 것인가
   - 어떤 정보가 필요한가
   - 기대 결과는 무엇인가

명확하고 번호가 매겨진 단계로 계획을 작성하라.

사용 가능한 도구:
{tool_descriptions}

메모리의 작업 컨텍스트:
{memory_content}

이 작업을 효과적으로 수행하는 계획을 작성하라."""

    return prompt_llm(action_context=action_context, prompt=prompt)
```

---

## 계획 수립 후 에이전트 응답 예시

판매 데이터 분석 요청 시, 에이전트가 먼저 생성하는 계획:

```
판매 데이터 분석 계획:

1. 데이터 검증
   - 도구: validate_data()
   - 데이터 완전성과 형식 확인
   - 필수 필드 존재 여부 검증
   - 기대 결과: 유효한 데이터셋 확인

2. 초기 분석
   - 도구: analyze_data()
   - 주요 지표 계산 (매출, 성장률)
   - 요약 통계 생성
   - 기대 결과: 기본 통계 개요

3. 트렌드 파악
   - 도구: find_patterns()
   - 계절적 패턴 탐색
   - 판매 트렌드 식별
   - 기대 결과: 주요 트렌드 목록

4. 시각화
   - 도구: create_visualization()
   - 관련 차트 생성
   - 핵심 발견 사항 강조
   - 기대 결과: 명확한 시각적 표현

5. 보고서 생성
   - 도구: generate_report()
   - 분석 결과 취합
   - 시각화 자료 포함
   - 기대 결과: 종합 보고서

1단계 데이터 검증부터 시작합니다...
```

---

## 사용 방법

```python
agent = Agent(
    goals=[
        Goal(
            name="analysis",
            description="판매 데이터를 분석하고 보고서를 작성한다"
        )
    ],
    capabilities=[
        PlanFirstCapability(track_progress=True)  # 계획 먼저 수립
    ],
    # ... 기타 에이전트 설정
)

result = agent.run("Q4 판매 데이터를 분석하고 보고서를 작성해줘")
```

---

## Plan First 패턴의 효과

| 기존 방식 | Plan First 방식 |
|---|---|
| 도구를 즉시 실행, 방향 수정이 잦음 | 전체 흐름을 먼저 설계하고 실행 |
| 중간에 목표를 잃을 수 있음 | 계획이 메모리에 있어 항상 참조 가능 |
| 단계 누락 가능성 | 구조화된 단계로 누락 방지 |
| 결과 예측이 어려움 | 각 단계별 기대 결과가 명시됨 |

---

## 핵심 요약

- **"행동 전에 계획"** 패턴은 에이전트의 전략적 사고를 강제한다
- 계획은 `Capability`로 구현해 에이전트 루프 시작 시 자동 실행된다
- 생성된 계획은 **메모리에 저장**되어 전체 실행 과정의 나침반이 된다
- 도구 목록과 현재 컨텍스트를 프롬프트에 포함해 **실제 실행 가능한 계획**을 생성한다

> **에이전트가 산만하게 도구를 호출하거나 방향을 잃는다면, Plan First 패턴을 적용해보라.**
