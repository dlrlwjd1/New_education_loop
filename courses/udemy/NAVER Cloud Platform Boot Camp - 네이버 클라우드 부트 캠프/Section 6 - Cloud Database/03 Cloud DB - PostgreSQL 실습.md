# Cloud DB - PostgreSQL 실습

## 개요

- Cloud DB for PostgreSQL을 생성한다.
- 고가용성, Multi Zone, 암호화, 로그와 백업을 설정한다.
- pgAdmin 등의 클라이언트로 접속하고 ACG를 점검한다.

## 내용

### DB 생성

Cloud DB for PostgreSQL에서 엔진 버전과 고가용성을 선택한다. 고가용성을 켜면 두 서버가 구성되며 Multi Zone에서는 Active·Standby를 서로 다른 가용 존의 서브넷에 배치한다.

실제 서비스에서는 Private Subnet과 Private Domain을 사용하는 것이 권장된다. 강의는 외부 접속 실습을 빠르게 진행하기 위해 Public Subnet을 사용한다.

서버 타입, 스토리지 암호화, SSD 용량, DB 서비스·서버 이름, 사용자, 허용 호스트, 비밀번호, 접속 포트와 초기 DB 이름을 설정한다. DB 로그, 백업 사용 여부와 보관 기간도 지정한다.

### Public Domain과 ACG

Public Domain은 Public Subnet에 생성한 DB에서 신청할 수 있다. 외부 접속이 되지 않으면 먼저 DB용 ACG 인바운드 규칙에서 설정한 PostgreSQL 포트가 허용되어 있는지 확인한다.

운영에서는 모든 출발지를 열지 말고 관리자 또는 애플리케이션 네트워크만 허용해야 한다.

### 클라이언트 접속

PostgreSQL 전용 GUI인 pgAdmin에서 서버를 등록하거나 다른 호환 클라이언트를 사용할 수 있다.

```bash
export PGHOST="db.example"
export PGUSER="dbuser"
export PGDATABASE="db1"
psql
```

콘솔에서는 추가 데이터베이스와 사용자 생성, DB Configuration 변경, 백업 복원, 모니터링, 로그와 Query Timeline 확인이 가능하다.

## 예시

```text
Cloud DB for PostgreSQL 생성
→ HA·Multi Zone 선택
→ VPC·Subnet·사양·암호화 설정
→ User·접근 제어·백업 설정
→ 필요할 때 Public Domain 신청
→ ACG 인바운드 포트 확인
→ pgAdmin 또는 psql로 접속
```

## 요약

- PostgreSQL도 자동 Failover·백업·모니터링을 관리형 기능으로 제공한다.
- 운영 DB는 Private Subnet과 Private Domain을 우선한다.
- 외부 접속 문제는 Public Domain과 ACG 인바운드 규칙을 확인한다.
- pgAdmin이나 `psql`로 접속할 수 있다.
- 콘솔에서 DB·사용자·Configuration과 백업을 추가 관리한다.
- [원본 강의](https://www.udemy.com/course/naver-cloud-boot-camp/learn/lecture/43367210#overview)
