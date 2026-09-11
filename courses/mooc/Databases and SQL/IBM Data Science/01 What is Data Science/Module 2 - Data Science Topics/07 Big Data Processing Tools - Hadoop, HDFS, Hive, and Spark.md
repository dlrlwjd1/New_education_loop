# Big Data Processing Tools: Hadoop, HDFS, Hive, and Spark

## 개요
- 강좌: What is Data Science?
- 모듈: Data Science Topics
- 재생 시간: 7분
- [MOOC 원본 강의](https://www.mooc.org/learn/what-is-datascience/lecture/VULo5/big-data-processing-tools-hadoop-hdfs-hive-and-spark)
- 빅데이터 처리 기술은 대규모 정형, 반정형 및 비정형 데이터 세트를 처리하여 빅데이터에서 가치를 도출할 수 있는 방법을 제공합니다.
- 다른 일부 동영상에서는 NoSQL 데이터베이스 및 Data Lake와 같은 빅데이터 기술에 대해 논의했습니다.

## 내용
### 핵심 내용
- 빅데이터 처리 기술은 대규모 정형, 반정형 및 비정형 데이터 세트를 처리하여 빅데이터에서 가치를 도출할 수 있는 방법을 제공합니다.
- 다른 일부 동영상에서는 NoSQL 데이터베이스 및 Data Lake와 같은 빅데이터 기술에 대해 논의했습니다.
- Java 기반 오픈 소스 프레임워크인 Hadoop을 사용하면 컴퓨터 클러스터 전반에 걸쳐 대규모 데이터 세트를 분산 저장하고 처리할 수 있습니다.
- 하둡의 네 가지 주요 구성 요소 중 하나는 하둡 분산 파일 시스템 (HDFS) 으로, 네트워크를 통해 연결된 여러 상용 하드웨어에서 실행되는 빅 데이터용 스토리지 시스템입니다.
- HDFS는 높은 데이터 처리 속도를 지원하므로 스트리밍 데이터에 액세스할 수 있습니다.
- Hive는 HDFS 또는 Apache HBase와 같은 다른 데이터 스토리지 시스템에 직접 저장되는 대용량 데이터 세트 파일을 읽고, 쓰고, 관리할 수 있는 오픈 소스 데이터 웨어하우스 소프트웨어입니다.

### 한국어 Transcript

빅데이터 처리 기술은 대규모 정형, 반정형 및 비정형 데이터 세트를 처리하여 빅데이터에서 가치를 도출할 수 있는 방법을 제공합니다. 다른 일부 동영상에서는 NoSQL 데이터베이스 및 Data Lake와 같은 빅데이터 기술에 대해 논의했습니다. 이 비디오에서는 ApacheHadoop, Apache Hive, Apache Spark라는 세 가지 오픈 소스 기술과 빅데이터 분석에서 이러한 기술이 수행하는 역할에 대해 설명하겠습니다. 하둡은 빅 데이터의 분산 스토리지 및 처리를 제공하는 도구 모음입니다. Hive는 Hadoop 기반으로 구축된 데이터 쿼리 및 분석을 위한 데이터 웨어하우스입니다.

Spark는 복잡한 데이터 분석을 실시간으로 수행하도록 설계된 분산 데이터 분석 프레임워크입니다. Java 기반 오픈 소스 프레임워크인 Hadoop을 사용하면 컴퓨터 클러스터 전반에 걸쳐 대규모 데이터 세트를 분산 저장하고 처리할 수 있습니다. 하둡 분산 시스템에서 노드는 단일 컴퓨터이며 여러 노드가 클러스터를 형성합니다. Hadoop은 단일 노드에서 원하는 수의 노드로 확장할 수 있으며, 각 노드는 로컬 스토리지 및 계산을 제공합니다. Hadoop은 형식 요구 사항 없이 데이터를 저장할 수 있는 안정적이고 확장 가능하며 비용 효율적인 솔루션을 제공합니다.

Hadoop을 사용하면 다음을 수행할 수 있습니다. 스트리밍 오디오, 비디오, 소셜 미디어 감정, 클릭스트림 데이터와 같은 새로운 데이터 형식을 데이터 웨어하우스에서 일반적으로 사용되지 않는 정형, 반정형 및 비정형 데이터와 함께 통합할 수 있습니다. 모든 이해 관계자에게 실시간 셀프 서비스 액세스를 제공합니다. 조직 전체의 데이터를 통합하고 “콜드” 데이터, 즉 자주 사용하지 않는 데이터를 Hadoop 기반 시스템으로 이동하여 엔터프라이즈 데이터 웨어하우스의 비용을 최적화하고 간소화합니다. 하둡의 네 가지 주요 구성 요소 중 하나는 하둡 분산 파일 시스템 (HDFS) 으로, 네트워크를 통해 연결된 여러 상용 하드웨어에서 실행되는 빅 데이터용 스토리지 시스템입니다.

HDFS는 파일을 여러 노드로 분할하여 확장 가능하고 안정적인 빅데이터 스토리지를 제공합니다. 대용량 파일을 여러 컴퓨터에 분할하여 병렬 액세스를 가능하게 합니다. 따라서 데이터가 저장된 각 노드에서 계산을 병렬로 실행할 수 있습니다. 또한 여러 노드에 파일 블록을 복제하여 데이터 손실을 방지하므로 내결함성이 보장됩니다. 예제를 통해 이를 이해해 보겠습니다.

미국 내 모든 사람의 전화번호가 들어 있는 파일을 예로 들어 보겠습니다. 성이 A로 시작하는 사람의 번호는 서버 1에, B는 서버 2에 저장되는 식입니다. 하둡을 사용하면 이 전화번호부의 일부가 클러스터 전체에 저장됩니다. 전체 전화번호부를 재구성하려면 프로그램에 클러스터에 있는 모든 서버의 블록이 필요합니다. 또한 HDFS는 기본적으로 이러한 작은 부분을 두 개의 추가 서버에 복제하여 서버 장애 발생 시 가용성을 보장합니다.

이를 통해 가용성이 향상될 뿐만 아니라 여러 가지 이점이 있습니다. 이를 통해 Hadoop 클러스터는 작업을 더 작은 청크로 나누고 클러스터의 모든 서버에서 해당 작업을 실행하여 확장성을 높일 수 있습니다. 마지막으로, 데이터가 상주하는 노드에 더 가깝게 계산을 이동하는 프로세스인 데이터 지역성의 이점을 얻을 수 있습니다. 이는 네트워크 혼잡을 최소화하고 처리량을 증가시키기 때문에 대규모 데이터 세트로 작업할 때 매우 중요합니다. HDFS를 사용할 때 얻을 수 있는 다른 이점은 다음과 같습니다.

HDFS는 장애를 감지하고 자동으로 복구하도록 설계되었기 때문에 하드웨어 장애로부터 빠르게 복구할 수 있습니다. HDFS는 높은 데이터 처리 속도를 지원하므로 스트리밍 데이터에 액세스할 수 있습니다. HDFS는 단일 클러스터에서 수백 개의 노드 또는 컴퓨터로 확장할 수 있으므로 대규모 데이터 세트를 수용할 수 있습니다. HDFS는 여러 하드웨어 플랫폼에서 이식 가능하고 다양한 기본 운영 체제와 호환되므로 이식성이 뛰어납니다. Hive는 HDFS 또는 Apache HBase와 같은 다른 데이터 스토리지 시스템에 직접 저장되는 대용량 데이터 세트 파일을 읽고, 쓰고, 관리할 수 있는 오픈 소스 데이터 웨어하우스 소프트웨어입니다.

Hadoop은 긴 순차 스캔에 사용되며 Hive는 하둡을 기반으로 하기 때문에 쿼리 지연 시간이 매우 길기 때문에 매우 빠른 응답 시간이 필요한 애플리케이션에는 Hive가 적합하지 않습니다. 또한 Hive는 읽기 기반이므로 일반적으로 쓰기 작업 비율이 높은 트랜잭션 처리에는 적합하지 않습니다. Hive는 ETL, 보고, 데이터 분석과 같은 데이터 웨어하우징 작업에 더 적합하며 SQL을 통해 데이터에 쉽게 액세스할 수 있는 도구를 포함합니다. 이를 통해 대화형 분석, 스트림 프로세싱, 기계 학습, 데이터 통합 및 ETL을 비롯한 다양한 애플리케이션을 위해 대량의 데이터를 추출하고 처리하도록 설계된 범용 데이터 처리 엔진인 Spark가 탄생했습니다. 메모리 내 처리를 활용하여 메모리가 제한된 경우에만 계산 속도를 크게 높이고 디스크로 유출합니다.

Spark에는 자바, 스칼라, 파이썬, R, SQL 등 주요 프로그래밍 언어를 위한 인터페이스가 있습니다. 독립형 클러스터링 기술은 물론 Hadoop과 같은 다른 인프라 상에서도 실행할 수 있습니다. 또한 HDFS 및 Hive 등 다양한 데이터 소스의 데이터에 액세스할 수 있어 활용도가 매우 높습니다. 스트리밍 데이터를 빠르게 처리하고 복잡한 분석을 실시간으로 수행하는 기능은 Apache Spark의 주요 사용 사례입니다.

## 예시
- Hive는 Hadoop 기반으로 구축된 데이터 쿼리 및 분석을 위한 데이터 웨어하우스입니다.
- Hadoop은 긴 순차 스캔에 사용되며 Hive는 하둡을 기반으로 하기 때문에 쿼리 지연 시간이 매우 길기 때문에 매우 빠른 응답 시간이 필요한 애플리케이션에는 Hive가 적합하지 않습니다.
- 스트리밍 데이터를 빠르게 처리하고 복잡한 분석을 실시간으로 수행하는 기능은 Apache Spark의 주요 사용 사례입니다.

## 요약
- 하둡의 네 가지 주요 구성 요소 중 하나는 하둡 분산 파일 시스템 (HDFS) 으로, 네트워크를 통해 연결된 여러 상용 하드웨어에서 실행되는 빅 데이터용 스토리지 시스템입니다.
- HDFS는 높은 데이터 처리 속도를 지원하므로 스트리밍 데이터에 액세스할 수 있습니다.
- Hive는 HDFS 또는 Apache HBase와 같은 다른 데이터 스토리지 시스템에 직접 저장되는 대용량 데이터 세트 파일을 읽고, 쓰고, 관리할 수 있는 오픈 소스 데이터 웨어하우스 소프트웨어입니다.

<details>
<summary>영문 Transcript 원문</summary>

The Big Data processing technologies provide ways to work with large sets of structured, semi-structured, and unstructured data so that value can be derived from big data. In some of the other videos, we discussed Big Data technologies such as NoSQL databases and Data Lakes. In this video, we are going to talk about three open source technologies and the role they play in big data analytics — ApacheHadoop, Apache Hive, and Apache Spark. Hadoop is a collection of tools that provides distributed storage and processing of big data. Hive is a data warehouse for data query and analysis built on top of Hadoop.

Spark is a distributed data analytics framework designed to perform complex data analytics in real-time. Hadoop, a java-based open-source framework, allows distributed storage and processing of large datasets across clusters of computers. In Hadoop distributed system, a node is a single computer, and a collection of nodes forms a cluster. Hadoop can scale up from a single node to any number of nodes, each offering local storage and computation. Hadoop provides a reliable, scalable, and cost-effective solution for storing data with no format requirements.

Using Hadoop, you can: Incorporate emerging data formats, such as streaming audio, video, social media sentiment, and clickstream data, along with structured, semi-structured, and unstructured data not traditionally used in a data warehouse. Provide real-time, self-service access for all stakeholders. Optimize and streamline costs in your enterprise data warehouse by consolidating data across the organization and moving “cold” data, that is, data that is not in frequent use, to a Hadoop-based system. One of the four main components of Hadoop is Hadoop Distributed File System, or HDFS, which is a storage system for big data that runs on multiple commodity hardware connected through a network. HDFS provides scalable and reliable big data storage by partitioning files over multiple nodes.

It splits large files across multiple computers, allowing parallel access to them. Computations can, therefore, run in parallel on each node where data is stored. It also replicates file blocks on different nodes to prevent data loss, making it fault-tolerant. Let’s understand this through an example. Consider a file that includes phone numbers for everyone in the United States; the numbers for people with last name starting with A might be stored on server 1, B on server 2, and so on.

With Hadoop, pieces of this phonebook would be stored across the cluster. To reconstruct the entire phonebook, your program would need the blocks from every server in the cluster. HDFS also replicates these smaller pieces onto two additional servers by default, ensuring availability when a server fails, In addition to higher availability, this offers multiple benefits. It allows the Hadoop cluster to break up work into smaller chunks and run those jobs on all servers in the cluster for better scalability. Finally, you gain the benefit of data locality, which is the process of moving the computation closer to the node on which the data resides.

This is critical when working with large data sets because it minimizes network congestion and increases throughput. Some of the other benefits that come from using HDFS include: Fast recovery from hardware failures, because HDFS is built to detect faults and automatically recover. Access to streaming data, because HDFS supports high data throughput rates. Accommodation of large data sets, because HDFS can scale to hundreds of nodes, or computers, in a single cluster. Portability, because HDFS is portable across multiple hardware platforms and compatible with a variety of underlying operating systems.

Hive is an open-source data warehouse software for reading, writing, and managing large data set files that are stored directly in either HDFS or other data storage systems such as Apache HBase. Hadoop is intended for long sequential scans and, because Hive is based on Hadoop, queries have very high latency—which means Hive is less appropriate for applications that need very fast response times. Also, Hive is read-based, and therefore not suitable for transaction processing that typically involves a high percentage of write operations. Hive is better suited for data warehousing tasks such as ETL, reporting, and data analysis and includes tools that enable easy access to data via SQL. This brings us to Spark, a general-purpose data processing engine designed to extract and process large volumes of data for a wide range of applications, including Interactive Analytics, Streams Processing, Machine Learning, Data Integration, and ETL.

It takes advantage of in-memory processing to significantly increase the speed of computations and spilling to disk only when memory is constrained. Spark has interfaces for major programming languages, including Java, Scala, Python, R, and SQL. It can run using its standalone clustering technology as well as on top of other infrastructures such as Hadoop. And it can access data in a large variety of data sources, including HDFS and Hive, making it highly versatile. The ability to process streaming data fast and perform complex analytics in real-time is the key use case for Apache Spark.

</details>
