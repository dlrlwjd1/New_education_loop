# Create and drop triggers in MySQL

## 개요

- BEFORE INSERT 트리거를 실제로 생성·실행·삭제하는 실습
- NEW·OLD 수정자(modifier)의 역할

## 내용

### 트리거 생성 절차 (음수 수량 방지)

1. `CREATE TRIGGER OrderQuantityCheck` — 이름은 데이터베이스에서 유일하게
2. 유형: `BEFORE INSERT` — INSERT 명령 전에 호출
3. `ON orders` — 대상 테이블 지정 + `FOR EACH ROW` — 각 행 대상
4. 로직: 여러 문장이면 BEGIN...END 블록. IF 문으로 quantity 값을 검사

### NEW와 OLD 수정자

- **NEW** — 연산 **후**의 컬럼 값(삽입될 값)에 접근. 이 예제에 적합.
- **OLD** — 연산 **전**의 컬럼 값에 접근.
- 로직: "NEW.order_quantity가 0보다 작으면 NEW 값을 0으로 설정"

### 실행과 삭제

- 실행 전 **DELIMITER를 `//`로 재정의**하고 실행 후 세미콜론으로 복원.
- 삭제: `DROP TRIGGER IF EXISTS 스키마.트리거이름;`
  - IF EXISTS로 에러 방지, 스키마 이름은 선택이지만 **올바른 트리거를 겨냥하도록 권장**.
- orders 테이블을 삭제하면 관련 트리거도 모두 삭제된다.

## 예시

```sql
DELIMITER //
CREATE TRIGGER OrderQuantityCheck
BEFORE INSERT ON orders
FOR EACH ROW
BEGIN
  IF NEW.quantity < 0 THEN
    SET NEW.quantity = 0;
  END IF;
END //
DELIMITER ;

DROP TRIGGER IF EXISTS lucky_shrub.OrderQuantityCheck;
```

## 요약

- 트리거 생성은 이름 → BEFORE/AFTER+이벤트 → ON 테이블 → FOR EACH ROW → 로직 순이다.
- NEW는 연산 후 값, OLD는 연산 전 값에 접근하는 수정자다.
- 복합 로직은 DELIMITER 변경 후 실행하고, DROP TRIGGER IF EXISTS 스키마.이름으로 삭제한다.
