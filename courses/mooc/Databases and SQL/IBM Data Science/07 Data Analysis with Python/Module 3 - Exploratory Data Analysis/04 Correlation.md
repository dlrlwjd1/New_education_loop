# Correlation

## 개요
- 강좌: Data Analysis with Python
- 모듈:  Exploratory Data Analysis
- 재생 시간: 3분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/lb1Hl/correlation)
- 이 비디오에서는 다양한 변수 간의 상관 관계에 대해 설명하겠습니다.
- 상관관계는 다양한 변수가 어느 정도 상호 의존적인지 측정하기 위한 통계적 지표입니다.

## 내용
### 핵심 내용
- 이 비디오에서는 다양한 변수 간의 상관 관계에 대해 설명하겠습니다.
- 상관관계는 다양한 변수가 어느 정도 상호 의존적인지 측정하기 위한 통계적 지표입니다.
- 또 다른 예로, 우산과 빗물 변수 사이에는 상관관계가 있는데, 강수량이 많을수록 우산을 사용하는 사람이 많아집니다.
- 따라서 엔진 크기와 가격 사이에는 양의 상관관계가 있습니다.
- 또 다른 예로, 이제 갤런당 고속도로 주행 거리 간의 관계를 살펴보고 자동차 가격에 미치는 영향을 살펴보겠습니다.
- 따라서 갤런당 고속도로 주행 거리와 가격 사이에는 음의 선형 관계가 있습니다.

### 한국어 Transcript

이 비디오에서는 다양한 변수 간의 상관 관계에 대해 설명하겠습니다. 상관관계는 다양한 변수가 어느 정도 상호 의존적인지 측정하기 위한 통계적 지표입니다. 즉, 시간이 지남에 따라 두 변수를 살펴볼 때 한 변수가 변하면 다른 변수의 변화에 어떤 영향을 미칠까요? 예를 들어 흡연은 폐암과 상관관계가 있는 것으로 알려져 있는데, 흡연은 흡연할 경우 폐암에 걸릴 확률이 더 높기 때문입니다. 또 다른 예로, 우산과 빗물 변수 사이에는 상관관계가 있는데, 강수량이 많을수록 우산을 사용하는 사람이 많아집니다.

또한 비가 오지 않으면 사람들은 우산을 가지고 다니지 않을 것입니다. 따라서 우산과 비는 상호 의존적이며 정의상 서로 연관되어 있다고 말할 수 있습니다. 상관관계가 인과관계를 의미하지 않는다는 점을 아는 것이 중요합니다. 사실 우산과 비는 상관관계가 있다고 말할 수 있지만, 우산이 비를 초래했는지 아니면 비가 우산을 초래했는지 알 수 있는 정보가 충분하지 않을 것입니다. 데이터 사이언스에서는 보통 상관관계를 더 많이 다룹니다.

엔진 크기와 가격 간의 상관관계를 살펴보겠습니다. 이번에는 스캐터 차트와 회귀선이라는 추가된 선형 선을 사용하여 이 두 변수를 시각화해 보겠습니다. 이 선은 둘 사이의 관계를 나타냅니다. 이 그림의 주요 목표는 엔진 크기가 가격에 영향을 미치는지 확인하는 것입니다. 이 예제에서 데이터 포인트를 통과하는 직선이 매우 가파른 것을 볼 수 있는데, 이는 두 변수 사이에 양의 선형 관계가 있음을 보여줍니다.

엔진 크기 값이 증가하면 가격 값도 올라가고 선의 기울기는 양수입니다. 따라서 엔진 크기와 가격 사이에는 양의 상관관계가 있습니다. 시본 레그 플롯을 사용하여 스캐터 차트를 만들 수 있습니다. 또 다른 예로, 이제 갤런당 고속도로 주행 거리 간의 관계를 살펴보고 자동차 가격에 미치는 영향을 살펴보겠습니다. 이 그림에서 볼 수 있듯이 고속도로의 갤런당 마일 값이 올라가면 가격 가치는 내려갑니다.

따라서 갤런당 고속도로 주행 거리와 가격 사이에는 음의 선형 관계가 있습니다. 이 관계가 음수이긴 하지만 선의 기울기가 가파르므로 갤런당 고속도로 주행 거리가 여전히 가격을 예측하기에 좋습니다. 이 두 변수는 음의 상관관계를 가지고 있다고 합니다. 마지막으로 상관관계가 약한 예가 있습니다. 예를 들어, 낮은 피크 RPM과 높은 피크 RPM 값 모두 가격이 낮고 높습니다.

따라서 RPM을 사용하여 값을 예측할 수는 없습니다.

## 예시
- 예를 들어 흡연은 폐암과 상관관계가 있는 것으로 알려져 있는데, 흡연은 흡연할 경우 폐암에 걸릴 확률이 더 높기 때문입니다.
- 예를 들어, 낮은 피크 RPM과 높은 피크 RPM 값 모두 가격이 낮고 높습니다.

## 요약
- 따라서 엔진 크기와 가격 사이에는 양의 상관관계가 있습니다.
- 또 다른 예로, 이제 갤런당 고속도로 주행 거리 간의 관계를 살펴보고 자동차 가격에 미치는 영향을 살펴보겠습니다.
- 따라서 갤런당 고속도로 주행 거리와 가격 사이에는 음의 선형 관계가 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we'll talk about the correlation between different variables. Correlation is a statistical metric for measuring to what extent different variables are interdependent. In other words, when we look at two variables over time, if one variable changes, how does this affect change in the other variable? For example, smoking is known to be correlated to lung cancer, since you have a higher chance of getting lung cancer if you smoke. In another example, there is a correlation between umbrella and rain variables, where more precipitation means more people use umbrellas.

Also, if it doesn't rain, people would not carry umbrellas. Therefore, we can say that umbrellas and rain are interdependent and by definition they are correlated. It is important to know that correlation doesn't imply causation. In fact, we can say that umbrella and rain are correlated, but we would not have enough information to say whether the umbrella caused the rain or the rain caused the umbrella. In data science, we usually deal more with correlation.

Let's look at the correlation between engine size and price. This time we'll visualize these two variables using a scatter plot and an added linear line called a regression line, which indicates the relationship between the two. The main goal of this plot is to see whether the engine size has any impact on the price. In this example, you can see that the straight line through the data points is very steep, which shows that there is a positive linear relationship between the two variables. With increase in values of engine size, values of price go up as well, and the slope of the line is positive.

So there is a positive correlation between engine size and price. We can use seaborne reg plot to create the scatter plot. As another example, now let's look at the relationship between highway miles per gallon to see its impact on the car price. As we can see in this plot, when highway miles per gallon value goes up, the value of price goes down. Therefore, there is a negative linear relationship between highway miles per gallon and price.

Although this relationship is negative, the slope of the line is steep, which means that the highway miles per gallon is still a good predictor of price. These two variables are said to have a negative correlation. Finally, we have an example of a weak correlation. For example, both low peak RPM and high values of peak RPM have low and high prices. Therefore, we cannot use RPM to predict the values.

</details>
