# How LLMs Use Tools

## 개요

이 강의에서는 LLM이 tool이나 function을 "호출"하는 과정이 실제로 어떻게 동작하는지 살펴봅니다.

핵심 주제:
- LLM은 함수를 직접 실행하지 않음
- LLM은 특정 형식의 텍스트를 출력해 tool call 의도를 표현
- 개발자 코드(runtime)가 LLM 출력에서 tool call을 감지하고 실제 함수를 실행
- 함수 실행 결과를 다시 LLM에게 전달
- LLM은 그 결과를 바탕으로 최종 답변 또는 다음 tool call을 생성

## 내용

### Tool이란

Tool은 LLM이 실행을 요청할 수 있는 코드나 함수입니다.

예:
- 현재 시간 조회 함수
- 웹 검색 함수
- 데이터베이스 조회 함수
- 계산 함수
- 파일 읽기 함수
- 외부 API 호출 함수

중요한 점은 LLM이 tool을 직접 실행하는 것이 아니라, tool 실행을 요청한다는 점입니다.

### 과거 방식: Prompt로 Tool 사용 규칙 알려주기

오늘날의 LLM은 tool use를 직접 지원하도록 학습되어 있지만, 예전에는 prompt로 tool 사용 규칙을 직접 알려줘야 했습니다.

예를 들어 `getCurrentTime` 함수가 있다고 가정합니다.

LLM에게 다음과 같이 알려줄 수 있습니다.

```text
You have access to a tool called getCurrentTime.
To use it, output:

FUNCTION: getCurrentTime
```

사용자가 물어봅니다.

```text
What time is it?
```

LLM은 직접 시간을 알 수 없으므로 다음과 같이 출력합니다.

```text
FUNCTION: getCurrentTime
```

이 출력은 실제 함수 실행이 아니라, "이 함수를 호출해 달라"는 요청입니다.

### Runtime 코드의 역할

LLM이 `FUNCTION: getCurrentTime`을 출력하면, 개발자가 작성한 코드가 다음 일을 해야 합니다.

1. LLM 출력에서 `FUNCTION:` 패턴을 찾음
2. 호출할 함수 이름을 추출
3. 실제 Python 함수 `getCurrentTime()` 실행
4. 함수 결과를 얻음
5. 결과를 conversation history에 추가
6. LLM을 다시 호출

예:

```text
User: What time is it?
Assistant: FUNCTION: getCurrentTime
Tool result: 8 a.m.
Assistant: It is 8 a.m.
```

LLM은 함수 결과인 `8 a.m.`을 다시 입력으로 받은 뒤, 최종 사용자 답변을 생성합니다.

### LLM은 함수를 직접 호출하지 않는다

Function calling에서 가장 중요한 개념은 다음입니다.

> LLM은 함수를 직접 실행하지 않고, 실행해야 할 함수와 인자를 특정 형식으로 출력한다.

실제 실행은 항상 LLM 바깥의 코드가 담당합니다.

```text
LLM
  -> "FUNCTION: getCurrentTime" 출력

Developer Runtime
  -> 출력 파싱
  -> getCurrentTime() 실행
  -> 결과를 LLM에 전달

LLM
  -> 최종 답변 생성
```

### 인자가 있는 Tool

Tool은 인자를 받을 수도 있습니다.

예를 들어 특정 time zone의 현재 시간을 가져오는 함수가 있다고 가정합니다.

```python
getCurrentTime(timezone)
```

LLM에게 다음처럼 알려줄 수 있습니다.

```text
You can use the getCurrentTime tool for a specific time zone.
To use it, output:

FUNCTION: getCurrentTime <timezone>
```

사용자 질문:

```text
What time is it in New Zealand?
```

LLM 출력:

```text
FUNCTION: getCurrentTime Pacific/Auckland
```

Developer runtime은 다음을 수행합니다.

1. `FUNCTION:` 패턴 감지
2. 함수 이름 `getCurrentTime` 추출
3. 인자 `Pacific/Auckland` 추출
4. `getCurrentTime("Pacific/Auckland")` 실행
5. 결과를 LLM에게 전달

예:

```text
Tool result: 4 a.m.
```

이후 LLM은 다음과 같이 답할 수 있습니다.

```text
It is 4 a.m. in New Zealand.
```

### 여러 Tool이 있는 경우

LLM에게 여러 tool을 제공할 수도 있습니다.

예:
- `getCurrentTime`
- `searchWeb`
- `calculate`
- `queryDatabase`

이 경우 LLM은 다음을 결정해야 합니다.

- 어떤 tool을 사용할지
- 어떤 인자를 전달할지
- tool 결과를 보고 바로 답할지
- 추가 tool call이 필요한지

즉, tool use는 단일 호출로 끝날 수도 있고, 여러 번 반복될 수도 있습니다.

### Tool Use 전체 프로세스

LLM이 tool을 사용하는 기본 흐름은 다음과 같습니다.

1. 개발자가 tool 함수를 구현
2. LLM에게 사용할 수 있는 tool과 호출 형식을 알려줌
3. 사용자가 질문
4. LLM이 tool call 요청을 특정 형식으로 출력
5. 개발자 코드가 출력에서 tool call을 감지
6. 개발자 코드가 실제 함수를 실행
7. 함수 결과를 LLM에게 다시 전달
8. LLM이 최종 답변 또는 다음 tool call을 생성

```text
User Question
  -> LLM decides tool is needed
  -> LLM outputs tool call request
  -> Runtime parses request
  -> Runtime executes tool
  -> Runtime sends tool result back to LLM
  -> LLM answers or requests another tool
```

### Modern Tool Calling

과거의 `FUNCTION: getCurrentTime` 같은 all-caps syntax는 다소 투박한 방식입니다.

오늘날의 LLM은 tool use를 더 직접적으로 지원합니다.

현대적인 tool calling에서는:
- LLM이 정해진 tool call schema를 사용
- 개발자가 `FUNCTION:` 같은 문자열을 직접 파싱할 필요가 줄어듦
- tool name과 arguments가 더 구조화된 형태로 전달됨
- 여러 tool call과 인자를 더 안정적으로 처리할 수 있음

다만 내부 개념은 같습니다.

> LLM이 tool call 의도를 표현하고, runtime이 실제 tool을 실행한 뒤, 결과를 다시 LLM에게 전달한다.

## 예시

### 인자 없는 Function Call

```text
User:
What time is it?

LLM:
FUNCTION: getCurrentTime

Runtime:
getCurrentTime() 실행
결과: 8 a.m.

LLM:
It is 8 a.m.
```

### 인자가 있는 Function Call

```text
User:
What time is it in New Zealand?

LLM:
FUNCTION: getCurrentTime Pacific/Auckland

Runtime:
getCurrentTime("Pacific/Auckland") 실행
결과: 4 a.m.

LLM:
It is 4 a.m. in New Zealand.
```

### Runtime 관점의 의사코드

```python
llm_output = call_llm(messages)

if llm_output.startswith("FUNCTION:"):
    function_name, arguments = parse_function_call(llm_output)
    result = call_function(function_name, arguments)

    messages.append({"role": "assistant", "content": llm_output})
    messages.append({"role": "tool", "content": result})

    final_answer = call_llm(messages)
else:
    final_answer = llm_output
```

이 코드는 과거 방식의 단순화된 예입니다. 현대 tool calling은 이 과정을 구조화된 API로 더 안전하게 처리합니다.

## 요약

- Tool은 LLM이 실행을 요청할 수 있는 함수나 코드
- LLM은 tool을 직접 실행하지 않고, 특정 형식으로 tool call 요청을 출력함
- 개발자 runtime이 LLM 출력을 파싱하고 실제 함수를 호출함
- 함수 실행 결과는 다시 LLM의 conversation history에 추가됨
- LLM은 tool result를 보고 최종 답변을 만들거나 다음 tool call을 요청함
- 인자가 있는 tool도 같은 방식으로 처리되며, LLM은 함수 이름과 인자를 함께 출력함
- 과거에는 `FUNCTION:` 같은 문자열 규칙을 prompt로 직접 만들었지만, 현대 LLM은 구조화된 tool calling syntax를 지원함
- 다음 강의에서는 modern tool calling syntax를 살펴봄

## 다음 주제

현대 LLM에서 tool call을 표현하는 구조화된 syntax 살펴보기
