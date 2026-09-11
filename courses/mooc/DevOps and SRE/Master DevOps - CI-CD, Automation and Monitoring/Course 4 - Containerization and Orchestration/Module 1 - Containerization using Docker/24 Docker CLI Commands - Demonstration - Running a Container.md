# Docker CLI Commands - Demonstration - Running a Container

## 개요
- `docker search`, `docker pull`(태그 지정 포함), `docker images`, `docker run -it --name`을 실제로 사용해 Ubuntu 컨테이너를 실행하는 실습.

## 내용
### 설치 확인
```bash
docker --version   # 예: Docker version 26.1.3
```

### 이미지 검색과 다운로드
```bash
docker search ubuntu     # Docker Hub(hub.docker.com)에서 Ubuntu 관련 이미지 검색
docker pull ubuntu        # 검색 결과 중 원하는 이미지를 다운로드(태그 미지정 시 latest)
docker images             # 다운로드된 이미지 목록 확인
```
- Docker Hub는 Docker의 기본(default) Registry — 조직에서는 자체 Private Registry를 운영할 수도 있음.
- 다른 애플리케이션 이미지도 동일한 방식으로 검색·다운로드 가능:
```bash
docker pull httpd
docker pull nginx:1.21    # 콜론(:) 뒤에 태그(버전)를 지정해 특정 버전 다운로드
```
- 태그를 지정하지 않으면 항상 `latest` 버전이 다운로드되며, `docker images`로 확인하면 지정한 태그(예: `1.21`)가 표시됨.

### 컨테이너 실행
```bash
docker run -it --name my-first-container ubuntu
```
- **`-it`** — Interactive Terminal의 약자: `-i`(Interactive, 입출력을 인터랙티브하게), `-t`(Terminal, 컨테이너의 터미널을 할당) — 컨테이너와 직접 상호작용하기 위한 옵션.
- **`--name`** — 컨테이너에 이름(예: `my-first-container`)을 부여.
- 이미지가 이미 로컬에 존재하므로 다시 다운로드하지 않고 곧바로 해당 이미지로 컨테이너가 생성됨.

## 요약
- `docker search`로 Docker Hub의 이미지를 검색하고, `docker pull`(태그로 특정 버전 지정 가능)로 이미지를 내려받아 `docker images`로 확인한 뒤, `docker run -it --name <이름> <이미지>`로 인터랙티브 터미널을 가진 이름 있는 컨테이너를 실행하는 것이 기본적인 Docker CLI 사용 흐름이다.
