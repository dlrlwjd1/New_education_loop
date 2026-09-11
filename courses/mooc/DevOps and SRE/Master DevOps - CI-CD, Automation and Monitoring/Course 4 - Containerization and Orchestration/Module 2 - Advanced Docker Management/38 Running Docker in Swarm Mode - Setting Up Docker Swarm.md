# Running Docker in Swarm Mode - Setting Up Docker Swarm

## 개요
- AWS의 3대 VM(Manager 1대, Worker 2대)에 Docker를 설치하고 `docker swarm init`으로 Manager를 초기화하는 실습.

## 내용
### 사전 준비 — 3대의 머신
- 물리 서버든 VM이든 클라우드 VM이든, **Linux OS를 가진 최소 3대의 머신**이 필요(1개 Manager + 2개 Worker 구성).
- 이번 실습은 AWS에 생성한 3대의 EC2 인스턴스 사용 — 왼쪽 머신을 Manager, 나머지 두 대(호스트네임 worker1, worker2)를 Worker로 지정.

### 세 머신 모두에 Docker 설치
```bash
apt-get update
apt-get install -y docker.io
docker --version   # 세 머신 모두 동일 버전(예: 26.1.3) 확인
```

### IP 주소 확인
```bash
ip a
```
- 예: Manager `172.31.92.240`, Worker1 `172.31.93.24`, Worker2 `172.31.95.168`.
- 모든 머신이 **같은 서브넷(같은 네트워크)**에 있으므로 서로 직접 통신 가능 — 만약 Manager와 Worker가 다른 네트워크에 있다면 Swarm 초기화 시 주소를 명시적으로 광고(advertise)해야 함.

### Swarm Manager 초기화
```bash
docker swarm init
# 또는 네트워크가 다를 경우: docker swarm init --advertise-addr <Manager IP>
```
- 출력 결과: **"Swarm initialized: current node (...) is now a manager."**
- 함께 출력되는 `docker swarm join --token ...` 명령을 복사해두면 Worker 노드를 추가할 때 사용(잊어버려도 나중에 다시 조회 가능).
- 이 join 명령에는 **Manager의 IP:2377**(Docker Swarm API 포트)이 포함되어 있음.

### Swarm 상태 확인
```bash
docker system info | grep -i swarm   # "Swarm: active" 확인
docker node ls
```
- `docker node ls`로 노드 목록과 역할 확인 — **`MANAGER STATUS`** 컬럼에 값(예: `Leader`)이 표시되면 해당 노드가 Manager, 값이 비어 있으면 Worker.
- `docker system info`의 "Swarm: active"는 단순히 그 노드가 Swarm 클러스터에 **속해 있다**는 뜻이지 Manager라는 의미는 아님 — Manager 여부는 반드시 `docker node ls`로 확인해야 함.

## 요약
- 3대의 Linux 머신 모두에 Docker를 설치한 뒤, Manager로 지정할 머신에서 `docker swarm init`을 실행해 Swarm을 초기화하고 출력되는 `docker swarm join` 명령을 확보하며, `docker node ls`로 `MANAGER STATUS` 컬럼 값의 유무를 통해 어떤 노드가 Manager(Leader)이고 어떤 노드가 Worker인지 구분한다.
