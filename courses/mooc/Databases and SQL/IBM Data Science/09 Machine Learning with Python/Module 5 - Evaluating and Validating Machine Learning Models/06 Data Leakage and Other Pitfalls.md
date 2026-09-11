# Data Leakage and Other Pitfalls

## 개요
- 강좌: Machine Learning with Python
- 모듈: Evaluating and Validating Machine Learning Models
- 재생 시간: 7분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/F7M1N/data-leakage-and-other-pitfalls)
- 이 비디오를 시청한 후 데이터 유출을 정의하고 이를 완화하는 방법을 설명할 수 있습니다.
- 또한 특징의 중요도, 해석 및 기타 모델링 관련 함정에 대해서도 설명할 수 있습니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후 데이터 유출을 정의하고 이를 완화하는 방법을 설명할 수 있습니다.
- 또한 특징의 중요도, 해석 및 기타 모델링 관련 함정에 대해서도 설명할 수 있습니다.
- 먼저 데이터를 훈련 데이터 세트와 테스트 데이터 세트로 분할합니다.
- 데이터의 시점 순서가 중요한 시간적 데이터인 경우 데이터를 훈련 세트와 테스트 세트로 무작위로 분할하지 않는 것이 좋습니다.
- 대신 데이터를 순차적 훈련 세트와 테스트 세트로 분할하여 훈련 세트가 항상 테스트 세트 앞에 오도록 해야 합니다.
- 학습, 검증 및 테스트 세트 간의 중복이나 오염을 방지하고, 교차 검증을 신중하게 사용하고, 하이퍼파라미터 조정을 사용하여 실제 배포에 교육 기능을 사용할 수 있도록 함으로써 데이터 유출을 줄일 수 있습니다.

### 한국어 Transcript

데이터 유출 및 기타 위험에 오신 것을 환영합니다. 이 비디오를 시청한 후 데이터 유출을 정의하고 이를 완화하는 방법을 설명할 수 있습니다. 또한 특징의 중요도, 해석 및 기타 모델링 관련 함정에 대해서도 설명할 수 있습니다. 주택 가격을 예측하도록 모델을 훈련시키고 싶다고 상상해 보십시오. 평방피트와 같은 과거 데이터와 함께 전체 데이터세트에 대한 실제 주택 가격의 평균을 사용하여 기능을 설계합니다.

테스트 데이터에서 모델이 얼마나 잘 작동하는지 확인하게 되어 기쁩니다. 하지만 미래에서 유출되어 프로덕션 환경에서는 액세스할 수 없는 데이터를 사용하여 모델을 학습했습니다. 이 액세스 권한이 없으면 모델을 배포하는 것이 테스트 결과에서 생각했던 것만큼 잘 수행되지 않을 것입니다. 모델의 학습 데이터에 배포 후 보이지 않는 데이터와 같이 현실에서는 사용할 수 없는 정보가 포함되어 있을 때 데이터 유출이 발생합니다. 데이터 유출은 모델을 속여 학습 및 검증 과정에서 오해의 소지가 있을 정도로 좋은 성능을 발휘하게 합니다.

테스트 데이터세트에는 유출된 데이터도 포함되므로 모델을 프로덕션에 구현하기 전까지는 평가 결과 일반화 불량이 감지되지 않습니다. 데이터 스누핑은 훈련 세트에 테스트 세트에 대한 정보가 포함되어 있거나 모델이 액세스할 수 없어야 하는 데이터를 볼 때 발생합니다. 이는 결과를 예측할 때 내일의 주가와 같은 미래 정보를 포함하여 오늘의 주가를 예측할 때 발생할 수 있습니다. 전체 데이터세트를 사용하여 새로운 기능을 엔지니어링하는 동안에도 이러한 작업을 수행할 수 있습니다. 데이터 처리 파이프라인은 교육 및 테스트 데이터에서 독립적으로 실행되어야 합니다.

데이터 유출 위험을 줄이려면 학습 및 테스트 데이터를 신중하게 선택해야 합니다. 향후 데이터가 훈련 데이터에 유출되면 문제가 있는 것입니다. 어떤 완화 조치를 취할 수 있는지 살펴보겠습니다. 전체 데이터셋에서 파생된 글로벌 평균이나 기타 통계와 같은 기능은 피하세요. 교육, 검증 및 테스트 세트를 적절히 분리하여 중복이나 오염을 방지하십시오.

배포한 모델을 사용하여 실제 상황을 예측할 때는 기능에 사용할 수 없는 정보가 포함되어 있지 않은지 확인하세요. 교차 검증을 구현하는 방법에 주의를 기울여 여러 검증 단계에서 데이터가 유출되지 않도록 하세요. 이는 시간 종속 데이터를 사용할 때 특히 중요합니다. 이 경우 일반적인 훈련-테스트 분할 대신 시계열 분할을 사용해야 합니다. 교차 검증을 사용하여 모델의 하이퍼파라미터를 조정할 때 누수를 방지하려면 파이프라인을 각 훈련 폴드에 개별적으로 피팅하고 그 결과 피팅된 파이프라인을 해당 검증 폴드에 적용하십시오.

필수 라이브러리를 가져와서 데이터를 로드하고 이미 데이터 유출이 발생하지 않도록 예방 조치를 취했다고 가정하면 분류기를 훈련하기 위한 이 Python 코드를 고려해 보십시오. 먼저 데이터를 훈련 데이터 세트와 테스트 데이터 세트로 분할합니다. 이 예시에서는 이것이 데이터 세트에 유효한 방법이고 일시적 또는 기타 누출 오염이 발생하지 않는다고 가정해 보겠습니다. 그런 다음 스칼라, PCA, KNN 분류기의 세 가지 모델로 구성된 파이프라인을 정의합니다. 다음으로, 값 집합으로 구성된 파라미터 그리드를 설정하여 여러 PCA 구성 요소와 KNN의 인접 요소 수를 테스트합니다.

이제 교차 검증을 사용하여 그리드 검색을 수행하여 모델을 최적화하십시오. 여기서 중요한 점은 파이프라인이 그리드 검색에 입력된다는 것입니다. 이렇게 하면 파이프라인이 각 트레이닝 폴드와 해당 검증 세트에 개별적으로 적용됩니다. 최적의 파라미터를 찾은 후에는 보류한 첫 번째 세트에서 최종 모델을 평가하여 실제 모델 성능에 대한 편견 없는 추정치를 얻습니다. 데이터의 시점 순서가 중요한 시간적 데이터인 경우 데이터를 훈련 세트와 테스트 세트로 무작위로 분할하지 않는 것이 좋습니다.

대신 데이터를 순차적 훈련 세트와 테스트 세트로 분할하여 훈련 세트가 항상 테스트 세트 앞에 오도록 해야 합니다. 코드를 수정하여 시계열 교차 검증을 구현하는 것은 쉽습니다. 훈련-테스트 분할을 사용하는 대신 시계열 분할을 사용하고 grid-search-cv에서 CV를 TSCV와 같게 설정하여 하이퍼파라미터 조정 중에 이 교차 검증 방법을 사용하도록 지정합니다. 이 예제에서 Scikit-Learn의 시계열 분할은 데이터를 시간적 순서를 유지하면서 동일한 크기의 네 개의 폴드로 분할합니다. 각 분할은 과거 데이터의 일부를 훈련에 사용하고 나머지 미래 데이터를 검증에 사용합니다.

훈련 세트는 각 분할마다 더 많은 데이터를 포함하도록 확장되고 테스트 세트는 축소됩니다. 학습된 머신 러닝 모델이 제공하는 몇 가지 일반적인 함정을 식별하고 기능의 중요성을 평가하는 것은 필수적입니다. 모델링에 사용되는 특성이나 상관 관계가 높거나 중복되는 특성은 중요도를 공유하므로 그 영향이 현저히 낮아집니다. 또한 후속 모델링에서 사용할 가장 중요한 기능을 맹목적으로 선택하면 중요한 기능을 선택하면 결과가 저하될 수 있습니다. 선형 회귀와 같은 일부 알고리즘은 기능의 규모를 자연스럽게 고려하지 않아 숙련되지 않은 데이터로 인해 중요도 순위가 왜곡될 수 있습니다.

특징 중요도는 인과관계가 아니라 상관관계를 나타냅니다. 중요한 기능이 반드시 성과를 이끌어내는 것은 아닙니다. 일부 모델은 상호 작용을 고려하지 않고 개별 기능의 중요도에 순위를 매기며, 상호 작용이 결합된 영향을 과소평가하거나 과대평가할 수 있습니다. 예를 들어, 선형 회귀를 제대로 수행하기에 충분한 정보를 제공하지 않는 두 특성이 있다고 가정해 보겠습니다. 하지만 이들의 상호 작용이나 곱은 선형 회귀 성능을 향상시킵니다.

그러면 랜덤 포레스트 회귀와 같은 비선형 알고리즘이 이 상호 작용을 암시적으로 탐지하여 성능을 높일 수 있습니다. 선형 회귀의 경우 개별 특성이 중요하지 않은 것처럼 보일 수 있습니다. 동시에 랜덤 포레스트에서는 그 중요성이 공유되기 때문에 그들의 제품이 중요한 설명 변수라는 사실을 모를 것입니다. 다음은 고려해야 할 몇 가지 일반적인 모델링 함정입니다. 적절한 특징 선택이나 변환 없이 원시 데이터를 사용하면 최적의 모델을 찾을 수 없습니다.

잘못된 평가 지표를 선택하거나 지표를 잘못 해석하면 평가가 잘못될 수 있습니다. 클래스 불균형과 분류 문제를 해결하지 못하면 예측이 대다수 클래스로 편향됩니다. 자동화된 기계 학습 도구는 강력할 수 있지만 여전히 데이터와 시스템이 생성하는 모델을 이해해야 합니다. 모델에 목표 변수에 인과적 영향을 미치는 특징이 없는 경우 모델에서 생성된 가정 시나리오가 유효하지 않을 수 있다는 점을 이해하는 것이 중요합니다. 인과관계가 없는 경우 가상의 변화를 기반으로 한 모델의 예측은 오해의 소지가 크거나 부정확할 수 있습니다.

이 비디오에서는 모델의 학습 데이터에 실제 환경에서는 사용할 수 없는 정보나 배포 후 보이지 않는 데이터가 포함될 때 데이터 유출이 발생한다는 것을 배웠습니다. 학습, 검증 및 테스트 세트 간의 중복이나 오염을 방지하고, 교차 검증을 신중하게 사용하고, 하이퍼파라미터 조정을 사용하여 실제 배포에 교육 기능을 사용할 수 있도록 함으로써 데이터 유출을 줄일 수 있습니다. 학습된 머신러닝 모델이 제공하는 특징 중요도를 평가할 때 흔히 범하는 함정으로는 특징 중복성, 척도 민감도, 인과 관계 가정, 특징 상호 작용 간과가 있습니다. 다른 모델링 함정으로는 부적절한 특징 선택, 평가 메트릭의 잘못된 해석, 클래스 불균형 무시, 자동화에 대한 맹목적 의존, 비인과적 데이터를 기반으로 가정 시나리오 수행 등이 있습니다.

## 예시
- 필수 라이브러리를 가져와서 데이터를 로드하고 이미 데이터 유출이 발생하지 않도록 예방 조치를 취했다고 가정하면 분류기를 훈련하기 위한 이 Python 코드를 고려해 보십시오.
- 이 예시에서는 이것이 데이터 세트에 유효한 방법이고 일시적 또는 기타 누출 오염이 발생하지 않는다고 가정해 보겠습니다.
- 코드를 수정하여 시계열 교차 검증을 구현하는 것은 쉽습니다.
- 예를 들어, 선형 회귀를 제대로 수행하기에 충분한 정보를 제공하지 않는 두 특성이 있다고 가정해 보겠습니다.

## 요약
- 데이터의 시점 순서가 중요한 시간적 데이터인 경우 데이터를 훈련 세트와 테스트 세트로 무작위로 분할하지 않는 것이 좋습니다.
- 대신 데이터를 순차적 훈련 세트와 테스트 세트로 분할하여 훈련 세트가 항상 테스트 세트 앞에 오도록 해야 합니다.
- 학습, 검증 및 테스트 세트 간의 중복이나 오염을 방지하고, 교차 검증을 신중하게 사용하고, 하이퍼파라미터 조정을 사용하여 실제 배포에 교육 기능을 사용할 수 있도록 함으로써 데이터 유출을 줄일 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Data Leakage and Other Pitfalls. After watching this video, you will be able to define data leakage and explain how to mitigate it. You will also be able to describe feature importance interpretation and other modeling pitfalls. Imagine you want to train a model to predict house prices. Along with historical data like square footage, you engineer a feature using the average of the actual home prices over the entire dataset.

You are pleased to see how well your model performs on the test data. However, your model was taught using data that was leaked from the future and that it can't access in production. Without this access, deploying your model won't perform as well as you thought it would, given the test results. Data leakage occurs when your model's training data includes information that would not be available in the real world, such as unseen data after deployment. Data leakage deceives your model, leading it to perform misleadingly well during training and validation.

Since your test dataset will also contain this leaked data, evaluation won't detect the poor generalizability until you implement your model into production. Data snooping happens when the training set contains information about the testing set or the model sees data it shouldn't have access to. This can occur when you include future information when predicting outcomes, such as tomorrow's stock price, to predict today's. It can also take place while engineering new features using the entire dataset. Data processing pipelines should be run independently on the training and testing data.

To mitigate the data leakage risk, you must carefully select training and testing data. If any future data leaks into the training data, you have a problem. Let's look at what mitigation measures you can take. Avoid features like global averages or other statistics derived from the entire dataset. Ensure proper separation between your training, validation, and test sets, avoiding overlap or contamination.

Ensure that none of your features contain unavailable information when making real-world predictions with your deployed model. Pay attention to how you implement cross-validation to ensure you aren't leaking data across different validation folds. This is particularly important when using time-dependent data. In this case, you should use a time-series split rather than the usual train-test split. To avoid leakage when using cross-validation to tune your model's hyperparameters, fit your pipeline separately to each training fold and apply the resultant fitted pipeline to its corresponding validation fold.

Assuming you have imported the required libraries, loaded your data, and taken precautions to ensure you don't already have any data leakage, consider this Python code for training a classifier. First, you split your data into training and test data sets. For this example, assume this is a valid method for your dataset and no temporal or other leakage contamination will occur. Then, define a pipeline of three models, a scalar, PCA, and a KNN classifier. Next, a parameter grid consisting of a set of values is set up to try for a number of PCA components and the number of neighbors in KNN.

Now, optimize your model by performing a grid search using cross-validation. It is important to notice here that the pipeline is input to the grid search. This ensures that the pipeline is applied separately to each training fold and its corresponding validation set. After finding the best parameters, you evaluate your final model on the first set you held back to get an unbiased estimate of your model's performance in the wild. If your data is temporal, where the order of your data points in time is crucial, you want to avoid randomly splitting it into training and test sets.

Instead, you need to split your data into sequential training and testing sets, ensuring that the training set always precedes the test set. Modifying your code to implement time-series cross-validation is easy. Instead of using train-test-split, you would use time-series-split and specify that you want to use this cross-validation method during hyperparameter tuning by setting CV equals TSCV in grid-search-cv. In this example, Scikit-learn's time-series-split splits your data into four equal-sized folds, retaining their temporal order. Each split uses a portion of the data from the past for training and the remaining future data for validation.

The training set expands to include more data with each split while the test set shrinks. Identifying some common pitfalls and assessing feature importances provided by a trained machine learning model is essential. Highly correlated or redundant features used in modeling result in shared importances, which lowers their apparent influence. Further, blindly selecting what seems to be the most important features to use in subsequent modeling can cause a significant feature to be selected to degrade your results. Some algorithms, like linear regression, don't naturally account for the scale of features so that unskilled data can distort importance rankings.

Feature importance indicates correlation, not causation. Important features don't necessarily drive outcomes. Some models rank individual feature importance without accounting for interactions, potentially underestimating or overestimating their combined impact. For example, suppose you have two features that don't provide enough information for linear regression to perform well. Still, their interaction or product boosts the linear regression performance.

Then, a nonlinear algorithm like random forest regression could implicitly detect this interaction, leading to good performance. For linear regression, the separate features would erroneously seem unimportant. At the same time, their importance would be shared for random forest, and you would have no idea that their product is the crucial explanatory variable. Here are some common modeling pitfalls to consider. Using raw data without appropriate feature selection or transformation prevents you from discovering your optimal model.

Choosing the wrong evaluation metric or misinterpreting metrics can mislead your evaluation. Failing to address class imbalances and classification problems biases your predictions towards the majority classes. Automated machine learning tools can be powerful, but you still need to understand your data and the model the system creates for you. It is crucial to understand that if your model lacks features that have a causal impact on the target variable, then the what-if scenarios generated by the model may be invalid. Without causal relationships, your model's predictions based on hypothetical changes can be highly misleading or inaccurate.

In this video, you learned that data leakage occurs when your model's training data includes information that would not be available in the real world or unseen data after deployment. You can mitigate data leakage by avoiding overlap or contamination between training, validation, and test sets, ensuring training features are available for real-world deployment, using cross-validation carefully, and hyperparameter tuning. Some common pitfalls in assessing feature importances provided by a trained machine learning model are feature redundancy, scale sensitivity, assuming causation, and overlooking feature interactions. Other modeling pitfalls include selecting inappropriate features, misinterpreting evaluation metrics, ignoring class imbalance, blind reliance on automation, and performing what-if scenarios based on non-causal data.

</details>
