# Correlation - Statistics

## 개요
- 강좌: Data Analysis with Python
- 모듈:  Exploratory Data Analysis
- 재생 시간: 3분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/07jPY/correlation-statistics)
- 이 비디오에서는 다양한 상관 관계 통계 방법을 소개합니다.
- 연속 수치 변수 간의 상관 관계 강도를 측정하는 한 가지 방법은 피어슨 상관 (Pearson Correlation) 이라는 방법을 사용하는 것입니다.

## 내용
### 핵심 내용
- 이 비디오에서는 다양한 상관 관계 통계 방법을 소개합니다.
- 연속 수치 변수 간의 상관 관계 강도를 측정하는 한 가지 방법은 피어슨 상관 (Pearson Correlation) 이라는 방법을 사용하는 것입니다.
- 피어슨 상관 방법을 사용하면 상관 계수와 p-값이라는 두 가지 값을 얻을 수 있습니다.
- 상관 계수의 경우 값이 1에 가까울수록 양의 상관 관계가 크다는 것을 의미하고, 값이 -1에 가까울수록 음의 상관 관계가 크며 값이 0에 가까우면 변수 간의 상관 관계가 없음을 의미합니다.
- 상관 계수가 1 또는 -1에 가깝고 p-값이 0.001 미만이면 강한 상관 관계가 있다고 말할 수 있습니다.
- 색 구성표는 피어슨 상관 계수를 나타내며, 두 변수 간의 상관 관계의 강도를 나타냅니다.

### 한국어 Transcript

이 비디오에서는 다양한 상관 관계 통계 방법을 소개합니다. 연속 수치 변수 간의 상관 관계 강도를 측정하는 한 가지 방법은 피어슨 상관 (Pearson Correlation) 이라는 방법을 사용하는 것입니다. 피어슨 상관 방법을 사용하면 상관 계수와 p-값이라는 두 가지 값을 얻을 수 있습니다. 상관 계수의 경우 값이 1에 가까울수록 양의 상관 관계가 크다는 것을 의미하고, 값이 -1에 가까울수록 음의 상관 관계가 크며 값이 0에 가까우면 변수 간의 상관 관계가 없음을 의미합니다. 다음으로, p-값을 통해 계산한 상관 관계가 얼마나 확실한지 알 수 있습니다.

p-값의 경우 0.001보다 작은 값은 계산한 상관 계수에 대한 확실한 확실성을 제공하고, 0.001에서 0.05 사이의 값은 중간 정도의 확실성을 제공하며, 0.05와 0.1 사이의 값은 약한 확실성을 제공하며, p-값이 0.1보다 크면 상관 관계를 전혀 확실하게 알 수 없습니다. 상관 계수가 1 또는 -1에 가깝고 p-값이 0.001 미만이면 강한 상관 관계가 있다고 말할 수 있습니다. 다음 그림은 서로 다른 상관 값을 가진 데이터를 보여줍니다. 이 예제에서는 변수 마력과 자동차 가격 간의 상관 관계를 살펴보려고 합니다. Scipy 통계 패키지를 사용하여 피어슨 상관관계를 얼마나 쉽게 계산할 수 있는지 아십니까?

상관 계수가 약 0.8이고 이 계수가 1에 가까우므로 양의 상관관계가 강한 것을 알 수 있습니다. 또한 p-값이 0.001보다 훨씬 작아 매우 작다는 것을 알 수 있으므로 강한 양의 상관관계가 확실하다는 결론을 내릴 수 있습니다. 이제 모든 변수를 고려하여 각 변수 간의 상관 관계를 나타내는 히트 맵을 만들 수 있습니다. 색 구성표는 피어슨 상관 계수를 나타내며, 두 변수 간의 상관 관계의 강도를 나타냅니다. 진한 빨간색의 대각선을 보면 이 대각선에 있는 모든 값의 상관관계가 높다는 것을 알 수 있습니다.

자세히 살펴보면 대각선에 있는 값이 모든 변수와 변수 간의 상관 관계이며 항상 1이기 때문에 이해가 됩니다. 이 상관 관계 히트맵을 통해 다양한 변수가 서로 어떻게 관련되어 있는지, 그리고 가장 중요한 것은 이러한 변수가 가격과 어떻게 관련되는지에 대한 좋은 개요를 제공합니다.

## 예시
- 이 강의는 개념 설명 중심이며 Transcript에서 독립된 예시를 확인하기 어렵다.

## 요약
- 상관 계수의 경우 값이 1에 가까울수록 양의 상관 관계가 크다는 것을 의미하고, 값이 -1에 가까울수록 음의 상관 관계가 크며 값이 0에 가까우면 변수 간의 상관 관계가 없음을 의미합니다.
- 상관 계수가 1 또는 -1에 가깝고 p-값이 0.001 미만이면 강한 상관 관계가 있다고 말할 수 있습니다.
- 색 구성표는 피어슨 상관 계수를 나타내며, 두 변수 간의 상관 관계의 강도를 나타냅니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we'll introduce you to various correlation statistical methods. One way to measure the strength of the correlation between continuous numerical variables is by using a method called Pearson Correlation. Pearson Correlation method will give you two values; the correlation coefficient and the p-value. How do we interpret these values? For the correlation coefficient, a value close to one implies a large positive correlation, while a value close to -1 implies a large negative correlation, and a value close to zero implies no correlation between the variables.

Next, the p-value will tell us how certain we are about the correlation that we calculated. For the p-value, a value less than 0.001 gives us a strong certainty about the correlation coefficient that we calculated, a value between 0.001 and 0.05 gives us moderate certainty, a value between 0.05 and 0.1 will give us a weak certainty, and a p-value larger than 0.1 will give us no certainty of correlation at all. We can say that there is a strong correlation when the correlation coefficient is close to one or -1 and the p-value is less than 0.001. The following plot shows data with different correlation values. In this example, we want to look at the correlation between the variables horsepower and car price.

See how easy you can calculate the Pearson Correlation using the Scipy stats package? We can see that the correlation coefficient is approximately 0.8 and this is close to one, so there's a strong positive correlation. We can also see that the p-value is very small, much smaller than 0.001, and so we can conclude that we are certain about the strong positive correlation. Taking all variables into account, we can now create a heat map that indicates the correlation between each of the variables with one another. The color scheme indicates the Pearson correlation coefficient, indicating the strength of the correlation between two variables.

We can see a diagonal line with a dark red color indicating that all the values on this diagonal are highly correlated. This makes sense because when you look closer, the values on the diagonal are the correlation of all variables with themselves, which will be always one. This correlation heat map gives us a good overview of how the different variables are related to one another, and most importantly, how these variables are related to price.

</details>
