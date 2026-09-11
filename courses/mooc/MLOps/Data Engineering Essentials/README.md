# Data Engineering Essentials

**Course URL:** [mooc.org/learn/fundamentals-of-data-engineering-for-mlops](https://www.mooc.org/learn/fundamentals-of-data-engineering-for-mlops)

MOOC / KodeKloud. "Hands-On MLOps Fundamentals for ML Engineers" 스페셜라이제이션의 첫 번째 코스(Course 1 of 3). 원본 데이터와 프로덕션 준비된 AI 시스템 사이의 간극을 메우는 코스로, 4개 모듈로 구성. Pandas·Polars·Apache Spark로 확장 가능한 데이터 파이프라인을 구축하고, Apache Kafka와 피처 스토어로 실시간 스트리밍 솔루션을 설계하며, Airflow와 Prefect로 복잡한 ML 워크플로를 자동화하는 방법을 다룸. 강사는 Mumshad Mannambeth.

## 모듈 구성
- [Module 1 - MLOps Fundamentals](Module%201%20-%20MLOps%20Fundamentals/) — ML 팀 구성(제품/데이터 과학/데이터 엔지니어링/MLOps), MLOps 엔지니어의 역할, DevOps vs MLOps 비교, MLOps 생애주기, CI/CD/CT/CM, DevOps→MLOps 도구 매핑, MLOps 아키텍처
- [Module 2 - Data Foundations & Transformation](Module%202%20-%20Data%20Foundations%20%26%20Transformation/) — 데이터 수집·준비, ETL(추출·변환·적재), 데이터 레이크 아키텍처, 데이터 정제·변환 전략과 도구, Pandas 실습(결측치 처리, JSON 펼치기, 피처 엔지니어링·집계)
- [Module 3 - Big Data & Streaming for ML](Module%203%20-%20Big%20Data%20%26%20Streaming%20for%20ML/) — 대규모 데이터 처리(Apache Spark), 실시간 스트리밍(Apache Kafka·Flink), Kafka 프로듀서·컨슈머 실습, 피처 스토어의 필요성과 이점(저지연·일관성·전처리·확장성)
- [Module 4 - MLOps Workflow Orchestration](Module%204%20-%20MLOps%20Workflow%20Orchestration/) — 데이터 파이프라인 오케스트레이션(Airflow vs Prefect), Docker Compose로 Airflow 환경 구축, DAG 작성·시각화(Bash/Python Operator), IoT 데이터 파이프라인 실습

## 진행 상황
- [x] Module 1 — MLOps Fundamentals
- [x] Module 2 — Data Foundations & Transformation
- [x] Module 3 — Big Data & Streaming for ML
- [x] Module 4 — MLOps Workflow Orchestration

## 강의 목록

<!-- course-inventory:start -->
### Module 1 - MLOps Fundamentals

- [01 Course Introduction](Module%201%20-%20MLOps%20Fundamentals/01%20Course%20Introduction.md)
- [02 Getting Started with Machine Learning Team](Module%201%20-%20MLOps%20Fundamentals/02%20Getting%20Started%20with%20Machine%20Learning%20Team.md)
- [03 GitHub Repo](Module%201%20-%20MLOps%20Fundamentals/03%20GitHub%20Repo.md)
- [04 Introducing MLOps Engineer](Module%201%20-%20MLOps%20Fundamentals/04%20Introducing%20MLOps%20Engineer.md)
- [05 DevOps and MLOps - A Comparison](Module%201%20-%20MLOps%20Fundamentals/05%20DevOps%20and%20MLOps%20-%20A%20Comparison.md)
- [06 MLOps LifeCycle](Module%201%20-%20MLOps%20Fundamentals/06%20MLOps%20LifeCycle.md)
- [07 Continuous Integration (CI) Continuous Deployment (CD)](Module%201%20-%20MLOps%20Fundamentals/07%20Continuous%20Integration%20%28CI%29%20Continuous%20Deployment%20%28CD%29.md)
- [08 Continuous Training (CT) Continuous Monitoring (CM)](Module%201%20-%20MLOps%20Fundamentals/08%20Continuous%20Training%20%28CT%29%20Continuous%20Monitoring%20%28CM%29.md)
- [09 Finding and Exploring Right Tools from DevOps for MLOps - Part 1](Module%201%20-%20MLOps%20Fundamentals/09%20Finding%20and%20Exploring%20Right%20Tools%20from%20DevOps%20for%20MLOps%20-%20Part%201.md)
- [10 Finding and Exploring Right Tools from DevOps for MLOps - Part 2](Module%201%20-%20MLOps%20Fundamentals/10%20Finding%20and%20Exploring%20Right%20Tools%20from%20DevOps%20for%20MLOps%20-%20Part%202.md)
- [11 MLOps Architecture](Module%201%20-%20MLOps%20Fundamentals/11%20MLOps%20Architecture.md)
- [12 Quiz - Introduction to MLOps (Lab Access Reading)](Module%201%20-%20MLOps%20Fundamentals/12%20Quiz%20-%20Introduction%20to%20MLOps%20%28Lab%20Access%20Reading%29.md)
- [13 Quiz - Introduction to MLOps (Graded Assignment)](Module%201%20-%20MLOps%20Fundamentals/13%20Quiz%20-%20Introduction%20to%20MLOps%20%28Graded%20Assignment%29.md)
- [14 How to Reach Out and Engage with the Community](Module%201%20-%20MLOps%20Fundamentals/14%20How%20to%20Reach%20Out%20and%20Engage%20with%20the%20Community.md)
- [15 Bridging the Gap (DevOps to MLOps) - Role Play](Module%201%20-%20MLOps%20Fundamentals/15%20Bridging%20the%20Gap%20%28DevOps%20to%20MLOps%29%20-%20Role%20Play.md)

### Module 2 - Data Foundations & Transformation

- [01 Data Collection and Preparation](Module%202%20-%20Data%20Foundations%20%26%20Transformation/01%20Data%20Collection%20and%20Preparation.md)
- [02 Data Ingestion - ETL](Module%202%20-%20Data%20Foundations%20%26%20Transformation/02%20Data%20Ingestion%20-%20ETL.md)
- [03 Idea of Data Lake](Module%202%20-%20Data%20Foundations%20%26%20Transformation/03%20Idea%20of%20Data%20Lake.md)
- [04 Data Cleaning and Data Transformation](Module%202%20-%20Data%20Foundations%20%26%20Transformation/04%20Data%20Cleaning%20and%20Data%20Transformation.md)
- [05 Demo 1 - Small to Medium Datasets Transformation (Pandas Polars)](Module%202%20-%20Data%20Foundations%20%26%20Transformation/05%20Demo%201%20-%20Small%20to%20Medium%20Datasets%20Transformation%20%28Pandas%20Polars%29.md)
- [06 Demo 2 - Small to Medium Datasets Transformation (Pandas Polars)](Module%202%20-%20Data%20Foundations%20%26%20Transformation/06%20Demo%202%20-%20Small%20to%20Medium%20Datasets%20Transformation%20%28Pandas%20Polars%29.md)
- [07 Demo 3 - Small to Medium Datasets Transformation (Pandas Polars)](Module%202%20-%20Data%20Foundations%20%26%20Transformation/07%20Demo%203%20-%20Small%20to%20Medium%20Datasets%20Transformation%20%28Pandas%20Polars%29.md)
- [08 Lab - Small to Medium Datasets Data Transformation](Module%202%20-%20Data%20Foundations%20%26%20Transformation/08%20Lab%20-%20Small%20to%20Medium%20Datasets%20Data%20Transformation.md)
- [09 Quiz - Data Collection and Preparation - Set 1 (Lab Access Reading)](Module%202%20-%20Data%20Foundations%20%26%20Transformation/09%20Quiz%20-%20Data%20Collection%20and%20Preparation%20-%20Set%201%20%28Lab%20Access%20Reading%29.md)
- [10 Quiz - Data Foundations and Transformation (Graded Assignment)](Module%202%20-%20Data%20Foundations%20%26%20Transformation/10%20Quiz%20-%20Data%20Foundations%20and%20Transformation%20%28Graded%20Assignment%29.md)

### Module 3 - Big Data & Streaming for ML

- [01 Large Datasets - Apache Spark (PySpark) Dask](Module%203%20-%20Big%20Data%20%26%20Streaming%20for%20ML/01%20Large%20Datasets%20-%20Apache%20Spark%20%28PySpark%29%20Dask.md)
- [02 Streaming Datasets - Apache Kafka Apache Flink](Module%203%20-%20Big%20Data%20%26%20Streaming%20for%20ML/02%20Streaming%20Datasets%20-%20Apache%20Kafka%20Apache%20Flink.md)
- [03 Demo 1 - Stream Data using Apache Kafka](Module%203%20-%20Big%20Data%20%26%20Streaming%20for%20ML/03%20Demo%201%20-%20Stream%20Data%20using%20Apache%20Kafka.md)
- [04 Demo 2 - Stream Data using Apache Kafka](Module%203%20-%20Big%20Data%20%26%20Streaming%20for%20ML/04%20Demo%202%20-%20Stream%20Data%20using%20Apache%20Kafka.md)
- [05 Demo 3 - Stream Data using Apache Kafka](Module%203%20-%20Big%20Data%20%26%20Streaming%20for%20ML/05%20Demo%203%20-%20Stream%20Data%20using%20Apache%20Kafka.md)
- [06 Lab - Stream Data using Apache Kafka](Module%203%20-%20Big%20Data%20%26%20Streaming%20for%20ML/06%20Lab%20-%20Stream%20Data%20using%20Apache%20Kafka.md)
- [07 What is Feature Store](Module%203%20-%20Big%20Data%20%26%20Streaming%20for%20ML/07%20What%20is%20Feature%20Store.md)
- [08 Benefits of using a Feature Store](Module%203%20-%20Big%20Data%20%26%20Streaming%20for%20ML/08%20Benefits%20of%20using%20a%20Feature%20Store.md)
- [09 Quiz - Big Data and Streaming for ML (Graded Assignment)](Module%203%20-%20Big%20Data%20%26%20Streaming%20for%20ML/09%20Quiz%20-%20Big%20Data%20and%20Streaming%20for%20ML%20%28Graded%20Assignment%29.md)

### Module 4 - MLOps Workflow Orchestration

- [01 Data Pipeline Orchestration - Airflow Prefect](Module%204%20-%20MLOps%20Workflow%20Orchestration/01%20Data%20Pipeline%20Orchestration%20-%20Airflow%20Prefect.md)
- [02 Demo 1 - Data Pipeline Orchestration](Module%204%20-%20MLOps%20Workflow%20Orchestration/02%20Demo%201%20-%20Data%20Pipeline%20Orchestration.md)
- [03 Demo 2 - Data Pipeline Orchestration](Module%204%20-%20MLOps%20Workflow%20Orchestration/03%20Demo%202%20-%20Data%20Pipeline%20Orchestration.md)
- [04 Demo 3 - Stream Data Using Apache Kafka (Duplicate)](Module%204%20-%20MLOps%20Workflow%20Orchestration/04%20Demo%203%20-%20Stream%20Data%20Using%20Apache%20Kafka%20%28Duplicate%29.md)
- [05 Lab - Data Pipeline Orchestration](Module%204%20-%20MLOps%20Workflow%20Orchestration/05%20Lab%20-%20Data%20Pipeline%20Orchestration.md)
- [06 Quiz - Data Collection and Preparation - Set 2 (Lab Access Reading)](Module%204%20-%20MLOps%20Workflow%20Orchestration/06%20Quiz%20-%20Data%20Collection%20and%20Preparation%20-%20Set%202%20%28Lab%20Access%20Reading%29.md)
- [07 Quiz - Orchestration and Lifecycle (Graded Assignment)](Module%204%20-%20MLOps%20Workflow%20Orchestration/07%20Quiz%20-%20Orchestration%20and%20Lifecycle%20%28Graded%20Assignment%29.md)

<!-- course-inventory:end -->
