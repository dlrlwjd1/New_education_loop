# Open Source Tools for Data Science  - Part 1

## 개요
- 강좌: Tools for Data Science
- 모듈: Overview of Data Science Tools
- 재생 시간: 8분
- [MOOC 원본 강의](https://www.mooc.org/learn/open-source-tools-for-data-science/lecture/oDcUE/open-source-tools-for-data-science-part-1)
- 이 동영상을 시청하고 나면 다음과 같은 내용을 확인할 수 있습니다.
- 구축, 배포, 모니터링, 평가를 위한 모델 도구와 코드 및 데이터 자산 관리를 위한 목록 도구를 나열하십시오.

## 내용
### 핵심 내용
- 이 동영상을 시청하고 나면 다음과 같은 내용을 확인할 수 있습니다.
- 구축, 배포, 모니터링, 평가를 위한 모델 도구와 코드 및 데이터 자산 관리를 위한 목록 도구를 나열하십시오.
- 또한 몽고DB, 아파치 카우치DB, 아파치 카산드라와 같은 NoSQL 데이터베이스도 있습니다.
- 이 비디오에서는 데이터 관리 도구로는 MySQL, PostgreSQL, MongoDB, 아파치 CouchDB, 아파치 카산드라, 하둡 파일 시스템, Ceph 및 Elastic Search가 있다는 것을 배웠습니다.
- 데이터 통합 및 변환 도구로는 아파치 에어플로우, 쿠베플로우, 아파치 카프카, 아파치 니피, 아파치 스파크SQL, NodeRedEd가 있습니다.
- 모델 모니터링 도구로는 모델DB, 프로메테우스, IBM AI 페어니스 360, IBM 적대적 로버스트니스 360 툴박스, IBM AI 설명성 360이 있습니다.

### 한국어 Transcript

“데이터 과학을 위한 오픈 소스 도구 1부”에 오신 것을 환영합니다. 이 동영상을 시청하고 나면 다음과 같은 내용을 확인할 수 있습니다. 오픈 소스 데이터 관리 도구를 나열해 보세요. 오픈소스 데이터 통합 및 변환 도구를 나열하세요. 구축, 배포, 모니터링, 평가를 위한 모델 도구와 코드 및 데이터 자산 관리를 위한 목록 도구를 나열하십시오.

따라서 가장 널리 사용되는 오픈 소스 데이터 관리 도구는 MySQL 및 PostgreSQL과 같은 관계형 데이터베이스입니다. 또한 몽고DB, 아파치 카우치DB, 아파치 카산드라와 같은 NoSQL 데이터베이스도 있습니다. 또한 하둡 파일 시스템과 같은 파일 기반 도구나 Ceph와 같은 클라우드 파일 시스템도 있습니다. 빠른 문서 검색을 위한 검색 색인 생성을 포함하여 텍스트 데이터를 저장하는 탄력적 검색 도구도 있습니다. 이제 기존 데이터 웨어하우징 세계에서 데이터 통합 및 변환의 과제는 ETL (추출, 변환, 로드) 입니다.

데이터가 어딘가에 덤프되고 데이터 엔지니어나 데이터 과학자가 데이터 변환을 담당할 때 데이터 사이언티스트는 종종 ELT (Extract, Load, Transform) 를 제안합니다. 이 프로세스를 가리키는 또 다른 용어가 등장했습니다. 가장 널리 사용되는 오픈 소스 데이터 통합 및 변환 도구는 다음과 같습니다. Airbnb에서 처음 만든 Apache AirFlow입니다. KubeFlow를 사용하면 쿠버네티스에서 데이터 사이언스 파이프라인을 실행할 수 있습니다.

아파치 Nifi는 아주 멋진 비주얼 에디터를 제공합니다. Apache SparkSQL을 사용하면 ANSI SQL을 사용하고 수천 개의 노드로 구성된 클러스터를 계산하도록 확장할 수 있으며 NodeReder는 시각적 편집기도 제공합니다. 게다가 NodeReder는 리소스 사용량이 매우 낮아 라즈베리 파이와 같은 소형 디바이스에서도 실행할 수 있습니다. 이제 가장 널리 사용되는 오픈 소스 데이터 시각화 도구에 대해 알아보겠습니다. 코드를 사용해야 하는 프로그래밍 라이브러리와 사용자 인터페이스가 포함된 도구를 구분해야 합니다.

Pixie Dust는 라이브러리이기도 하지만 Python으로 쉽게 플로팅할 수 있는 사용자 인터페이스를 갖추고 있습니다. 비슷한 접근 방식으로는 SQL 쿼리에서 시각화를 만들 수 있는 Hue를 사용합니다. 반면 데이터 탐색 및 시각화 웹 애플리케이션인 Kibana는 Elasticsearch (데이터 공급자) 로만 제한됩니다. 마지막으로 Apache Superset은 데이터 탐색 및 시각화 웹 애플리케이션입니다. 미래의 몇 가지 중요한 측면을 예측할 수 있는 기계 학습 모델을 만든 후에는 다른 개발자가 사용할 수 있게 만들어 API로 전환해야 합니다.

Apache PredictionIO는 현재 배포용 Apache Spark ML 모델만 지원하지만 모든 라이브러리에 대한 지원이 로드맵에 있습니다. 셀던은 텐서플로우, 아파치 스파크ML, R, scikit learn을 포함한 거의 모든 프레임워크를 지원한다는 점에서 흥미로운 제품이다. 흥미롭게도 쿠버네티스와 레드햇 오픈시프트를 기반으로 실행할 수 있습니다. SparkML 모델을 배포하는 또 다른 방법은 MLeap입니다. 마지막으로 TensorFlow는 TensorFlow 서비스를 사용하여 모든 텐서 플로우 모델을 지원할 수 있습니다.

Raspberry Pi 또는 TensorFlow Lite를 사용하는 스마트폰과 같은 임베디드 기기일 수 있으며 TensorFlow dot JS를 사용하여 웹 브라우저에 배포할 수 있습니다. 기계 학습 모델을 배포한 후에는 새 데이터가 도착할 때 예측 성능을 추적하여 오래된 모델을 유지해야 합니다. ModelDB는 모델에 대한 정보가 저장되고 쿼리되는 기계 모델 메타데이터 기반입니다. 기본적으로 아파치 스파크 ML 파이프라인과 scikit-learn을 지원합니다. 프로메테우스라는 범용 다목적 도구도 널리 사용되고 있습니다.

기계 학습 모델 모니터링용으로 특별히 개발된 것은 아니지만 이 용도로 사용됩니다. 모델 성능은 정확도 이상의 기준으로 측정됩니다. 성별이나 인종과 같은 보호 집단에 대한 모델 편향도 중요합니다. IBM AI Fairness 360 오픈 소스 툴킷은 머신 러닝 모델의 편향을 탐지하고 완화합니다. 이러한 모델, 특히 신경망 기반 딥 러닝 모델은 공격자가 조작된 데이터로 모델을 오도하거나 제어하여 모델을 오도하려고 하는 적대적 공격의 대상이 될 수 있습니다.

IBM Adversarial Robustness 360 Toolbox는 적대적 공격에 대한 취약성을 탐지하고 모델을 활용하여 더욱 강력합니다. 마지막으로, 머신 러닝 모드는 마법을 부리는 블랙박스로 간주되는 경우가 많습니다. IBM AI Explainability 360 툴킷은 데이터세트에서 유사한 예제를 찾아 최종 사용자가 직접 비교할 수 있도록 제시함으로써 이러한 문제를 해결합니다. 또한 IBM AI Explainability 360 툴킷은 모델의 최종 결정에 영향을 미치는 다양한 입력 변수의 책임을 설명하기 위해 간단한 기계 학습 모델의 트레이닝을 처리할 수 있습니다. 따라서 코드 자산 관리 도구를 선택하는 일이 매우 간단해졌습니다.

Git은 이제 버전 관리 또는 버전 제어라고도 하는 코드 자산 관리의 사실상의 표준이 되었습니다. Git을 중심으로 여러 서비스가 등장했습니다. 가장 눈에 띄는 곳은 GitHub이지만 2위를 차지한 곳은 GitLab으로, 플랫폼이 완전히 오픈 소스이며 자체적으로 호스팅하고 관리할 수 있다는 장점이 있습니다. 또 다른 선택은 Bitbucket입니다. 데이터 거버넌스 또는 데이터 계보라고도 하는 데이터 자산 관리는 엔터프라이즈급 데이터 과학의 중요한 부분입니다.

데이터에는 버전을 지정하고 메타데이터로 주석을 달아야 합니다. Apache Atlas는 이러한 작업을 지원하는 도구입니다. 또 다른 흥미로운 프로젝트는 Linux Foundation을 통해 관리되는 ODPi Egeria입니다. 이 프로젝트는 메타데이터 저장소가 데이터를 공유하고 교환하는 데 사용하는 일련의 개방형 API, 유형 및 교환 프로토콜을 제공하는 개방형 생태계입니다. 마지막으로 Kylo는 데이터 자산 관리 작업을 광범위하게 지원하는 오픈 소스 데이터 관리 소프트웨어 플랫폼입니다.

이 비디오에서는 데이터 관리 도구로는 MySQL, PostgreSQL, MongoDB, 아파치 CouchDB, 아파치 카산드라, 하둡 파일 시스템, Ceph 및 Elastic Search가 있다는 것을 배웠습니다. 데이터 통합 및 변환 도구로는 아파치 에어플로우, 쿠베플로우, 아파치 카프카, 아파치 니피, 아파치 스파크SQL, NodeRedEd가 있습니다. 데이터 시각화 도구로는 픽시 더스트, 휴, 키바나, 아파치 슈퍼셋이 있습니다. 모델 배포 도구로는 아파치 프리딕션IO, 셀던, 쿠버네티스, 레드햇 오픈시프트, Mleap, 텐서플로우 서비스, 텐서플로우 라이트, 텐서플로우 닷 JS가 있습니다. 모델 모니터링 도구로는 모델DB, 프로메테우스, IBM AI 페어니스 360, IBM 적대적 로버스트니스 360 툴박스, IBM AI 설명성 360이 있습니다.

코드 자산 관리 도구로는 Git, GitHub, GitLab, Bitbucket이 있습니다. 마지막으로 데이터 자산 관리 도구는 아파치 아틀라스, ODPi Egeria, Kylo입니다.

## 예시
- 구축, 배포, 모니터링, 평가를 위한 모델 도구와 코드 및 데이터 자산 관리를 위한 목록 도구를 나열하십시오.
- 코드를 사용해야 하는 프로그래밍 라이브러리와 사용자 인터페이스가 포함된 도구를 구분해야 합니다.
- 비슷한 접근 방식으로는 SQL 쿼리에서 시각화를 만들 수 있는 Hue를 사용합니다.
- ModelDB는 모델에 대한 정보가 저장되고 쿼리되는 기계 모델 메타데이터 기반입니다.

## 요약
- 이 비디오에서는 데이터 관리 도구로는 MySQL, PostgreSQL, MongoDB, 아파치 CouchDB, 아파치 카산드라, 하둡 파일 시스템, Ceph 및 Elastic Search가 있다는 것을 배웠습니다.
- 데이터 통합 및 변환 도구로는 아파치 에어플로우, 쿠베플로우, 아파치 카프카, 아파치 니피, 아파치 스파크SQL, NodeRedEd가 있습니다.
- 모델 모니터링 도구로는 모델DB, 프로메테우스, IBM AI 페어니스 360, IBM 적대적 로버스트니스 360 툴박스, IBM AI 설명성 360이 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to “Open-Source Tools for Data Science Part 1.” After watching this video, you will be able to: List the open-source data management tools. List the open-source data integration and transformation tools. List the data visualization tools. List the model tools for building, deployment, monitoring, and assessment, and List tools for code and data asset management. So, the most widely used open-source data management tools are relational databases like MySQL and PostgreSQL.

Also, there are NoSQL Databases like MongoDB, Apache CouchDB, and Apache Cassandra. In addition, there are file-based tools like the Hadoop File System or Cloud File systems like Ceph. You also have an elastic search tool that stores text data, including the creation of a search index for fast document retrieval. Now, the task of data integration and transformation in the classic data warehousing world is to Extract, Transform, and Load (ETL). Data scientists often propose Extract, Load, Transform (ELT) as data is dumped somewhere, and the data engineer or data scientist handles the transformation of the data.

Another term for this process emerged: Data Refinery and Cleansing. The most widely used open-source data integration and transformation tools are the following: Apache AirFlow, which was created by Airbnb originally. KubeFlow, which allows the execution of data science pipelines on top of Kubernetes. Apache Kafka, which originated from LinkedIn. Apache Nifi, which delivers a very nice visual editor.

Apache SparkSQL, lets you use ANSI SQL and scales up to compute clusters of thousands of nodes and NodeRED also brings a visual editor. In addition, NodeRED is so low in resource consumption that it even runs on tiny devices like a Raspberry Pi. Now let’s discuss the most widely used open-source data visualization tools. You must distinguish between programming libraries where you must use code or tools containing a user interface. Pixie Dust is also a library but has a user interface that facilitates plotting in Python.

A similar approach uses Hue, which can create visualizations from SQL queries. Whereas Kibana, a data exploration, and visualization web application is limited to Elasticsearch (data provider). And finally, Apache Superset is a data exploration and visualization web application. Model deployment is a crucial step. Once you’ve created a machine learning model capable of predicting some critical aspects of the future, you should make it consumable by other developers and turn it into an API.

Apache PredictionIO currently only supports Apache Spark ML models for deployment, but support for all libraries is on the roadmap. Seldon is an interesting product since it supports nearly every framework including, TensorFlow, Apache SparkML, R, and scikit learn. Interestingly, it can run on top of Kubernetes and Redhat OpenShift. Another way to deploy SparkML models is MLeap. Finally, TensorFlow can serve any tensor flow model using the TensorFlow service.

It can be an embedded device like a Raspberry Pi or smartphone using TensorFlow lite and deployed to a web browser using TensorFlow dot JS. Model monitoring is an important step as well. Once you’ve deployed a machine learning model, you want to track its prediction performance while new data arrives to maintain outdated models. Some examples are the following: ModelDB is a machine model metadata base where information about the models is stored and queried. It natively supports Apache Spark ML Pipelines and scikit-learn.

A generic, multi-purpose tool called Prometheus is widely used as well. Although it is not specifically made for machine learning model monitoring, it is used for this purpose. Model performance is measured by more than accuracy. Model bias against protected groups like gender or race is important as well. The IBM AI Fairness 360 open-source toolkit detects and mitigates bias in machine learning models.

These models, especially neural network-based deep learning models, can be subject to adversarial attacks where an attacker tries to mislead the model with manipulated data or by controlling it. The IBM Adversarial Robustness 360 Toolbox detects vulnerability against adversarial attacks and leverages the model to be more robust. Finally, machine learning modes are often considered as a black box applying some magic. The IBM AI Explainability 360 toolkit addresses that problem by finding similar examples in a dataset to be presented to an end-user for manual comparison. IBM AI Explainability 360 toolkit can also address the training of a simpler machine learning model to explain the responsibility of different input variables directed toward the final decision of the model.

So, the choice of code asset management tools has become quite simple. Git is now the de facto standard for code asset management, also known as version management or version control. Around Git emerged several services. The most prominent is GitHub, but the runner-up is GitLab, with the advantage that the platform is entirely open source and can be hosted and managed on your own. Another choice is Bitbucket.

Data asset management, also known as data governance or data lineage, is a crucial part of enterprise-grade data science. Data has to be versioned and annotated with metadata. Apache Atlas is such a tool supporting this task. Another interesting project is ODPi Egeria, managed through the Linux Foundation, is an open ecosystem offers a set of open APIs, types, and interchange protocols that metadata repositories use to share and exchange data. And finally, Kylo is an open-source data management software platform, with extensive support for data asset management tasks.

In this video, you learned that: Data management tools are MySQL, PostgreSQL, MongoDB, Apache CouchDB, Apache Cassandra, Hadoop File System, Ceph, and elastic search. Data integration and transformation tools are Apache AirFlow, KubeFlow, Apache Kafka, Apache Nifi, Apache SparkSQL, and NodeRED. Data Visualization tools are Pixie Dust, Hue, Kibana, and Apache Superset. Model deployment tools are Apache PredictionIO, Seldon, Kubernetes, Redhat OpenShift, Mleap, TensorFlow service, TensorFlow lite, and TensorFlow dot JS. Model monitoring tools are ModelDB, Prometheus, IBM AI Fairness 360, IBM Adversarial Robustness 360 Toolbox, and IBM AI Explainability 360.

Code asset management tools are Git, GitHub, GitLab, and Bitbucket. And finally, data asset management tools are Apache Atlas, ODPi Egeria, and Kylo.

</details>
