# Dashboarding Overview

## 개요
- 강좌: Data Visualization with Python
- 모듈:  Creating Dashboards with Plotly and Dash
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-data-visualization/lecture/du0SF/dashboarding-overview)
- 이 비디오를 시청하고 나면 대화형 데이터 응용 프로그램을 사용하여 비즈니스 성과를 개선할 때의 이점을 살펴보고 Python에서 사용할 수 있는 다양한 웹 기반 대시보드 도구를 식별할 수 있습니다.
- 대시보드에서 실시간으로 시각화되므로 비즈니스가 움직이는 부분을 쉽게 이해할 수 있습니다.

## 내용
### 핵심 내용
- 이 비디오를 시청하고 나면 대화형 데이터 응용 프로그램을 사용하여 비즈니스 성과를 개선할 때의 이점을 살펴보고 Python에서 사용할 수 있는 다양한 웹 기반 대시보드 도구를 식별할 수 있습니다.
- 대시보드에서 실시간으로 시각화되므로 비즈니스가 움직이는 부분을 쉽게 이해할 수 있습니다.
- 패널은 Bokeh, Matplotlib, HoloView 및 기타 여러 Python 플로팅 라이브러리의 시각화 기능과 함께 작동하므로 개별적으로 또는 이를 제어하는 대화형 위젯과 결합하여 즉시 볼 수 있습니다.
- Streamlit은 Python 스크립팅 수용, 위젯을 변수로 취급, 데이터 및 계산 재사용이라는 세 가지 기본 원칙에 따라 데이터 스크립트를 공유 가능한 웹 앱으로 쉽게 전환할 수 있습니다.
- 이 비디오에서는 대시보드가 비즈니스의 동적 측면을 단순화한다는 것을 배웠습니다.
- 대시보드 도구에는 여러 유형이 있습니다.

### 한국어 Transcript

대시보드 개요에 오신 것을 환영합니다. 이 비디오를 시청하고 나면 대화형 데이터 응용 프로그램을 사용하여 비즈니스 성과를 개선할 때의 이점을 살펴보고 Python에서 사용할 수 있는 다양한 웹 기반 대시보드 도구를 식별할 수 있습니다. 대시보드에서 실시간으로 시각화되므로 비즈니스가 움직이는 부분을 쉽게 이해할 수 있습니다. 보고서 유형과 데이터를 기반으로 적절한 그래프와 차트를 하나의 중앙 위치에서 생성할 수 있습니다. 이를 통해 이해 관계자들은 무엇이 옳고 그른지, 어떤 개선이 필요한지 쉽게 이해할 수 있습니다.

또한 한 곳에서 큰 그림을 파악하면 기업이 정보에 입각한 결정을 내려 성과를 개선할 수 있습니다. 일반적으로 최고의 대시보드는 중요한 비즈니스 질문에 대한 답을 제공합니다. 미국 국내선 항공편의 실적을 모니터링하고 보고하는 업무를 배정받았다고 가정해 보겠습니다. 다음은 연간 검토 보고서 항목입니다. 항공편 수, 2019년 항공편 수, 월별 분할, 캘리포니아 주에서 다른 주로 이동하는 여행자 수를 거리 그룹별로 나눈 2019년 상위 10개 항공사입니다.

보고서를 표시하는 두 가지 방법을 살펴보겠습니다. 유형 1, 보고서는 참조용으로 문서화된 표에서 추론하여 표를 통해 제시됩니다. 유형 2, 여기서는 동일한 보고서를 대시보드 형식으로 표시합니다. 보시다시피 각 차트를 마우스로 가리키면 데이터 포인트에 대한 세부 정보가 제공됩니다. 선버스트 차트 하단에서 다양한 숫자를 클릭하고 레벨을 자세히 살펴보면 각 세그먼트에 대한 자세한 정보를 얻을 수 있습니다.

결과 표현의 차이를 관찰할 수 있습니까? 정적 데이터가 아닌 실시간 데이터에 대한 보고서를 가져와야 한다면 어떨까요? 또한 표와 문서를 사용하여 결과를 제시하는 것은 시간이 많이 걸리고 시각적으로도 매력적이지 않으며 이해하기도 어렵습니다. 데이터 사이언티스트는 이해 관계자가 쉽게 이해할 수 있는 방식으로 연구 결과에 대한 스토리를 만들고 전달할 수 있어야 합니다. 이를 염두에 두고 대시보드를 사용하는 것이 가장 좋은 방법입니다.

Python에서 사용할 수 있는 웹 기반 대시보드 도구 옵션을 살펴보겠습니다. Dash는 웹 분석 애플리케이션을 구축하기 위한 Python 프레임워크입니다. Dash는 고도로 맞춤화된 사용자 인터페이스를 갖춘 데이터 시각화 앱을 구축하는 데 매우 적합합니다. 패널은 Bokeh, Matplotlib, HoloView 및 기타 여러 Python 플로팅 라이브러리의 시각화 기능과 함께 작동하므로 개별적으로 또는 이를 제어하는 대화형 위젯과 결합하여 즉시 볼 수 있습니다. 패널은 Jupyter Notebooks에서도 마찬가지로 잘 작동하여 빠른 데이터 탐색 도구를 만들거나 대시보드에 독립적으로 배포되는 앱으로도 잘 작동하며 필요에 따라 이러한 컨텍스트 사이를 쉽게 전환할 수 있습니다.

Voila는 Jupyter 노트북을 독립형 웹 애플리케이션으로 탈바꿈시킵니다. Jupyter-Flex와 같은 별도의 레이아웃 도구나 voila-vuetify와 같은 템플릿과 호환됩니다. Streamlit은 Python 스크립팅 수용, 위젯을 변수로 취급, 데이터 및 계산 재사용이라는 세 가지 기본 원칙에 따라 데이터 스크립트를 공유 가능한 웹 앱으로 쉽게 전환할 수 있습니다. 대시보드에 사용할 수 있는 다른 도구도 있습니다. Bokeh는 플로팅 라이브러리, 위젯, 앱 라이브러리입니다.

플롯과 대시보드 모두의 서버 역할을 합니다. 웹 기반 대시보드 도구 중 하나인 패널은 Bokeh를 기반으로 구축되었습니다. Ipywidgets는 다양한 Jupyter 호환 위젯과 많은 Python 라이브러리에서 지원하는 인터페이스를 제공합니다. 하지만 대시보드로 공유하려면 voila와 같은 별도의 배포 가능한 서버가 필요합니다 . Matplotlib는 Python으로 정적, 애니메이션 및 대화형 시각화를 만들기 위한 포괄적인 라이브러리입니다.

Bowtie를 사용하면 사용자가 순수 Python으로 대시보드를 만들 수 있습니다. Flask는 Python 기반 웹 서버로 , Python 플롯이 있는 웹 사이트를 포함하여 Flask 대시보드로 작동하는 웹 사이트를 포함하여 임의의 웹 사이트를 구축합니다. 이 비디오에서는 대시보드가 비즈니스의 동적 측면을 단순화한다는 것을 배웠습니다. 다양한 유형의 대시보드를 사용하여 데이터를 표시할 수 있습니다. 대시보드 도구에는 여러 유형이 있습니다.

## 예시
- 이 강의는 개념 설명 중심이며 Transcript에서 독립된 예시를 확인하기 어렵다.

## 요약
- Streamlit은 Python 스크립팅 수용, 위젯을 변수로 취급, 데이터 및 계산 재사용이라는 세 가지 기본 원칙에 따라 데이터 스크립트를 공유 가능한 웹 앱으로 쉽게 전환할 수 있습니다.
- 이 비디오에서는 대시보드가 비즈니스의 동적 측면을 단순화한다는 것을 배웠습니다.
- 대시보드 도구에는 여러 유형이 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Dashboarding Overview. After watching this video, you'll be able to explore the benefits of using interactive data applications to improve business performance, and identify different web-based dashboarding tools available in Python. With real-time visuals on the dashboard, understanding business moving parts becomes easy. Based on the report type and data, suitable graphs and charts can be created in one central location. This provides an easy way for stakeholders to understand what is going right or wrong and what improvements are necessary.

Also, getting the big picture in one place can help businesses make informed decisions which can improve performance. In general, the best dashboards answer critical business questions. Let's say you're assigned a task to monitor and report the performance of domestic US flights. Following are the yearly review report items: top 10 airline carriers in the year 2019 in terms of the number of flights, number of flights in 2019, split by month, number of travelers from California state to other states split by distance group. Let's look at two ways of presenting the report.

Type 1, the report is presented through tables with inference from tables documented for reference. Type 2, here, we are presenting the same report in the dashboard format. As you can see, hovering over each chart will provide details about the data points. At the bottom in the sunburst chart, you can click on different numbers, drill down into levels, and get detailed information about each segment. Can you observe the difference in the presentation of the findings?

What if we need to get the report on real-time data, not static data? Also presenting the result using tables and documents is time-consuming, less visually appealing, and hard to comprehend. A data scientist should have the ability to create and deliver a story around the finding in a way stakeholders can easily understand. With that in mind, dashboards are the way to go. Let's take a look at web-based dashboarding tool options available in Python.

Dash is a Python framework for building web analytic applications. It runs on top of flask plotly. Dash is well suited for building data visualization apps with highly customized user interfaces. Panel works with visualizations from Bokeh, Matplotlib, HoloViews, and many other Python plotting libraries, making them instantly viewable, either individually or when combined with interactive widgets that control them. Panel works equally well in Jupyter Notebooks for creating quick data exploration tools or as a standalone deployed app in dashboards and allows you to easily switch between those contexts as needed.

Voila turns Jupyter notebooks into standalone web applications. It's compatible with separate layout tools like Jupyter-flex or templates like voila-vuetify. Streamlit can easily turn data scripts into shareable web apps with three main principles: embrace Python scripting, treat widgets as variables, and reuse data and computation. There are other tools that can be used for dashboarding. Bokeh is a plotting library, widget, and app library.

It acts as a server for both plots and dashboards. Panel, which is one of the web-based dashboarding tools, is built on Bokeh. Ipywidgets provides a wide array of Jupyter compatible widgets and an interface supported by many Python libraries. But sharing as a dashboard requires a separate deployable server like voila. Matplotlib is a comprehensive library for creating static, animated, and interactive visualizations in Python.

Bowtie allows users to build dashboards in pure Python. Flask is a Python-backed web server that builds arbitrary websites, including those with Python plots that then function as Flask dashboards. In this video, you learned that dashboard simplifies the dynamic aspect of the business. Data can be presented by using different types of dashboards. There are different types of dashboarding tools.

</details>
