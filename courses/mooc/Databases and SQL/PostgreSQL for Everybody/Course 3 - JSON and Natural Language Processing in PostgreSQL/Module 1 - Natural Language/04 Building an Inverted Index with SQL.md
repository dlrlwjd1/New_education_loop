# Building an Inverted Index with SQL

## 개요
- Google 검색의 배경 개념을 소개하며, PostgreSQL 내장 기능 없이 `string_to_array`와 `unnest`만으로 손수 역방향 인덱스(inverted index)를 만드는 원리를 설명하는 강의

## 내용
### 검색과 역방향 인덱스의 배경
- 역방향 인덱스는 웹과 Google 이전부터 존재해온 컴퓨터 과학 개념이지만, 검색 엔진의 발전과 함께 크게 발전했다. Marissa Mayer의 Google I/O 2008 발표, Matt Cutts의 글 등이 키워드·역인덱스·순위 매기기(ranking)에 대한 배경으로 언급된다.
- 이 강의에서는 먼저 PostgreSQL의 내장 텍스트 검색 기능을 쓰지 않고 직접 만들어봄으로써 "마법"의 원리를 이해한 뒤, 이후 강의에서 내장 기능으로 더 쉽게 하는 법을 배운다는 순서를 제시한다.

### 핵심 함수 두 가지
- `string_to_array(문자열, 구분자)` : Python의 `split()`과 유사하게 문자열을 구분자 기준으로 나눠 배열로 반환한다. 예: `string_to_array('hello world', ' ')` → `{hello, world}`.
- `unnest(배열)` : 배열을 세로로 확장해 각 요소를 별도의 행으로 만든다(`generate_series`가 숫자로 행을 만드는 것과 비슷한 원리) — 가로(배열)를 세로(행)로 바꾸는 기능이라 "unnest"라는 이름이 붙었다.

### 역방향 인덱스 구축 절차
1. 문서 테이블(`docs`)에 여러 텍스트 문서를 저장한다.
2. `string_to_array(document, ' ')`로 각 문서를 단어 배열로 쪼갠 뒤 `unnest`로 세로 확장해, "문서 ID – 키워드" 쌍의 행을 대량 생성한다.
3. `SELECT DISTINCT`로 같은 문서 안에서 같은 단어가 중복되는 것을 제거한다.
4. 이 결과를 `docs_gin(keyword TEXT, doc_id INTEGER)` 같은 별도 테이블에 `INSERT INTO ... SELECT`로 저장한다 — 이것이 손수 만든 역방향 인덱스다.
5. 이후 `docs_gin`에서 원하는 키워드로 검색하면 관련 문서 ID 집합을 빠르게 얻을 수 있다(다음 강의에서 실습).

## 예시
```sql
SELECT unnest(string_to_array('Hello world', ' '));  -- 두 행: Hello, world

CREATE TABLE docs (id SERIAL PRIMARY KEY, document TEXT);
CREATE TABLE docs_gin (keyword TEXT, doc_id INTEGER REFERENCES docs(id));

INSERT INTO docs_gin (doc_id, keyword)
SELECT DISTINCT id, unnest(string_to_array(document, ' '))
FROM docs;
```

## 요약
- `string_to_array` + `unnest`를 조합하면 텍스트 열을 "문서 ID – 단어" 쌍의 행 집합으로 펼칠 수 있다.
- `SELECT DISTINCT`로 중복 단어를 제거한 뒤 별도 테이블에 저장하면, 이것이 곧 손수 만든 역방향 인덱스(키워드 → 문서 매핑)가 된다.
- 이 원리를 이해한 뒤 PostgreSQL 내장 텍스트 검색 기능으로 넘어가면 그 편의성을 더 잘 체감할 수 있다.
