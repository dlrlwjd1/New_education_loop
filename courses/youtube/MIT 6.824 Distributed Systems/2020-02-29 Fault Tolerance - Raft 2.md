# Lecture 7: Fault Tolerance — Raft (2)

## 개요
- 업로드일: 2020-02-29
- 원본: https://www.youtube.com/watch?v=4r8Mz3MMivY
- 강좌: MIT 6.824 Distributed Systems (Spring 2020)
- 핵심 주제: Raft 로그 복제, 로그 불일치 복구, commit 안전성, 영속 상태와 snapshot

## 내용
### AppendEntries와 Log Matching
leader는 새 항목과 함께 바로 앞 항목의 `prevLogIndex`와 `prevLogTerm`을 보낸다. follower의 해당 위치가 일치하지 않으면 요청을 거부한다. leader는 다음 전송 위치를 뒤로 이동해 공통 prefix를 찾고, 충돌하는 suffix를 leader의 로그로 교체한다.

같은 index와 term을 가진 두 항목은 같은 명령이며, 그 앞의 로그도 동일하다는 log matching property가 만들어진다.

### Commit 규칙
현재 term의 항목이 과반수에 복제되면 leader는 이를 commit할 수 있다. 이전 term의 항목을 복제본 수만 보고 직접 commit하면 특정 장애 순서에서 이미 commit됐다고 생각한 값이 새 leader에 의해 덮일 수 있다. 현재 term 항목을 commit하면 그 앞의 이전 항목도 함께 안전해진다.

### Leader election과 로그 최신성
투표자는 candidate의 마지막 로그 term과 index가 자신의 로그보다 최신인지 확인한다. 이 제한과 과반수 교집합 때문에 commit된 항목을 가진 서버 없이는 새 leader가 될 수 없다. 이것이 leader completeness를 보장한다.

### 영속성과 snapshot
`currentTerm`, `votedFor`, 로그는 응답 전에 안정 저장소에 기록해야 재시작 후 약속을 어기지 않는다. 로그가 계속 커지는 문제는 특정 index까지의 상태 머신 결과를 snapshot으로 저장하고 그 이전 로그를 버려 해결한다. 뒤처진 follower에는 로그 대신 snapshot을 전송한다.

## 예시
```text
Leader:   [1,1,2,2,5,6]
Follower: [1,1,2,2,4,4]
                     ↑ prev term 불일치
Leader가 nextIndex를 줄여 공통 prefix를 찾은 뒤 [5,6]으로 교체
```

## 요약
- `prevLogIndex`와 `prevLogTerm` 검사가 모든 로그를 같은 prefix로 수렴시킨다.
- 현재 term의 항목을 과반수에 복제했을 때 commit해야 안전하다.
- 최신 로그를 가진 후보에게만 투표해 commit된 항목이 새 leader에도 남게 한다.
- term·투표·로그의 영속화와 snapshot은 재시작과 장기 실행에 필수다.
