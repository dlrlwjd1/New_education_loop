# Data Wrangling Overview

## 개요
- 강좌: Applied Data Science Capstone
- 모듈: Introduction
- 재생 시간: 2분
- [MOOC 원본 강의](https://www.mooc.org/learn/applied-data-science-capstone/lecture/C03hj/data-wrangling-overview)
- 이 비디오에서는 데이터 랭글링을 검토해 보겠습니다.
- 항공편 번호, 날짜, 부스터 버전, 페이로드 질량 궤도, 발사 지점, 결과: 이것은 1단계 비행의 상태입니다.

## 내용
### 핵심 내용
- 이 비디오에서는 데이터 랭글링을 검토해 보겠습니다.
- 항공편 번호, 날짜, 부스터 버전, 페이로드 질량 궤도, 발사 지점, 결과: 이것은 1단계 비행의 상태입니다.
- “LaunchSite” 열에는 다음과 같은 다양한 발사 지점이 포함되어 있습니다.
- 반덴버그 AFB 우주 발사 케네디 우주 센터 CCAFS SLC 40 기둥 궤도는 페이로드의 다양한 궤도입니다.
- True ASDS는 다음 반복 동영상에서 볼 수 있듯이 부스터가 드론 우주선에 성공적으로 착륙했음을 의미합니다.
- False ASDS는 비디오 루프에 표시된 것처럼 임무 결과가 드론 선박에 성공적으로 착륙하지 못했음을 의미합니다.

### 한국어 Transcript

이 비디오에서는 데이터 랭글링을 검토해 보겠습니다. 항공편 번호, 날짜, 부스터 버전, 페이로드 질량 궤도, 발사 지점, 결과: 이것은 1단계 비행의 상태입니다. 그리드 핀: 착륙에 도움이 되는 핀: 재사용, 다리: 착륙장에 사용, 블록, 재사용 횟수 , 발사 직렬, 경도 및 위도 등의 속성을 살펴보겠습니다. “LaunchSite” 열에는 다음과 같은 다양한 발사 지점이 포함되어 있습니다. 반덴버그 AFB 우주 발사 케네디 우주 센터 CCAFS SLC 40 기둥 궤도는 페이로드의 다양한 궤도입니다.

예: LEO: 지구 저궤도 (LEO) 는 고도가 2,000km인 지구 중심 궤도입니다. 지구 동기 궤도는 위성이 지구의 자전 궤도와 일치하도록 하는 지구 고궤도입니다 . 지구 적도에서 22,236마일 (35,786킬로미터) 떨어진 곳에 있습니다. 결과 열에는 첫 번째 스테이지가 성공적으로 착륙했는지 여부가 표시됩니다. True ASDS는 다음 반복 동영상에서 볼 수 있듯이 부스터가 드론 우주선에 성공적으로 착륙했음을 의미합니다.

False ASDS는 비디오 루프에 표시된 것처럼 임무 결과가 드론 선박에 성공적으로 착륙하지 못했음을 의미합니다. y 등급 (0 또는 1) 으로 변환하고 싶습니다. 즉, 부스터가 착륙하지 않았다는 뜻입니다. 변수 Y는 각 발사의 결과를 나타내는 분류 변수를 나타냅니다.

## 예시
- 이 강의는 개념 설명 중심이며 Transcript에서 독립된 예시를 확인하기 어렵다.

## 요약
- 반덴버그 AFB 우주 발사 케네디 우주 센터 CCAFS SLC 40 기둥 궤도는 페이로드의 다양한 궤도입니다.
- True ASDS는 다음 반복 동영상에서 볼 수 있듯이 부스터가 드론 우주선에 성공적으로 착륙했음을 의미합니다.
- False ASDS는 비디오 루프에 표시된 것처럼 임무 결과가 드론 선박에 성공적으로 착륙하지 못했음을 의미합니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we will review data wrangling. Let’s review some of the attributes: Flight Number, Date, Booster version, Payload mass Orbit, Launch Site, Outcome: this is the status of the first stage Flights, Grid Fins: these help with landing Reused, Legs: used in landing Landing pad, Block, Reused count, Serial, Longitude and latitude of launch Let’s take a look at some of these attributes. The column “LaunchSite” contains the different launch sites, including: Vandenberg AFB Space Launch Kennedy Space Center CCAFS SLC 40 The column orbits are the different orbits of the payload. For Example: LEO: Low Earth orbit (LEO)is an Earth-centered orbit with an altitude of 2,000 km GTO A geosynchronous orbit is a high Earth orbit that allows satellites to match Earth's rotation. It is located at 22,236 miles (35,786 kilometers) above Earth's equator.

The column Outcome indicates if the first stage successfully landed. There are 8 of them, for example. True ASDS means the booster successfully landed to a drone ship as shown the following looped video. False ASDS means the mission outcome was unsuccessfully landed to a drone ship as shown in the video loop. Outcome We would like landing outcomes to be converted to Classes y.

0 is a bad outcome, that is, the booster did not land. 1 is a good outcome, that is, the booster did land. The variable Y will represent the classification variable that represents the outcome of each launch.

</details>
