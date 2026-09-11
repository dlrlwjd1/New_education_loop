# Demonstration loadbook.py

## 개요
- 프로젝트 구텐베르크의 공개 텍스트(크리스마스 캐럴)를 Python으로 단락 단위로 파싱해 PostgreSQL에 적재하고, `to_tsvector`로 전체 텍스트 인덱스를 만들어 검색하는 실전 예제 강의

## 내용
### 텍스트를 단락 단위로 정리해 적재
- `wget`으로 `pg19337.txt`(구텐베르크 프로젝트의 크리스마스 캐럴)를 내려받은 뒤, `loadbook.py`가 파일을 한 줄씩 읽으며 빈 줄을 기준으로 여러 줄을 하나의 긴 문자열(단락)로 합친다 — 개행을 제거하고 줄들을 이어 붙이는 방식이다.
- 각 단락을 `INSERT INTO 테이블명 (body) VALUES (%s)`로 삽입하며, 50건마다 `commit()`, 100건마다 진행 상황을 출력하고 잠시 대기(sleep)한다 — 서버 부하를 조절하고 중간에 Control-C로 중단할 여지를 준다.
- 테이블 이름은 파일명에서 확장자를 뺀 것을 자동으로 사용한다.

### 전체 텍스트 인덱스와 검색
- `to_tsvector('english', body)`로 문장 부호·대소문자·어간을 자동 처리하는 벡터를 만들고, 이를 기반으로 GIN 인덱스를 생성한다 — 단순 공백 분할(순수 역인덱스)이라면 "Christmas,"와 "Christmas"를 다르게 취급해 검색을 놓치는 문제를 PostgreSQL이 자동으로 해결해준다.
- `SELECT id, body FROM 테이블명 WHERE to_tsquery('english', 'goose') @@ to_tsvector('english', body) LIMIT 5;`로 "goose"가 언급된 단락을 검색한다.
- `EXPLAIN`으로 확인하면 Bitmap Heap Scan(인덱스 활용)이 나오는 것을 확인하고, 순차 스캔이 아님을 재차 강조한다.
- 어간 추출 덕분에 "tiny"로 검색해도 "Tiny"(고유명사, 대문자로 시작하는 등장인물 이름)가 포함된 단락을 찾을 수 있다는 점도 확인한다 — 형태소가 "tini"로 정규화되어 매칭되는 원리를 보여준다.

## 예시
```python
cur.execute("INSERT INTO pg19337 (body) VALUES (%s)", (para,))
if count % 50 == 0:
    conn.commit()
```
```sql
CREATE INDEX pg19337_gin ON pg19337 USING gin(to_tsvector('english', body));

SELECT id, body FROM pg19337
WHERE to_tsquery('english', 'goose') @@ to_tsvector('english', body)
LIMIT 5;
```

## 요약
- Python으로 원시 텍스트를 읽어 단락 단위로 정제한 뒤, 일정 건수마다 커밋하며 데이터베이스에 적재하는 것이 대량 텍스트 적재의 실전 패턴이다.
- `to_tsvector` 기반 GIN 인덱스는 문장 부호·대소문자·어간을 자동으로 처리해, 손수 구현한 순수 역인덱스보다 훨씬 강력한 검색을 제공한다.
- `EXPLAIN`으로 인덱스가 실제로 활용되는지(Bitmap Heap Scan 등, 순차 스캔 아님) 항상 확인해야 한다.
