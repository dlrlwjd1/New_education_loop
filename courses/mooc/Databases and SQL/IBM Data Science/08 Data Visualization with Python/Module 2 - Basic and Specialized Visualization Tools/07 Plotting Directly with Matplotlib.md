# Plotting Directly with Matplotlib

## 개요
- 강좌: Data Visualization with Python
- 모듈: Basic and Specialized Visualization Tools
- 재생 시간: 8분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-data-visualization/lecture/Sl3qV/plotting-directly-with-matplotlib)
- 이 비디오를 시청하고 나면 데이터 시각화 및 플로팅을 위해 Matplotlib에서 제공하는 다양한 함수를 살펴볼 수 있습니다.
- Matplotlib는 광범위한 플롯을 생성할 수 있는 유연한 인터페이스를 제공하는 범용 종합 플로팅 라이브러리입니다.

## 내용
### 핵심 내용
- 이 비디오를 시청하고 나면 데이터 시각화 및 플로팅을 위해 Matplotlib에서 제공하는 다양한 함수를 살펴볼 수 있습니다.
- Matplotlib는 광범위한 플롯을 생성할 수 있는 유연한 인터페이스를 제공하는 범용 종합 플로팅 라이브러리입니다.
- 플롯을 사용자 지정하는 데 사용할 수 있는 다양한 옵션이 있습니다.
- 이제 두 개의 플롯을 함께 만들었음을 알 수 있습니다.
- 마찬가지로 원하는 모든 플롯을 네 축에 플로팅할 수 있습니다.
- Matplotlib pyplot 모듈은 플롯을 빠르게 생성하고 사용자 지정할 수 있는 편리한 방법을 제공합니다.

### 한국어 Transcript

Matplotlib로 직접 플로팅하는 데 오신 것을 환영합니다. 이 비디오를 시청하고 나면 데이터 시각화 및 플로팅을 위해 Matplotlib에서 제공하는 다양한 함수를 살펴볼 수 있습니다. 데이터 스토리텔링과 데이터 시각화를 구분하세요. Matplotlib는 광범위한 플롯을 생성할 수 있는 유연한 인터페이스를 제공하는 범용 종합 플로팅 라이브러리입니다. pyplot 모듈은 플롯을 빠르게 생성하고 사용자 지정할 수 있는 편리한 방법을 제공합니다.

matplotlib로 직접 플로팅을 시작해 봅시다. 여기서는 파이플롯을 PLT로 임포트하고 있습니다. 또한 numpy 배열은 일반적으로 플로팅의 데이터 소스로 사용되며 수학 함수도 지원하므로 NumPy를 np로 가져왔습니다. 다음으로, 표 형식 데이터의 경우 판다를 가져오세요. 그런 다음 서브플롯 함수를 호출하여 그림, 캔버스 창 및 축을 생성합니다.

그림 축 쌍을 사용하면 그림 또는 캔버스를 더 잘 제어할 수 있습니다. 이제 이 축에 만들려는 플롯의 이름을 지정하십시오. 이제 좌표축에서 plot 함수를 호출하여 선 플롯을 표시하고 NumPy 연도가 np. arange와 같고 1980을 전달하여 플롯을 생성하는 합성 데이터를 만들어 보겠습니다. 2014에서 범위 함수로 변환하면 2014년도 이주민이 np.

random과 같음을 제외하고 1980년부터 2013년까지 숫자로 구성된 1D 배열을 생성합니다. randint는 2,000~10,000개의 범위에서 임의의 정수로 구성된 1차원 배열을 생성합니다. 크기는 34이며, 배열의 요소 수를 지정합니다. plot 함수는 선 플롯을 생성합니다. x축과 y축에서 고려할 데이터에 해당하는 x와 y 값을 인수로 취합니다.

plot은 이민자 시절을 보냈습니다. show 함수를 사용하여 도표를 표시하고 이 데이터를 아래 그림과 같이 대신 x에 분산형 함수라고 하는 스캐터 차트로 표시하려면 여기를 클릭하십시오. Scatter와 지난 몇 년, 그리고 이곳을 찾아온 이민자들. 이렇게 하려면 제목 문자열을 plt. title 함수에 전달하기만 하면 됩니다.

플롯타이틀 이민자는 1980년에서 2013년 사이입니다. xlabel을 연도 단위로 표시하고 plt. y를 양 축에 총 이민자 수로 표시합니다. 다음과 같이 제목이 붙은 레이블을 축에 직접 적용할 수 있습니다. set_title을 입력하고 제목 문자열을 전달합니다.

set_ x-레이블 또는 y-레이블 이제 플롯에 제목과 레이블이 지정되는 것을 볼 수 있습니다. 이제 x-lim 및 y-lim 함수를 사용하여 x축과 y축에 제한을 설정할 수 있습니다. 가독성을 높이려면 그리드 함수를 사용하여 그리드 라인을 활성화하고 x. grid, true와 같이 true로 전달하면 됩니다. Legend 함수는 플롯에 범례를 포함합니다.

이제 x축은 1975에서 시작하여 2015년에 끝납니다. 이제 도표의 배경에 그리드가 표시됩니다. 플롯을 사용자 지정하는 데 사용할 수 있는 다양한 옵션이 있습니다. 선 스타일, 마커 스타일 및 색상 사용자 지정 옵션으로 도표를 사용자 지정하여 원하는 시각 효과를 얻을 수 있습니다. 마커를 사용하여 플롯의 데이터 포인트를 나타내는 스타일 ( 예: 정사각형은 S, 점은 0) 을 선택합니다.

라인 플롯의 경우 마커는 마커 크기이지만 스캐터에서는 마커가 S일 뿐입니다. 마찬가지로 마커의 색상과 크기를 선택합니다. 선 스타일 매개 변수를 사용하여 실선, 점선, 점선 등 다양한 선 스타일을 선택할 수 있습니다. 범례 매개변수에 LOC를 사용하여 그림에 범례가 배치되는 위치를 지정하는 것을 볼 수 있습니다. 이제 막대 그림을 사용하여 연도별 이민자 수를 나타내 보겠습니다.

bar 함수는 x축에 해당하는 연도를 전달하고 y축에 이민자를 전달하여 막대 그림을 만듭니다. 각 막대의 높이는 해당 연도의 이민자 수를 나타냅니다. hist는 빈이 20으로 설정된 히스토그램을 생성합니다. 가장자리 색상 및 색상 매개변수를 사용하여 히스토그램의 테두리와 막대 열을 지정하는 것을 볼 수 있습니다. 여기서는 1980년부터 1984년까지 단 5년 동안만 파이를 그려보겠습니다.

각 파이 조각에 할당된 색상에는 색상 목록이 있으며 레이블은 연도로 설정됩니다. Auto PCT는 이민자 비율을 소수점 1자리로 표시합니다. 이제 동일한 그림에 두 개 이상의 플롯을 표시하고 서브플롯 함수에 생성할 행과 열의 수를 지정하는 방법을 살펴보겠습니다. subplots라는 라인 및 스캐터 차트를 만든 다음 하나를 전달해 보겠습니다. y축의 데이터가 동일하므로 두 서브플롯 모두 동일한 y축을 공유하므로 Sheri 매개변수를 true로 지정하십시오.

이제 인덱스가 0인 축과 인덱스 1인 axs라는 두 개의 축이 생겼고, 앞서 했던 것처럼 플롯을 플로팅할 수 있습니다. 이제 두 개의 플롯을 함께 만들었음을 알 수 있습니다. 아니면 밑줄 서브플롯 추가 함수를 사용할 수도 있습니다. 첫 번째 인수는 행 개수, 두 번째 인수, 열 개수이고 마지막 인수는 서브플롯의 인덱스입니다. 그림에 다른 축을 만들고 다음과 같이 서브플롯을 추가할 수 있습니다.

add_subplot 2, 2, 1과 같습니다. 이것은 2x2로 나눈 그림의 첫 번째 축을 의미합니다. 그런 다음 이 좌표축을 기준으로 ax1. 마찬가지로 원하는 모든 플롯을 네 축에 플로팅할 수 있습니다. 마지막으로, 데이터 스토리텔링과 데이터 시각화에 대해 알아보겠습니다.

이 두 용어는 서로 다르며 용도도 다릅니다. 데이터 스토리텔링은 데이터를 중심으로 내러티브를 만드는 스토리텔링의 기술입니다. 설득력 있고 매력적인 스토리를 제공합니다. 반면, 데이터 시각화는 데이터 스토리텔링의 중요한 측면이며 데이터 내의 패턴 , 추세 및 관계를 이해하고 탐색할 수 있는 유익한 차트를 만들면서 발전하고 있습니다. 데이터 스토리텔링에 대한 자세한 내용은 www.

com에서 누구나 필요로 하는 필수 데이터 과학 기술인 데이터 스토리텔링이라는 제목의 이 기사를 읽어 보는 것이 좋습니다. 이 비디오에서는 matplotlib가 다양한 유형의 플롯을 생성할 수 있는 유연한 인터페이스를 제공하는 다용도 플로팅 라이브러리라는 것을 알게 되었습니다. Matplotlib pyplot 모듈은 플롯을 빠르게 생성하고 사용자 지정할 수 있는 편리한 방법을 제공합니다. 데이터 스토리텔링은 데이터를 중심으로 내러티브를 만드는 스토리텔링의 기술입니다. 데이터 시각화는 데이터 스토리텔링의 중요한 측면이며, 여기에는 매력적인 시각적 개체를 만들고 참여시키는 작업이 포함됩니다.

## 예시
- 이 강의는 개념 설명 중심이며 Transcript에서 독립된 예시를 확인하기 어렵다.

## 요약
- 이제 두 개의 플롯을 함께 만들었음을 알 수 있습니다.
- 마찬가지로 원하는 모든 플롯을 네 축에 플로팅할 수 있습니다.
- Matplotlib pyplot 모듈은 플롯을 빠르게 생성하고 사용자 지정할 수 있는 편리한 방법을 제공합니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to plotting directly with Matplotlib. After watching this video, you'll be able to explore various functions offered by Matplotlib for data visualization and plotting. Differentiate between data storytelling and data visualization. Matplotlib is a general purpose, comprehensive plotting library that provides a flexible interface for creating a wide range of plots. It's pyplot module offers a convenient way to create and customize plots quickly.

Let's start plotting directly with matplotlib. First, we need to import the library. Here we're importing pyplot as PLT. We have also imported NumPy as np as numpy arrays are usually used as the data source for plotting and also support mathematical functions. Next, for tabular data, import pandas.

Then call the subplot function and create a figure, the Canvas window and the axes. It's the area where the plot appears. The figure axes pair provides greater control over the figure or Canvas. Now name the plot that you want to create on these axes. Let's now call plot function on the axes to display the line plot, we'll create some synthetic data to generate the plot using NumPy years is equal to np.

arange and passing 1980. 2014 to a range function will generate a 1D array of numbers 1980-2013 excluding 2014 immigrants equals np. randint will generate a 1D array of random integers, between 2,000-10,000 range. Size equals 34, specifies the number of elements in the array. plot function will create a line plot.

It takes the x and y values as arguments corresponding to the data to be considered for the x-axis and the y-axis. plot years immigrants. Finally display the plot using plt. show function and if you want to display this data as a scatter plot called the scatter function on x instead as shown here. scatter and past years and immigrants to it.

Now let's put a title to the plots. To do so, simply pass the title string to the plt. title immigrants between 1980 to 2013. On both the plots, label the axis with plt. xlabel as years and plt.

y label as total immigrants on both axes. You can apply the label entitled directly to the axes as shown here. set_title and pass the title string. set_ x-label or y-label. See now the plots have the title and the labels.

Now using x-lim and y-lim functions, you can set the limits on the x and y-axis. To improve the readability, you can enable grid lines with grid function and pass it with true, like x. Legend function will include the legend to your plot. Notice that the x-axis now starts with 1975 and ends with 2015, and now it shows the grid at the background of the plot. There are various options available to customize the plot.

You can customize the plot with line styles, marker styles, and color customization options to achieve the desired visual effects. With marker, select a style to represent data points in your plot, like S for square and 0 for dots. For line plot, the marker is marker size, while in scatter it's just S. Similarly, you select a color and a size for it. With the line style parameter, you can select different line styles, such as solid, dashed, or dotted lines.

Notice the use of LOC in the legend parameter to specify the location where the legend is placed on the figure. Let's now use a bar plot to represent the number of immigrants for each year. bar function creates a bar plot, passing years corresponding to the x-axis and the immigrants to the y-axis. The height of each bar represents the number of immigrants for that year. hist generates a histogram with bins set to 20.

Notice the use of edge color and color parameters to specify the border and bar column of the histogram. pie will generate a pie on the axis. Here we're plotting a pie for only five years, 1980 to 1984. Colors you are assigned to each pie slice has a list of colors and labels are set is years. Auto PCT displays the percentage of immigrants with one decimal point.

Now, let's explore how to display more than one plot on the same figure and specify the number of rows and columns to be created to the subplots function. For instance, let's create a line and scatter plot in one row, plt. subplots and pass one to it. Both the subplot will be sharing the same y-axis as the data in the y-axis is the same, so assign the Sheri parameter as true. Now you have two axes, axs with index zero and axs with index one, and you can plot your plots as you did earlier.

plot function for the line axs1. scatter for a scatter plot. And see you have created two plots together. Alternatively, we can use the add underscore subplot function. It takes three arguments, first, the number of rows, second, columns and the last is an index of the subplot.

You can create different axes on the figure and add subplots as shown here. add_subplot 2, 2, 1. This one means the first axes on the two-by-two divided figure. Then on these axes, create the plot like an ax1. Similarly, you can plot all the plots you want on the four axes.

You have all your plots on this figure. Lastly, let's learn about data storytelling and data visualization. These are two different terms and serve different purposes. Data storytelling is the art of storytelling that involves creating a narrative around the data. It presents a compelling and engaging story.

On the other hand, data visualization is an important aspect of data storytelling and evolves, creating informative charts to understand and explore patterns, trends, and relationships within the data. It brings data to life. We recommend reading this article titled data storytelling, the essential data science skill everyone needs on www. com for more on data storytelling. In this video, you learned that matplotlib is a versatile plotting library that offers a flexible interface for creating various types of plots.

Matplotlib pyplot module offers a convenient way to create and customize plots quickly. Data storytelling is the art of storytelling that involves creating a narrative around the data. Data visualization is an important aspect of data storytelling and involves creating, engaging visuals

</details>
