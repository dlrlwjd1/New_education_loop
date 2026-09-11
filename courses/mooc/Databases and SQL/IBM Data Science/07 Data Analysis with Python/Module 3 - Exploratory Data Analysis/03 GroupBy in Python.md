# GroupBy in Python

## 개요
- 강좌: Data Analysis with Python
- 모듈:  Exploratory Data Analysis
- 재생 시간: 3분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/ude4b/groupby-in-python)
- 다양한 유형의 구동 시스템 ( 전진, 후륜, 사륜 구동) 과 차량 가격 사이에 어떤 관계가 있는지 알고 싶다고 가정해 보겠습니다.
- 그렇다면 어떤 유형의 구동 시스템이 차량에 가장 큰 가치를 더할까요?

## 내용
### 핵심 내용
- 다양한 유형의 구동 시스템 ( 전진, 후륜, 사륜 구동) 과 차량 가격 사이에 어떤 관계가 있는지 알고 싶다고 가정해 보겠습니다.
- 그렇다면 어떤 유형의 구동 시스템이 차량에 가장 큰 가치를 더할까요?
- 예를 들어, 차량의 평균 가격을 구하고 다양한 유형의 차체 스타일과 구동 휠 변수 간에 차량이 어떻게 다른지 관찰하는 데 관심이 있다고 가정해 보겠습니다.
- 우리의 데이터에 따르면 후륜 구동 컨버터블과 후륜 구동 하드톱이 가장 높은 가치를 갖는 반면 사륜구동 해치백은 가장 낮은 가치를 가지고 있음을 알 수 있습니다.
- 코드 한 줄로 Pandas pivot 메서드를 사용하여 바디 스타일 변수를 피벗하여 열을 따라 표시되고 구동 바퀴가 행을 따라 표시되도록 할 수 있습니다.
- 출력 플롯에서 각 유형의 차체 스타일은 x축을 따라 번호가 매겨지고, 각 유형의 구동 휠은 y축을 따라 번호가 매겨집니다.

### 한국어 Transcript

이 비디오에서는 그룹화의 기본 사항과 그룹화가 데이터 세트를 변환하는 데 어떻게 도움이 되는지 살펴보겠습니다. 다양한 유형의 구동 시스템 ( 전진, 후륜, 사륜 구동) 과 차량 가격 사이에 어떤 관계가 있는지 알고 싶다고 가정해 보겠습니다. 그렇다면 어떤 유형의 구동 시스템이 차량에 가장 큰 가치를 더할까요? 모든 데이터를 서로 다른 유형의 구동 휠별로 그룹화하고 서로 다른 구동 휠의 결과를 비교할 수 있다면 좋을 것입니다. Pandas에서는 groupby 메서드를 사용하여 이 작업을 수행할 수 있습니다.

groupby 메서드는 범주형 변수에 사용되며, 해당 변수의 여러 범주에 따라 데이터를 부분 집합으로 그룹화합니다. 단일 변수로 그룹화하거나 여러 변수 이름을 전달하여 여러 변수를 기준으로 그룹화할 수 있습니다. 예를 들어, 차량의 평균 가격을 구하고 다양한 유형의 차체 스타일과 구동 휠 변수 간에 차량이 어떻게 다른지 관찰하는 데 관심이 있다고 가정해 보겠습니다. 이를 위해 먼저 코드의 첫 번째 줄에서 관심 있는 세 개의 데이터 열을 선택합니다. 그런 다음 두 번째 줄의 구동 휠과 차체 스타일에 따라 축소된 데이터를 그룹화합니다.

평균 가격이 전반적으로 어떻게 다른지 알고 싶기 때문에 각 그룹의 평균을 구하여 2행의 맨 끝에 이 비트를 추가할 수 있습니다. 이제 데이터가 하위 범주로 그룹화되고 각 하위 범주의 평균 가격만 표시됩니다. 우리의 데이터에 따르면 후륜 구동 컨버터블과 후륜 구동 하드톱이 가장 높은 가치를 갖는 반면 사륜구동 해치백은 가장 낮은 가치를 가지고 있음을 알 수 있습니다. 이 형식의 표는 읽기도 쉽지 않고 시각화하기도 쉽지 않습니다. 이해하기 쉽도록 pivot 메서드를 사용하여 이 테이블을 피벗 테이블로 변환할 수 있습니다.

이전 표에는 구동 휠과 차체 스타일이 모두 열에 나열되어 있습니다. 피벗 테이블에는 하나의 변수가 열을 따라 표시되고 다른 변수는 행을 따라 표시됩니다. 코드 한 줄로 Pandas pivot 메서드를 사용하여 바디 스타일 변수를 피벗하여 열을 따라 표시되고 구동 바퀴가 행을 따라 표시되도록 할 수 있습니다. 이제 가격 데이터가 시각화하기가 더 쉬운 직사각형 그리드가 됩니다. 이는 Excel 스프레드시트에서 일반적으로 수행되는 작업과 유사합니다.

피벗 테이블을 나타내는 또 다른 방법은 히트 맵 플롯을 사용하는 것입니다. 히트 맵은 직사각형 데이터 그리드를 가져와 그리드 포인트의 데이터 값을 기반으로 색상 농도를 할당합니다. 이는 목표 변수를 여러 변수에 도표화할 수 있는 좋은 방법이며, 이를 통해 이러한 변수와 목표값 간의 관계를 시각적으로 파악할 수 있습니다. 이 예제에서는 Pyplot의 pcolor 메서드를 사용하여 히트 맵을 플로팅하고 이전 피벗 테이블을 그래픽 형식으로 변환합니다. 빨강-파랑 색 구성표를 지정했습니다.

출력 플롯에서 각 유형의 차체 스타일은 x축을 따라 번호가 매겨지고, 각 유형의 구동 휠은 y축을 따라 번호가 매겨집니다. 평균 가격은 색상 막대에 따른 값에 따라 다양한 색상으로 표시됩니다. 히트 맵의 상단 섹션이 하단 섹션의 가격이 더 높은 것으로 보입니다.

## 예시
- 예를 들어, 차량의 평균 가격을 구하고 다양한 유형의 차체 스타일과 구동 휠 변수 간에 차량이 어떻게 다른지 관찰하는 데 관심이 있다고 가정해 보겠습니다.
- 이를 위해 먼저 코드의 첫 번째 줄에서 관심 있는 세 개의 데이터 열을 선택합니다.
- 코드 한 줄로 Pandas pivot 메서드를 사용하여 바디 스타일 변수를 피벗하여 열을 따라 표시되고 구동 바퀴가 행을 따라 표시되도록 할 수 있습니다.

## 요약
- 우리의 데이터에 따르면 후륜 구동 컨버터블과 후륜 구동 하드톱이 가장 높은 가치를 갖는 반면 사륜구동 해치백은 가장 낮은 가치를 가지고 있음을 알 수 있습니다.
- 코드 한 줄로 Pandas pivot 메서드를 사용하여 바디 스타일 변수를 피벗하여 열을 따라 표시되고 구동 바퀴가 행을 따라 표시되도록 할 수 있습니다.
- 출력 플롯에서 각 유형의 차체 스타일은 x축을 따라 번호가 매겨지고, 각 유형의 구동 휠은 y축을 따라 번호가 매겨집니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we'll cover the basics of grouping and how this can help to transform our data set. Assume you want to know, is there any relationship between the different types of drive system, forward, rear, and four-wheel drive, and the price of the vehicles. If so, which type of drive system adds the most value to a vehicle? It would be nice if we could group all the data by the different types of drive wheels and compare the results of these different drive wheels against each other. In Pandas, this can be done using the groupby method.

The groupby method is used on categorical variables, groups the data into subsets according to the different categories of that variable, you can group by a single variable, or you can group by multiple variables by passing in multiple variable names. As an example, let's say we are interested in finding the average price of vehicles and observe how they differ between different types of body styles and drive wheels variables. To do this, we first pick out the three data columns we are interested in, which is done in the first line of code. We then group the reduced data according to drive wheels and body style in the second line. Since we are interested in knowing how the average price differs across the board, we can take the mean of each group and append at this bit at the very end of the Line 2.

The data is now grouped into subcategories, and only the average price of each subcategory is shown. We can see that according to our data, rear-wheel drive convertibles and rear-wheel drive hardtops have the highest value, while four-wheel drive hatchbacks have the lowest value. A table of this form isn't the easiest to read and also not very easy to visualize. To make it easier to understand, we can transform this table to a pivot table by using the pivot method. In the previous table, both drive wheels and body style were listed in columns.

A pivot table has one variable displayed along the columns and the other variable displayed along the rows. Just with one line of code and by using the Pandas pivot method, we can pivot the body style variable so it is displayed along the columns, and the drive wheels will be displayed along the rows. The price data now becomes a rectangular grid, which is easier to visualize. This is similar to what is usually done in Excel spreadsheets. Another way to represent the pivot table is using a heat map plot.

Heat map takes a rectangular grid of data and assigns a color intensity based on the data value at the grid points. It is a great way to plot the target variable over multiple variables, and through this, get visual clues of the relationship between these variables and the target. In this example, we use Pyplot's pcolor method to plot heat map and convert the previous pivot table into a graphical form. We specified the red-blue color scheme. In the output plot, each type of body style is numbered along the x-axis, and each type of drive wheels is numbered along the y-axis.

The average prices are plotted with varying colors based on their values according to the color bar. We see that the top section of the heat map seems to have higher prices in the bottom section.

</details>
