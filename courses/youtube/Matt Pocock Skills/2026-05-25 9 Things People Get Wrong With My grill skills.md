# 9 Things People Get Wrong With My grill skills

## 개요
- 영상: [9 Things People Get Wrong With My /grill-* skills](https://www.youtube.com/watch?v=UzMNBN6xLLA)
- 채널: Matt Pocock
- 업로드일: 2026-05-25
- 길이: 13:28
- 핵심 주제: `/grill-me`, `/grill-with-docs`는 plan mode를 대체할 수 있지만, 사용자가 scope, context, fidelity, model choice를 제대로 관리해야 효과가 난다.

## 내용

### 1. Grill은 엔지니어를 대체하지 않는다
Matt는 grill skill이 사용자를 끈질기게 질문해 shared understanding에 도달하게 만드는 도구라고 설명한다. 하지만 이 스킬은 사용자의 planning skill을 대체하지 않는다.

사용자는 scope를 판단하고, 어떤 질문이 지금 답할 수 있는지, 어떤 질문은 prototype이 필요한지, 언제 구현으로 넘어가야 하는지 판단해야 한다.

### 2. 질문에는 fidelity 차이가 있다
Matt는 Ryan Singer의 Shape Up에서 가져온 fidelity 개념으로 grill 실패를 설명한다.

Low-fidelity question은 대화로 답할 수 있다. 예를 들어 route URL을 무엇으로 할지, 어떤 이름을 쓸지 같은 질문은 grill session에서 충분히 결정할 수 있다.

High-fidelity question은 실제로 보거나 만져봐야 답할 수 있다. UI가 어떻게 느껴지는지, 복잡한 interaction이 자연스러운지, stateful logic이 실제 케이스에서 어떻게 움직이는지 같은 질문은 말로만 해결하기 어렵다.

### 3. Ungrillable question은 prototype으로 넘긴다
Grill session에서 high-fidelity question을 붙잡고 계속 대화하면 context와 에너지를 낭비한다. 이런 질문은 ungrillable question으로 보고 prototype handoff를 해야 한다.

Matt의 패턴은 다음과 같다.

1. `/grill-with-docs`로 planning을 진행한다.
2. high-fidelity question을 발견한다.
3. `/handoff`로 prototype session을 만든다.
4. prototype에서 실제 UI/logic을 확인한다.
5. 배운 점을 다시 원래 grilling session으로 handoff한다.

### 4. Scope가 너무 크면 context window를 태운다
너무 큰 범위를 한 번에 grill하면 hidden high-fidelity question이 많이 섞인다. 또한 context window가 빠르게 커져 model의 dumb zone에 들어갈 수 있다.

Matt는 state-of-the-art model도 약 120k token 근처부터 집중력이 떨어진다고 본다. 따라서 처음부터 큰 기능 전체를 grill하기보다, agent에게 더 작은 scope로 나누게 하고 각각을 별도 session에서 grill하는 편이 낫다.

### 5. 사용자는 너무 passive해도, 너무 active해도 안 된다
Grill은 interview가 아니라 conversation이다. 사용자가 너무 passive하면 agent가 scope를 폭발시키고, 너무 많은 질문을 던지고, 낮은 가치의 질문에 빠질 수 있다.

반대로 사용자가 너무 active하면 실제로 코드를 보거나 prototype을 만들어야 하는 상황에서도 계속 말로만 계획하려 한다. 좋은 사용자는 대화를 이끌되, 필요한 순간에는 code/prototype으로 이동한다.

### 6. Grilling session의 context는 버리면 안 된다
Grilling session에서 쌓인 답변과 결정은 매우 귀중하다. 그런데 일부 사용자는 session을 clear한 뒤 새 context에서 `/to-prd`를 실행한다고 한다. Matt는 이를 강하게 비판한다.

PRD/spec/handoff는 이미 중요한 결정이 들어 있는 바로 그 context에서 만들어야 한다. 그래야 session 안의 결정이 산출물에 반영된다.

### 7. Grill에는 똑똑한 model을 써야 한다
Grill은 model의 parametric knowledge에 많이 의존한다. 좋은 질문을 던지고, 사용자가 놓친 trade-off를 떠올리고, 시스템 설계를 압박하려면 강한 frontier model이 필요하다.

반대로 implementation은 이미 spec, ticket, 관련 파일이라는 contextual knowledge가 많기 때문에 상대적으로 덜 똑똑한 model로도 가능할 수 있다.

### 8. 여러 grilling session을 병렬로 돌릴 수 있다
Matt는 보통 두 개의 grilling session을 병렬로 운영한다고 말한다. 한 session의 질문에 답하고 기다리는 동안 다른 session에 답하는 방식이다.

이는 복잡한 context switching이라기보다 Slack thread 두 개를 관리하는 것에 가깝다고 설명한다. 숙련되면 throughput을 높일 수 있지만, 보통 두 개가 현실적인 한계라고 본다.

## 예시

### Grillable vs Ungrillable
| 질문 유형 | 예시 | 처리 방식 |
| --- | --- | --- |
| Low fidelity | route 이름, status 이름, 단순 정책 결정 | grill에서 답변 |
| High fidelity | UI 느낌, interaction 흐름, 복잡한 state 변화 | prototype으로 handoff |

### 좋은 grill 운용 흐름
```text
작은 scope 선택
  -> /grill-with-docs
  -> low-fidelity questions 답변
  -> high-fidelity question 발견
  -> /handoff prototype
  -> prototype 결과를 원래 session으로 handoff
  -> /to-spec 또는 /to-tickets
```

## 요약
- Grill skill은 plan mode 대체물이지만, 사용자의 planning 판단이 여전히 필요하다.
- 대화로 답할 수 있는 low-fidelity question과 prototype이 필요한 high-fidelity question을 구분해야 한다.
- 범위가 너무 크면 context window와 사용자의 stamina를 낭비한다.
- Grilling session에서 만든 결정은 clear하지 말고 spec/PRD/handoff로 보존해야 한다.
- Grill에는 parametric knowledge가 강한 똑똑한 model이 필요하다.
- 숙련되면 2개 정도의 grilling session을 병렬로 운영해 planning throughput을 높일 수 있다.
