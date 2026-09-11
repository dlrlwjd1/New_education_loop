# Docker Architecture - Architectural Diagram

## 개요
- Docker Client, Docker Host(Daemon), Docker Registry 세 컴포넌트가 어떻게 상호작용해 컨테이너를 만드는지 전체 아키텍처 흐름을 정리.

## 내용
### 3대 핵심 컴포넌트
1. **Docker Client** — `docker run`, `docker build`, `docker pull` 같은 `docker`로 시작하는 모든 명령을 실행하는 CLI 유틸리티.
2. **Docker Host** — Docker Daemon이 설치되어 실행되는 머신(가상 머신 또는 서버). Docker Client는 Docker Host 내부에서 실행될 수도 있고, 외부에서 원격으로 접속해 실행될 수도 있음.
3. **Docker Registry** — 이미지들이 저장되는 중앙 집중식(원격) 저장소(예: Docker Hub).

### 컨테이너 생성 흐름
1. 사용자가 Docker Client에서 `docker run` 명령 실행 → 컨테이너 생성·실행 요청.
2. Docker Daemon이 컨테이너를 만들려면 **이미지**가 필요 — 이미지는 애플리케이션과 그 의존성을 담은 패키지.
3. Docker Daemon이 Docker Registry(예: Docker Hub)에 접속해 필요한 이미지(Ubuntu, PostgreSQL, Nginx 등)를 요청.
4. Registry로부터 이미지를 다운로드(pull)한 뒤, 그 이미지로부터 **컨테이너를 실행(spin up)**.
- 즉, "Client가 요청을 Daemon에 보냄 → Daemon이 Registry에 연결해 이미지를 다운로드 → 다운로드한 이미지로 컨테이너 실행"이 핵심 흐름.

### Registry 확장 도구
- Docker Registry와 연동해 기능을 확장하는 도구들도 존재:
  - **Kubernetes** — 컨테이너 오케스트레이터로서, Registry에 연결해 이미지를 pull하고 컨테이너(Pod)를 실행.
  - **JFrog** — Registry 관련 확장.
  - **Loglens, Grafana, Docker Telemetry** — 모니터링, 로그 분석, 텔레메트리를 위한 플러그인.

## 요약
- Docker 아키텍처는 Docker Client(명령 실행) → Docker Host의 Docker Daemon(컨테이너 관리) → Docker Registry(이미지 저장소)로 이어지는 구조이며, 컨테이너를 생성할 때마다 Daemon이 Registry에서 필요한 이미지를 pull해 그 이미지로 컨테이너를 실행하는 흐름이 핵심이다.
