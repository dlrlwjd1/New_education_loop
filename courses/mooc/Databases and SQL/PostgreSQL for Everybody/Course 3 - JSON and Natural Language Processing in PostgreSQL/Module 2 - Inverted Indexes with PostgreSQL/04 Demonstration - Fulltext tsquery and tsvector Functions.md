# Demonstration: Fulltext tsquery and tsvector Functions

## 개요
- `to_tsvector`, `to_tsquery`, `plainto_tsquery`, `phraseto_tsquery`, `websearch_to_tsquery` 함수들을 직접 실행하며 각각의 차이를 비교하는 실습 강의

## 내용
### to_tsvector / to_tsquery 기본 동작
- `to_tsvector('english', '...')`를 몇 개의 예제 문장에 실행해, 불용어가 제거되고 어간이 추출된 결과를 확인한다.
- `to_tsquery('english', 'teaching')`과 `to_tsquery('english', 'teaches')`가 모두 같은 어간("teach")으로 변환되는 것을 확인해 어간 추출을 재확인한다. `to_tsquery('english', 'the')`처럼 순수 불용어만 넣으면 불평(오류)이 나온다는 점도 언급된다.

### 논리 연산자와 다양한 tsquery 생성 함수
- `to_tsquery`에는 `|`(OR), `&`(AND) 같은 논리 연산자를 사용할 수 있다: `to_tsquery('english', 'teach | learn')`.
- `plainto_tsquery('english', '여러 단어')`는 입력된 모든 단어를 자동으로 AND로 연결한다.
- `phraseto_tsquery('english', '구문')`는 단어들이 정확히 그 순서로 인접하게 나타나는 구문(phrase) 검색을 의미한다.
- `websearch_to_tsquery('english', '검색어')`(PostgreSQL 11+)는 Google 스타일의 검색 구문(따옴표, 마이너스 기호 등)을 지원하며, 사용자가 직접 입력한 검색어에 구문 오류가 있어도 시스템을 망가뜨리지 않고 관대하게 처리한다는 장점이 있어 실제 사용자 입력을 다룰 때 권장된다.

## 예시
```sql
SELECT to_tsvector('english', 'UMSI teaches Python and SQL');
SELECT to_tsquery('english', 'teaching');
SELECT to_tsquery('english', 'teach | learn');
SELECT plainto_tsquery('english', 'python sql');
SELECT phraseto_tsquery('english', 'python sql');
SELECT websearch_to_tsquery('english', 'python sql');  -- Postgres 11+
```

## 요약
- `to_tsquery`는 논리 연산자(`|`, `&`)를 지원하는 정밀한 쿼리 문법이지만 구문 오류에 취약하다.
- `plainto_tsquery`는 단어를 자동으로 AND 연결, `phraseto_tsquery`는 정확한 구문(어순) 매칭에 사용한다.
- `websearch_to_tsquery`는 사용자가 직접 입력하는 검색창에 적합한, Google 스타일의 관대한 파싱을 제공한다(PostgreSQL 11 이상).
