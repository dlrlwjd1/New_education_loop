# REST APIs & HTTP Requests - Part 2

## 개요
- 강좌: Python for Data Science, AI & Development
- 모듈: APIs and Data Collection
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-applied-data-science-ai/lecture/h9CR3/rest-apis-http-requests-part-2)
- 이 비디오에서는 Python에서 HTTP 프로토콜을 처리하는 데 널리 사용되는 방법인 요청 라이브러리를 사용하여 HTTP 프로토콜에 대해 설명합니다.
- HTTP 프로토콜 사용을 위한 Python 라이브러리 요청을 검토하고 Get 요청 및 Post 요청에 대한 개요를 제공합니다.

## 내용
### 핵심 내용
- 이 비디오에서는 Python에서 HTTP 프로토콜을 처리하는 데 널리 사용되는 방법인 요청 라이브러리를 사용하여 HTTP 프로토콜에 대해 설명합니다.
- HTTP 프로토콜 사용을 위한 Python 라이브러리 요청을 검토하고 Get 요청 및 Post 요청에 대한 개요를 제공합니다.
- com에 GET 메소드를 사용하여 GET 요청을 할 수 있습니다.
- 요청 본문은 다음 줄에서 볼 수 있습니다.
- 속성 헤더를 사용하여 HTTP 응답 헤더를 볼 수 있습니다.
- POST와 GET 요청 본문을 비교할 수 있습니다.

### 한국어 Transcript

이 비디오에서는 Python에서 HTTP 프로토콜을 처리하는 데 널리 사용되는 방법인 요청 라이브러리를 사용하여 HTTP 프로토콜에 대해 설명합니다. HTTP 프로토콜 사용을 위한 Python 라이브러리 요청을 검토하고 Get 요청 및 Post 요청에 대한 개요를 제공합니다. Python에서 요청 모듈을 검토해 보겠습니다. 이것은 HTTP 프로토콜과 함께 작동할 수 있는 HTTPlib 및 urllib을 비롯한 여러 라이브러리 중 하나입니다. 요청은 HTTP/1.1 요청을 쉽게 보낼 수 있는 Python 라이브러리입니다.

다음과 같이 라이브러리를 가져올 수 있습니다. com에 GET 메소드를 사용하여 GET 요청을 할 수 있습니다. 응답 객체 R이 있는데, 여기에는 요청 상태와 같은 요청 관련 정보가 들어 있습니다. 속성 상태 밑줄 코드 (OK의 경우 200) 를 사용하여 상태 코드를 볼 수 있습니다. 요청 본문은 다음 줄에서 볼 수 있습니다.

GET 요청에는 본문이 없으므로 없음이 반환됩니다. 속성 헤더를 사용하여 HTTP 응답 헤더를 볼 수 있습니다. 이것은 HTTP 응답 헤더의 파이썬 딕셔너리를 반환합니다. 키 날짜를 사용하여 요청이 전송된 날짜를 확인할 수 있습니다. 키 콘텐츠 유형은 데이터 유형을 나타냅니다.

응답 객체 R을 사용하여 인코딩을 확인할 수도 있습니다. 콘텐츠 유형이 텍스트 또는 HTML이므로 속성 텍스트를 사용하여 본문에 HTML을 표시할 수 있습니다. 처음 100자를 검토할 수 있습니다. 다른 콘텐츠도 다운로드할 수 있습니다. GET 메서드를 사용하여 쿼리 결과 (예: API에서 데이터 검색) 를 수정할 수 있습니다.

실습에서는 간단한 HTTP 요청 및 응답 서비스인 httpbin. 이전과 마찬가지로 경로에 기본 URL이 있습니다. 이는 GET 요청을 수행하고자 함을 나타냅니다. GET이 요청되면 쿼리 문자열이 생성됩니다. 이는 유니폼 리소스 로케이터 또는 URL의 일부이며 다른 정보를 웹 서버로 보냅니다.

쿼리의 시작 부분은 물음표이고, 그 뒤에 아래 표와 같이 일련의 매개변수와 값 쌍이 옵니다. 첫 번째 매개변수 이름은 이름이고 값은 Joseph입니다. 두 번째 매개변수 이름은 ID이고 값은 123입니다. 각 쌍의 매개변수와 값은 등호로 구분됩니다. Python으로 예제를 완성해 보겠습니다.

끝에 GET이 추가된 기본 URL이 있습니다. 쿼리 문자열을 만들려면 딕셔너리 페이로드를 사용합니다. 키는 매개변수 이름이고 값은 쿼리 문자열의 값입니다. 그런 다음 GET 함수의 params 매개 변수에 딕셔너리 페이로드를 전달합니다. URL을 출력하고 이름과 값을 볼 수 있습니다.

정보가 URL로 전송되므로 본문의 값은 none입니다. 응답을 텍스트로 볼 수 있고, 주요 콘텐츠 유형을 보고 콘텐츠 유형을 볼 수 있습니다. 콘텐츠 콘텐츠 유형이 JSON에 있으므로 JSON 메서드를 사용하여 형식을 지정합니다. 키 args에는 쿼리 문자열의 이름과 값이 있습니다. GET 요청과 마찬가지로 POST 요청은 서버에 데이터를 보내는 데 사용되지만 POST 요청은 URL이 아닌 요청 본문의 데이터를 보냅니다.

URL에서 POST 요청을 전송하기 위해 경로를 POST로 변경합니다. 이 엔드포인트는 데이터를 필요로 하며, 이는 서버에 데이터를 전송하도록 HTTP 요청을 구성하는 편리한 방법입니다. POST 요청을 하려면 POST 함수를 사용합니다. 변수 페이로드는 파라미터 데이터로 전달됩니다. GET과 POST의 응답 객체의 속성 URL을 사용하여 URL 비교 POST 요청의 URL에 이름이나 값 쌍이 없음을 알 수 있습니다.

POST와 GET 요청 본문을 비교할 수 있습니다. POST 요청에만 본문이 있는 것으로 보입니다. 그리고 키 양식을 보고 페이로드를 가져올 수 있습니다.

## 예시
- 속성 상태 밑줄 코드 (OK의 경우 200) 를 사용하여 상태 코드를 볼 수 있습니다.
- GET 메서드를 사용하여 쿼리 결과 (예: API에서 데이터 검색) 를 수정할 수 있습니다.
- 실습에서는 간단한 HTTP 요청 및 응답 서비스인 httpbin.
- GET이 요청되면 쿼리 문자열이 생성됩니다.

## 요약
- 요청 본문은 다음 줄에서 볼 수 있습니다.
- 속성 헤더를 사용하여 HTTP 응답 헤더를 볼 수 있습니다.
- POST와 GET 요청 본문을 비교할 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we will discuss the HTTP protocol using the requests library, a popular method for dealing with the HTTP protocol in Python. We will review Python library requests for working with the HTTP protocols, and we will provide an overview of Get requests and Post requests. Let us review the request module in Python. This is one of several libraries, including HTTPlib and urllib, that can work with the HTTP protocol. Requests is a Python library that allows you to send HTTP/1.1 requests easily.

We can import the library as follows. You can make a GET request via the method GET to www. We have the response object R. This has information about the request, like the status of the request. We can view the status code using the attribute status underscore code, which is 200 for OK.

You can view the request headers. You can view the request body in the following line. As there is no body for a GET request, we get a none. You can view the HTTP response header using the attribute headers. This returns a Python dictionary of HTTP response headers.

We can look at the dictionary values. We can obtain the date the request was sent by using the key date. The key content type indicates the type of data. Using the response object R, we can also check the encoding. As the content type is text or HTML, we can use the attribute text to display the HTML in the body.

We can review the first 100 characters. You can also download other content. See the lab for more. You can use the GET method to modify the results of your query, for example, retrieving data from an API. In the lab, we will use httpbin.

org, a simple HTTP request and response service. We send a GET request to the server. Like before, we have the base URL in the route. This indicates we would like to perform a GET request. This is demonstrated in the following table.

After GET is requested, we have the query string. This is part of a uniform resource locator or URL, and this sends other information to the web server. The start of the query is a question mark, followed by a series of parameter and value pairs as shown in the table below. The first parameter name is name, and the value is Joseph. The second parameter name is ID, and the value is 123.

Each pair parameter and value is separated by an equal sign. The series of pairs is separated by the ampersand. Let us complete an example in Python. We have the base URL with GET appended to the end. To create a query string, we use the dictionary payload.

The keys are the parameter names, and the values are the value of the query string. Then we pass the dictionary payload to the params parameter of the GET function. We can print out the URL and see the name and values. We can see the request body. As the info is sent in the URL, the body has a value of none.

We can print out the status code. We can view the response as text, and we can look at the key content type to look at the content type. As the content content type is in the JSON, we format it using the method JSON. It returns a Python dict. The key args has the name and values for the query string.

Like a GET request, a POST request is used to send data to a server, but the POST request sends the data in a request body, not the URL. In order to send the POST request in the URL, we change the route to POST. This endpoint will expect data, and it is a convenient way to configure an HTTP request to send data to a server. We have the payload dictionary. To make a POST request, we use the POST function.

The variable payload is passed to the parameter data. Comparing the URL using the attribute URL from the response object of the GET and POST We see the POST request has no name or value pairs in its URL. We can compare the POST and GET request body. We see only the POST request has a body. And we can view the key form to get the payload.

</details>
