# Giving Agents Memory — LLM은 기억력이 없다

## 개요
- 에이전트가 **자신의 행동(action)과 그 결과를 기억**해야 하는 이유, 그리고 LLM 자체에는 메모리가 없다는 사실과 이를 어떻게 시뮬레이션하는지 다루는 자료.
- 에이전트에게 메모리는 필수적이다 — 예를 들어 캘린더 이벤트 생성 API 호출이 잘못된 파라미터로 실패했다면, 에이전트는 "무엇이 실패했고 왜 실패했는지"를 기억해야 실수를 고치고 재시도할 수 있다. 복잡한 작업을 여러 단계로 나눴을 때도, 각 단계의 결과를 기억해야 중단된 지점부터 이어갈 수 있다.

## 내용

### LLM은 근본적으로 메모리가 없다 (Stateless)
- LLM은 이전 대화나 응답을 **내재적으로 "기억"하지 않는다**. 매번 호출할 때마다 `messages` 파라미터에 제공된 정보만을 바탕으로 응답을 생성한다.
- 이전 맥락이 `messages`에 포함되지 않으면, 모델은 그 맥락을 전혀 모른다.
- 따라서 대화의 연속성(continuity)을 시뮬레이션하려면, 매 요청마다 **관련된 이전 메시지(system/user/assistant 모두)를 명시적으로 messages 리스트에 포함**시켜야 한다.

### 예시 1 — 맥락이 빠진 경우 (실패 사례)
```python
messages = [
    {"role": "system", "content": "You are an expert software engineer that prefers functional programming."},
    {"role": "user", "content": "Write a function to swap the keys and values in a dictionary."}
]
response = generate_response(messages)
print(response)

# 두 번째 요청 — 이전 응답을 포함하지 않음
messages = [
    {"role": "user", "content": "Update the function to include documentation."}
]
response = generate_response(messages)
print(response)
```
- 첫 번째 응답: `def swap_keys_values(d): return {v: k for k, v in d.items()}`
- 두 번째 응답: **"어떤 함수를 말씀하시는 건지 잘 모르겠어요. 명확히 해주시겠어요?"**
- → 이전 상호작용에서 작성한 함수를 전혀 기억하지 못한다. 두 번째 프롬프트에 그 정보가 없기 때문.

### 예시 2 — assistant 역할로 이전 응답을 포함해 연속성 부여
- 해결책: `messages` 리스트에 이전 LLM 응답을 **"assistant" 역할(role)**로 추가한다. 이렇게 하면 모델이 이전에 작성한 코드를 "보고" 이어서 작업할 수 있다.

```python
messages = [
   {"role": "system", "content": "You are an expert software engineer that prefers functional programming."},
   {"role": "user", "content": "Write a function to swap the keys and values in a dictionary."},

   # 이전 단계에서 받은 assistant의 응답 — 이전 상호작용에 대한 "기억"을 부여
   {"role": "assistant", "content": response},

   # 이제 그 함수를 업데이트해달라고 요청 가능
   {"role": "user", "content": "Update the function to include documentation."}
]
response = generate_response(messages)
print(response)
```
- 결과: 이전 함수에 docstring과 예외 처리(ValueError)까지 포함한 업데이트된 버전을 정확히 반환.
- → assistant의 이전 응답을 포함시킴으로써 모델이 맥락을 유지하고 후속 질문에 적절히 대응할 수 있게 된다.

### 핵심 정리 (Key Takeaways)
- **내재적 메모리 없음**: LLM은 현재 프롬프트(`messages`)에 명시적으로 제공되지 않는 한 과거 상호작용을 전혀 모른다.
- **전체 맥락 제공**: 대화의 연속성을 시뮬레이션하려면 관련된 모든 메시지(user + assistant 응답)를 `messages`에 포함해야 한다.
- **assistant 메시지의 역할**: 이전 응답을 assistant 메시지로 추가하면 일관된 대화를 유지할 수 있다. 에이전트 입장에서는 이것이 **과거에 어떤 행동(API 호출 등)을 했는지 기억**하게 해주는 방법이다.
- **메모리 관리(Memory Management)**: 어떤 메시지를 대화에 포함시킬지 관리함으로써 LLM이 무엇을 기억하고 무엇을 "잊게" 할지 통제할 수 있다. 의도적으로 잊게 만드는 것도 유용한 도구가 될 수 있다 — 예를 들어 에이전트가 계속 좋지 않은 응답 패턴을 반복할 때, 그 패턴을 끊기 위해 일부 맥락을 제거하는 경우.

### 왜 중요한가
- LLM이 **상태 비저장(stateless)** 이라는 사실을 이해하는 것은, 환경과 다중 턴(multi-turn) 대화를 주고받는 에이전트를 설계하는 데 핵심적이다. 개발자는 모델이 정확하고 관련성 있는 응답을 생성하도록 **맥락을 명시적으로 관리하고 제공**해야 한다.

## 요약
- LLM은 stateless — `messages`에 없는 정보는 존재하지 않는 것과 같다.
- 연속성을 만들려면 이전 user/assistant 메시지를 계속 누적해서 함께 보내야 한다.
- 에이전트의 "기억"은 결국 **messages 리스트 관리**의 문제이며, 이는 이후 배울 Agent Loop에서 반복마다 프롬프트가 누적/성장하는 이유와 직결된다.
