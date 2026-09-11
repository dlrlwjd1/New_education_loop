# Introduction to Regression

## 개요
- 강좌: Machine Learning with Python
- 모듈: Linear and Logistic Regression
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/yQk8D/introduction-to-regression)
- 이 비디오를 시청한 후에는 회귀를 정의하고, 단순 회귀와 다중 회귀를 비교하고, 회귀의 적용을 설명할 수 있습니다.
- 연속 목표 변수와 설명 특징 간의 관계를 모델링합니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 회귀를 정의하고, 단순 회귀와 다중 회귀를 비교하고, 회귀의 적용을 설명할 수 있습니다.
- 연속 목표 변수와 설명 특징 간의 관계를 모델링합니다.
- 단순 회귀는 선형 또는 비선형일 수 있습니다.
- 다시 말하지만, 종속 변수와 독립 변수 간의 관계에 따라 선형 회귀 또는 비선형 회귀가 될 수 있습니다.
- 이 비디오에서는 회귀가 연속형 목표 변수와 설명 특징 간의 관계를 모델링하는 기계 학습 기법이라는 것을 배웠습니다.
- 이 회귀는 선형 또는 비선형일 수 있습니다.

### 한국어 Transcript

이 비디오를 시청한 후에는 회귀를 정의하고, 단순 회귀와 다중 회귀를 비교하고, 회귀의 적용을 설명할 수 있습니다. 회귀는 지도 학습 모델의 일종입니다. 연속 목표 변수와 설명 특징 간의 관계를 모델링합니다. 다양한 차량의 CO2 배출량과 관련된 이 데이터 세트를 고려해 보십시오. 이 데이터셋의 특징에는 엔진 크기, 실린더 수, 연료 소비, 다양한 자동차 모델의 CO2 배출량이 포함됩니다.

이 데이터셋이 주어진다면, 나열된 특징을 통해 신차의 CO2 배출량을 예측할 수 있을까요? 잠재적 예측 기능을 사용하면 회귀를 사용하여 CO2 배출량과 같은 연속값을 예측할 수 있습니다. 과거 자동차의 일부 기능을 포함하는 이전 데이터세트를 살펴보겠습니다. 그런 다음 이 데이터를 바탕으로 모델을 학습시켜 각 차량의 CO2 배출량을 추정할 수 있습니다. 회귀를 사용하여 이러한 예측 모델을 만들어 보겠습니다.

그런 다음 이 모델을 사용하여 신차 또는 가상 차량의 예상 CO2 배출량을 예측합니다. 어느 것을 사용할지 결정하는 것은 종속 변수에 대한 데이터와 가장 적합한 모델을 제공하는 모델에 따라 달라집니다. 이 비디오에서는 다음과 같은 두 가지 유형의 회귀 모델, 즉 단순 회귀와 다중 회귀에 대해 설명합니다. 단순 회귀는 단일 독립 변수가 종속 변수를 추정하는 경우입니다. 단순 회귀는 선형 또는 비선형일 수 있습니다.

예를 들어, 가변 엔진 크기를 사용하여 CO2 배출량을 예측합니다. 단순 선형 회귀는 종속 변수와 독립 변수 사이에 선형 관계를 적용합니다. 마찬가지로, 비선형 회귀는 이러한 변수 간에 비선형 관계를 생성합니다. 독립 변수가 두 개 이상 있는 경우 이 과정을 다중 회귀라고 합니다. 선형 관계와 비선형 관계 간의 차이는 단순 회귀와 다중 회귀에 적용됩니다.

예를 들어, 특정 차량의 엔진 크기와 실린더 수를 사용하여 CO2 배출량을 예측합니다. 다시 말하지만, 종속 변수와 독립 변수 간의 관계에 따라 선형 회귀 또는 비선형 회귀가 될 수 있습니다. 회귀의 몇 가지 샘플 응용 프로그램을 살펴보겠습니다. 기본적으로 연속형 값을 추정할 때는 회귀를 사용합니다. 예를 들어, 회귀 분석의 응용 분야 중 하나는 판매 예측 분야일 수 있습니다.

고객, 잠재 고객 수, 주문 내역과 같은 독립 변수를 통해 영업 사원의 연간 매출을 예측할 수 있습니다. 회귀 분석을 통해 크기 , 침실 수 등을 기준으로 해당 지역의 주택 가격을 예측할 수 있습니다. 회귀 분석을 사용하면 자동차 또는 산업용 기계가 고장날 때까지 기다리지 않고 유지보수가 필요한 시기를 예측할 수 있습니다. 이를 사용하여 근무 시간, 교육, 직업, 성별, 연령, 경력 등과 같은 독립 변수로 고용 소득을 예측할 수도 있습니다. 실제로 이러한 분야와 금융, 의료 및 소매와 같은 다른 많은 분야 또는 영역에서 회귀 분석의 유용성에 대한 많은 예를 찾을 수 있습니다.

회귀의 추가 샘플 응용 프로그램을 살펴보겠습니다. 회귀 분석을 사용하여 기온, 습도, 풍속, 기압과 같은 기상 요인을 기반으로 한 지역의 강우량을 추정할 수 있습니다. 예를 들어 환경 보호 분야에서 산불의 확률과 심각도를 결정하는 데에도 사용할 수 있습니다. 공중 보건 분야에서는 회귀 분석을 사용하여 전염병의 확산을 예측할 수 있습니다. 환자 데이터를 기반으로 당뇨병, 심장병 또는 암과 같은 질병이 발생할 가능성을 추정하는 데에도 사용할 수 있습니다.

각 알고리즘은 적절한 상황에서 중요하며 특정 조건에 적합합니다. 선형 및 다항식 회귀는 고전적인 통계 모델링 방법인 반면 랜덤 포레스트와 XGBoost는 최신 기계 학습 회귀 모델입니다. 기타 최신 회귀 알고리즘으로는 k-최근접 이웃, 서포트 벡터 머신, 신경망 등이 있습니다. 이 비디오에서는 회귀가 연속형 목표 변수와 설명 특징 간의 관계를 모델링하는 기계 학습 기법이라는 것을 배웠습니다. 단순 회귀는 단일 독립 변수가 종속 변수를 추정하는 경우입니다.

이 회귀는 선형 또는 비선형일 수 있습니다. 독립 변수가 두 개 이상 있는 경우 이 과정을 다중 회귀라고 합니다. 회귀에는 많은 응용 분야가 있습니다. 이를 사용하여 매출을 예측하고, 유지 관리 비용을 예측하고, 강우량을 추정하고, 전염병 확산을 예측할 수 있습니다.

## 예시
- 예를 들어, 가변 엔진 크기를 사용하여 CO2 배출량을 예측합니다.
- 예를 들어, 특정 차량의 엔진 크기와 실린더 수를 사용하여 CO2 배출량을 예측합니다.
- 예를 들어, 회귀 분석의 응용 분야 중 하나는 판매 예측 분야일 수 있습니다.
- 예를 들어 환경 보호 분야에서 산불의 확률과 심각도를 결정하는 데에도 사용할 수 있습니다.

## 요약
- 다시 말하지만, 종속 변수와 독립 변수 간의 관계에 따라 선형 회귀 또는 비선형 회귀가 될 수 있습니다.
- 이 비디오에서는 회귀가 연속형 목표 변수와 설명 특징 간의 관계를 모델링하는 기계 학습 기법이라는 것을 배웠습니다.
- 이 회귀는 선형 또는 비선형일 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Introduction to Regression. After watching this video, you will be able to Define regression, Compare simple and multiple regression Explain applications of regression Regression is a type of supervised learning model. It models a relationship between a continuous target variable and explanatory features. Consider this dataset related to CO2 emissions from different cars. The features in this dataset include engine size, number of cylinders, fuel consumption, and CO2 emissions from various automobile models.

Given this dataset, is it possible to predict the CO2 emission of a new car from the listed features? Using potentially predictive features, you can use regression to predict a continuous value, such as CO2 emissions. Let's consider the previous dataset comprising some features in past cars. Then, from that data, a model can be trained to estimate the CO2 emissions of each car. Let's use regression to build such a predictive model.

Then, the model is used to predict the expected CO2 emission for a new or hypothetical car. There are several types of regression. Deciding which one to use depends on the data you have for the dependent variable and the type of model that provides the best fit. In this video, we'll discuss the following two types of regression models, simple regression and multiple regression. Simple regression is when a single independent variable estimates a dependent variable.

Simple regression can be linear or nonlinear. For example, predicting CO2 emission using the variable engine size. Simple linear regression imposes a linear relationship between the dependent and independent variables. Similarly, nonlinear regression creates a nonlinear relationship between those variables. When more than one independent variable is present, the process is called multiple regression.

The distinctions between linear and nonlinear relationships apply to simple and multiple regression. For example, predicting CO2 emission using engine size and the number of cylinders in any given car. Again, depending on the relation between dependent and independent variables, it can be either linear or nonlinear regression. Let's examine some sample applications of regression. Essentially, we use regression when we want to estimate a continuous value.

For instance, one of the applications of regression analysis could be in the area of sales forecasting. You can predict a salesperson's yearly sales from independent variables, such as customers, number of leads, and order history. Regression analysis can predict the price of a house in an area based on its size, number of bedrooms, and so on. You can use regression analysis to predict when an automobile or an industrial machine will require maintenance rather than waiting for it to fail. You can even use it to predict employment income from independent variables, such as hours of work, education, occupation, sex, age, years of experience, and so on.

Indeed, you can find many examples of the usefulness of regression analysis in these and many other fields or domains, such as finance, healthcare, and retail. Let's examine additional sample applications of regression. You can use regression to estimate the rainfall in a region based on meteorological factors, such as temperature, humidity, wind speed, and air pressure. It can also be used in the field of environmental protection, for example, to determine the probability and severity of wildfires. In public health, you can use regression analysis to predict the spread of infectious diseases.

You can even use it to estimate the likelihood of developing diseases, such as diabetes, heart disease, or cancer, based on patient data. There are many regression algorithms. Each algorithm is important in the appropriate context and suited to specific conditions. Linear and polynomial regression are classical statistical modeling methods, while random forest and XGBoost are modern machine learning regression models. Other modern regression algorithms include k-nearest neighbors, support vector machines, and neural networks.

In this video, you learned regression is a machine-learning technique that models a relationship between a continuous target variable and explanatory features. Simple regression is when a single independent variable estimates a dependent variable. This regression can be linear or nonlinear. When more than one independent variable is present, the process is called multiple regression. There are many applications of regression.

You can use it to forecast sales, predict maintenance expenses, estimate rainfall, and spread of infectious disease.

</details>
