# Software Is Changing Again

## 개요
- 영상: [Andrej Karpathy: Software Is Changing (Again)](https://www.youtube.com/watch?v=LCEmiRjPEtQ)
- 채널: Y Combinator
- 업로드일: 2025-06-19
- 길이: 39:31
- 핵심 주제: Software 1.0, 2.0, 3.0 관점으로 소프트웨어의 변화를 설명한다. LLM은 새로운 operating system처럼 작동하며, 영어 prompt가 programming language가 되고, partial autonomy product가 중요해진다.

## 내용

### 1. Software 1.0, 2.0, 3.0
Karpathy는 software의 변화를 세 단계로 설명한다.

Software 1.0은 사람이 직접 작성한 code다. GitHub의 repository들이 여기에 해당한다.

Software 2.0은 neural network의 weights다. 사람이 직접 logic을 쓰는 대신 dataset과 optimizer로 parameter를 만든다. Hugging Face는 Software 2.0의 GitHub와 유사한 역할을 한다.

Software 3.0은 LLM을 prompt로 program하는 방식이다. Prompt는 영어로 쓰인 program이고, LLM은 이를 실행하는 새로운 종류의 computer처럼 작동한다.

### 2. 영어가 programming language가 된다
Software 3.0에서 중요한 변화는 programming language가 English에 가까워진다는 점이다.

이는 software creation의 진입장벽을 낮춘다. 하지만 동시에 prompt/spec을 잘 쓰는 능력, context를 제공하는 능력, LLM의 한계를 이해하는 능력이 중요해진다.

### 3. LLM은 새로운 operating system처럼 보인다
Karpathy는 LLM을 새로운 operating system에 비유한다.

LLM 자체는 CPU처럼 중심에서 text processing과 reasoning을 수행하고, context window는 memory처럼 작동한다. 주변에는 tool, file, browser, code execution, app integration이 붙는다.

하지만 전통적 OS와 다르게 LLM은 probabilistic하고, gullible하며, prompt injection에 취약하다.

### 4. LLM app은 orchestration product다
성공적인 LLM app은 모델 호출 하나가 아니다. 여러 LLM call, retrieval, tool use, guardrail, UI, memory, human control을 orchestrate한다.

예를 들어 Perplexity 같은 제품은 query rewriting, search, source retrieval, answer synthesis, citation 등 여러 단계를 조합한다.

### 5. Autonomy slider가 필요하다
Karpathy는 LLM app에 autonomy slider가 있어야 한다고 말한다. 사용자가 얼마나 자율성을 줄지 조절할 수 있어야 한다.

완전 자동 agent보다 partial autonomy product가 더 현실적이다. 사용자는 augment 모드에서 시작해, 신뢰가 쌓이면 더 많은 autonomy를 줄 수 있다.

### 6. Agent를 위해 legible한 세계를 만들어야 한다
LLM이 잘 쓰려면 web/API/documentation이 LLM-friendly해야 한다. 사람이 보는 UI만이 아니라, agent가 읽고 조작하기 쉬운 형식이 필요하다.

Karpathy는 "agent가 읽을 수 있는 설명과 tool surface"가 앞으로 중요해질 것이라고 본다.

### 7. Vibe coding은 새로운 창작 방식이다
Software 3.0은 비개발자도 software를 만들 수 있게 한다. Karpathy는 vibe coding을 언급하며, 아이디어를 설명하고 LLM이 구현하게 하는 방식이 일반화될 것이라고 본다.

다만 professional software에서는 여전히 검증, 보안, 품질, 유지보수성이 필요하다.

## 예시

### Software 세대
| 세대 | 사람이 작성하는 것 | 실행 대상 |
| --- | --- | --- |
| Software 1.0 | code | classical computer |
| Software 2.0 | dataset/objective | neural network weights |
| Software 3.0 | prompt/spec | LLM |

### LLM app 구성요소
```text
LLM
  + context window
  + tools
  + retrieval
  + memory
  + UI
  + safety layer
  + autonomy slider
```

## 요약
- Software는 1.0 code, 2.0 neural network weights, 3.0 LLM prompt/spec로 확장되고 있다.
- Software 3.0에서는 영어가 programming language처럼 작동한다.
- LLM은 새로운 operating system처럼 보이지만 probabilistic하고 취약점도 많다.
- 성공적인 LLM app은 단일 model call이 아니라 orchestration product다.
- 완전 autonomy보다 autonomy slider가 있는 partial autonomy product가 현실적이다.
- 앞으로는 사람이 쓰기 좋은 UI뿐 아니라 agent가 읽고 사용할 수 있는 LLM-friendly interface가 중요해진다.
