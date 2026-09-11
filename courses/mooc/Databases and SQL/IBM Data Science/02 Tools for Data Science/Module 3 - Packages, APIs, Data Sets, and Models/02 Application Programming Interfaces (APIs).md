# Application Programming Interfaces (APIs)

## 개요
- 강좌: Tools for Data Science
- 모듈: Packages, APIs, Data Sets, and Models
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/open-source-tools-for-data-science/lecture/FYyMM/application-programming-interfaces-apis)
- 이 동영상을 시청한 후에는 요청 및 응답과 관련하여 API를 정의하고, API 라이브러리를 나열하고, REST API를 정의할 수 있습니다.
- 애플리케이션 프로그래밍 인터페이스 (API) 를 사용하면 두 소프트웨어 간의 통신이 가능합니다.

## 내용
### 핵심 내용
- 이 동영상을 시청한 후에는 요청 및 응답과 관련하여 API를 정의하고, API 라이브러리를 나열하고, REST API를 정의할 수 있습니다.
- 애플리케이션 프로그래밍 인터페이스 (API) 를 사용하면 두 소프트웨어 간의 통신이 가능합니다.
- 예를 들어 프로그램에는 일부 데이터 및 기타 소프트웨어 구성 요소가 있습니다.
- Pandas API를 사용하여 다른 소프트웨어 구성 요소와 통신하여 데이터를 처리할 수 있습니다.
- 이 비디오에서는 두 소프트웨어 간의 통신을 가능하게 하는 애플리케이션 프로그래밍 인터페이스 (API) 를 배웠습니다.
- 또한 REST API를 사용하면 인터넷을 통해 통신하고 스토리지, 데이터, 인공 지능 알고리즘 등과 같은 리소스를 활용할 수 있습니다.

### 한국어 Transcript

애플리케이션 프로그램 인터페이스, 즉 API에 오신 것을 환영합니다. 이 동영상을 시청한 후에는 요청 및 응답과 관련하여 API를 정의하고, API 라이브러리를 나열하고, REST API를 정의할 수 있습니다. 애플리케이션 프로그래밍 인터페이스 (API) 를 사용하면 두 소프트웨어 간의 통신이 가능합니다. 예를 들어 프로그램에는 일부 데이터 및 기타 소프트웨어 구성 요소가 있습니다. API를 사용하면 백엔드에서 어떤 일이 발생하는지 몰라도 입력과 출력을 사용하여 통신할 수 있습니다.

이 라이브러리는 모든 프로그램 구성 요소를 포함하는 동안 볼 수 있는 라이브러리의 일부입니다. 이제 라이브러리에서 API가 어떻게 작동하는지 더 자세히 이해하기 위해 Pandas 라이브러리의 예를 살펴보겠습니다. Pandas는 모든 구성 요소가 Python으로 작성되지 않은 소프트웨어 구성 요소 집합입니다. 프로그램에는 일부 데이터와 소프트웨어 구성 요소 집합이 있습니다. Pandas API를 사용하여 다른 소프트웨어 구성 요소와 통신하여 데이터를 처리할 수 있습니다.

백엔드의 소프트웨어 구성 요소는 동일할 수 있지만 다른 언어에 대한 API가 있을 수 있습니다. 파이썬, 자바스크립트, C++, 자바, Go와 같은 다른 언어용 API를 사용할 수 있는 C++로 작성된 백엔드의 TensorFlow를 생각해 보세요. 따라서 API는 인터페이스에 불과합니다. 텐서플로우를 위해 자원자가 개발한 다른 API로는 줄리아, MATLAB, R, 스칼라 등이 있습니다. 따라서 REST API는 또 다른 인기 있는 API 유형입니다.

R-E는 대표를, S는 주를, T는 전송을 나타냅니다. 이를 통해 인터넷을 통해 통신하고 스토리지, 데이터, 인공 지능 알고리즘 등과 같은 리소스를 활용할 수 있습니다. REST API에서는 프로그램이 클라이언트입니다. API는 인터넷을 통해 호출할 수 있는 웹 서비스와 통신하지만 통신, 입력 또는 요청, 출력 또는 응답과 관련된 규칙이 있습니다. 이제 API와 관련하여 사용되는 몇 가지 일반적인 용어를 살펴보겠습니다.

귀하 또는 귀하의 코드가 클라이언트입니다. 클라이언트는 엔드포인트를 통해 서비스를 찾습니다. 그리고 클라이언트는 리소스에 요청을 보내고 리소스로부터 응답을 받습니다. 데이터는 HTTP 방법을 사용하여 인터넷을 통해 전송됩니다. REST API는 클라이언트가 보낸 요청에서 모든 정보를 가져옵니다.

요청은 JSON 파일이 포함된 HTTP 메시지를 사용하여 전송됩니다. 이 파일에는 웹 서비스에서 수행할 작업에 대한 지침이 들어 있습니다. 이 작업은 인터넷을 통해 웹 서비스로 전송되고 서비스가 작업을 수행합니다. 마찬가지로 웹 서비스는 HTTP 메시지를 통해 응답을 반환하며, 여기서 정보는 JSON 파일을 사용하여 반환됩니다. 그리고 이 정보는 클라이언트에게 다시 전송됩니다.

이제 REST API의 또 다른 예로는 왓슨 음성-텍스트 변환 API가 있습니다. 이 API는 음성을 텍스트로 변환합니다. API 호출에서는 오디오 파일의 복사본을 API에 전송합니다. API에서는 개인이 말하는 내용의 텍스트 트랜스크립션을 전송합니다. 백엔드에서 API는 GET 요청을 하고 있습니다.

마지막으로 마지막 예제인 왓슨 언어 번역기 API를 살펴보겠습니다. 번역하려는 텍스트를 Watson 언어 번역기 API로 보냅니다. API가 텍스트를 번역하고 번역을 사용자에게 다시 보냅니다. 이 경우 API는 영어를 스페인어로 번역합니다. 이 비디오에서는 두 소프트웨어 간의 통신을 가능하게 하는 애플리케이션 프로그래밍 인터페이스 (API) 를 배웠습니다.

API는 라이브러리에 프로그램의 모든 구성 요소가 포함되어 있는 동안 볼 수 있는 라이브러리의 일부입니다. 또한 REST API를 사용하면 인터넷을 통해 통신하고 스토리지, 데이터, 인공 지능 알고리즘 등과 같은 리소스를 활용할 수 있습니다.

## 예시
- 예를 들어 프로그램에는 일부 데이터 및 기타 소프트웨어 구성 요소가 있습니다.
- 귀하 또는 귀하의 코드가 클라이언트입니다.

## 요약
- Pandas API를 사용하여 다른 소프트웨어 구성 요소와 통신하여 데이터를 처리할 수 있습니다.
- 이 비디오에서는 두 소프트웨어 간의 통신을 가능하게 하는 애플리케이션 프로그래밍 인터페이스 (API) 를 배웠습니다.
- 또한 REST API를 사용하면 인터넷을 통해 통신하고 스토리지, 데이터, 인공 지능 알고리즘 등과 같은 리소스를 활용할 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to Application Program Interfaces, or APIs. After watching this video, you will be able to define an API, list API libraries, and define REST API in relation to request and response. An Application Programming Interface, or API, allows communication between two pieces of software. For example, in a program, you have some data and other software components. You use the API to communicate using inputs and outputs without knowing what happens at the back end.

The API only refers to the interface. It is the part of the library you see while it contains all the program components. Now, to further understand how an API works in a library, consider an example of the Pandas library. Pandas is a set of software components where not all components are written in Python. In your program, there is some data and a set of software components.

You can use the Pandas API to process the data by communicating with the other software components. The software component at the back end can be the same, but there can be an API for different languages. Consider TensorFlow at the back end, written in C++, that can use APIs for other languages, such as Python, JavaScript, C++, Java, and Go, and thus, the API is just the interface. Other volunteer-developed APIs for TensorFlow are Julia, MATLAB, R, Scala, and many more. So, REST APIs are another popular type of API.

The R-E stands for Representational, the S stands for State, and the T stands for Transfer. They allow you to communicate through the internet and take advantage of resources, like storage, data, artificially intelligent algorithms, and much more. In REST API, your program is the client. The API communicates with a web service you can call through the internet, though there are rules regarding communication, input or request, and output or response. So, let's look at some common terms used with regards to API.

You or your code are the client. The web service is the resource. The client finds the service via an endpoint. And the client sends requests to the resource and receives a response from the resource. Data is transmitted over the internet using HTTP methods.

The REST APIs get all the information from the request sent by the client. The request is sent using an HTTP message that contains a JSON file. The file contains instructions for what operation is to be performed by the web service. This operation is transmitted to the web service via the internet, and the service performs the operation. Similarly, the web service returns a response through an HTTP message where the information is returned using a JSON file.

And this information is transmitted back to the client. Now, another example of a REST API is Watson Speech-to-Text API. This API converts speech to text. In the API call, you will send a copy of the audio file to the API. This is called a post request.

In the API, we'll send the text transcription of what the individual is saying. At the back end, the API is making a GET request. And finally, let's look at our final example, the Watson Language Translator API. You send the text you would like to translate into Watson Language Translator API. The API will translate the text and send the translation back to you.

And in this case, the API translates English to Spanish. In this video, you learned an Application Programming Interface, or API, allows communication between two pieces of software. An API is the part of the library you see while the library contains all the components of the program. And REST APIs allow you to communicate through the internet and take advantage of resources like storage, data, artificially intelligent algorithms, and much more.

</details>
