# Docker Swarm - Introduction and Swarm Nodes

## 개요
- 단일 Docker Host의 단일 장애점(SPOF) 문제를 해결하는 컨테이너 오케스트레이터 Docker Swarm의 개념과, Manager/Worker 노드 구조를 정리.

## 내용
### 단일 Docker Host의 문제점
- 하나의 Docker Host에서 Nginx, MySQL, Kafka 등 여러 애플리케이션을 컨테이너로 운영하다가, **그 서버(OS)가 다운되면 모든 컨테이너가 함께 죽음** — 이는 **단일 장애점(Single Point of Failure)**이며 프로덕션 환경에 적합하지 않음.
- 컨테이너 하나가 죽었을 때도 문제 — 관리자가 직접 로그인해서 컨테이너를 수동으로 재생성해야 함. 주말이나 휴가 중이라 대응이 어려우면 애플리케이션 장애가 그대로 지속됨.
- 즉, 기본적으로는 **자동 복구(Self-healing/Fault Tolerance)** 기능이 없음 — CPU·메모리 사용량 급증, 애플리케이션 크래시, 실수로 인한 컨테이너 삭제 등이 발생해도 컨테이너가 자동으로 다시 시작되지 않음.

### Docker Swarm이란
- Docker가 제공하는 **컨테이너 오케스트레이터(Container Orchestrator)** — 컨테이너의 **고가용성(High Availability)**과 **장애 허용(Fault Tolerance)**을 제공.
- 단일 Docker Host 대신 **Docker 노드들의 클러스터(Cluster)**를 관리·배포하도록 설계됨 — 한 Docker Host가 죽어도, 그 위에서 실행되던 컨테이너가 **다른 Host에서 다시 생성**됨.

### Swarm 노드의 두 종류
1. **Manager Node** — Swarm 클러스터 전체의 관리를 담당.
   - `docker swarm service create` 같은 명령은 항상 Manager로 전달되며, Manager가 이를 Worker 노드에 할당(task 배분).
   - 클러스터 상태 관리, 쿼럼(quorum) 구성, 작업(task) 오케스트레이션과 Worker에게 작업을 배분하는 역할.
2. **Worker Node** — Manager가 할당한 작업(task)을 실제로 실행 — 필요에 따라 컨테이너화된 애플리케이션을 실행.
- Manager와 Worker 모두 Docker가 설치된 Docker Host이며, 차이는 **Manager가 클러스터 전체를 관리하는 역할**을 맡는다는 점.

## 요약
- 단일 Docker Host 운영은 서버 장애 시 모든 컨테이너가 함께 죽는 단일 장애점 문제와, 컨테이너 개별 장애 시 수동 복구가 필요한 문제를 안고 있어, Docker Swarm은 이를 해결하기 위해 Manager Node(클러스터 관리·작업 오케스트레이션)와 Worker Node(할당된 작업 실행)로 구성된 클러스터를 통해 고가용성과 장애 허용을 제공하는 컨테이너 오케스트레이터다.
