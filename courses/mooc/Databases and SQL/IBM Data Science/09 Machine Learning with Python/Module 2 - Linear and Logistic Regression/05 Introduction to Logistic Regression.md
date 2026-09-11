# Introduction to Logistic Regression

## 개요
- 강좌: Machine Learning with Python
- 모듈: Linear and Logistic Regression
- 재생 시간: 7분
- [MOOC 원본 강의](https://www.mooc.org/learn/machine-learning-with-python/lecture/DnhMn/introduction-to-logistic-regression)
- 이 비디오를 시청한 후 로지스틱 회귀의 기계 학습 방법을 설명하고 사용 방법을 설명할 수 있습니다.
- 로지스틱 회귀는 관측치가 하나 또는 두 클래스 (예: 참 또는 거짓) 에 속할 확률을 예측하는 통계 모델링 기법입니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후 로지스틱 회귀의 기계 학습 방법을 설명하고 사용 방법을 설명할 수 있습니다.
- 로지스틱 회귀는 관측치가 하나 또는 두 클래스 (예: 참 또는 거짓) 에 속할 확률을 예측하는 통계 모델링 기법입니다.
- 예를 들어, 환자의 연령, 성별, 체질량 지수에 대한 지식을 기반으로 특정 기간 내에 심장마비가 발생할 확률, 체중, 키, 혈압, 다양한 혈액 검사 결과 등 환자의 관찰된 특성을 기반으로 당뇨병과 같은 특정 상태나 질병이 나타날 확률 등을 예측할 수 있습니다.
- 로지스틱 회귀는 고객이 이탈할 예측 확률 p-hat을 고려하여 각 고객의 클래스 y-hat을 예측할 수 있습니다.
- 이 비디오에서는 머신 러닝에서 로지스틱 회귀가 통계적 로지스틱 회귀를 기반으로 하는 이진 분류기, 즉 확률 예측 변수를 의미한다는 것을 배웠습니다.
- 또한 로지스틱스 회귀가 확률 예측 변수이자 이진 분류기라는 것도 배웠습니다.

### 한국어 Transcript

로지스틱 회귀 분석 소개에 오신 것을 환영합니다. 이 비디오를 시청한 후 로지스틱 회귀의 기계 학습 방법을 설명하고 사용 방법을 설명할 수 있습니다. 로지스틱 회귀는 관측치가 하나 또는 두 클래스 (예: 참 또는 거짓) 에 속할 확률을 예측하는 통계 모델링 기법입니다. 머신 러닝에서 로지스틱 회귀는 통계적 로지스틱 회귀를 기반으로 하는 이진 분류기를 말합니다. 분계점 확률을 선택하면 확률이 임계값보다 크면 각 관측치를 한 클래스에 할당하고, 확률이 임계값보다 작을 경우 다른 클래스에 할당하기만 하면 확률 예측 변수가 이항 분류기가 됩니다.

로지스틱 회귀가 언제 좋은 선택인지 이해해 봅시다. 먼저 데이터의 목표값이 이진수인 경우 0 또는 1로 표시됩니다. 둘째, 고객이 제품을 구매할 확률과 같은 결과의 확률이 필요할 때. 데이터가 선형으로 분리 가능한 경우 로지스틱 회귀의 결정 경계는 선, 평면 또는 초평면입니다. 예를 들어 세타 0+세타 1 x 1+세타 2 x 2는 0보다 큽니다.

셋째, 독립 특성의 영향을 이해하려면 모형 계수 또는 가중치의 크기를 기반으로 최상의 특징을 선택할 수 있습니다. 로지스틱 회귀는 확률 예측 변수이자 이항 분류기입니다. 예를 들어, 환자의 연령, 성별, 체질량 지수에 대한 지식을 기반으로 특정 기간 내에 심장마비가 발생할 확률, 체중, 키, 혈압, 다양한 혈액 검사 결과 등 환자의 관찰된 특성을 기반으로 당뇨병과 같은 특정 상태나 질병이 나타날 확률 등을 예측할 수 있습니다. 구독 기반 서비스를 이용하는 고객이 심장 마비를 일으킬 가능성을 예측할 수 있습니다. 구독, 특정 프로세스, 시스템의 실패 가능성 또는 상품 및 주택 소유자의 모기지 채무 불이행 가능성.

다음 달에 어떤 고객이 떠날지 예측하기 위해 분석하려는 통신 데이터 세트를 생각해 보십시오. 데이터세트는 각 행이 한 명의 고객을 나타내는 과거 고객 데이터로 구성됩니다. 데이터에는 각 고객이 가입한 서비스, 고객 계정 정보, 성별 및 연령대와 같은 인구통계학적 정보, 최근 한 달 이내에 이탈했거나 떠난 고객 등에 대한 정보가 포함됩니다. 여기서는 종속 변수 열을 churn이라고 합니다. 물류 회귀 분석에서는 이러한 기능 중 하나 이상을 사용하여 고객의 이탈 여부를 예측할 수 있습니다.

로지스틱 회귀는 고객이 이탈할 예측 확률 p-hat을 고려하여 각 고객의 클래스 y-hat을 예측할 수 있습니다. 여기서 p-hat은 데이터 x에서 클래스 y가 1일 것으로 예측된 확률입니다. 고객 연령을 기준으로 고객 이탈을 예측하는 것이 목표라고 가정해 보겠습니다. x로 표시되는 특징 (age) 과 y로 표시되는 이항 목표값 변수 변동 (변수 변동) 이 있습니다. 이 두 클래스는 이진 값 1과 0으로 표현되는 yes 및 no 클래스가 있습니다.

산점도를 사용하여 데이터를 그래픽으로 표현할 수 있습니다. 여기서 클래스 0은 빨간색으로, 클래스 1은 파란색으로 표시됩니다. 선형 회귀를 사용하면 y-hat이 theta 0에 theta 1 x 1과 같다고 표시된 데이터에 선을 맞출 수 있습니다. 이 선에는 두 개의 매개변수가 있습니다. 여기서 theta 0은 선의 y절편이고 theta 1은 기울기입니다.

Theta 1은 가중치 벡터 또는 방정식의 신뢰도라고도 합니다. 한 가지 문제는 예측 값 y-hat이 나이가 들수록 무한정 증가한다는 것입니다. 그 선이 영원히 지속되기 때문입니다. 물론 선형 회귀를 직접 사용하여 이탈을 예측할 수는 없습니다. 어쨌든 예측 값은 0~1 범위 내에 포함되어야 합니다.

예측값을 0~1 범위 내로 유지하는 한 가지 방법은 0.5와 같은 임계값을 사용하여 클래스를 구분하는 것입니다. 클래스 0을 클래스 1과 구분할 수 있는 규칙을 작성할 수 있습니다. y-hat의 값이 0.5보다 작으면 클래스는 0이고, 그렇지 않으면 클래스는 1입니다. 단계 함수에서는 값이 아무리 커도 0.5보다 크면 단순히 1과 같다는 점에 유의하세요. 그리고 y-hat 값이 얼마나 음수인지에 관계없이 0.5보다 작으면 출력값은 0입니다.

즉, 20세 고객과 100세 고객 간에는 차이가 없습니다. 이러한 값을 0과 1 사이로 투영하는 더 평활한 선을 사용하는 것이 좋지 않을까요? 실제로 기존 방법은 고객이 클래스에 속할 확률을 제공하지 않습니다. 시그모이드 함수 sigma of x (로짓 함수라고도 함) 를 예로 들어 보겠습니다. 이 함수는 1의 합과 e를 마이너스 x에 대해 1로 정의됩니다.

이 그래프는 x가 0인 경우 시그모이드 함수가 0.5라는 것을 보여줍니다. x가 커질수록 시그모이드 함수는 1에 가까워지고, x가 음수가 될수록 시그모이드 함수는 0에 가까워집니다. 즉, 시그모이드 함수는 x의 모든 연속 함수를 가져와 0, 1 범위 내에서 연속적으로 압축할 수 있습니다. 이제 모형은 y hat의 시그마입니다. 이 시그마는 확률 p hat을 나타내고 x가 주어지면 출력값은 1입니다.

따라서 관측값이 어느 한 클래스에 속할 확률을 결정할 수 있습니다. 관측값에 클래스를 할당하려면 임계값 (예: 0.5) 을 정의하고, 확률이 0.5보다 크면 관측값을 1에 할당하고 그렇지 않으면 0으로 할당하면 됩니다. 시그모이드 함수를 사용할 때 고객 이탈 모델의 출력은 얼마입니까? 이탈 확률은 데이터 x에서 y가 1인 확률로 표시됩니다. 두 확률의 합이 1이어야 하므로 고객이 이탈하지 않을 확률은 1에서 이탈 확률을 뺀 값입니다.

예를 들어, 고객이 회사에 체류할 확률을 고객의 소득과 연령을 고려한 이탈 확률 (0.8일 수 있음) 으로 표시할 수 있다고 가정해 보겠습니다. 그러면 동일한 고객이 체류할 확률은 1에서 0.8을 뺀 0.2입니다. 이 비디오에서는 머신 러닝에서 로지스틱 회귀가 통계적 로지스틱 회귀를 기반으로 하는 이진 분류기, 즉 확률 예측 변수를 의미한다는 것을 배웠습니다. 로지스틱 회귀는 이항 목표값, 확률적 결과, 특성의 영향을 이해하는 데 적합합니다. 또한 로지스틱스 회귀가 확률 예측 변수이자 이진 분류기라는 것도 배웠습니다.

로지스틱 회귀의 목표는 예측된 확률을 고려하여 클래스를 예측하는 모델을 구축하는 것입니다.

## 예시
- 예를 들어 세타 0+세타 1 x 1+세타 2 x 2는 0보다 큽니다.
- 예를 들어, 환자의 연령, 성별, 체질량 지수에 대한 지식을 기반으로 특정 기간 내에 심장마비가 발생할 확률, 체중, 키, 혈압, 다양한 혈액 검사 결과 등 환자의 관찰된 특성을 기반으로 당뇨병과 같은 특정 상태나 질병이 나타날 확률 등을 예측할 수 있습니다.
- 예를 들어, 고객이 회사에 체류할 확률을 고객의 소득과 연령을 고려한 이탈 확률 (0.8일 수 있음) 으로 표시할 수 있다고 가정해 보겠습니다.

## 요약
- 로지스틱 회귀는 고객이 이탈할 예측 확률 p-hat을 고려하여 각 고객의 클래스 y-hat을 예측할 수 있습니다.
- 이 비디오에서는 머신 러닝에서 로지스틱 회귀가 통계적 로지스틱 회귀를 기반으로 하는 이진 분류기, 즉 확률 예측 변수를 의미한다는 것을 배웠습니다.
- 또한 로지스틱스 회귀가 확률 예측 변수이자 이진 분류기라는 것도 배웠습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Introduction to Logistic Regression. After watching this video, you will be able to describe the machine learning method of logistic regression and explain how it is used. Logistic regression is a statistical modeling technique that predicts the probability of an observation belonging to one or two classes, such as true or false. In machine learning, logistic regression refers to a binary classifier based on statistical logistic regression. By choosing a threshold probability, the probability predictor becomes a binary classifier simply by assigning each observation to one class if its probability is greater than the threshold and to the other class if its probability is less than the threshold.

Let's understand when logistic regression is a good choice. First, when the target in your data is binary, indicated as 0 or 1. Second, when you need the probability of an outcome, like the probability of a customer buying a product. If the data is linearly separable, the decision boundary of logistic regression is a line, a plane, or a hyperplane. Example, theta 0 plus theta 1 x 1 plus theta 2 x 2 is greater than 0.

Third, when you want to understand the impact of an independent feature, it allows you to select the best features based on the size of their model coefficients or weights. Logistic regression is both a probability predictor and a binary classifier. For example, you can use it to predict the probability that a person will have a heart attack within a specified time period based on knowledge of the person's age, sex, and body mass index, chance that a specific condition or disease, such as diabetes, might appear based on observed characteristics of that patient, such as weight, height, blood pressure, and results of various blood tests, and so on, likelihood that a customer of a subscription-based service will halt its subscription, probability of failure of a given process, system, or product, and likelihood of a homeowner defaulting on a mortgage. Consider a telecommunication dataset that you'd like to analyze to predict which customers might leave next month. The dataset comprises historical customer data, where each row represents one customer.

The data includes information about services that each customer has signed up for, customer account information, demographic information like gender and age range, and customers who've churned or left within the last month. Here, the dependent variable column is called churn. In logistics regression, you can use one or more of these features to predict whether customers will churn. Logistic regression can predict the class, y-hat, of each customer by considering the predicted probability, p-hat, that the customer will churn. Here, p-hat is the predicted probability that the class, y is 1, given the data, x.

Suppose the goal is to predict customer churn based on their age. You have a feature, age, denoted as x, and a binary target, variable churn, denoted as y, with two classes, yes and no, represented by binary values 1 and 0. Graphically, you can represent the data with a scatterplot, where class 0 is denoted in red and class 1 in blue. With linear regression, you can fit a line through the data represented as y-hat equals theta 0 plus theta 1 x 1. This line has two parameters, where theta 0 is the y-intercept of the line, and theta 1 is its slope.

Theta 1 is also called the weight vector, or confidence of the equation. One problem is that the prediction's value y-hat increases indefinitely with age, because the line goes on forever. Obviously, you cannot use linear regression directly to predict churn. Somehow, the predicted values need to be contained within the range 0 to 1. One way to keep the predicted values within the range of 0 to 1 is to use a threshold, like 0.5, to differentiate the classes.

You can write a rule to allow you to separate class 0 from class 1. If the value of y-hat is less than 0.5, then the class is 0, otherwise the class is 1. Notice that in the step function, no matter how big the value is, as long as it's greater than 0.5, it simply equals 1. And regardless of how negative the value y-hat is, the output is 0 if it is less than 0.5. In other words, there is no difference between a customer 20 years old and 100 years old.

The outcome would be 1. Wouldn't it be nice to use a smoother line that would project these values between 0 and 1? Indeed, the existing method doesn't provide the probability of a customer belonging to a class, which is the goal. Consider the sigmoid function, sigma of x, also known as the logit function, defined as 1 over the sum of 1 and e to the minus x. This graph shows that for x equals 0, the sigmoid function is 0.5.

As x grows, the sigmoid function approaches 1, and as x becomes more negative, the sigmoid approaches 0. This means that the sigmoid function can take any continuous function of x and continuously compress it within the range 0, 1. It defines a probability. Now the model is sigma of y hat, which represents the probability p hat, and that the output is 1 given x. Thus you can determine the chance that an observation belongs to either class.

To assign the class to the observation, simply define a threshold like 0.5 and assign the observation to 1 if its probability is greater than 0.5 and 0 otherwise. This threshold is known as a decision boundary. What is the output of the customer churn model when we use the sigmoid function? The churn probability is denoted as the probability that y is 1 given the data x. Notice that the probability that the customer won't churn is 1 minus the churn probability, as the two probabilities must add to 1.

For example, suppose the probability of a customer staying with the company can be shown as the probability of churn given a customer's income and age, which could be 0.8. Then, the probability of the same customer staying is 1 minus 0.8, which is 0.2. In this video, you learned that in machine learning, logistic regression refers to a binary classifier based on statistical logistic regression, or probability predictor. Logistic regression is a good choice for a binary target, probabilistic results, and understanding the impact of a feature. You also learned that logistics regression is both a probability predictor and a binary classifier.

The goal of logistic regression is to build a model to predict the class by considering the predicted probability.

</details>
