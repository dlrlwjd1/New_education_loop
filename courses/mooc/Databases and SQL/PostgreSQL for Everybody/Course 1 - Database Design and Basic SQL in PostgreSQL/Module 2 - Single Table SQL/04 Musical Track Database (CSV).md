# Musical Track Database (CSV)

## 개요
- CSV(쉼표로 구분된 값) 파일을 psql의 `\copy` 명령으로 PostgreSQL 테이블에 적재(load)하는 실습 강의

## 내용
### CSV 파일 준비
- PythonAnywhere의 리눅스 셸에서 `wget`(또는 `curl -o`) 명령으로 URL의 CSV 파일을 하드 드라이브에 내려받는다. 예제 데이터는 아티스트(artist), 제목(title), 앨범(album), 평점(rating), 조회수(count), 길이(length) 등 6개 열로 구성된 음악 트랙 목록(`library.csv`)이다.
- `cat`이나 `vi` 등으로 파일 내용을 열어 열 구성을 확인한 뒤, 해당 CSV 구조와 일치하는 6개 열을 가진 테이블(`track_raw`)을 `CREATE TABLE`로 미리 만들어 둔다.

### \copy 명령으로 데이터 적재
- `\copy`는 SQL 표준 명령이 아니라 psql 전용 메타 명령이다. 지정한 테이블에 CSV 파일 내용을 쉼표 기준으로 분할해 그대로 적재해준다. 다른 클라이언트에서는 별도의 가져오기(import) 기능을 사용해야 할 수 있다.
- 적재 후 `SELECT COUNT(*) FROM track_raw;`로 몇 개의 레코드가 들어갔는지 확인한다(예제에서는 296개). `FROM` 절을 빠뜨리면 문법 오류가 아니라 의도치 않은 결과(예: 1행만 반환)가 나올 수 있으므로 주의해야 한다.
- 최종적으로 `SELECT * FROM track_raw LIMIT ...;` 등으로 실제 데이터가 올바르게 들어왔는지 확인한 뒤 과제를 제출한다. 자동 채점기(autograder)는 동일한 데이터베이스에 접속해 같은 방식으로 데이터를 검증한다.

## 예시
```bash
wget -O library.csv <CSV 파일 URL>
cat library.csv          # 열 구성 확인
```
```sql
CREATE TABLE track_raw (
    title VARCHAR(128),
    artist VARCHAR(128),
    album VARCHAR(128),
    count INTEGER,
    rating INTEGER,
    len INTEGER
);
```
```
\copy track_raw FROM 'library.csv' WITH DELIMITER ',' CSV
```
```sql
SELECT COUNT(*) FROM track_raw;
```

## 요약
- CSV 파일은 `wget`/`curl`로 서버(작업 중인 리눅스 셸)로 내려받은 뒤, 열 구성과 일치하는 테이블을 미리 만들어야 한다.
- `\copy`는 psql 전용 메타 명령으로, CSV 데이터를 빠르게 테이블에 적재할 수 있다.
- `SELECT COUNT(*)`로 적재 건수를 검증하는 것이 실수를 줄이는 좋은 습관이다.
