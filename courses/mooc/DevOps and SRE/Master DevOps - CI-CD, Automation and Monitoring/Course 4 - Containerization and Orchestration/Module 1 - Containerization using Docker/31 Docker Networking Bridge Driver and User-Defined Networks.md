# Docker Networking Bridge Driver and User-Defined Networks

## 개요
- Docker의 기본 Bridge 네트워크와 사용자 정의(User-Defined) Bridge 네트워크의 차이, DNS 기반 서비스 디스커버리, 격리·보안, 실습 명령어를 정리.

## 내용
### Network Namespace와 Bridge Driver
- Docker는 Linux Network Namespace를 활용해 각 컨테이너에 자체 가상 네트워크 스택(인터페이스, 라우팅 테이블, 방화벽 규칙)을 부여.
- 컨테이너 생성 시 컨테이너와 호스트의 브리지 사이에 **veth pair**를 연결해 네트워크 연결성을 제공.
- 기본적으로 모든 컨테이너를 위한 **`docker0` 브리지**를 구성 — IP를 통한 기본적인 연결은 되지만, DNS 기반 이름 해석은 안 되고 격리 수준도 제한적.

### 기본 브리지 vs 사용자 정의 브리지
- **기본 브리지(`docker0`)** — 레거시 방식, IP로만 컨테이너 간 통신, `--link` 필요, 서비스 디스커버리 없음.
- **사용자 정의 브리지(User-Defined Bridge)** — `docker network create -d bridge my-net`으로 생성.
  - **DNS 기반 서비스 디스커버리** — 컨테이너를 이름(예: `db`)으로 서로 찾을 수 있음.
  - **네트워크 격리** — 같은 네트워크에 속한 컨테이너끼리만 통신 가능.
  - **동적 연결 관리** — 재시작 없이 컨테이너를 네트워크에 연결/해제 가능.
  - 네트워크마다 독립적인 설정(MTU, 서브넷, iptables 규칙) 보유.

### 내장 DNS를 통한 서비스 디스커버리
- Docker는 사용자 정의 네트워크마다 DNS 서버를 내장해 이름 기반 컨테이너 탐색을 지원.
- 예: `docker run --network=my-net --name=db ...`로 실행하면 다른 컨테이너가 `db`라는 이름으로 직접 ping 가능.
- **Network Alias**와 기본적인 로드 밸런싱 지원 — 여러 컨테이너가 같은 alias를 공유하면 요청이 번갈아 가며 해석(라운드로빈).
- IP를 수동으로 확인하거나 `/etc/hosts`를 유지 관리할 필요가 없어 오케스트레이션이 단순해짐.

### 격리와 보안
- 각 Bridge 네트워크는 가상 "스위치"처럼 동작해 네트워크 내 컨테이너로만 통신을 제한.
- **기본 브리지는 보안에 취약** — 별도 지정이 없으면 모든 컨테이너가 공유하므로 의도치 않은 접근 위험.
- 사용자 정의 네트워크는 서로 다른 스택·서비스 배포 간 혼선(cross-talk)과 우발적 연결을 방지.
- Docker는 각 브리지에 iptables 규칙을 자동 구성해 컨테이너·호스트 간 트래픽을 라우팅·필터링하며, `-p 80:80` 같은 포트 게시(publishing) 시 NAT를 설정해 브리지 외부에서도 접근 가능하게 함.
- 커스텀 브리지는 `docker network create`의 `--opt`로 MTU 크기, 마스커레이딩(masquerading), 게이트웨이 제어 등을 맞춤 설정 가능.

### 실습: 네트워크 생성과 관리
```bash
docker network create \
  --driver bridge \
  --subnet 192.168.100.0/24 \
  --opt com.docker.network.bridge.enable_ip_masquerade=true \
  my-app-net

docker run -d --name web --network=my-app-net nginx
docker run -d --name db  --network=my-app-net postgres
```
- Docker가 각 컨테이너에 IP와 네임스페이스화된 DNS를 부여.
```bash
docker network connect my-app-net another-container      # 동적 연결
docker network disconnect my-app-net another-container    # 동적 해제
docker network inspect my-app-net                          # 네트워크 상세 정보 확인
```

### 고급 기능
- **서비스 Alias와 로드 밸런싱**:
```bash
docker run -d --net=my-net --network-alias api service:tag
docker run -d --net=my-net --network-alias api service:tag
docker run --rm -it --net=my-net busybox nslookup api
```
  - Docker의 DNS가 라운드로빈 방식으로 모든 IP를 반환해 기본적인 부하 분산 제공.
- **컨테이너당 여러 네트워크 연결** — 하나의 컨테이너를 여러 네트워크에 연결하고 `gw-priority`로 라우팅 제어 가능 — 예: 인터넷에 노출된 프론트엔드와 격리된 데이터베이스 백엔드로 아키텍처를 분리(segmented architecture).

### 요약 표
| 특징 | 기본 브리지 | 사용자 정의 브리지 |
|---|---|---|
| DNS 서비스 디스커버리 | ❌ IP로만 | ✅ 컨테이너 이름으로 |
| 격리 | 낮음 | 높음 |
| 동적 연결 | ❌ 재빌드 필요 | ✅ 즉시 가능 |
| 설정 가능성 | Daemon 전역 설정 | 네트워크별 개별 설정 |

## 요약
- Docker는 Linux Network Namespace와 veth pair로 컨테이너별 가상 네트워크를 구성하며, 기본 `docker0` 브리지는 IP 기반 통신만 지원하고 격리가 약한 반면, `docker network create`로 만드는 사용자 정의 브리지는 DNS 기반 서비스 디스커버리·강한 격리·동적 연결 관리·세밀한 설정을 제공하므로 프로덕션 환경에서는 사용자 정의 브리지 네트워크를 사용하는 것이 권장된다.
