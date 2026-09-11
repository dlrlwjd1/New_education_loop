# Planning workflows

## 개요
- Module 5는 **고도로 자율적인 에이전트**를 만드는 디자인 패턴을 다룬다. 단계 순서를 미리 하드코딩하지 않고, **에이전트가 스스로 어떤 단계를 밟을지 결정**한다.
- 두 가지 패턴: **Planning(계획)** 과 **Multi-agent(다중 에이전트)** 시스템.
- 이번 영상은 **Planning 디자인 패턴**.

## 내용

### Planning 패턴이란
- LLM에게 **여러 도구(tool) 목록**을 주고, 사용자 요청을 처리할 **단계별 계획(step-by-step plan)** 을 스스로 세우게 한 뒤, 각 단계를 차례로 실행시키는 것.
- 개발자가 **도구 호출 순서를 미리 정하지 않아도** 되는 것이 핵심 장점. 요청이 달라지면 LLM이 다른 계획을 세운다.

### 동작 방식
```
[사용자 요청] + [도구 목록]
      ↓  (LLM에게 "단계별 계획을 반환하라" 프롬프트)
[계획: step 1 → step 2 → step 3]
      ↓
step1 지시 + 배경 컨텍스트 → LLM → 도구 호출 → step1 출력
      ↓
step1 출력 + step2 지시 → LLM → step2 출력
      ↓
step2 출력 + step3 지시 → LLM → step3 출력
      ↓
최종 출력 생성 → 사용자에게 답변
```
- 슬라이드는 단순화된 것 — 실제 LLM이 쓰는 계획은 한 줄보다 훨씬 상세하다.

## 예시

### 예시 1: 선글라스 소매점 고객 서비스 에이전트
질문: "$100 이하의 둥근(round) 선글라스 재고 있나요?"

제공 도구: `get item descriptions`, `check inventory`, `process item returns`, `get item price`, `check past transactions`, `process item sale` 등

LLM이 세운 계획:
1. `get item descriptions` → 둥근 선글라스 찾기
2. `check inventory` → 재고 확인
3. `get item price` → 재고 있는 것 중 $100 이하 확인

- 다른 요청("금테 안경은 반품하고 메탈테는 유지")이 오면 → `get item descriptions` + `check past transactions` + `process item return`으로 **다른 계획**을 자동 생성.

### 예시 2: 이메일 어시스턴트
요청: "뉴욕의 Bob이 보낸 초대 이메일에 참석하겠다고 답하고, 그 메일은 보관(archive)해줘"

제공 도구: `search email`, `move email`, `delete email`, `send email`

LLM 계획:
1. `search email` → Bob의 저녁/뉴욕 언급 메일 찾기
2. `send email` → 참석 확인 답장 작성·전송
3. `move email` → 해당 메일을 archive 폴더로 이동

## 실무 현황과 한계
- **고도로 에이전틱한 코딩 시스템**에서 이미 성공적으로 사용 중 (복잡한 앱을 컴포넌트별 체크리스트로 계획해 하나씩 구현).
- 그 외 분야에서는 아직 **실험적**이고 채택이 늘어나는 중.
- 한계: **제어가 어렵다** — 런타임에 LLM이 어떤 계획을 세울지 개발자가 미리 알 수 없다.

## 요약
- Planning 패턴 = LLM이 스스로 **계획을 세우고 → 단계별로 실행**.
- 도구 호출 순서를 하드코딩하지 않아도 폭넓은 작업 수행 가능.
- 코딩 에이전트에서 특히 잘 작동, 다른 분야는 성장 중. 제어 난이도가 트레이드오프.

## 다음 주제
- 계획이 실제로 어떤 문자열/구조인지, LLM이 어떻게 이어붙여 실행하는지 심화 → Creating and executing LLM plans
