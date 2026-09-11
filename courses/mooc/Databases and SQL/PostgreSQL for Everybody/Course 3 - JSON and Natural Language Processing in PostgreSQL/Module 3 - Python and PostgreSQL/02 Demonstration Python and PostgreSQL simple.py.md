# Demonstration Python and PostgreSQL simple.py

## 개요
- `simple.py` 예제를 실행하며 `psycopg2`의 연결·커서·`execute`·대체 매개변수(`%s`)·`commit`·`RETURNING`을 실습하고, "커밋을 잊으면 데이터가 반영되지 않는다"는 흔한 함정을 직접 재현하는 강의

## 내용
### 연결 정보 분리와 설치 확인
- `hidden-dist.py`(샘플/배포용, 실제 값 없음)와 `hidden.py`(실제 접속 정보, 개인 파일)를 구분해 사용한다 — 민감한 접속 정보를 코드와 분리하는 관례다.
- `import psycopg2`가 실패하면 `pip3 install psycopg2` 등으로 설치한다.

### execute와 대체 매개변수(%s)
- `cur.execute("INSERT INTO pythonfun (line) VALUES (%s)", (txt,))`처럼 `%s`는 SQL 인젝션을 피하면서 값을 안전하게 대입하는 대체 매개변수다. 두 번째 인자는 반드시 튜플이어야 하며, 값이 하나뿐이어도 `(txt,)`처럼 쉼표를 붙여 튜플임을 명시해야 한다.
- `RETURNING id`를 붙인 INSERT를 실행하면, 삽입 직후 자동 생성된 SERIAL 기본 키 값을 커서에서 바로 읽어올 수 있다.

### commit을 잊으면 생기는 문제 (실제 재현)
- `execute()`로 보낸 명령은 곧바로 디스크에 반영되지 않을 수 있다 — 연결과 커서가 효율성을 위해 명령을 일종의 대기열처럼 쌓아둘 수 있기 때문이다. `conn.commit()`을 호출해야 실제로 데이터베이스에 강제로 반영(flush)된다.
- 강의 중 실제로 `INSERT` 후 `psql`에서 확인했을 때 새 레코드가 안 보이는 상황을 실연한다 — 원인은 SQL 문법 오류로 인해 `commit()` 호출 지점까지 코드가 도달하지 못했기 때문이었다. 이 경험을 통해 "왜 방금 넣은 데이터가 안 보이지?"라는 흔한 혼란의 원인이 `commit` 누락(또는 그 이전의 예외 발생)임을 강조한다.
- 실무 팁으로, 매 `execute()`마다 커밋하면 너무 느려지므로 10~50건마다 한 번씩 묶어서 커밋하는 방식을 권장한다.

## 예시
```python
cur.execute("DROP TABLE IF EXISTS pythonfun")
cur.execute("CREATE TABLE pythonfun (id SERIAL, line TEXT)")
conn.commit()

txt = "hello world"
cur.execute("INSERT INTO pythonfun (line) VALUES (%s)", (txt,))
conn.commit()

cur.execute("INSERT INTO pythonfun (line) VALUES (%s) RETURNING id", (txt,))
new_id = cur.fetchone()[0]
conn.commit()
```

## 요약
- `%s` 대체 매개변수와 튜플 인자로 안전하게 값을 삽입하며, `RETURNING`으로 생성된 기본 키를 즉시 받아올 수 있다.
- `conn.commit()`을 호출하기 전까지는 명령이 실제로 디스크에 반영되지 않을 수 있으므로, "삽입했는데 안 보인다"는 문제의 상당수는 커밋 누락(혹은 그 앞의 예외) 때문이다.
- 매 실행마다 커밋하면 느려지므로, 여러 건을 묶어 주기적으로 커밋하는 것이 실무적으로 유리하다.
