# Phase 7 — 관측과 보안

- 목표: 에이전트가 무엇을 왜 했는지 사후에 추적할 수 있게 만들고, 사내 데이터와 권한을 쥔 에이전트가 공격당하거나 사고 치는 경로를 막는다.
- 분량: 약 11시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 에이전트 실행 하나를 트레이스로 열어 어느 단계에서 무엇이 잘못됐는지 짚을 수 있다.
- 프로덕션 로그에 무엇을 남기고 무엇을 남기면 안 되는지 구분할 수 있다.
- 프롬프트 인젝션과 탈옥(jailbreak)이 사내 에이전트에서 어떻게 실현되는지 설명하고 막을 수 있다.
- 에이전트마다 권한을 최소로 나누고 가드레일을 걸 수 있다.
- 회사가 지켜야 할 규정(개인정보·감사)이 에이전트 운영에 무엇을 요구하는지 말할 수 있다.
- 에이전트마다 소유자와 권한을 등록한 **에이전트 대장(registry)** 을 만들고 쓰지 않는 것을 폐기할 수 있다.
- 감사 로그 보관 기간과 AI 관여 고지 의무가 무엇을 요구하는지 알고 그에 맞춰 운영할 수 있다.

> **2026-09-03 보강 (1) — 에이전트도 계정이다.** 아래 7-C가 데이터와 모델의 출처·규정을 다루지만, **에이전트 자체를 관리 대상 신원(non-human identity)으로 다루는 관점**이 빠져 있었다. 에이전트가 3개일 때는 문제가 안 되고 30개가 되면 "이 에이전트를 누가 왜 만들었는지 아무도 모르는" 상태가 된다. Microsoft가 사내 30만 명 규모로 에이전트를 운영하며 정리한 최소 요건은 아래 넷이다.
>
> - **에이전트 대장** — 에이전트마다 소유자(사람) · 만든 목적 · 접근 범위 · 만든 날짜
> - **생성자 권한 상속** — 에이전트는 만든 사람보다 넓은 권한을 가질 수 없다
> - **리스크 티어링** — 위험도 등급으로 나눠 감사 주기를 달리한다
> - **소유권 재확인과 폐기 경로** — 주기적으로 "아직 필요한가"를 묻고, 아니면 지운다
>
> 아래 산출물 4번 **권한 매트릭스에 소유자·생성일·폐기 예정일 칸을 추가**하면 이 요건이 대부분 충족된다. 출처: [Governing AI agents at scale (Microsoft)](https://www.microsoft.com/insidetrack/blog/governing-ai-agents-at-scale-lessons-from-our-journey-at-microsoft/), [BeyondTrust](https://www.beyondtrust.com/blog/entry/ai-agent-identity-governance-least-privilege) (2026-09-03 확인)

> **2026-09-03 보강 (2) — 규정이 구체적으로 요구하는 것.** 7-C의 강의는 GDPR·NIST·ISO를 개괄하지만 에이전트 운영에 직접 걸리는 조항은 짚지 않는다. EU AI Act 제26조(고위험 AI 시스템 배치자의 의무)에서 이 로드맵에 바로 적용되는 것은 아래 넷이다. **EU 고객이나 직원이 없으면 법적 의무는 아니지만, 감사 가능한 운영의 최소 기준으로 쓸 만하다.**
>
> - 사람 감독을 맡을 **담당자를 역량·권한과 함께 지정**한다 — 26(2)
> - 시스템이 만든 **로그를 최소 6개월 보관**한다 — 26(6)
> - 업무에 AI를 투입하기 전에 **직원에게 알린다** — 26(7)
> - AI가 관여한 결정의 **당사자에게 그 사실을 알린다** — 26(11)
>
> 출처: [EU AI Act Article 26](https://artificialintelligenceact.eu/article/26/) (2026-09-03 확인)

> **2026-09-03 보강 (3) — 트레이싱은 벤더 중립으로 붙인다.** OpenTelemetry의 GenAI semantic conventions(`gen_ai.*`)가 2026-06 이후 별도 저장소로 분리돼 관리되고 있고, Langfuse·LangSmith·Arize Phoenix·Braintrust가 모두 이 스팬을 받는다. `invoke_agent` 스팬이 하위 chat·execute_tool 스팬의 루트가 되는 구조다. 다만 **아직 전부 Development 상태이고 정식 릴리스 태그가 없다** — "표준이지만 미완"으로 다루고 도구를 갈아탈 여지를 남겨 둔다. MCP 쪽에서도 `_meta`의 `traceparent`/`tracestate`로 트레이스 컨텍스트를 전파하는 규약이 생겼다([Phase 4의 MCP 스펙 주의](04%20Phase%204%20-%20회사%20지식과%20시스템%20연결.md) 참조). 출처: [OTel GenAI agent spans](https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-agent-spans.md) (2026-09-03 확인)

> **이 Phase는 Phase 8(배포) 앞에 있어야 한다.** 관측 없이 프로덕션에 올린 에이전트는 사고가 나도 원인을 못 찾고, 가드레일 없이 사내 권한을 쥔 에이전트는 사고 자체가 크다.

## 7-A. 에이전트 실행을 들여다본다

메인: The Complete Agentic AI Engineering Masterclass, Section 13 + Agentic Track의 트레이싱 실습.

- [ ] [01 Implementing Observability for Agents.md](../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%2013%20-%20Observability/01%20Implementing%20Observability%20for%20Agents.md)
- [ ] [02 Logging in Production.md](../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%2013%20-%20Observability/02%20Logging%20in%20Production.md) — **프로덕션 로깅.** 사내 데이터가 로그에 그대로 남는 사고가 여기서 갈린다.
- [ ] [23 Day 5 - Inspecting Traces and Your Capstone Trading Floor Challenge.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%206%20-%20Week%206%20-%20MCP/23%20Day%205%20-%20Inspecting%20Traces%20and%20Your%20Capstone%20Trading%20Floor%20Challenge.md) — **트레이스를 실제로 열어 보는 실습.**
- [ ] [07 Day 1 - Build a Web-Browsing AI Agent with MCP Servers and Traces.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%206%20-%20Week%206%20-%20MCP/07%20Day%201%20-%20Build%20a%20Web-Browsing%20AI%20Agent%20with%20MCP%20Servers%20and%20Traces.md)
- [ ] [03 Day 1 - Build Your First Agent with OpenAI Agents SDK - Runner and Tracing.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%202%20-%20Week%202/03%20Day%201%20-%20Build%20Your%20First%20Agent%20with%20OpenAI%20Agents%20SDK%20-%20Runner%20and%20Tracing.md)
- [ ] [06 Day 2 - LangSmith, Supersteps and Checkpointers for LangGraph Agents.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%204%20-%20Week%204/06%20Day%202%20-%20LangSmith,%20Supersteps%20and%20Checkpointers%20for%20LangGraph%20Agents.md) — 체크포인트로 실행을 되감는 법.
- [ ] [08 Day 2 - LangGraph Memory and Time Travel - MemorySaver, SQLite and Replay.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%204%20-%20Week%204/08%20Day%202%20-%20LangGraph%20Memory%20and%20Time%20Travel%20-%20MemorySaver,%20SQLite%20and%20Replay.md) — **실행을 되감아 재현하는 법.** 사고 조사에 그대로 쓴다.

함께 보기:

- [ ] [04 Logging, Monitoring, and Observability.md](../../courses/deeplearning-ai/Retrieval%20Augmented%20Generation/module%2005/04%20Logging,%20Monitoring,%20and%20Observability.md) — 지식베이스 쪽 관측.
- [ ] [2026-07-08 Your agent is blindfolded.md](../../courses/youtube/AI%20Engineer/2026-07-08%20Your%20agent%20is%20blindfolded.md) — 에이전트가 자기 상태를 못 보는 문제를 다룬 강연.
- [ ] [02 Monitoring and Observability.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%202%20-%20Error%20Budgets%20%26%20Observability/02%20Monitoring%20and%20Observability.md) — 시스템 관측 일반. 에이전트도 결국 서비스다.
- [ ] [04 Correlating Observability Data.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%202%20-%20Error%20Budgets%20%26%20Observability/04%20Correlating%20Observability%20Data.md)

## 7-B. 공격 표면을 안다

메인: Generative AI and LLM Security, Module 1 전체. **사내 데이터와 도구 권한을 쥔 에이전트에 그대로 해당한다.**

- [ ] [03 Common Attack Vectors in Generative AI Systems.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/03%20Common%20Attack%20Vectors%20in%20Generative%20AI%20Systems.md)
- [ ] [04 Prompt Injection Attack.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/04%20Prompt%20Injection%20Attack.md) — **프롬프트 인젝션.** 고객 문의·외부 문서를 읽는 에이전트가 있으면 이건 이론이 아니라 현실이다.
- [ ] [05 AI Jailbreak Attack.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/05%20AI%20Jailbreak%20Attack.md)
- [ ] [06 Demonstration - Detecting Prompt Injection and Jailbreak Risks.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/06%20Demonstration%20-%20Detecting%20Prompt%20Injection%20and%20Jailbreak%20Risks.md)
- [ ] [08 Mitigation Strategies for GenAI Risks.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/08%20Mitigation%20Strategies%20for%20GenAI%20Risks.md)
- [ ] [09 LLM-Specific Threats and Risks.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/09%20LLM-Specific%20Threats%20and%20Risks.md)
- [ ] [10 Aligning LLM Output to Security Objectives.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/10%20Aligning%20LLM%20Output%20to%20Security%20Objectives.md)
- [ ] [11 Guardrails and Safety Mechanisms for LLMs.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%201%20-%20Threats%20in%20Generative%20AI%20Systems/11%20Guardrails%20and%20Safety%20Mechanisms%20for%20LLMs.md) — **가드레일.** 이 절의 결론 강의.

에이전트 고유의 위협:

- [ ] [04 What is Agentic AI.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%204%20-%20Frontier%20Threats%20in%20AI%20Systems/04%20What%20is%20Agentic%20AI.md)
- [ ] [05 Agentic AI in Cybersecuriy.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%204%20-%20Frontier%20Threats%20in%20AI%20Systems/05%20Agentic%20AI%20in%20Cybersecuriy.md)
- [ ] [16 Day 3 - Build Guardrails for AI Agents Plus Sandboxes and MCP.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%202%20-%20Week%202/16%20Day%203%20-%20Build%20Guardrails%20for%20AI%20Agents%20Plus%20Sandboxes%20and%20MCP.md) — **가드레일과 샌드박스 구현.** Phase 3에서 코드 실행 도구를 붙였다면 필수.
- [ ] [17 Day 4 - Run Python in a Docker Sandbox with a CrewAI Coding Agent.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%203%20-%20Week%203/17%20Day%204%20-%20Run%20Python%20in%20a%20Docker%20Sandbox%20with%20a%20CrewAI%20Coding%20Agent.md) — 도커 샌드박스 실물.
- [ ] [04 Adversarial attacks on AI.md](../../courses/deeplearning-ai/AI%20for%20Everyone/week%2004%20AI%20and%20Society/04%20Adversarial%20attacks%20on%20AI.md)

> **2026-09-03 — 여기는 개념까지다.** 위 강의들은 공격 유형과 완화 전략을 **설명**하지만, 자기 에이전트를 직접 공격해 보고 방어를 구현하는 실습은 없다. 사내 에이전트가 고객 입력이나 외부 문서를 읽는다면 한 번은 직접 해 봐야 한다. 강의로 채우려면 [부록 B의 2026-09-03 재탐색](13%20부록%20-%20추천%20강의%20종합.md)에 **AI Security Masterclass: Prompt Injection & LLM Security**(Udemy · 11h42m · 유료 · **미확보**)를 정리해 두었다 — 툴 호출과 메모리를 가진 에이전트를 만들어 공격한 뒤 방어 컨트롤을 구현하는 구성이다. 강의 없이 갈음하려면 위 산출물 3번(위협 모델 문서)의 시나리오 5개를 **실제로 자기 에이전트에 시도해 보고** 결과를 기록한다.

## 7-C. 권한·출처·규정

메인: Generative AI and LLM Security, Module 2 후반 + Module 3.

- [ ] [02 Data Poisoning and Detection Techniques.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%202%20-%20AI%20Lifecycle%20Security/02%20Data%20Poisoning%20and%20Detection%20Techniques.md) — **지식베이스 오염.** 누구나 문서를 쓸 수 있는 사내 위키를 색인했다면 이게 실제 위협이다.
- [ ] [05 Model Provenance and Lineage Tracking.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%202%20-%20AI%20Lifecycle%20Security/05%20Model%20Provenance%20and%20Lineage%20Tracking.md)
- [ ] [06 Dependency Scanning and Third-Party Model Risks.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%202%20-%20AI%20Lifecycle%20Security/06%20Dependency%20Scanning%20and%20Third-Party%20Model%20Risks.md) — 외부 MCP 서버를 붙일 때의 공급망 위험.
- [ ] [10 Monitoring for Tampering in Pre-Post-Deployment.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%202%20-%20AI%20Lifecycle%20Security/10%20Monitoring%20for%20Tampering%20in%20Pre-Post-Deployment.md)
- [ ] [01 Bias, Fairness, and Ethical Design in AI Systems.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%203%20-%20AI%20Ethics%20and%20Regulatory%20Compliance/01%20Bias,%20Fairness,%20and%20Ethical%20Design%20in%20AI%20Systems.md)
- [ ] [02 Transparency and Accountability in GenAI Systems.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%203%20-%20AI%20Ethics%20and%20Regulatory%20Compliance/02%20Transparency%20and%20Accountability%20in%20GenAI%20Systems.md) — **에이전트가 한 일의 책임은 누구에게 있는가.** 회사 운영에 직결된다.
- [ ] [04 GDPR, CCPA, and AI Compliance Requirements.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%203%20-%20AI%20Ethics%20and%20Regulatory%20Compliance/04%20GDPR,%20CCPA,%20and%20AI%20Compliance%20Requirements.md) — 고객 데이터를 다루는 에이전트가 있으면 필수.
- [ ] [05 Understanding NIST and ISO AI Risk Frameworks.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%203%20-%20AI%20Ethics%20and%20Regulatory%20Compliance/05%20Understanding%20NIST%20and%20ISO%20AI%20Risk%20Frameworks.md)
- [ ] [06 AI Auditing and Legal Considerations.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Generative%20AI%20and%20LLM%20Security/Module%203%20-%20AI%20Ethics%20and%20Regulatory%20Compliance/06%20AI%20Auditing%20and%20Legal%20Considerations.md) — **감사.** 7-A의 트레이스가 여기 증거가 된다.

함께 보기:

- [ ] [03 Responsible AI.md](../../courses/deeplearning-ai/Generative%20AI%20for%20Everyone/week%2003%20Generative%20AI%20in%20Business%20and%20Society/Generative%20AI%20and%20society/03%20Responsible%20AI.md)
- [ ] [03 Bias in AI.md](../../courses/deeplearning-ai/AI%20for%20Everyone/week%2004%20AI%20and%20Society/03%20Bias%20in%20AI.md)
- [ ] [2026-07-26 코드 리뷰 없앤 지 3개월, 사이트가 터졌습니다.md](../../courses/youtube/Tech%20Bridge/2026-07-26%20코드%20리뷰%20없앤%20지%203개월,%20사이트가%20터졌습니다.md) — **검토를 없앴을 때 실제로 벌어진 일.** 자율성을 올리기 전에 읽는다.

건너뛰어도 되는 것: Module 4의 멀티모달 위협(01·02·03)과 Sola Security 도구 데모(M3의 07·08). 회사가 이미지·음성을 다루기 시작하면 그때 돌아온다.

## 산출물

1. **트레이싱이 붙은 에이전트 시스템** — Phase 5의 멀티 에이전트 전체 실행이 하나의 트레이스로 보여야 한다. 최소한 아래가 기록돼야 한다: 어떤 에이전트가 · 어떤 입력으로 · 어떤 도구를 · 어떤 인자로 호출했고 · 토큰과 비용이 얼마였는가.
2. **로그 정책** — 무엇을 남기고 무엇을 마스킹할지. 사내 데이터 투입 기준(Phase 4)과 대조해 모순이 없는지 확인한다.
3. **위협 모델 문서** — 이 회사의 에이전트가 공격받는 시나리오를 5개 이상 적고, 각각의 차단 수단을 붙인다. 최소한 아래는 포함한다.
   - 고객이 보낸 문자열이 에이전트 지시로 해석되는 경로
   - 사내 위키에 심어진 문장이 지식베이스를 통해 실행되는 경로
   - 에이전트가 자기 권한을 넘어 쓰기 작업을 하는 경로
   - 로그·트레이스에 민감 정보가 남는 경로
4. **권한 매트릭스** — 에이전트별로 어떤 MCP 도구에 읽기/쓰기 권한이 있는지. **쓰기 권한은 승인 지점(Phase 5)과 반드시 짝지어 둔다.**
5. **갱신된 사내 데이터 투입 기준** — Phase 4에서 만든 표를 여기 배운 것으로 다시 본다.

## 다음 단계

→ [08 Phase 8 - 배포와 운영](08%20Phase%208%20-%20배포와%20운영.md)
