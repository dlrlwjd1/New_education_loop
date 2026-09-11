# Lecture 10: Cloud Replicated DB — Aurora

## 개요
- 업로드일: 2020-03-11
- 원본: https://www.youtube.com/watch?v=jJSh54J1s5o
- 강좌: MIT 6.824 Distributed Systems (Spring 2020)
- 핵심 주제: Amazon Aurora의 compute-storage 분리, redo log 기반 복제, quorum과 빠른 복구

## 내용
### 범용 저장소의 한계
전통적인 cloud database는 VM에서 DB를 실행하고 EBS 같은 범용 블록 저장소에 데이터를 둔다. 장애 허용을 위해 DB 수준 복제와 저장소 수준 복제가 겹치면 같은 page와 log가 네트워크를 여러 번 왕복해 병목이 된다.

Aurora는 데이터베이스와 저장소를 함께 설계한다. DB compute node는 SQL·트랜잭션·buffer cache를 담당하고, 분산 storage node는 redo log를 받아 page를 재구성한다. 전체 page가 아니라 작은 log record만 네트워크로 보낸다.

### 복제와 quorum
데이터는 세 availability zone에 걸친 6개 복제본에 저장한다. 정상 쓰기는 4/6 응답으로 진행하고, 읽기·복구에는 3/6을 사용한다. 쓰기 quorum과 읽기 quorum이 겹치므로 최신 상태를 찾을 수 있으며, zone 전체 장애와 추가 노드 장애를 견딜 여유가 생긴다.

### Protection Group과 LSN
볼륨을 작은 protection group으로 나눠 장애와 복구 작업을 분산한다. 각 log record에는 LSN(log sequence number)이 있어 storage node가 빠진 구간을 탐지하고 다른 replica에서 채운다. DB가 재시작할 때 전체 log를 처음부터 재생하지 않고 quorum이 가진 일관된 지점에서 빠르게 서비스를 재개한다.

### 설계의 핵심
Aurora는 저장 계층을 수동 블록 장치가 아니라 데이터베이스 log를 이해하는 서비스로 바꾼다. 범용성은 줄지만 네트워크 쓰기 증폭과 복구 시간을 크게 줄인다.

## 예시
```text
SQL/트랜잭션/캐시: DB compute node
           │ redo log record만 전송
           ▼
AZ 1: 2 replicas | AZ 2: 2 replicas | AZ 3: 2 replicas
쓰기 4/6, 읽기·복구 3/6
```

## 요약
- Aurora는 범용 블록 저장소를 포기하고 DB 전용 분산 저장 계층을 설계했다.
- compute는 redo log만 보내고 storage가 page를 재구성해 네트워크 쓰기 증폭을 줄인다.
- 3개 zone의 6개 복제본과 4/6·3/6 quorum으로 성능과 장애 허용을 조절한다.
- LSN과 작은 protection group이 누락 복구와 빠른 재시작을 가능하게 한다.
