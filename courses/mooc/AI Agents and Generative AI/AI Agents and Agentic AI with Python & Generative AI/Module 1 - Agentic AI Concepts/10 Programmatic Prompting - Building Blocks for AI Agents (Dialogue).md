# Programmatic Prompting: Building Blocks for AI Agents (Dialogue)

## 개요
- MOOC Coach와의 **대화형(Dialogue) 복습 세션**. 앞서 배운 [06](06%20Programmatic%20Prompting%20for%20Agents.md)~[09](09%20Programmatic%20Prompting%20for%20Agents%20III.md) 내용(프로그래밍적 프롬프팅, 메시지 역할, 메모리/구조화 정보 관리)을 정리하고 확인하는 용도.
- AI 코치가 진행하는 실시간 대화이므로 매번 내용이 달라질 수 있어 고정된 "정답 내용"은 없음 — 아래는 대화 시작 전 제공되는 학습 목표(agenda)이다.

## 내용

### 다룰 내용 (커버리지)
1. **수동 채팅 → 프로그래밍적 프롬프팅으로의 전환**
   - 코드로 프롬프트를 프로그래밍적으로 보내는 방식으로의 전환, 그리고 이 자동화가 어떻게 Agent Loop의 기반이 되는지.
2. **메시지 역할(role)의 힘**
   - system / user / assistant 역할이 어떻게 함께 작동하는지, 특히 **system 메시지가 어떻게 에이전트의 행동을 "프로그래밍"하는지**에 초점.
3. **메모리 관리와 구조화된 정보**
   - 반복(iteration) 사이에 LLM이 무엇을 기억할지 통제하는 방법과, API/실제 시스템과 상호작용할 수 있도록 JSON 같은 구조화된 정보를 전달하는 방법.

### 참고
- Dialogue는 AI가 진행하므로, 실수가 있을 수 있어 내용을 검증하며 진행할 것. 개인정보/민감정보는 공유하지 않는다.
- 막히면 우측 상단 "I'm stuck"을 눌러 힌트를 받을 수 있음.

## 요약
- 이 Dialogue는 새로운 개념을 배우는 자리가 아니라, [06](06%20Programmatic%20Prompting%20for%20Agents.md)~[09](09%20Programmatic%20Prompting%20for%20Agents%20III.md)에서 배운 **프로그래밍적 프롬프팅·메시지 역할·메모리 관리** 개념을 대화를 통해 스스로 설명해보며 정리하는 복습 세션이다.
