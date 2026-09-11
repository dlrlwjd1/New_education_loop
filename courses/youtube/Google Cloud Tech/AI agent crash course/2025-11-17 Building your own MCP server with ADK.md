# Building your own MCP server with ADK

## 개요
- 업로드일: 2025-11-17
- 채널: Google Cloud Tech
- 재생목록: AI agent crash course (ADK & MCP 시리즈 2편/완결편, [1편 - Connecting ADK Agents to MCP Servers](2025-11-07%20Connecting%20ADK%20Agents%20to%20MCP%20Servers.md) 후속)
- 1편에서는 ADK 에이전트를 기존 MCP 서버에 연결했다면, 이번 편에서는 반대로 **ADK로 직접 MCP 서버를 만드는 방법**을 다룬다. 이렇게 만든 서버는 ADK 에이전트뿐 아니라 다른 프레임워크의 MCP 호환 클라이언트도 접속할 수 있다.

## 내용

### 1. MCP 서버를 만들기 위한 핵심 구성요소
ADK 도구를 MCP 서버 안에 감싸는(wrap) 작업이 핵심이다.
- **MCP 라이브러리**: 서버를 만드는 프레임워크와, 내보낼(export) ADK 도구를 제공하는 Python 라이브러리. Python 함수를 감싸는 function tool 같은 기존 ADK 도구에서 시작한다.
- **두 개의 서버 핸들러**:
  - **list_tools**: 클라이언트에게 어떤 도구가 있는지 알려준다.
  - **call_tool**: 클라이언트가 도구를 호출하면 실제로 실행한다.
- **연결 메커니즘**: 로컬 개발이나 간단한 배포에는 `stdio`(asyncio 기반)가 흔히 쓰이고, 네트워크로 확장 가능한 프로덕션 환경에는 `streamable HTTP`가 선호된다.
- **asyncio**: ADK와 MCP 라이브러리 모두 Python의 `asyncio`를 사용하므로, 서버 코드는 기본적으로 async 방식으로 작성된다.
- 핵심 아이디어: MCP 서버는 래퍼이자 번역기(wrapper and translator) 역할을 하며, ADK 도구를 발견 가능하게 만들고 다른 클라이언트가 표준화된 방식으로 호출할 수 있게 해준다.

### 2. 세 가지 사용 사례

**① API MCP 서버 만들기**
- 예: 웹페이지를 불러오는(load web page) 기능을 API처럼 노출.
- 흐름: `my_adk_mcp_server.py` 같은 서버 스크립트를 만들고, 그 안에서 MCP 서버로 `list_tools`(load web page를 노출)와 `call_tool`(클라이언트가 호출하면 ADK 도구를 실행)을 정의한다.
- 테스트: 두 번째 ADK 에이전트를 클라이언트로 띄워 커스텀 MCP 서버에 연결하면, `load web page` 도구를 발견하고 필요할 때 웹사이트를 가져올 수 있다. `__init__.py` 파일을 추가하고 상위 디렉터리에서 `adk web`을 실행하면, ADK 클라이언트가 MCP 서버를 서브프로세스로 실행해 연결하고 페이지를 가져온다.

**② 데이터베이스 MCP 서버 만들기**
- 예: 에이전트가 기업 데이터에 접근해야 하는 경우. 처음부터 커스텀 데이터베이스 연동을 작성하는 대신, 데이터베이스를 MCP 도구로 노출하도록 특별히 만들어진 오픈소스 서버인 **MCP 도구박스(MCP toolbox for database)**를 사용한다.
- MCP 도구박스를 서비스로 배포한 뒤, 1편에서 다룬 MCP 도구셋(MCP toolset)으로 ADK 에이전트를 연결하면, 에이전트가 MCP 추상화 계층을 통해 데이터를 안전하게 조회·분석할 수 있다.

**③ 커스텀 MCP 서버 만들기 (고급 시나리오)**
- 표준 범주에 맞지 않는 도구를 노출하고 싶을 때 사용. 예: Imagen(이미지 생성), Veo(비디오 생성) 같은 생성형 미디어 — Google이 이런 사례를 위한 오픈소스 MCP 서버를 제공하기도 함.
- 다른 예: 사내 API를 감싸 다른 MCP 클라이언트가 쓸 수 있게 만들거나, 수학 계산 같은 커스텀 로직을 정의해 도구로 만드는 경우.
- 과정은 동일: MCP 라이브러리 사용 → `list_tools`/`call_tool` 정의 → 연결 방식 선택(로컬은 stdio, 원격은 streamable HTTP).
- 더 쉽게 만들고 싶다면 **FastMCP** 라이브러리를 활용할 수 있다. MCP 서버 구축과 배포를 단순화해주는 도구다.

## 예시
개념 요약 코드:
```python
from mcp.server import Server
from mcp.server.stdio import stdio_server
from google.adk.tools import FunctionTool

load_web_page_tool = FunctionTool(func=load_web_page)

server = Server("my-adk-mcp-server")

@server.list_tools()
async def list_tools():
    return [load_web_page_tool.as_mcp_tool()]

@server.call_tool()
async def call_tool(name: str, arguments: dict):
    if name == "load_web_page":
        return await load_web_page_tool.run_async(**arguments)

async def main():
    async with stdio_server() as (read, write):
        await server.run(read, write)
```

## 요약
- ADK로 MCP 서버를 만든다는 것은 ADK 도구를 MCP 라이브러리로 감싸고, `list_tools`/`call_tool`을 통해 노출하는 것이다.
- 세 가지 사용 사례: API를 노출하는 서버(`load web page`), 데이터베이스를 노출하는 서버(MCP 도구박스 활용), 생성형 미디어·사내 API·커스텀 로직을 위한 커스텀 서버.
- 직접 MCP 서버를 만들면 자신의 ADK 에이전트를 강화할 뿐 아니라, 그 도구를 전체 MCP 생태계에서 쓸 수 있게 기여하는 것이 된다.
- 이 두 편(연결하기 + 직접 만들기)으로 고립된 에이전트에서 진짜 상호 연결된 AI 생태계로 나아가는 방법을 배웠다.
