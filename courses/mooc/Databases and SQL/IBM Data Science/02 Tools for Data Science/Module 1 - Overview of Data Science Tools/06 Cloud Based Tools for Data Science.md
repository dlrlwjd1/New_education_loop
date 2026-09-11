# Cloud Based Tools for Data Science

## 개요
- 강좌: Tools for Data Science
- 모듈: Overview of Data Science Tools
- 재생 시간: 8분
- [MOOC 원본 강의](https://www.mooc.org/learn/open-source-tools-for-data-science/lecture/MYYx2/cloud-based-tools-for-data-science)
- 이 비디오를 시청하고 나면 다음을 수행할 수 있습니다.
- 상용 클라우드 도구가 데이터 과학 작업을 지원하는 방법을 설명하고 통합을 통해 여러 작업에 동일한 도구를 사용할 수 있는 기능을 제공하는 방법을 설명하십시오.

## 내용
### 핵심 내용
- 이 비디오를 시청하고 나면 다음을 수행할 수 있습니다.
- 상용 클라우드 도구가 데이터 과학 작업을 지원하는 방법을 설명하고 통합을 통해 여러 작업에 동일한 도구를 사용할 수 있는 기능을 제공하는 방법을 설명하십시오.
- 따라서 클라우드 데이터 시각화 도구 시장은 거대하며 모든 주요 클라우드 공급업체가 하나씩 보유하고 있습니다.
- 클라우드 기반 데이터 시각화 도구를 제공하는 소규모 회사의 예로는 Datameer가 있습니다.
- 모든 클라우드 제공업체는 이 작업을 위한 솔루션을 갖추고 있습니다.
- 모델 구축은 Watson Machine Learning과 같은 서비스를 사용하여 수행할 수 있습니다.

### 한국어 Transcript

“데이터 과학을 위한 클라우드 기반 도구”에 오신 것을 환영합니다. 이 비디오를 시청하고 나면 다음을 수행할 수 있습니다. 상용 클라우드 도구가 데이터 과학 작업을 지원하는 방법을 설명하고 통합을 통해 여러 작업에 동일한 도구를 사용할 수 있는 기능을 제공하는 방법을 설명하십시오. 다양한 도구 범주의 개요를 다시 살펴보겠습니다. 클라우드 제품은 새로운 유형이므로 여러 작업을 도구에 통합하는 추세를 따릅니다.

이 통합은 다이어그램에서 녹색으로 표시된 작업에 적용할 수 있습니다. 완전히 통합된 시각적 도구 카테고리부터 시작해 보겠습니다. 이러한 도구는 컴퓨팅 클러스터에서 데이터 과학 워크플로의 대규모 실행이 이루어지는 구성 요소를 도입하기 때문에 제목을 변경하고 “플랫폼”이라는 단어를 추가했습니다. 이러한 클러스터는 백그라운드에서 사용자에게 투명하게 표시되는 여러 서버 시스템으로 구성되어 있습니다. Watson Studio와 Watson OpenScale은 모든 데이터 과학, 기계 학습 및 인공 지능 (AI) 작업의 전체 개발 수명 주기를 다룹니다.

또 다른 예로는 마이크로소프트 애저 머신 러닝이 있습니다. 또한 모든 데이터 과학, 기계 학습 및 AI 작업의 전체 개발 수명 주기를 지원하는 완전한 클라우드 호스팅 제품이기도 합니다. 마지막으로 H2O 드라이버리스 AI를 예로 들 수 있습니다. 다운로드해서 설치할 수 있는 제품이긴 하지만 표준 클라우드 서비스 공급자를 위한 원클릭 배포가 가능합니다. Watson Studio, Open Scale 및 Azure Machine Learning과 같이 클라우드 공급자가 운영 및 유지 관리를 수행하지 않으므로 이 제공 모델은 서비스형 플랫폼 또는 소프트웨어 (PaaS 또는 SaaS) 와 구별되어야 합니다.

데이터 관리에는 몇 가지 예외가 있지만 기존 오픈 소스 및 상용 도구의 SaaS (서비스형 소프트웨어) 버전이 존재합니다. 클라우드 공급자가 클라우드에서 도구를 대신 운영합니다. 예를 들어, 클라우드 공급자는 데이터를 백업하고 업데이트를 구성 및 설치하여 제품을 운영합니다. 일부 독점 도구는 단일 클라우드 공급자에서만 사용할 수 있습니다. 이러한 서비스의 한 예로 NoSQL 데이터베이스인 Amazon Web Services DynamoDB를 들 수 있습니다.

이를 통해 키-값 또는 문서 저장소 형식으로 데이터를 저장하고 검색할 수 있습니다. 가장 눈에 띄는 문서 데이터 구조는 JSON입니다. 이러한 서비스의 또 다른 특징은 서비스형 데이터베이스인 Cloudant입니다. 하지만 백그라운드에서는 오픈 소스 Apache CouchDB를 기반으로 합니다. 장점은 업데이트, 백업, 복원 및 확장과 같은 복잡한 운영 작업을 클라우드 공급자가 수행한다는 것입니다.

하지만 Cloudant 서비스 오퍼링은 CouchDB와 호환됩니다. 따라서 애플리케이션은 애플리케이션을 변경하지 않고 다른 CouchDB 서버로 마이그레이션됩니다. IBM은 Db2도 서비스로 제공합니다. 이는 상용 데이터베이스를 클라우드에서 SaaS 오퍼링으로 제공하여 사용자의 운영 작업을 없앤 사례입니다. 이제 ETL (추출, 변환, 로드) 도구와 ELT (추출, 로드, 변환) 도구를 포함하는 상용 데이터 통합 도구에 대해 알아보겠습니다.

즉, 변환 단계는 데이터 통합 팀이 수행하는 것이 아니라 데이터 과학자나 데이터 엔지니어의 영역으로 밀어붙입니다. 널리 사용되는 두 가지 상용 데이터 통합 도구는 Informatica 클라우드 데이터 통합과 IBM의 데이터 정제소입니다. 데이터 리파이너리는 IBM Watson Studio의 일부입니다. 이를 통해 스프레드시트와 같은 사용자 인터페이스에서 대량의 원시 데이터를 소비 가능한 고품질 정보로 변환할 수 있습니다. 따라서 클라우드 데이터 시각화 도구 시장은 거대하며 모든 주요 클라우드 공급업체가 하나씩 보유하고 있습니다.

클라우드 기반 데이터 시각화 도구를 제공하는 소규모 회사의 예로는 Datameer가 있습니다. IBM은 유명한 Cognos 비즈니스 인텔리전스 제품군을 클라우드 솔루션으로 제공합니다. 또한 IBM 데이터 리파이너리는 왓슨 스튜디오에서 데이터 탐색 및 시각화 기능을 제공합니다. 다시 말씀드리지만, 이는 많은 기존 공급업체 및 신흥 공급업체 사이에서 빠르게 변화하고 성장하는 상업 생태계의 예입니다. Watson Studio에서는 이해를 돕기 위해 다양한 시각화를 통해 데이터를 보여줍니다.

수평 차원의 다른 두 값에 종속되는 수직 차원의 목표 값을 시각화하는 이 3D 막대 차트가 그 예입니다. 색상을 사용하여 3차원을 시각화할 수 있습니다. 또 다른 데이터 시각화는 엔티티 간의 상관 관계 및 제휴를 나타내는 계층적 에지 번들링입니다. 충분하다면 클래식 막대형 차트도 사용할 수 있습니다. 히트맵이 있는 2D 스캐터 차트는 y축에 색상 농도가 다른 종속 데이터 필드 두 개를 보여줍니다.

트리 맵은 집합 내 하위 집합의 분포를 보여줍니다. 유명한 파이 차트도 이와 동일하지만 비계층적 방식으로 작동합니다. 마지막으로, 워드 클라우드는 문서 코퍼스에서 중요한 용어를 튀어냅니다. 서비스를 사용하여 모델 구축을 수행할 수 있습니다. 서비스의 한 예로는 왓슨 머신 러닝이 있습니다.

Watson Machine Learning은 다양한 오픈 소스 라이브러리를 사용하여 모델을 학습하고 구축할 수 있습니다. Google의 클라우드에도 AI 플랫폼 교육이라는 유사한 서비스가 있습니다. 모든 클라우드 제공업체는 이 작업을 위한 솔루션을 갖추고 있습니다. 상용 소프트웨어의 모델 배포는 일반적으로 모델 구축 프로세스에 긴밀하게 통합됩니다. 다음은 SPSS 소프트웨어 도구 제품군에서 만든 모든 자산을 배포하는 데 사용할 수 있는 SPSS 협업 및 배포 서비스의 예입니다.

또한 상용 소프트웨어는 모델을 개방형 형식으로 내보낼 수 있습니다. 예를 들어 SPSS Modeler는 모델을 다른 상용 및 공개 소프트웨어 패키지에서 읽을 수 있는 예측 모델 마크업 언어 (PML) 로 내보내는 것을 지원합니다. 또한 Watson Machine Learning은 모델을 배포하고 소비자가 REST 인터페이스를 사용하여 모델을 사용할 수 있도록 합니다. Amazon SageMaker 모델 모니터는 배포된 기계 학습 및 딥 러닝 모델을 지속적으로 모니터링하는 클라우드 도구의 한 예입니다. 모든 주요 클라우드 공급자는 비슷한 도구를 제공합니다.

모델 모니터링을 위한 또 다른 도구는 Watson OpenScale입니다. 녹색으로 표시된 모든 작업은 왓슨 스튜디오와 오픈스케일을 사용하여 수행할 수 있습니다. Watson Studio와 Watson OpenScale에서는 모든 데이터 과학, 기계 학습 및 AI 작업의 전체 개발 수명 주기를 다룹니다. 데이터 관리에는 몇 가지 예외를 제외하고 기존 오픈 소스 및 상용 도구의 SaaS (서비스형 소프트웨어) 버전이 있습니다. 널리 사용되는 두 가지 상용 데이터 통합 도구는 Informatica 클라우드 데이터 통합과 IBM의 데이터 정제소입니다.

클라우드 기반 데이터 시각화 도구의 예로는 Datameer와 IBM의 Cognos 비즈니스 인텔리전스 제품군이 있습니다. 모델 구축은 Watson Machine Learning과 같은 서비스를 사용하여 수행할 수 있습니다. Amazon SageMaker 모델 모니터는 배포된 기계 학습 및 딥 러닝 모델을 지속적으로 모니터링하는 클라우드 도구의 한 예입니다.

## 예시
- 예를 들어, 클라우드 공급자는 데이터를 백업하고 업데이트를 구성 및 설치하여 제품을 운영합니다.
- 이는 상용 데이터베이스를 클라우드에서 SaaS 오퍼링으로 제공하여 사용자의 운영 작업을 없앤 사례입니다.
- 예를 들어 SPSS Modeler는 모델을 다른 상용 및 공개 소프트웨어 패키지에서 읽을 수 있는 예측 모델 마크업 언어 (PML) 로 내보내는 것을 지원합니다.

## 요약
- 클라우드 기반 데이터 시각화 도구를 제공하는 소규모 회사의 예로는 Datameer가 있습니다.
- 모든 클라우드 제공업체는 이 작업을 위한 솔루션을 갖추고 있습니다.
- 모델 구축은 Watson Machine Learning과 같은 서비스를 사용하여 수행할 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to “Cloud Based Tools for Data Science.” After watching this video, you will be able to: Describe how commercial cloud tools support data science tasks, and Explain how integration provides the ability to use the same tools for multiple tasks. Let’s again look at the overview of different tool categories. Since cloud products are a newer species, they follow the trend of having multiple tasks integrated in tools. This integration is applicable for the tasks marked green in the diagram. Let’s start with the fully integrated visual tools category.

Since these tools introduce a component where large-scale execution of data science workflows happens in compute clusters, we have changed the title and added the word “Platform.” These clusters are composed of multiple server machines, transparently for the user, in the background. Watson Studio and Watson OpenScale cover the complete development life cycle for all data science, machine learning, and artificial intelligence (AI) tasks. Another example is Microsoft Azure Machine Learning. It is also a full cloud-hosted offering supporting the complete development life cycle of all data science, machine learning, and AI tasks. And finally, another example is H2O Driverless AI.

Although it is a product you download and install, there exists a one-click deployment for the standard cloud service providers. Since the cloud provider does not do operations and maintenance, as with Watson Studio, Open Scale, and Azure Machine Learning, this delivery model should be distinct from Platform or Software as a service - PaaS or SaaS. In data management, with some exceptions, software-as-a-service (SaaS) versions of existing open source and commercial tools exist. The cloud provider operates the tool for you in the cloud. For example, the cloud provider operates the product by backing up your data and configuring and installing updates.

Some proprietary tools are only available from a single cloud provider. One example of such a service is Amazon Web Services DynamoDB, which is a NoSQL database. It allows storage and retrieving data in a key-value or a document store format. The most prominent document data structure is JSON. Another flavor of such a service is Cloudant, which is a database as a service offering.

But, in the background, it is based on the open-source Apache CouchDB. The advantage is that complex operational tasks like updating, backup, restoring, and scaling are done by the cloud provider. However, the Cloudant service offering is compatible with CouchDB. Therefore, the application migrates to another CouchDB server without making any changes to the application. IBM offers Db2 as a service as well.

It is an example of a commercial database made available as a SaaS offering in the cloud, taking away operational tasks from the user. Now let’s discuss commercial data integration tools that include extract, transform, and load (ETL) tools and extract, load, and transform (ELT) tools. It means the transformation steps are not done by a data integration team but are pushed toward the domain of the data scientist or data engineer. Two commercial data integration tools widely used are Informatica Cloud Data Integration and IBM’s Data Refinery. Data Refinery is part of IBM Watson Studio.

It allows transforming large amounts of raw data into consumable, quality information in a spreadsheet-like user interface. So, the market for cloud data visualization tools is huge, and every major cloud vendor has one. An example of a smaller company offering a cloud-based data visualization tool is Datameer. IBM offers its famous Cognos Business intelligence suite as a cloud solution. IBM Data Refinery also offers data exploration and visualization functionality in Watson Studio.

Again, those are examples of a rapidly changing and growing commercial ecosystem among many established, and emerging vendors. In Watson Studio, various visualizations depict data for better understanding. An example is this 3D bar chart that visualizes a target value on the vertical dimension that is dependent on two other values in the horizontal dimensions. You can use colors to visualize the third dimension. Another data visualization is hierarchical edge bundling that depicts correlations and affiliations between entities.

If sufficient, a classic bar chart can do the job as well. A 2D scatter plot with a heat map shows two dependent data fields on the y-axis with different color intensities. A tree map shows the distribution of subsets within a set. The famous pie chart does the same but in a non-hierarchical manner. Finally, a word cloud pops out significant terms in a document corpus.

Model building can be done using a service. One example of a service is Watson Machine Learning. Watson Machine Learning can train and build models using various open-source libraries. Google has a similar service on their cloud called AI Platform Training. Every cloud provider has a solution for this task.

Model deployment in commercial software is usually tightly integrated into the model-building process. Here is an example of the SPSS Collaboration and Deployment Services which can be used to deploy any asset created by the SPSS software tools suite. The same holds for other vendors. In addition, commercial software can export models in an open format. For example, SPSS Modeler supports exporting models as Predictive Model Markup Language (PMML), which other commercial and open software packages can read.

In addition, Watson Machine Learning deploys a model and makes it available to consumers using a REST interface. Amazon SageMaker Model Monitor is an example of a cloud tool to monitor deployed machine learning and deep learning models continuously. Every major cloud provider has similar tooling. Another tool for model monitoring is Watson OpenScale. Everything marked in green can be done using Watson Studio and OpenScale.

In this video, you’ve learned: Watson Studio and Watson OpenScale, cover the complete development life cycle for all data science, machine learning, and AI tasks. In data management, with some exceptions, there exists a software-as-a-service (SaaS) version of existing open-source and commercial tools. Two commercial data integration tools widely used are Informatica Cloud Data Integration and IBM’s Data Refinery. An example of a cloud-based data visualization tool is Datameer and IBM’s Cognos Business intelligence suite. Model building can be done using a service such as Watson Machine Learning.

Amazon SageMaker Model Monitor is an example of a cloud tool to monitor deployed machine-learning and deep learning models continuously.

</details>
