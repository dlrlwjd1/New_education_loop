# Introduction to Folium

## 개요
- 강좌: Data Visualization with Python
- 모듈:  Advanced Visualizations and Geospatial Data
- 재생 시간: 3분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-data-visualization/lecture/AOVsG/introduction-to-folium)
- 이 비디오를 시청한 후에는 Folium과 그 기능에 대해 설명하고 Folium의 용도에 대해 설명할 수 있습니다.
- Folium은 Python의 강력한 데이터 시각화 라이브러리로, 주로 사람들이 지리공간 데이터를 시각화할 수 있도록 돕기 위해 만들어졌습니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 Folium과 그 기능에 대해 설명하고 Folium의 용도에 대해 설명할 수 있습니다.
- Folium은 Python의 강력한 데이터 시각화 라이브러리로, 주로 사람들이 지리공간 데이터를 시각화할 수 있도록 돕기 위해 만들어졌습니다.
- Folium을 사용하면 위도 및 경도 값을 사용하여 전 세계 모든 위치의 지도를 만들 수 있습니다.
- 지도를 만들고 마커와 군집을 지도 위에 겹쳐서 흥미롭게 시각화할 수도 있고, 거리 지도, 스태멘 지도 등 다양한 스타일의 지도를 만들 수도 있습니다.
- 이 비디오에서는 Folium이 사람들이 지리공간 데이터를 시각화하는 데 도움이 되는 Python의 데이터 시각화 라이브러리라는 것을 배웠습니다.
- Folium을 사용하면 스트리트 레벨 맵, 스태멘 맵 등과 같은 다양한 스타일의 지도를 만들 수 있습니다.

### 한국어 Transcript

Folium 소개에 오신 것을 환영합니다. 이 비디오를 시청한 후에는 Folium과 그 기능에 대해 설명하고 Folium의 용도에 대해 설명할 수 있습니다. Folium은 Python의 강력한 데이터 시각화 라이브러리로, 주로 사람들이 지리공간 데이터를 시각화할 수 있도록 돕기 위해 만들어졌습니다. Folium을 사용하면 위도 및 경도 값을 사용하여 전 세계 모든 위치의 지도를 만들 수 있습니다. 지도를 만들고 마커와 군집을 지도 위에 겹쳐서 흥미롭게 시각화할 수도 있고, 거리 지도, 스태멘 지도 등 다양한 스타일의 지도를 만들 수도 있습니다.

Folium으로 세계 지도를 만드는 것은 아주 간단합니다. 먼저 Folium을 가져온 다음 map 함수를 호출해야 합니다. Folium에서 만든 맵의 흥미로운 점은 인터랙티브하기 때문에 맵을 렌더링한 후 확대 및 축소할 수 있다는 점입니다. 기본 지도 스타일은 오픈 스트리트 맵으로, 확대하면 특정 지역을 똑바로 볼 수 있고 완전히 축소하면 세계 국가의 국경을 보여줍니다. 이제 캐나다를 중심으로 한 세계 지도를 만들어 보겠습니다.

이를 위해 위치 매개변수를 사용하여 캐나다의 위도 및 경도 값을 전달합니다. Folium을 사용하면 zoom_start 매개변수를 사용하여 초기 줌 레벨을 설정할 수 있습니다. 맵을 렌더링한 후 확대 또는 축소를 통해 줌 레벨을 쉽게 변경할 수 있으므로 이니셜을 사용하세요. 이 매개변수를 사용하여 다양한 값의 초기 줌 레벨을 결정할 수 있습니다. 캐나다 지도의 확대/축소 수준을 4로 설정해 보겠습니다.

그 결과 캐나다를 중심으로 한 세계 지도가 만들어집니다. Folium의 또 다른 특징은 tiles 매개변수를 사용하여 다양한 지도 스타일을 만들 수 있다는 것입니다. 캐나다의 스태멘 토너 맵을 만들어 봅시다. 이 스타일은 구불구불한 강변과 해안 지역을 시각화하고 탐색하는 데 적합합니다. 또 다른 스타일은 스태먼 지형입니다.

스태먼 지형으로 캐나다 지도를 만들어 봅시다. 이 스타일은 언덕 음영과 자연 식물 색상을 시각화하는 데 아주 좋습니다. 이 비디오에서는 Folium이 사람들이 지리공간 데이터를 시각화하는 데 도움이 되는 Python의 데이터 시각화 라이브러리라는 것을 배웠습니다. Folium을 사용하면 스트리트 레벨 맵, 스태멘 맵 등과 같은 다양한 스타일의 지도를 만들 수 있습니다. Folium의 특징은 tiles 매개변수를 사용하여 다양한 지도 스타일을 만들 수 있다는 것입니다.

## 예시
- 이 강의는 개념 설명 중심이며 Transcript에서 독립된 예시를 확인하기 어렵다.

## 요약
- 지도를 만들고 마커와 군집을 지도 위에 겹쳐서 흥미롭게 시각화할 수도 있고, 거리 지도, 스태멘 지도 등 다양한 스타일의 지도를 만들 수도 있습니다.
- 이 비디오에서는 Folium이 사람들이 지리공간 데이터를 시각화하는 데 도움이 되는 Python의 데이터 시각화 라이브러리라는 것을 배웠습니다.
- Folium을 사용하면 스트리트 레벨 맵, 스태멘 맵 등과 같은 다양한 스타일의 지도를 만들 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to an introduction to Folium. After watching this video, you'll be able to: describe Folium and its features, explain what Folium is used for. Folium is a powerful data visualization library in Python that was built primarily to help people visualize geospatial data. With Folium, you can create a map of any location in the world using latitude and longitude values. You can also create a map and superimpose markers and clusters on top of the map for interesting visualizations, you can also create maps of different styles, such as street level maps, stamen maps, and a couple of others, which we will look into in just a moment.

Creating a world map with Folium is straightforward. First, you need to import Folium and then you call the map function. What's interesting about the maps created by Folium is that they are interactive, so you can zoom in and out after the map is rendered, which is a helpful feature. The default map style is open street map, which shows a straight view of an area when you are zoomed in and shows the borders of the world countries when you are zoomed out all the way. Now, let's create a world map centered around Canada.

To do that, we pass in Canada's latitude and longitude values using the location parameter. With Folium, you can set the initial zoom level using the zoom_start parameter. Use initial because you can easily change the zoom level after the map is rendered by zooming in or out, you can play with this parameter to determine the initial zoom level for different values. Let's set the zoom level for our map of Canada to four. The result will be a world map centered around Canada.

Another feature of Folium is that you can create different map styles using the tiles parameter. Let's create a stamen toner map of Canada. This style is great for visualizing and exploring river meanders and coastal zones. Another style is stamen terrain. Let's create a map of Canada in stamen terrain.

This style is excellent for visualizing hill shading and natural vegetation colors. In this video, you learned that Folium is a data visualization library in Python that helps people visualize geospatial data. With Folium, you can create maps of different styles, such as street level maps, stamen maps, and more. A feature of Folium is that you can create different map styles using the tiles parameter.

</details>
