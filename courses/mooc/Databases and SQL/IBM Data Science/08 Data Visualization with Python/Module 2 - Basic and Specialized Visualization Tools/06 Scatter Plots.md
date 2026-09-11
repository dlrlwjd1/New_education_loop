# Scatter Plots

## 개요
- 강좌: Data Visualization with Python
- 모듈: Basic and Specialized Visualization Tools
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-data-visualization/lecture/JFQQQ/scatter-plots)
- 이 비디오를 시청한 후에는 예제를 통해 스캐터 차트가 무엇인지 설명하고, Matplotlib를 사용하여 스캐터 차트 생성 프로세스를 살펴볼 수 있습니다.
- 스캐터 차트는 일반적으로 두 변수를 서로 비교하는 값을 표시하는 차트 유형입니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 예제를 통해 스캐터 차트가 무엇인지 설명하고, Matplotlib를 사용하여 스캐터 차트 생성 프로세스를 살펴볼 수 있습니다.
- 스캐터 차트는 일반적으로 두 변수를 서로 비교하는 값을 표시하는 차트 유형입니다.
- matplotlib를 사용하여 스캐터 차트를 만들려면 어떻게 해야 할까요?
- 데이터 프레임 df_total에서 플롯 함수를 사용하고 kind=scatter를 설정하여 스캐터 차트를 생성합니다.
- 스캐터 차트를 사용할 때는 가로 축에 있는 변수를 x 매개변수로, 세로 축에 있는 변수를 y 매개변수로 전달해야 합니다.
- 스캐터 차트는 일반적으로 서로 반대되는 두 변수와 관련된 값을 표시합니다.

### 한국어 Transcript

스캐터 플롯에 오신 것을 환영합니다. 이 비디오를 시청한 후에는 예제를 통해 스캐터 차트가 무엇인지 설명하고, Matplotlib를 사용하여 스캐터 차트 생성 프로세스를 살펴볼 수 있습니다. 스캐터 차트는 일반적으로 두 변수를 서로 비교하는 값을 표시하는 차트 유형입니다. 일반적으로 독립 변수를 기준으로 도표화하여 두 변수 사이에 상관 관계가 있는지 확인하는 종속 변수입니다. 예를 들어, 다음은 소득과 학력의 산점도입니다.

도표화된 데이터를 보면 교육 연수가 더 많은 개인이 교육 연수가 적은 개인보다 소득이 더 높다는 결론을 내릴 수 있습니다. matplotlib를 사용하여 스캐터 차트를 만들려면 어떻게 해야 할까요? 데이터 프레임 df_canada를 고려하고 있습니다. df_canada 데이터프레임은 국가 이름을 색인으로 설정하고 총계를 나타내는 열 하나는 1980년부터 2013년까지 각 국가의 연간 이민자 누적 합계를 나타냅니다. 1980년부터 2013년까지 캐나다로 유입된 연간 총 이민자 수를 분산형 차트로 만들고 싶다고 가정해 보겠습니다.

그러기 위해서는 먼저 여기에 표시된 것처럼 매년 그리고 이에 해당하는 전 세계 모든 국가의 총 이민자 수를 보여주는 새 데이터프레임을 만들어야 합니다. 이 새 데이터프레임의 이름을 df_total로 지정해 보겠습니다. 그런 다음 평소와 같이 matplotlib를 mpl로 가져오고 스크립팅 레이어인 pyplot 인터페이스를 plt로 임포트합니다. 데이터 프레임 df_total에서 플롯 함수를 사용하고 kind=scatter를 설정하여 스캐터 차트를 생성합니다. 다른 데이터 시각화 도구와 달리, 우리는 kind 매개변수만 전달하므로 플롯을 생성하기에 충분했습니다.

스캐터 차트를 사용할 때는 가로 축에 있는 변수를 x 매개변수로, 세로 축에 있는 변수를 y 매개변수로 전달해야 합니다. 이 경우 열 연도를 x 매개 변수로 전달하고 열 총계를 y 매개 변수로 전달합니다. 그런 다음 그림을 완성하기 위해 제목을 지정하고 축에 적절한 레이블을 지정합니다. 마지막으로 show 함수를 사용하여 그림을 표시합니다. 1980년부터 2013년까지 전 세계 국가에서 캐나다로 이주한 총 이민자를 보여주는 분산형 차트입니다.

스캐터 차트는 시간이 지남에 따른 이민의 전반적인 증가 추세를 명확하게 보여줍니다. 진한 파란색 값을 할당한 색상 매개변수의 사용을 고려해 보십시오. 사용 가능한 색상 팔레트에서 원하는 색상을 선택할 수 있습니다. 예를 들어, 플롯의 색상이 빨간색으로 어떻게 표시되는지 확인해 보세요. 원하는 경우 s 매개 변수를 사용하여 세 번째 변수를 나타낼 수도 있습니다.

여기서는 아프리카 대륙의 총계를 포함시켜 지난 몇 년간 각 마커의 크기를 나타냅니다. 스캐터 차트의 마커 크기가 커짐에 따라 지난 몇 년 동안 이민자 수가 증가했음을 알 수 있습니다. 스캐터 차트는 일반적으로 서로 반대되는 두 변수와 관련된 값을 표시합니다. 스캐터 차트를 만드는 과정에는 matplotlib를 가져와서 대규모 데이터 세트를 시각화하는 과정이 포함됩니다.

## 예시
- 예를 들어, 다음은 소득과 학력의 산점도입니다.
- 예를 들어, 플롯의 색상이 빨간색으로 어떻게 표시되는지 확인해 보세요.

## 요약
- 데이터 프레임 df_total에서 플롯 함수를 사용하고 kind=scatter를 설정하여 스캐터 차트를 생성합니다.
- 스캐터 차트를 사용할 때는 가로 축에 있는 변수를 x 매개변수로, 세로 축에 있는 변수를 y 매개변수로 전달해야 합니다.
- 스캐터 차트는 일반적으로 서로 반대되는 두 변수와 관련된 값을 표시합니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Scatter Plots. After watching this video, you'll be able to: describe what is a scatter plot with the help of an example, explore the scatter plot creation process using Matplotlib. What is a scatter plot? A scatter plot is a type of plot that displays values pertaining to typically two variables against each other. Usually, it's a dependent variable that is plotted against an independent variable to determine if any correlation between the two variables exist.

For example, here's a scatter plot of income versus education. And by looking at the plotted data, one can conclude that an individual with more years of education is likely to earn a higher income than an individual with fewer years of education. How can we create a scatter plot with matplotlib? We are considering dataframe df_canada, which has country names set as an index and one column is total, which represents the cumulative sum of annual immigration from each country from 1980-2013. Let's say we want to create a scatter plot of the total annual immigration to Canada from 1980-2013.

To be able to do that, we first need to create a new dataframe that shows each year and the corresponding total number of immigrants from all countries worldwide as shown here. Let's name this new dataframe as df_total. Then we proceed as usual, we import matplotlib as mpl and its scripting layer, the pyplot interface as plt. We use the plot function on the dataframe df_total, and we set kind=scatter to generate a scatter plot. Unlike the other data visualization tools, we're only passing in the kind parameter was enough to generate the plot.

With scatter plots, we also need to pass the variable, which is on the horizontal axis as the x parameter and the variable that is on the vertical axis as the y parameter. In this case, we're passing column year as the x parameter and column total as the y parameter. Then to complete the figure, we give it a title and label its axes appropriately. Finally, we use the show function to display the figure. A scatter plot that shows total immigration to Canada from countries all over the world from 1980-2013.

The scatter plot clearly depicts an overall rising trend of immigration with time. Consider the use of the color parameter, which we have assigned a value of dark blue. You may like to pick a color of your choice from the available color palettes. For instance, see how the plot is in the color red. You can also use the s parameter to represent any third variable if you want to.

Here we have included the total from the African continent to represent the size of each marker over the years. And it is evident that the number of immigrants has increased over these years as the size of the markers in the scatter plot is increasing. In this video, you learned That: a scatter plot displays values pertaining to typically two variables against each other. The process of creating a scatter plot involves importing matplotlib to visualize a large set of data.

</details>
