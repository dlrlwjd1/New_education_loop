# Basic Plotting with Matplotlib

## 개요
- 강좌: Data Visualization with Python
- 모듈: Introduction to Data Visualization Tools
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-data-visualization/lecture/i7Uqc/basic-plotting-with-matplotlib)
- 이 비디오를 시청한 후에는 Jupyter 노트북을 사용하여 Matplotlib를 사용하여 플롯을 만드는 방법을 살펴볼 수 있습니다.
- Plot 함수를 사용하여 일반적인 시각화 도구를 만들 수 있습니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 Jupyter 노트북을 사용하여 Matplotlib를 사용하여 플롯을 만드는 방법을 살펴볼 수 있습니다.
- Plot 함수를 사용하여 일반적인 시각화 도구를 만들 수 있습니다.
- 강좌를 진행하면서 히스토그램, 막대형 차트, 상자도표 등 기존의 거의 모든 시각화 도구를 플롯 함수라는 하나의 함수만으로 문자 그대로 거의 모든 만들 수 있다는 것을 알게 되면 이 인터페이스의 위력을 알게 될 것입니다.
- 새 팝업 창에서 플롯이 생성되면 매직 함수인 quote, %matplotlib, end quot를 사용하여 브라우저에 플롯을 강제로 생성하고 인라인을 백엔드로 전달할 수 있습니다.
- Matplotlib에는 다양한 백엔드가 있습니다.
- Matplotlib에는 다양한 백엔드가 있습니다.

### 한국어 Transcript

[음악] Matplotlib를 사용한 기본 플로팅에 오신 것을 환영합니다. 이 비디오를 시청한 후에는 Jupyter 노트북을 사용하여 Matplotlib를 사용하여 플롯을 만드는 방법을 살펴볼 수 있습니다. Plot 함수를 사용하여 일반적인 시각화 도구를 만들 수 있습니다. Matplotlib는 Python 스크립트, Python 및 IPython 셸, 웹 애플리케이션 서버 및 그래픽 사용자 인터페이스 툴킷과 같은 다양한 환경에 통합할 수 있는 잘 정립된 데이터 시각화 라이브러리입니다. Jupyter 노트북도 그 중 하나입니다.

Jupyter 노트북은 라이브 코드, 시각화 및 일부 설명 텍스트가 포함된 문서를 만들고 공유할 수 있는 오픈 소스 웹 애플리케이션입니다. Jupyter는 Matplotlib에 대한 일부 특수 지원을 제공하므로 Jupyter 노트북을 시작하면 Matplotlib를 가져오기만 하면 바로 사용할 수 있습니다. 이제 스크립팅 인터페이스를 사용하여 거의 모든 시각화 도구를 만드는 방법을 알아보겠습니다. 강좌를 진행하면서 히스토그램, 막대형 차트, 상자도표 등 기존의 거의 모든 시각화 도구를 플롯 함수라는 하나의 함수만으로 문자 그대로 거의 모든 만들 수 있다는 것을 알게 되면 이 인터페이스의 위력을 알게 될 것입니다. 먼저 Scripting 인터페이스를 plt로 가져와서 위치 5-5에 원형 마크를 플로팅해 보겠습니다.

플롯이 별도의 창이 아닌 브라우저 내에서 어떻게 생성되었는지 확인하십시오. 새 팝업 창에서 플롯이 생성되면 매직 함수인 quote, %matplotlib, end quot를 사용하여 브라우저에 플롯을 강제로 생성하고 인라인을 백엔드로 전달할 수 있습니다. Matplotlib에는 다양한 백엔드가 있습니다. 이 백엔드의 한 가지 한계는 일단 렌더링된 그림을 수정할 수 없다는 것입니다. 따라서 그림을 렌더링한 후에는 축에 그림 제목이나 레이블 등을 추가할 방법이 없습니다.

show 함수를 호출하기 전에 새 플롯을 생성하고 제목과 축 레이블을 추가해야 합니다. 이러한 한계를 극복한 백엔드는 노트북 백엔드입니다. 노트북 백엔드가 있는 상태에서 plt 함수가 호출되면 활성 피규어가 있는 경우 이를 활성 피규어에 적용합니다. 그림이 없으면 새 그림이 렌더링됩니다. plot 함수를 호출하여 위치 5-5에 원형 마크를 플로팅하면 백엔드는 활성 그림이 존재하는지 확인합니다.

활성 그림이 없으므로 그림을 생성하고 위치 5-5에 원형 표시를 추가합니다. 이 백엔드의 아름다운 점은 이제 그림을 다시 생성할 필요 없이 플롯이 렌더링된 후 축에 제목이나 레이블을 쉽게 추가할 수 있다는 것입니다. 마지막으로, Matplotlib의 또 다른 장점은 Pandas에도 이 기능이 내장되어 있다는 것입니다. 따라서 Pandas에서 플로팅하는 것은 주어진 Pandas 시리즈 또는 Pandas 데이터 프레임에서 Plot 함수를 호출하는 것만큼 간단합니다.1980년부터 1996년까지 인도와 중국에서 캐나다로 이주한 이민자 수를 나타내는 데이터 프레임이 있다고 가정해 보겠습니다. 그리고 우리는 이 데이터를 선 도표로 만드는 데 관심이 있습니다.

우리가 해야 할 일은 이 데이터 프레임에 있는 함수인 플롯을 호출하는 것뿐입니다. 우리는 이것을 India_China underscore_df라고 부르고 kind = line으로 전달했습니다. 이제 데이터 프레임에 있는 데이터의 선 도표를 볼 수 있습니다. 데이터의 히스토그램을 그리는 것도 다르지 않습니다. 데이터 프레임에 인도 열의 히스토그램을 플로팅한다고 가정해 보겠습니다.

이 열에서 plot 함수를 호출하고 히스토그램에 대해 hist로 전달하기만 하면 됩니다. 여기 1980년부터 1996년까지 캐나다로 이주한 인도 이민자 수를 히스토그램으로 볼 수 있습니다. 이 비디오에서는 Matplotlib가 다양한 환경에 통합될 수 있는 잘 정립된 데이터 시각화 라이브러리라는 것을 알게 되었습니다. Jupyter Notebook은 문서를 만들고 공유할 수 있는 오픈 소스 웹 애플리케이션입니다. Matplotlib에는 다양한 백엔드가 있습니다.

plt를 사용하여 플롯에 레이블과 제목을 쉽게 포함할 수 있습니다.

## 예시
- Jupyter 노트북은 라이브 코드, 시각화 및 일부 설명 텍스트가 포함된 문서를 만들고 공유할 수 있는 오픈 소스 웹 애플리케이션입니다.

## 요약
- 새 팝업 창에서 플롯이 생성되면 매직 함수인 quote, %matplotlib, end quot를 사용하여 브라우저에 플롯을 강제로 생성하고 인라인을 백엔드로 전달할 수 있습니다.
- Matplotlib에는 다양한 백엔드가 있습니다.
- Matplotlib에는 다양한 백엔드가 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

[MUSIC] Welcome to Basic Plotting with Matplotlib. After watching this video, you'll be able to explore how to use Matplotlib to create plots by employing Jupyter notebook. Create conventional visualization tools using the Plot function. Matplotlib is a Well established data visualization library that can be integrated in different environments such as Python scripts, Python and IPython shells, web application servers and In Graphical User Interface toolkits. The Jupyter notebook is also one of them.

The Jupyter notebook is an open source web application that allows you to create and share documents that contain live code, visualizations and some explanatory text as well. Jupyter has some specialized support for Matplotlib, so if you start a Jupyter notebook, all you have to do is import Matplotlib and you're ready to go. We will now learn how to create almost all of the visualization tools using the Scripting interface. As we proceed in the course, you will appreciate the power of this interface when you find out that you can literally create almost all of the conventional visualization tools, such as histograms, bar charts, boxplots and many others using one function only, the Plot function. Let's start with an example.

Let's first import the Scripting interface as plt and let's plot a circular mark at the position 5-5. Notice how the plot was generated within the browser and not in a separate window. If the plot gets generated in the new popup window, then you can enforce generating plots into the browser using what's called the magic function, quote, %matplotlib, end quote, and you pass in inline as the back end. Matplotlib has a number of different backends available. One limitation of this backend is that you cannot modify a figure once it's rendered.

So after rendering the figure, there is no way for us to add, for example, a figure title or labels to its axis. We will need to generate a new plot and add a title and the axis labels before calling the show function. A backend that overcomes this limitation is the notebook backend. With the notebook backend in place, if a plt function is called, it applies them to the active figure if it exists. If a figure does not exist, it renders a new figure.

So when we call the plt. plot function to plot a circular mark at position 5-5, the backend checks if an active figure exists. Since no active figure exists, it generates a figure and adds a circular mark to position 5-5. And what is beautiful about this backend is that now we can easily add a title or labels to the axis after the plot was rendered without the need of regenerating the figure. Finally, another thing that is great about Matplotlib is that Pandas also has a built in implementation of it.

Therefore, plotting in Pandas is as simple as calling the Plot function on a given Pandas series or Pandas data frame. So say we have a data frame of the number of immigrants to Canada from India and China for the years 1980 to 1996. And we're interested in generating a line plot of this data. All we have to do is call the plot, the function on this data frame, which we have called India_China underscore_df and pass in kind = line. And there you have it, a line plot of the data in the data frame.

Plotting a histogram of the data is not any different. So say we would like to plot a histogram of the India column in our data frame. All we have to do is call the plot function on that column and pass in kind as hist for histogram. And there you have it a histogram of the number of Indian immigrants to Canada from 1980 to 1996. In this video, you learned that Matplotlib is a well established data visualization library that can be integrated in different environments.

Jupyter Notebook is an open source web application that allows you to create and share documents. Matplotlib has a number of different backends available. You can easily include the label and title to your plot with plt.

</details>
