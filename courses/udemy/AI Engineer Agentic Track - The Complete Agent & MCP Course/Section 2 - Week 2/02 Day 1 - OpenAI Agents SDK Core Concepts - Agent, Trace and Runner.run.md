# Day 1 - OpenAI Agents SDK Core Concepts: Agent, Trace and Runner.run

## 개요
- Agent·trace·Runner.run의 역할과 에이전트 간 협업 방식을 개관한다.
- 출처: [원본 강의](https://www.udemy.com/course/the-complete-agentic-ai-engineering-course/learn/lecture/49820365#overview)의 실제 자막 확인·정리 (2026-09-07).

## 내용
### Agent가 표현하는 것
Agent는 모델, 시스템 지시(`instructions`), 사용 가능한 도구를 묶는다. 애플리케이션 전체가 하나의 Agent일 수도 있고 여러 Agent의 협업일 수도 있다. 우선 하나로 시작하고 측정한 개선 효과에 따라 나누라는 원칙을 다시 강조한다.

### 협업과 가드레일
협업 방식으로 agents as tools와 handoffs를 소개한다. 전자는 다른 에이전트를 도구처럼 호출하는 방식, 후자는 제어를 넘기는 방식이다. 가드레일은 입력·출력에 검사를 두는 기능이며 필요하면 Python 코드로 직접 구현할 수도 있다.

### 실행의 세 단계
Agent 인스턴스를 만든다. `with trace(...)`로 실행을 의미 있는 이름 아래 묶는다. `await Runner.run(agent, input)`으로 한 번의 애플리케이션 수준 작업을 실행한다. 이 한 번의 실행 안에서 여러 모델 호출과 도구 사용이 일어날 수 있다.

### 학습 중 코딩 도우미 활용
질문과 지시를 구체적으로 주고 작은 단위로 결과를 확인한다. 생성한 코드가 어떤 API를 쓰는지, 요구한 결과를 실제로 내는지 근거를 확인한다. 수업의 목적은 코드를 대신 생성하는 데 그치지 않고 자신이 이해하고 책임질 수 있는 에이전트를 만드는 것이다.

## 예시
```text
Agent: 어떤 모델이 어떤 지시와 도구로 일할지 정의
trace: 실행 묶음에 이름을 붙여 관찰
Runner.run: 그 설정으로 목표를 수행하는 루프 실행
```

Runner를 한 번 호출했다고 LLM도 반드시 한 번만 호출되는 것은 아니다.

## 요약
- Agent는 실행 설정이고 Runner는 루프를 수행한다.
- trace는 여러 내부 동작을 한 작업으로 추적하도록 돕는다.
- 협업 구조는 필요성과 측정 결과에 따라 선택한다.
