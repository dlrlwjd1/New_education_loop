# Measures for In-Sample Evaluation

## 개요
- 강좌: Data Analysis with Python
- 모듈: Model Development
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/h6K6H/measures-for-in-sample-evaluation)
- 시각화를 사용하여 모델을 평가하는 방법을 살펴보았으니 이제 모델을 수치적으로 평가해 보겠습니다.
- 이러한 측정값은 모형이 데이터에 얼마나 적합한지 수치적으로 결정하는 방법입니다.

## 내용
### 핵심 내용
- 시각화를 사용하여 모델을 평가하는 방법을 살펴보았으니 이제 모델을 수치적으로 평가해 보겠습니다.
- 이러한 측정값은 모형이 데이터에 얼마나 적합한지 수치적으로 결정하는 방법입니다.
- 빨간색 사각형은 빨간색 선의 MSE를 나타냅니다.
- 파란색 사각형의 면적이 빨간색 사각형의 면적보다 훨씬 작다는 것을 알 수 있습니다.
- 이전 슬라이드에서 나온 이 값을 R 제곱에 연결하면 거의 1에 가까운 값을 얻을 수 있습니다.
- 파란색 사각형과 빨간색 사각형의 면적을 비교해 보면 면적이 거의 동일하다는 것을 알 수 있습니다.

### 한국어 Transcript

시각화를 사용하여 모델을 평가하는 방법을 살펴보았으니 이제 모델을 수치적으로 평가해 보겠습니다. 표본 내 평가에 사용하는 몇 가지 측정값을 살펴보겠습니다. 이러한 측정값은 모형이 데이터에 얼마나 적합한지 수치적으로 결정하는 방법입니다. 모델의 적합도를 결정하기 위해 자주 사용하는 두 가지 중요한 측정값은 평균 제곱, 오차, MSE 및 R-제곱입니다. MSE를 측정하기 위해 실제 값 y와 예측값 y의 차이를 구한 다음 제곱합니다.

그런 다음 모든 오류를 모두 더하고 샘플 수로 나누어 평균 또는 평균을 구합니다. 파이썬에서 MSE를 찾기 위해 sk. metrics에서 mean_squared_error를 가져올 수 있습니다. mean_squared_error 함수는 목표 변수의 실제 값과 목표 변수의 예측 값이라는 두 개의 입력값을 가져옵니다. 데이터가 적합 회귀선에 얼마나 가까운지를 확인하기 위한 척도입니다.

그렇다면 실제 데이터는 추정 모델에 얼마나 근접할까요? 회귀 모델을 단순한 모델 , 즉 데이터 포인트의 평균과 비교하는 것으로 생각하십시오. 변수 x가 좋은 예측 변수라면 우리의 모델은 평균보다 훨씬 더 나은 성능을 보일 것입니다. 이 예제에서 데이터 포인트 y bar의 평균은 6입니다. 결정 계수 R 제곱은 1에서 회귀선의 MSE를 데이터 포인트 평균의 MSE로 나눈 비율을 뺀 값입니다.

대부분의 경우 0과 1 사이의 값을 사용합니다. 라인이 비교적 잘 맞는 경우를 살펴보겠습니다. 파란색 사각형은 회귀선의 MSE를 나타냅니다. 빨간색 선은 데이터 포인트의 평균값을 나타냅니다. 빨간색 사각형은 빨간색 선의 MSE를 나타냅니다.

파란색 사각형의 면적이 빨간색 사각형의 면적보다 훨씬 작다는 것을 알 수 있습니다. 이 경우 선이 적합하기 때문에 평균 제곱 오차가 작습니다. 데이터 평균의 평균 제곱 오차는 분모가 클수록 큽니다. 작은 수를 큰 숫자로 나눈 값은 더 작은 숫자입니다. 극단적으로 보면 이 값은 0이 되는 경향이 있습니다.

이전 슬라이드에서 나온 이 값을 R 제곱에 연결하면 거의 1에 가까운 값을 얻을 수 있습니다. 이는 선이 데이터에 적합하다는 것을 의미합니다. 다음은 데이터에 잘 맞지 않는 선의 예입니다. 파란색 사각형과 빨간색 사각형의 면적을 비교해 보면 면적이 거의 동일하다는 것을 알 수 있습니다. 이 경우 R 제곱은 0에 가깝습니다.

이 선의 성능은 데이터 포인트의 평균을 사용하는 것과 거의 같습니다. 따라서 이 라인은 실적이 좋지 않았습니다. 선형 회귀 객체에서 score 메서드를 사용하여 Python에서 R 제곱 값을 찾습니다. 이 예제에서 얻은 값에서 가격 변동의 약 49.659% 가 이 간단한 선형 모델로 설명된다고 말할 수 있습니다. R 제곱 값은 일반적으로 0과 1 사이입니다.

r 제곱이 음수이면 과적합으로 인한 것일 수 있습니다. 이에 대해서는 다음 모듈에서 설명하겠습니다.

## 예시
- 이 강의는 개념 설명 중심이며 Transcript에서 독립된 예시를 확인하기 어렵다.

## 요약
- 파란색 사각형의 면적이 빨간색 사각형의 면적보다 훨씬 작다는 것을 알 수 있습니다.
- 이전 슬라이드에서 나온 이 값을 R 제곱에 연결하면 거의 1에 가까운 값을 얻을 수 있습니다.
- 파란색 사각형과 빨간색 사각형의 면적을 비교해 보면 면적이 거의 동일하다는 것을 알 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

Now that we've seen how we can evaluate a model by using visualization, we want to numerically evaluate our models. Let's look at some of the measures that we use for in-sample evaluation. These measures are a way to numerically determine how good the model fits on our data. Two important measures that we often use to determine the fit of a model are mean squared, error, MSE and R-squared. To measure the MSE, we find the difference between the actual value y and the predicted value y Hat then square it.

In this case, the actual value is 150. The predicted value is 50. Subtracting these points, we get 100. We then square the number. We then take the mean or average of all the errors by adding them all together and dividing by the number of samples.

To find the MSE in Python, we can import the mean_squared_error from sk. The mean_squared_error function gets two inputs, the actual value of target variable and the predicted value of target variable. R squared is also called the coefficient of determination. It's a measure to determine how close the data is to the fitted regression line. So how close is our actual data to our estimated model?

Think about it as comparing a regression model to a simple model, i. e., the mean of the data points. If the variable x is a good predictor, our model should perform much better than just the mean. In this example, the average of the data points y bar is six. Coefficient of determination R squared is one minus the ratio of the MSE of the regression line divided by the MSE of the average of the data points.

For the most part, it takes values between zero and one. Let's look at a case where the line provides a relatively good fit. The blue line represents the regression line. The blue squares represent the MSE of the regression line. The red line represents the average value of the data points.

The red squares represent the MSE of the red line. We see the area of the blue squares is much smaller than the area of the red squares. In this case, because the line is a good fit, the mean squared error is small. Therefore the numerator is small. The mean squared error of the average of the data is large as the denominator is large.

A small number divided by a larger number is an even smaller number. Taken to an extreme, this value tends to zero. If we plug in this value from the previous slide for R squared, we get a value near one. This means the line is a good fit for the data. Here is an example of a line that does not fit the data well.

If we just examine the area of the red squares compared to the blue squares, we see the area is almost identical. The ratio of the areas is close to one. In this case, the R squared is near zero. This line performs about the same as just using the average of the data points. Therefore, this line did not perform well.

We find the R squared value in Python by using the score method in the linear regression object. From the value that we get from this example, we can say that approximately 49.659% of the variation of price is explained by this simple linear model. Your R squared value is usually between zero and one. If your r square is negative, it can be due to overfitting that we will discuss in the next module.

</details>
