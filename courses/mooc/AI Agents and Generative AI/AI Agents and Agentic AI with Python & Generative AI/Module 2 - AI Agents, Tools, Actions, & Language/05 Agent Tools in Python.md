# Agent Tools in Python — JSON Schema로 도구를 구조화해서 설명하기

## 개요
- [03 Tool Descriptions and Naming](03%20Tool%20Descriptions%20and%20Naming.md)에서 배운 "좋은 이름과 설명"을 **Python 코드 + JSON Schema로 구조화**해서 실제로 구현하는 방법을 다룬다.
- 예시 시나리오: `src/` 디렉토리의 모든 Python 파일을 스캔해 `docs/` 디렉토리에 문서를 자동 생성하는 에이전트.

## 내용

### 에이전트가 필요로 하는 3가지 작업
1. `src/` 디렉토리의 Python 파일 목록 조회
2. 각 Python 파일의 내용 읽기
3. `docs/` 디렉토리에 문서 파일 쓰기
- 파일 조작은 사람에게는 직관적이지만, **맥락이 없는 AI에게는 모호**하다 — 그래서 이 도구들을 명확히 정의해야 효과적으로 사용할 수 있다.

### Step 1 — 기본 도구 정의 (Python 함수)
```python
def list_python_files():
    """Returns a list of all Python files in the src/ directory."""
    return [f for f in os.listdir("src") if f.endswith(".py")]
```
- 이것만으로는 AI 시스템에게 도구를 설명하기엔 부족하다 — **더 구조화된 방식**이 필요.

### Step 2 — JSON Schema로 파라미터 정의
- 개발자가 API를 설계할 때 구조화된 문서(JSON Schema)로 함수/입력/출력을 기술하듯, AI 에이전트에게도 같은 방식을 자연스럽게 적용할 수 있다.

```json
{
  "tool_name": "read_file",
  "description": "Reads the content of a specified file.",
  "parameters": {
    "type": "object",
    "properties": {
      "file_path": { "type": "string" }
    },
    "required": ["file_path"]
  }
}
```

```json
{
  "tool_name": "write_doc_file",
  "description": "Writes a documentation file to the docs/ directory.",
  "parameters": {
    "type": "object",
    "properties": {
      "file_name": { "type": "string" },
      "content": { "type": "string" }
    },
    "required": ["file_name", "content"]
  }
}
```

### 왜 JSON Schema로 도구를 설명하면 좋은가
- 각 도구에 JSON Schema를 붙이면:
  - **AI가 도구의 목적(purpose)을 인식**할 수 있다.
  - **AI/환경 인터페이스가 실행 전에 입력 파라미터를 검증(validate)**할 수 있다.

### 파라미터를 왜 객체(object)로 감싸는가
- 함수의 여러 파라미터를 하나의 객체로 표현하는 것이 이상해 보일 수 있지만, 이는 **에이전트가 도구/행동을 선택해서 출력할 때의 형식**과 맞추기 위함이다:

```json
{
  "tool_name": "read_file",
  "args": {
    "file_path": "src/file.py"
  }
}
```

- 스키마는 함수에 전달될 `args`를 담을 전체 딕셔너리 구조를 기술하는 것이므로, `object` 타입으로 표현하는 것이 자연스럽다. (**Module 1 - 16 Building Your First Agent**.md)의 `{"tool_name": ..., "args": {...}}` 형식과 동일한 패턴).

## 요약
- 도구를 AI에게 설명할 때는 **함수 자체(Python 코드) + JSON Schema(이름/설명/파라미터 타입/필수 여부)**로 구조화하는 것이 표준적인 방식이다.
- JSON Schema는 AI가 도구의 목적을 이해하고, 인터페이스가 실행 전 파라미터를 검증하도록 돕는다.
- 파라미터를 `object`로 감싸는 이유는 에이전트의 `{"tool_name": ..., "args": {...}}` 출력 형식과 그대로 대응시키기 위함이다.
