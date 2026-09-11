# Using the DBeaver Client to Run SQL Commands

## 개요
- 명령줄 psql 대신 무료 오픈소스 GUI 클라이언트인 DBeaver로 PostgreSQL에 접속해 SQL을 실행하는 방법을 보여주는 실습 강의

## 내용
### DBeaver 연결 설정
- DBeaver는 무료·오픈소스이며 PostgreSQL과 잘 호환되는 데스크톱 클라이언트다. (pgAdmin은 일부 환경에서 제대로 동작하지 않는 경우가 있다고 언급된다.)
- "연결(connection)"이라는 개념으로 데이터베이스에 접속하며, DBeaver는 PostgreSQL을 기본 지원하므로 처음 설치 시 필요한 드라이버만 추가로 설치하면 된다.
- 과제에서 제공하는 호스트명(pg.pg4e.com 등), 데이터베이스명, 사용자명, 비밀번호를 그대로 입력해 새 연결을 만든다.

### 스키마 구조 확인
- 연결 안에는 여러 데이터베이스가 있을 수 있지만 이번 실습에서는 하나만 사용한다.
- 데이터베이스를 펼치면 `public` 스키마(사용자가 실제로 테이블을 만들 공간)와, `pg_catalog`·`information_schema` 같은 PostgreSQL 내부 구성용 스키마가 보인다. 후자는 건드리지 않는다.

### SQL 스크립트 작성·실행
- 왼쪽 트리에서 대상 데이터베이스(SQL을 실행할 대상)를 선택한 뒤 "새 SQL 스크립트 만들기"를 클릭하면 SQL 편집 창이 열린다.
- `CREATE TABLE` 등 SQL 문을 입력하고 "Go(실행)" 버튼을 누르면 명령이 실행된다.
- 테이블 생성 후 트리에서 새로고침(refresh)을 해야 새로 만든 테이블이 보인다 — 자동 새로고침은 되지 않는다.
- 과제의 자동 채점기(autograder)는 실제 데이터베이스에 연결해 테이블 생성 여부 등을 확인하므로, DBeaver로 실행한 결과도 동일하게 채점 대상이 된다.
- 데이터 가져오기(import)·내보내기(export) 기능도 있지만 동작 방식이 약간 다르다는 점만 언급된다.

## 예시
```sql
CREATE TABLE pg4e_result (
    id SERIAL PRIMARY KEY,
    email VARCHAR(128)
);
```
- 위 SQL을 DBeaver의 SQL 편집 창에 입력한 뒤 "Go" 버튼으로 실행하고, 왼쪽 트리를 새로고침해 테이블 생성을 확인한다.

## 요약
- DBeaver는 psql을 대체하거나 보완할 수 있는 무료 GUI 클라이언트로, "연결" 설정만 하면 PostgreSQL에 바로 접속할 수 있다.
- `public` 스키마에서 작업하며, `pg_catalog`·`information_schema`는 내부용이므로 건드리지 않는다.
- SQL 스크립트를 작성해 실행한 뒤에는 트리를 수동으로 새로고침해야 결과가 반영된 것을 확인할 수 있다.
- 이 강좌의 대부분 과제는 psql, DBeaver 등 원하는 클라이언트로 자유롭게 수행할 수 있다.
