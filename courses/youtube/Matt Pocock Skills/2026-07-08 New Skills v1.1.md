# New Skills v1.1

## 개요
- 영상: [New Skills! v1.1 brings /wayfinder, /research, /implement, /to-spec, /to-tickets](https://www.youtube.com/watch?v=A8mokin_YOs)
- 채널: Matt Pocock
- 업로드일: 2026-07-08
- 길이: 15:11
- 핵심 주제: Matt Pocock의 skills repo v1.1 업데이트. 기존 `/to-prd`, `/to-issues`의 명칭을 바로잡고, `/wayfinder`, `/research`, `/implement`, prototype, code review, TDD 흐름을 묶어 더 완전한 소프트웨어 개발 생명주기로 확장한다.

## 내용

### 1. `/to-prd`는 `/to-spec`으로 변경
Matt Pocock은 기존 `/to-prd`가 실제로는 PRD(Product Requirements Document)보다 더 넓은 "specification"을 만들고 있었다고 설명한다. PRD는 제품 자체의 요구사항에 더 초점이 있지만, 이 스킬이 다루는 산출물은 기술적 내용과 비기술적 내용을 모두 포함할 수 있는 구현 명세에 가깝다.

그래서 v1.1에서는 이름을 `/to-spec`으로 바꿨다. 핵심은 "만들고 싶은 것에 대한 명세"를 작성하는 것이다. 제품 요구사항 문서라는 좁은 의미보다, 기술 설계와 제품 의도를 함께 담을 수 있는 더 넓은 이름을 선택한 셈이다.

### 2. `/to-issues`는 `/to-tickets`로 변경
기존 `/to-issues`도 `/to-tickets`로 이름이 바뀌었다. "issues"라는 표현은 GitHub Issues나 Linear처럼 이슈 기반 도구에 치우친 느낌이 있기 때문이다.

Matt의 흐름에서는 먼저 spec이 있고, 그 아래에 spec을 실제로 실행하기 위한 ticket들이 있다. ticket은 개발 여정을 여러 agent session으로 나누기 위한 작업 단위다. 따라서 `/to-tickets`는 spec을 실행 가능한 작은 작업 묶음으로 분해하는 단계다.

### 3. 업데이트 시 기존 스킬 삭제와 재설치가 필요할 수 있음
이번 변경은 단순 업데이트로 기존 스킬 이름이 자동 변경되지 않을 수 있다. Matt는 새 스킬들을 확실히 받으려면 다음 명령으로 다시 추가하는 방식을 권장한다.

```bash
npx skills add mattpocock/skills
```

그리고 skills 폴더를 확인해서 예전 이름의 스킬이 남아 있지 않은지 점검하라고 말한다. 이미 개인적으로 수정한 스킬이 있다면 release notes를 참고해 새 변경분만 가져오는 방식도 언급한다.

### 4. Grill 계열 스킬의 안정성 개선
`grill me`, `grill with docs`는 사용자를 질문으로 압박해 요구사항과 결정을 명확히 만드는 스킬이다. v1.1에서는 이 과정에서 발생하던 몇 가지 문제를 줄였다.

첫째, 한 번에 여러 질문을 던지는 문제가 있었다. 이제 "여러 질문을 한꺼번에 하면 사용자가 혼란스럽다"는 이유까지 명시해 한 번에 하나씩 질문하도록 더 강하게 유도한다.

둘째, grilling session이 끝나자마자 구현으로 넘어가는 문제가 있었다. 이를 막기 위해 "공유된 이해에 도달했다고 사용자가 확인하기 전까지 계획을 실행하지 말라"는 confirmation gate를 추가했다.

셋째, agent가 사용자에게 질문해야 할 상황에서 스스로를 grill하는 이상한 동작이 있었다. 이를 줄이기 위해 codebase 탐색으로 얻는 "facts"와 사용자가 내려야 하는 "decisions"를 더 분명히 구분했다.

### 5. 전체 메인 플로우
Matt가 설명하는 v1.1의 기본 흐름은 다음과 같다.

1. `/grill-with-docs` 또는 `/wayfinder`로 모호한 요구를 구체화한다.
2. glossary와 architectural decision records로 중요한 용어와 비명시적 결정을 저장한다.
3. `/to-spec`으로 목적지 역할을 하는 spec을 만든다.
4. `/to-tickets`로 spec을 여러 agent session에서 실행 가능한 tickets로 나눈다.
5. `/implement`로 각 ticket을 구현한다.
6. 구현이 끝나면 code review로 표준 준수와 spec 충족 여부를 확인한다.
7. 마지막에 현재 branch에 commit한다.

핵심은 plan 하나를 길게 끌고 가는 것이 아니라, spec과 tickets를 통해 작업을 여러 세션으로 분산할 수 있게 만드는 것이다.

### 6. `/implement`는 단순하지만 흐름을 완성하는 스킬
`/implement`는 사용자가 지정한 spec 또는 ticket을 구현하는 스킬이다. Matt는 처음에는 너무 단순해서 스킬로 만들 필요가 있는지 고민했다고 말한다. 하지만 사람들이 계속 "main flow가 무엇이냐"고 물었기 때문에, 흐름의 명시적 단계로 추가했다.

이 스킬의 핵심 지침은 다음과 같다.

- 가능한 곳에서는 TDD를 사용한다.
- 사전에 합의된 지점에서 테스트를 작성한다.
- type checking을 자주 실행한다.
- 단일 테스트 파일을 자주 실행한다.
- 마지막에는 전체 테스트를 한 번 실행한다.
- 완료 후 code review를 사용한다.
- 작업을 현재 branch에 commit한다.

### 7. Code review는 두 축으로 검토한다
Code review skill은 두 가지 축으로 코드를 검토한다.

첫 번째는 standards axis다. repo에 `coding standards.md` 같은 문서가 있다면 이를 읽고 코드가 프로젝트의 코딩 표준을 따르는지 확인한다. Matt는 coding standards를 `AGENTS.md` 안에 넣기보다 별도 문서로 두는 편이 낫다고 본다.

두 번째는 spec axis다. 구현된 코드가 원래 issue, PRD, spec을 충실히 구현했는지 확인한다. 두 검토는 병렬 sub-agent로 실행된다.

v1.1에서는 Martin Fowler의 Refactoring에서 나온 code smell 개념들을 code review에 반영했다. 예를 들어 mysterious name, duplicated code, feature envy, data clumps, primitive obsession, repeated switches, divergent change, speculative generality, message chains 같은 냄새를 agent가 식별하도록 유도한다. Matt는 이 작은 추가가 코드 품질 개선에 매우 유용했다고 평가한다.

### 8. `/wayfinder`는 큰 요구사항을 탐색용 지도와 ticket으로 쪼갠다
이번 영상에서 Matt가 가장 강조한 새 스킬은 `/wayfinder`다. 그는 앞으로 `/grill-with-docs`를 쓸지 고민되는 상황에서 기본적으로 `/wayfinder`를 먼저 고려하라고 말한다.

`/wayfinder`는 하나의 agent session으로 다루기에는 너무 크고 모호한 요구사항을 처리하기 위한 스킬이다. 아직 목적지까지의 길이 보이지 않을 때, repo의 issue tracker에 "map"을 만들고 그 아래에 하위 tickets를 생성해 길을 찾아간다.

각 ticket은 하나의 agent session 안에서 처리 가능한 크기로 제한된다. ticket에는 blocking relationship이 있을 수 있어서, 어떤 결정이 내려져야 다음 결정으로 넘어갈 수 있는지도 표현한다. 모든 ticket이 닫히면 그 결과가 map에 저장되고, 이 map을 다시 `/to-spec`으로 넘겨 정식 spec을 만들 수 있다.

Matt는 `/wayfinder`가 GitHub issues에 정보를 저장하기 때문에 세션 handoff, context window, smart zone 관리 부담을 줄여준다고 설명한다. 팀과 공유하기도 쉽고, 여러 세션에 걸쳐 협업하기 좋다.

### 9. Wayfinder ticket type: research, grilling, prototype, task
`/wayfinder`가 만드는 ticket은 성격별로 나뉜다.

`research`는 agent가 primary sources를 조사하고 결과를 가져오는 작업이다. 사용자가 자리를 비운 동안 agent가 독립적으로 진행하기 좋은 작업이다.

`grilling`은 사용자의 결정이 필요한 작업이다. agent가 codebase에서 찾을 수 없는 선택지나 trade-off를 사용자와 좁혀야 할 때 사용한다.

`prototype`은 spec 작성 전에 논의의 해상도를 높이기 위한 작업이다. 거친 UI, logic, code artifact를 만들어 실제로 반응할 수 있는 대상을 제공한다. Matt는 특히 frontend code가 닿는 작업에서는 `/wayfinder`와 prototype을 강하게 추천한다.

`task`는 AI가 자동화하기 어렵고 grilling decision도 아닌 준비 작업이다. 예를 들어 configuration, access provisioning, data shape 정리 같은 작업이 여기에 들어간다.

### 10. `/research`는 primary sources 기반 조사 스킬
`/research`는 Wayfinder를 지원하기 위해 추가된 작고 실용적인 스킬이다. 질문을 조사하기 위해 background agent를 띄우고, primary sources를 기준으로 조사한 뒤, 결과를 repo의 기존 관례에 맞는 markdown 파일로 저장한다.

핵심은 agent가 조사하는 동안 사용자는 계속 다른 일을 할 수 있고, 조사 결과가 단순 답변이 아니라 repo 안의 자료로 남는다는 점이다.

### 11. Prototype은 logic/state 또는 UI로 나뉜다
Prototype skill은 Wayfinder가 호출할 수 있도록 model-invoked 형태가 되었다. 영상에서는 logic/state prototype과 UI prototype이 다르게 동작한다고 설명한다.

이 스킬의 목적은 spec 작성 전에 "어떻게 보여야 하는가" 또는 "어떻게 동작해야 하는가"라는 질문을 더 구체적으로 만드는 것이다. 추상 토론만 하는 대신, 싸고 거친 산출물을 만들어 반응하면서 방향을 잡는다.

### 12. TDD skill은 reference material 중심으로 변경
기존 TDD skill은 agent가 따라야 할 단계들을 제안했는데, Matt는 이것이 일부 사용자에게 어색했다고 설명한다. 많은 사람들은 AFK agent에게 TDD skill을 넘기면 알아서 동작하기를 기대하기 때문이다.

v1.1의 TDD skill은 특정 절차를 강제하기보다 reference material에 가까워졌다. 핵심은 "red before green", "one slice at a time"이다. 또한 Matt는 refactoring을 구현 루프 안에서 과하게 처리하기보다 code review 단계로 넘기는 편이 더 생산적이라고 본다.

## 예시

### 큰 기능을 구현할 때의 사용 흐름
```text
느슨한 아이디어
  -> /wayfinder
  -> research / grilling / prototype / task tickets
  -> map 완성
  -> /to-spec
  -> /to-tickets
  -> /implement
  -> code review
  -> commit
```

### 스킬별 역할 요약
| 스킬 | 역할 |
| --- | --- |
| `/wayfinder` | 큰 요구사항을 issue tracker의 map과 ticket으로 분해 |
| `/research` | primary sources 기반 조사 후 markdown으로 저장 |
| `/grill-with-docs` | 사용자를 질문해 요구사항과 결정을 명확화 |
| `/to-spec` | 제품/기술 의도를 포함한 specification 작성 |
| `/to-tickets` | spec을 실행 가능한 ticket 단위로 분해 |
| `/implement` | ticket 또는 spec 구현, 테스트, 리뷰, commit까지 수행 |
| code review | coding standards와 spec 충족 여부를 두 축으로 검토 |
| prototype | spec 이전에 UI/logic artifact로 논의의 구체성 향상 |
| TDD | red-before-green, one-slice-at-a-time 원칙 제공 |

## 요약
- v1.1의 핵심 변경은 `/to-prd`를 `/to-spec`, `/to-issues`를 `/to-tickets`로 바꾼 것이다.
- 이름 변경의 이유는 실제 산출물의 의미를 더 정확히 표현하기 위해서다.
- `/wayfinder`는 큰 요구사항을 GitHub issues 기반 map과 작은 tickets로 쪼개 context 관리 부담을 줄인다.
- Wayfinder ticket은 research, grilling, prototype, task로 나뉜다.
- `/research`는 primary sources 기반 조사를 repo의 markdown 자료로 남긴다.
- `/implement`는 spec/ticket 구현, TDD, type check, 테스트, code review, commit까지 이어지는 실행 단계다.
- Code review는 coding standards와 spec 충족 여부를 병렬로 확인하고, Martin Fowler식 code smells를 활용한다.
- TDD는 엄격한 단계 지시보다 reference material로 단순화되었고, refactoring은 code review 단계에서 다루는 방향을 선호한다.
