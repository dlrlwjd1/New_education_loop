# Ridge Regression

## 개요
- 강좌: Data Analysis with Python
- 모듈: Model Evaluation and Refinement
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/Zf9X5/ridge-regression)
- 이 비디오에서는 시각화를 위한 다항식 회귀에 초점을 맞출 것입니다.
- 하지만 독립 변수 또는 특성이 여러 개 있는 경우 과적합은 큰 문제이기도 합니다.

## 내용
### 핵심 내용
- 이 비디오에서는 시각화를 위한 다항식 회귀에 초점을 맞출 것입니다.
- 하지만 독립 변수 또는 특성이 여러 개 있는 경우 과적합은 큰 문제이기도 합니다.
- 10차 다항식 함수를 사용하여 데이터를 피팅하는 경우 파란색으로 표시된 추정된 함수는 올바르지 않으며 주황색으로 표시된 실제 함수의 추정치가 아닙니다.
- 알파가 0.01인 경우 추정된 함수는 실제 함수를 추적합니다.
- 이 값을 반복하여 더 큰 Alpha 값을 구하십시오.
- 모델을 다시 훈련시키고 검증 데이터를 사용하여 예측한 다음 R^2를 계산하고 R^2의 값을 저장합니다.

### 한국어 Transcript

이 비디오에서는 능선 회귀에 대해 설명합니다. 이 비디오에서는 시각화를 위한 다항식 회귀에 초점을 맞출 것입니다. 하지만 독립 변수 또는 특성이 여러 개 있는 경우 과적합은 큰 문제이기도 합니다. 주황색으로 표시된 다음 4차 다항식을 생각해 보십시오. 이 함수에서 파란색 점이 생성됩니다.

10차 다항식을 사용하여 데이터를 피팅할 수 있습니다. 파란색으로 표시된 추정된 함수는 실제 함수의 근사치를 구하는 데 효과적입니다. 대부분의 경우 실제 데이터에는 특이치가 있습니다. 예를 들어, 여기에 표시된 이 점은 오렌지색으로 표시된 함수에서 비롯된 것으로 보이지 않습니다. 10차 다항식 함수를 사용하여 데이터를 피팅하는 경우 파란색으로 표시된 추정된 함수는 올바르지 않으며 주황색으로 표시된 실제 함수의 추정치가 아닙니다.

추정된 함수의 식을 살펴보면 추정된 다항식 계수의 크기가 매우 크다는 것을 알 수 있습니다. 이는 고차 다항식에서 특히 두드러집니다. 릿지 회귀는 알파 파라미터를 도입하여 이러한 다항식 계수의 크기를 제어합니다. 알파는 모델을 피팅하거나 학습시키기 전에 선택하는 파라미터입니다. 다음 표의 각 행은 증가하는 알파 값을 나타냅니다.

서로 다른 Alpha 값이 모델을 어떻게 변화시키는지 살펴보겠습니다. 이 표는 다양한 Alpha 값에 대한 다항식 계수를 나타냅니다. 열은 여러 다항식 계수에 해당하고 행은 서로 다른 Alpha 값에 해당합니다. 알파가 증가할수록 매개변수는 작아집니다. 이는 고차 다항식 특징에서 가장 뚜렷하게 나타납니다.

하지만 알파는 신중하게 선택해야 합니다. 알파가 너무 크면 계수가 0에 가까워져 데이터에 과소적합이 발생합니다. 알파가 0이면 과적합이 분명하게 나타납니다. 알파가 0.001이면 오버피팅이 줄어들기 시작합니다. 알파가 0.01인 경우 추정된 함수는 실제 함수를 추적합니다.

알파가 1과 같으면 과소 적합의 첫 징후가 나타납니다. 추정된 함수의 유연성이 충분하지 않습니다. 알파가 10이면 극도로 불적합이 나타납니다. Alpha를 선택하기 위해 교차 검증을 사용합니다. 능선 회귀를 사용하여 예측하려면 sklearn 선형 모델에서 능선을 가져오십시오.

생성자를 사용하여 릿지 객체를 생성합니다. 매개 변수 Alpha는 생성자의 인수 중 하나입니다. fit 메서드를 사용하여 모델을 학습시킵니다. 예측을 하기 위해 predict 방법을 사용합니다. 파라미터 Alpha를 결정하기 위해 일부 데이터를 훈련에 사용합니다.

검증 데이터라는 두 번째 세트를 사용합니다. 이는 테스트 데이터와 비슷하지만 알파와 같은 매개변수를 선택하는 데 사용됩니다. 먼저 작은 알파 값부터 시작하겠습니다. 모델을 학습시키고 검증 데이터를 사용하여 예측한 다음 R^2를 계산하고 값을 저장합니다. 이 값을 반복하여 더 큰 Alpha 값을 구하십시오.

모델을 다시 훈련시키고 검증 데이터를 사용하여 예측한 다음 R^2를 계산하고 R^2의 값을 저장합니다. 다른 알파 값에 대해 이 과정을 반복하여 모델을 훈련시키고 예측을 수행합니다. R^2를 최대화하는 알파 값을 선택합니다. 참고로 평균 제곱 오차와 같은 다른 메트릭을 사용하여 알파 값을 선택할 수 있습니다. 기능이 많으면 과적합 문제는 더 심각해집니다.

다음 그림은 세로축에 있는 R^2의 다양한 값을 보여줍니다. 가로 축은 Alpha의 다양한 값을 나타냅니다. 중고차 데이터 세트의 여러 특징과 2차 다항식 함수를 사용합니다. 훈련 데이터는 빨간색이고 검증 데이터는 파란색입니다. Alpha 값이 증가하면 R^2의 값도 증가하고 약 0.75로 수렴하는 것을 알 수 있습니다.

이 경우 알파의 최대값을 선택합니다. 더 높은 알파 값을 대상으로 실험을 실행해도 영향이 거의 없기 때문입니다. 반대로 알파가 증가하면 테스트 데이터의 R^2가 감소합니다. 이는 알파라는 용어가 과적합을 방지하기 때문입니다. 이렇게 하면 보이지 않는 데이터의 결과가 개선될 수 있지만 테스트 데이터에서 모델의 성능이 저하됩니다.

이 플롯을 생성하는 방법은 실습을 참조하십시오.

## 예시
- 예를 들어, 여기에 표시된 이 점은 오렌지색으로 표시된 함수에서 비롯된 것으로 보이지 않습니다.
- 이 플롯을 생성하는 방법은 실습을 참조하십시오.

## 요약
- 알파가 0.01인 경우 추정된 함수는 실제 함수를 추적합니다.
- 이 값을 반복하여 더 큰 Alpha 값을 구하십시오.
- 모델을 다시 훈련시키고 검증 데이터를 사용하여 예측한 다음 R^2를 계산하고 R^2의 값을 저장합니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we'll discuss ridge regression. Ridge regression prevents overfitting. In this video, we will focus on polynomial regression for visualization. But overfitting is also a big problem when you have multiple independent variables or features. Consider the following fourth order polynomial in orange.

The blue points are generated from this function. We can use a 10th order polynomial to fit the data. The estimated function in blue does a good job at approximating the true function. In many cases, real data has outliers. For example, this point shown here does not appear to come from the function in orange.

If we use a 10th order polynomial function to fit the data, the estimated function in blue is incorrect and is not a good estimate of the actual function in orange. If we examine the expression for the estimated function, we see the estimated polynomial coefficients have a very large magnitude. This is especially evident for the higher order polynomials. Ridge regression controls the magnitude of these polynomial coefficients by introducing the parameter Alpha. Alpha is a parameter we select before fitting or training the model.

Each row in the following table represents an increasing value of Alpha. Let's see how different values of Alpha change the model. This table represents the polynomial coefficients for different values of Alpha. The column corresponds to the different polynomial coefficients, and the rows correspond to the different values of Alpha. As Alpha increases, the parameters get smaller.

This is most evident for the higher order polynomial features. But Alpha must be selected carefully. If Alpha is too large, the coefficients will approach zero and underfit the data. If Alpha is zero, the overfitting is evident. For Alpha equal to 0.001 the overfitting begins to subside.

For Alpha equal to 0.01 the estimated function tracks the actual function. When Alpha equals one, we see the first signs of underfitting. The estimated function does not have enough flexibility. At Alpha equals to 10, we see extreme underfitting. It does not even track the two points.

In order to select Alpha, we use cross validation. To make a prediction using ridge regression import ridge from sklearn linear models. Create a ridge object using the constructor. The parameter Alpha is one of the arguments of the constructor. We train the model using the fit method.

To make a prediction we use the predict method. In order to determine the parameter Alpha we use some data for training. We use a second set called validation data. This is similar to test data, but it is used to select parameters like Alpha. We start with a small value of Alpha.

We train the model, make a prediction using the validation data, then calculate the R^2 and store the values. Repeat the value for a larger value of Alpha. We train the model again, make a prediction using the validation data, then calculate the R^2 and store the values of R^2. We repeat the process for a different Alpha value, training the model and making a prediction. We select the value of Alpha that maximizes the R^2.

Note that we can use other metrics to select the value of Alpha, like mean squared error. The overfitting problem is even worse if we have lots of features. The following plot shows the different values of R^2 on the vertical axis. The horizontal axis represents different values for Alpha. We use several features from our used car data set and a second order polynomial function.

The training data is in red and validation data is in blue. We see as the value of Alpha increases, the value of R^2 increases and converges at approximately 0.75. In this case, we select the maximum value of Alpha because running the experiment for higher values of Alpha have little impact. Conversely, as Alpha increases, the R^2 on the test data decreases. This is because the term Alpha prevents overfitting.

This may improve the results in the unseen data, but the model has worse performance on the test data. See the lab on how to generate this plot.

</details>
