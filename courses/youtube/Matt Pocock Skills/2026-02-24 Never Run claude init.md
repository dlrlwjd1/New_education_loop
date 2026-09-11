# Never Run claude init

## 개요
- 영상: [Never Run claude /init](https://www.youtube.com/watch?v=9tmsq-Gvx6g)
- 채널: Matt Pocock
- 업로드일: 2026-02-24
- 길이: 10:37
- 핵심 주제: 자동 생성된 `Claude.md`/`AGENTS.md`는 대개 너무 크고, token과 instruction budget을 낭비하며, 금방 stale해진다. Agent는 필요한 맥락을 source of truth에서 just-in-time으로 explore해야 한다.

## 내용

### 1. `/init`은 bloated context file을 만든다
Matt는 Claude Code나 다른 agent의 init command가 생성하는 repository-level context file을 거의 항상 삭제하라고 말한다.

이 파일은 codebase documentation처럼 보이지만, 실제로는 다음 문제를 만든다.

- 모든 request의 global context에 들어간다.
- task와 무관한 정보를 계속 읽힌다.
- token cost가 증가한다.
- instruction budget을 잡아먹는다.
- code 변경과 함께 stale해진다.

### 2. Agent context에는 여러 사용처가 있다
Agent의 context window는 대략 다음에 쓰인다.

- system prompt와 global context file
- codebase exploration
- implementation
- testing/debugging

이 중 system prompt와 global context는 session 시작부터 고정된다. 불필요한 `Claude.md`가 크면 실제 작업과 탐색에 쓸 여유가 줄어든다.

### 3. Commands는 package.json에서 보면 된다
자동 생성된 `Claude.md`는 보통 test command, typecheck command, dev command를 적는다.

Matt는 이것이 불필요하다고 본다. 이 정보의 source of truth는 `package.json`이고, agent는 필요하면 직접 읽으면 된다.

### 4. Architecture summary는 쉽게 stale해진다
Init이 만든 파일에는 "React Router SSR app", "Effect backend", "key services" 같은 설명이 들어간다.

문제는 이런 설명이 code와 따로 존재하면 rot한다는 점이다. 파일명, service 이름, route 구조가 바뀌면 `Claude.md`도 업데이트해야 한다. 그렇지 않으면 code reality와 documentation이 충돌한다.

### 5. Instruction budget이 더 큰 문제다
Matt는 LLM이 현실적으로 처리할 수 있는 instruction 수에 한계가 있다고 본다. 불필요한 전역 instruction이 많으면 agent는 중요한 task instruction에 덜 집중한다.

React 관련 rule은 frontend 작업에는 유용할 수 있지만, database 작업이나 documentation 작업에는 irrelevant하다. 그런데 `Claude.md`에 있으면 모든 작업에 들어간다.

### 6. Steering 정보는 skills로 옮기는 편이 낫다
유용한 steering 정보가 전혀 없는 것은 아니다. 예를 들어 reducer pattern, frontend testing convention 같은 것은 agent에게 알려야 할 수 있다.

하지만 이것은 global `Claude.md`가 아니라 relevant skill로 옮기는 편이 낫다. 필요할 때만 model이 읽게 하는 progressive disclosure가 더 효율적이다.

### 7. Claude.md에 넣을 수 있는 것은 극히 적다
Matt가 실제 global memory에 두는 예시는 "You are on WSL on Windows" 같은 환경 특이사항이다.

이처럼 모든 session에서 중요하고, code exploration으로 발견하기 어렵고, 잘 바뀌지 않는 정보만 global file에 넣을 가치가 있다.

## 예시

### 삭제해야 할 init output
```text
- package scripts 설명
- framework/architecture summary
- key service file listing
- route configuration 설명
- 특정 구현 파일 참조
- 자주 바뀌는 coding pattern
```

### Claude.md에 넣을 수 있는 예외
```text
You are on WSL on Windows.
```

## 요약
- `claude /init`은 대개 bloated `Claude.md`를 만든다.
- Global context file은 모든 request에 들어가므로 매우 비싸다.
- Source of truth에서 쉽게 찾을 수 있는 정보는 문서화하지 말고 explore하게 둔다.
- Architecture summary와 file listing은 빠르게 stale해진다.
- Steering은 global file보다 skill, hook, lint rule, test로 옮기는 편이 낫다.
- `Claude.md`에는 모든 session에 필요하고, durable하며, discover하기 어려운 최소 정보만 둔다.
