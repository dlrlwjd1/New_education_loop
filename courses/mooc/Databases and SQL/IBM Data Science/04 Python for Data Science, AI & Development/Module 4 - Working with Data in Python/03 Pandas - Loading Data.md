# Pandas: Loading Data

## 개요
- 강좌: Python for Data Science, AI & Development
- 모듈: Working with Data in Python
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-applied-data-science-ai/lecture/yBbKS/pandas-loading-data)
- 종속성 또는 라이브러리는 문제 해결에 도움이 되도록 미리 작성된 코드입니다.
- 이 비디오에서는 데이터 분석에 널리 사용되는 라이브러리인 Pandas를 소개합니다.

## 내용
### 핵심 내용
- 종속성 또는 라이브러리는 문제 해결에 도움이 되도록 미리 작성된 코드입니다.
- 이 비디오에서는 데이터 분석에 널리 사용되는 라이브러리인 Pandas를 소개합니다.
- 다음과 같이 첫 번째 행과 첫 번째 열에 액세스할 수 있습니다.
- 다음과 같이 두 번째 행과 첫 번째 열에 액세스할 수 있습니다.
- 첫 번째 행, 세 번째 열은 다음과 같이 액세스할 수 있으며 두 번째 행, 세 번째 열은 다음과 같이 액세스할 수 있습니다.
- Release 열에 대해서도 동일한 작업을 수행할 수 있습니다.

### 한국어 Transcript

종속성 또는 라이브러리는 문제 해결에 도움이 되도록 미리 작성된 코드입니다. 이 비디오에서는 데이터 분석에 널리 사용되는 라이브러리인 Pandas를 소개합니다. 다음 명령을 사용하여 Pandas와 같은 라이브러리 또는 종속성을 가져올 수 있습니다. 먼저 가져오기 명령과 라이브러리 이름을 차례로 입력합니다. 이제 미리 빌드된 많은 클래스와 함수에 액세스할 수 있습니다.

여기서는 라이브러리가 설치되어 있다고 가정합니다. 랩 환경에는 필요한 모든 라이브러리가 설치되어 있습니다. 판다의 내장 함수인 readcsv를 사용하여 csv 파일을 로드하고 싶다고 가정해 보겠습니다. csv는 데이터를 저장하는 데 사용되는 일반적인 파일 유형입니다. Pandas라는 단어를 입력한 다음 점을 입력하고 모든 입력이 포함된 함수 이름을 입력하기만 하면 됩니다.

항상 판다를 쓰는 것은 어려울 수 있으므로 'as' 문을 사용하여 라이브러리 이름을 줄일 수 있습니다. 이 경우 표준 약어 pd를 사용하십시오. 다음으로 사용하려는 함수 이름 뒤에 점을 입력합니다. 이 경우에는 바나나라는 용어를 사용합니다. 하지만 이 비디오의 나머지 부분에서는 pd를 고수할 것입니다.

이 코드를 좀 더 자세히 살펴보겠습니다. Pandas를 사용하여 데이터를 작업할 수 있는 한 가지 방법은 DataFrame을 사용하는 것입니다. csv 파일에서 데이터 프레임으로 이동하는 과정을 살펴보겠습니다. 이 변수는 csv의 경로를 저장합니다. 이는 ReadCSV 함수의 인수로 사용됩니다.

이제 DataFrame에 데이터가 있으므로 작업할 수 있습니다. 메서드 헤드를 사용하여 DataFrame의 처음 5개 행을 검사할 수 있습니다. Excel 파일을 로드하는 프로세스도 비슷합니다. 엑셀 파일의 경로인 readexcel 함수를 사용하십시오. DataFrame은 행과 열로 구성됩니다.

딕셔너리에서 DataFrame을 만들 수 있습니다. 그런 다음 DataFrame 함수를 사용하여 사전을 DataFrame으로 캐스팅할 수 있습니다. 테이블 간의 직접적인 대응에 주목하십시오. 하나의 열로 구성된 새 DataFrame을 만들고 DataFrame 이름 (이 경우 df) 과 열 헤더 이름을 이중 괄호로 닫습니다. 결과는 원래 열로 구성된 새 DataFrame입니다.

여러 열에 대해 동일한 작업을 수행할 수 있습니다. DataFrame 이름 (이 경우 df) 과 여러 열 머리글의 이름을 이중 괄호로 묶습니다. 결과는 지정된 열로 구성된 새 DataFrame입니다. 고유 요소에 액세스하는 한 가지 방법은 iloc 메서드를 사용하는 것입니다. 첫 번째 입력값은 행 인덱스를 나타내는 정수이고, 두 번째 입력은 열 인덱스를 나타내는 정수입니다.

다음과 같이 첫 번째 행과 첫 번째 열에 액세스할 수 있습니다. 다음과 같이 두 번째 행과 첫 번째 열에 액세스할 수 있습니다. 첫 번째 행, 세 번째 열은 다음과 같이 액세스할 수 있으며 두 번째 행, 세 번째 열은 다음과 같이 액세스할 수 있습니다. 행 인덱스와 열의 이름도 사용할 수 있습니다. Artist라는 열의 첫 번째 행에 다음과 같이 액세스할 수 있습니다.

마찬가지로 Artist라는 열의 두 번째 행에 액세스할 수 있습니다. Release 열에 대해서도 동일한 작업을 수행할 수 있습니다. loc 은 인덱스가 정수가 아닌 경우에도 사용할 수 있습니다. df_new라는 새 데이터 프레임을 만듭니다. 인덱스 1, 2, 3 등을 ABC로 바꿉니다.

다음과 같이 인덱스 A, 즉 Artist라는 열의 첫 번째 행에 액세스할 수 있습니다. 마찬가지로 Artist라는 열의 두 번째 행이나 인덱스 B에 액세스할 수 있습니다. Release 열에 대해서도 동일한 작업을 수행할 수 있습니다. 데이터프레임을 분할하여 새 데이터프레임에 값을 할당할 수도 있습니다. 처음 두 행과 처음 세 열을 변수 Z에 할당합니다.

결과는 선택한 행과 열로 구성된 DataFrame입니다. Loc을 사용하여 데이터프레임을 슬라이싱하고 새 데이터프레임에 값을 할당할 수도 있습니다. 코드는 Artist와 Released라는 이름의 열 사이의 처음 세 행과 모든 열을 할당합니다. 결과는 해당 값이 포함된 새 DataFrame Z입니다. 실습에서 더 많은 예제를 확인하세요.

## 예시
- 종속성 또는 라이브러리는 문제 해결에 도움이 되도록 미리 작성된 코드입니다.
- 다음 명령을 사용하여 Pandas와 같은 라이브러리 또는 종속성을 가져올 수 있습니다.
- 먼저 가져오기 명령과 라이브러리 이름을 차례로 입력합니다.
- 이 코드를 좀 더 자세히 살펴보겠습니다.

## 요약
- 다음과 같이 두 번째 행과 첫 번째 열에 액세스할 수 있습니다.
- 첫 번째 행, 세 번째 열은 다음과 같이 액세스할 수 있으며 두 번째 행, 세 번째 열은 다음과 같이 액세스할 수 있습니다.
- Release 열에 대해서도 동일한 작업을 수행할 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

Dependencies or libraries are pre-written code to help solve problems. In this video, we will introduce Pandas, a popular library for data analysis. You can import the library or dependency, like Pandas, using the following command. Start with the import command followed by the name of the library. You now have access to a large number of pre-built classes and functions.

This assumes the library is installed. In our lab environment, all the necessary libraries are installed. Let us say we would like to load a csv file using pandas build-in function, readcsv. A csv is a typical file type used to store data. Simply type the word Pandas, then a dot, and the name of the function with all the inputs.

Writing pandas all the time may get difficult, so you can use the 'as' statement to shorten the name of the library. In this case, use the standard abbreviation pd. Next type a dot followed by the name of the function you would like to use. In this case, readcsv. You are not limited to the abbreviation pd.

In this case, we use the term banana. However, we will stick with pd for the rest of this video. Let us examine this code in more detail. One way pandas allows you to work with data is in a DataFrame. Let us review the process of going from a csv file to a DataFrame.

This variable stores the path of the csv. It is used as an argument to the readCSV function. The result is stored to the variable df. This is short for DataFrame. Now that you have the data in a DataFrame, you can work with it.

You can use the method head to examine the first five rows of a DataFrame. The process for loading an Excel file is similar. Use the path of the Excel file, the function readexcel. The result is a DataFrame. A DataFrame is comprised of rows and columns.

You can create a DataFrame out of a dictionary. The keys correspond to the column labels. The values are lists corresponding to the rows. You can then cast the dictionary to a DataFrame using the function DataFrame. Notice the direct correspondence between the table.

The keys correspond to the table headers. The values are lists corresponding to the rows. Create a new DataFrame consisting of one column and close the DataFrame name, in this case df, and the name of the column header in double brackets. The result is a new DataFrame comprised of the original column. You can do the same thing for multiple columns.

Enclose the DataFrame name, in this case df, and the name of multiple column headers in double brackets. The result is a new DataFrame comprised of the specified columns. One way to access unique elements is with the iloc method. The first input is an integer representing the row index, and the second is the integer representing the column index. You can access the first row and first column as follows.

You can access the second row and first column as follows. You can access the first row, third column as follows, and you can access the second row, third column as follows. You can use the name of the row index and the column as well. You can access the first row of the column named Artist as follows. Similarly, you can access the second row of the column named Artist.

You can do the same for the column Released. loc can also be used if the index is not an integer. We create a new DataFrame called df_new. We replace the index 1, 2, 3, and so on with ABC. You can access the index A, that is, the first row of the column named Artist as follows.

Similarly, you can access the index B, or the second row of the column named Artist. You can do the same for the column Released. You can also slice DataFrames and assign the values to a new DataFrame. Assign the first two rows and the first three columns to the variable Z. The result is a DataFrame comprised of the selected rows and columns.

You can also slice DataFrames and assign the values to a new DataFrame using loc. The code assigns the first two rows and all columns in between the columns named Artist and Released. The result is a new DataFrame Z with the corresponding values. Check out the labs for more examples.

</details>
