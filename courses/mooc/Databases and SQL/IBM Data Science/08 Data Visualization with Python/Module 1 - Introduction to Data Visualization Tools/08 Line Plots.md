# Line Plots

## 개요
- 강좌: Data Visualization with Python
- 모듈: Introduction to Data Visualization Tools
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-data-visualization/lecture/LdDUU/line-plots)
- 라인 플롯을 언제 사용할지 결정하고 데이터셋의 데이터로 라인 플롯을 만드세요.
- 이름에서 알 수 있듯 정보를 직선으로 연결된 일련의 데이터 포인트로 표시하는 플롯입니다.

## 내용
### 핵심 내용
- 라인 플롯을 언제 사용할지 결정하고 데이터셋의 데이터로 라인 플롯을 만드세요.
- 이름에서 알 수 있듯 정보를 직선으로 연결된 일련의 데이터 포인트로 표시하는 플롯입니다.
- 예를 들어 데이터셋에서 선 그림을 생성하여 아이티에서 캐나다로 이주하는 이민자의 추세를 확인할 수 있습니다.
- 이 선 그림을 바탕으로 2010년에 아이티에서 캐나다로 이주하는 이민이 급증했음을 알 수 있습니다.
- 이 비디오에서는 선 도표가 직선 세그먼트로 연결된 일련의 데이터 점 형태의 도표라는 것을 배웠습니다.
- plot () 함수에서 line to kind 매개 변수를 할당하여 선 그림을 생성할 수 있습니다.

### 한국어 Transcript

이 비디오를 보고 나면 선 도표와 그 기능을 설명할 수 있을 것입니다. 라인 플롯을 언제 사용할지 결정하고 데이터셋의 데이터로 라인 플롯을 만드세요. 이름에서 알 수 있듯 정보를 직선으로 연결된 일련의 데이터 포인트로 표시하는 플롯입니다. 가장 기본적인 차트 유형 중 하나이며 데이터 과학뿐만 아니라 많은 분야에서 흔히 볼 수 있습니다. 라인 플롯을 언제 사용해야 하는지 알아봅시다.

라인 플롯은 시간 경과에 따른 추세와 변화를 시각화하는 데 유용하므로 주가 변동, 웹 사이트 트래픽 또는 온도 변동과 같은 시계열 데이터에 주로 사용됩니다. 또한 선 그림을 사용하여 두 변수 간의 관계를 표시할 수 있으며, 한 차트에서 여러 데이터 시리즈를 비교하는 데 사용할 수도 있습니다. 라인 플롯은 또한 데이터의 갑작스러운 변화나 이상 현상을 효과적으로 강조할 수 있습니다. 예를 들어 데이터셋에서 선 그림을 생성하여 아이티에서 캐나다로 이주하는 이민자의 추세를 확인할 수 있습니다. 이 선 그림을 바탕으로 2010년에 아이티에서 캐나다로 이주하는 이민이 급증했음을 알 수 있습니다.

그런 다음 2010년 아이티의 주요 사건을 Google에서 빠르게 검색하면 2010년에 발생한 비극적인 지진에 대해 쉽게 알 수 있을 만큼 명백한 변칙 현상 또는 변화의 정당성을 조사할 수 있습니다. 따라서 이렇게 캐나다로 이민자가 유입된 것은 주로 그 비극적인 지진 때문이었습니다. 이제 이 선 도표를 어떻게 생성할 수 있을까요 ? matplotlib의 이전 비디오에서 간략히 설명했듯이 원하는 데이터를 포함하는 판다스 데이터 프레임 또는 시리즈에서 plot 함수를 호출하기만 하면 됩니다. 각 코드를 살펴보기 전에 이를 위해 데이터 세트를 간단히 요약해 보겠습니다.

각 행은 국가를 나타내며 지리적 위치, 개발 중인지 개발 중인지 개발 중인지 여부에 따른 해당 국가의 상태에 해당하는 데이터를 포함합니다. 각 행에는 1980년부터 2013년까지 해당 국가에서 캐나다로 유입되는 연간 이민자 수가 수치 기록되어 있습니다. 이제 국가 이름이 각 행의 색인이 되도록 DataFrame을 처리해 보겠습니다. 이렇게 하면 특정 국가를 더 쉽게 쿼리할 수 있습니다. 또한 1980년부터 2013년까지의 각 국가의 총 이민자 수를 나타내는 열을 추가해 보겠습니다.

아프가니스탄의 경우 58,639명, 알바니아의 경우 15,699명 등입니다. 이제 데이터 프레임의 이름을 df_canada로 지정해 보겠습니다. 이제 데이터가 DataFrame df_canada 에 어떻게 저장되는지 알아보겠습니다. 아이티에서의 이민에 해당하는 선 그림을 생성해 보겠습니다. 먼저 matplotlib를 MPL로 가져오고 스크립팅 인터페이스를 PLT로 가져옵니다.

그런 다음 아이티에 해당하는 행에서 plot 함수를 호출하고 kind equals line을 지정하여 선 도표를 생성합니다. 그런 다음 그림을 완성하기 위해 제목을 지정하고 축에 레이블을 지정합니다. 마지막으로 show 함수를 호출하여 그림을 표시합니다. 참고로 이 코드는 인라인 백엔드와 함께 매직 함수 %matplotlib를 사용하여 라인 플롯을 생성하는 코드입니다. 1980년부터 2013년까지 아이티에서 캐나다로 이주한 이민을 나타내는 선 그림입니다.

이 비디오에서는 선 도표가 직선 세그먼트로 연결된 일련의 데이터 점 형태의 도표라는 것을 배웠습니다. 라인 플롯은 가장 기본적인 차트 유형 중 하나이며 많은 분야에서 흔히 사용됩니다. plot () 함수에서 line to kind 매개 변수를 할당하여 선 그림을 생성할 수 있습니다.

## 예시
- 예를 들어 데이터셋에서 선 그림을 생성하여 아이티에서 캐나다로 이주하는 이민자의 추세를 확인할 수 있습니다.
- 각 코드를 살펴보기 전에 이를 위해 데이터 세트를 간단히 요약해 보겠습니다.
- 이렇게 하면 특정 국가를 더 쉽게 쿼리할 수 있습니다.
- 참고로 이 코드는 인라인 백엔드와 함께 매직 함수 %matplotlib를 사용하여 라인 플롯을 생성하는 코드입니다.

## 요약
- 이 선 그림을 바탕으로 2010년에 아이티에서 캐나다로 이주하는 이민이 급증했음을 알 수 있습니다.
- 이 비디오에서는 선 도표가 직선 세그먼트로 연결된 일련의 데이터 점 형태의 도표라는 것을 배웠습니다.
- plot () 함수에서 line to kind 매개 변수를 할당하여 선 그림을 생성할 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to line plots. After watching this video, you'll be able to describe line plot and its function. Determine when to use a line plot, create a line plot from data in the dataset. What is a line plot? As its name suggests, it's a plot that displays information as a series of data points connected by straight lines.

It is one of the most basic types of charts and is common in many fields, not just data science. Let's identify when to use a line plot. Line plots are useful for visualizing trends and changes over time, making them a popular choice for time-series data, such as changes in stock prices, website traffic, or temperature fluctuations. You can also use a line plot to show relationships between two variables,they can also be used to compare multiple data series on one chart. Line plots can also effectively highlight sudden changes or anomalies in data.

As an example, from our dataset, we can generate a line plot to see the trend of immigrants from Haiti to Canada. Based on this line plot, we see that there is a spike of immigration from Haiti to Canada in 2010. We can then research for justifications of obvious anomalies or changes from a quick Google search for major events in Haiti in 2010 one would easily learn about the tragic earthquake that took place in 2010. Therefore, this influx of immigration to Canada was mainly due to that tragic earthquake. Now, how can we generate this line plot, as we briefly mentioned in an earlier video with matplotlib, all we have to do is call the plot function on the pandas data frame or series containing the data of interest.

Before we go over each code. To do that, let's do a quick recap of our data set. Each row represents a country and contains data corresponding to the status of the country in terms of where it is located geographically and whether it is developing or developed. Each row contains numerical figures of annual immigration from that country to Canada, 1980-2013. Now let's process the DataFrame so that the country name becomes the index of each row.

This should make querying specific countries easier. Also, let's add an extra column which represents the total immigration for each country, from 1980-2013. For Afghanistan, it's 58,639, for Albania, it's 15,699, and so on. Now, let's name our DataFrame, df_canada. Now that we know how our data is stored in the DataFrame df_canada.

Let's generate the line plot corresponding to immigration from Haiti. First, we import matplotlib as MPL and its scripting interface as PLT. Then we call the plot function on the row corresponding to Haiti, and we specify kind equals line to generate a line plot. Then to complete the figure, we give it a title and label its axis. Finally, we then call the show function to display the figure.

Note that this is the code to generate the line plot using the magic function %matplotlib with the inline backend. A line plot that depicts immigration from Haiti to Canada, from1980-2013. In this video, you learned that a line plot is a plot in the form of a series of data points connected by straight-line segments. Line plot is one of the most basic types of chart and is common in many fields. You can generate a line plot by assigning line to kind parameter in the plot() function

</details>
