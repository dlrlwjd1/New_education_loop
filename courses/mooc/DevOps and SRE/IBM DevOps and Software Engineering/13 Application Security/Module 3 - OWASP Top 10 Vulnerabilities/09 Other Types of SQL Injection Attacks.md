# Other Types of SQL Injection Attacks

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/application-security-for-developers-devops/lecture/Oadgy/other-types-of-sql-injection-attacks)

## 개요
- SQL 인젝션의 나머지 3가지 유형인 **코드 인젝션(Code Injection)**, **함수 호출 인젝션(Function Call Injection)**, **버퍼 오버플로(Buffer Overflow)**를 코드 예시와 함께 설명하고, SQL 인젝션을 예방하는 구체적인 방법을 정리.

## 내용
### 코드 인젝션(Code Injection)
- 다른 SQL 문 안에 새로운 SQL 문이나 데이터베이스 명령을 삽입하는 공격 — 공격자는 보통 두 문을 하나로 실행되게 함. SQL에서 세미콜론(;)은 문의 끝을 의미한다는 점이 핵심.
- 원래 문: `BEGIN ENCRYPT_PASSWORD('alice', 'mypassword'); END;`
- 공격 후: `BEGIN ENCRYPT_PASSWORD('alice', 'mypassword'); DELETE FROM users WHERE upper(username) = upper('admin'); END;` — 공격자가 PL/SQL 명령 뒤에 두 번째 SQL 문을 삽입해 데이터베이스에서 admin 사용자를 삭제. 코드 인젝션 공격으로 테이블이나 데이터베이스 전체를 삭제당할 수 있음.
- Python 예시:
  ```python
  username = request.args.get("username")
  password = request.args.get("password")
  sql = 'SELECT * FROM users WHERE Name = "' + username + '", AND password = "' + password + '"'
  results = db.execute(sql)
  ```
  - 공격자가 사용자 이름에 `""; DROP TABLE Users; --`를 입력하고 비밀번호는 아무 값이나 입력(비밀번호는 도달하지 않으므로 무의미).
  - SQL에서 이중 대시(`--`)는 주석 문자 — 나머지 쿼리를 주석 처리.
  - 결과 쿼리: `SELECT * FROM Users WHERE Name = "";` (이 문 종료) → `DROP TABLE Users;` (새 문 실행) → `--` (나머지는 주석 처리되어 무시). 세미콜론이 한 쿼리를 종료하고 다른 쿼리를 시작하므로 이 SQL은 유효하며 Users 테이블 전체를 삭제.

### 함수 호출 인젝션(Function Call Injection)
- 취약한 SQL 문에 커스텀 함수를 삽입하는 공격 — 공격자는 데이터베이스에서 원격 컴퓨터로 데이터를 보내거나, 비밀번호를 변경하거나, 민감한 데이터베이스 트랜잭션을 수행해 커스텀 함수를 손상시킬 수 있음.
- 원래 문: `SELECT TRANSLATE('user input', '012356789ABCDEFGHIJKLMNOPQRSTUVWXYZ', '0123456789') FROM dual;`
- 공격 후: `SELECT TRANSLATE('' || myappadmin.adduser('admin', 'newpass') || '', ...)` — SQL에서 이중 수직 막대(`||`)는 연결(concatenation) 문자. 공격자는 결과 자체보다 `adduser` 함수가 실행되는 것을 노림 — 사용자 입력으로 함수를 조작해 새로운 애플리케이션 사용자를 만들어냄.

### 버퍼 오버플로(Buffer Overflow)
- 프로그램이 버퍼가 저장할 수 있는 양보다 더 많은 데이터를 할당할 때 발생 — 버퍼는 데이터 전송을 위한 임시 저장 공간. 버퍼 오버플로는 시스템이나 프로그램을 충돌시키거나 악성 코드를 실행시킬 수 있음.
- 공격자는 `tz_offset`(시간대 오프셋 반환), `to_timestamp_tz`(입력 표현식을 타임스탬프로 변환), `bfilename`(시스템의 물리적 대용량 바이너리 객체 파일과 연결된 BFILE 로케이터 반환) 같은 함수에서 패치되지 않은 취약점을 이용해 버퍼 오버플로 SQL 인젝션을 수행할 수 있음 — 이 함수들 모두 취약점이 있었음. 버퍼 오버플로 취약점에 대해 데이터베이스를 패치하지 않으면 공격자가 이런 함수와 다른 함수들에 SQL 인젝션을 사용할 수 있음.

### SQL 인젝션 예방 방법
- **쿼리 매개변수(query parameter)를 플레이스홀더로 사용**해 동적인 문을 생성 — SQL 인터프리터가 실행 시 쿼리의 값을 검사.
- **클라이언트 사이드가 아닌 서버 사이드에서 검증**해 신뢰할 수 없는 데이터 입력을 식별.
- **사용자 권한을 제한**해 공격자에게 권한을 부여하지 않기 — 예: 읽기 전용 접근으로 시작.
- **동적 애플리케이션 보안 테스트(DAST)**를 수행해 새 코드를 프로덕션에 배포할 때 취약점을 식별.
- 쿼리 매개변수를 사용한 안전한 예시:
  ```python
  username = request.args.get("username")
  sql = "SELECT * FROM Users WHERE userid = ?;"
  results = db.execute(sql, username)
  ```
  - 문 안의 `?`는 값을 위한 플레이스홀더 — 변수 치환(variable substitution)을 사용하는 것. SQL 인터프리터가 각 매개변수를 검사할 때 입력을 문(statement)이 아닌 문자열로 취급 — 나쁜 데이터가 있어도 데이터베이스에 문자열로만 저장될 뿐 실행되지 않음.

## 요약
- 코드 인젝션은 세미콜론으로 문을 분리해 두 번째 악성 SQL 문(예: `DROP TABLE`)을 실행시키고, 함수 호출 인젝션은 연결 문자(`||`)를 이용해 커스텀 함수(예: `adduser`)를 몰래 실행시키며, 버퍼 오버플로는 패치되지 않은 함수의 취약점을 이용해 시스템을 충돌시키거나 악성 코드를 실행시키고, 이 모든 SQL 인젝션은 쿼리 매개변수(플레이스홀더)를 사용한 변수 치환, 서버 사이드 검증, 최소 권한 부여, DAST 수행으로 예방할 수 있다.
