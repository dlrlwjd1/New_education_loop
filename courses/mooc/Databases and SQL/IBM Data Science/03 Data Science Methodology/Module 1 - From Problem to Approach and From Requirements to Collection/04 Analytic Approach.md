# Analytic Approach

## 개요
- 강좌: Data Science Methodology
- 모듈: From Problem to Approach and From Requirements to Collection
- 재생 시간: 3분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-science-methodology/lecture/q0bLC/analytic-approach)
- 올바른 분석 접근법을 선택하는 것은 질문의 내용에 따라 달라집니다.
- 이 접근 방식에는 질문을 하는 사람의 설명을 구하는 것이 포함됩니다, 가장 적절한 경로나 접근 방식을 선택할 수 있습니다.

## 내용
### 핵심 내용
- 올바른 분석 접근법을 선택하는 것은 질문의 내용에 따라 달라집니다.
- 이 접근 방식에는 질문을 하는 사람의 설명을 구하는 것이 포함됩니다, 가장 적절한 경로나 접근 방식을 선택할 수 있습니다.
- 해결해야 할 문제가 정의되면, 그 문제에 대한 적절한 분석 접근 방식이 비즈니스 요구 사항의 맥락에서 문제에 대한 적절한 분석 접근 방식을 선택합니다.
- 문제에 대한 명확한 이해가 확립되면 분석 접근 방식을 선택할 수 있습니다.
- 의사 결정 트리 분류 모델은 데이터 과학자가 아닌 사람도 쉽게 이해하고 적용할 수 있습니다 적용하여 신규 환자의 재입원 위험에 대한 점수를 매길 수 있습니다.
- 이러한 이유로 의사 결정 트리 분류 접근 방식이 울혈성 심부전 재입원 모델 구축에 선택되었습니다.

### 한국어 Transcript

데이터 과학 방법론 101 문제에서 접근 방식까지 분석 접근 방식에 오신 것을 환영합니다! 올바른 분석 접근법을 선택하는 것은 질문의 내용에 따라 달라집니다. 이 접근 방식에는 질문을 하는 사람의 설명을 구하는 것이 포함됩니다, 가장 적절한 경로나 접근 방식을 선택할 수 있습니다. 이 동영상에서는 데이터 과학 방법론의 두 번째 단계가 어떻게 적용되는지 살펴봅니다. 해결해야 할 문제가 정의되면, 그 문제에 대한 적절한 분석 접근 방식이 비즈니스 요구 사항의 맥락에서 문제에 대한 적절한 분석 접근 방식을 선택합니다.

이것이 데이터 과학 방법론의 두 번째 단계입니다. 문제에 대한 명확한 이해가 확립되면 분석 접근 방식을 선택할 수 있습니다. 즉, 문제를 가장 효과적으로 해결하기 위해 어떤 유형의 패턴이 필요한지 파악해야 합니다 어떤 유형의 패턴이 필요한지 파악하는 것을 의미합니다. 질문이 어떤 행동의 확률을 결정하는 것이라면, 예측 모델을 을 사용할 수 있습니다. 관계를 보여주는 것이 질문이라면 설명적 접근 방식이 필요할 수 있습니다.

이는 이벤트와 선호도를 기반으로 유사한 활동의 클러스터를 살펴보는 접근 방식이 될 수 있습니다 선호도. 통계 분석은 숫자가 필요한 문제에 적용됩니다. 예를 들어 질문에 예/아니요로 답해야 하는 경우, 응답을 예측하기 위한 분류 접근법 을 사용하여 응답을 예측하는 것이 적합합니다. 머신 러닝은 컴퓨터에게 명시적으로 프로그래밍하지 않고도 학습할 수 있는 능력을 부여하는 학문 분야입니다. 머신 러닝을 사용하면 다른 방법으로는 접근하거나 식별할 수 없는 데이터의 관계와 추세를 파악하는 데 사용할 수 있습니다.

인간의 행동에 대해 학습하는 것이 문제인 경우, 적절한 대응은 클러스터링 연관 접근법을 사용하는 것이 적절할 것입니다. 이제 분석 접근법 적용과 관련된 사례 연구를 살펴보겠습니다. 이 사례 연구에서는 의사 결정 트리 분류 모델을 사용하여 각 환자의 상태를 유발하는 조건의 조합을 조건의 조합을 식별하는 데 사용되었습니다. 이 접근 방식에서는 각 경로를 따라 각 노드에 있는 변수를 조사하여 리프에 이르는 각 경로를 따라 각 노드의 변수를 조사하면 각각의 임계값이 도출됩니다. 즉, 의사 결정 트리 분류기는 예측된 결과뿐만 아니라 해당 결과가 발생할 각 그룹에서 예 또는 아니요라는 지배적인 결과의 비율에 따라 해당 결과의 가능성도 제공합니다 그룹.

분석가는 이 정보를 통해 재입원 위험, 즉 각 환자에 대한 가능성을 얻을 수 있습니다. 지배적인 결과가 '예'인 경우 위험도는 는 단순히 리프에서 '예' 환자의 비율입니다. '아니오'인 경우 위험은 리프에서 '아니오' 환자의 비율을 뺀 1입니다. 의사 결정 트리 분류 모델은 데이터 과학자가 아닌 사람도 쉽게 이해하고 적용할 수 있습니다 적용하여 신규 환자의 재입원 위험에 대한 점수를 매길 수 있습니다. 임상의는 어떤 조건으로 인해 환자가 고위험군으로 분류되는지 쉽게 확인할 수 있습니다 여러 모델을 구축하여 입원 기간 중 다양한 시점에 적용할 수 있습니다.

이를 통해 환자의 위험도와 다양한 치료법에 따라 환자의 위험이 어떻게 변화하고 있는지 치료가 적용되면서 환자의 위험도가 어떻게 변화하고 있는지를 보여줍니다. 이러한 이유로 의사 결정 트리 분류 접근 방식이 울혈성 심부전 재입원 모델 구축에 선택되었습니다. 이것으로 이 과정의 분석 접근법 섹션을 마칩니다.

## 예시
- 예를 들어 질문에 예/아니요로 답해야 하는 경우, 응답을 예측하기 위한 분류 접근법 을 사용하여 응답을 예측하는 것이 적합합니다.
- 이제 분석 접근법 적용과 관련된 사례 연구를 살펴보겠습니다.
- 이 사례 연구에서는 의사 결정 트리 분류 모델을 사용하여 각 환자의 상태를 유발하는 조건의 조합을 조건의 조합을 식별하는 데 사용되었습니다.

## 요약
- 문제에 대한 명확한 이해가 확립되면 분석 접근 방식을 선택할 수 있습니다.
- 의사 결정 트리 분류 모델은 데이터 과학자가 아닌 사람도 쉽게 이해하고 적용할 수 있습니다 적용하여 신규 환자의 재입원 위험에 대한 점수를 매길 수 있습니다.
- 이러한 이유로 의사 결정 트리 분류 접근 방식이 울혈성 심부전 재입원 모델 구축에 선택되었습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Data Science Methodology 101 From problem to approach Analytic Approach! Selecting the right analytic approach depends on the question being asked. The approach involves seeking clarification from the person who is asking the question, so as to be able to pick the most appropriate path or approach. In this video we'll see how the second stage of the data science methodology is applied. Once the problem to be addressed is defined, the appropriate analytic approach for the problem is selected in the context of the business requirements.

This is the second stage of the data science methodology. Once a strong understanding of the question is established, the analytic approach can be selected. This means identifying what type of patterns will be needed to address the question most effectively. If the question is to determine probabilities of an action, then a predictive model might be used. If the question is to show relationships, a descriptive approach maybe be required.

This would be one that would look at clusters of similar activities based on events and preferences. Statistical analysis applies to problems that require counts. For example if the question requires a yes/ no answer, then a classification approach to predicting a response would be suitable. Machine Learning is a field of study that gives computers the ability to learn without being explicitly programmed. Machine Learning can be used to identify relationships and trends in data that might otherwise not be accessible or identified.

In the case where the question is to learn about human behaviour, then an appropriate response would be to use Clustering Association approaches. So now, let's look at the case study related to applying Analytic Approach. For the case study, a decision tree classification model was used to identify the combination of conditions leading to each patient's outcome. In this approach, examining the variables in each of the nodes along each path to a leaf, led to a respective threshold value. This means the decision tree classifier provides both the predicted outcome, as well as the likelihood of that outcome, based on the proportion at the dominant outcome, yes or no, in each group.

From this information, the analysts can obtain the readmission risk, or the likelihood of a yes for each patient. If the dominant outcome is yes, then the risk is simply the proportion of yes patients in the leaf. If it is no, then the risk is 1 minus the proportion of no patients in the leaf. A decision tree classification model is easy for non-data scientists to understand and apply, to score new patients for their risk of readmission. Clinicians can readily see what conditions are causing a patient to be scored as high-risk and multiple models can be built and applied at various points during hospital stay.

This gives a moving picture of the patient's risk and how it is evolving with the various treatments being applied. For these reasons, the decision tree classification approach was chosen for building the Congestive Heart Failure readmission model. This ends the Analytic Approach section for this course. Thanks for watching!

</details>
