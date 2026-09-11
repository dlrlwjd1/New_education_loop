# Supervised Learning with KNN

## 개요
- 강좌: Machine Learning with Python
- 모듈: Building Supervised Learning Models
- 재생 시간: 6분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/FVCMT/supervised-learning-with-knn)
- K-Nearst Neighbors (KNN) 은 레이블이 지정된 데이터 포인트 그룹을 가져와서 이를 사용하여 다른 데이터 포인트에 레이블을 지정하는 방법을 학습하는 감독형 기계 학습 알고리즘입니다.
- K-NN에서는 패러다임에 따라 서로 가까이 있는 데이터 포인트를 이웃이라고 합니다.

## 내용
### 핵심 내용
- K-Nearst Neighbors (KNN) 은 레이블이 지정된 데이터 포인트 그룹을 가져와서 이를 사용하여 다른 데이터 포인트에 레이블을 지정하는 방법을 학습하는 감독형 기계 학습 알고리즘입니다.
- K-NN에서는 패러다임에 따라 서로 가까이 있는 데이터 포인트를 이웃이라고 합니다.
- 포인트는 꽃받침 길이의 쌍으로 실제 아이리스 유형 (세토사, 버시컬러 또는 버지니카) 이 표시되어 있습니다.
- 가장 가까운 세 개의 이웃을 보여주는 다른 점을 보면 대다수 클래스가 녹색 또는 변색임을 알 수 있습니다.
- 포인트는 꽃받침 길이의 쌍으로 실제 아이리스 유형 (세토사, 버시컬러 또는 버지니카) 이 표시되어 있습니다.
- 이 비디오에서는 K-NN이 레이블이 지정된 점을 사용하여 다른 점에 레이블을 지정하는 방법을 학습하는 감독형 기계 학습 알고리즘이라는 것을 배웠습니다.

### 한국어 Transcript

KNN과 함께하는 지도 학습에 오신 것을 환영합니다. 이 동영상을 시청한 후에는 K-Nearest Neighbors, 즉 KNN이 무엇인지 설명하고, K-NN 알고리즘의 작동 방식을 설명하고, K-NNN 알고리즘의 결과에 K가 미치는 영향에 대해 알아보겠습니다. K-Nearst Neighbors (KNN) 은 레이블이 지정된 데이터 포인트 그룹을 가져와서 이를 사용하여 다른 데이터 포인트에 레이블을 지정하는 방법을 학습하는 감독형 기계 학습 알고리즘입니다. K-NN은 분류와 회귀 모두에 사용됩니다. K-NN에서는 패러다임에 따라 서로 가까이 있는 데이터 포인트를 이웃이라고 합니다.

서로 가까운 포인트는 비슷한 특징을 가져야 하므로 서로 비슷한 경향이 있는 경향이 있습니다. 여기서 K-NN은 쿼리된 각 데이터 포인트에 대해 가장 가까운 데이터 포인트를 찾고 쿼리된 포인트 이웃의 알려진 대상 레이블을 기반으로 예측을 수행합니다. 또한 이웃이 의미하는 바를 수학적으로 정의해야 합니다. K-NN이 어떻게 작동하는지 이해해 봅시다. 분류 문제에서 K-NN은 다음과 같이 작동합니다.

먼저 k 값을 선택한 다음 레이블이 지정되지 않은 각 쿼리 포인트에서 훈련 데이터의 레이블이 지정된 모든 케이스까지의 거리를 계산합니다. 훈련 데이터에서 쿼리 점에 가장 가까운 k개 관측값을 검색합니다. k-최근접이웃의 가장 인기 있는 클래스 값을 사용하여 주어진 데이터 포인트의 값을 예측합니다. 회귀의 경우 목표값의 평균 또는 중위수를 사용하여 예측합니다. 분류에서 두 데이터 요소 간의 유사성을 계산하는 방법을 살펴보겠습니다.

아이리스 세토사, 아이리스 버지니카, 아이리스 버시컬러의 세 가지 아이리스 종에서 각각 50개의 샘플로 구성된 이 데이터 세트를 고려해 보겠습니다. 데이터셋의 각 행에는 꽃받침 길이, 꽃받침 너비, 꽃잎 길이, 꽃잎 너비의 네 가지 특징이 센티미터 단위로 나열되어 있습니다. 이 데이터세트를 사용하여 K-NN을 훈련시켜 네 가지 홍채 유형을 분류하려고 합니다. 다음은 꽃받침 길이와 꽃잎 길이라는 두 특징 사이의 붓꽃 데이터에 대한 산점도입니다. 포인트는 꽃받침 길이의 쌍으로 실제 아이리스 유형 (세토사, 버시컬러 또는 버지니카) 이 표시되어 있습니다.

이제 상자로 둘러싸인 영역과 빨간색 원의 중심에 있는 점을 살펴보겠습니다. 가장 가까운 세 이웃은 서로 연결되는 선분으로 표시됩니다. K-NN은 과반수 투표를 사용하여 이 지점을 파란색 또는 버지니카로 올바르게 분류합니다. 가장 가까운 세 개의 이웃을 보여주는 다른 점을 보면 대다수 클래스가 녹색 또는 변색임을 알 수 있습니다. 따라서 K-NN은 이 홍채를 잘못 분류합니다.

다음은 K가 3개의 가장 가까운 이웃과 2개의 입력 특징 (꽃받침 길이와 꽃잎 길이) 과 같음을 사용한 K-NN 분류 결과의 결정 경계입니다. 이 모델은 Scikit-Learn의 K-Neighbors 분류기를 사용하여 생성되었습니다. 세 가지 다른 색상 영역은 K-NN의 세 가지 종류 또는 유형 중 꽃받침 길이와 꽃잎 길이의 각 쌍에 대해 예측되는 홍채의 종류를 나타냅니다. 포인트는 꽃받침 길이의 쌍으로 실제 아이리스 유형 (세토사, 버시컬러 또는 버지니카) 이 표시되어 있습니다. 보시다시피 K-NN은 대부분의 홍채를 93% 의 정확도로 정확하게 분류했습니다.

K에 대한 최적값을 찾으려면 레이블이 지정된 테스트 데이터 세트를 사용하여 값 범위를 테스트하고 정확도를 측정할 수 있습니다. 그런 다음 K equals 1을 선택하고, 훈련 부분을 모델링에 사용하고, 테스트 세트의 모든 샘플을 사용하여 예측 정확도를 계산하십시오. 이 과정을 반복하여 K를 증가시켜 어떤 K가 모델에 가장 적합한지 확인하십시오. 예를 들어, 이 경우에는 K equals 4가 최고의 정확도를 제공합니다. K-NN 알고리즘은 게으른 학습자이므로 다른 기계 학습 모델처럼 학습하지 않습니다.

훈련 데이터를 저장하고 훈련 데이터의 모든 지점까지의 거리를 기반으로 각 쿼리 포인트를 예측합니다. 따라서 각 쿼리 포인트에서 훈련 포인트까지의 모든 거리를 계산한 다음 거리를 늘려 관측값을 정렬하고 마지막으로 상위 K개 관측값을 선택해야 하기 때문에 여전히 감독 대상 모델입니다. 이제 K는 K-NN 알고리즘의 결과에 어떤 영향을 미칠까요? K가 작으면 레이블이 지정되지 않은 관측치에 할당된 값이 변동하여 과적합이 발생하는 경향이 있습니다. K가 크면 K-N이 미세한 디테일을 매끄럽게 다듬어 피팅이 부족해집니다.

그 사이 어딘가에 K에 대한 만족스러운 중간 값이 있을 것입니다. 분류에서 과반수 투표 알고리즘은 클래스 분포가 왜곡되면 신뢰할 수 없게 됩니다. 수업 빈도가 높을수록 새 예제의 예측이 지배적인 경향이 있습니다. 그 이유는 수업 수가 많기 때문에 가장 가까운 이웃 클래스들 사이에서 더 많이 발생하기 때문입니다. 이 문제를 극복하기 위해 테스트 포인트에서 각 K-NN까지의 거리를 고려하여 분류에 가중치를 둘 수 있습니다.

특징의 값이 크면 거리 측정과 예측에 우선합니다. 인위적으로 더 중요한 특징은 편향되거나 정확도가 낮은 예측을 유발할 수 있습니다. 이러한 효과를 없애려면 기능을 확장해야 하는데, 가장 간단한 방법은 표준화입니다. 관련 없는 기능을 포함하는 것은 노이즈를 추가하는 것과 같습니다. 잡음이 많은 데이터에서는 과적합을 방지하기 위해 더 높은 K 값이 필요하며, 이로 인해 계산 비용이 증가하고 정확도가 떨어집니다.

관련 특징만 유지하면 최적의 K가 낮아지고 정확도와 계산 효율성이 모두 향상됩니다. 기능은 문제와 관련이 있어야 합니다. 중복 기능을 사용하면 정확도가 향상될 것으로 예상되지 않으면서 계산 비용이 증가합니다. 관련 기능을 식별할 수 있는 것은 도메인 지식에서 비롯됩니다. 독립 특성이 중요한지 여부를 확인하려면 특성을 사용하거나 사용하지 않고 K를 조정하고 모델 성능의 변화를 평가할 수 있습니다.

이 비디오에서는 K-NN이 레이블이 지정된 점을 사용하여 다른 점에 레이블을 지정하는 방법을 학습하는 감독형 기계 학습 알고리즘이라는 것을 배웠습니다. K-NN은 분류 및 회귀에 사용됩니다. K에 대한 최적값을 찾으려면 레이블이 지정된 테스트 데이터 세트를 사용하여 값 범위를 테스트하고 정확도를 측정할 수 있습니다. 계급 분포가 왜곡되면 기본 과반수 투표 분류에 단점이 있습니다. 가능한 해결책은 분류에 무게를 두거나 데이터 표현의 추상화를 통해 해결할 수 있습니다.

관련 특징만 유지하면 최적의 K가 낮아지고 정확도와 계산 효율성이 모두 향상됩니다. 독립 특성이 중요한지 여부를 확인하려면 특성을 사용하거나 사용하지 않고 K를 조정하고 모델 성능의 변화를 평가할 수 있습니다.

## 예시
- 여기서 K-NN은 쿼리된 각 데이터 포인트에 대해 가장 가까운 데이터 포인트를 찾고 쿼리된 포인트 이웃의 알려진 대상 레이블을 기반으로 예측을 수행합니다.
- 먼저 k 값을 선택한 다음 레이블이 지정되지 않은 각 쿼리 포인트에서 훈련 데이터의 레이블이 지정된 모든 케이스까지의 거리를 계산합니다.
- 훈련 데이터에서 쿼리 점에 가장 가까운 k개 관측값을 검색합니다.
- 예를 들어, 이 경우에는 K equals 4가 최고의 정확도를 제공합니다.

## 요약
- 가장 가까운 세 개의 이웃을 보여주는 다른 점을 보면 대다수 클래스가 녹색 또는 변색임을 알 수 있습니다.
- 포인트는 꽃받침 길이의 쌍으로 실제 아이리스 유형 (세토사, 버시컬러 또는 버지니카) 이 표시되어 있습니다.
- 이 비디오에서는 K-NN이 레이블이 지정된 점을 사용하여 다른 점에 레이블을 지정하는 방법을 학습하는 감독형 기계 학습 알고리즘이라는 것을 배웠습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Supervised Learning with KNN. After watching this video, you'll be able to explain what K-Nearest Neighbors, or KNN, is, describe how a K-NN algorithm works, and discuss how K affects the outcome of the K-NN algorithm K-Nearest Neighbors, or KNN, is a supervised machine learning algorithm that takes a group of labeled data points and then uses them to learn to label other data points. K-NN is used for both classification and regression. In K-NN, data points near each other are said to be neighbors based on the paradigm. Points close to each other should have similar features, and therefore, tend to be like each other Let's consider this chart.

Here, for each queried data point, K-NN finds its nearest data points and makes a prediction based on the known target labels of the queried point's neighbors. You also need to define mathematically what is meant by a neighbor. Let's understand how K-NN works. In a classification problem, K-NN works as follows. First, pick a value for k.

Then, calculate the distance from each unlabeled query point to all labeled cases in the training data. Search for the k observations in the training data that are nearest to the query point. Predict the value of the given data point using the most popular class value from the k-nearest neighbors. In the case of regression, you would predict using the average or median of target values. Let's see how you can calculate the similarity between two data points in classification.

Let's consider this dataset comprising 50 samples each from the three species of iris – Iris setosa, Iris virginica, and Iris versicolor. Each row in the dataset contains four features listed in centimeters – sepal length, sepal width, petal length, and petal width. We want to use this dataset to train K-NN to classify the four iris types. Here is a scatterplot of the iris flower data between two features – sepal length and petal length. The points are the sepal-petal length pairs labeled with their actual iris type – setosa, versicolor, or virginica.

Now, consider the region bound by the box and the point at the center of the red circle. Its three nearest neighbors are indicated by the line segments connecting to them. Using a majority vote, K-NN would correctly classify this point as blue, or virginica. Looking at another point, showing its nearest three neighbors, you can see that the majority class is green, or versicolor. Thus, K-NN would incorrectly classify this iris.

Illustrated here is the decision boundary for the K-NN classification result using K equals 3 nearest neighbors and two input features – sepal length and petal length. The model was generated with the K-Neighbors classifier from Scikit-Learn. The three different colored regions indicate which of the three classes or types of irises K-NN predicted for each pair of sepal and petal lengths. The points are the sepal-petal length pairs labeled with their actual iris type – setosa, versicolor, or virginica. As you can see, K-NN correctly classified most of the irises with an accuracy of 93%.

To find an optimal value for K, you can test a range of values using a labeled test dataset and measure accuracy. Once you've done so, choose K equals 1, use the training part for modeling, and calculate the prediction accuracy using all samples in your test set. Repeat this process, increasing the K, and see which K is best for your model. For example, K equals 4 will give you the best accuracy in this case. The K-NN algorithm is a lazy learner, so it doesn't learn in the sense that other machine learning models do.

It stores the training data and makes predictions for each query point based on its distances to all points in the training data. Thus, it is still a supervised model because it must calculate all distances from each query point to the training points, then sort the observations by increasing distance, and finally, select the top K observations. Now, how does K affect the outcome of the K-NN algorithm? If K is small, the values assigned to unlabeled observations will tend to fluctuate, causing overfitting. If K is large, then K-N will smooth out the finer details and cause underfitting.

Somewhere in between, there will be a happy medium value for K. In classification, the majority voting algorithm becomes unreliable when the class distribution is skewed. More frequent classes tend to dominate the prediction of the new example because they are more prevalent among the nearest neighbors owing to their higher number. To overcome this challenge, you can weigh the classification by considering the distance from the test point to each of its K-NN. When features have large values, they will dominate the distance measure and the predictions.

Artificially more important features can cause biased or low-accuracy predictions. Features need to be scaled to remove this effect, and the simplest way is standardization. Including an irrelevant feature is like adding noise. Noisy data requires a higher value of K to avoid overfitting, which in turn drives up computational cost and diminishes accuracy. Keeping only relevant features lowers the optimal K and improves both accuracy and computational efficiency.

Features must be relevant to the problem. Redundant features add computational cost with no expected improvement in accuracy. Being able to identify relevant features comes from domain knowledge. To check whether an independent feature is important, you can tune K with and without the feature and evaluate the change in model performance. In this video, you learned that K-NN is a supervised machine learning algorithm that uses labeled points to learn how to label other points.

K-NN is used for classification and regression. To find an optimal value for K, you can test a range of values using a labeled test dataset and measure accuracy. When the class distribution is skewed, there is a disadvantage in the basic majority voting classification. A possible resolution can be to weigh the classification or by abstraction in data representation. Keeping only relevant features lowers the optimal K and improves both accuracy and computational efficiency.

To check whether an independent feature is important, you can tune K with and without the feature and evaluate the change in model performance.

</details>
