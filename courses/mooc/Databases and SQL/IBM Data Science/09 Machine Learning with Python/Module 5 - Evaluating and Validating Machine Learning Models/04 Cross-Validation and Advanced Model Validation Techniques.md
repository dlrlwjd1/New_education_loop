# Cross-Validation and Advanced Model Validation Techniques

## 개요
- 강좌: Machine Learning with Python
- 모듈: Evaluating and Validating Machine Learning Models
- 재생 시간: 6분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/f5VM7/cross-validation-and-advanced-model-validation-techniques)
- 이 비디오를 시청한 후 모델 검증을 정의할 수 있습니다.
- 또한 데이터 스누핑이 무엇이고 이를 방지하는 방법도 설명할 수 있습니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후 모델 검증을 정의할 수 있습니다.
- 또한 데이터 스누핑이 무엇이고 이를 방지하는 방법도 설명할 수 있습니다.
- 검증이란 훈련 데이터를 기반으로 모델을 조정하고, 제대로 훈련되었다고 만족한 후에만 보이지 않는 테스트 데이터에 대해 모델을 테스트하는 것을 의미합니다.
- 모델 학습 및 검증 후 최종 평가에 사용되는 보이지 않는 데이터를 보류하는 테스트 세트입니다.
- 이 비디오에서는 모델 검증이 하이퍼파라미터를 조정하여 최상의 모델 구성을 선택할 때 과적합을 방지하는 데 도움이 된다는 것을 배웠습니다.
- 모델 검증에는 데이터를 훈련 세트, 검증 세트, 테스트 세트로 나누는 작업이 포함됩니다.

### 한국어 Transcript

교차 검증 및 고급 모델 검증 기법에 오신 것을 환영합니다. 이 비디오를 시청한 후 모델 검증을 정의할 수 있습니다. 또한 데이터 스누핑이 무엇이고 이를 방지하는 방법도 설명할 수 있습니다. 마지막으로 모델 검증을 위한 주요 전략에 대해 논의할 수 있습니다. 모델 검증의 핵심은 보이지 않는 데이터를 제대로 예측하는 능력을 손상시키지 않으면서 모델을 최적화하기 위해 최선을 다하는 것입니다.

하이퍼파라미터를 조정하여 최상의 모델 구성을 선택할 때 과적합을 방지하는 데 도움이 됩니다. 데이터 세트를 두 부분으로 나누는 기본 학습 또는 테스트 분할 평가 방법을 고려해 보십시오. 훈련 세트는 모델을 훈련하는 데 사용되고, 테스트 세트는 보이지 않는 데이터의 결과를 예측하는 모델의 능력을 평가하거나 추정하는 데 사용됩니다. 대부분의 머신러닝 모델에는 모델 하이퍼파라미터라고 하는 선택적 파라미터 설정이 있으며, 이는 모델을 훈련하는 데 사용되는 데이터에 얼마나 잘 맞는지에 영향을 줍니다. 모델에 대해 다른 하이퍼파라미터를 시도한 다음 테스트 데이터에서 가장 성능이 좋은 것을 선택하면 어떻게 될까요?

모델을 학습 데이터가 아닌 테스트 데이터에 효과적으로 맞출 수 있지 않을까요? 이로 인해 과적합이 발생할 수 있습니다. 모델이 보이지 않는 데이터를 제대로 일반화하지 못해 무효화될 가능성이 높습니다. 모델 최적화를 완료하기 전에 테스트 데이터의 성능을 확인하는 것을 데이터 스누핑이라고 하며, 이를 데이터 유출이라고 합니다. 모델이 테스트 데이터에 과적합되지 않도록 모델을 검증하려면 어떻게 해야 할까요?

최종 평가에서 모델 튜닝을 분리해야 합니다. 검증이란 훈련 데이터를 기반으로 모델을 조정하고, 제대로 훈련되었다고 만족한 후에만 보이지 않는 테스트 데이터에 대해 모델을 테스트하는 것을 의미합니다. 다음은 데이터를 최소 세 부분으로 나누는 모델 검증 전략입니다. 하이퍼파라미터 최적화를 포함하여 모델을 훈련하는 데 사용되는 훈련 세트입니다. 모델 최적화 프로세스 중에 머신러닝 모델의 성능을 평가하는 데 사용되는 하나 이상의 검증 세트 또는 교육 데이터의 하위 집합입니다.

모델 학습 및 검증 후 최종 평가에 사용되는 보이지 않는 데이터를 보류하는 테스트 세트입니다. 교차 검증을 통해 하이퍼파라미터 조정이 가능합니다. 다음은 모델 조정 및 검증을 위한 교차 검증 알고리즘입니다. 데이터를 훈련 데이터와 테스트 데이터로 분할합니다. 훈련 데이터를 훈련 세트와 검증 세트로 더 분할합니다.

훈련 세트에서 모델을 반복적으로 훈련시키고 검증 세트에서 모델의 성능을 측정하여 모델의 하이퍼파라미터를 최적화합니다. 최상의 하이퍼파라미터 세트를 선택하고 전혀 보이지 않는 테스트 데이터에서 결과로 나온 최상의 모델을 평가하십시오. 이제 검증된 모형과 보이지 않는 새로운 데이터에 대해 모델이 얼마나 잘 일반화될지 추정할 수 있습니다. 특정한 단일 검증 세트를 선택할 때 발생할 수 있는 몇 가지 잠재적 검증 문제가 있습니다. 모델이 이 특정 데이터 세트에 과적합되었을 수 있습니다.

모델에 학습할 데이터가 많이 필요한 경우 검증 및 테스트에 사용할 데이터가 충분하지 않을 수 있습니다. 즉, 훈련 및 검증 데이터가 표본 모집단을 대표하지 않을 수 있습니다. 모델이 이 특정 세트의 노이즈와 같은 세부 정보를 학습하고 있지 않을 수 있습니다. 모델의 성능이 여러 검증 세트에서 안정적이지 않을 수 있습니다. 모델의 하이퍼파라미터를 최적화하면서 테스트 데이터의 과적합을 방지하는 솔루션은 몇 가지 주요 단계로 구성됩니다.

데이터를 K개의 동일한 크기의 폴드로 나누어 검증 하위 집합으로 사용합니다. 각 시험 모델 또는 하이퍼파라미터 세트에 대해, 그리고 각 폴드에 대해 나머지 K 마이너스 1 폴드에서 모델을 훈련시킵니다. 선택한 폴드에서 모델을 테스트하고 이 모델의 점수를 저장합니다. 전체 폴드의 집계 점수를 계산합니다. 최상의 모형으로 이어진 하이퍼파라미터 세트를 선택합니다.

모든 데이터 포인트가 학습과 검증에 모두 사용되므로 보유한 데이터의 활용도가 크게 높아집니다. K-겹 교차 검증 (일반적으로 5~10배) 은 보이지 않는 실제 데이터에 대한 모델의 일반화 가능성을 추정하기 위한 보다 강력한 기법을 제공합니다. 검증 세트를 변경하면 여러 가지 이점이 있습니다. 그러면 모델이 학습하고 테스트하는 데 사용할 데이터가 크게 늘어납니다. 선택한 훈련 하위 집합과 관련된 불필요한 세부 사항을 제거하므로 과적합을 줄일 수 있습니다.

따라서 모델이 보이지 않는 데이터에 얼마나 잘 일반화되는지 평가하는 능력이 향상됩니다. 분류 문제의 경우 한 클래스에는 관측치가 많고 다른 클래스에는 관측치가 거의 없을 수 있습니다. 이는 불균형한 분류 문제를 다루고 있음을 의미합니다. 계층화된 교차 검증은 각 검증 단계에서 클래스 분포를 보존하여 평가 프로세스의 편향을 방지합니다. 회귀 문제의 불균형 데이터와 비슷한 점은 목표값이 심하게 치우쳐 있는 경우입니다.

많은 모형에서는 목표값이 정규 분포를 따른다고 가정합니다. 다행히 로그 변환 또는 박스콕스 변환과 같은 방법을 사용하여 대상 변수를 변환하여 왜도를 줄이고 변환된 대상에 모델을 맞출 수 있습니다. 왼쪽의 히스토그램에 표시된 것처럼 치우친 목표 변수의 예를 생각해 보십시오. 목표값이 낮을수록 높은 값보다 빈도가 훨씬 높습니다. 다른 두 히스토그램은 대상 데이터의 box-cox 및 로그 변환의 분포를 보여줍니다.

두 변환 모두 왜도를 크게 줄입니다. 선형 회귀가 목표 변수의 각 표현에 얼마나 잘 맞는지 관찰해 보십시오. 이 비디오에서는 모델 검증이 하이퍼파라미터를 조정하여 최상의 모델 구성을 선택할 때 과적합을 방지하는 데 도움이 된다는 것을 배웠습니다. 모델 최적화를 완료하기 전에 테스트 데이터의 성능을 확인하는 것을 데이터 스누핑이라고 합니다. 모델 검증에는 데이터를 훈련 세트, 검증 세트, 테스트 세트로 나누는 작업이 포함됩니다.

교차 검증을 통해 하이퍼파라미터 조정이 가능합니다. 모델의 하이퍼파라미터를 최적화하면서 테스트 데이터를 과대적합하지 않도록 하는 해결책은 K-fold 교차 검증입니다. 계층화된 교차 검증을 통해 각 검증 단계에서 클래스 분포를 보존하여 편향을 방지할 수 있습니다.

## 예시
- 이 강의는 개념 설명 중심이며 Transcript에서 독립된 예시를 확인하기 어렵다.

## 요약
- 모델 학습 및 검증 후 최종 평가에 사용되는 보이지 않는 데이터를 보류하는 테스트 세트입니다.
- 이 비디오에서는 모델 검증이 하이퍼파라미터를 조정하여 최상의 모델 구성을 선택할 때 과적합을 방지하는 데 도움이 된다는 것을 배웠습니다.
- 모델 검증에는 데이터를 훈련 세트, 검증 세트, 테스트 세트로 나누는 작업이 포함됩니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Cross-Validation and Advanced Model Validation Techniques. After watching this video, you will be able to define model validation. You will also be able to explain what data snooping is and how to avoid it. Finally, you will be able to discuss key strategies for model validation. Model validation is all about doing your best to optimize your model without jeopardizing its ability to predict well on unseen data.

It helps you prevent overfitting when selecting the best model configuration by tuning hyperparameters. Consider the basic train or test-split evaluation method, where the data set is split into two parts. A training set is used to train the model, and a test set is used to evaluate or estimate the model's ability to predict outcomes from unseen data. Most machine learning models have optional parameter settings, called model hyperparameters, that affect how well the model fits the data used to train it. What if you tried different hyperparameters for your model, and then chose the one that performed best on the testing data?

Wouldn't you effectively fit the model to the testing data, not the training data? This would result in overfitting. Your model likely wouldn't generalize well to unseen data, invalidating it. Checking performance on the test data before you are done optimizing your model is called data snooping, a form of what's known as data leakage. What can you do to validate your model to ensure it doesn't overfit itself to your test data?

You need to decouple model tuning from the final evaluation. Validation means tuning your model on the training data, but only testing it on unseen test data once you are satisfied that it is well trained. There is no snooping involved. Here is a model validation strategy that involves segmenting your data into at least three parts. A training set, which is used to train the model, including optimizing its hyperparameters.

One or more validation sets or subsets of the training data used during the model optimization process to evaluate a machine learning model's performance. A test set that is held back, unseen data used for final evaluation after model training and validation. Cross-validation enables hyperparameter tuning. Here is the cross-validation algorithm for model tuning and validation. Split your data into training data and testing data.

Further split your training data into a training set and a validation set. Optimize your model's hyperparameters by repeatedly training it on the training set and measuring its performance on the validation set. Choose your best set of hyperparameters and evaluate your resulting best model on your completely unseen testing data. You now have a validated model and an estimate of how well it will generalize on new unseen data. Some potential validation problems reside in selecting a single, specific validation set.

Your model could be overfitting to this specific data set. If your model needs a lot of data to train on, you may not have enough data left over for validation and testing purposes. This means your training and validation data might not be representative of the sample population. Your model may not be learning details, like noise on this particular set. Your model's performance may not be stable across different validation sets.

A solution to avoid overfitting your test data while trying to optimize the model's hyperparameters consists of a few key steps. Divide your data into K equal-sized folds to be used as validation subsets. For each trial model or set of hyperparameters, and for each fold, train a model on the remaining K minus 1 folds. Test the model on the selected fold and store this model's score. Compute an aggregated score of overall folds.

Select the set of hyperparameters that led to the best model. Notice that every data point is used both for training and validation, greatly increasing the utilization of the data you have on hand. K-fold cross-validation, typically 5- to 10-fold, provides a more robust technique for estimating your model's generalizability to unseen real-world data. Varying the validation set has several benefits. It greatly increases the data on which the model trains and tests.

It reduces overfitting because it smooths out unwanted details that are particular to a chosen training subset. Consequently, it improves your ability to evaluate how well your model will generalize to unseen data. In classification problems, you might have many observations in one class and very few in another. It means you are dealing with an imbalanced classification problem. Stratified cross-validation ensures that the class distribution is preserved in each validation fold, preventing bias in the evaluation process.

The analog to imbalanced data in regression problems is when your target is highly skewed. Many models assume your target is normally distributed. Fortunately, you can transform your target variable using methods like log- or box-cox transforms to reduce the skewness and fit your model to the transformed target. Consider an example of a skewed target variable, as depicted by the histogram on the left. Lower target values have a much higher frequency than higher values.

The other two histograms illustrate the distributions of box-cox and logarithmic transforms of the target data. Both transforms significantly reduce the skewness. Observe how well linear regression can fit each of these representations of the target variable. In this video, you learned: that model validation helps you prevent overfitting when selecting the best model configuration by tuning hyperparameters. Checking performance on the test data before you are done optimizing your model is called data snooping.

Model validation involves dividing data into training set, validation set, and test set. Cross-validation enables hyperparameter tuning. A solution to avoid overfitting your test data while trying to optimize the model's hyperparameters is K-fold cross-validation. Stratified cross-validation ensures that the class distribution is preserved in each validation fold, preventing bias.

</details>
