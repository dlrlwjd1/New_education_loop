# Connecting ADK Agents to MCP Servers

## 개요
- 업로드일: 2025-11-07
- 채널: Google Cloud Tech
- 재생목록: AI agent crash course (ADK & MCP 시리즈 1편, 총 2편 중 첫 번째)
- 멀티 에이전트 시스템 시리즈에 이어, 이번엔 Model Context Protocol(MCP)을 소개한다. MCP가 무엇인지, 왜 필요한지, 그리고 ADK 에이전트를 기존 MCP 서버에 연결하는 두 가지 예시를 다룬다.

## 내용

### 1. MCP 서버란 무엇인가
- Model Context Protocol(MCP)은 대규모 언어 모델과 AI 에이전트가 외부 세계와 대화하는 방법을 정의하는 **개방형 표준(open standard)**이다.
- 비유: MCP는 AI를 위한 **USB-C 포트**다. 모든 도구마다 커스텀 커넥터를 만드는 대신, 하나의 범용적인 연결 방식을 사용한다.
- 두 가지 핵심 개념:
  - **MCP 서버(MCP server)**: 도구(tool)를 노출(expose)한다. 데이터 소스, API, 커스텀 액션에 연결해 데이터 조회, API 호출, 커스텀 로직 실행 등을 제공한다.
  - **MCP 클라이언트(MCP client)**: 그 도구들을 발견(discover)하고 사용한다. 대부분의 경우 ADK 에이전트가 MCP 클라이언트 역할을 하며, MCP 서버에 접속해 새로운 능력을 얻는다.

### 2. 왜 ADK 에이전트를 MCP 서버에 연결하는가
MCP는 에이전트를 더 강력하고, 신뢰할 수 있고, 실용적으로 만들어준다.
- **외부 능력에 대한 접근**: 로컬/원격 파일시스템 읽기·쓰기, BigQuery·MongoDB 같은 데이터베이스 쿼리, Google Maps의 실시간 길찾기, Imagen 같은 생성형 미디어 도구 등 방대한 외부 기능을 사용할 수 있다.
- **모듈성과 재사용성(modularity and reusability)**: MCP 서버는 독립적인 서비스가 될 수 있으며, MCP를 준수하는 어떤 클라이언트(ADK 에이전트 포함)든 별도의 커스텀 연결 코드 없이 접속할 수 있다.
- **보안과 통제**: MCP를 통해 명확한 경계(boundary)를 정의할 수 있다.
- **배포 전략 단순화**: 원격 서버를 사용하면 도구를 에이전트에서 분리(decouple)할 수 있어, Cloud Run이나 GKE 같은 환경에서 스케일링이 훨씬 쉬워진다.

### 3. ADK 에이전트를 MCP 서버에 연결하는 방법
- ADK는 **MCP 도구셋(MCP toolset)**이라는 기능으로 이 연결을 쉽게 만든다. MCP 세계로 향하는 ADK의 다리(bridge)라고 볼 수 있다.
- 동작 방식: (1) MCP 서버(로컬 프로세스 또는 원격 HTTP 서버)와 연결을 설정 → (2) 서버에서 사용 가능한 도구를 모두 불러옴 → (3) MCP 도구를 ADK 호환 형식으로 변환해 양방향 통신을 처리 → (4) 에이전트가 MCP 도구를 사용하기로 하면, MCP 도구셋이 요청을 MCP 서버로 전달하고 응답을 다시 에이전트에게 전달.

### 두 가지 예시
- **파일시스템(file system) MCP 서버**: Python 예시에서 MCP 도구셋이 파일시스템 MCP 서버를 실행하는 NPX 명령어를 설정하고, 대상 폴더 경로를 인자로 전달해 서버가 그 특정 디렉터리에 접근하도록 한다. 이를 통해 에이전트는 `list directory`, `read file` 같은 도구를 사용할 수 있게 된다.
- **Google Maps MCP 서버**: API 키를 설정하고 필요한 Google Maps API를 활성화한 뒤, MCP 도구셋으로 Google Maps MCP에 연결하면 에이전트가 "뉴욕에서 샌프란시스코까지 가는 길 알려줘" 같은 요청에 응답할 수 있게 된다.

## 예시
개념 요약 코드:
```python
from google.adk.agents import Agent
from google.adk.tools.mcp_tool import MCPToolset, StdioServerParameters

# 파일시스템 MCP 서버에 연결
filesystem_toolset = MCPToolset(
    connection_params=StdioServerParameters(
        command="npx",
        args=["-y", "@modelcontextprotocol/server-filesystem", "/path/to/target/folder"],
    )
)

# Google Maps MCP 서버에 연결
maps_toolset = MCPToolset(
    connection_params=StdioServerParameters(
        command="npx",
        args=["-y", "@modelcontextprotocol/server-google-maps"],
        env={"GOOGLE_MAPS_API_KEY": "..."},
    )
)

agent_with_mcp = Agent(
    name="agent_with_mcp",
    model="gemini-2.5-flash",
    tools=[filesystem_toolset, maps_toolset],
)
```

## 요약
- MCP는 AI 에이전트를 위한 범용 연결 표준(USB-C에 비유)이며, MCP 서버가 도구를 노출하고 MCP 클라이언트(대개 ADK 에이전트)가 이를 사용한다.
- MCP를 쓰면 외부 능력 접근, 모듈성·재사용성, 보안·통제, 배포 단순화라는 이점을 얻는다.
- ADK의 MCP 도구셋(MCP toolset)이 연결 설정 → 도구 로딩 → 형식 변환 → 요청 전달까지 자동으로 처리해준다.
- 다음 편([Building your own MCP server with ADK](2025-11-17%20Building%20your%20own%20MCP%20server%20with%20ADK.md))에서는 반대로 ADK로 자체 MCP 서버를 만드는 방법을 다룬다.
