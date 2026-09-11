# Introduction to Plotly

## 개요
- 강좌: Data Visualization with Python
- 모듈:  Creating Dashboards with Plotly and Dash
- 재생 시간: 6분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-data-visualization/lecture/S8Igg/introduction-to-plotly)
- 이 비디오를 시청한 후에는 Plotly와 두 개의 하위 모듈을 살펴보고 Plotly 그래프 객체와 Plotly Express를 사용하여 사용자 정의 및 대화형 차트를 만드는 방법을 알아볼 수 있습니다.
- Plotly는 40개 이상의 고유한 차트 유형을 지원하는 대화형 오픈 소스 플로팅 라이브러리입니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 Plotly와 두 개의 하위 모듈을 살펴보고 Plotly 그래프 객체와 Plotly Express를 사용하여 사용자 정의 및 대화형 차트를 만드는 방법을 알아볼 수 있습니다.
- Plotly는 40개 이상의 고유한 차트 유형을 지원하는 대화형 오픈 소스 플로팅 라이브러리입니다.
- Plotly Python은 Plotly JavaScript 라이브러리의 확장이며 통계, 재무, 지도, 과학 및 3차원 데이터와 같은 차트 유형을 포함합니다.
- 이제 Plotly Express를 사용하여 동일한 라인 차트를 만들어 보겠습니다.
- 데이터 자산 거래소의 항공사 보고 데이터세트를 사용하여 Plotly Graph Objects와 Express를 사용하여 차트를 만드는 방법을 시연해 보겠습니다.
- 이 비디오에서는 Plotly가 40개 이상의 고유한 차트 유형을 지원하는 대화형 오픈 소스 플로팅 라이브러리라는 것을 배웠습니다.

### 한국어 Transcript

Plotly 소개에 오신 것을 환영합니다. 이 비디오를 시청한 후에는 Plotly와 두 개의 하위 모듈을 살펴보고 Plotly 그래프 객체와 Plotly Express를 사용하여 사용자 정의 및 대화형 차트를 만드는 방법을 알아볼 수 있습니다. Plotly는 40개 이상의 고유한 차트 유형을 지원하는 대화형 오픈 소스 플로팅 라이브러리입니다. Plotly Python은 Plotly JavaScript 라이브러리의 확장이며 통계, 재무, 지도, 과학 및 3차원 데이터와 같은 차트 유형을 포함합니다. Plotly Python을 사용하여 만든 웹 기반 시각화는 Jupiter Notebook에 표시하거나 독립형 HTML 파일에 저장하거나 대시를 사용하여 순수 Python 빌드 웹 응용 프로그램의 일부로 사용할 수 있습니다.

여기서는 Plotly의 두 하위 모듈인 플로틀리 그래프 객체와 Plotly Express에 초점을 맞출 것입니다. Plotly Graph Object는 그림, 트레이스 및 레이아웃에 대한 저수준 인터페이스입니다. Plotly Graph Objects 모듈은 최상위 클래스 Plotly. Figure를 사용하여 그림을 표현하는 데 사용되는 그래프 객체라는 클래스, 그림, 트레이스 및 레이아웃으로 구성된 자동 생성된 계층 구조를 제공합니다. 플로틀리 익스프레스는 플로틀리를 위한 하이 레벨 래퍼입니다.

Plotly에서 제공하는 가장 일반적인 그림을 만들기 위한 권장 출발점입니다. 간단한 구문인 경우 내부적으로 그래프 객체를 사용하기 때문입니다. 간단한 라인 차트 생성 예제를 통해 plotly. graph_objects 하위 모듈을 사용하는 방법을 살펴보겠습니다. 여기서는 그래프 객체를 go로 임포트하고 있습니다.

graph_objects를 그대로 가져오세요. 그런 다음 import plotly. express를 px 명령으로 사용하여 플로틀리 익스프레스를 가져오고 있습니다. 마지막으로 샘플 데이터를 생성하려면 numpy가 필요합니다. numpy를 가져와서 numpy를 np로 가져온 다음 np.

seed (10) 를 사용하여 샘플 데이터를 생성합니다. 재현성을 위해 랜덤 시드를 설정하고 있습니다. 이제 12개의 요소로 구성된 배열을 만들어 보겠습니다. randint (50, 500, 크기=12) 를 사용하여 임의의 y 값을 만들어 보겠습니다. graph에는 딕셔너리 구조를 가진 JSON 객체가 들어 있습니다.

이전 슬라이드에서 설명한 대로 Plotly Graph 객체를 가져왔으므로 go는 JSON 객체가 됩니다. go 개체 키워드의 값을 업데이트하여 차트를 플로팅할 수 있습니다. 여기에 스캐터라는 트레이스를 추가하여 그림을 생성합니다. scatter (x=x, y=y)). 다음으로, 업데이트 레이아웃 방법을 사용하여 그림의 레이아웃을 업데이트합니다.

여기서는 x축, y축, 차트 제목을 업데이트하고 있습니다. update_layout (제목= '단순 선 도표', xaxis_title= '월', yaxis_title= 'Sales'). show 메서드를 호출하여 생성된 플롯을 표시합니다. 이제 Plotly Express를 사용하여 동일한 라인 차트를 만들어 보겠습니다. 예제에서 볼 수 있듯이 단일 명령을 사용하여 전체 라인 차트를 만들 수 있습니다.

해시태그, 전체 라인 차트를 하나의 명령으로 만들 수 있습니다. line (x=x, y=y, title= '단순 선 도표', labels=dict, (x= '월', y= '판매') fig. show () 시각화는 자동으로 인터랙티브하게 실행됩니다. Plotly Express를 사용하면 시각화를 쉽게 만들고 수정할 수 있습니다. 이제 Plotly 라이브러리를 사용해 볼 차례입니다.

데이터 자산 거래소의 항공사 보고 데이터세트를 사용하여 Plotly Graph Objects와 Express를 사용하여 차트를 만드는 방법을 시연해 보겠습니다. 항공사 보고 데이터세트에 대한 간략한 개요는 다음과 같습니다. 보고 항공사의 정시 실적 데이터셋에는 미국 교통통계국에 보고된 약 2억 개의 미국 국내선 항공편에 대한 정보가 포함되어 있습니다. 데이터셋에는 날짜, 시간, 출발 공항, 도착 공항 등 각 항공편에 대한 기본 정보와 해당하는 경우 항공편 지연 시간 및 지연 사유에 대한 정보가 포함됩니다. 이 비디오에서는 Plotly가 40개 이상의 고유한 차트 유형을 지원하는 대화형 오픈 소스 플로팅 라이브러리라는 것을 배웠습니다.

Plotly Graph 객체는 그림, 그래프선, 레이아웃에 대한 저수준 인터페이스입니다. Plotly Express는 Plotly의 고급 래퍼입니다. 내부적으로 그래프 객체를 사용합니다.

## 예시
- express를 px 명령으로 사용하여 플로틀리 익스프레스를 가져오고 있습니다.
- 예제에서 볼 수 있듯이 단일 명령을 사용하여 전체 라인 차트를 만들 수 있습니다.
- 해시태그, 전체 라인 차트를 하나의 명령으로 만들 수 있습니다.

## 요약
- 이제 Plotly Express를 사용하여 동일한 라인 차트를 만들어 보겠습니다.
- 데이터 자산 거래소의 항공사 보고 데이터세트를 사용하여 Plotly Graph Objects와 Express를 사용하여 차트를 만드는 방법을 시연해 보겠습니다.
- 이 비디오에서는 Plotly가 40개 이상의 고유한 차트 유형을 지원하는 대화형 오픈 소스 플로팅 라이브러리라는 것을 배웠습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Introduction to Plotly. After watching this video, you'll be able to explore Plotly and it's two sub-modules, discover how to use Plotly graph objects and Plotly express to create customized and interactive charts. Plotly is an interactive, open-source plotting library that supports over 40 unique chart types. It's available in Python and JavaScript. Plotly Python is an extension of Plotly JavaScript Library and includes chart types like statistical, financial, maps, scientific, and three-dimensional data.

The web-based visualizations created using Plotly Python can be displayed in Jupiter Notebook, saved to standalone HTML files, or served as part of pure Python build web applications using dash. Here, we'll be focusing on the two sub-modules of Plotly; Plotly Graph Objects and Plotly Express. Plotly Graph Objects is the low-level interface to figures, traces and layout. The Plotly Graph Objects module provides an automatically generated hierarchy of classes, figures, traces, and layout called graph objects that are used for representing figures with a top-level class Plotly. Plotly Express is a high level wrapper for Plotly.

It's a recommended starting point for creating the most common figures provided by Plotly. Because if it's simple syntax, it uses graph objects internally. Let's see how to use plotly. graph_objects submodule with a simple line chart creation example. First, import the required packages.

Here we're importing graph objects as go. By writing the code, import plotly. graph_objects as go. Then we're importing Plotly Express with import plotly. express as px command.

Lastly, we need numpy to generate sample data. We're importing numpy, import numpy as np, then generate sample data with np. We're setting random seed for reproducibility. Now let's create an array of 12 elements; x=np. Let's create random y values by using random module y=np.

randint (50, 500, size=12). graph contains the JSON object, which has a dictionary structure. Since we imported Plotly Graph Objects as go in the previous slide, go will be the JSON object. The chart can be plotted by updating the values of the go object keywords. We create the figure by adding a trace which is called Scatter, here.

Let's view the code; fig = go. Scatter( x=x, y=y)). Next, the layout of the figure is updated using the update layout method. Here we are updating the x-axis, y-axis, and chart title. Let us view the code; fig.

update_layout( title= 'Simple Line Plot', xaxis_title= 'Month', yaxis_title= 'Sales'). show method is called to display the created plot. This is the plotted figure. Now we will create the same line chart using Plotly Express. As you can see in the example, the entire line chart can be created using a single command.

Let's view the code; hashtag, entire line chart can be created in a single command; fig=px. line( x=x, y=y, title= 'Simple Line Plot', labels=dict, (x= 'Month', y= 'Sales') fig. Visualization is automatically interactive. Plotly Express makes visualization easy to create and modify. It's time to play with the Plotly library.

We'll use the airline reporting dataset from the data asset exchange to demonstrate how to use Plotly Graph Objects and express to create charts. Here's a quick overview of the airline reporting dataset. The reporting carrier on-time performance dataset contains information on approximately 200 million domestic US flights reported to the United States Bureau of Transportation Statistics. The dataset contains basic information about each flight, such as date, time, departure airport, and arrival airport, and if applicable, the length of time the flight was delayed and information about the reason for the delay. In this video, you learned that Plotly is an interactive open-source plotting library that supports over 40 unique chart types.

Plotly graph objects is the low-level interface to figures, traces, and layout. Plotly Express is a high-level wrapper for Plotly. It uses graph objects internally.

</details>
