# Modeling - Case Study

## 개요
- 강좌: Data Science Methodology
- 모듈: From Understanding to Preparation and From Modeling to Evaluation
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-science-methodology/lecture/lYg8t/modeling-case-study)
- 모델링은 데이터 과학 방법론의 한 단계로, 데이터 과학자가 소스를 샘플링하여 소스가 잘 어울리는지 아니면 양념이 더 필요한지 판단할 기회를 갖게 됩니다!
- 이제 사례 연구를 데이터 과학 방법론 내 모델링 단계에 적용해 보겠습니다.

## 내용
### 핵심 내용
- 모델링은 데이터 과학 방법론의 한 단계로, 데이터 과학자가 소스를 샘플링하여 소스가 잘 어울리는지 아니면 양념이 더 필요한지 판단할 기회를 갖게 됩니다!
- 이제 사례 연구를 데이터 과학 방법론 내 모델링 단계에 적용해 보겠습니다.
- 준비된 훈련 세트를 사용하면 울혈성 심부전 재입원을 위한 최초의 의사결정 트리 분류 모델을 구축할 수 있습니다.
- 의사결정 트리 분류의 경우 조정하기에 가장 좋은 매개변수는 잘못 분류된 예 및 아니오 결과의 상대적 비용입니다.
- 올바른 재입원 금지 명령을 잘못 분류하여 해당 환자의 위험을 줄이기 위한 조치를 취하면 이러한 오류로 인한 대가는 결국 개입 낭비가 됩니다.
- 그러나 진정한 재입원이 잘못 분류되고 그 위험을 줄이기 위한 어떠한 조치도 취하지 않을 경우, 그 오류로 인한 비용은 재입원과 그에 따른 모든 참석 비용, 그리고 환자에게 가해진 외상입니다.

### 한국어 Transcript

모델링에서 평가 모델링까지 - 사례 연구까지 데이터 과학 방법론 101에 오신 것을 환영합니다! 모델링은 데이터 과학 방법론의 한 단계로, 데이터 과학자가 소스를 샘플링하여 소스가 잘 어울리는지 아니면 양념이 더 필요한지 판단할 기회를 갖게 됩니다! 이제 사례 연구를 데이터 과학 방법론 내 모델링 단계에 적용해 보겠습니다. 여기서는 모델 구축의 여러 측면 중 하나에 대해 설명하겠습니다. 이 경우에는 모델을 개선하기 위한 파라미터 조정입니다.

준비된 훈련 세트를 사용하면 울혈성 심부전 재입원을 위한 최초의 의사결정 트리 분류 모델을 구축할 수 있습니다. 저희는 고위험 재입원 환자를 찾고 있습니다. 따라서 관심 결과는 울혈성 심부전 재입원이 “예”와 같을 것입니다. 이 첫 번째 모형에서는 예 및 아니오 결과를 분류한 전체 정확도가 85% 였습니다. 좋게 들리지만 “예”의 45% 에 불과합니다.

실제 재입학 여부는 정확하게 분류되어 있는데, 이는 모델이 그다지 정확하지 않다는 것을 의미합니다. 예스 결과를 예측할 때 모형의 정확도를 어떻게 개선할 수 있을까요? 의사결정 트리 분류의 경우 조정하기에 가장 좋은 매개변수는 잘못 분류된 예 및 아니오 결과의 상대적 비용입니다. 올바른 재입원 금지 명령을 잘못 분류하여 해당 환자의 위험을 줄이기 위한 조치를 취하면 이러한 오류로 인한 대가는 결국 개입 낭비가 됩니다. 통계학자는 이를 제1종 오류 또는 오양성이라고 부릅니다.

그러나 진정한 재입원이 잘못 분류되고 그 위험을 줄이기 위한 어떠한 조치도 취하지 않을 경우, 그 오류로 인한 비용은 재입원과 그에 따른 모든 참석 비용, 그리고 환자에게 가해진 외상입니다. 이는 제2종 오류이거나 위음성입니다. 따라서 서로 다른 두 종류의 오분류 오류로 인한 비용이 상당히 다를 수 있다는 것을 알 수 있습니다. 따라서 예와 아니오 결과를 잘못 분류할 경우의 상대적 가중치를 조정하는 것이 합리적입니다. 기본값은 일대일이지만 의사 결정 트리 알고리즘에서는 yes에 더 높은 값을 설정할 수 있습니다.

두 번째 모델의 경우 상대 비용이 9대 1로 설정되었습니다. 이 비율은 매우 높지만 모델의 동작을 더 잘 파악할 수 있습니다. 이번에는 모델이 '예'의 97% 를 올바르게 분류했지만 '아니오'의 정확도는 매우 낮아 전체 정확도는 49% 에 불과했습니다. 이 모델은 분명히 좋은 모델이 아니었습니다. 이 결과의 문제점은 잘못된 양성이 많다는 것인데, 이는 어차피 재입원을 하지 않았을 환자들에게 불필요하고 비용이 많이 드는 중재를 권유하게 될 것입니다.

따라서 데이터 과학자는 '예'와 '아니오'의 정확성 사이에서 더 나은 균형을 찾기 위해 다시 시도해야 합니다. 세 번째 모델의 경우 상대 비용이 더 합리적인 4대 1로 설정되었습니다. 이번에는 통계학자가 민감도라고 부르는 예에서만 68% 의 정확도를 얻었고 , 특이성이라고 하는 아니오에 대해서는 85% 의 정확도를 얻었으며 전체 정확도는 81% 였습니다. 이것은 잘못 분류된 예 및 아니오 결과 매개변수의 상대적 비용을 조정함으로써 비교적 작은 교육 세트로도 얻을 수 있는 최상의 균형입니다. 물론 모델링에는 훨씬 더 많은 작업이 필요합니다.

여기에는 데이터 준비 단계로 되돌아가 다른 변수를 재정의하여 기본 정보를 더 잘 표현하고 모델을 개선하는 등 훨씬 더 많은 작업이 필요합니다. 이것으로 데이터 과학 방법론 내 모델링 단계에 사례 연구를 적용해 본 교육 과정의 모델링 섹션을 마치겠습니다.

## 예시
- 모델링에서 평가 모델링까지 - 사례 연구까지 데이터 과학 방법론 101에 오신 것을 환영합니다!
- 이제 사례 연구를 데이터 과학 방법론 내 모델링 단계에 적용해 보겠습니다.
- 올바른 재입원 금지 명령을 잘못 분류하여 해당 환자의 위험을 줄이기 위한 조치를 취하면 이러한 오류로 인한 대가는 결국 개입 낭비가 됩니다.
- 이것으로 데이터 과학 방법론 내 모델링 단계에 사례 연구를 적용해 본 교육 과정의 모델링 섹션을 마치겠습니다.

## 요약
- 의사결정 트리 분류의 경우 조정하기에 가장 좋은 매개변수는 잘못 분류된 예 및 아니오 결과의 상대적 비용입니다.
- 올바른 재입원 금지 명령을 잘못 분류하여 해당 환자의 위험을 줄이기 위한 조치를 취하면 이러한 오류로 인한 대가는 결국 개입 낭비가 됩니다.
- 그러나 진정한 재입원이 잘못 분류되고 그 위험을 줄이기 위한 어떠한 조치도 취하지 않을 경우, 그 오류로 인한 비용은 재입원과 그에 따른 모든 참석 비용, 그리고 환자에게 가해진 외상입니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Data Science Methodology 101 From Modeling to Evaluation Modeling - Case Study! Modelling is the stage in the data science methodology where the data scientist has the chance to sample the sauce and determine if it's bang on or in need of more seasoning! Now, let's apply the case study to the modeling stage within the data science methodology. Here, we'll discuss one of the many aspects of model building, in this case, parameter tuning to improve the model. With a prepared training set, the first decision tree classification model for congestive heart failure readmission can be built.

We are looking for patients with high-risk readmission, so the outcome of interest will be congestive heart failure readmission equals "yes". In this first model, overall accuracy in classifying the yes and no outcomes was 85%. This sounds good, but it represents only 45% of the "yes". The actual readmissions are correctly classified, meaning that the model is not very accurate. The question then becomes: How could the accuracy of the model be improved in predicting the yes outcome?

For decision tree classification, the best parameter to adjust is the relative cost of misclassified yes and no outcomes. Think of it like this: When a true, non-readmission is misclassified, and action is taken to reduce that patient's risk, the cost of that error is the wasted intervention. A statistician calls this a type I error, or a false-positive. But when a true readmission is misclassified, and no action is taken to reduce that risk, then the cost of that error is the readmission and all its attended costs, plus the trauma to the patient. This is a type II error, or a false-negative.

So we can see that the costs of the two different kinds of misclassification errors can be quite different. For this reason, it's reasonable to adjust the relative weights of misclassifying the yes and no outcomes. The default is 1-to-1, but the decision tree algorithm, allows the setting of a higher value for yes. For the second model, the relative cost was set at 9-to-1. This is a very high ratio, but gives more insight to the model's behaviour.

This time the model correctly classified 97% of the yes, but at the expense of a very low accuracy on the no, with an overall accuracy of only 49%. This was clearly not a good model. The problem with this outcome is the large number of false-positives, which would recommend unnecessary and costly intervention for patients, who would not have been re-admitted anyway. Therefore, the data scientist needs to try again to find a better balance between the yes and no accuracies. For the third model, the relative cost was set at a more reasonable 4-to-1.

This time 68% accuracy was obtained on only yes, called sensitivity by statisticians, and 85% accuracy on the no, called specificity, with an overall accuracy of 81%. This is the best balance that can be obtained with a rather small training set through adjusting the relative cost of misclassified yes and no outcomes parameter. A lot more work goes into the modeling, of course, including iterating back to the data preparation stage to redefine some of the other variables, so as to better represent the underlying information, and thereby improve the model. This concludes the Modeling section of the course, in which we applied the Case Study to the modeling stage within the data science methodology. Thanks for watching!

</details>
