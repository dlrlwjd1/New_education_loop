# Classification Metrics and Evaluation Techniques

## 개요
- 강좌: Machine Learning with Python
- 모듈: Evaluating and Validating Machine Learning Models
- 재생 시간: 6분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/6cML0/classification-metrics-and-evaluation-techniques)
- 이 비디오를 시청한 후에는 훈련-테스트 분할 기법을 정의하고, 혼동 행렬, 정확도, 정밀도, 재현율, F1 점수 메트릭을 설명하고, 각각의 예를 설명할 수 있습니다.
- 먼저 지도 학습 평가가 무엇인지 이해해 보겠습니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 훈련-테스트 분할 기법을 정의하고, 혼동 행렬, 정확도, 정밀도, 재현율, F1 점수 메트릭을 설명하고, 각각의 예를 설명할 수 있습니다.
- 먼저 지도 학습 평가가 무엇인지 이해해 보겠습니다.
- 지도 학습 평가는 머신 러닝 모델이 보이지 않는 데이터의 결과를 얼마나 잘 예측할 수 있는지를 결정합니다.
- 테스트 서브셋은 모델이 보이지 않는 새로운 데이터에 얼마나 잘 일반화되는지 평가하는 데 사용됩니다.
- 정밀도는 예측된 양성 사례 중 실제로 양성인 사례 수를 측정합니다.
- 이 비디오에서는 지도 학습 평가가 기계 학습 모델이 보이지 않는 데이터의 결과를 얼마나 잘 예측할 수 있는지를 결정한다는 것을 배웠습니다.

### 한국어 Transcript

분류 지표 및 평가 기법에 오신 것을 환영합니다. 이 비디오를 시청한 후에는 훈련-테스트 분할 기법을 정의하고, 혼동 행렬, 정확도, 정밀도, 재현율, F1 점수 메트릭을 설명하고, 각각의 예를 설명할 수 있습니다. 먼저 지도 학습 평가가 무엇인지 이해해 보겠습니다. 지도 학습 평가는 머신 러닝 모델이 보이지 않는 데이터의 결과를 얼마나 잘 예측할 수 있는지를 결정합니다. 모델 효과를 이해하는 데 필수적이며 모델 예측을 실측 레이블과 비교하는 것도 포함됩니다.

학습 중에 모델은 하나 이상의 평가 메트릭을 기반으로 예측을 최적화하려고 합니다. 학습 후에는 모델을 다시 평가하여 보이지 않는 데이터로 얼마나 잘 일반화할 수 있는지 추정합니다. 지도 학습 평가는 교육 단계와 테스트 단계 모두에서 필수적입니다. 머신러닝 모델을 학습시켜 결과를 예측할 때 데이터세트의 모든 데이터를 모델에 공급하고 싶지는 않을 것입니다. 트레인-테스트-스플릿 기법은 머신러닝 알고리즘이 예측에 사용될 때의 성능을 추정하는 데 사용됩니다.

훈련-테스트-분할 기법에서는 데이터세트가 훈련 세트와 테스트 세트의 두 부분으로 분할됩니다. 학습 서브셋은 데이터의 약 70~ 80% 를 구성하며 모델을 훈련하는 데 사용됩니다. 테스트 서브셋은 모델이 보이지 않는 새로운 데이터에 얼마나 잘 일반화되는지 평가하는 데 사용됩니다. 분류 작업에서 모델은 범주형 레이블을 예측하여 이러한 예측이 실제 레이블과 얼마나 잘 일치하는지 평가합니다. 분류 모델을 평가하기 위한 몇 가지 일반적인 메트릭을 살펴보겠습니다.

정확도는 데이터셋의 총 인스턴스 수에 대한 정확하게 예측된 인스턴스의 비율입니다. 오차 행렬은 특정 클래스의 Ground Truth 인스턴스 수를 예측된 클래스 인스턴스 수로 구분한 표입니다. 정밀도는 예측된 양성 사례 중 실제로 양성인 사례 수를 측정합니다. 리콜은 실제 양성 사례 중 얼마나 정확하게 예측되었는지를 측정합니다. F1 점수는 정밀도와 재현율을 결합하여 모델의 정확도를 나타냅니다.

정확도를 계산하려면 Will-i-Pass-or-fail-my-Biology-Test 예제를 고려해 보십시오. 모델이 학습되었고 테스트 세트에 대한 몇 가지 예측이 있다고 가정해 보겠습니다. 합격은 녹색 정사각형으로, 실패는 빨간색으로 나타냅니다. 정확하게 분류된 관측치의 수를 관측치 수로 나누어 정확도를 계산할 수 있습니다. 잘못 분류된 포인트는 회색으로 강조 표시됩니다.

그러면 70% 를 받을 수 있습니다. 여기에 표시된 것은 분류 성능을 평가하는 데 일반적으로 사용되는 혼동 행렬입니다. y축에는 실제 레이블이 있고, x축에는 예측된 레이블이 있습니다. 상자 안의 숫자는 참양성, 참음수, 거짓양성, 거짓음성의 수입니다. 진양수는 합격을 예측했고 합격이었다는 뜻입니다.

참음수는 실패를 예측했지만 실패했음을 의미합니다. 오탐은 합격을 예측했지만 실제로는 불합격이라는 뜻입니다. 거짓부정은 실패를 예측했지만 실제로 합격했음을 의미합니다. 다음은 Scikit-learn의 홍채 꽃 데이터 세트를 기반으로 홍채 유형을 예측하도록 훈련된 KNN 분류기의 결정 경계입니다. 세 가지 예측 유형을 구분하는 배경색에서 볼 수 있듯이 실제 유형별로 색을 칠한 점과 비교할 때 잘못 분류된 색상이 거의 없습니다.

여기에서 KNN 분류기의 오차 행렬을 가장 낮은 값은 보라색에서 가장 높은 값의 노란색으로 표시된 히트 맵을 볼 수 있습니다. 색상은 각 실제 클래스에 속하는 각 클래스에 대해 수행한 예측의 수를 나타냅니다. 예를 들어 세토사로 분류된 예측의 경우 항목에는 해당 예측 중 세토사, 베르시컬러 또는 버지니카였어야 하는 예측의 수가 표시됩니다. 대각선 항목은 분류기가 정확히 도출한 예측값입니다. 이 경우에는 대각선이 뜨거워서 좋습니다.

분류 모델을 평가할 때 데이터 과학자는 다른 지표도 고려합니다. 합격 또는 불합격 예제를 살펴보겠습니다. 합격 클래스에서 정밀도는 양수로 예측된 모든 예제 중 참양수의 비율입니다. 정밀도는 참양수의 수를 긍정적인 예측의 수로 나눈 값입니다. 정확도보다 정밀도가 더 중요한 예로는 사용자에게 특정 영화를 홍보하는 데 비용이 더 많이 들 수 있는 영화 추천 엔진이 있습니다.

영화가 오탐인 경우, 즉 사용자가 추천된 영화에 관심이 없는 경우 추가 비용이 발생하지만 혜택은 없습니다. 회상은 모든 사례 중 실제로 긍정적이었던 실제 양성의 비율입니다. 모형이 전체 실제 통과 관측값에서 바로 구한 통과 관측값의 수를 생각해 보십시오. 이는 7명 중 4명, 즉 57.1% 입니다. 참양성의 수를 참양성과 거짓음의 합으로 나눈 값입니다.

기회 비용이 더 중요할 때는 리콜이 더 중요한 지표일 수 있습니다. 이에 대한 예가 의료 분야에 있습니다. 특히 환자 건강과 관련하여 위음성 정보를 설명하는 것이 중요합니다. 마지막으로 F1 점수를 살펴보겠습니다. 여러분이 의료 분야에 종사하면서 환자를 질병에 걸린 것으로 잘못 분류했다고 상상해 보십시오.

잘못된 진단을 받고 있을 수 있습니다. 정밀도와 재현율이 똑같이 중요한 이와 같은 경우에는 둘 중 하나를 최적화하려고 할 수 없습니다. 정밀도와 재현율의 조화 평균 또는 균형 평균으로 정의되는 F1 점수가 유용합니다. 2에 정밀도를 곱하고 재현율을 정밀도와 재현율로 나눈 값으로 계산됩니다. 다음은 실제 클래스 (세토사, 버시컬러, 버지니카) 각각에 대한 정밀도, 재현율 및 F1 점수를 요약한 표입니다.

Setosa 예측은 각 지표에 대해 1점으로 완벽하게 점수를 받았습니다. 지표의 가중 평균은 각 클래스의 지지율 또는 각 클래스의 꽃 수를 기준으로 가중치가 부여됩니다. 이 비디오에서는 지도 학습 평가가 기계 학습 모델이 보이지 않는 데이터의 결과를 얼마나 잘 예측할 수 있는지를 결정한다는 것을 배웠습니다. 트레인-테스트-스플릿 기법은 보이지 않는 데이터에 대한 머신 러닝 알고리즘의 예측 성능을 추정하는 데 사용됩니다. 분류 모델을 평가하기 위한 일반적인 지표에는 정확도, 오차 행렬 , 정밀도 및 재현율이 포함됩니다.

F1 점수는 정밀도와 재현율의 조화 또는 균형 평균입니다.

## 예시
- 정밀도는 예측된 양성 사례 중 실제로 양성인 사례 수를 측정합니다.
- 리콜은 실제 양성 사례 중 얼마나 정확하게 예측되었는지를 측정합니다.
- 예를 들어 세토사로 분류된 예측의 경우 항목에는 해당 예측 중 세토사, 베르시컬러 또는 버지니카였어야 하는 예측의 수가 표시됩니다.
- 회상은 모든 사례 중 실제로 긍정적이었던 실제 양성의 비율입니다.

## 요약
- 테스트 서브셋은 모델이 보이지 않는 새로운 데이터에 얼마나 잘 일반화되는지 평가하는 데 사용됩니다.
- 정밀도는 예측된 양성 사례 중 실제로 양성인 사례 수를 측정합니다.
- 이 비디오에서는 지도 학습 평가가 기계 학습 모델이 보이지 않는 데이터의 결과를 얼마나 잘 예측할 수 있는지를 결정한다는 것을 배웠습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Classification Metrics and Evaluation Techniques. After watching this video, you will be able to define the train-test-split technique, describe confusion matrix, accuracy, precision, recall, and F1 score metrics, and illustrate examples of each. Let's begin by understanding what supervised learning evaluation is. Supervised learning evaluation establishes how well a machine learning model can predict the outcome for unseen data. It is essential for understanding model effectiveness and involves comparing model predictions to ground truth labels.

During training, the model tries to optimize predictions based on one or more evaluation metrics. After training, the model is again evaluated to estimate how well it can generalize to unseen data. Supervised learning evaluation is essential in both the training and testing phases. When you're training a machine learning model to predict an outcome, you don't want to feed all the data from the dataset to the model. The train-test-split technique is used to estimate the performance of machine learning algorithms when they're used to make predictions.

In the train-test-split technique, the dataset is split into two parts – the training set and the test set. The training subset comprises around 70 to 80 percent of the data and is used to train the model. The test subset is used to evaluate how well the model generalizes to new unseen data. In classification tasks, the model predicts categorical labels to assess how well these predictions align with the actual labels. We'll explore some common metrics for evaluating classification models.

Accuracy is the ratio of correctly predicted instances to the total number of instances in the dataset. A confusion matrix is a table that breaks down the number of ground truth instances of a specific class against the number of predicted class instances. Precision measures how many of the predicted positive instances are actually positive. Recall measures how many of the actual positive instances are correctly predicted. F1 score combines precision and recall to represent a model's accuracy.

To calculate accuracy, consider a will-I-pass-or-fail-my-biology-test example. Assume your model has been trained and has some predictions on the test set. You represent pass with green squares and fail with red. You can calculate accuracy by taking the number of correctly classified observations and dividing it by the number of observations. The misclassified points are highlighted in grey.

That'll give you 70%. Displayed here is a confusion matrix commonly used for evaluating classification performance. On the y-axis, you have the true labels, and on the x-axis, you have the predicted labels. The numbers in the boxes are the counts of true positives, true negatives, false positives, and false negatives. True positive means you predicted pass, and it was pass.

True negative means you predicted fail, and it was fail. False positives mean you predicted pass, but it is actually fail. False negative means you predicted fail, and it is actually pass. Shown here is the decision boundary for a KNN classifier trained to predict iris types based on the iris flower dataset in Scikit-learn. Accuracy is high at 93%.

As you can see from the background colors, which distinguish the three prediction types, as compared with the dots colored by their actual types, there are very few misclassified colors. Here, you see a heat map displaying the confusion matrix for the KNN classifier, colored on a scale ranging from purple at the lowest and yellow at the highest values. The colors represent the number of predictions made for each class that fall within each actual class. For example, for predictions classified as setosa, the entries show the counts of how many of those predictions should have been setosa, versicolor, or virginica. The diagonal entries are the predictions the classifier got right.

The diagonal is hot in this case, which is good. When evaluating a classification model, a data scientist also considers other metrics. Let's look at the pass or fail example. In the pass class, precision is the fraction of true positives among all the examples that were predicted to be positives. Precision is the number of true positives divided by the number of positive predictions.

An example where precision may be more important than accuracy is a movie recommendation engine where it may cost more to promote a certain movie to a user. If the movie was a false positive, meaning that the user isn't interested in the movie that was recommended, then that would be an additional cost with no benefit. Now let's take a look at recall. Recall is the fraction of true positives among all the examples that were actually positive. Consider the number of pass observations the model got right out of the total true pass observations.

That is 4 out of 7, or 57.1%. It is the number of true positives divided by the sum of true positives and false negatives. When opportunity cost is more important, recall may be a more important metric. An example of this is in the medical field. It's important to account for false negatives, especially regarding patient health.

Finally, let's look at the F1 score. Imagine that you are in the medical field and have incorrectly classified patients as having an illness. You could be treating the wrong diagnosis. In cases such as this, where precision and recall are equally important, you can't try to optimize one or the other. The F1 score, which is defined as the harmonic or balanced mean of precision and recall, is useful.

It is calculated as 2 multiplied by precision and recall divided by precision plus recall. Here is a table summarizing the precision, recall, and F1 scores for each of the actual classes – setosa, versicolor, and virginica. Setosa prediction scored perfectly at 1 for each metric. The weighted average of the metrics is weighted by the support of each class, or number of flowers in each class. In this video, you learned that supervised learning evaluation establishes how well a machine learning model can predict the outcome for unseen data.

The train-test-split technique is used to estimate the prediction performance of machine learning algorithms for unseen data. Common metrics for evaluating classification models include accuracy, confusion matrix, precision, and recall. The F1 score is the harmonic or balanced mean of precision and recall.

</details>
