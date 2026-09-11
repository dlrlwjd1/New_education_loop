# NoSQL

## 개요
- 강좌: What is Data Science?
- 모듈: Data literacy for Data Science (Optional)
- 재생 시간: 8분
- [MOOC 원본 강의](https://www.mooc.org/learn/what-is-datascience/lecture/uoeU8/nosql)
- NoSQL은 “단지 SQL이 아닙니다” 또는 때로는 “비SQL”의 약자로, 데이터의 저장 및 검색을 위한 유연한 스키마를 제공하는 비관계형 데이터베이스 디자인입니다.
- NoSQL 데이터베이스는 수년 전부터 존재해 왔지만 클라우드, 빅데이터, 대용량 웹 및 모바일 애플리케이션 시대에 접어들면서 최근 들어 더욱 대중화되었습니다.

## 내용
### 핵심 내용
- NoSQL은 “단지 SQL이 아닙니다” 또는 때로는 “비SQL”의 약자로, 데이터의 저장 및 검색을 위한 유연한 스키마를 제공하는 비관계형 데이터베이스 디자인입니다.
- NoSQL 데이터베이스는 수년 전부터 존재해 왔지만 클라우드, 빅데이터, 대용량 웹 및 모바일 애플리케이션 시대에 접어들면서 최근 들어 더욱 대중화되었습니다.
- 데이터 저장에 사용되는 모델에 따라 NoSQL 데이터베이스에는 키-값 저장소, 문서 기반, 열 기반 및 그래프 기반의 네 가지 일반적인 유형이 있습니다.
- 그래프 기반: 그래프 기반 데이터베이스는 그래픽 모델을 사용하여 데이터를 표현하고 저장합니다.
- 다른 장점으로는 여러 데이터 센터에 걸쳐 분산된 시스템을 실행할 수 있어 클라우드 컴퓨팅 인프라를 활용할 수 있다는 점, 새 노드 추가에 따른 추가 용량 및 성능을 제공하는 효율적이고 비용 효율적인 스케일 아웃 아키텍처, 보다 민첩하고 유연하며 반복 작업을 더 빠르게 수행할 수 있는 단순화된 설계, 가용성 제어 강화, 개선된 확장성 등을 들 수 있습니다.
- 국가 및 비관계형 데이터베이스: RDBMS 스키마는 데이터베이스에 삽입되는 모든 데이터를 입력하고 구성하는 방법을 엄격하게 정의하는 반면, NoSQL 데이터베이스는 스키마에 구애받지 않으므로 비정형 및 반정형 데이터를 저장하고 조작할 수 있습니다.

### 한국어 Transcript

NoSQL은 “단지 SQL이 아닙니다” 또는 때로는 “비SQL”의 약자로, 데이터의 저장 및 검색을 위한 유연한 스키마를 제공하는 비관계형 데이터베이스 디자인입니다. NoSQL 데이터베이스는 수년 전부터 존재해 왔지만 클라우드, 빅데이터, 대용량 웹 및 모바일 애플리케이션 시대에 접어들면서 최근 들어 더욱 대중화되었습니다. 확장성, 성능, 사용 편의성과 관련된 특성 때문에 오늘날 이들 제품이 선택되고 있습니다. “ NoSQL”의 “아니오”는 “not only”의 약어이지 실제 “No”라는 단어가 아니라는 점을 강조하는 것이 중요합니다. NoSQL 데이터베이스는 특정 데이터 모델에 맞게 구축되었으며 프로그래머가 최신 애플리케이션을 만들고 관리할 수 있는 유연한 스키마를 사용합니다.

이들은 고정된 스키마가 있는 기존의 행/열/테이블 데이터베이스 디자인을 사용하지 않으며, 일부는 SQL 또는 SQL과 유사한 인터페이스를 지원하지만 일반적으로 데이터를 쿼리하는 데 구조화된 쿼리 언어 (또는 SQL) 를 사용하지 않습니다. NoSQL을 사용하면 스키마가 없거나 자유 형식으로 데이터를 저장할 수 있습니다. 정형, 반정형, 비정형 등 모든 데이터를 모든 레코드에 저장할 수 있습니다. 데이터 저장에 사용되는 모델에 따라 NoSQL 데이터베이스에는 키-값 저장소, 문서 기반, 열 기반 및 그래프 기반의 네 가지 일반적인 유형이 있습니다. 키-값 저장소: 키-값 데이터베이스의 데이터는 키-값 쌍의 컬렉션으로 저장됩니다.

키는 데이터의 속성을 나타내며 고유 식별자입니다. 키와 값은 모두 간단한 정수나 문자열에서 복잡한 JSON 문서에 이르기까지 무엇이든 될 수 있습니다. 키-값 저장소는 사용자 세션 데이터와 사용자 기본 설정을 저장하고, 실시간 추천 및 타겟 광고를 만들고, 인메모리 데이터 캐싱에 적합합니다. 하지만 특정 데이터 값에 대한 데이터를 쿼리하려는 경우, 데이터 값 간의 관계가 필요하거나 여러 개의 고유 키가 필요한 경우에는 키-값 저장소가 적합하지 않을 수 있습니다. Redis, Memcached, DynamoDB 등이 이 범주에 속하는 잘 알려진 몇 가지 예입니다.

문서 기반: 문서 데이터베이스는 각 레코드와 관련 데이터를 단일 문서 내에 저장합니다. 이를 통해 유연한 인덱싱, 강력한 임시 쿼리 및 문서 컬렉션에 대한 분석이 가능합니다. 전자 상거래 플랫폼, 의료 기록 저장소, CRM 플랫폼 및 분석 플랫폼에는 문서 데이터베이스가 적합합니다. 하지만 복잡한 검색 쿼리와 다중 작업 트랜잭션을 실행하려는 경우에는 문서 기반 데이터베이스가 최선의 옵션이 아닐 수 있습니다. MongoDB, DocumentDB, CouchDB 및 Cloudant는 널리 사용되는 문서 기반 데이터베이스 중 일부입니다.

열 기반: 열 기반 모델은 행 대신 데이터 열로 그룹화된 셀에 데이터를 저장합니다. 열을 논리적으로 그룹화한 것, 즉 일반적으로 함께 액세스하는 열을 열 패밀리라고 합니다. 예를 들어 고객의 이름과 프로필 정보는 함께 액세스할 가능성이 높지만 구매 내역은 액세스할 수 없습니다. 따라서 고객 이름 및 프로필 정보 데이터를 열 그룹으로 그룹화할 수 있습니다. 열 데이터베이스는 열에 해당하는 모든 셀을 연속 디스크 항목으로 저장하므로 데이터 액세스 및 검색 속도가 매우 빨라집니다.

열 데이터베이스는 쓰기 요청이 많고 시계열 데이터, 날씨 데이터 및 IoT 데이터를 저장하는 시스템에 적합합니다. 하지만 복잡한 쿼리를 사용하거나 쿼리 패턴을 자주 변경해야 하는 경우에는 이 옵션이 적합하지 않을 수 있습니다. 가장 많이 사용되는 컬럼 데이터베이스는 Cassandra와 HBase입니다. 그래프 기반: 그래프 기반 데이터베이스는 그래픽 모델을 사용하여 데이터를 표현하고 저장합니다. 서로 다른 데이터 조각 간의 연결을 시각화하고 분석하고 찾는 데 특히 유용합니다.

그래프 데이터베이스는 연결된 데이터, 즉 상호 연결된 많은 관계를 포함하는 데이터로 작업하는 데 탁월한 선택입니다. 그래프 데이터베이스는 소셜 네트워크, 실시간 제품 추천, 네트워크 다이어그램, 사기 탐지 및 액세스 관리에 적합합니다. 하지만 그래프 데이터베이스는 대용량 분석 쿼리에 최적화되어 있지 않기 때문에 대량의 트랜잭션을 처리하려는 경우에는 적합하지 않을 수 있습니다. Neo4J와 CosmosDB는 가장 인기 있는 그래프 데이터베이스 중 일부입니다. NoSQLNoSQL의 장점은 기존 관계형 데이터베이스 기술의 한계에 대응하여 만들어졌습니다.

NoSQL의 주요 장점은 대량의 정형, 반정형 및 비정형 데이터를 처리할 수 있다는 것입니다. 다른 장점으로는 여러 데이터 센터에 걸쳐 분산된 시스템을 실행할 수 있어 클라우드 컴퓨팅 인프라를 활용할 수 있다는 점, 새 노드 추가에 따른 추가 용량 및 성능을 제공하는 효율적이고 비용 효율적인 스케일 아웃 아키텍처, 보다 민첩하고 유연하며 반복 작업을 더 빠르게 수행할 수 있는 단순화된 설계, 가용성 제어 강화, 개선된 확장성 등을 들 수 있습니다. 국가 및 비관계형 데이터베이스: RDBMS 스키마는 데이터베이스에 삽입되는 모든 데이터를 입력하고 구성하는 방법을 엄격하게 정의하는 반면, NoSQL 데이터베이스는 스키마에 구애받지 않으므로 비정형 및 반정형 데이터를 저장하고 조작할 수 있습니다. 고급 상용 관계형 데이터베이스 관리 시스템을 유지 관리하는 데는 비용이 많이 드는 반면 NoSQL 데이터베이스는 저렴한 상용 하드웨어를 위해 특별히 설계되었습니다. 대부분의 NoSQL과 달리 관계형 데이터베이스는 ACID 규정 준수를 지원하므로 트랜잭션의 안정성과 장애 복구가 보장됩니다.

RDBMS는 성숙하고 잘 문서화된 기술이므로 비교적 최신 기술인 NoSQL에 비해 위험을 어느 정도 인지할 수 있습니다. 그럼에도 불구하고 NoSQL 데이터베이스는 계속 존재할 것이며 업무상 중요한 애플리케이션에 점점 더 많이 사용되고 있습니다.

## 예시
- 이들은 고정된 스키마가 있는 기존의 행/열/테이블 데이터베이스 디자인을 사용하지 않으며, 일부는 SQL 또는 SQL과 유사한 인터페이스를 지원하지만 일반적으로 데이터를 쿼리하는 데 구조화된 쿼리 언어 (또는 SQL) 를 사용하지 않습니다.
- 정형, 반정형, 비정형 등 모든 데이터를 모든 레코드에 저장할 수 있습니다.
- 하지만 특정 데이터 값에 대한 데이터를 쿼리하려는 경우, 데이터 값 간의 관계가 필요하거나 여러 개의 고유 키가 필요한 경우에는 키-값 저장소가 적합하지 않을 수 있습니다.
- 문서 기반: 문서 데이터베이스는 각 레코드와 관련 데이터를 단일 문서 내에 저장합니다.

## 요약
- 그래프 기반: 그래프 기반 데이터베이스는 그래픽 모델을 사용하여 데이터를 표현하고 저장합니다.
- 다른 장점으로는 여러 데이터 센터에 걸쳐 분산된 시스템을 실행할 수 있어 클라우드 컴퓨팅 인프라를 활용할 수 있다는 점, 새 노드 추가에 따른 추가 용량 및 성능을 제공하는 효율적이고 비용 효율적인 스케일 아웃 아키텍처, 보다 민첩하고 유연하며 반복 작업을 더 빠르게 수행할 수 있는 단순화된 설계, 가용성 제어 강화, 개선된 확장성 등을 들 수 있습니다.
- 국가 및 비관계형 데이터베이스: RDBMS 스키마는 데이터베이스에 삽입되는 모든 데이터를 입력하고 구성하는 방법을 엄격하게 정의하는 반면, NoSQL 데이터베이스는 스키마에 구애받지 않으므로 비정형 및 반정형 데이터를 저장하고 조작할 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

NoSQL, which stands for “not only SQL,” or sometimes “non SQL” is a non-relational database design that provides flexible schemas for the storage and retrieval of data. NoSQL databases have existed for many years but have only recently become more popular in the era of cloud, big data, and high-volume web and mobile applications. They are chosen today for their attributes around scale, performance,and ease of use. It's important to emphasize that the "No" in "NoSQL" is an abbreviation for "not only" and not the actual word "No. " NoSQL databases are built for specific data models and have flexible schemas that allow programmers to create and manage modern applications.

They do not use a traditional row/column/table database design with fixed schemas, and typically not use the structured query language (or SQL) to query data, although some may support SQL or SQL-like interfaces. NoSQLallows data to be stored in a schema-less or free-form fashion. Any data, be It structured, semi-structured, or unstructured,can be stored in any record. Based on the model being used for storing data, there are four common types of NoSQL databases: Key-value store, Document-based, Column-based, and graph-based. Key-value store: Data in a key-value database is stored as a collection of key-value pairs.

The key represents an attribute of the data and is a unique identifier. Both keys and values can be anything from simple integers or strings to complex JSON documents. Key-value stores are great for storing user session dataanduser preferences, making real-time recommendations and targeted advertising, and in-memory data caching. However, if you want to be able to query the data on specific data value, need relationships between data values, or need to have multiple unique keys, a key-value store may not be the best fit. Redis, Memcached, and DynamoDB are some well-known examples in this category.

Document-based: Document databasesstore each record and its associated data within a single document. They enable flexible indexing, powerful ad hoc queries, and analytics over collections of documents. Document databases are preferable for eCommerce platforms, medical records storage, CRM platforms, and analytics platforms. However, if you’re looking to run complex search queries and multi-operation transactions, a document-based database may not be the best option for you. MongoDB, DocumentDB, CouchDB, and Cloudant are some of the popular document-based databases.

Column-based: Column-based models store data in cells grouped as columns of data instead of rows. A logical grouping of columns, that is, columns that are usually accessed together, is called a column family. For example, a customer’s name and profile information will most likely be accessed together but not their purchase history. So,customer name and profile information data can be grouped into a column family. Since column databases store all cells corresponding to a column as a continuous disk entry, accessing and searching the data becomes very fast.

Column databases can be great for systems that require heavy write requests, storing time-series data, weather data, and IoT data. But if you need to use complex queries or change your querying patterns frequently, this may not be the best option for you. The most popular column databases are Cassandra and HBase. Graph-based: Graph-based databases use a graphical model to represent and store data. They are particularly useful for visualizing, analyzing, and finding connections between different pieces of data.

The circles arenodes, and they contain the data. The arrows represent relationships. Graph databases are an excellent choice for working with connected data, which is data that contains lots of interconnected relationships. Graph databases are great for social networks, real-time product recommendations, network diagrams, fraud detection, and access management. But if you want to process high volumes of transactions, it may not be the best choice for you, because graph databases are not optimized for large-volume analytics queries.

Neo4J and CosmosDB are some of the more popular graph databases. Advantages of NoSQLNoSQL was created in response to the limitations of traditional relational database technology. The primary advantage of NoSQL is its ability to handle large volumes of structured, semi-structured, and unstructured data. Some of its other advantages include: The ability to run as distributed systemsscaled across multiple data centers, which enables them to take advantage of cloud computing infrastructure; An efficient and cost-effective scale-out architecture that provides additional capacity and performance with the addition of new nodes; and Simpler design, better control over availability, and improved scalability that enables you to be more agile, more flexible, and to iterate more quickly To summarizethe key differencesbetween relational and non-relational databases: RDBMS schemas rigidly define how all data inserted into the database must be typed and composed, whereas NoSQL databases can be schema-agnostic, allowing unstructured and semi-structured data to be stored and manipulated. Maintaining high-end, commercial relational database management systems is expensive whereas NoSQL databases are specifically designed for low-cost commodity hardware Relational databases, unlike most NoSQL, support ACID-compliance, which ensures reliability of transactions and crash recovery.

RDBMS is a mature and well-documented technology, which means the risks are more or less perceivable as compared to NoSQL, which is a relatively newer technology. Nonetheless, NoSQL databases are here to stay, and are increasingly being used for mission critical applications.

</details>
