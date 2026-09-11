# The Creators of Claude Code and OpenClaw dont Prompt Their Agents Anymore

## 개요
- 강의/영상: [The Creators of Claude Code and OpenClaw don't Prompt Their Agents Anymore?!](https://www.youtube.com/watch?v=UztrFXaSWv0)
- 채널: Cole Medin
- 업로드일: 2026-06-18
- 핵심 주제: loop engineering은 사람이 계속 prompt를 쓰는 대신 agent가 주기적으로 자신을 깨우고 작업을 이어가게 만드는 방식이다. 다만 비용, context bloat, reliability 문제가 크므로 deterministic workflow, durable state, observability, model routing이 포함된 harness로 다뤄야 한다.

## 내용

### 1. Loop engineering은 agent에게 반복 prompt를 맡기는 방식이다
영상은 Claude Code와 OpenClaw 관련 인물들이 "prompt를 직접 쓰기보다 loop를 쓴다"는 흐름을 소개한다. Cole은 이것을 과장된 buzzword로만 보지는 않지만, 무비판적으로 받아들이기에는 위험하다고 본다.

Loop engineering의 기본 아이디어는 간단하다. 사람이 매번 prompt를 보내는 대신, agent가 일정 간격으로 깨어나 외부 입력을 확인하고 다음 작업을 수행한다. 예를 들어 5분마다 GitHub issue를 확인해 새 issue를 처리하거나, 큰 task list에서 첫 번째 unchecked task를 끝내고 다음 cycle에서 다음 task를 처리하게 만들 수 있다.

### 2. Claude Code의 loop, goal, routine은 장기 작업의 기본 primitive다
Cole은 loop engineering을 복잡한 개념으로 보기보다 몇 가지 primitive의 조합으로 설명한다.

- `/loop`: 일정 간격으로 prompt를 반복 실행한다.
- `/goal`: 완료 조건을 주고 agent가 끝날 때까지 작업하게 한다.
- `/routine`: 일정 시간마다 특정 작업을 수행하는 scheduled job처럼 쓴다.

이 primitive를 조합하면 큰 scope의 작업을 작은 cycle로 나누어 처리할 수 있다. 핵심은 agent에게 너무 큰 작업을 한 번에 던지지 않고, 매 loop마다 작은 단위로 진행하게 하는 것이다.

### 3. 단순 loop는 데모와 exploration에는 좋지만 production workflow로는 부족하다
Cole은 loop가 proof of concept이나 아이디어 exploration에는 유용하다고 인정한다. 하지만 "loop engineering이 항상 최고의 결과를 만든다"는 주장에는 동의하지 않는다.

가장 큰 문제는 비용이다. orchestrator가 전체 목표를 읽고, worker를 만들고, 결과를 다시 읽고, 다음 worker를 보내는 구조는 context passing과 reasoning이 많다. Cole의 예시에서는 비교적 단순한 application을 만들 때도 단일 run에 백만 token 이상이 들었다.

두 번째 문제는 context bloat다. Claude Code의 단순 `/loop`는 같은 session을 계속 이어가기 때문에, loop가 길어질수록 context window가 비대해지고 model이 압도될 수 있다.

세 번째 문제는 reliability다. 사람이 중간에 보지 않는 상태로 오래 돌리면, 잘못된 방향으로 누적된 결과가 하루 뒤에 한꺼번에 드러날 수 있다.

### 4. 해결책은 loop 자체가 아니라 harness다
Cole은 loop engineering을 독립된 새 분야로 보기보다 harness engineering 안에 포함해야 한다고 본다. 좋은 loop system은 agent가 모든 결정을 즉흥적으로 하게 두지 않고, deterministic workflow를 통해 진행 경로를 제한한다.

예를 들어 GitHub issue를 처리하는 workflow라면 다음처럼 나눌 수 있다.

- issue number 추출
- issue context fetch
- bug인지 feature인지 classification
- 조사와 plan 작성
- 구현
- validation
- pull request 생성
- review

이 중 일부는 LLM reasoning이 필요하지만, 일부는 deterministic step으로 고정할 수 있다. agent가 결정하지 않아도 되는 일은 workflow가 보장해야 비용과 실패 가능성이 줄어든다.

### 5. 작업은 여러 coding agent session으로 분산되어야 한다
긴 loop를 한 session에서 계속 돌리면 context가 쌓여 품질이 떨어진다. Cole은 planning, implementation, validation, review를 별도 session으로 나누고, markdown document나 database state를 통해 handoff하는 방식을 보여준다.

이렇게 하면 각 session은 더 작은 context로 시작하고, 필요한 산출물만 받아 작업한다. 또한 여러 GitHub issue를 병렬로 처리할 때 worktree를 사용하면 agent들이 서로의 code change를 덮어쓰지 않게 할 수 있다. database change도 branch나 isolated environment가 필요하다.

### 6. Model routing으로 token 비용을 줄인다
Loop system은 token 사용량이 많기 때문에 모든 step을 가장 비싼 frontier model로 돌리면 비용이 커진다. Cole은 workflow의 node마다 다른 model/provider를 선택할 수 있어야 한다고 말한다.

예를 들어 issue classification이나 context loading은 작은 model로 처리하고, 실제 implementation은 Claude Code에 맡기며, review는 Codex나 다른 model을 사용할 수 있다. 중요한 것은 step의 난이도에 맞춰 model을 배정하는 것이다.

### 7. Durable state와 observability가 있어야 loop를 신뢰할 수 있다
Cole은 loop run, event, log, worker 결과를 external database에 저장하는 dashboard를 보여준다. 이렇게 하면 terminal session이나 local machine 상태에 의존하지 않고, workflow를 중단했다가 같은 step에서 재개할 수 있다.

또한 dashboard는 orchestrator가 어떤 결정을 했는지, worker가 어떤 output을 만들었는지, token을 얼마나 썼는지 보여준다. 이 observability가 있어야 실패 원인을 분석하고 harness를 개선할 수 있다.

### 8. Human-in-the-loop는 reliability를 위한 안전장치다
완전 자동 loop는 매력적이지만, 현재 수준에서는 사람의 승인 지점을 workflow에 넣는 것이 실용적이다. 예를 들어 첫 round가 끝난 뒤 결과를 검토하고 approve/resume하게 하거나, pull request 생성 후 review를 사람이 확인하게 할 수 있다.

Cole은 이런 승인 지점을 Retool 같은 dashboard에 올려 팀이 원격으로 확인하고, 권한과 audit trail을 가진 상태에서 workflow를 재개할 수 있는 예시도 보여준다.

## 예시

### 단순 loop
```text
매 5분:
  GitHub issue 확인
  첫 번째 미처리 issue 선택
  수정
  테스트
  결과 보고
```

### Harness 기반 loop
```text
orchestrator:
  durable state 읽기
  다음 wave 결정
  worker dispatch

worker:
  작은 범위의 작업 수행
  validation 실행
  결과와 log를 database에 저장

dashboard:
  token/cost/run 상태 표시
  human approval 지점 제공
  실패 원인 분석에 필요한 log 제공
```

## 요약
- Loop engineering은 사람이 직접 반복 prompt를 쓰지 않고 agent가 주기적으로 다음 작업을 이어가게 하는 방식이다.
- 단순 `/loop`는 비용, context bloat, reliability 문제가 있다.
- 실용적인 loop system은 deterministic workflow, 분리된 agent session, durable state, observability, human approval을 갖춘 harness여야 한다.
- 모든 step을 비싼 model로 돌리지 말고 task 난이도에 따라 model routing을 해야 한다.
- Cole은 loop engineering을 별도 buzzword로 보기보다 harness engineering의 하위 패턴으로 보는 것이 더 정확하다고 본다.
