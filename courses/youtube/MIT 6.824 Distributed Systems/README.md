# MIT 6.824 Distributed Systems

## 개요
- 플랫폼: YouTube
- 채널: MIT 6.824: Distributed Systems (@6.824)
- 재생목록: [MIT 6.824 Distributed Systems (Spring 2020)](https://www.youtube.com/playlist?list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB)
- 강의 수: 20개
- 주제: 분산 시스템의 통신, 장애 허용, 복제, 일관성, 분산 트랜잭션, 대규모 데이터 처리와 공개 분산 시스템
- 목표: 연구 논문과 실제 시스템 사례를 통해 설계 목표, 핵심 메커니즘, 장애 가정과 트레이드오프를 이해한다.

## 학습 흐름

| 단계 | 강의 | 핵심 질문 |
| --- | --- | --- |
| 기초 | 1~2 | 왜 분산 시스템이 필요하며 RPC와 동시성은 어떤 실패를 만드는가? |
| 저장·복제 | 3~5 | 대형 저장소와 primary-backup은 데이터·실행을 어떻게 복제하는가? |
| 합의·조정 | 6~9 | 단일 장애점 없이 leader와 로그 순서를 어떻게 합의하는가? |
| 데이터베이스·트랜잭션 | 10~14 | cache·shard·광역 복제에서 원자성과 성능을 어떻게 조절하는가? |
| 대규모 처리·약한 일관성 | 15~17 | lineage, cache, causal order로 확장성과 가용성을 어떻게 얻는가? |
| 공개 분산 시스템 | 18~20 | 서로 신뢰하지 않는 참여자 사이에서 log·거래·이름을 어떻게 검증하는가? |

## 강의 목록 (재생목록 순서)

| 강의 | 업로드일 | 주제 | 핵심 시스템·개념 |
| --- | --- | --- | --- |
| 1 | 2020-02-06 | [Introduction](2020-02-06%20Introduction.md) | 분산 시스템 목표, MapReduce |
| 2 | 2020-02-07 | [RPC and Threads](2020-02-07%20RPC%20and%20Threads.md) | Go, goroutine, RPC failure semantics |
| 3 | 2020-02-13 | [GFS](2020-02-13%20GFS.md) | chunk, master, primary lease |
| 4 | 2020-02-18 | [Primary-Backup Replication](2020-02-18%20Primary-Backup%20Replication.md) | VMware FT, deterministic replay |
| 5 | 2020-02-24 | [Go, Threads, and Raft](2020-02-24%20Go%20Threads%20and%20Raft.md) | 동시성 패턴, Raft 디버깅 |
| 6 | 2020-02-29 | [Fault Tolerance — Raft (1)](2020-02-29%20Fault%20Tolerance%20-%20Raft%201.md) | term, leader election, majority |
| 7 | 2020-02-29 | [Fault Tolerance — Raft (2)](2020-02-29%20Fault%20Tolerance%20-%20Raft%202.md) | log matching, commit, snapshot |
| 8 | 2020-03-05 | [ZooKeeper](2020-03-05%20Zookeeper.md) | linearizability, znode, watch |
| 9 | 2020-03-07 | [More Replication — CRAQ](2020-03-07%20More%20Replication%20-%20CRAQ.md) | chain replication, clean/dirty version |
| 10 | 2020-03-11 | [Cloud Replicated DB — Aurora](2020-03-11%20Cloud%20Replicated%20DB%20-%20Aurora.md) | redo log, quorum, protection group |
| 11 | 2020-03-14 | [Cache Consistency — Frangipani](2020-03-14%20Cache%20Consistency%20-%20Frangipani.md) | distributed lock, cache coherence, WAL |
| 12 | 2020-03-18 | [Distributed Transactions](2020-03-18%20Distributed%20Transactions.md) | 2PL, 2PC, serializability |
| 13 | 2020-04-07 | [Spanner](2020-04-07%20Spanner.md) | Paxos, TrueTime, external consistency |
| 14 | 2020-04-10 | [Optimistic Concurrency Control](2020-04-10%20Optimistic%20Concurrency%20Control.md) | FaRM, RDMA, OCC |
| 15 | 2020-04-14 | [Big Data — Spark](2020-04-14%20Big%20Data%20-%20Spark.md) | RDD, lineage, lazy DAG |
| 16 | 2020-04-17 | [Cache Consistency — Memcached at Facebook](2020-04-17%20Cache%20Consistency%20-%20Memcached%20at%20Facebook.md) | look-aside cache, lease |
| 17 | 2020-04-28 | [COPS, Causal Consistency](2020-04-28%20COPS%20and%20Causal%20Consistency.md) | dependency, causal+ consistency |
| 18 | 2020-04-30 | [Fork Consistency, Certificate Transparency](2020-04-30%20Fork%20Consistency%20and%20Certificate%20Transparency.md) | Merkle tree, transparency log |
| 19 | 2020-05-06 | [Bitcoin](2020-05-06%20Bitcoin.md) | public ledger, proof of work |
| 20 | 2020-05-08 | [Blockstack](2020-05-08%20Blockstack.md) | decentralized PKI, virtualchain, Gaia |

## 영상 목록 (업로드일 최신순)

| 업로드일 | 영상 | 원본 |
| --- | --- | --- |
| 2020-05-08 | [Lecture 20: Blockstack](2020-05-08%20Blockstack.md) | [YouTube](https://www.youtube.com/watch?v=XvXK_vZ0BNw) |
| 2020-05-06 | [Lecture 19: Bitcoin](2020-05-06%20Bitcoin.md) | [YouTube](https://www.youtube.com/watch?v=K_euhRou98Y) |
| 2020-04-30 | [Lecture 18: Fork Consistency, Certificate Transparency](2020-04-30%20Fork%20Consistency%20and%20Certificate%20Transparency.md) | [YouTube](https://www.youtube.com/watch?v=UKdLJ7-0iFM) |
| 2020-04-28 | [Lecture 17: COPS, Causal Consistency](2020-04-28%20COPS%20and%20Causal%20Consistency.md) | [YouTube](https://www.youtube.com/watch?v=fR_NB714EAI) |
| 2020-04-17 | [Lecture 16: Cache Consistency: Memcached at Facebook](2020-04-17%20Cache%20Consistency%20-%20Memcached%20at%20Facebook.md) | [YouTube](https://www.youtube.com/watch?v=Myp8z0ybdzM) |
| 2020-04-14 | [Lecture 15: Big Data: Spark](2020-04-14%20Big%20Data%20-%20Spark.md) | [YouTube](https://www.youtube.com/watch?v=mzIoSW-cInA) |
| 2020-04-10 | [Lecture 14: Optimistic Concurrency Control](2020-04-10%20Optimistic%20Concurrency%20Control.md) | [YouTube](https://www.youtube.com/watch?v=Cw6Nj2evjSs) |
| 2020-04-07 | [Lecture 13: Spanner](2020-04-07%20Spanner.md) | [YouTube](https://www.youtube.com/watch?v=4eW5SWBi7vs) |
| 2020-03-18 | [Lecture 12: Distributed Transactions](2020-03-18%20Distributed%20Transactions.md) | [YouTube](https://www.youtube.com/watch?v=aDp99WDIM_4) |
| 2020-03-14 | [Lecture 11: Cache Consistency: Frangipani](2020-03-14%20Cache%20Consistency%20-%20Frangipani.md) | [YouTube](https://www.youtube.com/watch?v=-pKNCjUhPjQ) |
| 2020-03-11 | [Lecture 10: Cloud Replicated DB, Aurora](2020-03-11%20Cloud%20Replicated%20DB%20-%20Aurora.md) | [YouTube](https://www.youtube.com/watch?v=jJSh54J1s5o) |
| 2020-03-07 | [Lecture 9: More Replication, CRAQ](2020-03-07%20More%20Replication%20-%20CRAQ.md) | [YouTube](https://www.youtube.com/watch?v=IXHzbCuADt0) |
| 2020-03-05 | [Lecture 8: ZooKeeper](2020-03-05%20Zookeeper.md) | [YouTube](https://www.youtube.com/watch?v=pbmyrNjzdDk) |
| 2020-02-29 | [Lecture 7: Fault Tolerance: Raft (2)](2020-02-29%20Fault%20Tolerance%20-%20Raft%202.md) | [YouTube](https://www.youtube.com/watch?v=4r8Mz3MMivY) |
| 2020-02-29 | [Lecture 6: Fault Tolerance: Raft (1)](2020-02-29%20Fault%20Tolerance%20-%20Raft%201.md) | [YouTube](https://www.youtube.com/watch?v=64Zp3tzNbpE) |
| 2020-02-24 | [Lecture 5: Go, Threads, and Raft](2020-02-24%20Go%20Threads%20and%20Raft.md) | [YouTube](https://www.youtube.com/watch?v=UzzcUS2OHqo) |
| 2020-02-18 | [Lecture 4: Primary-Backup Replication](2020-02-18%20Primary-Backup%20Replication.md) | [YouTube](https://www.youtube.com/watch?v=M_teob23ZzY) |
| 2020-02-13 | [Lecture 3: GFS](2020-02-13%20GFS.md) | [YouTube](https://www.youtube.com/watch?v=EpIgvowZr00) |
| 2020-02-07 | [Lecture 2: RPC and Threads](2020-02-07%20RPC%20and%20Threads.md) | [YouTube](https://www.youtube.com/watch?v=gA4YXUJX7t8) |
| 2020-02-06 | [Lecture 1: Introduction](2020-02-06%20Introduction.md) | [YouTube](https://www.youtube.com/watch?v=cQP8WApzIQQ) |

## 정리 원칙
- YouTube 자동 생성 영문 자막의 실제 강의 내용을 기반으로 정리한다.
- 논문 전체의 대체물이 아니라 강의에서 강조한 설계 목표·메커니즘·장애 가정·트레이드오프를 압축한다.
- 재생목록 순서는 학습 순서 표에서, 업로드일 최신순은 영상 목록에서 각각 확인한다.
- 파일명은 YouTube 규칙에 따라 업로드일과 주제만 사용하고 별도의 순서 번호를 붙이지 않는다.
