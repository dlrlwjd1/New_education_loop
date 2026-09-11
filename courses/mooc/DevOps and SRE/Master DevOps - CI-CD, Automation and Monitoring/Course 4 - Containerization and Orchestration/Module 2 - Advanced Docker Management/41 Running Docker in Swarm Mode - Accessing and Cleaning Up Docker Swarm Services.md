# Running Docker in Swarm Mode - Accessing and Cleaning Up Docker Swarm Services

## 개요
- 클러스터의 어떤 노드 IP로도 서비스가 접근됨을 확인하고, 서비스 삭제 → Worker Leave → Manager Leave 순서로 Swarm 클러스터 전체를 정리하는 실습.

## 내용
### 어떤 노드 IP로도 접근 가능
- Manager, Worker1, Worker2의 IP 각각에 `:31000`을 붙여 접속 → 모두 **"Welcome to nginx!"** 정상 표시.
- Swarm 클러스터에 속한 어떤 노드로 요청을 보내도 서비스에 도달 가능(Ingress 라우팅 메시).

### 명령은 반드시 Manager에서
```bash
docker service ls
```
- Worker 노드에서 이 명령을 실행하면 **"this node is not a manager"** 오류 — 모든 `docker service`/`docker node` 관련 명령은 Manager에서만 실행 가능.

### 서비스 삭제
```bash
docker service rm first
docker ps -a          # 컨테이너가 모두 사라짐
docker service ls      # 서비스 목록도 비어 있음
```
- 서비스는 삭제되었지만 **노드 자체(Manager, Worker1, Worker2)는 여전히 클러스터에 남아있음**(`docker node ls`로 확인).

### 클러스터 정리 — Worker부터 탈퇴
```bash
# Worker2에서
docker swarm leave
docker system info | grep -i swarm   # inactive로 변경

# Worker1에서
docker swarm leave
docker system info | grep -i swarm
```
- 노드가 `leave`해도 Manager의 `docker node ls`에는 여전히 표시되지만 **Down 상태**로 남음 — 완전히 제거하려면 Manager에서 별도로 삭제해야 함:
```bash
docker node rm <worker 노드 이름>
```

### Manager 탈퇴 (마지막 노드)
```bash
docker swarm leave
```
- 경고 메시지 발생: 이 노드가 클러스터의 **마지막 Manager**이며, 이 상태로 탈퇴하면 **Swarm 클러스터의 전체 상태(state)가 사라진다**는 경고.
- 강제로 탈퇴하려면:
```bash
docker swarm leave --force
docker system info | grep -i swarm   # inactive 확인 — 클러스터 완전히 해체됨
```

## 요약
- Swarm 서비스는 클러스터의 어떤 노드 IP로도 접근 가능하지만 모든 관리 명령은 반드시 Manager에서 실행해야 하며, 클러스터를 정리할 때는 `docker service rm`으로 서비스를 먼저 삭제한 뒤 Worker 노드에서 `docker swarm leave`, 마지막으로 Manager에서 `docker swarm leave --force`(마지막 Manager 경고를 무시하고 강제 탈퇴)를 실행해야 클러스터 전체가 완전히 해체된다.
