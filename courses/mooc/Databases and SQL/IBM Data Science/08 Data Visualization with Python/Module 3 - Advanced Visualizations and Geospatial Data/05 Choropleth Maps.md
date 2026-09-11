# Choropleth Maps

## 개요
- 강좌: Data Visualization with Python
- 모듈:  Advanced Visualizations and Geospatial Data
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-data-visualization/lecture/CJJzm/choropleth-maps)
- 이 비디오를 시청한 후에는 안무지 지도에 대해 설명하고, 안무표 지도의 용도를 설명할 수 있습니다.
- 코롤플레스 맵은 맵에 표시된 통계 변수의 측정값에 비례하여 영역을 음영 처리하거나 패턴을 적용한 주제별 맵입니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 안무지 지도에 대해 설명하고, 안무표 지도의 용도를 설명할 수 있습니다.
- 코롤플레스 맵은 맵에 표시된 통계 변수의 측정값에 비례하여 영역을 음영 처리하거나 패턴을 적용한 주제별 맵입니다.
- 세계 코롤플레스 지도의 경우 각 국가를 나열하는 GeoJSON 파일과 그 경계와 경계를 정의하는 지리공간 데이터가 필요합니다.
- 이제 데이터가 df_ canada 데이터 프레임에 저장되어 있다는 것을 알았으니, 캐나다로의 이민을 보여주는 세계 안무부 지도를 생성하는 방법을 살펴보겠습니다.
- 이 비디오에서는 말단 지도가 통계 변수 측정값에 비례하여 영역을 음영 처리하거나 패턴화한 주제별 지도라는 것을 배웠습니다.
- 코롤플레스 지도를 만들 때 Folium에는 해당 지역의 지리공간 데이터가 포함된 GeoJSON 파일이 필요합니다.

### 한국어 Transcript

[음악] 코로플레스 맵스에 오신 것을 환영합니다. 이 비디오를 시청한 후에는 안무지 지도에 대해 설명하고, 안무표 지도의 용도를 설명할 수 있습니다. 여러분 대부분은 이런 지도를 보셨을 겁니다. 이런 것을 우리는 안무형 지도라고 부릅니다. 코롤플레스 맵은 맵에 표시된 통계 변수의 측정값에 비례하여 영역을 음영 처리하거나 패턴을 적용한 주제별 맵입니다.

인구 밀도 또는 1인당 소득 등을 예로 들 수 있습니다. 측정값이 높을수록 색상이 더 어두워집니다. 왼쪽의 지도는 신생아 1000명당 영아 사망률을 보여주는 무화과류 세계 지도입니다. 색이 어두울수록 영아 사망률이 높습니다. 지도에 따르면 아프리카 국가는 영아 사망률이 매우 높으며, 일부 국가는 신생아 1000명당 160명 이상이라고 보고하고 있습니다.

마찬가지로 오른쪽 지도는 평방마일당 주별 인구를 보여주는 미국의 안무과류 지도입니다. 다시 말씀드리지만, 색이 어두울수록 인구가 더 많다는 뜻입니다. 지도에 따르면 미국 동부의 주는 서부의 주보다 인구가 더 많은 경향이 있지만 캘리포니아는 예외입니다. Folium은 대화형 지도와 시각화를 만드는 데 사용되는 Python 라이브러리입니다. GeoJSON, Pandas DataFrames 및 NumPy 배열을 비롯한 다양한 소스의 데이터를 사용하여 맵을 생성하는 간단하고 직관적인 방법을 제공합니다.

관심 지역의 코로플레스 맵을 만들려면 folium에는 해당 지역의 지리공간 데이터가 포함된 GeoJSON 파일이 필요합니다. 세계 코롤플레스 지도의 경우 각 국가를 나열하는 GeoJSON 파일과 그 경계와 경계를 정의하는 지리공간 데이터가 필요합니다. 다음은 각 국가에 대해 GeoJSON 파일에 포함되는 내용의 예입니다. 여기의 예는 브루나이 국가에 관한 것입니다. 보시다시피 파일은 이름, ID, 지오메트리, 모양, 테두리와 경계를 정의하는 좌표로 구성되어 있습니다.

이제 캐나다로의 이민을 보여주는 세계 지도를 어떻게 만들 수 있는지 살펴보겠습니다. 지도 코드를 만들기 전에 데이터 세트를 간단히 요약해 보겠습니다. 각 행은 국가를 나타내며 지리적 위치, 개발 도상국 또는 개발 도상국 여부 등 국가에 대한 메타데이터를 포함하고 있다는 점을 기억하세요. 또한 각 행에는 1980년부터 2013년까지 해당 국가에서 캐나다로 유입된 연간 이민자에 대한 수치도 포함되어 있습니다. 데이터 프레임 이름을 df_canada 로 지정해 보겠습니다.

이제 데이터가 df_ canada 데이터 프레임에 저장되어 있다는 것을 알았으니, 캐나다로의 이민을 보여주는 세계 안무부 지도를 생성하는 방법을 살펴보겠습니다. 이제 우리는 Folium으로 세계 지도를 만드는 전문가가 되어야 합니다. 그럼 이제 세계 지도를 만들어 봅시다. 하지만 이번에는 Mapbox 브라이트 타일셋을 사용해 보겠습니다. 그 결과 모든 국가의 이름이 표시된 멋진 세계 지도가 만들어집니다.

이제 이 지도를 코롤플레스 지도로 변환해 보겠습니다. 먼저 JSON 파일을 가리키는 변수를 정의합니다. 그런 다음 세계 지도에 choropleth 함수를 적용합니다. df_canada 데이터 프레임의 국가 총계 열과 국가 이름을 사용하여 GeoJSON 파일에서 각 국가에 대한 지리공간 정보를 조회하도록 지시합니다. 그 결과 전 세계 여러 나라로부터의 이민 강도를 보여주는 캐나다 합선 지도가 생성될 것입니다.

실습 세션에서는 안무술 지도를 더 자세히 살펴보므로 이 모듈의 실습 세션을 반드시 완료하십시오. 이 비디오에서는 말단 지도가 통계 변수 측정값에 비례하여 영역을 음영 처리하거나 패턴화한 주제별 지도라는 것을 배웠습니다. 코롤플레스 지도를 만들 때 Folium에는 해당 지역의 지리공간 데이터가 포함된 GeoJSON 파일이 필요합니다. Mapbox Bright Tileset은 지도에 사용할 경우 모든 국가의 이름을 표시합니다.

## 예시
- 지도 코드를 만들기 전에 데이터 세트를 간단히 요약해 보겠습니다.
- 실습 세션에서는 안무술 지도를 더 자세히 살펴보므로 이 모듈의 실습 세션을 반드시 완료하십시오.

## 요약
- 이제 데이터가 df_ canada 데이터 프레임에 저장되어 있다는 것을 알았으니, 캐나다로의 이민을 보여주는 세계 안무부 지도를 생성하는 방법을 살펴보겠습니다.
- 이 비디오에서는 말단 지도가 통계 변수 측정값에 비례하여 영역을 음영 처리하거나 패턴화한 주제별 지도라는 것을 배웠습니다.
- 코롤플레스 지도를 만들 때 Folium에는 해당 지역의 지리공간 데이터가 포함된 GeoJSON 파일이 필요합니다.

<details>
<summary>영문 Transcript 원문</summary>

[MUSIC] Welcome to Choropleth Maps. After watching this video, you'll be able to: describe choropleth maps, explain what are the uses for choropleth maps. Most of you have seen maps like this. These are what we call choropleth maps. So what is a choropleth map?

A choropleth map is a thematic map in which areas are shaded or patterned in proportion to the measurement of the statistical variable displayed on the map. Such as population density or per capita income. The higher the measurement, the darker the color. So the map to the left is a choropleth world map showing the infant mortality rate per 1000 births. The darker the color, the higher the infant mortality rate.

According to the map, African countries have very high infant mortality rates, with some reporting a rate higher than 160 per 1000 births. Similarly, the map on the right is a choropleth map of the US showing population per square mile by state. Again, the darker the color, the higher the population. According to the map, states in the eastern part of the US tend to be more populous than states in the western part, with California being an exception. Folium is a Python library used for creating interactive maps and visualizations.

It provides a simple and intuitive way to generate maps using data from various sources, including GeoJSON, Pandas DataFrames, and NumPy arrays. To create a choropleth map of a region of interest, folium requires a GeoJSON file that includes geospatial data of the region. For a choropleth map of the world, we would need a GeoJSON file that lists each country and any geospatial data to define its borders and boundaries. Here's an example of what a GeoJSON file would include about each country. The example here pertains to the country Brunei.

As you can see, the file consists of its name, ID, geometry, shape, and coordinates that define its borders and boundaries. So let's see how we can create a choropleth map of the world showing immigration to Canada. Before creating the map's code, let's quickly recap our data set. Recall that each row represents a country and contains metadata about it, such as where it is located geographically and whether it's developing or developed. Each row also contains numerical figures for annual immigration from that country to Canada from 1980 to 2013, and let's name our data frame df_canada.

So now that we know our data is stored in the data frame df_ canada, let's see how we can generate a choropleth map of the world showing immigration to Canada. We should be experts now in creating world maps with Folium. So let's go ahead and create a world map. But this time, let's use the Mapbox Bright Tileset. The result is a nice world map displaying the name of every country.

Now, let's convert this map into a choropleth map. We first define a variable that points to our JSON file. Then we apply the choropleth function to our world map. We tell it to use the country total columns in our df_canada data frame and the country names to look up the geospatial information about each country in the GeoJSON file. The result will be a choropleth map of Canada showing the intensity of immigration from different countries worldwide.

We explore choropleth maps in more detail in the lab session, so be sure to complete this module's lab session. In this video, you learned that a choropleth map is a thematic map in which areas are shaded or patterned in proportion to the measurement of the statistical variable. When creating a choropleth map, Folium requires a GeoJSON file that includes geospatial data of the region. The Mapbox Bright Tileset displays the name of every country when used on a map.

</details>
