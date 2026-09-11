# Bias, Variance, and Ensemble Models

## 개요
- 강좌: Machine Learning with Python
- 모듈: Building Supervised Learning Models
- 재생 시간: 6분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/u94zx/bias-variance-and-ensemble-models)
- 이 비디오를 시청한 후에는 편향과 분산이 정확도와 정밀도에 미치는 영향을 분석할 수 있습니다.
- 또한 모델 복잡성의 편향-분산 트레이드오프를 설명하고, 편향과 분산을 완화하는 기법을 평가하고, 배깅 및 부스팅 방법의 결과를 분석할 수 있습니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 편향과 분산이 정확도와 정밀도에 미치는 영향을 분석할 수 있습니다.
- 또한 모델 복잡성의 편향-분산 트레이드오프를 설명하고, 편향과 분산을 완화하는 기법을 평가하고, 배깅 및 부스팅 방법의 결과를 분석할 수 있습니다.
- 반면, 학습력이 뛰어난 학습자는 편향이 낮고 분산이 높아 데이터를 과적합하는 경향이 있습니다.
- 부스팅은 예측 오류를 체계적으로 줄임으로써 예측 편향을 낮추는 데 도움이 됩니다.
- 예측 편향과 예측 정확도를 측정하는 방법을 설명하세요.
- 예측 분산을 분석하여 모델의 예측이 얼마나 변동하는지 측정할 수 있습니다.

### 한국어 Transcript

[MUSIC] 바이어스, 베리언스, 앙상블 모델에 오신 것을 환영합니다. 이 비디오를 시청한 후에는 편향과 분산이 정확도와 정밀도에 미치는 영향을 분석할 수 있습니다. 또한 모델 복잡성의 편향-분산 트레이드오프를 설명하고, 편향과 분산을 완화하는 기법을 평가하고, 배깅 및 부스팅 방법의 결과를 분석할 수 있습니다. 이미지에 표시된 네 개의 다트 보드를 사용하여 편향과 편차를 이해해 봅시다. 보드 중앙 근처에 다트를 밀접하게 그룹화하면 정확도가 높고 바이어스가 적다는 것을 알 수 있습니다.

위쪽 두 보드는 바이어스가 낮아 정확도가 더 높은 반면, 아래쪽 두 보드는 바이어스가 높아 정확도가 떨어집니다. 바이어스라고 하면 다트가 타겟에 맞는지, 아니면 타겟에서 벗어나는지 생각해 보세요. 분산은 다트가 얼마나 퍼져 있는지를 측정하여 정밀도를 나타냅니다. 오른쪽의 다트 보드는 분산도가 더 높습니다. 즉, 다트가 더 넓게 퍼져 있는 반면, 왼쪽의 보드는 다트가 더 가깝게 그룹화되어 더 낮은 편차를 보여줍니다.

왼쪽 상단 보드에서 볼 수 있듯이 높은 점수를 얻으려면 정확도를 위한 낮은 편향과 정밀도를 위한 낮은 분산이 모두 필요합니다. 예측 편향은 모델의 예측이 얼마나 정확한지를 나타냅니다. 모델이 예측한 값과 데이터의 실제 목표값 간의 평균 차이로 측정됩니다. 완벽한 예측 변수는 편향이 0입니다. 파란색 선은 파란색 데이터 점에 대한 선형 일반 최소제곱을 나타냅니다.

빨간색 선은 동일한 모델을 4단위 아래로 이동한 것을 나타냅니다. 편향은 4.22로 훨씬 더 높습니다. 예측 분산은 동일한 데이터 세트의 여러 하위 집합에 대해 학습할 때 모델의 예측이 얼마나 변동하는지 측정합니다. 모델이 높은 예측 분산을 보이면 선택한 훈련 데이터의 변화에 극도로 민감해집니다. 분산이 크면 모델이 훈련 데이터를 과대적합하고 훈련 데이터에 있는 잡음이나 이상값을 추적할 수 있습니다.

반대로 보이지 않는 데이터를 잘 일반화하는 모델은 반드시 노이즈에 덜 민감합니다. 이 차트는 비선형 패턴을 따르는 주황색 데이터 포인트를 표시합니다. 각 모델은 무작위로 샘플링된 훈련 데이터 세트를 사용하여 피팅됩니다. 예측 분산이 0에 가까우면 곡선이 거의 완벽하게 정렬됩니다. 그러나 특히 데이터의 시작과 끝에서 곡선 간의 차이를 관찰할 수 있습니다.

이 변동은 모형 예측의 불안정성을 반영하는 일부 예측 변동을 나타냅니다. 이 플롯은 모델이 더 복잡해지고 학습 대상 데이터를 더 잘 예측할 수 있게 됨에 따라 편향과 분산이 어떻게 변하는지 보여줍니다. 모델 복잡성이 증가하면 파란색 곡선으로 표시되는 편향은 감소하는 반면 녹색 곡선으로 표시된 분산은 증가하는 경향이 있습니다. 모델 복잡도가 낮으면 편향이 심해 학습 데이터에서도 예측이 잘 되지 않습니다. 반대로 모델 복잡성이 높으면 분산이 커집니다.

즉, 모델이 훈련 데이터에 지나치게 민감해지고 보이지 않는 데이터에 대해서는 성능이 저하되어 과적합이 발생합니다. 그러나 모델의 복잡성이 딱 맞는 수직 점선으로 표시된 교차점이 있습니다. 그림에서 알 수 있듯이 데이터의 랜덤 잡음과 같이 제거할 수 없는 일부 일반화 오차가 항상 존재합니다. 약한 학습자는 무작위 추측보다 성능이 약간만 뛰어난 지도형 머신러닝 모델입니다. 이러한 모델은 높은 편향과 낮은 분산을 특징으로 하며, 이로 인해 종종 피팅이 부족해집니다.

반면, 학습력이 뛰어난 학습자는 편향이 낮고 분산이 높아 데이터를 과적합하는 경향이 있습니다. 배깅과 부스팅은 편향과 분산의 균형을 효과적으로 맞추는 잘 알려진 앙상블 방법입니다. 의사 결정 또는 회귀 트리는 깊이를 변경하여 편향과 분산을 쉽게 조정할 수 있기 때문에 앙상블 학습의 기본 학습자로 일반적으로 선택됩니다. 여기에 표시된 모델 예측은 부트스트랩된 데이터 하위 집합에 대해 반복적으로 학습된 동일한 모델링 알고리즘을 활용합니다. 곡선 패밀리의 양쪽 끝에서 분산을 관찰할 수 있습니다.

이제 이 과정을 여러 번 수행한 다음 예측의 평균을 구한다고 상상해 보십시오. 이 기술을 배깅 또는 부트스트랩 집계라고 합니다. 점선 곡선에서 볼 수 있듯이 수많은 반복에 걸쳐 모델을 평균화하면 예측 편차가 크게 줄어드는 동시에 과적합의 위험도 낮아집니다. 랜덤 포레스트는 부트스트랩된 데이터 세트에서 여러 의사 결정 트리를 훈련시키는 배깅 방법입니다. 이 나무들은 아주 깊을 필요는 없습니다.

대신 예측 편향을 최소화하는 데 초점을 맞춰야 합니다. 얕은 나무는 예측 분산이 높으며, 집계는 편향을 약간만 증가시키면서 이 분산을 크게 줄입니다. 부스팅은 각각 이전 학습자의 오류를 수정하는 것을 목표로 하는 일련의 약한 학습자를 구성하는 앙상블 모델링 기법입니다. 부스팅은 예측 오류를 체계적으로 줄임으로써 예측 편향을 낮추는 데 도움이 됩니다. 최종 모델은 이러한 약한 학습자의 가중치 합계로 구성됩니다.

프로세스를 반복할 때마다 이전 모델에서 잘못 분류된 데이터의 가중치는 증가하는 반면 올바르게 분류된 데이터의 가중치는 감소합니다. 이 가중치 재조정은 알고리즘이 실수 수정에 집중하는 데 도움이 됩니다. 모델의 가중치는 각 약한 학습자의 성과를 기반으로 업데이트됩니다. 널리 사용되는 부스팅 알고리즘에는 그라디언트 부스팅, XGBoost 및 AdaBoost가 있습니다. 이 그래프는 배깅과 부스팅이 모델 복잡성을 전략적으로 조정하여 편향-분산 트레이드오프를 완화하는 데 어떻게 도움이 되는지 보여줍니다.

부스팅은 모델 복잡성을 높이고 편향을 줄입니다. 이 표는 앙상블 방법을 사용하여 머신러닝의 일반적인 문제를 해결하는 방법을 보여줍니다. 배깅은 분산도가 높고 편향이 낮은 여러 기본 학습을 결합하여 과적합을 완화하는 것을 목표로 합니다. 이러한 기본 학습자는 부트스트랩된 데이터 샘플에 대해 병렬로 훈련됩니다. 배깅은 편차를 줄이는 데 도움이 됩니다.

부스팅은 분산이 낮고 편향이 높은 기본 학습자를 순차적으로 훈련시켜 피팅부족 현상을 완화하는 것을 목표로 합니다. 이후의 각 기본 학습자는 이전 결과를 기반으로 하여 편향을 점진적으로 줄입니다. 이 비디오에서는 편향과 분산을 분석하고 정확도와 정밀도에 미치는 영향을 알아보았습니다. 예측 편향과 예측 정확도를 측정하는 방법을 설명하세요. 예측 분산을 분석하여 모델의 예측이 얼마나 변동하는지 측정할 수 있습니다.

편향-분산 장단점을 설명하고 모형이 복잡해짐에 따라 편향과 분산이 어떻게 변하는지 설명하십시오. 편향과 편차를 완화하는 방법과 약한 학습자와 강한 학습자의 개념을 설명하세요. 배깅 또는 부트스트랩 집계를 분석하여 곡선 계열의 양쪽 끝에서 변동을 관찰할 수 있습니다. 부트스트랩 데이터 세트에서 여러 의사 결정 트리를 훈련하기 위한 랜덤 포레스트를 설명하십시오. 마지막으로 배깅 및 부스팅 결과를 분석하여 편향과 변동을 관리하세요.

## 예시
- 이 강의는 개념 설명 중심이며 Transcript에서 독립된 예시를 확인하기 어렵다.

## 요약
- 부스팅은 예측 오류를 체계적으로 줄임으로써 예측 편향을 낮추는 데 도움이 됩니다.
- 예측 편향과 예측 정확도를 측정하는 방법을 설명하세요.
- 예측 분산을 분석하여 모델의 예측이 얼마나 변동하는지 측정할 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

[MUSIC] Welcome to Bias, Variance, and Ensemble Models. After watching this video, you'll be able to analyze the impact of bias and variance on accuracy and precision. You'll also be able to explain the bias-variance tradeoff in model complexity, evaluate techniques to mitigate bias and variance, and analyze the outcomes of bagging and boosting methods. Let's understand bias and variance with the four dart boards shown in the image. Closely grouping the darts near the center of the board indicates high accuracy and low bias.

The top two boards demonstrate low bias, meaning they are more accurate, while the bottom two show higher bias, making them less accurate. Think of bias as how on-target or off-target the darts are. Variance measures how spread out the darts are, representing precision. The dart boards on the right display higher variance, meaning the darts are more spread out, while the boards on the left show lower variance, with the darts grouped closer together. As shown on the top left board, achieving a high score requires both low bias for accuracy and low variance for precision.

Prediction bias refers to how precise a model's predictions are. It's measured by the average difference between what the model predicts and the actual target values in the data. A perfect predictor has zero bias. This chart illustrates prediction bias. The blue line represents the linear ordinary least squares fit for the blue data points.

It has a bias of 0.22. The red line depicts the same model shifted down by 4 units. It has a much higher bias of 4.22. Prediction variance measures how much a model's predictions fluctuate when trained on different subsets of the same data set. When a model exhibits high prediction variance, it becomes extremely sensitive to changes in the selected training data.

High variance causes the model to overfit the training data and track noise or outliers present in the training data. In contrast, models that generalize well to unseen data are necessarily less sensitive to noise. They have low prediction variance. This chart displays orange data points that follow a nonlinear pattern. Each model is fitted using a randomly sampled training data set.

The curves would align almost perfectly if the prediction variance were near zero. However, you can observe differences between the curves, especially at the beginning and end of the data. This variation indicates some prediction variance, reflecting instability in the model's predictions. This plot illustrates how bias and variance change as your model becomes more complex and better at predicting the data it's trained on. As model complexity increases, bias, represented by the blue curve, tends to decline while variance, shown by the green curve, rises.

When model complexity is low, bias is high, leading to poor predictions even on training data. This is known as underfitting. Conversely, high model complexity results in high variance, meaning the model becomes overly sensitive to the training data and performs poorly on unseen data, resulting in overfitting. However, there's a crossover point marked by the vertical dashed line where the model's complexity is just right. As the plot indicates, there will always be some generalization error that cannot be eliminated, such as random noise in the data.

A weak learner is a supervised machine learning model that performs only slightly better than random guessing. These models are characterized by high bias and low variance, which often leads to underfitting. In contrast, strong learners exhibit low bias and high variance, resulting in a tendency to overfit the data. Bagging and boosting are well-known ensemble methods that effectively balance bias and variance. Decision or regression trees are commonly chosen as base learners in ensemble learning because their bias and variance can be easily adjusted by altering their depth.

The model predictions shown here utilize the same modeling algorithm, repeatedly trained on bootstrapped subsets of data. You can observe the variance at both ends of the family of curves. Now, imagine if you were to perform this process multiple times and then average the predictions. This technique is known as bagging or bootstrap aggregating. As illustrated by the dashed curve, averaging the models across numerous iterations significantly reduces prediction variance while also lowering the risk of overfitting.

Random forests is a bagging method that trains multiple decision trees on bootstrapped data sets. These trees don't need to be very deep. Instead, the focus should be on minimizing prediction bias. Shallow trees have high prediction variance, and aggregation significantly reduces this variance while only slightly increasing bias. Boosting is an ensemble modeling technique that builds a series of weak learners, each aimed at correcting the errors of the previous one.

By systematically reducing prediction error, boosting helps lower prediction bias. The final model is formed as a weighted sum of these weak learners. In each iteration of the process, the weights of misclassified data from the previous model are increased, while the weights of correctly classified data are decreased. This reweighting helps the algorithm focus on correcting the mistakes. The model's weights are updated based on the performance of each weak learner.

Popular boosting algorithms include Gradient Boosting, XGBoost, and AdaBoost. This graph demonstrates how bagging and boosting can help mitigate the bias-variance tradeoff by strategically adjusting model complexity. Boosting increases model complexity and decreases bias. In contrast, bagging reduces variance. This table illustrates how ensemble methods can be used to address common issues in machine learning.

Bagging aims to mitigate overfitting by combining multiple base learnings that are high variance and low bias. These base learners are trained in parallel on bootstrapped data samples. Bagging helps reduce variance. Boosting aims to mitigate underfitting by sequentially training base learners that are low variance and high bias. Each subsequent base learner builds on the previous result, gradually reducing bias.

In this video, you learned to analyze bias and variance and how they impact accuracy and precision. Explain prediction bias and how it measures the accuracy of predictions. Analyze prediction variance to measure how much a model's predictions fluctuate. Explain the bias-variance tradeoff and how bias and variance change as your model becomes more complex. Explain mitigating bias and variance and the concept of weak and strong learners.

Analyze bagging or bootstrap aggregating to observe variance at both ends of a family of curves. Explain random forests to train multiple decision trees on bootstrap data sets. And finally, analyze bagging and boosting outcomes to manage bias and variance.

</details>
