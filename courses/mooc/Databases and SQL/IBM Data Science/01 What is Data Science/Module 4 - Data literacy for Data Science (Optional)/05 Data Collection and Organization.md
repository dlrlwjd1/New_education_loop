# Data Collection and Organization

## 개요
- 강좌: What is Data Science?
- 모듈: Data literacy for Data Science (Optional)
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/what-is-datascience/lecture/uC8Rf/data-collection-and-organization)
- 데이터 리포지토리는 비즈니스 운영에 사용하거나 보고 및 데이터 분석을 위해 마이닝할 수 있도록 수집, 구성 및 격리된 데이터를 가리키는 일반적인 용어입니다.
- 데이터 세트를 수집, 관리 및 저장하는 데이터베이스가 하나 이상 있는 소규모 또는 대규모 데이터베이스 인프라일 수 있습니다.

## 내용
### 핵심 내용
- 데이터 리포지토리는 비즈니스 운영에 사용하거나 보고 및 데이터 분석을 위해 마이닝할 수 있도록 수집, 구성 및 격리된 데이터를 가리키는 일반적인 용어입니다.
- 데이터 세트를 수집, 관리 및 저장하는 데이터베이스가 하나 이상 있는 소규모 또는 대규모 데이터베이스 인프라일 수 있습니다.
- 예를 들어 쿼리 기능을 사용하여 6개월 이상 비활성 상태인 고객을 찾으려면 데이터베이스 관리 시스템이 데이터베이스에서 6개월 이상 비활성 상태인 모든 고객의 데이터를 검색합니다.
- 그런 다음 NoSQL 또는 “Not Only SQL”이라고도 하는 비관계형 데이터베이스도 있습니다.
- 속도, 유연성 및 확장성을 고려하여 구축된 비관계형 데이터베이스를 사용하면 스키마가 없거나 자유 형식으로 데이터를 저장할 수 있습니다.
- 매우 높은 수준에서 ETL 프로세스는 다양한 데이터 소스에서 데이터를 추출하고, 데이터를 깔끔하고 사용 가능한 상태로 변환하고, 데이터를 기업의 데이터 리포지토리로 로드하는 데 도움이 됩니다.

### 한국어 Transcript

데이터 리포지토리는 비즈니스 운영에 사용하거나 보고 및 데이터 분석을 위해 마이닝할 수 있도록 수집, 구성 및 격리된 데이터를 가리키는 일반적인 용어입니다. 데이터 세트를 수집, 관리 및 저장하는 데이터베이스가 하나 이상 있는 소규모 또는 대규모 데이터베이스 인프라일 수 있습니다. 이 동영상에서는 데이터베이스, 데이터 웨어하우스, 빅데이터 저장소 등 데이터가 저장될 수 있는 다양한 유형의 리포지토리에 대한 개요를 제공하고 이후 동영상에서 더 자세히 살펴보겠습니다. 데이터베이스는 데이터의 입력, 저장, 검색, 수정을 위해 설계된 데이터 또는 정보의 모음입니다. 그리고 데이터베이스 관리 시스템 (DBMS) 은 데이터베이스를 생성하고 유지 관리하는 일련의 프로그램입니다.

쿼리라는 함수를 사용하여 데이터베이스에서 정보를 저장, 수정 및 추출할 수 있습니다. 예를 들어 쿼리 기능을 사용하여 6개월 이상 비활성 상태인 고객을 찾으려면 데이터베이스 관리 시스템이 데이터베이스에서 6개월 이상 비활성 상태인 모든 고객의 데이터를 검색합니다. 데이터베이스와 DBMS의 의미는 다르지만 이 용어는 종종 같은 의미로 사용됩니다. 다양한 유형의 데이터베이스가 있습니다. 데이터 유형 및 구조, 쿼리 메커니즘, 지연 요구 사항, 트랜잭션 속도, 데이터 사용 목적 등 여러 요인이 데이터베이스 선택에 영향을 미칩니다.

여기서는 관계형 데이터베이스와 비관계형 데이터베이스라는 두 가지 주요 데이터베이스 유형을 언급하는 것이 중요합니다. RDBMS라고도 하는 관계형 데이터베이스는 플랫 파일의 구성 원칙을 기반으로 하며, 데이터는 잘 정의된 구조와 스키마에 따라 행과 열이 있는 표 형식으로 구성됩니다. 그러나 플랫 파일과 달리 RDBMS는 많은 테이블과 훨씬 큰 데이터 볼륨을 포함하는 데이터 작업 및 쿼리에 최적화되어 있습니다. 구조적 쿼리 언어 (SQL) 는 관계형 데이터베이스의 표준 쿼리 언어입니다. 그런 다음 NoSQL 또는 “Not Only SQL”이라고도 하는 비관계형 데이터베이스도 있습니다.

비관계형 데이터베이스는 오늘날 생성되는 데이터의 양, 다양성, 속도에 대응하여 등장했습니다. 비관계형 데이터베이스는 주로 클라우드 컴퓨팅, 사물 인터넷 ( IoT), 소셜 미디어의 확산에 영향을 받았습니다. 속도, 유연성 및 확장성을 고려하여 구축된 비관계형 데이터베이스를 사용하면 스키마가 없거나 자유 형식으로 데이터를 저장할 수 있습니다. NoSQL은 빅 데이터를 처리하는 데 널리 사용됩니다. 데이터 웨어하우스는 서로 다른 소스에서 들어오는 정보를 병합하고 ETL 프로세스라고도 하는 추출, 변환 및 로드 프로세스를 통해 분석 및 비즈니스 인텔리전스를 위한 하나의 포괄적인 데이터베이스로 통합하는 중앙 리포지토리 역할을 합니다.

매우 높은 수준에서 ETL 프로세스는 다양한 데이터 소스에서 데이터를 추출하고, 데이터를 깔끔하고 사용 가능한 상태로 변환하고, 데이터를 기업의 데이터 리포지토리로 로드하는 데 도움이 됩니다. 데이터 웨어하우스와 관련된 내용은 데이터 마트와 데이터 레이크의 개념이며, 이에 대해서는 나중에 설명하겠습니다. 기존 엔터프라이즈 데이터의 대부분이 RDBMS에 보관되어 왔기 때문에 데이터 마트와 데이터 웨어하우스는 역사적으로 관계형이었습니다. 그러나 NoSQL 기술이 등장하고 새로운 데이터 소스가 등장하면서 이제는 비관계형 데이터 리포지토리가 데이터 웨어하우징에도 사용되고 있습니다. 데이터 리포지토리의 또 다른 범주는 매우 큰 데이터 세트를 저장, 확장 및 처리하기 위한 분산형 컴퓨팅 및 스토리지 인프라를 포함하는 빅데이터 저장소입니다.

전반적으로 데이터 리포지토리는 데이터를 분리하고 보고 및 분석을 보다 효율적이고 신뢰할 수 있게 만드는 동시에 데이터 아카이브 역할도 하는 데 도움이 됩니다.

## 예시
- 쿼리라는 함수를 사용하여 데이터베이스에서 정보를 저장, 수정 및 추출할 수 있습니다.
- 예를 들어 쿼리 기능을 사용하여 6개월 이상 비활성 상태인 고객을 찾으려면 데이터베이스 관리 시스템이 데이터베이스에서 6개월 이상 비활성 상태인 모든 고객의 데이터를 검색합니다.
- 데이터 유형 및 구조, 쿼리 메커니즘, 지연 요구 사항, 트랜잭션 속도, 데이터 사용 목적 등 여러 요인이 데이터베이스 선택에 영향을 미칩니다.
- 그러나 플랫 파일과 달리 RDBMS는 많은 테이블과 훨씬 큰 데이터 볼륨을 포함하는 데이터 작업 및 쿼리에 최적화되어 있습니다.

## 요약
- 그런 다음 NoSQL 또는 “Not Only SQL”이라고도 하는 비관계형 데이터베이스도 있습니다.
- 속도, 유연성 및 확장성을 고려하여 구축된 비관계형 데이터베이스를 사용하면 스키마가 없거나 자유 형식으로 데이터를 저장할 수 있습니다.
- 매우 높은 수준에서 ETL 프로세스는 다양한 데이터 소스에서 데이터를 추출하고, 데이터를 깔끔하고 사용 가능한 상태로 변환하고, 데이터를 기업의 데이터 리포지토리로 로드하는 데 도움이 됩니다.

<details>
<summary>영문 Transcript 원문</summary>

A data repository is a general term used to refer to data that has been collected, organized, and isolated so that it can be used for business operations or mined for reporting and data analysis. It can be a small or large database infrastructure with one or more databases that collect, manage, and store data sets. In this video, we will provide an overview of the different types of repositories your data might reside in, such as databases, data warehouses, and big data stores, and examine them in greater detail in further videos. Let’s begin with databases. A database is a collection of data, or information, designed for the input, storage, search and retrieval, and modification of data.

And a Database Management System, or DBMS, is a set of programs that creates and maintains the database. It allows you to store, modify, and extract information from the database using a function called querying. For example, if you want to find customers who have been inactive for six months or more, using the query function, the database management system will retrieve data of all customers from the database that have been inactive for six months and more. Even though a database and DBMS mean different things the terms are often used interchangeably. There are different types of databases.

Several factors influence the choice of database, such as the data type and structure, querying mechanisms, latency requirements, transaction speeds, and intended use of the data. It’s important to mention two main types of databases here—relational and non-relational databases. Relational databases, also referred to as RDBMSes, build on the organizational principles of flat files, with data organized into a tabular format with rows and columns following a well-defined structure and schema. However, unlike flat files, RDBMSes are optimized for data operations and querying involving many tables and much larger data volumes. Structured Query Language, or SQL, is the standard querying language for relational databases.

Then we have non-relational databases, also known as NoSQL, or “Not Only SQL”. Non-relational databases emerged in response to the volume, diversity, and speed at which data is being generated today, mainly influenced by advances in cloud computing, the Internet of Things, and social media proliferation. Built for speed, flexibility, and scale, non-relational databases made it possible to store data in a schema-less or free-form fashion. NoSQL is widely used for processing big data. A data warehouse works as a central repository that merges information coming from disparate sources and consolidates it through the extract, transform, and load process, also known as the ETL process, into one comprehensive database for analytics and business intelligence.

At a very high-level, the ETL process helps you to extract data from different data sources, transform the data into a clean and usable state, and load the data into the enterprise’s data repository. Related to Data Warehouses are the concepts of Data Marts and Data Lakes, which we will cover later. Data Marts and Data Warehouses have historically been relational, since much of the traditional enterprise data has resided in RDBMSes. However, with the emergence of NoSQL technologies and new sources of data, non-relational data repositories are also now being used for Data Warehousing. Another category of data repositories are Big Data Stores, that include distributed computational and storage infrastructure to store, scale, and process very large data sets.

Overall, data repositories help to isolate data and make reporting and analytics more efficient and credible while also serving as a data archive.

</details>
