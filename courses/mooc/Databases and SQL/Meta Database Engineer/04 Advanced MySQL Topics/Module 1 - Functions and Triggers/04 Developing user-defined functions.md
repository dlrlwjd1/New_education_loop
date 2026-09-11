# Developing user-defined functions

## 개요

- 내장 함수로 해결되지 않는 작업을 위한 사용자 정의 함수(user-defined function) 작성
- CREATE FUNCTION·RETURNS·DETERMINISTIC·RETURN 구문과 DELIMITER + BEGIN...END 복합문

## 내용

### 사용자 정의 함수란

- **내장 함수로 완수할 수 없는 연산을 수행하기 위해 직접 만드는 함수.** 수식·공식을 구현한 코드가 작업을 수행하고 결과를 반환한다.

### 기본 구문

1. `CREATE FUNCTION 이름(매개변수)` — 괄호는 필수, 매개변수는 선택
2. `RETURNS 데이터타입` — 반환 타입 지정
3. `DETERMINISTIC` — **같은 입력이면 항상 같은 결과를 반환**한다는 선언
4. `RETURN 식` — 로직 구현

### 복합(compound) 함수 — DELIMITER와 BEGIN...END

- 여러 문장이 든 함수는 **DELIMITER 명령으로 구분자를 기본 세미콜론에서 `//` 등으로 바꿔** 전체 함수를 하나의 복합문으로 컴파일한다.
- **BEGIN ... END**로 함수 본문을 감싸고, 그 안에 IF-ELSE 같은 제어문을 쓴다.
- 함수 생성 후 구분자를 다시 세미콜론으로 되돌린다.
- 삭제: `DROP FUNCTION 이름;`

## 예시

Lucky Shrub 할인 계산:

```sql
-- 1. 단순 함수: 일괄 10% 할인
CREATE FUNCTION FindTotalCost(cost DECIMAL(5,2))
RETURNS DECIMAL(5,2) DETERMINISTIC
RETURN cost - (cost * 0.1);

SELECT FindTotalCost(100);   -- 90.00

-- 2. 조건부 함수: $100 이상 10%, $500 이상 20% 할인
DELIMITER //
CREATE FUNCTION GetTotalCost(cost DECIMAL(5,2))
RETURNS DECIMAL(5,2) DETERMINISTIC
BEGIN
  IF cost >= 100 AND cost < 500 THEN
    SET cost = cost - (cost * 0.1);
  ELSEIF cost >= 500 THEN
    SET cost = cost - (cost * 0.2);
  END IF;
  RETURN cost;
END //
DELIMITER ;

SELECT GetTotalCost(500);    -- 400 (20% 할인)

DROP FUNCTION GetTotalCost;
```

## 요약

- 사용자 정의 함수는 CREATE FUNCTION + RETURNS + DETERMINISTIC + RETURN으로 만든다.
- 다중 문장 로직은 DELIMITER 변경 후 BEGIN...END 블록으로 감싸고, 끝나면 구분자를 되돌린다.
- DROP FUNCTION으로 제거한다.
