# CNI plugins: Calico vs Flannel vs Weave Net

## 개요
- Kubernetes 네트워킹의 표준인 CNI(Container Network Interface)의 역할과, 대표적인 3가지 CNI 플러그인(Flannel, Calico, Weave Net)의 동작 방식·장단점·선택 기준을 정리.

## 내용
### Kubernetes 네트워크 모델
- Kubernetes는 **Flat, Pod당 IP 하나(Pod-per-IP)** 모델을 강제 — 각 Pod가 고유 IP를 받아, NAT 없이 노드를 넘나드는 Pod 간 통신이 가능.
- Pod가 시작될 때 적절한 네트워킹을 갖추도록 하는 것은 **CNI 플러그인**의 역할(kubelet이 CNI를 통해 설정).

### 1. Flannel — 단순한 Overlay 네트워크
- **계층**: L3 Overlay(기본 VXLAN 캡슐화).
- **메커니즘**: `flanneld`가 각 노드에 서브넷을 할당해 etcd에 저장하고, Pod는 그 서브넷에서 IP를 받음. 노드 간 트래픽은 호스트 네트워크 위에 VXLAN으로 캡슐화되어 Overlay를 형성.
- **장점**: 설정이 가장 간단하고, 중소규모 클러스터에 안정적.
- **단점**: **Kubernetes NetworkPolicy를 네이티브로 지원하지 않음**, 암호화·세밀한 보안 통제가 부족. Overlay로 인한 오버헤드가 있어 성능은 입문/개발용 수준.

### 2. Calico — 대규모 성능과 보안
- **계층**: BGP 라우팅 기반 L3 Underlay(IP-in-IP나 VXLAN은 선택 사항).
- **메커니즘**: BGP 프로토콜로 Pod 네트워크를 직접 라우팅 — 캡슐화 오버헤드가 없어(선택하지 않는 한) 더 나은 성능. Linux 커널 레벨(iptables 또는 eBPF)에서 Network Policy를 강제해 견고한 보안 통제 제공.
- **장점**: 대규모 클러스터에 이상적이고 확장성이 뛰어남. 고급 정책 강제, 암호화, 관측 가능성(observability) 제공.
- **단점**: 설치·설정이 더 복잡, BGP 지식이 필요.

### 3. Weave Net — 메시 Overlay, 기본적으로 안전
- **계층**: VXLAN 기반 L2 메시 Overlay + 내장 암호화 결합.
- **메커니즘**: 노드 간 피어투피어 메시를 형성해 모든 Pod를 연결하는 평평한(flat) 가상 L2 네트워크 구성. 선택적으로 `weave-npc`를 포함해 Network Policy 강제 가능. etcd 없이 자체적으로 설정을 관리해 배포가 단순함.
- **장점**: 보안 Overlay, 설정이 비교적 간단, 유연성이 필요한 동적 클러스터에 적합.
- **단점**: Overlay 오버헤드로 인해 Calico 대비 순수 성능은 다소 낮을 수 있으며, 정책 지원은 존재하지만 Calico만큼 포괄적이지 않음.

### 기능 비교표
| 기능 | Flannel | Calico | Weave Net |
|---|---|---|---|
| 네트워크 모델 | L3 Overlay(VXLAN) | L3 BGP/Underlay(IP-in-IP) | L2 메시 Overlay(VXLAN) |
| 성능 | 양호 | 최고 | 양호 |
| 확장성 | 중간 | 높음 | 높음 |
| Network Policy | 없음 | 커널 레벨 | weave-npc를 통해 |
| 설정 단순성 | 쉬움 | 복잡 | 보통 |
| 암호화 | 선택적(IPsec) | 지원(WireGuard/IPsec) | 내장(IPsec) |

### 언제 무엇을 쓸 것인가
- **스타트업/개발/테스트 클러스터**: **Flannel** — 빠르고 단순하며 정책이 필요 없을 때.
- **엔터프라이즈/대규모/보안이 중요한 환경**: **Calico** — 최상급 성능, 정책, 확장성이 필요할 때.
- **BGP 없이 암호화된 유연한 메시가 필요한 경우**: **Weave Net** — 적당한 복잡도로 안전한 Overlay가 필요할 때.

### 왜 중요한가
- **성능**: Overlay는 지연을 추가하고, Underlay는 더 빠름.
- **보안**: 멀티 테넌트나 규제가 있는 환경에서는 내장 정책 지원이 필수.
- **확장성과 유지보수**: BGP 기반이나 메시 솔루션이 성장과 변화에 더 효과적으로 대응.
- **운영 복잡도**: 단순한 CNI는 관리가 쉽지만 필요한 기능이 부족할 수 있음.

## 요약
- Flannel은 설정이 가장 쉽지만 Network Policy를 지원하지 않는 소규모용 Overlay CNI이고, Calico는 BGP 기반 Underlay로 최고 성능과 커널 레벨 정책을 제공하는 대규모·보안 중심 CNI이며, Weave Net은 BGP 없이도 기본 암호화를 갖춘 메시 Overlay로 중간 정도의 유연성을 제공하므로, 클러스터의 규모·보안 요구사항·운영 복잡도 감내 수준에 따라 선택해야 한다.
