# Creating a Code Scanner Sub-Agent

## 개요
- Codebase 전체를 audit하는 custom sub-agent인 **code scanner**를 만드는 강의.
- Security, performance, code quality, component 분리 가능성 등을 점검하되, 실제 issue만 보고하도록 prompt를 제한한다.
- `/agents` command를 사용해 project-scoped sub-agent를 생성하고, read-only tools만 허용한다.

## 내용

### Code scanner의 목적
이번에 만들 sub-agent는 전체 Next.js codebase를 scan한다.

점검 관점:
- security issues
- performance problems
- code quality issues
- 너무 큰 파일이나 component 분리 가능성
- 유지보수성 문제

단, sub-agent는 false positive를 낼 수 있다.
그래서 prompt에서 "actual issue만 보고하라"고 강하게 제한한다.

### False positive 줄이기
AI code review에서 흔한 false positive:
- 아직 auth를 구현하지 않았는데 auth가 없다고 issue로 보고
- `.env`가 Git에 포함된 것처럼 잘못 보고
- 아직 의도적으로 구현하지 않은 기능을 결함으로 보고

이번 prompt는 이런 문제를 줄이도록 작성한다.

핵심 지시:
- 실제 issue만 보고
- 아직 구현하지 않은 기능은 issue로 보고하지 않음
- auth가 없으면 auth missing을 issue로 보고하지 않음
- `.env`는 `.gitignore`에 있으므로 leaked env로 오판하지 않음

### Agent prompt
Course resource의 `prompts/section 7 prompts`에서 code scanner prompt를 사용한다.

요약:

```text
Scan this Next.js codebase for security issues, performance problems,
code quality issues, and code that can be broken up into separate files/components.

Only report actual issues.
Do not report things that are not implemented yet.
If there is no authentication, don't report that as an issue.

Report findings grouped by severity, file paths, line numbers, and suggested fixes.

The .env file is in the .gitignore.
Be aware of that because you often report that environment variables are leaked,
but they are not in the repo.
```

### /agents command 사용
Sub-agent는 직접 `.claude/agents` folder를 만들어도 되지만, 이번에는 `/agents` command로 만든다.

VS Code extension에서 실행해도 terminal로 넘어갈 수 있으므로, 강사는 terminal에서 Claude Code CLI를 연다.

흐름:

```text
claude
/agents
```

`/agents`를 실행하면:
- custom agents 목록 표시
- built-in agents 표시
- 새 agent 생성 option 제공

### Project-scoped agent 생성
새 agent 생성 시 scope를 선택한다.

선택:

```text
Project
```

Project scope를 선택하면 이 project 안에서만 사용할 agent가 된다.

생성 방식:
- manual configuration
- generate with Claude

강사는 `generate with Claude`를 선택하고 준비한 prompt를 붙여넣는다.

### Tools 선택
Agent가 사용할 tools를 선택한다.

기본값은 all tools지만, code scanner는 report만 해야 하므로 권한을 제한한다.

선택:
- read-only tools
- MCP tools도 체크 가능

의도:
- code를 직접 수정하지 않음
- 파일을 읽고 분석만 함
- 나중에 MCP가 필요하면 사용할 수 있게 여지 남김

### Model 선택
Model 선택에서 Sonnet을 사용한다.

이유:
- recommended
- balanced performance
- 대부분의 agent에 적합

Color는 automatic으로 둔다.

### 생성된 agent file
Agent 생성 후 project에 agent folder와 markdown file이 생긴다.

예상 구조:

```text
.claude/
  agents/
    nextjs-codebase-auditor.md
```

강사는 이름이 마음에 들지 않아 file을 rename한다.

변경:

```text
code-scanner.md
```

File 내부의 name도 변경한다.

```md
name: code-scanner
```

### 생성된 agent 내용
Claude가 prompt를 바탕으로 agent instruction을 확장해 준다.

포함되는 내용:
- description
- core principles
- only report actual issues
- verify before reporting
- be precise
- provide actionable fixes
- security checks
- performance checks
- code quality checks
- refactoring opportunities
- output format
- pre-audit checklist

### Output format
Findings는 severity별로 그룹화한다.

Severity:
- critical
- high
- medium
- low

각 finding에는 다음을 포함한다.
- file path
- line number
- issue 설명
- suggested fix

### Pre-audit checklist
Agent는 audit 전에 다음을 확인한다.

예:
- `.env`가 `.gitignore`에 있는지
- 보고하려는 code가 실제로 존재하는지
- issue가 아직 구현되지 않은 기능 때문은 아닌지
- false positive가 아닌지

특히 `.env` 관련 false positive를 줄이기 위해 prompt에 명시한다.

### 저장 후 사용 준비
Agent file을 저장한 뒤 terminal Claude Code session을 종료한다.
다시 VS Code extension으로 돌아간다.

다음 강의에서 이 code scanner sub-agent를 실제로 실행한다.

## 예시

Agent 생성 흐름:

```text
claude
/agents
  -> Create new agent
  -> Project
  -> Generate with Claude
  -> Paste code scanner prompt
  -> Select read-only tools
  -> Select Sonnet
  -> Approve
  -> Rename file to code-scanner.md
  -> Update name to code-scanner
```

예상 file:

```text
.claude/agents/code-scanner.md
```

## 요약
- Code scanner sub-agent는 Next.js codebase를 security/performance/quality 관점으로 audit한다.
- 아직 구현하지 않은 기능이나 `.env` false positive를 issue로 보고하지 않도록 prompt를 제한한다.
- `/agents` command로 project-scoped agent를 생성한다.
- Tools는 read-only로 제한해 agent가 code를 직접 수정하지 않고 report만 하게 한다.
- 다음 강의에서는 만든 code scanner를 실제로 실행한다.
