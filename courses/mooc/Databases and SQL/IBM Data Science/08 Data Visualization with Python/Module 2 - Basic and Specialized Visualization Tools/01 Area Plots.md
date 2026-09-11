# Area Plots

## 개요
- 강좌: Data Visualization with Python
- 모듈: Basic and Specialized Visualization Tools
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-data-visualization/lecture/VGvXM/area-plots)
- 면적 플롯은 면적 차트 또는 그래프라고도 합니다, 여러 변수의 크기와 비율을 표시합니다 의 크기와 비율을 연속 축에 표시합니다, 일반적으로 시간 또는 다른 정렬된 차원을 나타냅니다.
- 라인 플롯과 비슷합니다, 와 비슷하지만 선 아래 영역을 색상으로 채워서 로 채워져 변수의 누적 크기를 강조합니다.

## 내용
### 핵심 내용
- 면적 플롯은 면적 차트 또는 그래프라고도 합니다, 여러 변수의 크기와 비율을 표시합니다 의 크기와 비율을 연속 축에 표시합니다, 일반적으로 시간 또는 다른 정렬된 차원을 나타냅니다.
- 라인 플롯과 비슷합니다, 와 비슷하지만 선 아래 영역을 색상으로 채워서 로 채워져 변수의 누적 크기를 강조합니다.
- 이제 DF 밑줄 캐나다라는 데이터 프레임에 데이터를 저장한 방법을 알았으므로 캐나다로 이민이 가장 많은 국가에 대한 영역 플롯을 생성해 보겠습니다 에 대한 영역 플롯을 생성해 보겠습니다.
- 데이터 프레임을 연간 누적 이민자 수에 따라 내림차순으로 정렬한 후 상위 5개 국가에 대한 새로운 데이터 프레임을 만듭니다, 이를 밑줄 친 상위 5개국이라고 합니다.
- 이제 데이터 프레임 DF 밑줄로 표시된 상위 5개 국가에 플롯 함수를 사용하여 면적 플롯을 생성할 수 있습니다 를 사용하여 영역 플롯을 생성할 수 있습니다.
- 이 동영상에서는 다음 내용을 학습했습니다 면적 플롯은 시간 경과에 따른 숫자 또는 백분율을 사용하여 누적 합계를 나타냅니다.

### 한국어 Transcript

이 비디오를 보고 나면 다음을 수행할 수 있습니다 면적 플롯이 무엇인지 설명하기 Matplotlib을 사용해 면적 플롯을 만드는 방법 설명하기 에어리어 플롯이란 무엇인가요? 면적 플롯은 면적 차트 또는 그래프라고도 합니다, 여러 변수의 크기와 비율을 표시합니다 의 크기와 비율을 연속 축에 표시합니다, 일반적으로 시간 또는 다른 정렬된 차원을 나타냅니다. 라인 플롯과 비슷합니다, 와 비슷하지만 선 아래 영역을 색상으로 채워서 로 채워져 변수의 누적 크기를 강조합니다. 이러한 종류의 그래프는 일반적으로 두 개 이상의 수량을 비교하려고 할 때 주로 사용됩니다. Matplotlib으로 면적 플롯을 생성하는 방법을 배워보겠습니다.

면적 플롯을 생성하는 방법에 대한 코드를 살펴보기 전에, 데이터 집합을 간단히 요약해 보겠습니다. 각 행은 한 국가를 나타내며 를 나타내며 국가에 대한 메타데이터를 포함합니다, 지리적 위치 및 개발 현황과 같은 메타데이터가 포함되어 있습니다. 또한 각 행에는 1980년부터 2020년까지 해당 국가에서 캐나다로 들어온 연간 이민자 수에 대한 의 숫자 데이터도 포함되어 있습니다. 이제 데이터 프레임을 처리해 보겠습니다 을 처리하여 국가 이름이 각 행의 인덱스가 되도록 하겠습니다. 이렇게 하면 특정 국가와 관련된 행을 훨씬 쉽게 검색할 수 있습니다.

또한 누적 합계를 나타내는 열 열을 추가하여 1980년부터 2013년까지 각 국가의 연간 이민자 수 의 누적 합계를 나타내는 열을 추가해 보겠습니다. 아프가니스탄의 경우 총 58,639명입니다, 알바니아는 15,699명입니다. 그리고 데이터 프레임의 이름을 캐나다를 밑줄로 표시하는 DF로 지정하겠습니다. 이제 DF 밑줄 캐나다라는 데이터 프레임에 데이터를 저장한 방법을 알았으므로 캐나다로 이민이 가장 많은 국가에 대한 영역 플롯을 생성해 보겠습니다 에 대한 영역 플롯을 생성해 보겠습니다. 데이터 프레임을 누적된 순서대로 내림차순으로 정렬하여 이러한 국가를 찾을 수 있습니다 을 1980년부터 2013년까지 누적 총 이민자 수에 따라 내림차순으로 정렬하여 이러한 국가를 찾을 수 있습니다.

밑줄 값 정렬 함수를 사용하여 를 사용하여 데이터 프레임을 내림차순으로 정렬합니다. 인도, 중국, 그다음 영국, 필리핀, 파키스탄 순으로 캐나다로 이민을 가장 많이 온 상위 5개 국가입니다. 이제 이 데이터의 처음 다섯 행을 사용하여 면적 플롯을 생성할 수 있습니다 를 생성할 수 있을까요? 먼저, 이 5개 국가에 대해서만 새 데이터 프레임을 만들어야 합니다 새 데이터 프레임을 만들고 전체 열을 제외해야 합니다. 더 중요한 것은 이러한 국가에 대한 면적 플롯을 생성하는 것입니다, 가로축에 연도를 표시하고 세로 축에 연간 이민자 수를 플롯해야 합니다.

Matplotlib은 데이터 프레임의 인덱스를 가로축에 플롯한다는 점에 유의하세요, 데이터 프레임의 인덱스를 가로축에 표시합니다, Matplotlib은 가로축에 국가를 플롯합니다. 이 문제를 해결하려면 데이터 프레임의 전치를 수행해야 합니다. 데이터 프레임을 연간 누적 이민자 수에 따라 내림차순으로 정렬한 후 상위 5개 국가에 대한 새로운 데이터 프레임을 만듭니다, 이를 밑줄 친 상위 5개국이라고 합니다. 그런 다음 1980년부터 2013년까지의 연도를 나타내는 열만 선택합니다 열만 선택하여 전치 방법을 적용하기 전에 전체 열을 제외합니다. 결과 데이터 프레임은 우리가 원하는 것과 정확히 일치합니다, 각 열이 상위 5개 국가 중 하나를 나타내는 5개의 열과 연도는 인덱스입니다.

이제 데이터 프레임 DF 밑줄로 표시된 상위 5개 국가에 플롯 함수를 사용하여 면적 플롯을 생성할 수 있습니다 를 사용하여 영역 플롯을 생성할 수 있습니다. 먼저 Matplotlib을 MPL로, 스크립팅 인터페이스를 PLT로 가져옵니다. 그런 다음 데이터 프레임 DF 밑줄 상위 5개에서 플롯 함수를 호출합니다, 를 호출하고 종류를 면적과 같게 설정하여 면적 플롯을 생성합니다. 그런 다음 그림을 완성하기 위해 제목을 지정하고 두 축에 적절한 레이블을 지정합니다. 마지막으로 표시 기능을 사용하여 그림을 표시합니다.

여기서는 인라인 백엔드를 사용하여 영역 플롯을 생성하고 있습니다. 이제 가장 높은 이민자 수를 기록한 5개국의 이민 추세를 나타내는 1980년부터 2013년까지 캐나다로 가장 많이 이민 온 5개국의 이민 추세를 나타내는 영역 플롯이 완성되었습니다. 영역 플롯은 누적 성격의 데이터를 묘사하는 데 특히 효과적입니다, 주식 시장 성과를 추적하거나 인구 통계를 시각화하거나 또는 다양한 부문에 걸친 자원의 분포를 표시할 때 특히 효과적입니다. 이 동영상에서는 다음 내용을 학습했습니다 면적 플롯은 시간 경과에 따른 숫자 또는 백분율을 사용하여 누적 합계를 나타냅니다. 면적 플롯을 만드는 과정은 Matplotlib를 가져오고 를 가져와서 종류 매개변수를 area로 지정한 데이터 프레임에서 플롯 함수를 호출하는 것입니다.

면적 플롯은 시각적으로 매력적이고 직관적인 방법으로 여러 변수의 관계와 비율을 하나의 차트에 표시할 수 있습니다.

## 예시
- 면적 플롯을 생성하는 방법에 대한 코드를 살펴보기 전에, 데이터 집합을 간단히 요약해 보겠습니다.

## 요약
- 데이터 프레임을 연간 누적 이민자 수에 따라 내림차순으로 정렬한 후 상위 5개 국가에 대한 새로운 데이터 프레임을 만듭니다, 이를 밑줄 친 상위 5개국이라고 합니다.
- 이제 데이터 프레임 DF 밑줄로 표시된 상위 5개 국가에 플롯 함수를 사용하여 면적 플롯을 생성할 수 있습니다 를 사용하여 영역 플롯을 생성할 수 있습니다.
- 이 동영상에서는 다음 내용을 학습했습니다 면적 플롯은 시간 경과에 따른 숫자 또는 백분율을 사용하여 누적 합계를 나타냅니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Area Plots. After watching this video, you'll be able to Describe what is an Area Plot Explain how to create an Area Plot using Matplotlib So, what is an Area Plot? An Area Plot, also known as an Area Chart or Graph, displays the magnitude and proportion of multiple variables over a continuous axis, typically representing time or another ordered dimension. It's similar to a Line Plot, but with the area below the line filled with color to emphasize the cumulative magnitude of the variables. This kind of graph is commonly used when trying to compare two or more quantities.

Let's learn how to generate an Area Plot with Matplotlib. Before we go over the code on how to generate an Area Plot, let's do a quick recap of our data set. Recall that each row represents a country and contains metadata about the country, such as its geographic location and its development status. Each row also contains numerical data of annual immigration from that country to Canada from 1980 to 2013. Now let's process the data frame so that the country name becomes the index of each row.

This should make retrieving rows pertaining to specific countries a lot easier. Also, let's add an extra column that represents the cumulative sum of annual immigration from each country from 1980 to 2013. So, for Afghanistan, it's 58,639 total, and for Albania, it's 15,699, and so on. And let's name our data frame DF underscore Canada. So now that we know how we have stored our data in the data frame DF underscore Canada, let's try to generate Area Plots for the countries with the highest immigration to Canada.

We can try to find these countries by sorting our data frame in descending order of cumulative total immigration from 1980 to 2013. We use the sort underscore values function to sort our data frame in descending order. And here is the result. It turns out that India, followed by China, then the United Kingdom, the Philippines, and Pakistan are the top five countries with the highest immigration to Canada. So, can we now go ahead and generate the Area Plots using the first five rows of this data frame?

First, we need to create a new data frame of these five countries only and exclude the total column. More importantly, to generate the Area Plots for these countries, we should plot the years on the horizontal axis and the annual immigration on the vertical axis. Note that Matplotlib plots the indices of a data frame on the horizontal axis, and with the data frame as shown, Matplotlib plots the countries on the horizontal axis. To fix this, we need to take the transpose of the data frame. Let's see how we can do this.

After we sort our data frame in descending order of cumulative annual immigration, we create a new data frame of the top five countries, and we call it underscore top five. We then select only the columns representing the years 1980 to 2013 in order to exclude the total column before applying the transpose method. The resulting data frame is exactly what we want, with five columns where each column represents one of the top five countries and the years being the indices. Now we can go ahead and use the plot function on data frame DF underscore top five to generate the Area Plots. First, we import Matplotlib as MPL and its scripting interface as PLT.

Then we call the plot function on the data frame DF underscore top five, and we set kind equals area to generate an area plot. Then to complete the figure, we give it a title and label both the axes appropriately. Finally, we then use the show function to display the figure. Note that here we are generating the area plot using the inline back end. And there you have it, an area plot that depicts the immigration trend of the five countries with the highest immigration to Canada from 1980 to 2013.

Area plots are particularly effective in depicting data with a cumulative nature, such as tracking stock market performance, visualizing population demographics, or displaying the distribution of resources across various sectors. In this video, you learned that An area plot depicts cumulated totals using numbers or percentages over time. The process of creating an area plot involves importing Matplotlib and calling the plot function on the data frame with kind parameter assigned as area. Area plots provide a visually appealing and intuitive way to showcase the relationship and proportion of multiple variables in a single chart.

</details>
