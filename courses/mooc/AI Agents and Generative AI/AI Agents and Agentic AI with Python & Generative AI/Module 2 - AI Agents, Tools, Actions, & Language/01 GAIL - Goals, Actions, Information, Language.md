# GAIL — Goals, Actions, Information, Language

## 개요
- 좋은 에이전트 프롬프트를 **"그냥 텍스트 덩어리를 계속 늘리는 것"이 아니라 체계적으로 설계**하기 위한 멘탈 프레임워크 **GAIL**을 소개하는 영상.
- 비유: 새로 입사한 인턴에게 형편없는 지시를 내리면 반드시 실패한다 — 프롬프트는 곧 에이전트에게 주는 "업무 지시서"이며, Agent Loop가 잘 돌아가려면 좋은 프롬프트가 필수.

## 내용

### GAIL 프레임워크 — 4가지 구성 요소
1. **Goals/Instructions (목표/지시)**
   - 에이전트가 무엇을 해야 하는지, 어떤 페르소나(persona)를 취해야 하는지.
   - **Rules(규칙)**: 할 수 있는 것과 할 수 없는 것.
   - **Process(프로세스)**: 항상 따라야 하는 절차적 단계. 예: "먼저 이미 등록된 경비 목록을 확인 → 이미 등록되어 있는지 판단 → 이미 있다면 사용자에게 그래도 추가할지 물어봐라." (인턴에게 "무작정 경비를 등록해"라고 했다가 중복 등록 문제를 겪은 뒤에야 프로세스를 알려주는 것과 같은 이치)
   - 이 부분에서 에이전트의 행동(behavior)을 정의하고, 무엇을 어떤 순서로 항상 해야 하는지 규정한다.
2. **Actions (행동)**
   - 에이전트(인턴)가 취할 수 있는 것들 — 컴퓨터 시스템/환경과 상호작용하는 방법.
3. **Information (정보)**
   - 행동의 결과로 얻는 피드백, 작업 완료에 필요한 문서 등 — **보통 일시적(ephemeral)이고 현재 작업에 종속적**인 정보.
   - 초기에는 우리가 입력한 정보만 가지고 다음 행동을 결정하지만, 행동을 실행할수록 다른 행동의 결과나 시스템 업데이트 등이 누적되며 정보가 쌓인다.
4. **Language (언어)**
   - 에이전트가 우리와 소통하는 방식/형식 — 앞서 배운 출력 구조화([Module 1 - 15](../Module%201%20-%20Agentic%20AI%20Concepts/15%20Adding%20Structure%20to%20AI%20Agent%20Outputs.md))가 여기에 해당. Function calling을 쓰면 이 언어 부분이 단순해질 수 있다.

### 예시 에이전트 프롬프트로 본 GAIL
> "You are Action Agent, a helpful AI assistant. Your goal is to accomplish the task given by the user. If you have enough information to directly respond to the user's request, you should do so. If you need to complete tasks, you can use the provided tools to help you. Whenever you're completely done with the task, you should tell the user the result and terminate the conversation. The available tools are: [...]. Always respond in the following format: Stop and think step-by-step [insert a rich description of your thoughts], then [action format]."

- **페르소나** = "You are Action Agent" → Goals/Instructions의 일부
- **목표** = "Your goal is to accomplish the task..." → Goals
- **프로세스** = 언제 도구를 쓸지, 언제 종료할지 지침 → Goals
- **도구 목록** = Actions
- **응답 형식(step-by-step reasoning + action)** = Language
- → 이 예시 프롬프트에는 G, A, L은 명확히 있지만 **I(Information)는 없다** — Information은 보통 대화가 진행되며 축적되는 것이기 때문.

### 메시지 role과의 매핑
- 프롬프트는 여러 메시지(role이 다른)로 나뉜다.
- **G, A, L (목표/행동목록/언어형식) → 대체로 system 메시지**로 제공 — 세션 내내 항상 지켜야 할 "기본 규칙(ground rules)".
- **I (정보, 피드백/입력) → user 메시지**로 제공.
- (프롬프트 안에는 물론 에이전트가 과거에 내린 결정을 담은 assistant 메시지도 포함되지만 이번 슬라이드에는 표현되지 않음.)

## 예시
> 경비 등록 에이전트의 Process 규칙 예시:
> 1. 이미 등록된 경비 목록을 먼저 확인한다.
> 2. 이미 등록되어 있는지 판단한다.
> 3. 이미 있다면 사용자에게 "그래도 추가하시겠습니까?"라고 물어본다.

## 요약
- **GAIL = Goals(목표/지시/규칙/프로세스) + Actions(행동) + Information(정보/피드백) + Language(소통 형식)** — 에이전트 프롬프트를 체계적으로 설계하기 위한 멘탈 프레임워크.
- 매핑: G·A·L은 대개 **system 메시지**(세션 내내 유지되는 기본 규칙), I는 **user 메시지**(그때그때 달라지는 정보/피드백)로 들어간다.
- 이 프레임워크는 앞으로 에이전트 프롬프트를 만들 때마다 "이 내용이 목표인가, 행동인가, 정보인가, 언어(형식)인가"를 점검하는 체크리스트 역할을 한다.
