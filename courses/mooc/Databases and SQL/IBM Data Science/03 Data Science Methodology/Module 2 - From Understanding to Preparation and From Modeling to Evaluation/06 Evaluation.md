# Evaluation

## 개요
- 강좌: Data Science Methodology
- 모듈: From Understanding to Preparation and From Modeling to Evaluation
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-science-methodology/lecture/sXcpL/evaluation)
- 모델 평가는 모델 구축과 함께 진행되므로 모델링 및 평가 단계가 반복적으로 수행됩니다.
- 모델 평가는 모델 개발 중 및 모델 배포 전에 수행됩니다.

## 내용
### 핵심 내용
- 모델 평가는 모델 구축과 함께 진행되므로 모델링 및 평가 단계가 반복적으로 수행됩니다.
- 모델 평가는 모델 개발 중 및 모델 배포 전에 수행됩니다.
- 모델 평가는 크게 두 단계로 나눌 수 있습니다.
- 모델이 예측 모델인 경우 의사 결정 트리를 사용하여 모델이 출력할 수 있는 답이 초기 설계와 일치하는지 평가할 수 있습니다.
- 이러한 유형의 평가를 모델에 적용하여 모델 내에서 데이터가 적절하게 처리되고 해석되고 있는지 확인할 수 있습니다.
- 4가지 모델 중에서 상대적 오분류 비용이 4대 1인 모델 3이 가장 좋은 모델임을 알 수 있습니다.

### 한국어 Transcript

모델링에서 평가 - 평가까지 데이터 과학 방법론 101에 오신 것을 환영합니다! 모델 평가는 모델 구축과 함께 진행되므로 모델링 및 평가 단계가 반복적으로 수행됩니다. 모델 평가는 모델 개발 중 및 모델 배포 전에 수행됩니다. 평가를 통해 모델의 품질을 평가할 수 있지만 초기 요청을 충족하는지 확인할 기회이기도 합니다. 평가를 통해 다음과 같은 질문에 답할 수 있습니다.

사용된 모델이 초기 질문에 실제로 답했는가 아니면 조정이 필요한가? 모델 평가는 크게 두 단계로 나눌 수 있습니다. 첫 번째는 모델이 의도한 대로 작동하는지 확인하는 데 사용되는 진단 조치 단계입니다. 모델이 예측 모델인 경우 의사 결정 트리를 사용하여 모델이 출력할 수 있는 답이 초기 설계와 일치하는지 평가할 수 있습니다. 이를 사용하여 조정이 필요한 영역이 어디인지 확인할 수 있습니다.

관계가 평가되는 설명 모델인 경우 결과가 알려진 테스트 세트를 적용하고 필요에 따라 모델을 개선할 수 있습니다. 사용할 수 있는 두 번째 평가 단계는 통계적 유의성 테스트입니다. 이러한 유형의 평가를 모델에 적용하여 모델 내에서 데이터가 적절하게 처리되고 해석되고 있는지 확인할 수 있습니다. 이는 답이 나왔을 때 불필요한 2차 추측을 하지 않도록 설계되었습니다. 이제 사례 연구로 돌아가 데이터 과학 방법론 내에서 “평가” 구성 요소를 적용할 수 있도록 해 보겠습니다.

모델 구축 시 파라미터 중 하나를 튜닝하는 것에 기반한 진단 방법을 통해 최적의 모델을 찾는 한 가지 방법을 살펴보겠습니다. 구체적으로 예와 아니오 결과를 잘못 분류할 때 발생하는 상대적 비용을 조정하는 방법을 알아보겠습니다. 이 표에서 볼 수 있듯이 상대적 오분류 비용을 4가지로 적용하여 네 가지 모델을 구축했습니다. 보시다시피, 이 모델 구축 매개변수의 각 값은 예 예측 정확도의 참양성률, 즉 민감도를 높이는 반면, 아니오 예측 정확도는 낮아집니다. 그러면 문제는 이 파라미터를 튜닝할 때 어떤 모델이 가장 적합한가라는 것입니다.

예산상의 이유로 대부분의 또는 모든 울혈성 심부전 환자에게 위험 감소 치료를 적용할 수 없었습니다. 이들 중 상당수는 어차피 재입원을 하지 않았을 것입니다. 반면, 대상인 고위험 울혈성 심부전 환자가 충분하지 않은 상황에서 이러한 개입은 환자 치료를 개선하는 데 필요한 만큼 효과적이지 않을 수 있습니다. 그렇다면 어떤 모델이 최적이었는지 어떻게 판단할 수 있을까요? 이 슬라이드에서 볼 수 있듯이, 최적 모델은 빨간색 기준선을 기준으로 파란색 ROC 곡선 사이의 간격을 최대화한 모델입니다.

4가지 모델 중에서 상대적 오분류 비용이 4대 1인 모델 3이 가장 좋은 모델임을 알 수 있습니다. 혹시 궁금하신 분들을 위해 말씀드리자면, ROC는 수신기 작동 특성 곡선의 약자입니다. 이 곡선은 제2차 세계대전 중에 레이더에서 적 항공기를 탐지하기 위해 처음 개발되었습니다. 이후 다른 많은 분야에서도 사용되고 있습니다. 오늘날에는 기계 학습 및 데이터 마이닝에 일반적으로 사용됩니다.

ROC 곡선은 최적의 분류 모델을 결정하는 데 유용한 진단 도구입니다. 이 곡선은 이진 분류 모델이 얼마나 잘 수행되는지를 정량화하여 일부 판별 기준이 다를 경우 예 및 아니오 결과를 분류 해제합니다. 이 경우 기준은 상대적 오분류 비용입니다. ROC 곡선은 상대적 오분류 비용의 여러 값에 대해 참양성률을 위양성률과 비교하여 도표화함으로써 최적 모형을 선택하는 데 도움이 되었습니다. 이것으로 이 과정의 평가 섹션을 마칩니다.

## 예시
- 이제 사례 연구로 돌아가 데이터 과학 방법론 내에서 “평가” 구성 요소를 적용할 수 있도록 해 보겠습니다.

## 요약
- 모델이 예측 모델인 경우 의사 결정 트리를 사용하여 모델이 출력할 수 있는 답이 초기 설계와 일치하는지 평가할 수 있습니다.
- 이러한 유형의 평가를 모델에 적용하여 모델 내에서 데이터가 적절하게 처리되고 해석되고 있는지 확인할 수 있습니다.
- 4가지 모델 중에서 상대적 오분류 비용이 4대 1인 모델 3이 가장 좋은 모델임을 알 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Data Science Methodology 101 From Modeling to Evaluation - Evaluation! A model evaluation goes hand-in-hand with model building as such, the modeling and evaluation stages are done iteratively. Model evaluation is performed during model development and before the model is deployed. Evaluation allows the quality of the model to be assessed but it's also an opportunity to see if it meets the initial request. Evaluation answers the question: Does the model used really answer the initial question or does it need to be adjusted?

Model evaluation can have two main phases. The first is the diagnostic measures phase, which is used to ensure the model is working as intended. If the model is a predictive model, a decision tree can be used to evaluate if the answer the model can output, is aligned to the initial design. It can be used to see where there are areas that require adjustments. If the model is a descriptive model, one in which relationships are being assessed, then a testing set with known outcomes can be applied, and the model can be refined as needed.

The second phase of evaluation that may be used is statistical significance testing. This type of evaluation can be applied to the model to ensure that the data is being properly handled and interpreted within the model. This is designed to avoid unnecessary second guessing when the answer is revealed. So now, let's go back to our case study so that we can apply the "Evaluation" component within the data science methodology. Let's look at one way to find the optimal model through a diagnostic measure based on tuning one of the parameters in model building.

Specifically we'll see how to tune the relative cost of misclassifying yes and no outcomes. As shown in this table, four models were built with four different relative misclassification costs. As we see, each value of this model-building parameter increases the true-positive rate, or sensitivity, of the accuracy in predicting yes, at the expense of lower accuracy in predicting no, that is, an increasing false-positive rate. The question then becomes, which model is best based on tuning this parameter? For budgetary reasons, the risk-reducing intervention could not be applied to most or all congestive heart failure patients, many of whom would not have been readmitted anyway.

On the other hand, the intervention would not be as effective in improving patient care as it should be, with not enough high-risk congestive heart failure patients targeted. So, how do we determine which model was optimal? As you can see on this slide, the optimal model is the one giving the maximum separation between the blue ROC curve relative to the red base line. We can see that model 3, with a relative misclassification cost of 4-to-1, is the best of the 4 models. And just in case you were wondering, ROC stands for receiver operating characteristic curve, which was first developed during World War II to detect enemy aircraft on radar.

It has since been used in many other fields as well. Today it is commonly used in machine learning and data mining. The ROC curve is a useful diagnostic tool in determining the optimal classification model. This curve quantifies how well a binary classification model performs, declassifying the yes and no outcomes when some discrimination criterion is varied. In this case, the criterion is a relative misclassification cost.

By plotting the true-positive rate against the false-positive rate for different values of the relative misclassification cost, the ROC curve helped in selecting the optimal model. This ends the Evaluation section of this course. Thanks for watching!

</details>
