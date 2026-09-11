# Tool Use Implementation

## AISuite 라이브러리

앤드류 응과 동료들이 만든 오픈소스 패키지.
여러 LLM 프로바이더(OpenAI, Anthropic 등)를 동일한 인터페이스로 호출할 수 있음.

## 기본 코드 구조

```python
response = client.chat.completions.create(
    model="openai:gpt-4o",
    messages=messages,
    tools=[get_current_time],
    max_turns=5
)
```

OpenAI SDK 문법과 거의 동일하며, `tools` 파라미터에 함수 목록을 전달.

### `max_turns` 파라미터

- 툴 호출 후 LLM이 또 다른 툴을 연속 호출할 수 있어 무한 루프 방지용으로 존재
- 실제로는 거의 도달하지 않음 — 보통 5로 설정해도 무방

## JSON Schema 자동 생성

AISuite는 함수의 **docstring**을 읽어 LLM에게 전달할 JSON schema를 자동으로 생성함.

```python
def get_current_time(timezone: str) -> str:
    """현재 시각을 반환한다.
    
    Args:
        timezone: 시간대 (예: America/New_York, Pacific/Auckland)
    """
    ...
```

↓ AISuite가 자동으로 생성하는 JSON schema:

```json
{
  "name": "get_current_time",
  "description": "현재 시각을 반환한다.",
  "parameters": {
    "timezone": {
      "type": "string",
      "description": "시간대 (예: America/New_York, Pacific/Auckland)"
    }
  }
}
```

→ 이 JSON schema가 실제로 LLM에 전달되어 LLM이 언제, 어떻게 함수를 호출할지 판단함.

일부 API는 이 JSON schema를 개발자가 직접 작성해야 하지만, AISuite는 자동화.

## 전체 실행 흐름 (AISuite 기준)

```
client.chat.completions.create() 호출
    ↓
LLM이 툴 호출 여부 결정
    ↓ (호출 결정 시)
AISuite가 자동으로 함수 실행 (개발자가 직접 호출할 필요 없음)
    ↓
함수 결과를 LLM에 전달
    ↓
LLM이 다음 툴 호출 여부 결정 (max_turns까지 반복)
    ↓
최종 응답 반환
```

다른 LLM 인터페이스에서는 함수 실행을 개발자가 직접 처리해야 하는 경우도 있음.

## 기술적 정확성 노트

> "LLM이 툴을 호출한다"는 표현은 엄밀히 틀렸음.
> LLM은 툴 호출을 **요청(request)** 하고, 실제 실행은 외부 코드(AISuite 등)가 담당.
> 하지만 개발자들 사이에서 관행적으로 "LLM이 툴을 호출한다"고 표현함.

## 특별한 툴: 코드 실행 (Code Execution)

모든 툴 중 가장 강력한 것 중 하나.
- LLM이 코드를 작성하고 → 코드 실행 툴로 즉시 실행 가능
- 코드는 거의 모든 것을 할 수 있으므로, 이 툴 하나로 유연성이 극적으로 증가

→ 다음 강의에서 별도로 다룸

## 다음 주제

코드 실행 툴 (Code Execution Tool) — LLM에게 코드 작성 + 실행 권한을 주면 왜 강력한지
