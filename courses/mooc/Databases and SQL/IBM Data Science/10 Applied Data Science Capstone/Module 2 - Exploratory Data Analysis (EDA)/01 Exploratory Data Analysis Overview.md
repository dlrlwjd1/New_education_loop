# Exploratory Data Analysis Overview

## 개요
- 강좌: Applied Data Science Capstone
- 모듈: Exploratory Data Analysis (EDA)
- 재생 시간: 2분
- [MOOC 원본 강의](https://www.mooc.org/learn/applied-data-science-capstone/lecture/TYFnv/exploratory-data-analysis-overview)
- 탐색적 데이터 분석은 모든 데이터 과학 프로젝트의 첫 번째 단계입니다.
- 첫 번째 실습에서는 데이터베이스를 사용하여 탐색적 데이터 분석을 수행합니다.

## 내용
### 핵심 내용
- 탐색적 데이터 분석은 모든 데이터 과학 프로젝트의 첫 번째 단계입니다.
- 첫 번째 실습에서는 데이터베이스를 사용하여 탐색적 데이터 분석을 수행합니다.
- 두 번째 실습에서는 이 데이터를 사용하여 Falcon 9의 첫 번째 단계 착륙 여부를 자동으로 결정할 수 있는지 알아봅니다.
- 일부 속성을 사용하여 첫 번째 단계를 재사용할 수 있는지 여부를 결정할 수 있습니다.
- 그런 다음 이러한 기능을 기계 학습과 함께 사용하여 예를 들어 첫 번째 단계가 성공적으로 완료될 수 있는지 자동으로 예측할 수 있습니다.
- 따라서 첫 번째 단계의 성공 여부를 결정하는 데 도움이 될 수 있습니다.

### 한국어 Transcript

이 비디오에서는 탐색적 데이터 분석을 검토합니다. 탐색적 데이터 분석은 모든 데이터 과학 프로젝트의 첫 번째 단계입니다. 첫 번째 실습에서는 데이터베이스를 사용하여 탐색적 데이터 분석을 수행합니다. 두 번째 실습에서는 이 데이터를 사용하여 Falcon 9의 첫 번째 단계 착륙 여부를 자동으로 결정할 수 있는지 알아봅니다. 일부 속성을 사용하여 첫 번째 단계를 재사용할 수 있는지 여부를 결정할 수 있습니다.

그런 다음 이러한 기능을 기계 학습과 함께 사용하여 예를 들어 첫 번째 단계가 성공적으로 완료될 수 있는지 자동으로 예측할 수 있습니다. 2013년 이후 성공률이 향상되었음을 알 수 있습니다. 출시 번호를 통해 이를 기능으로 통합할 수 있습니다. 출시 사이트마다 성공률이 다르다는 것을 알 수 있습니다. 따라서 첫 번째 단계의 성공 여부를 결정하는 데 도움이 될 수 있습니다.

CCAFS LC-40 성공률은 60% 인 반면 KSC LC-39A 및 VAFB SLC 4E의 성공률은 약 77% 입니다. 속성을 조합하면 더 많은 정보를 얻을 수도 있습니다. 착륙 결과를 색상으로 오버레이하면 CCAFS LC-40 의 성공률은 60% 이지만 질량이 10,000kg을 초과하면 성공률은 100% 임을 알 수 있습니다. 따라서 여러 기능을 결합할 것입니다. 실습에서는 성공적인 착륙과 어떤 특성이 상관관계가 있는지 알아보겠습니다.

범주형 변수는 단일 핫 인코딩을 사용하여 변환되어 첫 번째 단계의 성공 여부를 예측하는 기계 학습 모델에 사용할 데이터를 준비합니다.

## 예시
- 첫 번째 실습에서는 데이터베이스를 사용하여 탐색적 데이터 분석을 수행합니다.
- 두 번째 실습에서는 이 데이터를 사용하여 Falcon 9의 첫 번째 단계 착륙 여부를 자동으로 결정할 수 있는지 알아봅니다.
- 그런 다음 이러한 기능을 기계 학습과 함께 사용하여 예를 들어 첫 번째 단계가 성공적으로 완료될 수 있는지 자동으로 예측할 수 있습니다.
- 실습에서는 성공적인 착륙과 어떤 특성이 상관관계가 있는지 알아보겠습니다.

## 요약
- 일부 속성을 사용하여 첫 번째 단계를 재사용할 수 있는지 여부를 결정할 수 있습니다.
- 그런 다음 이러한 기능을 기계 학습과 함께 사용하여 예를 들어 첫 번째 단계가 성공적으로 완료될 수 있는지 자동으로 예측할 수 있습니다.
- 따라서 첫 번째 단계의 성공 여부를 결정하는 데 도움이 될 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we will review Exploratory Data Analysis. Exploratory Data Analysis is the first step of any data science project. In the first lab, you will perform some Exploratory Data Analysis using a database. In the second lab, you will see if the data can be used to automatically determine if the Falcon 9’s first stage will land. Some attributes can be used to determine if the first stage can be reused.

We can then use these features with machine learning to automatically predict if the first stage can land successfully, for example. You can observe that the success rate since 2013 has improved. We can incorporate this as a feature via launch Number. We see that different launch sites have different success rates. As a result, they can be used to help determine if the first stage will land successfully.

CCAFS LC-40 has a success rate of 60%, while KSC LC-39A and VAFB SLC 4E have a success rate of around 77%. Combining attributes also gives us more information. If we overlay the result of the landing outcomes as a color we see that CCAFS LC-40, has a success rate of 60%, but if the mass is above 10,000 kg the success rate is 100%. Therefore, we will combine multiple features. In the lab, you will determine what attributes are correlated with successful landings.

The categorical variables will be converted using one hot encoding, preparing the data for a machine learning model that will predict if the first stage will successfully land.

</details>
