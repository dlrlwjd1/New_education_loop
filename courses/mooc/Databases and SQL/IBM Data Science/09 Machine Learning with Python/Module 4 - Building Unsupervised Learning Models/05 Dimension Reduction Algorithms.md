# Dimension Reduction Algorithms

## 개요
- 강좌: Machine Learning with Python
- 모듈:  Building Unsupervised Learning Models
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/BvU4c/dimension-reduction-algorithms)
- 또한 다양한 유형의 차원 축소 알고리즘, 즉 PCA, T-SNE 및 UMAP에 대해서도 설명할 수 있습니다.
- 차원 감소 알고리즘은 중요한 데이터 세트 정보를 희생하지 않으면서 데이터 세트 기능의 수를 줄입니다.

## 내용
### 핵심 내용
- 또한 다양한 유형의 차원 축소 알고리즘, 즉 PCA, T-SNE 및 UMAP에 대해서도 설명할 수 있습니다.
- 차원 감소 알고리즘은 중요한 데이터 세트 정보를 희생하지 않으면서 데이터 세트 기능의 수를 줄입니다.
- 주성분 분석 (PCA) 은 데이터셋 특징이 선형적으로 상관되어 있다고 가정하는 선형 차원 축소 알고리즘입니다.
- 이 비디오에서는 차원 축소 알고리즘이 중요한 데이터셋 정보를 희생하지 않으면서 데이터셋 기능의 수를 줄인다는 것을 배웠습니다.
- 차원 축소 알고리즘에는 PCA, T-SNE 및 UMAP과 같은 다양한 유형이 있습니다.
- PCA는 정보 손실을 최소화하면서 데이터를 단순화하고, 차원을 줄이고, 노이즈를 줄이는 선형 차원 축소 알고리즘입니다.

### 한국어 Transcript

차원 축소 알고리즘에 오신 것을 환영합니다. 이 비디오를 보고 나면 차원 축소 알고리즘이 무엇인지 설명할 수 있을 것입니다. 또한 다양한 유형의 차원 축소 알고리즘, 즉 PCA, T-SNE 및 UMAP에 대해서도 설명할 수 있습니다. 차원 감소 알고리즘은 중요한 데이터 세트 정보를 희생하지 않으면서 데이터 세트 기능의 수를 줄입니다. 고차원 데이터는 분석 및 시각화하기가 매우 어려운 경우가 많습니다.

차원 축소 알고리즘은 머신러닝 모델의 데이터세트를 단순화합니다. 주성분 분석 (PCA), T-분산 확률적 이웃 임베딩 (또는 T-SNE), 균일 매니폴드 근사 및 투영 (또는 UMAP) 알고리즘은 원래 차원을 변환하여 새로운 특징을 생성합니다. 주성분 분석 (PCA) 은 데이터셋 특징이 선형적으로 상관되어 있다고 가정하는 선형 차원 축소 알고리즘입니다. 정보 손실을 최소화하면서 데이터를 단순화하고, 차원을 줄이고, 노이즈를 줄입니다. PCA는 가능한 한 많은 분산을 유지하면서 특징을 주성분이라고 하는 상관관계가 없는 새로운 변수 집합으로 변환할 수 있습니다.

이러한 주구성요소는 서로 직교하며 특징 공간의 새 좌표계를 정의합니다. 주요 구성 요소는 중요도가 낮은 순서 또는 특징 공간 분산의 정도를 설명하는 순서로 구성됩니다. 처음 몇 개의 구성요소에는 대부분의 정보가 포함되는 경우가 많지만 나머지는 잡음을 나타내는 경향이 있습니다. T-분산 확률적 이웃 임베딩 (t-SNE) 은 고차원 데이터 포인트를 저차원 공간에 매핑합니다. 2차원 또는 3차원으로 시각화할 수 있는 복잡한 고차원 데이터에서 클러스터를 찾는 데 유용하며 이미지 및 텍스트와 같은 데이터에서도 잘 작동합니다.

T-SNE는 서로 가까운 점의 유사성을 보존하는 데 초점을 맞추고 먼 지점에서는 그렇지 않습니다. 유사성은 점 쌍 사이의 거리를 사용하여 근접도로 측정됩니다. 안타깝게도 T-SNE는 확장성이 떨어지고 하이퍼파라미터에 민감하기 때문에 조정이 어려울 수 있습니다. 유니폼 매니폴드 근사 및 투영 (UMAP) 은 T-SNE의 대안으로 자주 사용되는 비선형 차원 감소 알고리즘이기도 합니다. 데이터가 고차원 공간에 내장된 저차원 매니폴드에 있다고 가정하는 매니폴드 이론을 기반으로 데이터의 고차원 그래프 표현을 구성합니다.

그런 다음 UMAP은 원본 데이터의 점 간 관계를 가장 잘 보존하는 저차원 그래프 구조를 최적화합니다. UMAP은 T-SNE보다 확장성이 뛰어나며 데이터의 하위 구조 외에도 글로벌 구조를 보존하므로 T-SNE보다 클러스터링 성능이 더 높은 경우가 많습니다. Scikit-Learn의 MakeBlobs 함수를 사용하여 시뮬레이션된 데이터를 보여주는 3D 플롯을 생각해 보십시오. 플롯은 서로 다른 두 관점에서 동일한 3D 데이터를 보여줍니다. 노란색과 보라색 클러스터 사이에는 약간 겹치는 부분이 있지만 다른 두 얼룩은 모든 얼룩과 뚜렷하게 구분됩니다.

PCA, T-SNE, UMAP 차원 축소 알고리즘을 적용하여 이 데이터셋을 두 차원에 투영하고 결과를 비교해 보겠습니다. PCA는 얼룩을 효과적으로 분리했습니다. 블롭은 모두 정규 분포를 따르며, 이들 간의 유일한 차이점은 평균과 분산에 있습니다. 즉, 블롭이 선형적으로 상관되어 있으므로 PCA는 시뮬레이션된 데이터에서 잘 작동할 것으로 예상됩니다. T-SNE는 데이터를 네 개의 클러스터로 클러스터링했으며 대부분 얼룩을 잘 분리했습니다.

알고리즘은 보라색 군집 내에 녹색과 노란색 군집 중에서 레이블이 잘못 지정된 여러 점이 있는 매우 뚜렷한 4개의 클러스터를 식별했습니다. 두 클러스터가 약간 겹쳤기 때문에 이러한 혼합은 예상됩니다. UMAP이 블롭의 일부 블럽 포인트를 완벽하게 식별하지는 못했지만 클러스터 중 3개가 완전히 분리되지 않았음을 알 수 있습니다. 특히 노란색과 녹색 클러스터는 보라색 클러스터와 약간 겹칩니다. 노란색과 보라색 클러스터의 경우 3D 입력 데이터에서 처음부터 이 두 클러스터가 완전히 분리되지 않았기 때문입니다.

T-SNE가 4개의 매우 뚜렷한 클러스터를 식별했기 때문에 UMAP은 이 점에서 t-SNE보다 약간 더 나은 성능을 보였습니다. 이 비디오에서는 차원 축소 알고리즘이 중요한 데이터셋 정보를 희생하지 않으면서 데이터셋 기능의 수를 줄인다는 것을 배웠습니다. 차원 축소 알고리즘에는 PCA, T-SNE 및 UMAP과 같은 다양한 유형이 있습니다. PCA는 정보 손실을 최소화하면서 데이터를 단순화하고, 차원을 줄이고, 노이즈를 줄이는 선형 차원 축소 알고리즘입니다. t-SNE는 고차원 데이터 포인트를 저차원 공간에 매핑합니다.

UMAP은 데이터가 위치한 매니폴드를 근사화하여 데이터를 저차원으로 표현합니다.

## 예시
- 이 강의는 개념 설명 중심이며 Transcript에서 독립된 예시를 확인하기 어렵다.

## 요약
- 이 비디오에서는 차원 축소 알고리즘이 중요한 데이터셋 정보를 희생하지 않으면서 데이터셋 기능의 수를 줄인다는 것을 배웠습니다.
- 차원 축소 알고리즘에는 PCA, T-SNE 및 UMAP과 같은 다양한 유형이 있습니다.
- PCA는 정보 손실을 최소화하면서 데이터를 단순화하고, 차원을 줄이고, 노이즈를 줄이는 선형 차원 축소 알고리즘입니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Dimension Reduction Algorithms. After watching this video, you will be able to explain what Dimension Reduction Algorithms are. You will also be able to describe the different types of Dimension Reduction Algorithms, namely PCA, t-SNE, and UMAP. Dimensionality Reduction Algorithms reduce the number of dataset features without sacrificing critical dataset information. High-dimensional data is often very difficult to analyze and visualize.

Dimensionality Reduction Algorithms simplify the dataset for machine learning models. The Principal Component Analysis (or PCA), T-Distributed Stochastic Neighbor Embedding (or t-SNE), and Uniform Manifold Approximation and Projection (or UMAP) algorithms transform original dimensions to create new features. Principal Component Analysis, or PCA, is a linear dimensionality reduction algorithm that assumes dataset features are linearly correlated. It simplifies data, reduces dimensionality, and reduces noise while minimizing information loss. PCA can transform features into a new set of uncorrelated variables called principal components while retaining as much variance as possible.

These principal components are orthogonal to each other and define a new coordinate system for the feature space. The principal components are organized in decreasing order of importance, or how much of the feature space variance they explain. The first few components often contain most of the information, while the rest tend to represent noise. T-Distributed Stochastic Neighbor Embedding, or t-SNE, maps high-dimensional data points to a lower-dimensional space. It is good at finding clusters in complex, high-dimensional data that can be visualized in two or three dimensions and works well with data like images and text.

t-SNE focuses on preserving the similarity of points that are close together and less so on distant points. Similarity is measured as proximity, using the distance between pairs of points. Unfortunately, t-SNE doesn't scale well and can be difficult to tune, as it is sensitive to its hyperparameters. Uniform Manifold Approximation and Projection, or UMAP, is also a nonlinear dimensionality reduction algorithm, often used as an alternative to t-SNE. It constructs a high-dimensional graph representation of the data based on manifold theory, which assumes that the data lies on a lower-dimensional manifold embedded in higher-dimensional space.

UMAP then optimizes a low-dimensional graph structure that best preserves the relationships between points in the original data. UMAP scales better than t-SNE and, in addition to the lower structure of the data, preserves the global structure, often providing higher clustering performance than t-SNE. Consider the 3D plots showing simulated data using the MakeBlobs function in Scikit-Learn. The plots show the same 3D data from two different perspectives. There is a little bit of overlap between the yellow and purple clusters, while the other two blobs are distinctly separated from all blobs.

Let's apply the PCA, t-SNE, and UMAP dimension reduction algorithms to project this dataset onto two dimensions and compare the results. PCA has separated the blobs effectively. The blobs are all normally distributed, and the only differences between them are in their means and variances. This means the blobs are linearly correlated, so it is expected that PCA will perform well on the simulated data. t-SNE has clustered the data into four clusters and mostly separated the blobs well.

The algorithm identified four very distinct clusters, with several mislabeled points within the purple cluster from the green and yellow clusters. This mixing is expected, as two of the clusters had a slight overlap. Although UMAP didn't perfectly identify some of the blob points in the blobs, you can see that three of the clusters did not fully separate. In particular, the yellow and green clusters have a slight overlap with the purple cluster. This should be the case for the yellow and purple clusters because these two clusters were not fully separated to begin with in the 3D input data.

UMAP performed slightly better than t-SNE in this regard, since t-SNE identified four very distinct clusters. In this video, you learned that dimensionality reduction algorithms reduce the number of dataset features without sacrificing critical dataset information. There are different types of dimensionality reduction algorithms, namely, PCA, t-SNE, and UMAP. PCA is a linear dimensionality reduction algorithm that simplifies data, reduces dimensionality, and reduces noise while minimizing information loss. t-SNE maps high-dimensional data points to a lower-dimensional space.

UMAP creates a low-dimensional representation of data by approximating the manifold on which the data lies.

</details>
