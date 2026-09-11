# Data Marts, Data Lakes, ETL, and Data Pipelines

## 개요
- 강좌: What is Data Science?
- 모듈: Data literacy for Data Science (Optional)
- 재생 시간: 7분
- [MOOC 원본 강의](https://www.mooc.org/learn/what-is-datascience/lecture/b2dfM/data-marts-data-lakes-etl-and-data-pipelines)
- 교육 과정 초반에는 데이터베이스, 데이터 웨어하우스, 빅데이터 저장소를 살펴보았습니다.
- 데이터 웨어하우스는 다양한 사용 사례를 위한 다목적 스토리지처럼 작동합니다.

## 내용
### 핵심 내용
- 교육 과정 초반에는 데이터베이스, 데이터 웨어하우스, 빅데이터 저장소를 살펴보았습니다.
- 데이터 웨어하우스는 다양한 사용 사례를 위한 다목적 스토리지처럼 작동합니다.
- 식별된 출처에서 원시 데이터를 수집하고, 보고 및 분석 요구 사항에 맞는 정보를 추출하고, 데이터를 정리, 표준화하고, 조직의 상황에서 사용할 수 있는 형식으로 변환한 다음 데이터 리포지토리에 로드하는 자동화된 프로세스입니다.
- 예를 들어 모든 원본 데이터에서 날짜 형식과 측정 단위를 일관되게 만들고, 중복 데이터를 제거하고, 필요하지 않은 데이터를 필터링하고, 데이터를 보강하기 (예: 전체 이름을 이름, 중간, 성으로 분할, 테이블 간의 주요 관계 설정, 비즈니스 규칙 및 데이터 검증 적용).
- 둘 다 데이터를 소스에서 대상으로 이동하지만, 데이터 파이프라인은 한 시스템에서 다른 시스템으로 데이터를 이동하는 전체 과정을 포괄하는 더 넓은 용어이며, ETL도 이 중 일부입니다.
- 다양한 데이터 파이프라인 솔루션을 사용할 수 있으며, 그 중 가장 인기 있는 솔루션은 Apache Beam과 DataFlow입니다.

### 한국어 Transcript

교육 과정 초반에는 데이터베이스, 데이터 웨어하우스, 빅데이터 저장소를 살펴보았습니다. 이제 데이터 웨어하우스, 데이터 마트, 데이터 레이크에 대해 좀 더 깊이 알아보고 ETL 프로세스와 데이터 파이프라인에 대해서도 알아보겠습니다. 데이터 웨어하우스는 다양한 사용 사례를 위한 다목적 스토리지처럼 작동합니다. 데이터가 웨어하우스로 들어올 즈음에는 이미 특정 목적에 맞게 모델링되고 구조화되었으므로 분석 준비가 완료된 것입니다. 조직의 입장에서는 운영 체제의 엄청난 양의 데이터를 보고 및 분석에 즉시 사용할 수 있어야 하는 경우 데이터 웨어하우스를 선택하는 것이 좋습니다.

데이터 웨어하우스는 정리, 준수 및 분류된 현재 및 과거 데이터를 저장하는 단일 정보 소스 역할을 합니다. 데이터 웨어하우스는 운영 및 성능 분석을 지원하는 다목적 도구입니다. 데이터 마트는 데이터 웨어하우스의 하위 섹션으로, 특정 비즈니스 기능, 목적 또는 사용자 커뮤니티를 위해 특별히 구축되었습니다. 이해관계자가 필요할 때 가장 관련성이 높은 데이터를 제공하는 것이 핵심입니다. 예를 들어 영업팀이나 재무팀이 분기별 보고 및 예측을 위해 데이터에 액세스하는 경우를 예로 들 수 있습니다.

데이터 마트는 데이터 웨어하우스의 제한된 영역에 대한 분석 기능을 제공하므로 격리된 보안과 격리된 성능을 제공합니다. 데이터 마트의 가장 중요한 역할은 비즈니스별 보고 및 분석입니다. Data Lake는 대량의 정형, 반정형 및 비정형 데이터를 메타데이터로 분류하고 태그가 지정된 기본 형식으로 저장할 수 있는 스토리지 리포지토리입니다. 따라서 데이터 웨어하우스는 특정 요구 사항에 맞게 처리된 데이터를 저장하는 반면, 데이터 레이크는 각 데이터 요소에 고유한 식별자가 부여되고 추후 사용을 위해 메타태그로 태그가 지정되는 원시 데이터 풀입니다. 지속적으로 대량의 데이터를 생성하거나 이에 액세스할 수 있는 경우 데이터 레이크를 선택하는 것이 좋지만, 특정 또는 사전 정의된 사용 사례에만 국한되고 싶지는 않습니다.

데이터 웨어하우스와 달리 데이터 레이크는 예외 없이 모든 소스 데이터를 보존합니다. 또한 데이터에는 모든 유형의 데이터 소스와 유형이 포함될 수 있습니다. 데이터 레이크는 데이터 웨어하우스의 스테이징 영역으로도 사용되기도 합니다. 데이터 레이크의 가장 중요한 역할은 예측 및 고급 분석입니다. 이제 데이터에서 가치를 창출하는 핵심 프로세스인 추출, 변환, 로드 프로세스, 즉 ETL에 대해 알아보겠습니다.

ETL은 원시 데이터를 분석 가능한 데이터로 변환하는 방법입니다. 식별된 출처에서 원시 데이터를 수집하고, 보고 및 분석 요구 사항에 맞는 정보를 추출하고, 데이터를 정리, 표준화하고, 조직의 상황에서 사용할 수 있는 형식으로 변환한 다음 데이터 리포지토리에 로드하는 자동화된 프로세스입니다. ETL은 일반적인 프로세스이지만 실제 작업은 사용량, 유용성 및 복잡성 측면에서 매우 다를 수 있습니다. 추출은 변환을 위해 원본 위치의 데이터를 수집하는 단계입니다. 데이터 추출은 다음을 통해 이루어질 수 있습니다.

즉, 소스 데이터를 의미하는 일괄 처리는 예정된 간격에 따라 소스에서 대상 시스템으로 대량으로 이동합니다. 일괄 처리를 위한 도구로는 Stitch와 Blendo가 있습니다. 스트림 프로세싱: 전송 중과 데이터 리포지토리로 로드되기 전에 소스 데이터를 소스에서 실시간으로 가져와 변환합니다. 스트림 처리를 위한 도구로는 아파치 삼자, 아파치 스톰, 아파치 카프카 등이 있습니다. 변환에는 원시 데이터를 분석에 사용할 수 있는 데이터로 변환하는 규칙과 함수의 실행이 포함됩니다.

예를 들어 모든 원본 데이터에서 날짜 형식과 측정 단위를 일관되게 만들고, 중복 데이터를 제거하고, 필요하지 않은 데이터를 필터링하고, 데이터를 보강하기 (예: 전체 이름을 이름, 중간, 성으로 분할, 테이블 간의 주요 관계 설정, 비즈니스 규칙 및 데이터 검증 적용). 로드는 처리된 데이터를 대상 시스템 또는 데이터 리포지토리로 전송하는 단계입니다. 여기에는 리포지토리의 모든 데이터를 채우는 초기 로드, 필요에 따라 지속적인 업데이트 및 수정 사항을 주기적으로 적용하는 증분 로드, 전체 새로 고침 (즉, 하나 이상의 테이블에서 콘텐츠를 지우고 새 데이터로 다시 로드) 이 포함될 수 있습니다. 누락된 값이나 null 값에 대한 데이터 검사, 서버 성능 및 로드 실패 모니터링을 포함하는 로드 확인은 이 프로세스 단계에서 중요한 부분입니다. 로드 장애를 주시하고 올바른 복구 메커니즘을 마련하는 것이 중요합니다.

ETL은 예전부터 대규모 배치 워크로드에 사용되었습니다. 그러나 스트리밍 ETL 도구가 등장하면서 실시간 스트리밍 이벤트 데이터에도 점점 더 많이 사용되고 있습니다. ETL과 데이터 파이프라인이라는 용어가 같은 의미로 사용되는 경우가 흔합니다. 둘 다 데이터를 소스에서 대상으로 이동하지만, 데이터 파이프라인은 한 시스템에서 다른 시스템으로 데이터를 이동하는 전체 과정을 포괄하는 더 넓은 용어이며, ETL도 이 중 일부입니다. 데이터 파이프라인은 일괄 처리, 스트리밍 데이터, 배치 및 스트리밍 데이터의 조합에 맞게 설계될 수 있습니다.

스트리밍 데이터의 경우, 데이터 처리 또는 변환은 연속적인 흐름으로 이루어집니다. 이는 센서 모니터링 트래픽의 데이터와 같이 지속적인 업데이트가 필요한 데이터에 특히 유용합니다. 데이터 파이프라인은 장기 실행 일괄 쿼리와 소규모 대화형 쿼리를 모두 지원하는 고성능 시스템입니다. 데이터 파이프라인의 대상은 일반적으로 데이터 레이크이지만 다른 애플리케이션이나 시각화 도구와 같은 다른 대상 대상에 데이터가 로드될 수도 있습니다. 다양한 데이터 파이프라인 솔루션을 사용할 수 있으며, 그 중 가장 인기 있는 솔루션은 Apache Beam과 DataFlow입니다.

## 예시
- 데이터 웨어하우스는 다양한 사용 사례를 위한 다목적 스토리지처럼 작동합니다.
- 예를 들어 영업팀이나 재무팀이 분기별 보고 및 예측을 위해 데이터에 액세스하는 경우를 예로 들 수 있습니다.
- 지속적으로 대량의 데이터를 생성하거나 이에 액세스할 수 있는 경우 데이터 레이크를 선택하는 것이 좋지만, 특정 또는 사전 정의된 사용 사례에만 국한되고 싶지는 않습니다.
- 예를 들어 모든 원본 데이터에서 날짜 형식과 측정 단위를 일관되게 만들고, 중복 데이터를 제거하고, 필요하지 않은 데이터를 필터링하고, 데이터를 보강하기 (예: 전체 이름을 이름, 중간, 성으로 분할, 테이블 간의 주요 관계 설정, 비즈니스 규칙 및 데이터 검증 적용).

## 요약
- 예를 들어 모든 원본 데이터에서 날짜 형식과 측정 단위를 일관되게 만들고, 중복 데이터를 제거하고, 필요하지 않은 데이터를 필터링하고, 데이터를 보강하기 (예: 전체 이름을 이름, 중간, 성으로 분할, 테이블 간의 주요 관계 설정, 비즈니스 규칙 및 데이터 검증 적용).
- 둘 다 데이터를 소스에서 대상으로 이동하지만, 데이터 파이프라인은 한 시스템에서 다른 시스템으로 데이터를 이동하는 전체 과정을 포괄하는 더 넓은 용어이며, ETL도 이 중 일부입니다.
- 다양한 데이터 파이프라인 솔루션을 사용할 수 있으며, 그 중 가장 인기 있는 솔루션은 Apache Beam과 DataFlow입니다.

<details>
<summary>영문 Transcript 원문</summary>

Earlier in the course, we examined databases, data warehouses, and big data stores. Now we’ll go a little deeper in our exploration of data warehouses, data marts, and data lakes; and also learn about the ETL process and data pipelines. A data warehouse works like a multi-purpose storage for different use cases. By the time the data comes into the warehouse, it has already been modeled and structured for a specific purpose, meaning it is analysis ready. As an organization, you would opt for a data warehouse when you have massive amounts of data from your operational systems that needs to be readily available for reporting and analysis.

Data warehouses serve as the single source of truth—storing current and historical data that has been cleansed, conformed, and categorized. A data warehouse is a multi-purpose enabler of operational and performance analytics. A data mart is a sub-section of the data warehouse, built specifically for a particular business function, purpose, or community of users. The idea is to provide stakeholders data that is most relevant to them, when they need it. For example, the sales or finance teams accessing data for their quarterly reporting and projections.

Since a data mart offers analytical capabilities for a restricted area of the data warehouse, it offers isolated security and isolated performance. The most important role of a data mart is business-specific reporting and analytics. A Data Lake is a storage repository that can store large amounts of structured, semi-structured, and unstructured data in their native format, classified and tagged with metadata. So, while a data warehouse stores data processed for a specific need, a data lake is a pool of raw data where each data element is given a unique identifier and is tagged with metatags for further use. You would opt for a data lake if you generate, or have access to, large volumes of data on an ongoing basis, but don’t want to be restricted to specific or pre-defined use cases.

Unlike data warehouses, a data lake would retain all source data, without any exclusions. And the data could include all types of data sources and types. Data lakes are sometimes also used as a staging area of a data warehouse. The most important role of a data lake is in predictive and advanced analytics. Now we come to the process that is at the heart of gaining value from data—the Extract, Transform, and Load process, or ETL.

ETL is how raw data is converted into analysis-ready data. It is an automated process in which you gather raw data from identified sources, extract the information that aligns with your reporting and analysis needs, clean, standardize, and transform that data into a format that is usable in the context of your organization; and load it into a data repository. While ETL is a generic process, the actual job can be very different in usage, utility, and complexity. Extract is the step where data from source locations is collected for transformation. Data extraction could be through: Batch processing, meaning source data, is moved in large chunks from the source to the target system at scheduled intervals.

Tools for batch processing include Stitch and Blendo. Stream processing, which means source data is pulled in real-time from the source and transformed while it is in transit and before it is loaded into the data repository. Tools for stream processing include Apache Samza, Apache Storm, and Apache Kafka. Transform involves the execution of rules and functions that converts raw data into data that can be used for analysis. For example, making date formats and units of measurement consistent across all sourced data, removing duplicate data, filtering out data that you do not need, enriching data, for example, splitting full name to first, middle, and last names, establishing key relationships across tables, applying business rules and data validations.

Load is the step where processed data is transported to a destination system or data repository. It could be: Initial loading, that is, populating all the data in the repository, Incremental loading, that is, applying ongoing updates and modifications as needed periodically; or Full refresh, that is, erasing contents of one or more tables and reloading with fresh data. Load verification, which includes data checks for missing or null values, server performance, and monitoring load failures, are important parts of this process step. It is vital to keep an eye on load failures and ensure the right recovery mechanisms are in place. ETL has historically been used for batch workloads on a large scale.

However, with the emergence of streaming ETL tools, they are increasingly being used for real-time streaming event data as well. It’s common to see the terms ETL and data pipelines used interchangeably. And although both move data from source to destination, data pipeline is a broader term that encompasses the entire journey of moving data from one system to another, of which ETL is a subset. Data pipelines can be architected for batch processing, for streaming data, and a combination of batch and streaming data. In the case of streaming data, data processing or transformation, happens in a continuous flow.

This is particularly useful for data that needs constant updating, such as data from a sensor monitoring traffic. A data pipeline is a high performing system that supports both long-running batch queries and smaller interactive queries. The destination for a data pipeline is typically a data lake, although the data may also be loaded to different target destinations, such as another application or a visualization tool. There are a number of data pipeline solutions available, most popular among them being Apache Beam and DataFlow.

</details>
