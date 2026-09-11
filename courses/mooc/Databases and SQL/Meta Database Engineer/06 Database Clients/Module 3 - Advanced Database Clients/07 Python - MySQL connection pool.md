# Python / MySQL connection pool

## 개요

- MySQLConnectionPool 모듈로 연결 풀을 만들고 사용자를 배정·해제하는 실습
- 주요 속성(pool_name·pool_size·connection_id)과 메서드(get_connection·is_connected·close)

## 내용

### 모듈과 임포트

- 연결 풀은 **mysql.connector.pooling** 디렉터리의 **MySQLConnectionPool** 모듈로 관리한다:
  - `from mysql.connector.pooling import MySQLConnectionPool` — from이 모듈 위치를 지정.

### 속성과 메서드

| 구분 | 이름 | 역할 |
|---|---|---|
| 속성 | pool_name | 풀 이름 (미지정 시 자동 생성, 풀은 여러 개 가능) |
| 속성 | pool_size | 풀의 연결 수 — **기본 5, 풀당 최대 32** |
| 속성 | connection_id | 연결마다 부여되는 고유 ID |
| 메서드 | get_connection() | 연결 요청 — 가용 연결 배정, 없으면 **PoolError(pool exhausted)** |
| 메서드 | is_connected() | 연결 성립 여부의 불리언 — 에러 회피에 유용 |
| 메서드 | close() | 세션 종료를 풀에 알림 — 연결이 풀로 반환되어 재사용 |

### 실습 골격 (Little Lemon)

1. 풀 생성: pool_name="little_lemon_pool", pool_size=4, host="localhost", database, user, password를 MySQLConnectionPool에 인자로 전달
2. 사용자 리스트(users) 작성 + 정수(예약 ID)를 받는 파라미터화된 SELECT 준비
3. `for i in range(pool_size)` 루프 — 풀 크기와 무관하게 끝까지 실행
4. is_connected 검사로 연결 성공 확인 → 활성 연결마다 새 커서 인스턴스화
5. format 함수(중괄호)로 사용자·배정된 연결 ID·요청한 예약 ID를 지정 순서대로 출력
6. 파라미터화 SELECT + fetchall로 데이터 출력, else로 연결 실패 메시지
7. 세션 종료 시 close()로 연결을 풀에 반환

## 예시

```python
from mysql.connector.pooling import MySQLConnectionPool

pool = MySQLConnectionPool(
    pool_name="little_lemon_pool",
    pool_size=4,
    host="localhost",
    database="little_lemon",
    user="...", password="...")

conn = pool.get_connection()
if conn.is_connected():
    cursor = conn.cursor()
    # ... 쿼리 수행 ...
conn.close()      # 풀로 반환
```

## 요약

- MySQLConnectionPool에 pool_name·pool_size와 접속 정보를 넘겨 풀을 만든다 (기본 5, 최대 32 연결).
- get_connection으로 배정받고 is_connected로 검사하며 close로 풀에 반환한다.
- 가용 연결이 없으면 pool exhausted 에러가 나므로 풀 크기·다중 풀을 설계한다.
