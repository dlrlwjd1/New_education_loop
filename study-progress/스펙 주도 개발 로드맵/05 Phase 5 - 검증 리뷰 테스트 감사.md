# Phase 5 — 검증: 리뷰·테스트·감사

- 목표: 에이전트가 만든 코드를 **다 읽지 않고도 믿을 수 있는 근거**를 만든다. 리뷰·테스트·감사 세 층을 갖춘다.
- 분량: 약 7~8시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 명세와 구현 결과를 대조하는 리뷰를 할 수 있다.
- 「인지 부채(cognitive debt)」와 드리프트가 무엇인지 설명할 수 있다.
- 테스트를 기능 워크플로의 일부로 넣을 수 있다.
- 서브에이전트에게 감사(audit)를 맡기고 그 결과를 판단할 수 있다.
- 브라우저 자동화로 실제 동작을 확인할 수 있다.
- **리뷰를 없애면 무슨 일이 나는지** 근거를 갖고 설명할 수 있다.

> **이 Phase가 SDD의 성패를 가른다.** 명세를 쓰는 이유는 결국 「나온 결과를 명세와 대조할 수 있게」 하기 위해서다. 대조하지 않으면 명세는 그냥 긴 프롬프트다.

## 5-A. 검증 — 개념

메인: Spec-Driven Development (복습)

- [ ] [08 Feature Validation.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/08%20Feature%20Validation.md) — **코드 리뷰 · 인지 부채 · 드리프트 방지.** 이 강의가 Phase 5의 골격이다 (2026-07-28, [대화정리](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/08%20Feature%20Validation%20%E2%80%94%20%EB%8C%80%ED%99%94%EC%A0%95%EB%A6%AC.md))

## 5-B. 코드를 이해하는 일이 병목이라는 관점

메인: Tech Bridge

- [ ] [2026-07-16 코드를 이해하는 것이 새로운 병목입니다.md](../../courses/youtube/Tech%20Bridge/2026-07-16%20%EC%BD%94%EB%93%9C%EB%A5%BC%20%EC%9D%B4%ED%95%B4%ED%95%98%EB%8A%94%20%EA%B2%83%EC%9D%B4%20%EC%83%88%EB%A1%9C%EC%9A%B4%20%EB%B3%91%EB%AA%A9%EC%9E%85%EB%8B%88%EB%8B%A4.md) — **「검증(verify)이 아니라 참여(participate)」** — 에이전트가 코드를 대량 생산할 때 인간의 병목은 작성이 아니라 이해다. 교육학에서 가져온 세 기법(설명·마이크로월드·공유 공간)을 리뷰에 적용한다
- [ ] [2026-07-26 코드 리뷰 없앤 지 3개월, 사이트가 터졌습니다.md](../../courses/youtube/Tech%20Bridge/2026-07-26%20%EC%BD%94%EB%93%9C%20%EB%A6%AC%EB%B7%B0%20%EC%97%86%EC%95%A4%20%EC%A7%80%203%EA%B0%9C%EC%9B%94,%20%EC%82%AC%EC%9D%B4%ED%8A%B8%EA%B0%80%20%ED%84%B0%EC%A1%8C%EC%8A%B5%EB%8B%88%EB%8B%A4.md) — **리뷰를 없앤 팀이 실제로 어떻게 됐는가.** 「라이트 오프 소프트웨어 팩토리」가 실패하는 이유가 하니스 설계가 아니라 **모델 훈련 방식의 한계**라는 주장. 완전 자동화를 검토 중이라면 반드시 본다

## 5-C. 리뷰 실전

메인: Matt Pocock Skills

- [ ] [2026-03-27 Never Trust An LLM.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-03-27%20Never%20Trust%20An%20LLM.md) — **LLM을 믿지 말라** — 어디를 반드시 사람이 봐야 하는가에 대한 관점
- [ ] [2026-05-12 New Skills handoff prototype review and writing.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-05-12%20New%20Skills%20handoff%20prototype%20review%20and%20writing.md) — 핸드오프·프로토타입 리뷰·글쓰기 — 리뷰를 워크플로 단계로 만드는 예
- [ ] [2026-05-28 Thermonuclear code quality review.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-05-28%20Thermonuclear%20code%20quality%20review.md) — **품질 리뷰를 강하게 거는 방법** — 리뷰 기준을 문서로 고정해 매번 같은 깊이로 돌린다

## 5-D. 테스트를 워크플로에 넣기

메인: Coding with AI, module 9 (테스트 부분)

- [ ] [03 Adding Vitest to the Feature Workflow.md](../../courses/udemy/Coding%20with%20AI/module%209/03%20Adding%20Vitest%20to%20the%20Feature%20Workflow.md) — **기능 워크플로에 테스트 추가** — 「명세 → 구현 → 테스트」가 한 흐름이 되는 지점. Phase 4의 기능 워크플로가 여기서 확장된다
- [ ] [08 Testing CRUD with Playwright MCP.md](../../courses/udemy/Coding%20with%20AI/module%209/08%20Testing%20CRUD%20with%20Playwright%20MCP.md) — **브라우저 자동화로 실제 동작 확인** — 단위 테스트가 잡지 못하는 통합 문제를 잡는다

함께 보기: 테스트 기법 기초 (필요한 만큼)

- [ ] [01 Test Coverage.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%203%20-%20Advanced%20Methods%20for%20Test%20Driven%20Development/01%20Test%20Coverage.md) — **커버리지** — 완료 판정 기준으로 쓸 수 있는 숫자
- [ ] [05 Mocking.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/11%20Test%20and%20Behavior%20Driven%20Development/Module%203%20-%20Advanced%20Methods%20for%20Test%20Driven%20Development/05%20Mocking.md) — **모킹** — 외부 의존을 끊고 명세의 조건만 검증하기

## 5-E. 감사 — 서브에이전트에게 맡기기

메인: Coding with AI, module 8~9 (감사 부분)

- [ ] [09 Authentication Audit and Cleanup.md](../../courses/udemy/Coding%20with%20AI/module%208/09%20Authentication%20Audit%20and%20Cleanup.md) — **인증 감사와 정리** — 보안처럼 「빠뜨리면 큰일 나는」 영역을 전용 서브에이전트로 훑는다

- [ ] [15 Item Cleanup, Audit Fixes, and Refactoring.md](../../courses/udemy/Coding%20with%20AI/module%209/15%20Item%20Cleanup,%20Audit%20Fixes,%20and%20Refactoring.md) — **정리·감사·리팩터링** — 기능이 끝난 뒤의 마무리 단계. 이걸 안 하면 다음 기능의 컨텍스트가 나빠진다

### 실물 확인 — 감사 서브에이전트 정의

- [`module 8/agents/auth-auditor.md`](../../courses/udemy/Coding%20with%20AI/module%208/agents/auth-auditor.md) — **실제 서브에이전트 정의 파일.** [Phase 7](07%20Phase%207%20-%20%EC%9B%8C%ED%81%AC%ED%94%8C%EB%A1%9C%20%EC%9E%90%EB%8F%99%ED%99%94.md)에서 자기 감사 에이전트를 만들 때 이 형식을 베낀다

함께 보기: 보안 관점의 정적/동적 분석 (선택)

- [ ] [02 Static Analysis.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%202%20-%20Security%20Testing%20and%20Mitigation%20Strategies/02%20Static%20Analysis.md) — 정적 분석 — 감사 에이전트가 하는 일의 자동화 버전
- [ ] [05 Code Review.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%202%20-%20Security%20Testing%20and%20Mitigation%20Strategies/05%20Code%20Review.md) — **코드 리뷰** — 자동화로 대체되지 않는 부분이 무엇인가
- [ ] [09 Software Component Analysis.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%202%20-%20Security%20Testing%20and%20Mitigation%20Strategies/09%20Software%20Component%20Analysis.md) — 의존성 취약점 — 에이전트가 추가한 라이브러리를 점검하는 장치

## 5-F. 3층 검증 구조

Phase 5를 마쳤다면 검증이 세 층으로 서 있어야 한다. 위로 갈수록 비싸고 아래로 갈수록 자주 돈다.

| 층 | 무엇을 잡나 | 언제 | 비용 |
|---|---|---|---|
| **자동 테스트** | 명세의 「Validation」에 적은 조건 | 매 구현 후 자동 | 낮음 |
| **감사 서브에이전트** | 도메인별 빠뜨리기 쉬운 것 (인증·권한·에러 처리) | 기능 완료 시 | 중간 |
| **사람 리뷰** | 명세와의 대조, 설계 판단, 「이게 맞나」 | 기능 완료 시 | 높음 |

**사람 리뷰를 없애는 것이 목표가 아니다.** 아래 두 층을 두껍게 해서 사람이 볼 곳을 좁히는 것이 목표다. 5-B의 두 자료가 그 근거다.

## 5-G. 리뷰 체크리스트

기능 하나가 끝났을 때 확인한다. **명세를 옆에 열고 본다.**

- [ ] 명세의 Requirements 항목이 **하나씩** 충족됐다
- [ ] 명세의 「범위 밖」에 적은 것이 구현되지 않았다
- [ ] 명세에 없는 파일이 생기지 않았다 (생겼다면 이유가 설명된다)
- [ ] 헌법의 코딩 표준을 따랐다 ([Phase 2](02%20Phase%202%20-%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8%EC%99%80%20%ED%97%8C%EB%B2%95.md))
- [ ] 새로 추가된 의존성이 있다면 그 이유를 안다
- [ ] 에러 처리와 로딩 상태가 있다 (명세에 없어도 확인한다 — 자주 빠진다)
- [ ] 테스트가 있고 통과한다
- [ ] **내가 이 코드를 설명할 수 있다** (5-B의 「참여」 기준)

## 산출물 과제

1. **[Phase 4](04%20Phase%204%20-%20%EB%AA%85%EC%84%B8%EC%97%90%EC%84%9C%20%EA%B5%AC%ED%98%84%EC%9C%BC%EB%A1%9C.md)의 구현 결과를 명세와 대조 리뷰** — 5-G 체크리스트로 진행하고, 불일치 항목을 전부 기록한다.
2. **불일치의 원인 분류** — 각 불일치가 「명세가 모호해서」인지 「에이전트가 이탈해서」인지 표시한다. 전자가 많으면 [Phase 3](03%20Phase%203%20-%20%EA%B8%B0%EB%8A%A5%20%EB%AA%85%EC%84%B8%20%EC%9E%91%EC%84%B1.md)으로, 후자가 많으면 [Phase 4](04%20Phase%204%20-%20%EB%AA%85%EC%84%B8%EC%97%90%EC%84%9C%20%EA%B5%AC%ED%98%84%EC%9C%BC%EB%A1%9C.md)의 4-E로 돌아간다.
3. **테스트를 워크플로에 편입** — 기능 워크플로 문서([Phase 2](02%20Phase%202%20-%20%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EC%BB%A8%ED%85%8D%EC%8A%A4%ED%8A%B8%EC%99%80%20%ED%97%8C%EB%B2%95.md)의 컨텍스트 세트)에 「테스트 작성」 단계를 넣는다. 다음 기능부터 자동으로 돈다.
4. **감사 서브에이전트 1개** — 자기 프로젝트에서 「빠뜨리면 큰일 나는」 영역 하나를 골라(권한 검사·입력 검증·에러 처리 등) 감사 에이전트를 만든다. `auth-auditor.md` 형식을 베낀다.
5. **설명 테스트** — 구현된 기능 하나를 **코드를 보지 않고** 동작 흐름으로 설명해 본다. 못 하면 아직 이해하지 못한 것이다. 5-B의 기법으로 다시 읽는다.

## 다음 단계

→ [06 Phase 6 - 재계획과 MVP](06%20Phase%206%20-%20%EC%9E%AC%EA%B3%84%ED%9A%8D%EA%B3%BC%20MVP.md)
