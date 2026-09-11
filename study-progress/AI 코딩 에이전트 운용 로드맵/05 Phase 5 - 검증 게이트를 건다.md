# Phase 5 — 검증 게이트를 건다

- 목표: 에이전트의 주장이 아니라 증거로 완료를 판정하고, 사람 손을 거치지 않아도 막히는 게이트를 건다.
- 분량: 약 12시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 에이전트가 **스스로 돌릴 수 있는 pass/fail 신호**를 준다
- 검증 **강도 4단계**를 알고 상황에 맞게 고른다
- **주장이 아니라 증거**를 요구한다 — 테스트 출력, 실행한 명령과 반환값, 스크린샷
- **신선한 컨텍스트의 적대적 리뷰**를 붙이되 과잉 지적을 막는다
- **Goodhart 문제**를 피한다 — 검증자가 루프 안에 들어가면 에이전트가 테스트를 고친다
- AI 코드의 **결함 프로파일**을 알고 게이트를 그쪽에 배치한다

## 5-A. 검증 강도 4단계 — 이 Phase의 뼈대

Claude Code 공식 문서가 제시하는 사다리다. **위로 갈수록 설정 비용이 들고, 아래에 머무를수록 내 주의력을 쓴다.** 그 교환을 의식적으로 하는 것이 이 Phase의 핵심이다.

| 단계 | 수단 | 성격 | 비용 |
|---|---|---|---|
| ① | 프롬프트 안에 검증 지시 | 권고. 잊힌다 | 없음 |
| ② | 세션 목표 조건(`/goal`) | 매 턴 재평가 | 낮음 |
| ③ | **Stop 훅** | **결정론적 차단** (종료 코드 2) | 중간 |
| ④ | **검증 서브에이전트** | 제3자 판정. 편향 없음 | 높음 |

**도착점의 "검증 게이트"는 최소 ③ 이상을 뜻한다.** ①②만으로는 무인 병렬 실행([Phase 7](07%20Phase%207%20-%20병렬로%20굴린다.md))을 감당하지 못한다.

## 5-B. 증거로 판정한다

메인: 저장소 자료

- [ ] [Tech Bridge / 2026-08-22 Unlazy 스킬의 완료 검증 - 작업 분해와 증거 기반 게이트.md](../../courses/youtube/Tech%20Bridge/2026-08-22%20Unlazy%20스킬의%20완료%20검증%20-%20작업%20분해와%20증거%20기반%20게이트.md) — **이 소절의 메인**
- [ ] [Tech Bridge / 2026-08-19 Aviator의 의도와 실행 증거 중심 코드 검증.md](../../courses/youtube/Tech%20Bridge/2026-08-19%20Aviator의%20의도와%20실행%20증거%20중심%20코드%20검증.md)
- [ ] [Tech Bridge / 2026-08-13 Sonar의 Guide·Verify·Resolve 기반 AI 코드 검증.md](../../courses/youtube/Tech%20Bridge/2026-08-13%20Sonar의%20Guide·Verify·Resolve%20기반%20AI%20코드%20검증.md)
- [ ] [Tech Bridge / 2026-08-08 BAML 팀의 AI 개발 방식 - 설계 검토와 실행 추적으로 품질 지키기.md](../../courses/youtube/Tech%20Bridge/2026-08-08%20BAML%20팀의%20AI%20개발%20방식%20-%20설계%20검토와%20실행%20추적으로%20품질%20지키기.md)
- [ ] [Matt Pocock Skills / 2026-03-27 Never Trust An LLM.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-03-27%20Never%20Trust%20An%20LLM.md) — **제목이 이 Phase의 전제다**
- [ ] [Tech Bridge / 2026-07-16 코드를 이해하는 것이 새로운 병목입니다.md](../../courses/youtube/Tech%20Bridge/2026-07-16%20코드를%20이해하는%20것이%20새로운%20병목입니다.md) — **읽고 이해하는 능력이 새 병목이라는 것**

> 📌 **인시던트 중에는 에이전트의 단언을 특히 의심한다.** 실무 사고 분석에서 반복해 나오는 것이 "그건 불가능하다"는 에이전트의 단언이 틀린 경우다. 가설은 **실제로 코드를 실행해 확인**시켜야 가짜 설명이 걸러진다.

## 5-C. 테스트를 게이트로 만든다

메인: Coding with AI, module 9의 테스트 구간

- [ ] [03 Adding Vitest to the Feature Workflow.md](../../courses/udemy/Coding%20with%20AI/module%209/03%20Adding%20Vitest%20to%20the%20Feature%20Workflow.md) — **워크플로에 테스트를 박아 넣는다**
- [ ] [08 Testing CRUD with Playwright MCP.md](../../courses/udemy/Coding%20with%20AI/module%209/08%20Testing%20CRUD%20with%20Playwright%20MCP.md) — **브라우저 검증의 실물**
- [ ] [15 Item Cleanup, Audit Fixes, and Refactoring.md](../../courses/udemy/Coding%20with%20AI/module%209/15%20Item%20Cleanup,%20Audit%20Fixes,%20and%20Refactoring.md)
- [ ] [Coding with AI / module 8 / 09 Authentication Audit and Cleanup.md](../../courses/udemy/Coding%20with%20AI/module%208/09%20Authentication%20Audit%20and%20Cleanup.md) — **감사를 한 단계로 두는 실물**

함께 보기: Mastering Antigravity의 테스트·리팩터링

- [ ] [Module 4 / 10 Refactor Large Components with AI.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%204%20-%20Your%20First%20Antigravity%20Project%20-%20Calendar%20App/10%20Refactor%20Large%20Components%20with%20AI.md)
- [ ] [Module 4 / 11 Unit Tests with Vitest.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Mastering%20Google%20Antigravity%20-%20From%20Setup%20to%20Real%20Projects/Module%204%20-%20Your%20First%20Antigravity%20Project%20-%20Calendar%20App/11%20Unit%20Tests%20with%20Vitest.md)

### ⚠️ 테스트 전략이 바뀌었다

**구현을 그대로 미러링하는 유닛 테스트는 이제 권장되지 않는다.** 에이전트가 구현을 계속 재작성하므로 그런 테스트는 함께 요동칠 뿐이다. **행위·계약·속성(property) 테스트로 불변식을 고정**하는 쪽으로 옮겨 갔다.

그리고 **LLM이 만든 기본 테스트는 그대로 믿지 않는다.** 적대적인 "이렇게 하면?" 사고에 약해서, 통과하는 경로만 확인하는 테스트가 나오기 쉽다.

버그를 찾으면 **먼저 실패하는 테스트를 쓰게 하고** 그 다음 고친다. 이 순서가 지켜지면 회귀가 잡힌다.

## 5-D. 적대적 리뷰 — 신선한 컨텍스트로

**코드를 쓴 컨텍스트가 자기 코드를 리뷰하면 편향된다.** 그래서 리뷰는 **새 컨텍스트**가 diff만 보고 해야 한다. Writer/Reviewer 두 세션이거나 리뷰 서브에이전트다.

- [ ] [Matt Pocock Skills / 2026-05-28 Thermonuclear code quality review.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-05-28%20Thermonuclear%20code%20quality%20review.md) — **리뷰 스킬의 실물**
- [ ] [Matt Pocock Skills / 2026-04-29 How To De-Slop A Codebase Ruined By AI.md](../../courses/youtube/Matt%20Pocock%20Skills/2026-04-29%20How%20To%20De-Slop%20A%20Codebase%20Ruined%20By%20AI.md) — 이미 망가진 경우
- [ ] [Tech Bridge / 2026-08-23 Qodo의 코드 거버넌스 - 팀 지식과 아키텍처 기반 리뷰.md](../../courses/youtube/Tech%20Bridge/2026-08-23%20Qodo의%20코드%20거버넌스%20-%20팀%20지식과%20아키텍처%20기반%20리뷰.md)
- [ ] [Tech Bridge / 2026-07-26 코드 리뷰 없앤 지 3개월, 사이트가 터졌습니다.md](../../courses/youtube/Tech%20Bridge/2026-07-26%20코드%20리뷰%20없앤%20지%203개월,%20사이트가%20터졌습니다.md) — **리뷰를 없앤 결과.** 반드시 본다
- [ ] [Anthropic @ AI Engineer / 2026-07-17 Using LLMs to Secure Source Code.md](../../courses/youtube/AI%20Engineer/Anthropic%20@%20AI%20Engineer/2026-07-17%20Using%20LLMs%20to%20Secure%20Source%20Code.md)

> ⚠️ **리뷰어에게 "빈틈을 찾아라"라고만 시키면 안 된다.** 멀쩡한 코드에도 지적을 만들어내 과설계로 끌고 간다. **"정확성과 요구사항에 영향을 주는 갭만 보고하라"**로 범위를 좁힌다.

### Goodhart 문제 — 이 Phase에서 가장 중요한 함정

**검증자가 루프 "안"에 들어가면 에이전트는 깨진 동작에 맞춰 테스트를 고친다.** 통과가 목표가 되는 순간 통과는 지표로서 죽는다.

- 사람은 루프 **안(in)**이 아니라 **위(on)**에 있어야 한다
- **시스템이 최적화하지 않는 체크가 최소 하나는 남아 있어야 한다** — 에이전트가 건드릴 수 없는 게이트
- 테스트 파일 수정을 훅으로 막거나, 별도 권한 경계 뒤에 두는 것이 실무적 해법이다

## 5-E. AI 코드의 결함 프로파일 — 게이트를 어디에 걸까

리뷰 인력은 유한하다. **결함이 몰리는 곳에 게이트를 건다.** 2026년 실증 데이터가 위치를 알려 준다.

| 사실 | 함의 |
|---|---|
| AI 코드는 사람의 **1.7배 버그**를 만든다 (GitHub 리포 470개 분석) | 리뷰 총량을 늘리기보다 배치를 바꾼다 |
| 암호화 87% · SQLi 83% 통과 vs **XSS 15% · 로그 인젝션 12%** | **신뢰할 수 없는 입력을 시스템 전체에 걸쳐 추적해야 하는 결함**에 실패가 몰린다 |
| 중복 코드 8.3% → 15.7%, **에러 은폐 구문 +47%** | 신규 코드의 에러 은폐를 자동 플래그한다 |
| 리팩터링된 코드 25% → 3.8% | 정리는 아무도 안 한다. 정리 단계를 게이트로 만든다 |
| 에이전트 PR은 설명과 실제 diff가 어긋나기도 한다 | **PR 설명 대 diff 일치 검증**을 넣는다 |

📌 **모델 훈련에는 유지보수성 페널티가 없다.** 모델은 테스트 통과로 보상받지만 아키텍처 부패는 몇 주~몇 달 뒤에 나타나 보상 신호가 없다. **그래서 하네스를 아무리 잘 만들어도 이건 못 막고, 정렬 작업을 앞단(제품 리뷰·시스템 설계)으로 옮겨야 한다.** 이 로드맵이 "도구 숙련"으로만 끝나면 안 되는 이유이고, [Phase 11](11%20Phase%2011%20-%20캡스톤%20운용%20표준.md)이 운용 표준을 요구하는 이유다.

## 추천 강의 (미확보) — 이 Phase의 공백

저장소 자료는 실물 위주라 **"검증을 제도로 만드는 법"**이 얇다. MOOC Plus 포함이라 추가 결제가 없다.

| 강의 | 플랫폼 | 링크 | 비고 |
|---|---|---|---|
| **GitHub: Governing AI-Generated Code** | MOOC (Pragmatic AI Labs) · 3모듈 4h · 2026-03 | [링크](https://www.mooc.org/learn/github-governing-ai-generated-code) | ★★★★★ 정적분석+수동리뷰+보안스캔 워크플로, **hallucinated API 탐지**, 팀 표준 강제, capstone |
| GitHub: AI-Augmented Testing and Refactoring | MOOC (Pragmatic AI Labs) · 3모듈 3h · 2026-04 | [링크](https://www.mooc.org/learn/github-ai-augmented-testing-and-refactoring) | ★★★★☆ AI 주도 TDD·커버리지 측정·다중 파일 리팩터링 |
| Vibe Coding with GitHub Copilot | MOOC (Edureka) · 5모듈 9h · 2026-03 | [링크](https://www.mooc.org/learn/vibe-coding-github-copilot-ai) | ★★★☆☆ 보충. context engineering + 검증·거버넌스 |

## 산출물

**검증 강도 4단계 중 3단계 이상이 걸린 파이프라인 1개.**

구체적으로는 아래가 담당 프로젝트에 실제로 있어야 한다.

1. **Stop 훅 1개** — 테스트·린트가 통과하지 않으면 종료 코드 2로 차단
2. **리뷰 서브에이전트 1개** — 신선한 컨텍스트로 diff만 보고, "정확성·요구사항 영향"만 보고하도록 범위가 제한된 것
3. **에이전트가 건드릴 수 없는 체크 1개** — Goodhart 방지용. 무엇을 어떻게 격리했는지 한 줄로 적어 둔다

## 다음 단계

→ [06 Phase 6 - 권한과 샌드박스](06%20Phase%206%20-%20권한과%20샌드박스.md)
