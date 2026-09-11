# Building a REAL feature with Claude Code

## 개요
- 영상: [Building a REAL feature with Claude Code: every step explained](https://www.youtube.com/watch?v=hX7yG1KVYhI)
- 채널: Matt Pocock
- 업로드일: 2026-03-18
- 길이: 44:16
- 핵심 주제: Claude Code로 실제 기능을 만드는 전체 과정을 보여준다. 느슨한 아이디어를 `/grill-me`로 구체화하고, ubiquitous language를 업데이트하고, PRD를 만들고, module/interface 중심으로 구현 범위를 정한 뒤 GitHub issue로 넘기는 workflow다.

## 내용

### 1. 시작점은 매우 거친 요구사항이다
Matt는 course video manager 앱에서 ghost lesson과 real lesson workflow를 개선하려 한다.

처음 요구는 대략 다음과 같다.

- real lesson을 만들려면 먼저 ghost lesson을 만든 뒤 materialize해야 해서 번거롭다.
- real lesson을 삭제하려면 먼저 ghost로 바꿔야 하는 UI가 불편하다.
- course도 file path 없이 계획할 수 있는 ghost course가 있으면 좋겠다.

이 단계에서 요구사항은 아직 모호하다. Matt는 "what"뿐 아니라 "why"를 설명해야 agent가 대안을 제안할 수 있다고 강조한다.

### 2. `/grill-me`로 idea를 road test한다
Matt는 `Grill me`를 호출해 agent가 관련 code를 explore하고 질문하게 한다.

Agent는 먼저 codebase를 확인해 실제 backend에는 real lesson delete 기능이 이미 있지만 UI에는 직접 삭제 action이 없다는 점을 찾는다. 이는 사람이 기억한 문제와 code reality를 맞추는 중요한 단계다.

### 3. Explore는 sub-agent로 수행된다
Explore는 별도 context window에서 codebase를 많이 읽고, parent agent에게 요약을 돌려준다. 이렇게 하면 parent session의 token을 아끼면서도 code reality를 확인할 수 있다.

Matt는 explore가 모든 session에서 필요하지만 더 빨랐으면 좋겠다고 말한다.

### 4. Ubiquitous language가 대화 품질을 높인다
Matt는 Domain-Driven Design의 ubiquitous language 개념을 사용한다.

예를 들어 ghost lesson은 DB에는 있지만 file system에는 없는 lesson이다. Materialize는 ghost entity를 on-disk representation이 있는 real entity로 전환하는 행위다.

이런 용어가 정리되어 있으면 "materialization cascade에 bug가 있다"처럼 짧고 정확한 표현으로 agent와 대화할 수 있다.

### 5. Grill session은 edge case를 드러낸다
영상에서 agent는 ghost course와 real lesson의 관계를 계속 질문한다.

중요하게 드러난 결정은 다음과 같다.

- Ghost course는 file path가 null인 course다.
- Ghost course도 version은 가져야 한다.
- Ghost version은 publish할 수 없어야 한다.
- Ghost course 안에서 real lesson을 만들면 course file path를 먼저 지정해야 한다.
- Course가 한 번 file path를 가지면 real course로 남는다.
- Real lesson에는 convert to ghost와 delete action이 모두 있어야 한다.

이 질문들은 구현 전에 사용자가 직접 판단해야 하는 product/design decision이다.

### 6. Prototype으로 갈지 구현으로 갈지 판단한다
UI action이 복잡해지면서 Matt는 prototype을 만들 수도 있다고 생각한다. 하지만 이 경우에는 직접 구현으로 가도 될 정도로 충분히 명확하다고 판단한다.

여기서 중요한 점은 high-fidelity UI 판단이 필요하면 prototype으로 갈 수 있지만, 모든 경우에 prototype이 필요한 것은 아니라는 것이다.

### 7. Shared language 문서를 업데이트한다
Grilling 후 Matt는 agent에게 ubiquitous language 문서를 업데이트하게 한다.

추가된 용어는 다음과 같다.

- ghost course
- materialize
- materialization cascade
- aliases to avoid

이 문서는 이후 PRD, issue, implementation agent가 같은 언어를 쓰도록 만든다.

### 8. PRD 작성 전 module shape를 검토한다
Matt는 `write a PRD` skill을 호출한다. 이 skill은 PRD를 쓰기 전에 어떤 module을 만들거나 바꿀지 sketch한다.

Matt는 implementation detail보다 interface를 더 중요하게 본다. 예를 들어 `course write service`에 새 method가 필요한지, 기존 method에 parameter를 추가할지 판단한다.

AI가 제안한 plans deprecation은 이번 scope에서 제외한다. 좋은 workflow에서는 agent가 제안한 범위를 그대로 받지 않고 scope를 조정한다.

### 9. 테스트는 기존 harness가 있는 곳에 붙인다
Agent가 "course write service test harness가 없다"고 잘못 말하자 Matt는 "look harder"라고 지시한다. 실제로는 concern별로 나뉜 테스트 suite가 있었다.

이 장면은 LLM이 code를 읽고도 틀릴 수 있음을 보여준다. 중요한 판단은 사람이 확인해야 한다.

### 10. PRD는 GitHub issue로 저장한다
완성된 PRD는 GitHub issue로 저장된다. 이후 AFK agent는 GitHub issue를 가져와 구현한다.

PRD는 destination이고, implementation issue는 journey다. 큰 요구사항은 PRD 하나에서 바로 구현하지 않고, 이후 ticket/issue로 나누는 것이 일반 workflow다.

## 예시

### Feature shaping 흐름
```text
rough idea
  -> explain what and why
  -> /grill-me
  -> codebase explore
  -> edge-case decisions
  -> update ubiquitous language
  -> write PRD
  -> sketch modules/interfaces
  -> GitHub issue
```

### Grilling에서 정리된 scope
```text
- course.filePath를 nullable로 변경
- ghost course 생성 flow 추가
- ghost course에서는 publish/export action 숨김
- real lesson 생성 action 추가
- ghost course에서 real lesson 생성 시 file path modal 표시
- real lesson direct delete action 추가
- convert to ghost action은 유지
```

## 요약
- 실제 기능 구현은 거친 idea를 바로 code로 옮기지 않고, grill session으로 먼저 구체화한다.
- Agent는 code exploration으로 사용자의 기억과 실제 구현을 맞춘다.
- Ubiquitous language는 용어와 decision을 이후 session에 재사용할 수 있게 한다.
- 중요한 product edge case는 구현 전에 사람과 agent가 함께 결정해야 한다.
- PRD 작성 전 module/interface shape를 검토하면 implementation이 더 안정적이다.
- LLM의 codebase 이해는 틀릴 수 있으므로 중요한 test harness나 module 판단은 사람이 확인해야 한다.
