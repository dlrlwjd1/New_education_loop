# Introduction to Matplotlib

## 개요
- 강좌: Data Visualization with Python
- 모듈: Introduction to Data Visualization Tools
- 재생 시간: 7분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-data-visualization/lecture/sKNdz/introduction-to-matplotlib)
- Matplotlib은 파이썬에서 가장 널리 사용되는 데이터 시각화 라이브러리 중 하나입니다.
- John Hunter는 전기 CTO 지도 제작, eCOG 신호를 분석하는 연구팀의 일원이었으며 이 작업을 위해 독점 소프트웨어를 사용했습니다.

## 내용
### 핵심 내용
- Matplotlib은 파이썬에서 가장 널리 사용되는 데이터 시각화 라이브러리 중 하나입니다.
- John Hunter는 전기 CTO 지도 제작, eCOG 신호를 분석하는 연구팀의 일원이었으며 이 작업을 위해 독점 소프트웨어를 사용했습니다.
- 아티스트 오브젝트에는 두 가지 유형이 있습니다.
- Matplotlib 스크립팅 레이어는 Matplotlib.
- 이 비디오에서는 Matplotlib이 Python에서 가장 널리 사용되는 데이터 시각화 라이브러리 중 하나라는 것을 배웠습니다.
- Matplotlib 아키텍처는 백엔드 계층, 아티스트 계층 및 스크립팅 계층의 세 가지 주요 계층으로 구성됩니다.

### 한국어 Transcript

Matplotlib 소개에 오신 것을 환영합니다. 이 비디오를 보고 나면 Matplotlib이 무엇이며 왜 만들어졌는지 설명할 수 있을 것입니다. Matplotlib은 파이썬에서 가장 널리 사용되는 데이터 시각화 라이브러리 중 하나입니다. 미국의 신경생물학자인 존 헌터가 만들었습니다. John Hunter는 전기 CTO 지도 제작, eCOG 신호를 분석하는 연구팀의 일원이었으며 이 작업을 위해 독점 소프트웨어를 사용했습니다.

하지만 팀은 라이선스가 하나뿐이었고 번갈아 가며 사용하고 있었습니다. 이러한 한계를 극복하기 위해 John Hunter는 독점 소프트웨어를 Matlab 기반 버전으로 교체하기 시작했습니다. Matlab 기반 버전은 자신과 팀원들이 활용할 수 있고 여러 연구자가 확장할 수 있었습니다. 그 결과 Matplotlib은 처음에 EEG 및 ECoG 시각화 도구로 개발되었습니다. Matlab과 마찬가지로 Matplotlib에는 플롯으로 표시되는 그래픽을 빠르고 쉽게 생성할 수 있는 스크립팅 인터페이스가 장착되어 있습니다.

Matplotlib의 아키텍처는 세 가지 주요 계층으로 구성됩니다. 많은 작업이 이루어지는 백엔드 계층, 즉 아티스트 계층은 웹 애플리케이션 서버, UI 애플리케이션 또는 다른 개발자와 공유할 스크립트를 작성할 때 적합한 프로그래밍 패러다임입니다. 스크립팅 계층은 일상적인 용도에 적합한 계층입니다. 일반적인 작업을 단순화하고 그래픽 및 플롯을 빠르고 쉽게 생성할 수 있는 더 가벼운 스크립팅 인터페이스로 간주됩니다. 백엔드 계층에는 세 가지 내장 추상 인터페이스 클래스가 있습니다.

FigureCanvas는 끝을 정의합니다. 렌더러 클래스의 인스턴스인 Renderer는 그림 캔버스에 그리는 방법을 알고 있습니다. 이벤트는 키보드 스트로크 및 마우스 클릭과 같은 사용자 입력을 처리합니다. 아티스트는 렌더러를 가져와 캔버스에 잉크를 넣는 방법을 아는 개체입니다. Matplotlib 피규어에 보이는 모든 것은 아티스트의 인스턴스입니다.

제목, 선, 눈금 레이블, 이미지 등은 모두 개별 아티스트에 해당합니다. 아티스트 오브젝트에는 두 가지 유형이 있습니다. 프리미티브: Line2D, 사각형, 원 및 텍스트. 합성: 축, 틱, 축, 도형 각 그래픽의 모든 요소를 포함하고 관리하는 최상위 Matplotlib 객체는 피겨 아티스트입니다. 가장 중요한 복합 아티스트는 축입니다.

축은 틱, 축선, 그리드 및 플롯 배경을 만들고 조작하는 메서드를 포함하여 대부분의 Matplotlib API 플로팅 메서드가 정의되는 곳이기 때문입니다. 각 컴포지트 아티스트에는 프리미티브 아티스트뿐만 아니라 다른 컴포지트 아티스트도 포함될 수 있습니다. 피규어 아티스트는 축 아티스트, 사각형, 텍스트 아티스트를 가질 수 있습니다. 아티스트 레이어는 문법적으로 무겁습니다. 프로그래머는 Matplotlib를 애플리케이션 서버와 통합하면서 훨씬 편리하게 사용할 수 있는 백엔드 및 아티스트 레이어를 직접 사용합니다.

데이터 시각화나 탐색적 상호작용과 관련된 과학자들의 일상 업무에는 Pyplot이라는 스크립팅 계층이 더 효과적입니다. Matplotlib 스크립팅 레이어는 Matplotlib. Pyplot 인터페이스로, 캔버스와 피겨 아티스트 인스턴스를 자동으로 정의하고 연결합니다. 스크립팅 레이어를 사용하여 10,000개의 난수로 구성된 히스토그램을 생성해 보겠습니다. 먼저 Pyplot 인터페이스를 가져오면 히스토그램 및 기타 아트 오브젝트를 만들고 조작하는 것과 관련된 모든 메서드를 볼 수 있습니다.

hist 메서드 또는 그림 표시가 Pyplot 인터페이스의 일부인지 여부 Pyplot hist 메서드에서 임의의 부동 소수점을 생성하기 위해 Numpy의 random 모듈을 random. randn과 함께 사용하는 것을 볼 수 있습니다. hist는 각 히스토그램 막대에 대한 사각형 아티스트 시퀀스를 만들어 축 컨테이너에 추가합니다. 10,000개의 난수 배열과 100개의 빈을 생성하는 100개의 배열을 포함하는 변수 X를 hist 함수에 전달했습니다. 스크립팅 레이어에서 작업하는 것은 간단합니다.

플롯의 구조는 데이터의 시각적 표현을 구성하는 다양한 구성 요소 및 요소를 나타냅니다. Matplotlib의 공식 웹 사이트에는 그림의 해부학이라는 제목의 참고 자료가 있습니다. 이 이미지는 요구 사항에 따라 플롯에 포함될 수 있는 내용을 이해하기 위한 완벽한 가이드를 제공합니다. 주 구성요소는 플롯 또는 서브플롯이 포함된 창 또는 캔버스입니다. Matplotlib Figure를 캔버스와 축은 그림 내의 개별 플롯을 나타냅니다.

먼저 두 축 부분을 만들어 하나의 그림에 두 개의 플롯을 만들어야 합니다. 축은 데이터를 플로팅하기 위한 스케일과 눈금을 제공합니다. 플로팅되는 실제 데이터는 축과 같이 플롯에 점이나 마커로 표시됩니다. 좋은 플롯에는 플롯에 대한 요약이나 설명을 제공하는 제목이 있어야 합니다. 마찬가지로 레이블은 각 축에 플로팅되는 데이터를 설명합니다.

다양한 요소나 데이터 계열의 의미를 설명하는 범례를 포함시키고, 데이터 요소를 시각적으로 정렬하는 데 도움이 되는 그리드에 박수를 보낼 수 있으며, 플롯에서 값을 읽고 보조 정보를 제공하거나 특정 데이터 요소에 대한 설명을 제공하는 주석을 추가할 수 있습니다. 개별 데이터 포인트, 색상 및 스타일에 대한 심볼을 선택할 수 있습니다. 이 링크를 클릭하면 Matplotlib 제작자가 작성한 장으로 이동합니다. Matplotlib의 역사와 그 아키텍처에 대해 더 자세히 알고 싶다면 이 책을 읽어 보는 것이 좋습니다. 이 비디오에서는 Matplotlib이 Python에서 가장 널리 사용되는 데이터 시각화 라이브러리 중 하나라는 것을 배웠습니다.

매트플로틀립은 처음에 EEG, ECoG 시각화 도구로 개발되었습니다. Matplotlib 아키텍처는 백엔드 계층, 아티스트 계층 및 스크립팅 계층의 세 가지 주요 계층으로 구성됩니다. 플롯의 구조는 데이터의 시각적 표현을 구성하는 다양한 구성 요소 및 요소를 나타냅니다.

## 예시
- 이 강의는 개념 설명 중심이며 Transcript에서 독립된 예시를 확인하기 어렵다.

## 요약
- Matplotlib 스크립팅 레이어는 Matplotlib.
- 이 비디오에서는 Matplotlib이 Python에서 가장 널리 사용되는 데이터 시각화 라이브러리 중 하나라는 것을 배웠습니다.
- Matplotlib 아키텍처는 백엔드 계층, 아티스트 계층 및 스크립팅 계층의 세 가지 주요 계층으로 구성됩니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to introduction to Matplotlib. After watching this video, you'll be able to explain what Matplotlib is and why it was created. Describe the uses for Matplotlib. Matplotlib is one of the most widely used data visualization libraries in Python. It was created by John Hunter, who was an American neurobiologist.

John Hunter was part of a research team analyzing electro CTO cartography, ECoG signals, and use proprietary software for this task. However, the team had only one license and was taking turns using it. To overcome this limitation, John Hunter set out to replace the proprietary software with a Matlab based version that could be utilized by him and his teammates and extended by multiple investigators. As a result, Matplotlib was initially developed as an EEG and ECoG visualization tool. Just like Matlab, Matplotlib was equipped with a scripting interface for quick and easy generation of graphics represented by the plot.

As for Matplotlib's architecture, it's composed of three main layers. The backend layer, the artist layer, where much of the heavy lifting happens, is the appropriate programming paradigm when writing a web application server, a UI application, or a script to be shared with other developers. The scripting layer is the appropriate layer for everyday purposes. It's considered a lighter scripting interface to simplify common tasks and for quick and easy generation of graphics and plots. The backend layer has three built-in abstract interface classes.

FigureCanvas defines end encompasses the area on which the figure is drawn. Renderer, an instance of the renderer class knows how to draw on figure canvas. The event handles user inputs such as keyboard strokes and mouse clicks. The artist is the object that knows how to take the renderer and put ink on the Canvas. Everything you see in a Matplotlib figure is an artist instance.

The title, the lines, the tick labels, the images, and so on, all correspond to an individual artist. There are two types of artist objects. Primitive: Line2D, Rectangle, Circle, and Text. Composite: Axis, Tick, Axes, and Figure. The top-level Matplotlib object that contains and manages all the elements in each graphic is the figure artist.

The most important composite artist is the axis because it's where most of the Matplotlib API plotting methods are defined, including methods to create and manipulate the ticks, the axis lines, the grid, and the plot background. Each composite artists may contain other composite artists as well as primitive artists. A figure artists can have an axis artist, a rectangle, and a text artist. The artist layer is syntactically heavy. Programmers work directly with the backend and artists layers as they offer greater convenience while integrating Matplotlib with application servers.

When it comes to the daily tasks of scientists involving data visualization or exploratory interactions, the scripting layer known as Pyplot works better. Matplotlib scripting layer is the Matplotlib. Pyplot interface, which automatically defines a Canvas and a figure artist instance and connects them. Let's generate a histogram of 10,000 random numbers with the scripting layer. First we import the Pyplot interface and you can see all the methods associated with creating the histogram and other art objects and manipulating them.

Whether the hist method or showing the figure is part of the Pyplot interface. Notice the use of Numpy's random module with random. randn for creating random floats from the Pyplot hist method is called, hist creates a sequence of rectangle artists for each histogram bar and adds them to the axes container. To the hist function, we have passed the variable X containing an array of 10,000 random numbers and 100, which means creating 100 bins. The result is a histogram.

It's simple to work in the scripting layer. The anatomy of a plot refers to the different components and elements that make up a visual representation of data. There's a reference on the official website of Matplotlib titled Anatomy of figure. This image provides a complete guide to understanding what a plot may include based on your requirements. The main component is the window or Canvas containing the plot or subplots.

Matplotlib figure as a Canvas and axes represents an individual plot within a figure, you must first create two-axes parts to make two plots on one figure, the axis provides scales and tick marks for plotting the data. The actual data being plotted is represented as points or markers on the plot like the axis. A good plot must have a title to provide a summary or explanation of the plot. Likewise, labels describe data being plotted on each axis. You may like to include a legend to explain the meaning of different elements or data series and applaud a grid to help visually aligned data points and aid and reading values from the plot and annotations to provide supplemental information or explanations about specific data points are regions in the plot.

You can choose symbols for individual data point, colors, and styles. This link will take you to a chapter written by the creators of Matplotlib. If you're interested in learning more about the history of Matplotlib and its architecture, then this is a recommended reading. In this video, you learned that Matplotlib is one of the most widely used data visualization libraries in Python. Matplotlib was initially developed as an EEG, ECoG visualization tool.

Matplotlib architecture is composed of three main layers, the backend layer, the artist layer, and the scripting layer. The anatomy of a plot refers to the different components and elements that make up a visual representation of data.

</details>
