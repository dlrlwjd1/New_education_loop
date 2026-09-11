# Open Source Tools for Data Science  - Part 2

## 개요
- 강좌: Tools for Data Science
- 모듈: Overview of Data Science Tools
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/open-source-tools-for-data-science/lecture/hryKD/open-source-tools-for-data-science-part-2)
- 이 비디오를 시청하고 나면 다양한 오픈 소스 도구를 비교 및 대조하고 오픈 소스 도구의 관련 기능을 설명할 수 있습니다.
- 현재 데이터 과학자들이 가장 잘 사용하는 개발 환경은 대화형 Python 프로그래밍을 위한 도구로 등장한 “Jupyter”입니다.

## 내용
### 핵심 내용
- 이 비디오를 시청하고 나면 다양한 오픈 소스 도구를 비교 및 대조하고 오픈 소스 도구의 관련 기능을 설명할 수 있습니다.
- 현재 데이터 과학자들이 가장 잘 사용하는 개발 환경은 대화형 Python 프로그래밍을 위한 도구로 등장한 “Jupyter”입니다.
- 사용자 관점에서 볼 때 Jupyter Lab과 Jupyter Notebook의 주요 차이점은 Jupyter 노트북, 데이터, 터미널 등 다양한 유형의 파일을 연 다음 캔버스에 정렬할 수 있다는 것입니다.
- 널리 알려진 Apache Spark는 Fortune 500대 기업 다수를 포함하여 모든 산업에서 가장 활발하게 사용되고 있는 Apache 프로젝트 중 하나입니다.
- Apache Spark와 Apache Flink의 주요 차이점은 Apache Spark는 방대한 양의 데이터를 하나씩 또는 파일별로 처리할 수 있는 일괄 데이터 처리 엔진이라는 것입니다.
- Apache Spark와 Apache Flink에 이어 Ray는 데이터 과학 실행 환경 분야의 최신 개발 제품 중 하나이며 대규모 딥 러닝 모델 교육에 중점을 두고 있습니다.

### 한국어 Transcript

데이터 과학을 위한 오픈 소스 도구 2부에 오신 것을 환영합니다. 이 비디오를 시청하고 나면 다양한 오픈 소스 도구를 비교 및 대조하고 오픈 소스 도구의 관련 기능을 설명할 수 있습니다. 현재 데이터 과학자들이 가장 잘 사용하는 개발 환경은 대화형 Python 프로그래밍을 위한 도구로 등장한 “Jupyter”입니다. Jupyter는 현재 “커널”을 통해 100개 이상의 다양한 프로그래밍 언어를 지원합니다. 이는 다양한 프로그래밍 언어의 실행 환경을 캡슐화합니다.

Jupyter Notebooks의 주요 특성은 문서, 코드, 코드 출력, 셸 명령 및 시각화를 단일 문서로 통합하는 것입니다. 주피터 랩은 주피터 노트북의 다음 버전이며, 장기적으로는 주피터 노트북을 대체할 것입니다. 풍부한 아키텍처 변화로 Jupyter는 더욱 현대적이고 모듈화되었습니다. 사용자 관점에서 볼 때 Jupyter Lab과 Jupyter Notebook의 주요 차이점은 Jupyter 노트북, 데이터, 터미널 등 다양한 유형의 파일을 연 다음 캔버스에 정렬할 수 있다는 것입니다. Apache Zeppelin은 처음부터 다시 구현되었지만 Jupyter Notebooks에서 영감을 얻었으며 비슷한 경험을 제공합니다.

주요 차별화 요소 중 하나는 통합 플로팅 기능입니다. Jupyter Notebooks에서는 Zeppelin에서 외부 라이브러리를 사용해야 하며 플로팅에는 코딩이 필요하지 않습니다. 추가 라이브러리를 사용하여 기능을 확장할 수도 있습니다. RStudio는 통계 및 데이터 과학 분야에서 가장 오래된 개발 환경 중 하나입니다. RStudio는 2011년에 시작되었습니다.

R 및 모든 관련 R 라이브러리를 독점적으로 실행합니다. R 환경에서는 Python 개발이 가능합니다. R은 Jupyter 툴에 긴밀하게 통합되어 최적의 사용자 경험을 제공합니다. RStudio는 프로그래밍, 실행, 디버깅, 원격 데이터 액세스, 데이터 탐색 및 시각화를 하나의 도구로 통합합니다. 마지막으로 Spyder는 RStudio의 동작을 모방하여 Python 세계에 기능을 도입하려고 합니다.

RStudio의 기능과 대등하지는 않지만 데이터 과학자들은 이를 대안으로 간주합니다. 파이썬 세계에서는 Jupyter가 더 많이 사용됩니다. 이 다이어그램은 Spyder가 특히 코드, 문서, 시각화 등을 단일 캔버스에 통합한다는 것을 보여줍니다. 데이터가 컴퓨터 한 대의 저장소나 주 메모리 용량에 맞지 않는 경우가 있습니다. 따라서 클러스터 실행 환경이 존재합니다.

널리 알려진 Apache Spark는 Fortune 500대 기업 다수를 포함하여 모든 산업에서 가장 활발하게 사용되고 있는 Apache 프로젝트 중 하나입니다. Apache Spark의 주요 특성은 선형 확장성입니다. 즉, 클러스터의 서버 수를 두 배로 늘리면 성능은 약 두 배가 됩니다. Apache Flink는 Apache Spark가 지속적으로 시장 점유율을 확보한 후 개발되었습니다. Apache Spark와 Apache Flink의 주요 차이점은 Apache Spark는 방대한 양의 데이터를 하나씩 또는 파일별로 처리할 수 있는 일괄 데이터 처리 엔진이라는 것입니다.

반면 Apache Flink는 실시간 데이터 스트림을 처리하는 데 중점을 둔 스트림 처리 이미지입니다. 두 엔진 모두 데이터 처리 패러다임을 모두 지원하지만 대부분의 사용 사례에는 Apache Spark가 선택됩니다. Apache Spark와 Apache Flink에 이어 Ray는 데이터 과학 실행 환경 분야의 최신 개발 제품 중 하나이며 대규모 딥 러닝 모델 교육에 중점을 두고 있습니다. 완전히 통합되고 시각적인 데이터 과학자를 위한 오픈 소스 도구를 살펴보겠습니다. 즉, 프로그래밍 지식이 필요하지 않습니다.

이 도구는 데이터 통합 및 변환, 데이터 시각화, 모델 구축을 포함한 중요한 작업의 일부를 지원합니다. KNIME는 2004년 콘스탄츠 대학교에서 시작되었습니다. 보시다시피 KNIME에는 드래그 앤 드롭 기능이 있는 시각적 사용자 인터페이스가 있습니다. 또한 R 및 Python으로 프로그래밍하여 확장할 수 있으며 Apache Spark에 대한 커넥터도 있습니다. Orange는 이 도구 그룹을 대표하는 또 다른 예입니다.

KNIME보다 유연하지는 않지만 사용하기가 더 쉽습니다. 이 비디오에서는 데이터 과학에서 가장 일반적인 작업과 어떤 오픈 소스 도구가 적합한지 알아보았습니다.

## 예시
- Jupyter Notebooks의 주요 특성은 문서, 코드, 코드 출력, 셸 명령 및 시각화를 단일 문서로 통합하는 것입니다.
- 이 다이어그램은 Spyder가 특히 코드, 문서, 시각화 등을 단일 캔버스에 통합한다는 것을 보여줍니다.
- 두 엔진 모두 데이터 처리 패러다임을 모두 지원하지만 대부분의 사용 사례에는 Apache Spark가 선택됩니다.

## 요약
- 널리 알려진 Apache Spark는 Fortune 500대 기업 다수를 포함하여 모든 산업에서 가장 활발하게 사용되고 있는 Apache 프로젝트 중 하나입니다.
- Apache Spark와 Apache Flink의 주요 차이점은 Apache Spark는 방대한 양의 데이터를 하나씩 또는 파일별로 처리할 수 있는 일괄 데이터 처리 엔진이라는 것입니다.
- Apache Spark와 Apache Flink에 이어 Ray는 데이터 과학 실행 환경 분야의 최신 개발 제품 중 하나이며 대규모 딥 러닝 모델 교육에 중점을 두고 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Open Source Tools for Data Science, Part 2. After watching this video, you will be able to Compare and contrast different open-source tools and describe the relevant features of open-source tools. Currently, the most famous development environment data scientists are using is Jupyter, which emerged as a tool for interactive Python programming. Jupyter now supports more than 100 different programming languages through kernels. This encapsulates the execution environment for different programming languages.

A key property of Jupyter Notebooks is to unify documentation, code, output from code, shell commands, and visualizations in a single document. JupyterLab is the next version of Jupyter Notebooks and in the long term will replace Jupyter Notebooks. The abundance of architectural changes makes Jupyter more modern and modular. From a user's perspective, the main difference between JupyterLab and Jupyter Notebooks is the ability to open different types of files, including Jupyter Notebooks, data, and terminals, and then arrange them on the canvas. Although it has been re-implemented from scratch, Apache Zeppelin was inspired by Jupyter Notebooks and provides a similar experience.

Though one key differentiator is the integrated plotting capability. In Jupyter Notebooks, you are required to use external libraries in Zeppelin and plotting doesn't require coding. You can also extend the capabilities by using additional libraries. RStudio is among the oldest development environments for statistics and data science. RStudio has its origins in the year 2011.

It exclusively runs R and all its associated R libraries. In the R environment, Python development is possible. R is tightly integrated into the Jupyter tool and provides optimal user experience. RStudio unifies programming, execution, debugging, remote data access, data exploration, and visualization into one tool. Finally, Spyder tries to mimic the behavior of RStudio to bring its functionality to the Python world.

And although not on par with the functionality of RStudio, data scientists consider it as an alternative. In the Python world, Jupyter is used more. Now, this diagram shows that Spyder integrates code, documentation, and visualizations, among others, into a single canvas. Sometimes your data doesn't fit into a single computer, storage, or main memory capacity. Therefore, cluster execution environments exist.

The extensively famous Apache Spark is among the most active Apache projects that are used across all industries, including many Fortune 500 companies. The key property of Apache Spark is linear scalability. This means that if you double the number of servers in a cluster, you roughly double its performance. Apache Flink was developed after Apache Spark continued to gain market share. The key difference between Apache Spark and Apache Flink is that Apache Spark is a batch data processing engine capable of processing vast amounts of data one by one or file by file, whereas Apache Flink is a stream processing image with its main focus on processing real-time data streams.

And although both engines support both data processing paradigms at the same time, Apache Spark is the choice for most use cases. After Apache Spark and Apache Flink, Ray is one of the latest developments in the data science execution environments and has a clear focus on large-scale deep learning model training. Let's look at open-source tools for data scientists, which are fully integrated and visual. This means no programming knowledge is necessary. The tools support a subset of important tasks that include data integration and transformation, data visualization, and model building.

Now, Neem originated from the University of Konstanz in 2004. As you can see, Neem has a visual user interface with drag-and-drop capabilities. It has built-in visualization capabilities. In addition, it can be extended by programming in R and Python and even has connectors to Apache Spark. Orange is another representative of this group of tools.

It is less flexible than Neem, but is easier to use. In this video, you have learned about the most common tasks in data science and which open-source tools are relevant.

</details>
