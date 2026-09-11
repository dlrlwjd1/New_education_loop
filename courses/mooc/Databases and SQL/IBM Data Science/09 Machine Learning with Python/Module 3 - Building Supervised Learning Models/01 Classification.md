# Classification

## 개요
- 강좌: Machine Learning with Python
- 모듈: Building Supervised Learning Models
- 재생 시간: 6분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/QkTUH/classification)
- 이 비디오를 시청한 후에는 지도 학습의 분류 방법을 설명하고, 분류의 응용 및 사용 사례에 대해 설명하고, 다양한 분류 알고리즘을 나열하고, 다중 클래스 예측을 만드는 방법을 설명할 수 있습니다.
- 분류는 완전히 학습된 모델을 사용하여 새 데이터의 레이블을 예측하는 지도형 기계 학습 (ML 방법) 입니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 지도 학습의 분류 방법을 설명하고, 분류의 응용 및 사용 사례에 대해 설명하고, 다양한 분류 알고리즘을 나열하고, 다중 클래스 예측을 만드는 방법을 설명할 수 있습니다.
- 분류는 완전히 학습된 모델을 사용하여 새 데이터의 레이블을 예측하는 지도형 기계 학습 (ML 방법) 입니다.
- 레이블이 지정된 이 데이터 세트를 분류 알고리즘과 함께 사용하여 향후 같은 질병에 걸린 환자에게 적합한 약물을 예측할 수 있는 분류 모델을 구축할 수 있습니다.
- 대부분의 분류 알고리즘은 두 개 이상의 클래스를 구분할 수 없지만 다중 클래스 분류기의 구성요소로 사용할 수 있습니다.
- 분류는 이탈 예측, 고객 세분화 및 광고 캠페인 반응성 예측에 사용할 수 있습니다.
- 특정 전략을 사용하여 여러 클래스를 처리하도록 이진 분류기를 확장할 수 있습니다.

### 한국어 Transcript

분류에 관한 이 비디오에 오신 것을 환영합니다. 이 비디오를 시청한 후에는 지도 학습의 분류 방법을 설명하고, 분류의 응용 및 사용 사례에 대해 설명하고, 다양한 분류 알고리즘을 나열하고, 다중 클래스 예측을 만드는 방법을 설명할 수 있습니다. 분류는 완전히 학습된 모델을 사용하여 새 데이터의 레이블을 예측하는 지도형 기계 학습 (ML 방법) 입니다. 분류의 레이블은 불연속형 값을 갖는 범주형 변수를 형성합니다. 지도 학습은 특정 질문에 답할 때 올바른 상황에서 데이터를 이해하는 것을 목표로 합니다.

이렇게 하면 예측 시 데이터 정확도가 보장됩니다. 모델에 데이터가 입력되면 모델은 알고리즘에 맞게 데이터를 조정하고 그에 따라 분류하여 입력값과 예측된 출력을 정의합니다. 분류는 다양한 산업 분야에서 여러 용도로 사용됩니다. 특히 레이블이 지정된 데이터를 사용할 수 있는 경우 특징 변수와 대상 변수 간의 연관성으로 많은 문제가 표현될 수 있습니다. 분류를 사용하여 이메일 필터링, 음성-텍스트 변환, 필기 인식, 생체 인식, 문서 분류 등을 위한 애플리케이션을 구축할 수 있습니다.

이탈 예측은 머신 러닝 분류를 사용하여 고객이 서비스를 중단할지 여부를 예측하는 것입니다. 고객 세분화는 분류를 사용하여 고객이 속한 범주를 예측하는 것입니다. 분류를 사용하여 고객이 광고 캠페인에 반응할 가능성이 높은지 여부를 예측할 수도 있습니다. 분류의 추가 사용 사례를 살펴보겠습니다. 은행에서 대출 신청자 중 일부가 대출금을 상환하지 못할 수도 있다고 우려한다고 가정해 보겠습니다.

은행은 과거 대출 채무 불이행 데이터를 사용하여 채무 불이행 가능성이 높은 고객을 예측합니다. 여기서는 연령, 소득, 신용 부채 수준과 같은 고객 정보를 사용하여 채무 불이행 여부를 파악하도록 분류자를 교육할 수 있습니다. 트레이닝된 분류 모델은 신규 고객과 동일한 정보를 바탕으로 채무 불이행 가능성에 대한 지식이 없는 상태에서 고객의 채무 불이행 가능성 여부를 예측합니다. 다음은 예측이 가능한 두 가지 클래스로 제한되기 때문에 이진 분류기의 예입니다. 이제 다양한 약물을 처방하는 데 사용되는 다중 클래스 분류기의 다음 예를 살펴보겠습니다.

모든 환자가 같은 질병을 앓고 있는 일련의 환자에 대한 데이터를 수집했다고 상상해 보십시오. 치료 과정에서 각 환자는 세 가지 약물 중 하나에 긍정적으로 반응했습니다. 레이블이 지정된 이 데이터 세트를 분류 알고리즘과 함께 사용하여 향후 같은 질병에 걸린 환자에게 적합한 약물을 예측할 수 있는 분류 모델을 구축할 수 있습니다. 다양한 유형의 알고리즘을 사용하여 분류 모델을 구축할 수 있습니다. 일반적인 머신러닝 분류 알고리즘으로는 나이브 베이즈, 로지스틱 회귀, 의사 결정 트리, K-최근접 이웃, 서포트 벡터 머신, 신경망 등이 있습니다.

로지스틱 회귀, KNN, 의사결정 트리와 같은 알고리즘은 여러 클래스를 구별하는 방법을 학습할 수 있습니다. 대부분의 분류 알고리즘은 두 개 이상의 클래스를 구분할 수 없지만 다중 클래스 분류기의 구성요소로 사용할 수 있습니다. 여러 클래스를 처리하도록 이진 분류기를 확장하기 위한 전략에는 일대일 분류와 일대일 분류가 포함됩니다. one-versus-all 체계는 데이터세트의 각 클래스 레이블에 대해 하나씩 독립적인 이진 분류기 세트를 구현합니다. 각 분류기에는 대상 클래스를 정의하는 단일 레이블이 할당됩니다.

각 분류기의 임무는 모든 데이터 포인트에 대해 주어진 레이블 (단일 대 나머지 분류기) 이 있는지 여부에 대한 이진 예측을 수행하는 것입니다. 보시다시피 k개의 클래스가 있으면 정확히 k개의 이진 분류기가 기여하게 됩니다. 일대일 전략이 데이터 요소 집합을 어떻게 분해하는지 이해해 봅시다. 알고리즘은 각 클래스 레이블에 대해 한 번에 하나씩 작동하며, 학습된 결과를 통해 주어진 색상으로 예측된 점을 보여 줍니다. 또한 주어진 데이터 포인트는 개별 분류기에 의해 선택되지 않을 수 있으므로 어떤 클래스에도 속하지 않을 수 있습니다.

이러한 분류되지 않은 포인트는 다른 클래스에 속합니다. 이 속성은 이상값이나 잡음을 식별하는 데 유용할 수 있습니다. 일대일 전략을 사용하면 각 분류기가 포인트가 클래스에 속하는지 여부를 결정하는 대신 “이게 맞나요?” 라는 질문이 바뀝니다. “이거야 아니면 저거야?” 클래스 집합이 주어지면 가능한 모든 클래스 쌍을 고려하십시오. 분류기는 각 레이블 쌍에 대해 두 레이블에 해당하는 데이터의 하위 집합을 대상으로 훈련되어 각 점이 속한 클래스를 결정합니다.

이 과정은 모든 분류기가 훈련될 때까지 계속됩니다. 각 포인트에 부여되는 최종 등급 라벨은 투표 방식으로 결정될 수 있습니다. 가장 간단한 체계는 인기도에 따른 것으로, 가장 많은 이진 분류기가 예측한 클래스가 이깁니다. 여기에는 투표 수가 같은 세 개의 클래스가 있습니다. 이것이 가능한 시나리오에서는 각 분류기에 대해 해당 클래스에 할당된 신뢰 수준 또는 확률로 각 투표를 평가하는 개선된 체계를 사용하는 것이 좋습니다.

대신 일대일 분류를 사용해 볼 수도 있습니다. 이 비디오에서는 분류가 완전히 학습된 모델을 사용하여 새 데이터의 레이블을 예측하는 감독형 ML 방법이라는 것을 배웠습니다. 분류는 이탈 예측, 고객 세분화 및 광고 캠페인 반응성 예측에 사용할 수 있습니다. 분류 사용 사례에는 대출 채무 불이행 예측 및 다등급 약물 처방도 포함됩니다. 분류에는 여러 알고리즘이 있으며 여기에는 다중 클래스 분류기도 포함됩니다.

특정 전략을 사용하여 여러 클래스를 처리하도록 이진 분류기를 확장할 수 있습니다. one-versus-all 체계는 각 클래스 레이블마다 하나씩 독립적인 이진 분류기를 구현합니다. 일대일 전략은 “이것인가요, 저것인가요?” 라는 질문에 답합니다.

## 예시
- 이 비디오를 시청한 후에는 지도 학습의 분류 방법을 설명하고, 분류의 응용 및 사용 사례에 대해 설명하고, 다양한 분류 알고리즘을 나열하고, 다중 클래스 예측을 만드는 방법을 설명할 수 있습니다.
- 분류의 추가 사용 사례를 살펴보겠습니다.
- 분류 사용 사례에는 대출 채무 불이행 예측 및 다등급 약물 처방도 포함됩니다.

## 요약
- 대부분의 분류 알고리즘은 두 개 이상의 클래스를 구분할 수 없지만 다중 클래스 분류기의 구성요소로 사용할 수 있습니다.
- 분류는 이탈 예측, 고객 세분화 및 광고 캠페인 반응성 예측에 사용할 수 있습니다.
- 특정 전략을 사용하여 여러 클래스를 처리하도록 이진 분류기를 확장할 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to this video on classification. After watching this video, you will be able to: describe the classification method of supervised learning, discuss the applications and use cases of classification, list the different classification algorithms, and explain how to make multi-class predictions. Classification is a supervised machine learning, or ML method, that uses fully trained models to predict labels on new data. The labels in classification form a categorical variable with discrete values. Supervised learning aims to understand data in the correct context when answering a specific question.

This ensures data accuracy when making predictions. As data is input into the model, the model adjusts the data to fit the algorithm and classifies it accordingly, defining the input and the predicted output. Classification has several applications in a wide variety of industries. Many problems can be expressed as associations between feature and target variables, particularly when labeled data is available. Classification can be used to build applications for email filtering, speech-to-text, handwriting recognition, biometric identification, document classification, and much more.

Churn prediction is when you use machine learning classification to predict whether a customer will discontinue a service. Customer segmentation is when you use classification to predict the category to which a customer belongs. You can also use classification to predict whether a customer will likely respond to an advertising campaign. Let's explore additional use cases of classification. Suppose a bank is concerned that some of their loan applicants may be unable to repay their loan.

The bank uses historical loan default data to predict which customers are likely to default. Here, a classifier can be trained to use customer information like age, income, and credit debt levels to learn whether they will default. Given a new customer and the same information, but without the knowledge of the likelihood of defaulting, the trained classification model predicts whether the customer is likely to default. This is an example of a binary classifier, as its predictions are limited to two possible classes. Now, consider the following example of a multi-class classifier used to help prescribe various drugs.

Imagine that you collected data about a set of patients, all of whom suffered from the same illness. During their course of treatment, each patient responded positively to one of three medications. You can use this labeled dataset with a classification algorithm to build a classification model that can predict which drug might be appropriate for a future patient with the same illness. You can use many different types of algorithms to build your classification model. Some common machine learning classification algorithms include Naive Bayes, Logistic Regression, Decision Trees, K-Nearest Neighbors, Support Vector Machines, and Neural Networks.

Algorithms like Logistic Regression, KNN, and Decision Trees can learn how to distinguish multiple classes. Many classification algorithms are not able to make distinctions between more than two classes, but you can use them as components for multi-class classifiers. Strategies for extending binary classifiers to handle multiple classes include one-versus-all classification and one-versus-one classification. The one-versus-all scheme implements a set of independent binary classifiers, one for each class label in the dataset. Each classifier is assigned a single label that defines its target class.

Each classifier's task is to make a binary prediction for every data point about whether it has the given label, a one-versus-the-rest classifier. As you can see, if there are k classes, there will be exactly k binary classifiers contributing. Let's understand how the one-versus-all strategy decomposes a set of data points. The algorithm works on each class label, one at a time, with a trained outcome showing the points predicted to have a given color. Notice also that a given data point might not belong to any of the classes, as it might not get picked up by any of the individual classifiers.

Such unclassified points fall into another class. This property might be useful for identifying outliers or noise. With the one-versus-one strategy, instead of each classifier deciding whether a point belongs to a class, the question changes from "Is it this? " to "Is it this or is it that? " Given a set of classes, consider all possible pairs of classes.

For each pair of labels, a classifier is trained on the subset of the data corresponding to the two labels and decides which class each point belongs to. The process continues until all classifiers are trained. The final class label assigned to each point may be decided by a voting scheme. The simplest scheme is by popularity, meaning the class predicted by the most binary classifiers wins. Here, green is the winner.

What if there is a tie? Here, we have three classes with the same number of votes. In a scenario where that is possible, it would be better to use an improved scheme, weighing each vote by the confidence level or probability assigned to that class for each classifier. Alternatively, you could try using one-versus-all classification instead. In this video, you learned that classification is a supervised ML method that uses fully trained models to predict labels on new data.

Classification can be used for churn prediction, customer segmentation, and predicting advertising campaign responsiveness. Use cases of classification also include loan default prediction and multi-class drug prescription. Classification has several algorithms, which also include multi-class classifiers. Binary classifiers can be extended to handle multiple classes by using certain strategies. The one-versus-all scheme implements independent binary classifiers, one for each class label.

The one-versus-one strategy answers the question, "Is it this or is it that?

</details>
