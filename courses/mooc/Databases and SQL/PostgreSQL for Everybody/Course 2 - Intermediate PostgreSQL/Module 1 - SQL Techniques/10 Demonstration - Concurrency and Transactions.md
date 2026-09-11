# Demonstration: Concurrency and Transactions

## 개요
- 두 개의 psql 터미널을 동시에 열어, `ON CONFLICT`를 이용한 upsert와 `BEGIN`/`ROLLBACK`/`COMMIT` 트랜잭션의 잠금(lock) 동작을 실제로 시연하는 강의

## 내용
### ON CONFLICT 실습 (좋아요/즐겨찾기 카운트)
- `fav`(즐겨찾기, 다대다) 테이블에서 `post_id`, `account_id` 조합에 UNIQUE 제약을 걸어둔 상태로, 같은 조합을 다시 INSERT하면 오류가 발생하는 것을 먼저 확인한다.
- `INSERT ... ON CONFLICT (post_id, account_id) DO UPDATE SET count = count + 1 RETURNING *`로 바꾸면, 레코드가 없을 때는 삽입되고 있을 때는 카운트가 증가하며, 두 경우 모두 갱신된 최신 값을 즉시 돌려받는 것을 실행으로 확인한다.
- 이 모든 것이 하나의 SQL 문(하나의 트랜잭션)으로 처리되므로, 여러 클라이언트가 동시에 같은 버튼을 눌러도 순서대로 안전하게 누적된다.

### BEGIN / ROLLBACK / COMMIT 실습
- `BEGIN` 이후 `UPDATE`로 값을 바꾼 다음 `ROLLBACK`을 실행하면, 그 사이의 변경이 전부 취소되어 원래 값 그대로 남아있음을 확인한다.
- 반대로 `BEGIN` → `UPDATE` → `COMMIT` 순서로 하면 변경 사항이 실제로 데이터베이스에 반영된다.

### 두 터미널 간 잠금(lock) 시연
- 한 터미널에서 `BEGIN` → `SELECT ... FOR UPDATE`로 특정 행을 잠근 상태로 둔 채, 다른 터미널에서 같은 행에 `FOR UPDATE`로 접근하면 그 문장이 멈춘 채(block) 응답하지 않는 것을 실시간으로 보여준다.
- 첫 번째 터미널에서 `ROLLBACK`(또는 `COMMIT`)을 실행하는 순간, 대기하던 두 번째 터미널의 문장이 즉시 진행된다 — 잠금이 풀리면서 대기가 해제되는 과정을 시각적으로 확인한다.
- 잠금을 너무 오래 유지하면(둘 다 서로를 기다리는 상황이 되면) 결국 교착 상태(deadlock)로 판정되어 처리된다는 점도 함께 보여준다.

## 예시
```sql
-- 터미널 A
BEGIN;
SELECT * FROM fav WHERE id = 1 FOR UPDATE;
-- (여기서 대기 상태로 둠)

-- 터미널 B (동시 실행 시 A의 ROLLBACK/COMMIT까지 대기)
BEGIN;
SELECT * FROM fav WHERE id = 1 FOR UPDATE;

-- 터미널 A에서 트랜잭션 종료
ROLLBACK;  -- 또는 COMMIT;
```

## 요약
- `ON CONFLICT ... DO UPDATE ... RETURNING`은 "insert 또는 update, 그리고 즉시 최신 값 확인"을 한 번의 원자적 왕복으로 처리하는 실용적인 패턴이다.
- `BEGIN`/`ROLLBACK`/`COMMIT`으로 여러 SQL 문을 하나의 논리적 단위(트랜잭션)로 묶을 수 있으며, `FOR UPDATE`로 잠근 행은 트랜잭션이 끝날 때까지 다른 세션의 접근을 막는다.
- 두 세션이 서로의 잠금을 기다리면 교착 상태가 될 수 있으므로, 트랜잭션은 최대한 짧게 유지해야 한다.
