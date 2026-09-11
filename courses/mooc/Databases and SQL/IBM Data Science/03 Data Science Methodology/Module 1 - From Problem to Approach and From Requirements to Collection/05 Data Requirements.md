# Data Requirements

## 개요
- 강좌: Data Science Methodology
- 모듈: From Problem to Approach and From Requirements to Collection
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-science-methodology/lecture/ufldt/data-requirements)
- 스파게티 디너를 만드는 것이 목표인데 요리에 적합한 재료가 없다면 성공이 저해될 것입니다.
- 데이터 과학 방법론의 이 섹션을 데이터를 활용한 요리라고 생각해 보세요.

## 내용
### 핵심 내용
- 스파게티 디너를 만드는 것이 목표인데 요리에 적합한 재료가 없다면 성공이 저해될 것입니다.
- 데이터 과학 방법론의 이 섹션을 데이터를 활용한 요리라고 생각해 보세요.
- 방법론의 데이터 수집 및 데이터 준비 단계를 시작하기 전에 의사결정 트리 분류를 위한 데이터 요구 사항을 정의하는 것이 중요합니다.
- 이제 “데이터 요구 사항” 적용과 관련된 사례 연구를 살펴보겠습니다.
- 사례 연구에서 첫 번째 과제는 선택한 의사결정 트리 분류 접근 방식에 대한 데이터 요구 사항을 정의하는 것이었습니다.
- 환자 형식당 하나의 기록을 얻기 위해 데이터 사이언티스트는 트랜잭션 레코드를 환자 수준까지 롤업하여 해당 정보를 나타내는 여러 개의 새로운 변수를 만들었습니다.

### 한국어 Transcript

요구 사항에서 수집 데이터 요구 사항까지 데이터 과학 방법론 101에 오신 것을 환영합니다! 스파게티 디너를 만드는 것이 목표인데 요리에 적합한 재료가 없다면 성공이 저해될 것입니다. 데이터 과학 방법론의 이 섹션을 데이터를 활용한 요리라고 생각해 보세요. 식사를 만드는 데에는 각 단계가 매우 중요합니다. 따라서 해결해야 할 문제가 레시피이고 데이터가 재료인 경우 데이터 과학자는 필요한 재료, 재료를 조달하거나 수집하는 방법, 재료를 이해하거나 활용하는 방법, 원하는 결과를 달성하기 위해 데이터를 준비하는 방법 등을 식별해야 합니다.

데이터 사이언티스트는 당면한 문제에 대한 이해를 바탕으로 선택한 분석 접근 방식을 사용하여 시작할 준비가 되었습니다. 이제 데이터 과학 방법론 내 데이터 요구 사항의 몇 가지 예를 살펴보겠습니다. 방법론의 데이터 수집 및 데이터 준비 단계를 시작하기 전에 의사결정 트리 분류를 위한 데이터 요구 사항을 정의하는 것이 중요합니다. 여기에는 초기 데이터 수집에 필요한 데이터 내용, 형식 및 출처를 식별하는 것이 포함됩니다. 이제 “데이터 요구 사항” 적용과 관련된 사례 연구를 살펴보겠습니다.

사례 연구에서 첫 번째 과제는 선택한 의사결정 트리 분류 접근 방식에 대한 데이터 요구 사항을 정의하는 것이었습니다. 여기에는 건강 보험 제공자 기반에서 적절한 환자 코호트를 선택하는 것이 포함되었습니다 . 전체 임상 기록을 집계하기 위해 코호트에 포함해야 하는 세 가지 기준을 확인했습니다. 먼저, 환자가 의료 서비스 지역 내에 입원 환자로 입원해야 필요한 정보를 얻을 수 있었습니다. 둘째, 1년 동안 울혈성 심부전 1차 진단을 받은 환자에 초점을 맞췄습니다.

셋째, 환자가 울혈성 심부전으로 1차 입원하기 전 최소 6개월 이상 지속적으로 등록한 상태여야 전체 병력을 집계할 수 있습니다. 다른 중대한 질환이 있는 것으로 진단받은 울혈성 심부전 환자는 재입원률이 평균보다 높아져 결과를 왜곡할 수 있기 때문에 코호트에서 제외되었습니다. 그런 다음 의사결정 트리 분류에 필요한 데이터의 내용, 형식 및 표현을 정의했습니다. 이 모델링 기법에는 환자당 하나의 기록이 필요하며, 각 열은 모형의 변수를 나타냅니다. 재입원 결과를 모델링하려면 환자의 임상 병력의 모든 측면을 포괄하는 데이터가 필요했습니다.

이 콘텐츠에는 입원, 1차, 2차, 3차 진단, 시술, 처방, 입원 중 또는 환자/의사 방문 기간 내내 제공되는 기타 서비스가 포함됩니다. 따라서 특정 환자는 환자의 모든 관련 특성을 나타내는 수천 개의 기록을 보유할 수 있습니다. 환자 형식당 하나의 기록을 얻기 위해 데이터 사이언티스트는 트랜잭션 레코드를 환자 수준까지 롤업하여 해당 정보를 나타내는 여러 개의 새로운 변수를 만들었습니다. 데이터 준비 단계에서는 이 작업이 필요했기 때문에 미리 생각하고 후속 단계를 예상하는 것이 중요합니다. 이것으로 이 과정의 데이터 요구 사항 섹션을 마칩니다.

## 예시
- 이제 “데이터 요구 사항” 적용과 관련된 사례 연구를 살펴보겠습니다.
- 사례 연구에서 첫 번째 과제는 선택한 의사결정 트리 분류 접근 방식에 대한 데이터 요구 사항을 정의하는 것이었습니다.
- 환자 형식당 하나의 기록을 얻기 위해 데이터 사이언티스트는 트랜잭션 레코드를 환자 수준까지 롤업하여 해당 정보를 나타내는 여러 개의 새로운 변수를 만들었습니다.

## 요약
- 이제 “데이터 요구 사항” 적용과 관련된 사례 연구를 살펴보겠습니다.
- 사례 연구에서 첫 번째 과제는 선택한 의사결정 트리 분류 접근 방식에 대한 데이터 요구 사항을 정의하는 것이었습니다.
- 환자 형식당 하나의 기록을 얻기 위해 데이터 사이언티스트는 트랜잭션 레코드를 환자 수준까지 롤업하여 해당 정보를 나타내는 여러 개의 새로운 변수를 만들었습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Data Science Methodology 101 From Requirements to Collection Data Requirements! If your goal is to make a spaghetti dinner but you don't have the right ingredients to make the dish, then your success will be compromised. Think of this section of the data science methodology as cooking with data. Each step is critical in making the meal. So, if the problem that needs to be resolved is the recipe, so to speak, and data is an ingredient, then the data scientist needs to identify: which ingredients are required, how to source or to collect them, how to understand or work with them, and how to prepare the data to meet the desired outcome.

Building on the understanding of the problem at hand, and then using the analytical approach selected, the Data Scientist is ready to get started. Now let's look at some examples of the data requirements within the data science methodology. Prior to undertaking the data collection and data preparation stages of the methodology, it's vital to define the data requirements for decision-tree classification. This includes identifying the necessary data content, formats and sources for initial data collection. So now, let's look at the case study related to applying "Data Requirements".

In the case study, the first task was to define the data requirements for the decision tree classification approach that was selected. This included selecting a suitable patient cohort from the health insurance providers member base. In order to compile the complete clinical histories, three criteria were identified for inclusion in the cohort. First, a patient needed to be admitted as in-patient within the provider service area, so they'd have access to the necessary information. Second, they focused on patients with a primary diagnosis of congestive heart failure during one full year.

Third, a patient must have had continuous enrollment for at least six months, prior to the primary admission for congestive heart failure, so that complete medical history could be compiled. Congestive heart failure patients who also had been diagnosed as having other significant medical conditions, were excluded from the cohort because those conditions would cause higher-than-average re-admission rates and, thus, could skew the results. Then the content, format, and representations of the data needed for decision tree classification were defined. This modeling technique requires one record per patient, with columns representing the variables in the model. To model the readmission outcome, there needed to be data covering all aspects of the patient's clinical history.

This content would include admissions, primary, secondary, and tertiary diagnoses, procedures, prescriptions, and other services provided either during hospitalization or throughout patient/doctor visits. Thus, a particular patient could have thousands of records, representing all their related attributes. To get to the one record per patient format, the data scientists rolled up the transactional records to the patient level, creating a number of new variables to represent that information. This was a job for the data preparation stage, so thinking ahead and anticipating subsequent stages is important. This ends the Data Requirements section for this course.

Thanks for watching!

</details>
