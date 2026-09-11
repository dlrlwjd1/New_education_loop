# Introduction to Simple Linear Regression

## 개요
- 강좌: Machine Learning with Python
- 모듈: Linear and Logistic Regression
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/Wl2jK/introduction-to-simple-linear-regression)
- 이 비디오를 시청한 후에는 단순 선형 회귀를 설명하고 단순 선형 회귀가 어떻게 작동하는지 설명할 수 있습니다.
- 선형 회귀는 연속형 목표 변수와 설명 특징 간의 선형 관계를 모형화합니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 단순 선형 회귀를 설명하고 단순 선형 회귀가 어떻게 작동하는지 설명할 수 있습니다.
- 선형 회귀는 연속형 목표 변수와 설명 특징 간의 선형 관계를 모형화합니다.
- 이 데이터셋이 주어지면 선형 회귀를 사용하여 자동차의 CO2 배출량과 같은 연속값을 예측할 수 있습니다.
- 단순 선형 회귀를 사용하여 미지의 자동차의 배기가스 배출량을 예측할 수 있습니다.
- 엔진 크기가 2.4인 경우 자동차의 CO2 배출량은 201.65가 될 것으로 예측할 수 있습니다.
- 회귀선이 데이터에 얼마나 잘 맞지 않는지 측정하는 평균 제곱 오차 (MSE) 의 개념에 대해 배웠습니다.

### 한국어 Transcript

단순 선형 회귀 소개 동영상에 오신 것을 환영합니다. 이 비디오를 시청한 후에는 단순 선형 회귀를 설명하고 단순 선형 회귀가 어떻게 작동하는지 설명할 수 있습니다. 선형 회귀는 연속형 목표 변수와 설명 특징 간의 선형 관계를 모형화합니다. 다양한 차량의 CO2 배출량과 관련된 이 데이터 세트를 고려해 보십시오. 데이터셋은 엔진 크기, 실린더 수, 연료 소비량, 다양한 자동차의 CO2 배출량을 나타냅니다.

이 데이터셋이 주어지면 선형 회귀를 사용하여 자동차의 CO2 배출량과 같은 연속값을 예측할 수 있습니다. 단순 선형 회귀에서는 단일 독립 변수가 종속 변수를 추정합니다. 예를 들어, 데이터셋에서는 엔진 크기 변수를 사용하여 CO2 배출량을 예측합니다. 동일한 데이터세트를 다시 살펴보겠습니다. 엔진 크기를 독립 변수로 표시하고 CO2 배출량을 예측하려는 목표값으로 표시해 보겠습니다.

스캐터 차트는 한 변수의 변화가 다른 변수의 변화를 설명하거나 유발할 수 있는 변수 간의 상관 관계를 명확하게 보여줍니다. 단순 선형 회귀를 사용하여 데이터 전체에 가장 적합한 선을 결정할 수 있습니다. 엔진 크기가 커질수록 CO2 배출량도 증가하며, 이 관계는 거의 선형적입니다. 단순 선형 회귀를 사용하여 미지의 자동차의 배기가스 배출량을 예측할 수 있습니다. 예를 들어 엔진 크기가 2.4인 샘플 차량의 예상 배출량은 201.65입니다.

반응 변수 y-hat으로 표시되는 목표값인 CO2 배출량을 예측할 수 있습니다. 독립 변수 (이 경우 엔진 크기) 는 단일 예측 변수 x1로 표시됩니다. 모델은 여기서 직선의 방정식으로 표현됩니다. y-hat은 y-절편 세타 0과 기울기 theta 1을 사용하여 x1로 표현한 예측 응답 변수입니다. 세타 0과 세타 원을 선형 회귀 모델의 계수라고 하며, 선형 회귀 알고리즘이 최적 선을 결정하기 위해 선택합니다.

몇 가지 새로운 데이터 포인트를 살펴보고 그것들이 회귀선과 얼마나 잘 일치하는지 확인해 봅시다. 엔진 크기가 x1인 자동차가 5.4인 경우 실제 CO2 배출량은 50이고 예상 배출량은 y-hat은 340입니다. 실제 값을 예측된 값과 비교하면 90단위 불일치가 있습니다. 잔차 오차는 데이터 점에서 적합 회귀선까지의 수직 거리입니다. 모든 잔차 오차의 평균은 회귀선이 데이터에 얼마나 적합하지 않은지를 측정합니다.

수학적으로는 MSE로 표시되는 평균 제곱 오차 방정식으로 나타낼 수 있습니다. 선형 회귀는 이러한 모든 잔차 오차의 평균을 최소화하기 위한 선을 찾는 것을 목표로 합니다. 이러한 형태의 회귀는 일반적으로 일반 최소 제곱 회귀 또는 OLS 회귀로 알려져 있습니다. 두 개의 공식을 사용하여 선형 회귀 모델의 계수 세타 0과 세타 1을 계산할 수 있습니다. 해답은 1800년대 초에 수학자 가우스와 르장드르가 독립적으로 도출했습니다.

독립 변수와 종속 변수의 평균 y-bar와 x-bar를 계산해야 합니다. theta 1 방정식의 xi와 yi는 x와 y의 i번째 값을 나타냅니다. 여기서 x-막대를 3.0으로, y-막대를 226.2로 계산할 수 있습니다. 그런 다음 계산을 통해 세타 1이 39라는 것을 알 수 있습니다. 이 결과를 사용하여 첫 번째 매개변수 선 절편을 125.7로 계산할 수 있습니다.

따라서 이 두 매개변수는 선의 매개변수입니다. 여기서 세타 0은 편향 계수라고도 하고 세타 1은 CO2 배출 컬럼의 계수입니다. 선형 방정식의 파라미터가 주어지면 예측은 특정 입력값에 대한 방정식을 푸는 것만큼 간단합니다. 예를 들어, 다음 방정식을 사용하여 레코드 번호 9에 있는 자동차의 엔진 크기에 따른 CO2 배출량을 예측할 수 있습니다. 이산화탄소 배출량은 108.05에 엔진 크기의 39배를 더한 것과 같습니다.

이산화탄소 배출량은 108.05에 39 곱하기 2.4와 같습니다. 이산화탄소 배출량은 201.65와 같습니다. 엔진 크기가 2.4인 경우 자동차의 CO2 배출량은 201.65가 될 것으로 예측할 수 있습니다. OLS 회귀 방법은 이해하고 해석하기 쉽기 때문에 유용합니다. 이 방법은 튜닝이 필요하지 않으며 솔루션은 계산에 불과합니다.

따라서 특히 작은 데이터 세트의 경우 OLS 회귀 속도가 빨라집니다. 반면 선형 모델은 데이터의 비선형 관계와 같은 복잡성을 포착하기에는 너무 단순할 수 있습니다. 이상값은 정확도를 크게 떨어뜨려 계산에 너무 많은 가중치를 줄 수 있습니다. 이 비디오에서는 단순 선형 회귀의 몇 가지 사용 사례를 살펴보았습니다. 자동차의 CO2 배출량과 같은 연속값을 예측하는 방법을 배웠습니다.

단순 선형 회귀에서는 단일 독립 변수가 종속 변수를 추정합니다. 또한 회귀 값을 보여주는 차트를 통해 가장 적합한 선을 결정하는 방법도 배웠습니다. 회귀선이 데이터에 얼마나 잘 맞지 않는지 측정하는 평균 제곱 오차 (MSE) 의 개념에 대해 배웠습니다. 선형 회귀는 이러한 모든 잔차 오차의 평균을 최소화하기 위한 선을 찾는 것을 목표로 합니다. 이러한 형태의 회귀를 보통 일반 최소 제곱 회귀 또는 OLS 회귀라고 합니다.

OLS 회귀 방법은 이해하고 해석하기 쉽기 때문에 유용합니다. 그러나 이상값은 정확도를 크게 떨어뜨려 계산에 너무 많은 가중치를 줄 수 있습니다.

## 예시
- 예를 들어, 데이터셋에서는 엔진 크기 변수를 사용하여 CO2 배출량을 예측합니다.
- 예를 들어 엔진 크기가 2.4인 샘플 차량의 예상 배출량은 201.65입니다.
- 예를 들어, 다음 방정식을 사용하여 레코드 번호 9에 있는 자동차의 엔진 크기에 따른 CO2 배출량을 예측할 수 있습니다.
- 이 비디오에서는 단순 선형 회귀의 몇 가지 사용 사례를 살펴보았습니다.

## 요약
- 단순 선형 회귀를 사용하여 미지의 자동차의 배기가스 배출량을 예측할 수 있습니다.
- 엔진 크기가 2.4인 경우 자동차의 CO2 배출량은 201.65가 될 것으로 예측할 수 있습니다.
- 회귀선이 데이터에 얼마나 잘 맞지 않는지 측정하는 평균 제곱 오차 (MSE) 의 개념에 대해 배웠습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to this video on Introduction to Simple Linear Regression. After watching this video, you will be able to describe simple linear regression and explain how simple linear regression works. Linear regression models a linear relationship between a continuous target variable and explanatory features. Consider this dataset related to CO2 emissions from different cars. The dataset features engine size, number of cylinders, fuel consumption, and CO2 emissions from various cars.

Given this dataset, linear regression can be used to predict a continuous value, such as CO2 emissions of a car. In simple linear regression, a single independent variable estimates the dependent variable. For example, in our dataset, CO2 emission is predicted using the engine size variable. Let's consider the same dataset again. Let's plot engine size as an independent variable and CO2 emissions as the target value that we want to predict.

A scatter plot clearly shows the correlation between variables where changes in one variable explain or possibly cause changes in the other variable. With simple linear regression, you can determine a best-fit line through the data. As engine size increases, so does CO2 emissions, and the relationship is approximately linear. You can use simple linear regression to predict the emission of an unknown car. For example, the predicted emission for a sample car with an engine size of 2.4 is 201.65.

You can predict the target value, CO2 emissions, represented as the response variable, y-hat. The independent variable, which in this case is engine size, is represented by the single predictor variable, x1. The model is represented as the equation of a line, here. y-hat is the predicted response expressed in terms of x1 using a y-intercept, theta zero, and a slope, theta one. Theta zero and theta one are called the coefficients of the linear regression model, selected by the linear regression algorithm to determine a best-fit line.

Let's consider some new data points and check how well they align with the regression line. Given a car with engine size x1 equals 5.4, its actual CO2 emission is 250, while its predicted emission is y-hat equals 340. Comparing the actual value to the predicted one, there's a 90-unit discrepancy. The residual error is the vertical distance from the data point to the fitted regression line. The average of all residual errors measures how poorly the regression line fits the data.

Mathematically, it could be shown by the equation, mean squared error, shown as MSE. Linear regression aims to find the line for minimizing the mean of all these residual errors. This form of regression is commonly known as ordinary least squares regression, or OLS regression. We can use two formulas to calculate the coefficients theta zero and theta one of the linear regression model. The solution was derived independently by the mathematicians Gauss and Legendre in the early 1800s.

It requires that we calculate the means, y-bar and x-bar, of the independent and dependent variables. The xi and yi in the equation for theta one refer to the ith values of x and y. Here, you can calculate the x-bar as 3.0 and the y-bar as 226.2. Then, going through the calculations, you'll find that theta one equals 39. You can use this result to calculate the first parameter line intercept as 125.7.

So, these are the two parameters for the line, where theta zero is also called the bias coefficient and theta one is the coefficient for the CO2 emission column. Given the parameters of the linear equation, making a prediction is as simple as solving the equation for a particular input value. For example, you can predict the CO2 emission from engine size for the automobile in record number 9 using the following equation. CO2 emission equals 108.05 plus 39 times engine size. CO2 emission equals 108.05 plus 39 times 2.4.

CO2 emission equals 201.65. For an engine size of 2.4, we can predict that the CO2 emission of the car would be 201.65. The OLS regression method is helpful because it's easy to understand and interpret. The method doesn't require any tuning and its solution is just a calculation. This also makes OLS regression fast, especially for smaller datasets.

On the other hand, a linear model may be far too simplistic to capture complexity, such as a nonlinear relationship in the data. Outliers can greatly reduce its accuracy, giving them far too much weight in the calculations. In this video, we looked at several use cases of simple linear regression. We learned how to predict a continuous value, such as a car's CO2 emissions. In simple linear regression, a single independent variable estimates the dependent variable.

We also learned how to determine the best-fit line through a chart showing regression values. We learned about the concept of Mean Squared Error, or MSE, which measures how poorly the regression line fits the data. Linear regression aims to find the line for minimizing the mean of all these residual errors. This form of regression is commonly known as Ordinary Least Squares Regression, or OLS regression. The OLS regression method is useful because it's easy to understand and interpret.

However, outliers can greatly reduce its accuracy, giving them far too much weight in the calculations.

</details>
