# A GIN-based Inverted Index with PostgreSQL

## 개요
- 손수 만든 역방향 인덱스를 PostgreSQL 내장 `GIN`/`GIST` 인덱스로 대체하는 방법과, 두 인덱스의 트레이드오프(삽입 비용 vs 조회 정확도)를 다루는 강의

## 내용
### GIN vs GIST
- **GIN(Generalized Inverted Index)** : 정확히 일치하는 행만 정밀하게 찾아주는 인덱스 — 필요 이상으로 데이터를 가져오지 않는다. 조회·검색 성능이 뛰어나지만 삽입·갱신 비용이 상대적으로 크다. 확신이 없으면 기본적으로 GIN을 선택한다.
- **GIST(Generalized Search Tree)** : 해싱 기반이라 인덱스가 작고 삽입·갱신이 빠르지만, 해시 충돌 때문에 실제로 필요한 것보다 더 많은 블록을 가져와서 걸러내야 할 수 있다(단, WHERE 절 처리로 걸러지므로 결과 자체가 틀리지는 않는다). 블로그처럼 삽입은 드물고 조회가 잦은 경우는 GIN, 트위터 피드처럼 삽입이 매우 잦고 조회는 상대적으로 덜 중요한 경우는 GIST가 유리하다.
- `SP-GiST`는 위도·경도, 3차원 좌표처럼 공간적(spatial) 데이터에 특화된 세 번째 역방향 인덱스 종류로 짧게 언급된다.

### 순수 문자열 배열 기반 GIN 인덱스 만들기
- `CREATE INDEX gin1 ON documents USING gin(string_to_array(document, ' ') array_ops);`처럼, 인덱스 표현식에 `string_to_array`를 그대로 사용해 배열 연산자(`array_ops`)로 인덱싱한다.
- `<@`(왼쪽 배열이 오른쪽 배열에 포함되는지) 같은 배열 연산자를 WHERE 절에 사용한다: `WHERE '{learn}'::text[] <@ string_to_array(document, ' ')`.
- 핵심 원칙: 인덱스를 만들 때 쓴 표현식과 WHERE 절의 표현식이 정확히 일치해야 인덱스가 활용된다. `EXPLAIN`으로 Sequential Scan이 아니라 Index Scan/Bitmap Heap Scan이 나오는지 반드시 확인해야 한다.

## 예시
```sql
CREATE INDEX gin1 ON docs USING gin(string_to_array(doc, ' ') array_ops);

SELECT id FROM docs
WHERE '{learn}'::text[] <@ string_to_array(doc, ' ');

EXPLAIN SELECT id FROM docs
WHERE '{learn}'::text[] <@ string_to_array(doc, ' ');
```

## 요약
- GIN은 정확한 조회에 강하지만 삽입 비용이 크고, GIST는 삽입이 빠르지만 조회 시 약간의 추가 필터링이 필요하다 — 확신이 없으면 GIN이 기본 선택이다.
- `string_to_array` + `array_ops`로 배열 기반 GIN 인덱스를 만들 수 있으며, `<@` 같은 배열 연산자로 WHERE 절을 작성한다.
- 인덱스 생성 표현식과 WHERE 절 표현식이 정확히 일치해야 하며, `EXPLAIN`으로 순차 스캔이 아닌지 반드시 확인해야 한다.
