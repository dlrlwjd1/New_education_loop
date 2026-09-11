# MySQL JSON

## 개요

- JSON 데이터 타입으로 데이터를 저장·조회해 MySQL 자원 사용을 최적화하는 방법
- 키-값 쌍 구조와 컬럼 경로 연산자(column path operator, `->` + `$.요소`)로 JSON 요소 접근

## 내용

### JSON을 쓰는 이유

- 다양한 데이터 타입의 컴파일·파싱은 MySQL 자원에 압박을 준다.
- **JSON(JavaScript Object Notation)**은 데이터베이스 시스템 간 데이터 교환이 쉬운 형식으로, **특별한 파싱이 필요 없는 단순 텍스트**로 저장된다.

### JSON 코드 형태 (INSERT INTO 안)

- 작은따옴표 쌍과 **중괄호** 안에 작성.
- 속성(property)과 값은 각각 쌍따옴표로 감싸고 **콜론으로 구분** — **키-값 쌍(key-value pair)**. 쌍 사이는 쉼표.

### 실습 — 고객 활동 추적 테이블

1. activity 테이블 생성 — activity_id(INT, 고유 식별자), **properties(JSON 타입)** 컬럼: 고객 ID·상품 ID·주문 여부(true/false)를 저장
2. 세 고객의 활동을 JSON으로 삽입 (두 명은 주문, 한 명은 미주문)
3. **조회**: JSON 타입은 **컬럼 경로 연산자**로 접근 — `$` 기호와 점 표기법으로 JSON 속성 내부 요소를 지정

## 예시

```sql
CREATE TABLE activity (
  activity_id INT PRIMARY KEY,
  properties  JSON
);

INSERT INTO activity VALUES
(1, '{"client_id": "Cl1", "product_id": "P1", "order": true}'),
(2, '{"client_id": "Cl2", "product_id": "P3", "order": true}'),
(3, '{"client_id": "Cl3", "product_id": "P2", "order": false}');

-- 컬럼 경로 연산자로 JSON 요소 추출
SELECT activity_id,
       properties -> '$.client_id'  AS client_id,
       properties -> '$.product_id' AS product_id
FROM activity;
```

## 요약

- JSON 타입은 파싱 부담이 적은 텍스트 형식으로 이기종 시스템 간 데이터 소통에 유리하다.
- JSON 값은 중괄호 안 키-값 쌍으로 삽입하고, 조회는 컬럼 경로 연산자(`-> '$.요소'`)로 한다.
