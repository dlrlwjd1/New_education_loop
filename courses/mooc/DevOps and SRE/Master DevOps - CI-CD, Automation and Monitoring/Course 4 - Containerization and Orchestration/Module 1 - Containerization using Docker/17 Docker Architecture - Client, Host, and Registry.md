# Docker Architecture - Client, Host, and Registry

## 개요
- Docker Client, Docker Host(Daemon·Image·Container 포함), Docker Registry 세 컴포넌트의 역할과 대표 명령어(`docker run`, `docker build`, `docker pull`)를 상세히 정리.

## 내용
### Docker Client
- Docker Daemon과 상호작용해 컨테이너를 관리하기 위한 유틸리티(= Docker CLI). 모든 명령은 Client에서 실행되어 Daemon에 전달됨.
- 대표 명령어:
  - **`docker run`** — 컨테이너를 생성·시작.
  - **`docker build`** — Dockerfile로부터 Docker 이미지를 빌드. Dockerfile 자체는 단순히 지시문이 담긴 파일일 뿐이며, 이를 실제로 실행(처리)하는 것은 Docker Daemon.
  - **`docker pull`** — Docker Registry에서 이미지를 다운로드. Client가 Daemon에게 "Registry에서 이미지를 받아와 달라"고 요청하는 것.

### Docker Host
- 컨테이너가 실제로 동작하는 서버(플랫폼) — Docker Daemon이라는 소프트웨어 컴포넌트가 이 서버 위에서 실행되며, Daemon이 컨테이너를 생성.
- **Docker Daemon**은 Docker 객체(이미지, 컨테이너 등)를 관리하고 Client의 요청(`docker pull`, `docker build`, `docker run` 등)을 실제로 실행하는 주체.
- **Docker Image**는 컨테이너 실행 환경을 정의하는 읽기 전용 템플릿(read-only template) — 애플리케이션과 그 의존성을 담은 패키지.
- **Docker Container**는 이미지의 인스턴스(instance) — 즉 이미지의 실행형으로, 실제로 동작 중인 환경을 나타냄.
- 정리하면 Docker Host(서버·플랫폼) 위에 Docker Daemon이 있고, Daemon이 Image와 Container를 관리.

### Docker Registry
- Docker 이미지를 저장·배포하는 **중앙 집중식 저장소** — 대표 예시는 `hub.docker.com`(공개 이미지가 저장된 퍼블릭 플랫폼).
- 조직마다 자체적인 프라이빗 Registry를 구축할 수도 있음.
- JFrog, Loglens 같은 확장(extension)이나 Grafana, Docker Telemetry 같은 모니터링·분석 플러그인과 통합 가능하며, 커스텀 스토리지·네트워킹 드라이버 같은 기능도 제공.
- 어떤 이름으로 불리든 핵심은 "이미지가 저장되는 위치"라는 점.

## 요약
- Docker Client는 `docker run`/`docker build`/`docker pull` 같은 명령으로 Docker Daemon에 요청을 보내고, Docker Host 위의 Daemon은 이 요청을 실제로 처리해 Registry(예: Docker Hub)에서 읽기 전용 템플릿인 Image를 받아와 그 인스턴스인 Container를 생성·관리하는 것이 Docker 아키텍처의 핵심 동작 원리다.
