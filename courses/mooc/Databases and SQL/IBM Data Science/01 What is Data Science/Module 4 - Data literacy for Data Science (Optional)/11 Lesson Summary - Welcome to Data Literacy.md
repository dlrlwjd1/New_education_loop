# Lesson Summary: Welcome to Data Literacy

## 개요
- 강좌: What is Data Science?
- 모듈: Data literacy for Data Science (Optional)
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/what-is-datascience/lecture/FLO5c/lesson-summary-welcome-to-data-literacy)
- 데이터 과학자는 조직의 구성 및 관리를 위한 데이터 저장 가능성과 검색 옵션에 대한 인식이 필요합니다.
- 이러한 시스템을 사용하면 필요한 데이터를 찾고 분석하여 해당 데이터에 숨겨진 훌륭한 발견을 할 수 있습니다.

## 내용
### 핵심 내용
- 데이터 과학자는 조직의 구성 및 관리를 위한 데이터 저장 가능성과 검색 옵션에 대한 인식이 필요합니다.
- 이러한 시스템을 사용하면 필요한 데이터를 찾고 분석하여 해당 데이터에 숨겨진 훌륭한 발견을 할 수 있습니다.
- 정형, 반정형 또는 비정형 데이터를 저장할 수 있습니다.
- 관계형 데이터베이스는 정형 데이터를 저장합니다.
- 반정형 및 비정형 데이터를 저장할 수 있습니다.
- 추출, 변환, 로드의 약자인 ETL은 데이터 파이프라인의 하위 집합으로, 조직이 원시 데이터를 분석에 바로 사용할 수 있는 데이터로 변환하는 자동화된 프로세스를 말합니다.

### 한국어 Transcript

데이터 해독 능력 강의 요약에 오신 것을 환영합니다. 데이터 과학자는 조직의 구성 및 관리를 위한 데이터 저장 가능성과 검색 옵션에 대한 인식이 필요합니다. 이러한 시스템을 사용하면 필요한 데이터를 찾고 분석하여 해당 데이터에 숨겨진 훌륭한 발견을 할 수 있습니다. 이 비디오에서는 대량의 데이터를 처리하는 기술과 도구에 대해 이 강의에서 배운 내용을 요약해 보겠습니다. 이러한 리포지토리에는 원하는 데이터를 찾아 사용 가능한 형식으로 반환할 수 있는 기능이 필요합니다.

데이터 유형은 필요한 리포지토리 유형을 결정하는 데 도움이 됩니다. 정형, 반정형 또는 비정형 데이터를 저장할 수 있습니다. 조직에 따라 관계형 데이터베이스가 필요할 수도 있고 비SQL 데이터베이스가 필요할 수도 있습니다. 빅데이터 저장소의 경우 데이터 웨어하우스, 데이터 마트 또는 데이터 레이크가 필요할 수 있습니다. 관계형 데이터베이스는 정형 데이터를 저장합니다.

가장 오래된 유형의 리포지토리입니다. 가장 일반적이고 자주 사용되는 관계형 데이터베이스 관리 시스템 ( 줄여서 RDBMS라고 함) 은 데이터를 행과 열로 정렬하여 표 형식으로 구조화하는 기본 개념을 기반으로 합니다. 각 테이블은 일반적으로 주제와 관련이 있으며, 테이블의 데이터 열에는 해당 주제와 관련된 특정 유형의 정보가 포함됩니다. 그러면 데이터베이스에는 테이블을 서로 설명하는 정의된 스키마가 포함됩니다. 관계형 데이터베이스는 일반적으로 구조화된 쿼리 언어 또는 SQL을 사용하여 필요한 데이터를 검색하고 검색합니다.

SQL을 사용하여 데이터를 조작합니다. 관계형 데이터베이스는 서로 다른 데이터 조각 간의 연결을 시각화, 분석 및 찾는 데 유용합니다. 스키마를 만들어 테이블을 서로 연결하고, 데이터베이스 필드를 특정 데이터 유형과 값으로 제한하여 불규칙성을 최소화하고 일관성과 데이터 무결성을 높일 수 있습니다. 간편한 내보내기 및 가져오기 옵션을 제공하므로 백업과 복원이 간편합니다. 하지만 RBMS는 반정형 또는 비정형 데이터에는 잘 작동하지 않습니다.

또한 데이터 세트가 너무 많으면 쿼리 속도가 느립니다. RDBMS는 데이터에 대해 사전 정의된 구조를 사용하기 때문에 데이터가 진화하여 더 이상 해당 구조를 따르지 않으면 문제가 됩니다. 또한 관계형 데이터베이스는 필드 길이를 제한하므로 필요한 정보를 수용할 수 없는 경우가 있습니다. 이러한 제한과 수집되는 데이터의 양 및 다양성 때문에 많은 조직에서는 SQL 데이터베이스뿐만 아니라 줄여서 SQL 데이터베이스를 사용하지 않고 있습니다. 속도, 유연성 및 규모를 고려하여 구축된 비관계형 데이터베이스를 사용하면 엄격한 스키마 없이 데이터를 저장할 수 있습니다.

반정형 및 비정형 데이터를 저장할 수 있습니다. 문서 기반, 키 값, 열 형식 및 그래프를 포함하는 SQL 데이터베이스는 없습니다. 문서 기반 데이터베이스는 Jason 파일과 같은 반정형 문서를 저장합니다. 문서를 컬렉션으로 그룹화하면 각 문서에는 고유한 구조가 있습니다. 키 값은 각 데이터를 키 값 쌍으로 저장하므로 키를 사용하여 데이터를 검색하고 업데이트합니다.

컬럼형 데이터베이스는 행이 아닌 데이터와 열을 저장하므로 분석 워크로드에 적합한 대용량 데이터를 저장할 수 있습니다. 그래프 데이터베이스는 데이터를 노드에 저장합니다. 노드에는 관계와 속성이 있으며 노드 간의 복잡한 관계를 관리하고 쿼리할 수 있습니다. 대용량 데이터에 데이터 웨어하우스, 데이터 마트, 데이터 레이크와 같은 기술을 사용할 수 있습니다. 데이터 웨어하우스는 다양한 사용 사례에서 다목적 스토리지처럼 작동합니다.

데이터는 이미 특정 목적에 맞게 모델링되고 구조화되었습니다. 조직은 보고 및 분석에 즉시 사용할 수 있어야 하는 운영 체제의 대량의 데이터를 보유하고 있는 경우 데이터 웨어하우스를 선택합니다. 데이터 마트는 특정 비즈니스 기능 , 목적 또는 사용자 커뮤니티를 위해 특별히 구축된 데이터 웨어하우스의 하위 섹션입니다. 데이터 마트는 제한된 데이터 웨어하우스 영역에 대한 분석 기능을 제공하여 격리된 보안 및 성능을 제공합니다. 데이터 레이크는 대량의 정형, 반정형 및 비정형 데이터를 메타데이터로 분류되고 태그가 지정된 기본 형식으로 저장할 수 있는 스토리지 리포지토리입니다.

데이터 파이프라인은 데이터를 수집, 변환, 이동해야 하는 조직의 요구를 해결합니다. 데이터 파이프라인은 여러 단계로 이루어져 있어 대량의 데이터를 지속적으로 수집, 처리 및 사용할 수 있게 되면서 이를 처리할 수 있는 체계적인 프로세스를 제공합니다. 추출, 변환, 로드의 약자인 ETL은 데이터 파이프라인의 하위 집합으로, 조직이 원시 데이터를 분석에 바로 사용할 수 있는 데이터로 변환하는 자동화된 프로세스를 말합니다. 이제 미래의 데이터 과학자는 분석을 시작하기 전에 빅 데이터를 처리하는 데 필요한 많은 기술을 알고 있을 것입니다. 여기에는 데이터 저장, 구성, 관리 및 검색이 포함됩니다.

데이터 스토리지 옵션은 데이터 유형, 볼륨, 구성 방법에 따라 달라집니다. ETL과 같은 데이터 파이프라인을 사용하면 데이터 과학자가 데이터를 분석할 수 있도록 데이터를 관리하고 검색하는 프로세스가 제공됩니다.

## 예시
- 관계형 데이터베이스는 일반적으로 구조화된 쿼리 언어 또는 SQL을 사용하여 필요한 데이터를 검색하고 검색합니다.
- 또한 데이터 세트가 너무 많으면 쿼리 속도가 느립니다.
- 노드에는 관계와 속성이 있으며 노드 간의 복잡한 관계를 관리하고 쿼리할 수 있습니다.
- 데이터 웨어하우스는 다양한 사용 사례에서 다목적 스토리지처럼 작동합니다.

## 요약
- 관계형 데이터베이스는 정형 데이터를 저장합니다.
- 반정형 및 비정형 데이터를 저장할 수 있습니다.
- 추출, 변환, 로드의 약자인 ETL은 데이터 파이프라인의 하위 집합으로, 조직이 원시 데이터를 분석에 바로 사용할 수 있는 데이터로 변환하는 자동화된 프로세스를 말합니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to the data literacy lesson summary. As a data scientist, you need an awareness of data storage possibilities for its organization and management, and options for retrieval. These systems enable you to find and analyze the data you need to make great discoveries hidden in that data. In this video, we'll summarize what you learned in this lesson about the technologies and tools to handle large amounts of data. Let's consider data repositories.

These repositories need the ability to find the data you want and return it to you in a usable format. Your data type helps determine the type of repository you need. You can store structured, semi structured or unstructured data. Depending on the organization, you may need a relational or no SQL database. For big data stores, your needs may call for a data warehouse, a data mart, or a data lake.

Relational databases store structured data. These are the oldest types of repositories. The most conventional and frequently used relational database management systems, often abbreviated as RDBMSs, are based on the foundational concept of structuring data in a tabular format with data arranged in rows and columns. Each table usually relates to a topic, and the columns of data in the table contain a specific type of information related to that topic. Then the database contains a defined schema that describes the table to each other.

Relational databases usually rely on structured query language or SQL, to search for and retrieve the data you need. You use SQL to manipulate the data. Relational databases are beneficial for visualizing, analyzing, and finding connections between different pieces of data. You link tables together by creating schemas, you can restrict database fields to specific data types and values which minimizes irregularities and leads to greater consistency and data integrity. They offer easy export and import options, making back up and restoration easy.

However, RBMS is do not work well with semi structured or unstructured data. They are also slow to query with enormous datasets. Since RDBMSs use predefined structures for data to reside in, it becomes problematic when the data evolves and no longer conforms to that structure. Relational databases also limit field length, which means that sometimes they cannot accommodate the information you need. Because of these limitations and the quantities and diversity of data collected, many organizations have turned to not only SQL databases, or no SQ L for short.

Built for speed, flexibility, and scale, non relational databases allow storing data without stringent schemas. They can house semi structured and unstructured data. No SQL databases include document based, key value, columnar and graph. Document based databases store semi structured documents, such as Jason files. You group documents into collections, and each document has its structure.

Key value stores each piece of data as a key value pair, so you retrieve and update the data using the key. Columnar databases store data and columns rather than rows, enabling storage of large volumes of data suitable for analytical workloads. Graph databases store data in nodes. Nodes have relationships and properties, and can manage and query complex relationships between them. You can use technologies such as data warehouses, data marts, and data lakes for high volumes of data.

A data warehouse works like a multipurpose storage for different use cases. The data has already been modeled and structured for a specific purpose. As an organization, you would opt for a data warehouse when you have a massive amount of data from your operational systems that must be readily available for reporting and analysis. A data mart is a subsection of the data warehouse built specifically for a particular business function, purpose, or community of users. A data mart offers analytical capabilities for restricted data warehouse area, offering isolated security and performance.

A data lake is a storage repository that can store large amounts of structured, semi structured, and unstructured data in their native format, classified and tagged with meta data. Let's review storage options. Data pipelines address an organization's need to collect, transform, and move data. Data pipelines have multiple steps, providing a systematic process to handle massive amounts of data as it is continually collected, processed, and made available. ETL, which stands for extract, transform, and load, is a subset of a data pipeline, referring to an automated process where an organization converts its raw data into data ready for analysis.

Now as a future data scientist, you are aware of many technologies needed to handle big data before analysis can begin. These include data storage, organization and management and retrieval. Data storage options depend on the type of data, its volume, and how you intend to organize it. Using a data pipeline such as ETL, provides a process to manage and retrieve the data so you can analyze it as a data scientist.

</details>
