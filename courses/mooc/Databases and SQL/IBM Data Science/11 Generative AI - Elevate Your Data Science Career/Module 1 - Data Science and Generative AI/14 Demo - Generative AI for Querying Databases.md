# Demo: Generative AI for Querying Databases

## 개요
- 강좌: Generative AI: Elevate Your Data Science Career
- 모듈: Data Science and Generative AI
- 재생 시간: 5분
- [MOOC 원본 강의](https://www.mooc.org/learn/generative-ai-elevate-your-data-science-career/lecture/fHAgD/demo-generative-ai-for-querying-databases)
- 이 동영상을 보고 나면 어떻게 빠르고 쉽게 인사이트를 추출할 수 있는 빠르고 쉽게 인사이트를 추출하는 방법을 시연할 수 있습니다, 생성 AI 도구를 사용하여 자연어 쿼리를 이해하고 자연어 쿼리를 이해하고 자연어 쿼리를 SQL 명령으로 변환하는 방법을 시연할 수 있습니다.
- 데이터베이스 쿼리에는 데이터베이스에 저장된 데이터를 검색하거나 또는 데이터베이스에 저장된 데이터를 조작하는 것을 포함합니다.

## 내용
### 핵심 내용
- 이 동영상을 보고 나면 어떻게 빠르고 쉽게 인사이트를 추출할 수 있는 빠르고 쉽게 인사이트를 추출하는 방법을 시연할 수 있습니다, 생성 AI 도구를 사용하여 자연어 쿼리를 이해하고 자연어 쿼리를 이해하고 자연어 쿼리를 SQL 명령으로 변환하는 방법을 시연할 수 있습니다.
- 데이터베이스 쿼리에는 데이터베이스에 저장된 데이터를 검색하거나 또는 데이터베이스에 저장된 데이터를 조작하는 것을 포함합니다.
- 다양한 데이터베이스에 대해 쿼리 쿼리를 다양한 데이터베이스 관리 시스템 또는 언어 에 대해 쿼리를 생성하도록 요청할 수 있습니다.
- 다음으로, 다음 쿼리를 만들어서 세금이 210-250 사이인 모든 행을 찾는 쿼리를 만들려고 합니다, 에 해당하는 모든 행을 찾는 쿼리를 생성하려고 합니다 SELECT * FROM Boston_house_prices 여기서 세금이 210보다 크거나 같고 세금이 250 이하인 경우.
- 돌아오는 응답은 로 돌아와서 SQL 문을 사용하여 하위 테이블을 만드는 방법을 알려줍니다 을 만드는 방법을 알려줍니다, SQL select "From Boston_house_prices 여기서 CHAS = 1, RAD = 4".
- 이 동영상에서는 다음과 같은 내용을 배웠습니다 특정 데이터에 대한 쿼리 가능 열 이름과 같은 주어진 데이터 집합에서 특정 데이터를 쿼리할 수 있다는 것을 배웠습니다, 행 수, 평균 연령 등 특정 데이터를 쿼리할 수 있다는 것을 배웠습니다.

### 한국어 Transcript

[음악] 데이터베이스 쿼리를 위한 제너레이티브 AI에 오신 것을 환영합니다. 이 동영상을 보고 나면 어떻게 빠르고 쉽게 인사이트를 추출할 수 있는 빠르고 쉽게 인사이트를 추출하는 방법을 시연할 수 있습니다, 생성 AI 도구를 사용하여 자연어 쿼리를 이해하고 자연어 쿼리를 이해하고 자연어 쿼리를 SQL 명령으로 변환하는 방법을 시연할 수 있습니다. 데이터베이스 쿼리에는 데이터베이스에 저장된 데이터를 검색하거나 또는 데이터베이스에 저장된 데이터를 조작하는 것을 포함합니다. 데이터베이스는 조직화된 데이터의 집합을 의미하며 쿼리는 이 데이터 모음과 상호 작용하는 주요 수단 이 컬렉션과 상호 작용하고 데이터베이스에서 정보를 추출하는 주요 수단을 말합니다. 구조화된 쿼리 언어 또는 SQL은 가장 일반적이고 표준화된 쿼리 언어 이며 관계형 데이터베이스와 상호 작용하기 위한 가장 일반적이고 표준화된 쿼리 언어입니다.

SQL 쿼리는 검색할 데이터를 지정하는 명령어 검색할 데이터를 지정하고 적용할 조건, 그리고 데이터를 표시할 순서를 지정하는 명령으로 구성됩니다. 제너레이티브 AI로 인해 데이터베이스와 상호 작용하는 방식을 변화시켰습니다. 사용자가 자연어로 데이터베이스를 쿼리할 수 있게 함으로써 자연어로 데이터베이스를 쿼리할 수 있게 함으로써, 제너레이티브 AI 사람들이 더 쉽게 데이터에 더 쉽게 액세스하고 이해할 수 있습니다. 이러한 능력은 다양한 산업 분야에 금융, 의료, 교육 등 다양한 산업에 큰 영향을 미칠 수 있습니다. 다음으로, 방대한 데이터 집합에서 신속하게 신속하게 인사이트를 추출하는 방법을 경험해 보세요.

전통적으로 데이터 전문가들은 sQL 쿼리를 작성하는 데 복잡한 데이터베이스 구조를 탐색하는 데 많은 시간을 할애했습니다. 이 데모에서는 AI를 통해 SQL을 사용합니다. 자연어 쿼리를 이해하도록 설계된 자연어 쿼리를 이해하고 sQL 명령으로 변환하도록 설계된 생성형 AI 모델입니다. 이 도구를 위한 첫 번째 데이터베이스를 설정하겠습니다. 먼저, 보스턴의 주택 가격 데이터 집합을 업로드합니다, 이름을 지정하고 저장합니다.

이제 데이터 쿼리를 시작할 수 있습니다. 다양한 데이터베이스에 대해 쿼리 쿼리를 다양한 데이터베이스 관리 시스템 또는 언어 에 대해 쿼리를 생성하도록 요청할 수 있습니다. 이 경우 요청은 SQL 쿼리에 대한 것입니다. 데이터 세트를 선택하고 첫 번째 프롬프트를 입력하면 됩니다, 열 이름을 입력하고 실행하면 됩니다. 몇 초 안에 쿼리가 생성됩니다, 그리고 애플리케이션에서 쿼리를 복사하여 사용할 수 있습니다.

이제 쿼리를 생성해 보겠습니다 쿼리를 생성하여 데이터 집합의 행 수를 파악해 보겠습니다. 다시 새 쿼리를 선택합니다, 쿼리할 데이터 집합을 선택합니다, 쿼리 프롬프트를 입력합니다. 응답은 데이터베이스의 행 수를 검색하려면 데이터베이스의 행 수입니다, 다음 SQL 쿼리를 사용할 수 있습니다. SELECT COUNT(*) FROM Boston_house_prices. 이제 데이터베이스의 평균 연령을 쿼리하는 방법을 를 쿼리하는 방법을 알아보겠습니다.

응답은 쿼리를 사용할 수 있음을 알려줍니다, sELECT 평균 연령 FROM Boston_house_prices. 다음으로, 다음 쿼리를 만들어서 세금이 210-250 사이인 모든 행을 찾는 쿼리를 만들려고 합니다, 에 해당하는 모든 행을 찾는 쿼리를 생성하려고 합니다 SELECT * FROM Boston_house_prices 여기서 세금이 210보다 크거나 같고 세금이 250 이하인 경우. 다음으로, ZN 열에서 zN 열의 0 값 를 상수 값 5로 바꾸는 방법을 알고 싶습니다. 생성된 응답은 다음과 같습니다 update "Boston_house_prices", "ZN = 5 where ZN = 0"으로 설정합니다. 다음으로 테이블을 오름차순으로 저장하는 방법을 알고 싶습니다 테이블을 오름차순으로 저장하는 방법을 알고 싶습니다.

빠른 응답은 쿼리가 다음과 같다는 것을 알려줍니다 "From Boston_house_prices 에서 MEDV 오름차순으로 정렬"이라고 답합니다. 이제 새 행을 삽입하는 쿼리를 실행해 보겠습니다. 이 쿼리 응답 은 예상과 다를 수 있습니다. 그럼에도 불구하고, 우리는 null 값을 각 필드에 대해 원하는 각 필드에 대해 원하는 실제 값으로 대체해야 합니다. 다음으로 조건 기반 쿼리를 생성하겠습니다.

다음과 같은 행을 찾고자 합니다 RAD가 5이고 연령이 50-55 사이인 행을 찾고자 합니다. 응답에 따르면 에 대한 쿼리는 다음과 같아야 합니다, "From Boston_house_prices 에서 RAD = 5이고 나이가 50~55세인 행"이라고 답합니다. 마지막으로, 우리는 어떻게 하위 테이블을 만드는 방법을 알고 싶습니다 CHAS가 1이고 RAD가 4인 하위 테이블을 만드는 방법을 알고 싶습니다. 돌아오는 응답은 로 돌아와서 SQL 문을 사용하여 하위 테이블을 만드는 방법을 알려줍니다 을 만드는 방법을 알려줍니다, SQL select "From Boston_house_prices 여기서 CHAS = 1, RAD = 4". 데이터베이스 쿼리는 데이터 작업의 필수적인 부분입니다.

SQL 쿼리를 작성하는 방법을 이해하면 데이터를 효과적으로 검색하고 데이터를 조작하여 가치 있는 인사이트를 얻고 정보에 입각한 의사 결정을 내릴 수 있습니다. 제너레이티브 AI는 쿼리 생성을 통해 쿼리 생성에서 간단한 자연어 처리 인터페이스를 통해 시간과 노력을 절약할 수 있습니다. 이 동영상에서는 다음과 같은 내용을 배웠습니다 특정 데이터에 대한 쿼리 가능 열 이름과 같은 주어진 데이터 집합에서 특정 데이터를 쿼리할 수 있다는 것을 배웠습니다, 행 수, 평균 연령 등 특정 데이터를 쿼리할 수 있다는 것을 배웠습니다. 특정 행을 찾을 수 있습니다, 열의 값을 바꾸고 오름차순으로 테이블을 정렬할 수 있습니다. 새 행을 삽입할 수 있습니다, 조건 기반 쿼리를 생성하고 하위 테이블을 만들 수 있습니다.

## 예시
- [음악] 데이터베이스 쿼리를 위한 제너레이티브 AI에 오신 것을 환영합니다.
- 이 동영상을 보고 나면 어떻게 빠르고 쉽게 인사이트를 추출할 수 있는 빠르고 쉽게 인사이트를 추출하는 방법을 시연할 수 있습니다, 생성 AI 도구를 사용하여 자연어 쿼리를 이해하고 자연어 쿼리를 이해하고 자연어 쿼리를 SQL 명령으로 변환하는 방법을 시연할 수 있습니다.
- 데이터베이스 쿼리에는 데이터베이스에 저장된 데이터를 검색하거나 또는 데이터베이스에 저장된 데이터를 조작하는 것을 포함합니다.
- 데이터베이스는 조직화된 데이터의 집합을 의미하며 쿼리는 이 데이터 모음과 상호 작용하는 주요 수단 이 컬렉션과 상호 작용하고 데이터베이스에서 정보를 추출하는 주요 수단을 말합니다.

## 요약
- 다음으로, 다음 쿼리를 만들어서 세금이 210-250 사이인 모든 행을 찾는 쿼리를 만들려고 합니다, 에 해당하는 모든 행을 찾는 쿼리를 생성하려고 합니다 SELECT * FROM Boston_house_prices 여기서 세금이 210보다 크거나 같고 세금이 250 이하인 경우.
- 돌아오는 응답은 로 돌아와서 SQL 문을 사용하여 하위 테이블을 만드는 방법을 알려줍니다 을 만드는 방법을 알려줍니다, SQL select "From Boston_house_prices 여기서 CHAS = 1, RAD = 4".
- 이 동영상에서는 다음과 같은 내용을 배웠습니다 특정 데이터에 대한 쿼리 가능 열 이름과 같은 주어진 데이터 집합에서 특정 데이터를 쿼리할 수 있다는 것을 배웠습니다, 행 수, 평균 연령 등 특정 데이터를 쿼리할 수 있다는 것을 배웠습니다.

<details>
<summary>영문 Transcript 원문</summary>

[MUSIC] Welcome to generative AI for querying databases. After watching this video, you'll be able to demonstrate how you can quickly and easily extract insights from massive datasets using generative AI, use generative AI tools to understand natural language queries, and convert natural language queries to SQL commands. Querying a database involves retrieving or manipulating data stored in a database. A database refers to an organized collection of data and queries refer to the primary means of interacting with this collection and extracting information from the database. Structured query language or SQL is the most common and standardized query language for interacting with relational databases.

SQL queries consist of commands that specify the data to be retrieved, the conditions to be applied, and the sequence in which to display the data. Generative AI has changed the way we interact with databases. By enabling users to query databases in natural language, generative AI makes it easier for people to access and understand data. This ability can profoundly impact a wide range of industries from finance to healthcare to education. Next, experience how you can quickly extract insights from massive datasets.

Traditionally, data professionals would spend hours crafting SQL queries to navigate through the intricate database structure. This demo uses SQL through AI. A generative AI model designed to understand natural language queries and convert them into SQL commands. We've logged into the platform. We'll set up our first database for this tool.

First, we upload the Boston housing price dataset that we want to query, give it a name, and save it. Now we can begin querying our data. Notice that you can ask for the query to be generated for various database management systems or for languages like SQL and Mongo DB, and others. In this case, the request will be for an SQL query. We can select the dataset and type the first prompt, what are the column names, and run it.

Within seconds, the query is generated, and we can copy and use the query in an application. Now we want to generate a query to know the count of rows in the dataset. Again, we select the new query, select the dataset to query on, and enter our query prompt. The response tells us that to retrieve the count of rows in a database, we can use the following SQL query. SELECT COUNT(*) FROM Boston_house_prices.

Now we want to determine how to query the average age in the database. The response tells us that we can use the query, select average age from Boston_house_prices. Next, we want to create a query to find all rows where taxes between 210-250, and the quick query is generated as SELECT * FROM Boston_house_prices where tax is more than or equal to 210 and tax is less than or equal to 250. That's pretty impressive. Next, we want to know how to replace zero values in the ZN column with a constant value of five.

The response generated is update "Boston_house_prices", set "ZN = 5 where ZN = 0". Next up, we want to know how to store the table in ascending order on the MEDV column. The quick response tells us that the query is select "From Boston_house_prices order by MEDV ascending". Let's try to get a query to insert new rows. Well, this query response might not be as expected.

Nevertheless, we would need to replace the null values with actual values we want for each field. Next, we'll generate a condition-based query. We want to find the rows where RAD is five and the age is between 50-55. Well, the response says that the query for this should be, select "From Boston_house_prices where RAD = 5 and age between 50 and 55". Lastly, we want to know how to create a sub-table where CHAS is one and RAD is four.

The response comes back and tells us how to create the sub-table using the SQL statement, SQL select "From Boston_house_prices where CHAS = 1 and RAD = 4". Querying databases is an essential part of working with data. By understanding how to write SQL queries, you can effectively retrieve and manipulate data to gain valuable insights and make informed decisions. Generative AI is playing a vital role in query generation through a simple natural language processing interface, which saves time and effort. In this video, you learned that you can query for specific data from a given dataset such as column names, count of rows, and average age.

You can find specific rows, replace values in a column, and sort a table in ascending order. You can insert new rows, generate a condition-based query, and create a sub-table.

</details>
