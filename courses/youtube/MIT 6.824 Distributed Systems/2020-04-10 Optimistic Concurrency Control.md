# Lecture 14: Optimistic Concurrency Control

## 개요
- 업로드일: 2020-04-10
- 원본: https://www.youtube.com/watch?v=Cw6Nj2evjSs
- 강좌: MIT 6.824 Distributed Systems (Spring 2020)
- 핵심 주제: FaRM의 RDMA 기반 in-memory transaction과 optimistic concurrency control(OCC)

## 내용
### Spanner와 다른 목표
Spanner는 여러 데이터센터를 아우르는 내구성과 트랜잭션을 위해 수십 밀리초의 지연을 감수한다. FaRM은 한 데이터센터 안에서 새로운 RDMA 네트워크의 성능 한계를 탐구한 연구 prototype으로, 단순 트랜잭션을 수십 microsecond 수준에 처리하는 것을 목표로 한다.

### RDMA
RDMA(remote direct memory access)는 원격 CPU의 애플리케이션 처리를 거치지 않고 NIC가 원격 메모리를 읽고 쓰게 한다. 매우 빠르지만 서버 측 검증 로직을 매 요청마다 실행하기 어렵다. 이 제약 때문에 client가 데이터를 낙관적으로 읽고 마지막에 검증하는 OCC가 잘 맞는다.

### OCC 단계
1. **Execute**: lock 없이 객체와 version을 읽고 read-set·write-set을 만든다.
2. **Lock**: write-set 객체의 primary를 정해진 순서로 lock한다.
3. **Validate**: read-set의 version이 처음 읽었을 때와 같은지 확인한다.
4. **Commit/Replicate**: 새 값을 backup에 복제하고 commit을 기록한 뒤 lock을 푼다.

충돌이 드물면 기다림 없이 빠르게 끝난다. 충돌이 많으면 validation 실패와 retry가 늘어 비관적 잠금보다 나빠질 수 있다.

### 장애 허용
객체는 primary와 backup memory에 복제하고, commit record의 순서로 복구 가능성을 만든다. 그러나 memory 기반 설계와 같은 데이터센터 가정 때문에 광역 장애를 다루는 Spanner와 동일한 보장을 목표로 하지 않는다.

## 예시
두 트랜잭션이 같은 객체를 읽어 수정하면 먼저 write lock과 validation을 통과한 쪽이 commit한다. 나머지는 읽은 version이 바뀐 것을 발견하고 abort 후 다시 실행한다.

## 요약
- FaRM은 광역 분산보다 한 데이터센터의 매우 낮은 지연과 높은 처리량을 선택한다.
- RDMA는 빠르지만 서버 CPU 검증을 우회하므로 OCC 중심 설계를 유도한다.
- OCC는 실행 후 lock·validation을 수행해 충돌이 드문 workload에서 강하다.
- 성능 수치는 일관성·내구성·장애 범위에 대한 서로 다른 가정을 함께 보고 비교해야 한다.
