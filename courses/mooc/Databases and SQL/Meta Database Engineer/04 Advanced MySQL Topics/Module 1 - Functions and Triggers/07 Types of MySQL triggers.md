# Types of MySQL triggers

## 개요

- 행 수준(row level) vs 문장 수준(statement level) 트리거, BEFORE/AFTER 수정자와 INSERT/UPDATE/DELETE 조합의 6가지 트리거 유형

## 내용

### 행 수준 vs 문장 수준

- **행 수준 트리거** — 삽입·갱신·삭제되는 **행마다** 호출된다. 100개 행이 추가되면 100번 호출.
- **문장 수준 트리거** — 동작(문장)당 **한 번만** 호출. 한 INSERT 문이 100행을 넣어도 1번만 활성화.
- **MySQL은 행 수준 트리거만 지원**한다.

### BEFORE / AFTER 수정자

- **BEFORE** — 테이블 행에 동작이 수행되기 **전에** 트리거 호출
- **AFTER** — 각 행에 동작이 수행된 **후에** 호출
- INSERT/UPDATE/DELETE와 조합하면 6가지: BEFORE/AFTER INSERT, BEFORE/AFTER UPDATE, BEFORE/AFTER DELETE

### 공통 구문

```text
CREATE TRIGGER 이름
BEFORE|AFTER INSERT|UPDATE|DELETE
ON 테이블
FOR EACH ROW      -- 각 행에 대해 실행
[BEGIN] 로직 [END]
```

### 활용 예 (Lucky Shrub)

- **BEFORE INSERT** — orders 테이블의 주문 수량에 음수 금지 규칙: OrderQuantityCheck 트리거가 삽입 전에 값이 0 미만이면 0으로 설정.
- **AFTER INSERT** — 새 주문이 삽입될 때마다 audits 테이블로 로그 메시지 전송 (감사 추적).
- **AFTER DELETE** — 주문 레코드 삭제 후 삭제 일시를 로그에 기록.

## 예시

```sql
CREATE TRIGGER OrderQuantityCheck
BEFORE INSERT ON orders
FOR EACH ROW
BEGIN
  IF NEW.order_qty < 0 THEN
    SET NEW.order_qty = 0;
  END IF;
END;
```

## 요약

- MySQL 트리거는 행 수준으로만 동작하며, BEFORE/AFTER × INSERT/UPDATE/DELETE의 6가지 유형이 있다.
- BEFORE는 값 검증·보정(음수 방지 등), AFTER는 로그·감사 기록에 적합하다.
- FOR EACH ROW 키워드가 행마다 로직을 실행하게 한다.
