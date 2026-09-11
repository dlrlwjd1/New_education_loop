# Demonstration: Creating and Loading a Database

## 개요
- user·post·comment·favorite 4개 테이블을 만들고, `ALTER TABLE`로 스키마를 수정한 뒤, `wget`으로 받은 SQL 파일을 `\i`로 일괄 실행해 초기 데이터를 적재하는 실습 강의

## 내용
### 테이블 설계와 흔한 오타
- user, post(외래 키 `account_id`), comment(다대다 조인 테이블이지만 `content` 등 자체 데이터를 가진 형태)를 만든다.
- 강사가 슬라이드에 `TIMESTAMPZ`(오타, 올바른 이름은 `TIMESTAMPTZ`)라고 잘못 적어둔 것을 짚으며, 실제 코드에서는 반드시 정확한 타입명을 확인해야 한다고 언급한다.

### ALTER TABLE 실습
- `ALTER TABLE post ALTER COLUMN content TYPE TEXT;`로 `VARCHAR(1024)`였던 열을 텍스트로 변경 — 이미 있는 데이터도 실시간으로 변환된다.
- `ALTER TABLE favorite DROP COLUMN pop;`으로 불필요한 열 삭제, `ALTER TABLE favorite ADD COLUMN amount INTEGER;`로 열 추가를 실습한다.
- 문자열 ↔ 정수 등 타입 간 자동 변환도 시도할 수 있지만, 변환 불가능한 값이 있으면 오류가 난다는 점도 언급된다.
- `ALTER TABLE`은 데이터베이스 제품 간 이식성이 비교적 높은 편이지만, `\dt`, `\d+` 같은 psql 전용 메타 명령은 표준 SQL이 아니라 클라이언트마다(MySQL, Oracle 등) 다르다는 점을 다시 짚는다.

### wget + \i로 초기 데이터 적재
- `wget`으로 강의 자료 사이트에서 `03-Techniques-Load.sql` 파일을 내려받는다. 이 파일에는 `DELETE FROM 계정;`, `ALTER SEQUENCE ... RESTART`(일련번호 초기화, 반복 실습을 위한 것으로 실제 운영 DB에서는 하지 않는 작업), 그리고 다수의 `INSERT` 문이 들어있다.
- `\i 03-Techniques-Load.sql`로 파일 안의 SQL을 한 번에 실행해 테이블에 데이터를 채운다.

## 예시
```sql
ALTER TABLE post ALTER COLUMN content TYPE TEXT;
ALTER TABLE favorite DROP COLUMN pop;
ALTER TABLE favorite ADD COLUMN amount INTEGER;
```
```bash
wget <URL>/03-Techniques-Load.sql
```
```
\i 03-Techniques-Load.sql
```

## 요약
- `ALTER TABLE`로 열 타입 변경·삭제·추가를 실시간 데이터가 있는 상태에서도 안전하게 수행할 수 있다.
- psql 전용 메타 명령(`\dt`, `\d+` 등)은 표준 SQL이 아니라 클라이언트마다 다르다는 점에 유의해야 한다.
- 대량의 초기 데이터는 SQL 파일로 준비해 `wget` + `\i`로 내려받아 일괄 실행하는 것이 효율적이다.
