# Lecture 9: More Replication — CRAQ

## 개요
- 업로드일: 2020-03-07
- 원본: https://www.youtube.com/watch?v=IXHzbCuADt0
- 강좌: MIT 6.824 Distributed Systems (Spring 2020)
- 핵심 주제: ZooKeeper의 mini-transaction과 CRAQ 체인 복제의 읽기 확장성

## 내용
### ZooKeeper mini-transaction
여러 znode의 version 검사와 갱신을 하나의 원자적 작업으로 묶으면, 읽기 후 쓰기 사이에 다른 client가 상태를 바꾸는 경쟁을 막을 수 있다. 모든 조건이 맞을 때만 갱신하고 하나라도 실패하면 전체를 적용하지 않는다.

### Chain Replication
복제본을 head에서 tail까지 체인으로 배치한다.

- 쓰기는 head에 들어와 다음 replica로 순서대로 전달된다.
- tail까지 도달하면 commit된 것으로 보고 확인 응답이 반대 방향으로 전파된다.
- 기본 chain replication에서 읽기는 확정된 최신 값을 가진 tail이 처리한다.

이 구조는 쓰기 순서를 자연스럽게 직렬화하고, pipeline으로 여러 쓰기를 동시에 흘릴 수 있다.

### CRAQ의 개선
CRAQ(Chain Replication with Apportioned Queries)는 모든 replica가 읽기를 처리하게 해 읽기 처리량을 확장한다. 각 객체 버전은 clean 또는 dirty 상태다.

- replica가 가진 최신 버전이 clean이면 즉시 반환한다.
- commit되지 않은 새 버전을 본 replica는 이를 dirty로 표시한다.
- dirty 객체를 읽으면 tail에 현재 commit된 version을 물어본 뒤 해당 버전을 반환한다.
- tail의 acknowledgment가 역방향으로 오면 버전을 clean으로 바꾼다.

읽기가 많고 쓰기가 상대적으로 적으면 대부분의 객체가 clean이므로 모든 replica에서 빠르게 읽을 수 있다.

## 예시
```text
Write: Client → Head → R2 → R3 → Tail
Ack:                    Tail → R3 → R2 → Head
Read clean: 임의 replica가 즉시 응답
Read dirty: 임의 replica가 Tail에 commit version 확인
```

## 요약
- ZooKeeper mini-transaction은 조건 검사와 여러 갱신을 원자적으로 묶는다.
- chain replication은 head에서 쓰기 순서를 만들고 tail에서 commit을 확정한다.
- CRAQ는 clean/dirty version을 구분해 대부분의 읽기를 모든 replica로 분산한다.
- 읽기 확장성을 얻는 대신 쓰기 중인 객체의 읽기는 tail 확인 비용을 낸다.
