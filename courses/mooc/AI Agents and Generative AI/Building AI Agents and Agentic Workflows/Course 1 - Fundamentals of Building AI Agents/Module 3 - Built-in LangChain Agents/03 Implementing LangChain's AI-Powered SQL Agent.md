# Implementing LangChain's AI-Powered SQL Agent

> MOOC video · [원본 학습 항목](https://www.mooc.org/learn/fundamentals-of-building-ai-agents/lecture/WDMjC/implementing-langchains-ai-powered-sql-agent)

## 개요
- 이 영상을 시청하신 후에는 설정 과정을 설명하고, LangChain SQL 에이전트를 사용하여 자연어 쿼리를 실행하는 방법을 기술할 수 있게 될 것입니다.

## 내용
- 이 영상을 시청하신 후에는 설정 과정을 설명하고, LangChain SQL 에이전트를 사용하여 자연어 쿼리를 실행하는 방법을 기술할 수 있게 될 것입니다.
- LangChain SQL 에이전트를 사용하여 자연어 쿼리를 실행하는 방법을 설명할 수 있게 될 것입니다.
- 그래프는 앨범 이름, 아티스트 정보, 트랙 정보, 미디어 등의 서로 다른 앨범 이름, 아티스트 정보, 트랙 정보, 미디어 정보가 서로 어떻게 연결되고 상호작용하는지를 보여줍니다.
- 이 정보를 확인하려면 다음과 같은 SQL 명령어를 실행할 수 있습니다: USE Chinook; SELECT COUNT(*) FROM Album 이제 IBM watsonx.ai Granite 대규모 언어 모델을 로드할 차례입니다.
- 로컬 또는 보안이 적용되지 않은 환경에서 작업하는 경우, verify를 false로 설정하여 SSL verify를 false로 설정하여 SSL 다음으로, IBM watsonx를 사용하여 대규모 언어 모델을 불러옵니다.
- 연결을 설정하려면 먼저 다음을 포함한 필수 매개변수를 정의하십시오: mysql_username: MySQL 사용자 이름 mysql_password: MySQL 비밀번호 mysql_host: MySQL 서버의 IP 주소 또는 호스트 이름 mysql_port: MySQL의 포트 번호(기본값은 3306) 그리고 database_name: 생성한 데이터베이스의 이름으로, 이 예에서는 Chinook입니다.
- 코드에서 verbose를 True로 설정하면 최종 답변뿐만 아니라 LLM이 수행한 모든 작업과 해당 답에 도달하기 위해 생성한 실제 SQL 쿼리까지 포함한 전체 사고 과정을 확인할 수 있습니다.

## 예시
- 예를 들어, Chinook 데이터베이스에 앨범이 몇 개 있는지 알고 싶다고 가정해 봅시다.

## 요약
- 연결을 설정하려면 먼저 다음을 포함한 필수 매개변수를 정의하십시오: mysql_username: MySQL 사용자 이름 mysql_password: MySQL 비밀번호 mysql_host: MySQL 서버의 IP 주소 또는 호스트 이름 mysql_port: MySQL의 포트 번호(기본값은 3306) 그리고 database_name: 생성한 데이터베이스의 이름으로, 이 예에서는 Chinook입니다. 코드에서 verbose를 True로 설정하면 최종 답변뿐만 아니라 LLM이 수행한 모든 작업과 해당 답에 도달하기 위해 생성한 실제 SQL 쿼리까지 포함한 전체 사고 과정을 확인할 수 있습니다.
