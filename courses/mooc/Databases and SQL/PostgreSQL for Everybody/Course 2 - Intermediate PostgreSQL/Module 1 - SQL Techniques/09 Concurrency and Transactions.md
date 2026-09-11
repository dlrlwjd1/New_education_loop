# Concurrency and Transactions

## 개요
- 여러 클라이언트가 동시에 같은 데이터를 읽고 쓸 때 발생하는 동시성(concurrency) 문제, 원자성(atomicity), `INSERT ... ON CONFLICT`, 그리고 `BEGIN`/`COMMIT`/`ROLLBACK` 트랜잭션을 다루는 강의

## 내용
### 동시성 문제와 원자성(atomicity)
- 여러 클라이언트가 동시에 `count = count + 1` 같은 업데이트를 보내면, "이전 값을 읽고 → 1을 더하고 → 새 값을 저장"하는 과정이 서로 겹쳐 실행될 경우 일부 갱신이 유실될 수 있다(예: 100에서 세 번 +1 했는데 101만 되는 경우).
- 데이터베이스는 내부 잠금(lock) 메커니즘으로 각 SQL 문의 "읽기-쓰기"를 원자적(atomic)으로 처리해, 동시 요청이 들어와도 순서대로 하나씩 적용되도록 보장한다. 잠금의 세분성(granularity)과 성능은 데이터베이스 제품의 핵심 경쟁력 중 하나다.
- `INSERT`로 `SERIAL` 기본 키를 생성하는 것도 원자적 동작이다 — 동시에 여러 INSERT가 들어와도 중복 없는 고유 번호가 순서대로(무작위 순서이지만 서로 겹치지 않게) 배정된다.

### RETURNING과 ON CONFLICT
- `INSERT ... RETURNING *`은 삽입 직후 그 행을 다시 SELECT하는 것과 같은 효과를 한 문장으로 처리한다 — 갱신된 값을 즉시 확인할 때 유용하다(예: "좋아요" 버튼을 누른 직후 갱신된 카운트를 바로 표시).
- `INSERT INTO ... ON CONFLICT (열1, 열2) DO UPDATE SET 값 = 값 + 1`은 "레코드가 없으면 삽입(insert), 있으면 갱신(update)"하는 로직을 하나의 원자적 SQL 문으로 표현한다 — 애플리케이션 코드에서 조건 분기(if 문)를 짜는 것보다 안전하고 효율적이다.

### 명시적 트랜잭션: BEGIN / COMMIT / ROLLBACK
- `SELECT ... FOR UPDATE`는 조회와 동시에 해당 행을 잠근다 — 다른 트랜잭션이 같은 행에 `FOR UPDATE`로 접근하면 잠금이 풀릴 때까지 대기한다.
- `BEGIN`으로 트랜잭션을 시작하면, 그 안에서 수행한 변경 사항은 마치 "격리된 임시 버전의 데이터베이스"처럼 취급된다. `ROLLBACK`은 그 변경들을 모두 폐기하고, `COMMIT`은 실제 데이터베이스에 확정 반영한다.
- 두 개의 세션(터미널)이 동시에 `BEGIN` → `SELECT ... FOR UPDATE`를 실행하면, 먼저 도착한 쪽이 잠금을 갖고 다른 쪽은 대기(block) 상태가 된다. 대기가 너무 길어지면 결국 교착 상태(deadlock)로 감지되어 처리된다.
- 잠금 대기와 관련된 세부 옵션도 언급된다: `NO KEY UPDATE`(더 약한 잠금), `SKIP LOCKED`(잠긴 행은 건너뛰고 잠기지 않은 행만 반환).

## 예시
```sql
-- 원자적 증가 + 즉시 결과 반환
UPDATE fav SET count = count + 1
WHERE post_id = 1 AND account_id = 1
RETURNING *;

-- INSERT 또는 UPDATE를 한 문장으로 (upsert)
INSERT INTO fav (post_id, account_id, count)
VALUES (1, 1, 1)
ON CONFLICT (post_id, account_id)
DO UPDATE SET count = fav.count + 1
RETURNING *;

-- 명시적 트랜잭션
BEGIN;
SELECT * FROM fav WHERE id = 1 FOR UPDATE;
UPDATE fav SET count = 99 WHERE id = 1;
COMMIT;   -- 또는 ROLLBACK;
```

## 요약
- 동시성 문제의 핵심은 "읽기-쓰기"를 원자적으로 만드는 것이며, 데이터베이스는 내부 잠금으로 이를 보장한다.
- `RETURNING`과 `ON CONFLICT ... DO UPDATE`를 활용하면 여러 단계의 로직을 하나의 원자적 SQL 문으로 안전하게 표현할 수 있다.
- 여러 SQL 문을 하나의 논리적 단위로 묶어야 할 때는 `BEGIN`/`COMMIT`/`ROLLBACK` 트랜잭션을 사용하며, 이때 잠금은 최대한 짧게 유지해야 교착 상태를 피할 수 있다.
