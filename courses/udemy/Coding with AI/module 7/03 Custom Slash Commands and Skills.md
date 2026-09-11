# Custom Slash Commands and Skills

## 개요
- 반복되는 workflow를 줄이기 위해 Claude Code의 **custom slash commands**와 **skills**를 소개하는 강의.
- 최근 Claude Code에서는 custom slash commands가 skills와 통합되는 방향으로 바뀌었다.
- 간단한 `list-components` command/skill을 만들어 components folder를 탐색하는 예제를 구현한다.

## 내용

### 왜 workflow를 더 다듬는가
지금까지 feature 작업마다 반복한 단계:
- current feature 업데이트
- branch 생성
- 구현
- build/test
- current feature history 정리
- commit/merge/push/delete branch

이 반복을 줄이기 위해 custom command/skill을 도입한다.
앞으로 중요한 `/feature` command를 만들기 전에, 먼저 간단한 예제로 구조를 익힌다.

### 다른 AI 도구에서도 비슷한 기능이 있음
강사는 Claude Code를 기준으로 설명하지만, Cursor나 Codex 같은 다른 도구에도 비슷한 기능이 있을 가능성이 높다고 설명한다.

도구마다:
- 이름이 다를 수 있음
- 파일 구조가 다를 수 있음
- 설정 방식이 다를 수 있음

하지만 핵심은 같다.

```text
반복 workflow를 markdown prompt로 저장하고, command처럼 호출한다.
```

### Slash commands와 skills의 최신 관계
전통적으로 Claude Code custom command는 다음 구조를 사용했다.

```text
.claude/
  commands/
    command-name.md
```

최근에는 custom slash commands가 skills와 통합되는 방향이다.

권장 구조:

```text
.claude/
  skills/
    command-name/
      SKILL.md
```

호출 방식은 거의 같다.

```text
/command-name
/command-name arguments
```

### Slash command와 skill의 차이
강사가 보는 핵심 차이:

- Slash command: 사용자가 직접 실행하는 command에 가까움
- Skill: 원래 agent가 필요할 때 invoke하는 기능에 가까웠지만, 이제 user도 slash command처럼 호출 가능

지금은 둘이 많이 합쳐졌기 때문에, 앞으로는 최신 convention인 skills folder를 사용한다.

### Markdown prompt로 동작한다
Command/skill file은 기본적으로 markdown prompt다.

일반 코드처럼 strict syntax를 맞춰야 하는 것은 아니다.
AI가 markdown을 읽고 instruction으로 해석한다.

필요한 front matter:

Slash command:
- description
- argument-hint optional

Skill:
- name
- description
- argument-hint optional

그 아래에는 command가 해야 할 일을 자연어로 작성한다.

### 첫 예제: list-components
처음 만들 command:

```text
/list-components
```

목적:
- project의 React component files를 list
- optional argument로 subdirectory 지정 가능

예:

```text
/list-components
/list-components dashboard
/list-components UI
```

### Legacy command 구조로 먼저 만들기
먼저 legacy custom command 방식으로 만든다.

구조:

```text
.claude/
  commands/
    list-components.md
```

강의 transcript에서는 `.clod`처럼 들리지만, 실제 Claude Code convention은 `.claude` folder다.

### list-components.md 내용
Front matter:

```md
---
description: List project components
argument-hint: [subdirectory]
---
```

Task:
- `components` folder 안의 React component files 찾기
- 확장자: `.tsx`, `.ts`, `.jsx`, `.js`
- argument가 있으면 해당 subdirectory만 탐색
- numbered list로 출력
- relative path 표시
- 파일명 기반 one-line description 추가
- summary count 출력
- 없으면 `No components found`라고 말하기

Argument는 command 안에서 다음처럼 참조한다.

```text
$ARGUMENTS
```

### Claude Code restart
Command file을 만든 뒤 바로 slash list에 안 보일 수 있다.

이 경우 Claude Code를 restart한다.

그 다음 `/list-components`를 입력하면 command가 표시된다.

### 실행 결과
`/list-components` 실행 시:
- components folder를 탐색
- dashboard components
- layout components
- UI/ShadCN components
- 각 component의 간단한 설명
- 총 count

예:

```text
/list-components dashboard
```

이렇게 실행하면 `components/dashboard` folder만 list한다.

### Skills 구조로 전환
Legacy commands 방식은 여전히 가능하지만, 최신 convention인 skills 구조로 바꾼다.

변경 전:

```text
.claude/
  commands/
    list-components.md
```

변경 후:

```text
.claude/
  skills/
    list-components/
      SKILL.md
```

기존 markdown 내용을 `SKILL.md`로 옮긴다.

Skill front matter에는 name을 추가한다.

```md
---
name: list-components
description: List project components
argument-hint: [subdirectory]
---
```

Claude Code를 다시 restart하면 `/list-components`가 똑같이 동작한다.

### 왜 skills 구조를 쓰는가
강사는 앞으로 skills folder를 사용할 예정이다.

이유:
- 최신 convention
- commands folder가 나중에 deprecated될 가능성
- skill은 subfiles/actions 같은 확장이 가능
- `/feature` command도 skill로 만들 예정

### 다음 단계
이제 custom command/skill의 기본 구조를 알았으므로, 다음에는 실제 workflow 핵심인 `/feature` command를 만든다.

`/feature`는 앞으로 current feature, branch, implementation, review, close 같은 작업을 자동화하는 데 중요하게 쓰인다.

## 예시

Legacy command:

```text
.claude/commands/list-components.md
```

Skill:

```text
.claude/skills/list-components/SKILL.md
```

호출:

```text
/list-components
/list-components dashboard
/list-components UI
```

## 요약
- 반복 workflow를 줄이기 위해 Claude Code custom slash commands와 skills를 사용한다.
- 최근에는 custom commands가 skills와 통합되는 방향이라, 앞으로는 skills folder 구조를 사용한다.
- Command/skill은 markdown prompt와 front matter로 구성된다.
- `list-components` 예제로 components folder를 탐색하는 간단한 command를 만든다.
- 다음 단계는 본격적인 `/feature` workflow command를 만드는 것이다.
