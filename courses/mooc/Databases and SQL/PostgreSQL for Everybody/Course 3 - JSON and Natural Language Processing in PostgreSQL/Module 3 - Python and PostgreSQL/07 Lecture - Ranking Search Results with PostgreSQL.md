# Lecture: Ranking Search Results with PostgreSQL

## 개요
- 검색 결과 순위 매기기(ranking)가 WHERE 절이 아니라 SELECT/ORDER BY 단계에서 저렴하게 처리된다는 점과, PostgreSQL의 순위 함수들을 소개하는 강의

## 내용
### 순위는 WHERE 절이 아니라 SELECT/ORDER BY의 몫
- 쿼리 비용의 대부분은 WHERE 절(어떤 행을 고를지)에서 발생한다 — 인덱스가 이 부분의 비용을 줄여준다.
- 순위 계산(예: `ts_rank`)은 이미 WHERE 절로 크게 줄어든 소수의 행(예: 백만 행 중 300행)에 대해서만 수행되므로 상대적으로 비용이 저렴하다. 인덱스는 순위 계산 자체에는 크게 중요하지 않다 — 애초에 전체 레코드를 읽지 않도록 막아주는 역할만 한다.
- `ts_rank(tsvector, tsquery)`는 벡터와 쿼리가 얼마나 유사한지를 0~1 사이 값으로 계산하며, `ORDER BY ts_rank(...) DESC`로 관련도 높은 순으로 정렬한다.

### 여러 순위 함수
- `ts_rank`, `ts_rank_cd` 등 서로 다른 계산 방식의 순위 함수가 존재하며, 어느 것이 "더 나은" 함수인지에 대해서는 여러 견해와 논문이 있다고 언급된다. 필요하면 직접 순위 함수를 작성하는 것도 가능하다.

### PostgreSQL 인덱스 접근 방식(access method) 전반에 대한 감탄
- `SELECT amname FROM pg_am;`(Stack Overflow에서 가져온 예시)로 PostgreSQL이 지원하는 인덱스 접근 방식 목록(B-트리, BRIN, HASH, GIN 등)을 확인할 수 있다.
- 강사는 이렇게 다양한 인덱스 기법에 PostgreSQL 팀이 쏟은 노력에 놀라움을 표하며, 이런 인프라 덕분에 애플리케이션 개발자가 더 쉽게 작업할 수 있다는 점을 강조한다.

## 예시
```sql
SELECT id, body, ts_rank(to_tsvector('english', body), to_tsquery('english', 'personal & learning')) AS rank
FROM messages
WHERE to_tsquery('english', 'personal & learning') @@ to_tsvector('english', body)
ORDER BY rank DESC;
```

## 요약
- 순위 매기기는 이미 WHERE 절로 걸러진 소수의 행에 대해서만 계산되므로 비용이 저렴하며, 인덱스와는 별개의 관심사다.
- `ts_rank`/`ts_rank_cd`로 검색 결과를 관련도 순으로 정렬할 수 있다.
- PostgreSQL은 B-트리, BRIN, HASH, GIN 등 다양한 인덱스 접근 방식을 내장 지원한다.
