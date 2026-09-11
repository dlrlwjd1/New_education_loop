# Understanding the Data

## 개요
- 강좌: Data Analysis with Python
- 모듈: Importing Data Sets
- 재생 시간: 3분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/DslbC/understanding-the-data)
- 이 강좌에서 사용하는 데이터 세트는 제프리 C 슐리머의 공개 데이터셋입니다.
- 이 데이터 세트는 각 값을 쉼표로 구분하는 CSV 형식이므로 대부분의 도구 또는 응용 프로그램에서 쉽게 가져올 수 있습니다.

## 내용
### 핵심 내용
- 이 강좌에서 사용하는 데이터 세트는 제프리 C 슐리머의 공개 데이터셋입니다.
- 이 데이터 세트는 각 값을 쉼표로 구분하는 CSV 형식이므로 대부분의 도구 또는 응용 프로그램에서 쉽게 가져올 수 있습니다.
- 첫 번째 행이 26개 열 각각의 열 이름을 포함하는 머리글인 경우도 있습니다.
- 두 번째 속성인 정규화된 손실은 보험 차량 연도당 상대적 평균 손실 지급액입니다.
- 다른 특성은 쉽게 이해할 수 있습니다.
- 즉, 가격은 데이터 집합에서 예측하려는 값이고 예측 변수는 기호, 정규화된 손실, 수익 등과 같이 나열된 다른 모든 변수여야 한다는 의미입니다.

### 한국어 Transcript

[음악] 이 영상에서는 중고차 가격 데이터 세트를 살펴보겠습니다. 이 강좌에서 사용하는 데이터 세트는 제프리 C 슐리머의 공개 데이터셋입니다. 이 데이터 세트는 각 값을 쉼표로 구분하는 CSV 형식이므로 대부분의 도구 또는 응용 프로그램에서 쉽게 가져올 수 있습니다. 각 라인은 데이터 세트의 행을 나타냅니다. 이 모듈의 실습에서는 CSV 파일을 다운로드하여 사용할 수 있습니다.

첫 번째 행에서 다른 점이 보이시나요? 첫 번째 행이 26개 열 각각의 열 이름을 포함하는 머리글인 경우도 있습니다. 하지만 이 예에서는 또 다른 데이터 행에 불과합니다. 다음은 26개 열 각각이 무엇을 나타내는지에 대한 설명서입니다. 칼럼이 많은데 컬럼 이름 몇 가지만 살펴보겠습니다.

또한 슬라이드 하단에 있는 링크를 참조하여 설명을 직접 살펴볼 수도 있습니다. 첫 번째 속성인 기호는 자동차의 보험 위험 수준에 해당합니다. 자동차에는 처음에 가격과 관련된 위험 요소 기호가 지정됩니다. 그런 다음 자동차가 더 위험할 경우 이 심볼을 눈금 위로 올려서 조정합니다. 값이 +3이면 자동차가 위험하다는 것을 나타냅니다.

-3은 아마도 꽤 안전하다는 뜻입니다. 두 번째 속성인 정규화된 손실은 보험 차량 연도당 상대적 평균 손실 지급액입니다. 이 값은 2도어 소형, 스테이션 왜건, 스포츠 전문 차량 등 특정 크기 분류 내의 모든 차량에 대해 정규화되었으며 연간 차량당 평균 손실을 나타냅니다. 값의 범위는 65에서 256까지입니다. 다른 특성은 쉽게 이해할 수 있습니다.

자세한 내용을 확인하려면 슬라이드 하단에 있는 링크를 참조하십시오. 자, 각 기능의 의미를 이해한 후 26번째 속성이 가격이라는 것을 알게 될 것입니다. 이것이 우리의 목표값 또는 라벨입니다. 즉, 가격은 데이터 집합에서 예측하려는 값이고 예측 변수는 기호, 정규화된 손실, 수익 등과 같이 나열된 다른 모든 변수여야 한다는 의미입니다. 따라서 이 프로젝트의 목표는 다른 자동차 기능 측면에서 가격을 예측하는 것입니다.

간단히 말씀드리자면, 이 데이터 세트는 실제로 1985년에 나온 것이므로 모델의 자동차 가격이 약간 낮아 보일 수 있습니다. 하지만 이 연습의 목표는 데이터를 분석하는 방법을 배우는 것임을 명심하세요.

## 예시
- 이 모듈의 실습에서는 CSV 파일을 다운로드하여 사용할 수 있습니다.

## 요약
- 두 번째 속성인 정규화된 손실은 보험 차량 연도당 상대적 평균 손실 지급액입니다.
- 다른 특성은 쉽게 이해할 수 있습니다.
- 즉, 가격은 데이터 집합에서 예측하려는 값이고 예측 변수는 기호, 정규화된 손실, 수익 등과 같이 나열된 다른 모든 변수여야 한다는 의미입니다.

<details>
<summary>영문 Transcript 원문</summary>

[MUSIC] In this video, we'll be looking at the dataset on used car prices. The data set used in this course is an open dataset by Jeffrey C Schlimmer. This data set is in CSV format, which separates each of the values with commas, making it very easy to import in most tools or applications. Each line represents a row in the data set. In the hands-on lab for this module, you'll be able to download and use the CSV file.

Do you notice anything different about the first row? Sometimes the first row is a header which contains a column name for each of the 26 columns. But in this example, it's just another row of data. So here's the documentation on what each of the 26 columns represent. There are a lot of columns, and I'll just go through a few of the column names.

But you can also check out the link at the bottom of the slide to go through the descriptions yourself. The first attribute, symboling, corresponds to the insurance risk level of a car. Cars are initially assigned a risk factor symbol associated with their price. Then, if an automobile is more risky, this symbol is adjusted by moving it up the scale. A value of +3 indicates that the auto is risky, -3, that it's probably pretty safe.

The second attribute, normalized losses, is the relative average loss payment per insured vehicle year. This value is normalized for all autos within a particular size classification two door small, station wagons, sports specialty, etc, and represents the average loss per car per year. The values range from 65 to 256. The other attributes are easy to understand. If you would like to check out more details, refer to the link at the bottom of the slide.

Okay, after we understand the meaning of each feature, we'll notice that the 26th attribute is price. This is our target value or label. In other words, this means price is the value that we want to predict from the data set, and the predictors should be all the other variables listed, like symboling, normalized losses, make, and so on. Thus, the goal of this project is to predict price in terms of other car features. Just a quick note, this data set is actually from 1985, so the car prices for the models may seem a little low.

But just bear in mind that the goal of this exercise is to learn how to analyze the data.

</details>
