# Application Program Interface

## 개요
- 강좌: Python for Data Science, AI & Development
- 모듈: APIs and Data Collection
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-applied-data-science-ai/lecture/rLaLi/application-program-interface)
- 이 영상에서는 애플리케이션 프로그래밍 인터페이스, 약어로 API에 대해 알아봅니다.
- 구체적으로 API 라이브러리를 설명하며 REST API에 대한 설명에서는 요청 및 응답과 PyCoinGecko 예를 함께 살펴봅니다.

## 내용
### 핵심 내용
- 이 영상에서는 애플리케이션 프로그래밍 인터페이스, 약어로 API에 대해 알아봅니다.
- 구체적으로 API 라이브러리를 설명하며 REST API에 대한 설명에서는 요청 및 응답과 PyCoinGecko 예를 함께 살펴봅니다.
- 예를 들어 프로그램이 있고 데이터가 있으며 다른 소프트웨어 구성 요소가 있습니다.
- API를 사용하면 입력과 출력을 통해 API와 통신할 수 있습니다.
- 여기 데이터와 일련의 소프트웨어 구성 요소가 있습니다.
- pandas API를 사용하면 다른 소프트웨어 구성 요소와의 통신으로 데이터를 처리할 수 있습니다.

### 한국어 Transcript

이 영상에서는 애플리케이션 프로그래밍 인터페이스, 약어로 API에 대해 알아봅니다. 구체적으로 API 라이브러리를 설명하며 REST API에 대한 설명에서는 요청 및 응답과 PyCoinGecko 예를 함께 살펴봅니다. API는 두 소프트웨어 간 통신을 지원합니다. 예를 들어 프로그램이 있고 데이터가 있으며 다른 소프트웨어 구성 요소가 있습니다. API를 사용하면 입력과 출력을 통해 API와 통신할 수 있습니다.

함수와 마찬가지로 API의 작동 원리를 알 필요는 없지만 입력과 출력은 이해해야 합니다. pandas는 실제로 소프트웨어 구성 요소의 집합이며 그중 상당수의 구성 요소는 Python으로 작성되지도 않습니다. 여기 데이터와 일련의 소프트웨어 구성 요소가 있습니다. pandas API를 사용하면 다른 소프트웨어 구성 요소와의 통신으로 데이터를 처리할 수 있습니다. 사전을 만들고 DataFrame 생성자로 pandas 개체를 생성하는 것을 API 용어로 “인스턴스”라고 합니다.

사전의 데이터는 pandas API로 전달됩니다. 그러면 DataFrame을 사용하여 API와 통신할 수 있습니다. head 메서드를 호출하면 DataFrame이 API와 통신하여 DataFrame의 처음 몇 행을 표시합니다. mean 메서드를 호출하면 API가 평균을 계산하고 값을 반환합니다. REST API는 잘 알려진 또 다른 유형의 API입니다.

REST API를 사용하면 인터넷을 통한 통신이 가능하므로 스토리지와 같은 리소스를 활용하고 더 많은 데이터, 인공 지능 알고리즘 등에 액세스할 수 있습니다. Representational을 의미하고 State를 나타내며 T는 Transfer를 나타냅니다. REST API에서는 프로그램을 클라이언트라고 합니다. API는 인터넷을 통해 사용자가 호출하는 웹 서비스와 통신합니다. 통신, 입력 또는 요청, 출력 또는 응답과 관련된 일련의 규칙이 있습니다.

몇 가지 일반적인 용어를 알아보겠습니다. 사용자 또는 사용자 코드는 클라이언트라고 하고 웹 서비스는 리소스라고 합니다. 클라이언트는 엔드포인트를 통해 서비스를 찾습니다. 이 내용은 다음 섹션에서 자세히 알아보겠습니다. 클라이언트는 리소스로 요청을 보내고 클라이언트로 응답을 보냅니다.

HTTP 메서드는 인터넷을 통해 데이터를 전송하는 방법입니다. REST API에 수행할 작업을 알려주기 위해 요청을 보냅니다. 요청은 일반적으로 HTTP 메시지를 통해 전달됩니다. HTTP 메시지는 일반적으로 JSON 파일을 포함합니다. 이 파일에는 서비스에서 수행해야 할 작업에 대한 지침이 들어 있습니다.

이 작업은 인터넷을 통해 웹 서비스로 전송됩니다. 마찬가지로 웹서비스는 HTTP 메시지를 통해 응답을 반환하며 여기서 정보는 일반적으로 JSON 파일을 통해 반환됩니다. 이 정보는 다시 클라이언트로 전송됩니다. 암호 화폐 데이터는 API에서 효과적으로 사용할 수 있습니다. API는 지속적으로 업데이트되며 암호화폐 거래에 중요한 역할을 하기 때문입니다.

Coin Gecko API의 경우 Py-Coin-Gecko Python 클라이언트/랩퍼를 사용하는데, CoinGecko가 1분 단위로 업데이트합니다. 랩퍼/클라이언트를 사용하는 이유는 사용 방법이 간편하여 데이터 수집 작업에만 집중할 수 있기 때문입니다. 시계열 데이터 처리를 위한 pandas 시계열 함수도 설명할 예정입니다. Pycoingecko를 사용한 데이터 수집은 매우 간단합니다. 클라이언트 개체를 생성하는 라이브러리를 설치하고 가져오기만 하면 됩니다.

또한 마지막으로 함수를 사용하여 데이터를 요청합니다. 이 함수는 지난 30일 동안의 비트코인 데이터를 미국 달러 단위로 가져옵니다. 이 경우 응답은 가격, 시가 총액, 총 거래량 등 해당 시점의 unix 타임스탬프와 가격을 포함하고 중첩 목록의 Python 사전으로 표시되는 JSON입니다. 여기서는 가격에만 관심이 있으므로 price 키를 사용하여 선택하게 됩니다. 이해를 돕기 위해 중첩 목록을 DataFrame으로 변환할 수 있습니다.

TimeStamp 열과 Price 열의 경우 TimeStamp 열을 이해하기 어렵습니다. 따라서 pandas 함수 to_datetime을 사용하여 이 열을 보다 쉽게 읽을 수 있는 형식으로 변환하려고 합니다. datetime 함수를 사용하여 읽기 가능한 시간 데이터를 생성합니다. 입력은 타임스탬프이며 열 시간 단위는 밀리초로 설정됩니다. 새 열 Date에 출력을 추가합니다.

일일 캔들스틱에 대한 데이터를 가져오려면 날짜별로 그룹화하여 매일 매일의 최솟값, 최댓값, 최초 가격과 마지막 가격을 확인합니다. 마지막으로 plotly를 사용하여 캔들스틱 차트를 만들고 플로팅합니다. 이제 html 파일을 열고 탭 왼쪽 상단에 있는 Trust HTML을 클릭하면 이렇게 캔들스틱 차트가 나타납니다.

## 예시
- 예를 들어 프로그램이 있고 데이터가 있으며 다른 소프트웨어 구성 요소가 있습니다.
- 사용자 또는 사용자 코드는 클라이언트라고 하고 웹 서비스는 리소스라고 합니다.

## 요약
- API를 사용하면 입력과 출력을 통해 API와 통신할 수 있습니다.
- 여기 데이터와 일련의 소프트웨어 구성 요소가 있습니다.
- pandas API를 사용하면 다른 소프트웨어 구성 요소와의 통신으로 데이터를 처리할 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video we will discuss Application Program Interfaces (APIs for short). Specifically, we will discuss what an API is, API libraries, and REST APIs, including Request and Response and an example with PyCoinGecko. An API lets two pieces of software talk to each other. For example, you have your program, you have some data, you have other software components. You use the API to communicate with other software via inputs and outputs.

Just like a function, you don’t have to know how the API works, just its inputs and outputs. Pandas is actually a set of software components, much of which are not even written in Python. You have a set of software components. We use the pandas API to process the data by communicating with the other software components. Let’s clean up the diagram.

When you create a dictionary, and then create a pandas object with the DataFrame constructor, in API lingo, this is an “instance.” The data in the dictionary is passed along to the pandas API. You then use the dataframe to communicate with the API. When you call the method head, the dataframe communicates with the API displaying the first few rows of the dataframe. When you call the method mean the API will calculate the mean and return the values. REST APIs are another popular type of API; they allow you to communicate through the internet allowing you to take advantage of resources like storage, access more data, artificial intelligence algorithms, and much more.

The RE stands for Representational, the S for State, and T for Transfer. In REST APIs your program is called the client. The API communicates with a web service you call through the internet. There is a set of rules regarding communication, input or request, and output or response. Here are some common terms.

You or your code can be thought of as a client. The web service is referred to as a resource. The client finds the service via an endpoint. We will review this more in the next section. The client sends requests to the resource and the response to the client.

HTTP methods are a way of transmitting data over the internet. We tell the REST APIs what to do by sending a request. The request is usually communicated via an HTTP message. The HTTP message usually contains a JSON file. This contains instructions for what operation we would like the service to perform.

This operation is transmitted to the web service via the internet. The service performs the operation. In a similar manner, the web service returns a response via an HTTP message, where the information is usually returned via a JSON file. This information is transmitted back to the client. Cryptocurrency data is excellent to be used in an API because it is constantly updated and it is vital to cryptocurrency trading.

We will use the PyCoinGecko Python client/wrapper for the CoinGecko API, updated every minute by CoinGecko. We use the wrapper/client because it is easy to use so you can focus on the task of collecting data, we will also introduce pandas time series functions for dealing with time series data. Using PyCoinGecko to collect data is simple. All we need is to install and import the library, then create a client object, and finally use a function to request our data. In this function we are getting data on bitcoin, in US dollars, for the past 30 days.

In this case our response is a JSON expressed as a Python dictionary of nested lists including price, market cap, and total volumes, which contain the UNIX timestamp and the price at that time. We are only interested in price so that is what we will select using the key price. To make things simple, we can convert our nested list to a DataFrame, with the columns timestamp and price it's difficult to understand the column timestamp. We will convert it to a more readable format using the pandas function to_datetime. Using the to_datetime function, we create readable time data, the input is the timestamp column, unit of time is set to milliseconds.

We append the output to the new column, date. Now we want to create a candlestick plot. To get the data for the daily candlesticks we will group by the date to find the minimum, maximum, first, and last price of each day. Finally we will use plotly to create the candlestick chart and plot it. Now we can view the candlestick chart by opening the HTML file and clicking Trust HTML in the top left of the tab.

It should look something like this.

</details>
