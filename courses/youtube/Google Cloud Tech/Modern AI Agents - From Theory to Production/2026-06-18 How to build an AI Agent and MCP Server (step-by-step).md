# AI 에이전트와 MCP 서버 구축 방법 (단계별 가이드) (How to build an AI Agent and MCP Server (step-by-step))

## 개요
- **핵심 개념 요약**: Model Context Protocol (MCP) 표준 규격에 따라 데이터 도구를 배포하는 서버를 구현하고, 이를 클라이언트 에이전트에 통합하는 전체 파이프라인의 실무적인 튜토리얼을 다룹니다.
- **업로드일**: 2026-06-18
- **YouTube 링크**: [Watch Video](https://www.youtube.com/watch?v=wBnnA8aIxUs)

## 내용
### 1. 개발 환경 준비
- 일반적으로 Python 또는 Node.js 환경이 권장되며, MCP 공식 SDK 또는 Google Cloud ADK의 MCP 확장 팩을 설치하여 실습을 진행합니다.

### 2. 단계별 구축 과정
- **단계 1: 도구(Tool) 비즈니스 로직 작성**: 에이전트에 기여할 실제 소스 코드를 선언합니다 (예: 디렉토리 목록 스캔, 파일 파싱 등).
- **단계 2: MCP 서버 래핑**: 작성한 로직을 MCP 서버 클래스에 등록하고 LLM 지침용 파라미터 스키마를 부여합니다.
- **단계 3: 서버 가동 (SSE/StdIO)**: 로컬 호스트 포트를 개방하여 API 혹은 SSE 스트림으로 외부에 도구를 제공합니다.
- **단계 4: 클라이언트(ADK Agent) 연동**: 에이전트에 해당 서버 연결정보를 주입하여 도구를 활성화합니다.

### 3. 디버깅 및 테스팅 방법
- `mcp-cli` 또는 `inspector`를 사용하면 에이전트 없이도 서버가 제공하는 도구가 명세 규격에 맞게 올바른 JSON 결과를 반환하는지 수동 모의 호출 테스트를 수행할 수 있습니다.

## 예시
아래 예시는 지정한 폴더 내 파일 목록을 읽어오는 커스텀 도구를 노출시키는 간단한 MCP 서버 소스 코드와 이를 탑재해 기동하는 에이전트 클라이언트의 전체적인 모습입니다.

```python
# ====================
# [SERVER SIDE] server.py
# ====================
from google_cloud_adk.mcp import McpServer
from google_cloud_adk.mcp.types import ToolResult
import os

mcp_server = McpServer(name="FileExplorerServer", version="1.0.0")

@mcp_server.tool(
    name="list_directory_files",
    description="지정한 절대 경로 내의 파일과 폴더 목록을 읽어와 문자열 리스트로 반환합니다."
)
def list_files(dir_path: str) -> ToolResult:
    try:
        files = os.listdir(dir_path)
        return ToolResult(content=", ".join(files))
    except Exception as e:
        return ToolResult(content=f"에러가 발생했습니다: {str(e)}")

if __name__ == "__main__":
    mcp_server.start_sse(port=8081)


# ====================
# [CLIENT SIDE] client.py
# ====================
from google_cloud_adk import Agent
from google_cloud_adk.mcp import McpClientConnection

mcp_conn = McpClientConnection(server_url="http://localhost:8081")

file_agent = Agent(
    name="FileSearchAgent",
    instructions="이 폴더 탐색기 에이전트는 사용자가 요청한 디렉토리의 파일들을 추적 분석합니다.",
    connections=[mcp_conn]
)

# 실행 예
# response = file_agent.run("/Users/bjh/Documents 안에 무슨 파일들이 있어?")
```

## 요약
- MCP 서버와 에이전트의 단계별 연동은 에이전트의 확장성을 안전하게 넓히는 업계 표준 워크플로입니다.
- 개발 환경에서는 `inspector` 디버그 도구를 활용해 서버 단독 테스트를 우선 수행하는 것이 개발 기간을 획기적으로 줄여줍니다.
- ADK 프레임워크는 이러한 양방향 연동 통신 체계를 단순화하여 제공하므로 즉각적인 로컬 개발이 가능합니다.
