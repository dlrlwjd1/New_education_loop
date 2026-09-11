# Demonstration: SQL Inverse Index

## 개요
- `string_to_array` + `unnest` + `SELECT DISTINCT`로 실제 문서 3개에 대한 역방향 인덱스 테이블을 만들고, `JOIN`·`IN`·`ANY`로 키워드 검색을 실습하는 강의

## 내용
### 역방향 인덱스 테이블 만들기
- `docs(id SERIAL, doc TEXT)`에 세 개의 문서(각각 여러 단어 포함)를 삽입한다.
- `SELECT id, unnest(string_to_array(d.doc, ' ')) AS keyword FROM docs d;`로 각 문서를 단어 단위로 세로 확장한다(24행 생성). 여기에 `DISTINCT`를 추가해 같은 문서 내 중복 단어를 제거한다(22행으로 축소).
- 이 SELECT 결과를 그대로 `docs_gin(keyword TEXT, doc_id INTEGER)` 테이블에 `INSERT INTO ... SELECT`로 저장한다.

### 키워드로 문서 검색하기
- `SELECT DISTINCT doc FROM docs JOIN docs_gin g ON docs.id = g.doc_id WHERE g.keyword = 'umsi';`처럼, 역방향 인덱스 테이블을 통해 특정 키워드가 포함된 문서를 찾는다.
- 등호 대신 `IN`을 쓰면 여러 키워드 중 하나라도 일치하는 문서를 찾을 수 있다: `WHERE g.keyword IN ('lemon', 'neon')`.
- `string_to_array('learn to fly', ' ')`와 `ANY`를 결합하면, 검색어 문구 자체를 단어 배열로 쪼갠 뒤 그 배열의 어느 하나와 일치하는지 확인하는 방식(`IN`의 변형)도 가능하다: `WHERE g.keyword = ANY(string_to_array('learn to fly', ' '))`.
- "umsi"처럼 의미 있는 키워드를 검색하면 원하는 결과가 잘 나오지만, 뒤이어 다음 강의에서 다룰 "불용어(stop word)" 문제 — 의미 없는 단어까지 인덱싱되어 검색 정확도가 떨어지는 문제 — 를 예고한다.

## 예시
```sql
CREATE TABLE docs (id SERIAL PRIMARY KEY, doc TEXT);
-- 문서 3개 삽입

INSERT INTO docs_gin (doc_id, keyword)
SELECT DISTINCT id, unnest(string_to_array(doc, ' ')) FROM docs;

SELECT DISTINCT docs.id, doc
FROM docs
JOIN docs_gin g ON docs.id = g.doc_id
WHERE g.keyword = 'umsi';

-- 여러 키워드 중 하나
SELECT DISTINCT id FROM docs_gin WHERE keyword IN ('lemon', 'neon');

-- 검색 문구를 단어 배열로 쪼개 매칭
SELECT DISTINCT id FROM docs_gin
WHERE keyword = ANY(string_to_array('learn to fly', ' '));
```

## 요약
- `unnest(string_to_array(...))` + `DISTINCT` + `INSERT INTO ... SELECT`로 역방향 인덱스 테이블을 손쉽게 만들 수 있다.
- `JOIN`으로 역인덱스 테이블과 원본 문서 테이블을 연결해 키워드 검색을 구현하며, `IN`/`ANY`로 여러 키워드 검색도 지원할 수 있다.
- 의미 없는 단어(불용어)까지 인덱싱되는 문제는 다음 강의에서 다룬다.
