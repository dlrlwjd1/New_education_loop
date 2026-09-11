# Summary: Kubernetes Networking and Storage

## 개요
- Module 4 "Kubernetes Networking and Storage" 전체를 4개 레슨으로 정리한 공식 요약.

## 내용
### Lesson 1 — Kubernetes Services and Networking
- 레이블(Labels), 셀렉터(Selectors), 어노테이션(Annotations), 그리고 여러 Service 타입(ClusterIP, NodePort, LoadBalancer, ExternalName, Headless) 같은 Kubernetes 네트워킹 구성 요소를 다루고 실습.
- 이를 통해 클러스터 안에서 Service가 어떻게 연결되고 트래픽을 라우팅하는지 이해.

### Lesson 2 — Working with Persistent Storage in Kubernetes
- Persistent Volume, 접근 모드(Access Mode: RWO/RWX/ROX), Ephemeral Volume(`emptyDir`), Persistent Volume Claim(PVC)을 실습 예제와 함께 다룸.
- Kubernetes 환경에서 **데이터 지속성(data persistence)**이 어떻게 이뤄지는지에 대한 통찰을 제공.

### Lesson 3 — Advanced Kubernetes Concepts: StatefulSets, ConfigMaps, and Helm
- Headless Service, StatefulSet, ConfigMap, Secret, 그리고 Helm 패키지 관리 같은 고급 주제를 데모와 함께 다룸.
- 이러한 개념들은 더 복잡한 **stateful 애플리케이션**과 **패키지 관리**를 지원.

### Lesson 4 — Monitoring and Visualizing Kubernetes Metrics with Prometheus and Grafana
- Kubernetes 클러스터를 위한 Prometheus 모니터링 설정 — Exporter 구성과 알림(alerting)을 포함한 Grafana 대시보드 생성까지 다룸.
- 이는 **선제적(proactive) 모니터링과 사고 대응(incident response)**을 가능하게 함.

## 요약
- 이 모듈은 Service·네트워킹 기초(Lesson 1), Persistent/Ephemeral Volume을 통한 데이터 지속성(Lesson 2), StatefulSet·ConfigMap·Secret·Helm을 활용한 고급 애플리케이션 관리(Lesson 3), Prometheus·Grafana를 이용한 모니터링과 알림(Lesson 4) 순서로 Kubernetes의 네트워킹과 스토리지 전반을 다뤘다.
