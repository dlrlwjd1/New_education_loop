# The 7 phases of AI-driven development

## 개요
- 영상: [The 7 phases of AI-driven development](https://www.youtube.com/watch?v=Ah9p7v7nJWg)
- 채널: Matt Pocock
- 업로드일: 2026-03-03
- 길이: 8:26
- 핵심 주제: AI로 좋은 소프트웨어를 만들 때 반복적으로 등장하는 7단계 workflow. idea, research, prototype, PRD/spec, Kanban/issues, execution, QA로 나뉜다.

## 내용

### 1. Phase 1: Idea
시작점은 idea다. 전체 앱일 수도 있고, 작은 bug fix, feature, refactor일 수도 있다.

Idea는 크거나 작아도 되지만, 이후 ticket set으로 바뀔 수 있어야 한다.

### 2. Phase 2: Research
외부 API, Stripe integration, 드문 dependency처럼 탐색이 어렵거나 반복 비용이 큰 요소가 있으면 research phase를 둔다.

Research 결과는 `research.md` 같은 asset으로 cache한다. 다만 research는 stale해질 수 있으므로 sprint나 idea lifetime 동안만 유효한 자료로 봐야 한다.

### 3. Phase 3: Prototype
Taste를 적용해야 하거나, 추상 대화만으로는 판단하기 어려운 부분은 prototype으로 확인한다.

UI라면 throwaway route에 여러 variation을 만들고, 사람이 보고 피드백한다. Architecture나 external service integration도 prototype 대상이 될 수 있다.

Prototype을 early에 하면 PRD가 더 concrete해진다.

### 4. Phase 4: PRD 또는 spec
Research와 prototype으로 충분히 이해한 뒤 destination document를 만든다.

Matt는 이를 PRD라고 부르지만, 본질은 end state를 설명하는 spec이다. 구현의 모든 detail을 알 필요는 없지만, 사용자가 보게 될 동작과 목표는 분명해야 한다.

이 단계에서는 agent가 사용자를 grill하며 design tree를 내려가야 한다.

### 5. Phase 5: Kanban board 또는 issues
PRD/spec은 destination이고, Kanban board는 journey다. PRD를 실행 가능한 ticket으로 나누고 blocking relationship을 표현한다.

Matt는 GitHub Issues를 주로 쓰지만, blocking relationship이 더 잘 표현되는 Linear 같은 도구도 적합할 수 있다고 말한다.

### 6. Phase 6: Execution loop
Ticket이 준비되면 coding agent가 실행한다. 대부분은 sequential하게 처리해도 충분하지만, blocking이 없는 ticket은 parallel agent로 처리할 수도 있다.

Matt는 충분한 research, prototype, PRD, Kanban setup이 있으면 AFK execution도 좋은 결과를 낼 수 있다고 본다.

### 7. Phase 7: QA
Execution 후 agent가 QA plan을 만들고, 사람이 실제로 QA한다. QA 결과는 다시 ticket으로 들어가고 execution loop가 반복된다.

QA에는 사람이 code를 읽는 것도 포함될 수 있다. 특히 gray-box architecture가 충분히 갖춰져 있지 않다면 사람의 code review가 더 중요하다.

## 예시

### 7 phases
```text
1. Idea
2. Research
3. Prototype
4. PRD / spec
5. Kanban / issues
6. Execution
7. QA
```

### 반복 구조
```text
Kanban
  -> execution
  -> completed asset
  -> QA plan
  -> human QA
  -> new tickets
  -> execution again
```

## 요약
- AI-driven development는 idea를 바로 code로 옮기는 것이 아니다.
- 어려운 외부 지식은 research asset으로 cache한다.
- Taste나 불확실성이 큰 부분은 prototype으로 먼저 본다.
- PRD/spec은 destination이고, Kanban/issues는 journey다.
- Execution은 sequential 또는 parallel agent loop로 돌릴 수 있다.
- QA는 사람이 포함된 feedback loop이며, 새 ticket을 만들어 다시 execution으로 돌아간다.
