# Docker CLI Commands - General and Container Management Commands

## 개요
- Docker 일반 정보 확인 명령어(`version`, `info`, `help`)와 컨테이너 관리 명령어(`run`, `ps`, `rm`, `exec`, `logs`, `inspect`)를 정리.

## 내용
### 일반 명령어
- **`docker --version`** — 설치된 Docker 버전 확인.
- **`docker info`** — 시스템 전반 정보 표시 — 설치 경로, Docker Host의 CPU·RAM, 실행 중/정지/일시정지 상태의 컨테이너 수 등을 확인.
- **`docker --help`** — 사용 가능한 전체 하위 명령어(container, network, volume, images 등) 목록 표시.
- **`docker container --help`** — `container` 관련 하위 명령어(create, run, start, pause 등)만 표시.
- **`docker network --help`** / **`docker volume --help`** — 각각 네트워크·볼륨 관련 명령어 도움말 표시.

### 컨테이너 관리 명령어
- **`docker run`** — Docker 이미지로부터 컨테이너를 생성하고 시작.
- **`docker ps`** — 실행 중인 컨테이너만 목록으로 표시.
- **`docker ps -a`** — 실행 중, 정지, 일시정지 등 **상태와 무관하게 모든 컨테이너** 목록 표시(`-a`는 all의 의미).
- **`docker rm <컨테이너 이름>`** — 컨테이너 삭제(단, **정지(Stopped) 상태의 컨테이너에만 적용 가능**).
- **`docker exec -it <컨테이너 이름> bash`** — 컨테이너 내부 셸에 접속해 명령을 실행. `-i`는 Interactive(입력), `-t`는 Terminal(터미널)의 의미 — 컨테이너 안의 파일에 접근하거나 명령을 실행할 수 있음.
- **`docker logs <컨테이너 이름>`** — 컨테이너에 매번 접속하지 않고도 컨테이너 안에서 실행 중인 애플리케이션의 로그를 바로 확인. 실행 중이거나 정지된 컨테이너 모두에 사용 가능(단, 삭제된 컨테이너는 불가 — 컨테이너 자체가 존재해야 함).
- **`docker inspect <리소스 이름>`** — 컨테이너뿐 아니라 이미지, 볼륨, 네트워크 등 어떤 리소스에도 사용 가능한 범용 명령어. 컨테이너 IP 주소, 캐싱 디렉터리, 레이어, 이름, 이미지 등 상세 정보를 **JSON(JavaScript Object Notation)** 형식으로 출력.

## 요약
- `docker version`/`info`/`help`로 시스템 정보와 명령어 도움말을 확인하고, `docker run`으로 컨테이너를 생성·실행하며, `docker ps`(`-a` 옵션으로 전체 조회)·`docker exec`(내부 접속)·`docker logs`(로그 확인)·`docker inspect`(JSON 상세 정보)·`docker rm`(정지된 컨테이너 삭제)로 컨테이너를 관리하는 것이 Docker CLI의 기본 흐름이다.
