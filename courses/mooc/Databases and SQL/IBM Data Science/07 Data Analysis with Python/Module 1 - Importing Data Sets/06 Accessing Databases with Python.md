# Accessing Databases with Python

## 개요
- 강좌: Data Analysis with Python
- 모듈: Importing Data Sets
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/data-analysis-with-python/lecture/kkx0X/accessing-databases-with-python)
- 안녕하세요, 이 비디오에서는 Python을 사용하여 데이터베이스에 액세스하는 방법을 배웁니다.
- 데이터베이스는 데이터 과학자를 위한 강력한 도구입니다.

## 내용
### 핵심 내용
- 안녕하세요, 이 비디오에서는 Python을 사용하여 데이터베이스에 액세스하는 방법을 배웁니다.
- 데이터베이스는 데이터 과학자를 위한 강력한 도구입니다.
- Python 코드는 API 호출을 사용하여 데이터베이스에 연결합니다.
- SQL API는 DBMS가 SQL 문을 DBMS로 전달하기 위한 응용 프로그래밍 인터페이스 API인 라이브러리 함수 호출로 구성되며, 응용 프로그램은 API의 함수를 호출하고, 다른 함수를 호출하여 DBMS에서 질의 결과 및 상태 정보를 검색합니다.
- DB API는 관계형 데이터베이스에 액세스하기 위한 Python 표준 API입니다.
- Python DB API의 두 가지 주요 개념은 연결 객체와 쿼리 객체입니다.

### 한국어 Transcript

안녕하세요, 이 비디오에서는 Python을 사용하여 데이터베이스에 액세스하는 방법을 배웁니다. 데이터베이스는 데이터 과학자를 위한 강력한 도구입니다. 이 모듈을 완료하면 Python을 사용하여 데이터베이스에 연결하는 것과 관련된 기본 개념을 설명할 수 있습니다. 이것은 일반적인 사용자가 웹 기반 편집기인 Jupiter Notebook에서 작성한 Python 코드를 사용하여 데이터베이스에 액세스하는 방법입니다. 파이썬 프로그램이 DBMS와 통신하는 메커니즘이 있습니다.

Python 코드는 API 호출을 사용하여 데이터베이스에 연결합니다. SQL API와 파이썬 DB API의 기본 사항을 설명하겠습니다. 애플리케이션 프로그래밍 인터페이스는 특정 유형의 서비스에 액세스하기 위해 호출할 수 있는 함수 집합입니다. SQL API는 DBMS가 SQL 문을 DBMS로 전달하기 위한 응용 프로그래밍 인터페이스 API인 라이브러리 함수 호출로 구성되며, 응용 프로그램은 API의 함수를 호출하고, 다른 함수를 호출하여 DBMS에서 질의 결과 및 상태 정보를 검색합니다. 일반적인 SQL API의 기본 작동이 그림에 나와 있습니다.

응용 프로그램은 프로그램을 DBMS에 연결하는 하나 이상의 API 호출을 통해 데이터베이스 액세스를 시작합니다. SQL 문을 DBMS로 보내기 위해 프로그램은 명령문을 버퍼에 텍스트 문자열로 구성한 다음 API를 호출하여 버퍼 내용을 DBMS로 전달합니다. 응용 프로그램은 DBMS 요청 상태를 확인하고 오류를 처리하기 위해 API를 호출합니다. 응용 프로그램은 API 호출을 통해 데이터베이스 액세스를 종료하고 데이터베이스와의 연결을 끊습니다. DB API는 관계형 데이터베이스에 액세스하기 위한 Python 표준 API입니다.

이 표준은 여러 종류의 관계형 데이터베이스마다 별도의 프로그램을 작성하는 대신 여러 종류의 관계형 데이터베이스에서 작동하는 단일 프로그램을 작성할 수 있도록 하는 표준입니다. DB API 함수를 배우면 그 지식을 적용하여 Python이 설치된 모든 데이터베이스를 사용할 수 있습니다. Python DB API의 두 가지 주요 개념은 연결 객체와 쿼리 객체입니다. 연결 객체를 사용하여 데이터베이스에 연결하고 트랜잭션을 관리합니다. 커서 개체는 쿼리를 실행하는 데 사용됩니다.

커서 개체를 연 다음 쿼리를 실행합니다. 커서는 결과 집합에서 아래로 스크롤하여 데이터를 응용 프로그램으로 가져오는 텍스트 처리 시스템의 커서와 유사하게 작동합니다. 커서는 데이터베이스의 결과를 스캔하는 데 사용됩니다. 연결 개체에 사용되는 메서드는 다음과 같습니다. 커서 메서드는 연결을 사용하여 새 커서 객체를 반환합니다.

commit 메서드는 보류 중인 모든 트랜잭션을 데이터베이스에 커밋하는 데 사용됩니다. 롤백 메서드를 사용하면 대기 중인 트랜잭션이 시작될 때 데이터베이스가 롤백됩니다. closed 메서드는 데이터베이스 연결을 닫는 데 사용됩니다. DB API를 사용하여 데이터베이스를 쿼리하는 Python 애플리케이션을 살펴보겠습니다. 먼저 해당 모듈의 connect API를 사용하여 데이터베이스 모듈을 가져옵니다.

데이터베이스 연결을 열려면 연결 함수를 사용하고 매개 변수, 즉 데이터베이스 이름, 사용자 이름 및 암호를 전달합니다. connect 함수는 연결 객체를 반환합니다. 그런 다음 연결 개체에 커서 개체를 만듭니다. 커서는 쿼리를 실행하고 결과를 가져오는 데 사용됩니다. 커서를 사용하여 쿼리를 실행한 후 커서를 사용하여 쿼리 결과를 가져옵니다.

마지막으로 시스템에서 쿼리 실행이 완료되면 연결을 종료하여 모든 리소스를 비웁니다. 사용하지 않는 연결이 리소스를 차지하지 않도록 항상 연결을 닫는 것이 중요하다는 점을 기억하세요. 이 동영상을 시청해 주셔서 감사합니다.

## 예시
- 이것은 일반적인 사용자가 웹 기반 편집기인 Jupiter Notebook에서 작성한 Python 코드를 사용하여 데이터베이스에 액세스하는 방법입니다.
- Python 코드는 API 호출을 사용하여 데이터베이스에 연결합니다.
- SQL 문을 DBMS로 보내기 위해 프로그램은 명령문을 버퍼에 텍스트 문자열로 구성한 다음 API를 호출하여 버퍼 내용을 DBMS로 전달합니다.
- Python DB API의 두 가지 주요 개념은 연결 객체와 쿼리 객체입니다.

## 요약
- SQL API는 DBMS가 SQL 문을 DBMS로 전달하기 위한 응용 프로그래밍 인터페이스 API인 라이브러리 함수 호출로 구성되며, 응용 프로그램은 API의 함수를 호출하고, 다른 함수를 호출하여 DBMS에서 질의 결과 및 상태 정보를 검색합니다.
- DB API는 관계형 데이터베이스에 액세스하기 위한 Python 표준 API입니다.
- Python DB API의 두 가지 주요 개념은 연결 객체와 쿼리 객체입니다.

<details>
<summary>영문 Transcript 원문</summary>

Hello, in this video, you will learn how to access databases using Python. Databases are powerful tools for data scientists. After completing this module, you will be able to explain the basic concepts related to using Python to connect to databases. This is how a typical user accesses databases using Python code written on a Jupiter Notebook, a web-based editor. There is a mechanism by which the Python program communicates with the DBMS.

The Python code connects to the database using API calls. We will explain the basics of SQL API's and Python DB APIs. An application programming interface is a set of functions that you can call to get access to some type of service. A SQL API consists of library function calls as an application programming interface (API) for the DBMS. To pass SQL statements to the DBMS, an application program calls functions in the API, and it calls other functions to retrieve query results and status information from the DBMS.

The basic operation of a typical SQL API is illustrated in the figure. The application program begins its database access with one or more API calls that connect the program to the DBMS. To send a SQL statement to the DBMS, the program builds the statement as a text string in a buffer and then makes an API call to pass the buffer contents to the DBMS. The application program makes API calls to check the status of its DBMS request and to handle errors. The application program ends its database access with an API call that disconnects it from the database.

DB API is Python standard API for accessing relational databases. It is a standard that allows you to write a single program that works with multiple kinds of relational databases instead of writing a separate program for each one. If you learn the DB API functions, then you can apply that knowledge to use any database with Python. The two main concepts in the Python DB API are connection objects and query objects. You use connection objects to connect to a database and manage your transactions.

Cursor objects are used to run queries. You open a cursor object and then run queries. The cursor works similar to a cursor in a text processing system, where you scroll down in your result set and get your data into the application. Cursors are used to scan through the results of a database. Here are the methods used with connection objects.

The cursor method returns a new cursor object using the connection. The commit method is used to commit any pending transaction to the database. The rollback method causes the database to roll back to the start of any pending transaction. The closed method is used to close a database connection. Let's walk through a Python application that uses the DB API to query a database.

First, you import your database module by using the connect API from that module. To open a connection to the database, you use the connection function and pass in the parameters. That is, the database name, username, and password. The connect function returns a connection object. After this, you create a cursor object on the connection object.

The cursor is used to run queries and fetch results. After running the queries using the cursor, we also use the cursor to fetch the results of the query. Finally, when the system is done running the queries, it frees all resources by closing the connection. Remember that it is always important to close connections to avoid unused connections taking up resources. Thanks for watching this video.

</details>
