# Dealing with Missing Values in Python

## 개요
- 강좌: Data Analysis with Python
- 모듈: Data Wrangling
- 재생 시간: 6분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/1IrbT/dealing-with-missing-values-in-python)
- [음악] 이 비디오에서는 누락값이 만연해 있다는 문제와 데이터에서 누락된 값이 발견되면 어떻게 해야 하는지에 대한 전략을 소개합니다.
- 특정 관측치에 대한 특징에 대한 데이터 값이 저장되어 있지 않으면 이 특징에 결측값이 있는 것으로 간주됩니다.

## 내용
### 핵심 내용
- [음악] 이 비디오에서는 누락값이 만연해 있다는 문제와 데이터에서 누락된 값이 발견되면 어떻게 해야 하는지에 대한 전략을 소개합니다.
- 특정 관측치에 대한 특징에 대한 데이터 값이 저장되어 있지 않으면 이 특징에 결측값이 있는 것으로 간주됩니다.
- 물론 경우에 따라서는 단순히 누락된 데이터를 누락된 데이터로 남겨두고 싶을 수도 있습니다.
- 이제 Python에서 누락된 값을 삭제하거나 누락된 값을 바꾸는 방법을 살펴보겠습니다.
- 누락된 값이 포함된 문제가 있는 행이나 열을 삭제하는 방법을 배웠고 누락된 값을 다른 값으로 바꾸는 방법을 배웠습니다.
- 언제든지 더 높은 품질의 데이터 세트 또는 소스를 확인할 수 있으며 , 경우에 따라 누락된 데이터를 누락된 데이터로 남겨두고 싶을 수도 있습니다.

### 한국어 Transcript

[음악] 이 비디오에서는 누락값이 만연해 있다는 문제와 데이터에서 누락된 값이 발견되면 어떻게 해야 하는지에 대한 전략을 소개합니다. 특정 관측치에 대한 특징에 대한 데이터 값이 저장되어 있지 않으면 이 특징에 결측값이 있는 것으로 간주됩니다. 일반적으로 데이터셋에서 누락된 값은 물음표, N/A, 0 또는 빈 셀로 표시됩니다. 이 예제에서 정규화된 손실 기능에는 NaN으로 표시되는 결측값이 있습니다. 하지만 누락된 데이터를 어떻게 처리할 수 있을까요?

누락된 값을 처리하는 방법은 여러 가지가 있으며 이는 Python, R 또는 사용하는 도구에 관계없이 가능합니다. 물론 각 상황은 다르므로 다르게 판단해야 합니다. 하지만 고려할 수 있는 일반적인 옵션은 다음과 같습니다. 첫 번째는 데이터를 수집한 사람이나 그룹이 돌아가서 실제 값을 찾을 수 있는지 확인하는 것입니다. 또 다른 방법은 누락된 값이 발견된 데이터를 제거하는 것입니다.

데이터를 삭제하면 전체 변수를 삭제하거나 누락된 값이 있는 단일 데이터 항목만 삭제할 수 있습니다. 누락된 데이터가 있는 관측치가 많지 않은 경우에는 일반적으로 특정 항목을 삭제하는 것이 가장 좋습니다. 데이터를 제거할 때는 영향이 가장 적은 작업을 수행하는 것이 좋습니다. 데이터가 낭비되지 않으므로 데이터를 교체하는 것이 더 좋습니다. 하지만 누락된 데이터를 데이터가 어떻게 되어야 하는지에 대한 추측으로 대체해야 하므로 정확도가 떨어집니다.

표준 대체 기법 중 하나는 누락된 값을 전체 변수의 평균값으로 바꾸는 것입니다. 예를 들어, 정규화된 손실 열에 누락값이 있는 일부 항목이 있고 데이터가 있는 항목의 열 평균이 4,500이라고 가정해 보겠습니다. 정규화된 손실 열에서 누락된 값이 얼마인지 정확하게 추측할 수 있는 방법은 없지만, 열의 평균값인 4,500을 사용하여 결측값의 근사치를 구할 수 있습니다. 하지만 범주형 변수처럼 값의 평균을 구할 수 없다면 어떻게 될까요? 연료 유형과 같은 변수의 경우 변수 값이 숫자가 아니므로 평균 연료 유형이 없습니다.

이 경우 한 가지 방법은 가솔린과 같은 가장 일반적인 모드를 사용해 보는 것입니다. 마지막으로, 누락된 데이터를 추측할 수 있는 다른 방법을 찾는 경우도 있습니다. 이는 일반적으로 데이터 수집자가 누락된 데이터에 대해 추가로 알고 있기 때문입니다. 예를 들어, 그는 결측값이 오래된 차인 경우가 많고 노후 차량의 정규화된 손실이 일반 차량보다 훨씬 높다는 것을 알고 있을 수 있습니다. 물론 경우에 따라서는 단순히 누락된 데이터를 누락된 데이터로 남겨두고 싶을 수도 있습니다.

어떤 이유에서든 일부 특징이 누락되더라도 해당 관찰을 유지하는 것이 유용할 수 있습니다. 이제 Python에서 누락된 값을 삭제하거나 누락된 값을 바꾸는 방법을 살펴보겠습니다. 누락된 값이 포함된 데이터를 제거하기 위해 Pandas 라이브러리에는 dropna라는 메서드가 내장되어 있습니다. 기본적으로 dropna 메서드를 사용하면 NaN과 같이 누락된 값이 포함된 행이나 열을 삭제하도록 선택할 수 있습니다. 따라서 행을 삭제하려면 axis = 0을 지정하고, 누락된 값이 포함된 열을 삭제하려면 axis = 1을 지정해야 합니다.

이 예시에서는 가격 열에 누락된 값이 있습니다. 다음 분석에서 예측하려는 가격은 중고차 가격이므로 정가가 없는 행은 삭제해야 합니다. dropna를 사용하면 한 줄의 코드로 간단하게 이 작업을 수행할 수 있습니다. 인수를 True로 설정하면 데이터 세트를 직접 수정할 수 있지만, inplace = True는 결과를 데이터 프레임에 다시 기록하기만 합니다. 이 코드 줄은 데이터 프레임을 변경하지는 않지만 올바른 작업을 수행하고 있는지 확인할 수 있는 좋은 방법이라는 점을 잊지 마세요.

데이터 프레임을 수정하려면 inplace 매개 변수를 True로 설정해야 합니다. 함수나 메서드에 익숙하지 않은 경우 항상 설명서를 확인해야 합니다. Pandas 웹페이지에는 유용한 리소스가 많이 있습니다. NaN과 같은 누락된 값을 실제 값으로 바꾸기 위해 Pandas 라이브러리에는 Replace라는 내장 메서드가 있습니다. 이 메서드를 사용하면 새로 계산된 값으로 누락된 값을 채울 수 있습니다.

예를 들어, 변수의 누락값을 정규화된 손실을 변수의 평균값으로 바꾸려고 한다고 가정해 보겠습니다. 따라서 누락값은 해당 열에 있는 항목의 평균으로 대체해야 합니다. Python에서는 먼저 열의 평균을 계산합니다. 그런 다음 Replace 메서드를 사용하여 대체하려는 값 ( 이 경우에는 NaN) 을 첫 번째 매개 변수로 지정합니다. 두 번째 매개 변수는 이 매개 변수를 대체하려는 값, 즉 이 예제의 평균입니다.

이는 누락된 값을 대체하는 상당히 간단한 방법입니다. 물론 전체 데이터 세트 대신 그룹 평균의 결측값을 대체하는 것과 같은 다른 기법도 있습니다. 그래서 우리는 누락된 데이터를 처리하기 위해 Python에서 두 가지 방법을 살펴보았습니다. 누락된 값이 포함된 문제가 있는 행이나 열을 삭제하는 방법을 배웠고 누락된 값을 다른 값으로 바꾸는 방법을 배웠습니다. 하지만 누락된 데이터를 처리하는 다른 방법도 잊지 마세요.

언제든지 더 높은 품질의 데이터 세트 또는 소스를 확인할 수 있으며 , 경우에 따라 누락된 데이터를 누락된 데이터로 남겨두고 싶을 수도 있습니다.

## 예시
- 예를 들어, 정규화된 손실 열에 누락값이 있는 일부 항목이 있고 데이터가 있는 항목의 열 평균이 4,500이라고 가정해 보겠습니다.
- 예를 들어, 그는 결측값이 오래된 차인 경우가 많고 노후 차량의 정규화된 손실이 일반 차량보다 훨씬 높다는 것을 알고 있을 수 있습니다.
- 이 예시에서는 가격 열에 누락된 값이 있습니다.
- dropna를 사용하면 한 줄의 코드로 간단하게 이 작업을 수행할 수 있습니다.

## 요약
- 이제 Python에서 누락된 값을 삭제하거나 누락된 값을 바꾸는 방법을 살펴보겠습니다.
- 누락된 값이 포함된 문제가 있는 행이나 열을 삭제하는 방법을 배웠고 누락된 값을 다른 값으로 바꾸는 방법을 배웠습니다.
- 언제든지 더 높은 품질의 데이터 세트 또는 소스를 확인할 수 있으며 , 경우에 따라 누락된 데이터를 누락된 데이터로 남겨두고 싶을 수도 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

[MUSIC] In this video, we will introduce the pervasive problem of missing values as well as strategies on what to do when you encounter missing values in your data. When no data value is stored for feature for a particular observation, we say this feature has a missing value. Usually, missing value in dataset appears as question mark, N/A, zero or just a blank cell. In the example here, the normalized losses feature has a missing value which is represented with NaN. But how can you deal with missing data?

There are many ways to deal with missing values and this is regardless of Python, R or whatever tool you use. Of course, each situation is different and should be judged differently. However, these are the typical options you can consider. The first is to check if the person or group that collected the data can go back and find what the actual value should be. Another possibility is just to remove the data where that missing value is found.

When you drop data, you could either drop the whole variable or just the single data entry with the missing value. If you don't have a lot of observations with missing data, usually dropping the particular entry is the best. If you're removing data, you want to look to do something that has the least amount of impact. Replacing data is better since no data is wasted. However, it's less accurate since we need to replace missing data with a guess of what the data should be.

One standard replacement technique is to replace missing values by the average value of the entire variable. As an example, suppose we have some entries that have missing values for the normalized losses column and the column average for entries with data is 4,500. While there is no way for us to get an accurate guess of what the missing values under the normalized losses column should have been, you can approximate their values using the average value of the column, 4,500. But what if the values cannot be averaged as with categorical variables? For a variable like fuel type, there isn't an average fuel type since the variable values are not numbers.

In this case, one possibility is to try using the mode the most common, like gasoline. Finally, sometimes we may find another way to guess the missing data. This is usually because the data gatherer knows something additional about the missing data. For example, he may know that the missing values tend to be old cars and the normalized losses of old cars are significantly higher than the average vehicle. And of course, finally in some cases you may simply want to leave the missing data as missing data.

For one reason or another it may be useful to keep that observation even if some features are missing. Now, let's go into how to drop missing values or replace missing values in Python. To remove data that contains missing values, Pandas library has a built in method called dropna. Essentially, with the dropna method, you can choose to drop rows or columns that contain missing values like NaN. So you'll need to specify axis = 0 to drop the rows, or axis = 1 to drop the columns that contain the missing values.

In this example, there is a missing value in the price column. Since the price of used cars is what we're trying to predict in our upcoming analysis, we'd have to remove the cars, the rows that don't have a listed price. It can simply be done in one line of code using dataframe. Setting the argument in place to True allows the modification to be done on the data set directly, inplace = True just writes the result back into the data frame. This is equivalent to this line of code.

Don't forget that this line of code does not change the data frame but it's a good way to make sure that you are performing the correct operation. To modify the data frame, you have to set the parameter inplace = True. You should always check the documentation if you are not familiar with a function or method. The Pandas webpage has lots of useful resources. To replace missing values like NaNs with actual values, Pandas library has a built in method called Replace, which can be used to fill in the missing values with the newly calculated values.

As an example, assume that we want to replace the missing values of the variable normalized losses by the mean value of the variable. Therefore, the missing value should be replaced by the average of the entries within that column. In Python, first we calculate the mean of the column. Then we use the method Replace to specify the value we would like to be replaced as the first parameter, in this case NaN. The second parameter is the value we would like to replace it with i.

e, the mean in this example. This is a fairly simplified way of replacing missing values. There are, of course, other techniques such as replacing missing values for the average of the group instead of the entire data set. So we've gone through two ways in Python to deal with missing data. We learned to drop problematic rows or columns containing missing values, and then we learned how to replace missing values with other values.

But don't forget the other ways to deal with missing data. You can always check for a higher quality data set or source, or in some cases, you may want to leave the missing data as missing data.

</details>
