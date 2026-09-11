# Default values

## 개요

- 제약조건(constraint)의 목적 — 테이블에 들어가는 데이터 종류를 제한해 정확성·신뢰성 확보
- 대표 제약조건 NOT NULL과 DEFAULT의 동작과 SQL 작성법

## 내용

### 데이터베이스 제약조건

- 테이블에 저장할 수 있는 데이터 종류를 제한해 **삽입되는 모든 데이터의 정확성과 신뢰성을 보장**한다.
- 제약과 데이터 연산 사이에 위반이 감지되면 데이터베이스는 그 연산을 **중단(abort)**한다 — 예: 잘못된 데이터 삽입 시도는 거부된다.
- 적용 수준:
  - **컬럼 수준(column level)** — 특정 컬럼에 규칙 적용
  - **테이블 수준(table level)** — 예: 외래 키 제약으로 테이블 간 링크를 파괴하는 동작을 방지

### NOT NULL 제약

- **필드가 항상 채워지고 절대 비지 않도록** 보장한다.
- 예: 온라인 상점의 Customer 테이블에서 CustomerID·CustomerName 컬럼에 값이 없으면 새 고객 레코드 생성이 중단된다.
- NULL 값을 넣으려는 모든 연산(삽입·갱신)은 실패한다.

### DEFAULT 제약

- 값이 지정되지 않으면 **컬럼에 기본값을 자동 삽입**한다.
- 예: 축구 클럽의 Player 테이블 — 선수 대부분이 Barcelona 출신이라면 city 컬럼의 기본값을 'Barcelona'로 지정. 새 선수 입력 시 도시를 생략하면 자동으로 Barcelona가 채워져 반복 입력이 필요 없다.

## 예시

```sql
-- NOT NULL 제약
CREATE TABLE customer (
  customer_id   INT          NOT NULL,
  customer_name VARCHAR(100) NOT NULL
);

-- DEFAULT 제약
CREATE TABLE player (
  name VARCHAR(100) NOT NULL,
  city VARCHAR(50)  DEFAULT 'Barcelona'
);

-- city를 생략하면 자동으로 'Barcelona'가 들어간다
INSERT INTO player (name) VALUES ('Jordi');
```

## 요약

- 제약조건은 컬럼/테이블 수준에서 규칙을 강제해 데이터 품질을 지키고, 위반 연산은 중단시킨다.
- NOT NULL은 빈 값을 금지하고, DEFAULT는 값 미지정 시 기본값을 자동으로 채운다.
