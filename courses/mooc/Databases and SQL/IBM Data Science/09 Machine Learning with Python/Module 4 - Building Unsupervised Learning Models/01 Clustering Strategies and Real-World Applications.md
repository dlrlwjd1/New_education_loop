# Clustering Strategies and Real-World Applications

## 개요
- 강좌: Machine Learning with Python
- 모듈:  Building Unsupervised Learning Models
- 재생 시간: 7분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/PFDef/clustering-strategies-and-real-world-applications)
- 이 비디오를 시청한 후 클러스터링의 개념과 다양한 응용 프로그램을 설명할 수 있습니다.
- K-평균 클러스터링을 적용하여 고객의 특성에 따라 고객을 분류하는 방법을 배우게 됩니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후 클러스터링의 개념과 다양한 응용 프로그램을 설명할 수 있습니다.
- K-평균 클러스터링을 적용하여 고객의 특성에 따라 고객을 분류하는 방법을 배우게 됩니다.
- 또한 파티션 기반, 밀도 기반 및 계층적 클러스터링을 비롯한 다양한 유형의 클러스터링 방법을 이해할 수 있습니다.
- 계층적 클러스터링 알고리즘은 데이터를 각각 더 작은 하위 클러스터를 포함하는 중첩 클러스터 트리로 구성합니다.
- 두 가지 주요 알고리즘은 클러스터를 병합하는 응집 알고리즘과 클러스터를 분할하는 분할 알고리즘입니다.
- 이 비디오에서는 클러스터링의 개념과 응용 분야를 설명하고 K-평균 클러스터링을 적용하여 특성에 따라 고객을 분류하는 방법을 배웠습니다.

### 한국어 Transcript

실제 애플리케이션의 클러스터링 전략에 대한 이 비디오에 오신 것을 환영합니다. 이 비디오를 시청한 후 클러스터링의 개념과 다양한 응용 프로그램을 설명할 수 있습니다. K-평균 클러스터링을 적용하여 고객의 특성에 따라 고객을 분류하는 방법을 배우게 됩니다. 또한 파티션 기반, 밀도 기반 및 계층적 클러스터링을 비롯한 다양한 유형의 클러스터링 방법을 이해할 수 있습니다. 마지막으로, 데이터 포인트를 그룹화하는 고유한 접근 방식을 탐구하면서 응집 및 분할 계층적 클러스터링을 분석할 수 있습니다.

클러스터링은 유사성을 기반으로 데이터 포인트를 클러스터로 자동 그룹화하는 머신 러닝 기법입니다. 클러스터링은 음악 장르 식별, 사용자 그룹 분류 또는 시장 세그먼트 분석과 같은 다양한 시나리오에 적용할 수 있습니다. 이 방법은 데이터에서 하나의 특징 또는 여러 특징을 사용하여 의미 있는 클러스터를 형성할 수 있습니다. 이 데이터세트에는 과거 고객 특징 및 대출 채무 불이행 상태가 포함됩니다. 분류 알고리즘은 감독을 받아 레이블이 지정된 데이터로부터 범주형 레이블을 예측하는 방법을 학습합니다.

여기서는 레이블이 지정된 과거 데이터를 기반으로 의사 결정 트리 모델을 학습하여 신규 고객의 대출 채무 불이행 여부를 예측합니다. 클러스터링은 분류와 비슷하지만 레이블이 지정되지 않은 데이터를 사용하여 독립적으로 패턴을 찾아 클러스터를 형성합니다. 여기서 k-평균 클러스터링 모델은 비슷한 특성을 가진 고객을 파란색, 하늘색, 빨간색 행으로 표시된 세 군집으로 나눕니다. 이 모델은 데이터를 사용할 수 없고 설계의 일부가 아니기 때문에 고객이 기본 설정을 했는지 알 수 없는 상태에서 작동합니다. 탐색적 데이터 분석에서 클러스터링은 타겟 마케팅을 위한 고객 세분화와 같은 자연스러운 그룹화를 찾아냅니다.

클러스터링은 유사한 물체를 그룹화하고 의학적 이상을 감지하는 등 이미지 분할을 지원하여 패턴 인식을 향상시킵니다. 클러스터링은 이상값을 식별하고 사기 또는 장비 오작동을 탐지하여 이상 징후를 탐지하는 데 도움이 됩니다. 향후 엔지니어링에서 클러스터링은 새로운 기능을 생성하거나 차원을 줄여 모델 성능 및 해석 가능성을 개선합니다. 데이터 요약에서 클러스터링은 데이터를 소수의 대표 클러스터로 요약하여 데이터를 단순화합니다. 클러스터링은 데이터 포인트를 클러스터 중심으로 대체하여 데이터 크기를 줄입니다.

마지막으로 클러스터링은 클러스터를 구별하는 필수 기능을 식별합니다. 파티션 기반 클러스터링 알고리즘은 데이터를 겹치지 않는 그룹으로 나눕니다. 가장 일반적인 방법인 k-평균은 분산이 최소인 k-클러스터를 식별합니다. 이러한 알고리즘은 효율적이며 대규모 데이터 세트에서 잘 확장됩니다. 밀도 기반 클러스터링 알고리즘은 모든 형태의 클러스터를 생성하므로 불규칙한 클러스터와 잡음이 많은 데이터 세트에 적합합니다.

예를 들어 DBSCAN 알고리즘이 있습니다. 계층적 클러스터링 알고리즘은 데이터를 각각 더 작은 하위 클러스터를 포함하는 중첩 클러스터 트리로 구성합니다. 이 프로세스는 클러스터 간의 관계를 나타내는 덴드로그램을 생성합니다. 두 가지 주요 알고리즘은 클러스터를 병합하는 응집 알고리즘과 클러스터를 분할하는 분할 알고리즘입니다. 이러한 알고리즘은 직관적이고 중소 규모의 데이터 세트에 효과적입니다.

이 파티션 기반 클러스터링 결과는 Scikit-Learn의 MakeBlobs 함수를 사용하여 스캐터차트에서 색상으로 구분된 세 개의 클러스터를 생성합니다. 다음은 서로 맞물리는 반원을 생성하는 Scikit-learn의 MakeMoons 함수를 사용한 두 가지 클러스터링 결과입니다. 둘 다 색상을 사용하여 클러스터를 시각적으로 구분합니다. 왼쪽의 파티션 기반 클러스터링은 형상을 분리하는 데 어려움을 겪으며 빨간색 곡선을 따라 데이터를 분할합니다. 반대로 밀도 기반 군집화는 형상을 성공적으로 분리하지만 세 점으로 구성된 불필요한 세 번째 군집을 생성합니다.

UCLA 생물학자들이 만든 이 차트는 전 세계 85종 900마리 이상의 개와 200마리의 야생 회색 늑대의 유전자 데이터를 보여줍니다. 그들은 분자 기술을 사용하여 48,000개의 유전자 마커를 분석했습니다. 다이어그램은 각 노드가 하위 클러스터의 클러스터를 나타내는 나무와 같은 구조의 유전적 유사성을 기반으로 동물을 그룹화하는 계층적 클러스터링을 보여줍니다. 계층적 클러스터링 트리를 구성하기 위한 두 가지 주요 전략, 즉 분할 전략과 응집 전략이 있습니다. 분할 클러스터링은 하향식 접근 방식을 사용합니다.

처음에는 단일 루트 클러스터의 모든 관측치가 포함되며, 이 루트 클러스터는 반복적으로 더 작은 하위 클러스터로 분할됩니다. 집계 클러스터링은 상향식 접근 방식을 사용합니다. 각 관측치는 개별 군집으로 시작되며 유사한 군집은 더 큰 상위 군집으로 병합됩니다. 상향식 접근 방식을 사용하는 응집 계층적 클러스터링 알고리즘을 살펴보겠습니다. 먼저 클러스터 간 거리 ( 예: 중심 간 거리) 를 측정할 메트릭을 선택합니다.

프로세스는 먼저 N개의 클러스터를 초기화하며, 각 클러스터에는 단일 데이터 포인트가 포함됩니다. 다음으로 각 점 i와 j 쌍 사이의 거리 d-i-j를 표시하는 n-x-n 행렬인 거리 행렬이 계산됩니다. 원하는 군집 개수에 도달하거나 모든 점을 하나의 군집으로 병합할 때까지 다음 단계를 반복합니다. 선택한 거리 메트릭을 기반으로 가장 가까운 두 클러스터를 병합합니다. 새 거리 값으로 근접 메트릭을 업데이트합니다.

하향식 접근 방식을 취하는 분할 계층 클러스터링 알고리즘을 살펴보겠습니다. 전체 데이터세트를 하나의 클러스터로 사용하여 시작합니다. 유사점 또는 유사점을 기준으로 이 클러스터를 더 작은 클러스터로 분할합니다. 중지 기준 ( 최소 클러스터 크기) 에 도달할 때까지 각 클러스터를 두 개로 계속 분할합니다. 캐나다의 6개 도시를 서로 간의 거리를 기준으로 그룹화한다고 상상해 보십시오.

거리 행렬은 각 도시 쌍 간의 거리를 나타냅니다. 알고리즘은 6개의 군집으로 시작하며, 각 군집은 이름의 처음 두 글자로 된 도시를 나타냅니다. 초기 작업은 비행 거리와 같은 거리 측정값을 기반으로 병합할 두 클러스터를 식별하는 것입니다. 거리 행렬을 검토하면 몬트리올과 오타와가 가장 가까운 군집이라는 것을 알 수 있으므로 이 두 군집이 합쳐져 다음 상위 군집이 됩니다. 알고리즘이 진행됨에 따라 빨간색 타원으로 표시된 덴드로그램으로 클러스터 계층 구조를 시각화할 수 있습니다.

거리 행렬은 오타와-몬트리올 군집에 있는 몬트리올과 오타와의 행과 열을 결합합니다 . 이 새 클러스터까지의 거리가 업데이트되고 두 도시 사이의 중간 지점으로 계산됩니다. 다음으로 가장 가까운 클러스터를 다시 찾으십시오. 오타와-몬트리올과 토론토 클러스터가 가장 가까워 토론토-오타와-몬트리올 클러스터를 형성합니다. 알고리즘이 진행됨에 따라 덴드로그램은 빨간색 타원형으로 표시된 것처럼 클러스터의 계층 구조를 시각화합니다.

다음으로 업데이트된 거리 행렬은 밴쿠버와 에드먼턴이 가장 가깝다는 것을 보여줍니다. 마찬가지로, 집계 알고리즘은 클러스터를 하나로 병합하여 덴드로그램을 완성합니다. 이 비디오에서는 클러스터링의 개념과 응용 분야를 설명하고 K-평균 클러스터링을 적용하여 특성에 따라 고객을 분류하는 방법을 배웠습니다. 밀도 기반 클러스터링과 이러한 클러스터링이 비정규 클러스터에 어떻게 적합한지 설명합니다. 계층적 클러스터링과 이를 통해 덴드로그램을 생성하는 방법을 설명합니다.

계층적 클러스터링, 분할 및 응집 전략을 사용하십시오. 응집적 계층적 클러스터링과 상향식 접근 방식을 분석합니다. 분할적 계층적 클러스터링과 그 상향식 접근 방식을 분석합니다.

## 예시
- 예를 들어 DBSCAN 알고리즘이 있습니다.

## 요약
- 계층적 클러스터링 알고리즘은 데이터를 각각 더 작은 하위 클러스터를 포함하는 중첩 클러스터 트리로 구성합니다.
- 두 가지 주요 알고리즘은 클러스터를 병합하는 응집 알고리즘과 클러스터를 분할하는 분할 알고리즘입니다.
- 이 비디오에서는 클러스터링의 개념과 응용 분야를 설명하고 K-평균 클러스터링을 적용하여 특성에 따라 고객을 분류하는 방법을 배웠습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to this video on clustering strategies in real-world applications. After watching this video, you will be able to explain the concept of clustering and its various applications. You will learn how to apply k-means clustering to segment customers based on their characteristics. Additionally, you will gain an understanding of the different types of clustering methods, including partition-based, density-based, and hierarchical clustering. Finally, you will be equipped to analyze agglomerative and divisive hierarchical clustering, exploring their distinct approaches to grouping data points.

Clustering is a machine learning technique that automatically groups data points into clusters based on similarities. Clustering can be applied in various scenarios, such as identifying music genres, segmenting user groups, or analyzing market segments. This method can use just one feature or multiple features in data to form meaningful clusters. This dataset includes historical customer features and loan default status. Classification algorithms, being supervised, learn to predict categorical labels from labeled data.

Here, based on the labeled historical data, a decision tree model is trained to predict if a new customer will default on a loan. Clustering is like classification but works with unlabeled data, independently finding patterns to form clusters. Here, a k-means clustering model segments customers with similar characteristics into three clusters, indicated by the blue, light blue, and red rows. The model operates without knowing if a customer has defaulted, as that data is unavailable and not part of its design. In exploratory data analysis, clustering uncovers natural groupings, such as customer segmentation, for targeted marketing.

Clustering boosts pattern recognition by grouping similar objects and aiding in image segmentation, such as detecting medical abnormalities. Clustering helps anomaly detection by identifying outliers and detecting fraud or equipment malfunctions. In future engineering, clustering creates new features or reduces dimensionality, improving model performance and interpretability. In data summarization, clustering simplifies data by summarizing it into a small number of representative clusters. Clustering reduces data size by replacing data points with cluster centers, which is useful for image compression.

Finally, clustering identifies essential features that distinguish clusters. Partition-based clustering algorithms divide data into non-overlapping groups. The most common method, k-means, identifies k-clusters with minimal variance. These algorithms are efficient and scale well with large datasets. Density-based clustering algorithms create clusters of any shape, making them suitable for irregular clusters and noisy datasets.

An example is DBSCAN algorithm. Hierarchical clustering algorithms organize data into a tree of nested clusters, each containing smaller sub-clusters. This process generates a dendrogram, revealing relationships between clusters. The two main algorithms are agglomerative, which merges clusters, and divisive, which splits them. These algorithms are intuitive and effective for small to mid-sized datasets.

This partition-based clustering result uses the makeBlobs function from Scikit-learn, generating three color-coded clusters in the scatterplot. Here are two clustering results using the makeMoons function from Scikit-learn that generates interlocking half-circles. Both use color to distinguish clusters visually. On the left, the partition-based clustering struggles to separate the shapes, partitioning the data along a red curve. In contrast, the density-based clustering successfully separates the shapes, but creates an unnecessary third cluster of three points.

This chart, created by UCLA biologists, presents genetic data from over 900 dogs across 85 breeds and 200 wild grey wolves globally. They analyzed 48,000 genetic markers using molecular techniques. The diagram illustrates hierarchical clustering, grouping animals based on genetic similarities in a tree-like structure, where each node represents a cluster of child clusters. There are two main strategies for constructing hierarchical clustering trees, divisive and agglomerative. Divisive clustering uses a top-down approach.

It starts with all observations in a single root cluster, which is iteratively split into smaller child clusters. Agglomerative clustering employs a bottom-up approach. Each observation begins as an individual cluster, and similar clusters are merged into larger parent clusters. Let's explore the agglomerative hierarchical clustering algorithm, which uses a bottom-up approach. First, select a metric to measure the distance between clusters, such as the distance between their centroids.

The process begins by initializing N clusters, with each cluster containing a single data point. Next, a distance matrix is computed, which is an n-x-n matrix that displays the distances d-i-j between each pair of points i and j. Repeat the following steps until you achieve the desired number of clusters, or merge all points into one cluster. Merge the two closest clusters based on the selected distance metric. Update the proximity metric with the new distance values.

Let's examine the divisive hierarchical clustering algorithm, which takes a top-down approach. Start with the entire dataset as one cluster. Partition this cluster into smaller clusters based on similarities or dissimilarities. Continue splitting each cluster into two until a stopping criterion, which is a minimum cluster size, is reached. Imagine you want to group six cities in Canada based on their distances from one another.

The distance matrix represents the distances between each pair of cities. The algorithm starts with six clusters, each representing a city with the first two letters of its name. The initial task is identifying which two clusters to merge based on a distance measure, like flight distance. Reviewing the distance matrix shows that Montreal and Ottawa are the closest clusters, so they combine into the next parent cluster. As the algorithm progresses, you can visualize the hierarchy of clusters with a dendrogram, as indicated by the red oval.

The distance matrix combines the rows and columns for Montreal and Ottawa in the Ottawa-Montreal cluster. The distances to this new cluster are updated and calculated as the midpoint between the two cities. Next, look for the closest clusters again. The Ottawa-Montreal and Toronto clusters are the nearest, forming the Toronto-Ottawa-Montreal cluster. As the algorithm progresses, a dendrogram visualizes the hierarchy of clusters, as shown by the red oval.

Next, the updated distance matrix shows that Vancouver and Edmonton are the closest. Similarly, the agglomerative algorithm merges clusters into one, completing the dendrogram. In this video, you learned to explain the concept of clustering and its applications, apply k-means clustering to segment customers based on characteristics. Explain density-based clustering and how they are suitable for irregular clusters. Explain hierarchical clustering and how it generates a dendrogram.

Use strategies for hierarchical clustering, divisive and agglomerative. Analyze agglomerative hierarchical clustering and its bottom-up approach. Analyze divisive hierarchical clustering and its top-down approach.

</details>
