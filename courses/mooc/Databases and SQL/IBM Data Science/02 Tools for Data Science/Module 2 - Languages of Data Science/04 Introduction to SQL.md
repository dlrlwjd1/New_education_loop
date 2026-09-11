# Introduction to SQL

## 개요
- 강좌: Tools for Data Science
- 모듈: Languages of Data Science
- 재생 시간: 4분
- [MOOC 원본 강의](https://www.mooc.org/learn/open-source-tools-for-data-science/lecture/lnpgf/introduction-to-sql)
- 이 비디오를 시청한 후에는 SQL 및 관계형 데이터베이스를 설명하고, SQL 요소를 정의하고, SQL 사용의 이점을 나열할 수 있습니다.
- 공식적으로는 “ess cue el”로 발음되지만 일부는 “sequel”이라고 부릅니다.

## 내용
### 핵심 내용
- 이 비디오를 시청한 후에는 SQL 및 관계형 데이터베이스를 설명하고, SQL 요소를 정의하고, SQL 사용의 이점을 나열할 수 있습니다.
- 공식적으로는 “ess cue el”로 발음되지만 일부는 “sequel”이라고 부릅니다.
- 즉, SQL을 배우고 하나의 데이터베이스에서 사용하면 SQL 지식을 다른 많은 데이터베이스에 쉽게 적용할 수 있습니다.
- 이제 MySQL, IBM DB2, PostgreSQL, 아파치 오픈 오피스 베이스, SQLite, 오라클, MariaDB, 마이크로소프트 SQL 서버 등 다양한 SQL 데이터베이스를 사용할 수 있습니다.
- 이 비디오에서는 SQL이 비절차적 언어라는 점에서 다른 소프트웨어 개발 언어와 다르다는 것을 배웠습니다.
- 또한 SQL을 배우고 하나의 데이터베이스와 함께 사용하면 SQL 지식을 다른 많은 데이터베이스에 쉽게 적용할 수 있습니다.

### 한국어 Transcript

“SQL 소개”에 오신 것을 환영합니다. 이 비디오를 시청한 후에는 SQL 및 관계형 데이터베이스를 설명하고, SQL 요소를 정의하고, SQL 사용의 이점을 나열할 수 있습니다. SQL은 다른 언어와 약간 다릅니다. 공식적으로는 “ess cue el”로 발음되지만 일부는 “sequel”이라고 부릅니다. 이 약어는 “Structured Query Language”의 약자이지만 SQL은 비절차적 언어이기 때문에 많은 사람들이 SQL을 다른 소프트웨어 개발 언어와 다르게 여깁니다.

범위는 데이터 쿼리 및 관리로 제한됩니다. 이 언어는 “데이터 과학” 언어는 아니지만 간단하고 강력하기 때문에 데이터 과학자들이 자주 사용합니다. SQL에 대한 몇 가지 다른 사실은 SQL이 파이썬과 R보다 20년 정도 더 오래되었다는 것입니다. 1974년에 처음 등장했고 IBM에서 개발되었습니다! 이 언어는 엔티티와 변수 간의 관계를 통합하는 데이터인 구조화된 데이터를 처리하는 데 유용합니다.

SQL은 관계형 데이터베이스의 데이터를 관리하기 위해 설계되었습니다. 여기에서 관계형 데이터베이스의 일반적인 구조를 보여주는 다이어그램을 볼 수 있습니다. 관계형 데이터베이스는 데이터셋과 Excel 스프레드시트와 같은 2차원 테이블 모음으로 구성됩니다. 그런 다음 각 테이블은 고정된 수의 열과 가능한 수의 행으로 구성됩니다. 그러나 SQL은 원래 관계형 데이터베이스와 함께 사용하도록 개발되었지만 널리 보급되고 사용이 간편하기 때문에 많은 NoSQL 및 빅데이터 리포지토리를 위한 SQL 인터페이스도 개발되었습니다.

SQL 언어는 절, 표현식, 술어, 쿼리, 명령문 등 여러 언어 요소로 세분됩니다. 그렇다면 SQL이 좋은 이유는 무엇일까요? SQL을 알면 비즈니스 및 데이터 분석가와 같은 데이터 과학 분야의 다양한 직업을 얻는 데 도움이 됩니다. 이 지식은 데이터 엔지니어링에서도 필수입니다. SQL로 작업을 수행할 경우 데이터를 별도로 복사할 필요 없이 데이터에 직접 액세스할 수 있으므로 워크플로우 실행 속도가 상당히 빨라질 수 있습니다.

SQL은 사용자와 데이터베이스 사이에서 인터프리터처럼 작동합니다. SQL은 미국 국립표준협회 (ANSI) 표준입니다. 즉, SQL을 배우고 하나의 데이터베이스에서 사용하면 SQL 지식을 다른 많은 데이터베이스에 쉽게 적용할 수 있습니다. 이제 MySQL, IBM DB2, PostgreSQL, 아파치 오픈 오피스 베이스, SQLite, 오라클, MariaDB, 마이크로소프트 SQL 서버 등 다양한 SQL 데이터베이스를 사용할 수 있습니다. 작성하는 SQL 구문은 사용 중인 관계형 데이터베이스 관리 시스템에 따라 달라질 수 있습니다.

SQL을 배우려면 특정 관계형 데이터베이스에 집중한 다음 해당 플랫폼의 커뮤니티에 참여해야 합니다. 또한 SQL에 대한 훌륭한 입문 과정도 많이 있습니다! 이 비디오에서는 SQL이 비절차적 언어라는 점에서 다른 소프트웨어 개발 언어와 다르다는 것을 배웠습니다. SQL의 범위는 데이터 쿼리 및 관리로 제한됩니다. SQL은 관계형 데이터베이스의 데이터를 관리하도록 설계되었습니다.

SQL은 사용자와 데이터베이스 간의 인터프리터처럼 작동합니다. 또한 SQL을 배우고 하나의 데이터베이스와 함께 사용하면 SQL 지식을 다른 많은 데이터베이스에 쉽게 적용할 수 있습니다.

## 예시
- 범위는 데이터 쿼리 및 관리로 제한됩니다.
- SQL 언어는 절, 표현식, 술어, 쿼리, 명령문 등 여러 언어 요소로 세분됩니다.
- SQL의 범위는 데이터 쿼리 및 관리로 제한됩니다.

## 요약
- 이제 MySQL, IBM DB2, PostgreSQL, 아파치 오픈 오피스 베이스, SQLite, 오라클, MariaDB, 마이크로소프트 SQL 서버 등 다양한 SQL 데이터베이스를 사용할 수 있습니다.
- 이 비디오에서는 SQL이 비절차적 언어라는 점에서 다른 소프트웨어 개발 언어와 다르다는 것을 배웠습니다.
- 또한 SQL을 배우고 하나의 데이터베이스와 함께 사용하면 SQL 지식을 다른 많은 데이터베이스에 쉽게 적용할 수 있습니다.

<details>
<summary>영문 Transcript 원문</summary>

Welcome to “Introduction to SQL”. After watching this video, you will be able to: explain SQL and relational databases, define the SQL elements, and list the benefits of using SQL. SQL is a bit different than the other languages. Officially it is pronounced as “ess cue el” though some call it “sequel”. And while the acronym stands for “Structured Query Language”, many people consider SQL different from other software development languages because it is a non-procedural language.

Its scope is limited to querying and managing data. While it is not a “Data Science” language, data scientists regularly use it because it is simple and powerful! Some other facts about SQL are that it is older than python and R by about 20 years. It first appeared in 1974 and was developed at IBM! This language is useful in handling structured data, which is the data incorporating relations among entities and variables.

SQL was designed for managing data in relational databases. Here you can see a diagram showing the general structure of a relational database. A relational database is formed by collections of two-dimensional tables, for example, Datasets and Excel Spreadsheets. Each of these tables is then formed by a fixed number of columns and any possible number of rows. However, although SQL was originally developed for use with relational databases, because of its pervasiveness and ease of use, SQL interfaces have also been developed for many NoSQL and big data repositories.

The SQL language is subdivided into several language elements, including: Clauses, Expressions, Predicates, Queries, and Statements. So, what makes SQL great? Knowing SQL will help you get many different jobs in data science, such as a business and data analyst. This knowledge is also a must in data engineering. When performing operations with SQL, the data is accessed directly, without needing to copy the data separately, which can considerably speed up workflow executions.

SQL behaves like an interpreter between you and the database. SQL is an American National Standards Institute (or ANSI) standard, which means if you learn SQL and use it with one database, you can apply your SQL knowledge to many other databases easily. Now, many different SQL databases are available, including the following: MySQL, IBM DB2, PostgreSQL, Apache Open Office Base, SQLite, Oracle, MariaDB, Microsoft SQL Server, and more. The syntax of the SQL you write may change based on the relational database management system you are using. If you want to learn SQL, you should focus on a specific relational database and then plug into the community for that specific platform.

In addition, there are many available great introductory courses on SQL! In this video, you learned that: SQL is different from other software development languages because it is a non-procedural language. SQL’s scope is limited to querying and managing data. SQL was designed for managing data in relational databases. SQL behaves like an interpreter between you and the database.

And if you learn SQL and use it with one database, you can apply your SQL knowledge to many other databases easily.

</details>
