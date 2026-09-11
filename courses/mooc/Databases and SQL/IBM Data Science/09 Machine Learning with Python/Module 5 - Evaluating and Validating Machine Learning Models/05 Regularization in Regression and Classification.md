# Regularization in Regression and Classification

## 개요
- 강좌: Machine Learning with Python
- 모듈: Evaluating and Validating Machine Learning Models
- 재생 시간: 7분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/lpugP/regularization-in-regression-and-classification)
- 이 비디오를 시청한 후 선형 회귀에 대한 정규화를 정의하고 선형 회귀 , 릿지 및 올가미 회귀 방법을 비교할 수 있습니다.
- 이는 훈련 중에 모델을 제한하여 모델이 훈련 데이터에 과적합되는 것을 방지합니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후 선형 회귀에 대한 정규화를 정의하고 선형 회귀 , 릿지 및 올가미 회귀 방법을 비교할 수 있습니다.
- 이는 훈련 중에 모델을 제한하여 모델이 훈련 데이터에 과적합되는 것을 방지합니다.
- 정규 선형 회귀에는 페널티 항이 없는 반면, 릿지 회귀에서는 계수에 L2 또는 제곱합 페널티를 사용하므로 계수를 줄일 수 있습니다.
- Lasso는 0인 계수를 모두 구하는 반면, 선형 계수와 능선이 0인 경우 난이도가 약간 높지만 선형 회귀가 능선 회귀보다 약간 더 좋습니다.
- 이 비디오에서는 정규화가 과적합을 방지하는 회귀 기법이라는 것을 배웠습니다.
- 정규 선형 회귀에는 페널티 항이 없는 반면, 릿지 회귀에서는 계수에 L2, 즉 제곱합 페널티를 사용하므로 계수를 줄일 수 있습니다.

### 한국어 Transcript

선형 회귀의 정규화에 오신 것을 환영합니다. 이 비디오를 시청한 후 선형 회귀에 대한 정규화를 정의하고 선형 회귀 , 릿지 및 올가미 회귀 방법을 비교할 수 있습니다. 정규화는 과적합을 방지하기 위한 회귀 기법입니다. 이는 훈련 중에 모델을 제한하여 모델이 훈련 데이터에 과적합되는 것을 방지합니다. 정규화는 계수의 크기를 줄임으로써 이 목표를 달성합니다.

정규화에서는 수정된 비용 함수를 사용하여 선형 회귀 모델을 최적화합니다. 선형 회귀 모델은 일반적인 형태로, 정규화된 비용 함수는 평균 제곱 오차에 람다를 곱한 페널티 항과 같습니다. 여기서 람다는 페널티 항의 영향을 제어하는 파라미터이고, 페널티는 계수의 크기를 측정합니다. 릿지 및 올가미 정규화와 같은 일반적인 정규화 회귀 방법에서는 특정 페널티 항을 사용합니다. 선형 회귀는 주어진 데이터 세트에 직선을 피팅하여 둘 이상의 변수 간의 관계를 모형화합니다.

일반 선형 회귀에서 예측은 특징의 선형 조합이며, 목표는 일반적으로 예측 목표값과 실제 목표값 사이의 평균 제곱 오차 (MSE) 로 측정되는 손실 함수를 최소화하는 것입니다. 수학적으로 선형 회귀 모델은 y-hat은 세타-0+세타-1 x-1+theta-2 x-2+theta-n x-n 형식의 선형 조합으로 정의됩니다. 여기서 x-i는 편향 또는 절편 항, theta-0을 설명하기 위해 첫 번째 항목에 상수 값 1을 포함하는 행렬 X로 표현될 수 있는 특징 벡터이고 세타는 미지수입니다. 가중치는 행렬 세타로 표현할 수 있습니다. 가중치를 일반적으로 선형 회귀 모델의 계수라고 합니다.

릿지와 올가미는 비용 함수만 다른 정규화된 형태의 선형 회귀입니다. 정규 선형 회귀에는 페널티 항이 없는 반면, 릿지 회귀에서는 계수에 L2 또는 제곱합 페널티를 사용하므로 계수를 줄일 수 있습니다. 올가미 회귀에서는 계수에 L1 또는 절대값 합계 페널티를 사용합니다. 이 페널티는 일부 계수를 정확히 0으로 줄일 수 있습니다. 올가미 회귀는 특징 희소성에 잘 반응하므로 특징 선택 및 데이터 압축 작업에 유용합니다.

머신러닝에서 계수가 희소하다는 것은 적은 수의 변수만이 데이터세트에 크게 기여하고 나머지는 거의 또는 전혀 영향을 주지 않는다는 것을 의미합니다. 여기의 플롯은 신호 대 잡음비 SNR이 높은 희소 계수의 시뮬레이션된 집합을 보여줍니다. 이 계수는 검은색 점으로 표시됩니다. 시뮬레이션은 100개 특징 각각에 대한 계수 값을 표시합니다. 희소하지 않은 계수가 5개이며 SNR이 높아 눈에 잘 띕니다.

보시다시피 세 가지 회귀 방법 모두 0이 아닌 계수를 매우 잘 예측합니다. Lasso는 0개의 계수를 정확히 구하는 반면, 선형 회귀와 능선은 영점 계수를 예측하는 데 다소 어려움이 있습니다. 선형 회귀가 능선 회귀보다 약간 더 나은 결과를 보입니다. 이 그림에는 SNR이 낮은 검은색 점으로 표시된 희소 계수 집합이 시뮬레이션되어 있습니다. 이 경우 선형 회귀는 이상적인 계수를 과대평가하고, 0 계수의 대부분을 오버슈트하고, 0이어야 할 때 큰 음의 계수를 할당하는 경향이 있기 때문에 이 경우 성능이 매우 떨어집니다.

이는 일반 선형 회귀가 잡음이 있는 데이터에 민감하다는 사실을 보여줍니다. 또한 볼 수 있듯이 0이 아닌 계수를 예측하는 데는 능선과 올가미가 비슷하지만 0이 아닌 계수를 구하는 데는 올가미가 능선보다 훨씬 낫습니다. 이처럼 SNR이 낮은 환경에서도 올가미는 훌륭한 기능 선택 도구입니다. 이 플롯은 SNR이 높은 비희소 계수를 보여줍니다. 보시다시피 세 가지 회귀 방법 모두 0이 아닌 계수를 매우 잘 예측하며 능선의 오차가 다른 방법보다 약간 더 큽니다.

Lasso는 0인 계수를 모두 구하는 반면, 선형 계수와 능선이 0인 경우 난이도가 약간 높지만 선형 회귀가 능선 회귀보다 약간 더 좋습니다. 이 그림에서는 SNR이 낮은 비희소 계수를 보여줍니다. 선형 회귀는 이상적인 계수를 과대평가하고, 0인 계수 대부분을 오버슈트하고, 계수가 모두 양수임에도 불구하고 큰 음의 계수를 할당하는 경향이 있기 때문에 이 경우 성능이 매우 떨어집니다. 이는 일반 선형 회귀가 잡음이 있는 데이터에 민감하다는 것을 보여줍니다. 또한 볼 수 있듯이 0이 아닌 계수를 예측할 때는 능선 회귀가 lasso보다 성능이 약간 뛰어나지만 0인 계수를 찾는 데는 올가미가 더 좋습니다.

이처럼 SNR이 낮은 환경에서도 올가미는 훌륭한 기능 선택 도구입니다. 이 차트는 잡음이 약간 심한 목표 변수에 대해 올가미, 능선 및 정규 선형 회귀를 훈련한 결과를 표시합니다. 결과는 각 모델이 데이터 세트의 70% 에 대해 학습된 후 테스트 데이터에 대해 수행된 예측을 보여줍니다. 맨 위 행에는 테스트 예측을 실제 올가미 , 능선 및 정규 회귀 테스트 값과 비교하는 세 개의 스캐터 차트가 표시됩니다. 올가미의 결과는 다른 두 결과보다 이상적인 45도 선 주위에 훨씬 더 집중되어 있습니다.

그림의 맨 아래 행은 회귀 예측과 실제 값을 중첩한 두 도표 대신 정확한 비교를 보여줍니다. 다시 말씀드리지만, 올가미의 예측이 실제 값과 잘 맞아떨어지기 때문에 능선 회귀와 정규 회귀 분석 모두에서 성능이 뛰어났다는 것을 알 수 있습니다. 또한 세 모델 모두에 대해 MSE가 표시됩니다. 올가미의 MSE는 릿지 및 정규 선형 회귀의 MSE보다 약 30배 작습니다. 이 표에는 희소 계수와 비희소 계수에 대한 높은 SNR 환경과 낮은 SNR 환경에서 선형, 능선 및 올가미 회귀 방법의 상대적 성능이 요약되어 있습니다.

모든 시나리오에서 올가미는 세 가지 방법 중 최고의 성능을 발휘합니다. 정규 선형 회귀는 SNR이 높은 환경에서는 잘 수행되고 SNR이 낮은 환경에서는 성능이 낮습니다. 이 방법의 순위는 SNR이 높든 낮든 비슷하며 모든 경우에 능선이 등급을 유지합니다. 낮은 SNR의 경우 올가미 및 릿지가 확실한 승자입니다. 이 비디오에서는 정규화가 과적합을 방지하는 회귀 기법이라는 것을 배웠습니다.

이는 훈련 중에 모델을 제한하여 모델이 훈련 데이터에 과적합되는 것을 방지합니다. 일반 선형 회귀에서 예측은 특징의 선형 조합이며, 목표는 손실 함수를 최소화하는 것입니다. 릿지와 올가미는 비용 함수만 다른 정규화된 형태의 선형 회귀입니다. 정규 선형 회귀에는 페널티 항이 없는 반면, 릿지 회귀에서는 계수에 L2, 즉 제곱합 페널티를 사용하므로 계수를 줄일 수 있습니다. 올가미 회귀에서는 계수에 L1, 즉 절대값의 합계 페널티를 사용합니다.

선형 회귀는 이상값에 매우 민감하기 때문에 잡음이 있는 경우 과적합으로 인해 문제가 발생합니다. 정규화 기법을 선형 회귀와 함께 사용하여 이러한 오류를 줄일 수 있습니다.

## 예시
- 이 강의는 개념 설명 중심이며 Transcript에서 독립된 예시를 확인하기 어렵다.

## 요약
- Lasso는 0인 계수를 모두 구하는 반면, 선형 계수와 능선이 0인 경우 난이도가 약간 높지만 선형 회귀가 능선 회귀보다 약간 더 좋습니다.
- 이 비디오에서는 정규화가 과적합을 방지하는 회귀 기법이라는 것을 배웠습니다.
- 정규 선형 회귀에는 페널티 항이 없는 반면, 릿지 회귀에서는 계수에 L2, 즉 제곱합 페널티를 사용하므로 계수를 줄일 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Regularization in Linear Regression. After watching this video, you will be able to define regularization for linear regression and compare linear, ridge, and lasso regression methods. Regularization is a regression technique to prevent overfitting. It constrains the model during training, discouraging it from overfitting to the training data. Regularization achieves this goal by suppressing the size of its coefficients.

With regularization, a modified cost function is used to optimize the linear regression model, which has the general form, regularized cost function equals mean squared error plus lambda times penalty term. Here, lambda is a parameter that controls the influence of the penalty term, and the penalty measures the size of the coefficients. Common regularized regression methods like ridge and lasso regularization use specific penalty terms. Linear regression models the relationship between two or more variables by fitting a straight line to the given data set. In ordinary linear regression, predictions are a linear combination of features, and the goal is to minimize the loss function, usually measured as the mean squared error – MSE – between the predicted and actual target values.

Mathematically, the linear regression model is defined by a linear combination of the form y-hat equals theta-zero plus theta-one x-one plus theta-two x-two plus theta-n x-n, where the x-i are the feature vectors that can be represented as a matrix X that includes a constant value of 1 in the first entry to account for the bias, or intercept term, theta-zero, and the thetas are the unknown weights, which can be represented as a matrix theta. The weights are commonly referred to as the coefficients of the linear regression model. Ridge and lasso are regularized forms of linear regression that differ only in their cost functions. Regular linear regression has no penalty term, while ridge regression uses an L2 or sum-of-squares penalty on its coefficients, which helps to shrink them. Lasso regression uses an L1 or sum-of-absolute-values penalty on its coefficients.

This penalty can shrink some coefficients to exactly zero. Lasso regression responds well to feature sparsity, making it useful for feature selection and data compression tasks. In machine learning, sparse coefficients mean that only a small number of variables significantly contribute to a dataset, while the remaining have little or no impact. The plot here shows a simulated set of sparse coefficients, labeled as black dots, with a high signal-to-noise ratio, SNR. The simulation displays coefficient values for each of the 100 features.

It has 5 non-sparse coefficients, with a high SNR meaning they stand out strongly. As you can see, all three regression methods predict the non-zero coefficients very well. Lasso finds the zero coefficients exactly, while linear and ridge have some difficulty predicting the zero coefficients, with linear regression doing slightly better than ridge regression. In this plot, we have a simulated set of sparse coefficients labeled as black dots, with a low SNR. Evidently, linear regression performs very poorly in this case, as it tends to greatly overestimate the ideal coefficients, overshoot most of the zero coefficients, and assign large negative coefficients when they should be zero.

This illustrates the fact that ordinary linear regression is sensitive to noisy data. As you can also see, ridge and lasso have similar abilities in predicting the non-zero coefficients, but lasso is much better than ridge at finding the zero coefficients. Even in this low SNR environment, lasso is a great feature selector. This plot shows non-sparse coefficients with a high SNR. As you can see, all three regression methods predict the non-zero coefficients very well, with the ridge erring slightly more than the others.

Lasso finds all of the zero coefficients, while linear and ridge have some difficulty the zero coefficients, with linear regression doing slightly better than ridge regression. In this plot, we have non-sparse coefficients with a low SNR. Evidently, linear regression performs very poorly in this case, as it tends to overestimate the ideal coefficients, overshoot most of the zero coefficients, and assign large negative coefficients even though all coefficients here are positive. This illustrates that ordinary linear regression is sensitive to noisy data. As you can also see, ridge regression slightly outperforms lasso when it comes to predicting the non-zero coefficients, but lasso is better at finding the zero coefficients.

Even in this low SNR environment, lasso is a great feature selector. This chart displays the results of training lasso, ridge, and regular linear regression for a moderately noisy target variable. The results show the predictions made on the test data after each model was trained on 70% of the dataset. The top row shows three scatter plots, comparing test predictions against the actual lasso, ridge, and regular regression test values. The result for lasso is much more concentrated around the ideal 45-degree line than the other two results.

The bottom row of plots illustrates the exact comparisons instead of two superimposed plots of the regression predictions and actual values. Again, you can see that lasso outperformed both ridge and regular regression because its predictions track well with the actual values. In addition, the MSEs are displayed for all three models. The MSE for lasso is about 30 times less than the MSEs for ridge and regular linear regression. This table summarizes the relative performances of linear, ridge, and lasso regression methods in high and low SNR environments for sparse and non-sparse coefficients.

In all scenarios, lasso performs the best out of the three methods. Regular linear regression performs well in high SNR environments and poorly in low SNR environments. The methods rank similarly whether the SNR is high or low, with the ridge holding its rating in all cases. For low SNR, lasso and ridge are clear winners. In this video, you learned Regularization is a regression technique to prevent overfitting.

It constrains the model during training, discouraging it from overfitting to the training data. In ordinary linear regression, predictions are a linear combination of features, and the goal is to minimize the loss function. Ridge and lasso are regularized forms of linear regression that differ only in their cost functions. Regular linear regression has no penalty term, while ridge regression uses an L2, or sum of squares penalty, on its coefficients, which helps to shrink them. Lasso regressions use an L1, or sum of absolute values penalty on its coefficients.

Linear regression suffers from overfitting in the presence of noise because it is highly sensitive to outliers. You can use regularization techniques in conjunction with linear regression to mitigate such errors.

</details>
