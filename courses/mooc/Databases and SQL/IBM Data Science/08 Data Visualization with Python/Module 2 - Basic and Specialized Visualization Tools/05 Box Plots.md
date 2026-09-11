# Box Plots

## 개요
- 강좌: Data Visualization with Python
- 모듈: Basic and Specialized Visualization Tools
- 재생 시간: 3분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-data-visualization/lecture/oPnul/box-plots)
- 이 비디오를 시청한 후 그림을 사용하여 박스 플롯을 설명할 수 있습니다.
- Matplotlib을 사용하여 박스 플롯을 만드는 방법을 설명하십시오.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후 그림을 사용하여 박스 플롯을 설명할 수 있습니다.
- Matplotlib을 사용하여 박스 플롯을 만드는 방법을 설명하십시오.
- Matplotlib를 사용하여 박스 플롯을 만드는 방법을 살펴보겠습니다.
- 그런 다음 df_japan에서 plot 함수를 호출하고 kind=box를 설정하여 박스 플롯을 생성합니다.
- 이 비디오에서는 박스 플롯이 다섯 가지 주요 차원을 통해 주어진 데이터 분포를 통계적으로 나타내는 방법이라는 것을 배웠습니다.
- Matplotlib를 사용하여 박스 플롯을 만들 수 있습니다.

### 한국어 Transcript

[음악] 박스 플롯에 오신 것을 환영합니다. 이 비디오를 시청한 후 그림을 사용하여 박스 플롯을 설명할 수 있습니다. Matplotlib을 사용하여 박스 플롯을 만드는 방법을 설명하십시오. 박스 플롯은 5개의 기본 차원을 통해 주어진 데이터의 분포를 통계적으로 나타내는 방법입니다. 최소값은 일반적으로 첫 번째 사분위수에서 사분위수 범위 (IQR) 의 1.5배를 뺀 값입니다.

첫 번째 사분위수는 정렬된 데이터를 통과하는 지점의 25% 입니다. 즉, 데이터 포인트의 1/4이 이 값보다 작습니다. 중위수는 정렬된 데이터의 중위수입니다. 세 번째 사분위수는 정렬된 데이터를 통과하는 지점의 75% 입니다. 즉, 데이터 포인트의 4분의 3이 이 값보다 작습니다.

최대값은 일반적으로 IQR의 1.5배에 3사분위수를 더한 값입니다. 마지막으로, 박스 플롯은 특이치를 외측 및 하한 외부에 있는 개별 점으로 표시합니다. Matplotlib를 사용하여 박스 플롯을 만드는 방법을 살펴보겠습니다. 먼저 데이터 프레임 df_canada를 처리하여 국가 이름을 지수로 설정하고 1980년부터 2013년까지 각 국가의 연간 이민자 누적 합계를 나타내는 열을 추가합니다. 일본에서 캐나다로의 이민을 시각화하기 위해 박스 플롯을 만들려고 합니다.

지금까지 배운 다른 도구와 마찬가지로 먼저 Matplotlib를 MPL로 가져오고 Pyplot 인터페이스를 PLT로 가져옵니다. 그런 다음 일본에 대한 데이터에 새 데이터 프레임을 만들고 연도 변수를 사용하여 전체 열을 제외합니다. 그런 다음 결과 데이터 프레임을 올바른 형식으로 전치하여 박스 플롯을 생성합니다. 이 새 데이터프레임의 이름을 df_japan으로 지정해 보겠습니다. 그런 다음 df_japan에서 plot 함수를 호출하고 kind=box를 설정하여 박스 플롯을 생성합니다.

그런 다음 그림을 완성하고 제목을 지정하고 세로 축에 적절한 레이블을 지정합니다. 마지막으로 show 함수를 사용하여 그림을 표시합니다. 1980년부터 2013년까지 캐나다로 이주한 일본인의 분포를 잘 보여줍니다. 이 도표를 통해 이 데이터에 특이치가 없음을 확인할 수 있습니다. 또한 중위수가 상단에 가까울수록 상반부에 데이터 집중도가 더 높은 것을 알 수 있습니다.

이 비디오에서는 박스 플롯이 다섯 가지 주요 차원을 통해 주어진 데이터 분포를 통계적으로 나타내는 방법이라는 것을 배웠습니다. 5가지 기본 차원은 최소값, 제1사분위수, 중앙값, 제3사분위수, 최대값입니다. Matplotlib를 사용하여 박스 플롯을 만들 수 있습니다.

## 예시
- 이 강의는 개념 설명 중심이며 Transcript에서 독립된 예시를 확인하기 어렵다.

## 요약
- 그런 다음 df_japan에서 plot 함수를 호출하고 kind=box를 설정하여 박스 플롯을 생성합니다.
- 이 비디오에서는 박스 플롯이 다섯 가지 주요 차원을 통해 주어진 데이터 분포를 통계적으로 나타내는 방법이라는 것을 배웠습니다.
- Matplotlib를 사용하여 박스 플롯을 만들 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

[MUSIC] Welcome to box plots. After watching this video, you'll be able to describe a box plot with the help of an illustration. Explain how to create box plots using Matplotlib. So, what is a box plot? A box plot is a way of statistically representing the distribution of given data through five primary dimensions.

Minimum is usually the value obtained by subtracting 1.5 times the interquartile range, or IQR, from the first quartile. First quartile is the point 25% of the way through the sorted data. In other words, a quarter of the data points are less than this value. Median is the median of the sorted data. The third quartile is the point 75% of the way through the sorted data.

In other words, three quarters of the data points are less than this value. The maximum is usually the value obtained by adding the third quartile to 1.5 times the IQR. Finally, box plots also display outliers as individual dots outside the outer and lower extremes. Let's see how we can create a box plot with Matplotlib. We first process the data frame, df_canada, to set the country name as the index and add a column representing the cumulative sum of annual immigration from each country from 1980 to 2013.

We want to create a box plot to visualize immigration from Japan to Canada. As with the other tools we've learned, we start by importing Matplotlib as MPL and the Pyplot interface as PLT. Then we create a new dataframe in the data about Japan and we exclude the total column using the years variable. Then we transpose the resulting dataframe in the correct format to create the box plot. Lets name this new dataframe df_japan.

Following that, we call the plot function on df_japan and set a kind=box to generate a box plot. Then we complete the figure, we give it a title and label the vertical axis appropriately. Finally, we use the show function to display the figure. And there you have it, a box plot that provides a good distribution of Japanese immigration to Canada from 1980 to 2013. From this plot, we can verify that there are no outliers in this data.

Also, we can see that the median is closer to the top, indicating more data concentration in the upper half. In this video you learned that a box plot is a way of statistically representing given data distribution through five main dimensions. The five main dimensions are minimum, first quartile, median, third quartile, and maximum. You can create a box plot using Matplotlib.

</details>
