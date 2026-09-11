# K-means and More on K-means

## 개요
- 강좌: Machine Learning with Python
- 모듈:  Building Unsupervised Learning Models
- 재생 시간: 7분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/kLxKV/k-means-and-more-on-k-means)
- 이 비디오를 시청한 후에는 K-Means 클러스터링에 대해 설명하고 K-Means 알고리즘의 작동 방식을 설명할 수 있습니다.
- K-Means는 중심 간의 거리를 기반으로 데이터세트를 유사한 그룹으로 나누는 반복적인 중심 기반 클러스터링 알고리즘입니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 K-Means 클러스터링에 대해 설명하고 K-Means 알고리즘의 작동 방식을 설명할 수 있습니다.
- K-Means는 중심 간의 거리를 기반으로 데이터세트를 유사한 그룹으로 나누는 반복적인 중심 기반 클러스터링 알고리즘입니다.
- 군집 중심에는 빨간색 X로 표시된 중심점이 있습니다.
- 각 군집 중심을 군집 데이터 점의 평균으로 업데이트합니다.
- 그러나 군집 중심이 작을수록 큰 군집 중심에 가까워지며 군집이 큰 군집의 점을 점점 더 많이 소비합니다.
- 이 비디오에서는 K-Means가 중심 간의 거리를 기반으로 데이터세트를 유사한 그룹으로 분할하는 반복적인 중심 기반 클러스터링 알고리즘이라는 것을 배웠습니다.

### 한국어 Transcript

K-Means 클러스터링에 오신 것을 환영합니다. 이 비디오를 시청한 후에는 K-Means 클러스터링에 대해 설명하고 K-Means 알고리즘의 작동 방식을 설명할 수 있습니다. K를 결정하는 방법도 논의할 수 있습니다. K-Means는 중심 간의 거리를 기반으로 데이터세트를 유사한 그룹으로 나누는 반복적인 중심 기반 클러스터링 알고리즘입니다. K-평균은 데이터를 k개의 비중첩 클러스터로 나눕니다.

k개 군집은 중심 주위의 분산이 최소이고 군집 간의 비유사성이 최대화되도록 구성됩니다. 데이터 포인트 클러스터를 보여주는 이 차트를 통해 이 정의를 이해해 보겠습니다. 군집 중심에는 빨간색 X로 표시된 중심점이 있습니다. 이는 군집 내 모든 점의 평균 위치입니다. 중심에 가장 가까운 데이터 포인트는 동일한 범주 내에 그룹화됩니다.

k 값, 즉 군집 수가 많을수록 군집이 작아지고 세부 정보가 더 작다는 의미이고, k 값이 낮을수록 군집이 크고 세부 정보가 더 작아집니다. K-Means를 사용하는 방법을 살펴보겠습니다. 특징 공간을 분할하려는 군집 수를 선택하고 k개의 시작 중심 위치를 무작위로 선택합니다. 이러한 초기 중심은 데이터 점이나 특징 공간의 다른 점일 수 있습니다. 클러스터에 반복적으로 점을 할당하고 중심을 업데이트합니다.

먼저 각 점에서 각 중심까지의 거리로 구성된 거리 행렬을 계산합니다. 그런 다음, 중심이 가장 가까운 군집에 각 데이터 점을 할당합니다. 각 군집 중심을 군집 데이터 점의 평균으로 업데이트합니다. 중심 위치가 안정화되거나 최대 반복 횟수에 도달할 때까지 반복합니다. 중심점이 움직이지 않으면 알고리즘이 수렴합니다.

다음은 K-Means가 각 반복마다 중심점과 군집점을 업데이트하는 방법을 보여주는 실험입니다. 데모는 빨간색과 파란색의 점으로 구성된 원형 군집과 금색으로 각각 X와 더하기 기호로 표시된 무작위로 선택된 두 개의 초기 중심으로 구성된 두 개의 미지 클래스로 시작합니다. 반복할 때마다 중심점이 최종 목적지에 가까워지는 것을 볼 수 있습니다. 따라서 K-평균은 반복 3을 통해 이미 수렴되었습니다. 최종 군집화에는 레이블이 잘못 지정된 점이 몇 개 포함되어 있지만 K-Means는 이러한 점을 잘 구분합니다.

그러나 K-Means는 불균형 클러스터에서 제대로 작동하지 않습니다. 이 실험에서는 빨간색과 파란색으로 구성된 원형 점 군집 쌍으로 표시된 미지 클래스의 점 개수가 다릅니다. 빨간색 클러스터에는 200개의 포인트가 있고 파란색 클러스터에는 10개의 포인트가 있습니다. 흥미롭게도 첫 번째 반복의 결과는 상당히 좋습니다. 대규모 클러스터의 중심 업데이트는 매우 빠르게 안정화됩니다.

그러나 군집 중심이 작을수록 큰 군집 중심에 가까워지며 군집이 큰 군집의 점을 점점 더 많이 소비합니다. K-Means에서는 군집이 볼록하다고 가정합니다. 즉, 두 점 사이에 그려진 선은 군집 내에 그대로 남아 있습니다. 아래 그림은 파란색으로 표시된 볼록하지 않은 점 집합을 보여줍니다. 파란색 선 세그먼트로 정의된 경계는 점 집합의 경계와 비슷합니다.

빨간색 선은 점의 볼록한 껍질이라고 불리는 것의 윤곽을 나타냅니다. 또한 알고리즘은 군집이 거의 같은 수의 점을 포함한다고 가정합니다. 통계적 분산은 특이치에 민감하기 때문에 잡음이 있는 경우 K-평균이 제대로 작동하지 않을 수 있습니다. K-Means는 파티션 기반 알고리즘으로서 효율적이며 빅 데이터에 맞게 확장됩니다. K-Means의 목표는 모든 군집에 대한 군집 내 분산을 동시에 최소화하는 것입니다.

수학적으로 이것은 각 군집 i와 각 군집 내의 각 점 x에 대한 이중합을 의미합니다. x와 이 클러스터의 중심 사이의 제곱 거리의 Ci, mu i. 다음은 다양한 조건에서 K-Means가 얼마나 잘 수행되는지 보여주는 세 가지 실험의 결과입니다. 왼쪽에 있는 세 개의 스캐터 차트는 Scikit-learn의 make blob 함수로 생성된 데이터에서 가져온 것입니다. 세 개의 블롭은 세 개의 서로 다른 클러스터를 나타냅니다.

세 데이터 집합 간의 차이는 각 블롭의 표준 편차로, 1에서 4, 15로 증가합니다. 값이 높을수록 얼룩이 분산되어 시각적으로 구분하기가 어려워집니다. 오른쪽은 k와 같음에 대한 각 실험의 K-평균 클러스터링 결과입니다. 빨간색 X는 K-평균 클러스터 중심을 나타냅니다. K-Means는 입력 데이터의 얼룩에 할당된 클래스나 색상을 알지 못합니다.

이 실험의 목표는 K-Means가 이 세 가지 클래스를 알아내는 것입니다. 보시다시피 K-Means는 표준 편차 1과 4에 대해 블롭을 매우 잘 구분했습니다. 블롭이 겹치는 경우 결과 클러스터에 오류가 발생합니다. 클러스터링 알고리즘이 표준 편차가 15인 블롭을 풀 것으로 기대하는 것은 비합리적입니다. 그러나 K-Means는 지시대로 수행했고 어쨌든 세 개의 클러스터를 생성했습니다.

직관적으로 보면 최대 두 군집, 즉 중심점과 외곽점이 검색될 것으로 예상할 수 있습니다. 표시된 것처럼 입력 데이터에 클래스 레이블이 세 개 있는 경우 두 특성이 두 특성을 구분할 수 없습니다. 이러한 분리를 수행하려면 더 많은 기능이 필요합니다. 블롭의 표준 편차가 커질수록 K-Means에서 찾은 클러스터 중심이 서로 가까워진다는 것을 알 수 있습니다. K가 입력 데이터에 있는 미지의 클래스 수와 다르면 어떻게 될까요?

여기서는 k가 클러스터 2개와 같음을 기준으로 실험을 실행하여 K-Means를 결정하고 알 수 없는 클래스가 세 개 있는 세 개의 블롭이 제공됩니다. 표준편차가 1인 경우 K-Means는 하나의 블롭을 정확하게 식별하고 나머지 두 블롭을 하나의 클러스터로 병합합니다. 이때 중심은 두 블럽 사이에 위치합니다. 마찬가지로, 표준편차가 4인 경우 K-Means는 하나의 블롭을 식별하고 나머지 두 블롭의 대부분을 하나의 클러스터로 병합합니다. 이때 중심은 두 블럽 사이에 위치합니다.

표준 편차가 15인 경우 K-Means는 아무 옵션도 남지 않으므로 구분할 수 없는 데이터처럼 보이는 데이터에 두 군집을 적용해야 합니다. 블롭의 표준 편차가 커질수록 K-Means에서 찾은 클러스터 중심은 서로 가까워집니다. 두 블롭은 점차 하나로 합쳐지며, 블롭은 하나의 중심만 가질 수 있습니다. K가 너무 크면 K-Means는 허용되지 않는 결과를 반환합니다. 데이터에 대해 잘 모르는 경우 K에 가장 적합한 값을 어떻게 찾을 수 있을까요?

복잡한 데이터의 경우 K를 선택하기가 어렵습니다. 데이터를 분리할 수 있는 경우 적합한 K를 선택할 수 있습니다. 데이터가 분리 가능한지 어떻게 알 수 있나요? 2차원 또는 3차원에서는 명확하지만 고차원 특징 공간에서는 패턴을 쉽게 시각화할 수 없습니다. 변수 쌍 간의 스캐터 차트를 고려하여 이들 중 분리성을 나타내는 것이 있는지 확인하면 통찰력을 얻을 수 있습니다.

주어진 K에 대한 K-Means의 성능을 측정하는 몇 가지 휴리스틱 기법에는 데이터 포인트가 해당 클러스터와 얼마나 유사한지 (응집력이라고 함) 분리라고 하는 다른 클러스터와 비교하여 측정하는 실루엣 분석이 있습니다. 엘보우 방법은 여러 군집 수에 대한 K-평균 목적 함수를 도표로 나타낸 것이며, Davies-Bouldin 지수는 각 군집의 평균 유사성 비율을 측정하며, 군집이 가장 비슷합니다. 이 비디오에서는 K-Means가 중심 간의 거리를 기반으로 데이터세트를 유사한 그룹으로 분할하는 반복적인 중심 기반 클러스터링 알고리즘이라는 것을 배웠습니다. K-Means 클러스터링 알고리즘은 클러스터 중심으로부터의 수학적 거리 측정을 사용하여 데이터 포인트를 클러스터로 분류합니다. K-Means는 불균형 군집에서는 잘 작동하지 않으며 군집이 볼록하다고 가정합니다.

K-Means의 목적은 모든 군집에 대한 군집 내 분산을 동시에 최소화하는 것입니다. 주어진 K에 대한 K-Means의 성능을 측정하는 몇 가지 휴리스틱 기법으로는 실루엣 분석, 엘보우 방법, Davies-Bouldin 지수가 있습니다.

## 예시
- 데모는 빨간색과 파란색의 점으로 구성된 원형 군집과 금색으로 각각 X와 더하기 기호로 표시된 무작위로 선택된 두 개의 초기 중심으로 구성된 두 개의 미지 클래스로 시작합니다.

## 요약
- 각 군집 중심을 군집 데이터 점의 평균으로 업데이트합니다.
- 그러나 군집 중심이 작을수록 큰 군집 중심에 가까워지며 군집이 큰 군집의 점을 점점 더 많이 소비합니다.
- 이 비디오에서는 K-Means가 중심 간의 거리를 기반으로 데이터세트를 유사한 그룹으로 분할하는 반복적인 중심 기반 클러스터링 알고리즘이라는 것을 배웠습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to K-Means Clustering. After watching this video, you will be able to describe K-Means Clustering and explain how the K-Means algorithm works. You will also be able to discuss how to determine K. K-Means is an iterative, centroid-based clustering algorithm that partitions a dataset into similar groups based on the distance between their centroids. K-Means divides data into k non-overlapping clusters, where k is a chosen parameter.

The k clusters are constructed to have minimal variances around their centroids and maximum dissimilarity between clusters. Let's understand this definition with the help of this chart showing a cluster of data points. At the center of the cluster is the centroid marked with a red X. This is the average position of all points in the cluster. Data points nearest to a centroid are grouped within the same category.

A higher k value, or the number of clusters, signifies smaller clusters with greater detail, while a lower k value results in larger clusters with less detail. Let's look at how to use K-Means. First, initialize the algorithm. Choose the number of clusters that you would like to partition the feature space into and randomly select k starting centroid locations. These initial centroids can be data points or other points from the feature space.

Next, assign centroids. Iteratively assign points to clusters and update their centroids. First, compute the distance matrix consisting of the distances from each point to each centroid. Then, assign each data point to the cluster with the nearest centroid. Update each cluster centroid as the mean of the cluster's data points.

Repeat until the centroid positions stabilize or you reach maximum iterations. The algorithm converges once the centroids stop moving. Here is an experiment demonstrating how K-Means updates centroids and cluster points with each iteration. The demo starts with two unknown classes comprising circular clusters of points in red and blue and two randomly selected initial centroids in gold, each represented by an X and the plus symbol. With each iteration, you can see the centroids getting closer to their final destinations.

Iterations 3 and 4 are identical. Thus, K-Means have already converged by iteration 3. Although the final clustering contains a few mislabeled points, K-Means does a good job of separating them. However, K-Means doesn't perform very well on imbalanced clusters. In this experiment, the unknown classes, indicated by the pair of circular clusters of points in red and blue, differ in their number of points.

The red cluster has 200 points and the blue one has 10. Interestingly, the result in the first iteration is quite good. The centroid updates for the larger cluster stabilize very quickly. However, the smaller cluster centroid drifts closer to the larger cluster centroid and its cluster consumes more and more of the larger cluster's points. K-Means assumes that clusters are convex, meaning that any line drawn between two points remains within the cluster.

The figure here shows a non-convex set of points colored blue. The boundary defined by the blue line segments approximates the boundary of the set of points. The red lines outline what is called the convex hull of the points. The algorithm also assumes that the clusters contain approximately the same number of points. Because statistical variance is sensitive to outliers, K-Means can perform poorly in the presence of noise.

As a partition-based algorithm, K-Means is efficient and scales well to big data. The goal of K-Means is to minimize the within-cluster variance for all clusters simultaneously. Mathematically, this means a double sum over each cluster, i, and each point, x, within each cluster. Ci of the square distance between x and this cluster's centroid, mu i. Here are the results from three experiments to illustrate how well K-Means performs under different conditions.

The three scatter plots on the left are from data generated with Scikit-learn's make blob function. The three blobs represent three different clusters. The difference between the three datasets is the standard deviation of each blob, increasing from 1 to 4 to 15. Higher values disperse the blobs and they become visually less distinguishable. On the right, are each experiment's K-Means clustering results for k equals 3.

The red Xs indicate the K-Means cluster centroids. K-Means does not know the classes or colors assigned to the blobs in the input data. The goal of these experiments is for K-Means to uncover these three classes. As you can see, K-Means has distinguished the blobs quite well for standard deviations of 1 and 4. Where the blobs overlap, the resulting clusters have errors.

It would be unreasonable to expect any clustering algorithm to untangle blobs where the standard deviation is 15. However, K-Means did what was instructed to do and generated three clusters anyway. Intuitively, you might expect at most two clusters to be found, the core and outlying points If the input data had three class labels, as depicted, the two features would be incapable of separating them. More features would be needed to accomplish this separation. Observe that, as the standard deviation of the blobs increases, the cluster centroids that K-Means finds get closer together.

What if K differs from the unknown number of classes in the input data? Here, the experiment is run with k equals 2 clusters for K-Means to determine, and three blobs with three unknown classes are given. For a standard deviation of 1, K-Means correctly identifies one blob and merges the other two into one cluster, with its centroid between the two blobs. Similarly, for a standard deviation of 4, K-Means identifies one blob and merges most of the other two blobs into one cluster, with its centroid between the two blobs. When the standard deviation is 15, K-Means is left with no option and must impose the two clusters onto what looks like indistinguishable data.

As the standard deviation of the blobs increases, the cluster centroids that K-Means finds get closer together. The two blobs gradually merge into one, and a blob can have only one centroid. When K is too large, K-Means returns unacceptable results. How do you find the best value for K when you don't know much about your data? Choosing K is difficult for complex data.

When the data is separable, choosing the suitable K is feasible. How do you know whether the data is separable? While obvious in two or three dimensions, you can't visualize the patterns easily for higher-dimensional feature spaces. You can gain some insight by considering scatter plots between pairs of your variables to see whether any of these demonstrate separability. Some heuristic techniques for gauging K-Means' performance for a given K include silhouette analysis, which measures how similar a data point is to its cluster, known as cohesion, compared to other clusters, known as separation.

The Elbow method is a plot of the K-Means objective function for different numbers of clusters, and the Davies-Bouldin index measures each cluster's average similarity ratio, with the cluster most similar. In this video, you learned that K-Means is an iterative, centroid-based clustering algorithm that partitions a dataset into similar groups based on the distance between their centroids. The K-Means clustering algorithm categorizes data points into clusters using a mathematical distance measure from the cluster center. K-Means doesn't perform very well on imbalanced clusters and assumes that clusters are convex. The objective of K-Means is to minimize the within-cluster variance for all clusters simultaneously.

Some heuristic techniques for gauging K-Means' performance for a given K include silhouette analysis, the elbow method, and the Davies-Bouldin index.

</details>
