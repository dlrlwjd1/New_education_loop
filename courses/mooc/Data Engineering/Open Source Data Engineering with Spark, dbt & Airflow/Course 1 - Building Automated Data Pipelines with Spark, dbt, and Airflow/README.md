# Building Automated Data Pipelines with Spark, dbt, and Airflow

**Course URL:** [mooc.org/learn/building-automated-data-pipelines-with-sparkdbtand-airflow](https://www.mooc.org/learn/building-automated-data-pipelines-with-sparkdbtand-airflow)

데이터 흐름을 시각화하고 Spark·dbt·Airflow·Airbyte를 연결해 자동화된 프로덕션 파이프라인을 만드는 11개 모듈 강좌다. 강의별 노트 22개 (M4·M11은 실습·프로젝트 정리 노트).

## 모듈 구성

1. **Understanding Data Flow Diagram Fundamentals** (3강) — DFD의 가치, 소스·목적지 식별 방법론, Visio 첫 DFD
2. **Creating Comprehensive Data Flow Diagrams** (2강) — 계층화·고급 표기법, 다중 시스템 파이프라인 매핑
3. **Modular Pipeline Development** (1강) — Spark·dbt·Airflow 역할 분담과 통합 패턴
4. **Pipeline Implementation and Integration** — 엔드투엔드 통합 (실습 정리)
5. **Connector Configuration Foundations** (2강) — 소스 통합의 가치, Airbyte 커넥터 3요소
6. **Unified Data Integration** (2강) — 다중 소스 통합 사례, 스트리밍·API 커넥터
7. **SCD2 Historical Tracking** (3강) — SCD2의 가치, 4대 구성 요소, SQL 테이블 구조
8. **dbt SCD2 Implementation** (2강) — dbt 스냅숏 전략, 완전한 SCD2 모델 구현
9. **Workflow Design Principles** (3강) — 취약한 파이프라인의 비용, Airflow 기초, 프로덕션 DAG
10. **Production Implementation** (2강) — 위기 대응 사례, 고급 패턴(백오프·SLA·파라미터화)
11. **Automated Data Pipeline Project** — 종합 프로젝트 (정리 노트)

## 핵심 주제

- DFD: 소스·목적지 분류, 계층화(컨텍스트→시스템→상세), 조건·병렬 표기
- Airbyte: 연결 상세+인증+추출 매개변수, 스키마 자동 발견, full/incremental 동기화
- SCD2: 비즈니스/대리 키, 유효 기간, dbt snapshot(timestamp/check 전략)
- Airflow: DAG·오퍼레이터·의존성, 재시도(지수 백오프+지터), 다층 SLA, 동적 파라미터화

## 진행 상황

- [x] 강의별 노트 정리 완료
- [x] 퀴즈·AI 채점·해답지 제외

## 강의 목록

<!-- course-inventory:start -->
### Module 1 - Understanding Data Flow Diagram Fundamentals

- **01 Why Data Flow Visualization Drives Engineering Success**
- **02 Systematic Approach to Identifying Sources and Destinations**
- **03 Creating Your First Data Flow Diagram**

### Module 2 - Creating Comprehensive Data Flow Diagrams

- **01 Advanced Diagramming Techniques for Complex Data Systems**
- **02 Mapping Complex Multi-System Data Pipelines**

### Module 3 - Modular Pipeline Development

- **01 Open Source Tool Ecosystem - Spark dbt and Airflow Integration**

### Module 4 - Pipeline Implementation and Integration

- **01 End-to-End Pipeline Integration**

### Module 5 - Connector Configuration Foundations

- **01 Why Data Source Unification Matters for Enterprise Success**
- **02 Airbyte Connector Fundamentals - Your Integration Foundation**

### Module 6 - Unified Data Integration

- **01 Enterprise Integration Success Stories - Why Multi-Source Unity Matters**
- **02 Streaming and API Connector Configuration Mastery**

### Module 7 - SCD2 Historical Tracking

- [01 Why SCD2 Matters in Enterprise Data Warehouses](Module%207%20-%20SCD2%20Historical%20Tracking/01%20Why%20SCD2%20Matters%20in%20Enterprise%20Data%20Warehouses.md)
- [02 Understanding SCD2 Core Components and Business Logic](Module%207%20-%20SCD2%20Historical%20Tracking/02%20Understanding%20SCD2%20Core%20Components%20and%20Business%20Logic.md)
- [03 Building Your First SCD2 Table Structure in SQL](Module%207%20-%20SCD2%20Historical%20Tracking/03%20Building%20Your%20First%20SCD2%20Table%20Structure%20in%20SQL.md)

### Module 8 - dbt SCD2 Implementation

- [01 dbt Snapshots for Automated SCD2 Change Detection](Module%208%20-%20dbt%20SCD2%20Implementation/01%20dbt%20Snapshots%20for%20Automated%20SCD2%20Change%20Detection.md)
- [02 Building Complete dbt SCD2 Model with Validity Periods](Module%208%20-%20dbt%20SCD2%20Implementation/02%20Building%20Complete%20dbt%20SCD2%20Model%20with%20Validity%20Periods.md)

### Module 9 - Workflow Design Principles

- **01 The Cost of Fragile Data Pipelines**
- **02 Apache Airflow Fundamentals for Production Workflows**
- **03 Building Your First Production-Ready DAG Structure**

### Module 10 - Production Implementation

- **01 When Production Workflows Save Business Operations**
- **02 Implementing Advanced Production Patterns in Airflow**

### Module 11 - Automated Data Pipeline Project

- **01 Project - Automated Data Pipeline System**

<!-- course-inventory:end -->
