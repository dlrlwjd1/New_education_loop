# Beyond the Harness - A Journey Towards Adaptative Engineering

## 개요
- 원본: https://www.youtube.com/watch?v=qdZzND79mcg
- 채널: AI Engineer
- 발표자: Rajiv Chandegra, Annicha Labs
- 핵심 주제: 고정된 harness를 미리 설계하는 방식에서, 문제 환경에 따라 harness가 실행 중 emergent하게 형성되는 adaptive engineering으로 이동해야 한다는 철학적 제안

## 내용
### 현재 AI engineering은 fixed harness 중심이다
현대의 AI engineering은 Claude Code, Codex, Cursor, Pydantic AI, LangChain 같은 harness를 선택하거나 설계한 뒤 agent를 그 안에서 움직이게 한다. system prompt, `AGENTS.md`, tool, role, memory, sequencing, loop가 대부분 실행 전에 정해진다.

이 방식은 안정적이고 예측 가능하며, 많은 engineering 문제에 적합하다. 발표자는 이를 factory model로 부른다.

### fixed harness의 한계
모델이 빠르게 강해지면 오늘의 scaffolding이 금방 낡을 수 있다. 또한 AI가 화면 안의 software 문제를 넘어 다중 agent, 다중 인간, 여러 기관, 물리 세계와 접촉하는 문제로 확장되면, 환경이 계속 바뀌기 때문에 고정 구조가 brittle해진다.

### complicated problem과 complex problem의 구분
복잡해 보이지만 parts가 안정적이고 분석 가능한 문제는 complicated problem이다. jumbo jet이나 clock 같은 시스템은 어렵지만 쪼개고 분석하고 계획할 수 있다.

반면 market, organization, flock of birds 같은 complex system은 구성 요소들이 서로 적응하고 계속 바뀐다. 이런 문제는 분석과 계획만으로 다루기 어렵고, probe, sense, respond가 필요하다.

### adaptive engineering의 정의
adaptive engineering은 harness를 사전에 완전히 지정하는 것이 아니라, agent 간 상호작용에서 harness가 실행 중 형성되고 안정화되고 다시 바뀌도록 constraint를 설계하는 discipline으로 제시된다.

여기서 harness는 input이 아니라 ongoing output이다. engineer는 역할과 순서를 직접 지정하는 사람이 아니라, agent들이 어떤 속도로 연결되고, 어떤 목표로 결속하고, 어떤 guardrail 안에서 움직일지 constraint를 조정하는 사람이 된다.

### horizontal intelligence
발표자는 개별 agent를 더 똑똑하게 만드는 vertical intelligence와, 여러 agent가 어떻게 조율되는지를 다루는 horizontal intelligence를 구분한다. adaptive engineering의 핵심은 후자에 있다.

## 예시
### emergent multi-agent harness
- agent들이 처음에는 거의 동일한 capability를 가진다.
- 상호작용과 환경 압력 속에서 작은 차이가 증폭된다.
- agent들이 서로 다른 niche로 specialization한다.
- cluster, boundary, protocol, norm이 생긴다.
- 중앙 governor 없이 governance가 emergent하게 형성된다.

### engineer가 조정할 constraint
- agent를 더 열어둘지, 더 강하게 guardrail로 묶을지
- 목표에 수렴하도록 reward를 줄지, 범위를 벗어나면 cost를 줄지
- interaction과 coupling의 속도를 빠르게 할지 느리게 할지

## 요약
- fixed harness는 예측 가능한 engineering 문제에는 매우 효과적이다.
- AI가 real-world complex system과 접촉하면 harness 자체가 실행 중 적응해야 할 수 있다.
- adaptive engineering은 agent를 방치하는 것이 아니라, emergent order가 생기도록 constraint를 설계하는 일이다.
- 주요 위험은 drift, monoculture, legibility collapse, runtime predictability 상실이다.
