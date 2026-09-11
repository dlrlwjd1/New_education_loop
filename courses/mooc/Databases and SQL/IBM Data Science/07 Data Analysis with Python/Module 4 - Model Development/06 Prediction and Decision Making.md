# Prediction and Decision Making

## 개요
- 강좌: Data Analysis with Python
- 모듈: Model Development
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/4Li1D/prediction-and-decision-making)
- 이 비디오에서 마지막 주제는 예측과 의사 결정에 관한 것입니다.
- 가장 먼저 해야 할 일은 모델 결과가 의미가 있는지 확인하는 것입니다.

## 내용
### 핵심 내용
- 이 비디오에서 마지막 주제는 예측과 의사 결정에 관한 것입니다.
- 가장 먼저 해야 할 일은 모델 결과가 의미가 있는지 확인하는 것입니다.
- 기억하시겠지만 갤런당 고속도로 주행 거리를 기준으로 가격을 예측하는 단순 선형 모델의 표현식입니다.
- 예를 들어 갤런당 고속도로 주행 거리를 0에서 100 사이의 범위로 표시하면 가격에 대해 음수 값이 나옵니다.
- 예를 들어, 30,000달러에서 50,000달러 사이의 가격에 대한 예측값이 정확하지 않다는 것을 알 수 있습니다.
- 평균 제곱 오차는 아마도 모형이 좋은지 아닌지를 판단하기 위한 가장 직관적인 수치 측정값일 것입니다.

### 한국어 Transcript

이 비디오에서 마지막 주제는 예측과 의사 결정에 관한 것입니다. 모델이 올바른지 어떻게 확인할 수 있습니까? 가장 먼저 해야 할 일은 모델 결과가 의미가 있는지 확인하는 것입니다. 평가 및 서로 다른 모델 간의 비교를 위해 항상 시각화, 수치 측정을 사용해야 합니다. 기억하시겠지만, 우리는 fit 방법을 사용하여 모델을 훈련시켰습니다.

이제 갤런당 고속도로 주행 거리가 30인 자동차의 가격이 얼마인지 알아보겠습니다. 이 값을 예측 방법에 대입하면 결과 가격은 $13,771.30이 됩니다. 예를 들어 값이 음수, 매우 높거나, 매우 낮지 않습니다. coef 밑줄 속성을 검토하여 계수를 확인할 수 있습니다. 기억하시겠지만 갤런당 고속도로 주행 거리를 기준으로 가격을 예측하는 단순 선형 모델의 표현식입니다.

이 값은 갤런당 고속도로 주행 거리의 배수에 해당합니다. 따라서 갤런당 고속도로 주행 거리가 1 단위 증가하면 자동차 가치는 약 821 달러 감소합니다. 때로는 모델이 의미가 없는 값을 생성하기도 합니다. 예를 들어 갤런당 고속도로 주행 거리를 0에서 100 사이의 범위로 표시하면 가격에 대해 음수 값이 나옵니다. 이는 해당 범위의 값이 현실적이지 않기 때문일 수 있습니다.

선형 가정이 올바르지 않거나 해당 범위의 자동차에 대한 데이터가 없습니다. 이 경우 자동차의 연비가 해당 범위 내에서 유지될 가능성은 거의 없으므로 우리 모델이 유효해 보입니다. 지정된 범위의 값 시퀀스를 생성하려면 numpy를 가져온 다음 numpy range 함수를 사용하여 시퀀스를 생성하십시오. 시퀀스는 1에서 시작하여 100에 도달할 때까지 1씩 증가합니다. 첫 번째 매개변수는 시퀀스의 시작점입니다.

두 번째 파라미터는 끝점에 시퀀스의 1을 더한 값입니다. 마지막 파라미터는 시퀀스의 요소 간 스텝 크기입니다. 이 경우에는 1이므로 시퀀스를 1에서 2로 한 번에 한 단계씩 증가시키는 식입니다. 출력값을 사용하여 새 값을 예측할 수 있습니다. 가장 먼저 시도해야 하는 방법은 회귀도를 사용하여 데이터를 시각화하는 것입니다.

다항식 회귀를 플로팅하는 방법에 대한 예는 실습을 참조하십시오. 이 예에서는 독립 변수의 효과가 이 경우에 분명하게 나타납니다. 종속 변수가 증가하면 데이터 추세가 낮아집니다. 이 플롯은 일부 비선형 동작도 보여줍니다. 잔차 그림을 살펴보면 이 경우 잔차의 곡률이 있어 비선형 동작을 암시하는 것을 알 수 있습니다.

분포도는 다중 선형 회귀에 적합한 방법입니다. 예를 들어, 30,000달러에서 50,000달러 사이의 가격에 대한 예측값이 정확하지 않다는 것을 알 수 있습니다. 이는 비선형 모델이 더 적합하거나 이 범위에서 더 많은 데이터가 필요할 수 있음을 시사합니다. 평균 제곱 오차는 아마도 모형이 좋은지 아닌지를 판단하기 위한 가장 직관적인 수치 측정값일 것입니다. 다양한 평균 제곱 오차 측정값이 모델에 미치는 영향을 살펴보겠습니다.

그림은 평균 제곱 오차 3,495의 예를 보여줍니다. 이 예제의 평균 제곱 오차는 3,652입니다. 최종 그림의 평균 제곱 오차는 12,870입니다. 제곱 오차가 커질수록 목표값은 예측점에서 멀어집니다. 앞서 설명했듯이 R-제곱은 모델을 평가하는 데 널리 사용되는 또 다른 방법입니다.

이 그림에서는 목표점이 빨간색으로 표시되고 예측선이 파란색으로 표시됩니다. 이 모델의 R-제곱은 0.9226입니다. 여전히 강력한 선형 관계가 있습니다. 데이터는 훨씬 더 복잡하지만 선형 관계는 분명합니다. 선형 함수는 보기 어렵지만 자세히 살펴보면 독립 변수와 함께 데이터가 증가하는 것을 볼 수 있습니다.

R-제곱의 허용 값은 공부하는 분야에 따라 다릅니다. 일부 저자는 값이 0.10 이상이어야 한다고 제안합니다. MLR과 SLR을 비교할 때 MSE가 낮을수록 항상 더 적합할까요? MLR 모델의 MSE는 모델에 더 많은 변수가 포함되면 데이터 오류가 감소하므로 SLR 모델의 MSE보다 작습니다. 또한 다항식 회귀의 MSE는 일반 회귀보다 작습니다.

R-제곱에도 비슷한 역 관계가 적용됩니다. 다음 섹션에서는 모델을 평가하는 더 좋은 방법을 살펴보겠습니다.

## 예시
- 예를 들어 값이 음수, 매우 높거나, 매우 낮지 않습니다.
- 예를 들어 갤런당 고속도로 주행 거리를 0에서 100 사이의 범위로 표시하면 가격에 대해 음수 값이 나옵니다.
- 다항식 회귀를 플로팅하는 방법에 대한 예는 실습을 참조하십시오.
- 예를 들어, 30,000달러에서 50,000달러 사이의 가격에 대한 예측값이 정확하지 않다는 것을 알 수 있습니다.

## 요약
- 예를 들어 갤런당 고속도로 주행 거리를 0에서 100 사이의 범위로 표시하면 가격에 대해 음수 값이 나옵니다.
- 예를 들어, 30,000달러에서 50,000달러 사이의 가격에 대한 예측값이 정확하지 않다는 것을 알 수 있습니다.
- 평균 제곱 오차는 아마도 모형이 좋은지 아닌지를 판단하기 위한 가장 직관적인 수치 측정값일 것입니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, our final topic will be on prediction and decision making. How can we determine if our model is correct? The first thing you should do is make sure your model results make sense. You should always use visualization, numerical measures for evaluation, and comparing between different models. Let's look at an example of prediction.

If you recall, we trained the model using the fit method. Now we want to find out what the price would be for a car that has a highway miles per gallon of 30. Plugging this value into the predict method gives us a resulting price of $13,771.30. This seems to make sense. For example, the value is not negative, extremely high, or extremely low.

We can look at the coefficients by examining the coef underscore attribute. If you recall, the expression for the simple linear model that predicts price from highway miles per gallon. This value corresponds to the multiple of a highway miles per gallon feature. As such, an increase of 1 unit in highway miles per gallon, the value of the car decreases approximately $821. This value also seems reasonable.

Sometimes your model will produce values that don't make sense. For example, if we plot the model out for highway miles per gallon in the ranges of 0 to 100, we get negative values for the price. This could be because the values in that range are not realistic. The linear assumption is incorrect, or we don't have data for cars in that range. In this case, it is unlikely that a car will have fuel mileage in that range, so our model seems valid.

To generate a sequence of values in a specified range, import numpy, then use the numpy arrange function to generate the sequence. The sequence starts at 1 and increments by 1 till we reach 100. The first parameter is the starting point of the sequence. The second parameter is the endpoint plus 1 of the sequence. The final parameter is the step size between elements in the sequence.

In this case, it's 1, so we increment the sequence one step at a time, from 1 to 2, and so on. We can use the output to predict new values. The output is a numpy array. Many of the values are negative. Using a regression plot to visualize your data is the first method you should try.

See the labs for examples of how to plot polynomial regression. For this example, the effect of the independent variable is evident in this case. The data trends down as the dependent variable increases. The plot also shows some non-linear behavior. Examining the residual plot, we see in this case the residuals have a curvature suggesting non-linear behavior.

A distribution plot is a good method for multiple linear regression. For example, we see the predicted values for prices in the range from $30,000 to $50,000 are inaccurate. This suggests a non-linear model may be more suitable, or we need more data in this range. The mean square error is perhaps the most intuitive numerical measure for determining if a model is good or not. Let's see how different measures of mean square error impact the model.

The figure shows an example of a mean square error of 3,495. This example has a mean square error of 3,652. The final plot has a mean square error of 12,870. As the square error increases, the targets get further from the predicted points. As we discussed, R-squared is another popular method to evaluate your model.

In this plot, we see the target points in red and the predicted line in blue. An R-squared of 0.9986. The model appears to be a good fit. This model has an R-squared of 0.9226. There still is a strong linear relationship.

An R-squared of 0806. The data is a lot more messy, but the linear relation is evident. An R-squared of 0.61. The linear function is harder to see, but on closer inspection, we see the data is increasing with the independent variable. An acceptable value for R-squared depends on what field you're studying.

Some authors suggest a value should be equal to or greater than 0.10. Comparing MLR and SLR, is a lower MSE always implying a better fit? MSE for an MLR model will be smaller than the MSE for an SLR model, since the errors of the data will decrease when more variables are included in the model. Polynomial regression will also have a smaller MSE than regular regression. A similar inverse relationship holds for R-squared.

In the next section, we'll look at better ways to evaluate the model.

</details>
