# Keeping Agent Tools Up to Date with Python Decorators

## 개요
- 에이전트 도구가 늘어날수록 "함수 시그니처가 바뀔 때마다 등록 코드(`Action`/`ActionRegistry`)도 같이 고쳐야 하는" 유지보수 부담이 커진다. **Python 데코레이터(decorator)**를 이용해 **함수 자체를 유일한 진실 공급원(single source of truth)**으로 삼아 이 문제를 해결한다.

## 내용

### 문제 — 수동 등록의 불일치 위험
```python
# In our action registry setup
action_registry.register(Action(
    name="read_file",
    function=read_file,
    description="Reads content from a specified file",
    parameters={
        "type": "object",
        "properties": {"file_path": {"type": "string"}},
        "required": ["file_path"]
    }
))

# The actual function
def read_file(file_path: str) -> str:
    """Reads and returns the content of a file."""
    with open(file_path, 'r') as f:
        return f.read()
```
- `read_file`에 파라미터를 추가하면 `parameters` 스키마도 같이 고쳐야 하고, 동작이 바뀌면 `description`도 같이 고쳐야 한다 — **시간이 지나면 둘이 어긋나기 쉽다.**

### 해결책 — `@register_tool` 데코레이터
```python
@register_tool(tags=["file_operations"])
def read_file(file_path: str) -> str:
    """Reads and returns the content of a file from the specified path.

    The function opens the file in read mode and returns its entire contents
    as a string. If the file doesn't exist or can't be read, it raises an
    appropriate exception.

    Args:
        file_path: The path to the file to read

    Returns:
        The contents of the file as a string
    """
    with open(file_path, 'r') as f:
        return f.read()
```
- 데코레이터가 함수를 검사(introspect)해서 자동으로:
  - 함수 이름을 도구 이름으로 사용
  - docstring을 설명(description)으로 추출
  - 타입 힌트와 파라미터를 분석해 스키마를 구축
  - 중앙 레지스트리에 도구를 등록

### 데코레이터 구현
```python
def register_tool(tool_name=None, description=None,
                 parameters_override=None, terminal=False, tags=None):
    """Registers a function as an agent tool."""
    def decorator(func):
        # Extract all metadata from the function
        metadata = get_tool_metadata(
            func=func,
            tool_name=tool_name,
            description=description,
            parameters_override=parameters_override,
            terminal=terminal,
            tags=tags
        )

        # Register in our global tools dictionary
        tools[metadata["tool_name"]] = {
            "description": metadata["description"],
            "parameters": metadata["parameters"],
            "function": metadata["function"],
            "terminal": metadata["terminal"],
            "tags": metadata["tags"]
        }

        # Also maintain a tag-based index
        for tag in metadata["tags"]:
            if tag not in tools_by_tag:
                tools_by_tag[tag] = []
            tools_by_tag[tag].append(metadata["tool_name"])

        return func
    return decorator
```
- 동작 방식:
  1. 여러 선택적 파라미터(`tool_name`, `description`, `parameters_override`, `terminal`, `tags`)를 받아 등록 방식을 설정.
  2. 실제로 데코레이트되는 함수(`func`)를 인자로 받는 내부 함수 `decorator`를 반환.
  3. 내부에서 `get_tool_metadata()`를 호출해 함수를 분석하고 도구 설명으로 변환.
  4. 전역 딕셔너리 `tools`에 도구 이름을 키로 등록 — `ActionRegistry`가 여기서 도구를 조회하도록 구성 가능.
  5. **태그 기반 인덱스(`tools_by_tag`)**도 함께 관리 — 카테고리별로 도구를 조회할 수 있게 해줌 (같이 써야 하는 도구 집합을 정의하는 데 유용).
  6. 마지막으로 원본 함수를 그대로 반환 — 일반 함수로도 여전히 호출 가능하면서 동시에 도구로도 등록됨.
- 이 패턴은 **도구의 정의와 등록을 깔끔하게 분리**해 코드베이스를 훨씬 유지보수하기 쉽게 만든다.

### 메타데이터 추출 헬퍼 — `get_tool_metadata`
```python
def get_tool_metadata(func, tool_name=None, description=None,
                     parameters_override=None, terminal=False, tags=None):
    """Extracts metadata for a function to use in tool registration."""

    # Use function name if no tool_name provided
    tool_name = tool_name or func.__name__

    # Use docstring if no description provided
    description = description or (func.__doc__.strip()
                                if func.__doc__ else "No description provided.")

    # If no parameter override, analyze the function
    if parameters_override is None:
        signature = inspect.signature(func)
        type_hints = get_type_hints(func)

        # Build JSON schema for arguments
        args_schema = {
            "type": "object",
            "properties": {},
            "required": []
        }

        # Examine each parameter
        for param_name, param in signature.parameters.items():
            # Skip special parameters
            if param_name in ["action_context", "action_agent"]:
                continue

            # Convert Python types to JSON schema types
            param_type = type_hints.get(param_name, str)
            param_schema = {
                "type": get_json_type(param_type)
            }

            args_schema["properties"][param_name] = param_schema

            # If parameter has no default, it's required
            if param.default == inspect.Parameter.empty:
                args_schema["required"].append(param_name)
    else:
        args_schema = parameters_override

    return {
        "tool_name": tool_name,
        "description": description,
        "parameters": args_schema,
        "function": func,
        "terminal": terminal,
        "tags": tags or []
    }
```
- 이 헬퍼가 하는 일:
  - 도구 이름이 명시되지 않으면 함수 이름을 사용.
  - 설명이 명시되지 않으면 docstring에서 추출.
  - **`inspect`와 `typing` 모듈로 정교한 인트로스펙션**: 함수 시그니처에서 모든 파라미터를 식별, `get_type_hints()`로 타입 애노테이션 추출, JSON Schema 구축, 기본값이 없는 파라미터를 필수(required)로 식별.
  - `action_context`, `action_agent` 같은 **특수 컨텍스트 파라미터는 건너뜀**.
  - `get_json_type()` 헬퍼로 Python 타입을 JSON Schema 타입으로 변환.
  - 이 모든 메타데이터를 딕셔너리로 패키징해서 데코레이터가 등록에 사용하도록 반환.
- 이 철저한 인트로스펙션 덕분에 도구를 최소한의 보일러플레이트로 정의하면서도, 에이전트 시스템이 각 도구를 올바르게 호출하는 방법을 이해할 수 있는 풍부한 메타데이터를 제공한다. **도구 설명은 항상 함수의 시그니처와 docstring과 일치**하게 되어, 에이전트가 가장 정확한 정보를 갖게 보장한다.

### 왜 데코레이터 방식을 쓰는가
- **단일 진실 공급원(Single Source of Truth)**: 함수 자체가 도구 정보의 권위 있는 출처가 된다 — docstring이 무엇을 하는지 설명하고, 타입 힌트가 파라미터를 정의하고, 구현이 어떻게 동작하는지 보여준다.
- **자동 갱신(Automatic Updates)**: 함수의 시그니처나 문서를 수정하면 도구 등록이 자동으로 동기화된다 — 파라미터 스키마를 업데이트하려고 코드를 뒤질 필요가 없다.
- **더 나은 조직화(Better Organization)**: 태그 시스템으로 도구를 분류하고 관련 기능을 찾을 수 있다 — 모든 "file_operations" 도구나 모든 "database_tools"를 쉽게 가져올 수 있다.
- **개선된 개발 경험**: 도구를 표준 문서화가 포함된 평범한 Python 함수로 작성하면, 데코레이터가 에이전트에서 사용 가능하게 만드는 복잡성을 모두 처리해준다.

### 예시 — 새 파라미터 추가가 얼마나 쉬워지는가
```python
@register_tool(tags=["file_operations"])
def read_file(file_path: str, encoding: str = 'utf-8') -> str:
    """Reads and returns the content of a file.

    Args:
        file_path: The path to the file to read
        encoding: The character encoding to use (default: utf-8)
    """
    with open(file_path, 'r', encoding=encoding) as f:
        return f.read()
```
- 도구의 파라미터 스키마가 새로운 `encoding` 파라미터를 (기본값이 있으므로) **선택적(optional)으로 자동 포함**하도록 갱신된다. 등록 코드나 문서를 수동으로 업데이트할 필요가 전혀 없다.

## 요약
- `@register_tool` 데코레이터 + `get_tool_metadata()` 인트로스펙션 헬퍼로, **함수의 이름/docstring/타입힌트/기본값**만으로 도구 등록에 필요한 모든 메타데이터(이름, 설명, JSON Schema 파라미터)를 자동 생성한다.
- 이는 [Module 2 - 05 Agent Tools in Python](../Module%202%20-%20AI%20Agents%2C%20Tools%2C%20Actions%2C%20%26%20Language/05%20Agent%20Tools%20in%20Python.md)에서 수동으로 작성했던 JSON Schema 도구 정의를, **코드와 문서가 항상 일치**하도록 자동화한 것.
- 태그(`tags`)를 통해 관련 도구를 그룹화할 수 있어, 다음 자료([02 Tool Organization for Agents](02%20Tool%20Organization%20for%20Agents.md))의 도구 조직화로 이어진다.
