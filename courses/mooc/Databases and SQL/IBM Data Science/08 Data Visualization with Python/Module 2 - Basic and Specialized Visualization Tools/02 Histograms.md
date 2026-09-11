# Histograms

## 개요
- 강좌: Data Visualization with Python
- 모듈: Basic and Specialized Visualization Tools
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-data-visualization/lecture/E4DFi/histograms)
- 이 비디오를 시청한 후에는 그림을 사용하여 히스토그램을 정의하고, Matplotlib를 사용하여 히스토그램을 만드는 과정을 살펴보고, 히스토그램이 무엇인지 정의하는 것부터 시작해 보겠습니다.
- 히스토그램은 수치형 데이터 세트의 주파수 분포를 나타내는 방법입니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 그림을 사용하여 히스토그램을 정의하고, Matplotlib를 사용하여 히스토그램을 만드는 과정을 살펴보고, 히스토그램이 무엇인지 정의하는 것부터 시작해 보겠습니다.
- 히스토그램은 수치형 데이터 세트의 주파수 분포를 나타내는 방법입니다.
- 값이 0에서 3,413 사이인 데이터 포인트의 개수가 175개인 경우 이 빈에 해당 높이의 막대를 그리고 다른 모든 빈에 대해 동일한 단계를 반복한다고 가정해 보겠습니다.
- 또한 1980년부터 2013년까지 각 국가의 연간 이민자 누적 합계를 나타내는 열을 추가하여 아프가니스탄의 경우 총 58,639명, 알바니아의 경우 15,699명, 이런 식으로 계속해 보겠습니다.
- 2013년의 캐나다 이민자 분포를 시각화하려는 경우 가장 간단한 방법은 2013년 열의 데이터에 대한 히스토그램을 생성하는 것입니다.
- 이 비디오에서는 히스토그램이 숫자형 데이터 세트의 주파수 분포를 나타내는 방법이라는 것을 배웠습니다.

### 한국어 Transcript

이 비디오를 시청한 후에는 그림을 사용하여 히스토그램을 정의하고, Matplotlib를 사용하여 히스토그램을 만드는 과정을 살펴보고, 히스토그램이 무엇인지 정의하는 것부터 시작해 보겠습니다. 히스토그램은 수치형 데이터 세트의 주파수 분포를 나타내는 방법입니다. 작동 방식은 숫자형 데이터의 분산을 빈으로 분할하고 데이터 집합의 각 데이터 점을 빈에 할당한 다음 각 빈에 할당된 데이터 점의 개수를 세는 것입니다. 따라서 세로 축은 기본적으로 각 빈에 있는 데이터 포인트의 빈도 또는 개수입니다. 예를 들어, 데이터 집합의 숫자 값 범위가 34,129라고 가정해 보겠습니다.

이제 히스토그램을 만드는 첫 번째 단계는 가로 축을 너비가 같은 10개 빈으로 분할하는 것입니다. 그런 다음 첫 번째 빈, 두 번째 빈, 세 번째 빈 등의 한계 사이에 있는 데이터 포인트의 수를 세어 히스토그램을 구성합니다. 값이 0에서 3,413 사이인 데이터 포인트의 개수가 175개인 경우 이 빈에 해당 높이의 막대를 그리고 다른 모든 빈에 대해 동일한 단계를 반복한다고 가정해 보겠습니다. 그리고 빈에 속하는 데이터 포인트가 없는 경우 해당 빈은 높이가 0인 막대를 갖게 됩니다. 그렇다면 Matplotlib를 사용하여 히스토그램을 만들려면 어떻게 해야 할까요?

국가 이름이 각 행의 색인이 되도록 데이터 프레임을 처리해 봅시다. 그러면 특정 국가와 관련된 행을 훨씬 쉽게 검색할 수 있을 것입니다. 또한 1980년부터 2013년까지 각 국가의 연간 이민자 누적 합계를 나타내는 열을 추가하여 아프가니스탄의 경우 총 58,639명, 알바니아의 경우 15,699명, 이런 식으로 계속해 보겠습니다. 데이터 프레임의 이름을 df_canada로 지정해 보겠습니다. 캐나다 이민 데이터 세트를 고려하여 국가를 지수로 사용하고 다른 열을 합계로 표시하면 1980년부터 2013년까지 각 국가의 연간 이민자 누적 합계를 나타냅니다.

2013년의 캐나다 이민자 분포를 시각화하려는 경우 가장 간단한 방법은 2013년 열의 데이터에 대한 히스토그램을 생성하는 것입니다. Matplotlib를 사용하여 이 작업을 수행하는 방법을 살펴보겠습니다. 먼저 Matplotlib를 mpl로 가져오고 스크립팅 인터페이스를 plt로 가져오는 것입니다. 그런 다음 2013 열의 데이터에 대해 plot 함수를 호출하고 kind=hist를 지정하여 히스토그램을 생성한 다음 그림을 완성하기 위해 제목을 지정하고 양쪽 축에 레이블을 지정합니다. 마지막으로 show 함수를 사용하여 수치를 표시하면, 이제 2013년의 캐나다 이민 분포를 나타내는 히스토그램이 나타납니다.

하지만 빈이 가로축의 눈금 표시와 정렬되지 않은 점을 주의하세요. 이렇게 하면 히스토그램을 읽기 어려울 수 있습니다. 이제 히스토그램의 효과를 높이기 위해 이 문제를 해결해 보겠습니다. 이 문제를 해결하는 한 가지 방법은 NumPy 라이브러리에서 히스토그램 함수를 차용하는 것이므로 평소와 같이 Matplotlib와 스크립팅 인터페이스를 가져오는 것으로 시작하지만 이번에는 NumPy 라이브러리도 가져온 다음 2013 열의 데이터에 대해 NumPy 히스토그램 함수를 호출합니다. 이 함수는 2013 열의 데이터 스프레드를 너비가 같은 10개의 빈으로 분할합니다.

또한 각 빈에 속하는 데이터 포인트의 개수를 계산한 다음, 여기서는 'count'라고 부르는 각 빈과 'bin_ edge'라고 부르는 빈 경계값의 빈도를 반환합니다. 그런 다음 이 Bin 경계값을 플롯 함수의 추가 파라미터로 전달하여 히스토그램을 생성하면 됩니다. 수평 축에 빈 경계와 눈금 표시가 명확하게 정렬된 정밀하게 생성된 히스토그램입니다. 이 비디오에서는 히스토그램이 숫자형 데이터 세트의 주파수 분포를 나타내는 방법이라는 것을 배웠습니다. Matplotlib에서 히스토그램을 생성하려면 Matplotlib를 mpl로 가져오면 됩니다.

종류 매개 변수가 hist로 지정된 데이터 프레임에서 plot 함수를 호출할 수 있습니다. NumPy 라이브러리를 사용하여 히스토그램 표현을 위한 빈을 만들 수 있습니다.

## 예시
- 예를 들어, 데이터 집합의 숫자 값 범위가 34,129라고 가정해 보겠습니다.

## 요약
- 또한 1980년부터 2013년까지 각 국가의 연간 이민자 누적 합계를 나타내는 열을 추가하여 아프가니스탄의 경우 총 58,639명, 알바니아의 경우 15,699명, 이런 식으로 계속해 보겠습니다.
- 2013년의 캐나다 이민자 분포를 시각화하려는 경우 가장 간단한 방법은 2013년 열의 데이터에 대한 히스토그램을 생성하는 것입니다.
- 이 비디오에서는 히스토그램이 숫자형 데이터 세트의 주파수 분포를 나타내는 방법이라는 것을 배웠습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Histograms. After watching this video, you'll be able to: define a histogram with the help of an illustration, explore the process of creating a histogram using Matplotlib, let's start by defining what a histogram is. A histogram is a way of representing the frequency distribution of a numeric data set. The way it works is that it partitions the spread of the numeric data into bins, assigns each data point in the data set to a bin, and then counts the number of data points assigned to each bin. So, the vertical axis is essentially the frequency or the number of data points in each bin.

For example, let's say the range of the numeric values in the data set is 34,129. Now, the first step in creating a histogram is partitioning the horizontal axis in, say, 10 bins of equal width. Then we construct the histogram by counting how many data points have a value that is between the limits of the first bin, the second bin, the third bin, and so on. Say, the number of data points that have a value between 0 and 3,413 is 175, then we draw a bar of that height for this bin, we repeat the same step for all the other bins. And if no data points fall into a bin, then that bin would have a bar of height zero.

So how do we create a histogram using Matplotlib? Let's process the data frame so that the country name becomes the index of each row, this should make retrieving rows pertaining to specific countries a lot easier. Also, let's add an extra column that represents the cumulative sum of annual immigration from each country from 1980 to 2013, so for Afghanistan it's 58,639 total, and for Albania it's 15,699, and so on. And let's name our data frame df_canada. Considering the Canada immigration data set, having countries as the index, and having another column as total represents the cumulative sum of annual immigration from each country from 1980 to 2013.

Say we want to visualize the distribution of immigrants to Canada in the year 2013, the simplest way to do that is to generate a histogram of the data in column 2013. Let's see how we can do that with Matplotlib, first, we import Matplotlib as mpl and its scripting interface as plt. Then we call the plot function on the data in column 2013 and we specify kind=hist to generate a histogram, then, to complete the figure, we give it a title and label both its axes. Finally, we use the show function to display the figure, and there you have it: a histogram that depicts the distribution of immigration to Canada in 2013. But notice how the bins are not aligned with the tick marks on the horizontal axis, this can make the histogram hard to read.

So, let's try to fix this in order to make our histogram more effective. One way to solve this issue is to borrow the histogram function from the NumPy library, so as usual, we start by importing Matplotlib and its scripting interface, but this time we also import the NumPy library, then we call the NumPy histogram function on the data in column 2013. This function is going to partition the spread of the data in column 2013 in ten bins of equal width, where ten is the default number of bins. It also computes the number of data points that fall in each bin and then return this frequency of each bin which we are calling ‘count’ here, and the bin edges which we will call ‘bin_ edges’. We then pass these bin edges as an additional parameter in our plot function to generate the histogram, and there you go.

A precisely generated histogram with the bin edges and tick marks clearly aligned on the horizontal axis. In this video you learned that: a histogram is a way of representing the frequency distribution of a numeric data set. To generate a histogram on Matplotlib, you import Matplotlib as mpl and its scripting interface is plt. You can call the plot function on the data frame with kind parameter assigned as hist. You can use the NumPy library to create bins for the histogram representation.

</details>
