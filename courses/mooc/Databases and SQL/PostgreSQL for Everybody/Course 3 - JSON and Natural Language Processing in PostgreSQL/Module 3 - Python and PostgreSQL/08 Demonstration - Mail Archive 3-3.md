# Demonstration: Mail Archive 3/3

## 개요
- `to_tsquery`의 연산자(AND, 순서, NOT)와 `plainto_tsquery`/`phraseto_tsquery`/`websearch_to_tsquery`의 차이, 그리고 `ts_rank`로 실제 검색 결과 순위를 매기는 것을 실습하는 마무리 강의

## 내용
### to_tsquery 연산자
- `&`(AND, 두 단어 모두 필요), `<->`(순서가 있는 인접, 앞 단어 다음에 뒤 단어가 와야 함), `!`(NOT, 해당 단어가 없어야 함)를 조합해 정교한 쿼리를 만들 수 있다. 예: `personal <-> learning`은 "personal" 바로 다음에 "learning"이 나오는 경우만 찾는다.
- `to_tsquery`는 그 자체로 문법이 있는 쿼리 언어라서, 괄호나 특수문자를 잘못 쓰면 구문 오류(syntax error)가 발생할 수 있다.

### 사용자 입력에 안전한 대안 함수들
- `plainto_tsquery('english', '사용자 입력')`은 구문 오류를 내지 않고 이해 못 하는 부분은 그냥 버린다 — 사용자가 직접 입력하는 검색창에 더 안전하다.
- `phraseto_tsquery`는 입력된 단어들이 정확히 그 순서로 인접해야 하는 구문(phrase) 검색에 대응한다.
- `websearch_to_tsquery`(PostgreSQL 11+)는 Google 스타일 구문(`-단어`로 제외 등)을 지원하며, 실무에서 사용자 검색창에 가장 적합한 선택으로 소개된다.

### ts_rank로 순위 매기기
- WHERE 절로 걸러진 결과에 `ORDER BY ts_rank(tsvector, tsquery) DESC`를 적용해, 관련도가 높은 문서가 먼저 나오도록 정렬한다. 실제 실행 결과를 보면 상위로 갈수록 검색어와의 관련성이 체감상으로도 높다는 것을 확인한다.
- `ts_rank`와 `ts_rank_cd`는 서로 다른 계산 방식의 순위 함수이며, 둘 다 WHERE 절로 이미 걸러진 검색 결과 집합에 대해서만 계산을 수행한다.

## 예시
```sql
SELECT id FROM messages
WHERE to_tsquery('english', 'personal & learning') @@ to_tsvector('english', body);

SELECT id FROM messages
WHERE to_tsquery('english', 'personal <-> learning') @@ to_tsvector('english', body);

SELECT id FROM messages
WHERE plainto_tsquery('english', 'personal (learning') @@ to_tsvector('english', body);  -- 오류 없이 처리

SELECT id, ts_rank(to_tsvector('english', body), to_tsquery('english', 'personal & learning')) AS rank
FROM messages
WHERE to_tsquery('english', 'personal & learning') @@ to_tsvector('english', body)
ORDER BY rank DESC;
```

## 요약
- `to_tsquery`는 AND(`&`)·순서 인접(`<->`)·NOT(`!`) 연산자를 지원하는 정교한 쿼리 언어이지만 구문 오류에 취약하다.
- `plainto_tsquery`/`phraseto_tsquery`/`websearch_to_tsquery`는 사용자 입력을 안전하게 처리하기 위한 대안이며, 특히 `websearch_to_tsquery`가 실전 검색창에 적합하다.
- `ts_rank`로 검색 결과를 관련도 순으로 정렬할 수 있으며, 이는 WHERE 절로 걸러진 후의 저렴한 후처리 단계다.
