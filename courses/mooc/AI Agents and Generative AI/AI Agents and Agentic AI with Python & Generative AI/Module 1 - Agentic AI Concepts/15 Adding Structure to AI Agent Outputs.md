# Adding Structure to AI Agent Outputs (에이전트 출력에 구조 부여하기)

## 개요
- 에이전트가 "무엇을 할지"를 **프로그램이 이해하고 실행할 수 있는 형태**로 출력하게 만드는 방법을 다루는 핵심 영상.
- 에이전트는 실제로 컴퓨터에 직접 접근할 수 없다 — **텍스트만 출력**할 수 있을 뿐이며, 그 텍스트를 파싱해서 실제 행동으로 실행하는 것은 우리(전통적 소프트웨어)의 몫이다.

## 내용

### 문제 제기 — 생성형 AI는 너무 "수다스럽다(chatty)"
- 생성형 AI 모델은 매번 조금씩 다른 방식으로, 다양한 설명을 곁들여 응답한다 (비결정적, non-deterministic).
- 예: "리눅스에서 IP 주소 확인하는 Bash 명령어 알려줘"라고 매번 물어봐도, 응답 형식(마크다운 블록 개수, 포함된 설명 등)이 조금씩 달라진다.
- 에이전트가 "결정하고 실행한다"고 말하지만, 실제로는: **에이전트가 결정 → 전통적 소프트웨어가 응답을 파싱 → 그 소프트웨어가 실제 행동을 실행**하는 구조. 에이전트는 컴퓨터에 직접 손을 댈 수 없고, 오직 텍스트만 낼 수 있다.
- 따라서 **일관되게 파싱 가능한 출력 형식**을 만드는 프롬프트 설계가 핵심 과제다.

### AI 환경 인터페이스(AI Environment Interface)
- "환경(environment)"이란 에이전트가 행동을 실행할 대상 컴퓨터(들)를 말한다.
- **환경 인터페이스** = AI와 그것이 할 수 있는 행동 사이의 인터페이스. 응답을 파싱하는 코드를 작성해야 하며, 이를 위해 **응답의 범위를 좁혀(제한된 형식으로) 파싱 가능하게** 만들어야 한다.

### 두 가지 접근법
1. **프롬프트 엔지니어링 + 파싱 (Bare-metal 방식)** — 이번 영상에서 다루는 방법. 어떤 LLM과도 동작하며, 완전한 제어권을 가진다.
2. **함수 호출(Function Calling)을 지원하는 LLM 활용** — 이후 강의에서 다룸. 특별한 기능이 필요하지만 일부 과정을 건너뛸 수 있다.
- 1번을 먼저 배우는 이유: 2번은 특정 LLM의 특수 기능(function calling)이 필요하지만, 1번은 어떤 LLM에도 적용 가능한 "완전 제어" 방식이기 때문.

### 예시 1 — 템플릿 패턴(Template Pattern)으로 행동 출력 형식 고정
- 프롬프트: "문제를 풀어달라고 하면, pickup/use/discard 같은 행동을 취할 수 있다. 항상 정확히 이 형식으로 출력해: `insert action: insert object`"
- **템플릿 패턴(template pattern)**: 플레이스홀더(placeholder)를 주면 LLM이 그 형식을 매우 잘 따른다.
- 예: 사용 가능한 객체 목록(pan, butter, green bean, salt, garlic, spatula)을 주고 "한 번에 하나의 행동만 출력해줘. 이제 풀어야 할 문제를 물어봐줘"라고 지시.
- 사용자가 "cook savory green beans"라고 답하면 → 응답: `Pickup:pan` (일반적인 "레시피 설명"이 아니라 정확히 템플릿을 따른 출력).
- **한계**: 형식은 대체로 따르지만 세부 사항(대소문자 등)은 매번 조금씩 다를 수 있다 — 완벽한 결정론적 출력은 보장되지 않는다.
- 행동 결과를 다시 프롬프트에 넣어주면(예: "handle breaks off pan") → 에이전트가 다음 행동(예: "discard the pan")을 결정 → **이것이 곧 Agent Loop를 사람이 수동으로 시뮬레이션하는 것**. 대화가 길어질수록 프롬프트가 누적되며, 이것이 LLM에게 "기억"을 부여하는 방식([12 Giving Agents Memory](12%20Giving%20Agents%20Memory.md)와 동일한 원리).

### 예시 2 — 함수 호출처럼 보이는 형식 + "추론(reasoning)" 플레이스홀더
- 이번엔 함수처럼 보이는 행동을 정의: `fetch_web_page_text(url)`, `base64_encode(value)` 등 — 프로그램에서 바로 파싱해서 실제 함수 호출로 연결하기 좋은 형태.
- 템플릿에 **"insert your reasoning"** 이라는 플레이스홀더를 추가 — LLM이 수다스럽게 설명하고 싶어하는 부분을 정해진 위치에 몰아넣는 효과적인 트릭. 보통 reasoning을 먼저 쓰게 해서 LLM이 효과적으로 사고한 뒤 행동을 출력하게 한다.
- 예: `var = action(...)` 형태의 의사코드 패턴 사용. "한 번에 하나의 행동, 행동 실행 후 결과를 알려줄게"라고 지시.
- 결과: 수다스러운 설명은 앞쪽 reasoning 부분에 모이고, 그 뒤에 `page_text = fetch_web_page_text(url)` 같은 깔끔한 액션 코드 블록(마크다운으로 구분됨)이 나온다 — **이 액션 마크다운 블록만 파싱하면 프로그램적으로 실행 가능**.

### 예시 3 — Bash/Python 코드 실행까지 가는 극단적 사례
- "Bash 또는 Python 코드를 출력할 수 있다"고 알려주고, 실행 결과(표준출력)를 다시 피드백으로 주는 구조도 가능.
- 예: "내 네트워크에 알 수 없는 기기가 나타났다"는 문제를 주면 → Bash 명령어 출력 → 실행 결과를 다시 입력 → 다음 명령어(예: `nmap`) 출력.
- **경고**: 이렇게 임의 코드를 자동 실행하는 것은 실제로는 위험(risk)이 크다 — 어디까지나 개념을 보여주기 위한 예시.

### 두 번째 접근법 예고 — Function Calling
- 일부 LLM은 함수 목록을 프롬프트로 주면, 어떤 함수를 어떤 인자로 호출할지 **JSON 형태로 직접 반환**해준다.
- 이는 "일관된 출력 형식을 얻기 위한 프롬프트 엔지니어링" 단계를 건너뛰게 해준다 — 하지만 여전히 좋은 프롬프트(추론을 돕는)는 필요하고, 형식 오류가 아예 없어지는 것도 아니다. 상황에 따라 두 접근법 중 선택해서 쓰게 된다. (자세한 내용은 Module 2에서 다룸)

## 예시
> **템플릿 프롬프트 (행동 형식 고정)**
> "Whenever I ask you to solve a problem, you can take these actions: pickup, use, discard... You will always produce your output in this exact format: `insert action: insert object`. You can output one action at a time. After each action, I'll tell you what happened. Now ask me the problem to solve."

> **함수 호출 스타일 + reasoning 플레이스홀더**
> "You will always produce your output in this exact format: `insert your reasoning` then \`\`\`action \n var = action(...) \n \`\`\`. One action at a time; after each action I'll give you the result."

## 요약
- 에이전트는 텍스트만 출력할 수 있고, 실제 실행은 우리가 그 텍스트를 파싱해서 대신 해준다 — 그래서 **일관되게 파싱 가능한 출력 형식**이 핵심 과제.
- **템플릿 패턴**(플레이스홀더 형식 강제) + **reasoning 플레이스홀더**(수다스러운 설명을 정해진 위치에 격리)가 프롬프트 엔지니어링의 핵심 트릭.
- 이 수동 시뮬레이션(행동 → 피드백 → 다음 행동)이 곧 Agent Loop의 원형이며, 대화가 누적되는 것이 LLM에게 "기억"을 부여하는 방식이다.
- 구조화된 출력을 얻는 두 방법: ① 프롬프트 엔지니어링 + 파싱(모든 LLM에 적용 가능, 완전한 제어), ② Function Calling 지원 LLM 활용(일부 과정 생략 가능하나 만능은 아님).
