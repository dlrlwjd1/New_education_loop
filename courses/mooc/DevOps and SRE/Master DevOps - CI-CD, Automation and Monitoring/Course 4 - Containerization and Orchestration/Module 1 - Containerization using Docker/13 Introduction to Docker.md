# Introduction to Docker

## 개요
- Docker의 정의와, 이미지(Image)·컨테이너(Container) 개념, 그리고 Docker Daemon·Docker Client·Docker Image라는 핵심 구성 요소의 도입부를 정리.

## 내용
### Docker란
- 컨테이너화를 이용해 애플리케이션의 배포·확장·관리를 자동화할 수 있게 해주는 오픈소스 플랫폼 — 즉, Docker는 대표적인 **컨테이너 도구**.
- 컨테이너화는 애플리케이션과 그 의존성(바이너리, 라이브러리 등)을 하나로 패키징해 어떤 환경(Production, Non-production, Staging, Testing)에도 배포할 수 있게 하는 것.
- Docker는 이러한 **이미지(Image)**를 만들고, 그 이미지를 실행해 **컨테이너(Container)**로 구동하는 도구.
- 컨테이너는 애플리케이션과 그 의존성이 실행되는 격리된 환경(isolated environment).

### 이미지와 컨테이너의 관계
- OS 설치에 비유하면, 윈도우나 리눅스를 설치할 때 사용하는 ISO 파일이 곧 "이미지"이고, 그 ISO로 부팅해 실제로 동작하는 운영체제가 "실행형"인 것과 같은 원리.
- 마찬가지로 컨테이너를 실행하려면 먼저 그 컨테이너의 **이미지**(애플리케이션 + 의존성)가 있어야 하며, 그 이미지를 실행(execute)한 형태가 바로 **컨테이너**.
- 이미지 없이는 컨테이너를 시작할 수 없으므로, Docker 환경에서 항상 첫 단계는 이미지를 확보하는 것.

### Docker의 핵심 구성 요소
1. **Docker Daemon(Docker Engine)** — Docker 생태계의 심장부. 컨테이너의 생성·관리·업데이트·삭제 등 모든 컨테이너 작업을 담당. Docker Daemon이 중단되면 어떤 컨테이너도 동작할 수 없음.
2. **Docker Client(CLI)** — `docker`로 시작하는 명령어를 실행하는 컴포넌트 — Docker 명령줄 인터페이스(CLI)로서, 사용자의 요청을 Docker Daemon에 전달해 통신하는 역할.
3. **Docker Image** — 애플리케이션과 그 의존성·바이너리를 모두 묶은 것 — 컨테이너를 실행하기 위한 필수 전제 조건.

## 요약
- Docker는 애플리케이션과 의존성을 이미지로 패키징하고 그 이미지를 실행해 격리된 컨테이너로 구동하는 오픈소스 컨테이너화 플랫폼이며, Docker Daemon(컨테이너 작업의 핵심 엔진)과 Docker Client(CLI로 Daemon과 통신), Docker Image(컨테이너 실행의 전제)라는 세 가지 핵심 구성 요소로 이루어져 있다.
