# Introduction to Containerization

## 개요
- 컨테이너화(Containerization)의 정의와, 1979년 chroot부터 2011년 Warden까지 이어지는 컨테이너 기술의 초기 역사를 정리.

## 내용
### 컨테이너화란
- 애플리케이션과 그것이 필요로 하는 의존성, 라이브러리, 프레임워크, 설정을 모두 함께 패키징하는 프로세스.
- 과거에는 애플리케이션을 배포하려면 특정 OS·커널 버전, Java 같은 소프트웨어, 각종 프레임워크·의존성을 미리 하나하나 설치해야 했음.
- 컨테이너화하면 애플리케이션과 모든 의존성·패키지·프레임워크가 하나의 **컨테이너**로 묶여, Dev·Non-production·Testing·Production 등 어떤 환경에 배포해도 동일하게 동작 — 기반 시스템과 의존성을 격리(isolate)함으로써 모든 환경에서 일관된 실행을 보장.

### 컨테이너 기술의 역사
- **1979년 — chroot**: 사용자가 root로 전환해 명령을 실행하는 초기 형태의 격리 개념.
- **2000년경 — FreeBSD Jail**: 애플리케이션 실행 환경을 격리하는 소프트웨어이지만, 네트워킹·프로세스·파일 마운트·프로세스 간 통신(IPC)까지 아우르는 완전한 격리는 제공하지 못함.
- **2001년 — Linux vServer(가상 서버)**: 가상화 기술에 기반해 애플리케이션과 리소스를 격리.
- **2004년 — Solaris Containers/Zones, LDOMs(Logical Domains)**: Sun Microsystem이 개발 — 하나의 Solaris 서버에 여러 Zone/Domain을 만들어 각 Zone에서 애플리케이션을 호스팅(OS 가상화에 가까운 레거시 개념).
- **2006년 — Cgroups(Control Groups)**: Linux 커널에서 등장 — 애플리케이션이 사용할 수 있는 CPU·RAM 등 리소스를 통제하는 메커니즘.
- **2006~2008년 — Kernel Namespaces / Linux Containers(LXC)**: 격리를 위한 Linux 커널의 Namespace(Network, Process, Mount, IPC, UTS/호스트네임 등)가 도입됨.
- **2011년 — Warden**: 컨테이너를 생성해 그 안에서 애플리케이션을 실행할 수 있게 해주는 도구 등장.

## 요약
- 컨테이너화는 애플리케이션과 모든 의존성을 하나로 패키징해 어떤 환경에서도 일관되게 실행되도록 하는 기술이며, 그 뿌리는 1979년의 chroot에서 시작해 FreeBSD Jail·Linux vServer·Solaris Zones를 거쳐 2006~2008년 Cgroups·Kernel Namespaces로 현대적 격리 메커니즘이 갖춰지고 2011년 Warden 같은 도구로 이어진 오랜 발전 과정의 결과물이다.
