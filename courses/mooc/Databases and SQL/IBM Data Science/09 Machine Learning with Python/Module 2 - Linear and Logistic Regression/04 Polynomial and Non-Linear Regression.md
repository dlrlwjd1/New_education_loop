# Polynomial and Non-Linear Regression

## 개요
- 강좌: Machine Learning with Python
- 모듈: Linear and Logistic Regression
- 재생 시간: 7분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/ZaXNm/polynomial-and-non-linear-regression)
- 이 비디오를 시청한 후에는 다항식 회귀를 설명하고, 비선형 회귀를 설명하고, 비선형 회귀의 응용 사례를 시연할 수 있습니다.
- 비선형 회귀는 종속 변수와 하나 이상의 독립 변수 간의 관계를 모델링하기 위한 통계적 방법이며, 여기서 관계는 비선형 방정식으로 표현됩니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 다항식 회귀를 설명하고, 비선형 회귀를 설명하고, 비선형 회귀의 응용 사례를 시연할 수 있습니다.
- 비선형 회귀는 종속 변수와 하나 이상의 독립 변수 간의 관계를 모델링하기 위한 통계적 방법이며, 여기서 관계는 비선형 방정식으로 표현됩니다.
- 다양한 종류의 비선형 회귀 방법을 사용하여 데이터셋을 모델링할 수 있습니다.
- 독립 변수 x와 종속 변수 y 간의 관계가 x의 n차 다항식으로 모델링되는 이 다항식 회귀를 모두 다항식 회귀라고 할 수 있습니다.
- 이 비디오에서는 다항식 회귀를 사용하여 특징의 다항식 표현식에 데이터를 피팅하는 방법을 배웠습니다.
- 회귀 트리, 랜덤 포레스트, k-최근접 이웃과 같은 여러 머신러닝 모델 중에서 선택하여 최적의 비선형 모델을 찾을 수 있습니다.

### 한국어 Transcript

다항식 및 비선형 회귀 소개에 오신 것을 환영합니다. 이 비디오를 시청한 후에는 다항식 회귀를 설명하고, 비선형 회귀를 설명하고, 비선형 회귀의 응용 사례를 시연할 수 있습니다. 비선형 회귀는 종속 변수와 하나 이상의 독립 변수 간의 관계를 모델링하기 위한 통계적 방법이며, 여기서 관계는 비선형 방정식으로 표현됩니다. 이 방정식은 다항식, 지수, 로그 또는 선형 매개변수를 사용하지 않는 기타 함수일 수 있습니다. 비선형 회귀는 변수 간에 복잡한 관계가 있지만 직선으로 캡처할 수 없는 경우에 유용합니다.

예를 들어, 기하급수적 성장 패턴을 따르는 데이터셋을 사용할 때는 비선형 회귀를 사용할 수 있습니다. 왼쪽 차트의 데이터를 가로지르는 빨간색 선이 적당합니다. 그러나 실제 데이터에서는 입력 변수와 목표 변수 간의 관계가 선형인 경우가 거의 없습니다. 일반적으로 데이터의 배경 추세가 직선이 아닌 평활된 곡선을 따릅니다. 오른쪽 차트에서처럼 평활한 비선형 곡선이 직선보다 데이터를 근사화하는 데 더 효과적이라는 것은 분명합니다.

직선은 데이터를 제대로 나타내지 않습니다. 다양한 종류의 비선형 회귀 방법을 사용하여 데이터셋을 모델링할 수 있습니다. 다항식 회귀에서는 일반 선형 회귀를 사용하여 특징 자체가 아닌 특징의 다항식 표현식에 데이터를 간접적으로 피팅합니다. 비선형 회귀도 같은 개념을 따르지만, 특징의 로그나 지수와 같은 주어진 특징의 함수를 입력값으로 합니다. 비선형 회귀가 다항식 회귀처럼 반드시 선형 회귀로 축소되는 것은 아닙니다.

이 차트에서는 데이터의 패턴에 매우 잘 맞는 선형, 2차 및 3차 회귀 곡선을 볼 수 있습니다. 그리고 이 접근법은 임의의 정도의 다항식에도 적용될 수 있습니다. 독립 변수 x와 종속 변수 y 간의 관계가 x의 n차 다항식으로 모델링되는 이 다항식 회귀를 모두 다항식 회귀라고 할 수 있습니다. 이 다항식 회귀 분석을 예로 들어 보겠습니다. 이 다항식 회귀 분석을 예로 들어 보겠습니다.

y로 주어진 값은 theta 0+theta 1+theta 2 x 제곱+theta 3과 같습니다. 여기서 theta는 x에 밑줄을 긋고 1은 x와 같고, x는 2의 거듭제곱과 같고, x는 x를 2의 거듭제곱으로, x는 3의 거듭제곱과 같으므로 새로운 변수를 도입하여 기본 데이터에 가장 잘 맞는 매개변수를 추정할 수 있습니다. 이제 모델은 y가 세타 0+세타 1 x 1+세타 2 x 2+세타 3 x 3과 같으므로 새 변수의 선형 조합으로 표현할 수 있습니다. 결과 모델이 선형화되었으므로 일반 다중 선형 회귀를 사용하여 가장 적합한 파라미터를 간단히 찾을 수 있습니다. 유한한 점 집합이 주어지면 모든 점을 통과하는 충분히 높은 차수의 다항식을 찾는 것은 항상 가능합니다.

이 차트에서 볼 수 있듯이 이러한 완벽한 적합은 과적합에 해당합니다. 다항식 회귀 모델은 기본 패턴을 이해하기보다는 임의의 잡음이나 큰 변동을 포함한 모든 것을 기억합니다. 과적합 없이 데이터를 잘 피팅하는 회귀 분석을 선택하는 것이 중요합니다. 모든 세부 사항을 캡처할 필요는 없으며 트렌드만 캡처할 수 있습니다. 다항식 회귀는 특수한 형태의 비선형 회귀입니다.

입력 특성에 대한 비선형 종속성을 나타내지만 선형 회귀 문제로 변환될 수 있기 때문에 회귀 계수에 대한 선형 종속성을 갖습니다. 이를 간단히 선형 회귀라고 하는 경우가 많습니다. 이와 대조적으로, 실제 세계에는 다항식으로 모델링할 수 없는 복잡한 비선형 관계가 많이 있습니다. 이러한 비선형 회귀의 일반적인 예로는 지수 성장 또는 복합 성장이 있습니다. 예를 들어, 복리 이자율로 투자가 어떻게 증가하는지.

예를 들어 수익률 감소의 법칙, 노동과 같은 생산 요소에 대한 투자가 증가함에 따라 생산성이나 이윤의 점진적 증가가 감소할 수 있는 방법 등이 있습니다. 예를 들어 월별 강우량 또는 기온과 같은 수량의 사인파 계절 변화. 이 데이터를 1960년부터 2014년까지의 중국 국내총생산 (GDP) 에 해당한다고 가정해 보겠습니다. 각 행은 해당 연도의 중국 연간 GDP를 미국 달러로 표시합니다. 스캐터 차트는 GDP의 시간 의존도가 높지만 관계는 비선형적입니다.

보시다시피 GDP는 시간이 지남에 따라 증가하고 이러한 성장률도 증가합니다. 이러한 증가율은 기하급수적 성장의 특징입니다. 그런 다음 합리적인 회귀 모델은 y-hat은 세타-0에 세타-1을 더한 e-x와 같은 지수 함수를 사용합니다. 인간의 생산성을 연속 근무 시간의 함수로 나타낸 다음 시뮬레이션 예를 생각해 보십시오. 하루 평균 더 많은 시간을 일하면 생산성이 향상됩니다.

그러나 합당한 제한 (예: 6시간 작업) 후에는 작업 시간이 늘어날 때마다 이전 시간보다 시간당 생산성이 떨어집니다. 모델의 처음 6시간 동안은 누적 생산성이 선형적으로 증가하는 것으로 나타났지만, 그 이후에는 수익률이 느려지고 대수적 결과가 나타납니다. 필요한 회귀 모델의 종류를 결정하는 방법에는 여러 가지가 있습니다. 한 가지 방법은 관계가 선형인지 비선형인지 시각적으로 확인하는 것입니다. 각 입력 변수에 대해 대상 변수의 스캐터 차트를 분석하면 종속성의 패턴을 확인할 수 있습니다.

이러한 패턴을 수학 함수로 표현하여 선형, 지수, 로그 또는 사인곡선인지 확인해 보세요. 데이터가 대상과 관계가 없을 가능성은 항상 있습니다. 실제 목표값을 기준으로 예측값을 플로팅하여 모델의 오류를 시각적으로 해석할 수 있습니다. 최적의 비선형 모델을 어떻게 찾을 수 있을까요? 제안된 모델에 대한 수학적 표현식이 있는 경우 경사하강법과 같은 최적화 기법을 사용하여 최적의 파라미터를 찾을 수 있습니다.

그렇지 않고 특정 회귀 모델을 결정하지 않았다면 여러 머신러닝 모델 중에서 선택할 수 있습니다. 일부 옵션에는 회귀 트리, 랜덤 포레스트, 신경망, 서포트 벡터 머신, 그래디언트 부스팅 머신, k-최근접 이웃이 포함됩니다. 비선형 회귀에서는 다항식, 지수, 로그 방정식을 사용하여 데이터를 모델링합니다. 변수 간의 관계를 직선으로 캡처할 수 없을 때 사용됩니다. 이 비디오에서는 다항식 회귀를 사용하여 특징의 다항식 표현식에 데이터를 피팅하는 방법을 배웠습니다.

다항식 회귀 모델은 기본 패턴을 이해하기보다는 임의의 잡음이나 큰 변동을 포함한 모든 것을 기억합니다. 실제 세계에는 다항식으로 모델링할 수 없는 복잡한 비선형 관계가 많이 있습니다. 비선형 회귀의 일반적인 예로는 지수 성장 또는 복합 성장, 로그 성장, 주기성 등이 있습니다. 필요한 회귀 모델의 종류를 결정하는 방법에는 여러 가지가 있습니다. 각 입력 변수에 대해 대상 변수의 스캐터 차트를 분석하여 종속성의 패턴을 확인할 수 있습니다.

회귀 트리, 랜덤 포레스트, k-최근접 이웃과 같은 여러 머신러닝 모델 중에서 선택하여 최적의 비선형 모델을 찾을 수 있습니다.

## 예시
- 이 비디오를 시청한 후에는 다항식 회귀를 설명하고, 비선형 회귀를 설명하고, 비선형 회귀의 응용 사례를 시연할 수 있습니다.
- 예를 들어, 기하급수적 성장 패턴을 따르는 데이터셋을 사용할 때는 비선형 회귀를 사용할 수 있습니다.
- 예를 들어, 복리 이자율로 투자가 어떻게 증가하는지.
- 예를 들어 수익률 감소의 법칙, 노동과 같은 생산 요소에 대한 투자가 증가함에 따라 생산성이나 이윤의 점진적 증가가 감소할 수 있는 방법 등이 있습니다.

## 요약
- 독립 변수 x와 종속 변수 y 간의 관계가 x의 n차 다항식으로 모델링되는 이 다항식 회귀를 모두 다항식 회귀라고 할 수 있습니다.
- 이 비디오에서는 다항식 회귀를 사용하여 특징의 다항식 표현식에 데이터를 피팅하는 방법을 배웠습니다.
- 회귀 트리, 랜덤 포레스트, k-최근접 이웃과 같은 여러 머신러닝 모델 중에서 선택하여 최적의 비선형 모델을 찾을 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Introduction to Polynomial and Nonlinear Regression. After watching this video, you will be able to Describe polynomial regression, describe nonlinear regression, and demonstrate applications of nonlinear regression. Nonlinear regression is a statistical method for modeling the relationship between a dependent variable and one or more independent variables, where the relationship is represented by a nonlinear equation. This equation could be polynomial, exponential, logarithmic, or any other function that does not use linear parameters. Nonlinear regression is useful when there is a complex relationship between variables that cannot be captured through a straight line.

For instance, you would use nonlinear regression when you are using a dataset that follows an exponential growth pattern. Let's consider the two charts here. The red line through the data in the left chart is a reasonable fit. However, with real-world data, the relationship between your input and target variables is rarely linear. More commonly, your data has a background trend that follows a smoothed curve rather than a straight line.

Like in the right chart, clearly a smooth nonlinear curve does a better job at approximating data than the straight line. The straight line underfits the data. You can use many kinds of nonlinear regression methods to model your dataset. Polynomial regression uses an ordinary linear regression to indirectly fit your data to polynomial expressions of the features, rather than the features themselves. Nonlinear regression follows the same idea, but bases its inputs on functions of the given features, such as the logarithm or exponential of the features.

Nonlinear regression doesn't necessarily reduce to linear regression like polynomial regression does. In this chart, you can see linear, quadratic, and cubic regression curves that fit the patterns in the data quite well. And this approach can go on and on to polynomials of arbitrary degree. We can call all of these polynomial regression, where the relationship between the independent variable x and the dependent variable y is modeled as an nth degree polynomial in x. Consider this polynomial regression example where a good candidate for a fit is a cubic or third degree polynomial, given by y equals theta zero plus theta one x plus theta two x squared plus theta three x cubed.

Here, the thetas are parameters to be estimated that best fit the underlying data, by introducing new variables as x underscore one equals x, x underscore two equals x to the power of two, and x underscore three equals x to the power of three. The model can now be expressed as a linear combination of the new variables as y equals theta zero plus theta one x one plus theta two x two plus theta three x three. Because the resulting model has been linearized, you can simply use ordinary multiple linear regression to find the best fit parameters. Given any finite sets of points, it's always possible to find a polynomial of sufficiently high degree that will pass through every point. Such a perfect fit amounts to overfitting as seen in this chart.

The polynomial regression model memorizes everything including any random noise or large variations, rather than understanding the underlying patterns. It's important to pick a regression that fits the data well without overfitting. You don't need to capture every fine detail, just the trend. Polynomial regression is a special form of nonlinear regression. It expresses a nonlinear dependence on the input features, but it has a linear dependence on the regression coefficients because it can be transformed into a linear regression problem.

It is often simply called linear regression. In contrast, there are many real-world complex nonlinear relationships that can't be modeled as polynomials. Such common examples of nonlinear regression include exponential or compound growth. For example, how investments grow with compound interest rates. For example, law of diminishing returns, how incremental gains in productivity or profit can reduce as investment in a production factor, such as labor increases.

For example, sinusoidal seasonal variations in a quantity, such as monthly rainfall or temperature. Let's consider this data corresponding to China's Gross Domestic Product, or GDP, from 1960 to 2014. Each row provides China's annual GDP in US dollars for the year. The scatter plot displays a strong dependence of GDP on time, but the relationship is nonlinear. As you can see, GDP increases over time, and the rate of this growth also increases.

This increasing growth rate is characteristic of exponential growth. A reasonable regression model then uses an exponential function, like y-hat equals theta-zero plus theta-one, e-x. Consider the following simulated example involving human productivity as a function of the number of consecutive hours worked. Working more hours per day, on average, increases your productivity. However, after a reasonable limit, say 6 hours of work, each additional work hour generates less productivity per hour than the previous hour.

This is an example of diminishing returns. The first 6 hours of the model show a linear increase in cumulative productivity, but then, the returns slow down and become logarithmic. There are many methods to determine what kind of regression model you need. One technique is to visually determine whether the relation is linear or nonlinear. Analyzing scatter plots of your target variable against each input variable can reveal patterns in the dependencies.

Try to express these patterns as mathematical functions and determine if they're linear, exponential, logarithmic, or sinusoidal. Generate models and analyze your results. There is always a chance that your data might have no relationship with your target. You can visually interpret your model's errors by plotting its predictions against the actual target values. How can you find an optimal nonlinear model?

If you have a mathematical expression for your proposed model, you can use an optimization technique like gradient descent to find optimal parameters. Otherwise, if you haven't decided on a specific regression model, you can select amongst many machine learning models. Some options include regression trees, random forests, neural networks, support vector machines, gradient boosting machines, k-nearest neighbors. Nonlinear regression uses polynomial, exponential, logarithmic equations to model data. It is used when the relationship between variables cannot be captured through a straight line.

In this video, you learned how you can use polynomial regression to fit your data to polynomial expressions of the features. The polynomial regression model memorizes everything, including any random noise or large variations, rather than understanding the underlying patterns. There are many real-world complex nonlinear relationships that can't be modeled as polynomials. Some common examples of nonlinear regression include exponential or compound growth, logarithmic, and periodicity. There are many methods to determine what kind of regression model you need.

You can analyze scatter plots of your target variable against each input variable to reveal patterns in the dependencies. To find an optimal nonlinear model, you can select amongst many machine learning models such as regression trees, random forests, and k-nearest neighbors.

</details>
