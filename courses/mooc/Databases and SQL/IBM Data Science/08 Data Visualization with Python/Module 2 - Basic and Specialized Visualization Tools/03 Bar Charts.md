# Bar Charts

## 개요
- 강좌: Data Visualization with Python
- 모듈: Basic and Specialized Visualization Tools
- 재생 시간: 3분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-data-visualization/lecture/jkynE/bar-charts)
- 이 비디오를 시청하고 나면 그림을 통해 막대 차트를 설명하고 Matplotlib를 사용하여 막대 차트를 만드는 과정을 살펴볼 수 있습니다.
- 막대 그래프라고도 하는 막대 차트는 히스토그램과 달리 각 막대의 길이가 해당 막대가 나타내는 항목의 값에 비례하는 플롯 유형입니다.

## 내용
### 핵심 내용
- 이 비디오를 시청하고 나면 그림을 통해 막대 차트를 설명하고 Matplotlib를 사용하여 막대 차트를 만드는 과정을 살펴볼 수 있습니다.
- 막대 그래프라고도 하는 막대 차트는 히스토그램과 달리 각 막대의 길이가 해당 막대가 나타내는 항목의 값에 비례하는 플롯 유형입니다.
- 그 방법 중 하나는 막대의 높이가 특정 연도에 아이슬란드에서 캐나다로 유입된 총 이민자를 나타내는 막대 차트를 만드는 것입니다.
- Matplotlib를 사용하여 1980-2013년 아이슬란드에서 캐나다로의 이민 상황을 시각화하는 막대 차트를 생성하는 방법을 살펴보겠습니다.
- 이 비디오에서는 다음과 같은 내용을 배웠습니다.
- Matplotlib를 사용하여 아이슬란드에서 캐나다로의 총 이민자를 나타내는 막대형 차트를 만들 수 있습니다.

### 한국어 Transcript

이 비디오를 시청하고 나면 그림을 통해 막대 차트를 설명하고 Matplotlib를 사용하여 막대 차트를 만드는 과정을 살펴볼 수 있습니다. 막대형 차트는 널리 사용되는 시각화 도구입니다. 막대 그래프라고도 하는 막대 차트는 히스토그램과 달리 각 막대의 길이가 해당 막대가 나타내는 항목의 값에 비례하는 플롯 유형입니다. 주어진 시점의 변수 값을 비교하는 데 주로 사용됩니다. 예를 들어 1980-2013년 아이슬란드에서 캐나다로 이주한 사람들의 모습을 개별적인 방식으로 시각화하고 싶다고 가정해 보겠습니다.

그 방법 중 하나는 막대의 높이가 특정 연도에 아이슬란드에서 캐나다로 유입된 총 이민자를 나타내는 막대 차트를 만드는 것입니다. Matplotlib으로 이 작업을 수행하려면 어떻게 해야 할까요? 캐나다 이민에 관한 데이터 세트를 바탕으로 df_canada라는 데이터 프레임을 만들었습니다. 각 행의 색인으로 국가 이름을 사용하고 열 총계는 1980-2013년 각 국가의 연간 이민자 누적 합계를 나타냅니다. Matplotlib를 사용하여 1980-2013년 아이슬란드에서 캐나다로의 이민 상황을 시각화하는 막대 차트를 생성하는 방법을 살펴보겠습니다.

평소와 같이 Matplotlib와 스크립팅 인터페이스를 가져오는 것부터 시작합니다. 그런 다음 year 변수를 사용하여 새 데이터프레임을 생성합니다. 이름을 df_isceland로 지정해 보겠습니다. 여기에는 전체 열을 제외하고 아이슬란드에서 캐나다로의 연간 이민 관련 데이터가 포함됩니다. 그런 다음 df_isceland에서 플롯 함수를 사용하고 kind=bar를 설정하여 막대 차트를 생성합니다.

그림을 완성하기 위해 제목을 지정하고 양쪽 축에 레이블을 지정합니다. 마지막으로 show 함수를 사용하여 그림을 표시합니다. 막대 차트는 1980-2013년 아이슬란드에서 캐나다로의 이민을 나타냅니다. 막대형 차트를 살펴본 결과 2010년 이후 아이슬란드에서 캐나다로 이주하는 이민이 증가하는 추세를 보이고 있습니다. 호기심 많은 분들은 이미 이러한 증가 추세의 원인이 누구인지 궁금해하실 것입니다.

플롯 함수의 종류 매개 변수에 막대를 할당하여 가로 막대가 있는 막대 차트를 만들 수도 있습니다. 색상 매개 변수를 사용하면 막대의 색상을 변경할 수 있으므로 색상 매개 변수의 사용에 유의하십시오.1980년에서 1990년 사이에 캐나다로 이주한 아이슬란드 이민자 수가 가장 많은 해와 가장 적은 해를 강조하고 싶다고 가정해 보겠습니다. 그에 따라 색상 목록을 색상 매개변수에 전달할 수 있습니다. 여기서는 1981년과 1990년의 막대를 빨간색으로 강조 표시했습니다. 선택한 색상을 가장자리 색상 매개변수에 할당하여 각 막대의 경계선 색상을 변경할 수 있습니다.

이 비디오에서는 다음과 같은 내용을 배웠습니다. 막대형 차트는 각 막대의 길이가 해당 막대가 나타내는 항목의 값에 비례하는 일종의 도표입니다. Matplotlib를 사용하여 아이슬란드에서 캐나다로의 총 이민자를 나타내는 막대형 차트를 만들 수 있습니다.

## 예시
- 예를 들어 1980-2013년 아이슬란드에서 캐나다로 이주한 사람들의 모습을 개별적인 방식으로 시각화하고 싶다고 가정해 보겠습니다.

## 요약
- Matplotlib를 사용하여 1980-2013년 아이슬란드에서 캐나다로의 이민 상황을 시각화하는 막대 차트를 생성하는 방법을 살펴보겠습니다.
- 이 비디오에서는 다음과 같은 내용을 배웠습니다.
- Matplotlib를 사용하여 아이슬란드에서 캐나다로의 총 이민자를 나타내는 막대형 차트를 만들 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Bar Charts. After watching this video, you'll be able to: describe a bar chart with the help of an illustration, explore the process of creating a bar chart using Matplotlib. A bar chart is a popular visualization tool. Unlike a histogram, a bar chart, also known as a bar graph, is a type of plot where the length of each bar is proportional to the value of the item that it represents. It's commonly used to compare the values of a variable at a given point in time.

For example, say we want to visualize in a discrete fashion, how immigration from Iceland to Canada looked 1980-2013. One to do that is by building a bar chart where the height of the bar represents the total immigration from Iceland to Canada in a particular year. How do we do that with Matplotlib? From our dataset on immigration to Canada, we created a dataframe called df_canada. Having country names as the index of each row and a column total represents the cumulative sum of annual immigration from each country 1980-2013.

Let's see how we can use Matplotlib to generate a bar chart to visualize what immigration from Iceland to Canada looked like 1980-2013. As usual, we start by importing Matplotlib and it's scripting interface. Then we use the years variable to create a new dataframe. Let's name it df_iceland, which includes the data pertaining to annual immigration from Iceland to Canada, and excluding the total column. Then we use the plot function on df_iceland, and we set kind=bar to generate a bar chart.

To complete the figure, we give it a title and label both of its axes. Finally, we use the show function to display the figure. A bar chart depicts immigration from Iceland to Canada 1980-2013. By examining the bar chart, we noticed that immigration to Canada from Iceland has seen an increasing trend since 2010. I'm sure the curious among you are already wondering who the culprit behind this increasing trend is.

You can also create a bar chart with horizontal bars by assigning bar to the kind parameter of the plot function. Note the use of the color parameter as you can change the color of the bar with this. Let's suppose you want to highlight the years with highest and lowest number of Icelandic immigrants to Canada between the year 1980 to 1990. You can pass a list of colors to the color parameter accordingly. Here we have highlighted the bars for the years 1981 and 1990 with the color red.

By assigning the color of your choice to the edge color parameter, you can change the borderline color of each bar. In this video, you learned that: a bar chart is a type of plot where the length of each bar is proportional to the value of the item that it represents. You can create a bar chart using Matplotlib representing the total immigration from Iceland to Canada.

</details>
