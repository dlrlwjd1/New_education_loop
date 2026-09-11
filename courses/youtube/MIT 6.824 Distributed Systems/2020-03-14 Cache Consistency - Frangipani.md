# Lecture 11: Cache Consistency — Frangipani

## 개요
- 업로드일: 2020-03-14
- 원본: https://www.youtube.com/watch?v=-pKNCjUhPjQ
- 강좌: MIT 6.824 Distributed Systems (Spring 2020)
- 핵심 주제: Frangipani 분산 파일 시스템의 cache coherence, 분산 lock, write-ahead log와 crash recovery

## 내용
### 구조
Frangipani는 기존 UNIX 애플리케이션에 하나의 공유 파일 시스템처럼 보인다. 각 workstation의 Frangipani server가 파일 시스템 로직과 cache를 담당하고, 하부의 Petal은 여러 서버에 복제된 가상 디스크를 제공한다. 모든 server가 같은 disk block에 접근할 수 있어 별도 파일 배치 관리가 단순해진다.

### Lock 기반 cache coherence
분산 lock service가 파일·디렉터리·메타데이터 block의 접근을 조정한다. server가 write lock을 얻으면 다른 server가 가진 충돌 cache를 회수(revoke)해야 한다. lock을 해제하기 전에 dirty block을 Petal에 써서 다음 lock 소유자가 최신 데이터를 보게 한다.

lock은 동시성 제어뿐 아니라 cache coherence의 통신 수단이다. 여러 server가 직접 cache protocol을 구현하는 대신 lock 획득·회수 순서가 데이터 전달 시점을 정한다.

### 트랜잭션과 복구
파일 생성이나 rename은 inode, directory entry, free bitmap 등 여러 block을 함께 바꾼다. Frangipani server는 자신의 private write-ahead log에 변경을 먼저 기록한 뒤 실제 block을 갱신한다.

server가 죽으면 lock service가 이를 감지하고 recovery daemon이 그 server의 log를 재생한다. 복구가 끝나기 전에는 해당 server가 보유했던 lock을 다른 server에 넘기지 않아, 부분 적용된 상태를 관찰하지 못하게 한다. redo 연산은 반복 적용해도 같은 결과가 되도록 설계한다.

## 예시
파일 생성 중 server가 inode만 기록하고 directory entry 전에 죽어도, log에 전체 갱신 내용이 있다. 복구자가 log를 재생한 뒤 lock을 해제하므로 다른 client는 완전한 생성 전후 중 하나만 본다.

## 요약
- Frangipani는 공유 Petal 저장소 위에 여러 파일 server와 cache를 둔다.
- 분산 lock이 상호 배제와 cache coherence를 동시에 제공한다.
- server별 write-ahead log가 여러 block 갱신을 원자적으로 복구하게 한다.
- 복구와 lock 재할당의 순서를 결합해야 crash 중간 상태가 노출되지 않는다.
