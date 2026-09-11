# Data Collection

## 개요
- 강좌: Data Science Methodology
- 모듈: From Problem to Approach and From Requirements to Collection
- 재생 시간: 3분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-science-methodology/lecture/Qy0sF/data-collection)
- 초기 데이터 수집이 수행된 후, 데이터 과학자의 평가가 이루어집니다 필요한 것이 있는지 여부를 판단합니다.
- 식사를 만들기 위해 식재료를 쇼핑할 때와 마찬가지로, 일부 식재료는 다음과 같은 경우가 있을 수 있습니다 제철이 아니거나 구하기 어렵거나 처음에 생각했던 것보다 더 비쌀 수 있습니다.

## 내용
### 핵심 내용
- 초기 데이터 수집이 수행된 후, 데이터 과학자의 평가가 이루어집니다 필요한 것이 있는지 여부를 판단합니다.
- 식사를 만들기 위해 식재료를 쇼핑할 때와 마찬가지로, 일부 식재료는 다음과 같은 경우가 있을 수 있습니다 제철이 아니거나 구하기 어렵거나 처음에 생각했던 것보다 더 비쌀 수 있습니다.
- 사례 연구의 맥락에서 이러한 요소에는 다음이 포함될 수 있습니다: 환자의 인구 통계, 임상 및 보험 적용 정보, 의료 서비스 제공자 정보, 청구 기록, 그리고 울혈성 심장의 모든 진단과 관련된 의약품 및 기타 정보 울혈성 심부전 환자.
- 이러한 결과를 통해 약물 정보가 좋은 모델을 얻는 데 중요할 수 있다고 판단되면, 그 정보를 얻기 위해 시간을 투자할 수 있습니다.
- 이렇게 하면 중복 데이터를 제거하여 다음 단계의 방법론에 사용할 수 있습니다, 데이터 이해입니다.
- 이 단계에서 필요한 경우, 데이터 과학자와 분석 팀원은 데이터를 더 잘 관리하기 위한 다양한 방법을 논의할 수 있습니다 데이터베이스의 특정 프로세스를 자동화하는 등 데이터를 더 잘 관리할 수 있는 다양한 방법을 논의할 수 있습니다 데이터 수집이 더 쉽고 빨라집니다.

### 한국어 Transcript

데이터 과학 방법론 101 요구 사항부터 수집까지 데이터 수집에 오신 것을 환영합니다! 초기 데이터 수집이 수행된 후, 데이터 과학자의 평가가 이루어집니다 필요한 것이 있는지 여부를 판단합니다. 식사를 만들기 위해 식재료를 쇼핑할 때와 마찬가지로, 일부 식재료는 다음과 같은 경우가 있을 수 있습니다 제철이 아니거나 구하기 어렵거나 처음에 생각했던 것보다 더 비쌀 수 있습니다. 이 단계에서는 데이터 요구 사항을 수정하고 데이터 수집에 더 많은 데이터가 필요한지 또는 더 적은 데이터가 필요한지에 대한 결정을 내립니다 수집에 더 많은 데이터가 필요한지 또는 더 적은 데이터가 필요한지 결정합니다. 데이터 성분이 수집되면 데이터 수집 단계에서 데이터 과학자 는 무엇을 가지고 작업할 것인지 잘 이해하게 됩니다.

설명적 통계 및 시각화와 같은 기술을 데이터에 적용할 수 있습니다 데이터에 대한 내용, 품질 및 초기 인사이트를 평가할 수 있습니다. 데이터의 공백을 파악하고 이를 채우거나 대체할 계획을 계획을 세워야 합니다. 본질적으로 재료는 이제 도마 위에 놓여 있습니다. 이제 데이터 과학 방법론에서 데이터 수집 단계의 몇 가지 예를 살펴보겠습니다. 이 단계는 데이터 요구 사항 단계의 후속 조치로 수행됩니다.

이제 '데이터 수집' 적용과 관련된 사례 연구를 살펴보겠습니다. 데이터를 수집하려면 데이터의 출처를 알고 있어야 하며, 필요한 데이터 요소를 어디서 찾을 수 있는지 를 알아야 합니다. 사례 연구의 맥락에서 이러한 요소에는 다음이 포함될 수 있습니다: 환자의 인구 통계, 임상 및 보험 적용 정보, 의료 서비스 제공자 정보, 청구 기록, 그리고 울혈성 심장의 모든 진단과 관련된 의약품 및 기타 정보 울혈성 심부전 환자. 이 사례 연구에서는 특정 약물 정보도 필요했지만 해당 데이터 소스는 아직 나머지 데이터 소스와 통합되지 않았습니다. 사용할 수 없는 데이터에 대한 결정을 미루는 것은 괜찮습니다, 나중에 데이터를 확보하려고 시도하는 것이 좋습니다.

예를 들어, 예측 모델링에서 일부 중간 결과를 얻은 후에도 이 작업을 수행할 수 있습니다 모델링을 수행한 후에도 가능합니다. 이러한 결과를 통해 약물 정보가 좋은 모델을 얻는 데 중요할 수 있다고 판단되면, 그 정보를 얻기 위해 시간을 투자할 수 있습니다. 하지만 결과적으로 이러한 약물 정보 없이도 상당히 좋은 모델을 구축할 수 있었습니다 약물 정보. DBA와 프로그래머는 종종 함께 작업하여 다양한 소스에서 데이터를 추출한 다음 병합합니다. 이렇게 하면 중복 데이터를 제거하여 다음 단계의 방법론에 사용할 수 있습니다, 데이터 이해입니다.

이 단계에서 필요한 경우, 데이터 과학자와 분석 팀원은 데이터를 더 잘 관리하기 위한 다양한 방법을 논의할 수 있습니다 데이터베이스의 특정 프로세스를 자동화하는 등 데이터를 더 잘 관리할 수 있는 다양한 방법을 논의할 수 있습니다 데이터 수집이 더 쉽고 빨라집니다.

## 예시
- 이제 '데이터 수집' 적용과 관련된 사례 연구를 살펴보겠습니다.
- 사례 연구의 맥락에서 이러한 요소에는 다음이 포함될 수 있습니다: 환자의 인구 통계, 임상 및 보험 적용 정보, 의료 서비스 제공자 정보, 청구 기록, 그리고 울혈성 심장의 모든 진단과 관련된 의약품 및 기타 정보 울혈성 심부전 환자.
- 이 사례 연구에서는 특정 약물 정보도 필요했지만 해당 데이터 소스는 아직 나머지 데이터 소스와 통합되지 않았습니다.
- 예를 들어, 예측 모델링에서 일부 중간 결과를 얻은 후에도 이 작업을 수행할 수 있습니다 모델링을 수행한 후에도 가능합니다.

## 요약
- 이러한 결과를 통해 약물 정보가 좋은 모델을 얻는 데 중요할 수 있다고 판단되면, 그 정보를 얻기 위해 시간을 투자할 수 있습니다.
- 이렇게 하면 중복 데이터를 제거하여 다음 단계의 방법론에 사용할 수 있습니다, 데이터 이해입니다.
- 이 단계에서 필요한 경우, 데이터 과학자와 분석 팀원은 데이터를 더 잘 관리하기 위한 다양한 방법을 논의할 수 있습니다 데이터베이스의 특정 프로세스를 자동화하는 등 데이터를 더 잘 관리할 수 있는 다양한 방법을 논의할 수 있습니다 데이터 수집이 더 쉽고 빨라집니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Data Science Methodology 101 From Requirements to Collection Data Collection! After the initial data collection is performed, an assessment by the data scientist takes place to determine whether or not they have what they need. As is the case when shopping for ingredients to make a meal, some ingredients might be out of season and more difficult to obtain or cost more than initially thought. In this phase the data requirements are revised and decisions are made as to whether or not the collection requires more or less data. Once the data ingredients are collected, then in the data collection stage, the data scientist will have a good understanding of what they will be working with.

Techniques such as descriptive statistics and visualization can be applied to the data set, to assess the content, quality, and initial insights about the data. Gaps in data will be identified and plans to either fill or make substitutions will have to be made. In essence, the ingredients are now sitting on the cutting board. Now let's look at some examples of the data collection stage within the data science methodology. This stage is undertaken as a follow-up to the data requirements stage.

So now, let's look at the case study related to applying "Data Collection". Collecting data requires that you know the source or, know where to find the data elements that are needed. In the context of our case study, these can include: demographic, clinical and coverage information of patients, provider information, claims records, as well as pharmaceutical and other information related to all the diagnoses of the congestive heart failure patients. For this case study, certain drug information was also needed, but that data source was not yet integrated with the rest of the data sources. This leads to an important point: It is alright to defer decisions about unavailable data, and attempt to acquire it at a later stage.

For example, this can even be done after getting some intermediate results from the predictive modeling. If those results suggest that the drug information might be important in obtaining a good model, then the time to try to get it would be invested. As it turned out though, they were able to build a reasonably good model without this drug information. DBAs and programmers often work together to extract data from various sources, and then merge it. This allows for removing redundant data, making it available for the next stage of the methodology, which is data understanding.

At this stage, if necessary, data scientists and analytics team members can discuss various ways to better manage their data, including automating certain processes in the database, so that data collection is easier and faster. Thanks for watching!

</details>
