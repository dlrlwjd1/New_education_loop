# Overview of the GAME Framework — 에이전트 설계를 위한 4가지 추상화

## 개요
- Agent Loop([Module 1 - 03](../Module%201%20-%20Agentic%20AI%20Concepts/03%20The%20Agent%20Loop.md))에서 실제로 일어나는 일들을 한 걸음 물러서서 바라보고, **에이전트를 설계하고 코드를 구조화하는 데 쓸 수 있는 추상화**로 정리한 것이 **GAME 프레임워크**다.

## 내용

### Agent Loop 복습 — 루프에서 실제로 일어나는 일
- 매 스텝마다: **다음에 무엇을 할지 결정** (프롬프트를 구성해 다음 행동을 결정하게 함) → 이 결정은 **목표/지시(goals/instructions)**를 보고 이루어짐 → 그 행동을 **환경(environment)**에서 실행 → 결과를 받음 → 그 결과를 **메모리(memory)**에 저장 → 루프백.
- 환경(environment)이란 행동이 실제로 실행되는 곳 — 우리가 실행 중인 프로세스, Python 코드, 클라우드에서의 작업, 서드파티 시스템의 API 호출 등 다양할 수 있다. **환경이 무엇이든 루프의 핵심 아이디어는 동일하다.**

### GAME = Goals, Actions, Memory, Environment
에이전트를 구성하는 4가지 요소:
1. **Goals (목표/지시)** — 에이전트가 따르는 목표/지시사항. ([Module 2의 GAIL](../Module%202%20-%20AI%20Agents%2C%20Tools%2C%20Actions%2C%20%26%20Language/01%20GAIL%20-%20Goals%2C%20Actions%2C%20Information%2C%20Language.md)에서 다룬 goals/rules/process를 포괄)
2. **Actions (행동)** — 그 목표를 달성하기 위해 취할 수 있는 행동들.
3. **Memory (메모리)** — 과거 행동의 결과를 보고 무슨 일이 있었는지 기억하게 해주는 것.
4. **Environment (환경)** — 그 행동들을 실행할 대상 환경.

### 왜 이 4가지로 나누면 유용한가 — 재사용성(reusability)
- 이 4가지를 **기본 추상화(abstraction)**로 사용하면, 에이전트 설계뿐 아니라 **코드 구현을 위한 프레임워크**로도 유용하다.
- 예시 1 — **환경(Environment)을 바꿔 재사용**:
  - Actions: "내 캘린더 가용 시간 조회", "회의 초대 생성", "이메일 초안 작성" 등은 그대로 두고,
  - Environment만 Google(Google Calendar/Gmail) ↔ Office 365(Outlook Calendar/Outlook Mail)로 바꿔서 **같은 에이전트를 다른 환경에 재사용**할 수 있다. Goals/Actions/Memory(즉 "무엇을 하는가")는 동일하지만, 그것을 **어떻게 구현·실행하는지**만 환경에 따라 달라진다.
- 예시 2 — **목표(Goals)만 바꿔 다른 행동 유도**:
  - Actions/Memory는 동일(가용성 확인, 이메일 초안 작성 등)하지만,
  - 한 에이전트는 "회의 요청이 오면 곧바로 초대를 만들어 이메일을 보내라"는 목표를 갖고,
  - 다른 에이전트는 "가용성을 확인한 뒤 사용자에게 옵션을 이메일로 알려줘라 (자동으로 예약하지 말고, 사용자에게 알리는 것이 목표)"라는 다른 목표를 갖게 할 수 있다.
  - → **목표(Goals)만 바꿔도 완전히 다른 동작의 에이전트**가 된다.

### 실전 팁 — 대화(conversation)로 빠르게 프로토타이핑하기
- 에이전트를 설계할 때는 **ChatGPT나 Claude 같은 도구와의 대화형 상호작용에서 빠르게 실험**해보는 것을 권장한다.
- 도구 이름(tool naming)을 다르게 바꿔가며 그 효과를 직접 관찰해보는 것이 좋은 시작점.

## 요약
- **GAME = Goals(목표) + Actions(행동) + Memory(메모리) + Environment(환경)** — 에이전트를 설계·구현하는 데 쓰는 4가지 핵심 추상화.
- 이 네 가지를 분리해서 생각하면, **환경만 바꿔 재사용**하거나 **목표만 바꿔 다른 동작을 유도**하는 등 모듈화된 설계가 가능해진다.
- 다음 자료들에서 이 프레임워크를 실제 설계([02](02%20Designing%20AI%20Agents%20with%20GAME.md))와 코드 구현([07](07%20Implementing%20GAME%20in%20Code.md))으로 구체화한다.
