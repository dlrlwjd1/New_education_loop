# Docker Daemon

## 개요
- Docker Daemon의 정의, Docker API를 통한 동작 방식, 클라이언트-서버 아키텍처, 그리고 컨테이너·이미지·네트워크·볼륨·모니터링에 걸친 핵심 책임을 정리.

## 내용
### Docker Daemon이란
- Docker 생태계 전체의 심장부 — Docker Host에서 실행되며 컨테이너, 이미지, 네트워크, 볼륨을 관리하는 메인 프로세스(서비스). Docker Swarm, Docker Compose 등 Docker로 하는 모든 작업이 Docker Daemon에 의해 관리됨.
- Docker Host(가상 머신 위의 OS)에 설치되는 소프트웨어 컴포넌트.

### 동작 방식: Docker API
- Docker Daemon은 **Docker API**라는 핵심 컴포넌트를 통해 클라이언트로부터 입력을 받아 처리.
- Daemon은 항상 Docker API 요청을 리스닝하며, 이 요청에 따라 시스템과 상호작용해 컨테이너를 빌드·실행·모니터링.

### 클라이언트-서버 아키텍처
- Docker는 클라이언트-서버 구조를 따름 — Docker Client(클라이언트)가 명령을 보내면 Docker Daemon(서버)이 이를 처리.
- Docker Daemon은 Docker Client와 Docker Engine 사이의 다리이자, Registry에서 이미지를 받아와 컨테이너를 만드는 중개자 역할.
- 이미지는 Registry에서 다운로드되어 시스템에 저장된 뒤 그 이미지로 컨테이너가 생성되며, 업로드할 이미지도 Registry로 전송됨 — 이 모든 호출은 Docker Client를 거쳐 Docker Daemon으로 전달됨.

### Docker Daemon의 핵심 책임
1. **컨테이너 관리** — 사용자 명령(start, stop 등)에 따라 컨테이너를 시작·정지·모니터링.
2. **이미지 빌드·풀·푸시** — Dockerfile을 `docker build`로 실행하는 단계별 처리, Docker Hub 같은 Registry로부터 이미지를 가져오거나(pull) 올리는(push) 작업.
3. **네트워킹** — 컨테이너용 네트워크 생성, Bridge/Overlay 네트워크를 컨테이너에 연결하는 작업.
4. **볼륨 관리** — 볼륨 생성, 데이터 저장, 마운트 해제, 볼륨 크기 조정, 바인드 생성 등 스토리지 관련 모든 작업.
5. **이벤트·로그 모니터링** — 로그 모니터링·분석·트러블슈팅, 컨테이너의 CPU·메모리 사용량 확인(`docker top`, `docker logs` 명령 등으로 확인).

## 요약
- Docker Daemon은 Docker API로 클라이언트의 요청을 받아 클라이언트-서버 구조 안에서 Registry와 Client 사이를 중개하며, 컨테이너 관리·이미지 빌드/풀/푸시·네트워킹·볼륨 관리·로그 및 리소스 모니터링이라는 다섯 가지 핵심 책임을 수행하는, Docker 생태계 전체의 심장부와 같은 존재다.
