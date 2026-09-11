# Linear Regression and Multiple Linear Regression

## 개요
- 강좌: Data Analysis with Python
- 모듈: Model Development
- 재생 시간: 7분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/Wlyce/linear-regression-and-multiple-linear-regression)
- [음악] 이 비디오에서는 단순 선형 회귀와 다중 선형 회귀에 대해 설명하겠습니다.
- 선형 회귀는 하나의 독립 변수를 참조하여 예측합니다.

## 내용
### 핵심 내용
- [음악] 이 비디오에서는 단순 선형 회귀와 다중 선형 회귀에 대해 설명하겠습니다.
- 선형 회귀는 하나의 독립 변수를 참조하여 예측합니다.
- 단순 선형 회귀 또는 SLR은 예측 변수 (독립 변수 x) 와 목표 (종속 변수 y) 라는 두 변수 간의 관계를 이해하는 데 도움이 되는 방법입니다.
- 이러한 변수 사이에 선형 관계가 있다고 가정하면 이 관계를 사용하여 자동차 가격을 결정하는 모델을 만들 수 있습니다.
- 다중 선형 회귀는 하나의 연속형 목표 (y) 변수와 둘 이상의 예측 변수 (x) 변수 간의 관계를 설명하는 데 사용됩니다.
- 4개의 예측 변수를 추출하여 변수 z에 저장한 다음, 적합변수 또는 종속 변수 및 대상 콜론 방법을 사용하여 이전과 같이 모델을 훈련시킬 수 있습니다.

### 한국어 Transcript

[음악] 이 비디오에서는 단순 선형 회귀와 다중 선형 회귀에 대해 설명하겠습니다. 선형 회귀는 하나의 독립 변수를 참조하여 예측합니다. 다중 선형 회귀는 여러 독립 변수를 참조하여 예측합니다. 단순 선형 회귀 또는 SLR은 예측 변수 (독립 변수 x) 와 목표 (종속 변수 y) 라는 두 변수 간의 관계를 이해하는 데 도움이 되는 방법입니다. 여기에 표시된 변수 간의 선형 관계를 생각해 보겠습니다.

파라미터 b0은 절편이고, 파라미터 b1은 기울기입니다. 모델을 피팅하거나 훈련할 때 다음과 같은 파라미터를 얻을 수 있습니다. 이 단계에는 많은 수학이 필요하므로 이 부분에서는 다루지 않겠습니다. 예측 단계를 명확히 설명해 보겠습니다. 자동차 가격이 얼마인지 알아내기는 어렵지만 고속도로 1갤런당 주행 거리는 사용 설명서에 나와 있습니다.

이러한 변수 사이에 선형 관계가 있다고 가정하면 이 관계를 사용하여 자동차 가격을 결정하는 모델을 만들 수 있습니다. 갤런당 고속도로 주행 거리가 20이면 이 값을 모델에 입력하여 22,000달러의 예측치를 얻을 수 있습니다. 선을 결정하기 위해 여기에 빨간색으로 표시된 데이터 세트에서 데이터 포인트를 가져옵니다. 그런 다음 이 훈련 포인트를 사용하여 모델에 맞춥니다. 훈련 포인트의 결과는 매개변수입니다.

일반적으로 데이터 포인트를 두 개의 데이터 프레임 또는 NumPy 배열에 저장합니다. 예측하려는 값을 배열 y에 저장하는 대상이라고 합니다. 종속 변수를 데이터 프레임 또는 배열 x에 저장합니다. 각 샘플은 각 데이터 프레임 또는 배열의 다른 행에 해당합니다. 대부분의 경우 제조사 또는 연식 등 많은 요인이 사람들이 지불한 자동차 가격에 영향을 미칩니다.

이 모형에서는 선 위의 점에 작은 랜덤 값이 더해진다고 가정하여 이러한 불확실성을 고려합니다. 왼쪽 그림은 소음의 분포를 보여줍니다. 세로축은 추가된 값을 나타내고 가로축은 값이 추가될 확률을 나타냅니다. 일반적으로 작은 양수 값이 추가되거나 작은 음수 값이 추가됩니다. 큰 값이 추가되는 경우도 있지만 대부분의 경우 추가된 값은 0에 가깝습니다.

프로세스를 다음과 같이 요약할 수 있습니다. 이러한 훈련 포인트를 사용하여 모델을 피팅하거나 학습시키고 파라미터를 얻습니다. 그런 다음 이 파라미터를 모델에 사용했고, 이제 모델이 생겼습니다. y의 모자를 사용하여 모형이 추정치임을 나타냅니다. 이 모델을 사용하여 지금까지 보지 못한 값을 예측할 수 있습니다.

예를 들어 고속도로 주행 거리가 갤런당 20마일을 주행하는 자동차는 한 대도 없습니다. 모델을 사용하여 이 차의 가격을 예측할 수 있지만 모델이 항상 정확하지는 않다는 점을 잊지 마세요. 예측치를 실제 값과 비교하여 이를 확인할 수 있습니다. 갤런당 고속도로 주행 거리 10마일에 대한 표본이 있지만 예측값이 실제 값과 일치하지 않습니다. 선형 가정이 정확하다면 이 오차는 노이즈로 인한 것이지만 다른 이유가 있을 수 있습니다.

Python에서 모델을 피팅하려면 먼저 scikit-learn에서 선형 모델을 가져와야 합니다. 그런 다음 생성자를 사용하여 선형 회귀 객체를 만듭니다. 예측 변수와 대상 변수를 정의합니다. 그런 다음 fit 메서드를 사용하여 모델을 피팅하고 매개변수 b0과 b1을 구합니다. predict 메서드를 사용하여 예측을 얻을 수 있습니다.

배열은 입력값 x와 동일한 수의 샘플을 가집니다. 절편 b0은 객체 lm의 속성이고 기울기 b1은 객체 lm의 속성이기도 합니다. 가격과 갤런당 고속도로 주행 거리 간의 관계는 다음 방정식으로 굵게 표시됩니다. 가격 = 갤런당 고속도로 마일당 38,423.31 - 821.73배 (앞서 논의한 방정식과 같습니다). 다중 선형 회귀는 하나의 연속형 목표 (y) 변수와 둘 이상의 예측 변수 (x) 변수 간의 관계를 설명하는 데 사용됩니다.

예를 들어 예측 변수가 4개인 경우 b0은 x=0, b1, x1, b2의 계수 또는 모수, 모수 x2의 계수 등을 절편합니다. 변수가 두 개뿐인 경우 값을 시각화할 수 있습니다. 다음 함수를 예로 들어 변수 x1과 x2를 2D 평면에 시각화할 수 있다고 가정해 보겠습니다. 다음 슬라이드에서 예를 들어 보겠습니다. 테이블에는 예측 변수 x1과 x2의 서로 다른 값이 포함되어 있습니다.

각 점의 위치는 2D 평면에 배치되며 그에 따라 색상이 구분됩니다. 예측 변수 x1과 x2의 각 값은 새 값 y, y hat에 매핑됩니다. y의 새 값인 y hat은 세로 방향으로 매핑되며 높이는 y hat이 취하는 값에 비례합니다. 다중 선형 회귀를 다음과 같이 적합시킬 수 있습니다. 4개의 예측 변수를 추출하여 변수 z에 저장한 다음, 적합변수 또는 종속 변수 및 대상 콜론 방법을 사용하여 이전과 같이 모델을 훈련시킬 수 있습니다.

predict 메서드를 사용하여 예측을 얻을 수도 있습니다. 이 경우 입력값은 네 개의 열로 구성된 배열 또는 데이터 프레임입니다. 출력값은 샘플 개수와 요소 개수가 같은 배열입니다. 절편은 객체의 속성이고 계수도 속성입니다. 종속 변수 이름을 실제 이름으로 바꾸는 방정식을 시각화하면 도움이 됩니다.

이는 앞서 설명한 형식과 동일합니다.

## 예시
- 예를 들어 고속도로 주행 거리가 갤런당 20마일을 주행하는 자동차는 한 대도 없습니다.
- 예를 들어 예측 변수가 4개인 경우 b0은 x=0, b1, x1, b2의 계수 또는 모수, 모수 x2의 계수 등을 절편합니다.
- 다음 슬라이드에서 예를 들어 보겠습니다.

## 요약
- 이러한 변수 사이에 선형 관계가 있다고 가정하면 이 관계를 사용하여 자동차 가격을 결정하는 모델을 만들 수 있습니다.
- 다중 선형 회귀는 하나의 연속형 목표 (y) 변수와 둘 이상의 예측 변수 (x) 변수 간의 관계를 설명하는 데 사용됩니다.
- 4개의 예측 변수를 추출하여 변수 z에 저장한 다음, 적합변수 또는 종속 변수 및 대상 콜론 방법을 사용하여 이전과 같이 모델을 훈련시킬 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

[MUSIC] In this video, we'll be talking about simple linear regression and multiple linear regression. Linear regression will refer to one independent variable to make a prediction. Multiple linear regression will refer to multiple independent variables to make a prediction. Simple linear regression, or SLR, is a method to help us understand the relationship between two variables: the predictor (independent variable x) and the target (dependent variable y). We would like to come up with a linear relationship between the variables shown here.

The parameter b0 is the intercept, the parameter b1 is the slope. When we fit or train the model we will come up with these parameters. This step requires lots of math, so we will not focus on this part. Let's clarify the prediction step. It's hard to figure out how much a car costs, but the highway miles per gallon is in the owner's manual.

If we assume there is a linear relationship between these variables, we can use this relationship to formulate a model to determine the price of the car. If the highway miles per gallon is 20, we can input this value into the model to obtain a prediction of $22,000. In order to determine the line, we take data points from our data set marked in red here. We then use these training points to fit our model. The results of the training points are the parameters.

We usually store the data points in two data frame or NumPy arrays. The value we would like to predict is called the target that we store in the array y. We store the dependent variable in the data frame or array x. Each sample corresponds to a different row in each data frame or array. In many cases, many factors influence how much people paid for a car, for example, make or how old the car is.

In this model, this uncertainty is taken into account by assuming a small random value is added to the point on the line. This is called noise. The figure on the left shows the distribution of the noise. The vertical axis shows the value added and the horizontal axis illustrates the probability that the value will be added. Usually a small positive value is added or a small negative value.

Sometimes large values are added, but for the most part, the values added are near zero. We can summarize the process like this. We have a set of training points. We use these training points to fit or train the model and get parameters. We then use these parameters in the model, we now have a model.

We use the hat on the y to denote the model is an estimate. We can use this model to predict values that we haven't seen, for example, we have no car with 20 highway miles per gallon. We can use our model to make a prediction for the price of this car but don't forget our model is not always correct. We can see this by comparing the predicted value to the actual value. We have a sample for ten highway miles per gallon, but the predicted value does not match the actual value.

If the linear assumption is correct, this error is due to the noise but there can be other reasons. To fit the model in Python, first we import linear model from scikit-learn. Then create a linear regression object using the constructor. We define the predictor variable and target variable. Then use the method fit to fit the model and find the parameters b0 and b1, the input are the features and the targets.

We can obtain a prediction using the method predict. The output is an array. The array has the same number of samples as the input x. The intercept b0 is an attribute of the object lm the slope b1 is also an attribute of the object lm. The relationship between price and highway miles per gallon is given by this equation in bold: price = 38,423.31 - 821.73 times highway miles per gallon, like the equation we discussed before.

Multiple linear regression is used to explain the relationship between one continuous target (y) variable and two or more predictor (x) variables. If we have, for example, four predictor variables, then b0 intercept x=0, b1, the coefficient or parameter of x1, b2, the coefficient of parameter x2, and so on. If there are only two variables, then we can visualize the values. Consider the following function the variables x1 and x2 can be visualized on a 2D plane, let's do an example on the next slide. The table contains different values of the predictor variables x1 and x2.

The position of each point is placed on the 2D plane, color coded accordingly. Each value of the predictor variables x1 and x2 will be mapped to a new value y, y hat. The new values of y, y hat, are mapped in the vertical direction with height proportional to the value that y hat takes. We can fit the multiple linear regression as follows. We can extract the four predictor variables and store them in the variable z then train the model as before using the method fit or dependent variables and the targets colon.

We can also obtain a prediction using the method predict. In this case, the input is an Array or data frame with four columns. The number of rows corresponds to the number of samples. The output is an array with the same number of elements as number of samples. The intercept is an attribute of the object and the coefficients are also attributes.

It is helpful to visualize the equation replacing the independent variable names with actual names. This is identical to the form we discussed earlier.

</details>
