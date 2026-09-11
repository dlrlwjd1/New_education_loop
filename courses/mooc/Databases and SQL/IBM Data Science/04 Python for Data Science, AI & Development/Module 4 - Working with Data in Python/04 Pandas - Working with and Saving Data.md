# Pandas: Working with and Saving Data

## 개요
- 강좌: Python for Data Science, AI & Development
- 모듈: Working with Data in Python
- 재생 시간: 2분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-applied-data-science-ai/lecture/j1yDu/pandas-working-with-and-saving-data)
- 데이터 프레임이 있으면 데이터를 사용하여 작업할 수 있으며 결과를 다른 형식으로 저장할 수 있습니다.
- 이것은 13개의 요소 대신 수백만 개의 요소를 가지고 있기 때문에 훨씬 더 어려울 수 있습니다.

## 내용
### 핵심 내용
- 데이터 프레임이 있으면 데이터를 사용하여 작업할 수 있으며 결과를 다른 형식으로 저장할 수 있습니다.
- 이것은 13개의 요소 대신 수백만 개의 요소를 가지고 있기 때문에 훨씬 더 어려울 수 있습니다.
- 판다들은 데이터 프레임의 기둥에서 독특한 요소를 결정하는 유일한 방법을 가지고 있습니다.
- 판다들의 전체 데이터 프레임에 불평등 연산자를 사용할 수 있습니다.
- to_csv 메서드를 사용하여 새 데이터 프레임을 저장할 수 있습니다.
- 데이터 프레임을 다른 형식으로 저장하는 다른 기능도 있습니다.

### 한국어 Transcript

데이터 프레임이 있으면 데이터를 사용하여 작업할 수 있으며 결과를 다른 형식으로 저장할 수 있습니다. 다른 색상의 13블록 스택을 고려하십시오. 데이터 프레임의 열에 고유한 요소가 얼마나 있는지 알아보겠습니다. 이것은 13개의 요소 대신 수백만 개의 요소를 가지고 있기 때문에 훨씬 더 어려울 수 있습니다. 판다들은 데이터 프레임의 기둥에서 독특한 요소를 결정하는 유일한 방법을 가지고 있습니다.

데이터 세트에서 앨범의 고유한 연도를 결정하려고 합니다. 데이터 프레임의 이름을 입력한 다음 대괄호 안에 있는 열 이름을 입력합니다. 그리고 그 방법들을 독특한 방법으로 적용했습니다. 결과는 릴리즈된 열의 모든 고유 요소입니다. 1980년대와 80년대 이후의 노래들로 구성된 새로운 데이터베이스를 만들고 싶다고 말해보죠.

1979년 이후에 만들어진 곡을 위해 나온 열을 보고 해당 열을 선택합니다. 우리는 판다의 한 코드 내에서 이것을 이룰 수 있습니다. 판다들의 전체 데이터 프레임에 불평등 연산자를 사용할 수 있습니다. 우리의 경우에는 1979년 이후 발표된 칼럼과 앨범에 대한 불평등을 단순히 명시하고 있습니다. 조건이 true이면 결과가 true이고 그렇지 않으면 false입니다.

한 줄에 지정된 열을 선택할 수 있습니다. 앞서 언급한 불균등화를 가져온 데이터 프레임 이름과 대괄호를 사용하여 df1 변수에 할당합니다. 1979년 이후 각 앨범이 발매된 새로운 데이터 프레임입니다. to_csv 메서드를 사용하여 새 데이터 프레임을 저장할 수 있습니다. csv 확장명이 포함되어 있는지 확인합니다.

데이터 프레임을 다른 형식으로 저장하는 다른 기능도 있습니다.

## 예시
- 우리는 판다의 한 코드 내에서 이것을 이룰 수 있습니다.

## 요약
- 판다들의 전체 데이터 프레임에 불평등 연산자를 사용할 수 있습니다.
- to_csv 메서드를 사용하여 새 데이터 프레임을 저장할 수 있습니다.
- 데이터 프레임을 다른 형식으로 저장하는 다른 기능도 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

When we have a data frame we can work with the data and save the results in other formats. Consider the stack of 13 blocks of different colors. We can see there are three unique colors. Let's say you would like to find out how many unique elements are in a column of a data frame. This may be much more difficult because instead of 13 elements, you may have millions.

Pandas has the method unique to determine the unique elements in a column of a data frame. Lets say we would like to determine the unique year of the albums in the data set. We enter the name of the data frame, then enter the name of the column Released within brackets. Then we apply the method unique. The result is all of the unique elements in the column Released.

Let's say we would like to create a new database consisting of songs from the 1980s and after. We can look at the column Released for songs made after 1979, then select the corresponding rows. We can accomplish this within one line of code in Pandas. But let's break up the steps. We can use the inequality operators for the entire data frame in Pandas.

The result is a series of Boolean values. For our case, we simply specify the column Released and the inequality for the albums after 1979. The result is a series of Boolean values. The result is true when the condition is true and false otherwise. We can select the specified columns in one line.

We simply use the data frames names and square brackets we placed the previously mentioned inequality and assign it to the variable df1. We now have a new data frame, where each album was released after 1979. We can save the new data frame using the method to_csv. The argument is the name of the csv file. Make sure you include a .

There are other functions to save the data frame in other formats.

</details>
