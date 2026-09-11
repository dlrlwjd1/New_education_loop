# Services - Headless Service

## 개요
- StatefulSet과 함께 쓰이는 Headless Service의 개념 — IP가 없는 대신 Pod 각각에 DNS 항목을 생성해 Pod 간 직접 통신을 가능하게 하는 원리를 정리.

## 내용
### StatefulSet 개요 (배경 지식)
- Deployment/ReplicaSet과 마찬가지로 고가용성·장애 허용을 제공하는 컨트롤러이지만, **Stateful 애플리케이션**(데이터가 무엇보다 중요한 애플리케이션 — Oracle, etcd, PostgreSQL, MySQL, Redis 등)을 위해 설계됨.

### Headless Service란
- **IP 주소가 없는** 단순한 Service — 대신 Kubernetes DNS에 **Pod들의 항목을 직접 생성**.
- 일반 Service(ClusterIP, NodePort, LoadBalancer, ExternalName)는 **Service 자체에만 DNS 레코드**가 생성되고 개별 Pod에는 DNS 레코드가 생기지 않음 — 그래서 Pod끼리 이름으로 통신할 수 없고, Pod가 죽어 IP가 바뀌면 통신이 끊김.
- **Headless Service만 예외적으로 각 Pod(Pod1, Pod2, Pod3 등)에 대한 DNS 항목을 자동 생성** — Pod가 죽고 StatefulSet이 새 Pod를 만들어도(레이블이 일치해 Service가 자동으로 관리), **같은 DNS 이름**으로 여전히 그 Pod에 접근 가능(IP만 내부적으로 갱신됨).

### 사용 사례 — Pod 간 직접 통신
- 예: Pod2가 Pod1과 통신하고 싶을 때, Pod1의 IP는 Pod1이 죽으면 바뀌므로 IP로 통신할 수 없음. 이름으로 통신해야 하는데, 일반적으로 Pod 이름은 DNS로 해석되지 않음.
- Headless Service를 사용하면 Kubernetes가 각 Pod에 대한 DNS 항목을 만들어주므로, **Pod2가 Pod1의 DNS 이름으로 직접 통신** 가능 — 데이터베이스나 클러스터링된 애플리케이션처럼 Pod 간 직접 통신이 필요한 경우에 주로 사용.

### Headless Service YAML 예시
```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-headless-service
spec:
  clusterIP: None
  selector:
    app: my-app
```
- **`clusterIP: None`**이 핵심 — 이 한 줄만으로 IP 없는 Service(Headless)가 됨.
- `selector`에 지정된 레이블(`app: my-app`)과 일치하는 모든 Pod에 대해 Kubernetes가 자동으로 DNS 항목을 생성.
- Pod에 직접 접근하거나 Pod 간 직접 통신이 필요한 Stateful 애플리케이션에 유용한 구성.

## 요약
- Headless Service는 `clusterIP: None`으로 지정해 Service 자체는 IP를 갖지 않는 대신 Selector에 매칭되는 각 Pod에 개별 DNS 항목을 생성함으로써, Pod가 재생성되어 IP가 바뀌어도 동일한 DNS 이름으로 Pod 간 직접 통신이 가능하게 해주며, 주로 StatefulSet 기반 데이터베이스·클러스터링 애플리케이션에서 사용된다.
