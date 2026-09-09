# VS Code Codex MCP 사용 안내

이 프로젝트를 VS Code에서 열면 Codex가 `.codex/config.toml`의 MCP 설정을 읽습니다. 프로젝트가 Codex에서 신뢰된 상태여야 합니다.

## 준비된 서버

| 서버 | 용도 | 구성 |
| --- | --- | --- |
| Context7 | 라이브러리 문서와 코드 예제 검색 | 원격 HTTP 연결, API 키 없이 시작 |
| Playwright | 웹 페이지 탐색, 화면 확인, 브라우저 테스트 | MCP 0.0.80, Chromium, 창 없는 실행 |
| Notion | 워크스페이스 검색, 페이지 읽기·편집 | 공식 원격 MCP, Notion OAuth 로그인 |
| Google Workspace | Google Drive 파일과 Gmail 검색·관리 | 로컬 Workspace MCP 1.25.2, Google OAuth 로그인 |

Playwright는 세션마다 별도의 브라우저 상태를 사용하며 로그인 상태를 다음 세션에 저장하지 않습니다. 브라우저 창을 보려면 `.codex/config.toml`의 `args`에서 `"--headless"`를 제거하세요.

## 시작하기

1. VS Code에서 이 프로젝트 폴더를 엽니다.
2. `Cmd+Shift+P` → `Developer: Reload Window`를 실행합니다.
3. Codex 패널에서 새 대화를 열고, 톱니바퀴 메뉴의 **MCP servers**에서 `context7`, `playwright`, `notion`, `google_workspace`를 확인합니다. Google은 아래의 최초 설정을 마친 후 사용할 수 있습니다.
4. 아래와 같이 요청합니다.

```text
Context7로 React의 useEffect 문서를 찾아서 사용 예제를 설명해줘.
```

```text
Playwright로 https://example.com 을 열고 페이지 제목을 확인해줘.
```

앱 개발 서버가 실행 중이면 `http://localhost:3000` 같은 주소를 지정해서 테스트할 수 있습니다.

## Notion 로그인

프로젝트 루트에서 `codex mcp login notion`을 실행하거나 Codex의 **MCP servers → notion → Authenticate**를 사용합니다. 브라우저에서 연결할 Notion 워크스페이스와 접근 대상을 선택합니다.

로그인 후 새 대화에서 `Notion에서 접근 가능한 페이지를 찾아줘`라고 요청할 수 있습니다.

## Google Drive·Gmail 최초 설정

두 서비스는 `google_workspace` 서버 하나로 연결합니다. [Workspace MCP](https://github.com/taylorwilsdon/google_workspace_mcp)는 현재 Mac에서 실행하는 커뮤니티 오픈소스입니다. Google Cloud 프로젝트는 계정 접근을 위한 OAuth 인증을 발급하는 용도이며, MCP 서버를 클라우드에 배포하는 과정은 없습니다. 이 구성에는 Google Workspace MCP 개발자 프리뷰 승인이 필요하지 않습니다.

1. [Google Cloud 새 프로젝트](https://console.cloud.google.com/projectcreate)에서 `Codex MCP`라는 프로젝트를 만들고 선택합니다.
2. 해당 프로젝트에서 [Google Drive API](https://console.cloud.google.com/apis/library/drive.googleapis.com)와 [Gmail API](https://console.cloud.google.com/apis/library/gmail.googleapis.com)를 사용 설정합니다.
3. [Google Auth Platform](https://console.cloud.google.com/auth/overview)에서 앱 이름을 `Codex MCP`로 설정하고 본인 이메일을 지원·연락처 이메일로 입력합니다. 개인 계정은 Audience를 **External**로 선택하고, 테스트 사용자에 로그인할 Google 계정을 추가합니다.
4. **Clients → Create client**에서 유형을 **Desktop app**으로 선택하고 JSON 파일을 다운로드합니다. API 키나 서비스 계정 키가 아닌 OAuth 클라이언트 JSON이 필요합니다.
5. 다운로드한 JSON을 `~/.config/new-education-loop/google-oauth-client.json`에 저장합니다. 파일 내용은 채팅이나 저장소에 붙여넣지 않아도 됩니다. 파일 경로를 Codex에 알려주면 저장과 검증을 진행할 수 있습니다.
6. VS Code를 다시 불러오고 새 Codex 대화에서 `Google Drive에서 최근 파일 3개를 찾아줘. 사용할 Google 계정은 [내 이메일]이야`라고 요청합니다. 첫 도구 호출에서 반환되는 인증 링크를 브라우저로 열고 로그인과 요청 권한 승인을 마친 뒤 같은 요청을 다시 실행합니다. 이 로컬 서버는 도구 호출 시 Google 인증을 시작하므로 `codex mcp login google_workspace`는 사용하지 않습니다.

첫 로그인 뒤 아래처럼 실제 호출을 확인합니다.

```text
Google Drive에서 최근 파일 3개를 찾아줘.
```

```text
Gmail의 안 읽은 메일 3개를 찾아줘.
```

Google 토큰은 `~/.config/new-education-loop/google-credentials`에 저장됩니다. MCP 설정에는 비밀값 대신 파일 경로만 들어 있습니다. `google_workspace.command`와 환경 변수의 경로는 현재 Mac 기준이므로 다른 컴퓨터에서는 해당 경로를 조정하세요.

참고: Google OAuth 앱이 **External / Testing** 상태이면 Gmail·Drive 권한의 refresh token이 7일 후 만료될 수 있으므로 다시 로그인해야 할 수 있습니다. [Google OAuth 문서](https://developers.google.com/identity/protocols/oauth2#expiration)

## 다른 환경에서 준비하기

Node.js 18 이상과 Codex 확장이 필요합니다. 프로젝트를 신뢰한 후 터미널에서 다음 명령으로 설정과 동일한 버전의 브라우저를 설치합니다.

```sh
npx --yes @playwright/mcp@0.0.80 install-browser chromium
```

Codex CLI가 PATH에 있다면 프로젝트 루트에서 다음 명령으로 서버 등록을 확인할 수 있습니다. 이 명령은 설정 목록을 보여주며 실제 연결 검사는 도구를 호출해서 진행합니다.

```sh
codex mcp list
```

## 연결 문제 해결

- 서버가 보이지 않으면 이 프로젝트 폴더를 열었는지, Codex에서 프로젝트가 신뢰된 상태인지 확인한 뒤 확장을 다시 시작합니다.
- `npx`를 찾지 못하면 VS Code 터미널에서 `node --version`, `npx --version`을 확인합니다. nvm 환경에서는 Node를 활성화한 터미널에서 `code .`로 VS Code를 여세요.
- 브라우저 실행 파일이 없다는 오류가 나면 위의 `install-browser chromium` 명령을 실행합니다. MCP 버전을 변경할 때도 해당 버전으로 다시 설치합니다.
- Context7 사용량 제한이 발생하면 [Context7 대시보드](https://context7.com/dashboard)에서 API 키를 발급받아 사용자 설정에 추가할 수 있습니다. 키를 프로젝트 파일에 저장하지 마세요.
- Google 서버는 `uv`가 필요합니다. `uvx --from workspace-mcp==1.25.2 workspace-mcp --help`로 설치를 확인할 수 있습니다.
- Google에서 OAuth 클라이언트를 찾지 못하면 위 경로의 JSON을 확인합니다. 로그인 중 `Access blocked`가 나오면 선택한 Google 계정이 OAuth 앱의 테스트 사용자에 등록되어 있는지 확인합니다.
- `조직 내에서만 사용할 수 있습니다` 또는 `403 org_internal` 오류는 OAuth 앱이 내부 전용일 때 발생합니다. 조직 계정으로 로그인하거나, 본인이 관리하는 앱에서 개인 Gmail을 허용하려면 **Google Auth Platform → Audience → External**로 전환한 뒤 해당 계정을 테스트 사용자로 추가합니다. 조직 정책상 변경할 수 없다면 관리자에게 접근을 요청합니다.
- Google 도구에서 API 비활성화 오류가 나오면 OAuth JSON을 발급한 프로젝트에 Drive API와 Gmail API가 모두 활성화되어 있는지 확인합니다.

## 공식 문서

- [Codex MCP 설정](https://learn.chatgpt.com/docs/extend/mcp?surface=cli)
- [Context7](https://github.com/upstash/context7)
- [Playwright MCP](https://github.com/microsoft/playwright-mcp)
- [Notion MCP](https://developers.notion.com/guides/mcp/get-started-with-mcp)
- [Workspace MCP 설치 안내](https://workspacemcp.com/quick-start)
- [Google OAuth 클라이언트 만들기](https://developers.google.com/workspace/guides/create-credentials)
