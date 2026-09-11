# DBSCAN and HDBSCAN Clustering

## 개요
- 강좌: Machine Learning with Python
- 모듈:  Building Unsupervised Learning Models
- 재생 시간: 7분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/kP8ji/dbscan-and-hdbscan-clustering)
- 이 비디오를 시청한 후에는 노이즈 클러스터링을 사용하는 애플리케이션의 밀도 기반 공간 클러스터링인 DBSCAN에 대해 설명하고 작동 방식을 설명할 수 있습니다.
- 또한 HDBSCAN, 즉 노이즈 클러터링이 있는 애플리케이션의 계층적 밀도 기반 공간 클러스터링에 대해 설명하고 작동 방식을 설명할 수 있습니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 노이즈 클러스터링을 사용하는 애플리케이션의 밀도 기반 공간 클러스터링인 DBSCAN에 대해 설명하고 작동 방식을 설명할 수 있습니다.
- 또한 HDBSCAN, 즉 노이즈 클러터링이 있는 애플리케이션의 계층적 밀도 기반 공간 클러스터링에 대해 설명하고 작동 방식을 설명할 수 있습니다.
- DBSCAN은 사용자가 제공한 밀도 값으로 클러스터를 생성하는 밀도 기반 공간 클러스터링 알고리즘입니다.
- DBSCAN은 데이터에서 모든 모양, 크기 또는 밀도의 클러스터를 검색할 수 있습니다.
- 이는 응집 기반 클러스터링과 밀도 기반 클러스터링의 조합입니다.
- 이 비디오에서는 DBSCAN이 사용자가 제공한 밀도 값으로 클러스터를 생성하는 밀도 기반 공간 클러스터링 알고리즘이라는 것을 배웠습니다.

### 한국어 Transcript

DBSCAN 및 HDBSCAN 클러스터링에 오신 것을 환영합니다. 이 비디오를 시청한 후에는 노이즈 클러스터링을 사용하는 애플리케이션의 밀도 기반 공간 클러스터링인 DBSCAN에 대해 설명하고 작동 방식을 설명할 수 있습니다. 또한 HDBSCAN, 즉 노이즈 클러터링이 있는 애플리케이션의 계층적 밀도 기반 공간 클러스터링에 대해 설명하고 작동 방식을 설명할 수 있습니다. DBSCAN은 사용자가 제공한 밀도 값으로 클러스터를 생성하는 밀도 기반 공간 클러스터링 알고리즘입니다. 밀도 값은 공간 중심 주위에 위치합니다.

중심 바로 주변 영역을 이웃이라고 하며, DBSCAN은 지정된 밀도를 가진 클러스터의 이웃을 정의하려고 시도합니다. DBSCAN은 데이터에서 모든 모양, 크기 또는 밀도의 클러스터를 검색할 수 있습니다. 또한 클러스터의 일부인 데이터 포인트와 노이즈 레이블이 지정되어야 하는 데이터 포인트를 구분할 수 있습니다. 밀도 기반 군집화는 잡음이나 이상치가 있는 데이터 집합으로 작업하거나 데이터 집합의 군집 수를 알 수 없는 경우에 특히 유용합니다. k-평균 및 계층적 클러스터링과 같은 중심 기반 클러스터링 알고리즘은 구형 또는 볼록 모양을 생성하며 이러한 패턴을 나타내는 데이터 세트에 적합합니다.

중심점 기반 군집화는 파란색 군집에 할당된 검은색 이상값과 같이 군집이 한 군집에 제대로 들어가지 않는 경우에도 모든 점을 클러스터에 할당합니다. 안타깝게도 실제 데이터는 그렇게 단순하지 않습니다. 실제 패턴은 임의의 모양, 모양 내 모양 및 노이즈를 가질 수 있습니다. 밀도 기반 클러스터링은 상대적으로 밀도가 높은 연결 영역을 식별하여 이러한 복잡성을 해결합니다. DBSCAN 알고리즘이 어떻게 작동하는지 살펴보겠습니다.

포인트로 구성된 데이터 세트가 주어지면 먼저 두 개의 파라미터, 즉 이웃에 원하는 최소 포인트 수 n과 각 이웃의 반경 (epsilon) 을 선택합니다. 다음으로 데이터 세트의 모든 점을 살펴보면서 다음 유형 중 하나로 레이블을 지정합니다. 중심점은 주변 또는 반경 엡실론 내에 자신을 포함하여 n개 이상의 점이 있는 경우 클러스터 내의 초점입니다. 경계 지점 (점이 중심점 주변 지역에 속하지만 중심점이 될 만큼 이웃이 충분하지 않은 경우), 모든 중심점 이웃과 격리되어 있는 경우 노이즈 지점입니다. 클러스터는 인접 요소를 포함하여 코어 포인트에서 성장합니다.

경계 지점이 관련 코어 포인트와 동일한 클러스터에 할당되지만 조밀하게 연결되지는 않습니다. 여기에서 DBSCAN이 점에 레이블을 지정하는 방법을 시뮬레이션할 수 있습니다. 데이터는 scikit-learn의 하프문 함수로 생성된 두 개의 잡음이 있는 점 집합으로 구성됩니다. 코어 포인트는 파란색으로 표시되며 각 포인트는 엡실론 반경을 가진 이웃 4개와 동일한 n개 이상을 가집니다. 주황색으로 표시된 경계 지점은 가장 가까운 중심점의 근처에 속하지만 중심점으로 인정하기에 주변 지점이 충분하지 않은 점입니다.

경계 지점은 핵심 지역의 외곽에 있습니다. DBSCAN은 이터레이션이 아닙니다. 레이블이 지정된 후에는 업데이트하지 않고도 클러스터를 한 번에 확장할 수 있습니다. 할당되지 않은 나머지 포인트는 노이즈로 간주됩니다. 다음은 DBSCAN이 점을 클러스터링하는 데 사용하는 단계를 시뮬레이션한 것입니다.

데이터는 scikit-learn의 하프문 함수로 생성된 두 개의 잡음이 있는 점 집합으로 구성됩니다. 플롯 시퀀스는 클러스터가 확장되는 방식과 각 단계에서 노이즈 포인트에 레이블이 지정되지 않은 상태를 보여줍니다. 처음에는 모든 점에 검은색 레이블이 지정되고 특이치 또는 잡음으로 처리됩니다. 2단계에서 알고리즘은 반달 중 하나의 대부분을 파란색 점으로 식별하고 나머지 점을 가능한 노이즈로 간주합니다. 3단계에서 DBSCAN은 나머지 반달 대부분을 주황색 점으로 표시하고 남은 검은색 점 몇 개는 잠재적 노이즈로 표시합니다.

마지막으로 DBSCAN은 녹색으로 표시된 세 번째 클러스터를 찾습니다. 이 클러스터는 둘러싸고 있는 이웃에서 볼 수 있듯이 이 클러스터와는 완전히 분리되어 있습니다. DBSCAN은 데이터를 클러스터링하고 외부의 잡음이 있는 지점을 식별하는 작업을 훌륭하게 수행했습니다. HDBSCAN은 파라미터를 설정할 필요가 없는 DBSCAN의 변형이므로 원본보다 훨씬 유연합니다. 또한 HDBSCAN은 노이즈와 이상값에 덜 민감합니다.

즉, 적당한 반경 범위 내에서 주변 크기를 조정해도 클러스터가 크게 변하지 않는 기능을 말합니다. HDBSCAN은 클러스터 안정성을 측정하여 국부적으로 최적의 주변 반경을 찾습니다. 그 결과 더 강력하고 의미 있는 클러스터가 생성됩니다. HDBSCAN의 기술 구현 세부 사항은 다소 복잡합니다. 이는 응집 기반 클러스터링과 밀도 기반 클러스터링의 조합입니다.

HDBSCAN은 먼저 각 점을 고유한 군집 (사실상 노이즈) 으로 식별한 다음 밀도 임계값을 점진적으로 낮춤으로써 클러스터를 계층 구조로 점진적으로 통합합니다. 이러한 방식으로 계층적 트리가 구성되고, 이는 다양한 밀도 수준에서 가장 안정적인 클러스터만 유지되는 압축된 트리로 단순화됩니다. 다음은 캐나다 박물관의 위도와 경도를 포함하는 캐나다 통계청의 일부 데이터 세트에 대해 DBSCAN을 실행한 결과입니다. 선택된 DBSCAN 매개변수는 이웃 반경이 0.15로 스케일링된 단위가 3인 이웃의 최소 샘플이었습니다. DBSCAN은 인간의 눈에 적합한 것으로 보이는 약 10개의 클러스터를 발견했습니다.

그러나 인구 밀도는 빨간색 타원 내에서 훨씬 더 높으며 대부분의 지역이 단일 클러스터로 묶여 있습니다. HDBSCAN은 포인트의 로컬 밀도 변화를 반영하여 이웃 크기를 적응적으로 조정한다는 점에서 DBSCAN보다 유리합니다. 여기서 HDBSCAN은 최소 샘플 수가 10이고 최소 클러스터 크기가 3포인트로 실행되었습니다. HDBSCAN 결과가 어떻게 DBSCAN보다 더 많은 별개의 클러스터를 식별했는지 확인하십시오. 흥미롭게도 HDBSCAN은 다양한 밀도의 더 큰 연결 영역을 찾는 것 외에도 곡선에 있는 연결된 점 집합을 추적하고 구별했습니다.

결과는 더 일관되고 덜 시끄럽게 보입니다. 주목할 만한 것은 동쪽의 비교적 밀도가 높은 지역에서 제공되는 세부 사항의 수준입니다. DBSCAN은 여기서 HDBSCAN이 수행한 것과 같은 적응형 세부 정보를 제공하지 않았습니다. 파라미터를 조정하면 이상값 완화, 세부 수준 캡처, 발견된 전체 클러스터 수 제어 사이에서 균형을 맞출 수 있습니다. 이 비디오에서는 DBSCAN이 사용자가 제공한 밀도 값으로 클러스터를 생성하는 밀도 기반 공간 클러스터링 알고리즘이라는 것을 배웠습니다.

밀도 기반 클러스터링은 상대적으로 밀도가 높은 영역을 식별하므로 자연 패턴에 적합합니다. DBSCAN은 이터레이션이 아닙니다. HDBSCAN은 파라미터를 설정할 필요가 없고 클러스터 안정성을 사용하는 DBSCAN의 변형입니다. 클러스터 안정성은 멀리 떨어진 임계값 범위에서 클러스터가 지속되는 것으로 정의됩니다.

## 예시
- 이 강의는 개념 설명 중심이며 Transcript에서 독립된 예시를 확인하기 어렵다.

## 요약
- DBSCAN은 데이터에서 모든 모양, 크기 또는 밀도의 클러스터를 검색할 수 있습니다.
- 이는 응집 기반 클러스터링과 밀도 기반 클러스터링의 조합입니다.
- 이 비디오에서는 DBSCAN이 사용자가 제공한 밀도 값으로 클러스터를 생성하는 밀도 기반 공간 클러스터링 알고리즘이라는 것을 배웠습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to DBSCAN and HDBSCAN Clustering. After watching this video, you will be able to describe DBSCAN, or density-based spatial clustering of applications with noise clustering, and explain how it works. You will also be able to describe HDBSCAN, or hierarchical density-based spatial clustering of applications with noise cluttering, and explain how it works. DBSCAN is a density-based spatial clustering algorithm that creates clusters with a density value provided by the user. The density value is positioned around a spatial centroid.

The area immediately around the centroid is referred to as a neighborhood, and DBSCAN attempts to define neighborhoods of clusters with a specified density. DBSCAN can discover clusters of any shape, size, or density in your data. It can also distinguish between data points that are part of a cluster and those that should be labeled as noise. Density-based clustering is especially useful when working with data sets with noise or outliers, or when the number of clusters in the data set is unknown. Centroid-based clustering algorithms, such as k-means and hierarchical clustering, produce spherical or convex shapes, and can work well for data sets that exhibit such patterns.

Centroid-based clustering assigns every point to a cluster, even when it doesn't properly fit into one, like the black outlier assigned to the blue cluster. Unfortunately, real-world data is rarely that simple. Real patterns can have arbitrary shapes, shapes within shapes, and noise. Density-based clustering addresses these complexities by identifying connected regions of relatively high density. Let's look at how the DBSCAN algorithm works.

Given a data set of points, you first select two parameters, a desired minimum number of points, n, you want in a neighborhood, and the radius, epsilon, of each neighborhood. Next, working through every point in the data set, you label it as one of the following types. A core point, which is a focal point within a cluster, if it has at least n points, including itself, within its neighborhood or radius epsilon. A border point, if the point falls within the neighborhood of a core point, but doesn't have enough neighbors to be a core point, or a noise point, if it is isolated from all core point neighborhoods. Clusters are grown from core points by including their neighbors.

Although border points are assigned to the same cluster as their associated core points, they are not as densely connected. Here, you can see a simulation of how DBSCAN labels points. The data consists of two noisy sets of points created with the half-moons function from scikit-learn. Consider the following. Core points are labeled in blue, and each has at least n equals 4 neighbors with its epsilon radius.

Border points, labeled in orange, are points that belong to the neighborhood of their nearest core point, but don't have enough nearby points to qualify as core points. Border points exist in the outer reaches of the core neighborhoods. DBSCAN is not iterative. It grows clusters in one pass without updating them once they are labeled. Any unassigned points remaining are regarded as noise.

Illustrated here is a simulation of the steps DBSCAN uses to cluster points. The data consists of two noisy sets of points created with the half-moons function from scikit-learn. The sequence of plots shows how the clusters expand and how noise points are left unlabeled at each step. At first, all points are labeled in black and treated as outliers or noise. In step 2, the algorithm identifies most of one of the half-moons as the blue points, treating the remaining points as possible noise.

In step 3, DBSCAN labels most of the other half-moons as the orange points, with a few black points left over as potential noise. Finally, DBSCAN finds a third cluster in green, which is quite isolated from it, as you can see from the enveloping neighborhood. DBSCAN has done a good job of clustering the data and identifying the outlying noisy points. HDBSCAN is a variant of DBSCAN that doesn't require any parameters to be set, making it even more flexible than the original. HDBSCAN is also less sensitive to noise and outliers.

It uses cluster stability, which refers to a cluster's ability to not change much when the neighboring size is adjusted within a reasonable range of radii. HDBSCAN measures cluster stability to find locally optimal neighborhood radii. This results in more robust and meaningful clusters. The technical implementation details of HDBSCAN are somewhat complex. It is a combination of agglomerative and density-based clustering.

HDBSCAN starts by identifying each point as its own cluster, effectively noise, then progressively agglomerates clusters into a hierarchy by incrementally lowering the density threshold. In this way, a hierarchical tree is constructed, which gets simplified into a condensed tree where only the most stable clusters across different density levels are kept. Illustrated here is the result of running DBSCAN on a portion of the data set from Statistics Canada that contains the latitudes and longitudes of Canadian museums. The DBSCAN parameters chosen were minimum samples in a neighborhood equals 3, with a neighborhood radius of 0.15 scaled units. DBSCAN found around 10 clusters that seem appropriate to the human eye.

However, the population density is much higher within the red ellipse, and most of the region has been lumped into a single cluster. HDBSCAN has an advantage over DBSCAN in that it adaptively adjusts the neighborhood size to reflect changes in the local densities of the points. Here, HDBSCAN was run with a minimum number of samples equals 10, and a minimum cluster size of 3 points. Notice how the HDBSCAN result identified more distinct clusters than DBSCAN. Interestingly, in addition to finding larger connected regions of varying density, HDBSCAN tracked and distinguished connected sets of points that lie on curves.

The result looks more coherent and less noisy. Of note is the level of detail provided in the relatively dense region in the east. DBSCAN didn't provide the adaptive detail that HDBSCAN did here. By tuning the parameters, you can strike a balance between mitigating outliers, capturing the level of detail, and controlling the overall number of clusters found. In this video, you learned that DBSCAN is a density-based spatial clustering algorithm that creates clusters with a density value provided by the user.

Density-based clustering works well with natural patterns by identifying regions of relatively high density. DBSCAN is not iterative. HDBSCAN is a variant of DBSCAN that doesn't require any parameters to be set and uses cluster stability. Cluster stability is defined as the persistence of a cluster over a range of distant thresholds.

</details>
