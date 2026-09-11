# Phase 1 — 회사를 시스템으로 본다

- 목표: 대상 회사의 업무 흐름을 그림으로 그리고, 어떤 업무를 에이전트에 넘길지 근거 있는 우선순위표를 만든다.
- 분량: 약 12시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 회사의 업무 하나를 BPMN으로 그려 누가 무엇을 받아 무엇을 내놓는지 보여줄 수 있다.
- 한 업무를 두고 "이건 에이전트에 넘긴다 / 넘기지 않는다"를 반복성·리스크·ROI로 설명할 수 있다.
- 자동화 후보를 순서대로 나열하고 왜 그 순서인지 말할 수 있다.
- 회사가 무엇으로 돈을 버는지, 그걸 무슨 숫자로 보는지 계기판 항목으로 적을 수 있다.
- 자동화할 업무마다 **완료의 정의 · 정지 조건(stop condition) · 에스컬레이션 경로**를 미리 적을 수 있다.

> **2026-09-03 보강 — 우선순위표만으로는 부족하다.** McKinsey의 기업 AI 도입 조사에서 **업무 흐름 자체를 다시 설계한 기업은 21%뿐이었고, 그 재설계 여부가 실제 가치 실현과 가장 강하게 상관**했다. 자동화 후보를 고르는 것과 그 업무를 에이전트가 돌 수 있는 모양으로 다시 그리는 것은 다른 일이다. 1-C의 우선순위표를 만든 뒤, 상위 후보마다 아래 셋을 함께 적는다.
>
> - **완료(resolution)의 정의** — 무엇이 되면 이 업무가 끝난 것인가
> - **정지 조건** — 에이전트가 더 진행하지 않고 멈춰야 하는 상태
> - **에스컬레이션 경로** — 멈췄을 때 누구에게 어떻게 넘기는가
>
> 이 셋이 [Phase 5](05%20Phase%205%20-%20에이전트%20조직%20만들기.md)의 승인 지점과 [Phase 8](08%20Phase%208%20-%20배포와%20운영.md)의 온콜 절차에 그대로 재료가 된다. 출처: [McKinsey, The state of AI](https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-how-organizations-are-rewiring-to-capture-value) (2026-09-03 확인)

> **대상 회사를 먼저 정한다.** 실제 회사, 인수 후보 SaaS, 본인 부업 중 하나를 잡는다. 대상 없이 이 Phase를 하면 산출물이 전부 가정이 되고 Phase 9·11에서 다시 처음부터 해야 한다.

> **연습 대상 — 이 저장소를 먼저 그려 본다.** 실제 회사를 그리기 전에 `learning-hub` 저장소를 같은 틀로 한 번 그린다. 이미 **스킬 4개(`.claude/skills/`)가 직원, `AGENTS.md`가 내부 프로세스, `memory/`와 `study-progress/`가 회사의 기억** 역할로 돌아가고 있어서, 답을 아는 상태에서 틀을 검증할 수 있다. 반나절이면 되고 여기서 "무엇이 직원이고 무엇이 프로세스인가"의 감각이 잡힌다. 상사 설득에도 쓸모 있다 — AI 네이티브 회사를 남의 사례가 아니라 **이미 우리가 돌리고 있는 것**으로 보여줄 수 있다.

## 1-A. AI 네이티브 회사가 실제로 어떻게 생겼는지 본다

메인: YouTube 사례 노트 4편. 강의가 아니라 **실제로 해 본 사람들의 보고**다. 이 Phase의 나머지를 무엇을 위해 하는지 여기서 잡는다.

- [ ] `2026-09-03` [2026-07-27 6인 회사 지분을 사서 AI로 100% 자동화로 돌려보고 있는 개발자.md](../../courses/youtube/빌더%20조쉬%20Builder%20Josh/2026-07-27%206인%20회사%20지분을%20사서%20AI로%20100%25%20자동화로%20돌려보고%20있는%20개발자%20%28진양의%20인수창업%20김지혁님%29.md) — **이 로드맵의 설계도.** 조회 가능한 환경 → 닫힌 피드백 루프의 컴퍼니 OS 단계, PM(제라드)·개발(길포일)·콘텐츠(얼릭) 3개 상위 역할과 하위 워커 9개 프로필, "인수 직후엔 제품이 아니라 계기판을 먼저"라는 순서가 전부 여기 있다.
- [ ] `2026-09-03` [2026-05-21 How to Build a Self-Improving Company with AI.md](../../courses/youtube/Y%20Combinator/2026-05-21%20How%20to%20Build%20a%20Self-Improving%20Company%20with%20AI.md) — **AI를 copilot으로 붙이는 것과 회사 구조 자체를 재설계하는 것의 차이.** 기존 회사가 사람을 정보 전달 계층으로 쓰는 구조라는 진단이 Phase 5의 역할 분리 근거가 된다.
- [ ] `2026-09-03` [2026-07-24 이제 모든 회사엔 브레인이 필요하다.md](../../courses/youtube/Tech%20Bridge/2026-07-24%20이제%20모든%20회사엔%20브레인이%20필요하다.md) — Garry Tan(YC 대표). 스킬 파일을 "직원"처럼 다루는 조직 설계, 잠재 공간과 결정적 공간의 구분, "컴퍼니 브레인 = 도서관 + 사서" 개념. **일회성 작업을 재사용 스킬로 바꾸는 스킬화(skillify) 원칙**이 Phase 4의 전제다.
- [ ] `2026-09-03` [2026-07-13 AI는 수단입니다 진짜 경쟁력은 기업의 뇌 Enterprise IQ에 있습니다.md](../../courses/youtube/EO%20Korea/2026-07-13%20AI는%20수단입니다%20진짜%20경쟁력은%20기업의%20뇌%20Enterprise%20IQ에%20있습니다.md) — BCG 파트너 인터뷰. 도구 개수가 아니라 **기업 고유의 판단 체계를 내재화**하는 것이 성패를 가른다는 관점. Phase 10의 밑그림.

## 1-B. 업무를 프로세스로 그린다

메인: The Ultimate BPMN Course. 전 14모듈을 다 볼 필요는 없다. **아래 절반만 본다** — 남은 모듈(9~13)은 보험·은행 수준의 복잡한 이벤트 표기라 사내 업무 자동화에는 과하다.

- [ ] `2026-09-03` [02 Why BPMN.md](../../courses/mooc/Business%20Process%20and%20Analysis/The%20Ultimate%20BPMN%20Course/Module%201%20-%20Introduction/02%20Why%20BPMN.md) — 왜 말이나 글이 아니라 표준 표기로 그려야 하는가.
- [ ] `2026-09-03` [02 Theory - Task, Start & End Event, Pools & Lanes.md](../../courses/mooc/Business%20Process%20and%20Analysis/The%20Ultimate%20BPMN%20Course/Module%202%20-%20The%20Shoe%20Shop/02%20Theory%20-%20Task,%20Start%20%26%20End%20Event,%20Pools%20%26%20Lanes.md) — **가장 중요한 강의.** 풀(pool)과 레인(lane)이 나중에 그대로 에이전트 역할 경계가 된다.
- [ ] `2026-09-03` [03 Practical - Process of Manual Tasks in the Retail Industry (Part 1).md](../../courses/mooc/Business%20Process%20and%20Analysis/The%20Ultimate%20BPMN%20Course/Module%202%20-%20The%20Shoe%20Shop/03%20Practical%20-%20Process%20of%20Manual%20Tasks%20in%20the%20Retail%20Industry%20%28Part%201%29.md) — 수작업 업무를 그리는 실제 예.
- [ ] `2026-09-04` [04 Practical - Process of Manual Tasks in the Retail Industry (Part 2).md](../../courses/mooc/Business%20Process%20and%20Analysis/The%20Ultimate%20BPMN%20Course/Module%202%20-%20The%20Shoe%20Shop/04%20Practical%20-%20Process%20of%20Manual%20Tasks%20in%20the%20Retail%20Industry%20%28Part%202%29.md)
- [ ] [06 Tool Demo.md](../../courses/mooc/Business%20Process%20and%20Analysis/The%20Ultimate%20BPMN%20Course/Module%202%20-%20The%20Shoe%20Shop/06%20Tool%20Demo.md) — 그릴 도구. **건너뜀 (2026-09-08): 도구 조작 실습이라 사용자 요청으로 생략. 완료 처리하지 않음.**
- [ ] `2026-09-08` [02 Theory - Token Concept.md](../../courses/mooc/Business%20Process%20and%20Analysis/The%20Ultimate%20BPMN%20Course/Module%203%20-%20The%20Race%20Track/02%20Theory%20-%20Token%20Concept.md) — 토큰 개념. 프로세스가 "어디까지 진행됐는지"를 표현하는 방식이라 에이전트 상태 관리와 그대로 이어진다.
- [ ] `2026-09-08` [03 Theory - Parallel Gateway.md](../../courses/mooc/Business%20Process%20and%20Analysis/The%20Ultimate%20BPMN%20Course/Module%203%20-%20The%20Race%20Track/03%20Theory%20-%20Parallel%20Gateway.md) — 병렬 분기. Phase 5의 병렬 에이전트 패턴과 짝이다.
- [ ] `2026-09-08` [02 Theory - Inclusive Gateway.md](../../courses/mooc/Business%20Process%20and%20Analysis/The%20Ultimate%20BPMN%20Course/Module%204%20-%20The%20Beauty%20Paradise/02%20Theory%20-%20Inclusive%20Gateway.md)
- [ ] `2026-09-08` [04 Theory - Message Event.md](../../courses/mooc/Business%20Process%20and%20Analysis/The%20Ultimate%20BPMN%20Course/Module%204%20-%20The%20Beauty%20Paradise/04%20Theory%20-%20Message%20Event.md) — 프로세스 간 메시지. Phase 5의 에이전트 간 통신에 대응한다.
- [ ] `2026-09-08` [02 The Deadlock.md](../../courses/mooc/Business%20Process%20and%20Analysis/The%20Ultimate%20BPMN%20Course/Module%205%20-%20BPMN%20Traps/02%20The%20Deadlock.md) — **교착.** 멀티 에이전트에서 실제로 터지는 실패 유형이라 지금 봐 둔다.
- [ ] [03 The Multimerge.md](../../courses/mooc/Business%20Process%20and%20Analysis/The%20Ultimate%20BPMN%20Course/Module%205%20-%20BPMN%20Traps/03%20The%20Multimerge.md)
- [ ] [02 Process Scoping.md](../../courses/mooc/Business%20Process%20and%20Analysis/The%20Ultimate%20BPMN%20Course/Module%207%20-%20Best%20Practices/02%20Process%20Scoping.md) — **어디서 끊을 것인가.** 자동화 범위를 정할 때 그대로 쓰는 기준.
- [ ] [03 Process Collaboration.md](../../courses/mooc/Business%20Process%20and%20Analysis/The%20Ultimate%20BPMN%20Course/Module%207%20-%20Best%20Practices/03%20Process%20Collaboration.md)
- [ ] [04 Consistent Process Flow.md](../../courses/mooc/Business%20Process%20and%20Analysis/The%20Ultimate%20BPMN%20Course/Module%207%20-%20Best%20Practices/04%20Consistent%20Process%20Flow.md)
- [ ] [05 Naming Conventions.md](../../courses/mooc/Business%20Process%20and%20Analysis/The%20Ultimate%20BPMN%20Course/Module%207%20-%20Best%20Practices/05%20Naming%20Conventions.md) — 이름 규칙. 에이전트·도구 이름을 지을 때 다시 쓴다.
- [ ] [03 Theory - Sub Process.md](../../courses/mooc/Business%20Process%20and%20Analysis/The%20Ultimate%20BPMN%20Course/Module%208%20-%20Travel/03%20Theory%20-%20Sub%20Process.md) — 하위 프로세스. 상위 에이전트가 하위 워커에게 넘기는 구조의 원형.
- [ ] [05 Theory - Data Object.md](../../courses/mooc/Business%20Process%20and%20Analysis/The%20Ultimate%20BPMN%20Course/Module%208%20-%20Travel/05%20Theory%20-%20Data%20Object.md)
- [ ] [06 Theory - Data Store.md](../../courses/mooc/Business%20Process%20and%20Analysis/The%20Ultimate%20BPMN%20Course/Module%208%20-%20Travel/06%20Theory%20-%20Data%20Store.md) — 데이터 저장소 표기. Phase 4의 "조회 가능한 환경"이 이 기호로 표현된다.
- [ ] [03 Efficiency.md](../../courses/mooc/Business%20Process%20and%20Analysis/The%20Ultimate%20BPMN%20Course/Module%2014%20-%20BPM%20Scenarios/03%20Efficiency.md) — 효율 관점의 프로세스 개선 시나리오.
- [ ] [04 Compliancy.md](../../courses/mooc/Business%20Process%20and%20Analysis/The%20Ultimate%20BPMN%20Course/Module%2014%20-%20BPM%20Scenarios/04%20Compliancy.md) — 규정 준수 관점. Phase 7과 이어진다.

건너뛰어도 되는 것: Module 6·9·10·11·12·13 (타이머·에러·보상·취소 이벤트 등 세밀한 표기). 나중에 프로세스가 복잡해지면 그때 돌아온다.

## 1-C. 어떤 업무를 AI에 넘길지 판단한다

메인: AI for Everyone (Andrew Ng). 이 로드맵에서 **"넣지 않을 것"을 정하는 근거**를 여기서 얻는다.

- [ ] [05 How to choose an AI project.md](../../courses/deeplearning-ai/AI%20for%20Everyone/week%2002%20Building%20AI%20Projects/05%20How%20to%20choose%20an%20AI%20project.md) — **프로젝트 선정 기준.** 자동화 후보 우선순위표의 뼈대.
- [ ] [06 Technical and business diligence.md](../../courses/deeplearning-ai/AI%20for%20Everyone/week%2002%20Building%20AI%20Projects/06%20Technical%20and%20business%20diligence.md) — 기술적으로 가능한가와 사업적으로 가치가 있는가를 나눠 보는 법.
- [ ] [07 Working with an AI team - Data and acceptance criteria.md](../../courses/deeplearning-ai/AI%20for%20Everyone/week%2002%20Building%20AI%20Projects/07%20Working%20with%20an%20AI%20team%20-%20Data%20and%20acceptance%20criteria.md) — **인수 기준(acceptance criteria)** 을 미리 정하는 습관. Phase 6의 eval이 여기서 시작된다.
- [ ] [06 What machine learning can and cannot do.md](../../courses/deeplearning-ai/AI%20for%20Everyone/week%2001%20What%20is%20AI/06%20What%20machine%20learning%20can%20and%20cannot%20do.md)
- [ ] [05 What makes an AI company.md](../../courses/deeplearning-ai/AI%20for%20Everyone/week%2001%20What%20is%20AI/05%20What%20makes%20an%20AI%20company.md) — "AI를 쓰는 회사"와 "AI 회사"의 차이.

함께 보기: Generative AI for Everyone week 03. AI for Everyone보다 **업무 단위로 쪼개는 관점**이 구체적이다.

- [ ] [02 Tasks, not jobs.md](../../courses/deeplearning-ai/Generative%20AI%20for%20Everyone/week%2003%20Generative%20AI%20in%20Business%20and%20Society/Generative%20AI%20and%20business/02%20Tasks,%20not%20jobs.md) — **직무가 아니라 태스크 단위로 본다.** 이 Phase에서 가장 실용적인 한 강의다.
- [ ] [03 Job task analysis examples.md](../../courses/deeplearning-ai/Generative%20AI%20for%20Everyone/week%2003%20Generative%20AI%20in%20Business%20and%20Society/Generative%20AI%20and%20business/03%20Job%20task%20analysis%20examples.md) — 태스크 분해 실제 예.
- [ ] [04 AI and business value.md](../../courses/deeplearning-ai/Generative%20AI%20for%20Everyone/week%2003%20Generative%20AI%20in%20Business%20and%20Society/Generative%20AI%20and%20business/04%20AI%20and%20business%20value.md)
- [ ] [01 Generative AI in business.md](../../courses/deeplearning-ai/Generative%20AI%20for%20Everyone/week%2003%20Generative%20AI%20in%20Business%20and%20Society/Generative%20AI%20and%20business/01%20Generative%20AI%20in%20business.md)

함께 보기: Generative AI for Product Managers C3. ROI와 실패 원인을 다룬 두 강의만 골라 본다.

- [ ] [15 The Return on Investment of AI.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20for%20Product%20Managers/03%20Product%20Management%20-%20Building%20AI-Powered%20Products/Module%201%20-%20AI%20Methodology,%20Opportunities,%20and%20Challenges/15%20The%20Return%20on%20Investment%20of%20AI.md)
- [ ] [18 Why AI Product Development Projects Fail.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20for%20Product%20Managers/03%20Product%20Management%20-%20Building%20AI-Powered%20Products/Module%201%20-%20AI%20Methodology,%20Opportunities,%20and%20Challenges/18%20Why%20AI%20Product%20Development%20Projects%20Fail.md) — **실패 원인 목록.** 우선순위표에서 후보를 떨어뜨리는 근거로 쓴다.

## 1-D. 계기판 항목을 먼저 정한다

빌더 조쉬 사례의 "제품보다 계기판을 먼저" 원칙을 여기서 실행한다. 대시보드를 실제로 만드는 것은 Phase 9이고, 여기서는 **무엇을 볼지만 정한다.**

메인: Data Storytelling module 03의 앞부분.

- [ ] [03 Components of a Dashboard.md](../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2003%20Dashboards%20and%20stories/03%20Components%20of%20a%20Dashboard.md)
- [ ] [04 Selecting Insights for a Dashboard.md](../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2003%20Dashboards%20and%20stories/04%20Selecting%20Insights%20for%20a%20Dashboard.md) — **무엇을 넣고 무엇을 뺄 것인가.** 계기판 항목 정의의 핵심.
- [ ] [05 Dashboards The Good and The Better.md](../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2003%20Dashboards%20and%20stories/05%20Dashboards%20The%20Good%20and%20The%20Better.md)

함께 보기: Generative AI for Product Managers C3 M2.

- [ ] [04 Key Measures of AI Product Management Success.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20for%20Product%20Managers/03%20Product%20Management%20-%20Building%20AI-Powered%20Products/Module%202%20-%20Integrating%20AI%20into%20the%20Product%20Management%20Lifecycle/04%20Key%20Measures%20of%20AI%20Product%20Management%20Success.md)

## 업무의 시간·비용·오류율을 데이터로 측정하기 — Process Mining

BPMN은 프로세스를 **그리는** 법이지 **측정하는** 법이 아니다. "이 업무가 실제로 몇 번 일어나고 얼마나 걸리는가"를 로그에서 뽑아내는 것이 프로세스 마이닝이다.

> 2026-09-02에 **Process Mining: Data science in Action**(Eindhoven University of Technology · 6모듈 60강)을 등록·정리해 이 공백을 메웠다. 창시자 Wil van der Aalst가 직접 가르친다. 아래는 이 Phase에 직접 필요한 20강을 고른 것이다. 전체 60강 목록은 [코스 README](../../courses/mooc/Business%20Process%20and%20Analysis/Process%20Mining%20-%20Data%20science%20in%20Action/README.md)에 있다.

- [ ] [02 1.1 - Data Science and Big Data.md](../../courses/mooc/Business%20Process%20and%20Analysis/Process%20Mining%20-%20Data%20science%20in%20Action/Module%201%20-%20Introduction%20and%20Data%20Mining/02%201.1%20-%20Data%20Science%20and%20Big%20Data.md) — 데이터 사이언스가 무엇을 하는 분야인지. 프로세스 마이닝의 자리를 잡는다
- [ ] [03 1.2 - Different Types of Process Mining.md](../../courses/mooc/Business%20Process%20and%20Analysis/Process%20Mining%20-%20Data%20science%20in%20Action/Module%201%20-%20Introduction%20and%20Data%20Mining/03%201.2%20-%20Different%20Types%20of%20Process%20Mining.md) — **발견(discovery)·적합성 검사(conformance)·개선(enhancement)** 세 유형. 이 Phase가 필요로 하는 것은 앞의 둘이다
- [ ] [04 1.3 - How Process Mining Relates to Data Mining.md](../../courses/mooc/Business%20Process%20and%20Analysis/Process%20Mining%20-%20Data%20science%20in%20Action/Module%201%20-%20Introduction%20and%20Data%20Mining/04%201.3%20-%20How%20Process%20Mining%20Relates%20to%20Data%20Mining.md) — 이벤트 로그가 일반 데이터와 무엇이 다른가
- [ ] [09 1.8 - Evaluating Mining Results.md](../../courses/mooc/Business%20Process%20and%20Analysis/Process%20Mining%20-%20Data%20science%20in%20Action/Module%201%20-%20Introduction%20and%20Data%20Mining/09%201.8%20-%20Evaluating%20Mining%20Results.md) — 측정 결과를 얼마나 믿을 수 있는가
- [ ] [10 Introducing Fluxicon and Disco.md](../../courses/mooc/Business%20Process%20and%20Analysis/Process%20Mining%20-%20Data%20science%20in%20Action/Module%201%20-%20Introduction%20and%20Data%20Mining/10%20Introducing%20Fluxicon%20and%20Disco.md) — 실습 도구 Disco 소개
- [ ] [11 Real Life Session 01 - The Demo Scenario (7 min.).md](../../courses/mooc/Business%20Process%20and%20Analysis/Process%20Mining%20-%20Data%20science%20in%20Action/Module%201%20-%20Introduction%20and%20Data%20Mining/11%20Real%20Life%20Session%2001%20-%20The%20Demo%20Scenario%20%287%20min.%29.md) — 실제 이벤트 로그로 하는 실습의 시작
- [ ] [12 Real Life Session 02 - Process Discovery and Simplification (11 min.).md](../../courses/mooc/Business%20Process%20and%20Analysis/Process%20Mining%20-%20Data%20science%20in%20Action/Module%201%20-%20Introduction%20and%20Data%20Mining/12%20Real%20Life%20Session%2002%20-%20Process%20Discovery%20and%20Simplification%20%2811%20min.%29.md) — **로그에서 실제 프로세스를 자동으로 그려 내는 것.** BPMN으로 그린 그림과 비교할 대상이 여기서 나온다
- [ ] [13 Real Life Session 03 - Statistics, Cases and Variants (8 min.).md](../../courses/mooc/Business%20Process%20and%20Analysis/Process%20Mining%20-%20Data%20science%20in%20Action/Module%201%20-%20Introduction%20and%20Data%20Mining/13%20Real%20Life%20Session%2003%20-%20Statistics%2C%20Cases%20and%20Variants%20%288%20min.%29.md) — **발생 횟수·소요 시간·변형(variant) 통계.** 자동화 후보 우선순위표의 빈도와 1회 소요 칸이 이것이다
- [ ] [14 Real Life Session 04 - Bottleneck Analysis (7 min.).md](../../courses/mooc/Business%20Process%20and%20Analysis/Process%20Mining%20-%20Data%20science%20in%20Action/Module%201%20-%20Introduction%20and%20Data%20Mining/14%20Real%20Life%20Session%2004%20-%20Bottleneck%20Analysis%20%287%20min.%29.md) — **어디서 시간이 새는가.** 자동화할 단계를 고르는 직접적 근거
- [ ] [15 Real Life Session 05 - Compliance Analysis (6 min.).md](../../courses/mooc/Business%20Process%20and%20Analysis/Process%20Mining%20-%20Data%20science%20in%20Action/Module%201%20-%20Introduction%20and%20Data%20Mining/15%20Real%20Life%20Session%2005%20-%20Compliance%20Analysis%20%286%20min.%29.md) — **정해진 절차를 실제로 따르고 있는가.** 재작업·예외 처리 횟수를 잡아낸다
- [ ] [17 Real Life Session 07 - Tip 2 - Take Different Views on your Process (7 min.).md](../../courses/mooc/Business%20Process%20and%20Analysis/Process%20Mining%20-%20Data%20science%20in%20Action/Module%201%20-%20Introduction%20and%20Data%20Mining/17%20Real%20Life%20Session%2007%20-%20Tip%202%20-%20Take%20Different%20Views%20on%20your%20Process%20%287%20min.%29.md) — 같은 로그를 다른 관점으로 보기
- [ ] [03 4.3 - Introduction to Conformance Checking.md](../../courses/mooc/Business%20Process%20and%20Analysis/Process%20Mining%20-%20Data%20science%20in%20Action/Module%204%20-%20Process%20Discovery%20Techniques%20and%20Conformance%20Checking/03%204.3%20-%20Introduction%20to%20Conformance%20Checking.md) — **그린 그림과 실제가 얼마나 다른가.** BPMN 지도를 검증하는 방법
- [ ] [08 4.8 - Exploring Event Data.md](../../courses/mooc/Business%20Process%20and%20Analysis/Process%20Mining%20-%20Data%20science%20in%20Action/Module%204%20-%20Process%20Discovery%20Techniques%20and%20Conformance%20Checking/08%204.8%20-%20Exploring%20Event%20Data.md) — 이벤트 데이터를 처음 열어볼 때 무엇을 보는가
- [ ] [04 5.4 - Mining Bottlenecks.md](../../courses/mooc/Business%20Process%20and%20Analysis/Process%20Mining%20-%20Data%20science%20in%20Action/Module%205%20-%20Enrichment%20of%20Process%20Models/04%205.4%20-%20Mining%20Bottlenecks.md) — 병목을 모델 위에 표시하기. 시간 관점의 정식 분석
- [ ] [06 5.6 - Organizational Mining.md](../../courses/mooc/Business%20Process%20and%20Analysis/Process%20Mining%20-%20Data%20science%20in%20Action/Module%205%20-%20Enrichment%20of%20Process%20Models/06%205.6%20-%20Organizational%20Mining.md) — **누가 어떤 일을 하는가**를 로그에서 뽑아낸다. 풀·레인을 데이터로 검증하는 것
- [ ] [02 6.2 - Getting the Right Event Data.md](../../courses/mooc/Business%20Process%20and%20Analysis/Process%20Mining%20-%20Data%20science%20in%20Action/Module%206%20-%20Operational%20Support%20and%20Conclusion/02%206.2%20-%20Getting%20the%20Right%20Event%20Data.md) — **측정하려면 로그가 있어야 한다.** 없는 로그를 어떻게 만들 것인가
- [ ] [03 6.3 - Guidelines for Logging.md](../../courses/mooc/Business%20Process%20and%20Analysis/Process%20Mining%20-%20Data%20science%20in%20Action/Module%206%20-%20Operational%20Support%20and%20Conclusion/03%206.3%20-%20Guidelines%20for%20Logging.md) — **앞으로 만들 에이전트가 무엇을 남겨야 하는가.** Phase 7 관측과 직접 이어진다
- [ ] [05 6.5 - How to Conduct a Process Mining Project.md](../../courses/mooc/Business%20Process%20and%20Analysis/Process%20Mining%20-%20Data%20science%20in%20Action/Module%206%20-%20Operational%20Support%20and%20Conclusion/05%206.5%20-%20How%20to%20Conduct%20a%20Process%20Mining%20Project.md) — 프로젝트를 어떤 순서로 진행하는가
- [ ] [07 6.7 - Mining Spaghetti Processes.md](../../courses/mooc/Business%20Process%20and%20Analysis/Process%20Mining%20-%20Data%20science%20in%20Action/Module%206%20-%20Operational%20Support%20and%20Conclusion/07%206.7%20-%20Mining%20Spaghetti%20Processes.md) — **구조가 없는 실제 업무**를 다루는 법. 대부분의 회사 업무가 여기 해당한다
- [ ] [08 6.8 - Process Models as Maps.md](../../courses/mooc/Business%20Process%20and%20Analysis/Process%20Mining%20-%20Data%20science%20in%20Action/Module%206%20-%20Operational%20Support%20and%20Conclusion/08%206.8%20-%20Process%20Models%20as%20Maps.md) — 프로세스 모델을 지도로 보기. 얼마나 자세히 그릴 것인가

**Petri net · α-algorithm 같은 이론 부분은 이 Phase에서 건너뛴다.** 프로세스 발견 알고리즘의 내부가 궁금해지면 Module 2~4를 코스 README에서 찾아 이어서 본다.

**강의를 다 보지 않고도 할 수 있는 대체 과제**: 대상 업무 하나를 2주간 직접 기록한다 — 발생 횟수, 소요 시간, 담당자, 재작업 횟수. 표 하나면 충분하고, 자동화 우선순위를 정하는 데는 이 정도로도 충분히 근거가 된다.

## 산출물

1. **업무 프로세스 지도** — 대상 회사의 주요 업무 3개 이상을 BPMN으로 그린다. 풀·레인으로 담당자를 나누고, 데이터 저장소 기호로 각 단계가 무엇을 읽고 쓰는지 표시한다.
2. **자동화 후보 우선순위표** — 각 업무 단계마다 아래 칸을 채운다.

   | 업무 단계 | 빈도 | 1회 소요 | 틀렸을 때 손해 | 필요한 정보가 어디 있는가 | 판정 |
   |---|---|---|---|---|---|

   판정은 `지금 자동화` / `Phase 4 이후` / `사람이 계속` 셋 중 하나로 적는다.
3. **계기판 항목 목록** — 이 회사가 잘 돌아가는지 판단할 숫자 5~8개. 각 숫자가 어느 시스템에 있는지(또는 없는지) 함께 적는다. 없는 숫자가 Phase 9의 과제가 된다.
4. **회사 형태 그림 v1** — 위 셋을 한 장으로 합친 그림. 이 회사가 AI 네이티브로 돌 때 **무엇이 직원이고, 무엇이 조직도이고, 사람이 어디 서는지**를 그린다. [Garry Tan의 대응표](../../courses/youtube/Tech%20Bridge/2026-07-24%20이제%20모든%20회사엔%20브레인이%20필요하다.md)를 틀로 쓴다.

   | 회사의 부품 | AI 네이티브에서의 구현 |
   |---|---|
   | 직원 | 스킬 파일 — 한 역량, 실행 가능할 만큼 명확히 적힌 하나의 업무 |
   | 조직도 | 리졸버 테이블 — 일이 들어오면 누가 맡고 어디로 보내는가 |
   | 내부 프로세스 | 파일링 규칙 — 리졸버가 제대로 도는지, 규정을 지키는지 |
   | 인사 평가 | 트리거 이벨 — 그 상황에서 그 역할이 실제로 불리는가 |
   | 회사의 기억 | 브레인 — 도서관(기록) + **사서(관리하는 사람)** |

   **v1은 틀리게 그려도 된다.** [Phase 5](05%20Phase%205%20-%20에이전트%20조직%20만들기.md)에서 실제 역할을 나누고 [Phase 11](11%20Phase%2011%20-%20캡스톤%20Company%20OS.md)에서 최종본으로 고친다. 지금 목적은 **"우리 회사에 직원이 몇 명 필요한가"를 처음 세어 보는 것**이다. 이 그림이 없으면 Phase 5·10의 산출물이 서로 안 맞물린 채 따로 논다.

## 다음 단계

→ [02 Phase 2 - AI 능력의 경계와 모델 판단](02%20Phase%202%20-%20AI%20능력의%20경계와%20모델%20판단.md)
