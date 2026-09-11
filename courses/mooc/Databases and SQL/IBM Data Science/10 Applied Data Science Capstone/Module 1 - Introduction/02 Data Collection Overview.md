# Data Collection Overview

## 개요
- 강좌: Applied Data Science Capstone
- 모듈: Introduction
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/applied-data-science-capstone/lecture/QO4Xa/data-collection-overview)
- 이 동영상에서는 API를 사용한 데이터 수집을 검토합니다.
- 이 캡스톤 과제에서는 API, 특히 SpaceX REST API에서 수집한 SpaceX 발사 데이터를 사용할 것입니다.

## 내용
### 핵심 내용
- 이 동영상에서는 API를 사용한 데이터 수집을 검토합니다.
- 이 캡스톤 과제에서는 API, 특히 SpaceX REST API에서 수집한 SpaceX 발사 데이터를 사용할 것입니다.
- 요청 라이브러리를 사용하여 get 요청을 수행하여 시작 데이터를 가져오고, API에서 데이터를 가져오는 데 사용할 것입니다.
- 이 함수를 사용하면 구조화된 json 데이터를 플랫 테이블로 “정규화”할 수 있습니다.
- 이 원시 데이터를 정리된 데이터셋으로 변환하여 API를 사용한 데이터 랭글링, 데이터 샘플링, Null 처리 등 우리가 해결하려는 상황에 대한 의미 있는 데이터를 제공하고자 합니다.
- 즉, 각 ID 번호에 대한 특정 데이터를 수집하려면 다른 엔드포인트를 대상으로 하는 API를 다시 사용해야 합니다.

### 한국어 Transcript

이 동영상에서는 API를 사용한 데이터 수집을 검토합니다. 이 캡스톤 과제에서는 API, 특히 SpaceX REST API에서 수집한 SpaceX 발사 데이터를 사용할 것입니다. 이 API는 사용된 로켓, 전달된 페이로드, 발사 사양, 착륙 사양 및 착륙 결과에 대한 정보를 포함하여 발사에 대한 데이터를 제공합니다. 우리의 목표는 이 데이터를 사용하여 SpaceX가 로켓 착륙을 시도할지 여부를 예측하는 것입니다. 스페이스X REST API 엔드포인트 또는 URL은 api.

엔드포인트는 서로 다릅니다 (예: /capsules 및 /cores). com/v4/launches/past를 사용하여 작업할 예정입니다. API가 어떻게 작동하는지 살펴보겠습니다. 이 URL을 사용하여 API의 특정 엔드포인트를 타겟팅하여 이전 출시 데이터를 가져올 것입니다. 요청 라이브러리를 사용하여 get 요청을 수행하여 시작 데이터를 가져오고, API에서 데이터를 가져오는 데 사용할 것입니다.

json () 메서드를 호출하여 확인할 수 있습니다. 응답은 JSON 형식, 특히 JSON 객체 목록입니다. API를 사용하고 있기 때문에 실험실에서 응답을 받으면 JSON 형태라는 것을 알 수 있습니다. 구체적으로 말하자면, 각각 출시를 나타내는 JSON 객체 목록이 있습니다. 이 JSON을 데이터 프레임으로 변환하려면 json_normalize 함수를 사용할 수 있습니다.

이 함수를 사용하면 구조화된 json 데이터를 플랫 테이블로 “정규화”할 수 있습니다. 표 형식의 JSON은 다음과 같습니다. Falcon 9 Launch 데이터를 얻는 데 널리 사용되는 또 다른 데이터 소스는 웹 스크래핑 관련 Wiki 페이지입니다. 이 강의에서는 Python BeautifulSoup 패키지를 사용하여 귀중한 Falcon 9 출시 기록이 포함된 일부 HTML 테이블을 웹 스크레이핑합니다. 그런 다음 해당 테이블의 데이터를 파싱하고 추가 시각화 및 분석을 위해 Pandas 데이터 프레임으로 변환해야 합니다.

이 원시 데이터를 정리된 데이터셋으로 변환하여 API를 사용한 데이터 랭글링, 데이터 샘플링, Null 처리 등 우리가 해결하려는 상황에 대한 의미 있는 데이터를 제공하고자 합니다. 로켓과 같은 일부 컬럼에는 실제 데이터가 아니라 식별 번호가 있다는 것을 알 수 있습니다. 즉, 각 ID 번호에 대한 특정 데이터를 수집하려면 다른 엔드포인트를 대상으로 하는 API를 다시 사용해야 합니다. 이러한 함수는 이미 사용자를 위해 만들어졌으며 부스터, 런치패드, 페이로드, 코어 등을 사용할 것입니다. 데이터는 목록에 저장되며 데이터세트를 만드는 데 사용됩니다.

또 다른 문제는 우리가 가지고 있는 발사 데이터에는 Falcon 1 부스터에 대한 데이터가 포함되어 있지만 우리는 Falcon 9만 원한다는 것입니다. 이 실습에서는 데이터를 필터링/샘플링하여 Falcon 1 발사를 제거하는 방법을 알아내야 합니다. 마지막으로, 수집된 모든 데이터가 완벽하지는 않습니다. 결국 NULL 값이 포함된 데이터가 생성될 수 있습니다. 데이터세트를 분석에 유용하게 만들려면 때때로 이러한 null 값을 처리해야 합니다.

이 경우에는 페이로드매스 내의 NULL 값을 처리하겠습니다. 이 실습에서는 PayloadMass 데이터의 평균을 계산한 다음 PayloadMass의 null 값을 평균으로 바꾸는 방법을 찾아야 합니다. 랜딩패드를 사용하지 않을 때 표시되는 NULL 값은 LandingPad 열에 NULL 값을 그대로 두겠습니다. 이 문제는 나중에 하나의 핫 인코딩을 사용하여 처리하겠습니다.

## 예시
- 이 실습에서는 데이터를 필터링/샘플링하여 Falcon 1 발사를 제거하는 방법을 알아내야 합니다.
- 이 실습에서는 PayloadMass 데이터의 평균을 계산한 다음 PayloadMass의 null 값을 평균으로 바꾸는 방법을 찾아야 합니다.

## 요약
- 이 함수를 사용하면 구조화된 json 데이터를 플랫 테이블로 “정규화”할 수 있습니다.
- 이 원시 데이터를 정리된 데이터셋으로 변환하여 API를 사용한 데이터 랭글링, 데이터 샘플링, Null 처리 등 우리가 해결하려는 상황에 대한 의미 있는 데이터를 제공하고자 합니다.
- 즉, 각 ID 번호에 대한 특정 데이터를 수집하려면 다른 엔드포인트를 대상으로 하는 API를 다시 사용해야 합니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we will review Collecting the Data with an API. In this capstone assignment, we will be working with SpaceX launch data that is gathered from an API, specifically the SpaceX REST API. This API will give us data about launches, including information about the rocket used, payload delivered, launch specifications, landing specifications, and landing outcome. Our goal is to use this data to predict whether SpaceX will attempt to land a rocket or not. The SpaceX REST API endpoints, or URL, starts with api.

We have the different end points, for example: /capsules and /cores We will be working with the endpoint api. com/v4/launches/past. Let’s see how the API works. We will use this URL to target a specific endpoint of the API to get past launch data. We will perform a get request using the requests library to obtain the launch data, which we will use to get the data from the API.

This result can be viewed by calling the . Our response will be in the form of a JSON, specifically a list of JSON objects. Since we are using an API, you will notice in the lab that when we get a response it is in the form of a JSON. Specifically, we have a list of JSON objects which each represent a launch. To convert this JSON to a dataframe, we can use the json_normalize function.

This function will allow us to “normalize” the structured json data into a flat table. This is what your JSON will look like in a table form. Another popular data source for obtaining Falcon 9 Launch data is web scraping related Wiki pages. In this lesson, you will be using the Python BeautifulSoup package to web scrape some HTML tables that contain valuable Falcon 9 launch records. Then you need to parse the data from those tables and convert them into a Pandas data frame for further visualization and analysis.

We want to transform this raw data into a clean dataset which provides meaningful data on the situation we are trying to address: Wrangling Data using an API, Sampling Data, and Dealing with Nulls. You will notice, in some of the columns, like rocket, we have an identification number, not actual data. This means we will need to use the API again targeting another endpoint to gather specific data for each ID number. These functions are already created for you, and will use the following: Booster, Launchpad, payload, and core. The data will be stored in lists and will be used to create our dataset.

Another issue we have is that the launch data we have includes data for the Falcon 1 booster whereas we only want falcon 9. In this lab, you will need to figure out how to filter/sample the data to remove Falcon 1 launches. Finally, not all gathered data is perfect. We may end up with data that contains NULL values. We must sometimes deal with these null values in order to make the dataset viable for analysis.

In this case, we will deal with the NULL values inside the PayloadMass. In this lab, you must figure out a way to calculate the mean of the PayloadMass data and then replace the null values in PayloadMass with the mean. We will leave the column LandingPad with NULL values, as it is represented when a landing pad is not used. This will be dealt with using one hot encoding later on.

</details>
