#  Categories of Data Science Tools

## 개요
- 강좌: Tools for Data Science
- 모듈: Overview of Data Science Tools
- 재생 시간: 8분
- [MOOC 원본 강의](https://www.mooc.org/learn/open-source-tools-for-data-science/lecture/e4DPm/categories-of-data-science-tools)
- 이 동영상을 시청하고 나면 데이터 과학자가 수행해야 하는 작업을 나열하고, 코드 자산 관리 및 데이터 자산 관리가 모델 구축에 어떻게 도움이 되는지, 실행 및 개발 환경에서 모델을 구현하는 방법을 설명할 수 있습니다.
- 원시 데이터를 유용하게 사용하려면 먼저 데이터 관리, 데이터 통합 및 변환, 데이터 시각화, 모델 구축, 모델 배포, 모델 모니터링 및 평가와 같은 다양한 데이터 과학 작업 범주를 거쳐야 합니다.

## 내용
### 핵심 내용
- 이 동영상을 시청하고 나면 데이터 과학자가 수행해야 하는 작업을 나열하고, 코드 자산 관리 및 데이터 자산 관리가 모델 구축에 어떻게 도움이 되는지, 실행 및 개발 환경에서 모델을 구현하는 방법을 설명할 수 있습니다.
- 원시 데이터를 유용하게 사용하려면 먼저 데이터 관리, 데이터 통합 및 변환, 데이터 시각화, 모델 구축, 모델 배포, 모델 모니터링 및 평가와 같은 다양한 데이터 과학 작업 범주를 거쳐야 합니다.
- 이러한 작업을 수행하려면 데이터 자산 관리, 코드 자산 관리, 실행 환경 및 개발 환경이 필요합니다.
- 데이터를 추출한 후 다음 단계는 데이터를 변환하는 것입니다.
- 마지막으로, IBM Watson Studio 및 IBM Cognos Dashboard Embedded와 같은 완전히 통합된 시각적 도구는 이전의 모든 도구 구성 요소를 포괄하며 딥 러닝 및 머신 러닝 모델을 개발하는 데 사용할 수 있습니다.
- 이 비디오에서는 데이터 과학 작업 범주가 데이터 관리, 데이터 통합 및 변환, 데이터 시각화, 모델 구축, 모델 배포, 모델 모니터링 및 평가라는 것을 배웠습니다.

### 한국어 Transcript

데이터 과학 도구 카테고리에 오신 것을 환영합니다. 이 동영상을 시청하고 나면 데이터 과학자가 수행해야 하는 작업을 나열하고, 코드 자산 관리 및 데이터 자산 관리가 모델 구축에 어떻게 도움이 되는지, 실행 및 개발 환경에서 모델을 구현하는 방법을 설명할 수 있습니다. 원시 데이터를 유용하게 사용하려면 먼저 데이터 관리, 데이터 통합 및 변환, 데이터 시각화, 모델 구축, 모델 배포, 모델 모니터링 및 평가와 같은 다양한 데이터 과학 작업 범주를 거쳐야 합니다. 이러한 작업을 수행하려면 데이터 자산 관리, 코드 자산 관리, 실행 환경 및 개발 환경이 필요합니다. 각 범주를 통해 원시 데이터를 최대한 활용할 수 있는 방법을 살펴보겠습니다.

데이터 관리는 데이터를 안전하고 효율적이며 비용 효율적으로 수집, 유지 및 검색하는 프로세스입니다. 데이터는 트위터, 플립카트, 미디어, 센서 등과 같은 다양한 출처에서 수집됩니다. 수집된 데이터를 영구 저장소에 저장하여 필요할 때마다 사용할 수 있습니다. 데이터 통합 및 변환은 데이터를 추출, 변환 및 로드하는 프로세스입니다. 이 데이터 중 일부는 여러 리포지토리에 배포됩니다.

데이터베이스, 데이터 큐브, 플랫 파일을 예로 들 수 있습니다. 추출 프로세스를 사용하여 이러한 수많은 리포지토리에서 데이터를 추출하고 데이터 웨어하우스와 같은 중앙 리포지토리에 저장합니다. 데이터 웨어하우스는 주로 데이터 분석을 위해 대량의 데이터를 수집하고 저장하는 데 사용됩니다. 다음으로, 데이터 변환은 데이터의 값, 구조 및 형식을 변환하는 프로세스입니다. 데이터를 추출한 후 다음 단계는 데이터를 변환하는 것입니다.

이 예제에서는 키와 몸무게 데이터를 미터법으로 변환해야 합니다. 데이터가 변환되었으면 이제 데이터를 로드할 차례입니다. 변환된 데이터는 데이터 웨어하우스로 다시 로드됩니다. 데이터 시각화는 데이터와 정보를 그래픽으로 표현한 것입니다. 시각화를 사용하여 차트, 도표, 지도, 애니메이션 등의 형태로 데이터를 표현할 수 있으며, 데이터 시각화는 의사 결정자에게 데이터를 더 효과적으로 전달할 수 있습니다.

이는 데이터 과학 프로세스의 중요한 단계입니다. 다양한 형태의 데이터 시각화에는 각 구성 요소의 크기를 비교하는 막대 차트, 계층 데이터를 표시하는 트리맵, 시간 경과에 따른 일련의 데이터 요소를 표시하는 선 차트, 위치별로 데이터를 표시하는 맵 차트가 포함됩니다. 맵 차트는 웹 사이트와 같은 다른 위치에도 적용할 수 있습니다. 여기서는 머신 러닝 알고리즘으로 데이터를 훈련하고 패턴을 분석합니다. 시스템은 스스로 예측이나 결정을 제공하는 방법을 '학습'합니다.

그런 다음 이 모델을 사용하여 보이지 않는 새로운 데이터를 예측할 수 있습니다. 모델 구축은 IBM Watson Machine Learning이라는 서비스를 사용하여 수행할 수 있습니다. 모델 구축을 위한 모든 범위의 도구와 서비스를 제공합니다. 즉, 개발된 모델을 프로덕션 환경에 통합하는 프로세스입니다. 모델 배포 시 머신 러닝 모델은 API를 통해 타사 애플리케이션에 제공됩니다.

비즈니스 사용자는 이러한 타사 애플리케이션을 통해 데이터에 액세스하고 상호 작용할 수 있습니다. 이는 데이터 기반 의사 결정을 내리는 데 도움이 됩니다. 예를 들어, SPSS 협업 및 배포 서비스를 사용하여 SPSS 소프트웨어 도구 제품군에서 만든 모든 유형의 자산을 배포할 수 있습니다. 모델 모니터링 및 평가는 모델의 정확성, 공정성 및 견고성을 보장하기 위해 지속적인 품질 검사를 실행합니다. 모델 모니터링은 Fiddler와 같은 도구를 사용하여 프로덕션 환경에 배포된 모델의 성능을 추적합니다.

이제 모델 평가에서는 F1 점수, 참양성률 또는 오차 제곱합과 같은 평가 지표를 사용하여 모델의 성능을 파악합니다. 잘 알려진 예로는 배포된 머신 러닝 및 딥 러닝 모델을 지속적으로 모니터링하는 IBM Watson Open scale이 있습니다. 이를 통해 예측의 정확성과 품질이 향상됩니다. 이제 데이터 과학 작업 범주를 검토했으니, 이를 지원하는 몇 가지 도구를 살펴보겠습니다. 코드 자산 관리는 자산 인벤토리를 관리하는 통합 보기를 제공합니다.

모델을 개발하려는 경우 모델을 업데이트하거나, 버그를 수정하거나, 코드 기능을 점진적으로 개선해야 할 수 있습니다. 이 모든 작업에는 버전 관리가 필요합니다. 개발자는 버전 관리를 사용하여 소프트웨어 프로젝트 코드의 변경 사항을 추적하고 관리합니다. 모델 작업을 할 때는 모든 사람이 동시에 코드 파일을 업로드, 편집 및 관리할 수 있는 중앙 저장소를 팀을 구성합니다. 협업을 통해 다양한 사람들이 같은 프로젝트를 공유하고 업데이트할 수 있습니다.

GitHub는 코드 자산 관리 플랫폼의 좋은 예입니다. 웹 기반이며 공유, 협업 및 액세스 제어 기능을 제공합니다. 데이터 과학자는 모든 이미지, 비디오 , 텍스트 및 기타 데이터를 중앙 위치에 적절하게 저장하고 구성하기를 원합니다. 또한 누가 데이터에 액세스하고, 편집하고, 관리할 수 있는지도 제어해야 합니다. DAM (디지털 자산 관리) 이라고도 하는 데이터 자산 관리는 다양한 출처에서 수집된 중요한 데이터를 구성하고 관리하는 것입니다.

DAM은 버전 관리 및 협업이 가능한 DAM 플랫폼에서 수행됩니다. DAM 플랫폼은 저장된 데이터에 대한 복제, 백업 및 액세스 권한 관리도 지원합니다. 통합 개발 환경 또는 “IDE”라고도 하는 개발 환경은 소스 코드를 개발, 구현, 실행, 테스트 및 배포하기 위한 작업 영역과 도구를 제공합니다. IBM Watson Studio와 같은 IDE는 실제 세계를 에뮬레이션하기 위한 테스트 및 시뮬레이션 도구를 제공하므로 코드가 배포된 후 어떻게 작동하는지 확인할 수 있습니다. 실행 환경에는 소스 코드를 컴파일하기 위한 라이브러리와 코드를 실행하고 검증하는 시스템 리소스가 있습니다.

클라우드 기반 실행 환경은 특정 하드웨어나 소프트웨어와 관련이 없으며 데이터 전처리, 모델 교육 및 배포를 위한 IBM Watson Studio와 같은 도구를 제공합니다. 마지막으로, IBM Watson Studio 및 IBM Cognos Dashboard Embedded와 같은 완전히 통합된 시각적 도구는 이전의 모든 도구 구성 요소를 포괄하며 딥 러닝 및 머신 러닝 모델을 개발하는 데 사용할 수 있습니다. 이 비디오에서는 데이터 과학 작업 범주가 데이터 관리, 데이터 통합 및 변환, 데이터 시각화, 모델 구축, 모델 배포, 모델 모니터링 및 평가라는 것을 배웠습니다. 데이터 과학 작업은 데이터 자산 관리, 코드 자산 관리, 실행 환경 및 개발 환경에서 지원됩니다.

## 예시
- 이 동영상을 시청하고 나면 데이터 과학자가 수행해야 하는 작업을 나열하고, 코드 자산 관리 및 데이터 자산 관리가 모델 구축에 어떻게 도움이 되는지, 실행 및 개발 환경에서 모델을 구현하는 방법을 설명할 수 있습니다.
- 이러한 작업을 수행하려면 데이터 자산 관리, 코드 자산 관리, 실행 환경 및 개발 환경이 필요합니다.
- 예를 들어, SPSS 협업 및 배포 서비스를 사용하여 SPSS 소프트웨어 도구 제품군에서 만든 모든 유형의 자산을 배포할 수 있습니다.
- 코드 자산 관리는 자산 인벤토리를 관리하는 통합 보기를 제공합니다.

## 요약
- 데이터를 추출한 후 다음 단계는 데이터를 변환하는 것입니다.
- 마지막으로, IBM Watson Studio 및 IBM Cognos Dashboard Embedded와 같은 완전히 통합된 시각적 도구는 이전의 모든 도구 구성 요소를 포괄하며 딥 러닝 및 머신 러닝 모델을 개발하는 데 사용할 수 있습니다.
- 이 비디오에서는 데이터 과학 작업 범주가 데이터 관리, 데이터 통합 및 변환, 데이터 시각화, 모델 구축, 모델 배포, 모델 모니터링 및 평가라는 것을 배웠습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Categories of Data Science Tools. After watching this video, you will be able to list the tasks that a data scientist needs to perform show how code asset management and data asset management help build models, and describe how execution and development environments implement a model. Before it can be useful, raw data must pass through various Data Science task categories, such as data management, data integration and transformation, data visualization, model building, model deployment, and model monitoring and assessment. To do these tasks, you need data asset management, code asset management, execution environments, and development environments. Let’s see how each category enables you to make the best use of raw data.

Data management is the process of collecting, persisting, and retrieving data securely, efficiently, and cost-effectively. Data is collected from many sources, like Twitter, Flipkart, Media, Sensors, and more. Store collected data in persistent storage so it is available whenever you need it. Data Integration and Transformation, is the process of Extracting, Transforming, and Loading data. This is called “ETL”.

Some of this data is distributed in multiple repositories. For example, a database, a data cube, and flat files. Use the Extraction process to extract data from these numerous repositories and save to a central repository like a Data Warehouse. Data Warehouses are primarily used to collect and store massive amounts of data for data analysis. Next, Data Transformation is the process of transforming the values, structure, and format of data.

After extracting the data, the next step is to transform the data. In this example, height and weight data needs to be transformed to metric. And once the data is transformed, it’s time to load the data. Transformed data is loaded back to the Data Warehouse. Data visualization is the graphical representation of data and information.

You can use visualization to represent data in the form of charts, plots, maps, animations, etc. And data visualization conveys data more effectively for decision-makers. It is a crucial step in the data science process. Various forms of data visualizations include a bar chart, which compares the size of each component, a treemap, which displays hierarchy data, a line chart, which plots a series of data points over time, and a map chart, which displays data by location. Map charts can also be applied to other locations like websites.

Now, model building is the next step. This is where you train the data and analyze patterns with machine learning algorithms. The system ‘learns’ how to provide predictions or decisions by itself. You can then use this model to make predictions on new, unseen data. Model building can be done using a service called IBM Watson Machine Learning.

It provides a full range of tools and services for building models. The next step is model deployment: the process of integrating a developed model into a production environment. In model deployment, a machine learning model is made available to third-party applications via APIs. Business users can access and interact with the data through these third-party applications. And this helps them make data-based decisions.

As an example, the SPSS Collaboration and Deployment Services can be used to deploy any type of asset created by the SPSS software tools suite. Model monitoring and assessment run continuous quality checks to ensure a model’s accuracy, fairness, and robustness. Model monitoring uses tools like Fiddler to track the performance of deployed models in a production environment. Now, model assessment uses evaluation metrics like the F1 score, true positive rate, or the sum of squared error to understand a model's performance. A well-known example is the IBM Watson Open scale, which continuously monitors deployed machine learning and deep learning models.

It will improve the accuracy and quality of your predictions. So, now that we’ve reviewed the data science task categories, let’s look at some of the tools that support them. Code asset management provides a unified view where you manage an inventory of assets. When you want to develop a model, you may need to update it, fix bugs, or improve code features incrementally. All of this requires version control.

Developers use versioning to track and manage changes to a software project’s code. When working on a model, teams a centralized repository where everyone can upload, edit, and manage the code files simultaneously. Collaboration allows diverse people to share and update the same project together. GitHub is a good example of a code asset management platform. It’s web-based and provides sharing, collaboration, and access control features.

As a data scientist, you want to properly store and organize all your images, videos, text, and other data in a central location. You also want control over who can access, edit, and manage your data. Data asset management, also called digital asset management (DAM), is the organizing and managing of important data collected from different sources. DAM is performed on a DAM platform that allows versioning and collaboration. DAM platforms also support replication, backup, and access right management for the stored data.

Development Environments, also called Integrated Development Environments, or “IDEs”, provide a workspace and tools to develop, implement, execute, test, and deploy source code. IDEs like IBM Watson Studio provide testing and simulation tools to emulate the real world so you can see how your code will behave after it is deployed. An execution environment has libraries to compile the source code and system resources that execute and verify the code. Cloud-based execution environments are not tied to any specific hardware or software, and offer tools like IBM Watson Studio for data preprocessing, model training, and deployment. Finally, fully integrated visual tools like IBM Watson Studio and IBM Cognos Dashboard Embedded cover all the previous tooling components, and can be used to develop deep learning and machine learning models.

In this video, you learned that the Data Science Task Categories are: Data Management, Data Integration and Transformation, Data Visualization, Model Building, Model Deployment, and Model Monitoring and Assessment. Data Science Tasks are supported by Data Asset Management, Code Asset Management, Execution Environments, and Development Environments.

</details>
