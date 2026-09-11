# Running Docker in Swarm Mode - Adding Workers and Deploying Services in Docker Swarm

## 개요
- `docker swarm join-token`으로 두 Worker 노드를 클러스터에 합류시키고, Manager에서 `docker service create`로 Nginx 서비스를 2개 복제본으로 배포하는 실습.

## 내용
### Worker 노드를 Swarm에 합류시키기
- Worker 노드에서 확인:
```bash
docker system info | grep -i swarm   # 처음엔 "Swarm: inactive" (클러스터 미소속)
```
- Manager에서 Join Token 확인(초기화 시 출력된 명령을 잊었다면 재조회 가능):
```bash
docker swarm join-token worker
```
- 출력된 `docker swarm join --token <토큰> <Manager IP>:2377` 명령을 **각 Worker 노드에서 실행**:
```bash
docker swarm join --token <토큰> <Manager IP>:2377
# "This node joined a swarm as a worker." 확인
```
- Worker에서 다시 확인:
```bash
docker system info | grep -i swarm   # 이제 "Swarm: active"
```

### 클러스터 전체 확인
```bash
docker node ls
```
- Manager(`docker-manager-1`), Worker1, Worker2 세 노드 모두 `Ready`/`Active` 상태.
- **`MANAGER STATUS`** 컬럼이 비어 있으면 Worker, 값(`Leader`, `Reachable`, `Unreachable` 등)이 있으면 Manager.

### 서비스(애플리케이션) 배포 — 반드시 Manager에서 실행
```bash
docker service create --name first-service -p 31000:80 --replicas 2 nginx:1.21
```
- Swarm에서는 컨테이너를 직접 만드는 대신 **서비스(Service)**를 생성.
- **모든 Swarm 운영 명령은 반드시 Manager에서 실행**해야 함 — Worker에서 시도하면 "This node is not a swarm manager"라는 오류 발생.
- **`--replicas 2`** — 동일한 애플리케이션의 컨테이너(복제본, Replica)를 2개 생성 — 지금까지는 컨테이너 하나만 운영했지만, 이제 여러 컨테이너로 고가용성을 확보.
- 복제본 컨테이너는 **Manager를 포함해 세 노드 중 어디에든** 생성될 수 있음(Manager의 상태가 `Active`이기 때문 — 만약 Manager에 컨테이너를 두고 싶지 않다면 별도로 가용성을 `Drain`/`Pause` 설정해야 함).

### 배포 확인
```bash
docker service ls           # first-service, REPLICAS 2/2, 이미지 nginx:1.21 확인
docker service ps first-service   # 각 복제본이 어느 노드에서 실행 중인지 확인 (예: 하나는 Manager, 다른 하나는 Worker1)
```

## 요약
- Worker 노드는 Manager에서 발급한 `docker swarm join-token worker` 명령으로 클러스터에 합류시키며, `docker node ls`의 `MANAGER STATUS` 컬럼으로 Manager/Worker를 구분하고, 애플리케이션 배포는 반드시 Manager에서 `docker service create --replicas <N>`로 수행해 여러 노드에 걸쳐 지정한 개수의 복제본을 생성함으로써 고가용성을 확보한다.
