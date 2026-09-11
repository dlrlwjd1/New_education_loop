# Model Evaluation using Visualization

## 개요
- 강좌: Data Analysis with Python
- 모듈: Model Development
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/istf4/model-evaluation-using-visualization)
- 회귀 플롯은 두 변수 간의 관계를 추정하는 좋은 방법입니다, 상관관계의 강도 그리고 관계의 방향(양수 또는 음수)을 나타내는 좋은 추정치입니다.
- 회귀 그래프를 그리는 방법에는 여러 가지가 있습니다.

## 내용
### 핵심 내용
- 회귀 플롯은 두 변수 간의 관계를 추정하는 좋은 방법입니다, 상관관계의 강도 그리고 관계의 방향(양수 또는 음수)을 나타내는 좋은 추정치입니다.
- 회귀 그래프를 그리는 방법에는 여러 가지가 있습니다.
- 예측값과 실제 값을 살펴보면 차이가 있음을 알 수 있습니다.
- 예측 값에서 실제 목표 값을 빼면 해당 값을 얻을 수 있습니다.
- 그런 다음 목표 값에 대해 이 과정을 반복합니다.
- 마지막 슬라이드의 플롯과 비교해보십시오, 예측 값이 목표 값에 훨씬 더 가깝다는 것을 알 수 있습니다.

### 한국어 Transcript

이 동영상에서는 시각화를 사용한 모델 평가에 대해 살펴보겠습니다. 회귀 플롯은 두 변수 간의 관계를 추정하는 좋은 방법입니다, 상관관계의 강도 그리고 관계의 방향(양수 또는 음수)을 나타내는 좋은 추정치입니다. 각 점은 서로 다른 목표 지점을 나타냅니다. 회귀 그래프를 그리는 방법에는 여러 가지가 있습니다. 간단한 방법은 AES 라이브러리에서 RegPlot을 사용하는 것입니다.

그런 다음 RegPlot 함수를 사용합니다. 매개변수 x는 독립 변수 또는 특징을 포함하는 열의 이름입니다. 매개변수 y는 종속 변수 또는 대상의 이름이 포함된 열의 이름입니다. 매개변수 데이터는 데이터 프레임의 이름입니다. 잔차 플롯은 실제 값 사이의 오차를 나타냅니다.

예측값과 실제 값을 살펴보면 차이가 있음을 알 수 있습니다. 예측 값에서 실제 목표 값을 빼면 해당 값을 얻을 수 있습니다. 그런 다음 독립 변수를 가로축으로 하여 세로축에 해당 값을 플롯합니다. 마찬가지로 두 번째 샘플에 대해서도 이 과정을 반복합니다, 예측값에서 목표값을 뺀 다음, 그리고 그에 따라 값을 플롯합니다. 플롯을 보면 데이터에 대한 인사이트를 얻을 수 있습니다.

결과는 평균이 0이 될 것으로 예상됩니다, 비슷한 분산으로 X축을 중심으로 고르게 분포되어 있습니다. 이러한 유형의 잔차 플롯은 선형 플롯이 적절하다는 것을 시사합니다. 예를 들어, 이 영역에서는 모든 잔차 오차가 양수입니다. 이는 선형 가정이 잘못되었음을 시사합니다. 이 플롯은 비선형 함수를 시사합니다.

다음 섹션에서 이 문제를 다루겠습니다. 이 플롯에서 잔차의 분산이 x에 따라 증가하는 것을 볼 수 있습니다. 따라서 우리의 모델은 올바르지 않습니다. Seaborn을 사용하여 잔차 플롯을 만들 수 있습니다. ResidPlot 함수를 사용합니다.

첫 번째 매개변수는 일련의 종속 변수 또는 특징입니다. 두 번째 매개변수는 일련의 종속 변수 또는 대상입니다. 이 경우 잔차에 곡률이 있음을 알 수 있습니다. 분포 플롯은 예측값과 실제값을 비교하여 카운트합니다. 이 플롯은 둘 이상의 독립 변수나 특징이 있는 모델을 시각화할 때 모델을 시각화하는 데 매우 유용합니다.

그런 다음 예측된 점의 수를 카운트하고 플롯합니다 의 수를 세고 플롯합니다. 그런 다음 예측된 점의 수를 세고 플롯합니다 의 수를 세어 플롯합니다. 대략 3과 같은 예측 포인트에 대해 이 과정을 반복합니다 에 대해 이 과정을 반복합니다. 그런 다음 목표 값에 대해 이 과정을 반복합니다. 이 경우 모든 목표 값은 대략 2와 같습니다.

히스토그램은 불연속적인 값을 위한 것입니다. 따라서 팬더는 이를 분포로 변환합니다. 세로축은 분포 아래의 영역이 이 1이 되도록 세로축의 크기가 조정됩니다. 이것은 분포도를 사용하는 예시입니다. 모델 결과의 적합 값은 파란색으로 표시됩니다.

40,000~50,000달러 범위의 가격에 대한 예측값을 볼 수 있습니다 범위의 가격 예측 값이 부정확합니다. 10,000에서 20,000 사이의 가격은 의 가격은 목표 값에 훨씬 더 가깝습니다. 이 예에서는 여러 기능 또는 독립 변수를 사용합니다. 마지막 슬라이드의 플롯과 비교해보십시오, 예측 값이 목표 값에 훨씬 더 가깝다는 것을 알 수 있습니다. 다음은 분포 플롯을 만드는 코드입니다.

두 번째 플롯에는 예상 값이 포함됩니다. 나머지 매개 변수는 그에 따라 설정됩니다.

## 예시
- 예를 들어, 이 영역에서는 모든 잔차 오차가 양수입니다.
- 이것은 분포도를 사용하는 예시입니다.
- 다음은 분포 플롯을 만드는 코드입니다.

## 요약
- 예측 값에서 실제 목표 값을 빼면 해당 값을 얻을 수 있습니다.
- 그런 다음 목표 값에 대해 이 과정을 반복합니다.
- 마지막 슬라이드의 플롯과 비교해보십시오, 예측 값이 목표 값에 훨씬 더 가깝다는 것을 알 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we'll look at model evaluation using visualization. Regression plots are a good estimate of the relationship between two variables, the strength of the correlation, and the direction of the relationship, positive or negative. The horizontal axis is the independent variable. The vertical axis is the dependent variable. Each point represents a different target point.

The fitted line represents the predicted value. There are several ways to plot a regression plot. A simple way is to use RegPlot from the Seaborn library. First, import Seaborn. Then use the RegPlot function.

The parameter x is the name of the column that contains the independent variable or feature. The parameter y contains the name of the column that contains the name of the dependent variable or target. The parameter data is the name of the data frame. The result is given by the plot. The residual plot represents the error between the actual value.

Examining the predicted value and actual value, we see a difference. We obtain that value by subtracting the predicted value and the actual target value. We then plot that value on the vertical axis with the independent variable as the horizontal axis. Similarly, for the second sample, we repeat the process, subtracting the target value from the predicted value, then plotting the value accordingly. Looking at the plot gives us some insight into our data.

We expect to see the results to have zero mean, distributed evenly around the x-axis with similar variance. There is no curvature. This type of residual plot suggests a linear plot is appropriate. In this residual plot, there is a curvature. The values of the error change with x.

For example, in the region, all the residual errors are positive. In this area, the residuals are negative. In the final location, the error is large. The residuals are not randomly separated. This suggests the linear assumption is incorrect.

This plot suggests a nonlinear function. We will deal with this in the next section. In this plot, we see that variance of the residuals increases with x. Therefore, our model is incorrect. We can use Seaborn to create a residual plot.

First, import Seaborn. We use the ResidPlot function. The first parameter is a series of dependent variable or feature. The second parameter is a series of dependent variable or target. We see in this case the residuals have a curvature.

A distribution plot counts the predicted value versus the actual value. These plots are extremely useful for visualizing models with more than one independent variable or feature. Let's look at a simplified example. We examine the vertical axis. We then count and plot the number of predicted points that are approximately equal to 1.

We then count and plot the number of predicted points that are approximately equal to 2. We repeat the process for predicted points that are approximately equal to 3. Then we repeat the process for the target values. In this case, all the target values are approximately equal to 2. The values of the targets and predicted values are continuous.

A histogram is for discrete values. Therefore, pandas will convert them to a distribution. The vertical axis is scaled to make the area under the distribution equal to 1. This is an example of using a distribution plot. The dependent variable or feature is price.

The fitted values that result from the model are in blue. The actual values are in red. We see the predicted values for prices in the range from 40,000 to 50,000 are inaccurate. The prices in the region from 10,000 to 20,000 are much closer to the target value. In this example, we use multiple features or independent variables.

Comparing it to the plot on the last slide, we see predicted values are much closer to the target values. Here is the code to create a distribution plot. The actual values are used as a parameter. We want a distribution instead of a histogram. The label is also included.

The predicted values are included for the second plot. The rest of the parameters are set accordingly.

</details>
