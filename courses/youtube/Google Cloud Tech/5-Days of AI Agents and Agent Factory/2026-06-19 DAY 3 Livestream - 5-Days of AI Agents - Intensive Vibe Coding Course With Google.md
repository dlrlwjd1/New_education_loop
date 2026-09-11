# 3일차 라이브 스트림 - 5일 집중 AI 에이전트: 구글과 함께하는 바이브 코딩(Vibe Coding) (DAY 3 Livestream - 5-Days of AI Agents: Intensive Vibe Coding Course With Google)

## 개요
- **핵심 개념 요약**: 5일 집중 바이브 코딩 코스의 3일차 학습 자료입니다. 로컬이나 네트워크 상의 격리된 도구들을 통합 규격으로 조율해 주는 **Model Context Protocol (MCP)** 서버 아키텍처를 도입하고, 이를 클라이언트 에이전트와 연동해 로컬 데스크톱 자원에 안전하게 접근하는 통합 실습을 완수합니다.
- **업로드일**: 2026-06-19
- **YouTube 링크**: [Watch Video](https://www.youtube.com/watch?v=1T2mxYZkqL0)

## 내용
### 1. 3일차 돌파구: 개별 하드코딩에서 프로토콜 표준(MCP)으로
- 2일차까지 진행한 수동 Function Calling은 새로운 도구를 추가할 때마다 에이전트 소스 코드를 계속 갱신해야 하는 한계가 있었습니다.
- 3일차에는 오픈소스 생태계의 표준 통신 프로토콜인 **MCP**를 적용하여, 도구 제공 주체(Server)와 도구 소비 주체(Agent Client)의 아키텍처를 느슨하게 결합(Loose coupling)하도록 변혁합니다.

### 2. StdIO 및 SSE 기반 로컬/원격 연결 실습
- **StdIO Transport**: 에이전트 구동 터미널에서 MCP 서버 실행 명령어(예: `python server.py`)를 하위 서브프로세스로 기동시켜 표준 입출력 파이프라인으로 빠르게 통신하는 실습을 진행합니다.
- 로컬 파일 시스템에서 문서 데이터를 검색하여 모델의 지식 베이스로 공급하는 `Filesystem MCP Server` 연동 프로젝트를 완성합니다.

## 예시
아래 예시 코드는 3일차 강좌에서 학습하는 로컬 디렉토리의 마크다운 파일들의 개수를 세고 본문을 추출하여 에이전트의 콘텍스트 윈도우에 즉시 바인딩해 주는 로컬 StdIO 기반 MCP 서버 및 클라이언트의 구성 예시입니다.

```python
# ====================
# [SERVER] file_mcp_server.py
# ====================
from google_cloud_adk.mcp import McpServer
from google_cloud_adk.mcp.types import ToolResult
import glob

server = McpServer(name="SimpleFileHelper")

@server.tool(
    name="count_markdown_files",
    description="지정한 로컬 디렉토리 경로 안의 모든 .md 파일들의 개수를 세어 반환합니다."
)
def count_md(dir_path: str) -> ToolResult:
    files = glob.glob(f"{dir_path}/*.md")
    return ToolResult(content=f"Found {len(files)} markdown files.")

if __name__ == "__main__":
    # 부모 프로세스와의 표준 입출력(StdIO) 파이프로 통신 개시
    server.start_stdio()


# ====================
# [CLIENT] agent_client.py
# ====================
# 에이전트 호스트 측에서는 StdIO 연결 설정을 매핑합니다.
# config.json 예시:
# {
#   "mcpServers": {
#     "file-helper": {
#       "command": "python3",
#       "args": ["file_mcp_server.py"]
#     }
#   }
# }
```

## 요약
- MCP를 연동하면 에이전트와 도구 제공 레이어가 완전히 분리되어 독립적으로 스케일링 및 보안 검증이 용이해집니다.
- 3일차 완성 결과로 로컬 파일의 읽기/쓰기를 자율 제어하는 안전한 에이전트를 실현했습니다.
- 4일차에는 개별 에이전트를 넘어 다수의 에이전트가 상태와 역할을 공유해 협력하는 오케스트레이션 단계로 나아갑니다.
