# Demonstration: Star Wars API 1/2

## 개요
- `swapi.py`를 실행해 Star Wars API를 실제로 크롤링하며, URL 큐 관리·중첩 리스트 순회·`ON CONFLICT DO NOTHING`·커밋 빈도 최적화를 다루는 실습 강의

## 내용
### 큐 테이블과 초기 시드
- `swapi(id SERIAL, url VARCHAR UNIQUE, status INTEGER, body JSONB, created_at, updated_at)` 테이블을 만들고, 알려진 시작 URL(영화 1, 종족 1 등)을 미리 삽입해 크롤링을 시작한다.
- `status`가 `NULL`인 행은 "아직 검색 안 됨", 200이면 "성공"을 의미한다. `SELECT COUNT(*) WHERE status IS NULL`로 남은 할 일 개수를 확인할 수 있다.

### 중첩 리스트 순회로 새 링크 발견
- 응답 JSON은 Python 딕셔너리로 파싱되며, `films`, `species`, `vehicles`, `starships`, `characters` 같은 키들이 URL 리스트를 값으로 가진다.
- 이런 키들을 순회하며 값이 리스트(list)인지 확인하는 "가드(guard) 패턴"으로 걸러낸 뒤, 리스트 안의 각 URL을 큐에 추가한다 — 리스트가 아닌 값은 조용히 건너뛴다.

### 중복 URL 방지: ON CONFLICT DO NOTHING
- `url` 열에 `UNIQUE` 제약을 걸어두고, `INSERT ... ON CONFLICT (url) DO NOTHING`으로 이미 큐에 있는 URL은 조용히 무시한다 — 이것이 같은 URL을 두 번 방문하지 않도록 보장하는 핵심 장치다.

### 재시작 가능성과 커밋 빈도
- 크롤링을 Control-C로 중단해도 이미 커밋된 데이터는 남아있어 다음 실행 시 이어서 진행된다.
- 초기 코드는 매 INSERT마다 커밋해 느렸는데, 강사는 이를 검색(fetch) 한 번당 한 번만 커밋하도록 리팩터링해 속도를 크게 개선한다 — Course 2~3에서 반복해서 강조된 "커밋 빈도와 성능"의 실전 사례다.
- 최종적으로 207개 문서를 오류 없이 로드하는 데 성공한다.

## 예시
```python
cur.execute(
    "INSERT INTO swapi (url) VALUES (%s) ON CONFLICT (url) DO NOTHING",
    (item,)
)
```

## 요약
- URL 큐 테이블 + `ON CONFLICT DO NOTHING`으로 중복 방문 없는 재시작 가능한 크롤러를 구현한다.
- 응답 JSON에서 리스트 타입의 값만 순회하는 가드 패턴으로 새로운 링크를 안전하게 추출한다.
- 매번 커밋하는 대신 검색 단위로 커밋을 묶으면 크롤링 속도가 크게 개선된다.
