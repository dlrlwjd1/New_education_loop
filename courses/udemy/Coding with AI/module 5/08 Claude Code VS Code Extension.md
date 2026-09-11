# Claude Code VS Code Extension

## 개요
- 다음 dashboard UI 구현 전에 **Claude Code VS Code extension**을 설치하고 사용하는 방법을 소개하는 강의.
- CLI를 계속 사용할 수도 있지만, VS Code extension은 diff, 생성 파일, 코드 변경 내용을 더 정돈된 방식으로 보여준다.
- 이후 강의부터는 dashboard UI처럼 여러 component file이 생성되는 작업을 더 보기 쉽게 하기 위해 extension을 사용한다.

## 내용

### 왜 VS Code extension을 사용하는가
강사는 처음에는 Claude Code CLI를 사용했지만, 여기서 VS Code extension으로 전환한다.

이유:
- CLI 출력에 이상한 문자가 섞여 읽기 어려운 문제가 생길 수 있음
- extension이 변경사항을 더 깔끔하고 조직적으로 보여줌
- 생성되는 파일과 diff를 확인하기 쉬움
- dashboard UI처럼 여러 component file이 만들어지는 작업을 설명하기 좋음

CLI를 써도 되지만, 강의에서는 화면을 더 명확히 보여주기 위해 extension을 사용한다.

### CLI 종료와 VS Code 화면 정리
기존 Claude Code CLI를 종료하고 terminal을 닫는다.

개발 서버를 실행 중인 terminal은 유지하되, VS Code panel position을 bottom으로 옮긴다.
Claude Code extension은 오른쪽 패널에 열리기 때문이다.

### extension 설치
VS Code에서 Extensions tab을 열고 `Claude` 또는 `Claude Code`를 검색한다.

설치 후 여는 방법:
- editor tab에 보이는 Claude icon 클릭
- 또는 Command Palette 사용

Command Palette:

```text
Command-Shift-P
```

검색:

```text
Claude Code: Open New Tab
```

### extension 화면
extension은 CLI와 비슷한 기능을 더 정돈된 UI로 제공한다.

사용 가능한 모드:
- ask before edits
- edit automatically
- plan mode

CLI에서 `Shift-Tab`으로 전환하던 plan mode와 같은 개념이다.

### 파일과 context 확인
extension에서는 context에 들어간 파일을 확인할 수 있다.
또한 파일 첨부와 mention도 더 편하게 할 수 있다.

가능한 작업:
- paper clip icon으로 file attach
- 프로젝트 파일 mention
- slash command 실행
- model switching
- thinking mode on/off
- plugins 확인
- MCP servers 확인
- agents 확인

### slash command
입력창에 `/`를 치면 사용 가능한 command들이 표시된다.

예:

```text
/context
```

`/context`는 CLI와 동일하게 token usage와 context 정보를 보여준다.

그 외:
- `/compact`
- `/init`
- file attach
- file mention

다만 extension에서 모든 slash command가 지원되는 것은 아니다.
예를 들어 checkpoint로 되돌아가는 `rewind` command가 없어 extension을 쓰지 않는 사용자도 있다고 설명한다.

### 이후 workflow
강사는 이후 강의부터 CLI 대신 VS Code extension을 사용한다.

이유:
- 수강생이 생성/수정되는 파일을 더 쉽게 볼 수 있음
- dashboard UI 구현 시 여러 component file과 diff를 확인하기 좋음
- 코드 변경 흐름이 더 읽기 쉬움

하지만 수강생은 원하면 계속 CLI를 사용해도 된다.

## 예시

VS Code에서 Claude Code extension 열기:

```text
Command-Shift-P
Claude Code: Open New Tab
```

context 확인:

```text
/context
```

사용 흐름:

```text
CLI 종료
  -> dev server terminal은 bottom panel로 이동
  -> Claude Code extension 설치
  -> Claude Code tab 열기
  -> /context로 로드 상태 확인
  -> dashboard UI 구현 시작
```

## 요약
- dashboard UI 구현 전에 Claude Code VS Code extension으로 전환한다.
- CLI도 가능하지만, extension은 diff와 생성 파일을 더 보기 쉽게 보여준다.
- extension에서는 ask/edit/plan mode, file attach, file mention, slash commands, model switching 등을 사용할 수 있다.
- 일부 slash command는 CLI보다 제한적일 수 있다.
- 이후 강의에서는 extension을 사용해 dashboard UI를 실제로 구성한다.
