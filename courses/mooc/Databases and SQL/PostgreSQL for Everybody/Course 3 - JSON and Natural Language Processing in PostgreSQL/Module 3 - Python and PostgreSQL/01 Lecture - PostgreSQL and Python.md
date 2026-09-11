# Lecture: PostgreSQL and Python

## 개요
- `psycopg2` 라이브러리로 Python에서 PostgreSQL에 연결하고, `connection`·`cursor`·`execute`·`fetchone` 패턴을 소개하는 강의

## 내용
### psql도 결국 하나의 클라이언트일 뿐
- 지금까지 사용한 `psql`은 PostgreSQL 서버(네트워크 너머 어딘가의 IP·계정으로 로그인해 명령을 보내는 존재)에 접속하는 여러 클라이언트 중 하나에 불과하다. Python도 `psycopg2` 라이브러리를 통해 동일한 역할을 할 수 있다.
- Python을 쓰는 이유는 텍스트 처리(파일 읽기, API 통신, 파싱)와 데이터 정제를 SQL보다 훨씬 강력하게 할 수 있기 때문이다.

### 연결(connection)과 커서(cursor)
- `psycopg2.connect(host=..., dbname=..., user=..., password=...)`로 연결(connection)을 만든다 — 로그인 정보가 틀리면 실패할 수 있으며, 비밀번호는 보통 `hidden.py` 같은 별도 파일에 분리해 코드에 직접 노출하지 않는다.
- `conn.cursor()`로 커서를 얻는다 — 커서는 파일 핸들/네트워크 소켓과 비슷한 개념으로, 이 객체를 통해 `execute()`로 SQL 문자열(상수든 조합된 문자열이든, 대체 매개변수를 포함하든)을 서버에 보낸다.
- SELECT 실행 후에는 커서에서 `fetchone()`으로 한 행씩 읽어온다 — 결과가 몇 개인지 미리 알 수 없다면 반복문으로 계속 `fetchone()`을 호출해 `None`이 반환될 때까지 읽는 패턴이 일반적이다. 행은 튜플(tuple)로 반환된다.

### 실습 예고: 구텐베르크 프로젝트 텍스트 적재
- 다음 실습에서는 프로젝트 구텐베르크(Project Gutenberg)의 공개 텍스트(찰스 디킨스의 크리스마스 캐럴, PG 19337)를 Python으로 읽어 데이터베이스에 적재하고, 전체 텍스트 인덱스를 만들어 검색해보는 `loadbook.py` 예제를 다룬다고 예고한다.

## 예시
```python
import psycopg2

conn = psycopg2.connect(host=host, dbname=dbname, user=user, password=password)
cur = conn.cursor()

cur.execute("DROP TABLE IF EXISTS pythonfun")
cur.execute("CREATE TABLE pythonfun (id SERIAL, line TEXT)")

cur.execute("SELECT id, line FROM pythonfun WHERE id = 5")
row = cur.fetchone()
if row is not None:
    print(row)
```

## 요약
- `psycopg2`의 `connection`과 `cursor`는 각각 로그인 세션과 명령 송수신 채널 역할을 하며, `psql`이 하던 일을 Python 코드로 그대로 수행할 수 있게 해준다.
- `execute()`로 SQL을 보내고 `fetchone()`(또는 반복)으로 결과를 한 행씩 읽는 것이 기본 패턴이다.
- 다음 실습에서는 이 패턴을 이용해 외부 텍스트를 읽어 들여 전체 텍스트 검색 인덱스를 만드는 실전 예제로 이어진다.
