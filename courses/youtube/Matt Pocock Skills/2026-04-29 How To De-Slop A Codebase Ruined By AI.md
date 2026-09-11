# How To De-Slop A Codebase Ruined By AI

## 개요
- 영상: [How To De-Slop A Codebase Ruined By AI (with one skill)](https://www.youtube.com/watch?v=3MP8D-mdheA)
- 채널: Matt Pocock
- 업로드일: 2026-04-29
- 길이: 11:19
- 핵심 주제: AI는 software entropy를 빠르게 증가시킬 수 있다. 이를 되돌리려면 module, interface, seam, adapter, locality, leverage 같은 기본 설계 개념을 사용해 shallow module을 deep module로 바꿔야 한다.

## 내용

### 1. AI는 software entropy를 가속한다
AI가 코드를 빠르게 만들 수 있게 되면서 codebase는 더 빠르게 망가질 수 있다. 전체 구조를 고려하지 않은 작은 변경이 쌓이면, codebase는 점점 변경하기 어려운 ball of mud가 된다.

Matt는 이를 막거나 고치기 위해 `improved codebase architecture` skill을 사용한다.

### 2. Shared vocabulary가 필요하다
이 skill에는 glossary가 포함되어 있다. AI와 사람이 같은 단어로 구조를 말할 수 있어야 좋은 refactor 대화를 할 수 있기 때문이다.

핵심 용어는 다음과 같다.

- module
- interface
- implementation
- deep module
- shallow module
- seam
- adapter
- locality
- leverage

### 3. Deep module이 좋은 module이다
Deep module은 단순한 interface 뒤에 많은 구현 복잡도를 숨긴다. Caller는 적은 interface만 배워도 많은 behavior를 사용할 수 있다.

반대로 shallow module은 interface는 복잡하지만 실제로 숨기는 구현이 적다. AI가 shallow module이 많은 codebase를 보면 책임과 dependency를 파악하기 어려워진다.

### 4. Seam과 adapter는 테스트 가능성을 만든다
Seam은 module interface가 놓이는 지점이다. 테스트는 보통 이 seam 주변에서 이루어진다.

Adapter는 특정 seam의 interface를 만족하는 구체 구현이다. 예를 들어 실제 clock과 fake clock은 같은 clock interface를 만족하는 adapter가 될 수 있다.

Seam이 명확하면 unit/integration test를 만들기 쉽고, agent가 변경 후 feedback을 빠르게 받을 수 있다.

### 5. Locality와 leverage가 목표다
Maintainer 관점에서 좋은 module은 locality가 높다. 관련 변경과 bug fix가 한 곳에 모인다.

Caller 관점에서 좋은 module은 leverage가 높다. 적은 interface 학습으로 많은 기능을 사용할 수 있다.

AI에게도 이 두 속성이 중요하다. Locality가 낮으면 agent가 여러 파일을 계속 오가야 하고, leverage가 낮으면 작은 작업에도 많은 맥락을 알아야 한다.

### 6. Skill은 deepening opportunity를 찾는다
`improved codebase architecture` skill은 codebase를 탐색한 뒤, deepening opportunity를 제안한다.

예를 들어 같은 rule이 frontend와 backend에 별도로 구현되어 있어 sync risk가 생긴다면, 이를 하나의 module과 seam으로 모으는 refactor 후보가 된다.

### 7. 이 skill은 AFK용이 아니라 human-in-the-loop용이다
Matt는 이 skill이 혼자 자동으로 codebase를 고치는 AFK skill이 아니라고 강조한다. Agent는 candidate와 design shape를 제안할 수 있지만, 어떤 방향이 장기적으로 좋은지는 사람의 judgment가 필요하다.

Agent는 tactical programmer이고, 사람은 strategic programmer 역할을 해야 한다.

### 8. Legacy codebase에서는 test harness부터 필요하다
Legacy codebase는 대개 shallow module이 많고 변경하기 어렵다. 이런 codebase에 AI를 바로 투입하면 위험하다.

먼저 deep module과 clear seam을 만들고, 그 seam 주변에 test harness를 세워야 한다. 그래야 AI가 변경해도 feedback loop로 안전하게 확인할 수 있다.

## 예시

### 좋은 refactor 질문
```text
- 어떤 개념을 이해하려면 여러 파일을 계속 오가야 하는가?
- 같은 rule이 여러 layer에 중복 구현되어 있는가?
- 테스트를 위해 억지로 pure function만 뽑아냈지만 실제 bug는 orchestration에 있는가?
- module interface를 더 단순하게 만들 수 있는가?
- 관련 변경을 한 곳에 모아 locality를 높일 수 있는가?
```

### Deep module 목표
```text
simple interface
  -> hidden implementation complexity
  -> clear seam
  -> testable adapter
  -> high locality
  -> high leverage
```

## 요약
- AI는 codebase entropy를 빠르게 키울 수 있다.
- 이를 고치려면 deep module, seam, adapter, locality, leverage 같은 기본 설계 개념이 필요하다.
- `improved codebase architecture` skill은 shallow module을 deep module로 바꿀 후보를 찾는다.
- 이 skill은 사람의 전략적 판단이 필요한 human-in-the-loop 도구다.
- Legacy codebase에는 먼저 test harness와 clear seam을 만들어야 AI가 안전하게 일할 수 있다.
