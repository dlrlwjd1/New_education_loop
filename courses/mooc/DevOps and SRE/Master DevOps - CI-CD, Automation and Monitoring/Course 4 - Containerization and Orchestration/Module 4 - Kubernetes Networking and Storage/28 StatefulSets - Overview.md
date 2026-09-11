# StatefulSets - Overview

## 개요
- Stateful 애플리케이션(데이터베이스 등)을 관리하기 위한 전용 컨트롤러인 **StatefulSet**을 소개하고, 핵심 특징인 순서 있는 프로비저닝(Ordered Provisioning), 고유한 네트워크 정체성(Unique Identity), 고유 스토리지(Unique Storage)를 설명.

## 내용
### StatefulSet이란
- Deployment, ReplicaSet, ReplicationController와 마찬가지로 Kubernetes의 또 다른 **컨트롤러**.
- **Stateful 애플리케이션**을 관리·배포하기 위한 전용 컨트롤러 — Stateful 애플리케이션이란 볼륨·스토리지·데이터에 완전히 의존하는 애플리케이션(예: MySQL, Oracle, Redis 등). 데이터가 사라지면 애플리케이션 자체가 무의미해지는 애플리케이션.
- StatefulSet은 stateful 애플리케이션의 배포와 스케일링을 관리하며, **각 Pod가 고유하고 지속적인 정체성(identity)을 유지**하도록 보장.

### 특징 1 — 고유한 네트워크 정체성(Unique Network Identity)
- 예: `mysql-sts`라는 이름의 StatefulSet을 `replicas: 3`으로 생성하면, Pod 이름이 순서대로 **`mysql-sts-0`, `mysql-sts-1`, `mysql-sts-2`**로 고정됨.
- Pod가 죽으면 재생성되지만 **이름은 항상 동일하게 유지**됨(예: `mysql-sts-0`이 죽어도 재생성된 Pod는 다시 `mysql-sts-0`) — **IP는 바뀔 수 있지만 이름은 절대 바뀌지 않음**.

### 특징 2 — 순서 있는 프로비저닝(Ordered Provisioning)
- `replicas: 3`인 StatefulSet에서, **첫 번째 Pod(`mysql-sts-0`)가 완전히 정상 기동된 후에야 다음 Pod(`mysql-sts-1`)가 생성**되고, 그 다음도 마찬가지로 순차적으로 진행.
- 만약 `mysql-sts-0`이 실패하면, **다음 Pod(`mysql-sts-1`)는 아예 생성되지 않음** — 이전 Pod가 성공적으로 실행되어야만 다음 단계로 진행.
- Deployment/ReplicaSet/ReplicationController는 모든 Pod를 **동시에** 만들지만, StatefulSet은 이렇게 만들지 않음 — **한 번에 하나씩 순서대로** 생성.
- 사용 사례: **마스터-슬레이브(master-slave) 아키텍처**로 데이터베이스를 배포할 때 유용 — 0번 Pod가 마스터로 먼저 기동되어야 하고, 그 다음에 1번, 2번 슬레이브(읽기 전용 복제본)가 마스터로부터 데이터를 복제하며 순서대로 기동됨. 마스터가 온라인이 아니면 슬레이브 Pod들은 복제할 대상이 없으므로 의미가 없음.
- StatefulSet을 **삭제**할 때도 순서가 지켜짐 — 마지막 Pod(2번)부터 역순으로 삭제되고, 마지막에 0번 Pod가 삭제됨(생성의 역순).

### 특징 3 — 고유 스토리지(Unique Storage)
- `mysql-sts`를 `replicas: 3`으로 만들면 0, 1, 2번 Pod가 생성되는데, **각 Pod는 반드시 자신만의 Persistent Volume을 가져야 함** — 볼륨 없이는 StatefulSet의 컨테이너가 정상적으로 실행되지 않음.
- `replicas`를 3에서 4로 늘리면, 새 Pod가 생성되기 **전에 먼저 Persistent Volume이 생성**되고 이 볼륨이 새 Pod에 연결·마운트됨.

## 요약
- StatefulSet은 데이터베이스처럼 상태(state)가 중요한 애플리케이션을 위한 전용 컨트롤러로, Pod 이름이 `<이름>-0`, `<이름>-1`처럼 고정되어 IP가 바뀌어도 이름이 유지되는 **고유 네트워크 정체성**, 이전 Pod가 정상 기동되어야만 다음 Pod가 생성·삭제되는 **순서 있는 프로비저닝**, 그리고 각 Pod마다 전용 Persistent Volume이 연결되는 **고유 스토리지**라는 세 가지 특징을 가지며, 마스터-슬레이브 데이터베이스 아키텍처 같은 순서·상태가 중요한 배포에 특히 유용하다.
