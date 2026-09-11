# Agent Tool Design Best Practices — 도구 설계/명명/에러 처리 모범 사례

## 개요
- Module 2에서 배운 도구 설계 원칙([03](03%20Tool%20Descriptions%20and%20Naming.md), [04](04%20Tool%20Results%20and%20Agent%20Feedback.md), [05](05%20Agent%20Tools%20in%20Python.md))을 **구체적인 모범 사례로 종합**하는 자료. 도구는 "제한적이고, 명확히 정의되고, 작업에 최대한 특화된" 함수 집합이어야 한다.

## 내용

### 도구 설계가 중요한 이유 — 범용 vs 특화
- 도구가 너무 범용적(generic)이면(예: 하나의 `list_files`나 `read_file`) 에이전트가 잘못 사용하기 쉽다 — 예를 들어 파일을 읽으려다 엉뚱한 디렉토리를 지정하는 실수.
- **작업에 특화된(task-specific) 도구**로 설계하면 정확성을 강제하면서 에이전트의 실수 여지를 최소화한다.
- 물론 에이전트는 범용 도구도 사용할 수 있지만, **특화된 도구가 관리하기 쉽고 오용될 가능성이 적다.** 대신 특화될수록 재사용성은 떨어진다 — **특이성(specificity)과 유연성(flexibility) 사이의 트레이드오프**가 존재.
- **원칙**: 에이전트를 처음 만들 때는 **특이성(specificity) 쪽으로 치우치는 것**이 안전하다.

### 예시 — 범용 함수 대신 작업 특화 함수
| 범용 (지양) | 특화 (권장) |
|---|---|
| `list_files(directory: str)` — 임의 디렉토리의 모든 파일 반환 | `list_python_files()` — **오직 `src/` 디렉토리의 Python 파일만** 반환 |
| `read_file(file_path: str)` — 임의 경로의 파일 읽기 | `read_python_file(file_name: str)` — **오직 `src/` 디렉토리의 Python 파일만** 읽기 |
| `write_file(file_path: str, content: str)` — 임의 경로에 쓰기 | `write_documentation(file_name: str, content: str)` — **오직 `docs/` 디렉토리에만** 문서 작성 |

```json
{
  "tool_name": "read_python_file",
  "description": "Reads the content of a Python file from the src/ directory.",
  "parameters": {
    "type": "object",
    "properties": {"file_name": {"type": "string"}},
    "required": ["file_name"]
  }
}
```

### Step 2 — 이름 짓기(Naming) 모범 사례
- 이름이 모호하면(`proc_handler`) AI가 목적을 추론하기 어렵다 — `process_file`처럼 **명확하게** 지어야 한다.

| 나쁜 이름 | 좋은 이름 |
|---|---|
| `list_pf` | `list_python_files` |
| `rd_f` | `read_python_file` |
| `wrt_doc` | `write_documentation` |

- 이름을 잘 지어도, 특히 전문화된 도메인에서는 **구조화된 설명(description)이 여전히 모호함 해소에 필요**하다.

### Step 3 — 견고한 에러 처리(Robust Error Handling)
- 각 도구는 에러를 우아하게 처리하고 **에이전트에게 풍부한 에러 메시지**를 돌려줘야 한다 ([04 Tool Results and Agent Feedback](04%20Tool%20Results%20and%20Agent%20Feedback.md)의 원칙을 코드로 구현).

```python
import os

def read_python_file(file_name):
    """Reads a Python file from the src/ directory with error handling."""
    file_path = os.path.join("src", file_name)

    if not file_name.endswith(".py"):
        return {"error": "Invalid file type. Only Python files can be read."}

    if not os.path.exists(file_path):
        return {"error": f"File '{file_name}' does not exist in the src/ directory."}

    with open(file_path, "r") as f:
        return {"content": f.read()}
```
- 이 버전이 보장하는 것: **Python 파일만 읽힘**, **존재하지 않는 파일은 유익한 에러 반환**, **모든 응답이 에이전트가 파싱하기 쉬운 구조**로 통일됨.

### 에러 메시지에 "지침(instructions)"을 심어두기
- 특정 도구들이 항상 함께 쓰여야 하거나, 에러를 처리하는 "정답 경로"가 있다면, **그 정보를 에러 메시지 안에 직접 심어서** 에이전트에게 돌려줄 수 있다.

```python
def read_python_file(file_name):
    """Reads a Python file from the src/ directory with error handling."""
    file_path = os.path.join("src", file_name)

    if not file_name.endswith(".py"):
        return {"error": "Invalid file type. Only Python files can be read. Call the list_python_files function to get a list of valid files."}
    ...
```
- 이 정보를 처음부터 `agent_rules`(system 메시지)에 넣어둘 수도 있지만, 그러면 **에이전트가 그것을 계속 기억하고 있어야 하고**, 규칙이 복잡해져 다른 도구의 에러 처리에도 예상치 못한 부작용을 줄 수 있다.
- 대신 **에러가 발생하는 바로 그 지점에 지침을 주입**하면, 에이전트는 규칙으로 미리 기억할 필요 없이 **필요한 순간(just in time)**에 정확한 정보를 얻는다.

## 결론 — 체크리스트
1. **설명적인 이름**을 사용할 것
2. **구조화된 메타데이터**를 제공할 것
3. 파라미터에는 **JSON Schema**를 활용할 것
4. AI가 **맥락을 이해**하도록 보장할 것
5. **견고한 에러 처리**를 갖출 것
6. **유익한 에러 메시지**를 제공할 것
7. **에러 메시지에 지침을 주입**할 것

## 요약
- 도구는 범용적인 것보다 **작업에 특화**된 것이 초기 개발 단계에서 더 안전하다 (특이성 vs 유연성의 트레이드오프는 존재).
- 이름·설명·JSON Schema·에러 처리를 모두 갖춰야 에이전트가 정확하게 도구를 사용한다.
- **에러 메시지에 다음에 뭘 해야 할지 힌트를 심어두는 것**은 system 규칙을 복잡하게 만들지 않고도 에이전트가 필요한 순간에 올바르게 행동하도록 유도하는 효과적인 패턴.
- 다음 자료(Module 4)에서는 **데코레이터(decorator)를 이용한 동적 도구 등록**을 다룰 예정.
