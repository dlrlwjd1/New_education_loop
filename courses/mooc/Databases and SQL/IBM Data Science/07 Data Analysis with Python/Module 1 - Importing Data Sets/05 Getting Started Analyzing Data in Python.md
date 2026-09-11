# Getting Started Analyzing Data in Python

## 개요
- 강좌: Data Analysis with Python
- 모듈: Importing Data Sets
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/9jjM3/getting-started-analyzing-data-in-python)
- 이 비디오에서는 Python, Pandas 및 데이터를 사용할 때 모든 데이터 과학자와 분석가가 알아야 할 몇 가지 간단한 Pandas 메서드를 소개합니다.
- Pandas에는 기능의 데이터 유형을 이해하거나 데이터세트 내 데이터 분포를 살펴보는 데 사용할 수 있는 몇 가지 내장 메서드가 있습니다.

## 내용
### 핵심 내용
- 이 비디오에서는 Python, Pandas 및 데이터를 사용할 때 모든 데이터 과학자와 분석가가 알아야 할 몇 가지 간단한 Pandas 메서드를 소개합니다.
- Pandas에는 기능의 데이터 유형을 이해하거나 데이터세트 내 데이터 분포를 살펴보는 데 사용할 수 있는 몇 가지 내장 메서드가 있습니다.
- 이러한 문제는 나중에 해결해야 할 수도 있습니다.
- 설명된 방법을 객체 유형 열에서도 작동하도록 할 수 있습니다.
- 객체 유형 열의 경우 고유, 상위, 빈도와 같은 다른 통계 집합이 평가되는 것을 볼 수 있습니다.
- 이 함수는 데이터 프레임을 간결하게 요약합니다.

### 한국어 Transcript

이 비디오에서는 Python, Pandas 및 데이터를 사용할 때 모든 데이터 과학자와 분석가가 알아야 할 몇 가지 간단한 Pandas 메서드를 소개합니다. 이 시점에서는 데이터가 로드된 것으로 가정합니다. 이제 데이터세트를 살펴볼 차례입니다. Pandas에는 기능의 데이터 유형을 이해하거나 데이터세트 내 데이터 분포를 살펴보는 데 사용할 수 있는 몇 가지 내장 메서드가 있습니다. 이러한 방법을 사용하면 데이터세트를 개괄적으로 살펴볼 수 있을 뿐만 아니라 잘못된 데이터 유형의 기능과 같은 잠재적 문제를 지적할 수 있습니다.

이러한 문제는 나중에 해결해야 할 수도 있습니다. Pandas 객체에 저장되는 주요 유형은 객체 , 부동 소수점, 정수 및 날짜 시간입니다. 데이터 유형 이름은 네이티브 Python의 이름과는 약간 다릅니다. 이 표는 이들 간의 차이점과 유사점을 보여줍니다. 숫자형 데이터 유형인 int와 float와 같이 매우 유사한 것도 있습니다.

Pandas 객체 타입은 이름 변경을 제외하면 Python의 문자열과 비슷한 기능을 합니다. 날짜 시간 Pandas 유형은 시계열 데이터를 처리하는 데 매우 유용한 유형이지만 데이터 집합에서 데이터 유형을 확인해야 하는 두 가지 이유가 있습니다. Pandas는 원본 데이터 테이블에서 감지한 인코딩을 기반으로 유형을 자동으로 할당합니다. 여러 가지 이유로 이 할당은 올바르지 않을 수 있습니다. 예를 들어 연속된 숫자가 포함될 것으로 예상되는 자동차 가격 열에 객체의 데이터 유형이 할당되면 어색할 수 있습니다.

플로트 타입을 갖는 것이 더 자연스러울 것입니다. Jerry는 수동으로 데이터 유형을 float로 변경해야 할 수도 있습니다. 두 번째 이유는 숙련된 데이터 과학자가 특정 열에 어떤 Python 함수를 적용할 수 있는지 확인할 수 있기 때문입니다. 예를 들어, 일부 수학 함수는 수치 데이터에만 적용할 수 있습니다. 이러한 함수를 비수치 데이터에 적용하면 오류가 발생할 수 있습니다.

데이터셋에 데이터 유형 메서드를 적용할 때 각 열의 데이터 유형은 시리즈로 반환됩니다. 훌륭한 데이터 과학자의 직관은 대부분의 데이터 유형이 의미가 있다는 것을 말해줍니다. 목록의 마지막 항목이 문제가 될 수 있습니다. 보어는 엔진의 한 차원이므로 숫자 데이터 유형이 사용될 것으로 예상해야 합니다. 이후 섹션에서 Jerry는 이러한 유형의 불일치를 수정해야 합니다.

이제 각 열의 통계 요약을 확인하여 각 열의 데이터 분포에 대해 알아보겠습니다. 통계 메트릭은 데이터 과학자에게 극단적인 특이치 및 큰 편차와 같은 수학적 문제가 존재하는지 알려줄 수 있으며, 데이터 과학자는 나중에 이러한 문제를 해결해야 할 수도 있습니다. 빠른 통계를 얻으려면 설명 된 방법을 사용합니다. 열의 항 수를 개수로, 평균 열 값을 평균으로, 열 표준 편차를 STD로, 최대 최소값과 각 사분위수의 경계를 반환합니다. 기본적으로 데이터 프레임 설명 함수는 숫자를 포함하지 않는 행과 열을 건너뛰고 있습니다.

설명된 방법을 객체 유형 열에서도 작동하도록 할 수 있습니다. 모든 열을 요약할 수 있도록 설명된 함수 괄호 안에 equals를 포함하는 인수를 추가할 수 있습니다. 이제 결과에는 객체 유형 속성을 포함한 26개 열의 요약이 모두 표시됩니다. 객체 유형 열의 경우 고유, 상위, 빈도와 같은 다른 통계 집합이 평가되는 것을 볼 수 있습니다. 고유는 열에 있는 개별 객체의 수이고, 상단은 가장 자주 발생하는 객체이고, 빈도는 최상위 객체가 열에 나타나는 횟수입니다.

표의 일부 값은 숫자가 아닌 NaN으로 표시됩니다. 이는 특정 열 데이터 유형에 대해 특정 통계 지표를 계산할 수 없기 때문입니다. 데이터세트를 확인하는 데 사용할 수 있는 또 다른 방법은 dataframe. 이 함수는 데이터 프레임을 간결하게 요약합니다. 이 메서드는 인덱스 D 유형과 null이 아닌 열, 메모리 사용량을 포함하여 데이터 프레임에 대한 정보를 인쇄합니다.

## 예시
- 예를 들어 연속된 숫자가 포함될 것으로 예상되는 자동차 가격 열에 객체의 데이터 유형이 할당되면 어색할 수 있습니다.
- 예를 들어, 일부 수학 함수는 수치 데이터에만 적용할 수 있습니다.

## 요약
- 설명된 방법을 객체 유형 열에서도 작동하도록 할 수 있습니다.
- 객체 유형 열의 경우 고유, 상위, 빈도와 같은 다른 통계 집합이 평가되는 것을 볼 수 있습니다.
- 이 함수는 데이터 프레임을 간결하게 요약합니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we introduce some simple Pandas methods that all data scientists and analysis should know when using Python, Pandas, and data. At this point, we assume that the data has been loaded. It's time for us to explore the dataset. Pandas has several built in methods that can be used to understand the data type of features or to look at the distribution of data within the dataset. Using these methods gives an overview of the dataset and also points out potential issues such as the wrong data type of features which may need to be resolved later on.

Data has a variety of types. The main types stored in Pandas objects are object, float, int, and date time. The data type names are somewhat different from those in native Python. This table shows the difference and similarities between them. Some are very similar, such as the numeric data types int and float.

The object pandas type functions similar to string in Python, save for the change in name. While the date time Pandas type is a very useful type for handling time series data, there are two reasons to check data types in a dataset. Pandas automatically assigns types based on the encoding it detects from the original data table. For a number of reasons, this assignment may be incorrect. For example, it would be awkward if the car price column, which we should expect contain continuous numeric numbers, is assigned the data type of object.

It would be more natural for it to have the float type. Jerry may need to manually change the data type to float. The second reason is it allows an experienced data scientist to see which Python functions can be applied to a specific column. For example, some math functions can only be applied to numerical data. If these functions are applied to non numerical data, an error may result.

When the data type method is applied to the dataset. The data type of each column is returned in a series. A good data scientist's intuition tells us that most of the data types make sense. They make of cars, for examples are names. This information should be of type object.

The last one on the list would be an issue. As bore is a dimension of an engine, we should expect a numerical data type to be used. Instead, the object type is used. In later sections, Jerry will have to correct these types of mismatches. Now we would like to check the statistical summary of each column to learn about the distribution of data in each column.

The statistical metrics can tell the data scientist if there are mathematical issues that may exist, such as extreme outliers and large deviations, the data scientists may have to address these issues later. To get the quick statistics, we use the described method. It returns the number of terms in the column as count, average column value as mean, column standard deviation as STD, and maximum minimum values, as well as the boundary of each of the quartiles. By default, the data frame described functions skips rows and columns that do not contain numbers. It is possible to make the described method work for object type columns as well.

To enable a summary of all the columns, we could add an argument, include equals, all inside the described function bracket. Now the outcome shows the summary of all 26 columns including object type attributes. We see that for the object type columns, a different set of statistics is evaluated like unique, top, and frequency. Unique is the number of distinct objects in the column, top is most frequently occurring object, and frequent is the number of times the top object appears in the column. Some values in the table are shown here as NaN, which stands for not a number.

This is because that particular statistical metric cannot be calculated for that specific column data type. Another method you can use to check your dataset is the dataframe. This function gives a concise summary of the data frame. This method prints information about a data frame including the index D type and columns non-null values, and memory usage.

</details>
