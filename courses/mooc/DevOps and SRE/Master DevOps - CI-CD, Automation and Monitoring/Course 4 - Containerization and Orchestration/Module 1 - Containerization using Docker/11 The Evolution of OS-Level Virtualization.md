# The Evolution of OS-Level Virtualization

## 개요
- chroot(1979)부터 Docker(2013), 그리고 CRI·eBPF(2016년 이후)까지 이어지는 OS 레벨 가상화 발전사를 상세히 정리한 리딩. 앞선 영상 강의보다 각 기술의 구체적인 시점과 기여를 더 정밀하게 다룸.

## 내용
### 뿌리: chroot와 초기 격리 (1979~2000)
- **chroot(1979)** — Unix V7에서 도입, 프로세스가 인식하는 루트 디렉터리를 바꿔 파일시스템 관점을 격리하는 최초의 프로세스 격리 시도. 단, CPU·메모리·네트워크 리소스는 제한하지 못했고 근본적인 보안 한계가 있었음.
- **FreeBSD Jails(2000)** — chroot 개념 위에 별도의 IP 주소, 파일시스템, 사용자 공간을 가진 파티션 환경을 만들어 프로세스 격리와 보안을 개선했지만, 여전히 세밀한 리소스 제어는 부족.

### OS 레벨 가상화의 등장 (2001~2006)
- **Linux VServer(2001)** — chroot 개념과 커스텀 리소스 제어를 결합해 단일 커널 내에 "보안 파티션"을 도입 — 시스템 레벨 가상화의 초기 시도.
- **Solaris Zones(2004, Solaris Containers)** — 커널 레벨 격리, 효율적인 리소스 파티셔닝, 스냅샷 기능을 갖춘 경량 가상 서버 — "스테로이드를 맞은 chroot".
- **OpenVZ(2005)** — 패치된 Linux 커널 기반으로 하나의 커널을 공유하는 다수의 격리된 컨테이너를 지원했으며 체크포인팅과 라이브 마이그레이션까지 제공. 다만 비표준 커널이 필요해 채택과 이식성에 제약이 있었음.

### 커널의 토대: Cgroups와 Namespaces (2006~2008)
- **Cgroups** — 2006년 Google(Paul Menage, Rohit Seth)이 "process containers"라는 이름으로 시작, 2008년 1월 Linux 2.6.24에 병합 — 프로세스 그룹에 대한 리소스 제한·계정·우선순위 지정 가능. Cgroups v2는 2016년 3월 Linux 4.5에서 등장해 더 통일된 계층 구조와 유연한 리소스 제어 제공.
- **Namespaces** — 2007~2008년경 표준화, 마운트·PID·네트워킹·사용자 등 시스템 관점을 격리. Eric Biederman의 2008년 user-namespace 패치는 컨테이너의 완전한 재사용성과 샌드박싱을 향한 중요한 진전.
- 이 두 기능이 함께 강력한 토대를 마련: **Cgroups는 프로세스가 얼마나 사용할 수 있는지, Namespaces는 프로세스가 무엇을 볼 수 있는지를 통제**.

### LXC: 최초의 통합 컨테이너 (2008)
- Cgroups와 Namespaces를 구조화된 사용자 공간 컨테이너 시스템으로 결합 — 커널 패치 없이 최신 Linux 커널만 있으면 동작.
- 설정(config)만으로 컨테이너를 구성·실행할 수 있는 도구와 라이브러리 제공. 초기 Docker도 libcontainer(현재의 runc)로 전환하기 전까지 LXC를 사용.

### Google LMCTFY와 Cloud Foundry Warden (2011~2013)
- **Warden(Cloud Foundry, 2011)** — LXC 위에 구축, 클라이언트-서버 모델로 여러 호스트에 걸친 Cgroups·Namespaces·라이프사이클 관리 지원.
- **LMCTFY(Let Me Contain That For You, Google, 2013)** — Google 내부 도구의 오픈소스 버전으로 포괄적인 Linux 애플리케이션 컨테이너를 목표로 함. 이 노력은 2015년 이후 Docker의 libcontainer로 흡수됨.

### Docker: 모두를 위한 컨테이너 (2013)
- 2013년 PyCon에서 dotCloud(이후 Docker, Inc.)가 공개. 최초의 컨테이너 기술은 아니었지만 Namespaces, Cgroups, 계층화된 이미지(layered image), 사용하기 쉬운 CLI/API를 결합해 판도를 바꿈.
- 초기엔 LXC에 의존했으나 곧 자체 런타임(libcontainer, 현재의 runc)을 개발해 독립성과 더 긴밀한 통합을 확보.
- Docker가 혁신적이었던 이유: **빌드·공유·캐시가 쉬운 계층형 이미지 모델**, **HTTP API + CLI로 단순화된 컨테이너 운영**.
- 이후 "컨테이너"와 "Docker"는 거의 동의어가 되었고, Docker Hub·Compose·Swarm 등 생태계가 번성.

### Docker 이후: 표준화와 보안 (2016년 이후)
- **컨테이너 보안 인식 확산(2016)** — Docker 채택이 늘며 Dirty COW 같은 취약점이 발견되어, 보안을 개발 과정에 통합하는 "Shift-Left" 접근이 촉발됨.
- **Dockershim 폐기** — Kubernetes가 Docker 전용 shim을 제거하고 표준화된 **CRI(Container Runtime Interface)**를 채택 — 이제 containerd나 CRI-O 같은 런타임을 붙여 상호운용성 향상.
- **eBPF의 부상** — 커널 수정 없이 고성능 커널 추적·네트워킹·보안을 가능하게 해 컨테이너 관측 가능성(observability)과 통제를 혁신.

### 큰 그림: OS 가상화 vs 하이퍼바이저
- **하이퍼바이저**(KVM/Xen/VMware) — 하드웨어를 가상화해 별도 커널을 가진 완전한 게스트 VM을 실행 — 강력한 격리, 높은 리소스 오버헤드.
- **컨테이너** — 공유 커널 안에서 Namespace 기반 격리에 의존 — 경량이고 빠르지만 커널 호환성이 필요.
- OS 레벨 컨테이너의 핵심 장점: **성능**(게스트 OS·하이퍼바이저 오버헤드가 없어 거의 네이티브 속도), **밀도**(호스트당 더 많은 컨테이너 배치 가능 — 마이크로서비스에 이상적), **시작 시간**(완전한 VM의 분 단위 대비 초 단위).
- 트레이드오프: 커널을 공유하기 때문에 발생하는 취약점 위험과 호스트 커널 버전에 대한 의존성.

## 요약
- 현대 컨테이너(Docker)는 chroot(파일시스템 격리 개념) → Cgroups·Namespaces(커널 레벨 리소스 통제·가시성 격리) → LXC(수정 없는 커널 위의 사용 가능한 컨테이너 도구) → Cloud Foundry·LMCTFY(엔터프라이즈급 관리와 Google의 노하우) → Docker(표준화·사용성·이식성·풍부한 생태계)로 이어지는 수십 년간의 커널 발전 위에 세워졌으며, 이후 CRI 표준화와 eBPF 같은 기술로 계속 진화하고 있다.
