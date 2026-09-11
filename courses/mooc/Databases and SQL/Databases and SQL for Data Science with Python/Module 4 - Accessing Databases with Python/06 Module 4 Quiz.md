# Module 4 Quiz

## Q1. Python에서 데이터베이스에 연결할 때 사용하는 API는?

**정답: DB API**

| 선택지 | 설명 |
|--------|------|
| **DB API** | Python 표준 데이터베이스 접근 API — 관계형 DB 연결에 사용 |
| REST API | HTTP 기반 웹 서비스 API — 데이터베이스 직접 연결용이 아님 |
| Census API | 인구 통계 데이터 조회용 공공 API |
| Watson API | IBM AI 서비스 API |

---

## Q2. Python에서 SQLite를 사용해 테이블 데이터를 조회하는 함수는?

**정답: `sqlite.cursor.execute()`**

커서 객체의 `execute()` 메서드에 SQL 쿼리를 전달하면 데이터를 조회할 수 있습니다.

| 선택지 | 설명 |
|--------|------|
| `sqlite.cursor()` | 커서 객체를 생성하는 메서드 — 조회 자체는 수행하지 않음 |
| `sqlite.connect()` | 데이터베이스 연결 객체를 생성 — 조회용이 아님 |
| **`sqlite.cursor.execute()`** | SQL 쿼리를 실행해 데이터를 조회하는 메서드 |
| `sqlite.query()` | 존재하지 않는 메서드 |

---

## Q3. DB API 사용 후 연결을 명시적으로 닫지 않아도 자동 해제된다 — 참 또는 거짓?

**정답: False (거짓)**

프로그램이 종료되더라도 DB API 연결이 자동으로 해제된다는 보장이 없습니다.  
닫지 않은 연결은 자원을 계속 점유하므로, **작업이 끝나면 반드시 `connection.close()`를 호출**해야 합니다.

---

## Q4. Python으로 관계형 데이터베이스에 접근하는 올바른 순서는?

**정답: connect → create and execute SQL statements → close connection**

```text
1. connect          — 데이터베이스에 연결
2. create and       — SQL 문 작성 및 실행 (커서 생성 → execute → fetch)
   execute SQL
3. close connection — 연결 종료
```

| 오답 | 이유 |
|------|------|
| create, execute Python statements, connect, close | 연결 전에 SQL을 실행할 수 없음 |
| create statements, connect | 연결 종료 단계가 누락됨 |
| create and execute SQL statements, connect, close | SQL 실행이 연결보다 먼저 — 순서 오류 |

---

## Q5. Line magic은 `%` 한 개로 시작하며 셀의 특정 한 줄에만 적용된다 — 참 또는 거짓?

**정답: True (참)**

Jupyter Notebook의 매직 커맨드 종류:

| 종류 | 기호 | 적용 범위 |
|------|------|-----------|
| Line magic | `%` (1개) | 해당 줄 한 줄에만 적용 |
| Cell magic | `%%` (2개) | 셀 전체에 적용 |
