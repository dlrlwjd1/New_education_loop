# ReplicaSet and ReplicationController - Defining ReplicaSet

## 개요
- ReplicaSet의 정의와 목적(고가용성·장애 허용), 그리고 ReplicaSet YAML의 3가지 핵심 필드(Selector, Replicas, Pod Template)를 정리.

## 내용
### ReplicaSet이란
- Pod의 **고가용성과 장애 허용**을 제공하는 Kubernetes 컨트롤러.
- 예: Replica를 3으로 설정한 ReplicaSet을 만들면 같은 애플리케이션의 Pod 3개를 생성(고가용성). 그중 하나가 죽으면 ReplicaSet이 자동으로 새 Pod를 만들어 개수를 유지(장애 허용, 자동 복구/self-healing).
- 클러스터 안에서 **지정된 수의 동일한(identical) Pod가 항상 실행되도록 보장**하는 컨트롤러 — 주 목적은 desired Pod 수(Replica)를 유지하며 실패·종료된 Pod를 자동으로 교체해 애플리케이션 가용성과 회복력을 보장하는 것.
- 예: MySQL용 ReplicaSet(Pod 3개), HTTPD용 ReplicaSet(Pod 2개), Redis용 ReplicaSet(Pod 4개)처럼 **애플리케이션마다 별도의 ReplicaSet**을 만들며, 각 ReplicaSet은 항상 동일한 종류의 Pod만 관리.

### ReplicaSet 정의 방법
- 명령 하나로 즉석 생성하는 방식이 아니라 **YAML(또는 JSON) 매니페스트**로 정의한 뒤 실행:
```bash
kubectl create -f replicaset.yaml
```

### 핵심 필드
1. **`replicas`** — ReplicaSet이 관리할 Pod의 개수(예: 3으로 지정하면 Pod 3개 관리).
2. **`selector`** — 어떤 Pod를 관리 대상으로 삼을지 **레이블(Label)** 기준으로 지정. 레이블은 Pod를 식별하기 위한 태그이며, `selector`에 지정된 레이블과 일치하는 Pod들을 ReplicaSet이 관리 대상으로 인식.
3. **`template`(Pod Template)** — ReplicaSet이 새로 만들 Pod의 설정(어떤 컨테이너·이미지를 쓸지, Pod 이름·레이블 등)을 정의 — ReplicaSet은 이 템플릿을 참고해 필요한 만큼 Pod를 생성.

## 요약
- ReplicaSet은 지정된 수의 동일한 Pod가 항상 실행되도록 유지해 고가용성·장애 허용을 제공하는 컨트롤러이며, YAML로 `replicas`(개수), `selector`(레이블 기반 대상 지정), `template`(새 Pod 생성 시 참고할 설정)을 정의해 `kubectl create -f`로 배포한다.
