# Types of Plots

## 개요
- 강좌: Data Visualization with Python
- 모듈: Introduction to Data Visualization Tools
- 재생 시간: 8분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-data-visualization/lecture/CITjy/types-of-plots)
- 이 동영상을 시청한 후에는 다음을 수행할 수 있습니다 데이터를 시각화하는 데 사용할 수 있는 다양한 유형의 플롯을 살펴봅니다.
- 각 플롯 유형의 특징과 적절한 사용 사례를 파악합니다.

## 내용
### 핵심 내용
- 이 동영상을 시청한 후에는 다음을 수행할 수 있습니다 데이터를 시각화하는 데 사용할 수 있는 다양한 유형의 플롯을 살펴봅니다.
- 각 플롯 유형의 특징과 적절한 사용 사례를 파악합니다.
- 온도와 에너지 소비량과 같은 두 개의 연속형 변수 간의 관계를 조사하는 데 사용할 수 있습니다, 주택 가격 대 규모와 같은 데이터의 패턴이나 추세를 조사할 때 사용할 수 있습니다, 시험 점수의 이상값이나 비정상적인 주식 행동과 같은 이상값 또는 비정상적인 관측값을 감지하는 데 사용할 수 있습니다, 관측값이 많은 데이터를 시각화하여 클러스터 또는 그룹을 식별합니다, 복잡한 데이터 탐색 이상값은 해석에 큰 영향을 미치므로 포함 또는 제외를 고려해야 합니다.
- 여러 범주 또는 그룹에 걸쳐 연속형 변수의 분포를 비교하는 경우입니다, 예를 들어 부서별 직원의 급여를 비교하는 경우, 데이터 집합의 확산과 왜곡을 조사하고 사분위수 및 이상값을 시각화합니다, 데이터 집합 내에서 잠재적인 이상값을 식별하고 분석합니다, 요약 통계, 중앙값, 사분위수, 범위를 간결하고 유익한 방식으로 시각화합니다, 데이터 세트에서 여러 변수의 분포를 나란히 비교합니다.
- 이 동영상에서는 데이터 시각화에서 일반적으로 사용되는 다양한 유형의 플롯이 있다는 것을 배웠습니다.
- 박스 플롯은 데이터의 분포를 표시하여 중앙값, 사분위수, 이상값을 보여줍니다.

### 한국어 Transcript

플롯의 종류에 오신 것을 환영합니다. 이 동영상을 시청한 후에는 다음을 수행할 수 있습니다 데이터를 시각화하는 데 사용할 수 있는 다양한 유형의 플롯을 살펴봅니다. 각 플롯 유형의 특징과 적절한 사용 사례를 파악합니다. 아시다시피 데이터 시각화는 그래프, 차트, 지도와 같은 시각적 형식을 사용하여 데이터를 표현하는 것입니다. 이를 통해 정보, 트렌드, 인사이트를 간결하게 효과적으로 전달할 수 있습니다.

또한 패턴을 발견하고 추세를 파악하며 복잡한 정보를 단순화하여 쉽게 이해할 수 있도록 합니다. 이제 다양한 유형의 플롯을 살펴보겠습니다. 여기에는 라인 플롯, 막대 플롯, 분산형 차트, 박스 플롯, 히스토그램 등이 있습니다. 꺾은선형 차트라고도 하는 선형 플롯은 데이터를 직선으로 연결된 일련의 데이터 요소로 표시합니다. 꺾은선형 차트는 주식 시장 변동이나 시간에 따른 온도 변화와 같은 추세를 표시합니다.

선형 차트는 연령이나 시간과 같은 연속적인 독립 변수를 사용하여 데이터 집합을 비교합니다. 라인 플롯은 마케팅 예산에 따른 판매 수익 변화와 같은 원인과 결과 관계를 보여줍니다. 또한 키 측정값과 같은 연속형 데이터를 시간에 따라 시각화합니다. 데이터를 정확하게 반영하도록 축의 눈금을 신중하게 선택하지 않으면 라인 플롯이 오해의 소지가 있을 수 있습니다. 이 꺾은선형 차트는 1998년 이민자 수 감소 추세를 보여줍니다.

그러나 이 플롯에서와 같이 Y축의 눈금을 0으로 시작하도록 수정하면 실제 추세가 그다지 놀랍지 않다는 것을 알 수 있습니다. 막대형 차트라고도 하는 막대형 플롯은 직사각형 막대를 사용하여 데이터를 표시하며, 막대의 높이 또는 길이가 데이터의 크기를 나타냅니다. 막대의 방향은 세로 또는 가로로 지정할 수 있습니다. 세로 방향 막대 차트는 흔히 세로 막대 차트 또는 열 차트라고 합니다. 데이터를 효과적으로 비교하는 방법을 찾고 있다면 막대형 차트는 다양한 범주 또는 그룹을 비교하는 데 이상적입니다.

제품별 판매 수익 비교와 같은 불연속형 데이터에 탁월합니다. 판매 비율이나 예산 할당과 같이 다양한 카테고리가 전체 및 순위에 기여하는 방식을 보여줍니다. 막대형 플롯은 시장에서 가장 많이 팔린 책을 표시하는 것처럼 쉽게 순위를 매길 수 있는 데이터를 시각화할 수 있습니다. 단순하고 해석하기 쉽기 때문에 데이터 시각화에 선호됩니다. 막대 선택이나 축 배율이 부정확하면 오해의 소지가 있는 플롯이 될 수 있습니다.

이 막대형 차트에서 6부터 시작하는 Y축은 1995년과 1998년 값의 차이를 실제보다 크게 보이게 합니다. 그러나 Y축이 0에서 시작하면 뷰어가 오해하지 않고 데이터를 정확하게 나타낼 수 있습니다. 분산형 차트는 데카르트 좌표를 사용하여 데이터 집합의 두 변수에 대한 값을 표시하는 플롯 유형입니다. 데이터 포인트는 한 변수의 값이 가로축의 위치를 결정하는 점의 모음으로 표시됩니다 다른 변수의 값이 세로 축의 위치를 결정하는 점의 모음으로 표시됩니다. 분산형 차트는 언제 사용할 수 있나요?

온도와 에너지 소비량과 같은 두 개의 연속형 변수 간의 관계를 조사하는 데 사용할 수 있습니다, 주택 가격 대 규모와 같은 데이터의 패턴이나 추세를 조사할 때 사용할 수 있습니다, 시험 점수의 이상값이나 비정상적인 주식 행동과 같은 이상값 또는 비정상적인 관측값을 감지하는 데 사용할 수 있습니다, 관측값이 많은 데이터를 시각화하여 클러스터 또는 그룹을 식별합니다, 복잡한 데이터 탐색 이상값은 해석에 큰 영향을 미치므로 포함 또는 제외를 고려해야 합니다. 화면에는 이상값이 있는 데이터와 없는 데이터가 그려져 있습니다. 이상값이 없으면 두 개의 클러스터가 표시되지만 이상값을 제거하면 나머지 데이터가 더 잘 보입니다. 이상값을 적절히 처리하면 분산형 차트에서 정확도와 의미 있는 인사이트를 향상시킬 수 있습니다. 박스 플롯은 박스 및 위스커 플롯이라고도 하며, 데이터 집합의 분포를 주요 통계 측정값과 함께 표시하는 플롯의 한 유형입니다.

사분위수 범위인 IQR을 나타내는 상자, 중앙값을 나타내는 상자 안의 선으로 구성됩니다, 그리고 이상값을 제외한 데이터의 범위를 나타내기 위해 상자에서 뻗은 선, 즉 수염으로 구성됩니다. 이상값은 수염 너머의 개별 데이터 포인트로 표시될 수 있습니다. 박스형 플롯이 유용한 몇 가지 시나리오를 살펴보겠습니다. 여러 범주 또는 그룹에 걸쳐 연속형 변수의 분포를 비교하는 경우입니다, 예를 들어 부서별 직원의 급여를 비교하는 경우, 데이터 집합의 확산과 왜곡을 조사하고 사분위수 및 이상값을 시각화합니다, 데이터 집합 내에서 잠재적인 이상값을 식별하고 분석합니다, 요약 통계, 중앙값, 사분위수, 범위를 간결하고 유익한 방식으로 시각화합니다, 데이터 세트에서 여러 변수의 분포를 나란히 비교합니다. 박스 플롯은 이상값의 존재 여부와 범위 등 이상값에 대한 중요한 정보를 제공한다는 점을 기억하세요.

이상값을 무시하거나 잘못 처리하면 분산형 차트와 마찬가지로 데이터 해석이 왜곡되고 중요한 인사이트를 가릴 수 있습니다. 마지막으로 배울 플롯은 히스토그램입니다. 히스토그램은 데이터 집합의 분포를 그래픽으로 표현한 것입니다, 특정 구간 내 값의 빈도 또는 상대적 빈도를 보여줍니다. 높이가 각 간격의 데이터 수를 나타내는 막대로 구성됩니다. 히스토그램은 데이터 분포, 이상값, 기울기, 변동성에 대한 귀중한 인사이트를 제공합니다.

히스토그램은 대칭, 왜곡, 바이모달 등 데이터의 형태를 시각적으로 묘사합니다. 기울기는 히스토그램의 모양을 살펴봄으로써 평가할 수 있습니다. 히스토그램은 또한 데이터 변동성을 보여줌으로써 패턴이나 하위 그룹을 나타내는 집중도, 간격, 클러스터를 관찰할 수 있게 해줍니다. 눈금과 부적절한 라벨링 문제 외에도 히스토그램을 만들 구간차원을 선택할 때 주의해야 합니다. 무작위 데이터 세트를 생성하고 세 가지 다른 구간차원 옵션으로 세 개의 히스토그램을 만들었습니다.

빈이 적은 경우 녹색으로 표시된 5, 최적의 빈 개수인 20은 파란색으로 표시된 20, 너무 많은 빈인 50은 빨간색으로 표시된 50입니다. 이러한 히스토그램을 비교하면 구간차원 선택이 데이터 분포의 표현에 어떤 영향을 미치고 데이터의 잘못된 표현을 초래하는지 관찰할 수 있습니다. 구간차원을 너무 적게 또는 너무 많이 선택하면 각각 분포를 지나치게 단순화하거나 지나치게 복잡하게 만들 수 있습니다. 이 동영상에서는 데이터 시각화에서 일반적으로 사용되는 다양한 유형의 플롯이 있다는 것을 배웠습니다. 라인 플롯은 시간에 따른 추세와 변화를 포착하여 패턴과 변동을 볼 수 있게 해줍니다.

막대형 플롯은 범주 또는 그룹을 비교하여 해당 값을 시각적으로 보여줍니다. 분산형 차트는 변수 간의 관계를 탐색하여 상관관계나 추세를 파악하는 데 도움이 됩니다. 박스 플롯은 데이터의 분포를 표시하여 중앙값, 사분위수, 이상값을 보여줍니다. 히스토그램은 특정 구간 내 데이터의 분포를 보여줌으로써 데이터의 모양과 집중도를 파악할 수 있게 해줍니다.

## 예시
- 각 플롯 유형의 특징과 적절한 사용 사례를 파악합니다.
- 여러 범주 또는 그룹에 걸쳐 연속형 변수의 분포를 비교하는 경우입니다, 예를 들어 부서별 직원의 급여를 비교하는 경우, 데이터 집합의 확산과 왜곡을 조사하고 사분위수 및 이상값을 시각화합니다, 데이터 집합 내에서 잠재적인 이상값을 식별하고 분석합니다, 요약 통계, 중앙값, 사분위수, 범위를 간결하고 유익한 방식으로 시각화합니다, 데이터 세트에서 여러 변수의 분포를 나란히 비교합니다.

## 요약
- 여러 범주 또는 그룹에 걸쳐 연속형 변수의 분포를 비교하는 경우입니다, 예를 들어 부서별 직원의 급여를 비교하는 경우, 데이터 집합의 확산과 왜곡을 조사하고 사분위수 및 이상값을 시각화합니다, 데이터 집합 내에서 잠재적인 이상값을 식별하고 분석합니다, 요약 통계, 중앙값, 사분위수, 범위를 간결하고 유익한 방식으로 시각화합니다, 데이터 세트에서 여러 변수의 분포를 나란히 비교합니다.
- 이 동영상에서는 데이터 시각화에서 일반적으로 사용되는 다양한 유형의 플롯이 있다는 것을 배웠습니다.
- 박스 플롯은 데이터의 분포를 표시하여 중앙값, 사분위수, 이상값을 보여줍니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Types of Plots. After watching this video, you'll be able to Explore different types of plots available for visualizing data. Identify the characteristics and appropriate use cases for each type of plot. As we know, data visualization represents data using visual formats like graphs, charts, and maps. It effectively communicates information, trends, and insights concisely.

It also uncovers patterns, identify trends, and simplifies complex information for easy understanding. Let's now explore the different types of plots. Some of these include line plot, bar plot, scatter plot, box plot, histogram. A line plot, also known as a line chart, displays data as a series of data points connected by straight lines. Line plots display trends, such as stock market fluctuations or temperature changes over time.

They compare data sets with a continuous independent variable, like age or time. Line plots illustrate cause and effect relationships, such as sales revenue changes based on marketing budget. They also visualize continuous data, like height measurements, over time. Line plots can be misleading if the scales on the axes are not carefully chosen to reflect the data accurately. The line plot shows a downfall in immigration trends in 1998.

However, if you will correct the scale on the y-axis to start with zero, as in this plot, you'll see that the actual trend is not that alarming. Let's now explore the next plot. A bar plot, also known as a bar chart, displays data using rectangular bars where the height or length of the bars represents the magnitude of the data. The bars can be oriented either vertically or horizontally. A vertically oriented bar chart is often referred to as a vertical bar chart or a column chart.

If you're looking for an effective way to compare data, bar plots are ideal for comparing different categories or groups. They excel with discrete data, like comparing sales revenue by product. They show how different categories contribute to the whole and rankings, such as sales percentage or budget allocation. Bar plots can visualize data that you can easily rank, like displaying the best-selling books in the market. Their simplicity and interpretability make them favored for data visualization.

Inaccurate bar choices or axis scales can lead to misleading plots. In this bar plot, the y-axis, starting at six, makes the difference between the values in 1995 and 1998 seem larger than it actually is. However, when the y-axis starts at zero, the plot accurately represents the data without misleading the viewer. Now let's go through the next plot. A scatter plot is a type of plot that presents values for two variables for a set of data using Cartesian coordinates.

The data points are displayed as a collection of points where one variable's value determines the position on the horizontal axis and the other variable's value determines the position on the vertical axis. When can you use a scatter plot? Let's explore some options. You can use it for examining the relationship between two continuous variables, like temperature and energy consumption, investigating patterns or trends in data, such as house prices versus size, detecting outliers or unusual observations, such as outliers in test scores or abnormal stock behavior, visualizing data with many observations to identify clusters or groups, exploring complex data. Outliers significantly impact interpretation, requiring consideration of their inclusion or exclusion.

On the screen, the data is plotted with and without outliers. Without outliers, it shows two clusters, but removing outliers makes the remaining data more visible. Proper outlier handling enhances accuracy and meaningful insights in scatter plots. Let us learn about the box plot. A box plot, also known as a box and whisker plot, is a type of plot that displays the distribution of a data set along with key statistical measures.

It consists of a box representing the interquartile range, IQR, a line inside the box representing the median, and lines, whiskers, extending from the box to indicate the range of the data, excluding outliers. Outliers may be represented as individual data points beyond the whiskers. Let's look at some scenarios where box plots come in handy. While comparing the distribution of a continuous variable across different categories or groups, for example, employees' salaries across departments, examining spread and skewness of data set, visualizing quartiles and outliers, identifying and analyzing potential outliers within a data set, visualizing summary statistics, median, quartiles, range, in a concise and informative manner, comparing distributions of multiple variables in data sets side by side. Remember, box plots provide valuable information about outliers, such as their presence and extent.

Ignoring or mishandling outliers can distort the interpretation of the data and mask important insights, same as with scatter plots. The last plot we're going to learn about is the histogram. A histogram is a graphical representation of the distribution of a data set, showing the frequency or relative frequency of values within specific intervals. It consists of bars where the height represents the data count in each interval. Histograms offer valuable insights into data distribution, outliers, skewness, and variability.

They visually depict the shape of the data, whether it's symmetric, skewed, or bimodal. Skewness can be assessed by examining the histogram's shape. Histograms also showcase data variability, allowing you to observe concentrations, gaps, and clusters that reveal patterns or subgroups. Apart from issues with scale and inadequate labeling, be careful while choosing the bins to create a histogram. We have generated a random data set and created three histograms with three different binning options.

A few bins, 5, represented in green color, an optimal number of bins 20, represented in blue, and too many bins 50, the red one. By comparing these histograms, you can observe how the choice of binning affects the representation of the data distribution and results in a misleading representation of the data. Selecting too few or too many bins can oversimplify or overcomplicate the distribution, respectively. In this video, you learned that there are various types of plots commonly used in data visualization. Line plots capture trends and changes over time, allowing us to see patterns and fluctuations.

Bar plots compare categories or groups, providing a visual comparison of their values. Scatter plots explore relationships between variables, helping us identify correlations or trends. Box plots display the distribution of data, showcasing the median, quartiles, and outliers. Histograms illustrate the distribution of data within specific intervals, allowing us to understand its shape and concentration.

</details>
