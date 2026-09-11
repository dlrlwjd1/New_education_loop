# Data Preparation - Case Study

## 개요
- 강좌: Data Science Methodology
- 모듈: From Understanding to Preparation and From Modeling to Evaluation
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-science-methodology/lecture/xZmgH/data-preparation-case-study)
- 어떤 면에서 데이터 준비는 먼지나 결함과 같은 불필요한 요소가 제거된다는 점에서 갓 수확한 채소를 씻는 것과 비슷합니다.
- 사례 연구에서 데이터 준비 단계의 중요한 첫 단계는 울혈성 심부전을 실제로 정의하는 것이었습니다.

## 내용
### 핵심 내용
- 어떤 면에서 데이터 준비는 먼지나 결함과 같은 불필요한 요소가 제거된다는 점에서 갓 수확한 채소를 씻는 것과 비슷합니다.
- 사례 연구에서 데이터 준비 단계의 중요한 첫 단계는 울혈성 심부전을 실제로 정의하는 것이었습니다.
- 특정 울혈성 심부전 입원이 초기 증상 (지수 입원) 인지 또는 울혈성 심부전 관련 재입원인지를 정의하려면 발병 시기를 평가해야 했습니다.
- 임상 전문 지식을 바탕으로 울혈성 심부전 환자의 경우 최초 입원 후 퇴원 후 재입원 기간으로 30일을 설정했습니다.
- 울혈성 심부전으로 인한 재입원 위험에 영향을 미칠 수 있는 당뇨병, 고혈압 및 기타 여러 질병 및 만성 질환과 같은 울혈성 심부전을 동반한 질환도 고려되었습니다.
- 종속 변수 또는 목표는 울혈성 심부전으로 입원 후 30일 이내에 울혈성 심부전 재입원이었고 결과는 예 또는 아니오였습니다.

### 한국어 Transcript

데이터 과학 방법론 101에 오신 것을 환영합니다. 어떤 면에서 데이터 준비는 먼지나 결함과 같은 불필요한 요소가 제거된다는 점에서 갓 수확한 채소를 씻는 것과 비슷합니다. 이제 데이터 준비 개념 적용과 관련된 사례 연구를 살펴보겠습니다. 사례 연구에서 데이터 준비 단계의 중요한 첫 단계는 울혈성 심부전을 실제로 정의하는 것이었습니다. 처음에는 쉽게 들렸지만 정확하게 정의하는 것은 간단하지 않았습니다.

먼저, 울혈성 심부전은 특정 종류의 체액 축적을 의미하므로 진단 관련 그룹 코드 세트를 식별해야 했습니다. 또한 울혈성 심부전은 심부전의 한 가지 유형일 뿐이라는 점도 고려해야 했습니다. 울혈성 심부전에 대한 올바른 코드를 얻으려면 임상 지침이 필요했습니다. 다음 단계는 동일한 조건에 대한 재입학 기준을 정의하는 것이었습니다. 특정 울혈성 심부전 입원이 초기 증상 (지수 입원) 인지 또는 울혈성 심부전 관련 재입원인지를 정의하려면 발병 시기를 평가해야 했습니다.

임상 전문 지식을 바탕으로 울혈성 심부전 환자의 경우 최초 입원 후 퇴원 후 재입원 기간으로 30일을 설정했습니다. 다음으로 거래 형식의 기록을 집계했는데, 이는 데이터에 각 환자에 대한 여러 기록이 포함되었음을 의미합니다. 거래 기록에는 의사, 검사실, 병원 및 임상 서비스를 위해 제출된 전문 제공자 시설 청구가 포함됩니다. 또한 입원 환자와 외래 환자에 대한 모든 진단, 절차, 처방 및 기타 정보를 설명하는 기록도 포함되었습니다. 특정 환자는 임상 병력에 따라 수백 또는 수천 개의 이러한 기록을 쉽게 보유할 수 있습니다.

그런 다음 모든 거래 기록을 환자 수준으로 집계하여 모델링에 사용할 의사 결정 트리 분류 방법에 필요한 각 환자에 대한 단일 기록을 생성했습니다. 집계 프로세스의 일환으로 트랜잭션의 정보를 나타내는 많은 새 열이 생성되었습니다. 예를 들어, 진단, 시술, 처방 등을 받은 의사, 클리닉 및 병원을 자주 방문하고 가장 최근에 방문한 횟수. 울혈성 심부전으로 인한 재입원 위험에 영향을 미칠 수 있는 당뇨병, 고혈압 및 기타 여러 질병 및 만성 질환과 같은 울혈성 심부전을 동반한 질환도 고려되었습니다. 데이터 준비에 대해 논의하는 동안 울혈성 심부전에 대한 문헌적 검토를 통해 아직 설명되지 않은 동반 질환과 같은 중요한 데이터 요소가 간과되지 않았는지 확인했습니다.

문학적 검토에는 데이터 수집 단계로 돌아가 조건과 절차에 대한 몇 가지 지표를 추가하는 작업이 포함되었습니다. 환자 수준에서 거래 데이터를 집계한다는 것은 연령, 성별, 보험 유형 등과 같은 인구통계학적 정보를 포함한 다른 환자 데이터와 병합하는 것을 의미했습니다. 그 결과 환자당 단일 기록이 포함된 테이블 1개가 생성되었으며, 많은 열이 환자의 임상 기록에서 환자에 대한 특성을 나타냅니다. 이러한 열은 예측 모델링의 변수로 사용됩니다. 다음은 모델 구축에 최종적으로 사용된 변수 목록입니다.

종속 변수 또는 목표는 울혈성 심부전으로 입원 후 30일 이내에 울혈성 심부전 재입원이었고 결과는 예 또는 아니오였습니다. 데이터 준비 단계 결과 2,343명의 환자가 이 사례 연구의 모든 기준을 충족했습니다. 그런 다음 코호트를 각각 모델 구축 및 검증을 위한 훈련 세트와 테스트 세트로 나누었습니다. 이것으로 주요 개념을 사례 연구에 적용한 이 교육 과정의 데이터 준비 섹션을 마칩니다.

## 예시
- 이제 데이터 준비 개념 적용과 관련된 사례 연구를 살펴보겠습니다.
- 사례 연구에서 데이터 준비 단계의 중요한 첫 단계는 울혈성 심부전을 실제로 정의하는 것이었습니다.
- 먼저, 울혈성 심부전은 특정 종류의 체액 축적을 의미하므로 진단 관련 그룹 코드 세트를 식별해야 했습니다.
- 울혈성 심부전에 대한 올바른 코드를 얻으려면 임상 지침이 필요했습니다.

## 요약
- 임상 전문 지식을 바탕으로 울혈성 심부전 환자의 경우 최초 입원 후 퇴원 후 재입원 기간으로 30일을 설정했습니다.
- 울혈성 심부전으로 인한 재입원 위험에 영향을 미칠 수 있는 당뇨병, 고혈압 및 기타 여러 질병 및 만성 질환과 같은 울혈성 심부전을 동반한 질환도 고려되었습니다.
- 종속 변수 또는 목표는 울혈성 심부전으로 입원 후 30일 이내에 울혈성 심부전 재입원이었고 결과는 예 또는 아니오였습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Data Science Methodology 101 From Understanding to Preparation Data Preparation - Case Study! In a sense, data preparation is similar to washing freshly picked vegetables insofar as unwanted elements, such as dirt or imperfections, are removed. So now, let's look at the case study related to applying Data Preparation concepts. In the case study, an important first step in the data preparation stage was to actually define congestive heart failure. This sounded easy at first but defining it precisely, was not straightforward.

First, the set of diagnosis-related group codes needed to be identified, as congestive heart failure implies certain kinds of fluid buildup. We also needed to consider that congestive heart failure is only one type of heart failure. Clinical guidance was needed to get the right codes for congestive heart failure. The next step involved defining the re-admission criteria for the same condition. The timing of events needed to be evaluated in order to define whether a particular congestive heart failure admission was an initial event, which is called an index admission, or a congestive heart failure-related re-admission.

Based on clinical expertise, a time period of 30 days was set as the window for readmission relevant for congestive heart failure patients, following the discharge from the initial admission. Next, the records that were in transactional format were aggregated, meaning that the data included multiple records for each patient. Transactional records included professional provider facility claims submitted for physician, laboratory, hospital, and clinical services. Also included were records describing all the diagnoses, procedures, prescriptions, and other information about in-patients and out-patients. A given patient could easily have hundreds or even thousands of these records, depending on their clinical history.

Then, all the transactional records were aggregated to the patient level, yielding a single record for each patient, as required for the decision-tree classification method that would be used for modeling. As part of the aggregation process, many new columns were created representing the information in the transactions. For example, frequency and most recent visits to doctors, clinics and hospitals with diagnoses, procedures, prescriptions, and so forth. Co-morbidities with congestive heart failure were also considered, such as diabetes, hypertension, and many other diseases and chronic conditions that could impact the risk of re-admission for congestive heart failure. During discussions around data preparation, a literary review on congestive heart failure was also undertaken to see whether any important data elements were overlooked, such as co-morbidities that had not yet been accounted for.

The literary review involved looping back to the data collection stage to add a few more indicators for conditions and procedures. Aggregating the transactional data at the patient level, meant merging it with the other patient data, including their demographic information, such as age, gender, type of insurance, and so forth. The result was the creation of one table containing a single record per patient, with many columns representing the attributes about the patient in his or her clinical history. These columns would be used as variables in the predictive modeling. Here is a list of the variables that were ultimately used in building the model.

The dependent variable, or target, was congestive heart failure readmission within 30 days following discharge from a hospitalization for congestive heart failure, with an outcome of either yes or no. The data preparation stage resulted in a cohort of 2,343 patients meeting all of the criteria for this case study. The cohort was then split into training and testing sets for building and validating the model, respectively. This ends the Data Preparation section of this course, in which we applied the key concepts to the case study. Thanks for watching!

</details>
