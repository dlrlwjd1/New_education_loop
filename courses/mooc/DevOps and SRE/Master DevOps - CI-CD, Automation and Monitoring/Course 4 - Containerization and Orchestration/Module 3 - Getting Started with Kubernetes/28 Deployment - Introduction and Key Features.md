# Deployment - Introduction and Key Features

## 개요
- Kubernetes Deployment의 정의와 ReplicaSet과의 관계, 그리고 핵심 기능(선언적 업데이트, 스케일링, 롤링 업데이트/롤백)을 정리.

## 내용
### Deployment란
- 애플리케이션(Pod)을 배포하기 위한 Kubernetes 컨트롤러 — 주 목적은 **고가용성과 장애 허용** 제공.
- Kubernetes 클러스터에서 실행되는 애플리케이션에 **선언적 업데이트(Declarative Updates)**를 제공하는 리소스.
- Deployment는 ReplicaSet, ReplicationController와 마찬가지로 Pod를 관리하지만, **내부적으로 ReplicaSet을 활용**해 desired state를 관리 — 예: "Deployment에 Pod 3개"라고 정의하면, Deployment가 먼저 ReplicaSet을 만들고 그 ReplicaSet이 실제로 Pod 3개를 생성.

### 왜 ReplicaSet을 직접 쓰지 않고 Deployment를 쓰는가
- Deployment는 ReplicaSet 위에 **고급 기능**을 추가로 제공하기 때문. 예: **오토스케일링** — 컨테이너의 CPU 사용률이 70%를 넘으면 자동으로 스케일 업하도록 설정하면, Deployment가 내부 ReplicaSet을 통해 Pod를 추가 — 이런 자동 확장은 Deployment에서만 제공됨.

### Deployment의 핵심 기능
1. **선언적 업데이트(Declarative Updates)** — 애플리케이션의 원하는 상태(desired state) 전체를 YAML 매니페스트 파일 하나에 선언하고 실행 — Kubernetes는 Pod나 노드가 실패해도 이 상태가 항상 유지되도록 보장.
2. **스케일링(Scaling)** — 수동 스케일링(예: Pod 2개 → 3개)뿐 아니라, CPU 사용률 같은 임계치를 기준으로 자동 스케일 업/다운 가능(CPU가 70%를 넘으면 확장, 낮아지면 축소).
3. **롤링 업데이트와 롤백(Rolling Updates and Rollbacks)** — 애플리케이션이 라이브 상태로 실행 중일 때 버전을 업데이트(예: 1.21 → 1.22)하는 롤링 업데이트를 수행할 수 있고, 새 버전이 마음에 들지 않으면 롤백(이전 버전으로 되돌림)도 가능 — **무중단(Zero Downtime)**으로 업데이트를 배포하고 필요 시 롤백 가능.

## 요약
- Deployment는 내부적으로 ReplicaSet을 활용해 Pod의 고가용성·장애 허용을 제공하면서, YAML로 선언한 desired state를 항상 유지하는 선언적 업데이트, CPU 임계치 기반 자동 스케일링, 그리고 무중단 롤링 업데이트·롤백이라는 고급 기능을 추가로 제공하는 컨트롤러다.
