# Introduction to Multiple Linear Regression

## 개요
- 강좌: Machine Learning with Python
- 모듈: Linear and Logistic Regression
- 재생 시간: 8분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/x6VGA/introduction-to-multiple-linear-regression)
- 이 비디오를 시청한 후에는 다중 선형 회귀를 설명하고 다중 선형 회귀와 단순 선형 회귀를 비교하고 다중 선형 회귀의 함정을 나열할 수 있습니다.
- 다중 선형 회귀는 단순 선형 회귀 모델의 확장입니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 다중 선형 회귀를 설명하고 다중 선형 회귀와 단순 선형 회귀를 비교하고 다중 선형 회귀의 함정을 나열할 수 있습니다.
- 다중 선형 회귀는 단순 선형 회귀 모델의 확장입니다.
- 다중 선형 회귀를 사용하면 단순 선형 회귀를 사용하는 것보다 모형이 더 좋습니다.
- 다중 선형 회귀는 모든 산업에 적용할 수 있습니다.
- 다중 선형 회귀는 단순 선형 회귀 모델의 확장입니다.
- 이 비디오에서는 다중 선형 회귀가 단순 선형 회귀를 사용하는 것보다 더 나은 모델을 만드는 방법을 배웠습니다.

### 한국어 Transcript

다중 선형 회귀 소개에 관한 이 비디오에 오신 것을 환영합니다. 이 비디오를 시청한 후에는 다중 선형 회귀를 설명하고 다중 선형 회귀와 단순 선형 회귀를 비교하고 다중 선형 회귀의 함정을 나열할 수 있습니다. 다중 선형 회귀는 단순 선형 회귀 모델의 확장입니다. 둘 이상의 독립 변수를 사용하여 종속 변수를 추정합니다. 수학적으로 보면 다중 회귀 모델은 theta 0에 theta 1 x 1을 더한 y 형식의 선형 조합입니다.

여기서 x 1은 편향 또는 절편 항 theta 밑줄 0을 설명하기 위해 첫 번째 항목에 상수 값 1을 포함하는 행렬 x로 표현할 수 있는 특징 벡터이고, theta는 행렬 세타로 표현할 수 있는 미지 가중치입니다. 이 표의 데이터 세트를 살펴보겠습니다. 다중 선형 회귀를 사용하여 각 독립 변수가 종속 변수에 미치는 영향의 강도를 측정할 수 있습니다. 훈련된 가중치 theta i를 사용하여 특징의 선형 조합을 구성하여 엔진 크기, 실린더 수, 연료 소비와 같은 특징으로부터 자동차의 CO2 배출량을 예측할 수 있습니다. 훈련된 모델을 사용하여 레코드 9와 같은 알려지지 않은 사례의 예상 CO2 배출량을 예측할 수 있습니다.

다중 선형 회귀를 사용하면 단순 선형 회귀를 사용하는 것보다 모형이 더 좋습니다. 그러나 변수를 너무 많이 추가하면 모델이 과대적합되거나 훈련 데이터를 근본적으로 기억하게 되어 보이지 않는 관측값을 예측하기 어려울 수 있습니다. 예측을 개선하기 위해 범주형 독립 변수를 수치형 변수로 변환하여 회귀 모델에 통합할 수 있습니다. 예를 들어, 자동차 유형과 같은 이진 변수가 있는 경우 수동의 경우 코드 0과 자동 자동차의 경우 코드 1을 대체하여 수치로 만들 수 있습니다. 클래스가 세 개 이상인 범주형 변수의 경우 각 클래스당 하나씩 새 부울 기능으로 변환하도록 선택할 수 있습니다.

다중 선형 회귀는 모든 산업에 적용할 수 있습니다. 교육 부문에서 결과를 예측하고 변수 간의 관계를 설명하는 데 널리 사용됩니다. 예를 들어, 수정 시간, 시험 불안감, 강의 출석률, 성별이 학생 시험 성적에 영향을 미칩니까? 다중 선형 회귀를 사용하여 what-if 시나리오의 변경 영향을 예측할 수도 있습니다. What-if 시나리오에는 예측 결과를 확인하기 위해 모델의 입력 특징 중 하나 이상을 가상으로 변경하는 것이 포함됩니다.

예를 들어 어떤 사람의 건강 데이터를 검토한다고 가정해 보겠습니다. 이 경우 다중 선형 회귀를 통해 환자의 체질량 지수 (BMI) 가 바뀔 때마다 혈압이 얼마나 상승하거나 하락하는지 알 수 있습니다. 가정 시나리오는 다음과 같은 상황에서 때때로 부정확한 결과를 제공할 수 있습니다. 모형에서 예측을 얻을 수 없는 시나리오를 고려할 수 있습니다. 학습된 데이터 영역과 너무 멀리 떨어져 있는 시나리오를 추정할 수 있습니다.

모형은 상관 변수 또는 공선상 변수 그룹 중 하나 이상의 변수에 종속될 수 있습니다. 두 변수가 상관관계가 있는 경우 두 변수는 서로에 대한 예측 변수이므로 더 이상 독립 변수가 아닙니다. 선형 회귀 모델을 사용하여 다른 모든 변수는 일정하게 유지하면서 단일 변수를 변경하여 what-if 시나리오를 수행할 수 있습니다. 그러나 변수가 다른 특징과 상관관계가 있는 경우 다른 변수도 현실적으로 변해야 하므로 가능하지 않습니다. 상관관계가 있는 변수로 인한 위험을 방지하는 방법은 회귀 분석에서 중복 변수를 모두 제거하는 것입니다.

다중 회귀 모델을 구축하려면 가장 잘 이해되고 제어 가능하며 목표값과 가장 상관관계가 높은 상관 관계가 없는 변수를 고려하여 균형 잡힌 접근 방식을 사용하여 변수를 선택해야 합니다. 다중 선형 회귀는 각 특징에 상대적 중요성을 할당합니다. 기록상 9번 자동차의 다른 변수로부터 CO2 배출량 (Y) 을 예측한다고 상상해 보십시오. 매개변수를 찾으면 선형 모델 방정식 모델에 연결할 수 있습니다. 예를 들어, theta0은 62.43, theta1은 9.19, theta2는 8.70 등으로 가정해 보겠습니다.

이러한 값을 데이터세트에 매핑하면 CO2 배출량 62.43에 9.19를 엔진 크기로 곱하고 8.70을 실린더로 곱한 값 등으로 선형 모델을 다시 작성할 수 있습니다. 이제 R의 9번째 행을 연결하고 2.4리터 엔진이 장착된 자동차의 CO2 배출량을 계산해 보겠습니다. 따라서 이산화탄소 배출량은 62.43에 9.19 곱하기 2.4 곱하기 8.70 곱하기 4와 같은 식입니다. 이 특정 차량의 CO2 배출량은 208.34가 될 것으로 예측할 수 있습니다. 특징 벡터가 하나뿐인 단순 선형 회귀의 경우 방정식의 회귀가 선을 정의합니다.

두 가지 특징을 사용하는 다중 선형 회귀의 경우 솔루션은 평면을 설명합니다.2차원을 넘어서 초평면을 묘사합니다. 단순 선형 회귀와 마찬가지로 평균 제곱 예측 오차를 최소화하여 가중치 벡터 theta의 값을 결정할 수 있습니다. 파라미터 집합이 주어지면 파라미터와 특징의 선형 조합을 기반으로 하는 선형 모델을 생각해 보십시오. 데이터셋의 각 차량에 대한 잔류 오차를 실제 CO2 배출량과 모델에서 예측한 값 간의 차이로 측정할 수 있습니다. 예를 들어, 모델이 실제 값인 196을 사용하여 데이터셋의 첫 번째 자동차 값으로 140을 예측하면 잔차 오차가 196에서 140, 즉 56을 뺀 값임을 알 수 있습니다.

모든 잔차 오차의 평균은 모형이 실제 값을 얼마나 잘못 예측하는지를 나타냅니다. 이 정보를 평균 제곱 오차 또는 MSE 라고 합니다. MSE는 선형 모델의 오류를 노출하는 유일한 방법이 아닙니다. 이 메트릭을 사용할 경우 데이터셋에 가장 적합한 모델은 오차 제곱이 가장 작은 모델입니다. 오차를 최소화하기 위해 MSE 방정식에 슬래시 n의 인수 1을 포함할 필요는 없으므로 이 방법을 최소 제곱 선형 회귀라고 합니다.

따라서 다중 선형 회귀는 최상의 파라미터를 찾아 MSE 방정식을 최소화하는 것을 목표로 합니다. 이러한 계수의 값을 추정하는 방법은 여러 가지가 있습니다. 그러나 가장 일반적인 방법은 일반 최소제곱법과 최적화 접근법입니다. 일반 최소제곱은 평균 제곱 오차를 최소화하여 계수 값을 추정합니다. 이 방법은 데이터를 행렬로 사용하고 선형 대수 연산을 사용하여 세타의 최적값을 계산합니다.

또 다른 옵션은 최적화 알고리즘을 사용하여 최적의 파라미터를 찾는 것입니다. 즉, 훈련 데이터에 대한 모델의 오차를 반복적으로 최소화하여 계수를 최적화하는 프로세스를 사용할 수 있습니다. 예를 들어, 각 계수에 대한 랜덤 값으로 최적화를 시작하는 경사하강법을 사용할 수 있습니다. 데이터셋이 큰 경우에는 경사하강법을 사용하는 것이 좋습니다. 다중 선형 회귀는 단순 선형 회귀 모델의 확장입니다.

둘 이상의 독립 변수를 사용하여 종속 변수를 추정합니다. 교육 부문에서 결과를 예측하고 변수 간의 관계를 설명하는 데 널리 사용됩니다. 다중 선형 회귀를 사용하여 what-if 시나리오의 변경 영향을 예측할 수도 있습니다. 변수를 너무 많이 추가하면 모델이 과적합되거나 기본적으로 훈련 데이터를 기억하게 되어 보이지 않는 관측값에 대한 예측 변수가 될 수 있습니다. 다중 회귀 모델을 구축하려면 가장 잘 이해되고 제어 가능하며 목표값과 가장 상관관계가 높은 상관 관계가 없는 변수를 고려하여 균형 잡힌 접근 방식을 사용하여 변수를 선택해야 합니다.

다중 선형 회귀의 파라미터를 추정하는 방법에는 여러 가지가 있습니다. 그러나 일반적인 최소제곱법과 랜덤 값을 사용한 최적화 접근법이 가장 일반적인 방법입니다. 이 비디오에서는 다중 선형 회귀가 단순 선형 회귀를 사용하는 것보다 더 나은 모델을 만드는 방법을 배웠습니다.

## 예시
- 훈련된 모델을 사용하여 레코드 9와 같은 알려지지 않은 사례의 예상 CO2 배출량을 예측할 수 있습니다.
- 예를 들어, 자동차 유형과 같은 이진 변수가 있는 경우 수동의 경우 코드 0과 자동 자동차의 경우 코드 1을 대체하여 수치로 만들 수 있습니다.
- 예를 들어, 수정 시간, 시험 불안감, 강의 출석률, 성별이 학생 시험 성적에 영향을 미칩니까?
- 예를 들어 어떤 사람의 건강 데이터를 검토한다고 가정해 보겠습니다.

## 요약
- 다중 선형 회귀는 모든 산업에 적용할 수 있습니다.
- 다중 선형 회귀는 단순 선형 회귀 모델의 확장입니다.
- 이 비디오에서는 다중 선형 회귀가 단순 선형 회귀를 사용하는 것보다 더 나은 모델을 만드는 방법을 배웠습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to this video on Introduction to Multiple Linear Regression. After watching this video, you will be able to Describe Multiple Linear Regression Compare Multiple Linear Regression and Simple Linear Regression and List the Pitfalls of Multiple Linear Regression Multiple Linear Regression is an extension of the Simple Linear Regression model. It uses two or more independent variables to estimate a dependent variable. Mathematically, the multiple regression model is a linear combination of the form y hat equals theta zero plus theta one x one, where the x one are the feature vectors that can be represented as a matrix x that includes a constant value of one in the first entry to account for the bias or intercept term theta underscore zero, and the thetas are the unknown weights, which can be represented as matrix theta. Let's consider the data set in this table.

Multiple linear regression can be used to measure the strength of each independent variable's effect on a dependent variable. You can predict the CO2 emission of a motor car from features like engine size, number of cylinders, and fuel consumption by forming a linear combination of the features using trained weights, theta i. You can use the trained model to predict the expected CO2 emission of an unknown case, such as record number 9. Multiple linear regression results in a better model than using a simple linear regression. However, adding too many variables can cause your model to overfit or essentially memorize the training data, making it a poor predictor for unseen observations.

To improve prediction, categorical independent variables can be incorporated into a regression model by converting them into numerical variables. For example, given a binary variable such as car type, the code zero for manual and one for automatic cars can be substituted to make it numerical. For a categorical variable with more than two classes, you can opt to transform it into new Boolean features, one for each class. Multiple linear regression has applications in every industry. It is widely used in the education sector to predict outcomes and explain relationships between variables.

For example, do revision time, test anxiety, lecture attendance, and gender affect student exam performance? Multiple linear regression can also be used to predict the impact of changes in what-if scenarios. What-if scenarios involve hypothetical changes to one or more of your model's input features to see the predicted outcome. For example, suppose you were reviewing a person's health data. In that case, multiple linear regression might be able to tell you how much that person's blood pressure would rise or fall for every change in a patient's body mass index, BMI.

The what-if scenario can sometimes provide inaccurate findings in the following situations. You might consider impossible scenarios for your model to obtain predictions. You might extrapolate scenarios that are too distant from the realm of data it was trained on. Your model might depend on more than one variable amongst a group of correlated or collinear variables. When two variables are correlated, they are no longer independent variables because they are predictors of each other.

You can perform a what-if scenario with a linear regression model by changing a single variable while holding all other variables constant. However, if the variable is correlated with another feature, then this is not feasible because the other variable must also change realistically. The solution for avoiding pitfalls from correlated variables is to remove any redundant variables from the regression analyses. To build your multiple regression model, you must select your variables using a balanced approach considering uncorrelated variables, which are most understood, controllable, and most correlated with the target. Multiple linear regression assigns a relative importance to each feature.

Imagine you are predicting CO2 emission, or Y, from other variables for the automobile in record number 9. Once you find the parameters, you can plug them into the linear model equation model. For example, let's use theta0 equals 62.43, theta1 equals 9.19, theta2 equals 8.70, and so on. If we map these values to our dataset, we can rewrite the linear model as CO2 emission equals 62.43 plus 9.19 multiplied by engine size plus 8.70 multiplied by cylinder and so on. Now, let's plug in the 9th row of R and calculate the CO2 emissions for a car with a 2.4 liter engine.

So, CO2 emission equals 62.43 plus 9.19 times 2.4 plus 8.70 times 4, and so on. We can predict that the CO2 emission for this specific car will be 208.34. For a simple linear regression, where there is only one feature vector, the regression in the equation defines a line. For multiple linear regression using two features, the solution describes a plane. Beyond two dimensions, it describes a hyperplane.

Like with simple linear regression, the values in the weight vector theta can be determined by minimizing the mean square prediction error. Given a set of parameters, consider a linear model based on the linear combination of the parameters with the features. You can measure the residual error for each car in the dataset as the difference between its true CO2 emission value and the value predicted by the model. For example, if the model predicts 140 as the value for the first car in the dataset, using the actual value of 196, you can see the residual error is 196 minus 140, or 56. The average of all the residual errors indicates how poorly the model predicts the actual values.

This information is called the mean squared error, or MSE. MSE is not the only way to expose the error of a linear model. However, it is the most popular. With this metric, the best model for the dataset is the one with the least squared error. The factor of 1 slash n in the MSE equation isn't necessary to include to minimize the error, so this method is called least squares linear regression.

So, multiple linear regression aims to minimize the MSE equation by finding the best parameters. There are many ways to estimate the value of these coefficients. However, ordinary least squares and an optimization approach are the most common methods. Ordinary least squares estimate the values of the coefficients by minimizing the mean squared error. This approach uses the data as a matrix and uses linear algebra operations to calculate the optimal values for theta.

Another option is to use an optimization algorithm to find the best parameters. That is, you can use a process of optimizing the coefficients by iteratively minimizing the model's error on your training data. For example, you can use the gradient descent method, which starts the optimization with random values for each coefficient. Gradient descent is a good approach if you have a large dataset. Multiple linear regression is an extension of the simple linear regression model.

It uses two or more independent variables to estimate a dependent variable. It is widely used in the education sector to predict outcomes and explain relationships between variables. Multiple linear regression can also be used to predict the impact of changes in what-if scenarios. Adding too many variables can cause your model to overfit or essentially memorize the training data, making it a poor predictor for unseen observations. To build your multiple regression model, you must select your variables using a balanced approach, considering uncorrelated variables, which are most understood, controllable, and most correlated with the target.

There are many ways to estimate the parameters for multiple linear regression. However, ordinary least squares and an optimization with random values approach are the most common methods. In this video, you learned how multiple linear regression results in a better model than using a simple linear regression.

</details>
