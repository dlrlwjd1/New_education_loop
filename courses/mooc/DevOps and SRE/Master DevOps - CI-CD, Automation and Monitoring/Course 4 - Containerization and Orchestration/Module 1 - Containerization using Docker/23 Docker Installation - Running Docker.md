# Docker Installation - Running Docker

## 개요
- `hello-world` 이미지로 첫 컨테이너를 실행해 설치를 검증하고, Docker Compose까지 추가로 설치하는 실습.

## 내용
### root 권한과 sudo
- 일반 사용자(예: `ubuntu`)는 명령 앞에 `sudo`가 필요하지만, `sudo su -`로 root 사용자로 전환하면 `sudo` 없이 명령 실행 가능.

### 첫 컨테이너 실행
```bash
docker run hello-world
```
- 로컬에 이미지가 없으면 **Docker Hub**(`hub.docker.com`)에서 자동으로 이미지를 pull — "Unable to find image locally" → "Pulling from library/hello-world" → "Pull complete" 메시지 출력.
- 컨테이너가 시작되어 "Hello from Docker!" 메시지를 출력한 뒤 **작업이 끝나면 자동으로 종료(Exited)** — 이 컨테이너의 목적이 메시지 출력 하나뿐이었기 때문.
```bash
docker ps -a       # 종료된 컨테이너도 포함해 확인 (Exited 상태로 표시)
docker images      # 다운로드된 hello-world 이미지 확인 (예: 크기 10.1KB)
docker --version   # 설치된 Docker 버전 확인 (예: 26.1.3)
```

### Docker Compose 설치
- Docker Compose는 Docker에서 마이크로서비스를 관리하기 위한 별도의 도구/플러그인.
```bash
# OS/커널/아키텍처에 맞는 Docker Compose 바이너리를 다운로드해 /usr/local/bin/docker-compose에 저장
curl -SL <docker-compose 다운로드 URL> -o /usr/local/bin/docker-compose

ls -al /usr/local/bin/docker-compose   # 다운로드 확인(실행 권한 없음)
chmod +x /usr/local/bin/docker-compose  # 실행 권한 부여
docker-compose --version                # 버전 확인 (예: 2.36)
```

## 요약
- Docker 설치 검증은 `docker run hello-world`로 Docker Hub에서 이미지를 pull해 컨테이너를 실행·종료하는 것으로 확인하며, `docker ps -a`/`docker images`/`docker --version`으로 상태를 점검한 뒤, 마이크로서비스 관리 도구인 Docker Compose 바이너리를 다운로드해 실행 권한을 부여함으로써 설치를 마무리한다.
