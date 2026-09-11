# Deployments - Strategies

## 개요
- Kubernetes 배포 전략인 Recreate, Rolling Update, Blue-Green, Canary를 구체적인 예시와 함께 정리.

## 내용
### 1. Recreate(재생성)
- 기존 Deployment(ReplicaSet, Pod 포함, 예: MySQL 5.6)를 **완전히 삭제한 뒤** 새 버전(예: 5.7)으로 새로운 Deployment를 만드는 방식.
- 기존 것을 멈추고 나서 새 것을 만들기 때문에 **다운타임 발생 가능** — 매우 레거시한 전략으로 실무에서 잘 쓰이지 않음.

### 2. Rolling Update(롤링 업데이트) — 무중단(Zero Downtime)
- 같은 Deployment 아래 **새로운 ReplicaSet**을 생성해 새 버전(예: 5.7)의 Pod를 만듦.
- 하나의 Deployment는 여러 ReplicaSet을 가질 수 있음 — 새 ReplicaSet의 Pod가 정상적으로 뜨면, 기존 ReplicaSet의 Pod를 종료.
- 이후 트래픽은 새 Pod로 전달됨.
- **롤백(Rollback)** — 이전 버전(예: 5.6)으로 되돌리고 싶으면, 이전 버전의 Pod를 다시 시작하고 준비되면 현재 Pod를 종료하는 방식으로 Deployment가 처리.
- 매끄러운(seamless) 업데이트·롤백이 가능해 무중단을 보장.

### 3. Blue-Green Deployment
- Recreate와 유사하지만 순서가 다름 — **새 환경(Green)을 먼저 만들고, 트래픽을 전환한 뒤에야 기존 환경(Blue)을 삭제**.
- 예: 기존 Blue Deployment(MySQL 5.6)가 모든 트래픽을 받고 있는 상태에서, 새로운 Green Deployment(MySQL 5.7)를 별도로 생성.
- Green Deployment의 Pod가 정상적으로 실행되면 **Service를 이용해 트래픽을 Green으로 전환**.
- 사용자 불만이 없는 상태로 며칠이 지나면 Blue Deployment를 삭제. 만약 사용자가 문제를 제기하면 트래픽을 다시 Blue로 되돌리기만 하면 되므로 **빠른 롤백**이 가능.

### 4. Canary Deployment
- 신규 버전을 **소규모 사용자 집단(subset)**에게만 먼저 배포한 뒤 점진적으로 전체에 릴리스하는 전략.
- 예: 프로덕션 환경에서 전 세계 사용자가 사용하는 애플리케이션이 있을 때, 신규 버전을 별도 Deployment로 만들어 **일부 국가/사용자 그룹에만** 노출(예: Facebook이 특정 유럽 국가에서만 먼저 업데이트를 테스트).
- 한 달 정도 문제가 없는지 확인한 뒤 문제가 없으면 전 세계로 확대 배포.
- **리스크 최소화** — 업데이트 실패 후 롤백하는 것은 시간이 많이 들고 번거로우므로, 사용자가 적은 그룹에 먼저 배포해 위험을 줄임. 스마트폰의 보안 패치가 일부 사용자에게 먼저 배포되는 것과 같은 원리.

## 요약
- Recreate는 기존 것을 지우고 새로 만들어 다운타임이 발생할 수 있고, Rolling Update는 새 ReplicaSet의 Pod가 준비되면 기존 Pod를 종료해 무중단으로 업데이트·롤백을 지원하며, Blue-Green은 완전히 별도의 환경을 만들어 Service로 트래픽을 전환한 뒤 기존 환경을 삭제하는 빠른 롤백 전략이고, Canary는 신규 버전을 일부 사용자에게만 먼저 배포해 리스크를 최소화한 뒤 점진적으로 전체 릴리스하는 전략이다.
