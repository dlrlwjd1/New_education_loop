# Interactive Visual Analytics and Dashboards

## 개요
- 강좌: Applied Data Science Capstone
- 모듈: Interactive Visual Analytics and Dashboard
- 재생 시간: 2분
- [MOOC 원본 강의](https://www.mooc.org/learn/applied-data-science-capstone/lecture/4VaNA/interactive-visual-analytics-and-dashboards)
- 이를 사용하여 이해관계자를 위한 대시보드를 구축하게 됩니다.
- 대화형 시각적 분석을 통해 사용자는 대화형 및 실시간 방식으로 데이터를 탐색하고 조작할 수 있습니다.

## 내용
### 핵심 내용
- 이를 사용하여 이해관계자를 위한 대시보드를 구축하게 됩니다.
- 대화형 시각적 분석을 통해 사용자는 대화형 및 실시간 방식으로 데이터를 탐색하고 조작할 수 있습니다.
- 대화형 시각적 분석을 통해 사용자는 시각적 패턴을 더 빠르고 효과적으로 찾을 수 있습니다.
- 결과를 정적 그래프, 대화형 데이터 시각화 또는 대시보드로 표시하는 대신 대화형 데이터 시각화 또는 대시보드를 사용하면 항상 더 매력적인 스토리를 전달할 수 있습니다.
- 이 모듈에서는 Folium과 Plotly Dash를 사용하여 대화형 맵 및 대시보드를 만들어 대화형 시각적 분석을 수행합니다.
- 이 대시보드 애플리케이션에는 원형 차트 및 스캐터 포인트 차트와 상호 작용하는 드롭다운 목록 및 범위 슬라이더와 같은 입력 구성 요소가 포함되어 있습니다.

### 한국어 Transcript

대화형 시각적 분석 및 대시보드 모듈에 오신 것을 환영합니다. 이를 사용하여 이해관계자를 위한 대시보드를 구축하게 됩니다. 대화형 시각적 분석을 통해 사용자는 대화형 및 실시간 방식으로 데이터를 탐색하고 조작할 수 있습니다. 확대 및 축소, 팬, 필터, 검색 및 연결을 포함한 일반적인 상호 작용. 대화형 시각적 분석을 통해 사용자는 시각적 패턴을 더 빠르고 효과적으로 찾을 수 있습니다.

결과를 정적 그래프, 대화형 데이터 시각화 또는 대시보드로 표시하는 대신 대화형 데이터 시각화 또는 대시보드를 사용하면 항상 더 매력적인 스토리를 전달할 수 있습니다. 이 모듈에서는 Folium과 Plotly Dash를 사용하여 대화형 맵 및 대시보드를 만들어 대화형 시각적 분석을 수행합니다. 이 모듈의 첫 번째 부분에서는 Folium과의 발사 지점 지리적 및 근접성을 분석하는 데 중점을 둘 것입니다. 먼저 대화형 지도에 발사 지점 위치와 가까운 위치를 표시할 것입니다. 그런 다음 해당 마커가 있는 지도를 탐색하고 마커에서 패턴을 찾아낼 수 있습니다.

마지막으로 최적의 발사 지점을 선택하는 방법을 설명해 드릴 수 있을 거예요. 다음으로 Python Plotly Dash 패키지를 사용하여 대시보드 애플리케이션을 구축해 보겠습니다. 이 대시보드 애플리케이션에는 원형 차트 및 스캐터 포인트 차트와 상호 작용하는 드롭다운 목록 및 범위 슬라이더와 같은 입력 구성 요소가 포함되어 있습니다. 교육용 실습에서 이 대시보드 애플리케이션을 구축하도록 안내해 드립니다. 대시보드를 만든 후에는 정적 그래프를 사용하는 것보다 더 쉽게 SpaceX 데이터 세트에서 더 많은 통찰력을 찾을 수 있습니다.

## 예시
- 교육용 실습에서 이 대시보드 애플리케이션을 구축하도록 안내해 드립니다.

## 요약
- 결과를 정적 그래프, 대화형 데이터 시각화 또는 대시보드로 표시하는 대신 대화형 데이터 시각화 또는 대시보드를 사용하면 항상 더 매력적인 스토리를 전달할 수 있습니다.
- 이 모듈에서는 Folium과 Plotly Dash를 사용하여 대화형 맵 및 대시보드를 만들어 대화형 시각적 분석을 수행합니다.
- 이 대시보드 애플리케이션에는 원형 차트 및 스캐터 포인트 차트와 상호 작용하는 드롭다운 목록 및 범위 슬라이더와 같은 입력 구성 요소가 포함되어 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to the Interactive Visual Analytics and Dashboard module. You will use this to build a Dashboard for stakeholders. Interactive visual analytics enables users to explore and manipulate data in an interactive and real-time way. Common interactions including zoom-in and zoom-out, pan, filter, search, and link. With interactive visual analytics, users could find visual patterns faster and more effectively.

Instead of presenting your findings in static graphs, interactive data visualization, or dashboarding, can always tell a more appealing story. In this module, you will be using Folium and Plotly Dash to build an interactive map and dashboard to perform interactive visual analytics. The first part of this module will be focused on analyzing launch site geo and proximities with Folium. We will first mark the launch site locations and their close proximities on an interactive map. Then, we can explore the map with those markers and try to discover any patterns from them.

Finally, we should be able to explain how to choose an optimal launch site. Next, you will be building a dashboard application with the Python Plotly Dash package. This dashboard application contains input components such as a dropdown list and a range slider to interact with a pie chart and a scatter point chart. You will be guided to build this dashboard application in an instructional lab. After the dashboard is built, you can use it to find more insights from the SpaceX dataset more easily than with static graphs.

</details>
