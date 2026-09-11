# Tool Organization for Agents — 태그에서 레지스트리까지

## 개요
- 공방을 정리할 때 도구를 목적별로 서랍에 나눠 담듯이, **태그(tag)와 레지스트리(registry)**를 이용해 에이전트 도구를 체계적으로 정리하는 3단 구조를 다룬다: **Tool Decorators → Tool Registry → Action Registry**.

## 내용

### 조직화의 3단 구조
1. **Tool Decorators** — [01](01%20Keeping%20Agent%20Tools%20Up%20to%20Date%20with%20Python%20Decorators.md)의 `@register_tool`로 개별 도구에 태그를 달고 문서화.
2. **Tool Registry** — 사용 가능한 모든 도구의 중앙 저장소.
3. **Action Registry** — 특정 에이전트를 위해 선별된(curated) 도구 집합.

### 목적별로 도구 태그 달기
```python
@register_tool(tags=["file_operations"])
def read_file(file_path: str) -> str:
    """Reads and returns the content of a file."""
    with open(file_path, 'r') as f:
        return f.read()

@register_tool(tags=["file_operations", "write"])
def write_file(file_path: str, content: str) -> None:
    """Writes content to a file."""
    with open(file_path, 'w') as f:
        f.write(content)

@register_tool(tags=["database", "read"])
def query_database(query: str) -> List[Dict]:
    """Executes a database query and returns results."""
    return db.execute(query)
```
- 하나의 도구에 **여러 태그**를 붙일 수 있다 (예: `write_file`은 `file_operations`이면서 `write`).
- 등록 시 데코레이터가 두 개의 전역 레지스트리를 유지한다:
  - **`tools`**: 이름으로 색인된 모든 도구의 딕셔너리
  - **`tools_by_tag`**: 태그별로 정리된 도구 이름의 딕셔너리

```python
# Internal structure of tools_by_tag
{
    "file_operations": ["read_file", "write_file"],
    "write": ["write_file"],
    "database": ["query_database"],
    "read": ["query_database"]
}
```
- 이 구조 덕분에 "파일 작업 관련 도구 전부" 또는 "읽기 작업을 수행하는 도구 전부"처럼 **관련 도구를 쉽게 찾을 수 있다.**

### 태그로 선별된 Action Registry 만들기
- 에이전트를 만들 때 필요한 도구만 골라 `ActionRegistry`를 손쉽게 구성할 수 있다:

```python
def create_file_processing_agent():
    # Create a registry with only file operation tools
    action_registry = ActionRegistry(tags=["file_operations"])

    return Agent(
        goals=[Goal(1, "File Processing", "Process project files")],
        agent_language=AgentFunctionCallingActionLanguage(),
        action_registry=action_registry,
        generate_response=generate_response,
        environment=Environment()
    )

def create_database_agent():
    # Create a registry with only database tools
    action_registry = ActionRegistry(tags=["database"])

    return Agent(
        goals=[Goal(1, "Database Operations", "Query database as needed")],
        agent_language=AgentFunctionCallingActionLanguage(),
        action_registry=action_registry,
        generate_response=generate_response,
        environment=Environment()
    )
```

### 태그만으로 특화된 에이전트 만들기
```python
# 읽기 전용 에이전트 (쓰기 불가)
read_only_agent = Agent(
    goals=[Goal(1, "Read Only", "Read but don't modify data")],
    agent_language=AgentFunctionCallingActionLanguage(),
    action_registry=ActionRegistry(tags=["read"]),
    generate_response=generate_response,
    environment=Environment()
)

# 모든 파일 작업을 처리하는 에이전트
file_agent = Agent(
    goals=[Goal(1, "File Handler", "Manage file operations")],
    agent_language=AgentFunctionCallingActionLanguage(),
    action_registry=ActionRegistry(tags=["file_operations"]),
    generate_response=generate_response,
    environment=Environment()
)
```
- `read` 태그만 가진 도구로 구성하면 **쓰기 능력이 아예 없는 안전한 읽기 전용 에이전트**를 간단히 만들 수 있다 — 도구 접근 범위를 제한하는 실용적인 방법.

## 요약
- **Tool Decorators(태그 부착) → Tool Registry(전체 목록) → Action Registry(선별된 부분집합)**의 3단 구조로 도구를 조직화한다.
- 하나의 도구가 여러 태그를 가질 수 있고, `tools_by_tag` 인덱스로 태그별 조회가 가능하다.
- `ActionRegistry(tags=[...])`처럼 **태그만 지정하면** 필요한 도구 집합으로 구성된 특화 에이전트(파일 처리 전용, DB 전용, 읽기 전용 등)를 손쉽게 만들 수 있다 — 이는 [Module 2 - 12 Agent Tool Design Best Practices](../Module%202%20-%20AI%20Agents%2C%20Tools%2C%20Actions%2C%20%26%20Language/12%20Agent%20Tool%20Design%20Best%20Practices.md)에서 강조한 "작업 특화 도구" 원칙을 조직 수준에서 실현하는 방법이다.
