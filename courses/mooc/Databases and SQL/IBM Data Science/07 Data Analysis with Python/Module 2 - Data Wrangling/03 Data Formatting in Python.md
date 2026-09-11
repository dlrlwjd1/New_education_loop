# Data Formatting in Python

## 개요
- 강좌: Data Analysis with Python
- 모듈: Data Wrangling
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/RjVnb/data-formatting-in-python)
- 데이터는 일반적으로 다양한 장소에서 다양한 사람에 의해 수집되며 다양한 형식으로 저장될 수 있습니다.
- 데이터 형식 지정이란 사용자가 의미 있는 비교를 수행할 수 있도록 데이터를 공통 표현 표준으로 통합하는 것을 의미합니다.

## 내용
### 핵심 내용
- 데이터는 일반적으로 다양한 장소에서 다양한 사람에 의해 수집되며 다양한 형식으로 저장될 수 있습니다.
- 데이터 형식 지정이란 사용자가 의미 있는 비교를 수행할 수 있도록 데이터를 공통 표현 표준으로 통합하는 것을 의미합니다.
- 예를 들어 사람들은 뉴욕시를 표현하기 위해 뉴욕, 뉴욕, 뉴욕 등 다양한 표현을 사용할 수 있습니다.
- 예를 들어, 예상 데이터 유형은 실제로 정수 또는 부동 유형이어야 하지만 가격 기능에 할당된 데이터 유형은 객체라는 것을 알 수 있습니다.
- Pandas에는 다양한 데이터 유형이 있습니다.
- astype 메서드를 사용하여 데이터 유형을 한 형식에서 다른 형식으로 변환할 수 있습니다.

### 한국어 Transcript

이 비디오에서는 형식, 단위, 규칙이 서로 다른 데이터의 문제와 이러한 문제를 해결하는 데 도움이 되는 Pandas 메서드를 살펴보겠습니다. 데이터는 일반적으로 다양한 장소에서 다양한 사람에 의해 수집되며 다양한 형식으로 저장될 수 있습니다. 데이터 형식 지정이란 사용자가 의미 있는 비교를 수행할 수 있도록 데이터를 공통 표현 표준으로 통합하는 것을 의미합니다. 데이터세트 정리의 일환으로 데이터 서식을 지정하면 데이터의 일관성을 유지하고 쉽게 이해할 수 있습니다. 예를 들어 사람들은 뉴욕시를 표현하기 위해 뉴욕, 뉴욕, 뉴욕 등 다양한 표현을 사용할 수 있습니다.

때로는 이런 불결한 데이터를 보는 것이 좋을 때가 있습니다. 예를 들어, 사람들이 뉴욕을 쓰는 다양한 방식을 살펴본다면 이것이 바로 여러분이 원하는 데이터입니다. 또는 사기를 발견할 방법을 찾고 있다면 뉴욕으로 글을 쓰는 것이 뉴욕 전체를 다 쓴 경우보다 이상 현상을 예측할 가능성이 더 높을 수도 있습니다. 하지만 앞으로는 통계 분석을 더 쉽게 하기 위해 단순히 모든 항목을 동일한 개체 또는 형식으로 취급하고 싶을 때가 많습니다. 당사의 중고차 데이터세트를 참조하면, 데이터세트에 갤런당 도시 마일이라는 기능이 있습니다.

이 기능은 갤런 단위당 마일 단위의 자동차 연료 소비량을 나타냅니다. 하지만 미터법 단위를 사용하는 국가에 거주하는 사람이라면 이 값을 미터법 버전인 100km당 리터로 변환해 보는 것이 좋습니다. 갤런당 마일을 100킬로미터당 리터로 변환하려면 235를 도시 갤런당 마일 열의 각 값으로 나누어야 합니다. Python에서는 한 줄의 코드로 이 작업을 쉽게 수행할 수 있습니다. 열을 가져와서 235를 전체 열로 나눈 값으로 설정합니다.

코드의 두 번째 줄에서 데이터 프레임 이름 변경 방법을 사용하여 열 이름을 갤런당 도시 마일에서 100킬로미터당 도시 리터로 바꿉니다. 데이터셋을 Python으로 가져온 경우를 포함하여 여러 가지 이유로 데이터 유형이 잘못 설정되었을 수 있습니다. 예를 들어, 예상 데이터 유형은 실제로 정수 또는 부동 유형이어야 하지만 가격 기능에 할당된 데이터 유형은 객체라는 것을 알 수 있습니다. 나중에 분석할 때는 기능의 데이터 유형을 탐색하고 이를 올바른 데이터 유형으로 변환하는 것이 중요합니다. 그렇지 않으면 나중에 개발된 모델이 이상하게 동작하여 완전히 유효한 데이터가 누락된 데이터처럼 취급될 수 있습니다.

Pandas에는 다양한 데이터 유형이 있습니다. Int64는 정수이고 부동 소수점은 실수입니다. 그 외에도 다루지 않을 내용도 많이 있습니다. Python에서 기능의 데이터 유형을 식별하기 위해 dataframe. dtypes 메서드를 사용하여 데이터 프레임에 있는 각 변수의 데이터 유형을 확인할 수 있습니다.

데이터 유형이 잘못된 경우 dataframe. astype 메서드를 사용하여 데이터 유형을 한 형식에서 다른 형식으로 변환할 수 있습니다. 예를 들어, 가격 열에 astype (“int”) 를 사용하면 객체 열을 정수형 변수로 변환할 수 있습니다.

## 예시
- 예를 들어 사람들은 뉴욕시를 표현하기 위해 뉴욕, 뉴욕, 뉴욕 등 다양한 표현을 사용할 수 있습니다.
- 예를 들어, 사람들이 뉴욕을 쓰는 다양한 방식을 살펴본다면 이것이 바로 여러분이 원하는 데이터입니다.
- Python에서는 한 줄의 코드로 이 작업을 쉽게 수행할 수 있습니다.
- 코드의 두 번째 줄에서 데이터 프레임 이름 변경 방법을 사용하여 열 이름을 갤런당 도시 마일에서 100킬로미터당 도시 리터로 바꿉니다.

## 요약
- 예를 들어, 예상 데이터 유형은 실제로 정수 또는 부동 유형이어야 하지만 가격 기능에 할당된 데이터 유형은 객체라는 것을 알 수 있습니다.
- Pandas에는 다양한 데이터 유형이 있습니다.
- astype 메서드를 사용하여 데이터 유형을 한 형식에서 다른 형식으로 변환할 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we'll look at the problem of data with different formats, units, and conventions and the Pandas methods that help us deal with these issues. Data is usually collected from different places, by different people, which may be stored in different formats. Data formatting means bringing data into a common standard of expression that allows users to make meaningful comparisons. As a part of dataset cleaning, data formatting ensures that data is consistent and easily understandable. For example, people may use different expressions to represent New York City, such as N.

Y., Ny, NY, and New York. Sometimes this unclean data is a good thing to see. For example, if you're looking at the different ways people tend to write New York, then this is exactly the data that you want. Or if you're looking for ways to spot fraud, perhaps writing N. is more likely to predict an anomaly than if someone wrote out New York in full.

But perhaps, more often than not, we just simply want to treat them all as the same entity or format to make statistical analysis easier down the road. Referring to our used car dataset, there's a feature named city-miles per gallon in the dataset, which refers to a car fuel consumption in miles per gallon unit. However, you may be someone who lives in a country that uses metric units, so you would want to convert those values to liters per 100 kilometers, the metric version. To transform miles per gallon to liters per 100 kilometers, we need to divide 235 by each value in the city miles per gallon column. In Python, this can easily be done in one line of code.

You take the column and set it to equal to 235 divided by the entire column. In the second line of code, rename column name from city-miles per gallon to city-liters per 100 kilometers using the data frame rename method. For a number of reasons, including when you imported dataset into Python, the data type may be incorrectly established. For example, here we notice that the assigned data type to the price feature is object although the expected data type should really be an integer or float type. It is important for later analysis to explore the feature's data type and convert them to the correct data types.

Otherwise, the developed models later on may behave strangely and totally valid data may end up being treated like missing data. There are many data types in Pandas. Objects can be letters or words. Int64 are integers, and floats are real numbers. There are many others that we will not discuss.

To identify a feature's data type in Python, we can use the dataframe. dtypes method and check the data type of each variable in a data frame. In the case of wrong data types, the method dataframe. astype can be used to convert a data type from one format to another. For example, using astype("int") for the price column, you can convert the object column into an integer type variable.

</details>
