# Code Execution Tool

## 개요

이 강의에서는 LLM에게 코드를 작성하고 실행할 수 있는 tool을 제공하는 방식의 강력함과 위험성을 다룹니다.

핵심 주제:
- 여러 개의 전용 tool 대신 code execution tool을 제공하는 이유
- LLM이 Python 코드를 생성하고 runtime이 실행하는 흐름
- 코드 실행 실패 시 error message를 external feedback으로 활용하는 방법
- 임의 코드 실행의 보안 위험
- sandbox 환경의 필요성
- MCP로 확장되는 tool ecosystem

## 내용

### Code Execution이 강력한 이유

Agentic application에서 LLM에게 code execution 권한을 주면, LLM은 문제 해결을 위해 직접 코드를 작성하고 실행할 수 있습니다.

예를 들어 수학 word problem solver를 만든다고 가정합니다.

전용 tool 방식:
- `add`
- `subtract`
- `multiply`
- `divide`
- `sqrt`
- `exponentiation`
- `log`
- `sin`
- `cos`

이 방식은 필요한 기능이 늘어날 때마다 새로운 tool을 계속 만들어야 합니다.

반면 code execution tool을 제공하면 LLM이 필요한 계산을 Python 코드로 직접 작성할 수 있습니다.

예:

```text
What is the square root of two?
```

LLM은 다음과 같은 코드를 생성할 수 있습니다.

```python
import math
print(math.sqrt(2))
```

Runtime이 이 코드를 실행하면 `1.4142...` 결과를 얻고, 이 값을 다시 LLM에게 전달해 최종 답변을 만들 수 있습니다.

### Code Execution Workflow

LLM에게 코드를 작성하게 하려면 prompt에서 출력 형식을 정할 수 있습니다.

예:

```text
Write code to solve the user's query.
Return your answer as Python code delimited with:
<execute_python>
...
</execute_python>
```

흐름:

```text
User Query
  -> LLM이 Python code 생성
  -> Runtime이 execute_python 태그 사이의 코드 추출
  -> Runtime이 코드 실행
  -> 실행 결과를 LLM에게 전달
  -> LLM이 최종 답변 생성
```

### 코드 추출

LLM 출력에서 실행할 코드만 추출하려면 pattern matching을 사용할 수 있습니다.

예:
- 시작 태그: `<execute_python>`
- 종료 태그: `</execute_python>`
- 정규식으로 두 태그 사이의 코드 추출

```text
<execute_python>
import math
print(math.sqrt(2))
</execute_python>
```

Runtime은 이 중간 코드를 추출해 실행합니다.

### Python `exec`

Python에는 문자열로 된 코드를 실행하는 `exec` 함수가 있습니다.

```python
code = """
import math
print(math.sqrt(2))
"""

exec(code)
```

`exec`는 매우 강력합니다. LLM이 작성한 코드를 거의 그대로 실행할 수 있기 때문입니다.

하지만 그만큼 위험합니다. 코드가 파일을 삭제하거나, 네트워크 요청을 보내거나, 민감한 데이터를 읽을 수 있기 때문입니다.

### Reflection과 Code Execution

코드 실행이 실패하면 error message를 LLM에게 다시 전달할 수 있습니다.

```text
LLM generates code
  -> Runtime executes code
  -> Code fails with error
  -> Runtime sends error message back to LLM
  -> LLM reflects and revises code
  -> Runtime retries
```

이 방식은 Module 02에서 배운 external feedback 기반 Reflection과 같은 패턴입니다.

예:
- syntax error
- missing import
- wrong variable name
- incorrect API usage
- runtime exception

실행 결과나 traceback은 LLM에게 매우 유용한 feedback입니다. LLM은 이 정보를 보고 코드를 수정한 뒤 다시 시도할 수 있습니다.

### Code Execution이 유용한 작업

Code execution은 단순 계산뿐 아니라 다양한 작업에 유용합니다.

예:
- 복잡한 수학 계산
- 이자 계산
- 데이터 분석
- CSV/JSON 처리
- 그래프 생성
- 파일 변환
- 알고리즘 문제 풀이
- 반복적인 텍스트 처리
- 테스트 실행과 디버깅

전용 tool을 하나씩 만드는 대신, LLM이 필요한 코드를 작성해 문제를 해결할 수 있습니다.

## 보안과 Sandbox

### 임의 코드 실행의 위험

LLM이 생성한 코드를 그대로 실행하면 위험할 수 있습니다.

가능한 문제:
- 파일 삭제
- 프로젝트 디렉토리 손상
- 민감한 파일 읽기
- 외부 네트워크로 데이터 전송
- 무한 루프
- 과도한 리소스 사용
- 시스템 명령 실행

강의에서는 agentic coder가 실수로 `*.py` 파일들을 삭제한 사례를 언급합니다. GitHub backup이 있어 복구할 수 있었지만, backup이 없었다면 큰 문제가 될 수 있었습니다.

### Best Practice: Sandbox에서 실행

Code execution의 best practice는 sandbox 환경에서 실행하는 것입니다.

Sandbox의 목적:
- 파일 시스템 접근 제한
- 네트워크 접근 제한
- CPU와 메모리 사용량 제한
- 실행 시간 제한
- 민감한 데이터 접근 차단
- 문제가 생겨도 host system을 보호

사용 가능한 sandbox 예:
- Docker
- E2B 같은 lightweight sandbox
- 격리된 VM
- 제한된 Python execution environment

실무에서는 risk tolerance에 따라 sandbox 수준을 정해야 합니다.

### 현실적인 개발 관행

단일 코드 실행의 위험이 항상 높지는 않기 때문에, 많은 개발자는 간단한 LLM-generated code를 로컬에서 바로 실행하기도 합니다.

하지만 production 환경이나 민감한 데이터가 있는 환경에서는 sandbox가 필요합니다.

권장 기준:
- 실험용 notebook: 제한적으로 직접 실행 가능
- 개인 로컬 파일에 영향이 있는 작업: 주의 필요
- production agent: sandbox 권장
- 고객 데이터나 비밀 정보가 있는 환경: sandbox와 권한 제한 필수

## MCP로 확장되는 Tool Ecosystem

지금까지는 개발자가 직접 tool을 하나씩 구현하고 LLM에게 제공하는 방식을 봤습니다.

하지만 많은 팀이 비슷한 tool을 반복해서 만들고 있습니다.

최근에는 **MCP(Model Context Protocol)**라는 표준이 등장해, LLM application이 다양한 tool과 context에 더 쉽게 접근할 수 있게 하고 있습니다.

MCP의 방향:
- tool 제공 방식 표준화
- 외부 시스템과 LLM app 연결 단순화
- 여러 팀이 만든 tool을 재사용
- agent가 사용할 수 있는 tool ecosystem 확장

다음 강의에서는 MCP가 무엇이고 왜 중요한지 살펴봅니다.

## 예시

### 전용 계산 Tool 방식

```text
User: What is 13.2 + 18.9?
LLM: add tool 호출
Runtime: add(13.2, 18.9)
Result: 32.1
```

하지만 새로운 연산이 필요할 때마다 tool을 추가해야 합니다.

```text
User: What is the square root of 2?
Need: sqrt tool
```

### Code Execution 방식

```text
User: What is the square root of 2?
LLM:
<execute_python>
import math
print(math.sqrt(2))
</execute_python>

Runtime:
1.4142135623730951

LLM:
The square root of 2 is approximately 1.4142.
```

### 실패 후 Reflection

```text
LLM code:
print(sqrt(2))

Runtime error:
NameError: name 'sqrt' is not defined

LLM revised code:
import math
print(math.sqrt(2))
```

에러 메시지는 LLM이 문제를 고치는 데 필요한 external feedback이 됩니다.

## 요약

- Code execution tool은 LLM에게 매우 강력한 범용 tool을 제공함
- 전용 tool을 계속 추가하는 대신 LLM이 필요한 Python 코드를 직접 작성할 수 있음
- Runtime은 LLM 출력에서 코드 블록을 추출해 실행하고 결과를 다시 LLM에게 전달함
- Python `exec`는 강력하지만 임의 코드 실행 위험이 있음
- 코드 실행 실패 시 error message를 LLM에게 전달하면 Reflection을 통해 코드를 수정하고 재시도할 수 있음
- Code execution은 계산, 데이터 분석, 그래프 생성, 파일 처리, 디버깅 등에 유용함
- Production 환경에서는 Docker, E2B 같은 sandbox에서 실행하는 것이 best practice
- MCP는 여러 tool을 더 표준화된 방식으로 LLM application에 연결하기 위한 중요한 흐름

## 다음 주제

MCP(Model Context Protocol)를 통해 다양한 tool과 context를 LLM application에 연결하는 방법 살펴보기
