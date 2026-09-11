# Phase 3 — 과제 정의와 계획 분리

- 목표: 계획 단계를 실행에서 물리적으로 분리하고, 승인 전에는 코드를 못 쓰게 만드는 루프를 몸에 익힌다.
- 분량: 약 8시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 목표 · 컨텍스트 · 제약 · **완료 기준** 네 요소를 갖춘 과제 지시문을 쓴다
- Explore → Plan → Implement → Commit 4단계를 적용하고, **계획을 건너뛸 때**를 판별한다
- 에이전트에게 **나를 인터뷰시켜** 스펙을 만들고, 깨끗한 새 세션에서 그 스펙을 실행한다
- 생성된 계획을 직접 편집·주석하고 반영시킨다
- 한 번에 하나씩 시킨다 — 다섯 가지를 한 프롬프트에 넣지 않는다
- **3회 규칙**을 지킨다 — 같은 문제로 2~3번 교정에 실패하면 세션을 버린다

> 📌 **이 Phase는 프롬프트 기교를 배우는 곳이 아니다.** 2026년 기준으로 Anthropic·OpenAI·Cursor 공식 문서가 모두 "지속 규칙을 프롬프트에 매번 반복해 넣는 것"을 **명시적 안티패턴**으로 적는다. 무게중심은 이미 프롬프트 → 지속 설정 자산으로 옮겨 갔다("마법의 프롬프트는 없다"). 그래서 이 Phase는 **과제를 정의하는 능력**만 다루고, 반복되는 것은 전부 [Phase 4](04%20Phase%204%20-%20재사용%20자산을%20만든다.md)의 스킬·규칙으로 넘긴다.

> **선행 확인**: [스펙 주도 개발 로드맵](../스펙%20주도%20개발%20로드맵/README.md)의 개념 트랙 15강을 먼저 본다. 용어가 흐릿하면 아래 3강만 다시 펼친다. 새로 볼 필요는 없다.
>
> - [SDD / 03 Workflow Overview.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/03%20Workflow%20Overview.md)
> - [SDD / 06 Feature Specification.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/06%20Feature%20Specification.md)
> - [SDD / 07 Feature Implementation.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/07%20Feature%20Implementation.md)

## 3-A. 프롬프트를 과제 지시문으로 쓴다

메인: Coding with AI, module 3

- [ ] [01 Why Prototype.md](../../courses/udemy/Coding%20with%20AI/module%203/01%20Why%20Prototype.md)
- [ ] [02 How to Prompt — Good vs Bad Prompts.md](../../courses/udemy/Coding%20with%20AI/module%203/02%20How%20to%20Prompt%20—%20Good%20vs%20Bad%20Prompts.md) — **이 소절의 메인**
- [ ] [03 Prompting Practice — Landing Page Assignment.md](../../courses/udemy/Coding%20with%20AI/module%203/03%20Prompting%20Practice%20—%20Landing%20Page%20Assignment.md) — 직접 해 본다
- [ ] [05 Reviewing Generated Code.md](../../courses/udemy/Coding%20with%20AI/module%203/05%20Reviewing%20Generated%20Code.md) — [Phase 5](05%20Phase%205%20-%20검증%20게이트를%20건다.md) 예고편
- [ ] [06 Iterating on the Prototype.md](../../courses/udemy/Coding%20with%20AI/module%203/06%20Iterating%20on%20the%20Prototype.md)
- [ ] [07 Prototyping vs Production — Technical Debt.md](../../courses/udemy/Coding%20with%20AI/module%203/07%20Prototyping%20vs%20Production%20—%20Technical%20Debt.md) — **무엇을 맡기고 무엇을 안 맡길지의 재료**
- [ ] [04 Prototyping with V0 — Markdown Notes App.md](../../courses/udemy/Coding%20with%20AI/module%203/04%20Prototyping%20with%20V0%20—%20Markdown%20Notes%20App.md) — 도구 특정. **건너뛰어도 된다**

함께 보기: Mastering Google Antigravity, Module 7 (프롬프트 설계를 별도 모듈로 다룬다)

- [ ] [01 What Is Prompt Engineering.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%207%20-%20Master%20Prompt%20Engineering/01%20What%20Is%20Prompt%20Engineering.md)
- [ ] [02 Common Mistakes and Challenges.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%207%20-%20Master%20Prompt%20Engineering/02%20Common%20Mistakes%20and%20Challenges.md) — **실수 목록이 더 유용하다**
- [ ] [03 Best Practices for Writing Prompts.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%207%20-%20Master%20Prompt%20Engineering/03%20Best%20Practices%20for%20Writing%20Prompts.md)
- [ ] [04 Advanced Prompting Techniques.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%207%20-%20Master%20Prompt%20Engineering/04%20Advanced%20Prompting%20Techniques.md) — 가볍게. 위 📌 참조
- [ ] [05 Role-Based Prompts.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%207%20-%20Master%20Prompt%20Engineering/05%20Role-Based%20Prompts.md) — ⚠️ 역할 부여를 **역할극으로 착각하지 않는다.** [Phase 4](04%20Phase%204%20-%20재사용%20자산을%20만든다.md)에서 보듯 서브에이전트의 본질은 역할극이 아니라 컨텍스트 격리다
- [ ] [Liftoff / Module 4 / 03 Prompt engineering.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Liftoff%20with%20Google%20Antigravity%20-%20Build%20a%20Video%20Game%20with%20AI/Module%204%20-%20Build%20a%20video%20game/03%20Prompt%20engineering.md) — **`who/what/when/where/why/how` 6요소 틀.** 짧고 실용적

## 3-B. 계획을 실행에서 분리한다

메인: Mastering Google Antigravity, Module 4의 계획 구간

- [ ] [01 Introduction to the Calendar App Project.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%204%20-%20Your%20First%20Antigravity%20Project%20-%20Calendar%20App/01%20Introduction%20to%20the%20Calendar%20App%20Project.md)
- [ ] [02 Calendar App Overview.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%204%20-%20Your%20First%20Antigravity%20Project%20-%20Calendar%20App/02%20Calendar%20App%20Overview.md)
- [ ] [03 Calendar App Development Approaches.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%204%20-%20Your%20First%20Antigravity%20Project%20-%20Calendar%20App/03%20Calendar%20App%20Development%20Approaches.md) — **접근법을 비교한다는 발상 자체가 핵심**
- [ ] [04 Prompts and Materials for Calendar App.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%204%20-%20Your%20First%20Antigravity%20Project%20-%20Calendar%20App/04%20Prompts%20and%20Materials%20for%20Calendar%20App.md)
- [ ] [05 Create Implementation Plan.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%204%20-%20Your%20First%20Antigravity%20Project%20-%20Calendar%20App/05%20Create%20Implementation%20Plan.md) — **계획을 산출물로 만든다.** Antigravity는 이걸 Implementation Plan artifact로 물화하고 인라인 코멘트를 받는다

함께 보기: 계획 문서를 프로젝트 컨텍스트로 굳히기

- [ ] [Coding with AI / module 5 / 01 Planning the Project — Project Spec.md](../../courses/udemy/Coding%20with%20AI/module%205/01%20Planning%20the%20Project%20—%20Project%20Spec.md) — 대화정리본 있음
- [ ] [Coding with AI / module 5 / 05 Feature Workflow and Current Feature.md](../../courses/udemy/Coding%20with%20AI/module%205/05%20Feature%20Workflow%20and%20Current%20Feature.md) — **기능 단위 워크플로.** 대화정리본 있음
- [ ] [Matt Pocock Skills / 2026-07-30 wayfinder Nothing is too big to plan anymore.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-07-30%20wayfinder%20Nothing%20is%20too%20big%20to%20plan%20anymore.md) — 큰 작업의 계획
- [ ] [Matt Pocock Skills / 2026-07-23 Dont waste time on specs - prototype instead.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-07-23%20Dont%20waste%20time%20on%20specs%20-%20prototype%20instead.md) — **반대 입장.** 언제 스펙이 낭비인지. 위와 함께 보고 자기 기준을 만든다
- [ ] [Tech Bridge / 2026-08-06 이 스킬이면 어떤 프로젝트든 계획할 수 있습니다.md](../../courses/youtube/Tech%20Bridge/2026-08-06%20이%20스킬이면%20어떤%20프로젝트든%20계획할%20수%20있습니다.md)
- [ ] [Tech Bridge / 2026-07-20 클로드 코드로 기획부터 자동 루프 실행까지 40분 만에 끝내는 법.md](../../courses/youtube/Tech%20Bridge/2026-07-20%20클로드%20코드로%20기획부터%20자동%20루프%20실행까지%2040분%20만에%20끝내는%20법.md)

### 계획을 건너뛰는 기준

**diff를 한 문장으로 설명할 수 있으면 계획하지 않는다.** 계획 모드는 공짜가 아니라 왕복 비용이다. 반대로 파일 3개 이상이 얽히거나 어디를 고칠지 모르겠으면 반드시 계획을 먼저 받는다.

계획이 나오면 **승인 전에 코드를 못 쓰게 한다.** 나쁜 계획을 고치는 값이 나쁜 코드를 고치는 값보다 훨씬 싸다. 계획 문서에 직접 주석을 달아 1~6회 왕복하는 것이 정상이다.

## 3-C. 막혔을 때 멈추는 규칙

이 소절은 강의가 아니라 **규칙을 정하는 것**이 목적이다. 자세한 것은 [부록 13](13%20부록%20-%20실패%20패턴과%20중단%20규칙.md)에 있고, 여기서는 하나만 몸에 붙인다.

**3회 규칙** — 같은 문제로 2~3번 교정에 실패하면 프롬프트를 더 고치지 말고 **세션을 버린다.** 배운 것을 반영한 새 프롬프트로 새 세션을 열거나, 다른 에이전트에 재배정한다. 여러 출처가 독립적으로 같은 결론에 도달한 몇 안 되는 규칙이다.

- [ ] [Tech Bridge / 2026-08-22 Unlazy 스킬의 완료 검증 - 작업 분해와 증거 기반 게이트.md](../../courses/youtube/Tech%20Bridge/2026-08-22%20Unlazy%20스킬의%20완료%20검증%20-%20작업%20분해와%20증거%20기반%20게이트.md) — 작업 분해 기준

## 산출물

두 가지다.

1. **기능 1건의 과제 지시문** — 목표·컨텍스트·제약·완료 기준 네 요소가 다 있는 것. 완료 기준이 "동작하면 됨" 수준이면 다시 쓴다
2. **승인된 계획 문서 1건** — 에이전트가 만들고, 내가 직접 주석을 달아 최소 1회 이상 왕복한 흔적이 남은 것. 이 계획으로 [Phase 8](08%20Phase%208%20-%20실제%20앱을%20배포한다.md)에서 실제 구현에 들어간다

## 다음 단계

→ [04 Phase 4 - 재사용 자산을 만든다](04%20Phase%204%20-%20재사용%20자산을%20만든다.md)
