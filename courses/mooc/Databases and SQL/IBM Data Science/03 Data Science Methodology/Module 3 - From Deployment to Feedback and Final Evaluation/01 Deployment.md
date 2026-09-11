# Deployment

## 개요
- 강좌: Data Science Methodology
- 모듈: From Deployment to Feedback and Final Evaluation
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-science-methodology/lecture/qNosf/deployment)
- 데이터 과학 모델이 해답을 제시하긴 하지만, 초기 질문에 대한 답을 적절하고 유용하게 만들기 위해서는 이해 관계자가 생성된 도구에 익숙해지도록 하는 것이 관건입니다.
- 비즈니스 시나리오에서 이해관계자들은 솔루션 소유자, 마케팅, 애플리케이션 개발자, IT 관리 등 다양한 전문 분야를 가지고 있습니다.

## 내용
### 핵심 내용
- 데이터 과학 모델이 해답을 제시하긴 하지만, 초기 질문에 대한 답을 적절하고 유용하게 만들기 위해서는 이해 관계자가 생성된 도구에 익숙해지도록 하는 것이 관건입니다.
- 비즈니스 시나리오에서 이해관계자들은 솔루션 소유자, 마케팅, 애플리케이션 개발자, IT 관리 등 다양한 전문 분야를 가지고 있습니다.
- 이제 배포 적용과 관련된 사례 연구를 살펴보겠습니다.” 솔루션 배포를 준비하기 위한 다음 단계는 재입학 위험을 줄이기 위해 중재 프로그램을 설계하고 관리할 비즈니스 그룹을 위해 지식을 흡수하는 것이었습니다.
- 이 시나리오에서는 의료진이 고위험 환자를 식별하고 적절한 중재 조치를 설계하는 방법을 이해할 수 있도록 비즈니스 담당자가 모델 결과를 번역했습니다.
- 또한 결과를 피드백 단계를 거쳐 시간이 지남에 따라 모델을 개선할 수 있도록 IT 개발자 및 데이터베이스 관리자와 협력하여 중재를 받는 환자를 추적하고 모니터링하는 프로세스를 개발해야 했습니다.
- 이 보고서는 환자의 예측 위험도 및 임상 병력에 대한 세부 정보를 포함하여 개별 환자에 대한 자세한 요약을 제공하여 의사에게 간결한 요약을 제공합니다.

### 한국어 Transcript

배포에서 피드백 - 배포까지 데이터 과학 방법론 101에 오신 것을 환영합니다! 데이터 과학 모델이 해답을 제시하긴 하지만, 초기 질문에 대한 답을 적절하고 유용하게 만들기 위해서는 이해 관계자가 생성된 도구에 익숙해지도록 하는 것이 관건입니다. 비즈니스 시나리오에서 이해관계자들은 솔루션 소유자, 마케팅, 애플리케이션 개발자, IT 관리 등 다양한 전문 분야를 가지고 있습니다. 모델이 평가되고 데이터 사이언티스트가 효과가 있을 것이라고 확신하면 모델을 배포하고 최종 테스트를 진행합니다. 모델의 목적에 따라 제한된 사용자 그룹이나 테스트 환경에서 모델을 배포하여 결과를 전반적으로 사용할 수 있다는 확신을 심어줄 수 있습니다.

이제 배포 적용과 관련된 사례 연구를 살펴보겠습니다.” 솔루션 배포를 준비하기 위한 다음 단계는 재입학 위험을 줄이기 위해 중재 프로그램을 설계하고 관리할 비즈니스 그룹을 위해 지식을 흡수하는 것이었습니다. 이 시나리오에서는 의료진이 고위험 환자를 식별하고 적절한 중재 조치를 설계하는 방법을 이해할 수 있도록 비즈니스 담당자가 모델 결과를 번역했습니다. 물론 목표는 이러한 환자들이 퇴원 후 30일 이내에 재입원할 가능성을 줄이는 것이었습니다. 비즈니스 요구 사항 단계에서 중재 프로그램 책임자와 그녀의 팀은 울혈성 심부전의 위험을 거의 실시간으로 자동 평가할 수 있는 애플리케이션을 원했습니다. 또한 임상 직원이 쉽게 사용할 수 있어야 했고, 가급적이면 각 직원이 가지고 다닐 수 있는 태블릿의 브라우저 기반 애플리케이션을 사용해야 했습니다.

이 환자 데이터는 입원 기간 내내 생성되었습니다. 이 데이터는 모델에 필요한 형식으로 자동 준비되며 퇴원 시점에 맞춰 각 환자에게 점수를 매깁니다. 그러면 임상의가 각 환자에 대한 최신 위험 평가를 받아 퇴원 후 중재 대상 환자를 선택할 수 있게 됩니다. 솔루션 배포의 일환으로 중재팀은 임상 직원을 위한 교육을 개발하고 제공하기도 했습니다. 또한 결과를 피드백 단계를 거쳐 시간이 지남에 따라 모델을 개선할 수 있도록 IT 개발자 및 데이터베이스 관리자와 협력하여 중재를 받는 환자를 추적하고 모니터링하는 프로세스를 개발해야 했습니다.

이 맵은 Cognos 애플리케이션을 통해 배포된 솔루션의 예입니다. 이 사례 연구에서는 소아 당뇨병 환자의 입원 위험에 관한 것이었습니다. 울혈성 심부전 사용 사례와 마찬가지로 이 사례에서도 의사 결정 트리 분류를 사용하여 이 응용 분야의 기반이 될 위험 모델을 만들었습니다. 이 지도는 다양한 환자 상태 및 기타 특성에 따른 예측 위험에 대한 대화형 분석을 통해 전국적인 입원 위험에 대한 개요를 제공합니다. 이 슬라이드는 모델의 특정 노드 내 환자 집단별 위험도에 대한 대화형 요약 보고서를 보여 주므로 임상의는 이 하위 그룹의 환자에 대한 여러 질환의 조합을 이해할 수 있습니다.

이 보고서는 환자의 예측 위험도 및 임상 병력에 대한 세부 정보를 포함하여 개별 환자에 대한 자세한 요약을 제공하여 의사에게 간결한 요약을 제공합니다. 이것으로 이 과정의 배포 섹션을 마칩니다.

## 예시
- 이제 배포 적용과 관련된 사례 연구를 살펴보겠습니다.” 솔루션 배포를 준비하기 위한 다음 단계는 재입학 위험을 줄이기 위해 중재 프로그램을 설계하고 관리할 비즈니스 그룹을 위해 지식을 흡수하는 것이었습니다.
- 이 사례 연구에서는 소아 당뇨병 환자의 입원 위험에 관한 것이었습니다.
- 울혈성 심부전 사용 사례와 마찬가지로 이 사례에서도 의사 결정 트리 분류를 사용하여 이 응용 분야의 기반이 될 위험 모델을 만들었습니다.

## 요약
- 이 시나리오에서는 의료진이 고위험 환자를 식별하고 적절한 중재 조치를 설계하는 방법을 이해할 수 있도록 비즈니스 담당자가 모델 결과를 번역했습니다.
- 또한 결과를 피드백 단계를 거쳐 시간이 지남에 따라 모델을 개선할 수 있도록 IT 개발자 및 데이터베이스 관리자와 협력하여 중재를 받는 환자를 추적하고 모니터링하는 프로세스를 개발해야 했습니다.
- 이 보고서는 환자의 예측 위험도 및 임상 병력에 대한 세부 정보를 포함하여 개별 환자에 대한 자세한 요약을 제공하여 의사에게 간결한 요약을 제공합니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Data Science Methodology 101 From Deployment to Feedback - Deployment! While a data science model will provide an answer, the key to making the answer relevant and useful to address the initial question, involves getting the stakeholders familiar with the tool produced. In a business scenario, stakeholders have different specialties that will help make this happen, such as the solution owner, marketing, application developers, and IT administration. Once the model is evaluated and the data scientist is confident it will work, it is deployed and put to the ultimate test. Depending on the purpose of the model, it may be rolled out to a limited group of users or in a test environment, to build up confidence in applying the outcome for use across the board.

So now, let's look at the case study related to applying Deployment" In preparation for solution deployment, the next step was to assimilate the knowledge for the business group who would be designing and managing the intervention program to reduce readmission risk. In this scenario, the business people translated the model results so that the clinical staff could understand how to identify high-risk patients and design suitable intervention actions. The goal, of course, was to reduce the likelihood that these patients would be readmitted within 30 days after discharge. During the business requirements stage, the Intervention Program Director and her team had wanted an application that would provide automated, near real-time risk assessments of congestive heart failure. It also had to be easy for clinical staff to use, and preferably through browser-based application on a tablet, that each staff member could carry around.

This patient data was generated throughout the hospital stay. It would be automatically prepared in a format needed by the model and each patient would be scored near the time of discharge. Clinicians would then have the most up-to-date risk assessment for each patient, helping them to select which patients to target for intervention after discharge. As part of solution deployment, the Intervention team would develop and deliver training for the clinical staff. Also, processes for tracking and monitoring patients receiving the intervention would have to be developed in collaboration with IT developers and database administrators, so that the results could go through the feedback stage and the model could be refined over time.

This map is an example of a solution deployed through a Cognos application. In this case, the case study was hospitalization risk for patients with juvenile diabetes. Like the congestive heart failure use case, this one used decision tree classification to create a risk model that would serve as the foundation for this application. The map gives an overview of hospitalization risk nationwide, with an interactive analysis of predicted risk by a variety of patient conditions and other characteristics. This slide shows an interactive summary report of risk by patient population within a given node of the model, so that clinicians could understand the combination of conditions for this subgroup of patients.

And this report gives a detailed summary on an individual patient, including the patient's predicted risk and details about the clinical history, giving a concise summary for the doctor. This ends the Deployment section of this course. Thanks for watching!

</details>
