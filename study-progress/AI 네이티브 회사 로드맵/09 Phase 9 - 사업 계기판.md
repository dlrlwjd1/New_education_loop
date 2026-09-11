# Phase 9 — 사업 계기판

- 목표: Phase 1에서 정한 계기판 항목을 실제 숫자로 만들고, 사람과 에이전트가 둘 다 그 숫자를 볼 수 있게 한다.
- 분량: 약 11시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 흩어진 업무 데이터를 한 곳에 모으는 파이프라인을 만들 수 있다.
- 사업 질문을 SQL로 옮겨 답을 뽑을 수 있고, 그 쿼리가 맞는지 검증할 수 있다.
- 판단에 쓰는 대시보드를 만들 수 있다 — 보기 좋은 것이 아니라 결정을 바꾸는 것.
- 에이전트가 지표를 직접 조회해 판단 근거로 쓰게 만들 수 있다.
- 성과가 나지 않는 자동화를 **접기로 판단**하고 그 근거를 계기판에서 댈 수 있다.

> **2026-09-03 보강 — 계기판은 접을 것을 고르는 도구이기도 하다.** 계기판을 "잘 되고 있는지 보는 화면"으로만 쓰면 실패한 자동화가 조용히 남는다. 기업 AI 도입 조사에서 반복되는 실패 형태가 **성과 없는 파일럿이 종료되지 않고 누적되는 것**이고(MIT NANDA 보고서는 파일럿의 95%가 ROI에 못 미쳤다고 보고한다), 실제 AI 책임자 직무기술서에는 **성과 없는 이니셔티브를 종료(sunset)시키는 것**이 명시적 책임으로 들어간다.
>
> 산출물 2번(사업 계기판)에서 각 숫자 옆에 적는 "이게 나빠지면 무엇을 한다" 아래에 **"언제까지 이 숫자가 안 나오면 접는다"** 를 한 줄 더 적는다. 접기로 한 자동화는 [Phase 7](07%20Phase%207%20-%20관측과%20보안.md)의 에이전트 대장에서도 함께 폐기한다.
>
> 출처: [MIT NANDA 보고 요약](https://virtualizationreview.com/articles/2025/08/19/mit-report-finds-most-ai-business-investments-fail-reveals-genai-divide.aspx) (원문 PDF는 미확인), [Head of AI 직무기술서](https://www.digitalwaffle.co/job-descriptions/head-of-ai) (2026-09-03 확인)

> **이 Phase가 피드백 루프를 닫는다.** 지금까지는 에이전트가 일을 *했다*. 여기서부터는 그 일이 사업 숫자에 무엇을 했는지 에이전트가 볼 수 있게 된다. 빌더 조쉬 사례의 "닫힌 피드백 루프"가 이 단계다.

## 9-A. 업무 데이터를 모은다

메인: Data Engineering Essentials의 Module 2·4에서 필요한 것만. **회사 규모에서는 Airflow까지 안 가도 되는 경우가 많다** — 개념만 잡고 스케줄러 하나로 시작한다.

- [ ] [01 Data Collection and Preparation.md](../../courses/mooc/MLOps/Data%20Engineering%20Essentials/Module%202%20-%20Data%20Foundations%20%26%20Transformation/01%20Data%20Collection%20and%20Preparation.md)
- [ ] [02 Data Ingestion - ETL.md](../../courses/mooc/MLOps/Data%20Engineering%20Essentials/Module%202%20-%20Data%20Foundations%20%26%20Transformation/02%20Data%20Ingestion%20-%20ETL.md) — **ETL의 기본형.** 사내 시스템 → 분석용 저장소의 최소 구조.
- [ ] [03 Idea of Data Lake.md](../../courses/mooc/MLOps/Data%20Engineering%20Essentials/Module%202%20-%20Data%20Foundations%20%26%20Transformation/03%20Idea%20of%20Data%20Lake.md)
- [ ] [04 Data Cleaning and Data Transformation.md](../../courses/mooc/MLOps/Data%20Engineering%20Essentials/Module%202%20-%20Data%20Foundations%20%26%20Transformation/04%20Data%20Cleaning%20and%20Data%20Transformation.md)
- [ ] [05 Demo 1 - Small to Medium Datasets Transformation (Pandas Polars).md](../../courses/mooc/MLOps/Data%20Engineering%20Essentials/Module%202%20-%20Data%20Foundations%20%26%20Transformation/05%20Demo%201%20-%20Small%20to%20Medium%20Datasets%20Transformation%20%28Pandas%20Polars%29.md) — **중소 규모 데이터 처리.** 대부분의 회사 규모가 여기에 해당한다.
- [ ] [01 Data Pipeline Orchestration - Airflow Prefect.md](../../courses/mooc/MLOps/Data%20Engineering%20Essentials/Module%204%20-%20MLOps%20Workflow%20Orchestration/01%20Data%20Pipeline%20Orchestration%20-%20Airflow%20Prefect.md) — **파이프라인 오케스트레이션.** 여러 소스를 정기적으로 당겨올 때.
- [ ] [02 Demo 1 - Data Pipeline Orchestration.md](../../courses/mooc/MLOps/Data%20Engineering%20Essentials/Module%204%20-%20MLOps%20Workflow%20Orchestration/02%20Demo%201%20-%20Data%20Pipeline%20Orchestration.md)

건너뛰어도 되는 것: Module 3의 Spark·스트리밍. 실시간이 필요해지면 그때 돌아온다.

## 9-B. 지표를 뽑는다

SQL 기본기가 이미 있으면 이 절은 9-B-2부터 시작한다.

**9-B-1. SQL 기본기 (필요할 때만)** — Databases and SQL for Data Science with Python, Module 3.

- [ ] [03 Grouping Result Sets.md](../../courses/mooc/Databases%20and%20SQL/Databases%20and%20SQL%20for%20Data%20Science%20with%20Python/Module%203%20-%20Intermediate%20SQL/03%20Grouping%20Result%20Sets.md) — 사업 지표의 대부분이 집계(GROUP BY)다.
- [ ] [08 Built-in SQL Functions.md](../../courses/mooc/Databases%20and%20SQL/Databases%20and%20SQL%20for%20Data%20Science%20with%20Python/Module%203%20-%20Intermediate%20SQL/08%20Built-in%20SQL%20Functions.md)
- [ ] [09 Date and Time Functions.md](../../courses/mooc/Databases%20and%20SQL/Databases%20and%20SQL%20for%20Data%20Science%20with%20Python/Module%203%20-%20Intermediate%20SQL/09%20Date%20and%20Time%20Functions.md) — **기간별 비교**는 거의 모든 사업 지표에 필요하다.
- [ ] [10 Subqueries and Nested Selects.md](../../courses/mooc/Databases%20and%20SQL/Databases%20and%20SQL%20for%20Data%20Science%20with%20Python/Module%203%20-%20Intermediate%20SQL/10%20Subqueries%20and%20Nested%20Selects.md)
- [ ] [11 Working with Multiple Tables.md](../../courses/mooc/Databases%20and%20SQL/Databases%20and%20SQL%20for%20Data%20Science%20with%20Python/Module%203%20-%20Intermediate%20SQL/11%20Working%20with%20Multiple%20Tables.md)

**9-B-2. AI와 함께 지표를 뽑는다** — Chat with Your Data (11강 전체). **이 로드맵에 가장 잘 맞는 강좌 중 하나다** — 자연어 질문을 신뢰할 수 있는 쿼리로 바꾸는 절차를 다룬다.

- [ ] [02 From Conversation to Query.md](../../courses/mooc/Databases%20and%20SQL/Chat%20with%20Your%20Data%20-%20Generative%20AI-Powered%20SQL%20Data%20Analysis/Module%201%20-%20Translating%20Questions%20and%20Goals%20into%20Queries/02%20From%20Conversation%20to%20Query.md)
- [ ] [03 Establishing Database Context.md](../../courses/mooc/Databases%20and%20SQL/Chat%20with%20Your%20Data%20-%20Generative%20AI-Powered%20SQL%20Data%20Analysis/Module%201%20-%20Translating%20Questions%20and%20Goals%20into%20Queries/03%20Establishing%20Database%20Context.md) — **스키마 맥락을 모델에 주는 법.** Phase 4의 컨텍스트 엔지니어링이 DB에 적용된 형태.
- [ ] [04 Flipped Interaction Context Setting.md](../../courses/mooc/Databases%20and%20SQL/Chat%20with%20Your%20Data%20-%20Generative%20AI-Powered%20SQL%20Data%20Analysis/Module%201%20-%20Translating%20Questions%20and%20Goals%20into%20Queries/04%20Flipped%20Interaction%20Context%20Setting.md)
- [ ] [05 Co-exploration of Questions and Databases.md](../../courses/mooc/Databases%20and%20SQL/Chat%20with%20Your%20Data%20-%20Generative%20AI-Powered%20SQL%20Data%20Analysis/Module%201%20-%20Translating%20Questions%20and%20Goals%20into%20Queries/05%20Co-exploration%20of%20Questions%20and%20Databases.md)
- [ ] [06 From Question to Query.md](../../courses/mooc/Databases%20and%20SQL/Chat%20with%20Your%20Data%20-%20Generative%20AI-Powered%20SQL%20Data%20Analysis/Module%201%20-%20Translating%20Questions%20and%20Goals%20into%20Queries/06%20From%20Question%20to%20Query.md)
- [ ] [02 Sanity Checking Queries, Results, and Analyses.md](../../courses/mooc/Databases%20and%20SQL/Chat%20with%20Your%20Data%20-%20Generative%20AI-Powered%20SQL%20Data%20Analysis/Module%202%20-%20From%20Query%20Results%20to%20Visualizations%20and%20Analyses/02%20Sanity%20Checking%20Queries,%20Results,%20and%20Analyses.md) — **가장 중요한 강의.** 그럴듯하게 틀린 숫자로 의사결정하는 사고를 막는다.
- [ ] [03 Supporting Replication and Automation Outside Generative AI.md](../../courses/mooc/Databases%20and%20SQL/Chat%20with%20Your%20Data%20-%20Generative%20AI-Powered%20SQL%20Data%20Analysis/Module%202%20-%20From%20Query%20Results%20to%20Visualizations%20and%20Analyses/03%20Supporting%20Replication%20and%20Automation%20Outside%20Generative%20AI.md) — **일회성 질의를 재현 가능한 자동화로 굳히는 법.** 계기판이 여기서 나온다.
- [ ] [04 Collaborative Data Visualization of Query Results with Generative AI.md](../../courses/mooc/Databases%20and%20SQL/Chat%20with%20Your%20Data%20-%20Generative%20AI-Powered%20SQL%20Data%20Analysis/Module%202%20-%20From%20Query%20Results%20to%20Visualizations%20and%20Analyses/04%20Collaborative%20Data%20Visualization%20of%20Query%20Results%20with%20Generative%20AI.md)
- [ ] [05 Collaborative Debugging of SQL Queries with Generative AI.md](../../courses/mooc/Databases%20and%20SQL/Chat%20with%20Your%20Data%20-%20Generative%20AI-Powered%20SQL%20Data%20Analysis/Module%202%20-%20From%20Query%20Results%20to%20Visualizations%20and%20Analyses/05%20Collaborative%20Debugging%20of%20SQL%20Queries%20with%20Generative%20AI.md)

**9-B-3. 에이전트가 직접 조회하게 만든다**

- [ ] [02 An Introduction to AI-Powered SQL Agents.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20AI%20Agents%20and%20Agentic%20Workflows/Course%201%20-%20Fundamentals%20of%20Building%20AI%20Agents/Module%203%20-%20Built-in%20LangChain%20Agents/02%20An%20Introduction%20to%20AI-Powered%20SQL%20Agents.md)
- [ ] [03 Implementing LangChain's AI-Powered SQL Agent.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20AI%20Agents%20and%20Agentic%20Workflows/Course%201%20-%20Fundamentals%20of%20Building%20AI%20Agents/Module%203%20-%20Built-in%20LangChain%20Agents/03%20Implementing%20LangChain%27s%20AI-Powered%20SQL%20Agent.md)
- [ ] [06 Improving SQL Generation with Reflection.md](../../courses/deeplearning-ai/Agentic%20AI/module%2002/06%20Improving%20SQL%20Generation%20with%20Reflection.md) — **리플렉션으로 쿼리 정확도 올리기.** Phase 5에서 봤으면 건너뛴다.
- [ ] [01 From Natural Language to Data Visualizations with LangChain.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/Building%20AI%20Agents%20and%20Agentic%20Workflows/Course%201%20-%20Fundamentals%20of%20Building%20AI%20Agents/Module%203%20-%20Built-in%20LangChain%20Agents/01%20From%20Natural%20Language%20to%20Data%20Visualizations%20with%20LangChain.md)
- [ ] [03 Reflection for Chart Generation.md](../../courses/deeplearning-ai/Agentic%20AI/module%2002/03%20Reflection%20for%20Chart%20Generation.md)
- [ ] [2025-10-15 AI agents for data engineering and data science - The Agent Factory Podcast.md](../../courses/youtube/Google%20Cloud%20Tech/5-Days%20of%20AI%20Agents%20and%20Agent%20Factory/2025-10-15%20AI%20agents%20for%20data%20engineering%20and%20data%20science%20-%20The%20Agent%20Factory%20Podcast.md)

> **주의**: 에이전트에게 DB 조회 권한을 주는 것은 Phase 7의 권한 매트릭스에 반영해야 한다. **읽기 전용 계정**으로 시작한다.

## 9-C. 결정을 바꾸는 화면으로 만든다

메인: Data Storytelling. **module 01(내러티브)을 module 03(대시보드)보다 먼저 본다** — 무슨 말을 할지 모르면 화면만 화려해진다.

module 01 — 무엇을 말할 것인가

- [ ] [03 From Technical Skills to Business Value.md](../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2001%20Communicating%20insights/03%20From%20Technical%20Skills%20to%20Business%20Value.md)
- [ ] [04 Data Storytelling.md](../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2001%20Communicating%20insights/04%20Data%20Storytelling.md)
- [ ] [06 Identifying Your Main Conclusion.md](../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2001%20Communicating%20insights/06%20Identifying%20Your%20Main%20Conclusion.md) — **결론을 먼저 정한다.** 계기판도 마찬가지다.
- [ ] [07 Choosing Supporting Evidence.md](../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2001%20Communicating%20insights/07%20Choosing%20Supporting%20Evidence.md)
- [ ] [11 Creating a Memo.md](../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2001%20Communicating%20insights/11%20Creating%20a%20Memo.md) — 에이전트가 만들 주간 보고의 형식으로 그대로 쓴다.

module 03 — 대시보드

- [ ] [02 Introduction to Dashboards.md](../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2003%20Dashboards%20and%20stories/02%20Introduction%20to%20Dashboards.md)
- [ ] [03 Components of a Dashboard.md](../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2003%20Dashboards%20and%20stories/03%20Components%20of%20a%20Dashboard.md) — Phase 1에서 봤으면 건너뛴다.
- [ ] [06 Creating a Dashboard in Tableau.md](../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2003%20Dashboards%20and%20stories/06%20Creating%20a%20Dashboard%20in%20Tableau.md)
- [ ] [07 Layout Design.md](../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2003%20Dashboards%20and%20stories/07%20Layout%20Design.md)
- [ ] [10 Gaining Adoption for Your Dashboard.md](../../courses/deeplearning-ai/Data%20Analytics/Course%205%20-%20Data%20Storytelling/module%2003%20Dashboards%20and%20stories/10%20Gaining%20Adoption%20for%20Your%20Dashboard.md) — **아무도 안 보는 대시보드 문제.** 소수 인원 회사에서도 그대로 일어난다.

건너뛰어도 되는 것: module 02의 Tableau 조작 강의 17개. 도구를 Tableau로 정했을 때만 본다. Grafana·Metabase를 쓸 거면 아래로 간다.

운영 지표 쪽 대시보드 (Grafana):

- [ ] [01 Metrics Visualization and Dashboard Design.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%202%20-%20Visualization,%20Alerting,%20and%20Logging%20Pipelines/01%20Metrics%20Visualization%20and%20Dashboard%20Design.md)
- [ ] [03 Demonstration - Creating Time-Series Dashboards in Grafana.md](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/Module%202%20-%20Visualization,%20Alerting,%20and%20Logging%20Pipelines/03%20Demonstration%20-%20Creating%20Time-Series%20Dashboards%20in%20Grafana.md)
- [ ] [11 What is Grafana.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%203%20-%20Monitoring%20with%20Prometheus%20and%20Grafana/11%20What%20is%20Grafana.md)
- [ ] [13 Installing and Configuring Grafana - Demonstration.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%203%20-%20Infrastructure%20as%20Code%20and%20Monitoring/Module%203%20-%20Monitoring%20with%20Prometheus%20and%20Grafana/13%20Installing%20and%20Configuring%20Grafana%20-%20Demonstration.md)

스킬로 굳히기 (Phase 4에서 봤으면 건너뛴다):

- [ ] [04 Building a Dashboarding Skill.md](../../courses/mooc/AI%20Agents%20and%20Generative%20AI/AI%20Agent%20Skills%20for%20Leaders/Module%201%20-%20What%20are%20AI%20Agent%20Skills/04%20Building%20a%20Dashboarding%20Skill.md)

## 산출물

1. **데이터 파이프라인** — Phase 1의 계기판 항목에 필요한 데이터를 정기적으로 한 곳에 모은다. 어느 시스템에서 무엇을 얼마나 자주 당겨오는지 문서화한다.
2. **사업 계기판** — Phase 1에서 정한 5~8개 숫자를 한 화면에. 각 숫자 옆에 "이게 나빠지면 무엇을 한다"를 적는다. 그게 없는 숫자는 뺀다.
3. **에이전트용 지표 조회 경로** — 에이전트가 읽기 전용으로 지표를 조회하는 MCP 도구 또는 SQL 에이전트. Phase 7의 권한 매트릭스에 등록한다.
4. **자동 생성되는 주간 보고 초안** — 지표를 읽고 무엇이 달라졌는지 요약하는 에이전트. Phase 4의 스킬 형식으로 만든다. Phase 6의 eval을 붙인다 — **숫자를 틀리게 요약하는 것이 이 에이전트의 가장 큰 위험**이다.

## 다음 단계

→ [10 Phase 10 - 사람과 조직 전환](10%20Phase%2010%20-%20사람과%20조직%20전환.md)
