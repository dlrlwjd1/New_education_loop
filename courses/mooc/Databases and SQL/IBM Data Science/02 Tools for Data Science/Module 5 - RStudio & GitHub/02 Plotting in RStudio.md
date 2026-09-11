# Plotting in RStudio

## 개요
- 강좌: Tools for Data Science
- 모듈: RStudio & GitHub
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/open-source-tools-for-data-science/lecture/xYCfs/plotting-in-rstudio)
- 이 비디오를 시청한 후에는 R 데이터 시각화 패키지를 나열하고, 내장된 R plot 함수를 사용하고, R ggplot 라이브러리를 사용하여 플롯에 함수와 인수를 추가하고, 플롯에 제목과 이름을 추가할 수 있습니다.
- 데이터가 밀려드는 상황에서 데이터 과학자로서 해야 할 일 중 하나는 시각화를 사용하여 통찰력을 도출하는 것입니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 R 데이터 시각화 패키지를 나열하고, 내장된 R plot 함수를 사용하고, R ggplot 라이브러리를 사용하여 플롯에 함수와 인수를 추가하고, 플롯에 제목과 이름을 추가할 수 있습니다.
- 데이터가 밀려드는 상황에서 데이터 과학자로서 해야 할 일 중 하나는 시각화를 사용하여 통찰력을 도출하는 것입니다.
- R의 ggplot 라이브러리를 사용하여 정보를 제공하는 시각화를 만들 수 있습니다.
- ggplot 라이브러리는 다양한 함수와 인수를 사용하여 플롯에 계층을 추가하여 복잡한 요청을 처리할 수 있습니다.
- 또한 Ggtitle 인수와 lab의 인수를 사용하여 두 축에 적절한 이름을 지정함으로써 제목을 추가하고 축 이름을 변경할 수 있습니다.
- 이 비디오에서는 R의 인기 있는 데이터 시각화 패키지, 내장된 R 플롯 함수를 사용한 플로팅, ggplot을 사용한 플로팅, ggplot을 사용한 플로팅, ggtitle 및 lab 함수를 사용하여 제목 추가, 축 이름 변경에 대해 배웠습니다.

### 한국어 Transcript

“RStudio에서의 플로팅”에 오신 것을 환영합니다. 이 비디오를 시청한 후에는 R 데이터 시각화 패키지를 나열하고, 내장된 R plot 함수를 사용하고, R ggplot 라이브러리를 사용하여 플롯에 함수와 인수를 추가하고, 플롯에 제목과 이름을 추가할 수 있습니다. 데이터가 밀려드는 상황에서 데이터 과학자로서 해야 할 일 중 하나는 시각화를 사용하여 통찰력을 도출하는 것입니다. R에는 요구 사항에 따라 사용할 수 있는 다양한 데이터 시각화 패키지가 있습니다. R 환경에 이러한 패키지를 설치하려면 install.

packages 및 패키지 이름 명령을 사용합니다. ggplot은 히스토그램, 막대형 차트, 스캐터플롯 등과 같은 데이터 시각화에 사용됩니다. 이를 통해 단일 시각화에 레이어와 구성 요소를 추가할 수 있습니다. Plotly는 개별 HTML 파일로 표시하거나 저장할 수 있는 웹 기반 데이터 시각화에 사용됩니다. Lattice는 복잡한 다중 변수 데이터 세트를 구현하는 데 사용됩니다.

사용자 지정 없이 그래픽을 처리할 수 있는 고급 데이터 시각화 라이브러리입니다. 또한 Leaflet은 대화형 플롯을 만드는 데 사용됩니다. R에는 플롯과 시각화를 생성하는 내장 함수가 있습니다. 예를 들어, 여기에 표시된 정의를 사용하여 플롯을 생성할 수 있습니다. plot 함수는 값과 인덱스의 산점도를 반환합니다.

함수에 줄과 제목을 추가하여 비주얼리제이션을 읽고 이해하기 쉽게 만들 수도 있습니다. 줄을 추가하려면 유형을 지정하고 제목을 추가하려면 제목 함수를 선택합니다. R의 ggplot 라이브러리를 사용하여 정보를 제공하는 시각화를 만들 수 있습니다. ggplot 라이브러리는 다양한 함수와 인수를 사용하여 플롯에 계층을 추가하여 복잡한 요청을 처리할 수 있습니다. 예를 들어 스캐터 차트를 만들려면 내장된 데이터셋 Mtcars를 사용해 보겠습니다.

먼저 라이브러리 함수를 사용하여 ggplot 라이브러리를 메모리로 읽어들입니다. 다음으로, 데이터 프레임 mtCars에서 ggplot 함수를 사용하여 X축을 갤런당 마일로 지정하고 Y축을 무게로 지정합니다. 그런 다음 geom point 함수를 추가하여 스캐터 차트를 지정합니다. 그렇지 않으면 빈 플롯이 반환됩니다. 출력은 더 읽기 쉬운 플롯이 될 것입니다.

또한 Ggtitle 인수와 lab의 인수를 사용하여 두 축에 적절한 이름을 지정함으로써 제목을 추가하고 축 이름을 변경할 수 있습니다. 결과는 의미 있는 제목이 포함된 그래프입니다. 실습에서는 ggplot과 gGally라는 확장 라이브러리를 사용하여 그래픽을 다시 만들어 보겠습니다. GGally는 여러 함수를 추가하여 ggplot을 확장하여 기하학적 객체를 변환된 데이터와 결합하는 복잡성을 줄입니다. 이 비디오에서는 R의 인기 있는 데이터 시각화 패키지, 내장된 R 플롯 함수를 사용한 플로팅, ggplot을 사용한 플로팅, ggplot을 사용한 플로팅, ggtitle 및 lab 함수를 사용하여 제목 추가, 축 이름 변경에 대해 배웠습니다.

## 예시
- packages 및 패키지 이름 명령을 사용합니다.
- 예를 들어, 여기에 표시된 정의를 사용하여 플롯을 생성할 수 있습니다.
- 예를 들어 스캐터 차트를 만들려면 내장된 데이터셋 Mtcars를 사용해 보겠습니다.
- 실습에서는 ggplot과 gGally라는 확장 라이브러리를 사용하여 그래픽을 다시 만들어 보겠습니다.

## 요약
- ggplot 라이브러리는 다양한 함수와 인수를 사용하여 플롯에 계층을 추가하여 복잡한 요청을 처리할 수 있습니다.
- 또한 Ggtitle 인수와 lab의 인수를 사용하여 두 축에 적절한 이름을 지정함으로써 제목을 추가하고 축 이름을 변경할 수 있습니다.
- 이 비디오에서는 R의 인기 있는 데이터 시각화 패키지, 내장된 R 플롯 함수를 사용한 플로팅, ggplot을 사용한 플로팅, ggplot을 사용한 플로팅, ggtitle 및 lab 함수를 사용하여 제목 추가, 축 이름 변경에 대해 배웠습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to “Plotting in RStudio.” After watching this video, you will be able to: List the R data visualization packages, Use the inbuilt R plot function, Use the R ggplot library to add functions and arguments to the plot, And, add titles and names to the plot. With the influx of data, one of your many jobs as data scientists is to produce insights using visualizations. R has different packages for data visualization that you can use based on your requirement. To install these packages in your R environment, use the install. packages and the package name command.

Examples of R packages include the following. ggplot is used for data visualizations such as histograms, bar charts, scatterplots, and so on. It allows adding layers and components to a single visualization. Plotly is used for web-based data visualizations that can be displayed or saved as individual HTML files. Lattice is used to implement complex, multi-variable data sets.

It is a high-level data visualization library that can handle graphics without customizations. And, Leaflet is used for creating interactive plots. R has inbuilt functions to create plots and visualization. For example, you can create a plot using the definition shown here. The plot function returns a scatterplot of the values vs.

You can also add lines to the function and a title to make the visualization easier to read and understand. To add a line, you specify the type and to add a title, you select the title function. In the plot, you have added a line and a title. You can create informative visualizations using the ggplot library of R. It can handle complex requests by adding layers to plots using different functions and arguments.

For example, to create a scatter plot, let’s use the inbuilt dataset Mtcars. You will first read the ggplot library into the memory using the library function. Next, use the ggplot function on the data frame MTcars, specify the X axis as miles per gallon and the Y axis as weight. Then add the geom point function to specify a scatter plot; otherwise, it will return an empty plot. The output will be an easier-to-read plot.

In addition, you can add titles and change the axis name by using the Ggtitle argument and the lab’s argument to specify appropriate names for both axes. The result will be a graph with meaningful titles. In the lab, you will recreate the graphics with ggplot and the extension library called GGally. GGally extends ggplot by adding several functions to reduce the complexity of combining geometric objects with transformed data. In this video, you learned about: Popular data visualization packages in R, Plotting with the inbuilt R plot function, Plotting with ggplot, Adding titles and changing the axis names using the ggtitle and lab’s function.

</details>
