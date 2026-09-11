# Binning in Python

## 개요
- 강좌: Data Analysis with Python
- 모듈: Data Wrangling
- 재생 시간: 2분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/T8z3M/binning-in-python)
- 예를 들어 나이를 0-5, 6-10, 11-15세 등으로 구분할 수 있습니다.
- 때때로 비닝을 사용하면 예측 모형의 정확도가 향상될 수 있습니다.

## 내용
### 핵심 내용
- 예를 들어 나이를 0-5, 6-10, 11-15세 등으로 구분할 수 있습니다.
- 때때로 비닝을 사용하면 예측 모형의 정확도가 향상될 수 있습니다.
- 또한 데이터 분포를 더 잘 이해하기 위해 데이터 비닝을 사용하여 숫자 값 세트를 더 적은 수의 빈으로 그룹화하는 경우도 있습니다.
- 이러한 차량을 저가, 중가, 고가 등 세 가지 범주로 분류할 수 있습니다.
- Python에서는 비닝을 쉽게 구현할 수 있습니다.
- 그런 다음 히스토그램을 사용하여 데이터를 빈으로 나눈 후의 분포를 시각화할 수 있습니다.

### 한국어 Transcript

[음악] 이 비디오에서는 데이터 전처리 방법으로서의 비닝에 대해 알아보겠습니다. 비닝은 값을 빈으로 그룹화하는 것입니다. 예를 들어 나이를 0-5, 6-10, 11-15세 등으로 구분할 수 있습니다. 때때로 비닝을 사용하면 예측 모형의 정확도가 향상될 수 있습니다. 또한 데이터 분포를 더 잘 이해하기 위해 데이터 비닝을 사용하여 숫자 값 세트를 더 적은 수의 빈으로 그룹화하는 경우도 있습니다.

예를 들어, 가격의 속성 범위는 5,000에서 45, 500 사이입니다. 비닝을 사용하여 가격을 저가, 중가, 고가의 세 범주로 분류합니다. 실제 자동차 데이터셋에서 가격은 5,188에서 45, 400 사이의 숫자 변수로, 201개의 고유 값을 가집니다. 이러한 차량을 저가, 중가, 고가 등 세 가지 범주로 분류할 수 있습니다. Python에서는 비닝을 쉽게 구현할 수 있습니다.

빈 너비가 같은 세 개의 빈이 필요하기 때문에 같은 거리를 두고 있는 구분선 역할을 하는 네 개의 숫자가 필요합니다. 먼저, NumPy 함수 linspace를 사용하여 지정된 가격 구간 동안 같은 간격의 숫자 4개가 포함된 배열 빈을 반환합니다. 다양한 빈 이름을 포함하는 목록 그룹 밑줄 이름을 만듭니다. Pandas 함수 cut을 사용하여 데이터 값을 분할하고 빈으로 정렬합니다. 그런 다음 히스토그램을 사용하여 데이터를 빈으로 나눈 후의 분포를 시각화할 수 있습니다.

이 히스토그램은 가격 기능에 적용한 입찰가를 기반으로 플로팅한 히스토그램입니다. 도표를 보면 대부분의 자동차가 가격이 낮고 가격이 높은 차량은 극소수에 불과하다는 것을 알 수 있습니다.

## 예시
- 예를 들어 나이를 0-5, 6-10, 11-15세 등으로 구분할 수 있습니다.
- 예를 들어, 가격의 속성 범위는 5,000에서 45, 500 사이입니다.

## 요약
- 이러한 차량을 저가, 중가, 고가 등 세 가지 범주로 분류할 수 있습니다.
- Python에서는 비닝을 쉽게 구현할 수 있습니다.
- 그런 다음 히스토그램을 사용하여 데이터를 빈으로 나눈 후의 분포를 시각화할 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we'll be talking about binning as a method of data preprocessing. Binning is when you group values together into bins. For example, you can bin age into 0-5, 6-10, 11-15 and so on. Sometimes binning can improve accuracy of the predictive models. In addition, sometimes we use data binning to group a set of numerical values into a smaller number of bins to have a better understanding of the data distribution.

As example, "price" here is an attribute range from 5,000 to 45,500. Using binning, we categorize the price into three bins: low price, medium price and high prices. In the actual car dataset, price is a numerical variable ranging from 5,188 to 45,400. It has 201 unique values. We can categorize them into three bins, low, medium and high price cars.

In Python, we can easily implement the binning. We would like three bins of equal bin width, so we need four numbers as dividers that are equal distance apart. First, we use the NumPy function linspace to return the array bins that contains four equally spaced numbers over the specified interval of the price. We create a list group underscore names that contains the different bin names. We use the Pandas function cut to segment and sort the data values into bins.

You can then use histograms to visualize the distribution of the data after they've been divided into bins. This is the histogram that we plotted based on the binning that we applied in the price feature. From the plot, it is clear that most cars have a low price and only very few cars have high price.

</details>
