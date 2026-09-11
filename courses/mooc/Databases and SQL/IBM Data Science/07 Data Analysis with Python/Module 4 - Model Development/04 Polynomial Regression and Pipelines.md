# Polynomial Regression and Pipelines

## 개요
- 강좌: Data Analysis with Python
- 모듈: Model Development
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/ZaaYS/polynomial-regression-and-pipelines)
- [음악] 이 비디오에서는 다항식 회귀와 파이프라인을 다룰 것입니다.
- 선형 모델이 데이터에 가장 적합하지 않을 때는 어떻게 해야 할까요?

## 내용
### 핵심 내용
- [음악] 이 비디오에서는 다항식 회귀와 파이프라인을 다룰 것입니다.
- 선형 모델이 데이터에 가장 적합하지 않을 때는 어떻게 해야 할까요?
- 또 다른 유형의 회귀 모델인 다항식 회귀를 살펴보겠습니다.
- 다항식 회귀의 순서를 변경할 때 그래프가 얼마나 많이 변하는지 그림으로 볼 수 있습니다.
- 다차원 다항식 선형 회귀도 사용할 수 있습니다.
- 다항식 변환, 정규화, 선형 회귀를 예로 들 수 있습니다.

### 한국어 Transcript

[음악] 이 비디오에서는 다항식 회귀와 파이프라인을 다룰 것입니다. 선형 모델이 데이터에 가장 적합하지 않을 때는 어떻게 해야 할까요? 또 다른 유형의 회귀 모델인 다항식 회귀를 살펴보겠습니다. 데이터를 다항식으로 변환한 다음 선형 회귀 분석을 사용하여 파라미터를 피팅합니다. 그런 다음 파이프라인에 대해 설명하겠습니다.

파이프라인은 코드를 간소화하는 방법입니다. 다항식 회귀는 일반 선형 회귀의 특수한 경우입니다. 이 방법은 곡선 관계를 설명하는 데 유용합니다. 이는 데이터를 변환하는 모델에서 예측 변수의 고차 항을 제곱하거나 설정하여 얻을 수 있는 결과입니다. 모형은 2차 방수가 될 수 있는데, 이는 모형의 예측 변수가 제곱됨을 의미합니다.

대괄호를 사용하여 지수로 표시합니다. 이것은 함수를 나타내는 그림이 있는 2차 다항식 회귀입니다. 그림을 살펴보면 함수의 변동이 더 크다는 것을 알 수 있습니다.2차 또는 3차 피팅이 제대로 이루어지지 않은 경우 고차 다항식 회귀도 발생합니다. 다항식 회귀의 순서를 변경할 때 그래프가 얼마나 많이 변하는지 그림으로 볼 수 있습니다. 회귀 정도에 따라 큰 차이가 발생하며 올바른 값을 선택하면 더 나은 피팅을 얻을 수 있습니다.

모든 경우에 변수와 매개변수 간의 관계는 항상 선형입니다. 데이터에서 다항식 회귀 모델을 생성하는 예제를 살펴보겠습니다. 파이썬에서는 polyfit 함수를 사용하여 이 작업을 수행합니다. 이 예제에서는 3차 다항식 회귀 모델 기반을 개발합니다. 모형의 기호 형식은 다음과 같은 식으로 표현됩니다.

-1.557 (x_1) 제곱 + 204.8 (x_1) 제곱 + 8965 x_1 + 1.37 곱하기 10을 5의 거듭제곱으로 구합니다. 다차원 다항식 선형 회귀도 사용할 수 있습니다. 다음은 2차원 2차 다항식에 대한 몇 가지 용어입니다. NumPy의 polyfit 함수는 이러한 유형의 회귀를 수행할 수 없습니다. scikit-learn의 전처리 라이브러리를 사용하여 다항식 특징 객체를 만듭니다.

생성자는 다항식의 차수를 매개변수로 사용합니다. 그런 다음 fit_transform 메서드를 사용하여 특징을 다항식 특성으로 변환합니다. 좀 더 직관적인 예를 들어보겠습니다. 여기에 표시된 기능을 고려해 보십시오. 이 방법을 적용하여 데이터를 변환합니다.

이제 원래 기능을 변형한 새로운 기능 세트가 생겼습니다. 데이터의 크기가 커짐에 따라 scikit-learn의 여러 기능을 정규화하고 싶을 수 있습니다. 대신 전처리 모듈을 사용하여 많은 작업을 단순화할 수 있습니다. 예를 들어 각 기능을 동시에 표준화할 수 있습니다. 객체를 훈련하고 스케일 객체를 피팅한 다음 데이터를 x_scale 배열의 새 데이터 프레임으로 변환합니다.

전처리 라이브러리에는 다른 변환뿐만 아니라 더 많은 정규화 방법을 사용할 수 있습니다. 파이프라인 라이브러리를 사용하여 코드를 단순화할 수 있습니다. 예측을 하려면 여러 단계를 거쳐야 합니다. 다항식 변환, 정규화, 선형 회귀를 예로 들 수 있습니다. 파이프라인을 사용하여 프로세스를 단순화합니다.

파이프라인은 일련의 변환을 순차적으로 수행합니다. 마지막 단계에서는 예측을 수행합니다. 먼저 필요한 모든 모듈을 가져옵니다. 그런 다음 라이브러리 파이프라인을 가져옵니다. 튜플의 첫 번째 요소에는 추정기 모델이라는 이름이 포함됩니다.

두 번째 요소는 모델 생성자를 포함합니다. 파이프라인 생성자에 목록을 입력합니다. train 메서드를 파이프라인 객체에 적용하여 파이프라인을 훈련시킬 수 있습니다. 이 메서드는 데이터를 정규화하고 다항식 변환을 수행한 다음 예측을 출력합니다.

## 예시
- 파이프라인은 코드를 간소화하는 방법입니다.
- 좀 더 직관적인 예를 들어보겠습니다.
- 예를 들어 각 기능을 동시에 표준화할 수 있습니다.
- 파이프라인 라이브러리를 사용하여 코드를 단순화할 수 있습니다.

## 요약
- 다항식 회귀의 순서를 변경할 때 그래프가 얼마나 많이 변하는지 그림으로 볼 수 있습니다.
- 다차원 다항식 선형 회귀도 사용할 수 있습니다.
- 다항식 변환, 정규화, 선형 회귀를 예로 들 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

[MUSIC] In this video, we will cover polynomial regression and pipelines. What do we do when a linear model is not the best fit for our data? Let's look into another type of regression model, the polynomial regression. We transform our data into a polynomial, then use linear regression regression to fit the parameter. Then we will discuss pipelines.

Pipelines are a way to simplify your code. Polynomial regression is a special case of the general linear regression. This method is beneficial for describing curvilinear relationships. What is a curvilinear relationship? It's what you get by squaring or setting higher-order terms of the predictor variables in the model transforming the data.

The model can be quadratic, which means that the predictor variable in the model is squared. We use a bracket to indicate it as an exponent. This is a 2nd order polynomial regression with a figure representing the function. The model can be cubic, which means that the predictor variable is cubed. This is a 3rd order polynomial regression.

We see by examining the figure that the function has more variation. There also exists higher-order polynomial regressions when a good fit hasn't been achieved by 2nd or 3rd order. We can see in figures how much the graphs change when we change the order of the polynomial regression. The degree of the regression makes a big difference and can result in a better fit if you pick the right value. In all cases, the relationship between the variable and the parameter is always linear.

Let's look at an example from our data where we generate a polynomial regression model. In Python, we do this by using the polyfit function. In this example, we develop a 3rd order polynomial regression model base. We can print out the model. The symbolic form for the model is given by the following expression: -1.557 (x_1) cubed + 204.8 (x_1) squared + 8965 x_1 + 1.37 times 10 to the power of 5.

We can also have multidimensional polynomial linear regression. The expression can get complicated. Here are just some of the terms for a two-dimensional 2nd order polynomial. NumPy's polyfit function cannot perform this type of regression. We use the preprocessing library in scikit-learn to create a polynomial feature object.

The constructor takes the degree of the polynomial as a parameter. Then we transform the features into a polynomial feature with the fit_transform method. Let's do a more intuitive example. Consider the features shown here. Applying the method, we transform the data.

We now have a new set of features that are a transformed version of our original features. As the dimension of the data gets larger, we may want to normalize multiple features in scikit-learn. Instead, we can use the preprocessing module to simplify many tasks. For example, we can standardize each feature simultaneously. We import standard scalar.

We train the object, fit the scale object, then transform the data into a new data frame on array x_scale. There are more normalization methods available in the preprocessing library as well as other transformations. We can simplify our code by using a pipeline library. There are many steps to getting a prediction. For example, polynomial transform, normalization, and linear regression.

We simplify the process using a pipeline. Pipelines sequentially perform a series of transformations. The last step carries out a prediction. First, we import all the modules we need. Then we import the library pipeline.

We create a list of tuples. The first element in the tuple contains the name of the estimator, model. The second element contains model constructor. We input the list in the pipeline constructor. We now have a pipeline object.

We can train the pipeline by applying the train method to the pipeline object. We can also produce a prediction as well. The method normalizes the data, performs a polynomial transform, then outputs a prediction.

</details>
