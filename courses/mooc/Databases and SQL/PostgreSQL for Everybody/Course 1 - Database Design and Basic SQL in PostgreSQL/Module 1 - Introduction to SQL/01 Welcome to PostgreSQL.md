# Welcome to PostgreSQL

## 개요
- 이 강좌(PostgreSQL for Everybody)를 시작하며 왜 PostgreSQL을 선택했는지, SQL을 왜 배워야 하는지 설명하는 오리엔테이션 강의

## 내용
### 왜 SQL을 별도로 가르치는가
- 강사(Dr. Chuck)는 "모두를 위한 Python", "모두를 위한 Django", "모두를 위한 웹 애플리케이션" 등 여러 강좌에서 매번 기초 SQL을 반복해서 가르쳐야 했다.
- 이번에는 CRUD(Create, Read, Update, Delete), 인덱스(index), 조인(join), 외래 키(foreign key)까지 SQL만 깊이 다루는 강좌를 별도로 준비했다.
- 강사에게 SQL은 애플리케이션의 성능과 본질이 결정되는 가장 창의적인 부분이라고 설명한다.

### 왜 PostgreSQL인가
- 오라클(Oracle)이 MySQL을 인수하면서, 오픈소스 커뮤니티 일부가 불안을 느끼고 MySQL의 오픈소스 포크인 MariahDB(MariaDB)를 만들었다.
- 동시에 MongoDB, Cassandra 같은 NoSQL 데이터베이스가 등장하며 JSON 저장 등 새로운 요구가 생겼고, 관계형 데이터베이스 진영도 대응해야 했다.
- 오라클은 MySQL 8을 내놓으며 경쟁에 대응했지만, PostgreSQL은 견고한 오픈소스 프로젝트로 남아 대안으로 주목받기 시작했다.
- 아마존(Amazon)은 초창기 오라클 데이터베이스를 기반으로 서비스를 구축했으나, 비용 문제로 오라클 사용을 중단하고 PostgreSQL로 전환한 사례가 있다.
- 결론적으로 PostgreSQL은 무료 오픈소스이면서도 오라클급의 풍부한 기능을 갖춘 고급 SQL 데이터베이스로 소개된다.

## 예시
- (코드 예시 없음 — 오리엔테이션 성격의 강의)

## 요약
- 이 강좌는 SQL만 집중적으로 다루는 강좌이며, CRUD·인덱스·조인·외래 키가 핵심 주제다.
- PostgreSQL은 MySQL(오라클 인수 이슈)과 NoSQL(JSON 저장 필요성)에 대한 대안으로 부상한 오픈소스 관계형 데이터베이스다.
- 다음 강의부터 SQL 아키텍처와 실습 환경을 다룬다.
