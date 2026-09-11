# Data Sources

## 개요
- 강좌: What is Data Science?
- 모듈: Data literacy for Data Science (Optional)
- 재생 시간: 8분
- [MOOC 원본 강의](https://www.mooc.org/learn/what-is-datascience/lecture/Hp4Zb/data-sources)
- 이전 비디오 중 하나에서 다루었듯이 데이터 소스가 오늘날처럼 역동적이고 다양했던 적은 없었습니다.
- 이 비디오에서는 관계형 데이터베이스, 플랫 파일 및 XML 데이터 세트 API 및 웹 서비스, 웹 스크래핑, 데이터 스트림 및 피드와 같은 몇 가지 일반적인 소스를 살펴 보겠습니다.

## 내용
### 핵심 내용
- 이전 비디오 중 하나에서 다루었듯이 데이터 소스가 오늘날처럼 역동적이고 다양했던 적은 없었습니다.
- 이 비디오에서는 관계형 데이터베이스, 플랫 파일 및 XML 데이터 세트 API 및 웹 서비스, 웹 스크래핑, 데이터 스트림 및 피드와 같은 몇 가지 일반적인 소스를 살펴 보겠습니다.
- 데이터베이스 및 데이터 웨어하우스에 저장된 데이터를 분석 소스로 사용할 수 있습니다.
- 예를 들어 소매 거래 시스템의 데이터를 사용하여 여러 지역의 판매를 분석하고 고객 관계 관리 시스템의 데이터를 사용하여 매출을 예측할 수 있습니다.
- 플랫 파일은 한 줄에 하나의 레코드 또는 행을 사용하고 각 값을 쉼표, 세미콜론 또는 탭과 같은 구분 기호로 구분하는 일반 텍스트 형식으로 데이터를 저장합니다.
- 일반적으로 데이터를 지속적으로 업데이트하는 온라인 포럼 및 뉴스 사이트에서 업데이트된 데이터를 캡처하는 데 사용됩니다.

### 한국어 Transcript

이전 비디오 중 하나에서 다루었듯이 데이터 소스가 오늘날처럼 역동적이고 다양했던 적은 없었습니다. 이 비디오에서는 관계형 데이터베이스, 플랫 파일 및 XML 데이터 세트 API 및 웹 서비스, 웹 스크래핑, 데이터 스트림 및 피드와 같은 몇 가지 일반적인 소스를 살펴 보겠습니다. 일반적으로 조직에는 일상적인 비즈니스 활동, 고객 거래, 인적 자원 활동 및 워크플로를 관리할 수 있도록 지원하는 내부 애플리케이션이 있습니다. 이러한 시스템은 SQL Server, Oracle, MySQL 및 IBM DB2와 같은 관계형 데이터베이스를 사용하여 데이터를 구조화된 방식으로 저장합니다. 데이터베이스 및 데이터 웨어하우스에 저장된 데이터를 분석 소스로 사용할 수 있습니다.

예를 들어 소매 거래 시스템의 데이터를 사용하여 여러 지역의 판매를 분석하고 고객 관계 관리 시스템의 데이터를 사용하여 매출을 예측할 수 있습니다. 조직 외부에는 공개 및 비공개로 사용할 수 있는 다른 데이터셋이 있습니다. 예를 들어, 정부 기관은 지속적으로 인구 통계 및 경제 데이터 세트를 공개합니다. 그런 다음 POS 데이터나 재무 데이터, 날씨 데이터 등의 특정 데이터를 판매하는 회사도 있습니다. 기업은 이 데이터를 사용하여 전략을 정의하고, 수요를 예측하고, 유통 또는 마케팅 프로모션과 관련된 의사 결정을 내리는 데 사용할 수 있습니다.

이러한 데이터 세트는 일반적으로 플랫 파일, 스프레드시트 파일 또는 XML 문서로 제공됩니다. 플랫 파일은 한 줄에 하나의 레코드 또는 행을 사용하고 각 값을 쉼표, 세미콜론 또는 탭과 같은 구분 기호로 구분하는 일반 텍스트 형식으로 데이터를 저장합니다. 여러 테이블을 포함하는 관계형 데이터베이스와는 달리 플랫 파일의 데이터는 단일 테이블에 매핑됩니다. 가장 일반적인 플랫 파일 형식 중 하나는 값을 쉼표로 구분하는 CSV입니다. 스프레드시트 파일은 데이터를 표 형식 (행 및 열) 으로 구성하는 특수한 유형의 플랫 파일입니다.

그러나 스프레드시트에는 여러 워크시트가 포함될 수 있으며 각 워크시트는 서로 다른 테이블에 매핑될 수 있습니다. 스프레드시트의 데이터는 일반 텍스트이지만 파일을 사용자 정의 형식으로 저장할 수 있으며 서식, 공식 등과 같은 추가 정보를 포함할 수 있습니다. XLSX 형식으로 저장하는 Microsoft Excel이 가장 일반적인 스프레드시트일 것입니다. 다른 도구로는 구글 스프레드시트, 애플 넘버, 리브레오피스 등이 있습니다. XML 파일에는 태그를 사용하여 식별되거나 마크업된 데이터 값이 들어 있습니다.

플랫 파일의 데이터는 “플랫”이거나 단일 테이블에 매핑되지만 XML 파일은 계층 구조와 같은 더 복잡한 데이터 구조를 지원할 수 있습니다. XML의 일반적인 용도로는 온라인 설문조사, 은행 거래 내역서, 기타 비정형 데이터 세트의 데이터가 있습니다. 많은 데이터 공급자와 웹 사이트는 여러 사용자 또는 응용 프로그램이 상호 작용하고 처리 또는 분석을 위해 데이터를 얻을 수 있는 API, 응용 프로그램 인터페이스 및 웹 서비스를 제공합니다. API와 웹 서비스는 일반적으로 사용자의 웹 요청 또는 애플리케이션의 네트워크 요청 형태일 수 있는 수신 요청을 수신하고 일반 텍스트, XML, HTML, JSON 또는 미디어 파일로 데이터를 반환합니다. 데이터 분석을 위한 데이터 소스로 사용되는 대표적인 몇 가지 API를 살펴보겠습니다.

Twitter 및 Facebook API를 사용하여 트윗과 게시물에서 데이터를 수집하여 의견 마이닝이나 감정 분석과 같은 작업을 수행하는 경우, 즉 정부 정책, 제품 , 서비스 또는 전반적인 고객 만족도와 같은 특정 주제에 대한 평가와 비판의 양을 요약하는 것입니다. 주식 시장 API는 거래 및 분석을 위해 주식 및 원자재 가격, 주당 순이익, 과거 가격 등의 데이터를 가져오는 데 사용됩니다. 데이터 조회 및 검증 API는 데이터 분석가가 데이터를 정리하고 준비할 뿐만 아니라 데이터를 상호 연관시키는 데 매우 유용할 수 있습니다 (예: 우편 번호 또는 우편번호가 속한 도시 또는 주 확인). API는 조직 내부 및 외부의 데이터베이스 소스에서 데이터를 가져오는 데에도 사용됩니다. 웹 스크래핑웹 스크래핑은 구조화되지 않은 소스에서 관련 데이터를 추출하는 데 사용됩니다.

화면 스크래핑, 웹 수집 및 웹 데이터 추출이라고도 하는 웹 스크래핑을 사용하면 정의된 매개 변수를 기반으로 웹 페이지에서 특정 데이터를 다운로드할 수 있습니다. 웹 스크레이퍼는 무엇보다도 웹 사이트에서 텍스트, 연락처 정보, 이미지, 비디오, 제품 항목 등을 추출 할 수 있습니다. 웹 스크래핑의 일반적인 용도로는 소매 업체, 제조업체 및 전자 상거래 웹 사이트에서 제품 세부 정보를 수집하여 가격을 비교하고, 공개 데이터 소스를 통해 판매 리드를 생성하고, 다양한 포럼 및 커뮤니티의 게시물 및 작성자로부터 데이터를 추출하고, 기계 학습 모델에 대한 교육 및 테스트 데이터 세트를 수집하는 것 등이 있습니다. 널리 사용되는 웹 스크래핑 도구로는 BeautifulSoup, Scrapy, Pandas 및 Selenium이 있습니다. 데이터 스트림은 기기, IoT 장치, 애플리케이션, 자동차, 컴퓨터 프로그램, 웹사이트 및 소셜 미디어 게시물의 GPS 데이터와 같은 소스에서 흐르는 지속적인 데이터 스트림을 집계하는 데 널리 사용되는 또 다른 소스입니다.

이 데이터에는 일반적으로 타임스탬프가 찍히고 지리적 식별을 위해 지리적 태그가 지정됩니다. 데이터 스트림과 이를 활용할 수 있는 방법으로는 금융 거래를 위한 주식 및 시장 시세 표시기, 수요 예측 및 공급망 관리를 위한 소매 거래 스트림, 위협 탐지를 위한 감시 및 비디오 피드, 감정 분석을 위한 소셜 미디어 피드, 산업 또는 농기계 모니터링을 위한 센서 데이터 피드, 웹 성능 모니터링 및 설계 개선을 위한 웹 클릭 피드, 재예약 및 일정 조정을 위한 실시간 비행 이벤트 등이 있습니다. 데이터 스트림을 처리하는 데 널리 사용되는 애플리케이션으로는 아파치 카프카, 아파치 스파크 스트리밍, 아파치 스톰 등이 있습니다. RSS (또는 Really Simple Syndication) 피드도 널리 사용되는 또 다른 데이터 소스입니다. 일반적으로 데이터를 지속적으로 업데이트하는 온라인 포럼 및 뉴스 사이트에서 업데이트된 데이터를 캡처하는 데 사용됩니다.

RSS 텍스트 파일을 업데이트된 데이터 스트림으로 변환하는 인터페이스인 피드 리더를 사용하면 업데이트가 사용자 장치로 스트리밍됩니다.

## 예시
- 예를 들어 소매 거래 시스템의 데이터를 사용하여 여러 지역의 판매를 분석하고 고객 관계 관리 시스템의 데이터를 사용하여 매출을 예측할 수 있습니다.
- 예를 들어, 정부 기관은 지속적으로 인구 통계 및 경제 데이터 세트를 공개합니다.
- 플랫 파일은 한 줄에 하나의 레코드 또는 행을 사용하고 각 값을 쉼표, 세미콜론 또는 탭과 같은 구분 기호로 구분하는 일반 텍스트 형식으로 데이터를 저장합니다.

## 요약
- 예를 들어 소매 거래 시스템의 데이터를 사용하여 여러 지역의 판매를 분석하고 고객 관계 관리 시스템의 데이터를 사용하여 매출을 예측할 수 있습니다.
- 플랫 파일은 한 줄에 하나의 레코드 또는 행을 사용하고 각 값을 쉼표, 세미콜론 또는 탭과 같은 구분 기호로 구분하는 일반 텍스트 형식으로 데이터를 저장합니다.
- 일반적으로 데이터를 지속적으로 업데이트하는 온라인 포럼 및 뉴스 사이트에서 업데이트된 데이터를 캡처하는 데 사용됩니다.

<details>
<summary>영문 Transcript 원문</summary>

As we touched upon in one of our previous videos, data sources have never been as dynamic and diverse as they are today. In this video, we will look at some common sources such as Relational Databases; Flatfiles and XML Datasets APIs and Web Services; Web Scraping; Data Streams and Feeds Typically, organizations have internal applications to support them in managing their day to day business activities, customer transactions, human resource activities, and their workflows. These systems use relational databases such as SQL Server, Oracle, MySQL, and IBM DB2, to store data in a structured way. Data stored in databases and data warehouses can be used as a source for analysis. For example, data from a retail transactions system can be used to analyze sales in different regions, and data from a customer relationship management system can be used for making sales projections.

External to the organization, there are other publicly and privately available datasets. For example, government organizations releasing demographic and economic datasets on an ongoing basis. Then there are companies that sell specific data, for example, Point-of-Sale data or Financial data, or Weather data, which businesses can use to define strategy, predict demand, and make decisions related to distribution or marketing promotions, among other things. Such data sets are typically made available as flat files, spreadsheet files, or XML documents. Flat files, store data in plain text format, with one record or row per line, and each value separated by delimiters such as commas, semi-colons, or tabs.

Data in a flat file maps to a single table, unlike relational databases that contain multiple tables. One of the most common flat-file format is CSV in which values are separated by commas. Spreadsheet files are a special type of flat files, that also organize data in a tabular format–rows and columns. But a spreadsheet can contain multiple worksheets, and each worksheet can map to a different table. Although data in spreadsheets is in plain text, the files can be stored in custom formats and include additional information such as formatting, formulas, etc.

Microsoft Excel, which stores data in . XLSX format is probably the most common spreadsheet. Others include Google sheets, Apple Numbers, and LibreOffice. XML files, contain data values that are identified or marked up using tags. While data in flat files is “flat” or maps to a single table, XML files can support more complex data structures, such as hierarchical.

Some common uses of XML include data from online surveys, bank statements, and other unstructured data sets. Many data providers and websites provide APIs, or Application Program Interfaces, and Web Services, which multiple users or applications can interact with and obtain data for processing or analysis. APIs and Web Services typically listen for incoming requests, which can be in the form of web requests from users or network requests from applications, and return data in plain text, XML, HTML, JSON, or media files. Let’s look at some popular examples of APIs being used as a data source for data analytics: The use of Twitter and Facebook APIs to source data from tweets and posts for performing tasks such as opinion mining or sentiment analysis—which is to summarize the amount of appreciation and criticism on a given subject, such as policies of a government, a product, a service, or customer satisfaction in general. Stock Market APIs used for pulling data such as share and commodity prices, earnings per share, and historical prices, for trading and analysis.

Data Lookup and Validation APIs, which can be very useful for Data Analysts for cleaning and preparing data, as well as for co-relating data—for example, to check which city or state a postal or zip code belongs to. APIs are also used for pulling data from database sources, within and external to the organization. Web ScrapingWeb scraping is used to extract relevant data from unstructured sources. Also known as screen scraping, web harvesting, and web data extraction, web scraping makes it possible to download specific data from web pages based on defined parameters. Web scrapers can, among other things, extract text, contact information, images, videos, product items, and much more from a website.

Some popular uses of web scraping include collecting product details from retailers, manufacturers, and eCommerce websites to provide price comparisons; generating sales leads through public data sources; extracting data from posts and authors on various forums and communities; and collecting training and testing datasets for machine learning models Some of the popular web scraping tools include BeautifulSoup, Scrapy, Pandas, and Selenium. Data streams are another widely used source for aggregating constant streams of data flowing from sources such as instruments, IoT devices, and applications, GPS data from cars, computer programs, websites, and social media posts. This data is generally timestamped and also geo-taggedfor geographical identification. Some of the data streams and ways in which they can be leveraged include: stock and market tickers for financial trading; retail transaction streams for predicting demand and supply chain management; surveillance and video feeds for threat detection; social media feeds for sentiment analysis;sensor data feeds for monitoring industrial or farming machinery; web click feeds for monitoring web performanceand improving design; and real-time flight events for rebooking and rescheduling. Some popular applications used to process data streams include Apache Kafka, Apache Spark Streaming, and Apache Storm.

RSS (or Really Simple Syndication) feeds, are another popular data source. These are typically used for capturing updated data from online forums and news sites where data is refreshed on an ongoing basis. Using a feed reader, which is an interface that converts RSS text files into a stream of updated data, updates are streamed to user devices.

</details>
