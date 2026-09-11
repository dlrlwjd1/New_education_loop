# Pre-processing Data in Python

## 개요
- 강좌: Data Analysis with Python
- 모듈: Data Wrangling
- 재생 시간: 2분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/1wWCA/pre-processing-data-in-python)
- 이 용어에 익숙하지 않다면 데이터 사전 처리는 데이터 분석의 필수 단계입니다.
- 이는 한 원시 양식의 데이터를 다른 형식으로 변환하거나 매핑하여 추가 분석에 사용할 수 있도록 하는 프로세스입니다.

## 내용
### 핵심 내용
- 이 용어에 익숙하지 않다면 데이터 사전 처리는 데이터 분석의 필수 단계입니다.
- 이는 한 원시 양식의 데이터를 다른 형식으로 변환하거나 매핑하여 추가 분석에 사용할 수 있도록 하는 프로세스입니다.
- 데이터 사전 처리는 흔히 데이터 정리 또는 데이터 랭글링이라고 하며, 다른 용어도 있을 수 있습니다.
- 다양한 소스의 데이터는 다양한 형식, 다른 단위 또는 다양한 규칙으로 되어 있을 수 있습니다.
- 값을 동일한 형식, 단위 또는 규칙으로 표준화할 수 있는 Python Pandas의 몇 가지 메서드를 소개합니다.
- 예를 들어 열의 각 항목에 값을 추가할 수 있습니다.

### 한국어 Transcript

이 비디오에서는 몇 가지 데이터 사전 처리 기술을 살펴보겠습니다. 이 용어에 익숙하지 않다면 데이터 사전 처리는 데이터 분석의 필수 단계입니다. 이는 한 원시 양식의 데이터를 다른 형식으로 변환하거나 매핑하여 추가 분석에 사용할 수 있도록 하는 프로세스입니다. 데이터 사전 처리는 흔히 데이터 정리 또는 데이터 랭글링이라고 하며, 다른 용어도 있을 수 있습니다. 이 모듈에서 다룰 주제는 다음과 같습니다 .

먼저 누락된 값을 식별하고 처리하는 방법을 보여드리겠습니다. 누락값 조건은 데이터 입력이 비어 있을 때마다 발생합니다. 그런 다음 데이터 형식에 대해 알아보겠습니다. 다양한 소스의 데이터는 다양한 형식, 다른 단위 또는 다양한 규칙으로 되어 있을 수 있습니다. 값을 동일한 형식, 단위 또는 규칙으로 표준화할 수 있는 Python Pandas의 몇 가지 메서드를 소개합니다.

그 다음에는 데이터 정규화에 대해 다루겠습니다. 수치 데이터의 열마다 범위가 매우 다를 수 있으며 직접 비교는 의미가 없는 경우가 많습니다. 정규화는 더 유용한 비교를 위해 모든 데이터를 유사한 범위로 가져오는 방법입니다. 구체적으로는 센터링 및 스케일링 기술에 초점을 맞춘 다음 데이터 비닝을 도입할 것입니다. 비닝은 일련의 수치 값을 기반으로 더 큰 범주를 만듭니다.

데이터 그룹 간 비교에 특히 유용합니다. 마지막으로 범주형 변수에 대해 알아보고 통계 모델링을 쉽게 하기 위해 범주형 값을 수치형 변수로 변환하는 방법을 보여드리겠습니다. Python에서는 일반적으로 열을 기준으로 연산을 수행합니다. 열의 각 행은 샘플, 즉 데이터베이스의 다른 중고차를 나타냅니다. 열 이름을 지정하여 열에 액세스합니다.

예를 들어 심볼과 본문 스타일에 액세스할 수 있습니다. Python에서 데이터 프레임을 조작하는 방법은 여러 가지가 있습니다. 예를 들어 열의 각 항목에 값을 추가할 수 있습니다. 각 기호 항목에 하나를 추가하려면 이 명령을 사용합니다. 이렇게 하면 현재 값에 1이 추가되어 데이터 프레임 열의 각 값이 변경됩니다.

## 예시
- 예를 들어 심볼과 본문 스타일에 액세스할 수 있습니다.
- 예를 들어 열의 각 항목에 값을 추가할 수 있습니다.
- 각 기호 항목에 하나를 추가하려면 이 명령을 사용합니다.

## 요약
- 다양한 소스의 데이터는 다양한 형식, 다른 단위 또는 다양한 규칙으로 되어 있을 수 있습니다.
- 값을 동일한 형식, 단위 또는 규칙으로 표준화할 수 있는 Python Pandas의 몇 가지 메서드를 소개합니다.
- 예를 들어 열의 각 항목에 값을 추가할 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we'll be going through some data pre-processing techniques. If you're unfamiliar with the term, data pre-processing is a necessary step in data analysis. It is the process of converting or mapping data from one raw form into another format to make it ready for further analysis. Data pre processing is often called data cleaning or data wrangling, and there are likely other terms. Here are the topics that we'll be covering in this module.

First, we'll show you how to identify and handle missing values. A missing value condition occurs whenever a data entry is left empty. Then we'll cover data formats. Data from different sources may be in various formats, in different units, or in various conventions. We will introduce some methods in Python Pandas that can standardize the values into the same format, or unit, or convention.

After that, we'll cover data normalization. Different columns of numerical data may have very different ranges, and direct comparison is often not meaningful. Normalization is a way to bring all data into a similar range for more useful comparison. Specifically, we'll focus on the techniques of centering and scaling, and then we'll introduce data binning. Binning creates bigger categories from a set of numerical values.

It is particularly useful for comparison between groups of data. Lastly, we'll talk about categorical variables, and show you how to convert categorical values into numeric variables to make statistical modeling easier. In Python, we usually perform operations along columns. Each row of the column represents a sample i. e, a different used car in the database.

You access a column by specifying the name of the column. For example, you can access symboling and body style. Each of these columns is a Panda series. There are many ways to manipulate data frames in Python. For example, you can add a value to each entry of a column.

To add one to each symboling entry, use this command. This changes each value of the data frame column by adding one to the current value.

</details>
