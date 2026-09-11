# Building a Natural Language Index in PostgreSQL

## 개요
- PostgreSQL 내장 자연어 처리 타입 `tsvector`/`tsquery`의 개념과, `@@` 연산자로 어간 추출·불용어 제거가 자동 반영된 검색을 수행하는 방법을 다루는 강의

## 내용
### tsvector: 문서를 벡터로 표현하기
- `to_tsvector('english', 문자열)`은 지정한 언어 사전에 따라 소문자 변환·어간 추출·불용어 제거를 자동으로 수행하고, 남은 단어들의 위치(position) 정보까지 포함한 `tsvector`(텍스트 검색 벡터) 값을 만든다.
- "벡터"라는 이름은 문서를 n차원 공간의 한 점으로 놓고 문서 간 유사도를 비교하는 정보 검색 이론에서 비롯된 것이지만, 실용적으로는 "어간·불용어 처리가 끝난 스마트 배열" 정도로 이해해도 충분하다고 언급된다.
- 위치 정보 덕분에 나중에 순위 매기기(ranking)에서 "검색어들이 서로 가까이 있을수록 더 관련성이 높다"는 판단에 활용할 수 있다.

### tsquery: 검색어를 같은 방식으로 변환하기
- `to_tsquery('english', '검색어')`는 검색어에도 동일한 언어 규칙(어간 추출·불용어 제거)을 적용해 `tsquery` 값을 만든다. 예: "teaching"을 쿼리로 넣어도 "teach"로 어간 처리된다.
- 검색어에 어간 추출 규칙을 적용하는 과정을 "conflation"이라는 전문 용어로 부른다(Module 1에서 나온 용어의 재확인).

### `@@` 연산자로 매칭
- `tsvector @@ tsquery`(또는 반대 순서)는 쿼리가 벡터와 일치하는지 참/거짓으로 반환한다. 예: 원본 문서에 "teaching"이 있어도, 쿼리로 "teach"를 검색하면 둘 다 같은 어간으로 정규화되어 매칭된다.

### GIN 인덱스와 결합
- `CREATE INDEX ... USING gin(to_tsvector('english', document));`로 tsvector 표현식 자체를 GIN 인덱스로 만든다 — 문자열 배열 방식보다 훨씬 간단한데, PostgreSQL이 tsvector의 내부 구조를 이미 잘 알고 있기 때문이다.
- WHERE 절도 `to_tsquery('english', '검색어') @@ to_tsvector('english', document)` 형태로 작성하며, 인덱스 생성 표현식과 정확히 일치해야 인덱스가 활용된다. `EXPLAIN`으로 순차 스캔이 아님을 확인하는 절차는 동일하게 유효하다.

## 예시
```sql
SELECT to_tsvector('english', 'UMSI teaches Python and SQL');
SELECT to_tsquery('english', 'teaching');  -- 'teach'로 어간 처리

CREATE INDEX gin1 ON docs USING gin(to_tsvector('english', doc));

SELECT id FROM docs
WHERE to_tsquery('english', 'learn') @@ to_tsvector('english', doc);

EXPLAIN SELECT id FROM docs
WHERE to_tsquery('english', 'learn') @@ to_tsvector('english', doc);
```

## 요약
- `to_tsvector`/`to_tsquery`는 언어를 지정해 소문자 변환·어간 추출·불용어 제거·위치 추적을 자동으로 수행해주는 PostgreSQL 내장 함수다.
- `@@` 연산자로 쿼리와 벡터를 매칭하며, 양쪽 모두 같은 언어 규칙(conflation)이 적용되어 유연한 매칭이 가능하다.
- `to_tsvector` 표현식 자체를 GIN 인덱스로 만들면, Module 1에서 손수 구현했던 불용어·어간 처리 로직 전체를 PostgreSQL이 대신 처리해준다.
