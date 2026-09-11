# Seaborn and Regression Plots

## 개요
- 강좌: Data Visualization with Python
- 모듈:  Advanced Visualizations and Geospatial Data
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-data-visualization/lecture/wnV4S/seaborn-and-regression-plots)
- 이 비디오를 시청하고 나면 Seaborn이 무엇이고 어떤 역할을 하는지 설명하고 Seaborn의 기능에 대해 설명하실 수 있습니다.
- Seaborn은 또 다른 데이터 시각화 라이브러리이긴 하지만 Matplotlib를 기반으로 합니다.

## 내용
### 핵심 내용
- 이 비디오를 시청하고 나면 Seaborn이 무엇이고 어떤 역할을 하는지 설명하고 Seaborn의 기능에 대해 설명하실 수 있습니다.
- Seaborn은 또 다른 데이터 시각화 라이브러리이긴 하지만 Matplotlib를 기반으로 합니다.
- Seaborn을 사용하면 플롯을 매우 효율적으로 만들 수 있으므로 Seaborn을 사용하면 Matplotlib보다 5배 적은 코드로 플롯을 생성할 수 있습니다.
- Seaborn은 NumPy 및 SciPy와 같은 통계 라이브러리와 잘 통합되므로 통계 분석과 시각화를 쉽게 결합할 수 있습니다.
- Seaborn의 Regplot 함수는 모든 개인 사용자 지정을 위한 추가 매개 변수도 허용하므로 예를 들어 색상 매개 변수를 사용하여 색상을 변경할 수 있습니다.
- 이 비디오에서는 Seaborn이 Matplotlib에 기반한 데이터 시각화 라이브러리라는 것을 배웠습니다.

### 한국어 Transcript

[음악] 시본 플롯과 회귀 플롯에 오신 것을 환영합니다. 이 비디오를 시청하고 나면 Seaborn이 무엇이고 어떤 역할을 하는지 설명하고 Seaborn의 기능에 대해 설명하실 수 있습니다. Seaborn은 또 다른 데이터 시각화 라이브러리이긴 하지만 Matplotlib를 기반으로 합니다. Seaborn은 최소한의 노력으로 플롯의 시각적 매력을 향상시키는 다양한 내장 테마와 색상 팔레트를 제공합니다. Seaborn을 사용하면 플롯을 매우 효율적으로 만들 수 있으므로 Seaborn을 사용하면 Matplotlib보다 5배 적은 코드로 플롯을 생성할 수 있습니다.

Seaborn은 NumPy 및 SciPy와 같은 통계 라이브러리와 잘 통합되므로 통계 분석과 시각화를 쉽게 결합할 수 있습니다. 회귀도, 분포도, 범주형 도표 등 데이터를 분석하고 관계를 모델링하는 데 특히 유용한 특수 도표 유형을 제공합니다. Pandas와 Matplotlib는 데이터 조작 및 기본 시각화를 위한 강력한 도구이지만 Seaborn은 시각적으로 매력적이고 유익한 통계 그래픽을 만들 수 있는 더 높은 수준의 인터페이스를 제공하여 이러한 도구를 보완합니다. Seaborn은 특히 복잡한 시각화 및 통계 분석을 처리할 때 효과적입니다. Seaborn을 사용하여 통계 그래픽을 만드는 방법을 살펴보겠습니다.

회귀도를 살펴보겠습니다.1980년부터 2013년까지 캐나다로 유입된 총 이민자를 나타내는 df_total이라는 데이터 프레임이 있다고 가정해 보겠습니다. 데이터 프레임의 한 열에는 연도가 표시되고 다른 열에는 해당하는 총 이민자 수가 표시됩니다. 산점도와 회귀선을 만들어 데이터의 모든 추세를 강조하려고 합니다. Seaborn을 사용하면 코드 한 줄로 이 모든 작업을 수행할 수 있습니다. 먼저 Seaborn을 가져와서 SNS로 가져온 다음 Seaborn Regplot 함수를 호출합니다.

df_total 데이터 프레임을 사용하고 가로축에는 열 연도를, 세로 축에는 열 총계를 플로팅하도록 지시합니다. 이 코드 한 줄의 출력은 회귀선뿐만 아니라 95% 신뢰 구간도 표시된 산점도입니다. Seaborn의 Regplot 함수는 모든 개인 사용자 지정을 위한 추가 매개 변수도 허용하므로 예를 들어 색상 매개 변수를 사용하여 색상을 변경할 수 있습니다. 이제 색상을 녹색으로 변경해 보겠습니다. 또한 마커 매개변수를 사용하여 마커 모양도 변경할 수 있습니다.

이제 마커의 모양을 기본 원형 마커 대신 플러스 마커로 변경해 보겠습니다. 범주형 데이터를 플로팅해 보겠습니다. 캐나다 이민 데이터 세트에는 국가, 지역, 대륙과 같은 몇 가지 범주별 특징이 있습니다. 데이터 세트에 대륙의 개수를 그래프로 표시해 보는 것은 어떨까요? 한 줄의 코드를 사용하여 counterplot 함수를 사용하여 데이터에 있는 각 대륙의 레코드 수를 나타내는 막대 그래프를 만들 수 있습니다.

x 매개변수는 x축에 표시할 범주형 변수인 국가를 지정하고, 데이터 매개변수는 사용할 데이터 세트인 DF_Canada를 설정합니다. 데이터 세트의 모든 관측치를 사용한 것은 아니지만, 그림을 보면 데이터에 있는 대부분의 관측치가 아프리카에서 가져온 것임을 알 수 있습니다. DF_Canada 데이터 세트 조각의 범주형 데이터를 기반으로 보어 플롯을 플로팅해 보겠습니다. 여기서는 전체 데이터 열을 기준으로 대륙을 도표화했습니다. Seaborn은 범주형 변수 대륙별로 그룹화하고 신뢰 구간을 사용하여 합계 값을 집계하여 플로팅했습니다.

Seaborn에 대한 랩 세션에서 더 자세히 살펴보겠습니다. 이 비디오에서는 Seaborn이 Matplotlib에 기반한 데이터 시각화 라이브러리라는 것을 배웠습니다. Seaborn은 주로 통계 그래픽을 그리기 위한 고급 인터페이스를 제공하기 위해 만들어졌습니다. Seaborn을 사용하면 한 줄의 코드로 스캐터 차트 및 회귀선을 생성할 수 있습니다. Seaborn의 Regplot 함수는 개인 사용자 지정을 위한 추가 파라미터를 허용합니다.

## 예시
- Seaborn을 사용하면 플롯을 매우 효율적으로 만들 수 있으므로 Seaborn을 사용하면 Matplotlib보다 5배 적은 코드로 플롯을 생성할 수 있습니다.
- Seaborn을 사용하면 코드 한 줄로 이 모든 작업을 수행할 수 있습니다.
- 이 코드 한 줄의 출력은 회귀선뿐만 아니라 95% 신뢰 구간도 표시된 산점도입니다.
- Seaborn의 Regplot 함수는 모든 개인 사용자 지정을 위한 추가 매개 변수도 허용하므로 예를 들어 색상 매개 변수를 사용하여 색상을 변경할 수 있습니다.

## 요약
- Seaborn은 NumPy 및 SciPy와 같은 통계 라이브러리와 잘 통합되므로 통계 분석과 시각화를 쉽게 결합할 수 있습니다.
- Seaborn의 Regplot 함수는 모든 개인 사용자 지정을 위한 추가 매개 변수도 허용하므로 예를 들어 색상 매개 변수를 사용하여 색상을 변경할 수 있습니다.
- 이 비디오에서는 Seaborn이 Matplotlib에 기반한 데이터 시각화 라이브러리라는 것을 배웠습니다.

<details>
<summary>영문 Transcript 원문</summary>

[MUSIC] Welcome to Seaborn and regression plots. After watching this video, you'll be able to explain what Seaborn is and what it does, describe the functions of Seaborn. Although Seaborn is another data visualization library, it's based on Matplotlib. Seaborn offers a range of built-in themes and color palettes that improve the visual appeal of your plots with minimal effort. Seaborn makes creating plots very efficient, therefore, with Seaborn, you can generate plots with code that is five times less than with Matplotlib.

Seaborn integrates well with statistical libraries such as NumPy and SciPy, allowing you to easily combine statistical analysis with visualizations. It provides specialized plot types such as regression plots, distribution plots, and categorical plots, that are particularly useful for analyzing data and modeling relationships. While Pandas and Matplotlib are powerful tools for data manipulation and basic visualization, Seaborn complements them by providing a higher level interface for creating visually appealing and informative statistical graphics. Seaborn works well, especially when dealing with more complex visualizations and statistical analyses. Let's see how we can use Seaborn to create a statistical graphic.

Let's look into regression plots. Let's say we have a data frame called df_total, representing total immigration to Canada from 1980 to 2013. The data frame displays the year in one column and the corresponding total immigration in another. We want to create a scatter plot and a regression line to highlight any trends in the data. With Seaborn, you can do all this with one line of code.

We first import Seaborn, and let's import it as SNS, then we call the Seaborn Regplot function. We tell it to use the data frame df_total, and to plot the column year on the horizontal axis and the column total on the vertical axis. The output of this one line of code is a scatter plot with a regression line, and not just that, but also a 95% confidence interval. Seaborn's Regplot function also accepts additional parameters for any personal customization, so you can change the color, for example, using the color parameter. Let's go ahead and change the color to green.

Also, you can change the marker shape as well using the marker parameter. Let's go ahead and change the shape of our markers to a plus marker instead of the default circular marker. Let's try to plot some categorical data. In our Canada immigration data set, there are some categorical features such as country, region, and continent. Why not plot continents for their count in the data set?

Using a single line of code, we can create a bar plot representing the count of records for each continent in the data using the counterplot function. The x parameter specifies the categorical variable to be plotted on the x-axis, the country, and the data parameter sets the data set to be used, df_Canada. Though we haven't used all observations from the data set, it's evident from the plot that most of the observations in the data are from Africa. Let's try to plot the Bohr plot on the categorical data from a slice of the df_Canada data set. Here we have plotted the continent by the total column of data.

Seaborn has been grouped by the categorical variable continent and plotted the aggregated values of total, with confidence interval. You'll explore more in the lab session on Seaborn. In this video, you learned that Seaborn is a Data Visualization library based on Matplotlib. Seaborn was built primarily to provide a high-level interface for drawing statistical graphics. Scatter Plots and Regression Lines can be created with one line of code using Seaborn.

Seaborn's Regplot function accepts additional parameters for personal customization.

</details>
