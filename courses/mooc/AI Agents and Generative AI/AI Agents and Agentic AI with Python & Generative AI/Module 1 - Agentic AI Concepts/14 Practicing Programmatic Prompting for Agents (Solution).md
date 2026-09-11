# Practicing Programmatic Prompting for Agents (Solution) — Quasi-Agent 해설

## 개요
- [13](13%20Practicing%20Programmatic%20Prompting%20for%20Agents.md) 실습 과제("코드 작성 → 문서화 → 테스트 추가" 3단계 준-에이전트)의 예시 solution과 그 설계를 해설하는 자료.

## 내용

### 아키텍처 이해 — 3단계
1. **초기 코드 생성(Initial code generation)**
2. **문서화 보강(Documentation enhancement)**
3. **테스트 케이스 생성(Test case creation)**
- 핵심은 **이 단계들 사이에서 맥락(context)을 어떻게 유지**하는지 — 각 단계가 이전 결과 위에 쌓인다.

### 핵심 구성 요소
```python
def generate_response(messages: List[Dict]) -> str:
    """Call LLM to get response"""
    response = completion(
        model="openai/gpt-4",
        messages=messages,
        max_tokens=1024
    )
    return response.choices[0].message.content


def extract_code_block(response: str) -> str:
    """Extract code block from response"""
    if not '```' in response:
        return response

    code_block = response.split('```')[1].strip()
    if code_block.startswith("python"):
        code_block = code_block[6:]

    return code_block
```
- `generate_response`: ChatML 형식으로 LLM을 호출하는 공통 함수.
- `extract_code_block`: LLM 응답에는 흔히 설명(commentary)이 코드와 섞여 있으므로, **다음 프롬프트에서 이어서 쓰기 쉽도록 코드 블록만 추출**하는 함수. (이것이 [03 The Agent Loop](03%20The%20Agent%20Loop.md)에서 말한 "응답 파싱"의 실제 사례)

### 개발 프로세스 — `develop_custom_function()`이 3단계를 총괄
- **Phase 1: 초기 코드 생성**
  - system 메시지로 "너는 Python 전문가야" 설정 → user 메시지로 "```python 코드 블록```으로 출력해줘"라고 요청.
- **Phase 2: 문서화 보강**
  - 이전 단계의 코드를 **assistant 메시지로 다시 넣되, 설명 없이 코드만** 포함 → user 메시지로 "이 함수에 문서화를 추가해줘" 요청.
  - → 코드만 보여주고 설명은 제거함으로써 **LLM이 코드 구조에만 집중**하게 만드는 것이 포인트.
- **Phase 3: 테스트 케이스 생성**
  - 마찬가지로 문서화된 코드만 assistant 메시지로 전달 → "unittest 테스트 케이스를 추가해줘" 요청.

### 메시지 히스토리를 통한 메모리 관리 — 핵심 통찰
- "메모리"는 결국 `messages` 리스트를 어떻게 관리하느냐의 문제:
  - **설명(commentary)은 빼고 코드만 보여준다**
  - 각 메시지는 다음 개선 작업에 대한 **구체적인 지시**를 담는다
  - 맥락은 메시지 히스토리를 통해 **점진적으로 쌓인다**
- 예를 들어 문서화를 요청할 때 LLM이 보는 것은: (1) system 메시지(Python 전문가), (2) 원본 코드(이전 응답), (3) 문서화 요청(현재 작업) — 이렇게 **초점이 좁혀진 맥락**이 일관되고 품질 높은 출력을 만든다.

### 사용 예시
```
>>> function_code, tests, filename = develop_custom_function()
What kind of function would you like to create?
Example: 'A function that calculates the factorial of a number'
Your description: Calculate fibonacci sequence up to n

=== Initial Function ===
def fibonacci(n):
    ...

=== Documented Function ===
[... 문서화가 추가된 함수 ...]

=== Test Cases ===
[... unittest 테스트 케이스 ...]

Final code has been saved to calculate_fibonacci_sequence_up.py
```

## 이 설계에서 배우는 것 (Learning from This Design)
- **프롬프트 체이닝(Prompt Chaining)**: 복잡한 작업을 순차적 단계로 나누면 다루기 쉬워진다.
- **맥락 관리(Context Management)**: LLM이 무엇을 보게 할지 신중하게 통제하면 집중력과 일관성이 유지된다.
- **출력 처리(Output Processing)**: LLM 출력을 안정적으로 추출·정제하는 방법이 중요하다.
- **점진적 개선(Progressive Enhancement)**: 한 번에 모든 걸 처리하려 하기보다 코드 → 문서 → 테스트처럼 **단계적으로 기능을 쌓는 것**이 더 좋은 결과를 만든다.
- 이 원칙들은 이후 더 복잡한, 완전한 에이전트 시스템을 만들 때도 그대로 적용된다.

## 요약
- 이 solution은 [13](13%20Practicing%20Programmatic%20Prompting%20for%20Agents.md) 과제를 3단계 프롬프트 체이닝(코드→문서→테스트)으로 구현한 예시이며, 각 단계에서 **설명을 제거하고 코드만 재주입**해 맥락을 깔끔하게 유지하는 것이 핵심 설계 포인트다.
- 프롬프트 체이닝·맥락 관리·출력 파싱·점진적 개선이라는 네 가지 원칙은 이후 본격적인 Agent Loop/에이전트 설계에도 그대로 이어진다.
