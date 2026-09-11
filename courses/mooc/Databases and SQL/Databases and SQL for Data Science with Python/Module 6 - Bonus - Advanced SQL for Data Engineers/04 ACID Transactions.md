# ACID Transactions

## 학습 목표

- 트랜잭션(Transaction)의 개념 설명
- ACID 트랜잭션의 의미 설명
- ACID 트랜잭션 예시 이해
- `COMMIT`과 `ROLLBACK`의 역할 설명

---

## 트랜잭션이란?

트랜잭션은 데이터베이스에서 처리되는 **나눌 수 없는 하나의 작업 단위**입니다.

하나의 트랜잭션은 하나 이상의 SQL 문으로 구성될 수 있습니다.

트랜잭션이 성공하려면 다음 둘 중 하나가 되어야 합니다.

| 결과 | 설명 |
|------|------|
| 모두 성공 | 모든 SQL 문이 성공하고 데이터베이스가 새로운 안정 상태가 됨 |
| 모두 취소 | 하나라도 실패하면 모든 변경을 취소하고 이전 상태로 돌아감 |

즉, 트랜잭션은 중간 상태로 남아서는 안 됩니다.

---

## 예시: 카드 결제 트랜잭션

은행 카드로 상품을 구매할 때는 여러 작업이 함께 일어나야 합니다.

예를 들어 Rose가 신발 가게에서 부츠를 200달러에 구매한다고 가정합니다.

필요한 작업은 다음과 같습니다.

1. Rose의 계좌에서 200달러 차감
2. 신발 가게 계좌에 200달러 추가
3. 부츠 재고를 1개 감소

```sql
UPDATE accounts
SET balance = balance - 200
WHERE account_name = 'Rose';

UPDATE accounts
SET balance = balance + 200
WHERE account_name = 'Shoe Shop';

UPDATE inventory
SET stock = stock - 1
WHERE product_name = 'Boots';
```

이 중 하나라도 실패하면 전체 거래가 실패해야 합니다.

예를 들어 Rose의 계좌 잔액이 부족한데도 신발 가게 계좌에 돈이 들어가거나, 재고만 줄어드는 일이 생기면 데이터가 일관되지 않게 됩니다.

---

## ACID란?

ACID는 신뢰할 수 있는 트랜잭션이 가져야 하는 네 가지 특성을 의미합니다.

| 약어 | 의미 | 설명 |
|------|------|------|
| A | Atomic | 모든 변경이 전부 성공하거나 전부 실패해야 함 |
| C | Consistent | 트랜잭션 전후 데이터가 항상 일관된 상태여야 함 |
| I | Isolated | 트랜잭션 실행 중 다른 프로세스가 해당 데이터를 변경하지 못해야 함 |
| D | Durable | 트랜잭션이 완료된 뒤 변경 내용이 지속되어야 함 |

---

## Atomic: 원자성

원자성은 트랜잭션의 모든 작업이 하나의 단위처럼 처리되어야 한다는 의미입니다.

```text
모든 UPDATE 성공 → 전체 성공
하나라도 실패     → 전체 취소
```

부분적으로만 성공한 상태는 허용되지 않습니다.

---

## Consistent: 일관성

일관성은 트랜잭션 전과 후의 데이터베이스가 항상 유효한 상태여야 한다는 의미입니다.

예를 들어 돈을 이체하는 트랜잭션에서 한 계좌의 잔액만 줄고 다른 계좌의 잔액이 늘지 않는다면 일관성이 깨집니다.

---

## Isolated: 격리성

격리성은 트랜잭션이 실행되는 동안 다른 트랜잭션이나 프로세스가 같은 데이터를 동시에 변경해 잘못된 결과를 만들지 않도록 하는 특성입니다.

예를 들어 재고가 1개 남은 상품을 두 사람이 동시에 구매하는 상황에서, 격리성이 없으면 재고가 음수가 되는 문제가 생길 수 있습니다.

---

## Durable: 지속성

지속성은 트랜잭션이 성공적으로 완료된 뒤에는 변경 사항이 데이터베이스에 계속 유지되어야 한다는 의미입니다.

시스템 장애가 발생하더라도 `COMMIT`된 변경 사항은 보존되어야 합니다.

---

## 트랜잭션 제어 명령어

ACID 트랜잭션을 관리할 때 사용하는 주요 SQL 명령어는 다음과 같습니다.

| 명령어 | 역할 |
|--------|------|
| `BEGIN` | 트랜잭션 시작 |
| `COMMIT` | 모든 변경 사항을 확정하고 저장 |
| `ROLLBACK` | 변경 사항을 취소하고 트랜잭션 시작 전 상태로 되돌림 |

> DB2 on Cloud에서는 `BEGIN`이 암시적으로 처리될 수 있으므로 명시적으로 작성하지 않아도 되는 경우가 있습니다.

---

## COMMIT

모든 SQL 문이 성공적으로 실행되었다면 `COMMIT`을 실행해 변경 사항을 데이터베이스에 확정합니다.

```sql
BEGIN;

UPDATE accounts
SET balance = balance - 200
WHERE account_name = 'Rose';

UPDATE accounts
SET balance = balance + 200
WHERE account_name = 'Shoe Shop';

UPDATE inventory
SET stock = stock - 1
WHERE product_name = 'Boots';

COMMIT;
```

`COMMIT` 후에는 데이터베이스가 새로운 일관된 상태가 됩니다.

---

## ROLLBACK

트랜잭션 중 하나라도 실패하면 `ROLLBACK`을 실행해 모든 변경 사항을 취소합니다.

```sql
BEGIN;

UPDATE accounts
SET balance = balance - 200
WHERE account_name = 'Rose';

UPDATE accounts
SET balance = balance + 200
WHERE account_name = 'Shoe Shop';

UPDATE inventory
SET stock = stock - 1
WHERE product_name = 'Boots';

ROLLBACK;
```

`ROLLBACK`을 실행하면 트랜잭션이 시작되기 전의 안정된 상태로 돌아갑니다.

---

## 애플리케이션 코드에서 트랜잭션 사용하기

SQL 문은 Java, C, R, Python 같은 프로그래밍 언어에서 호출할 수 있습니다.

이때 데이터베이스별 접근 API나 커넥터를 사용합니다.

| 언어 | 예시 API |
|------|----------|
| Java | JDBC |
| Python | `ibm_db` 같은 데이터베이스 커넥터 |
| C / R | 데이터베이스별 SQL API 또는 커넥터 |

애플리케이션 코드 안에서 오류 검사를 수행한 뒤, 성공하면 `COMMIT`, 실패하면 `ROLLBACK`을 실행하도록 만들 수 있습니다.

### Python 흐름 예시

```python
try:
    # SQL 문 1 실행
    # SQL 문 2 실행
    # SQL 문 3 실행
    connection.commit()
except Exception:
    connection.rollback()
    raise
finally:
    connection.close()
```

이 구조를 사용하면 여러 SQL 작업을 하나의 안전한 트랜잭션으로 묶을 수 있습니다.

---

## COMMIT과 ROLLBACK 비교

| 구분 | `COMMIT` | `ROLLBACK` |
|------|----------|------------|
| 실행 시점 | 모든 작업이 성공했을 때 | 작업 중 실패가 발생했을 때 |
| 결과 | 변경 사항 확정 | 변경 사항 취소 |
| 데이터베이스 상태 | 새로운 안정 상태 | 이전 안정 상태 |
| 목적 | 성공한 트랜잭션 저장 | 불완전한 트랜잭션 되돌리기 |

---

## 핵심 요약

- 트랜잭션은 하나 이상의 SQL 문으로 구성된 완전한 작업 단위입니다.
- ACID 트랜잭션은 모든 SQL 문이 성공하거나, 하나도 적용되지 않아야 합니다.
- ACID는 Atomic, Consistent, Isolated, Durable을 의미합니다.
- `BEGIN`, `COMMIT`, `ROLLBACK`은 트랜잭션을 관리하는 SQL 명령어입니다.
- `COMMIT`은 변경 사항을 확정하고, `ROLLBACK`은 변경 사항을 취소합니다.
- 애플리케이션 코드에서 오류 처리 로직을 통해 트랜잭션을 안전하게 관리할 수 있습니다.
