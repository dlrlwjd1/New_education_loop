# handoff is my new favourite skill

## 개요
- 영상: [/handoff is my new favourite skill](https://www.youtube.com/watch?v=dtAJ2dOd3ko)
- 채널: Matt Pocock
- 업로드일: 2026-05-21
- 길이: 12:24
- 핵심 주제: `/handoff`는 현재 agent session의 중요한 맥락을 markdown 문서로 압축해 다른 session이나 다른 agent에게 넘기는 스킬이다. context window를 순수하게 유지하고, prototype/research/bugfix 같은 분기 작업을 독립적으로 처리하게 한다.

## 내용

### 1. `/handoff`는 context를 새 session으로 넘기는 문서 생성 스킬이다
`/handoff`는 현재 대화의 핵심 맥락을 요약해 handoff document로 저장한다. 새 agent session은 이 문서를 읽고 작업을 이어받는다.

파일은 workspace가 아니라 OS의 temporary directory에 저장한다. Matt는 handoff 문서가 장기 문서가 아니라 session 간 전달용 disposable artifact라고 본다.

### 2. Compact와 handoff는 다르다
Compact는 긴 대화를 요약해 같은 문제를 계속 이어가는 데 유용하다. context window가 dumb zone에 가까워질 때 다시 smart zone으로 줄이는 방식이다.

하지만 compact는 기본적으로 하나의 긴 session을 이어가기 위한 도구다. Matt가 필요로 한 것은 현재 session을 오염시키지 않고, 특정 하위 작업만 별도 session으로 보내는 것이었다.

예를 들어 planning 중에 unrelated refactor 기회가 보이면, 현재 session을 그 refactor로 오염시키지 않고 `/handoff`로 별도 agent에게 넘긴다.

### 3. Context window에는 smart zone과 dumb zone이 있다
Matt는 context window가 크더라도 앞부분이 더 성능이 좋고, 너무 길어지면 agent의 attention이 분산된다고 설명한다. 그는 대략 120k token 이후부터 dumb zone이 시작된다고 본다.

따라서 긴 planning이나 prototyping을 한 session에 모두 넣기보다, 별도 session으로 나누는 것이 더 낫다.

### 4. Fire-and-forget 패턴
첫 번째 사용 패턴은 fire-and-forget이다.

현재 작업 중에 bugfix, issue 작성, 작은 refactor처럼 독립 가능한 작업을 발견하면 `/handoff` 문서를 만들고 새 agent에게 넘긴다. 원래 session은 본래 목적을 계속 유지한다.

이 패턴은 scope creep을 막는다.

### 5. DIY sub-agent 패턴
두 번째 패턴은 DIY sub-agent다.

Planning/grilling 중 prototype이 필요한 질문이 생기면 prototype session으로 handoff한다. prototype session은 별도 context window를 충분히 사용해 실험하고, 마지막에 배운 점을 다시 원래 planning session으로 handoff한다.

Matt는 이를 수동으로 만든 sub-agent처럼 본다. 차이점은 새 session이 자기 context window를 온전히 갖고 있고, 필요하면 sub-agent도 다시 만들 수 있다는 점이다.

### 6. Prototype handoff가 특히 강력하다
Grilling session에는 두 종류의 질문이 있다.

- agent가 물어보고 사용자가 답할 수 있는 질문
- 실제 code나 UI prototype을 봐야 답할 수 있는 질문

후자는 원래 grilling session 안에서 처리하면 context가 너무 커진다. `/handoff`로 prototype session을 만들고, prototype에서 얻은 non-obvious learning만 다시 원래 session으로 넘기는 방식이 좋다.

### 7. Handoff 문서에는 다음 session의 intent도 담겨야 한다
좋은 handoff는 단순히 맥락을 요약하는 문서가 아니다. 다음 session이 무엇에 집중해야 하는지, 어떤 skill을 써야 하는지도 제안해야 한다.

Matt는 handoff를 요청할 때 항상 "왜 넘기는지", "다음 session이 무엇을 해야 하는지"를 같이 말한다. 이 focus가 없으면 좋은 handoff 문서를 쓰기 어렵다.

### 8. 기존 artifact는 복사하지 않고 reference한다
Handoff 문서는 이미 GitHub issue, markdown file, prototype artifact 등에 들어 있는 내용을 반복 복사하지 않아야 한다. 대신 path나 URL로 참조한다.

또한 API key, password, PII 같은 민감 정보는 redact해야 한다.

## 예시

### Fire-and-forget
```text
현재 grilling session:
  "이건 현재 범위 밖의 refactor다.
   이 내용을 별도 agent가 GitHub issue로 만들 수 있게 handoff해줘."

새 session:
  handoff 문서를 읽고 issue 작성 또는 refactor 수행
```

### DIY sub-agent
```text
grilling session
  -> /handoff prototype focus
prototype session
  -> UI/logic 실험
  -> /handoff back to planner
grilling session
  -> prototype에서 배운 점을 반영해 spec 작성
```

## 요약
- `/handoff`는 현재 session의 필요한 맥락을 markdown으로 압축해 다른 agent/session에 넘긴다.
- Compact는 한 session을 이어가는 도구이고, handoff는 별도 session으로 작업을 분기하는 도구다.
- Fire-and-forget은 범위 밖 작업을 독립 agent에게 맡기는 패턴이다.
- DIY sub-agent는 prototype/research 결과를 다시 원래 planning session으로 되돌리는 패턴이다.
- Handoff 문서는 temporary directory에 저장하고, 장기 문서처럼 codebase에 남기지 않는다.
- 좋은 handoff에는 다음 session의 focus, 추천 skill, 참조 artifact, 민감 정보 redaction이 포함된다.
