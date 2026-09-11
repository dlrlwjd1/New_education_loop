# Course 4 — Data I/O and Preprocessing with Python and SQL

**Specialization:** [Data Analytics](../README.md)
**제공:** DeepLearning.AI
**강사:** Andrew Ng, Sean Barnes

## 개요
데이터 수집·전처리·데이터베이스 코스. 웹 스크래핑·API로 데이터를 수집하고, 텍스트·수치 전처리로 정리하며, 데이터베이스·SQL로 데이터를 저장·쿼리한다. LLM 활용이 전 모듈에 통합되어 있다.

## 모듈 구성
1. **Module 1 — Web scraping and text processing** (영상 21개) — 데이터 출처·전처리·ETL/ELT, pandas·Beautiful Soup 스크래핑, HTML, 텍스트 처리(replace·contains·split·strip)·정규 표현식·스크래핑 윤리
2. **Module 2 — APIs and numerical preprocessing** (영상 17개) — API·JSON·쿼리 파라미터·페이지네이션, API 키·환경 변수, 스케일링·비닝·정규화·이상치·데이터 품질
3. **Module 3 — Databases and SQL basics** (영상 15개) — 저장 시스템·데이터베이스·RDBMS, tidy 데이터·개체·관계·스키마·테이블 유형, SQL(SELECT·ORDER BY)·Python에서 SQL
4. **Module 4 — Advanced SQL** (영상 17개) — 필터링(WHERE·IN·LIKE·복합 조건)·CASE·NULL, 검증(COUNT·DISTINCT·GROUP BY·집계·HAVING), 조인(LEFT·INNER·OUTER)

> 각 모듈 하위 폴더에 영상 강의 정리본(`NN 주제.md`)이 들어간다. Quiz·Lab·Reading·Lecture Code/Notes·Capstone은 노트 대상에서 제외한다.

## 진행 상황
- [x] Module 1 — Web scraping and text processing (21개)
- [x] Module 2 — APIs and numerical preprocessing (17개)
- [x] Module 3 — Databases and SQL basics (15개)
- [x] Module 4 — Advanced SQL (17개)

총 영상 정리본 **70개** 완료.

## 강의 목록

<!-- course-inventory:start -->
### module 01 Web scraping and text processing

- [01 Welcome to Course 4](module%2001%20Web%20scraping%20and%20text%20processing/01%20Welcome%20to%20Course%204.md)
- [02 Module 1 Introduction](module%2001%20Web%20scraping%20and%20text%20processing/02%20Module%201%20Introduction.md)
- [03 The Many Sources of Data](module%2001%20Web%20scraping%20and%20text%20processing/03%20The%20Many%20Sources%20of%20Data.md)
- [04 Data Cleaning and Processing](module%2001%20Web%20scraping%20and%20text%20processing/04%20Data%20Cleaning%20and%20Processing.md)
- [05 ETL and ELT](module%2001%20Web%20scraping%20and%20text%20processing/05%20ETL%20and%20ELT.md)
- [06 Introduction to Web Scraping](module%2001%20Web%20scraping%20and%20text%20processing/06%20Introduction%20to%20Web%20Scraping.md)
- [07 Scraping Tables with Pandas](module%2001%20Web%20scraping%20and%20text%20processing/07%20Scraping%20Tables%20with%20Pandas.md)
- [08 String Methods Replace](module%2001%20Web%20scraping%20and%20text%20processing/08%20String%20Methods%20Replace.md)
- [09 Casting](module%2001%20Web%20scraping%20and%20text%20processing/09%20Casting.md)
- [10 Handling Missing Values](module%2001%20Web%20scraping%20and%20text%20processing/10%20Handling%20Missing%20Values.md)
- [11 String Methods Contains](module%2001%20Web%20scraping%20and%20text%20processing/11%20String%20Methods%20Contains.md)
- [12 String Methods Split and Strip](module%2001%20Web%20scraping%20and%20text%20processing/12%20String%20Methods%20Split%20and%20Strip.md)
- [13 Networking](module%2001%20Web%20scraping%20and%20text%20processing/13%20Networking.md)
- [14 Scraping Webpages with Requests](module%2001%20Web%20scraping%20and%20text%20processing/14%20Scraping%20Webpages%20with%20Requests.md)
- [15 HTML](module%2001%20Web%20scraping%20and%20text%20processing/15%20HTML.md)
- [16 Planning HTML Parsing](module%2001%20Web%20scraping%20and%20text%20processing/16%20Planning%20HTML%20Parsing.md)
- [17 Parsing HTML with Beautiful Soup](module%2001%20Web%20scraping%20and%20text%20processing/17%20Parsing%20HTML%20with%20Beautiful%20Soup.md)
- [18 DataFrame Setup](module%2001%20Web%20scraping%20and%20text%20processing/18%20DataFrame%20Setup.md)
- [19 Regular Expressions](module%2001%20Web%20scraping%20and%20text%20processing/19%20Regular%20Expressions.md)
- [20 Writing Regular Expressions with LLMs](module%2001%20Web%20scraping%20and%20text%20processing/20%20Writing%20Regular%20Expressions%20with%20LLMs.md)
- [21 The Ethics of Web Scraping](module%2001%20Web%20scraping%20and%20text%20processing/21%20The%20Ethics%20of%20Web%20Scraping.md)

### module 02 APIs and numerical preprocessing

- **01 Module 2 Introduction**
- **02 Introduction to APIs**
- **03 JSON**
- **04 API Requests and Responses**
- **05 Query Parameters**
- **06 From JSON to a DataFrame**
- **07 Pagination**
- **08 Analyzing the Combined DataFrame**
- **09 API Keys**
- **10 Using an API Key**
- **11 Environmental Variables**
- **12 Scaling**
- **13 Binning**
- **14 Normalization**
- **15 Identifying Outliers**
- **16 Handling Outliers**
- **17 Data Quality**

### module 03 Databases and SQL basics

- **01 Module 3 Introduction**
- **02 Data Storage Systems**
- **03 What is a Database**
- **04 Database Management Systems**
- **05 Tidy Data**
- **06 Entities and Attributes**
- **07 Relationships**
- **08 Data Models and Data Schemas**
- **09 Types of Tables**
- **10 Introduction to SQL**
- **11 SQL Code**
- **12 Selecting**
- **13 Ordering Results**
- **14 LLMs for Databases**
- **15 SQL in Python**

### module 04 Advanced SQL

- **01 Module 4 Introduction**
- **02 SQL vs Python**
- **03 Filtering**
- **04 Filtering Compound Conditions**
- **05 Filtering String-Based Conditions**
- **06 Conditionals CASE**
- **07 Handling Null Values**
- **08 Data Validation**
- **09 Validation Count and Distinct**
- **10 Validation Group By**
- **11 Validation Min Max Sum**
- **12 Validation Having**
- **13 Introduction to Joins**
- **14 Left Joins**
- **15 Inner Joins**
- **16 Outer Joins**
- **17 Your Next Steps**

<!-- course-inventory:end -->
