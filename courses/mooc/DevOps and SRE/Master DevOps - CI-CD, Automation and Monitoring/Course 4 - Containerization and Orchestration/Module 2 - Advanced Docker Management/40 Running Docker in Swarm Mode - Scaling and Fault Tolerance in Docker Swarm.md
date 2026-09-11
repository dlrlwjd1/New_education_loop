# Running Docker in Swarm Mode - Scaling and Fault Tolerance in Docker Swarm

## 개요
- 컨테이너를 강제로 삭제해 Swarm의 장애 허용(Fault Tolerance) 자동 복구를 확인하고, `docker service scale`로 업스케일/다운스케일을 실습.

## 내용
### 각 노드에서 컨테이너 분산 확인
```bash
docker ps -a   # Manager에서 first.1 컨테이너 확인
docker ps -a   # Worker1에서 first.2 컨테이너 확인
docker ps -a   # Worker2에는 아직 컨테이너 없음(replicas=2였으므로)
```
- 세 노드는 실제로는 AWS의 서로 다른 VM.

### 장애 허용(Fault Tolerance) 확인 — 컨테이너를 강제로 삭제
```bash
docker rm -f <first.2 컨테이너 ID>   # Worker1에서 컨테이너를 실수로/강제로 삭제
docker service ps first               # Swarm이 자동으로 새 컨테이너를 생성한 것을 확인
```
- 삭제된 `first.2` 컨테이너가 **자동으로 다른 Worker(Worker2)에서 재시작**됨 — Worker1에는 더 이상 컨테이너가 없고, Worker2에 새로 생성됨.
- 이것이 **Fault Tolerance(장애 허용)** — 컨테이너를 실수로 삭제하거나 노드 자체가 다운되어도, Swarm이 자동으로 다른 노드에서 컨테이너를 복구.

### 서비스 스케일 업(Scale Up)
```bash
docker service scale first=3
docker service ls              # REPLICAS 3/3 확인
docker service ps first         # first.1(Manager), first.2(Worker2), first.3(Worker1)
docker ps -a                     # 각 노드에서 실제 컨테이너 실행 확인
```

### 서비스 스케일 다운(Scale Down)
```bash
docker service scale first=1
docker service ps first   # first.1만 남고 나머지는 자동 종료
```
- Manager에만 `first.1`이 남고, Worker1·Worker2에는 컨테이너가 없어짐 — 다운스케일도 정상 동작.

### 다시 스케일 업 (4개로)
```bash
docker service scale first=4
docker service ps first
```
- 4개의 복제본이 Manager, Worker1(2개), Worker2로 분산 배치됨 — 반드시 노드당 균등하게 나뉘는 것은 아니며 Swarm 스케줄러가 배치를 결정.

### 외부 접근 확인
- Port Binding(`31000:80`)이 되어 있으므로, **Manager든 Worker든 어떤 노드의 IP를 사용해도** 서비스에 접근 가능(예: Worker2의 IP로 `:31000` 접속) — 어느 노드로 요청을 보내도 Swarm의 라우팅 메시(Ingress) 덕분에 정상적으로 서비스에 도달.

## 요약
- Docker Swarm은 컨테이너가 실수로 삭제되거나 노드가 다운돼도 다른 노드에서 자동으로 복구하는 Fault Tolerance를 제공하며, `docker service scale <서비스>=<개수>`로 복제본 수를 손쉽게 늘리거나(Up) 줄일(Down) 수 있고, Port Binding된 서비스는 클러스터의 어느 노드 IP로 접속해도 동일하게 도달 가능하다.
