# MLOps and LLMOps: Deploying and Scaling AI in Production

**Course URL:** [mooc.org/learn/mlops-and-llmops-deploying-and-scaling-ai-in-production](https://www.mooc.org/learn/mlops-and-llmops-deploying-and-scaling-ai-in-production)

MOOC / Board Infinity. "Managing AI Systems: Development, Deployment, and Governance" 스페셜라이제이션의 일부. 프로덕션 AI 시스템을 설계·배포·확장하는 실무 역량을 다루는 중급 코스로, 4개 모듈로 구성. ML/LLM 시스템을 위한 CI/CD·CT/CD 파이프라인 자동화, LLM 추론 최적화(지연시간·토큰 비용·신뢰성), LLM-as-a-Judge 기반 자동 평가 프레임워크, 프로덕션 AI 시스템의 트레이싱·드리프트 탐지·관측 가능성(observability)을 다룸. 강사는 Board Infinity.

## 모듈 구성
- **Module 1 - Operationalizing AI Pipelines (CI/CD, CT/CD, Versioning)**/) — ML/LLM CI/CD 아키텍처(DevOps와의 차이, 빌드-테스트-배포 자동화, 데이터·모델 검증), 시맨틱 버저닝·모델 레지스트리·롤백/계보 추적, 환경 드리프트·Docker/Conda 재현성·환경 승격
- **Module 2 - LLMOps Fundamentals: Context, Prompts, Inference Optimization**/) — 컨텍스트 윈도우·토큰 예산 설계, 구조화된 프롬프트·환각 감소, 지연시간·토큰 비용 최적화(배칭/캐싱/스트리밍, API vs 로컬), 프롬프트 버저닝·델타 추적·통계적 평가
- **Module 3 - Evaluation: From Vibes to Metrics**/) — 현실적 평가 데이터셋 구축(엣지 케이스·편향 방지), LLM-as-a-Judge(평가자 프롬프트·다차원 채점·자동 채점의 한계), CI/CD 통합(평가 트리거·품질 게이트·릴리스 대시보드)
- [Module 4 - Observability & Tracing for Production AI](Module%204%20-%20Observability%20and%20Tracing%20for%20Production%20AI/) — 프라이버시 안전 텔레메트리·실험 비교·추론 지표(W&B/MLflow), Arize Phoenix를 이용한 체인·에이전트 트레이싱과 환각 트리거 식별, 데이터/행동 드리프트 모니터링과 재학습·롤백 의사결정

## 진행 상황
- [x] Module 1 — Operationalizing AI Pipelines (CI/CD, CT/CD, Versioning)
- [x] Module 2 — LLMOps Fundamentals: Context, Prompts, Inference Optimization
- [x] Module 3 — Evaluation: From Vibes to Metrics
- [x] Module 4 — Observability & Tracing for Production AI

## 강의 목록

<!-- course-inventory:start -->
### Module 1 - Operationalizing AI Pipelines (CI-CD, CT-CD, Versioning)

- [01 ML-LLM CI-CD Architecture - How It's Different from DevOps](Module%201%20-%20Operationalizing%20AI%20Pipelines%20%28CI-CD%2C%20CT-CD%2C%20Versioning%29/01%20ML-LLM%20CI-CD%20Architecture%20-%20How%20It%27s%20Different%20from%20DevOps.md)
- [02 Automating Build to Test to Deploy for ML Pipelines](Module%201%20-%20Operationalizing%20AI%20Pipelines%20%28CI-CD%2C%20CT-CD%2C%20Versioning%29/02%20Automating%20Build%20to%20Test%20to%20Deploy%20for%20ML%20Pipelines.md)
- [03 Integrating Model and Data Validation into CI-CD](Module%201%20-%20Operationalizing%20AI%20Pipelines%20%28CI-CD%2C%20CT-CD%2C%20Versioning%29/03%20Integrating%20Model%20and%20Data%20Validation%20into%20CI-CD.md)
- [04 Reading - CI-CD + CT-CD - Patterns and Anti-patterns in ML Deployment Pipelines](Module%201%20-%20Operationalizing%20AI%20Pipelines%20%28CI-CD%2C%20CT-CD%2C%20Versioning%29/04%20Reading%20-%20CI-CD%20%2B%20CT-CD%20-%20Patterns%20and%20Anti-patterns%20in%20ML%20Deployment%20Pipelines.md)
- [05 Practice Quiz - Foundations of CI-CD for ML and LLM Systems](Module%201%20-%20Operationalizing%20AI%20Pipelines%20%28CI-CD%2C%20CT-CD%2C%20Versioning%29/05%20Practice%20Quiz%20-%20Foundations%20of%20CI-CD%20for%20ML%20and%20LLM%20Systems.md)
- [06 Semantic Versioning for Models, Prompts, and Datasets](Module%201%20-%20Operationalizing%20AI%20Pipelines%20%28CI-CD%2C%20CT-CD%2C%20Versioning%29/06%20Semantic%20Versioning%20for%20Models%2C%20Prompts%2C%20and%20Datasets.md)
- [07 Model Registries - MLflow, W&B, and Custom Systems](Module%201%20-%20Operationalizing%20AI%20Pipelines%20%28CI-CD%2C%20CT-CD%2C%20Versioning%29/07%20Model%20Registries%20-%20MLflow%2C%20W%26B%2C%20and%20Custom%20Systems.md)
- [08 Rollbacks and Lineage Tracking for Experiment Safety](Module%201%20-%20Operationalizing%20AI%20Pipelines%20%28CI-CD%2C%20CT-CD%2C%20Versioning%29/08%20Rollbacks%20and%20Lineage%20Tracking%20for%20Experiment%20Safety.md)
- [09 Reading - Model Registry Design - Governance, Lineage, and Auditability](Module%201%20-%20Operationalizing%20AI%20Pipelines%20%28CI-CD%2C%20CT-CD%2C%20Versioning%29/09%20Reading%20-%20Model%20Registry%20Design%20-%20Governance%2C%20Lineage%2C%20and%20Auditability.md)
- [10 Practice Quiz - Model Versioning and Release Management](Module%201%20-%20Operationalizing%20AI%20Pipelines%20%28CI-CD%2C%20CT-CD%2C%20Versioning%29/10%20Practice%20Quiz%20-%20Model%20Versioning%20and%20Release%20Management.md)
- [11 Why ML Environments Drift](Module%201%20-%20Operationalizing%20AI%20Pipelines%20%28CI-CD%2C%20CT-CD%2C%20Versioning%29/11%20Why%20ML%20Environments%20Drift.md)
- [12 Reproducibility with Docker, Conda, Lockfiles, and Hashes](Module%201%20-%20Operationalizing%20AI%20Pipelines%20%28CI-CD%2C%20CT-CD%2C%20Versioning%29/12%20Reproducibility%20with%20Docker%2C%20Conda%2C%20Lockfiles%2C%20and%20Hashes.md)
- [13 Promoting Environments Across Dev to Staging to Production](Module%201%20-%20Operationalizing%20AI%20Pipelines%20%28CI-CD%2C%20CT-CD%2C%20Versioning%29/13%20Promoting%20Environments%20Across%20Dev%20to%20Staging%20to%20Production.md)
- [14 Reading - Environment Parity Checklist for ML Systems](Module%201%20-%20Operationalizing%20AI%20Pipelines%20%28CI-CD%2C%20CT-CD%2C%20Versioning%29/14%20Reading%20-%20Environment%20Parity%20Checklist%20for%20ML%20Systems.md)
- [15 Practice Quiz - Environment and Dependency Management](Module%201%20-%20Operationalizing%20AI%20Pipelines%20%28CI-CD%2C%20CT-CD%2C%20Versioning%29/15%20Practice%20Quiz%20-%20Environment%20and%20Dependency%20Management.md)
- [16 Graded Quiz - Operationalizing AI Pipelines (Graded Assignment)](Module%201%20-%20Operationalizing%20AI%20Pipelines%20%28CI-CD%2C%20CT-CD%2C%20Versioning%29/16%20Graded%20Quiz%20-%20Operationalizing%20AI%20Pipelines%20%28Graded%20Assignment%29.md)
- [17 Quick Course Check-In](Module%201%20-%20Operationalizing%20AI%20Pipelines%20%28CI-CD%2C%20CT-CD%2C%20Versioning%29/17%20Quick%20Course%20Check-In.md)

### Module 2 - LLMOps Fundamentals (Context, Prompts, Inference Optimization)

- [01 Designing Efficient Context Windows](Module%202%20-%20LLMOps%20Fundamentals%20%28Context%2C%20Prompts%2C%20Inference%20Optimization%29/01%20Designing%20Efficient%20Context%20Windows.md)
- [02 Structured Prompts for Reliability and Determinism](Module%202%20-%20LLMOps%20Fundamentals%20%28Context%2C%20Prompts%2C%20Inference%20Optimization%29/02%20Structured%20Prompts%20for%20Reliability%20and%20Determinism.md)
- [03 Techniques to Reduce Hallucination via Prompt Engineering](Module%202%20-%20LLMOps%20Fundamentals%20%28Context%2C%20Prompts%2C%20Inference%20Optimization%29/03%20Techniques%20to%20Reduce%20Hallucination%20via%20Prompt%20Engineering.md)
- [04 Reading - Prompt Architecture Patterns for Production LLM Systems](Module%202%20-%20LLMOps%20Fundamentals%20%28Context%2C%20Prompts%2C%20Inference%20Optimization%29/04%20Reading%20-%20Prompt%20Architecture%20Patterns%20for%20Production%20LLM%20Systems.md)
- [05 Practice Quiz - Managing Context Windows and Prompt Structure](Module%202%20-%20LLMOps%20Fundamentals%20%28Context%2C%20Prompts%2C%20Inference%20Optimization%29/05%20Practice%20Quiz%20-%20Managing%20Context%20Windows%20and%20Prompt%20Structure.md)
- [06 Understanding Latency Budgets and Token Cost Drivers](Module%202%20-%20LLMOps%20Fundamentals%20%28Context%2C%20Prompts%2C%20Inference%20Optimization%29/06%20Understanding%20Latency%20Budgets%20and%20Token%20Cost%20Drivers.md)
- [07 Batching, Caching, Streaming, Compression](Module%202%20-%20LLMOps%20Fundamentals%20%28Context%2C%20Prompts%2C%20Inference%20Optimization%29/07%20Batching%2C%20Caching%2C%20Streaming%2C%20Compression.md)
- [08 Model Choices - API vs Local Models](Module%202%20-%20LLMOps%20Fundamentals%20%28Context%2C%20Prompts%2C%20Inference%20Optimization%29/08%20Model%20Choices%20-%20API%20vs%20Local%20Models.md)
- [09 Reading - Token Economics - Understanding Cost Structures of LLM Pipelines](Module%202%20-%20LLMOps%20Fundamentals%20%28Context%2C%20Prompts%2C%20Inference%20Optimization%29/09%20Reading%20-%20Token%20Economics%20-%20Understanding%20Cost%20Structures%20of%20LLM%20Pipelines.md)
- [10 Practice Quiz - Inference Optimization - Latency and Token Cost](Module%202%20-%20LLMOps%20Fundamentals%20%28Context%2C%20Prompts%2C%20Inference%20Optimization%29/10%20Practice%20Quiz%20-%20Inference%20Optimization%20-%20Latency%20and%20Token%20Cost.md)
- [11 Logging Prompt Variants with W&B-MLflow](Module%202%20-%20LLMOps%20Fundamentals%20%28Context%2C%20Prompts%2C%20Inference%20Optimization%29/11%20Logging%20Prompt%20Variants%20with%20W%26B-MLflow.md)
- [12 Tracking Prompt-Response Deltas](Module%202%20-%20LLMOps%20Fundamentals%20%28Context%2C%20Prompts%2C%20Inference%20Optimization%29/12%20Tracking%20Prompt-Response%20Deltas.md)
- [13 Scientific Evaluation of Prompt Variants](Module%202%20-%20LLMOps%20Fundamentals%20%28Context%2C%20Prompts%2C%20Inference%20Optimization%29/13%20Scientific%20Evaluation%20of%20Prompt%20Variants.md)
- [14 Reading - Prompt Versioning Framework Example Repository](Module%202%20-%20LLMOps%20Fundamentals%20%28Context%2C%20Prompts%2C%20Inference%20Optimization%29/14%20Reading%20-%20Prompt%20Versioning%20Framework%20Example%20Repository.md)
- [15 Practice Quiz - Prompt Versioning and Experiment Tracking](Module%202%20-%20LLMOps%20Fundamentals%20%28Context%2C%20Prompts%2C%20Inference%20Optimization%29/15%20Practice%20Quiz%20-%20Prompt%20Versioning%20and%20Experiment%20Tracking.md)
- [16 Graded Assignment - Help me reduce the latency and cost of my LLM pipeline](Module%202%20-%20LLMOps%20Fundamentals%20%28Context%2C%20Prompts%2C%20Inference%20Optimization%29/16%20Graded%20Assignment%20-%20Help%20me%20reduce%20the%20latency%20and%20cost%20of%20my%20LLM%20pipeline.md)

### Module 3 - Evaluation (From Vibes to Metrics)

- [01 Constructing Realistic Evaluation Data](Module%203%20-%20Evaluation%20%28From%20Vibes%20to%20Metrics%29/01%20Constructing%20Realistic%20Evaluation%20Data.md)
- [02 Sampling Edge Cases and Failure Modes](Module%203%20-%20Evaluation%20%28From%20Vibes%20to%20Metrics%29/02%20Sampling%20Edge%20Cases%20and%20Failure%20Modes.md)
- [03 Avoiding Bias in Test Data](Module%203%20-%20Evaluation%20%28From%20Vibes%20to%20Metrics%29/03%20Avoiding%20Bias%20in%20Test%20Data.md)
- [04 Reading - LLM Evaluation Dataset Blueprint](Module%203%20-%20Evaluation%20%28From%20Vibes%20to%20Metrics%29/04%20Reading%20-%20LLM%20Evaluation%20Dataset%20Blueprint.md)
- [05 Practice Assignment - Designing LLM Evaluation Datasets](Module%203%20-%20Evaluation%20%28From%20Vibes%20to%20Metrics%29/05%20Practice%20Assignment%20-%20Designing%20LLM%20Evaluation%20Datasets.md)
- [06 Designing Evaluator Prompts](Module%203%20-%20Evaluation%20%28From%20Vibes%20to%20Metrics%29/06%20Designing%20Evaluator%20Prompts.md)
- [07 Scoring for Consistency, Relevance, Correctness](Module%203%20-%20Evaluation%20%28From%20Vibes%20to%20Metrics%29/07%20Scoring%20for%20Consistency%2C%20Relevance%2C%20Correctness.md)
- [08 Limits of Automated Scoring](Module%203%20-%20Evaluation%20%28From%20Vibes%20to%20Metrics%29/08%20Limits%20of%20Automated%20Scoring.md)
- [09 Reading - Automated Scoring Frameworks for LLM Evaluation](Module%203%20-%20Evaluation%20%28From%20Vibes%20to%20Metrics%29/09%20Reading%20-%20Automated%20Scoring%20Frameworks%20for%20LLM%20Evaluation.md)
- [10 Practice Assignment - LLM-as-a-Judge Methodologies](Module%203%20-%20Evaluation%20%28From%20Vibes%20to%20Metrics%29/10%20Practice%20Assignment%20-%20LLM-as-a-Judge%20Methodologies.md)
- [11 Evaluation Triggers During Deployment](Module%203%20-%20Evaluation%20%28From%20Vibes%20to%20Metrics%29/11%20Evaluation%20Triggers%20During%20Deployment.md)
- [12 Quality Gates and Release Thresholds](Module%203%20-%20Evaluation%20%28From%20Vibes%20to%20Metrics%29/12%20Quality%20Gates%20and%20Release%20Thresholds.md)
- [13 Reading Evaluation Dashboards for Release Readiness](Module%203%20-%20Evaluation%20%28From%20Vibes%20to%20Metrics%29/13%20Reading%20Evaluation%20Dashboards%20for%20Release%20Readiness.md)
- [14 Reading - Evaluation Automation Templates Using MLflow-W&B](Module%203%20-%20Evaluation%20%28From%20Vibes%20to%20Metrics%29/14%20Reading%20-%20Evaluation%20Automation%20Templates%20Using%20MLflow-W%26B.md)
- [15 Practice Quiz - Integrating Evaluation into CI-CD Pipelines](Module%203%20-%20Evaluation%20%28From%20Vibes%20to%20Metrics%29/15%20Practice%20Quiz%20-%20Integrating%20Evaluation%20into%20CI-CD%20Pipelines.md)
- [16 Graded Assignment - Covers dataset design, automated evaluation, CI-CD integration](Module%203%20-%20Evaluation%20%28From%20Vibes%20to%20Metrics%29/16%20Graded%20Assignment%20-%20Covers%20dataset%20design%2C%20automated%20evaluation%2C%20CI-CD%20integration.md)

### Module 4 - Observability and Tracing for Production AI

- [01 Logging Prompts, Responses, and Metadata](Module%204%20-%20Observability%20and%20Tracing%20for%20Production%20AI/01%20Logging%20Prompts%2C%20Responses%2C%20and%20Metadata.md)
- [02 Comparing Experiments Across Versions](Module%204%20-%20Observability%20and%20Tracing%20for%20Production%20AI/02%20Comparing%20Experiments%20Across%20Versions.md)
- [03 Tracking Inference Metrics](Module%204%20-%20Observability%20and%20Tracing%20for%20Production%20AI/03%20Tracking%20Inference%20Metrics.md)
- [04 Reading - Telemetry Best Practices for Production AI](Module%204%20-%20Observability%20and%20Tracing%20for%20Production%20AI/04%20Reading%20-%20Telemetry%20Best%20Practices%20for%20Production%20AI.md)
- [05 Practice Quiz - Experiment Tracking and Telemetry](Module%204%20-%20Observability%20and%20Tracing%20for%20Production%20AI/05%20Practice%20Quiz%20-%20Experiment%20Tracking%20and%20Telemetry.md)
- [06 How Chains and Agents Break](Module%204%20-%20Observability%20and%20Tracing%20for%20Production%20AI/06%20How%20Chains%20and%20Agents%20Break.md)
- [07 Using Phoenix to Trace Execution Steps](Module%204%20-%20Observability%20and%20Tracing%20for%20Production%20AI/07%20Using%20Phoenix%20to%20Trace%20Execution%20Steps.md)
- [08 Identifying Hallucination Triggers and Bottlenecks](Module%204%20-%20Observability%20and%20Tracing%20for%20Production%20AI/08%20Identifying%20Hallucination%20Triggers%20and%20Bottlenecks.md)
- [09 Reading - Tracing Playbook for Complex AI Systems](Module%204%20-%20Observability%20and%20Tracing%20for%20Production%20AI/09%20Reading%20-%20Tracing%20Playbook%20for%20Complex%20AI%20Systems.md)
- [10 Practice Quiz - Tracing and Debugging with Arize Phoenix](Module%204%20-%20Observability%20and%20Tracing%20for%20Production%20AI/10%20Practice%20Quiz%20-%20Tracing%20and%20Debugging%20with%20Arize%20Phoenix.md)
- [11 Data Drift vs Behavioral Drift](Module%204%20-%20Observability%20and%20Tracing%20for%20Production%20AI/11%20Data%20Drift%20vs%20Behavioral%20Drift.md)
- [12 Drift Dashboards and Alerting](Module%204%20-%20Observability%20and%20Tracing%20for%20Production%20AI/12%20Drift%20Dashboards%20and%20Alerting.md)
- [13 When to Retrain or Update the Pipeline](Module%204%20-%20Observability%20and%20Tracing%20for%20Production%20AI/13%20When%20to%20Retrain%20or%20Update%20the%20Pipeline.md)
- [14 Reading - Drift Detection Techniques for LLM Applications](Module%204%20-%20Observability%20and%20Tracing%20for%20Production%20AI/14%20Reading%20-%20Drift%20Detection%20Techniques%20for%20LLM%20Applications.md)
- [15 Practice Quiz - Monitoring Drift and System Health](Module%204%20-%20Observability%20and%20Tracing%20for%20Production%20AI/15%20Practice%20Quiz%20-%20Monitoring%20Drift%20and%20System%20Health.md)
- [16 Graded Assignment - Help me diagnose the failure points in this trace and recommend fixes](Module%204%20-%20Observability%20and%20Tracing%20for%20Production%20AI/16%20Graded%20Assignment%20-%20Help%20me%20diagnose%20the%20failure%20points%20in%20this%20trace%20and%20recommend%20fixes.md)

<!-- course-inventory:end -->
