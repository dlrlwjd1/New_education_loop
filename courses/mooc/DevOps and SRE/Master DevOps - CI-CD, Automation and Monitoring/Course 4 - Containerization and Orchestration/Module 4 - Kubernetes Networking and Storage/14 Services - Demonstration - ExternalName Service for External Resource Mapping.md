# Services - Demonstration - ExternalName Service for External Resource Mapping

## 개요
- LoadBalancer가 GCP에 실제 TCP 로드밸런서를 생성해 External IP로 접근되는 과정을 확인하고, 클러스터 외부 리소스를 매핑하는 ExternalName Service를 설정하는 실습.

## 내용
### LoadBalancer의 External IP 확인
```bash
kubectl get svc   # nginx-loadbalancer의 EXTERNAL-IP 확인(예: 34.27.241.27)
```
- NodePort와 달리 LoadBalancer는 실제 **External IP**가 할당됨.
- `http://<노드 IP>:30234`(NodePort 방식)로도 여전히 접근 가능하지만, **`http://<External IP>`**(포트 지정 없이 Service Port로 바로)로도 접근 가능 — 둘 다 "Welcome to nginx!" 정상 응답.

### 백엔드에서 실제로 생성되는 GCP 로드밸런서
- GCP 콘솔 **Networking → Network services → Load balancing**에서, LoadBalancer 타입 Service를 만들 때 Kubernetes가 클라우드 제공자에게 요청해 실제로 만든 **TCP Load Balancer**를 확인 가능 — 이 로드밸런서의 IP가 곧 Service의 External IP.

### LoadBalancer 전체 통신 경로
- **LoadBalancer → (Service Port로) → 임의의 노드(NodePort, 예: 30234) → Service IP:Service Port → Pod IP:Target Port(80)**.
- 구간별로 보면: LoadBalancer 구간(사용자→로드밸런서) + NodePort 구간(로드밸런서→노드→Service) + ClusterIP 구간(Service→Pod) 세 구간이 합쳐진 것.
- **LoadBalancer Service를 삭제하면, GCP에 생성됐던 실제 로드밸런서도 자동으로 함께 삭제됨**.

### ExternalName Service 설정
- 목적: **Kubernetes 외부**에 있는 리소스(예: Pod로 실행되지 않고 별도 서버에서 실행 중인 데이터베이스)를 클러스터 내부로 매핑 — Pod가 이 외부 데이터베이스와 통신하고 싶을 때, 클러스터 안에 이 외부 엔티티를 가리키는 Service를 만들어 Pod가 그 Service를 통해 통신.
```yaml
apiVersion: v1
kind: Service
metadata:
  name: external-service
  namespace: default
spec:
  type: ExternalName
  externalName: mydb.example.com
```
- **`namespace: default`** — 명시하지 않아도 기본적으로 `default` 네임스페이스에 생성됨.
- **`type: ExternalName`**(대문자 E, N).
- **`externalName`** — 매핑할 외부 리소스(예: 데이터베이스 서버)의 도메인 이름 — 이 리소스는 Pod로 실행되는 것이 아니라 별도 서버·VM에서 실행되며, DNS 이름만 알고 있으면 매핑 가능.

## 요약
- LoadBalancer Service는 실제로 클라우드에 TCP 로드밸런서를 생성해 External IP를 통해 접근 가능하게 하며(삭제 시 로드밸런서도 함께 제거), ExternalName Service는 Kubernetes 외부에서 별도로 실행되는 리소스(예: 외부 데이터베이스 서버)의 도메인 이름을 `externalName`에 지정해 클러스터 내부 Pod가 그 외부 리소스와 통신할 수 있게 매핑하는 역할을 한다.
