# Data Normalization in Python

## 개요
- 강좌: Data Analysis with Python
- 모듈: Data Wrangling
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/pqNBS/data-normalization-in-python)
- [음악] 이 비디오에서는 데이터 전처리에서 이해해야 할 중요한 기술인 데이터 정규화에 대해 설명하겠습니다.
- 중고차 데이터 세트를 살펴보면 데이터에서 특징 길이는 150에서 250 사이이고 특징 너비와 높이는 50에서 100 사이라는 것을 알 수 있습니다.

## 내용
### 핵심 내용
- [음악] 이 비디오에서는 데이터 전처리에서 이해해야 할 중요한 기술인 데이터 정규화에 대해 설명하겠습니다.
- 중고차 데이터 세트를 살펴보면 데이터에서 특징 길이는 150에서 250 사이이고 특징 너비와 높이는 50에서 100 사이라는 것을 알 수 있습니다.
- 단순 특징 스케일링이라고 하는 첫 번째 방법은 각 값을 해당 특징의 최대값으로 나누는 것입니다.
- 이전 예제에 따라 길이 특성에 정규화 방법을 적용할 수 있습니다.
- 단순 특징 스케일링 방법을 사용하여 특징의 최대값으로 나눕니다.
- Pandas 메서드 max () 를 사용하면 단 한 줄의 코드로 이 작업을 수행할 수 있습니다.

### 한국어 Transcript

[음악] 이 비디오에서는 데이터 전처리에서 이해해야 할 중요한 기술인 데이터 정규화에 대해 설명하겠습니다. 중고차 데이터 세트를 살펴보면 데이터에서 특징 길이는 150에서 250 사이이고 특징 너비와 높이는 50에서 100 사이라는 것을 알 수 있습니다. 값의 범위가 일관되도록 이러한 변수를 정규화하는 것이 좋습니다. 이러한 정규화를 통해 향후 일부 통계 분석을 더 쉽게 수행할 수 있습니다. 변수 간에 범위를 일관되게 설정함으로써 말이죠.

정규화를 통해 서로 다른 특징을 더 공정하게 비교하여 동일한 영향을 미치는지 확인할 수 있습니다. 다음은 정규화가 중요한 이유를 이해하는 데 도움이 되는 또 다른 예제입니다. 연령과 소득이라는 두 가지 특징을 포함하는 데이터 세트를 예로 들어 보겠습니다. 연령 범위는 0~100세이고 소득 범위는 0~20,000입니다. 소득은 연령보다 약 1,000배 더 많으며 범위는 20,000에서 50만 사이입니다.

따라서 이 두 기능의 범위는 매우 다릅니다. 예를 들어 선형 회귀와 같은 추가 분석을 수행할 경우 “수입”이라는 속성은 값이 더 크기 때문에 결과에 본질적으로 더 많은 영향을 미칩니다. 하지만 이것이 반드시 예측 변수로서 더 중요하다는 것을 의미하지는 않습니다. 따라서 데이터의 특성상 선형 회귀 모델이 연령보다 소득에 더 큰 비중을 두도록 편향됩니다. 이를 방지하기 위해 이 두 변수를 0에서 1 사이의 값으로 정규화할 수 있습니다.

오른쪽에 있는 두 테이블을 비교하십시오. 정규화 후에는 이제 두 변수 모두 나중에 만들 모델에 비슷한 영향을 미칩니다. 데이터를 정규화하는 방법에는 여러 가지가 있습니다. 세 가지 기법만 간단히 설명하겠습니다. 단순 특징 스케일링이라고 하는 첫 번째 방법은 각 값을 해당 특징의 최대값으로 나누는 것입니다.

이렇게 하면 새 값의 범위가 0에서 1 사이가 됩니다. min max라는 두 번째 방법은 각 값 x 밑줄 old 값을 취하여 해당 특성의 최소값에서 뺀 다음 해당 특성의 범위로 나눕니다. 다시 말하지만, 결과로 생성되는 새 값의 범위는 0과 1 사이입니다. 세 번째 방법을 Z-점수 또는 표준 점수라고 합니다. 이 공식에서는 각 값에 대해 특징의 평균인 mu를 뺀 다음 표준 편차 시그마로 나눕니다.

결과 값은 0을 중심으로 하며 일반적으로 음수 3에서 양수 3 사이이지만 더 높거나 낮을 수 있습니다. 이전 예제에 따라 길이 특성에 정규화 방법을 적용할 수 있습니다. 먼저 단순 특징 스케일링 방법을 사용합니다. 단순 특징 스케일링 방법을 사용하여 특징의 최대값으로 나눕니다. Pandas 메서드 max () 를 사용하면 단 한 줄의 코드로 이 작업을 수행할 수 있습니다.

길이 기능의 최소 최대 메서드는 다음과 같습니다. 각 값을 해당 열의 최소값으로 뺀 다음 해당 열의 범위 (최대값에서 최소값을 뺀 값) 로 나눕니다. 마지막으로 길이 특성에 Z-score 방법을 적용하여 값을 정규화합니다. 여기서는 길이 특성에 평균 및 STD 방법을 적용합니다. 평균 메서드는 데이터 세트의 특징 평균값을 반환하고 STD 메서드는 데이터 세트 내 특성의 표준 편차를 반환합니다.

## 예시
- 예를 들어 선형 회귀와 같은 추가 분석을 수행할 경우 “수입”이라는 속성은 값이 더 크기 때문에 결과에 본질적으로 더 많은 영향을 미칩니다.
- Pandas 메서드 max () 를 사용하면 단 한 줄의 코드로 이 작업을 수행할 수 있습니다.

## 요약
- 이전 예제에 따라 길이 특성에 정규화 방법을 적용할 수 있습니다.
- 단순 특징 스케일링 방법을 사용하여 특징의 최대값으로 나눕니다.
- Pandas 메서드 max () 를 사용하면 단 한 줄의 코드로 이 작업을 수행할 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

[MUSIC] In this video we'll be talking about data normalization, an important technique to understand in data preprocessing. When we take a look at the used car data set, we notice in the data that the feature length ranges from 150 to 250, while feature width and height ranges from 50 to 100. We may want to normalize these variables so that the range of the values is consistent. This normalization can make some statistical analyses easier down the road. By making the ranges consistent between variables.

Normalization enables a fairer comparison between the different features, making sure they have the same impact. It is also important for computational reasons. Here is another example that will help you understand why normalization is important. Consider a data set containing two features: age and income, where age ranges from 0 to 100, while income ranges from 0 to 20,000 and higher. Income is about 1,000 times larger than age and ranges from 20,000 to 500,000.

So these two features are in very different ranges. When we do further analysis, like linear regression, for example, the attribute "income" will intrinsically influence the result more due to its larger value. But this doesn't necessarily mean it is more important as a predictor. So the nature of the data biases the linear regression model to weigh income more heavily than age. To avoid this, we can normalize these two variables into values that range from 0 to 1.

Compare the two tables at the right. After normalization, both variables now have a similar influence on the models we will build later. There are several ways to normalize data. I will just outline three techniques. The first method, called simple feature scaling, just divides each value by the maximum value for that feature.

This makes the new values range between 0 and 1. The second method, called min max, takes each value x underscore old, subtracts it from the minimum value of that feature, then divides by the range of that feature. Again, the resulting new values range between 0 and 1. The third method is called Z-score, or standard score. In this formula, for each value, you subtract the mu, which is the average of the feature and then divide by the standard deviation sigma.

The resulting values hover around zero and typically range between negative three and positive three, but can be higher or lower. Following our earlier example, we can apply the normalization method on the length feature. First, we use the simple feature scaling method, where we divide it by the maximum value in the feature. Using the Pandas method max(), This can be done in just one line of code. Here's the min max method on the length feature.

We subtract each value by the minimum of that column, then divide it by the range of that column the max minus the min. Finally, we apply the Z-score method on length feature to normalize the values. Here we apply the mean and STD method on the length feature. Mean method will return the average value of the feature in the data set and STD method will return the standard deviation of the features in the data set.

</details>
