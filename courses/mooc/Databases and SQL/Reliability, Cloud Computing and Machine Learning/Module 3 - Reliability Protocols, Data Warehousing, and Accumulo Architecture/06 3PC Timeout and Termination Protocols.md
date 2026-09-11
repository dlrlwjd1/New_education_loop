# 3PC Timeout and Termination Protocols

## 개요

- 3단계 커밋(3PC, three-phase commit) 프로토콜과 그 타임아웃(timeout)·종료 프로토콜(termination protocol)을 다룬다.
- 3PC는 2단계 커밋(2PC)의 블로킹(blocking) 문제를 해결하기 위해 **사전 커밋 상태(pre-commit state)** 를 코디네이터(coordinator)와 참여자(participant) 양쪽에 추가한다.
- 이로써 참여자가 어떤 상태에서 타임아웃하더라도 결코 블로킹되지 않는(non-blocking) 성질을 얻는다.

## 내용

### 3PC의 핵심 변경 — pre-commit 상태

- 2PC에서는 코디네이터의 wait 상태(또는 참여자의 ready 상태)가 commit/abort와 바로 인접해 있어, 참여자가 어느 상태로 가야 할지 몰라 블로킹될 수 있었다.
- 3PC는 wait/ready와 commit 사이에 **pre-commit 상태**를 삽입한다.
  - pre-commit 단계에서는 코디네이터와 참여자 모두 "yes, 커밋하겠다"고 결정했지만 아직 실제로 커밋하지는 않은 상태다.
  - "정말 커밋할 것인가?"를 한 번 더 확인할 마지막 기회를 준다.
- 이 단계 덕분에 "정말 커밋할지" 확인하는 지점에서 abort가 가능해지고, 참여자가 non-blocking·독립적(independent)으로 동작해 코디네이터나 다른 참여자가 다운되어도 진행할 수 있다.

### 3PC 상태 전이 (state transition)

- **코디네이터**:
  - 초기 상태에서 모든 참여자에게 "prepare, 커밋할 것인가?" 메시지를 보내고 wait 상태로 이동.
  - 한 참여자라도 no면 global abort.
  - 모두 yes면 pre-commit 상태로 이동, 참여자들에게 "정말 커밋할 것인가?"를 확인.
  - 다시 모두 yes면 참여자들에게 "truly commit" 메시지를 보내고 commit 상태로 이동.
- **참여자**:
  - 초기 상태에서 prepare 수신 → abort하면 abort 상태로 이동해 코디네이터에 통보, commit하면 ready 상태로 이동해 코디네이터에 통보하고 대기.
  - 코디네이터가 모든 참여자의 commit을 받으면 "prepare to commit" 메시지를 보내고 참여자는 pre-commit 상태로 이동해 최종 지시를 기다림.
  - 코디네이터가 pre-commit 상태에서 확신이 서면 "정말 커밋하라" 메시지를 보내고 참여자들이 실제로 commit.

### 코디네이터 타임아웃

- **wait 상태 타임아웃**: 일부 참여자의 응답을 못 받음. 일방적으로 abort하고 global abort 메시지를 보낸다.
- **pre-commit 상태 타임아웃**: 미응답 참여자가 pre-commit에 도달했는지는 모르지만 최소 ready 상태임은 확실(모두 commit 투표해야 여기 옴). prepare-commit 메시지를 모두에게 보내 global commit하고, 참여자들을 pre-commit 상태로 이동시킨다.
- **commit 또는 abort 상태 타임아웃**: 참여자가 실제 커밋/취소를 완료했는지는 모르지만 투표는 확인됨(abort 상태면 취소 준비, commit 투표면 최소 pre-commit 상태). 종료 프로토콜을 따라 복구한다.

### 참여자 타임아웃 — 블로킹이 없다

- **초기 상태 타임아웃**: 2PC와 동일. prepare를 못 받았으므로 코디네이터 장애로 보고 일방적으로 abort.
- **ready 상태 타임아웃**: 2PC에서는 블로킹 상태였다. 3PC에서는 이미 commit에 투표했으나 아직 pre-commit으로 가지 않았으므로 **트랜잭션을 종료할 두 번째 기회**가 있다. 새 코디네이터를 선출해 트랜잭션을 종료하며, 한 번 commit 투표했더라도 다시 커밋할 필요 없이 종료할 수 있어 **블로킹되지 않는다**.
- **pre-commit 상태 타임아웃**: 이미 두 번 commit 의사를 밝혔고 코디네이터로부터 prepare-to-commit을 받은 상태 → 모든 참여자가 commit을 결정했음이 확실. global commit을 기다리되, 코디네이터 소식이 없으면 새 코디네이터를 선출한다. 새 코디네이터는 이 늦은 단계에서도 트랜잭션을 종료해 전체가 일관되게 끝나도록 보장한다.
- 따라서 참여자가 **어느 상태에서 타임아웃하더라도 블로킹 단계는 결코 없다.**

### 종료 프로토콜 (termination protocol)

- 새로 선출된 코디네이터는 **자신의 상태를 모든 참여자에게 보내** 그 상태를 따르도록 요청한다.
- 그 상태를 이미 지난 참여자는 메시지를 무시하고 적절한 응답만 보낸다. 전 과정이 non-blocking이며, 새 코디네이터는 이전 코디네이터가 있던 지점까지 따라잡는다.
- 상태별 조치:
  - 코디네이터가 **wait 상태**면 트랜잭션을 global abort한다. 이때 참여자가 **pre-commit 상태**라면 원래 상태도에는 없던 **pre-commit → abort 전이를 새로 만들어** abort로 이동시킨다.
  - 코디네이터가 **pre-commit 상태**면 어떤 참여자도 abort 상태일 수 없으므로(모두 commit 투표) global commit을 보내 모두 커밋.
  - 코디네이터가 **abort 상태**면 모든 참여자를 abort 상태로 이동.
- 결과적으로 코디네이터도 참여자도 블로킹되지 않으며, 트랜잭션은 전체가 commit하거나 전체가 abort한다. (사이트가 타임아웃/이탈했다면, 원래 필요 없던 abort가 일어날 수는 있다.) 이렇게 블로킹 없이 원자성(atomicity)을 달성한다.

## 요약

- 3PC는 wait/ready와 commit 사이에 pre-commit 상태를 추가해 2PC의 블로킹 문제를 해결한다.
- 코디네이터는 wait 타임아웃 시 global abort, pre-commit 타임아웃 시 global commit으로 진행한다.
- 참여자는 ready 타임아웃 시 아직 pre-commit 전이므로 종료(abort)할 수 있고, pre-commit 타임아웃 시 새 코디네이터가 커밋을 마무리하므로 어느 상태에서도 블로킹되지 않는다.
- 종료 프로토콜에서 새 코디네이터는 자신의 상태를 참여자에게 전파하며, 필요 시 pre-commit → abort 전이를 새로 만들어 사용한다.
- 3PC는 블로킹 없이 전체 commit 또는 전체 abort의 원자성을 보장한다.
