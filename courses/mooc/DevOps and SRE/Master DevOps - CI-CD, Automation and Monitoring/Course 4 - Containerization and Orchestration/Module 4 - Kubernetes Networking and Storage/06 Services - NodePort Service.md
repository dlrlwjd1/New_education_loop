# Services - NodePort Service

## 개요
- Pod를 외부 세계에 노출하는 NodePort Service의 동작 원리와 YAML 구성을 정리.

## 내용
### NodePort Service란
- Pod를 **외부 세계에서 접근 가능**하게 만드는 Service 타입.
- 특히 로드밸런서를 지원하지 않는 인프라 환경에서 외부 클라이언트에게 서비스를 노출할 때 유용.

### 동작 원리
1. Service의 `type`을 `NodePort`로 지정하면, Kubernetes가 **30000~32767 범위 내에서 무작위 포트**를 자동으로 할당(예: `31010`).
2. 이 Service는 **클러스터의 모든 노드**(Master, Worker 모두)에 걸쳐 노출됨.
3. 접근 방법: **어떤 노드의 IP든** + 할당된 NodePort 번호(예: `31010`)로 요청 → 요청이 Service의 포트(예: 80)로 전달 → Service가 다시 백엔드 Pod의 `targetPort`(예: 9376)로 전달.
4. 즉, Master 노드든 Worker 노드든 **클러스터의 어떤 노드 IP를 사용해도** 동일하게 접근 가능 — Kubernetes가 무작위로 할당한 NodePort로 모든 노드에서 서비스가 노출되기 때문.

### 외부 접근을 위한 전제 조건
- 노드(Master/Worker)가 **공인(Public) IP**를 가지고 있어야만 인터넷을 통해 접근 가능.

### YAML 예시
```yaml
apiVersion: v1
kind: Service
metadata:
  name: my-nodeport-service
spec:
  type: NodePort
  selector:
    app: my-app
  ports:
    - port: 80
      targetPort: 9376
      nodePort: 30070   # 선택 사항: 원하는 특정 NodePort 번호 직접 지정 가능
```
- **`type: NodePort`**(N, P 대문자) — ClusterIP YAML과 거의 동일하지만 이 필드만 추가됨.
- `nodePort`를 지정하지 않으면 30000~32767 범위에서 무작위로 자동 할당되지만, **원하는 특정 값을 직접 지정**할 수도 있음(예: `30070`).
- 접근 흐름: `<노드 IP>:30070` → Service 포트 80 → Pod의 targetPort 9376.
- **중요**: 트래픽은 항상 **Service를 거쳐서** Pod로 전달되며, Pod에 직접 도달하지 않음.

## 요약
- NodePort Service는 `type: NodePort`로 지정하면 Kubernetes가 30000~32767 범위에서 포트(또는 직접 지정한 `nodePort`)를 클러스터의 모든 노드에 노출시켜, 공인 IP를 가진 어떤 노드로든 `<노드 IP>:<NodePort>`로 접근하면 Service의 포트를 거쳐 Pod의 targetPort로 트래픽이 전달되는 외부 접근용 서비스 타입이다.
