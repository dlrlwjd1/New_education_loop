# Regression Trees

## 개요
- 강좌: Machine Learning with Python
- 모듈: Building Supervised Learning Models
- 재생 시간: 6분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/jNimm/regression-trees)
- 또한 회귀 트리를 만드는 방법을 설명할 수 있습니다.
- 회귀 트리는 불연속 클래스가 아닌 연속형 값을 예측하는 의사 결정 트리와 유사합니다.

## 내용
### 핵심 내용
- 또한 회귀 트리를 만드는 방법을 설명할 수 있습니다.
- 회귀 트리는 불연속 클래스가 아닌 연속형 값을 예측하는 의사 결정 트리와 유사합니다.
- 의사 결정 트리가 회귀 문제를 해결하도록 조정되는 경우 이를 회귀 트리라고 합니다.
- 분류 트리의 경우 리프 노드에서의 예측은 클래스 레이블이 지정된 과반수 득표인 반면, 회귀 트리의 경우 대상 값의 평균값입니다.
- 의사 결정 트리와 마찬가지로 회귀 트리는 분할 품질을 측정하기 위해 엔트로피나 획득한 정보 기준을 사용하는 대신 결과 노드의 실제 값 y, i와 예측값 y-hat 간의 오차를 최소화하는 특징을 선택합니다.
- 이 비디오에서는 회귀 트리가 연속형 값을 예측하는 의사 결정 트리와 유사하다는 것을 배웠습니다.

### 한국어 Transcript

이 비디오를 보고 나면 회귀 트리를 설명하고 회귀 트리가 분류와 어떻게 다른지 알 수 있을 것입니다. 또한 회귀 트리를 만드는 방법을 설명할 수 있습니다. 회귀 트리는 불연속 클래스가 아닌 연속형 값을 예측하는 의사 결정 트리와 유사합니다. 분류와 회귀를 구분하는 특징은 대상 데이터 또는 레이블이 지정된 데이터의 특성입니다. 분류에서 대상 변수는 참이나 거짓과 같은 범주형입니다.

회귀 분석에서 목표값은 온도나 급여와 같은 연속형 값입니다. 의사 결정 트리가 회귀 문제를 해결하도록 조정되는 경우 이를 회귀 트리라고 합니다. 분류 트리와 회귀 트리를 비교하여 차이점을 이해해 보겠습니다. 분류 트리의 목표는 데이터를 개별 집합으로 분류하는 것이고 회귀 트리는 연속적인 대상 변수를 예측하는 것을 목표로 합니다. 따라서 분류 트리의 목표 변수는 범주형이지만 회귀 트리의 경우 부동 변수입니다.

분류 트리의 경우 리프 노드에서의 예측은 클래스 레이블이 지정된 과반수 득표인 반면, 회귀 트리의 경우 대상 값의 평균값입니다. 분류 트리의 일부 사용 사례로는 스팸 탐지, 이미지 분류, 의료 진단이 있습니다. 회귀 트리는 수익, 기온 및 산불 위험을 예측하는 데 사용됩니다. 회귀 트리는 데이터 집합을 하위 집합으로 재귀적으로 분할하여 데이터 분할을 통해 얻은 정보를 최대화하여 생성됩니다. 이 프로세스는 트리와 같은 구조를 생성하고 분할 노드에 할당된 클래스의 임의성을 최소화합니다.

데이터셋의 연속형 특징과 시험 임계값인 알파가 주어지면 데이터가 알파보다 크거나 작은지 여부에 따라 노드의 데이터가 두 개의 하위 집합으로 분할되고 해당 포인트가 왼쪽 및 오른쪽 노드에 할당됩니다. 특성이 두 클래스로 구성된 이진수인 경우 분할은 두 클래스에 따라 이루어집니다. 의사 결정 트리와 같은 클래스 투표 체계를 기반으로 하거나 노드의 목표 값 평균을 사용하여 각 노드에서 예측을 수행합니다. 특정 노드에 대한 예측값 y-hat은 노드에 있는 데이터 요소의 실제 목표값 y, i의 평균으로 정의됩니다. 중위값과 같은 다른 통계를 사용하여 예측을 할당할 수 있습니다.

데이터가 왜곡된 경우 이 방법을 사용하는 것이 좋습니다. 정규 분포 데이터의 경우 중위수는 평균과 비슷하지만 중위수를 계산하는 데 더 많은 비용이 듭니다. 의사 결정 트리와 마찬가지로 회귀 트리는 분할 품질을 측정하기 위해 엔트로피나 획득한 정보 기준을 사용하는 대신 결과 노드의 실제 값 y, i와 예측값 y-hat 간의 오차를 최소화하는 특징을 선택합니다. 주어진 특징의 분할 품질을 측정하기 위한 자연스러운 기준은 평균 제곱 오차 (MSE) 입니다. 이는 각 노드 내 목표 값의 변동을 측정하는 것과 같으며, 이를 통해 값이 얼마나 분산되어 있는지를 측정할 수 있습니다.

분산이 작을수록 값이 더 가깝게 일치합니다. 분할 품질을 측정하기 위해 각 분할 노드의 MSE에 대한 가중 평균을 사용할 수 있습니다. 가중 평균은 평균 MSE가 두 분할 노드의 관측치 수에 1을 곱하고, 왼쪽 분할의 관측치 수의 합에 왼쪽 분할의 MSE를 곱하고, 오른쪽 분할의 관측치 수에 오른쪽 분할의 MSE를 곱한 값으로 계산됩니다. 이 값이 작을수록 분산이 작아지고 따라서 분할 품질이 높아집니다. 트리는 훈련 중에 각 노드를 가장 잘 분할하는 특징과 임계값을 찾습니다.

트리는 각 잠재적 기능 분할에 대해 왼쪽 및 오른쪽 하위 집합에 대한 MSE를 계산합니다. 분할의 MSE는 하위 집합 MSE의 가중 평균입니다. 가중치가 가장 낮은 MSE의 스플릿이 선택됩니다. 이 프로세스는 예측값의 분산을 최소화하고 회귀 트리의 정확도를 개선합니다. 이진 기능의 경우 임계값을 사용하는 대신 데이터를 단순히 두 클래스로 분리하고 분할 품질은 클래스 MSE의 가중 평균에 불과합니다.

가중치 MSE는 가능한 결과가 하나뿐이므로 이미 최적화되어 있습니다. 다중 클래스 기능의 경우 일대일 또는 일대일 같은 전략을 사용하여 가능한 이진 분할 집합을 생성할 수 있습니다. 그런 다음 각 이진 분할에 대해 MSE의 가중 평균을 계산합니다. 가중치 MSE를 최소화하여 예측 분산이 가장 낮은 분할을 선택합니다. 연속 기능을 분할할 평가판 임계값 세트를 어떻게 선택할 수 있습니까?

먼저 i가 j보다 작은 모든 인덱스에 대해 Xi가 Xj보다 작거나 같도록 특성 값을 정렬합니다. i가 j보다 작은 모든 i에 대해 Xi가 Xj보다 완전히 작도록 모든 중복된 값을 삭제합니다. 후보 임계값은 αi를 각 연속 값 쌍 사이의 중간점으로 정의하고, αi는 Xi의 절반에 Xi를 더한 Xi에 1을 더한 값입니다. 데이터 분할에 대한 가중치 MSE를 최소화하는 임계값을 선택합니다. 이는 철저한 검색 방법이므로 빅 데이터에 맞게 확장하기가 어렵습니다.

매우 큰 데이터 집합의 경우 이러한 임계값 중 적은 수의 하위 집합을 선택하면 정확성은 떨어지지만 효율성은 향상될 수 있습니다. 또한 이 방법은 목표값 X가 균일하게 분포되어 있다고 가정합니다. 효율성을 높이려면 임계값을 샘플링할 때 분포를 고려해야 합니다. 이 비디오에서는 회귀 트리가 연속형 값을 예측하는 의사 결정 트리와 유사하다는 것을 배웠습니다. 분류에서 목표 변수는 범주형이고 회귀 분석에서는 목표값이 연속형 값입니다.

회귀 트리는 데이터 집합을 하위 집합으로 재귀적으로 분할하여 데이터 분할을 통해 얻은 정보를 최대화하여 생성됩니다. MSE는 주어진 기능의 분할 품질을 측정하는 자연스러운 기준입니다. 회귀 트리는 훈련 중에 각 노드를 가장 잘 분할하는 특징과 임계값을 찾습니다. 기능은 바이너리 또는 멀티 클래스일 수 있습니다. 마지막으로, 데이터 크기에 따라 여러 가지 방법으로 연속 기능 시험 임계값을 선택할 수 있다는 것을 알게 되었습니다.

## 예시
- 분류 트리의 일부 사용 사례로는 스팸 탐지, 이미지 분류, 의료 진단이 있습니다.

## 요약
- 분류 트리의 경우 리프 노드에서의 예측은 클래스 레이블이 지정된 과반수 득표인 반면, 회귀 트리의 경우 대상 값의 평균값입니다.
- 의사 결정 트리와 마찬가지로 회귀 트리는 분할 품질을 측정하기 위해 엔트로피나 획득한 정보 기준을 사용하는 대신 결과 노드의 실제 값 y, i와 예측값 y-hat 간의 오차를 최소화하는 특징을 선택합니다.
- 이 비디오에서는 회귀 트리가 연속형 값을 예측하는 의사 결정 트리와 유사하다는 것을 배웠습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Regression Trees. After watching this video, you will be able to describe a regression tree and recognize how it is different from classification. You will also be able to explain how to create a regression tree. A regression tree is analogous to a decision tree that predicts continuous values rather than discrete classes. The distinguishing feature between classification and regression is the characteristic of the target or labeled data.

In classification, the target variable is categorical, such as true or false. In regression, the target is a continuous value, such as temperature or salary. When a decision tree is adapted to solve regression problems, it is called a regression tree. Let's compare classification trees with regression trees to understand how they're different. The target of a classification tree is to classify data into discrete sets, whereas a regression tree aims at predicting continuous target variables.

Hence, the target variable for a classification tree is categorical but floating for a regression tree. The prediction at leaf nodes for a classification tree is a class-labeled majority vote, whereas for a regression tree, it is the average value of target values. Some used cases of classification trees are spam detection, image classification, medical diagnosis. Regression trees are used for predicting revenue, temperatures, and wildfire risk. Regression trees are created by recursively splitting the dataset into subsets to maximize information gained from data splitting.

This process generates a tree-like structure and minimizes the randomness of the classes assigned to the split nodes. Let's consider this example. Given a continuous feature from a dataset and a trial threshold value, alpha, the data in a node is split into two subsets according to whether the data is greater than or less than alpha, and the corresponding points are assigned to the left and right nodes. If the feature is binary, consisting of two classes, then the split is according to the two classes. You make a prediction at each node based either on a class voting scheme as with decision trees or by using the average of the target values in the node.

The predicted value, y-hat, for a given node is defined as the average of the actual target values, y, i of the data points in the node. You could use other statistics, like the median value, to assign the prediction. This would be preferable when your data is skewed. For normally distributed data, the median is comparable to the mean, but the median is more expensive to compute. Instead of using the entropy or information gained criteria to measure the quality of a split, as for decision trees, regression trees select features that minimize the error between the actual values, y, i in the resulting nodes, and the predicted value, y-hat.

A natural criterion for measuring the split quality of a given feature uses the mean-squared error, or MSE. Notice that this amounts to measuring the variance of the target values within each node, which gauges how spread out the values are. The smaller the variance is, the more closely the values agree. To measure the quality of a split, the weighted average of the MSEs of each split node can be used. The weighted average is calculated as average MSE equals one over the number of observations in the two split nodes, times the sum of the number of observations in the left split times the MSE of the left split, and the number of observations in the right split times the MSE of the right split.

The lower this value, the lower the variance, and thus, the higher the quality of the split. During training, the tree finds the feature and threshold that best splits each node. For each potential split of a feature, the tree calculates the MSE for the left and right subsets. The MSE of the split is a weighted average of the MSEs of the subsets. The split with the lowest-weighted MSE is chosen.

This process minimizes the variance in the predicted values and improves the accuracy of the regression tree. For a binary feature, instead of using thresholds, the data is simply separated into its two classes, and the split quality is just the weighted average of the class MSEs. The weighted MSE has only one possible result, so it is already optimized. For a multi-class feature, you can use a strategy like one-versus-one or one-versus-all to generate a set of possible binary splits. Then, for each binary split, calculate the weighted average of the MSEs.

Select the split that minimizes the weighted MSE, and thus, the lowest prediction variance. How can you choose a set of trial thresholds to split a continuous feature on? There are many ways. Here's one strategy. Start by sorting the feature's values so that Xi is less than or equal to Xj, for all indexes i less than j.

Drop any duplicated values so that Xi is strictly less than Xj, for all i less than j. Define your candidate thresholds, αi as the midpoints between each pair of consecutive values, αi is half of Xi, plus Xi plus 1. Choose the threshold that minimizes the weighted MSE for its data split. This is an exhaustive search method that doesn't scale well to big data. For very large datasets, selecting a sparse subset of these thresholds can improve efficiency at the cost of accuracy.

The method also assumes the target values, X, are uniformly distributed. For efficiency, you should consider the distribution when sampling the thresholds. In this video, you learned that a regression tree is analogous to a decision tree that predicts continuous values. In classification, the target variable is categorical, and in regression, the target is a continuous value. Regression trees are created by recursively splitting the dataset into subsets to maximize information gained from data splitting.

MSE is a natural criterion for measuring the split quality of a given feature. The regression tree finds the feature and threshold that best splits each node during training. The feature can be binary or multi-class. Finally, you learned that you can choose continuous feature trial thresholds in multiple ways depending on data size.

</details>
