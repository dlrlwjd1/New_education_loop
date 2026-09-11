# Overfitting, Underfitting and Model Selection

## 개요
- 강좌: Data Analysis with Python
- 모듈: Model Evaluation and Refinement
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/wRX2j/overfitting-underfitting-and-model-selection)
- 기억하시겠지만, 지난 모듈에서 다항식 회귀에 대해 논의했습니다.
- 이 섹션에서는 최적의 다항식 차수를 선택하는 방법과 차수가 잘못된 다항식을 선택할 때 발생하는 문제에 대해 설명합니다.

## 내용
### 핵심 내용
- 기억하시겠지만, 지난 모듈에서 다항식 회귀에 대해 논의했습니다.
- 이 섹션에서는 최적의 다항식 차수를 선택하는 방법과 차수가 잘못된 다항식을 선택할 때 발생하는 문제에 대해 설명합니다.
- 가로축은 다항식의 차수를 나타냅니다.
- 빨간색 점은 훈련 데이터를 나타내고 녹색 점은 테스트 데이터를 나타냅니다.
- 여기서는 다항식의 차수가 3일 때 R^2가 최적임을 알 수 있습니다.
- 맞춤 변환 방법을 사용하여 훈련 및 테스트 데이터를 다항식으로 변환합니다.

### 한국어 Transcript

기억하시겠지만, 지난 모듈에서 다항식 회귀에 대해 논의했습니다. 이 섹션에서는 최적의 다항식 차수를 선택하는 방법과 차수가 잘못된 다항식을 선택할 때 발생하는 문제에 대해 설명합니다. 훈련 포인트는 다항식 함수에 약간의 노이즈가 더해져 나온다고 가정합니다. 모델 선택의 목표는 다항식의 차수를 결정하여 함수 y (x) 의 최적 추정치를 제공하는 것입니다. 선형 함수를 사용하여 함수를 피팅하려고 시도하면 선이 데이터를 피팅할 만큼 복잡하지 않습니다.

모형이 너무 단순하여 데이터를 피팅할 수 없는 경우를 언더피팅이라고 합니다. 다항식의 차수를 늘리면 모형이 더 잘 맞습니다. 그러나 이 모델은 여전히 유연성이 부족하고 적합하지 않은 것으로 보입니다. 다음은 데이터를 피팅하는 데 사용된 8차 다항식의 예입니다. 이 모델은 변곡점에서도 데이터를 피팅하고 함수를 추정하여 데이터를 16차 다항식으로 늘리는 데 능숙합니다.

모델의 훈련 지점 추적은 매우 잘하지만 함수 추정 성능은 떨어집니다. 이는 훈련 데이터가 거의 없는 곳에서 특히 두드러집니다. 추정된 함수는 함수를 추적하지 않고 진동합니다. 이를 과적합이라고 하는데, 모델이 너무 유연하여 함수가 아닌 잡음을 피팅하는 경우를 과적합이라고 합니다. 서로 다른 차수의 다항식으로 구성된 훈련 세트와 테스트 세트의 평균 제곱 오차 그림을 살펴보겠습니다.

가로축은 다항식의 차수를 나타냅니다. 훈련 오차는 다항식의 차수에 따라 감소합니다. 테스트 오차는 다항식의 오차를 추정하는 더 좋은 방법입니다. 오차는 다항식의 최적 차수가 결정될 때까지 감소합니다. 테스트 오류를 최소화하는 순서를 선택합니다.

왼쪽에 있는 모든 것은 적합하지 않은 것으로 간주될 것입니다. 오른쪽에 있는 모든 것은 오버핏입니다. 다항식의 최적 차수를 선택해도 여전히 몇 가지 오류가 발생합니다. 훈련 지점의 원래 표현식을 기억해보면 잡음이 많은 용어가 나옵니다. 이 용어가 오류의 원인 중 하나입니다.

노이즈가 랜덤해서 예측할 수 없기 때문입니다. 이를 줄일 수 없는 오류라고도 합니다. 예를 들어, 우리의 다항식 가정이 틀릴 수 있습니다. 샘플 포인트는 다른 함수에서 추출되었을 수 있습니다. 예를 들어, 이 그림에서는 사인파에서 데이터가 생성됩니다.

다항식 함수는 사인파를 제대로 피팅하지 못합니다. 실제 데이터의 경우 모델을 피팅하기가 너무 어렵거나 함수를 추정하기에 적합한 데이터 유형이 없을 수 있습니다. 마력을 사용하여 실제 데이터에 대해 서로 다른 차수의 다항식을 만들어 보겠습니다. 빨간색 점은 훈련 데이터를 나타내고 녹색 점은 테스트 데이터를 나타냅니다. 데이터의 평균만 사용하면 모델의 성능이 좋지 않습니다.

선형 함수는 데이터에 더 적합합니다. 2차 모델은 선형 함수와 비슷해 보입니다. 3차 함수도 앞의 두 차수와 마찬가지로 증가하는 것으로 보입니다. 여기서는 4차 다항식을 볼 수 있습니다. 약 200마력이면 예상 가격이 갑자기 낮아집니다.

R^2를 사용하여 가정이 올바른지 확인해 보겠습니다. 가로축은 차수 다항식 모델을 나타냅니다. R^2가 1에 가까울수록 모형의 정확도가 높아집니다. 여기서는 다항식의 차수가 3일 때 R^2가 최적임을 알 수 있습니다. 차수가 4로 증가하면 R^2가 급격히 감소하므로 초기 가정을 검증할 수 있습니다.

다음과 같이 다양한 R^2 값을 계산할 수 있습니다. 먼저 값을 저장할 빈 목록을 만듭니다. 다양한 다항식 차수를 포함하는 목록을 만듭니다. 그런 다음 루프를 사용하여 목록을 반복합니다. 다항식의 순서를 매개변수로 사용하여 다항식 특징 객체를 만듭니다.

맞춤 변환 방법을 사용하여 훈련 및 테스트 데이터를 다항식으로 변환합니다. 변환 데이터를 사용하여 회귀 모델을 피팅합니다. 그런 다음 테스트 데이터를 사용하여 R^2를 계산하고 배열에 저장합니다.

## 예시
- 예를 들어, 우리의 다항식 가정이 틀릴 수 있습니다.
- 예를 들어, 이 그림에서는 사인파에서 데이터가 생성됩니다.

## 요약
- 빨간색 점은 훈련 데이터를 나타내고 녹색 점은 테스트 데이터를 나타냅니다.
- 여기서는 다항식의 차수가 3일 때 R^2가 최적임을 알 수 있습니다.
- 맞춤 변환 방법을 사용하여 훈련 및 테스트 데이터를 다항식으로 변환합니다.

<details>
<summary>영문 Transcript 원문</summary>

If you recall, in the last module, we discussed polynomial regression. In this section, we will discuss how to pick the best polynomial order and problems that arise when selecting the wrong order polynomial. Consider the following function. We assume the training points come from a polynomial function plus some noise. The goal of model selection is to determine the order of the polynomial to provide the best estimate of the function y(x).

If we try and fit the function with a linear function, the line is not complex enough to fit the data. As a result, there are many errors. This is called underfitting, where the model is too simple to fit the data. If we increase the order of the polynomial, the model fits better. But the model is still not flexible enough and exhibits underfitting.

This is an example of the eighth order polynomial used to fit the data. We see the model does well at fitting the data and estimating the function, even at the inflection points. Increasing it to a 16th order polynomial, the model does extremely well at tracking the training point, but performs poorly at estimating the function. This is especially apparent where there is little training data. The estimated function oscillates, not tracking the function.

This is called overfitting, where the model is too flexible and fits the noise rather than the function. Let's look at a plot of the mean square error for the training and testing set of different order polynomials. The horizontal axis represents the order of the polynomial. The vertical axis is the mean square error. The training error decreases with the order of the polynomial.

The test error is a better means of estimating the error of a polynomial. The error decreases till the best order of the polynomial is determined. Then the error begins to increase. We select the order that minimizes the test error. In this case, it was eight.

Anything on the left would be considered underfitting. Anything on the right is overfitting. If we select the best order of the polynomial, we will still have some errors. If you recall the original expression for the training points, we see a noise term. This term is one reason for the error.

This is because the noise is random and we can't predict it. This is sometimes referred to as an irreducible error. There are other sources of errors as well. For example, our polynomial assumption may be wrong. Our sample points may have come from a different function.

For example, in this plot, the data is generated from a sine wave. The polynomial function does not do a good job of fitting the sine wave. For real data, the model may be too difficult to fit or we may not have the correct type of data to estimate the function. Let's try different order polynomials on the real data using horsepower. The red points represent the training data, the green points represent the test data.

If we just use the mean of the data, our model does not perform well. A linear function does fit the data better. A second order model looks similar to the linear function. A third order function also appears to increase, like the previous two orders. Here we see a fourth order polynomial.

At around 200 horsepower the predicted price suddenly decreases. This seems erroneous. Let's use R^2 to see if our assumption is correct. The following is a plot of the R^2 value. The horizontal axis represents the order of polynomial models.

The closer the R^2 is to one, the more accurate the model is. Here we see the R^2 is optimal when the order of the polynomial is three. The R^2 drastically decreases when the order is increased to four, validating our initial assumption. We can calculate different R^2 values as follows. First, we create an empty list to store the values.

We create a list containing different polynomial orders. We then iterate through the list using a loop. We create a polynomial feature object with the order of the polynomial as a parameter. We transform the training and test data into a polynomial using the fit transform method. We fit the regression model using the transformed data.

We then calculate the R^2 using the test data and store it in the array.

</details>
