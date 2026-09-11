# Maps with Markers

## 개요
- 강좌: Data Visualization with Python
- 모듈:  Advanced Visualizations and Geospatial Data
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-data-visualization/lecture/G4afO/maps-with-markers)
- 이 비디오를 시청하고 나면 Folium이 지도에 마커를 추가하는 방법과 마커를 생성하는 방법을 설명할 수 있습니다.
- Folium을 사용하면 지도에 마커를 쉽게 추가할 수 있습니다.

## 내용
### 핵심 내용
- 이 비디오를 시청하고 나면 Folium이 지도에 마커를 추가하는 방법과 마커를 생성하는 방법을 설명할 수 있습니다.
- Folium을 사용하면 지도에 마커를 쉽게 추가할 수 있습니다.
- 대형 지도를 사용할 때는 지도에 여러 개의 마커를 표시하는 것이 필수적입니다.
- 맵에 여러 마커를 표시하는 코드를 만들 때는 MarkerCluster 객체를 호출하고 함수에 밑줄을 추가한 다음 맵을 여기에 전달할 수 있습니다.
- 이 비디오에서는 Folium을 사용하여 지도에 마커를 쉽게 추가할 수 있다는 것을 배웠습니다.
- 피처 그룹을 사용하여 마커를 생성할 수 있습니다.

### 한국어 Transcript

마커가 있는 지도에 오신 것을 환영합니다. 이 비디오를 시청하고 나면 Folium이 지도에 마커를 추가하는 방법과 마커를 생성하는 방법을 설명할 수 있습니다. Folium을 사용하면 지도에 마커를 쉽게 추가할 수 있습니다. 먼저 캐나다를 중심으로 한 세계 지도를 렌더링해 보겠습니다. 먼저 Folium을 가져온 다음 맵 오브젝트를 생성합니다.

위치 매개변수는 맵 중심점의 위도 및 경도 좌표를 지정한다는 점을 기억하세요. zoom_start는 맵의 초기 확대/축소 수준을 설정합니다. 이 경우 zoom_start = 4이면 캐나다를 축소하여 볼 수 있습니다. canada_map을 호출하기만 하면 표시할 수 있습니다. 마커는 상호작용을 향상시키고 맵에 컨텍스트를 추가하는 데 중요한 역할을 합니다.

특정 위치나 관심 지점을 나타내며 클릭하면 추가 정보를 제공합니다. 마커는 중요한 요소를 강조하여 지도를 안내하는 표지판과 같습니다. 온타리오는 캐나다 인구의 약 40% 가 거주하는 캐나다 주입니다. 캐나다에서 가장 인구가 많은 주로 간주됩니다. 캐나다에서 가장 큰 주 중 하나인 온타리오 주의 표시를 지도에 추가해 보겠습니다.

marker 함수를 사용하여 위치 매개변수를 온타리오의 대략적인 좌표를 나타내는 51.2538, -85.3232로 지정합니다. 또한 마커를 클릭하면 레이블이 표시되도록 팝업 매개변수를 Ontario로 설정합니다. marker 객체에서 add_to (canada_map) 메서드를 호출하여 온타리오 마커를 canada_map에 추가합니다. 이렇게 하면 마커가 맵 레이어의 일부로 포함되며 canada_map을 렌더링하거나 저장할 때 마커가 표시됩니다. 또는 FeatureGroup을 사용하여 마커를 만들 수도 있습니다 .

이제 Ontario라는 기능 그룹을 만들어 보겠습니다. 이제 피처 그룹을 만들면 그 피처 그룹은 비어 있습니다. 이제 다음 단계는 자식이라고 하는 것을 만들어 피처 그룹에 추가하는 것입니다. 온타리오 주 중심부에 있는 빨간색 원형 표시 형태의 아이를 만들어 봅시다. 위도와 경도 값을 전달하여 어린이의 위치를 지정합니다.

피처 그룹에 어린이를 모두 추가했으면 피처 그룹을 맵에 추가합니다. 그 결과 지도 위에 빨간색 원형 표시가 겹쳐져 온타리오 주 중앙에 추가됩니다. 이제 이 마커에 라벨을 붙여서 그것이 무엇을 나타내는지 다른 사람들에게 알릴 수 있다면 도움이 될 것입니다. 이를 위해 마커 함수와 팝업 매개변수를 사용하여 이 마커에 추가하려는 텍스트를 전달합니다. 그 결과 마커를 클릭하면 온타리오가 표시됩니다.

랩 세션에서는 실제 사례를 살펴보고 샌프란시스코의 범죄율을 살펴보겠습니다. 샌프란시스코 지도를 만들고 수천 개의 마커를 지도 위에 겹쳐서 표시해 보겠습니다. 또한 마커 클러스터를 생성하여 맵이 덜 혼잡해 보이게 하는 방법도 살펴보겠습니다. 이 모듈의 실습 세션은 흥미롭습니다. 대형 지도를 사용할 때는 지도에 여러 개의 마커를 표시하는 것이 필수적입니다.

맵에 여러 마커를 표시하고 싶다고 가정해 보겠습니다. 모든 위치의 목록을 만든 다음 이 목록을 마커 함수에 전달하고 루프를 통해 작동하도록 밑줄을 추가하면 여러 마커가 있는 맵을 표시할 준비가 됩니다. 맵에 여러 마커를 표시하는 코드를 만들 때는 MarkerCluster 객체를 호출하고 함수에 밑줄을 추가한 다음 맵을 여기에 전달할 수 있습니다. 그런 다음 루프를 통해 이 목록을 마커 함수에 전달하십시오. 하지만 이번에는 map 대신 marker_cluster 를 사용하여 함수에 밑줄을 추가하면 여러 개의 마커가 있는 맵이 표시됩니다.

marker_cluster 내의 마커는 지도가 표시될 때 근접성에 따라 지능적으로 그룹화됩니다. 이 클러스터링 기능은 주로 많은 마커가 가까이 있을 때 과밀을 방지하고 명확하게 표시되도록 하여 시각적 표현을 향상시킵니다. 이 비디오에서는 Folium을 사용하여 지도에 마커를 쉽게 추가할 수 있다는 것을 배웠습니다. 위치 매개변수는 지도 중심점의 위도 및 경도 좌표를 지정합니다. 마커는 상호 작용을 향상시키고 맵에 컨텍스트를 추가하는 데 중요한 역할을 합니다.

marker 함수는 위치 매개변수를 지정합니다. 팝업 매개 변수는 클릭 시 레이블을 제공합니다. 피처 그룹을 사용하여 마커를 생성할 수 있습니다.

## 예시
- 랩 세션에서는 실제 사례를 살펴보고 샌프란시스코의 범죄율을 살펴보겠습니다.
- 이 모듈의 실습 세션은 흥미롭습니다.
- 맵에 여러 마커를 표시하는 코드를 만들 때는 MarkerCluster 객체를 호출하고 함수에 밑줄을 추가한 다음 맵을 여기에 전달할 수 있습니다.

## 요약
- 맵에 여러 마커를 표시하는 코드를 만들 때는 MarkerCluster 객체를 호출하고 함수에 밑줄을 추가한 다음 맵을 여기에 전달할 수 있습니다.
- 이 비디오에서는 Folium을 사용하여 지도에 마커를 쉽게 추가할 수 있다는 것을 배웠습니다.
- 피처 그룹을 사용하여 마커를 생성할 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Maps with Markers. After watching this video, you'll be able to explain how Folium can add markers to a map, and describe how to generate markers. With Folium you can easily add markers on the map. Let's first render a world map centered around Canada. First, import Folium, then create the map object.

Remember that the location parameter specifies the latitude and longitude coordinates of the center point of the map. The zoom_start sets the initial zoom level of the map. In this case, zoom_start = 4 provides a zoomed out view of Canada. You can display it by simply calling canada_map. Markers play a vital role in enhancing interactivity and adding context to maps.

They represent specific locations or points of interest, providing additional information when clicked. Markers are like signposts that guide us through the map, highlighting important elements. Ontario is a Canadian province that contains about 40% of the Canadian population. It is considered Canada's most populous province. Let's add a marker for Ontario province, one of the largest provinces in Canada to our map.

Marker function, we specify the location parameter as 51.2538, -85.3232, representing the approximate coordinates for Ontario. Additionally, we set the pop-up parameter as Ontario to provide a label when the marker is clicked. The add_to (canada_map) method is called on the folium. Marker object to add the marker for Ontario to the canada_map. This ensures that the marker is included as part of the map’s layers and will be displayed when the canada_map is rendered or saved.

Alternatively, we can create the marker using FeatureGroup. Let's go ahead and create a feature group named Ontario. Now, when a feature group is created, it is empty, so what's next is to start creating what is called children and adding them to the feature group. Let's create a child in the form of a red circular mark located at the center of the Ontario province. We specify the location of the child by passing in its latitude and longitude values.

Once we're done adding children to the feature group, we add the feature group to the map. The result is a red circular mark superimposed on top of the map and added to the center of the province of Ontario. Now, it would be helpful if we could label this marker in order to let other people know what it represents. To do that, we use the marker function and the pop-up parameter to pass in the text we want to add to this marker. The result is our marker displays Ontario when clicked on.

In the lab session, we will view a real-world example and explore the crime rate in San Francisco. We’ll create a map of San Francisco and superimposed thousands of these markers on top of the map. Also, how you can generate marker clusters to make your map look less congested. This module's lab session is interesting, so ensure you complete it. Displaying multiple markers on a map is essential when using larger maps.

Suppose you want to show multiple markers on the map. How can you do that? Create a list of all the locations, then pass this list to the marker function, adding an underscore to function through a loop and your map with multiple markers will be ready for display. When creating code to display multiple markers on a map, you can call the MarkerCluster object add an underscore to the function and pass your map here. It's the same as creating a list of locations.

Then pass this list to the marker function through the loop. But this time, instead of map, use marker_cluster to add the underscore to functions and your map with multiple markers will be displayed. The markers within the marker_cluster will be intelligently grouped based on their proximity when the map is displayed. This clustering feature enhances the visual presentation by preventing overcrowding and ensuring a clear representation, primarily when numerous markers are close. In this video, you learned that with Folium, you can easily add markers on maps.

The location parameter specifies the latitude and longitude coordinates of the center point of the map. Markers play a vital role in enhancing interactivity and adding context to maps. Marker function specifies location parameters. The pop-up parameter provides a label upon being clicked. Markers can be created using feature group.

</details>
