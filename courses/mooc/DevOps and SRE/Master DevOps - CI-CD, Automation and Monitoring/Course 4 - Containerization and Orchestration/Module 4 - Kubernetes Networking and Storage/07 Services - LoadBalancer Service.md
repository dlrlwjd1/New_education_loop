# Services - LoadBalancer Service

## 개요
- NodePort의 한계(노드 공인 IP 필요)를 해결하는 LoadBalancer Service의 동작 원리와, ClusterIP·NodePort·LoadBalancer 세 계층의 관계를 정리.

## 내용
### LoadBalancer는 "NodePort + 로드밸런서"
- NodePort의 단점: 외부에서 접근하려면 **Worker/Master 노드가 반드시 공인(Public) IP**를 가지고 있어야 함.
- **LoadBalancer = NodePort와 100% 동일한 동작 + 한 가지 추가 요소** — 클라우드 로드밸런서 통합.
- LoadBalancer 타입으로 만들어도 Kubernetes는 여전히 **30000~32767 범위에서 무작위 NodePort를 할당**(또는 YAML에 `nodePort`로 직접 지정 가능)하며, 이 서비스는 클러스터의 모든 노드(Master, Worker 관계없이)에 노출됨.
- 추가되는 것: 이 노드들 **위에 TCP 로드밸런서**가 하나 더 얹혀, 노드들 사이의 트래픽을 해당 NodePort로 로드밸런싱.

### 계층별 통신 구조
- **ClusterIP 계층** — Service만 존재, 외부 접근 불가(클러스터 내부 전용).
- **NodePort 계층** — Service가 모든 노드에 특정 포트(NodePort)로 노출됨. 사용자는 특정 노드의 IP:NodePort로 직접 접근.
- **LoadBalancer 계층** — 노드들 위에 TCP 로드밸런서가 추가되어, 사용자는 이제 **특정 노드의 IP가 아니라 로드밸런서의 공인 IP**를 사용. 로드밸런서 → (Master/Worker 중 아무 노드나) → NodePort → Service Port → Pod의 targetPort로 이어지는 흐름.
- 즉, "**로드밸런서까지의 구간이 로드밸런서 계층, 로드밸런서에서 Service까지가 NodePort 계층, Service에서 Pod까지가 ClusterIP 계층**"이라는 3단 구조로 이해할 수 있음.

### 사용 조건과 대안
- 노드에 공인 IP가 없을 때 서비스를 외부에 노출하고 싶다면 LoadBalancer 사용.
- 주로 **퍼블릭 클라우드**(로드밸런서를 기본 제공)와 함께 사용.
- **온프레미스 Kubernetes 클러스터**에서는 클라우드 로드밸런서가 없으므로, 서드파티 도구인 **MetalLB**를 배포해 LoadBalancer Service를 구현 가능.
- 클라우드 제공자와 통합되어 외부 로드밸런서로 서비스를 노출하며, **단일하고 안정적인 외부 IP 주소**로 클러스터 외부에서 애플리케이션에 접근해야 하는 경우에 적합.

## 요약
- LoadBalancer Service는 NodePort와 동일한 방식으로 동작하되 그 위에 클라우드 제공 TCP 로드밸런서를 추가해, 사용자가 특정 노드의 공인 IP가 아니라 단일하고 안정적인 로드밸런서 IP로 애플리케이션에 접근할 수 있게 하며, 퍼블릭 클라우드에서 기본 지원되고 온프레미스에서는 MetalLB 같은 서드파티 도구로 구현 가능하다.
