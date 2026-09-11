# Training a Logistic Regression Model

## 개요
- 강좌: Machine Learning with Python
- 모듈: Linear and Logistic Regression
- 재생 시간: 6분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/Ogwza/training-a-logistic-regression-model)
- 이 비디오를 시청한 후 로지스틱 회귀 모델을 훈련하는 방법을 설명할 수 있습니다.
- 또한 경사하강법과 확률적 경사하강법의 특징에 대해서도 설명할 수 있습니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후 로지스틱 회귀 모델을 훈련하는 방법을 설명할 수 있습니다.
- 또한 경사하강법과 확률적 경사하강법의 특징에 대해서도 설명할 수 있습니다.
- 로지스틱 회귀를 최적화하기 위한 척도는 로그 손실이라는 비용 함수인데, 이를 최소화해야 합니다.
- 로지스틱 회귀는 이 비용 함수를 최소화하려고 합니다.
- 이 비디오에서는 로지스틱 회귀 훈련의 목적이 오차를 최소화하면서 클래스를 예측하는 것임을 배웠습니다.
- 로지스틱 회귀를 최적화하기 위한 척도는 로그 손실이라는 비용 함수인데, 이를 최소화해야 합니다.

### 한국어 Transcript

로지스틱 회귀 모델 교육에 오신 것을 환영합니다. 이 비디오를 시청한 후 로지스틱 회귀 모델을 훈련하는 방법을 설명할 수 있습니다. 또한 경사하강법과 확률적 경사하강법의 특징에 대해서도 설명할 수 있습니다. 로지스틱 회귀 훈련에서는 입력 특징을 목표 결과에 매핑하는 최상의 파라미터를 찾습니다. 목표는 오류를 최소화하면서 클래스를 예측하는 것입니다.

학습 과정에서는 비용 함수를 최소화하는 파라미터 세트 (theta라고도 함) 를 찾는 과정을 거칩니다. 로지스틱 회귀 모델을 훈련하는 과정은 여러 단계로 구성됩니다. 먼저 theta라는 시작 파라미터 세트를 선택해야 합니다. 그런 다음 데이터의 각 관측치에 대해 클래스가 1일 확률을 예측합니다. 다음 단계는 예측된 클래스와 실제 클래스 간의 오차를 측정하는 것입니다.

그런 다음 예측 오차를 줄이는 새로운 세타를 결정합니다. 마지막으로 로그 손실에 비해 충분히 작은 값이나 지정된 최대 반복 횟수에 도달할 때까지 프로세스를 반복해야 합니다. 다음으로 최적 로지스틱 회귀를 이해해 보겠습니다. 매개변수 theta의 관점에서 선형 모델 y-hat을 시그모이드 함수와 결합하여 결정 경계를 만드는 과정은 이진 분류 모델, 즉 예비 로지스틱 회귀라고 할 수 있는 이진 분류 모델을 생성합니다. 이 모형은 반드시 최상의 로지스틱 회귀 모형이 아니기 때문에 예비 모형이라고 합니다.

최상의 로지스틱 회귀 모델은 첫 번째 패스 이후에만 얻을 수 있습니다. 모델 매개변수인 theta를 찾아야 합니다. 최적화 단계에서는 최적의 파라미터를 찾습니다. 최적화를 위해서는 주어진 파라미터 집합에 대한 모델의 적합도를 결정하는 메트릭이 필요합니다. 로지스틱 회귀를 최적화하기 위한 척도는 로그 손실이라는 비용 함수인데, 이를 최소화해야 합니다.

로그 손실은 예측 확률 p-hat i가 실제 클래스의 yi와 얼마나 잘 일치하는지를 측정하는 비용 함수입니다. 로지스틱 회귀는 이 비용 함수를 최소화하려고 합니다. 여기서 i는 n행으로 구성된 데이터의 i번째 관측값을 나타냅니다. 로그 손실은 두 용어의 i에 대한 평균을 뺀 값으로 정의됩니다. 실제 클래스에 클래스가 1일 것으로 예측된 확률의 로그를 곱하고, 실제 클래스에 클래스가 0일 확률의 로그를 곱한 값입니다.

0과 1 사이의 인수에 대한 로그가 음수이기 때문에 음수 부호가 존재합니다. 로그 손실은 정확한 분류에 유리합니다. 예를 들어, 클래스 1의 예측 확률이 높고 정확하다면 p-hat i는 관측치에 대해 1에 가깝고 yi는 1과 같습니다. 공식을 검토하여 로그 손실이 적다는 것을 확신할 수 있습니다. 실제로 첫 번째 항은 확률이 1에 가까워질수록 로그 항이 0이 되는 경향이 있기 때문에 사라지고, 두 번째 항은 요인 1에서 yi를 뺀 값이 0이기 때문에 사라집니다.

이런 식으로 로그 손실은 확실하고 잘못된 예측에 불이익을 줍니다. 클래스 0의 예측 확률이 높고 정확하지 않은 경우, 즉 관측치의 p-hat이 1에 가까우며 실제 클래스가 0인 경우 로그 손실이 매우 큽니다. 반복을 중지하는 방법은 다양하지만 기본적으로 모델의 로그 손실이 만족스러울 때 학습을 중단합니다. 다양한 기법을 사용하여 세타 값을 변경할 수 있으며 가장 많이 사용되는 방법 중 하나는 경사 하강법입니다. 경사하강법은 함수의 최솟값을 구하기 위한 영리한 반복적 접근법입니다.

로그 손실 함수의 도함수를 사용하여 가장 가파른 하강 방향으로 매개변수 값을 조정합니다. 경사하강법은 각 반복에서 파라미터를 단계별로 조정할 수 있는 범위를 제어하는 지정된 학습률에 따라 달라집니다. 경사하강법의 주요 목적은 매개변수 값을 변경하고 최적의 매개변수에 대한 경로를 찾아 비용 함수를 최소화하는 것입니다. 시험 파라미터 theta1, theta2의 포물선형 로그 손실 비용 함수를 시뮬레이션한 플롯을 살펴보겠습니다. 이 표면은 다양한 매개변수 값에 대한 오류를 나타냅니다.

지표면의 기울기는 가장 가파른 상승 방향을 가리킵니다. 따라서 기울기의 음수가 가장 가파른 하강 방향을 가리키므로 경사 하강이라는 이름이 붙습니다. 기울기가 가파를수록 기울기의 크기가 커지므로 최소값을 향한 단계가 커집니다. 학습률이라는 요인을 기준으로 기울기를 스케일링하여 각 단계의 크기를 제어할 수 있습니다. 최저점에 도달하면 기울기가 0으로 줄어듭니다.

이 경로의 가장 낮은 지점은 최적 theta1, theta2에서 발생합니다. 경사하강법의 몇 가지 추가 기능을 살펴보겠습니다. 비용 함수의 기울기는 각 반복의 전체 데이터 세트에 대해 계산됩니다. 데이터 세트가 크면 경사하강이 매우 느려집니다. 학습률을 높여 수렴 속도를 높일 수도 있지만 단계가 너무 커서 최소값을 알아차릴 수 없기 때문에 수렴 가능성이 낮아집니다.

전체를 사용하는 대신 계산할 데이터의 임의 하위 집합을 선택하여 비용 함수 기울기를 근사화할 수 있습니다. 경사하강법 알고리즘의 변형으로는 확률적 경사하강법 (SGD) 이 있습니다. 속도는 더 빠르지만 정확도가 떨어질 수 있습니다. 훈련 데이터의 무작위 하위 집합을 사용하며 확장성이 뛰어납니다. SGD는 국소 최솟값을 간과하고 비용 함수의 글로벌 최솟값을 찾을 가능성이 더 큽니다.

글로벌 최소값을 향해 빠르게 수렴하지만 일정 기간 동안 이를 우회할 수 있습니다. 알고리즘이 글로벌 최소값에 가까워질수록 속도를 늦춤으로써 수렴을 개선할 수 있습니다. 가까워질수록 학습률을 줄여 최소값을 얻거나 비용 함수의 기울기를 계산하는 데 사용되는 랜덤 데이터 표본의 크기를 점차 늘릴 수 있습니다. 이 비디오에서는 로지스틱 회귀 훈련의 목적이 오차를 최소화하면서 클래스를 예측하는 것임을 배웠습니다. 학습 프로세스는 비용 함수를 최소화하는 파라미터 세트 (theta) 를 찾기 위해 생성되는 주요 단계로 구성됩니다.

최적화 단계는 최적의 파라미터를 찾는 데 사용됩니다. 로지스틱 회귀를 최적화하기 위한 척도는 로그 손실이라는 비용 함수인데, 이를 최소화해야 합니다. 로그 손실은 정확한 신뢰도 높은 분류에 유리하며 확실하고 잘못된 예측에는 불이익을 줍니다. 경사하강법은 함수의 최솟값을 구하는 영리하고 반복적인 접근 방식입니다. 확률적 경사하강법은 훈련 데이터의 무작위 하위 집합을 사용하는 기울기 하강 알고리즘의 확장 가능한 변형입니다.

## 예시
- 예를 들어, 클래스 1의 예측 확률이 높고 정확하다면 p-hat i는 관측치에 대해 1에 가깝고 yi는 1과 같습니다.

## 요약
- 로지스틱 회귀는 이 비용 함수를 최소화하려고 합니다.
- 이 비디오에서는 로지스틱 회귀 훈련의 목적이 오차를 최소화하면서 클래스를 예측하는 것임을 배웠습니다.
- 로지스틱 회귀를 최적화하기 위한 척도는 로그 손실이라는 비용 함수인데, 이를 최소화해야 합니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to training a logistic regression model. After watching this video, you will be able to describe how to train a logistic regression model. You will also be able to explain the features of the gradient descent and stochastic gradient descent method. In logistical regression training, you look for the best parameters that map the input features to the target outcomes. The objective is to predict classes with minimal error.

The training process seeks to find a set of parameters, also known as theta, that minimizes the cost function. The process of training a logistical regression model comprises several steps. First, you have to choose a starting set of parameters called theta. This can be a random choice. You then predict the probability that the class is 1 for each observation of your data.

The next step is to measure the error between the predicted classes and the actual classes. This error is called a cost function. You then determine a new theta that reduces the prediction error. Finally, you need to repeat the process until you reach a small enough value for the log loss or a specified maximum number of iterations. Next, let's understand optimal logistic regression.

The process of creating a decision boundary by combining a linear model y-hat in terms of parameters theta with a sigmoid function yields a binary classification model or what might be called a preliminary logistic regression. The model is called preliminary because it's not necessarily the best logistic regression model. The best logistic regression model can only be achieved after the first pass. The model parameters, theta, need to be found. An optimization step finds the best parameters.

To achieve optimization, you need a metric that determines the model's goodness of fit for a given set of parameters. The metric for optimizing logistic regression is a cost function called log loss, which needs to be minimized. Log loss is a cost function that measures how well the predicted probabilities, p-hat i, match the actual class's yi. Logistic regression seeks to minimize this cost function. Here, i refers to the ith observation of the data, which is n rows.

Log loss is defined as minus the average over i of two terms. The actual class times the logarithm of the predicted probability that the class is 1 plus 1 minus the actual class times the log of the probability that the class is 0. The negative sign exists because the logarithm is negative for arguments between 0 and 1. Log loss favors confident classifications that are correct. For instance, when the predicted probability of class 1 is high and correct, p-hat i is close to 1 for an observation, and yi is equal to 1.

You can convince yourself by inspecting the formula that the log loss is small. Indeed, the first term vanishes because the log term tends to 0 as the probability approaches 1, while the second term vanishes because the factor 1 minus yi is 0. In this way, log loss penalizes confident, incorrect predictions. When the predicted probability of class 0 is high and incorrect, that is, when p-hat is close to 1 for an observation, and the actual class is 0, the log loss is very large. There are various ways to stop iterations, but essentially, you stop training when your model's log loss is satisfactory.

Different techniques can be used to change the values of theta, and one of the most popular methods is gradient descent. Gradient descent is a clever iterative approach to finding the minimum of a function. It adjusts the parameter values in the direction of the steepest descent using the derivative of the log loss function. Gradient descent depends on a specified learning rate, which controls how far it's allowed to step the parameters on each iteration. The main objective of gradient descent is to change the parameter values and find a path to the optimal parameters to minimize the cost function.

Consider the plot, which simulates a parabolic log loss cost function of the trial parameters theta1, theta2. This surface represents the error for different values of parameters. The gradient of the surface points in the direction of the steepest ascent. Thus, the negative of the gradient points in the direction of the steepest descent, hence the name gradient descent. The steeper the slope, the greater the magnitude of the gradient, and thus, the greater the step toward the minimum.

You can control the size of each step by scaling the gradient by a factor called the learning rate. As the lowest point is reached, the slope diminishes to zero. This lowest point of the path occurs at the optimum theta1, theta2. Let's explore some additional features of gradient descent. The gradient of the cost function is calculated over the entire data set on each iteration.

When the data set is large, gradient descent becomes very slow. You could try speeding up the convergence by increasing the learning rate, but convergence becomes less likely as the steps might be too big to notice the minima. Instead of using the whole, the cost function gradient can be approximated by choosing a random subset of the data to calculate it on. A variation of the gradient descent algorithm is stochastic gradient descent, or SGD. It's faster, but can be less accurate.

It uses a random subset of training data and scales well. SGD is more likely to overlook local minima and find global minima of the cost function. It converges quickly toward a global minimum, but can wander around it for some time. The convergence can be improved by slowing down as the algorithm gets closer to a global minimum. You can home in on the minimum by decreasing the learning rate as you get closer, or you can gradually increase the size of the random data sample used to calculate the gradient of the cost function.

In this video, you learned that the objective of logistical regression training is to predict classes with minimal error. The training process consists of key steps created to find a set of parameters, or theta, that minimize the cost function. An optimization step is used to find the best parameters. The metric for optimizing logistic regression is a cost function called log loss, which needs to be minimized. Log loss favors confident classifications that are correct and penalizes confident, incorrect predictions.

Gradient descent is a clever, iterative approach to finding the minimum of a function. Stochastic gradient descent is a scalable variation of the gradient descent algorithm, which uses a random subset of training data.

</details>
