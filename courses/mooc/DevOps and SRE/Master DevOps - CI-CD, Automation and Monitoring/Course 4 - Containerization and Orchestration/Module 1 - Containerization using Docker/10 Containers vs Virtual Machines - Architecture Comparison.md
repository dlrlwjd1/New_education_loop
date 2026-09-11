# Containers vs Virtual Machines - Architecture Comparison

## 개요
- VM과 컨테이너의 아키텍처 차이(Hypervisor vs Container Engine, OS 공유 여부)와, OS·리소스·시작 시간·격리·사용 사례 기준의 상세 비교, 대표 하이퍼바이저 제품을 정리.

## 내용
### 아키텍처 차이
- **VM**: 물리 서버(인프라) 위에 **하이퍼바이저**(VMware ESXi, VMware Workstation, Oracle VirtualBox, Citrix XenServer, KVM 등)를 설치하고, 그 위에 여러 VM을 생성 — 각 VM은 **자신만의 개별 운영체제**(Windows, Ubuntu, RHEL 등)를 가짐.
- **Container**: 물리 서버(또는 VM) 위에 하이퍼바이저 없이 바로 **운영체제**를 설치하고, 그 위에 **컨테이너 엔진**을 설치 — 컨테이너 엔진으로 여러 컨테이너를 생성하며, 각 컨테이너는 애플리케이션과 그 의존성만 포함. **컨테이너들은 base 머신의 운영체제를 공유**하며 개별 OS를 갖지 않음.

### 상세 비교
| 기준 | Virtual Machine | Container |
|---|---|---|
| OS | 각 VM이 자신만의 개별 OS 보유 | Host OS의 커널을 공유 |
| 리소스 사용량 | 전체 OS를 실행하므로 리소스 사용량 높음 | 애플리케이션·바이너리·의존성만 실행해 경량(lightweight) |
| 시작 시간(Startup Time) | 전체 OS 부팅이 필요해 분(minute) 단위 | OS가 없어 초(second) 단위 — 거의 즉시 부팅 |
| 격리(Isolation) | 프로세스와 OS 모두 완전히 격리 — 더 안전(secure) | 프로세스(애플리케이션) 수준의 격리만 제공 — VM보다 상대적으로 덜 안전 |
| 대표 사용 사례 | 여러 운영체제 실행, 레거시 애플리케이션 실행에 적합 | 마이크로서비스, CI/CD 파이프라인, 클라우드 네이티브 애플리케이션에 적합 |

### 대표 하이퍼바이저(가상화 소프트웨어)
- **VMware 계열** — VMware Workstation, VMware ESXi(현재 Broadcom이 VMware를 인수해 Broadcom 산하 제품).
- **Oracle VirtualBox** — 주로 데스크톱 가상화에 사용.
- **QEMU/KVM(Kernel Virtual Machine)** — 오픈소스이지만 널리 사용됨, 주로 서버 가상화에 사용.
- 그 외 **Red Hat Virtualization, Citrix XenServer, Microsoft Hyper-V** 등도 시장에 존재.
- 정리하면 데스크톱 가상화는 VirtualBox, 서버 가상화는 VMware나 KVM/QEMU가 주로 쓰임.

## 요약
- VM은 하이퍼바이저 위에서 각자 독립된 OS를 실행해 완전한 격리를 제공하지만 리소스 사용량이 크고 부팅에 분 단위 시간이 걸리는 반면, 컨테이너는 컨테이너 엔진 위에서 Host OS 커널을 공유해 경량이고 초 단위로 빠르게 시작되지만 격리 수준은 프로세스 단위에 그쳐 VM보다 보안성이 낮다 — 이 때문에 VM은 다중 OS·레거시 애플리케이션에, 컨테이너는 마이크로서비스·CI/CD·클라우드 네이티브 애플리케이션에 적합하다.
