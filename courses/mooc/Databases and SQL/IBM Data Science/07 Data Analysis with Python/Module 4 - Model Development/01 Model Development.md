# Model Development

## 개요
- 강좌: Data Analysis with Python
- 모듈: Model Development
- 재생 시간: 2분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/qF8hd/model-development)
- 이 비디오에서는 데이터 세트를 사용하여 자동차 가격을 예측하여 모델 개발을 살펴보겠습니다.
- 이 모듈에서는 단순 및 다중 선형 회귀, 시각화를 사용한 모델 평가, 다항식 회귀 및 파이프라인, 표본 내 평가를 위한 R-제곱 및 MSE, 예측 및 의사 결정, 중고차의 공정 가치 결정 방법에 대해 알아봅니다.

## 내용
### 핵심 내용
- 이 비디오에서는 데이터 세트를 사용하여 자동차 가격을 예측하여 모델 개발을 살펴보겠습니다.
- 이 모듈에서는 단순 및 다중 선형 회귀, 시각화를 사용한 모델 평가, 다항식 회귀 및 파이프라인, 표본 내 평가를 위한 R-제곱 및 MSE, 예측 및 의사 결정, 중고차의 공정 가치 결정 방법에 대해 알아봅니다.
- 모델 또는 추정기는 하나 이상의 다른 값이 주어지면 값을 예측하는 데 사용되는 수학 방정식으로 생각할 수 있으며, 하나 이상의 독립 변수 또는 특징을 종속 변수와 연관시킵니다.
- 예를 들어 자동차 모델의 고속도로 갤런당 마일을 독립 변수 또는 특징으로 입력합니다.
- 예를 들어, 모델에 여러 독립 변수 또는 특징을 입력합니다.
- 모델의 독립 변수 또는 특징에 색상이 포함되지 않은 경우 모델은 훨씬 더 저렴하게 팔릴 수 있는 자동차에 대해서도 동일한 가격을 예측합니다.

### 한국어 Transcript

이 비디오에서는 데이터 세트를 사용하여 자동차 가격을 예측하여 모델 개발을 살펴보겠습니다. 이 모듈에서는 단순 및 다중 선형 회귀, 시각화를 사용한 모델 평가, 다항식 회귀 및 파이프라인, 표본 내 평가를 위한 R-제곱 및 MSE, 예측 및 의사 결정, 중고차의 공정 가치 결정 방법에 대해 알아봅니다. 모델 또는 추정기는 하나 이상의 다른 값이 주어지면 값을 예측하는 데 사용되는 수학 방정식으로 생각할 수 있으며, 하나 이상의 독립 변수 또는 특징을 종속 변수와 연관시킵니다. 예를 들어 자동차 모델의 고속도로 갤런당 마일을 독립 변수 또는 특징으로 입력합니다. 모델 또는 종속 변수의 출력은 가격입니다.

일반적으로 관련 데이터가 많을수록 모형의 정확도가 높아집니다. 예를 들어, 모델에 여러 독립 변수 또는 특징을 입력합니다. 따라서 모델이 자동차 가격을 더 정확하게 예측할 수 있습니다. 더 많은 데이터가 왜 중요한지 이해하려면 다음 상황을 고려해 보십시오. 핑크색 자동차는 훨씬 저렴한 가격에 팔립니다.

모델을 사용하여 두 대의 자동차 가격을 결정하려고 합니다. 하나는 분홍색, 하나는 빨간색입니다. 모델의 독립 변수 또는 특징에 색상이 포함되지 않은 경우 모델은 훨씬 더 저렴하게 팔릴 수 있는 자동차에 대해서도 동일한 가격을 예측합니다. 더 많은 데이터를 얻는 것 외에도 다양한 유형의 모델을 사용해 볼 수 있습니다. 이 과정에서는 단순 선형 회귀, 다중 선형 회귀 및 다항식 회귀에 대해 배웁니다.

## 예시
- 예를 들어 자동차 모델의 고속도로 갤런당 마일을 독립 변수 또는 특징으로 입력합니다.
- 예를 들어, 모델에 여러 독립 변수 또는 특징을 입력합니다.

## 요약
- 예를 들어 자동차 모델의 고속도로 갤런당 마일을 독립 변수 또는 특징으로 입력합니다.
- 예를 들어, 모델에 여러 독립 변수 또는 특징을 입력합니다.
- 모델의 독립 변수 또는 특징에 색상이 포함되지 않은 경우 모델은 훨씬 더 저렴하게 팔릴 수 있는 자동차에 대해서도 동일한 가격을 예측합니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we will examine model development by trying to predict the price of a car using our dataset. In this module, you will learn about simple and multiple linear regression, model evaluation using visualization, polynomial regression and pipelines, R-squared and MSE for in-sample evaluation, prediction and decision making, and how you can determine a fair value for a used car. A model or estimator can be thought of as a mathematical equation used to predict a value given one or more other values, relating one or more independent variables or features to dependent variables. For example, you input a car models highway miles per gallon as the independent variable or feature. The output of the model or dependent variable is the price.

Usually the more relevant data you have, the more accurate your model is. For example, you input multiple independent variables or features to your model. Therefore, your model may predict a more accurate price for the car. To understand why more data is important consider the following situation. You have two almost identical cars.

Pink cars sell for significantly less. You want to use your model to determine the price of two cars, one pink, one red. If your model's independent variables or features do not include color, your model will predict the same price for cars that may sell for much less. In addition to getting more data, you can try different types of models. In this course you will learn about simple linear regression, multiple linear regression, and polynomial regression.

</details>
