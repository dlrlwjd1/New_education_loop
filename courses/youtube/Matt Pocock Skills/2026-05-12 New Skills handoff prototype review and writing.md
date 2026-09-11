# New Skills handoff prototype review and writing

## 개요
- 영상: [New Skills! /handoff, /prototype, /review and /writing-* | Skills Changelog](https://www.youtube.com/watch?v=DNqsMXH6Eog)
- 채널: Matt Pocock
- 업로드일: 2026-05-12
- 길이: 12:46
- 핵심 주제: skills repo changelog. `/handoff`, `/prototype`가 새로 추가되고, `/grill-with-docs`, `/to-prd`, `/to-issues`의 버그가 수정되며, writing 계열과 review skill의 방향성이 소개된다.

## 내용

### 1. `/handoff`는 temporary handoff document를 만든다
`/handoff`는 현재 conversation을 다른 agent가 이어받을 수 있는 markdown 문서로 압축한다. 문서는 workspace가 아니라 temporary directory에 저장된다.

핵심 목적은 현재 context window의 내용뿐 아니라 intent와 "vibe"도 넘기는 것이다. 예를 들어 현재 session이 grilling 중이었다면 다음 session도 grilling을 이어갈 수 있도록 추천 skill을 문서에 포함한다.

기존 artifact에 이미 저장된 내용은 복사하지 않고 path나 URL로 참조한다.

### 2. Handoff의 두 가지 패턴
첫 번째는 fire-and-forget이다. 현재 session에서 독립 작업이 생기면 새 agent에게 넘기고 원래 session은 계속 진행한다. 예를 들어 grilling 중 작은 bugfix나 GitHub issue 작성이 필요할 때 쓴다.

두 번째는 DIY sub-agent다. Planning session에서 prototype이나 code experiment가 필요할 때 별도 session으로 handoff하고, 그 session에서 얻은 결과를 다시 원래 session으로 handoff한다.

이 방식은 native sub-agent에 의존하지 않아도 되고, Claude Code에서 만든 handoff를 Codex나 다른 CLI agent로 넘길 수도 있다.

### 3. `/prototype`은 throwaway research artifact를 만든다
`/prototype`은 설계 결정을 확정하기 전에 빠르게 concrete artifact를 만들어 보는 스킬이다. Matt는 AI engineering에서 prototype을 research나 spike처럼 사용해야 한다고 본다.

UI prototype만 의미하는 것은 아니다. 두 가지 유형이 있다.

- UI prototype: 화면이 어떻게 보이고 느껴져야 하는지 확인한다.
- logic prototype: stateful business logic이 여러 케이스에서 어떻게 움직이는지 작은 terminal app 등으로 확인한다.

### 4. UI prototype은 여러 variation을 만든다
UI prototype은 여러 radically different variation을 만들고, 사용자가 좌우로 전환하며 비교할 수 있게 한다. 사용자는 variation A의 일부와 variation B의 일부를 조합하고, 필요 없는 방향은 버릴 수 있다.

Matt는 frontend에서 AFK agent를 잘 쓰려면 결국 prototype과 human taste가 필요하다고 말한다. AI가 보지 못하는 미묘한 UI 품질과 제품 스타일은 사람이 loop 안에서 판단해야 한다.

### 5. Logic prototype은 state machine을 이해하는 데 유용하다
복잡한 business logic이나 상태 변화는 문서로만 생각하기 어렵다. 예를 들어 DB entity가 user action에 따라 여러 상태를 오간다면 작은 interactive terminal app으로 state transition을 밀어보는 편이 낫다.

이렇게 unknown unknown을 코드로 드러낸 뒤, prototype에서 배운 점을 실제 구현 session으로 handoff한다.

### 6. `/grill-with-docs` prompt에 XML tag를 추가했다
Matt는 `/grill-with-docs`가 때때로 너무 빨리 implementation으로 넘어가려는 문제를 발견했다. 원인으로 supporting information이 실제 task instruction보다 더 크게 작용했을 가능성을 본다.

그래서 prompt를 XML tag로 나눠, 실제 지시와 supporting information의 우선순위를 분명히 했다. Matt는 이를 prompt의 loudness 조절로 설명한다.

### 7. `/to-prd`, `/to-issues` label 버그 수정
기존에는 `/to-prd`, `/to-issues`가 만든 issue에 `needs triage` 같은 label을 붙이는 문제가 있었다. Matt는 이 산출물이 agent 작업 준비를 끝낸 상태이므로 `ready for agent triage` 류의 label이 더 맞다고 설명한다.

다만 PRD 자체를 agent가 바로 구현하면 안 되고, 실제 구현은 issue/ticket 단위에서 해야 한다고 덧붙인다.

### 8. Writing skills는 fragments, beats, shape로 구성된다
Matt는 writing 계열 skill도 실험 중이라고 소개한다.

그 방향은 세 단계다.

- fragments: 나중에 글에 들어갈 수 있는 생각 조각을 모은다.
- beats: fragments를 바탕으로 글의 가능한 진행 경로를 만든다.
- shape: 최종 글이 너무 AI스럽지 않은지, 구조가 맞는지 review한다.

아직 in-progress지만, AI가 사용자의 생각을 더 좋은 글감으로 끌어내는 방식에 관심을 두고 있다.

### 9. `/review`는 standards와 spec 두 축으로 설계된다
Matt는 generic code review skill이 어렵다고 말한다. 그가 생각한 해법은 두 축으로 나누는 것이다.

첫 번째는 standards axis다. diff가 repo의 coding standards를 따르는지 확인한다.

두 번째는 spec axis다. diff가 원래 issue나 PRD를 충실히 구현했는지 확인한다.

한쪽만 보면 다른 쪽을 놓친다. standards만 보면 요구사항 누락을 놓치고, spec만 보면 codebase style과 maintainability를 놓친다. 그래서 두 parallel sub-agent로 검토하는 방향을 구상한다.

## 예시

### Changelog 핵심
| 스킬 | 변경/추가 내용 |
| --- | --- |
| `/handoff` | 현재 session을 임시 markdown 문서로 압축해 다른 agent에게 전달 |
| `/prototype` | UI 또는 logic prototype으로 설계 결정을 concrete하게 검증 |
| `/grill-with-docs` | XML tag로 prompt 우선순위 조정 |
| `/to-prd`, `/to-issues` | agent-ready label 관련 버그 수정 |
| `/writing-*` | fragments, beats, shape 기반 writing workflow 실험 |
| `/review` | standards axis와 spec axis 기반 code review 구상 |

### Prototype 사용 흐름
```text
planning/grilling
  -> unknown unknown 발견
  -> /handoff prototype
  -> UI/logic prototype 생성
  -> 사용자 피드백
  -> prototype learning을 implementation session으로 handoff
```

## 요약
- `/handoff`는 context와 intent를 temporary markdown으로 압축해 다른 session에 전달한다.
- `/prototype`은 UI와 logic 모두에서 설계 결정을 빠르게 검증하는 throwaway artifact다.
- UI prototype은 여러 variation을 만들고 사람의 taste로 방향을 고르게 한다.
- Logic prototype은 stateful behavior를 코드로 밀어보며 unknown unknown을 찾는다.
- `/grill-with-docs`는 XML tag로 task instruction과 supporting info의 우선순위를 조정했다.
- `/review`는 standards와 spec 두 축으로 병렬 검토하는 방향으로 설계되고 있다.
