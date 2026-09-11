# Variables and parameters

## 개요

- 변수(variable)의 개념과 생성 방법 3가지(SET, DECLARE, SELECT 안의 := 대입)
- 저장 프로시저의 매개변수 3종: IN, OUT, INOUT

## 내용

### 변수란

- **값을 저장하는 자리표시자(placeholder)** — 쿼리 요구에 따라 값이 바뀔 수 있다.
- SQL 문 사이 또는 프로시저와 SQL 문 사이에서 **값을 전달**하는 데 쓴다.
- 사용자 정의 변수는 `@이름` 형태(영숫자)로 만든다.

### 변수 생성 방법

1. **SET 명령** (프로시저 안/밖): `SET @order_id = 3;` — 이후 이 변수로 해당 레코드를 삭제·갱신·조회할 수 있다.
2. **DECLARE 명령** (프로시저 안): `DECLARE minimum_order_cost DECIMAL(5,2) DEFAULT 0;` — @ 없이 이름을 쓰고 데이터 타입·기본값을 지정.
3. **SELECT 안에서 대입 연산자(:=)**: `SELECT @max_order := MAX(cost) FROM orders;` — 일반 등호는 비교이므로 **대입 연산자**를 써야 한다. `SELECT @max_order;`로 값 확인.
4. **SELECT ... INTO**: 함수의 반환값을 변수에 담기 — `SELECT AVG(cost) INTO @average_cost FROM orders;`

### 매개변수 3종 (저장 프로시저)

- 매개변수는 **밖에서 함수/프로시저로 인자(값)를 전달**하는 수단. 함수는 입력 매개변수만 받지만, 프로시저는 세 유형을 쓸 수 있다:
  - **IN** (기본값) — 값을 프로시저 **안으로** 전달. 키워드를 생략하면 IN으로 간주. 예: 급여를 받아 세금 20%를 계산하는 프로시저.
  - **OUT** — 프로시저의 값을 **밖의 변수로** 전달. 예: 최저 주문 비용을 구해 변수로 반환하는 GetLowestCost — 호출 시 괄호에 변수를 넣고 SELECT로 확인.
  - **INOUT** — 둘의 결합. 인자를 받아 처리하고 **같은 매개변수로 결과를 되돌린다.** 예: SquareANumber — `SET @x_number = 5;` → 호출 → 매개변수를 통해 제곱값 반환 → SELECT로 출력.

## 예시

```sql
-- 변수
SET @order_id = 3;
SELECT @max_order := MAX(cost) FROM orders;
SELECT AVG(cost) INTO @average_cost FROM orders;

-- INOUT 매개변수 프로시저
CREATE PROCEDURE SquareANumber(INOUT a_number INT)
SET a_number = a_number * a_number;

SET @x_number = 5;
CALL SquareANumber(@x_number);
SELECT @x_number;   -- 25
```

## 요약

- 변수는 SET(프로시저 안팎), DECLARE(프로시저 안, 타입·기본값), SELECT의 := 대입 또는 INTO로 만든다.
- 프로시저 매개변수는 IN(입력, 기본), OUT(출력), INOUT(입출력 겸용) 세 가지다.
- 변수와 매개변수를 결합하면 재사용 가능한 복잡한 프로시저·함수를 만들 수 있다.
