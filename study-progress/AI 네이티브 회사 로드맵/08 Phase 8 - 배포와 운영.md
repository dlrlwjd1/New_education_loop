# Phase 8 — 배포와 운영

- 목표: 에이전트를 노트북이 아니라 회사 인프라에서 계속 돌게 만들고, 코드 변경과 장애 대응을 절차로 만든다.
- 분량: 약 13시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 명세를 먼저 쓰고 코딩 에이전트에게 구현시키는 흐름으로 회사 코드를 만들 수 있다.
- 에이전트를 컨테이너로 감싸 클라우드에서 계속 돌게 할 수 있다.
- 변경 사항이 eval을 통과해야만 배포되는 파이프라인을 만들 수 있다.
- 에이전트가 멈추거나 이상하게 굴 때 알림을 받고 대응 절차를 따를 수 있다.
- 무엇을 SLO로 잡을지 정하고 에러 예산으로 판단할 수 있다.
- 장시간 실행되는 에이전트가 중단됐을 때 **처음부터가 아니라 끊긴 지점부터 재개**하게 만들 수 있다.
- 새 에이전트를 **복제 데이터에서 먼저 돌려 본 뒤 프로덕션으로 승격**하는 절차를 운영할 수 있다.

> **2026-09-03 보강 — 배포 파이프라인만으로 부족한 두 가지.**
>
> **1. 재개 가능한 체크포인트(durable execution).** 회사 업무는 몇 초가 아니라 몇 시간·며칠 걸린다. 중간에 API가 끊기거나 프로세스가 죽었을 때 처음부터 다시 돌리면 비용과 시간이 두 배로 든다. Anthropic이 멀티 에이전트 리서치 시스템을 운영하며 꼽은 필수 요건이 **각 단계마다 상태를 저장하고 그 지점부터 재개하는 구조**와 **무중단 배포**다. 저장소에 재료가 이미 있다 — [Phase 7](07%20Phase%207%20-%20관측과%20보안.md)에 사고 재현용으로 들어간 LangGraph MemorySaver·Time Travel 강의의 **같은 체크포인터가 재개에도 쓰인다.** 여기서는 그 관점으로 다시 본다.
>
> **2. 샌드박스 후 승격(sandbox-then-promote).** 에이전트가 만든 코드나 액션을 바로 프로덕션 데이터에 적용하지 않고, **복제한 데이터에서 먼저 실행해 결과를 확인한 뒤 승격**한다. 8-B의 배포 파이프라인에 "복제 환경 실행 → 사람 확인 → 프로덕션 승격" 단계를 하나 더 끼우는 것이다. [Phase 6](06%20Phase%206%20-%20평가와%20오류%20분석.md)의 eval이 자동 판정을 맡고, 이 단계가 **자동 판정으로 안 잡히는 것**을 맡는다.
>
> 출처: [Anthropic, How we built our multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system), [Microsoft, Becoming a frontier firm](https://www.microsoft.com/insidetrack/blog/becoming-a-frontier-firm-a-guide-for-deploying-ai-agents-based-on-our-experience-at-microsoft/) (2026-09-03 확인)

> **다른 로드맵과 겹친다.** 8-A는 [스펙 주도 개발 로드맵](../스펙%20주도%20개발%20로드맵/), 8-C는 **개발운영 로드맵**이 훨씬 자세히 다룬다. 여기서는 **에이전트를 돌리는 데 필요한 만큼만** 고른다. 이미 그쪽에서 봤다면 바로 체크하고 넘어간다.

## 8-A. AI로 코드를 만든다 — 스펙 주도 개발

메인: Spec-Driven Development with Coding Agents (15강). 짧고 흐름이 하나로 이어진다.

- [ ] [02 Why Spec-Driven Development.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/02%20Why%20Spec-Driven%20Development.md)
- [ ] [03 Workflow Overview.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/03%20Workflow%20Overview.md)
- [ ] [05 Creating the Constitution.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/05%20Creating%20the%20Constitution.md) — Phase 5에서 봤으면 건너뛴다.
- [ ] [06 Feature Specification.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/06%20Feature%20Specification.md)
- [ ] [07 Feature Implementation.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/07%20Feature%20Implementation.md)
- [ ] [08 Feature Validation.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/08%20Feature%20Validation.md) — **검증 단계.** Phase 6의 eval을 여기 끼운다.
- [ ] [09 Project Replanning.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/09%20Project%20Replanning.md)
- [ ] [12 Legacy Support.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/12%20Legacy%20Support.md) — **인수한 코드베이스에 도입하는 법.** 기존 사업을 이어받았다면 이 강의가 가장 실용적이다.
- [ ] [13 Build Your Own Workflow.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/13%20Build%20Your%20Own%20Workflow.md)
- [ ] [14 Agent Replaceability.md](../../courses/deeplearning-ai/Spec-Driven%20Development%20with%20Coding%20Agents/14%20Agent%20Replaceability.md) — **에이전트를 갈아끼울 수 있게 만드는 법.** 모델·도구가 계속 바뀌는 환경에서 회사를 묶어두지 않는 조건.

함께 보기: 스킬과 하위 에이전트로 개발 흐름 자체를 자동화하기.

- [ ] [03 Custom Slash Commands and Skills.md](../../courses/udemy/Coding%20with%20AI/module%207/03%20Custom%20Slash%20Commands%20and%20Skills.md)
- [ ] [04 Designing the Feature Skill Workflow.md](../../courses/udemy/Coding%20with%20AI/module%207/04%20Designing%20the%20Feature%20Skill%20Workflow.md) — **기능 개발 절차를 스킬로 굳히는 법.**
- [ ] [08 Introduction to Sub-Agents.md](../../courses/udemy/Coding%20with%20AI/module%207/08%20Introduction%20to%20Sub-Agents.md)
- [ ] [09 Creating a Code Scanner Sub-Agent.md](../../courses/udemy/Coding%20with%20AI/module%207/09%20Creating%20a%20Code%20Scanner%20Sub-Agent.md) — 검토 담당 하위 에이전트. Phase 5의 평가자 패턴이 코드에 적용된 형태.
- [ ] [01 Vibe Coding Agents.md](../../courses/udemy/The%20Complete%20Agentic%20AI%20Engineering%20Masterclass%20%282026%29/Section%2014%20-%20Spec-Driven%20Vibe%20Coding%20Agents/01%20Vibe%20Coding%20Agents.md)
- [ ] [2026-07-20 클로드 코드로 기획부터 자동 루프 실행까지 40분 만에 끝내는 법.md](../../courses/youtube/Tech%20Bridge/2026-07-20%20클로드%20코드로%20기획부터%20자동%20루프%20실행까지%2040분%20만에%20끝내는%20법.md)

## 8-B. 배포하고 계속 돌린다

메인: Google Cloud Tech의 배포 3부작. **에이전트를 실제 서비스로 올리는 가장 짧은 경로**다.

- [ ] [2026-07-08 How to deploy an AI agent to Cloud Run (step by step).md](../../courses/youtube/Google%20Cloud%20Tech/Modern%20AI%20Agents%20-%20From%20Theory%20to%20Production/2026-07-08%20How%20to%20deploy%20an%20AI%20agent%20to%20Cloud%20Run%20%28step%20by%20step%29.md)
- [ ] [2025-10-21 Autoscaling your AI agent under load.md](../../courses/youtube/Google%20Cloud%20Tech/Building%20distributed%20AI%20agents/2025-10-21%20Autoscaling%20your%20AI%20agent%20under%20load.md)
- [ ] [2026-01-08 Scaling your AI agent architecture with Cloud Run.md](../../courses/youtube/Google%20Cloud%20Tech/Building%20distributed%20AI%20agents/2026-01-08%20Scaling%20your%20AI%20agent%20architecture%20with%20Cloud%20Run.md)
- [ ] [2026-01-15 Running a multi-agent AI architecture.md](../../courses/youtube/Google%20Cloud%20Tech/Building%20distributed%20AI%20agents/2026-01-15%20Running%20a%20multi-agent%20AI%20architecture.md)
- [ ] [2025-10-15 Connecting your AI agent to a cloud hosted LLM.md](../../courses/youtube/Google%20Cloud%20Tech/Building%20distributed%20AI%20agents/2025-10-15%20Connecting%20your%20AI%20agent%20to%20a%20cloud%20hosted%20LLM.md)

컨테이너 기초 — Master DevOps Course 4에서 **꼭 필요한 것만** 고른다.

- [ ] [06 Introduction to Containerization.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/06%20Introduction%20to%20Containerization.md)
- [ ] [08 How Containers Work.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/08%20How%20Containers%20Work.md)
- [ ] [16 Docker Architecture - Architectural Diagram.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/16%20Docker%20Architecture%20-%20Architectural%20Diagram.md)
- [ ] [18 Docker Container Lifecycle.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/18%20Docker%20Container%20Lifecycle.md)
- [ ] [20 Docker CLI Commands - General and Container Management Commands.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/20%20Docker%20CLI%20Commands%20-%20General%20and%20Container%20Management%20Commands.md)
- [ ] [26 Port Binding - Introduction and Types.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%201%20-%20Containerization%20using%20Docker/26%20Port%20Binding%20-%20Introduction%20and%20Types.md)

건너뛰어도 되는 것: 쿠버네티스(Course 4 Module 3~4). 에이전트 몇 개를 돌리는 데는 과하다. 트래픽이 커지면 [데브옵스 로드맵](../데브옵스%20로드맵/)으로 간다.

CI/CD — 변경이 eval을 통과해야 배포되게 만든다.

- [ ] [02 Introduction to Continuous Integration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/02%20Introduction%20to%20Continuous%20Integration.md)
- [ ] [19 Pipeline as Code with Jenkinsfile.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/19%20Pipeline%20as%20Code%20with%20Jenkinsfile.md)
- [ ] [29 Automated Testing with Jenkins.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/29%20Automated%20Testing%20with%20Jenkins.md) — **여기에 Phase 6의 eval을 끼운다.**
- [ ] [30 Continuous Deployment Using Jenkins.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%202%20-%20Continuous%20Integration%20and%20Continuous%20Deployment/Module%202%20-%20Continuous%20Integration%20and%20Deployment%20using%20Jenkins/30%20Continuous%20Deployment%20Using%20Jenkins.md)
- [ ] [01 CI-CD, Migrations, and Database Drift.md](../../courses/udemy/Coding%20with%20AI/module%207/01%20CI-CD,%20Migrations,%20and%20Database%20Drift.md) — **DB 마이그레이션이 배포와 어긋나는 문제.** 실제 사업 DB를 건드리면 바로 만난다.
- [ ] [02 Deploying to Vercel.md](../../courses/udemy/Coding%20with%20AI/module%207/02%20Deploying%20to%20Vercel.md)

가볍게 올려 보는 경로:

- [ ] [30 Day 5 - Deploy Your Digital Twin AI Agent to Hugging Face Spaces.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%201%20-%20Week%201/30%20Day%205%20-%20Deploy%20Your%20Digital%20Twin%20AI%20Agent%20to%20Hugging%20Face%20Spaces.md)
- [ ] [22 Day 5 - Ship the Trading App - FastAPI Backend and React Front End.md](../../courses/udemy/AI%20Engineer%20Agentic%20Track%20-%20The%20Complete%20Agent%20%26%20MCP%20Course/Section%206%20-%20Week%206%20-%20MCP/22%20Day%205%20-%20Ship%20the%20Trading%20App%20-%20FastAPI%20Backend%20and%20React%20Front%20End.md) — **에이전트 시스템에 사람용 화면을 붙이는 실물.** 캡스톤에서 그대로 쓴다.

## 8-C. 멈췄을 때 알고 대응한다

메인: Foundations of Site Reliability Engineering Training에서 필요한 것만.

- [ ] [04 Core Concepts in SRE.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%201%20-%20SRE%20Foundations/04%20Core%20Concepts%20in%20SRE.md)
- [ ] [06 Demo - Creating SLIs, SLOs, and SLAs for a Sample Service.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%201%20-%20SRE%20Foundations/06%20Demo%20-%20Creating%20SLIs,%20SLOs,%20and%20SLAs%20for%20a%20Sample%20Service.md) — **에이전트의 SLO는 무엇인가.** 응답 시간뿐 아니라 "eval 통과율"을 SLI로 잡는 발상이 여기서 나온다.
- [ ] [07 Understanding Error Budgets - Concepts and Benefits.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%201%20-%20SRE%20Foundations/07%20Understanding%20Error%20Budgets%20-%20Concepts%20and%20Benefits.md) — **에러 예산.** 에이전트가 얼마나 틀려도 되는지를 미리 정하는 도구.
- [ ] [01 Incident Management.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%203%20-%20Incident%20Management%20%26%20Toil%20Reduction/01%20Incident%20Management.md)
- [ ] [02 Blameless Postmortem.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%203%20-%20Incident%20Management%20%26%20Toil%20Reduction/02%20Blameless%20Postmortem.md) — 사후 분석. **에이전트가 낸 사고에도 같은 절차를 쓴다.**
- [ ] [07 Toil Reduction.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%203%20-%20Incident%20Management%20%26%20Toil%20Reduction/07%20Toil%20Reduction.md) — **토일(toil) 줄이기.** 이 로드맵 전체의 목적을 SRE 언어로 표현한 것이다.
- [ ] [03 Overview of Alert Fatigue.md](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/Module%202%20-%20Error%20Budgets%20%26%20Observability/03%20Overview%20of%20Alert%20Fatigue.md)

알림 설계:

- [ ] [05 Alerting Strategies and Alert Fatigue.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%202%20-%20Visualization,%20Alerting,%20and%20Logging%20Pipelines/05%20Alerting%20Strategies%20and%20Alert%20Fatigue.md) — **무엇에 알림을 걸 것인가.** 에이전트는 조용히 틀리므로 전통적 에러 알림만으로는 부족하다.
- [ ] [06 Demonstration - Creating Alert Rules in Prometheus.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%202%20-%20Visualization,%20Alerting,%20and%20Logging%20Pipelines/06%20Demonstration%20-%20Creating%20Alert%20Rules%20in%20Prometheus.md)
- [ ] [07 Demonstration - Configuring Alertmanager for Notifications.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%202%20-%20Visualization,%20Alerting,%20and%20Logging%20Pipelines/07%20Demonstration%20-%20Configuring%20Alertmanager%20for%20Notifications.md)
- [ ] [09 Structured Logging and Log Pipelines.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%202%20-%20Visualization,%20Alerting,%20and%20Logging%20Pipelines/09%20Structured%20Logging%20and%20Log%20Pipelines.md)

## 산출물

1. **명세 → 구현 → 검증 흐름** — 회사 코드 변경 하나를 이 흐름으로 처음부터 끝까지 통과시킨다. 명세 문서와 검증 결과를 남긴다.
2. **에이전트 배포 파이프라인** — 코드 변경 → 자동 테스트 → **Phase 6 eval 실행** → 통과 시에만 배포. eval이 통과 못 하면 배포가 막혀야 한다.
3. **에이전트 SLO 정의** — 최소 3개. 예: 업무 1건 처리 성공률, 평균 처리 시간, 사람 개입 요청 비율. 각각의 에러 예산을 정한다.
4. **알림 규칙과 온콜 절차** — 무엇이 울리면 누가 무엇을 하는가. **에이전트가 조용히 틀리는 경우**를 잡을 규칙이 최소 하나 있어야 한다(예: 사람 승인 거절률 급증).
5. **사후 분석 양식** — 에이전트가 사고를 냈을 때 채우는 문서. Phase 7의 트레이스가 근거 자료가 된다.

## 다음 단계

→ [09 Phase 9 - 사업 계기판](09%20Phase%209%20-%20사업%20계기판.md)
