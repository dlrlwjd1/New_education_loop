# Installing the Neon MCP Server

## 개요
- Claude Code가 Neon database와 직접 상호작용할 수 있도록 **Neon MCP server**를 설치하는 강의.
- Project scope로 설치해 `.mcp.json`에 설정을 저장하고, OAuth로 Neon 계정을 인증한다.
- MCP 사용 시 항상 DevStash project의 **development branch**를 기본으로 쓰고, 명시하지 않는 한 production data는 건드리지 않도록 context에 규칙을 추가한다.

## 내용

### Neon MCP를 설치하는 이유
지금까지 database data를 확인하려면 다음 방식이 필요했다.

- application code에서 Prisma 사용
- test script 작성
- Neon dashboard에서 직접 확인
- Prisma Studio 사용

Neon MCP를 설치하면 Claude Code가 Neon에 직접 query할 수 있다.

예:

```text
Show me the collections in the DevStash project development branch.
```

이렇게 요청하면 MCP tool을 통해 Neon project, branch, table data를 직접 조회한다.

### Quick setup 대신 Claude Code OAuth 사용
Neon docs에는 여러 setup 방식이 있다.

강사는 quick setup의 `npx` command를 권장하지 않는다.

이유:
- global로 설치될 수 있음
- 여러 editor/tool에 걸쳐 설정될 수 있음
- file이 예상치 못한 위치에 생길 수 있음

대신 Claude Code용 OAuth setup command를 사용한다.

### Project scope로 설치
Neon docs의 Claude Code OAuth command를 복사한 뒤, scope를 project로 바꾼다.

예:

```bash
claude mcp add ... --scope project
```

Project scope를 쓰는 이유:
- 이 project에서만 MCP 설정을 관리
- team/project 단위로 공유 가능
- 설정이 `.mcp.json`에 저장됨
- repository에 commit 가능

### .mcp.json
Project scope로 MCP를 추가하면 root에 `.mcp.json`이 생성된다.

구조 예:

```json
{
  "mcpServers": {
    "neon": {
      ...
    }
  }
}
```

나중에 다른 MCP server를 project scope로 추가하면 같은 `mcpServers` object 안에 추가된다.

### MCP server 인식
처음에는 다음 명령이 바로 감지하지 못할 수 있다.

```bash
claude mcp list
```

이 경우 terminal을 닫고 새로 열거나 Claude Code를 다시 시작한다.

Claude Code를 다시 실행하면:

```text
New MCP server found
```

같은 안내가 뜬다.

이 project에서 future MCP server를 사용할지 묻는 prompt가 나오면 승인한다.

### OAuth 인증
MCP 목록을 확인한다.

```text
/mcp
```

처음에는 Neon MCP가 `needs authentication` 상태로 보인다.

인증 흐름:
1. Neon MCP 선택
2. Authenticate 클릭
3. Browser window 열림
4. Neon에 로그인된 계정 확인
5. Approve/Authorize 클릭
6. Authentication successful
7. Claude Code로 돌아와 `/mcp` 재확인

정상 상태:

```text
neon connected
```

### VS Code extension에서 사용
Terminal Claude Code에서 인증을 마친 뒤, VS Code extension으로 돌아와도 Neon MCP를 사용할 수 있다.

예시 prompt:

```text
Show me the collections in the DevStash project development branch.
```

Claude Code는 Neon MCP tools를 사용한다.

사용되는 tool 예:
- list projects
- describe project
- branch 조회
- run SQL

각 tool 사용은 승인해야 할 수 있다.

### Query 결과
MCP가 development branch를 찾은 뒤 SQL을 실행해 collections table을 조회한다.

결과는 table 형태로 표시된다.

이제 app code나 Prisma script를 거치지 않고도 database data를 바로 확인할 수 있다.

### Production branch 주의
Neon MCP는 account의 project와 branch에 접근할 수 있다.

위험:
- development와 production branch를 헷갈릴 수 있음
- production data를 실수로 조회/수정할 수 있음
- Neon 계정에 project가 많으면 잘못된 project를 선택할 수 있음

강사는 이 계정에 DevStash project만 있어 위험이 적지만, 그래도 context에 안전 규칙을 추가한다.

### CLAUDE.md에 Neon MCP 규칙 추가
Claude Code에게 Neon MCP 사용 규칙을 만들어 달라고 요청한다.

Prompt:

```text
Give me instructions to put in my CLAUDE.md so that you always know to use
the DevStash project and the development branch whenever I use the Neon MCP.
I never want you to touch production unless I specify.
```

생성된 내용을 `CLAUDE.md` 또는 관련 context file에 추가한다.

포함할 내용:
- Neon MCP 사용 시 default project는 `DevStash`
- default branch는 `development`
- default database/connection 정보
- production branch는 사용자가 명시적으로 요청한 경우에만 접근
- production data는 절대 임의로 수정하지 않음

### Context update 후 확인
Claude Code를 재시작한 뒤 더 짧게 요청해 본다.

```text
Show me my collections data from Neon.
```

규칙이 잘 적용되면:
- DevStash project 사용
- development branch 사용
- collections data 조회
- production branch를 건드리지 않음

### 다음 단계
Neon MCP 설치가 완료되었다.

다음에는 최신 documentation을 가져오기 위한 **Context7 MCP**를 설치한다.

## 예시

설치/인증 흐름:

```text
Copy Claude Code OAuth command from Neon docs
  -> add --scope project
  -> run command
  -> .mcp.json created
  -> restart Claude Code
  -> /mcp
  -> authenticate Neon
  -> approve in browser
  -> neon connected
```

사용 예:

```text
Show me the collections in the DevStash project development branch.
```

Context 규칙 예:

```md
## Neon MCP

When using Neon MCP tools, always use the DevStash project and the development branch by default.
Never access or modify the production branch unless explicitly instructed.
```

## 요약
- Neon MCP를 project scope로 설치하면 `.mcp.json`에 설정이 저장된다.
- OAuth 인증 후 Claude Code가 Neon project/branch/table data를 직접 조회할 수 있다.
- MCP tool 사용 시 project와 branch를 명확히 지정해야 한다.
- 안전을 위해 CLAUDE.md/context에 DevStash development branch를 default로 쓰고 production은 명시 요청 없이는 건드리지 않는 규칙을 추가한다.
- 다음 강의에서는 Context7 MCP를 설치한다.
