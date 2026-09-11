# Lecture 6: Fault Tolerance — Raft (1)

## 개요
- 업로드일: 2020-02-29
- 원본: https://www.youtube.com/watch?v=64Zp3tzNbpE
- 강좌: MIT 6.824 Distributed Systems (Spring 2020)
- 핵심 주제: 합의(consensus), Raft의 term·leader election·과반수 원리

## 내용
### 단일 중재자의 문제
MapReduce master, GFS master, VMware FT의 test-and-set 서비스는 중요한 결정을 한 곳에 모아 충돌을 막지만 그 자체가 단일 장애점이다. Raft는 이 결정 기능까지 여러 서버에 복제해 신뢰할 단일 서버 없이 하나의 명령 순서를 합의한다.

### 복제 상태 머신
모든 서버가 같은 명령 로그를 같은 순서로 적용하면 동일한 상태 머신이 된다. 정상적인 경우 client는 leader에게 명령을 보내고, leader가 로그를 follower에 복제한 뒤 과반수가 저장하면 commit한다.

### Term과 역할
서버는 follower, candidate, leader 중 하나이며 시간은 단조 증가하는 term으로 나뉜다. 더 높은 term을 보면 그 term으로 이동하고 follower가 된다. 각 term에는 최대 한 명의 leader만 존재해야 한다.

### Leader election
follower는 election timeout 동안 heartbeat를 받지 못하면 candidate가 된다. term을 올리고 자신에게 투표한 뒤 `RequestVote`를 병렬 전송한다. 과반수 표를 얻으면 leader가 된다. 무작위 timeout은 여러 candidate가 계속 동시에 출마하는 상황을 줄인다.

### 과반수의 의미
어떤 두 과반수도 최소 한 서버에서 겹친다. 따라서 과반수를 얻은 두 결정은 완전히 독립적으로 존재할 수 없다. Raft는 이 교집합을 이용해 이전 결정의 정보를 다음 leader로 전달한다.

## 예시
5대 클러스터는 3대가 응답하면 진행할 수 있고 2대 장애까지 견딘다. 네트워크가 `3 + 2`로 분리되면 3대 쪽만 leader를 선출하고 commit할 수 있어 split brain을 막는다.

## 요약
- Raft는 합의를 통해 단일 중재자 자체를 장애 허용 구조로 만든다.
- term은 시간과 리더십 세대를 구분하고 오래된 메시지를 배제한다.
- 무작위 election timeout과 과반수 투표로 leader를 선출한다.
- 과반수의 교집합이 서로 모순되는 결정이 동시에 commit되는 것을 막는다.
