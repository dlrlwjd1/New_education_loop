# Evaluating Unsupervised Learning Models: Heuristics and Techniques

## 개요
- 강좌: Machine Learning with Python
- 모듈: Evaluating and Validating Machine Learning Models
- 재생 시간: 7분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/fSz0A/evaluating-unsupervised-learning-models-heuristics-and-techniques)
- 이 비디오를 시청한 후에는 비지도 학습 모델의 평가와 패턴 및 모델의 품질 평가에서의 역할에 대해 설명할 수 있습니다.
- 또한 다양한 유형의 휴리스틱과 이들이 클러스터 품질을 평가하는 방법을 구분할 수 있습니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 비지도 학습 모델의 평가와 패턴 및 모델의 품질 평가에서의 역할에 대해 설명할 수 있습니다.
- 또한 다양한 유형의 휴리스틱과 이들이 클러스터 품질을 평가하는 방법을 구분할 수 있습니다.
- 그런 다음 다양한 내부 및 외부 클러스터링 평가 지표를 분석하여 클러스터링 결과를 평가합니다.
- 내부 클러스터링 평가 메트릭은 입력 데이터를 기반으로 클러스터링 품질을 평가합니다.
- 이 비디오에서는 비지도 학습 모델의 평가와 패턴 및 모델의 품질 평가에서의 역할을 설명하는 방법을 배웠습니다.
- 실루엣 점수, Davies-Bouldin 지수, 관성과 같은 다양한 내부 클러스터링 평가 지표를 분석합니다.

### 한국어 Transcript

비지도 학습 모델 평가: 휴리스틱과 기법에 관한 이 비디오에 오신 것을 환영합니다. 이 비디오를 시청한 후에는 비지도 학습 모델의 평가와 패턴 및 모델의 품질 평가에서의 역할에 대해 설명할 수 있습니다. 또한 다양한 유형의 휴리스틱과 이들이 클러스터 품질을 평가하는 방법을 구분할 수 있습니다. 그런 다음 다양한 내부 및 외부 클러스터링 평가 지표를 분석하여 클러스터링 결과를 평가합니다. 마지막으로 차원 축소를 평가하여 축소된 데이터가 중요한 정보를 얼마나 잘 보존하는지 측정해 보겠습니다.

학습에 대한 사전 정의된 레이블이나 근거 자료가 없기 때문에 비지도 학습 모델을 평가하는 것은 지도 모델에 비해 독특한 문제를 야기합니다. 클러스터링 및 차원 축소와 같은 비지도 기법은 데이터에서 숨겨진 패턴과 구조를 발견하는 것을 목표로 합니다. 따라서 평가 방법은 이러한 패턴의 품질과 모델이 유사한 데이터 포인트를 얼마나 효과적으로 그룹화하는지 평가합니다. 지도되지 않은 학습 결과는 주관적인 경우가 많으므로 일관성을 위해 신중한 평가가 필요합니다. 안정성은 모델 신뢰성을 평가하는 데 매우 중요하며, 모델이 다양한 데이터 하위 집합 또는 섭동 전반에서 유사하게 작동하도록 합니다.

예를 들어, 안정적인 클러스터링 모델은 데이터셋이 변경되더라도 유사한 클러스터를 생성합니다. 비지도 학습 모델을 평가하는 데 있어 모든 상황에 맞는 단일 접근 방식은 없습니다. 여러 방법을 조합하는 것이 필수적입니다. 효과적인 평가에는 학습된 패턴의 품질을 평가하기 위해 휴리스틱, 분야 전문 지식, 메트릭, 실측 정보 비교 및 시각화 도구가 결합되는 경우가 많습니다. 클러스터링의 목표는 유사한 데이터 요소를 클러스터로 그룹화하는 것입니다.

비지도 학습에는 사전 정의된 레이블이 없기 때문에 입력 데이터에 의존하는 내부 평가 메트릭을 비롯한 다양한 휴리스틱이 클러스터 품질을 평가하는 데 사용됩니다. 외부 평가 지표: 가능한 경우 지상 실측 라벨을 사용합니다. 일반화 가능성 또는 안정성 평가, 데이터 변형 전반의 클러스터 일관성 평가스캐터 차트와 같은 클러스터링 결과를 시각화하기 위한 차원 축소 기법. 클러스터 지원 학습, 지도 학습 평가를 통한 클러스터 개선. 또한 도메인 전문 지식은 피드백을 제공하고 클러스터링 결과를 해석하는 데 매우 중요합니다.

내부 클러스터링 평가 메트릭은 입력 데이터를 기반으로 클러스터링 품질을 평가합니다. 다음은 일반적으로 사용되는 몇 가지 지표입니다. 실루엣 점수는 각 군집 내의 응집력을 다른 군집과의 분리도와 비교합니다 ( 음수 1에서 1까지의 범위). 값이 높을수록 군집이 더 잘 정의되었음을 나타냅니다. Davies-Bouldin 지수는 군집의 압축도와 가장 가까운 군집과의 간격의 평균 비율을 측정하며, 값이 낮을수록 군집이 더 뚜렷하고 조밀하다는 것을 나타냅니다.

k-평균 군집화의 이너시아는 각 군집 내 분산의 합을 계산합니다. 값이 낮을수록 군집이 더 작다는 것을 의미하지만, 군집 수를 늘리면 분산이 줄어들어 장단점이 생깁니다. 이는 클러스터가 뚜렷하게 분리되고 밀도가 높은 시뮬레이션된 블롭에 k-평균을 적용하여 얻은 클러스터링 결과입니다. 오른쪽의 실루엣 플롯은 식별된 클러스터를 다양한 색상으로 보여줍니다. 각 막대는 가장 가까운 인접 군집까지의 거리와 동일한 군집 내 다른 점까지의 평균 거리를 결합하여 각 군집 내 점의 실루엣 계수를 나타냅니다.

수직의 빨간색 파선은 평균 실루엣 점수가 0.84로 높음을 나타냅니다. 데이비스-볼딘 지수는 0.22로 낮습니다. 두 지표 모두 우수한 클러스터링 품질을 나타냅니다. 이는 클러스터가 뚜렷하지만 다소 분산되어 있는 시뮬레이션된 블롭의 k-평균을 기반으로 한 클러스터링 결과입니다. 실루엣 플롯은 클러스터가 분산됨에 따라 계수가 급격히 감소하는 것을 보여줍니다.

일부 음수 값은 클러스터에 잘못 할당될 가능성이 있음을 나타냅니다. 실루엣 점수는 0.58로 적당히 높습니다. 그리고 Davies-Bouldin 지수는 0.6으로 둘 다 합리적인 클러스터링 결과를 나타냅니다. 외부 클러스터링 메트릭은 레이블이 지정된 데이터 또는 실측 데이터를 사용하여 클러스터 레이블을 알려진 클래스와 비교하여 클러스터링 품질을 평가했습니다. 조정된 랜드 지수는 실제 레이블과 클러스터링 결과 간의 유사도를 음수 1에서 1까지의 범위로 측정합니다.

점수 1은 완벽한 정렬을 나타내고, 0점은 무작위 클러스터링을 나타내며, 음수 값은 무작위 성능보다 나쁘다는 것을 나타냅니다. 정규화된 상호 정보는 예측된 클러스터 할당과 실제 레이블 간의 공유 정보를 0에서 1까지의 척도로 정량화합니다. 여기서 1은 완전한 일치를 나타내고 0은 공유 정보가 없음을 나타냅니다. Fowlkes-Mallows 지수는 클러스터링 및 레이블 할당을 기반으로 한 정밀도 및 재현율의 기하 평균이며, 점수가 높을수록 클러스터링 성능이 우수함을 나타냅니다. PCA, T-SNE 또는 UMAP과 같은 차원 축소 기법을 사용할 때는 축소된 데이터가 중요한 정보를 얼마나 잘 보존하는지 평가하는 것이 중요합니다.

PCA의 설명 분산 비율은 주성분으로 캡처한 분산을 측정하므로 허용 가능한 누적 설명 분산에 필요한 편차를 결정하는 데 도움이 됩니다. 재구성 오류는 축소된 표현으로부터 원본 데이터를 얼마나 정확하게 재구성할 수 있는지를 평가합니다. 값이 낮을수록 정보 보존 성능이 향상됩니다. 이웃 보존은 특히 T-SNE 및 UMAP과 같은 다양한 학습 알고리즘의 경우 고차원 공간의 데이터 포인트 간의 관계가 낮은 차원에서 얼마나 잘 유지되는지 평가합니다. 이 스캐터 차트는 붓꽃 데이터 집합의 PCA 분석에서 나온 처음 두 가지 주요 구성요소인 PC1과 PC2를 종별로 색으로 구분한 점 (세토사, 버시컬러 또는 버지니카) 을 보여줍니다.

PC1이 우세하며 수직선으로 표시된 것처럼 클러스터를 거의 구분합니다. 아이리스 데이터셋에 네 가지 기능이 있기 때문에 클래스를 직접 시각화하기는 어렵습니다. PCA를 사용하면 두 차원만 사용하여 간접 시각화할 수 있습니다. 이 막대 그림은 각 주성분에 대해 설명된 분산을 내림차순으로 보여줍니다. 빨간색 파선은 누적 설명 분산을 나타냅니다.

처음 두 성분이 분산의 대부분을 설명하지만, 추가 성분은 분산을 많이 추가하지 않습니다. 효과적인 모델 평가를 위해서는 패턴을 평가하기 위한 다양한 메트릭과 도메인 전문 지식이 필요합니다. 주관적 분석 및 스캐터 플롯, 덴드로그램과 같은 시각적 도구와 PCA, T-SNE, UMAP과 같은 투영 방법은 비지도 학습 결과를 해석하는 데 필수적입니다. 이 비디오에서는 비지도 학습 모델의 평가와 패턴 및 모델의 품질 평가에서의 역할을 설명하는 방법을 배웠습니다. 비지도 학습 결과를 설명하고 안정성을 통해 모델의 일관된 성능을 보장하는 방법을 설명합니다.

다양한 유형의 휴리스틱과 이들이 클러스터 품질을 평가하는 방법을 구분합니다. 실루엣 점수, Davies-Bouldin 지수, 관성과 같은 다양한 내부 클러스터링 평가 지표를 분석합니다. 시뮬레이션된 블롭에 K-평균을 적용하여 내부 클러스터링을 평가합니다. 조정된 랜드 지수, 정규화된 상호 정보, Fowlkes-Mallows 지수를 사용하여 외부 클러스터링 평가 메트릭을 분석합니다. 편차 비율, 재구성 오류 및 주변 보존 설명을 사용하여 차원 감소를 평가합니다.

## 예시
- 예를 들어, 안정적인 클러스터링 모델은 데이터셋이 변경되더라도 유사한 클러스터를 생성합니다.

## 요약
- 내부 클러스터링 평가 메트릭은 입력 데이터를 기반으로 클러스터링 품질을 평가합니다.
- 이 비디오에서는 비지도 학습 모델의 평가와 패턴 및 모델의 품질 평가에서의 역할을 설명하는 방법을 배웠습니다.
- 실루엣 점수, Davies-Bouldin 지수, 관성과 같은 다양한 내부 클러스터링 평가 지표를 분석합니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to this video on Evaluating Unsupervised Learning Models: Heuristics and Techniques. After watching this video, you will be able to explain the evaluation of unsupervised learning models and their role in assessing the quality of patterns and models. You will also be able to differentiate between the different types of heuristics and how they evaluate cluster quality. You will then analyze different internal and external clustering evaluation metrics to assess clustering results. Finally, you will evaluate dimensionality reduction to measure how well-reduced data retains important information.

Evaluating unsupervised learning models poses unique challenges compared to supervised models, as there are no predefined labels or ground truths for training. Unsupervised techniques, like clustering and dimensionality reduction, aim to discover hidden patterns and structures in data. Therefore, evaluation methods assess the quality of these patterns and how effectively the model groups similar data points. Unsupervised learning results are often subjective, requiring careful evaluation for consistency. Stability is crucial in assessing model reliability, ensuring the model performs similarly across varied data subsets or perturbations.

For example, a stable clustering model produces similar clusters despite changes in the dataset. There is no one-size-fits-all approach to evaluating unsupervised learning models. A combination of methods is essential. Effective evaluation often combines heuristics, domain expertise, metrics, ground truth comparisons, and visualization tools to assess the quality of learned patterns. In clustering, the goal is to group similar data points into clusters.

Unsupervised learning lacks predefined labels, so various heuristics are used to evaluate cluster quality, including: Internal evaluation metrics, which rely on input data. External evaluation metrics, which use ground truth labels when available. Generalizability or stability evaluation, assessing cluster consistency across data variations. Dimensionality reduction techniques for visualizing clustering outcomes, such as scatter plots. Cluster-assisted learning, refining clusters through supervised learning evaluations.

Domain expertise is also invaluable for providing feedback and interpreting clustering results. Internal clustering evaluation metrics assess clustering quality based on the input data. Here are some commonly used metrics. Silhouette score compares cohesion within each cluster to separation from others, ranging from -1 to 1, with higher values indicating better-defined clusters. The Davies-Bouldin index measures the average ratio of a cluster's compactness to its separation from the nearest cluster, with lower values indicating more distinct and compact clusters.

Inertia in k-means clustering calculates the sum of variances within each cluster. Lower values suggest more compact clusters, but increasing the number of clusters reduces variance, creating a tradeoff. These are clustering results from applying k-means to simulated blobs, where the clusters are distinctly separated and dense. The silhouette plot on the right shows the identified clusters in different colors. Each bar represents the silhouette coefficients for points within each cluster, combining the distance to the nearest neighboring cluster and the average distance to other points in the same cluster.

The vertical red dashed line indicates a high average silhouette score of 0.84. The Davies-Bouldin index is low at 0.22. Both metrics suggest excellent clustering quality. These are clustering results from k-means on simulated blobs, where the clusters are distinct but somewhat dispersed. The silhouette plot shows coefficients decreasing rapidly as clusters spread out, with a few negative values indicating potential misassignments to clusters.

The silhouette score is moderately high at 0.58. And the Davies-Bouldin index is 0.6, both suggesting reasonable clustering results. External clustering metrics used labeled or ground-truth data to evaluate clustering quality by comparing cluster labels with known classes. Adjusted Rand index measures the similarity between true labels and clustering outcomes, ranging from -1 to 1. A score of 1 indicates perfect alignment, 0 indicates random clustering, and negative values suggest worse than random performance.

Normalized mutual information quantifies shared information in between predicted cluster assignments and true labels on a scale from 0 to 1, where 1 indicates perfect agreement and 0 indicates no shared information. Fowlkes-Mallows index is the geometric mean of precision and recall based on clustering and label assignments, with a higher score indicating better clustering performance. When using dimensionality reduction techniques like PCA, t-SNE, or UMAP, it's crucial to evaluate how well the reduced data retains important information. Explained variance ratio in PCA measures the variance captured by principal components, helping determine how many are needed for acceptable cumulative explained variance. Reconstruction error assesses how accurately the original data can be reconstructed from the reduced representation.

Lower values indicate better information preservation. Neighborhood preservation evaluates how well relationships between data points in high-dimensional space are maintained in lower dimensions, especially for manifold learning algorithms like t-SNE and UMAP. This scatter plot shows the first two principal components, PC1 and PC2, from the PCA analysis of the iris flower datasets, with points color-coded by species: setosa, versicolor, or virginica. PC1 is dominant, nearly separating the clusters as indicated by vertical lines. With four features in the iris dataset, direct visualization of classes is challenging.

PCA allows for indirect visualization using just two dimensions. This bar plot shows the explained variance for each principal component in descending order. The red dashed line indicates the cumulative explained variance. The first two components account for most of the variance, while additional components don't add much. Effective model evaluation requires diverse metrics and domain expertise to assess patterns.

Subjective analysis and visual tools, like scatter plots, dendrograms, and projection methods such as PCA, t-SNE, and UMAP are essential for interpreting unsupervised learning results. In this video, you learned to explain the evaluation of unsupervised learning models and their role in assessing the quality of patterns and models. Explain unsupervised learning results and how stability ensures that models perform consistently. Differentiate between the different types of heuristics and how they evaluate cluster quality. Analyze different internal clustering evaluation metrics, such as silhouette score, Davies-Bouldin index, and inertia.

Evaluate internal clustering by applying K-means to simulated blobs. Analyze external clustering evaluation metrics with the adjusted Rand index, normalized mutual information, and Fowlkes-Mallows index. Evaluate dimensionality reduction with explained variance ratio, reconstruction error, and neighborhood preservation.

</details>
