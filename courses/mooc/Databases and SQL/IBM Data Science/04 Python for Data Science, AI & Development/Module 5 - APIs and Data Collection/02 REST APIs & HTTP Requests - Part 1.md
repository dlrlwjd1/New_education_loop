# REST APIs & HTTP Requests - Part 1

## 개요
- 강좌: Python for Data Science, AI & Development
- 모듈: APIs and Data Collection
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/python-for-applied-data-science-ai/lecture/W6xwd/rest-apis-http-requests-part-1)
- 구체적으로는 URL(Uniform Resource Locator) 요청, 응답입니다.
- 이전 섹션에서 REST API에 대해 언급한 적이 있습니다.

## 내용
### 핵심 내용
- 구체적으로는 URL(Uniform Resource Locator) 요청, 응답입니다.
- 이전 섹션에서 REST API에 대해 언급한 적이 있습니다.
- HTTP 프로토콜은 웹을 통해 정보를 전송하는 일반 프로토콜로 생각할 수 있으며 여기에는 많은 유형의 REST API가 포함됩니다.
- 시작 줄에는 GET 메서드가 있으며 HTTP 메서드입니다.
- 요청 헤더는 HTTP 요청과 함께 추가 정보를 전달합니다.
- HTTP 요청이 이루어지면 HTTP 메서드가 전송되어 서버에 수행할 조치를 알려줍니다.

### 한국어 Transcript

이 영상에서 다룰 주제는 HTTP 프로토콜입니다. 구체적으로는 URL(Uniform Resource Locator) 요청, 응답입니다. 이전 섹션에서 REST API에 대해 언급한 적이 있습니다. HTTP 프로토콜은 웹을 통해 정보를 전송하는 일반 프로토콜로 생각할 수 있으며 여기에는 많은 유형의 REST API가 포함됩니다. REST API를 실행하기 위해 요청을 전송해야 하는 것을 알고 계실 것입니다.

또한 그 요청은 HTTP 메시지를 통해 전달됩니다. HTTP 메시지는 일반적으로 JSON 파일을 포함합니다. 클라이언트가 웹 페이지를 사용하면 브라우저는 페이지를 호스팅하는 서버로 HTTP 요청을 전송합니다. html"로 원하는 리소스 찾기를 시도합니다. 요청이 성공하면 서버가 HTTP 응답으로 클라이언트에게 개체를 전송합니다.

이때 리소스 유형, 리소스 길이 등의 정보가 포함됩니다. 웹 서버 아래 테이블은 웹 서버에 저장되는 리소스의 목록입니다. 이 경우 HTML 파일, png 이미지, txt 파일입니다. 정보를 요청하면 웹 서버가 요청한 정보, 즉 파일 중 하나를 전송합니다. 흔히 인터넷 주소를 말하는 URL(Uniform Resource Locator)은 웹에서 리소스를 찾는 가장 일반적인 방법입니다.

먼저 프로토콜을 나타내는 체계로, 이 실험실에서는 항상 http://를 의미합니다. 다음으로 인터넷 주소 또는 기준 URL은 위치를 찾는 데 사용됩니다. 경로는 웹 서버상의 위치로 /images/IDSNlogo. 이제 요청과 응답 프로세스를 살펴보겠습니다. 이 메시지는 get 요청 메서드의 요청 메시지 예입니다.

다른 HTTP 메서드를 사용할 수도 있습니다. 시작 줄에는 GET 메서드가 있으며 HTTP 메서드입니다. 요청 헤더는 HTTP 요청과 함께 추가 정보를 전달합니다. GET 메서드에는 요청 헤더가 비어 있습니다. 요청 본문의 예는 다음에 살펴보도록 하겠습니다.

응답 시작 줄에는 버전 번호와 설명 구문이 차례로 나타납니다. 이 경우 HTTP/1.0 상태 코드 (200)은 성공을 의미하고 설명 구문은 OK입니다. 상태 코드는 나중에 좀 더 설명하도록 하겠습니다. 마지막으로 응답 본문은 요청된 파일, 이 경우 HTML 문서를 포함합니다. 다른 상태 코드도 한 번 보겠습니다.

아래 표는 몇몇 상태 코드 예를 보여줍니다. 여기서 접두사는 클래스를 나타냅니다. 예를 들어 100번대는 정보성 응답입니다. 100은 현재까지 모든 것이 양호함을 나타냅니다. 예를 들어 200은 요청이 성공했음을 의미합니다.

예를 들어 401은 권한이 없는 요청임을 의미합니다. 500번대는 서버 오류를 나타냅니다. 한 예로 501은 구현되지 않은 상태를 나타냅니다. HTTP 요청이 이루어지면 HTTP 메서드가 전송되어 서버에 수행할 조치를 알려줍니다. 이 목록은 대표적인 HTTP 메서드입니다.

다음 영상에서는 Python을 사용하여 서버에서 데이터를 검색하는 GET 메서드와 서버로 데이터를 전송하는 POST 메서드를 응용해 보겠습니다.

## 예시
- 이 경우 HTTP/1.0 상태 코드 (200)은 성공을 의미하고 설명 구문은 OK입니다.
- 상태 코드는 나중에 좀 더 설명하도록 하겠습니다.
- 다른 상태 코드도 한 번 보겠습니다.
- 아래 표는 몇몇 상태 코드 예를 보여줍니다.

## 요약
- 시작 줄에는 GET 메서드가 있으며 HTTP 메서드입니다.
- 요청 헤더는 HTTP 요청과 함께 추가 정보를 전달합니다.
- HTTP 요청이 이루어지면 HTTP 메서드가 전송되어 서버에 수행할 조치를 알려줍니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we will discuss the HTTP protocol. Specifically, we will discuss: Uniform Resource Locator: URL Request and Response We touched on REST APIs in the last section. The HTTP protocol can be thought of as a general protocol of transferring information through the web. This includes many types of REST APIs. Recall that REST APIs function by sending a request, and the request is communicated via HTTP message.

The HTTP message usually contains a JSON file. When you, the client, use a web page your browser sends an HTTP request to the server where the page is hosted. The server tries to find the desired resource by default "index. If your request is successful, the server will send the object to the client in an HTTP response; this includes information like the type of the resource, the length of the resource, and other information. The table under the Web server represents a list of resources stored in the web server.

In this case, an HTML file, png image, and txt file. When the request is made for the information, the web servers sends the the requested information, that is, one of the files. A uniform resource locator (URL) is the most popular way to find resources on the web. We can break the URL into three parts. First we have the scheme: this is the protocol, and for this lab it will always be http:// The internet address or Base URL: this will be used to find the location; some examples include www.

com And finaly, the route: this is the location on the web server, for example: /images/IDSNlogo. png Let's review the request and Response process. The following is an example of the request message for the get request method. There are other HTTP methods we can use. In the start line we have the GET method.

This is an HTTP method. In this case, it’s requesting the file index. html The Request header passes additional information with an HTTP request. In the GET method the Request header is empty. Some Requests have a body; we will have an example of a request body later.

The following table represents the response. The response start line contains the version number followed by a descriptive phrase. In this case, HTTP/1.0 a status code (200) meaning success, and the descriptive phrase, OK. We have more on status codes later. The response header contains information.

Finally, we have the response body containing the requested file, in this case an HTML document. Lets look at other status codes. Some status code examples are shown in the table below. The prefix indicates the class; for example, the 100s are informational responses; 100 indicates that everything is OK so far. The 200s are Successful responses: For example, 200 The request has succeeded.

Anything in the 400s is bad news. 401 means the request is unauthorized. 500’s stands for server errors, like 501 for not Implemented. When an HTTP request is made, an HTTP method is sent. This tells the server what action to perform.

A list of several HTTP methods is shown here. In the next video, we will use Python to apply the GET method that retrieves data from the server and the post method that sends data to the server.

</details>
