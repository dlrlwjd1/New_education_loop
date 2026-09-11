# Docker Swarm - Architecture and Uses

## 개요
- Docker Swarm의 요청 처리 흐름(Service Discovery), 대표 사용 사례, 대체 도구(Kubernetes 등), 그리고 Swarm의 한계를 정리.

## 내용
### Docker Swarm 아키텍처 — 요청 흐름
1. CLI에서 `docker swarm service create` 명령 실행 → 이 명령은 항상 **Swarm Manager**로 전달됨.
2. Manager 안의 **Service Discovery** 컴포넌트가 이 명령(서비스 생성 요청 = 만들려는 애플리케이션/컨테이너)을 받아 처리.
3. Service Discovery가 자동으로 이 요청을 **Worker Node**(Swarm Node 1, 2 등)로 전달.
4. 모든 노드(Manager, Worker)에는 Docker Daemon이 설치되어 실행 중이지만, **Worker Node의 역할은 할당받은 작업(task)을 실제로 실행해 컨테이너를 생성**하는 것.
- 요약: 사용자 요청 → Manager(수신·오케스트레이션) → Worker(실제 컨테이너 생성).

### Docker Swarm의 사용 사례
1. **소규모~중간 규모 배포** — 단순성이 우선시되는 환경에서 배포·가용성을 신속히 확보하고 싶을 때.
2. **Docker 생태계와의 통합이 필요한 경우** — 여러 Docker Host(fleet)에 걸쳐 애플리케이션을 배포하고 싶을 때.
3. **멀티 클라우드/하이브리드 클라우드 환경** — 온프레미스 머신과 AWS·Azure 같은 클라우드 머신을 모두 Docker가 설치된 상태로 두고, 이들을 하나의 분산 Swarm 클러스터로 함께 관리하고 싶을 때 — 유연성이 강점.

### Docker Swarm의 대체 도구
- **Kubernetes** — 가장 널리 쓰이는 오픈소스 컨테이너 오케스트레이터(시장에 처음 등장한 오케스트레이터이기도 함).
- **Nomad**, **Apache Mesos(Mesosphere)** — 별도의 오케스트레이터.
- **Rancher(RKE, Rancher Kubernetes Engine)**, **K3S** — 엄밀히는 Kubernetes의 변형(flavor)에 가까움.
- 시장 점유율 기준으로는 Kubernetes가 1위, Docker Swarm이 2위 수준.

### Docker Swarm의 한계
- **기본적인 보안 기능만 제공** — Kubernetes 대비 보안 기능이 부족.
- **제한적인 확장성과 자동화** — 노드 수를 대규모(수천~수백만)로 확장하기 어렵고, 자동화 기능도 제한적.
- **리소스 관리의 제약** — 컨테이너·호스트별 리소스 관리 기능이 제한적.
- **제한적인 스토리지 옵션** — NetApp, Dell EMC 같은 서드파티 외부 스토리지 연동이 어려움(Kubernetes는 다양한 서드파티 스토리지 및 Worker Node 내장 스토리지를 모두 지원).
- 이런 한계 때문에 많은 조직이 Kubernetes로 이동하는 추세지만, Docker Swarm도 여전히 많은 프로덕션 환경에서 사용됨.

## 요약
- Docker Swarm은 CLI 요청이 Manager의 Service Discovery를 거쳐 Worker Node에서 컨테이너를 생성하는 구조로 동작하며, 소규모~중간 규모 배포나 하이브리드/멀티 클라우드 환경에 적합하지만, Kubernetes·Nomad·Mesos 같은 대안 대비 보안·확장성·자동화·스토리지 옵션 면에서 한계가 있어 대규모·복잡한 환경에서는 Kubernetes가 더 널리 선택된다.
