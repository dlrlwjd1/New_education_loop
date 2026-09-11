# Clustering, Dimension Reduction, and Feature Engineering

## 개요
- 강좌: Machine Learning with Python
- 모듈:  Building Unsupervised Learning Models
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/fqEdO/clustering-dimension-reduction-and-feature-engineering)
- 이 비디오를 시청한 후에는 클러스터링, 차원 축소 및 기능 엔지니어링과 이러한 기술을 함께 사용하여 모델 성능을 향상시키는 방법을 설명할 수 있습니다.
- 또한 차원 축소와 데이터 구조를 단순화하고 결과를 개선하는 데 미치는 역할에 대해서도 배우게 됩니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 클러스터링, 차원 축소 및 기능 엔지니어링과 이러한 기술을 함께 사용하여 모델 성능을 향상시키는 방법을 설명할 수 있습니다.
- 또한 차원 축소와 데이터 구조를 단순화하고 결과를 개선하는 데 미치는 역할에 대해서도 배우게 됩니다.
- 클러스터링, 차원 축소 및 특징 엔지니어링은 기계 학습과 데이터 과학의 상호 보완적인 기술입니다.
- 그러나 고급 차원 축소 기술을 사용하면 이러한 클러스터링 결과를 2차원 또는 3차원으로 투영하여 시각적 해석을 크게 개선할 수 있습니다.
- 이 비디오에서는 클러스터링, 차원 축소, 특징 엔지니어링에 대해 설명하고 이들이 어떻게 잘 작동하여 모델 성능, 품질 및 해석 가능성을 개선하는지 배웠습니다.
- 차원 축소를 설명하고 클러스터링, 데이터 구조 단순화 및 결과 개선을 위한 전처리 단계로 차원 축소를 사용하는 방법을 설명합니다.

### 한국어 Transcript

클러스터링, 차원 축소 및 기능 엔지니어링에 대한 이 비디오에 오신 것을 환영합니다. 이 비디오를 시청한 후에는 클러스터링, 차원 축소 및 기능 엔지니어링과 이러한 기술을 함께 사용하여 모델 성능을 향상시키는 방법을 설명할 수 있습니다. 또한 차원 축소와 데이터 구조를 단순화하고 결과를 개선하는 데 미치는 역할에 대해서도 배우게 됩니다. 또한 얼굴 인식에 차원 축소를 적용하는 방법을 분석하고 클러스터링을 통해 특징 선택을 용이하게 할 수 있는 방법을 살펴봅니다. 클러스터링, 차원 축소 및 특징 엔지니어링은 기계 학습과 데이터 과학의 상호 보완적인 기술입니다.

이들은 서로 잘 연동되어 모델 성능, 품질 및 해석 가능성을 개선합니다. 클러스터링은 특징 선택 및 생성을 지원하는 동시에 차원 축소를 지원하여 계산 효율성과 확장성을 향상시킵니다. 차원 축소는 고차원 클러스터링의 시각화를 단순화하여 기능 엔지니어링을 지원하고 모델 품질을 개선합니다. 또한 데이터 모델에 필요한 기능의 수도 줄어듭니다. 차원 축소는 일반적으로 클러스터링, 데이터 구조 단순화 및 결과 개선을 위한 전처리 단계로 사용됩니다.

고차원 데이터는 k-mean 및 DBSCAN과 같은 거리 기반 클러스터링 알고리즘에 문제를 야기합니다. 차원이 증가하면 볼륨이 빠르게 확장되어 데이터 포인트가 희소해지고 유사성이 떨어집니다. 이로 인해 클러스터 규모가 작아져 격차를 메우기 위해 더 많은 데이터가 필요합니다. 클러스터링 알고리즘을 적용하기 전에 차원을 줄이기 위해 PCA, T-SNE 및 UMAP과 같은 기법을 사용하여 효율성을 높입니다. 이 예제에서는 감독된 얼굴 인식을 위한 입력 기능으로 고유면을 사용합니다.

PCA는 레이블이 지정되지 않은 얼굴 데이터셋에서 수행되어 총 966개의 얼굴에서 상위 150개의 고유 얼굴을 추출합니다. 이 150개의 고유면은 얼굴 데이터셋에 의해 정의된 특징 공간의 직교 기준을 형성합니다. 그런 다음 입력 데이터를 이 고유면 기반으로 투영하고 SMV를 훈련하여 얼굴을 예측합니다. 차원 축소 기법은 계산 부하를 최소화하면서 얼굴을 식별하는 주요 기능을 보존합니다. 얼굴 인식 작업은 이 이미지에 표시된 것처럼 12개의 얼굴을 정확하게 예측합니다.

이 차트는 데이터셋의 모델 품질에 대한 정량적 평가를 보여줍니다. 3차원 이상의 특징 공간에서 작업할 때는 클러스터링 결과를 직접 시각화할 수 없습니다. 그러나 고급 차원 축소 기술을 사용하면 이러한 클러스터링 결과를 2차원 또는 3차원으로 투영하여 시각적 해석을 크게 개선할 수 있습니다. PCA, T-SNE 및 UMAP과 같은 방법을 사용하면 고차원 클러스터를 2차원 또는 3차원으로 의미 있게 투영할 수 있습니다. 이를 통해 클러스터링 품질을 쉽게 시각화할 수 있는 스캐터 차트를 만들 수 있습니다.

데이터의 차원을 줄이면 클러스터 상호 운용성이 향상되어 고차원에서는 모호해질 수 있는 주요 패턴이나 관계를 쉽게 식별할 수 있습니다. 클러스터링 기법을 데이터 관찰 및 특징에 적용할 수 있습니다. 유사하거나 상관관계가 있는 특징을 클러스터링하여 중복 정보를 제공하는 집합을 식별할 수 있습니다. 이를 통해 각 클러스터에서 대표적인 특징을 선택하여 특징을 선택할 수 있으므로 중요한 정보를 보존하면서 전체 특징 수를 줄일 수 있습니다. 클러스터링은 기능 엔지니어링 결정에 도움이 될 수 있습니다.

예를 들어 군집이 데이터의 서로 다른 부분군을 나타내는 경우 특징 간의 특정 상호 작용이나 특정 변환이 예측 모델링에 도움이 될 수 있습니다. 다음은 k-평균과 같은 클러스터링 방법을 사용하여 특징을 군집화하는 간단한 시뮬레이션입니다. 여기에 표시된 다섯 가지 특징 각각은 서로 다른 세 가지 평균 값 1, 5, 10과 분산이 1인 랜덤 정규 분포로 생성되었습니다. 단, 분산이 2인 특징 번호 4는 예외입니다. 시각적으로 볼 수 있듯이 특징 1~3은 통계적으로 매우 유사하며 평균과 분산이 동일합니다.

실제로 k가 3인 상태에서 데이터 값이 아닌 특징에 k-평균을 실행하면 특징이 클러스터링됩니다. 클러스터 1에는 중복 기능이 포함되어 있으므로 이 데이터셋으로 모델링을 수행하려는 경우 그 중 하나만 선택하는 것이 좋습니다. 다음은 기능 엔지니어링의 일부인 기능 선택을 구현하는 예입니다. 이 비디오에서는 클러스터링, 차원 축소, 특징 엔지니어링에 대해 설명하고 이들이 어떻게 잘 작동하여 모델 성능, 품질 및 해석 가능성을 개선하는지 배웠습니다. 차원 축소를 설명하고 클러스터링, 데이터 구조 단순화 및 결과 개선을 위한 전처리 단계로 차원 축소를 사용하는 방법을 설명합니다.

고유면을 입력 기능으로 사용하여 차원 축소가 얼굴 인식에 어떻게 사용되는지 분석합니다. 특징 선택에 클러스터링을 사용하여 중복 정보를 제공하는 세트를 식별하는 방법을 분석합니다. 마지막으로 k-평균을 사용하여 특징 선택을 분석하여 특징을 클러스터링합니다.

## 예시
- 예를 들어 군집이 데이터의 서로 다른 부분군을 나타내는 경우 특징 간의 특정 상호 작용이나 특정 변환이 예측 모델링에 도움이 될 수 있습니다.

## 요약
- 그러나 고급 차원 축소 기술을 사용하면 이러한 클러스터링 결과를 2차원 또는 3차원으로 투영하여 시각적 해석을 크게 개선할 수 있습니다.
- 이 비디오에서는 클러스터링, 차원 축소, 특징 엔지니어링에 대해 설명하고 이들이 어떻게 잘 작동하여 모델 성능, 품질 및 해석 가능성을 개선하는지 배웠습니다.
- 차원 축소를 설명하고 클러스터링, 데이터 구조 단순화 및 결과 개선을 위한 전처리 단계로 차원 축소를 사용하는 방법을 설명합니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to this video on Clustering, Dimension Reduction, and Feature Engineering. After watching this video, you will be able to explain clustering, dimension reduction, and feature engineering and how these techniques work together to enhance model performance. You will also learn about dimension reduction and its role in simplifying data structures and improving outcomes. Additionally, you'll analyze the application of dimension reduction in face recognition and explore how clustering can facilitate feature selection. Clustering, dimension reduction, and feature engineering are complementary techniques in machine learning and data science.

They work well together to improve model performance, quality, and interpretability. Clustering helps with feature selection and creation while supporting dimension reduction to enhance computational efficiency and scalability. Dimension reduction simplifies the visualization of high-dimensional clustering, aiding feature engineering and improving model quality. It also reduces the number of features required for a data model. Dimension reduction is commonly used as a pre-processing step for clustering, simplifying data structure and improving outcomes.

High-dimensional data poses challenges for distance-based clustering algorithms like k-means and DBSCAN. As dimensionality increases, volume expands rapidly, causing data points to become sparse and less similar. This leads to smaller clusters requiring more data to fill gaps. Techniques like PCA, t-SNE, and UMAP are employed to reduce dimensions before applying clustering algorithms, enhancing efficiency. This example uses eigenfaces as input features for supervised face recognition.

PCA is performed on an unlabeled face dataset, extracting the top 150 eigenfaces from a total of 966 faces. These 150 eigenfaces form an orthonormal basis for the feature space defined by the face dataset. The input data is then projected onto this eigenface basis, and an SVM is trained to predict faces. Dimensionality reduction techniques preserve the key features for identifying faces while minimizing computational load. The facial recognition task accurately predicts 12 faces, as illustrated in this image.

This chart illustrates the quantitative evaluation of the model's quality on the dataset. Clustering results cannot be visualized directly when working with feature spaces beyond three dimensions. However, advanced dimension reduction techniques can project these clustering outcomes into two or three dimensions, significantly improving visual interpretation. Methods such as PCA, t-SNE, and UMAP allow for meaningful projections of higher-dimensional clusters into two or three dimensions. This enables the creation of scatter plots that facilitate the visualization of clustering quality.

Reducing the dimensionality of data often enhances cluster interoperability, making it easier to identify key patterns or relationships that may be obscured in higher dimensions. Clustering techniques can be applied to data observations and features. By clustering similar or correlated features, you can identify sets that provide redundant information. This enables feature selection by choosing a representative feature from each cluster, reducing the total number of features while preserving valuable information. Clustering can help with feature engineering decisions.

For instance, if clusters indicate distinct subgroups in data, specific interactions between features or certain transformations could benefit predictive modeling. Here is a simple simulation using a clustering method like k-means to cluster features. Each of the five features plotted here was generated with a random normal distribution with three different mean values, 1, 5, and 10, and variances of 1, except for feature number 4, which has a variance of 2. As you can see visually, features 1 through 3 are statistically very similar, with the same mean and variance. Features 4 and 5 stand out.

Indeed, running k-means on the features, not the data values, with k equals 3 correctly, clustering the features. Cluster 1 contains redundant features, so if you were to do any modeling with this dataset, you would want to select only one of them. This is an example of implementing feature selection, part of feature engineering. You can also view it as dimension reduction. In this video, you learned to explain clustering, dimension reduction, and feature engineering and how they work well together to improve model performance, quality, and interpretability.

Explain dimension reduction and how it is used as a preprocessing step for clustering, simplifying data structure, and improving outcomes. Analyze how dimension reduction is used for face recognition with eigenfaces as input features. Analyze how clustering can be used for feature selection to identify sets that provide redundant information. And finally, analyze feature selection using k-means to cluster features.

</details>
