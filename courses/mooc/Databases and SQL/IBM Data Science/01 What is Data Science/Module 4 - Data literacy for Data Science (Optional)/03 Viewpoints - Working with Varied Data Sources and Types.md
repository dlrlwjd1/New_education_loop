# Viewpoints: Working with Varied Data Sources and Types

## 개요
- 강좌: What is Data Science?
- 모듈: Data literacy for Data Science (Optional)
- 재생 시간: 7분
- [MOOC 원본 강의](https://www.mooc.org/learn/what-is-datascience/lecture/PfszO/viewpoints-working-with-varied-data-sources-and-types)
- 이 비디오에서는 여러 데이터 전문가들이 다양한 데이터 원본과 데이터 유형을 사용해 본 경험에 대해 이야기하는 것을 들어보겠습니다.
- 따라서 데이터를 얻을 수 있는 다양한 방식에 놀라실 것입니다.

## 내용
### 핵심 내용
- 이 비디오에서는 여러 데이터 전문가들이 다양한 데이터 원본과 데이터 유형을 사용해 본 경험에 대해 이야기하는 것을 들어보겠습니다.
- 따라서 데이터를 얻을 수 있는 다양한 방식에 놀라실 것입니다.
- 그래서 저는 SQL에 많은 시간을 할애하면서 SQL의 힘을 사용하여 데이터를 한 곳에서 다른 곳으로 이동하고, 데이터를 구조화하고, 데이터와 관련된 모든 보안 세부 사항을 다루고 있습니다.
- 하지만 분명히 모든 시나리오에 적용되는 것은 아니며, 관계형 데이터베이스만 전적으로 다루더라도 한 관계형 데이터베이스에서 다른 관계형 데이터베이스로 데이터를 이동하는 경우가 많습니다.
- 예를 들어, 로그 데이터는 구조화되지 않았기 때문에 매우 까다롭고, 살펴보려는 내용에 따라 데이터를 전달하기 위한 사용자 지정 도구를 직접 작성해야 할 수도 있습니다.
- 그리고 벨 문자처럼 그렇지 않은 특수 문자는 구분할 때 사용할 수 없는 문자도 있었습니다.

### 한국어 Transcript

이 비디오에서는 여러 데이터 전문가들이 다양한 데이터 원본과 데이터 유형을 사용해 본 경험에 대해 이야기하는 것을 들어보겠습니다. 따라서 데이터를 얻을 수 있는 다양한 방식에 놀라실 것입니다. 저는 보통 관계형 데이터베이스 팬이에요. 그래서 저는 SQL에 많은 시간을 할애하면서 SQL의 힘을 사용하여 데이터를 한 곳에서 다른 곳으로 이동하고, 데이터를 구조화하고, 데이터와 관련된 모든 보안 세부 사항을 다루고 있습니다. 하지만 분명히 모든 시나리오에 적용되는 것은 아니며, 관계형 데이터베이스만 전적으로 다루더라도 한 관계형 데이터베이스에서 다른 관계형 데이터베이스로 데이터를 이동하는 경우가 많습니다.

특히 한 공급업체와 다른 공급업체에 대해 이야기할 때는 어려울 수 있습니다. 버전 관리도 방해가 되는 경향이 있습니다. 따라서 원하는 기능이 현재 버전보다 두 단계 높은 버전에 있거나 두 버전 전과 같은 방식으로 작동하지 않는 경우가 있습니다. 따라서 여러 데이터 원본으로 작업하려면 유연성이 관건입니다. 필요한 성능으로 작동하고 작동하는 함수를 찾는 것이 관건입니다.

데이터를 한 번 옮기는 것은 테라바이트 미만이면 보통 그리 어렵지 않습니다. 하지만 데이터를 일관되고 지속적으로, 그리고 성능이 좋은 방식으로 이동하다 보면 다양한 솔루션을 평가해야 할 수도 있습니다. 따라서 우리는 정말로 새로운 아이디어에 마음을 열고 우리가 가진 요구 사항을 충족하는 새로운 솔루션을 찾아야 합니다. 저는 주로 관계형 데이터베이스를 사용합니다. 유연성이 매우 뛰어나고 시간이 지나도 잘 견딥니다.

그러나 로그, 문서, XML, JSON과 같은 비정형 데이터가 발전하면서 모든 데이터 문제를 해결할 수 있는 솔루션이라는 명성은 철저한 조사를 받게 되었습니다. 소셜 미디어 애플리케이션의 IoT와 같이 데이터 집약적인 애플리케이션 대부분은 다른 곳으로 눈을 돌리기 시작했습니다. 예를 들어 구글은 2006년에 구글 빅테이블이라는 백서를 발표했습니다. 이 아이디어는 순식간에 불이 붙었습니다. 예를 들어, 카산드라와 HBase는 구글 빅테이블과 같은 아키텍처 모델에서 나왔습니다.

그리고 이 데이터베이스는 관계형 데이터베이스가 해결하지 못했던 몇 가지 문제를 해결하기 위해 널리 사용되는 데이터베이스가 되었습니다. 예를 들어, 관계형 데이터베이스는 IoT나 센서 데이터, 소셜 미디어 데이터와 같이 쓰기가 많은 애플리케이션에서 약간 어려움을 겪습니다. 쓰기가 많은 애플리케이션에서 임의 읽기 및 임의 쓰기를 수행하는 이러한 B-트리 관계형 데이터베이스를 구동하거나 전력을 공급하는 B-트리 데이터 구조는 그 특성 때문에 속도가 느려지기 때문입니다. 다양한 데이터를 다루는 것은 데이터 엔지니어의 업무 중 피할 수 없는 일입니다. CSV, JSON, XML과 같은 표준 형식으로 작업해야 하지만 전용 형식으로도 작업해야 합니다.

또한 관계형 데이터베이스, NoSQL, 빅데이터 리포지토리 등 다양한 소스에서 데이터를 가져와야 합니다. 저장된 데이터 , 스트리밍 데이터 또는 이동 중인 데이터로 작업해야 합니다. 그리고 처음부터 이렇게 다양한 유형의 데이터 원본을 모두 사용할 수 있는 기술이 없을 수도 있습니다. 하지만 진행하면서 배우고 다양한 데이터셋, 다양한 데이터 형식, 다양한 데이터 원본을 다루는 프로젝트에 필요한 기술을 익힐 수 있어야 합니다. 데이터 형식, 로그 데이터, XML 데이터, JSON 등의 경우 각각 고유한 문제가 있습니다.

예를 들어, 로그 데이터는 구조화되지 않았기 때문에 매우 까다롭고, 살펴보려는 내용에 따라 데이터를 전달하기 위한 사용자 지정 도구를 직접 작성해야 할 수도 있습니다. 반면 XML은 10년 전처럼 널리 사용되었으며, 특히 웹 애플리케이션의 SOAP 프로토콜에서는 더욱 그렇습니다. 하지만 얼마 지나지 않아 웹 개발자와 회사에서는 시작 태그와 끝 태그가 모두 있기 때문에 특히 메모리를 많이 사용한다는 사실을 알게 되었습니다. 엔딩 태그에서 벗어나 키-값 쌍처럼 보이기 때문에 리소스가 약간 절약되었습니다. 그리고 이제는 RESTful API의 일부로 널리 사용되고 있습니다.

그리고 Apache Avro와 같은 최신 버전의 데이터 형식도 데이터 저장 방식의 효율성 때문에 널리 인기를 얻고 있습니다. Db2 데이터베이스의 데이터를 SQL Server 데이터베이스로 변환하는 특별한 상황 중 하나는 어려운 일이었습니다. 가져오기와 내보내기가 발생할 것으로 예상하는 방식이 각각 조금씩 다르기 때문입니다. 데이터는 특히 까다로웠고, 이 프로젝트에서 데이터 자체에서 비롯되는 많은 과제가 바로 이 부분에서 비롯될 수 있습니다. 이 특별한 경우에는 데이터에 다양한 문자가 들어 있었습니다.

그래서 보통 구분자로 사용할 수 있는 문자를 찾게 되죠. 쉼표로 구분하는 경우가 많기 때문에 쉼표를 사용하여 필드를 구분할 수 있지만, 데이터에 쉼표가 포함된 상황도 고려해야 합니다. 데이터를 적절하게 구분하려면 어떻게 해야 할까요? 필드를 올바르게 정의하려면 어떻게 해야 할까요? 그리고 이 특별한 경우에는 테이블마다 다른 구분자를 사용해야 했습니다.

생각할 수 있는 모든 특수 문자가 테이블 중 하나에 있었기 때문입니다. 그리고 벨 문자처럼 그렇지 않은 특수 문자는 구분할 때 사용할 수 없는 문자도 있었습니다.

## 예시
- 예를 들어 구글은 2006년에 구글 빅테이블이라는 백서를 발표했습니다.
- 예를 들어, 카산드라와 HBase는 구글 빅테이블과 같은 아키텍처 모델에서 나왔습니다.
- 예를 들어, 관계형 데이터베이스는 IoT나 센서 데이터, 소셜 미디어 데이터와 같이 쓰기가 많은 애플리케이션에서 약간 어려움을 겪습니다.
- 예를 들어, 로그 데이터는 구조화되지 않았기 때문에 매우 까다롭고, 살펴보려는 내용에 따라 데이터를 전달하기 위한 사용자 지정 도구를 직접 작성해야 할 수도 있습니다.

## 요약
- 하지만 분명히 모든 시나리오에 적용되는 것은 아니며, 관계형 데이터베이스만 전적으로 다루더라도 한 관계형 데이터베이스에서 다른 관계형 데이터베이스로 데이터를 이동하는 경우가 많습니다.
- 예를 들어, 로그 데이터는 구조화되지 않았기 때문에 매우 까다롭고, 살펴보려는 내용에 따라 데이터를 전달하기 위한 사용자 지정 도구를 직접 작성해야 할 수도 있습니다.
- 그리고 벨 문자처럼 그렇지 않은 특수 문자는 구분할 때 사용할 수 없는 문자도 있었습니다.

<details>
<summary>영문 Transcript 원문</summary>

In this video, we will listen to several data professionals talk about their experience of working with very data sources and types of data. So you'd be surprised the different ways that data can come at you. I tend to be a relational database fan. And so I spend a lot of time with SQL and using the power of SQL to deal with moving data from one place to another, to deal with structuring of data, to deal with all the security details around data. But obviously that doesn't apply to every scenario and even when we're dealing entirely in relational databases we're often moving data from one relational database to another.

And especially when we're talking about one vendor to another that can be challenging. The things that also get in the way tend to be the versioning. So sometimes the feature of something that you want is in a version two levels above where you are, or it doesn't work the same way as it did two versions ago. So working with multiple data sources is about flexibility. It's about finding the function that works and works with the performance you need.

Moving data one time is usually not all that hard as long as we're sub-terabyte. But moving data consistently and continually, and in a performant way can cause cause us to evaluate a lot of different solutions. So we really need to be open to new ideas and looking for new solutions that meet the requirements that we have. Mostly I work with relational databases. They are extremely flexible and withstood the test of time.

However, with the evolution of unstructured data such as logs, documents, XML, and JSON, their reputation as a cure for all of your data problems came under intense scrutiny. And most of data intensive applications such as IoT on social media applications started to look elsewhere. For example, Google released a white paper back in 2006 called Google BigTable. That idea quickly caught fire. For example, Cassandra and HBase came out of the same architectural model as the Google BigTable.

And they became widely popular databases to solve some of the problems that relational databases failed to solve. For example, relational databases struggle a little bit with heavy write intensive applications such as IoT or sensor data, social media data because the B-tree data structures that drive, or power, these relational databases slows down due to their nature of the random reads and random writes for the heavy write applications. It's an inevitable part of a data engineer's job to work with a variety of data. You will need to work with standard formats like CSV, JSON, XML, but also you'll need to work with proprietary formats. And you will need to get data in different sources, whether it be relational databases, NoSQL or big data repositories.

You will need to work with data at rest, streaming data, or data in motion. And you might not have the skills to work with all of these different types of data sources from day one. But you need to be able to learn as you go and pick up the skills required for the project to work with different datasets, different data formats, and different data sources. When it comes to the data formats, log data, XML data, JSON, etc., each of them comes with their own challenges. For example, log data is extremely challenging because it's unstructured and you may need to write your own custom tools to pass the data depending on what you want to look at.

Whereas XML was widely popular like a decade ago, especially with the SOAP protocol of the web applications. However, soon the web developers and corporations discovered that it can be a resource intensive, especially memory, because it has both the starting and ending tags. So then JSON came into the picture. They got it off the ending tags and just looked like a key-value pairs and it saved some resources. And it is now widely used as part of the RESTful APIs.

And then even newer versions of the data format such as Apache Avro are gaining wide popularity because of the efficiency on how they store the data. One particular situation where we were converting data from a Db2 database into a SQL Server database and it was challenging because the way that each of those expect imports and exports to happen is a little bit different. The data was particularly challenging, and that's where a lot of your challenge might come from in these projects, is from the data itself. In this particular case, the data had a lot of different characters in it. So usually we're looking for a character we can use as a delimiter.

Oftentimes that's comma delimited, so we can separate our fields using commas, but we also have to think about situations where we have data that has commas in it. How do we properly separate that data? How do we properly define our fields? And in this particular case we had to use different separators for different tables, because every single special character that we could think of was in one of those tables. And the special characters that weren't were sometimes ones we couldn't use for separation, such as the Bell character.

</details>
