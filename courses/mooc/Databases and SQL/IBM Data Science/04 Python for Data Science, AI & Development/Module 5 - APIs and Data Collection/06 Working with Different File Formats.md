# Working with Different File Formats

## 개요
- 강좌: Python for Data Science, AI & Development
- 모듈: APIs and Data Collection
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-applied-data-science-ai/lecture/EPUdg/working-with-different-file-formats)
- 이 시간에는 다양한 파일 형식을 처리하는 방법을 설명하겠습니다.
- 구체적으로는 csv, xml, json 등 다양한 파일 형식을 정의하고 데이터를 읽고 출력하는 간단한 프로그램을 작성하며 데이터를 추출하는 데 필요한 Python 라이브러리를 나열해 보겠습니다.

## 내용
### 핵심 내용
- 이 시간에는 다양한 파일 형식을 처리하는 방법을 설명하겠습니다.
- 구체적으로는 csv, xml, json 등 다양한 파일 형식을 정의하고 데이터를 읽고 출력하는 간단한 프로그램을 작성하며 데이터를 추출하는 데 필요한 Python 라이브러리를 나열해 보겠습니다.
- 이 라이브러리를 코드 시작 부분에 가져와 다양한 파일 형식을 쉽게 읽을 수 있습니다.
- 이 파일 형식을 읽기 위한 첫 번째 단계는 json을 가져오는 것입니다.
- pandas 라이브러리에는 이 파일 형식을 읽을 수 있는 특성이 없으므로 이 파일 형식을 구문 분석하는 방법을 알아보겠습니다.
- 이 영상에서는 다양한 파일 형식을 인식하고 Python 라이브러리를 사용하여 데이터를 추출하는 방법과 데이터를 수집할 때 데이터 프레임을 사용하는 방법을 설명했습니다.

### 한국어 Transcript

이 시간에는 다양한 파일 형식을 처리하는 방법을 설명하겠습니다. 구체적으로는 csv, xml, json 등 다양한 파일 형식을 정의하고 데이터를 읽고 출력하는 간단한 프로그램을 작성하며 데이터를 추출하는 데 필요한 Python 라이브러리를 나열해 보겠습니다. 데이터를 수집할 때는 데이터 중심 스토리 또는 분석을 완료하기 위해 다양한 파일 형식을 수집하거나 읽어야 합니다. Python은 사전 정의된 라이브러리로 이 프로세스를 간소화할 수 있습니다. 그러나 Python에 대해 알아보기 전에 다양한 파일 형식을 확인해 보도록 하겠습니다.

파일 이름을 보면 실제 이름 뒤에 확장자가 있습니다. 이 확장자로 파일의 형식과 파일을 여는데 필요한 도구를 알 수 있습니다. 예를 들어 파일 이름이 example. csv라면 csv 파일임을 알 수 있습니다. 그러나 이는 다양한 파일 형식의 한 예일 뿐이며 json 또는 xml 등 수많은 형식이 존재합니다.

이렇게 다양한 파일 형식을 이해하고 그 데이터에 액세스하려면 Python 라이브러리를 활용하여 이 프로세스를 간소화해야 합니다. 가장 먼저 친숙해질 Python 라이브러리는 바로 pandas입니다. 이 라이브러리를 코드 시작 부분에 가져와 다양한 파일 형식을 쉽게 읽을 수 있습니다. panda 라이브러리를 가져왔으므로 첫 번째 csv 파일을 읽을 수 있습니다. 첫 번째 단계는 파일을 변수에 지정한 다음 panda 라이브러리를 활용하여 파일을 읽기 위한 다른 변수를 생성하는 것입니다.

그런 다음 read_csv 함수를 호출하여 데이터를 화면에 출력할 수 있습니다. 이 예의 경우 데이터의 헤더가 없으므로 첫 번째 행을 헤더로 추가했습니다. 그러나 첫 번째 데이터 행을 헤더로 정하고 싶지 않으므로 이 문제를 해결할 수 있는 방법을 알아보겠습니다. csv 파일에서 데이터를 읽고 출력하는 방법은 앞에서 설명했으므로 이제 좀 더 말끔하게 정리해 보겠습니다. 이전 예에서 데이터를 출력할 수 있었지만 파일에 헤더가 없어 데이터의 첫 번째 행이 헤더로 출력되었습니다.

이 문제는 데이터 프레임 특성을 추가하면 쉽게 해결할 수 있습니다. 변수 df를 사용하여 파일을 호출한 다음 이 한 줄을 프로그램에 추가하여 columns 특성을 추가합니다. 그러면 데이터 출력을 각 열에 지정된 헤더에 말끔하게 정리할 수 있습니다. 다음으로 알아볼 파일 형식은 json입니다. 이 파일 형식은 텍스트가 언어 독립적인 데이터 형식으로 작성되며 Python 사전과 유사합니다.

이 파일 형식을 읽기 위한 첫 번째 단계는 json을 가져오는 것입니다. json을 가져온 후 파일을 여는 행을 추가할 수 있습니다. 시작할 json의 load 특성을 호출하고 파일을 읽은 후 마지막으로 파일을 출력할 수 있습니다. 다음 파일 형식 유형은 xml입니다. xml은 확장성 마크업 언어를 뜻하는 약어입니다.

pandas 라이브러리에는 이 파일 형식을 읽을 수 있는 특성이 없으므로 이 파일 형식을 구문 분석하는 방법을 알아보겠습니다. 이 파일 형식을 읽기 위한 첫 번째 단계는 xml을 가져오는 것입니다. 이 라이브러리를 가져오면 e-tree 특성을 사용하여 xml 파일을 구문 분석할 수 있습니다. 그런 다음 열 헤더를 추가하고 데이터 프레임에 지정한 후 문서를 탐색하는 루프를 만들어 필요한 데이터를 수집하고 데이터 프레임에 데이터를 추가할 수 있습니다. 이 영상에서는 다양한 파일 형식을 인식하고 Python 라이브러리를 사용하여 데이터를 추출하는 방법과 데이터를 수집할 때 데이터 프레임을 사용하는 방법을 설명했습니다.

## 예시
- 예를 들어 파일 이름이 example.
- 이 라이브러리를 코드 시작 부분에 가져와 다양한 파일 형식을 쉽게 읽을 수 있습니다.

## 요약
- 이 파일 형식을 읽기 위한 첫 번째 단계는 json을 가져오는 것입니다.
- pandas 라이브러리에는 이 파일 형식을 읽을 수 있는 특성이 없으므로 이 파일 형식을 구문 분석하는 방법을 알아보겠습니다.
- 이 영상에서는 다양한 파일 형식을 인식하고 Python 라이브러리를 사용하여 데이터를 추출하는 방법과 데이터를 수집할 때 데이터 프레임을 사용하는 방법을 설명했습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Working With Different File Formats. After watching this video, you will be able to: Define different file formats such as csv, xml, and json. Write simple programs to read and output data. List what Python libraries are needed to extract data. When collecting data you will find there are many different file formats that need to be collected or read in order to complete a data driven story or analysis.

When gathering the data Python can make the process simpler with its predefined libraries, but before we explore Python let’s first check out some of the various file formats. When looking at a file name you will notice an extension at the end of the title. These extensions let you know what type of file it is and what it needed to open it. For instance if you see a title like “FileExample. csv” you will know this is a “csv” file.

This is only one example of different file types as there are many more such as “json” or “xml”. When coming across these different file formats and trying to access their data we need to utilize Python libraries to make this process easier. The first Python library to become familiar with is called Pandas. By importing this library in the beginning of the code we are then be able to easily read the different file types. Since we have now imported the Panda library let’s use it to read the first “csv” file.

In this instance we have come across the “FileExample. The first step is to assign the file to a variable. Then create another variable to read the file with the help of the Panda library. We can then call read_csv function output the data to the screen. With this example there were no headers for the data so it added the first line as the header.

Since we don’t want the first line of data as the header let’s find out how to correct this issue. Now that we have learned how to read and output the data from a “csv” file let’s make it look a little more organized. From the last example we were able to print out the data but because the file had no headers it printed the first line of data as a header. We easily solve this by adding a dataframe attribute. We use the variable “df” to call the file and then add the “columns” attribute.

By adding this one line to our program we can then neatly organize the data output into the specified headers for each column. The next file format we will explore is the “json” file format. In this type of file the text is written in a language independent data format and is similar to a Python dictionary. The first step in reading this type of file is to import json. After importing “json” we can add a line to open the file call the “load” attribute of “json” to begin and read the file and lastly we can then print the file.

The next file format is “xml”. This type of file is also known as Extensible Markup Language. While the Pandas library does not have an attribute to read this type of file let’s explore how to parse this type of file. The first step to read this type of file is to import xml. By importing this library we can then use the “etree” attribute to parse the “xml” file.

We then add the column headers and assign then to the dataframe. Then create a loop to go through the document to collect the necessary data and append the data to a dataframe. In this video, you learned: How to recognize different file types How to use Python libraries to extract data How to use dataframes when collecting data

</details>
