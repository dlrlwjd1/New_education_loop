# Importing and Exporting Data in Python

## 개요
- 강좌: Data Analysis with Python
- 모듈: Importing Data Sets
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/6DOI1/importing-and-exporting-data-in-python)
- 데이터를 파이썬으로 만들면 필요한 모든 후속 데이터 분석 절차를 수행할 수 있습니다.
- 데이터 수집은 다양한 소스에서 노트북으로 데이터를 로드하고 읽는 프로세스입니다.

## 내용
### 핵심 내용
- 데이터를 파이썬으로 만들면 필요한 모든 후속 데이터 분석 절차를 수행할 수 있습니다.
- 데이터 수집은 다양한 소스에서 노트북으로 데이터를 로드하고 읽는 프로세스입니다.
- Pandas에서 read_csv 메서드는 열이 쉼표로 구분된 파일을 Pandas 데이터 프레임으로 읽을 수 있습니다.
- Pandas에서 데이터를 읽는 것은 세 줄로 빠르게 할 수 있습니다.
- to_csv 메서드를 사용하여 이 작업을 수행할 수 있습니다.
- csv 형식으로 사용자 컴퓨터에 저장하려는 경우 df.2_csv 구문을 사용할 수 있습니다.

### 한국어 Transcript

[음악] 이 비디오에서는 Python의 Pandas 패키지를 사용하여 데이터를 읽는 방법을 살펴보겠습니다. 데이터를 파이썬으로 만들면 필요한 모든 후속 데이터 분석 절차를 수행할 수 있습니다. 데이터 수집은 다양한 소스에서 노트북으로 데이터를 로드하고 읽는 프로세스입니다. Python의 Pandas 패키지를 사용하여 데이터를 읽으려면 두 가지 중요한 요소, 즉 형식과 파일 경로를 고려해야 합니다. 형식은 데이터가 인코딩되는 방식입니다.

일반적으로 파일 이름의 끝을 보면 다양한 인코딩 체계를 알 수 있습니다. 일반적인 인코딩으로는 CSV, JSON, XLSX, HDF 등이 있습니다. 경로는 데이터가 저장되는 위치를 알려줍니다. 일반적으로 사용 중인 컴퓨터에 저장되거나 인터넷에 온라인으로 저장됩니다. 우리의 경우 슬라이드에 표시된 웹 주소에서 가져온 중고차 데이터 세트를 찾았습니다.

Jerry가 웹 브라우저에 웹 주소를 입력했을 때 그는 다음과 같은 것을 보았습니다. 각 행은 하나의 데이터 포인트입니다. 각 데이터 포인트에는 많은 속성이 연관되어 있습니다. 속성은 쉼표로 구분되므로 데이터 형식이 쉼표로 구분된 값을 나타내는 CSV라고 추측할 수 있습니다. 이 시점에서 이것은 단지 숫자일 뿐이며 인간에게는 큰 의미가 없습니다.

하지만 일단 이 데이터를 읽고 나면 좀 더 이해하기 쉽게 해볼 수 있습니다. Pandas에서 read_csv 메서드는 열이 쉼표로 구분된 파일을 Pandas 데이터 프레임으로 읽을 수 있습니다. Pandas에서 데이터를 읽는 것은 세 줄로 빠르게 할 수 있습니다. 먼저 Pandas를 가져온 다음 파일 경로로 변수를 정의합니다. 그런 다음 read_csv 메서드를 사용하여 데이터를 가져옵니다.

그러나 read_csv는 데이터에 헤더가 포함되어 있다고 가정합니다. 중고차 데이터에는 컬럼 헤더가 없습니다. 따라서 header를 none 으로 설정하여 헤더를 할당하지 않도록 read_csv를 지정해야 합니다. 데이터 세트를 읽은 후에는 데이터 프레임을 살펴보고 직관적으로 모든 것이 예상대로 진행되었는지 확인하는 것이 좋습니다. 전체 데이터 세트를 인쇄하는 데 너무 많은 시간과 리소스가 소요될 수 있으므로 시간을 절약하기 위해 dataframe.

head를 사용하여 데이터 프레임의 처음 n개 행을 표시할 수 있습니다. tail은 데이터 프레임의 하위 n개 행을 보여줍니다. 여기서는 데이터의 처음 다섯 행을 출력했습니다. 데이터 세트를 성공적으로 읽은 것 같습니다. 데이터를 읽을 때 header= none으로 설정했기 때문에 Pandas가 자동으로 열 헤더를 정수 목록으로 설정하는 것을 볼 수 있습니다.

의미 있는 열 이름이 없으면 데이터 프레임으로 작업하기가 어렵습니다. 하지만 Pandas에서는 열 이름을 할당할 수 있습니다. 우리의 현재 사례에서는 온라인에 별도의 파일에 열 이름이 있는 것으로 나타났습니다. 먼저 헤더라는 목록에 열 이름을 넣습니다. columns=headers를 설정하여 기본 정수 헤더를 목록으로 대체합니다.

지난 슬라이드에서 소개한 head 메서드를 사용하여 데이터 세트를 확인하면 각 열의 맨 위에 올바른 헤더가 삽입되어 있는 것을 볼 수 있습니다. 데이터 프레임에서 작업을 완료한 후 Pandas 데이터 프레임을 새 CSV 파일로 내보내고 싶을 때가 있습니다. to_csv 메서드를 사용하여 이 작업을 수행할 수 있습니다. 이렇게 하려면 쓰려는 파일 이름이 포함된 파일 경로를 지정합니다. 예를 들어, 데이터 프레임 df를 automobile.

csv 형식으로 사용자 컴퓨터에 저장하려는 경우 df.2_csv 구문을 사용할 수 있습니다. 이 과정에서는 CSV 파일만 읽고 저장합니다. 그러나 Pandas는 데이터 세트 형식이 다른 대부분의 데이터 파일 유형의 가져오기 및 내보내기도 지원합니다. 다른 데이터 형식을 읽고 저장하는 코드 구문은 CSV 파일을 읽거나 저장하는 것과 매우 유사합니다. 각 열은 파일을 읽고 다른 형식으로 저장하는 다른 방법을 보여줍니다.

## 예시
- 우리의 현재 사례에서는 온라인에 별도의 파일에 열 이름이 있는 것으로 나타났습니다.
- 예를 들어, 데이터 프레임 df를 automobile.
- 다른 데이터 형식을 읽고 저장하는 코드 구문은 CSV 파일을 읽거나 저장하는 것과 매우 유사합니다.

## 요약
- Pandas에서 데이터를 읽는 것은 세 줄로 빠르게 할 수 있습니다.
- to_csv 메서드를 사용하여 이 작업을 수행할 수 있습니다.
- csv 형식으로 사용자 컴퓨터에 저장하려는 경우 df.2_csv 구문을 사용할 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

[MUSIC] In this video, we'll look at how to read in data using Python's Pandas package. Once we have our data in Python, then we can perform all the subsequent data analysis procedures we need. Data acquisition is a process of loading and reading data into notebook from various sources. To read any data using Python's Pandas package, there are two important factors to consider: format and file path. Format is the way data is encoded.

We can usually tell different encoding schemes by looking at the ending of the file name. Some common encodings are CSV, JSON, XLSX, HDF, and so forth. The path tells us where the data is stored. Usually it is stored either on the computer we are using, or online on the internet. In our case, we found a data set of used cars which was obtained from the web address shown on the slide.

When Jerry entered the web address in his web browser, he saw something like this. Each row is one data point. A large number of properties are associated with each data point. Because the properties are separated from each other by commas, we can guess the data format is CSV, which stands for comma-separated values. At this point, these are just numbers, and don't mean much to humans.

But once we read in this data, we can try to make more sense out of it. In Pandas, the read_csv method can read in files with columns separated by commas into a Pandas data frame. Reading data in Pandas can be done quickly in three lines. First, import Pandas, then define a variable with a file path. And then use the read_csv method to import the data.

However, read_csv assumes the data contains a header. Our data on used cars has no column headers. So we need to specify read_csv to not assign headers by setting header to none. After reading the data set, it is a good idea to look at the data frame to get a better intuition and to ensure that everything occurred the way you expected. Since printing the entire data set may take up too much time and resources, to save time, we can just use dataframe.

head to show the first n rows of the data frame. Similarly, dataframe. tail shows the bottom n rows of data frame. Here we printed out the first five rows of data. It seems that the data set was read successfully.

We can see that Pandas automatically set the column header as a list of integers, because we set header= none, when we read the data. It is difficult to work with the data frame without having meaningful column names. However, we can assign column names in Pandas. In our present case, it turned out that we have the column names in a separate file online. We first put the column names in a list called headers.

columns=headers to replace the default integer headers by the list. If we use the head method introduced in the last slide to check the data set, we see the correct headers inserted at the top of each column. At some point in time, after you've done operations on your data frame, you may want to export your Pandas data frame to a new CSV file. You can do this using the method to_csv. To do this, specify the file path, which includes the file name that you want to write to.

For example, if you would like to save data frame df, as automobile. csv to your own computer, you can use the syntax df.2_csv. For this course, we will only read and save CSV files. However, Pandas also supports importing and exporting of most data file types with different data set formats. The code syntax for reading and saving other data formats is very similar to read or save CSV file.

Each column shows a different method to read and save files into a different format.

</details>
