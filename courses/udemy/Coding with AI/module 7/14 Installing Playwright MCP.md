# Installing Playwright MCP

## 개요
- 마지막으로 설치할 MCP server인 **Playwright MCP**를 설정하는 강의.
- Playwright MCP는 AI가 실제 browser를 열고 페이지를 보고, 버튼을 클릭하고, user event를 실행할 수 있게 해준다.
- UI testing과 end-to-end interaction 확인에 매우 유용하다.

## 내용

### Playwright MCP를 사용하는 이유
Playwright MCP는 강사가 가장 좋아하는 MCP server 중 하나다.

가능한 작업:
- browser 열기
- URL 이동
- 페이지 내용 읽기
- button 클릭
- link 이동
- modal 열기
- user interaction 실행
- UI 테스트 보조

즉, AI가 실제 사용자가 하는 동작을 browser에서 수행할 수 있다.

### 설치 command 가져오기
Playwright MCP GitHub page에서 Claude Code 섹션을 연다.

거기에서 install command를 복사한다.

강사는 이전 MCP들과 마찬가지로 project scope로 설치한다.

예:

```bash
claude mcp add playwright ... --scope project
```

`--scope project`를 추가하는 이유:
- project에만 설정을 저장
- `.mcp.json`에 추가
- team/project 단위로 공유 가능

### .mcp.json 확인
설치 후 `.mcp.json`을 확인한다.

이제 세 MCP server가 들어 있다.

예:

```json
{
  "mcpServers": {
    "neon": {},
    "context7": {},
    "playwright": {}
  }
}
```

강의에서 설치한 MCP:
- Neon
- Context7
- Playwright

### Claude Code 재시작
MCP를 추가한 뒤 Claude Code를 닫고 다시 연다.

이유:
- 새 MCP server를 인식시키기 위해
- `/mcp` 목록과 tool 사용 가능 상태를 갱신하기 위해

### Playwright MCP 테스트
간단한 browser task로 테스트한다.

Prompt:

```text
Open the TraverseeMedia.com website and click on the View Courses button in the hero
and list out the available courses for me.
```

강사는 prompt에서 Playwright를 직접 언급하지 않았지만, Claude Code가 browser interaction이 필요하다고 판단해 Playwright MCP를 사용한다.

### Tool approvals
Playwright MCP는 browser tool 사용 승인을 요청한다.

예:
- Playwright Browser Navigate
- Browser Click

각 tool 사용을 승인하면 실제 browser가 local machine에서 열린다.

### Browser interaction
실행 흐름:
1. TraverseeMedia.com 열기
2. hero section의 View Courses button 찾기
3. button 클릭
4. courses page로 이동
5. course titles 읽기
6. available courses 목록을 assistant가 정리

AI가 실제 page를 보고 클릭하기 때문에, 단순 HTML 추측보다 훨씬 실제 UI 테스트에 가깝다.

### 결과
Playwright MCP는 다음을 반환한다.

- featured courses
- available courses
- membership options

강사는 이것이 매우 유용하며, 나중에 DevStash UI testing에 사용할 것이라고 설명한다.

### 세 MCP 설치 완료
지금까지 설치한 MCP:

1. Neon MCP
   - database 직접 query
2. Context7 MCP
   - 최신 documentation 조회
3. Playwright MCP
   - browser/UI interaction

이제 application 개발로 돌아가 다음 큰 기능인 authentication을 시작한다.

## 예시

설치 흐름:

```text
Open Playwright MCP GitHub docs
  -> Copy Claude Code command
  -> Add --scope project
  -> Run command
  -> Confirm playwright in .mcp.json
  -> Restart Claude Code
```

테스트 prompt:

```text
Open the TraverseeMedia.com website and click on the View Courses button in the hero
and list out the available courses for me.
```

MCP tools:

```text
Playwright Browser Navigate
Browser Click
```

## 요약
- Playwright MCP는 AI가 실제 browser를 보고 조작할 수 있게 해준다.
- Project scope로 설치하면 `.mcp.json`에 추가된다.
- Navigate/click 같은 browser tools를 승인하면 local browser에서 실제 interaction이 실행된다.
- Neon, Context7, Playwright MCP 설치가 완료되었고, 다음 단계는 authentication 구현이다.
