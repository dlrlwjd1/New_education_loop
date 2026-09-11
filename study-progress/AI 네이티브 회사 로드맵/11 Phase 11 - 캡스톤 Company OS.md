# Phase 11 — 캡스톤: Company OS

- 목표: Phase 1~10의 산출물을 하나의 시스템으로 합쳐, 회사 업무 하나가 사람 개입 없이 끝까지 돌고 그 결과가 계기판에 반영되게 만든다.
- 분량: 약 14시간
- 마지막 학습일: (미학습)

## 이 Phase는 다르다

새 개념을 배우는 단계가 아니다. **앞의 열 Phase에서 만든 것들을 연결하는 단계**다. 그래서 강의 체크리스트가 짧고 산출물 기준이 길다.

## 도착점 판정 기준

아래를 전부 만족하면 이 로드맵을 완주한 것이다.

1. **업무 하나가 사람 개입 없이 끝까지 돈다** — 트리거부터 결과 반영까지. Phase 2에서 L3(자동 실행)로 승격한 업무여야 한다.
2. **그 판단에 회사 지식이 쓰인다** — 에이전트가 사내 문서·데이터를 조회해 답을 만든다. 일반 지식만으로 되는 업무는 이 로드맵의 도착점이 아니다.
3. **역할이 나뉘어 있다** — 최소 3개 역할. 오케스트레이터 / 실행자 / 검토자.
4. **결과가 숫자로 보인다** — 처리 건수, 성공률, 비용, 절약된 시간이 계기판에 있다.
5. **틀리면 알 수 있다** — eval이 정기적으로 돌고, 조용한 실패를 잡는 알림이 하나 이상 있다.
6. **사고가 나면 추적된다** — 실행 하나를 트레이스로 열어 무엇이 왜 일어났는지 볼 수 있다.
7. **되돌릴 수 있다** — 에이전트가 한 일을 취소하거나 사람이 개입하는 경로가 있다.
8. **고칠 수 있다** — 명세를 고치고 배포하면 eval을 통과해야 반영된다.

## 참고할 캡스톤 사례

강의로 보는 것이 아니라, **막혔을 때 구조를 참고하는 용도**다.

- [ ] [17 Day 4 - Capstone Kickoff - Build an Autonomous AI Trading Floor.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%206%20-%20Week%206%20-%20MCP/17%20Day%204%20-%20Capstone%20Kickoff%20-%20Build%20an%20Autonomous%20AI%20Trading%20Floor.md) — **구조가 이 로드맵의 도착점과 가장 비슷한 캡스톤.**
- [ ] [18 Day 4 - Trading Floor Architecture - Trader and Researcher AI Agents.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%206%20-%20Week%206%20-%20MCP/18%20Day%204%20-%20Trading%20Floor%20Architecture%20-%20Trader%20and%20Researcher%20AI%20Agents.md) — 역할 분리 방식.
- [ ] [19 Day 4 - Wiring Up MCP Servers and the Researcher-as-Tool Pattern.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%206%20-%20Week%206%20-%20MCP/19%20Day%204%20-%20Wiring%20Up%20MCP%20Servers%20and%20the%20Researcher-as-Tool%20Pattern.md) — 여러 MCP 서버를 하나의 시스템에 붙이는 배선.
- [ ] [20 Day 4 - Orchestrate the Trading Floor and Launch the Gradio Dashboard.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%206%20-%20Week%206%20-%20MCP/20%20Day%204%20-%20Orchestrate%20the%20Trading%20Floor%20and%20Launch%20the%20Gradio%20Dashboard.md) — 오케스트레이션 + 화면.
- [ ] [01 Deep Research Agent Working Architecture.md](../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%2015%20-%20Deep%20Research%20AI%20Agent%20Project/01%20Deep%20Research%20Agent%20Working%20Architecture.md) — 조사·정리형 업무의 구조.
- [ ] [01 Multi-Agent Customer Support Project.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20Your%20First%20Multi-Agent%20AI%20System%20with%20CrewAI/Module%204%20-%20Course%20Wrap-Up%20and%20Practice%20Project/01%20Multi-Agent%20Customer%20Support%20Project.md) — 고객 응대형 업무의 구조.
- [ ] [17 Day 4 - Deep Agents Sub-Agents - Delegation and the Task Tool Explained.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%204%20-%20Week%204/17%20Day%204%20-%20Deep%20Agents%20Sub-Agents%20-%20Delegation%20and%20the%20Task%20Tool%20Explained.md) — 상위·하위 역할 위임 구조.
- [ ] [20 Day 5 - Intro to the Sidekick - An Autonomous AI Coworker with create_agent.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%204%20-%20Week%204/20%20Day%205%20-%20Intro%20to%20the%20Sidekick%20-%20An%20Autonomous%20AI%20Coworker%20with%20create_agent.md) — **"자율적인 동료"** 형태의 에이전트.
- [ ] [24 Day 5 - Run the Sidekick - An Autonomous AI Agent on Real-World Tasks.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%204%20-%20Week%204/24%20Day%205%20-%20Run%20the%20Sidekick%20-%20An%20Autonomous%20AI%20Agent%20on%20Real-World%20Tasks.md)
- [ ] [2026-07-27 6인 회사 지분을 사서 AI로 100% 자동화로 돌려보고 있는 개발자.md](../../courses/youtube/빌더%20조쉬%20Builder%20Josh/2026-07-27%206인%20회사%20지분을%20사서%20AI로%20100%25%20자동화로%20돌려보고%20있는%20개발자%20%28진양의%20인수창업%20김지혁님%29.md) — **마지막 읽기.** 이번엔 본인이 만든 것과 대조하며 읽는다. 무엇이 빠졌는지 보인다.

## 조립 순서

앞 Phase의 산출물을 아래 순서로 연결한다.

1. **업무 하나를 고른다** — Phase 1의 우선순위표에서 `지금 자동화` 중 Phase 6의 eval을 통과한 것.
2. **트리거를 정한다** — 무엇이 이 업무를 시작시키는가. 시간(스케줄), 이벤트(메일 도착·상태 변화), 사람 요청 중 하나.
3. **역할을 배선한다** — Phase 5의 조직도대로 오케스트레이터에게 트리거를 물리고, 실행자와 검토자를 연결한다.
4. **지식과 도구를 연결한다** — Phase 4의 지식베이스와 MCP 서버를 각 역할에 붙인다. 권한은 Phase 7의 매트릭스대로 최소로.
5. **결과를 기록한다** — 처리 결과를 Phase 9의 데이터 파이프라인에 흘려보내 계기판에 반영한다.
6. **eval을 파이프라인에 건다** — Phase 8의 배포 파이프라인에 Phase 6의 eval을 넣는다.
7. **알림과 트레이싱을 켠다** — Phase 7·8의 관측과 알림 규칙을 이 시스템에 적용한다.
8. **한 주 돌리고 되돌아본다** — 트레이스를 열어 실패를 분류하고(Phase 6의 오류 분류표) 가장 많은 유형부터 고친다.

## 산출물

1. **돌아가는 Company OS** — 위 판정 기준 8개를 만족하는 시스템.
2. **시스템 문서 하나** — 다른 사람(또는 6개월 뒤의 본인)이 읽고 운영할 수 있는 문서. 최소한 아래를 담는다.
   - 이 시스템이 무슨 업무를 하는가 · 역할과 배선도 · 각 역할의 권한과 모델 · 승인 지점 · 무엇이 울리면 무엇을 하는가 · eval을 어떻게 돌리는가 · 고칠 때의 절차
3. **1개월 운영 기록** — 처리 건수, 성공률, 사람 개입 횟수, 비용, **Phase 1에서 측정한 기존 소요 시간과의 비교**. 이 비교가 이 로드맵의 최종 증거다.
4. **다음 업무 목록** — 이 구조에 태울 두 번째·세 번째 업무. Phase 1의 우선순위표에서 다음 것들. **한 번 만든 배선을 재사용할 수 있는지**가 이 시스템이 OS인지 일회성 자동화인지를 가른다.
5. **회사 형태 그림 최종본** — [Phase 1](01%20Phase%201%20-%20회사를%20시스템으로%20본다.md)에서 v1으로 그린 그림을 실제로 만든 것과 대조해 고친 것. **v1과 무엇이 달라졌는지 함께 적는다.** 직원(스킬) 수, 리졸버 줄 수, 사람이 남은 자리가 처음 추측과 얼마나 달랐는가 — 그 차이가 이 로드맵에서 실제로 배운 것이다.

## 완주한 다음

- **두 번째 업무를 태운다.** 첫 업무는 14시간이 걸렸지만 두 번째는 훨씬 짧아야 정상이다. 그렇지 않다면 Phase 4·5의 재사용 구조가 부족한 것이다.
- **[12 부록 - 사업 확보와 수익 구조](12%20부록%20-%20사업%20확보와%20수익%20구조.md)** — 이 시스템을 다른 사업에도 적용하고 싶을 때.
- **관련 로드맵으로 넓힌다** — 운영 인프라는 **개발운영 로드맵**, 개발 흐름은 [스펙 주도 개발 로드맵](../스펙%20주도%20개발%20로드맵/), 고객 확보는 **마케팅 로드맵**.
