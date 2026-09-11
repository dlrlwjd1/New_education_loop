# Cloud DB - MySQL 실습

## 개요

- Cloud DB for MySQL 인스턴스를 생성한다.
- 고가용성·Multi Zone·백업·접근 제어를 설정한다.
- Public·Private Domain과 MySQL 클라이언트 접속을 확인한다.

## 내용

### DB 생성

Database 메뉴에서 Cloud DB for MySQL을 선택하고 엔진 버전과 서버 세대를 정한다. 고가용성을 켜면 Active·Standby 두 서버가 생성되고, Multi Zone을 사용하면 서로 다른 존에 배치할 수 있다. 추가 서버와 Multi Zone에는 비용이 발생한다.

VPC와 서브넷, 서버 타입, SSD 스토리지, DB 서비스 이름을 지정한다. 강의 실습은 기본 10GB로 시작하며 데이터 증가에 따라 스토리지가 자동 확장되는 구성을 소개한다.

### 접근과 백업

DB 사용자, 허용 호스트, 비밀번호와 접속 포트를 설정한다. MySQL 기본 포트는 `3306`이다.

테스트에서는 모든 호스트를 의미하는 `%`를 사용하지만 실제 운영에서는 애플리케이션 서버나 관리 네트워크로 접근 범위를 제한해야 한다.

DB 로그 수집, 백업 사용 여부, 최대 30일의 보관 기간과 자동·사용자 지정 백업 시간을 설정할 수 있다. Cloud Log Analytics를 사용하면 별도 요금이 발생할 수 있다.

### 접속

VPC 내부 애플리케이션은 Private Domain을 사용한다. 외부 접속이 꼭 필요할 때 DB Management에서 Public Domain을 만든다.

```bash
export MYSQL_HOST="db.example"
export MYSQL_USER="dbuser"
mysql -h "$MYSQL_HOST" -P 3306 -u "$MYSQL_USER" -p
```

GUI에서는 MySQL Workbench 같은 호환 클라이언트를 사용할 수 있다.

### 운영 메뉴

콘솔에서 모니터링, DB 로그, Query Timeline, 백업, 이벤트와 상세 정보를 확인한다. 고가용성·Multi Zone, 서버 사양, Configuration, 사용자, 엔진 버전과 서버 이름 등의 관리 기능도 제공된다.

## 예시

```text
Cloud DB for MySQL 생성
→ 엔진·HA·Multi Zone 선택
→ VPC·Subnet·사양·스토리지 설정
→ DB User와 허용 Host 설정
→ 백업·로그 설정
→ Private Domain으로 내부 접속
→ 필요할 때만 Public Domain 생성
```

## 요약

- 고가용성을 켜면 Active·Standby 서버가 구성된다.
- Multi Zone은 DB 서버를 서로 다른 가용 존에 배치한다.
- 운영 환경에서는 허용 호스트를 필요한 서버로 제한한다.
- 내부 연결은 Private Domain을 우선 사용한다.
- 모니터링·백업·로그와 Query Timeline을 콘솔에서 관리할 수 있다.
- [원본 강의](https://www.udemy.com/course/naver-cloud-boot-camp/learn/lecture/43367206#overview)

