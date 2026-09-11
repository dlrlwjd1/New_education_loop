# ReplicaSet and ReplicationController - Use Cases

## 개요
- ReplicaSet YAML 예시를 상세히 살펴보고, ReplicaSet의 사용 사례(고가용성·로드밸런싱·수평 확장)와 ReplicationController의 정의를 정리.

## 내용
### ReplicaSet YAML 구조
```yaml
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: example-replicaset
spec:
  replicas: 3
  selector:
    matchLabels:
      app: example
  template:
    metadata:
      labels:
        app: example
    spec:
      containers:
        - name: example-container
          image: example-image:latest
```
- Kubernetes 리소스 YAML은 항상 **`apiVersion`, `kind`, `metadata`, `spec`** 네 섹션으로 구성(Pod, Deployment 등 어떤 리소스든 동일).
- **`kind: ReplicaSet`** — `apps/v1` 그룹에 속하는 리소스.
- **`spec.replicas: 3`** — ReplicaSet이 관리할 Pod 수(3개).
- **`spec.selector.matchLabels`** — `app: example` 레이블(키: `app`, 값: `example`)과 일치하는 Pod만 이 ReplicaSet의 관리 대상으로 인식.
- **`spec.template`** — ReplicaSet이 생성할 Pod의 스펙(레이블, 컨테이너, 이미지 `example-image:latest`) — 3개 Pod 모두 이 템플릿 그대로 생성됨.

### ReplicaSet의 사용 사례
1. **고가용성(High Availability)** — Replica 3개로 ReplicaSet을 만들면, 하나가 오프라인이 되어도 나머지 2개로 서비스를 계속 유지.
2. **로드밸런싱(Load Balancing)** — 단일 Pod에 의존하지 않고 여러 Pod에 트래픽을 분산.
3. **수평 확장(Horizontal Scaling)** — 트래픽 증가에 따라 Replica 수를 3 → 4 → 5 → 7 등으로 늘리거나(Scale Up), 트래픽 감소 시 줄일(Scale Down) 수 있음.

### ReplicationController란
- ReplicaSet과 유사하게 지정된 수의 Pod Replica가 항상 실행되도록 보장 — 작은 차이점은 이후 강의에서 다룸.
- 클러스터를 모니터링하며 desired 개수를 유지하기 위해 자동으로 Pod를 추가하거나 제거.
- 예: Replica 2로 ReplicationController를 만들면 Pod 2개를 생성해 고가용성을 제공하고, 그중 하나가 오프라인이 되면 자동으로 재생성해 장애 허용도 함께 제공.
- 즉, 클러스터를 모니터링하며 자동으로 Pod를 추가·제거해 애플리케이션의 고가용성과 회복력(Resilience, 장애 허용)을 보장.

## 요약
- ReplicaSet YAML은 `replicas`(개수)·`selector`(레이블 매칭)·`template`(생성할 Pod 스펙)으로 구성되며 고가용성·로드밸런싱·수평 확장을 제공하고, ReplicationController도 이와 유사하게 desired Pod 수를 모니터링해 자동으로 유지함으로써 고가용성과 장애 허용을 보장한다.
