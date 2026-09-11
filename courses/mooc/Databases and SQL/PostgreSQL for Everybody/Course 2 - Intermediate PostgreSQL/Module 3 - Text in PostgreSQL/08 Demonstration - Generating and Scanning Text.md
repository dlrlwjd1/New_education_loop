# Demonstration: Generating and Scanning Text

## 개요
- `generate_series`, `random`, `CASE`를 조합해 대량의 텍스트 테스트 데이터를 생성하고, `LIKE`·`strpos`·`split_part`·`translate` 같은 텍스트 함수를 실습하는 강의

## 내용
### INSERT INTO ... SELECT로 대량 데이터 생성
- `INSERT INTO textfun (content) SELECT 'neon' || generate_series(1,5);`처럼, INSERT 문의 값 부분을 SELECT 결과로 대체하면 SELECT가 만들어내는 행 수만큼 한 번에 삽입된다 — 이때 SELECT의 결과 열 개수가 INSERT의 열 목록과 일치해야 한다.
- `CASE WHEN random() < 0.5 THEN 'neon' ELSE 'lemon' END`을 `generate_series`와 결합하면, 무작위로 두 문자열 중 하나를 고르는 행을 대량으로 생성할 수 있다. `CASE`는 SQL에 `if-then-else` 반복문이 없기 때문에 각 행마다 평가되는 조건부 표현식으로 이해해야 한다.
- 10만 건 규모로 생성한 뒤 `pg_relation_size()`로 테이블과 인덱스 크기가 데이터 양에 따라 어떻게 커지는지 확인한다.

### 텍스트 함수 실습
- `LIKE '%150%'`(중간 와일드카드), `LIKE '150%'`(접두사), `UPPER()`/`LOWER()`(대소문자 변환), 오른쪽/왼쪽 n글자 추출 함수들을 실습한다.
- `strpos(content, 'ttp')` : 문자열 내에서 특정 부분 문자열이 시작하는 위치를 찾는다(PHP의 `strpos`와 유사).
- `split_part(content, '/', 4)` : 구분자(`/`)로 문자열을 나눈 뒤 지정한 순번(4번째)의 조각을 가져온다 — 여러 언어의 `split()`과 유사하다.
- `translate(content, 'th.p/', 'TH!P_')` : 문자 단위 일대일 치환(Unix `tr` 명령과 유사). 두 번째·세 번째 인자 문자열의 길이가 같아야 하며, 각 위치의 문자가 서로 매핑된다.
- `_`(밑줄)은 정확히 한 글자와 일치하는 와일드카드로, `%`(임의 길이)와 구분해서 사용한다.
- `WHERE content IN (...)`로 여러 값 중 하나와 일치하는지 확인하는 방법도 함께 실습한다.

## 예시
```sql
CREATE TABLE textfun (content TEXT);
CREATE INDEX textfun_b ON textfun(content);

INSERT INTO textfun (content)
SELECT 'sql4e.com/' ||
  (CASE WHEN random() < 0.5 THEN 'neon' ELSE 'lemon' END) ||
  generate_series(100000, 200000);

SELECT strpos(content, 'ttp') FROM textfun LIMIT 5;
SELECT split_part(content, '/', 4) FROM textfun LIMIT 5;
SELECT translate(content, 'th.p/', 'TH!P_') FROM textfun LIMIT 5;
SELECT * FROM textfun WHERE content LIKE '15___00%';  -- 밑줄 와일드카드
```

## 요약
- `INSERT INTO ... SELECT`와 `generate_series`, `CASE`, `random()`을 조합하면 대량의 무작위 텍스트 데이터를 손쉽게 만들 수 있다.
- `strpos`, `split_part`, `translate`는 각각 위치 찾기, 구분자 기반 분할, 문자 단위 치환을 담당하는 PostgreSQL 텍스트 함수다.
- `%`(임의 길이)와 `_`(한 글자) 와일드카드를 구분해서 사용하면 `LIKE` 패턴을 더 정교하게 표현할 수 있다.
