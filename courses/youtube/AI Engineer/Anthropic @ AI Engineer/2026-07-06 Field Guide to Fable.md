# Field Guide to Fable

## 개요
- 업로드일: 2026-07-06
- 원본: https://www.youtube.com/watch?v=9fubhllmsBU
- 재생목록: Anthropic @ AI Engineer
- 채널: AI Engineer
- 발표자: Thariq Shihipar, Anthropic
- 핵심 주제: 더 강한 agentic coding model을 제대로 쓰려면 모델을 unhobble하고, 자신의 unknown을 발견하며, 더 야심찬 작업 방식을 받아들여야 한다.

## 내용
### unhobbling Claude
발표자는 모델이 설계된 기계라기보다 길러지는 시스템에 가깝다고 설명한다. 따라서 모델을 가두는 harness와 prompt는 우리가 모델을 얼마나 이해하느냐의 함수다.

Claude Code가 Pokemon 이름 문제를 직접 암기하지 않고, 도구를 사용해 데이터를 가져오고 스크립트로 필터링하는 사례는 capability overhang을 보여준다. 모델은 단순 지식보다 도구와 환경이 주어졌을 때 갑자기 더 큰 능력을 드러낼 수 있다.

### prompt와 system prompt도 모델에 맞춰 바뀐다
이전 모델은 많은 예시와 강한 제약이 필요했지만, 더 강한 모델에서는 예시가 오히려 상상력을 제한할 수 있다. 발표자는 Claude Code의 system prompt를 크게 줄였고, "하지 말라"는 제약보다 필요한 context를 제공하는 방식으로 이동했다고 설명한다.

### unknown을 찾는 것이 병목이 된다
Fable 같은 모델은 넓은 영역을 탐색할 수 있기 때문에, 사용자가 map과 territory의 차이를 잘 파악하지 못하면 수많은 decision point에서 모델이 임의 판단을 하게 된다.

발표자는 known knowns, known unknowns, unknown knowns, unknown unknowns의 프레임으로 문제를 본다. 좋은 prompt는 단순히 원하는 것을 쓰는 것이 아니라, 모델이 맞닥뜨릴 unknown을 줄이거나 기록하게 하는 것이다.

### Fable과 함께 unknown을 찾는 방법
- blind spot pass: 코드베이스나 도메인의 숨은 함정을 먼저 조사하게 한다.
- brainstorm/prototype: 여러 디자인이나 접근안을 만들어 사용자가 반응할 수 있게 한다.
- interview: architecture를 바꿀 수 있는 질문을 우선해서 묻게 한다.
- references: 다른 코드, HTML mockup, 기존 시스템을 map으로 제공한다.
- implementation notes: 실행 중 마주친 unknown과 deviation을 기록하게 한다.
- quiz: 작업 후 사용자가 내용을 설명할 수 있는지 확인하게 한다.

### grief와 unreasonable ambition
발표자는 LLM 이전의 코딩 방식에 대한 애정과, 동시에 다시 돌아갈 수 없다는 감각을 함께 말한다. 더 중요한 결론은 tradeoff를 너무 빨리 받아들이지 말고, agent가 가능한 범위를 다시 계산하게 만들라는 것이다.

## 예시
### blind spot pass prompt pattern
새 인증 provider를 추가하기 전에, 모델에게 auth module, git diff, 관련 Slack/문서 맥락을 살펴보고 prompt에 반영해야 할 unknown unknowns를 찾아달라고 요청한다.

### design prototype prompt pattern
디자인 결정을 말로 설명하기 어렵다면, 서로 크게 다른 HTML mockup 여러 개를 만들게 한 뒤 사용자가 반응하면서 unknown knowns를 드러낸다.

## 요약
- 강한 모델은 도구와 환경을 만나면 새로운 capability overhang을 드러낸다.
- 더 강한 모델일수록 과도한 예시와 제약이 오히려 모델을 제한할 수 있다.
- 좋은 agent workflow의 병목은 모델 능력보다 사용자가 unknown을 발견하고 map을 제공하는 능력일 수 있다.
- "합리적인 tradeoff"를 너무 빨리 받아들이지 말고, agent로 현실이 실제로 어디서 막히는지 확인해야 한다.
