# MySQL Transaction

## 개요

- 트랜잭션(transaction) — 영구 커밋하거나 실패 시 원래 상태로 롤백할 수 있는 하나 이상의 쿼리 묶음
- START TRANSACTION / BEGIN / COMMIT / ROLLBACK 문 사용법

## 내용

### 트랜잭션이란

- **하나 이상의 쿼리를 데이터베이스에 영구적으로 커밋하거나, 어느 쿼리라도 실패하면 원래 상태로 롤백할 수 있는 단위.**
- 예: 인터넷 연결 끊김, 잘못된 코드·데이터 입력 등으로 불완전한 트랜잭션이 생길 수 있는 상황에서 데이터를 보호한다.

### 관리 문장 4가지

- **START TRANSACTION** — 트랜잭션 시작 표준 문. **롤백 시 돌아올 지점**을 표시한다.
- **BEGIN / BEGIN WORK** — START TRANSACTION의 별칭(alias)
- **COMMIT** — 변경을 데이터베이스에 **영구 반영**. 코드 블록 끝에 붙인다.
- **ROLLBACK** — 현재 트랜잭션을 되돌려 변경 취소. **반드시 COMMIT 전에** 실행해야 한다.

### 프로세스 요약

1. START TRANSACTION → 2. SQL 문들 실행 → 3. 결과 확인 후 COMMIT (문제 있으면 ROLLBACK 후 다시)

## 예시

Lucky Shrub — 주문 등록(orders)과 재고 차감(products 100→90)을 한 트랜잭션으로:

```sql
START TRANSACTION;

INSERT INTO orders (order_id, client_id, product_id, quantity)
VALUES (..., 'Cl1', 'P1', 10);

UPDATE products
SET stock = stock - 10
WHERE product_id = 'P1';

-- INNER JOIN으로 결과 확인
SELECT * FROM orders o INNER JOIN products p ON o.product_id = p.product_id;

-- 잘못된 클라이언트 ID(C11)로 갱신된 것을 발견!
ROLLBACK;    -- 원래 상태로 복원

-- 올바른 값으로 다시 실행 후
COMMIT;      -- 영구 반영
```

## 요약

- 트랜잭션은 여러 쿼리를 원자적으로 다루는 안전장치로, START TRANSACTION(=BEGIN)으로 시작한다.
- 확인 후 COMMIT으로 영구 반영하고, 오류가 있으면 커밋 전에 ROLLBACK으로 시작 지점으로 되돌린다.
