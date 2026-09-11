# Jenkins Master-Slave Architecture

## 개요
- Jenkins Master(Controller)와 Worker(Slave) 노드 구조, 특징·이점, Static vs Dynamic Slave를 설명.

## 내용
### Master-Slave(Worker) 구조란
- **Master(Controller)** — 워크로드를 워커 노드에 분배하는 메인 서버. Jenkins는 오직 Master에만 설치된다.
- **Worker(Slave)** — Master가 보낸 task를 실행하는 서버(Windows, Ubuntu, Red Hat 등). Worker에는 Jenkins가 설치되어 있지 않다.
- 프로젝트 매니저(Master)가 팀원(Worker)에게 작업을 할당하는 구조와 유사.

### 핵심 특징
- 여러 머신에 작업을 분산 실행 가능 — 하나의 Master가 Windows, Linux, Linux2 등 여러 서버에 동일한 빌드를 배포해 **일관성** 확보
- **설정 관리(Configuration Management)** — 여러 머신에 동일한 활동(빌드·배포)을 설정 가능
- 여러 작업을 워커 노드에 분산해 **병렬 실행**으로 시간 절약
- 한 서버가 다운돼도 다른 슬레이브가 같은 작업을 수행 가능 → **신뢰성**

### 이점
1. **유지보수 단순화** — 단일 서버에 모든 Job이 몰려 있으면 서버 다운 시 전부 잃지만, Master-Slave 구조는 워크로드를 분산해 이를 방지
2. **중복성(Redundancy)** — 여러 워커 노드에 데이터를 분산해 빌드·배포의 고가용성 확보
3. **확장성(Scaling)** — 수백 대 서버에 배포해야 할 때, 여러 워커에 작업을 분산해 성능 향상 (예: 50분 걸리던 작업이 5대에 분산하면 10분으로 단축)

### Jenkins Slave(Worker)의 역할
- Master에 연결되어 Master가 보낸 job을 실행
- GUI 없음 — Jenkins가 설치되지 않은 순수한 머신
- Dev·Test·Ops 팀별로 별도 서버를 두고, 각 환경에 맞는 Job을 만들어 워커에 분배 → 팀 간 조율·모니터링 지원
- Master가 워커로 가는 워크로드를 모니터링하는 플랫폼 역할도 겸함
- 워커에는 Jenkins가 없으므로 모든 결과·리포트는 Master에서만 확인 가능

### Worker 노드의 종류
- **Static Slave** — 물리 서버/VM처럼 항상 존재하고 규모가 변하지 않는 워커
- **Dynamic Slave** — 클라우드 플랫폼에서 필요할 때(job 실행 시) 자동으로 프로비저닝되고, 완료 후 삭제(또는 유지 선택 가능)되는 워커. Docker 같은 컨테이너 도구로도 구현 가능.

## 요약
- Jenkins는 Master(Jenkins 설치, 작업 분배·모니터링)와 Slave/Worker(작업 실행, Jenkins 미설치) 구조로 확장성·신뢰성·유지보수 편의성을 확보하며, Worker는 항상 존재하는 Static Slave 또는 필요 시 자동 생성되는 Dynamic Slave로 구성할 수 있다.
