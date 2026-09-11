# Pie Charts

## 개요
- 강좌: Data Visualization with Python
- 모듈: Basic and Specialized Visualization Tools
- 재생 시간: 3분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-data-visualization/lecture/3uaVb/pie-charts)
- 이 비디오를 시청한 후에는 예제를 통해 파이 차트를 설명할 수 있습니다.
- Matplotlib를 사용하여 파이 차트를 만드는 과정 살펴보기 그렇다면 파이 차트란 무엇일까요?

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 예제를 통해 파이 차트를 설명할 수 있습니다.
- Matplotlib를 사용하여 파이 차트를 만드는 과정 살펴보기 그렇다면 파이 차트란 무엇일까요?
- 다음으로, Matplotlib를 사용하여 파이 차트를 만드는 방법을 알아보겠습니다.
- 그러면 1980년부터 2013년까지 각 대륙의 캐나다 이민 비율을 나타내는 파이 차트가 있습니다.
- 원형 차트에 대한 마지막 요점 파이 차트에 대해 어떤 조건에서도 원형 차트를 사용하는 것에 반대하는 강력한 비평가들이 있습니다.
- 파이 차트를 만드는 과정에는 Matplotlib를 가져오는 과정이 포함됩니다.

### 한국어 Transcript

이 비디오를 시청한 후에는 예제를 통해 파이 차트를 설명할 수 있습니다. Matplotlib를 사용하여 파이 차트를 만드는 과정 살펴보기 그렇다면 파이 차트란 무엇일까요? 원형 통계 그래프는 원형의 통계 그래프로, 세그먼트로 나뉘어 수치적 비율을 보여줍니다. 예를 들어, 다음은 캐나다 연방 선거의 파이 차트입니다. 이것은 하원에서 차지한 의석의 정당별 백분율을 나타냅니다.

다음으로, Matplotlib를 사용하여 파이 차트를 만드는 방법을 알아보겠습니다. 이제 우리의 데이터 세트 DF 밑줄을 사용하여 대륙별 캐나다 이민 내역을 시각화해 보겠습니다. 첫 번째 단계는 대륙별로 데이터를 그룹화합니다. 대륙 열을 사용하여 이를 위해 pandas를 사용합니다. DF에서 Pandas groupby Function by Funcanda라고 부르고 동일한 대륙에 속한 국가의 이민자 수를 더합니다.

결과 데이터 프레임은 DF 밑줄 > 대륙 (Continents) 이라는 이름을 붙이겠습니다. 결과 데이터 프레임에는 각각 대륙을 나타내는 6개의 행이 있습니다. 1980년부터 2013년까지의 연도를 나타내는 35개의 열과 각 대륙의 누적 이민자 합계를 더했습니다. 이제 파이 차트를 만들 준비가 되었습니다. 일반적으로 Matplotlib를 MPL로 가져오고 스크립팅 계층을 가져오면 파이 플롯 인터페이스를 PLT로 설정한 다음 데이터 프레임 (DF, 밑줄, 대륙) 의 전체 열에 플롯 함수를 호출합니다.

그리고 kind와 equals pi를 설정하여 파이 차트를 생성합니다. 그런 다음 그림을 완성하기 위해 제목을 지정합니다. 마지막으로 show 함수를 사용하여 그림을 표시합니다. 그러면 1980년부터 2013년까지 각 대륙의 캐나다 이민 비율을 나타내는 파이 차트가 있습니다. Matplotlib: 차트의 특정 섹션에서 하나 이상의 슬라이스를 가운데에서 오프셋할 수 있습니다.

분해 매개변수에 값 지정: 분리 정도를 제어하고 원형의 특정 세그먼트를 강조할 수 있습니다. 이 파이에서 볼 수 있듯이 합계가 10% 미만인 대륙은 강조 표시되기 위해 분해됩니다. 원형 차트에 대한 마지막 요점 파이 차트에 대해 어떤 조건에서도 원형 차트를 사용하는 것에 반대하는 강력한 비평가들이 있습니다. 그들은 원형 차트가 데이터를 일관되게 묘사하는 데 있어 정확한 데이터를 일관되게 표시하지 못한다고 주장합니다. 포인트 바 차트가 훨씬 더 나은 경우 입니다파이 차트에 반대하는 주장에 대해 알아보고 싶습니다.

다음은 파이 차트의 결점에 대해 매우 명확하게 설명하는 매우 흥미로운 기사로 연결되는 링크입니다. 비디오 아래에서도 찾을 수 있습니다. 이 비디오에서 파이 차트는 원형 통계 그래픽이라는 것을 알게 되었습니다. 원형 차트는 숫자형 비율을 설명하기 위해 세그먼트로 나누어진 원형 통계 그래픽입니다. 파이 차트를 만드는 과정에는 Matplotlib를 가져오는 과정이 포함됩니다.

## 예시
- 예를 들어, 다음은 캐나다 연방 선거의 파이 차트입니다.

## 요약
- 그러면 1980년부터 2013년까지 각 대륙의 캐나다 이민 비율을 나타내는 파이 차트가 있습니다.
- 원형 차트에 대한 마지막 요점 파이 차트에 대해 어떤 조건에서도 원형 차트를 사용하는 것에 반대하는 강력한 비평가들이 있습니다.
- 파이 차트를 만드는 과정에는 Matplotlib를 가져오는 과정이 포함됩니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Pie Charts. After watching this video, you'll be able to Describe a pie chart with the help of an example Explore the process of creating a pie chart using Matplotlib So, what is a pie chart? A pie chart is a circular statistical graphic Divided into segments to illustrate numerical proportion For example, here is a pie chart of the Canadian federal election It represents the party-wise percentage of seats Won in the House of Commons Next, let's learn how to create a pie chart with Matplotlib Now, let's try to visualize the continent-wise Breakdown of immigration to Canada from our data set DF underscore Canada The first step is to group the data by continent Using the continent column, and we use pandas for this We call the pandas group by function on DF underscore Canada And we sum the number of immigrants from the countries That belong to the same continent Here is the resulting data frame And let's name it DF underscore continents The resulting data frame has six rows Each representing a continent We have 35 columns representing the years from 1980 to 2013 Plus the cumulative sum of immigration for each continent Now, we're ready to start creating our pie chart We start as usual by importing Matplotlib as MPL And its scripting layer, the pie plot interface, as PLT Then we call the plot function on total column of the data frame DF underscore continents And we set kind equals pie to generate a pie chart Then, to complete the figure, we give it a title Finally, we use the show function to display the figure And there you have it, a pie chart that depicts Each continent's proportion of immigration to Canada From 1980 to 2013 The explode property of a pie chart in Matplotlib Allows you to offset one or more slices from the center In specific sections of the chart By assigning values to the explode parameter You can control the degree of separation And emphasize particular segments of the pie As shown in this pie The continents where the total is less than 10% Are exploded out to be highlighted A final point about pie charts There are some strong critics who oppose using pie charts in any condition They argue that pie charts do not display accurate data consistently When it comes to depicting data consistently And communicating the point Bar charts perform significantly better If you're interested in learning about the arguments against pie charts Here's a link to a very interesting article That discusses very clearly the flaws of pie charts You can also find the link under the video In this video, you learned that A pie chart is a circular statistical graphic Divided into segments to illustrate numerical proportion The process of creating a pie chart involves importing Matplotlib

</details>
