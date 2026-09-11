# Burn through the backlog from hell with triage

## 개요
- 영상: [Burn through the backlog from hell with /triage](https://www.youtube.com/watch?v=MzWIIlx0Gpc)
- 채널: Matt Pocock
- 업로드일: 2026-05-07
- 길이: 10:17
- 핵심 주제: `/triage`는 GitHub Issues, Jira 같은 backlog를 agent가 실행 가능한 상태로 정리하는 스킬이다. label을 state machine처럼 사용해 이슈를 분류하고, agent가 처리할 수 있는 ticket에는 agent brief를 만든다.

## 내용

### 1. 팀에서는 backlog triage가 필요하다
Matt는 skill 기반 workflow가 개인 개발자에게는 좋지만, 팀이나 오픈소스처럼 다른 사람이 올린 아이디어를 다뤄야 할 때는 triage 단계가 필요하다고 말한다.

Backlog에는 bug report, enhancement idea, 불명확한 요청, 이미 out-of-scope인 제안이 섞여 있다. `/triage`는 이 backlog를 읽고 action 가능한 상태로 정리한다.

### 2. Label을 state machine처럼 사용한다
`/triage`의 핵심은 label을 상태 기계로 사용하는 것이다. 모든 triaged issue는 정확히 하나의 category role과 하나의 state role을 가져야 한다.

Category는 주로 다음처럼 나뉜다.

- bug
- enhancement

State는 다음처럼 나뉜다.

- needs triage: maintainer가 봐야 함
- needs info: reporter에게 추가 정보가 필요함
- ready for agent: AFK agent가 바로 처리할 수 있음
- ready for human: 사람이 직접 봐야 함
- wont fix: 처리하지 않음

한 issue가 `needs triage`이면서 동시에 `ready for agent`일 수는 없다. 그래서 label은 단순 tag가 아니라 issue의 현재 상태를 나타낸다.

### 3. ready for agent에는 agent brief가 필요하다
Issue를 `ready for agent`로 옮기려면 agent가 바로 작업할 수 있는 brief가 필요하다. Matt는 이 상태가 특히 중요하다고 말한다.

Agent brief에는 agent가 무엇을 해야 하는지, 어떤 재현/검증이 필요한지, 어떤 feedback loop를 만들어야 하는지가 들어간다.

### 4. Out-of-scope 기록도 중요한 triage 자료다
Sandcastle repo에는 `.out-of-scope` 디렉터리가 있고, 여기에 "우리가 하지 않기로 한 것"이 기록되어 있다.

이는 ADR과 비슷하지만, 특히 구현하지 않을 feature를 기록한다. Agent는 enhancement issue를 triage할 때 이 문서를 참고해 이미 out-of-scope로 결정된 요청을 빠르게 닫을 수 있다.

### 5. Bug report는 그대로 믿지 말고 재현해야 한다
영상 예시에서 agent는 어떤 bug issue를 `ready for agent`로 추천한다. Reporter가 root cause와 stack trace를 이미 제공했기 때문이다.

하지만 Matt는 agent가 reporter의 설명을 너무 믿는다고 보고, `/diagnose`를 사용해 직접 재현하고 확인하게 한다. 좋은 triage는 보고서를 그대로 복사하는 것이 아니라, agent가 신뢰할 수 있는 재현과 regression test로 바꾸는 것이다.

### 6. Triage는 queue management다
Matt는 AI agent 운영의 많은 부분이 queue management라고 말한다. Maintainer는 인간 reporter와 AFK agent 사이의 translation layer가 된다.

좋은 triage workflow는 backlog를 다음 상태로 밀어낸다.

- 거절할 것은 닫는다.
- 정보가 부족한 것은 reporter에게 돌려보낸다.
- 사람이 판단할 것은 human queue로 보낸다.
- 충분히 명확한 것은 agent queue로 보낸다.

## 예시

### Issue state machine
```text
untriaged
  -> needs triage
  -> needs info
  -> ready for human
  -> ready for agent
  -> wont fix
```

### Agent-ready issue checklist
```text
- 문제 또는 요청이 명확한가?
- 재현 방법이 있는가?
- out-of-scope 결정과 충돌하지 않는가?
- agent가 만들 feedback loop가 있는가?
- 완료 기준이 brief에 적혀 있는가?
```

## 요약
- `/triage`는 backlog를 agent 또는 human이 처리 가능한 queue로 정리하는 스킬이다.
- Label은 단순 분류가 아니라 category와 state를 표현하는 state machine이다.
- `ready for agent`에는 agent brief가 필요하다.
- Out-of-scope 기록은 반복되는 잘못된 feature request를 빠르게 닫는 데 유용하다.
- Bug report는 reporter 설명을 그대로 믿지 말고, 재현과 regression test로 확인해야 한다.
- AFK agent 운영의 핵심은 backlog를 잘 prune하고 queue를 관리하는 것이다.
