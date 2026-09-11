# SQL Injections

> MOOC 영상 · [원본 강의](https://www.mooc.org/learn/application-security-for-developers-devops/lecture/gvI7l/sql-injections)

## 개요
- **SQL 인젝션(SQL Injection)**의 정의와 4가지 유형, 그리고 공격자가 실제로 WHERE 절과 UNION 연산자를 조작해 인증을 우회하는 구체적인 코드 예시를 정리.

## 내용
### SQL 인젝션이란
- 문자열 입력을 전달해 데이터베이스를 악용하는 공격 — 웹 페이지의 필드에서 사용자 입력을 요청할 때 발생할 수 있음.
- SQL 인젝션에서 공격자는 집합 연산(set operation)을 사용해 SQL 문을 수정하거나, WHERE 절을 변경해 다른 결과가 반환되도록 함.

### 4가지 흔한 SQL 인젝션 공격 유형
1. **SQL 조작(SQL Manipulation)** — 가장 흔한 유형. 집합 연산의 SQL 문을 수정하는 공격. WHERE 절이나 UNION 문을 사용하는 두 가지 흔한 형태가 있음.
2. **코드 인젝션(Code Injection)**
3. **함수 호출 인젝션(Function Call Injection)**
4. **버퍼 오버플로(Buffer Overflow)**

### SQL 조작 공격 예시 — WHERE 절 우회
- 원래 SQL 문: `SELECT * FROM users WHERE username = 'alice' AND PASSWORD = 'mypassword';`
- 공격 후: `SELECT * FROM users WHERE username = 'alice' AND PASSWORD = 'mypassword' OR 'a' = 'a';`
- `a`는 항상 `a`와 같으므로 이 조건은 항상 TRUE — 공격자가 추가한 `OR 'a' = 'a'` 절 때문에 비밀번호가 틀려도 인증이 우회됨.
- 공격자는 UNION SELECT 문을 바꿔 다른 테이블에서 데이터를 가져올 수도 있음.

### 문자열 연결(concatenation)의 위험 — Python 예시
```python
username = request.args.get("username")
password = request.args.get("password")
sql = "SELECT * FROM Users WHERE Name = '" + username + "' AND Password = '" + password + "'"
results = db.execute(sql)
```
- 정상 경로(happy path): 사용자 이름 `John Doe`, 비밀번호 `myPass`를 입력하면 다음 쿼리가 만들어짐.
  ```sql
  SELECT * FROM Users WHERE Name = "John Doe" AND Password = "myPass"
  ```
  이름이 John Doe이고 비밀번호가 myPass인 사용자만 반환되어 의도대로 동작.
- **SQL 인젝션 공격 시**: 공격자가 사용자 이름에 `" OR 1=1`, 비밀번호에 `" OR 1=1`을 입력하면 다음 쿼리가 만들어짐.
  ```sql
  SELECT * FROM Users WHERE Name = "" OR 1=1 AND Pass = "" OR 1=1
  ```
  이름과 비밀번호가 빈 값이어도 `OR`와 `1=1`이 항상 TRUE로 평가되므로, 이 SQL 문은 테이블의 모든 사용자를 반환하게 됨.
- 이처럼 사용자 입력값을 문자열 연결(+)로 그대로 이어붙여 SQL 문을 만드는 것이 얼마나 위험한지 보여주는 예시.

## 요약
- SQL 인젝션은 문자열 입력으로 데이터베이스를 악용하는 공격으로, 웹 페이지의 사용자 입력을 통해 발생할 수 있으며, 공격자는 집합 연산자나 WHERE 절·UNION 연산자를 조작해 SQL 문을 변형시키고, SQL 조작·코드 인젝션·함수 호출 인젝션·버퍼 오버플로의 4가지 유형 중 SQL 조작이 가장 흔하며, 사용자 입력을 문자열 연결로 SQL 문에 그대로 삽입하면 `OR 1=1` 같은 입력으로 인증이 우회될 수 있다.
