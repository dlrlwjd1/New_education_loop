# Lecture 12: Distributed Transactions

## 개요
- 업로드일: 2020-03-18
- 원본: https://www.youtube.com/watch?v=aDp99WDIM_4
- 강좌: MIT 6.824 Distributed Systems (Spring 2020)
- 핵심 주제: shard를 넘는 트랜잭션의 concurrency control과 atomic commit, 2PL과 2PC

## 내용
### 왜 분산 트랜잭션이 필요한가
대규모 데이터는 여러 server에 shard되지만 은행 계좌 이체처럼 한 작업이 여러 shard를 읽고 써야 한다. 애플리케이션에는 이 연산들이 하나의 단위처럼 보이고, 다른 트랜잭션과 실패가 중간 상태를 노출하지 않아야 한다.

분산 트랜잭션은 두 문제를 결합한다.

1. **Concurrency control**: 동시에 실행되는 트랜잭션이 직렬 실행과 같은 결과를 내게 한다.
2. **Atomic commit**: 관련된 모든 server가 함께 commit하거나 모두 abort하게 한다.

### Two-Phase Locking
strict two-phase locking(2PL)은 읽기·쓰기 전에 lock을 얻고 commit/abort까지 보유한다. 충돌하는 연산이 기다리므로 serializability를 얻지만, 여러 트랜잭션이 서로의 lock을 기다리는 deadlock이 생길 수 있다. timeout이나 wait-for graph로 이를 탐지해 하나를 abort한다.

### Two-Phase Commit
2PC의 coordinator는 먼저 모든 participant에 prepare를 요청한다. participant는 commit할 수 있음을 log에 영속화하고 `yes`를 답한다. 전원이 yes면 coordinator가 commit을 기록·통보하고, 하나라도 no면 abort한다.

prepare 후 participant는 coordinator 결정 없이 독자적으로 abort할 수 없다. 이 시점에 coordinator가 죽으면 lock과 자원을 잡은 채 기다리는 **blocking** 문제가 생긴다. 로그는 재시작 후 약속을 기억하게 하지만 가용성 자체를 해결하지는 않는다.

## 예시
```text
Coordinator          Shard A          Shard B
    prepare ───────────▶│                │
    prepare ────────────────────────────▶│
              ◀──── yes        yes ──────┘
    COMMIT 기록
    commit ────────────▶│───────────────▶│
```

## 요약
- shard 간 트랜잭션은 동시성 제어와 원자적 결정을 모두 해결해야 한다.
- strict 2PL은 serializability를 제공하지만 deadlock과 긴 lock 보유를 유발한다.
- 2PC는 모든 participant의 commit/abort를 통일한다.
- prepare 이후 coordinator 장애가 전체 진행을 막는 것이 2PC의 핵심 약점이다.
