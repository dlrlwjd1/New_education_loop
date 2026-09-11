# Descriptive Statistics

## 개요
- 강좌: Data Analysis with Python
- 모듈:  Exploratory Data Analysis
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/j0BSu/descriptive-statistics)
- 이 비디오에서는 기술 통계에 대해 설명해 보겠습니다.
- 데이터 분석을 시작할 때는 복잡한 모델을 만드는 데 시간을 소비하기 전에 먼저 데이터를 탐색하는 것이 중요합니다.

## 내용
### 핵심 내용
- 이 비디오에서는 기술 통계에 대해 설명해 보겠습니다.
- 데이터 분석을 시작할 때는 복잡한 모델을 만드는 데 시간을 소비하기 전에 먼저 데이터를 탐색하는 것이 중요합니다.
- 예를 들어, 데이터셋에는 전륜 구동, 후륜 구동 및 사륜 구동 범주로 구성된 범주형 변수로 드라이브 시스템이 있습니다.
- 박스 플롯을 사용하면 이상치를 쉽게 찾아내고 데이터의 분포와 왜도도 확인할 수 있습니다.
- 이 예제에서는 박스 플롯을 사용하여 가격 특성에 따른 다양한 범주의 드라이브 휠 기능 분포를 확인할 수 있습니다.
- 스캐터 차트를 보면 엔진 크기가 커질수록 자동차 가격도 올라가는 것을 알 수 있습니다.

### 한국어 Transcript

이 비디오에서는 기술 통계에 대해 설명해 보겠습니다. 데이터 분석을 시작할 때는 복잡한 모델을 만드는 데 시간을 소비하기 전에 먼저 데이터를 탐색하는 것이 중요합니다. 이를 위한 쉬운 방법 중 하나는 데이터에 대한 기술 통계를 계산하는 것입니다. 설명적 통계 분석을 통해 데이터셋의 기본 기능을 설명하고 데이터의 표본 및 측정값에 대한 간략한 요약을 얻을 수 있습니다. 몇 가지 유용한 방법을 보여 드리겠습니다.

이 작업을 수행할 수 있는 한 가지 방법은 Pandas에서 설명된 함수를 사용하는 것입니다. 설명된 함수를 사용하여 데이터 프레임에 적용하면 설명된 함수가 모든 수치 변수에 대한 기본 통계를 자동으로 계산합니다. 평균, 총 데이터 포인트 수, 표준 편차, 사분위수, 극단값을 보여줍니다. 이 통계에서는 모든 NaN 값을 자동으로 건너뛰습니다. 이 함수를 사용하면 다양한 변수의 분포를 더 명확하게 파악할 수 있습니다.

데이터셋에 범주형 변수를 포함할 수도 있습니다. 이러한 변수는 여러 범주 또는 그룹으로 나눌 수 있고 불연속형 값을 가질 수 있습니다. 예를 들어, 데이터셋에는 전륜 구동, 후륜 구동 및 사륜 구동 범주로 구성된 범주형 변수로 드라이브 시스템이 있습니다. 범주형 데이터를 요약할 수 있는 한 가지 방법은 value_counts 함수를 사용하는 것입니다. 읽기 쉽도록 열 이름을 변경할 수 있습니다.

전륜 구동 카테고리에는 118대, 후륜 구동 카테고리에는 75대, 사륜 구동 카테고리에는 8대의 차량이 있는 것으로 확인되었습니다. 박스 플롯은 데이터의 다양한 분포를 시각화할 수 있기 때문에 수치 데이터를 시각화하는 좋은 방법입니다. 박스 플롯이 보여주는 주요 특징은 중간 데이터 지점의 위치를 나타내는 데이터의 중앙값이고, 상위 사분위수는 75번째 백분위수의 위치를, 하위 사분위수는 25번째 백분위수의 위치를 나타냅니다. 상한 사분위수와 하한 사분위수 사이의 데이터는 사분위수 간 범위를 나타냅니다. 다음으로 하한과 상한 극단이 나옵니다.

이 값은 75번째 백분위수 이상의 사분위수 범위의 1.5배, 25번째 백분위수 미만의 IQR의 1.5배로 계산됩니다. 마지막으로 박스 플롯은 이상치를 상한 및 하한 극단 외부에서 발생하는 개별 점으로 표시합니다. 박스 플롯을 사용하면 이상치를 쉽게 찾아내고 데이터의 분포와 왜도도 확인할 수 있습니다. 박스 플롯을 사용하면 그룹 간에 쉽게 비교할 수 있습니다. 이 예제에서는 박스 플롯을 사용하여 가격 특성에 따른 다양한 범주의 드라이브 휠 기능 분포를 확인할 수 있습니다.

후륜 구동과 다른 카테고리 간의 가격 분포가 뚜렷하다는 것을 알 수 있습니다. 하지만 전륜 구동과 사륜 구동의 가격은 거의 구분할 수 없습니다. 데이터에 연속적인 변수가 나타나는 경향이 있는 경우가 많습니다. 이러한 데이터 포인트는 일정 범위에 포함된 숫자입니다. 예를 들어, 데이터셋에서 가격과 엔진 크기는 연속형 변수입니다.

엔진 크기와 가격 간의 관계를 이해하려면 어떻게 해야 할까요? 엔진 크기가 자동차 가격을 예측할 수 있을까요? 이를 시각화하는 좋은 방법 중 하나는 스캐터 차트를 사용하는 것입니다. 스캐터 차트의 각 관측치는 점으로 표시됩니다. 이 그림은 두 변수 간의 관계를 보여줍니다.

예측 변수는 결과를 예측하는 데 사용하는 변수입니다. 이 경우 예측 변수는 엔진 크기입니다. 스캐터 차트에서는 일반적으로 예측 변수를 x축이나 가로축에 설정하고 대상 변수는 y축이나 세로축에 설정합니다. 이 경우 x축에는 엔진 크기를, y축에는 가격을 플로팅해 보겠습니다. 여기서는 x와 y 변수를 가져오는 Matplotlib 함수 스캐터를 사용하고 있습니다.

한 가지 주목할 점은 좌표축에 레이블을 지정하고 일반적인 도표 제목을 작성하여 보고 있는 내용을 파악하는 것이 항상 중요하다는 것입니다. 자, 가변 엔진 크기는 가격과 어떤 관련이 있을까요? 스캐터 차트를 보면 엔진 크기가 커질수록 자동차 가격도 올라가는 것을 알 수 있습니다. 이것은 이 두 변수 사이에 양의 선형 관계가 있다는 초기 지표를 제공합니다.

## 예시
- 예를 들어, 데이터셋에는 전륜 구동, 후륜 구동 및 사륜 구동 범주로 구성된 범주형 변수로 드라이브 시스템이 있습니다.
- 예를 들어, 데이터셋에서 가격과 엔진 크기는 연속형 변수입니다.

## 요약
- 박스 플롯을 사용하면 이상치를 쉽게 찾아내고 데이터의 분포와 왜도도 확인할 수 있습니다.
- 이 예제에서는 박스 플롯을 사용하여 가격 특성에 따른 다양한 범주의 드라이브 휠 기능 분포를 확인할 수 있습니다.
- 스캐터 차트를 보면 엔진 크기가 커질수록 자동차 가격도 올라가는 것을 알 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we'll be talking about descriptive statistics. When you begin to analyze data, it's important to first explore your data before you spend time building complicated models. One easy way to do so is to calculate some descriptive statistics for your data. Descriptive statistical analysis helps to describe basic features of a dataset and obtains a short summary about the sample and measures of the data. Let's show you a couple different useful methods.

One way in which we can do this is by using the describe function in pandas. Using the describe function and applying it on your data frame, a describe function automatically computes basic statistics for all numerical variables. It shows the mean, the total number of data points, the standard deviation, the quartiles, and the extreme values. Any NaN values are automatically skipped in these statistics. This function will give you a clearer idea of the distribution of your different variables.

You could have also categorical variables in your dataset. These are variables that can be divided up into different categories or groups and have discrete values. For example, in our dataset, we have the drive system as a categorical variable, which consists of the categories forward wheel-drive, rear wheel-drive, and four wheel-drive. One way you can summarize the categorical data is by using the function value_counts. We can change the name of the column to make it easier to read.

We see that we have 118 cars in the front wheel-drive category, 75 cars in the rear wheel-drive category, and eight cars in the four wheel-drive category. Box plots are a great way to visualize numeric data, since you can visualize the various distributions of the data. The main features that the box plot shows are the median of the data which represents where the middle data point is, the upper quartile shows where the 75th percentile is, the lower quartile shows where the 25th percentile is. The data between the upper and lower quartile represents the inter-quartile range. Next, you have the lower and upper extremes.

These are calculated as 1.5 times the inter-quartile range above the 75th percentile, and as 1.5 times the IQR below the 25th percentile. Finally, box plots also display outliers as individual dots that occur outside the upper and lower extremes. With box plots, you can easily spot outliers and also see the distribution and skewness of the data. Box plots make it easy to compare between groups. In this example, using box plot, we can see the distribution of different categories of the drive-wheels feature over price feature.

We can see that the distribution of price between the rear wheel-drive and the other categories are distinct. But the price for front wheel-drive and four wheel-drive are almost indistinguishable. Oftentimes, we tend to see continuous variables in our data. These data points are numbers contained in some range. For example, in our dataset, price and engine size are continuous variables.

What if we want to understand the relationship between engine size and price? Could engine size possibly predict the price of a car? One good way to visualize this is using a scatter plot. Each observation in a scatter plot is represented as a point. This plot shows the relationship between two variables.

The predictor variable is the variable that you are using to predict an outcome. In this case, our predictor variable is the engine size. The target variable is the variable that you are trying to predict. In this case, our target variable is the price since this would be the outcome. In a scatter plot, we typically set the predictor variable on the x-axis or horizontal axis, and we set the target variable on the y-axis or vertical axis.

In this case, we will thus plot the engine size on the x-axis and the price on the y-axis. We are using the Matplotlib function scatter here, taking in x and a y variable. Something to note is that it's always important to label your axes and write a general plot title so that you know what you're looking at. Now, how is the variable engine size related to price? From the scatter plot, we see that as the engine size goes up, the price of the car also goes up.

This is giving us an initial indication that there is a positive linear relationship between these two variables.

</details>
