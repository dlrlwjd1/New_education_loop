# Demonstration: SQL Natural Language Index

## 개요
- 소문자 통일 · 불용어 테이블 · 어간 매핑 테이블을 직접 만들어, 앞서 만든 단순 역방향 인덱스를 자연어 인식 인덱스로 발전시키는 종합 실습 강의

## 내용
### 소문자 통일 적용
- `string_to_array`에 넘기기 전에 `lower(document)`로 소문자로 바꿔서 쪼개면, 이후 모든 키워드가 소문자로 통일된다.

### 불용어(stop_words) 테이블로 필터링
- `stop_words(word TEXT)` 테이블에 "is", "this", "and" 같은 무의미한 단어를 등록한다.
- 인덱스를 만드는 SELECT의 WHERE 절에 `WHERE s.keyword NOT IN (SELECT word FROM stop_words)`를 추가해, 불용어에 해당하는 행을 애초에 인덱스 테이블에 넣지 않는다 — 예제에서 22행이 18행으로 줄어드는 것을 확인한다.
- 이렇게 만들면 `docs_gin`에는 애초에 불용어가 존재하지 않으므로, "and" 같은 단어로 검색하면 결과가 없는 것이 정상 동작임을 확인한다.

### 어간(stem) 매핑 테이블과 LEFT JOIN
- `docs_stem(word TEXT, stem TEXT)`에 예를 들어 "teaching"→"teach", "teaches"→"teach" 같은 매핑을 등록한다.
- 키워드 목록에 `LEFT JOIN docs_stem s ON k.keyword = s.word`를 적용하면, 어간이 있는 단어는 어간이 붙고 없는 단어는 NULL이 붙는다 — INNER JOIN이 아니라 LEFT JOIN을 써야 어간이 없는 단어도 결과에서 누락되지 않는다.
- `CASE WHEN stem IS NOT NULL THEN stem ELSE keyword END`(또는 더 간결하게 `COALESCE(stem, keyword)`)로 "어간이 있으면 어간을, 없으면 원래 단어를" 선택해 최종 인덱싱 대상을 결정한다. `COALESCE(a, b, ...)`는 인자들 중 NULL이 아닌 첫 번째 값을 반환하는 함수다.
- 이렇게 만든 인덱스는 "teaching"과 "teach"가 모두 같은 어간(teach)으로 인덱싱되어, "teach"로 검색해도 "teaching"이 포함된 원본 문서를 찾아낼 수 있다 — 검색어를 어간으로 변환해 매칭시키는 이 과정을 전문 용어로 "conflation"이라 부른다.

## 예시
```sql
-- 소문자 통일 + 불용어 제외
INSERT INTO docs_gin (doc_id, keyword)
SELECT DISTINCT id, keyword FROM (
    SELECT id, unnest(string_to_array(lower(doc), ' ')) AS keyword FROM docs
) k
WHERE k.keyword NOT IN (SELECT word FROM stop_words);

-- 어간 매핑을 반영한 최종 인덱스
INSERT INTO docs_gin (doc_id, keyword)
SELECT id, COALESCE(stem, keyword)
FROM (
    SELECT DISTINCT id, keyword
    FROM (SELECT id, unnest(string_to_array(lower(doc), ' ')) AS keyword FROM docs) k
    WHERE k.keyword NOT IN (SELECT word FROM stop_words)
) k
LEFT JOIN docs_stem s ON k.keyword = s.word;

-- 검색 시에도 어간을 우선 사용(예시)
SELECT COALESCE(
    (SELECT stem FROM docs_stem WHERE word = 'teacher'),
    'teacher'
);
```

## 요약
- 소문자 통일은 `lower()`를 문자열 분할 전에 적용하는 것만으로 간단히 구현된다.
- 불용어 제거는 인덱스 생성 시점에 `NOT IN (SELECT ... FROM stop_words)`로 걸러내면 인덱스 자체에 불용어가 존재하지 않게 된다.
- 어간 추출은 `LEFT JOIN` + `COALESCE(stem, keyword)`로 "어간이 있으면 어간, 없으면 원래 단어"를 인덱싱하는 방식으로 구현하며, 검색어에도 동일한 어간 변환(conflation)을 적용해야 제대로 매칭된다.
