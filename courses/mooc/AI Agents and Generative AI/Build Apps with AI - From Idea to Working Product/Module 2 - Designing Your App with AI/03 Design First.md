# Design First

## 개요
- 코드를 짜기 전에 **"요구사항(requirements)"을 먼저 글로 써야 하는 이유**와, 이를 쉽게 작성하는 3가지 프롬프트 패턴을 결합한 실전 기법을 다루는 강의.

## 내용
### 왜 요구사항을 먼저 써야 하는가
- 소프트웨어 엔지니어들이 오래전부터 겪어온 문제: **사람들은 자신이 무엇을 원하는지 정확히 모르고, 그것을 조금씩(incrementally) 말한다.**
- 처음에 말하지 않은 요구사항이 나중에 등장하면, "그건 처음에 말 안 했잖아요"라는 상황이 벌어지고 추가하기 어려워진다.
- **AI CS PhD도 동일한 문제를 겪는다** — 사람보다 좀 더 친절하게 반응할 수는 있어도, 처음에 불완전한 정보를 주면 나중에 원하는 걸 추가하기 어려워지는 건 마찬가지다.
- 결론: **요구사항을 최대한 사전에(upfront) 확보해야 한다.** (물론 시스템이 계속 진화하면서 요구사항이 추가되는 것 자체는 불가피하다.)

### 요구사항 문서를 쉽게 쓰는 3가지 패턴의 결합
1. **오디언스 페르소나(Audience Persona) 패턴**: "나는 완전히 비기술자야. 대화 내내 나에게 기술적인 질문은 하지 마." — 청중(자기 자신)의 성격을 미리 규정해, 기술적 세부사항에 얽매이지 않도록 함.
2. **플립드 인터랙션(Flipped Interaction) 패턴**: "내가 무엇을 만들고 싶은지에 대해, 요구사항 문서를 쓰기에 충분한 정보를 모을 때까지 한 번에 하나씩 질문해줘."
   - 이유: 요구사항은 종종 **행간을 읽어야(read between the lines)** 파악할 수 있다 — 사람 스스로도 자기가 뭘 원하는지 정확히 모르는 경우가 많다. **요구사항 도출(requirements elicitation)**은 원래 사람을 인터뷰하는 기술이 필요한 전문 영역인데, AI가 이 인터뷰 역할을 꽤 잘 수행한다.
3. **요구사항 작성자(Requirements Writer) 패턴**: "전체 그림이 파악되면, 추론 가능한 세부사항을 채우고 명시되지 않은 중요한 니즈까지 예측해서 매우 상세하고 포괄적인 요구사항 문서를 작성해줘."

### 통합 프롬프트 실전 흐름
- 세 패턴을 하나로 합친 프롬프트로 시작 → AI: "어떤 문제를 해결하고 싶으신가요?"
- 사용자 답변: "저는 작은 컨설팅 사업을 하는데, 클라이언트들이 Word, PDF 등 다양한 형식의 문서를 많이 보내요. 폴더가 엉망이라 필요한 걸 못 찾겠어요." (본질은 **검색/조회(retrieval) 문제**)
- AI가 계속 질문을 이어가며 인터뷰를 진행.
- 팁: **"do this, add this"** 같은 지시보다, **문제/목표 지향적으로(problem-oriented) 답하는 것**이 더 좋다 — "내가 해결하려는 건 이거야"라는 식으로.
- 언제든 "나머지는 알아서 채워줘(use your best judgment, fill in the rest)"라고 말해 인터뷰를 종료시킬 수 있음.
- 결과: 여러 페이지 분량의 상세한 **요구사항 문서(텍스트 파일)** 완성.

### 요구사항 문서를 다듬는 반복 과정
- 문서를 열어 읽어보고 **"내가 원하는 걸 제대로 담았는가?"**를 확인.
- 빠진 게 있으면 "나는 이것도 있었으면 좋겠어", "이런 모습이었으면 좋겠어" 등으로 계속 추가·수정.
- 이 과정을 반복하며 문서를 완성해나간다.

### 최종 단계 — 요구사항 문서를 기반으로 빌드 시작
- 완성된 문서를 두고: "이 요구사항 문서를 읽고, 여기 명시된 요구사항을 기반으로 웹 앱을 만들어줘." (또는 그 폴더에서 새 대화를 시작해 동일하게 요청)
- 핵심 철학: **철저한 사양(thorough specification)을 먼저 만들고 나서 빌드하는 것**이, 그때그때 즉흥적으로 요청하며 빌드하는 것보다 훨씬 낫다.

## 예시
```
통합 프롬프트:
"I am completely non-technical. Please do not ask me any technical questions throughout our conversation.
Ask me questions about what I want to build until you have everything you need to write a requirements document.
Ask them one at a time.
Once you have a complete picture, write a very detailed and comprehensive requirements document,
filling in details you can infer and anticipating important needs not explicitly mentioned."
```
후속: "read this requirements document and build a web app based on the requirements that are laid out there."

## 요약
- 빌드를 시작하기 전, **요구사항을 먼저 글로 완전히 써두는 것**이 나중에 "이것도 필요했는데"라는 뒤늦은 요구를 방지한다.
- 오디언스 페르소나(비기술자 설정) + 플립드 인터랙션(AI가 인터뷰) + 요구사항 작성자(문서화) 3가지 패턴을 결합하면, 비전문가도 완성도 높은 요구사항 문서를 만들 수 있다.
- 완성된 문서는 사용자가 직접 검토·보완한 뒤, 그 문서를 기반으로 실제 빌드를 요청하는 것이 즉흥적 빌드보다 훨씬 안정적인 결과를 만든다.
