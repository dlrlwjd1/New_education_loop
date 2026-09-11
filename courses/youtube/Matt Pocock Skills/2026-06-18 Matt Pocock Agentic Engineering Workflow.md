# Matt Pocock Agentic Engineering Workflow

## 개요
- 영상: [Matt Pocock’s Agentic Engineering Workflow (just copy him)](https://www.youtube.com/watch?v=nQwJVHCtDDY)
- 채널: David Ondrej
- 출연: Matt Pocock
- 업로드일: 2026-06-18
- 길이: 1:02:24
- 핵심 주제: Matt Pocock의 agentic engineering 관점 정리. 모델 자체보다 harness, codebase architecture, skills, workflow, queue management, human-in-the-loop checkpoint가 더 중요하다는 주장이다.

## 내용

### 1. 모델보다 harness에 집중한다
Matt는 사람들이 새 모델에 과도하게 집중한다고 말한다. 모델은 중요하지만, agent가 실제로 일하는 환경인 harness도 그만큼 중요하다.

여기서 harness는 다음을 포함한다.

- prompt와 skills
- agent가 실행되는 sandbox
- codebase 구조
- 테스트와 feedback loop
- backlog/queue
- review와 merge workflow
- agent가 사용할 도구와 권한

핵심은 모델을 바꾸는 것보다, 모델이 일하기 쉬운 환경을 만드는 쪽이 사용자가 더 많이 통제할 수 있다는 점이다.

### 2. AI는 tactical programming을 먹어치웠다
Matt는 John Ousterhout의 tactical programming과 strategic programming 구분을 AI 시대에 적용한다.

Tactical programming은 실제 코드를 쓰고, syntax를 맞추고, bug를 고치고, commit을 만드는 현장 작업이다. AI는 이 영역을 매우 싸고 빠르게 수행한다.

Strategic programming은 codebase가 어떻게 생겨야 하는지, 어떤 module boundary가 좋은지, 어떤 작업을 먼저 해야 하는지, 장기 velocity를 어떻게 높일지 판단하는 일이다.

AI를 잘 쓰려면 tactical work를 agent에게 위임하고, 사람은 strategic programmer로 남아야 한다.

### 3. Senior developer의 가치가 더 커진다
Matt는 AI가 senior developer를 훨씬 더 강하게 만든다고 본다. Senior는 좋은 scope, interface, test seam, architecture, delegation을 설계할 수 있기 때문이다.

반대로 domain skill과 engineering judgment가 낮으면 AI도 그 수준을 크게 넘어서기 어렵다. Matt는 "사용자의 skill이 AI가 낼 수 있는 결과의 ceiling"이라고 본다.

### 4. 좋은 delegation은 예전과 같다
AI에게 위임한다고 해서 delegation 원칙이 바뀐 것은 아니다.

좋은 delegation에는 다음이 필요하다.

- hard part를 먼저 설계한다.
- task scope를 작고 명확하게 만든다.
- module interface를 생각한다.
- test seam과 feedback loop를 준비한다.
- codebase를 변경하기 쉽게 만든다.
- 필요한 만큼의 documentation으로 agent를 올바른 위치에 보낸다.

즉, AI workflow의 핵심은 새로운 마법이 아니라 오래된 software engineering 기본기를 agent에 맞게 적용하는 것이다.

### 5. `/teach`는 stateful learning skill이다
영상 중간에 Matt는 `/teach` skill을 시연한다. `/teach`는 단발 설명이 아니라, 학습자의 mission과 learning record를 저장하면서 장기 학습을 진행하는 stateful skill이다.

예시에서는 "vibe coder가 더 나은 software를 ship하려면 무엇을 배워야 하는가"를 주제로 삼는다. Agent는 먼저 mission을 묻고, git, error reading, debugging, shipping, testing 같은 high-leverage gap을 찾는다.

`/teach`는 다음 산출물을 만든다.

- `mission.md`
- trusted resources
- learning record
- reference cheat sheet
- HTML lesson

Matt는 좋은 teaching이 knowledge, skill, wisdom을 구분해야 한다고 본다. Knowledge와 skill은 어느 정도 skill로 포장할 수 있지만, wisdom은 실제 맥락에서 해봐야 얻을 수 있다.

### 6. Skill에는 procedure와 ability가 있다
Matt는 skill을 크게 두 종류로 나눈다.

Procedure skill은 사용자가 직접 호출해서 agent가 특정 절차를 따르게 하는 것이다. `/grill-me`, `/to-prd`, `/to-issues`, `/teach`가 여기에 가깝다.

Ability skill은 model이 필요할 때 스스로 호출하는 지식/능력이다. 예를 들어 React coding standards나 project-specific style guide가 여기에 들어갈 수 있다.

Matt는 개인적으로 procedure skill을 선호한다. 사람이 운전대를 잡고, 필요한 절차를 명시적으로 호출하는 방식이 자신의 thinking을 AI에게 과하게 위임하지 않기 때문이다.

### 7. `/grill-me`는 adversarial interviewer다
`/grill-me`는 짧지만 강력한 procedure skill이다. Agent를 adversarial interviewer로 만들어 사용자의 계획을 계속 질문하게 한다.

목표는 구현 전에 shared understanding에 도달하는 것이다. Agent는 사용자가 생각하지 못한 product decision, architecture decision, software design decision을 끌어낸다.

Matt와 David 모두 "AI에게 바로 one-shot을 시키기보다, 가장 consequential한 결정을 나열하고 interview하게 하라"는 접근을 중요하게 본다.

### 8. Sandcastle은 AFK agent를 위한 sandbox/harness다
Matt의 AFK setup은 Sandcastle을 중심으로 한다. Sandcastle은 Claude Code나 Codex 같은 agent를 Docker, Podman, Vercel sandbox 같은 격리 환경에서 실행한다.

Sandbox가 필요한 이유는 agent가 로컬 시스템을 망가뜨리거나 환경 변수를 유출하지 않게 하기 위해서다.

Matt는 Sandcastle과 GitHub Actions를 결합해 PR review, issue implementation, agent review를 실행한다. 이렇게 하면 로컬 리소스에 묶이지 않고 agent를 병렬화할 수 있다.

### 9. Model-first보다 architecture-first가 오래 간다
David는 더 좋은 모델이 나오면 steering과 harness의 중요성이 줄어드는 것 아니냐고 묻는다. Matt는 더 좋은 모델을 쓰는 것도 중요하지만, model-specific optimization에 매달리면 fundamentals를 놓칠 수 있다고 답한다.

Matt의 전략은 agent-agnostic한 workspace와 harness를 만드는 것이다. 좋은 codebase architecture, 좋은 tests, 좋은 feedback loop는 모델이 바뀌어도 계속 유효하다.

좋은 codebase는 token spend도 줄인다. 변경하기 쉬운 codebase에서는 더 저렴하고 덜 똑똑한 모델도 같은 일을 할 수 있다.

### 10. 발견된 문제는 loop/system으로 바꿔야 한다
David는 최신 모델이 숨은 security issue를 찾은 사례를 언급한다. Matt는 그 자체로 모델이 좋다는 신호이기도 하지만, 더 중요한 배움은 "왜 그런 문제가 지금까지 남아 있었는가"라고 말한다.

좋은 개발자는 AI가 버그 하나를 찾아주면 그것을 고치는 데서 끝내지 않는다. 그 종류의 문제가 다시 생기지 않도록 다음을 만든다.

- test suite
- review process
- security review loop
- lint/check
- new skill
- staging/QA process

즉, 단일 결과를 system improvement로 전환해야 한다.

### 11. Loop보다 queue로 생각한다
영상 후반부에서 agentic loop에 대한 논의가 나온다. Matt는 loop라는 말이 유용할 때도 있지만, 실제 개발은 queue로 보는 편이 더 낫다고 말한다.

Backlog issue는 queue에 들어온다. Agent는 issue를 explore하고, triage하고, implement하고, review한 뒤 queue에서 제거한다. 여러 agent는 여러 developer처럼 queue에서 작업을 가져갈 수 있다.

중요한 것은 무한 loop가 아니라, 어떤 task가 queue에 들어오고, 어떤 state를 거쳐, 언제 human checkpoint를 통과하는지다.

### 12. Human-in-the-loop checkpoint는 뒤로 밀어낸다
Matt는 AFK agent를 통해 사람을 완전히 제거하는 것이 아니라, human checkpoint를 가능한 뒤쪽으로 밀어내는 방향을 선호한다.

예를 들어 bug report가 들어왔을 때 사람이 처음부터 디버깅하는 대신, agent가 먼저 다음을 수행할 수 있다.

1. issue 생성
2. codebase exploration
3. 원인 추정
4. fix branch 작성
5. review 결과 작성
6. 사람이 최종 승인

이렇게 하면 사람은 raw bug report가 아니라 richer artifact를 보고 판단한다. 단, review를 완전히 없애면 system이 어떻게 동작하는지 관찰하고 harness를 개선할 기회를 잃을 수 있다.

## 예시

### Matt식 agentic engineering 흐름
```text
rough idea / backlog item
  -> /grill-me or triage
  -> PRD / spec
  -> issues / queue
  -> Sandcastle AFK agent
  -> tests / review
  -> human checkpoint
  -> merge / deploy
```

### 사람이 계속 맡아야 하는 것
```text
- product vision
- priority
- scope
- architecture direction
- module boundary
- test strategy
- risk tolerance
- final acceptance 기준
```

### Agent에게 위임하기 좋은 것
```text
- scoped implementation
- bug reproduction
- code exploration summary
- draft PRD / issue generation
- repetitive review
- sandboxed AFK work
- queue item processing
```

## 요약
- 새 모델보다 harness, codebase, workflow를 개선하는 쪽에 더 많은 통제권이 있다.
- AI는 tactical programming을 잘하지만, 사람은 strategic programming을 해야 한다.
- Senior engineering skill은 AI 시대에 더 큰 multiplier가 된다.
- `/teach`, `/grill-me` 같은 skills는 절차와 판단 방식을 재사용 가능하게 만든다.
- Matt는 model-invoked ability보다 user-invoked procedure skill을 선호한다.
- Sandcastle은 sandboxed AFK agent를 병렬로 돌리기 위한 harness다.
- 좋은 codebase architecture는 token spend를 줄이고 더 약한 모델도 잘 작동하게 한다.
- Agentic loop보다 queue/backlog/state machine 관점이 실제 개발에 더 잘 맞는다.
- Human checkpoint는 없애기보다 뒤로 밀어 richer artifact를 검토하게 만드는 것이 현실적이다.
