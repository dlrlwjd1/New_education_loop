# Demonstration: Star Wars API 2/2

## 개요
- 크롤링 완료된 SWAPI 데이터에서 JSONB LIKE 검색의 한계를 확인하고, 정규식으로 URL에서 리소스 타입을 뽑아 인덱스로 가속하는 실전 최적화를 다루는 실습 강의

## 내용
### LIKE 기반 검색의 한계
- `body ->> 'url' LIKE '%director%George Lucas%'`처럼 텍스트로 변환한 뒤 LIKE로 검색하면 원하는 결과는 얻을 수 있지만 인덱스를 타지 못해 항상 순차 스캔이 발생한다.
- "조지 루카스가 감독하지 않은 영화" 같은 NOT 조건도 LIKE로는 표현할 수 있지만 여전히 순차 스캔이며, 게다가 원하는 만큼 정교하게 필터링하기도 어렵다(관계없는 리소스까지 섞여 나옴).

### URL 접두사로 리소스 타입 추출 (정규식 + JSON 병합)
- 문제 해결을 위해 `substring(url FROM 'https://swapi.co/api/([a-z]+)')`로 URL에서 리소스 타입(films, species 등)을 정규식으로 추출한다.
- 추출한 타입 문자열을 `'{"type": "' || 타입 || '"}'`처럼 새 JSON 조각으로 만든 뒤 `::jsonb`로 캐스팅하고, `body || 새JSON조각`(연결 연산자)으로 기존 JSONB에 `type` 키를 병합해 전체 행에 `UPDATE`를 적용한다.

### jsonb_path_ops GIN 인덱스로 가속
- `CREATE INDEX swapi_gin ON swapi USING gin(body jsonb_path_ops);`로 인덱스를 만든 뒤, `body @> '{"type": "films"}'` 같은 포함 조건으로 리소스 타입을 필터링하면 인덱스가 활용된다.
- "타입이 films이면서 감독이 조지 루카스가 아닌" 복합 조건(`body @> '{"type":"films"}' AND NOT body @> '{"director":"George Lucas"}'`)에서 괄호 위치를 여러 번 시행착오 끝에 바로잡아, 최종적으로 `EXPLAIN`에서 Bitmap Heap Scan(인덱스 활용)이 나오는 것을 확인한다 — 조지 루카스가 감독하지 않은 스타워즈 영화 3편을 찾아낸다.
- 대량의 관계없는 채움(filler) 데이터를 섞어 넣어도 인덱스가 정확한 행만 걸러낸다는 것을 함께 확인한다.

## 예시
```sql
-- URL에서 리소스 타입 추출 후 병합
UPDATE swapi
SET body = body || jsonb_build_object('type', substring(url FROM 'https://swapi.co/api/([a-z]+)'));

CREATE INDEX swapi_gin ON swapi USING gin(body jsonb_path_ops);

-- 조지 루카스가 감독하지 않은 영화
EXPLAIN SELECT url FROM swapi
WHERE body @> '{"type":"films"}'
  AND NOT body @> '{"director":"George Lucas"}';
```

## 요약
- URL 문자열에서 정규식으로 리소스 타입을 뽑아 JSONB에 새 키로 병합해두면, `LIKE` 대신 `@>` 포함 연산자로 정확하고 빠르게 필터링할 수 있다.
- `jsonb_path_ops` GIN 인덱스는 `@>` 기반의 복합 조건(AND/NOT)에서도 순차 스캔을 피하고 Bitmap Heap Scan으로 처리되도록 해준다.
- 괄호 위치 같은 사소한 문법 실수도 실제 디버깅 과정을 통해 수정해가는 모습이 실전 SQL 작성의 현실적인 모습으로 제시된다.
