# Decision Trees

## 개요
- 강좌: Machine Learning with Python
- 모듈: Building Supervised Learning Models
- 재생 시간: 7분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/Y5Tbi/decision-trees)
- 이 비디오를 시청한 후에는 의사 결정 트리를 정의하는 방법을 설명할 수 있습니다.
- 의사 결정 트리는 데이터 요소를 분류하기 위한 순서도로 시각화할 수 있는 알고리즘입니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 의사 결정 트리를 정의하는 방법을 설명할 수 있습니다.
- 의사 결정 트리는 데이터 요소를 분류하기 위한 순서도로 시각화할 수 있는 알고리즘입니다.
- 의사 결정 트리는 데이터를 분류하기 위해 재귀 파티셔닝을 사용하여 구축됩니다.
- 의사 결정 트리 알고리즘은 트리를 학습시키기 위해 각 노드의 데이터를 가장 잘 분할하는 특징을 선택해야 합니다.
- 이 비디오에서는 의사 결정 트리를 훈련하는 방법, 의사 결정 트리를 정리하는 방법, 트리를 훈련할 때 각 노드의 데이터를 가장 잘 분할하는 기능을 선택하는 방법을 배웠습니다.
- 또한 정보 이득 및 지니 불순물 분리 측정에 대해서도 배웠습니다.

### 한국어 Transcript

머신러닝용 의사결정트리에 오신 것을 환영합니다. 이 비디오를 시청한 후에는 의사 결정 트리를 정의하는 방법을 설명할 수 있습니다. 의사 결정 트리가 학습하는 방법을 설명하십시오. 의사 결정 트리는 데이터 요소를 분류하기 위한 순서도로 시각화할 수 있는 알고리즘입니다. 의사 결정 트리에서 각 내부 노드는 테스트에 해당하고, 각 분기는 테스트 결과에 대응하며, 각 터미널 또는 리프 노드는 해당 데이터를 클래스에 할당합니다.

의사결정트리는 데이터셋의 특징을 하나씩 고려하여 구축할 수 있습니다. 여러분이 의학 연구를 위해 데이터를 수집하는 연구자라고 상상해 보십시오. 동일한 질병으로 고통받는 일련의 환자에 대한 데이터를 이미 수집했을 것입니다. 치료 과정에서 각 환자는 두 가지 약물 중 하나에 반응했습니다. 이들을 약물 A와 약물 B라고 부르겠습니다.

같은 질병을 앓고 있는 미래의 환자에게 어떤 약물이 적합할지 예측하기 위한 모델을 만들고 싶다고 가정해 보겠습니다. 이 데이터 세트의 특징은 환자 그룹의 연령, 성별, 혈압 및 콜레스테롤이며, 목표는 각 환자가 반응한 약물입니다. 데이터세트의 학습 부분을 사용하여 의사 결정 트리를 만든 다음 이를 사용하여 미확인 환자의 클래스를 예측합니다. 본질적으로 환자가 어떤 약물에 반응할지 결정하는 것입니다. 약물 A 또는 B의 처방 결정은 동일한 질병으로 진단받은 많은 환자에 대한 과거 데이터를 기반으로 할 것입니다.

트리는 먼저 진단된 환자를 연령 범주 ( 젊은, 중년 또는 노인) 에 할당하는 것으로 시작합니다. 환자가 중년인 경우 의사 결정 트리는 약물 B를 제안하고, 환자가 젊고 남성이거나 콜레스테롤 수치가 정상인 노인인 경우에도 약물 B를 제안합니다. 반면 콜레스테롤 수치가 높은 젊은 여성이나 노년층인 경우 나무의 가지를 통해 A라는 약을 처방받을 수 있습니다. 디시전트리는 다음과 같이 키워서 훈련합니다. 시드 노드와 레이블이 지정된 훈련 데이터로 시작하세요.

사전 선택된 분할 기준에 따라 데이터를 사전 레이블이 지정된 클래스로 가장 잘 분할하는 특징을 찾아 할당된 데이터를 기반으로 노드를 훈련시킵니다. 이러한 각 분할은 노드의 입력 데이터를 파티셔닝하고 각 파티션은 브랜치를 따라 새 노드로 전달됩니다. 각 기능을 한 번만 사용하여 각 새 노드에 대해 이 프로세스를 반복합니다. 모든 노드에 각각 하나의 클래스가 포함되거나, 선택할 기능이 부족하거나, 미리 선택한 중지 기준이 충족될 때까지 트리가 커집니다. 중지 기준이 충족되면 의사 결정 트리의 성장이 멈춥니다.

이를 선제적 나무 가지치기라고도 합니다. 예를 들어, 다음 기준이 충족되면 모델에 중지 기준을 설정할 수 있습니다. 노드의 최소 데이터 포인트 수를 초과했습니다. 리프의 최소 샘플 수를 초과했습니다. 의사 결정 트리가 최대 리프 노드 수에 도달했습니다.

또는 시스템 성능을 크게 향상시키지 않는 가지를 잘라 나무가 자라는 것을 막을 수도 있습니다. 의사 결정 트리를 정리해야 하는 데에는 몇 가지 이유가 있습니다. 트리가 너무 복잡하면 훈련 데이터에 과대적합할 수 있습니다. 클래스와 기능이 너무 많으면 트리에 노이즈와 관련 없는 세부 정보가 캡처될 수 있습니다. 프루닝은 의사 결정 트리 모델을 단순화하고 일반화할 수 있도록 합니다.

가지치기를 한 나무가 더 간결하고 이해하기 쉽습니다. 또한 가지치기를 통해 예측 정확도가 향상됩니다. 의사 결정 트리는 데이터를 분류하기 위해 재귀 파티셔닝을 사용하여 구축됩니다. 의사 결정 트리 알고리즘은 트리를 학습시키기 위해 각 노드의 데이터를 가장 잘 분할하는 특징을 선택해야 합니다. 이렇게 하려면 분할 기준을 선택하여 분할 품질을 측정하여 최상의 분할을 결정해야 합니다.

두 가지 일반적인 분할 측정은 엔트로피 감소라고도 하는 정보 획득과 지니 불순물입니다. 데이터 세트에 있는 14명의 환자를 예로 들어 보겠습니다. Decision Tree 알고리즘은 가장 예측 가능한 특성을 선택하여 할당한 환자 클래스를 가장 잘 구별하는 특징 등을 기준으로 데이터를 분할합니다. 첫 번째 특징인 콜레스테롤을 검사하는 것으로 시작한다고 가정해 봅시다. 트리는 환자를 상한 노드와 정상 노드의 두 노드에 할당합니다.

보시다시피, 환자의 콜레스테롤 수치가 높으면 B 약물이 환자에게 적합하다고 확신 할 수 없습니다. 또한 환자의 콜레스테롤이 정상이라고 해도 A와 B 중 어느 것이 적합한지를 판단할 수 있는 충분한 근거나 정보가 아직 없습니다. 콜레스테롤은 분리하기에 가장 좋은 특성이 아닐 수도 있습니다. 잎에 묻은 환자의 불순물을 줄일 수 있는 최고의 기능을 찾고 있는데, 다른 기능을 시도해 보겠습니다. 이번에는 환자의 성별 특징을 선택합니다.

의사 결정 트리는 환자를 남성과 여성의 두 가지로 나눕니다. 여성의 경우 성별 구분은 대부분의 환자를 약물 B로 분류합니다. 남성의 경우 약물 A와 B 진단의 차이가 명확하지 않습니다. 콜레스테롤 특징을 사용하여 남성 노드를 더 분할하면 두 개의 순수한 노드, 즉 모든 환자가 단일 클래스 또는 처방에 속하는 말기 노드가 생성됩니다. 알고리즘은 중지 기준에 도달할 때까지 분기를 계속합니다.

엔트로피는 데이터 세트의 정보 장애 또는 무작위성의 척도입니다. 노드의 클래스가 얼마나 무작위적인지 또는 특징 분할 결과가 얼마나 불확실한지를 측정합니다. 의사 결정 트리에서는 노드의 엔트로피가 가장 작은 트리를 찾습니다. 엔트로피 공식을 사용하여 노드의 엔트로피를 계산할 수 있습니다. 노드 내 약물 A와 약물 B 환자의 비율.

클래스가 완전히 동질적이면 엔트로피는 0이고, 클래스가 균등하게 나누면 엔트로피는 1입니다. 예를 들어, pA가 pB가 절반인 경우 공식은 1/2 곱하기 -1, 마이너스 1/2 곱하기 -1은 1이 됩니다. 물론 사용하는 라이브러리나 패키지로 계산되므로 계산할 필요는 없습니다. 정보 이득은 분할 전 나무의 엔트로피에서 특징에 의한 분할 후 가중치 엔트로피를 뺀 값입니다. 예를 들어, 콜레스테롤을 모든 환자에 대해 나누는 특성으로 사용하면 0.042의 정보 이득을 얻을 수 있습니다.

정보 획득과 엔트로피는 반대라고 생각할 수 있습니다. 엔트로피가 감소하면 정보 획득 또는 확실성이 증가합니다. 의사 결정 트리를 구성하려면 정보 이득을 가장 많이 얻을 수 있는 특징을 찾아야 합니다. 의사 결정 트리는 시각화할 수 있기 때문에 유리합니다. 즉, 의사 결정 방식을 정확히 파악할 수 있어 해석이 용이합니다.

차선책으로 분할할 기능을 점진적으로 선택하면서 트리가 성장하기 때문에 각 기능이 얼마나 중요하거나 예측 가능한지에 대한 통찰력을 얻을 수 있습니다. 의사 결정 트리는 데이터 요소를 분류하기 위한 알고리즘입니다. 의사결정 트리는 데이터셋의 특징을 하나씩 고려하여 구축됩니다. 의사 결정 트리에서 각 내부 노드는 테스트에 해당합니다. 각 브랜치는 테스트 결과에 대응하며 각 터미널 또는 리프 노드는 해당 데이터를 클래스에 할당합니다.

이 비디오에서는 의사 결정 트리를 훈련하는 방법, 의사 결정 트리를 정리하는 방법, 트리를 훈련할 때 각 노드의 데이터를 가장 잘 분할하는 기능을 선택하는 방법을 배웠습니다. 또한 정보 이득 및 지니 불순물 분리 측정에 대해서도 배웠습니다. 의사 결정 트리는 데이터 모델을 시각화하고 데이터 세트의 정보를 기반으로 결과를 예측하는 데 도움이 됩니다.

## 예시
- 예를 들어, 다음 기준이 충족되면 모델에 중지 기준을 설정할 수 있습니다.
- 예를 들어, pA가 pB가 절반인 경우 공식은 1/2 곱하기 -1, 마이너스 1/2 곱하기 -1은 1이 됩니다.
- 예를 들어, 콜레스테롤을 모든 환자에 대해 나누는 특성으로 사용하면 0.042의 정보 이득을 얻을 수 있습니다.

## 요약
- 의사 결정 트리 알고리즘은 트리를 학습시키기 위해 각 노드의 데이터를 가장 잘 분할하는 특징을 선택해야 합니다.
- 이 비디오에서는 의사 결정 트리를 훈련하는 방법, 의사 결정 트리를 정리하는 방법, 트리를 훈련할 때 각 노드의 데이터를 가장 잘 분할하는 기능을 선택하는 방법을 배웠습니다.
- 또한 정보 이득 및 지니 불순물 분리 측정에 대해서도 배웠습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Decision Trees for Machine Learning. After watching this video, you will be able to Define Decision Trees Describe how to build Decision Trees Explain how Decision Trees learn A Decision Tree is an algorithm that can be visualized as a flowchart for classifying data points. In a Decision Tree, each internal node corresponds to a test, each branch corresponds to the result of the test, and each terminal or leaf node assigns its data to a class. A Decision Tree can be built by considering the features of a dataset one by one. Imagine that you are a researcher compiling data for a medical study.

You would already have collected data about a set of patients who suffered from the same illness. During their course of treatment, each patient responded to one of two medications. Let's call them drug A and drug B. Suppose you want to build a model to predict which drug might be appropriate for a future patient with the same illness. The features of this dataset are age, gender, blood pressure, and cholesterol of our group of patients, and the target is the drug that each patient responded to.

You would use the training part of the dataset to build a Decision Tree and then use it to predict the class of an unknown patient. In essence, to produce a decision on which drug the patient is likely to respond to. The decision to prescribe drug A or B will be based on historical data for a large set of patients diagnosed with the same disease. The tree starts by assigning a diagnosed patient to their age category, which can be young, middle-aged, or senior. If the patient is middle-aged, the Decision Tree suggests drug B.

It also suggests drug B if the patient is young and male, or a senior with normal cholesterol. On the other hand, if the patient is a young female or a senior with high cholesterol, the tree's branches lead to a prescription for drug A. A Decision Tree is trained by growing it as follows. Start with a seed node and labeled training data. Train the node on its assigned data by finding the feature that best splits the data into its pre-labeled classes, according to a pre-selected splitting criterion.

Each such split partitions the node's input data, and each partition is passed along its branch to a new node. Repeat the process for each new node, using each feature only once. The tree grows until all nodes contain a single class each, or you run out of features to select, or a pre-selected stopping criterion is met. A Decision Tree stops growing when a stopping criterion is met. This is also known as pre-emptive tree pruning.

For instance, you can set stopping criteria for your model when the following criterion is met. Maximum tree depth is reached. Minimum number of data points in a node have been exceeded. Minimum number of samples in a leaf have been exceeded. Decision Tree has reached the maximum number of leaf nodes.

Alternatively, you can also stop a tree from growing by cutting branches that don't significantly improve system performance. There are several reasons why you might want to prune a Decision Tree. If the tree is too complex, you might be overfitting it to the training data. If you have too many classes and features, the tree might be capturing noise and irrelevant details. Pruning simplifies your Decision Tree model and makes it amenable to generalization.

A pruned tree is more concise and easier to understand. Pruning also results in better predictive accuracy. Decision Trees are built using recursive partitioning to classify the data. The Decision Tree algorithm must select a feature that best splits the data at each node to train a tree. To do this, you must select a splitting criterion to measure the split quality for determining the best split.

Two common split measures are information gain, which is also called entropy reduction, and Gini impurity. Consider the 14 patients in our data set. The Decision Tree algorithm chooses the most predictive feature to split the data on, for example, the feature that best distinguishes the patient classes it assigns. Suppose it starts by testing cholesterol as the first feature to split on. The tree assigns patients to two nodes, high and normal.

As you can see, if the patient has high cholesterol, we cannot say with high confidence that drug B might be suitable for him. Also, even if the patient's cholesterol is normal, we still don't have sufficient evidence or information to determine whether either drug A or drug B is suitable. Cholesterol might not be the best attribute to split on. We're looking for the best feature to decrease impurity of patients in the leaves, so let's try another feature. This time, we pick the sex feature of patients.

The Decision Tree splits patients into two branches, male and female. For females, the sex split classifies most patients as drug B. For males, the distinction between drug A and B diagnoses is less clear. Further splitting the male node using the cholesterol feature results in two pure nodes: the terminal leaves in which all patients fall into a single class or prescription. The algorithm continues branching until it reaches a stopping criterion.

Entropy is the measure of information disorder, or randomness in a data set. It measures how random the classes in a node are, or how uncertain the feature split result is. In Decision Trees, you look for trees that have the smallest entropy in their nodes. You can calculate the entropy of a node using the entropy formula, where pA and pB are, respectively. The proportions of drug A and drug B patients in the node.

If the classes are completely homogenous, the entropy is 0, and if they are equally divided, the entropy is 1. For example, if pA equals pB equals 1 half, then the formula yields 1 half times negative 1, minus 1 half times negative 1 equals 1. You don't need to calculate these, of course, as it's calculated by the libraries or packages that you use. Information gain is the entropy of a tree before the split minus the weighted entropy after the split by a feature. For example, using cholesterol as the feature to split on for all patients yields an information gain of 0.042.

You can consider information gain and entropy as opposites. As entropy decreases, the information gain, or amount of certainty, increases. Constructing a decision tree is all about finding features that return the highest information gain. Decision trees are advantageous because they can be visualized. This means you can see exactly how it makes decisions, which makes them highly interpretable.

Since the tree grows by gradually selecting the next best feature to split on, you can gain insights about how important or predictive each feature is. A decision tree is an algorithm for classifying data points. Decision trees are built by considering the features of a dataset one by one. In a decision tree, each internal node corresponds to a test. Each branch corresponds to the result of the test, and each terminal, or leaf node, assigns its data to a class.

In this video, you learned how to train a decision tree, how to prune a decision tree, and how to select the features that best splits the data at each node when you're training a tree. You also learned about the information gain and Gini impurity split measures. Decision trees help in visualizing a data model and predicting outcomes based on the information in a dataset.

</details>
