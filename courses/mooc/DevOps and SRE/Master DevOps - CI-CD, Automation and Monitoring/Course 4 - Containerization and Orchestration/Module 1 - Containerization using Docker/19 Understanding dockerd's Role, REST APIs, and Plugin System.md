# Understanding dockerd's Role, REST APIs, and Plugin System

## 개요
- Docker의 백그라운드 프로세스 `dockerd`의 역할, REST API 구조, 플러그인 아키텍처, 그리고 `containerd`·`runc`와의 관계를 정리.

## 내용
### dockerd란
- Docker의 지속적으로 실행되는 백그라운드 프로세스(persistent background process) — Docker의 실질적인 엔진.
- API 요청을 수신하고, 컨테이너를 조율(orchestrate)하며, 이미지·네트워크·볼륨을 관리하고, 멀티 노드 환경에서는 다른 Daemon 인스턴스와도 상호작용.
- 시스템 서비스(`dockerd`)로 실행되어 부팅 시 자동으로 시작.
- Linux에서는 기본적으로 Unix 소켓(`/var/run/docker.sock`)을 사용하며, 원격 연결을 위해 TCP로 리스닝하도록 설정 가능.
- 이벤트 기반 아키텍처 — `docker build`, `run`, `pull` 같은 HTTP API 호출에 따라 동작을 수행.

### dockerd의 핵심 책임
1. **컨테이너 라이프사이클 관리** — 생성, 실행, 일시정지, 정지, 삭제 처리.
2. **이미지 관리** — 이미지 레이어를 pull·저장·캐싱하고, Dockerfile 빌드 시 레이어를 구성.
3. **네트워크 관리** — Docker 네트워크(bridge, host, overlay), IPAM, veth pair, iptables 규칙 설정.
4. **볼륨·스토리지 처리** — 퍼시스턴트 데이터를 위한 볼륨, 마운트, 스토리지 드라이버 관리.
5. **Swarm과 Daemon 간 통신** — Docker Swarm 같은 클러스터링 환경에서 다른 Daemon과 조율.
6. **로깅과 디버깅** — `dockerd --debug`로 verbose 모드 지원, `/var/lib/docker`에 로그와 상태 유지.

### Docker Engine REST API
- Docker Engine API를 Unix 소켓 또는 TCP로 노출.
- 모든 CLI 명령(`docker run`, `pull` 등)은 내부적으로 `/containers/create`, `/images/pull` 같은 엔드포인트에 대한 HTTP REST 호출로 변환됨.
- 서드파티 도구·스크립트가 프로그래밍 방식으로 Docker Daemon을 제어할 수 있게 해줌.
- 원격 사용을 위해서는 `dockerd`를 `-H tcp://...`로 설정하고 TLS로 보안을 갖춰야 함.
- CLI, GUI, 자동화 도구 모두에 단일 인터페이스를 제공.

### 플러그인 아키텍처
1. **Authorization Plugins(인가 플러그인)** — Docker 기본값인 all-or-nothing 인증과 달리, 세밀한(fine-grained) 요청 정책을 강제할 수 있게 해줌. 여러 플러그인을 서명 체인(signature chain)으로 실행하며 모든 플러그인이 요청을 승인해야 함. `dockerd --authorization-plugin=...`으로 연결하며 Daemon 재컴파일이 필요 없음.
2. **Volume/Network Plugins** — Docker의 플러그인 API로 스토리지·네트워크 제공 기능을 확장. 호스트별로 설정되며 볼륨·네트워크 생성 시 Daemon이 호출.

### dockerd, containerd, runc의 관계
- 컨테이너 라이프사이클 처리 시 `dockerd`는 `containerd`에 위임하고, `containerd`는 다시 `runc`를 사용해 OCI 준수 컨테이너를 생성.
- 이런 분리 구조 덕분에 Daemon을 재시작해도 실행 중인 컨테이너는 중단되지 않음.
- 전체 흐름: **Docker CLI → dockerd(REST) → containerd(gRPC) → runc(실제 컨테이너 실행)**.

### 설정과 베스트 프랙티스
- **설정** — `/etc/docker/daemon.json` 파일 또는 커맨드라인 플래그로 설정(호스트 바인딩, TLS, 디버그 모드, 스토리지 드라이버, 노드 리소스 등).
- **데이터 디렉터리 관리** — `--data-root`로 `/var/lib/docker` 위치를 변경 가능하며, 여러 Daemon 간에 `data-root`를 공유하지 않도록 주의.
- **보안 조치**: 원격 Daemon 접근에는 TLS 사용, Authorization Plugin으로 요청 필터링, 노출(exposure)이 권한이 필요한(privileged) 작업에 미치는 영향 고려.

## 요약
- `dockerd`는 컨테이너·이미지·네트워크·볼륨을 관리하는 Docker의 핵심 백그라운드 프로세스로, REST API로 모든 CLI 명령을 처리하고 Authorization/Volume/Network 플러그인으로 확장 가능하며, 실제 컨테이너 실행은 `containerd`와 `runc`에 위임하는 계층 구조(`CLI → dockerd → containerd → runc`)를 통해 Daemon 재시작에도 컨테이너가 중단되지 않는 유연성을 확보한다.
