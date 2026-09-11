# Reacting to the Rise of NoSQL

## 개요
- ACID 진영이 NoSQL 붐에 대응해 JSON/JSONB 지원과 읽기 전용 복제본을 도입한 과정, 그리고 PostgreSQL을 "BASE 스타일로 사용하는" 실전 설계 원칙(GUID 키, 외래 키 제약 배제, ALTER TABLE 회피 등)을 다루는 강의

## 내용
### ACID 진영의 대응: JSON 열과 하드웨어 발전
- 2013~2014년 NoSQL이 큰 인기를 끌자, Oracle과 MySQL도 JSON 열을 추가했고, PostgreSQL은 2008~2014년에 걸쳐 점진적으로(H-Store → JSON → 2014년 JSONB) 유사 기능을 발전시켰다.
- 같은 기간 하드웨어도 발전했다 — SSD의 스캐터/게더(scatter-gather) 지원, Amazon의 고성능 대형 인스턴스 등으로 전통적 ACID 데이터베이스의 수직 확장 성능도 크게 개선되어, "NoSQL이 항상 더 빠르다"는 전제가 흔들리게 되었다.
- Amazon Redshift는 Cassandra가 아니라 PostgreSQL(8.0 기반, HSTORE·JSON·JSONB 계보)을 사용한다는 점, 그리고 Amazon 내부 인프라 상당 부분이 오픈소스(Postgres 등) 기반으로 전환되었다는 점이 언급된다.

### SQL은 죽지 않았다 — ACID와 BASE의 공존
- "SQL이 사라진다"는 예측이 틀렸던 이유는, SQL 자체는 단지 문법일 뿐 ACID를 의미하지 않기 때문이다 — `BEGIN TRANSACTION` 같은 것이 ACID 의미론이고, 단순 SELECT/INSERT/UPDATE는 ACID든 BASE든 상관없이 쓸 수 있는 구문이다.
- 결과적으로 BASE 스타일 데이터베이스도 SQL 하위 집합을 지원하게 되었고, 개발자는 필요에 따라 ACID 시맨틱과 BASE 시맨틱을 오갈 수 있게 되었다. 하나의 애플리케이션 안에서 어떤 테이블은 ACID 방식으로, 어떤 테이블은 BASE 방식으로 저장하는 하이브리드 설계도 가능해졌다.

### PostgreSQL을 NoSQL처럼 설계하는 실전 원칙
- **SERIAL 대신 GUID** : 여러 서버가 조율 없이도 고유한 키를 생성할 수 있어야 하므로, 자동 증가 정수 대신 GUID를 기본 키로 사용한다.
- **열은 최소화(id + JSONB)** : 대부분의 데이터를 JSONB 열 하나에 담고, 인덱싱이 필요한 값만 별도 열로 추출한다.
- **외래 키 제약 배제** : `REFERENCES`나 `ON DELETE CASCADE`를 걸지 않는다 — 참조 무결성을 데이터베이스에 강제시키지 않고, 필요하면 애플리케이션이 별도의 정리(cleanup) 프로세스로 처리한다.
- **정확히 하나의 행을 찾도록 쿼리·인덱스를 설계** : 문서 저장소처럼 한 행 안에 필요한 정보를 모두 담아, JOIN 없이 조회하고 필요하면 애플리케이션에서 여러 SELECT를 순차 실행한다.
- **ALTER TABLE 회피** : 스키마 변경은 트랜잭션·잠금을 유발하므로, 대신 데이터를 순회하며 애플리케이션 레벨에서 마이그레이션하는 방식을 택한다.
- **JOIN과 (COUNT 이외의) 집계 함수 지양** : 문서 저장소 방식에 맞춰 조회를 단순화한다(단, 이 조언은 강사의 직관에 근거하며 절대적 근거는 부족하다고 스스로 밝힌다).

### 결론: Postgres는 좋은 NoSQL 데이터베이스가 될 수 있다
- 관리형 클라우드(SaaS) 데이터베이스가 자체 호스팅보다 경제적으로 유리해지면서, 많은 중견 클라우드 애플리케이션이 자체 NoSQL 인프라에서 관리형 Postgres/MySQL로 이동하는 흐름이 나타났다.
- 강사는 "2012년에는 이런 말을 할 수 없었지만, 2020년 이후 PostgreSQL은 NoSQL 애플리케이션에도 좋은 선택"이라고 결론짓는다 — 단, 모든 문서/키-값 저장소 용도에 적합한 것은 아니라는 단서를 붙인다.

## 예시
```sql
-- BASE 스타일 PostgreSQL 테이블 설계 예시
CREATE TABLE docs (
    id UUID PRIMARY KEY,      -- SERIAL 대신 GUID
    owner UUID,               -- 외래 키 제약 없이 문자열처럼 취급
    body JSONB
);
-- REFERENCES, ON DELETE CASCADE 등을 의도적으로 사용하지 않음
```

## 요약
- ACID 진영(특히 PostgreSQL)은 JSON/JSONB 지원과 하드웨어 발전으로 NoSQL의 장점 상당 부분을 흡수했고, SQL은 ACID와 무관한 "문법"일 뿐이라는 인식이 자리잡으며 "SQL의 종말"론은 사그라들었다.
- PostgreSQL을 BASE 스타일로 쓰려면 GUID 기본 키, 최소한의 열(id+JSONB), 외래 키 제약 배제, ALTER TABLE 회피 같은 원칙을 따라야 한다.
- 2020년대 기준 PostgreSQL은 전통적 관계형 용도뿐 아니라 NoSQL 스타일 애플리케이션에도 좋은 선택지로 자리잡았다.
