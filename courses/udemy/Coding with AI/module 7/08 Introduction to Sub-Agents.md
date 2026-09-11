# Introduction to Sub-Agents

## 개요
- Claude Code의 **sub-agent** 개념을 소개하는 강의.
- Sub-agent는 특정 종류의 작업을 맡는 specialized AI assistant이며, 별도의 context window를 가진다.
- 반복 workflow에는 command/skill을, 깊은 탐색과 분석에는 sub-agent를 쓰는 식으로 역할을 나눈다.

## 내용

### Sub-agent란
Sub-agent는 특정 task를 처리하도록 구성된 specialized AI assistant다.

용도:
- codebase scan
- code review
- security/performance analysis
- UI review
- 특정 feature나 영역 탐색
- 일회성 분석 task

Claude Code가 아니더라도 Cursor 등 다른 AI coding tool에도 비슷한 기능이 있을 수 있다.
도구마다 이름은 다를 수 있으므로, 해당 도구의 equivalent 기능을 찾아보면 된다.

### Markdown으로 구성
Sub-agent도 skills/commands처럼 markdown file로 정의한다.

설정할 수 있는 것:
- name
- description
- system prompt
- 사용할 tools
- model

즉, 특정 task에 맞는 prompt와 도구 권한을 가진 작은 agent를 만드는 것이다.

### 별도 context window
Sub-agent의 가장 큰 장점은 **별도 context window**를 가진다는 점이다.

Main agent:
- 현재 대화와 작업 context를 유지
- 예: 200,000 tokens context

Sub-agent:
- 별도 context에서 codebase 탐색/분석 수행
- 탐색 과정에서 사용한 token이 main conversation을 직접 오염시키지 않음

단, sub-agent가 최종으로 보고한 결과는 main conversation에 들어오므로 그 summary 자체는 main context를 사용한다.

### Context를 공유하지 않음
Main agent와 sub-agent는 context/memory를 공유하지 않는다.

주의:
- sub-agent에게 시킨 내용을 main agent가 자동으로 모두 기억하지는 않음
- sub-agent 결과는 report 형태로 main agent에 전달해야 함
- long-running shared state가 필요한 작업보다는 one-off task에 적합

### 좋은 사용 사례
Sub-agent에 적합한 작업:
- 전체 codebase scan
- 특정 영역 code review
- performance optimization point 찾기
- security issue 점검
- UI 개선점 분석
- feature 하나를 독립적으로 탐색/구현

강사는 주로 code review나 UI review에 sub-agent를 사용한다고 설명한다.

### Built-in agents
Claude Code에는 built-in agents가 있다.

#### General purpose
- 기본 fallback agent
- 읽기/쓰기/도구 실행 가능
- custom sub-agent에 맞지 않는 일반 task에 사용

#### Explore
- 빠르고 가벼운 탐색용 agent
- codebase search와 analysis에 적합
- read-only 성격
- Haiku 같은 가벼운 model을 사용할 수 있음

#### Plan
- plan mode에서 사용
- codebase를 조사하고 계획을 세움
- 실제 변경 전 research와 strategy 수립에 적합

Prompt에서 명시적으로 agent를 호출할 수도 있다.

예:

```text
Launch the Explore agent to find performance optimization opportunities.
```

### Custom sub-agents
Project나 user scope로 custom sub-agent를 만들 수 있다.

Project scope:

```text
.claude/
  agents/
    code-scanner.md
```

User scope:
- home folder에 만들어 여러 project에서 사용

강의 transcript에서는 `.clod`처럼 들리지만, 실제 convention은 `.claude` folder다.

### Command vs Agent
Command/skill과 sub-agent는 쓰임이 다르다.

Command/skill에 적합:
- 빠르고 반복 가능한 workflow
- 같은 단계가 매번 반복됨
- 예: `/feature start`, `/cleanup`

Sub-agent에 적합:
- 깊은 탐색
- autonomous analysis
- codebase 전체 scan
- 많은 context를 쓸 수 있는 조사 작업
- main context를 아끼고 싶을 때

예:
- `/feature complete`는 command/skill
- "전체 codebase를 보안/성능 관점으로 scan"은 sub-agent

### Tool 제한
Sub-agent에는 사용할 tool을 제한할 수 있다.

예:
- read
- grep
- glob
- bash

Code reviewer agent라면 write 권한 없이 read-only tools만 주는 식으로 제한할 수 있다.
이렇게 하면 agent가 code를 직접 바꾸지 않고 report만 하도록 만들 수 있다.

### 생성 방법
Sub-agent는 두 방식으로 만들 수 있다.

1. 직접 file 생성
2. `/agents` command 사용

직접 만들 경우:

```text
.claude/agents/code-scanner.md
```

새 agent를 인식시키려면:
- Claude Code session restart
- 또는 `/agents`로 즉시 load

## 예시

Sub-agent definition 예:

```md
---
name: code-reviewer
description: Reviews code for security, performance, and quality issues.
tools: Read, Grep, Glob, Bash
model: sonnet
---

Review the codebase and report actual issues only.
Group findings by severity with file paths and line numbers.
```

언제 무엇을 쓸지:

```text
Repeatable workflow -> skill/command
Deep codebase analysis -> sub-agent
```

## 요약
- Sub-agent는 특정 task를 위한 specialized AI assistant다.
- Main agent와 별도 context window를 사용하므로 codebase 탐색이나 review에 유리하다.
- Main agent와 sub-agent는 context를 자동 공유하지 않는다.
- Built-in agents로 general purpose, explore, plan이 있고 custom agent도 만들 수 있다.
- 반복 workflow는 command/skill, 깊은 분석은 sub-agent가 적합하다.
