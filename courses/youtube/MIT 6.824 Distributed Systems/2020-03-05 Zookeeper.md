# Lecture 8: ZooKeeper

## 개요
- 업로드일: 2020-03-05
- 원본: https://www.youtube.com/watch?v=pbmyrNjzdDk
- 강좌: MIT 6.824 Distributed Systems (Spring 2020)
- 핵심 주제: 선형화 가능성(linearizability)의 판별과 ZooKeeper의 조정 서비스 API·일관성 선택

## 내용
### 선형화 가능성
연산마다 호출과 응답 사이 어딘가에 한 순간 실행된 것처럼 배치할 수 있고, 겹치지 않은 실제 시간 순서를 보존할 수 있으면 history는 선형화 가능하다. 이는 복제된 저장소가 하나의 서버처럼 보이게 하는 강한 일관성 기준이다.

동시에 실행된 연산은 가능한 순서를 선택할 수 있지만, 완료된 쓰기 뒤에 시작한 읽기가 더 오래된 값을 반환하면 선형화할 수 없다.

### ZooKeeper의 위치
ZooKeeper는 애플리케이션 데이터를 모두 저장하는 데이터베이스가 아니라 leader 선출, 설정, 멤버십, lock 같은 작은 조정 정보(coordination)를 제공한다. 쓰기는 합의 프로토콜로 전체 순서를 정하지만, 읽기는 성능을 위해 어느 replica에서나 처리할 수 있어 오래된 값을 볼 수 있다.

대신 한 client의 연산 순서를 보존하고, client가 관찰한 상태보다 더 과거로 돌아가지 않게 한다. 강한 쓰기 순서와 빠른 로컬 읽기를 조합한 설계다.

### Znode API
- 계층적 이름 공간의 znode를 생성·읽기·갱신·삭제한다.
- version을 조건으로 갱신해 compare-and-set을 구현한다.
- ephemeral node는 session이 끝나면 사라져 활성 구성원 표시와 leader 선출에 쓸 수 있다.
- sequential node는 단조 증가 번호를 받아 순서를 만든다.
- watch는 상태 변화 알림을 제공하지만 한 번만 동작하므로 다시 등록해야 한다.

## 예시
분산 lock은 sequential ephemeral node를 만들고 자신보다 바로 앞 번호의 node를 watch하는 방식으로 구현할 수 있다. 모든 대기자가 leader 하나만 감시하는 herd effect를 피하고 순서도 유지한다.

## 요약
- 선형화 가능성은 실제 시간과 모순되지 않는 단일 실행 순서가 존재하는지를 묻는다.
- ZooKeeper는 큰 데이터를 저장하기보다 분산 애플리케이션의 조정 기능을 제공한다.
- 쓰기는 순서화하지만 replica 로컬 읽기는 stale할 수 있다는 트레이드오프가 있다.
- ephemeral·sequential node, version 조건부 쓰기, watch를 조합해 leader 선출과 lock을 만든다.
