# Docker CLI Commands - Image Management and Networking Commands

## 개요
- 이미지 관리 명령어(`run`, `pull`, `push`, `rmi`, `history`)와 네트워킹 명령어(`network ls`, `network inspect`, `network create`, `network connect/disconnect`)를 정리.

## 내용
### 이미지 관리 명령어
- **`docker run <이미지>`** — 지정한 이미지(예: `nginx`, `httpd`)를 Registry에서 pull해 컨테이너를 실행.
- **`docker pull <이미지>`** — 컨테이너를 만들지 않고 이미지만 다운로드해 로컬에 보관 — 큰 용량의 이미지를 미리 받아두면 실제 컨테이너 생성 시 대역폭·시간을 절약할 수 있음.
- **`docker push <이미지>`** — 로컬에서 만든(Dockerfile로 빌드한) 이미지를 Docker Hub 등 지정한 Registry에 업로드. Registry에 대한 작업은 로컬에서만 수행하며, Registry 자체는 조직의 리드 엔지니어나 관리자가 중앙에서 관리하는 플랫폼.
- **`docker rmi <이미지>`** — 로컬 이미지를 삭제(컨테이너 삭제는 `docker rm`, 이미지 삭제는 `docker rmi`) — 용량이 큰 이미지를 지워 로컬 Docker Host의 디스크 공간을 확보할 때 사용.
- **`docker history <이미지>`** — 이미지의 레이어 구성, 빌드 시점, 작성자, 전체 크기 등 변경 이력을 확인.

### 네트워킹 명령어
- **`docker network ls`** — Docker에 존재하는 모든 네트워크 목록 표시.
- **`docker network inspect <네트워크 이름>`** — 서브넷, IP 주소, 게이트웨이 주소, 브리지, 네트워크 ID, 연결된 컨테이너 등 네트워크의 상세 정보를 확인(`inspect`는 컨테이너·네트워크·볼륨 등 어떤 리소스에도 적용 가능한 범용 명령어).
- **`docker network create <네트워크 이름>`** — 커스텀 Docker 네트워크 생성.
- **`docker network connect <네트워크 이름> <컨테이너 이름>`** — 지정한 컨테이너를 특정 네트워크에 연결.
- **`docker network disconnect <네트워크 이름> <컨테이너 이름>`** — 지정한 컨테이너를 특정 네트워크에서 연결 해제.

## 요약
- 이미지 관리는 `run`(실행)·`pull`(로컬 다운로드)·`push`(Registry 업로드)·`rmi`(로컬 이미지 삭제)·`history`(레이어·빌드 이력 확인)로 이루어지고, 네트워킹은 `network ls`(목록)·`network inspect`(상세 정보)·`network create`(생성)·`network connect`/`disconnect`(컨테이너 연결·해제)로 Docker 네트워크를 구성·관리한다.
