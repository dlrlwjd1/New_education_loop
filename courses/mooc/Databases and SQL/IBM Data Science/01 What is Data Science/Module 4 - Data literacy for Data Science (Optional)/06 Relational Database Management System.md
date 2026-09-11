# Relational Database Management System

## 개요
- 강좌: What is Data Science?
- 모듈: Data literacy for Data Science (Optional)
- 재생 시간: 8분
- [MOOC 원본 강의](https://www.mooc.org/learn/what-is-datascience/lecture/dx4EK/relational-database-management-system)
- 관계형 데이터베이스는 테이블 구조로 구성된 데이터 모음으로, 각 테이블의 공통 데이터를 기반으로 테이블을 연결하거나 관련시킬 수 있습니다.
- 테이블은 행과 열로 구성되며, 여기서 행은 “레코드”이고 열은 “속성”입니다.

## 내용
### 핵심 내용
- 관계형 데이터베이스는 테이블 구조로 구성된 데이터 모음으로, 각 테이블의 공통 데이터를 기반으로 테이블을 연결하거나 관련시킬 수 있습니다.
- 테이블은 행과 열로 구성되며, 여기서 행은 “레코드”이고 열은 “속성”입니다.
- 관계형 데이터베이스는 데이터 쿼리에 SQL을 사용하므로 수백만 개의 레코드를 처리하고 몇 초 만에 대량의 데이터를 검색할 수 있다는 이점이 있습니다.
- 인기 있는 클라우드 관계형 데이터베이스로는 아마존 관계형 데이터베이스 서비스 (RDS), 구글 클라우드 SQL, IBM DB2 온 클라우드, 오라클 클라우드, SQL Azure 등이 있습니다.
- 클라우드 기반 관계형 데이터베이스는 지속적인 미러링을 수행하므로 복원 시 데이터 손실을 몇 초 이내에 측정할 수 있습니다.
- 관계형 데이터베이스는 데이터 필드 길이에 제한이 있습니다.

### 한국어 Transcript

관계형 데이터베이스는 테이블 구조로 구성된 데이터 모음으로, 각 테이블의 공통 데이터를 기반으로 테이블을 연결하거나 관련시킬 수 있습니다. 테이블은 행과 열로 구성되며, 여기서 행은 “레코드”이고 열은 “속성”입니다. 회사의 각 고객에 대한 데이터를 관리하는 고객 테이블을 예로 들어 보겠습니다. 고객 테이블의 열 또는 속성은 회사 ID, 회사 이름, 회사 주소, 회사 기본 전화번호이고 각 행은 고객 기록입니다. 이제 각 테이블에 공통된 데이터를 기반으로 테이블이 연결되거나 관련된다는 것이 무엇을 의미하는지 이해해 보겠습니다.

회사는 고객 테이블과 함께 각 고객과 관련된 여러 개별 거래를 설명하는 데이터가 포함된 거래 테이블도 유지 관리합니다. 거래 테이블의 열에는 거래 날짜, 고객 ID, 거래 금액 및 결제 방법이 포함될 수 있습니다. 고객 테이블과 거래 테이블은 공통 고객 ID 필드를 기반으로 연관될 수 있습니다. 고객 테이블을 쿼리하여 특정 기간의 모든 거래를 통합하는 고객 명세서와 같은 보고서를 생성할 수 있습니다. 공통 데이터를 기반으로 테이블을 연결하는 이 기능을 사용하면 한 번의 쿼리로 하나 이상의 테이블에 있는 데이터에서 완전히 새로운 테이블을 검색할 수 있습니다.

또한 사용 가능한 모든 데이터 간의 관계를 이해하고 더 나은 결정을 내리는 데 필요한 새로운 통찰력을 얻을 수 있습니다. 관계형 데이터베이스는 데이터를 쿼리할 때 구조화된 쿼리 언어 (SQL) 를 사용합니다. 이 과정의 뒷부분에서 SQL에 대해 자세히 알아보겠습니다. 관계형 데이터베이스는 스프레드시트와 같은 플랫 파일의 구성 원칙을 기반으로 하며, 데이터는 잘 정의된 구조와 스키마에 따라 행과 열로 구성됩니다. 관계형 데이터베이스는 행 및 열 수가 제한된 스프레드시트와 달리 대용량 데이터의 최적화된 저장, 검색 및 처리에 적합하도록 설계되었습니다.

관계형 데이터베이스의 각 테이블에는 고유한 행과 열 집합이 있으며 테이블 간에 관계를 정의할 수 있으므로 데이터 중복이 최소화됩니다. 또한 데이터베이스 필드를 특정 데이터 유형과 값으로 제한하여 불규칙성을 최소화하고 일관성과 데이터 무결성을 높일 수 있습니다. 관계형 데이터베이스는 데이터 쿼리에 SQL을 사용하므로 수백만 개의 레코드를 처리하고 몇 초 만에 대량의 데이터를 검색할 수 있다는 이점이 있습니다. 또한 관계형 데이터베이스의 보안 아키텍처는 데이터에 대한 액세스를 제어하고 데이터 관리에 대한 표준 및 정책을 적용할 수 있도록 합니다. 관계형 데이터베이스는 소형 데스크톱 시스템에서 대규모 클라우드 기반 시스템에 이르기까지 다양합니다.

내부적으로 지원되는 오픈 소스, 상업적 지원을 제공하는 오픈 소스, 상용 지원을 제공하는 오픈 소스 또는 상용 비공개 소스 시스템 중 하나일 수 있습니다. 널리 사용되는 관계형 데이터베이스에는 IBM DB2, 마이크로소프트 SQL 서버, MySQL, 오라클 데이터베이스, PostgreSQL 등이 있습니다. Database-as-a-Service라고도 하는 클라우드 기반 관계형 데이터베이스는 클라우드가 제공하는 무한한 컴퓨팅 및 스토리지 기능에 액세스할 수 있게 되면서 널리 사용되고 있습니다. 인기 있는 클라우드 관계형 데이터베이스로는 아마존 관계형 데이터베이스 서비스 (RDS), 구글 클라우드 SQL, IBM DB2 온 클라우드, 오라클 클라우드, SQL Azure 등이 있습니다. RDBMS는 성숙하고 잘 문서화된 기술이므로 쉽게 배우고 자격을 갖춘 인재를 찾을 수 있습니다.

관계형 데이터베이스 접근 방식의 가장 큰 장점 중 하나는 테이블을 결합하여 의미 있는 정보를 생성할 수 있다는 것입니다. 다른 이점으로는 다음과 같은 것들이 있습니다. 유연성: SQL을 사용하면 데이터베이스가 실행되고 쿼리가 발생하는 동안 새 열을 추가하고, 새 테이블을 추가하고, 관계 이름을 바꾸고, 기타 변경 작업을 수행할 수 있습니다. 중복성 감소: 관계형 데이터베이스는 데이터 중복을 최소화합니다. 예를 들어 고객 정보는 고객 테이블의 단일 항목에 나타나고 고객과 관련된 거래 테이블에는 고객 테이블로 연결되는 링크가 저장됩니다.

간편한 백업 및 재해 복구: 관계형 데이터베이스는 간편한 내보내기 및 가져오기 옵션을 제공하므로 백업 및 복원이 간편합니다. 데이터베이스가 실행되는 동안 내보내기가 가능하므로 장애 발생 시 쉽게 복원할 수 있습니다. 클라우드 기반 관계형 데이터베이스는 지속적인 미러링을 수행하므로 복원 시 데이터 손실을 몇 초 이내에 측정할 수 있습니다. ACID 규정 준수: ACID는 원자성, 일관성, 격리성 및 내구성을 나타냅니다. 또한 ACID 규정 준수는 장애 발생 시에도 데이터베이스의 데이터가 정확하고 일관되게 유지되며 데이터베이스 트랜잭션이 안정적으로 처리된다는 것을 의미합니다.

이제 관계형 데이터베이스의 몇 가지 사용 사례를 살펴보겠습니다. 온라인 트랜잭션 처리: OLTP 애플리케이션은 높은 속도로 실행되는 트랜잭션 지향 작업에 중점을 둡니다. 관계형 데이터베이스는 많은 사용자를 수용할 수 있고, 소량의 데이터를 삽입, 업데이트 또는 삭제하는 기능을 지원하며, 빠른 응답 시간뿐만 아니라 잦은 쿼리와 업데이트를 지원하므로 OLTP 응용 프로그램에 매우 적합합니다. 데이터 웨어하우스: 데이터 웨어하우징 환경에서는 비즈니스 인텔리전스를 위해 기간별 데이터를 분석하는 OLAP (온라인 분석 처리) 에 관계형 데이터베이스를 최적화할 수 있습니다. IoT 솔루션: IoT (Internet of Things) 솔루션에는 에지 장치에서 데이터를 수집하고 처리할 수 있는 성능뿐만 아니라 속도도 필요하므로 가벼운 데이터베이스 솔루션이 필요합니다.

이로 인해 RDBMS의 한계가 드러납니다. RDBMS는 반정형 및 비정형 데이터와 잘 작동하지 않으므로 이러한 데이터에 대한 광범위한 분석에 적합하지 않습니다. 두 RDBMS 간에 마이그레이션하려면 소스 테이블과 대상 테이블 간에 스키마와 데이터 유형이 동일해야 합니다. 관계형 데이터베이스는 데이터 필드 길이에 제한이 있습니다. 즉, 필드에 수용할 수 있는 것보다 많은 정보를 입력하려고 하면 정보가 저장되지 않습니다.

빅 데이터, 클라우드 컴퓨팅, IoT 디바이스, 소셜 미디어 등의 시대에 데이터의 한계와 발전에도 불구하고 RDBMS는 정형 데이터 작업을 위한 주요 기술로 계속 자리잡고 있습니다.

## 예시
- 테이블은 행과 열로 구성되며, 여기서 행은 “레코드”이고 열은 “속성”입니다.
- 고객 테이블을 쿼리하여 특정 기간의 모든 거래를 통합하는 고객 명세서와 같은 보고서를 생성할 수 있습니다.
- 공통 데이터를 기반으로 테이블을 연결하는 이 기능을 사용하면 한 번의 쿼리로 하나 이상의 테이블에 있는 데이터에서 완전히 새로운 테이블을 검색할 수 있습니다.
- 관계형 데이터베이스는 데이터를 쿼리할 때 구조화된 쿼리 언어 (SQL) 를 사용합니다.

## 요약
- 인기 있는 클라우드 관계형 데이터베이스로는 아마존 관계형 데이터베이스 서비스 (RDS), 구글 클라우드 SQL, IBM DB2 온 클라우드, 오라클 클라우드, SQL Azure 등이 있습니다.
- 클라우드 기반 관계형 데이터베이스는 지속적인 미러링을 수행하므로 복원 시 데이터 손실을 몇 초 이내에 측정할 수 있습니다.
- 관계형 데이터베이스는 데이터 필드 길이에 제한이 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

A relational database is a collection of data organized into a table structure, where the tables can be linked, or related, based on data common to each. Tables are made of rows and columns, where rows are the “records”, and the columns the “attributes”. Let’s take the example of a customer table that maintains data about each customer in a company. The columns, or attributes, in the customer table are the Company ID, Company Name, Company Address, and Company Primary Phone; and Each row is a customer record. Now let’s understand what we mean by tables being linked, or related, based on data common to each.

Along with the customer table, the company also maintains transaction tables that contain data describing multiple individual transactions pertaining to each customer. The columns for the transaction table might include the Transaction Date, Customer ID, Transaction Amount, and Payment Method. The customer table and the transaction tables can be related based on the common Customer ID field. You can query the customer table to produce reports such as a customer statement that consolidates all transactions in a given period. This capability of relating tables based on common data enables you to retrieve an entirely new table from data in one or more tables with a single query.

It also allows you to understand the relationships among all available data and gain new insights for making better decisions. Relational databases use structured query language, or SQL, for querying data. We’ll learn more about SQL later in this course. Relational databases build on the organizational principles of flat files such as spreadsheets, with data organized into rows and columns following a well-defined structure and schema. But this is where the similarity ends.

Relational databases, by design, are ideal for the optimized storage, retrieval, and processing of data for large volumes of data, unlike spreadsheets that have a limited number of rows and columns. Each table in a relational database has a unique set of rows and columns and relationships can be defined between tables, which minimizes data redundancy. Moreover, you can restrict database fields to specific data types and values, which minimizes irregularities and leads to greater consistency and data integrity. Relational databases use SQL for querying data, which gives you the advantage of processing millions of records and retrieving large amounts of data in a matter of seconds. Moreover, the security architecture of relational databases provides controlled access to data and also ensures that the standards and policies for governing data can be enforced.

Relational databases range from small desktop systems to massive cloud-based systems. They can be either: open-source and internally supported, open-source with commercial support, or commercial closed-source systems. IBM DB2, Microsoft SQL Server, MySQL, Oracle Database, and PostgreSQL are some of the popular relational databases. Cloud-based relational databases, also referred to as Database-as-a-Service, are gaining wide use as they have access to the limitless compute and storage capabilities offered by the cloud. Some of the popular cloud relational databases include Amazon Relational Database Service (RDS), Google Cloud SQL, IBM DB2 on Cloud, Oracle Cloud, and SQL Azure.

RDBMS is a mature and well-documented technology, making it easy to learn and find qualified talent. One of the most significant advantages of the relational database approach is its ability to create meaningful information by joining tables. Some of its other advantages include: Flexibility: Using SQL, you can add new columns, add new tables, rename relations, and make other changes while the database is running and queries are happening. Reduced redundancy: Relational databases minimize data redundancy. For example, the information of a customer appears in a single entry in the customer table, and the transaction table pertaining to the customer stores a link to the customer table.

Ease of backup and disaster recovery: Relational databases offer easy export and import options, making backup and restore easy. Exports can happen while the database is running, making restore on failure easy. Cloud-based relational databases do continuous mirroring, which means the loss of data on restore can be measured in seconds or less. ACID-compliance: ACID stands for Atomicity, Consistency, Isolation, and Durability. And ACID compliance implies that the data in the database remains accurate and consistent despite failures, and database transactions are processed reliably.

Now we’ll look at some use cases for relational databases: Online Transaction Processing: OLTP applications are focused on transaction-oriented tasks that run at high rates. Relational databases are well suited for OLTP applications because they can accommodate a large number of users; they support the ability to insert, update, or delete small amounts of data; and they also support frequent queries and updates as well as fast response times. Data warehouses: In a data warehousing environment, relational databases can be optimized for online analytical processing (or OLAP), where historical data is analyzed for business intelligence. IoT solutions: Internet of Things (IoT) solutions require speed as well as the ability to collect and process data from edge devices, which need a lightweight database solution. This brings us to the limitations of RDBMS: RDBMS does not work well with semi-structured and unstructured data and is, therefore, not suitable for extensive analytics on such data.

For migration between two RDBMSs, schemas and type of data need to be identical between the source and destination tables. Relational databases have a limit on the length of data fields, which means if you try to enter more information into a field than it can accommodate, the information will not be stored. Despite the limitations and the evolution of data in these times of big data, cloud computing, IoT devices, and social media, RDBMS continues to be the predominant technology for working with structured data.

</details>
