# Viewpoints: Considerations for Choice of Data Repository

## 개요
- 강좌: What is Data Science?
- 모듈: Data literacy for Data Science (Optional)
- 재생 시간: 6분
- [MOOC 원본 강의](https://www.mooc.org/learn/what-is-datascience/lecture/McOUm/viewpoints-considerations-for-choice-of-data-repository)
- 이 비디오에서는 조직에 가장 적합한 데이터 리포지토리를 결정할 때 고려하는 몇 가지 요소에 대해 여러 데이터 전문가들의 이야기를 들어보겠습니다.
- 작업에 적합한 데이터베이스를 선택할 때는 여러 가지 요소를 염두에 두어야 합니다.

## 내용
### 핵심 내용
- 이 비디오에서는 조직에 가장 적합한 데이터 리포지토리를 결정할 때 고려하는 몇 가지 요소에 대해 여러 데이터 전문가들의 이야기를 들어보겠습니다.
- 작업에 적합한 데이터베이스를 선택할 때는 여러 가지 요소를 염두에 두어야 합니다.
- 우리가 선호하는 엔터프라이즈 관계형 데이터베이스가 있습니다.
- 그리고 우리가 선호하는 비정형 데이터 소스도 있습니다.
- 대부분의 경우 관계형 데이터베이스로도 충분하지만 IBM Db2, Oracle 또는 Postgres와 같은 관계형 데이터베이스가 반드시 필요한 것은 아닌 경우도 있습니다.
- 이러한 경우에는 사용 사례에 따라 ( 예: 하루에 기가바이트 또는 테라바이트의 데이터를 수집하는 경우) MongoDB와 같은 문서 저장소나 Cassandra와 같은 와이드 컬럼 저장소가 적합할 수 있습니다.

### 한국어 Transcript

이 비디오에서는 조직에 가장 적합한 데이터 리포지토리를 결정할 때 고려하는 몇 가지 요소에 대해 여러 데이터 전문가들의 이야기를 들어보겠습니다. 작업에 적합한 데이터베이스를 선택할 때는 여러 가지 요소를 염두에 두어야 합니다. 데이터 리포지토리는 어디에 사용될 예정인가요? 정형 정보, 반정형 또는 비정형 정보를 저장하는 데 사용될 예정입니까? 아니면 데이터의 스키마가 무엇인지 미리 알고 계신가요?

저장된 데이터 , 스트리밍 데이터 또는 이동 중인 데이터로 작업하고 있습니까? 그리고 스토리지 요구 사항은 무엇입니까? 데이터를 자주 업데이트하고 자주 액세스해야 하고, 보관소에 오랫동안 보관하고, 예를 들어 백업 용도로 사용하기만 하면 됩니까? 그러면 어떤 데이터베이스나 데이터 리포지토리를 다양한 종류의 작업에 사용할 수 있는지에 대한 특정 표준을 조직에 적용했을 수도 있습니다. 따라서 이러한 모든 요소를 염두에 두어야 합니다.

따라서 어떤 데이터 저장소를 선택할지 고려할 때는 이러한 요소를 살펴봅니다. 이 데이터 리포지토리가 처리해야 하는 용량의 종류를 살펴봅니다. 그런 다음 이 정보가 필요한 액세스 유형도 살펴봅니다. 짧은 간격으로 액세스하나요, 아니면 장기간 실행되는 쿼리를 실행하나요? 트랜잭션 처리에 더 많이 사용하고 있습니까, 아니면 분석이나 보관 목적 또는 데이터 웨어하우징 용도로 사용하고 있습니까?

이 새로운 데이터 리포지토리가 기존의 프로그래밍 언어, 도구 및 우리가 사용하는 모든 프로세스로 구성된 에코시스템과 얼마나 호환되는지 궁금합니다. 또한 이 리포지토리가 제공하는 보안 기능도 고려합니다. 그리고 가장 중요한 것은 확장성입니다. 현재의 성능은 만족하겠지만 확장성이 충분할까요? 조직에서 사용하는 데이터 리포지토리 유형을 선택할 일이 많지 않고, 요즘에는 데이터 리포지토리 하나를 사용하는 조직이 거의 없습니다.

요즘 제가 일하는 팀에서는 선호하는 솔루션이 몇 가지 있습니다. 우리가 선호하는 엔터프라이즈 관계형 데이터베이스가 있습니다. 일부 소규모 프로젝트와 마이크로서비스를 위한 선호하는 오픈 소스 관계형 데이터베이스가 있습니다. 그리고 우리가 선호하는 비정형 데이터 소스도 있습니다. 중요한 것은 조직 내에서 보유하고 있거나 조직 내에서 육성하고 싶은 기술에 대해 생각해 보는 것입니다.

그리고 다양한 솔루션의 비용도 고려해 보세요. 우리의 경우 Db2에 대한 전문가가 몇 명 있기 때문에 엔터프라이즈 데이터베이스는 Db2를 선택합니다. 하지만 다른 프로젝트를 사용하는 프로젝트도 있습니다. 오픈소스의 경우 몇 번 변경했습니다. 우리가 진정으로 나아가고자 하는 방향이 몇 가지 있습니다.

이제는 단순히 IBM Db2를 사용하거나 Microsoft SQL Server와 같은 다른 공급업체도 사용하고 싶은 것이 아니기 때문입니다. 이 두 가지 선택 사이의 문제가 아닙니다. 그럴 때가 되었는데 AWS RDS에서 하고 싶은가요? 아마존의 Aurora를 고려해 봐야 할 것 같아요. 구글의 관계형 서비스를 고려해 봐야겠네요.

거기에는 고려해야 할 여러 가지 옵션이 있습니다. 데이터를 어떻게 저장할지는 결정해야 합니다. 데이터를 검색하는 방법과 검색 위치의 결정도 있습니다. 이 모든 것은 데이터 스토리지를 결정할 때 매우 중요한 질문입니다. 데이터 구조, 응용 프로그램의 특성 , 데이터베이스로 수집되는 데이터 볼륨 등 이러한 모든 요소가 데이터 원본의 특성을 결정한다고 말하고 싶습니다.

대부분의 경우 관계형 데이터베이스로도 충분하지만 IBM Db2, Oracle 또는 Postgres와 같은 관계형 데이터베이스가 반드시 필요한 것은 아닌 경우도 있습니다. 이러한 경우에는 사용 사례에 따라 ( 예: 하루에 기가바이트 또는 테라바이트의 데이터를 수집하는 경우) MongoDB와 같은 문서 저장소나 Cassandra와 같은 와이드 컬럼 저장소가 적합할 수 있습니다. 동시에 제품 추천 엔진을 구축하거나 소셜 미디어에서 서로 다른 사람들 간의 관계 네트워크를 보여주려는 경우 Neo4J 또는 Apache TinkerPop과 같은 그래프 데이터 구조가 이상적입니다. 이와 동시에 분석을 위해 테라바이트 또는 페타바이트 규모의 데이터를 마이닝하는 경우에는 MapReduce가 탑재된 Hadoop 엔진이 적합합니다. 따라서 사용 사례에 관계없이 올바른 데이터베이스나 데이터 소스를 선택하려면 먼저 애플리케이션의 특성과 데이터 볼륨, 데이터 구조가 가장 중요합니다.

## 예시
- 데이터를 자주 업데이트하고 자주 액세스해야 하고, 보관소에 오랫동안 보관하고, 예를 들어 백업 용도로 사용하기만 하면 됩니까?
- 짧은 간격으로 액세스하나요, 아니면 장기간 실행되는 쿼리를 실행하나요?
- 이러한 경우에는 사용 사례에 따라 ( 예: 하루에 기가바이트 또는 테라바이트의 데이터를 수집하는 경우) MongoDB와 같은 문서 저장소나 Cassandra와 같은 와이드 컬럼 저장소가 적합할 수 있습니다.
- 따라서 사용 사례에 관계없이 올바른 데이터베이스나 데이터 소스를 선택하려면 먼저 애플리케이션의 특성과 데이터 볼륨, 데이터 구조가 가장 중요합니다.

## 요약
- 그리고 우리가 선호하는 비정형 데이터 소스도 있습니다.
- 대부분의 경우 관계형 데이터베이스로도 충분하지만 IBM Db2, Oracle 또는 Postgres와 같은 관계형 데이터베이스가 반드시 필요한 것은 아닌 경우도 있습니다.
- 이러한 경우에는 사용 사례에 따라 ( 예: 하루에 기가바이트 또는 테라바이트의 데이터를 수집하는 경우) MongoDB와 같은 문서 저장소나 Cassandra와 같은 와이드 컬럼 저장소가 적합할 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we will listen to several data professionals talk about some of the factors they consider while deciding on the most appropriate data repository for their organizations. There's a number of factors to keep in mind while picking the right database for the job. You need to look at the use case. What is the data repository going to be used for? Is it going to be used for storing structured information, semi- structured or unstructured information.

Or do you know beforehand what the schema of the data is? Is there performance requirements? Are you working with data at rest, or streaming data, or data in motion? Does the data need to be encrypted? is there, you know, what's the volume of data that you're working with?

Do you need a big data system? And what are the storage requirements? Does the data need to be updated frequently and accessed frequently, that it just needs to be stored and kept in a valt for a long time and is needed for backup purposes for example? And then your organization might have certain standards that might have put in place of which databases or which data repositories you're allowed to use for different kinds of tasks. So all of these factors need to be kept in mind.

So when we consider what data repository we want to choose, we look at these factors. We look at what are the kind of capacities that this data repository is supposed to handle. And then we also look at the type of access that we need this for. Do we access it in short intervals or do we run long running queries on it? Am I using it more for transaction processing or am I using it for analytics or archival purposes, or for data warehousing purpose?

We also look for compatibility. How compatible this new data repository is with my existing ecosystem of programming languages, tools, and any processes that we have. We also consider the security features this repository gives us. And the most important thing is scalability. We may be happy with its performance today, but is it scalable enough?

Can it scale along with the organization? I don't often get to choose the type of data repository that my organization uses, and very few organizations use one data repository these days. On my team that I work on these days, we have a set of preferred solutions. We have a preferred enterprise relational database. We have a preferred open-source relational database for some of the smaller projects and for the microservices.

And then we also have a preferred unstructured data source. So those are three main ones. The important thing is to think about the skills that you have within your organization or that you want to foster within your organization. And consider the costs of the various solutions. In our case, we have some experts on Db2, so our enterprise database of choice is Db2.

However, there are other projects that use different ones. For open source, we've changed that a couple of times. We've got a couple of different directions with where we really want to be there. the hosting platform makes a difference as well, because now it's not just do I want to use IBM Db2 or do I want to use some other vendors, Microsoft SQL Server or whatever. It's not between those two choices.

It's when I do those, do I want to do them on AWS RDS? Maybe I should consider Amazon's Aurora. Maybe I should consider Googles relational offerings. There's so many different choices there that you have to consider. There's the decision of how should the data be stored.

There's the decision of how should the data be retrieved, and there's also the decision of where. Those are all very important questions when you're deciding on data storage. I would say the structure of the data, the nature of the application, and the volume at which the data is getting ingested into your database, all these factors determine the nature of the data source that you should pick. In most cases a relational database should be enough, however, there will be edge cases where relational databases such as IBM Db2, Oracle or Postgres won't necessarily do the job for you. In those cases, so depending on the use case, for example, if you are ingesting gigabytes or terabytes of data per day.

then document stores such as MongoDB, or wide column stores such as Cassandra might be a good fit for you. At the same time, if you're trying to build a product recommendation engines or trying to show the network of relationships between different people on the social media, then graph data structures such as Neo4J or Apache TinkerPop would be an ideal fit for you. At the same time, if you are mining through terabytes or petabytes of data for analytics, Hadoop engine with MapReduce would be a good fit for you. So it really boils down to the nature of the application and the volume of the data, and the structure of the data, before you can pick the right database or data source whatever the use case.

</details>
