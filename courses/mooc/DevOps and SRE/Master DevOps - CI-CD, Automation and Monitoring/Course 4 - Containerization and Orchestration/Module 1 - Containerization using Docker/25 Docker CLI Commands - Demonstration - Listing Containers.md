# Docker CLI Commands - Demonstration - Listing Containers

## 개요
- 컨테이너 내부 진입·탈출, `docker ps`/`ps -a`, `stop`/`start`/`rm`, `rmi`까지 컨테이너·이미지 생명주기 전체를 실제로 조작하는 실습.

## 내용
### 컨테이너 내부 진입
- `docker run -it --name my-first-container ubuntu` 실행 후, 프롬프트가 `root@<컨테이너ID>`로 바뀜 — 컨테이너 내부에 들어온 상태.
- `ps -ef`를 컨테이너 안에서 실행하면 프로세스가 단 하나만 보임 — Ubuntu 컨테이너는 기본적으로 `bin/bash` 셸 하나만 실행되는 OS 컨테이너이기 때문.
- **`exit`**로 나가면 컨테이너의 유일한 프로세스(bash)가 종료되어 **컨테이너 자체가 정지**됨.
- **`Ctrl+P`, `Ctrl+Q`**를 누르면 컨테이너를 정지시키지 않고 백그라운드에서 계속 실행한 채로 빠져나올 수 있음.

### 컨테이너 상태 확인
```bash
docker ps -ef   # 호스트에서 실행하면(컨테이너 밖) 호스트의 프로세스 목록
docker ps       # 실행 중인 컨테이너만 표시 - 이름, 이미지(ubuntu), 명령(bash), 가동 시간, 컨테이너 이름(my-first-container) 확인
```

### 컨테이너 정지·시작·삭제
```bash
docker stop my-first-container   # 컨테이너 정지 (시간이 다소 걸림)
docker ps                        # 정지된 컨테이너는 표시되지 않음 (running만 표시)
docker ps -a                      # 상태와 무관하게 모든 컨테이너 표시 - Exited 상태로 확인

docker start my-first-container   # 이름 또는 ID로 다시 시작 (이름·ID 모두 시스템에서 고유)
docker ps                         # 다시 Up 상태로 표시됨

docker rm my-first-container      # 컨테이너 완전 삭제 (docker ps -a에서도 사라짐)
```

### 이미지 삭제
```bash
docker images                     # 로컬에 남아있는 이미지 목록 확인
docker rmi ubuntu:latest          # 이미지 삭제 시 태그를 함께 명시하는 것이 베스트 프랙티스
docker rmi httpd:latest
docker rmi nginx:1.21
```
- 이미지를 삭제해도 Docker Hub(Registry)에서 사라지는 것이 아니라, **로컬 Docker Host에서만 제거**되는 것 — 필요하면 언제든 다시 pull 가능.
- 이미지를 삭제하면 그만큼의 로컬 디스크 공간(예: 78MB)이 확보됨.

## 요약
- 컨테이너에 `-it`로 진입한 뒤 `exit`(정지) 대신 `Ctrl+P Ctrl+Q`(백그라운드 유지)로 빠져나오고, `docker ps`(실행 중)/`docker ps -a`(전체)로 상태를 확인하며 `stop`→`start`→`rm`으로 컨테이너를 정지·재시작·삭제하고, `docker rmi <이미지:태그>`로 로컬 이미지를 삭제해 디스크 공간을 확보하는 것이 컨테이너·이미지 생명주기 관리의 전체 흐름이다.
