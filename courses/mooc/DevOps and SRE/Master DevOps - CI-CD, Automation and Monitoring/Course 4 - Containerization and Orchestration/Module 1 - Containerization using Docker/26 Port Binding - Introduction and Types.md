# Port Binding - Introduction and Types

## 개요
- 컨테이너에 외부에서 접근하기 위한 Port Binding의 개념과, Host Port·Container Port 두 유형을 정리.

## 내용
### 왜 Port Binding이 필요한가
- 컨테이너를 네트워크에 연결하면 IP 주소를 받지만, 이 IP는 **Docker Host 내부에서만 유효한 사설(private) IP**로 외부(WWW)에서는 라우팅되지 않음.
- Docker Host 내부에서는 컨테이너의 IP로 직접 접근 가능하지만, Host 외부(예: 인터넷 건너편, 다른 나라)에서는 그 사설 IP에 도달할 수 없음.
- 예: 컨테이너화된 애플리케이션이 미국의 서버에서 실행되고 있고, 인도에서 인터넷을 통해 접근하려는 경우 — 이때 필요한 것이 **Port Binding**.

### Port Binding이란
- **Host Machine의 포트와 Docker 컨테이너 내부 포트를 매핑(mapping)**하는 과정 — 컨테이너 안에서 실행 중인 서비스를 호스트 시스템이나 외부 네트워크에서 접근 가능하게 함.

### 포트의 두 유형
1. **Host Port** — Docker Host에서 컨테이너와 매핑되는 포트 번호(외부에서 접근하는 창구).
2. **Container Port** — 컨테이너 내부에서 애플리케이션이 실제로 리스닝하는 포트 번호.

### 동작 원리 예시
- Docker Host 내부의 컨테이너는 사설 IP(예: `10.10.1.2`)를 받고, 애플리케이션은 Container Port `80`에서 리스닝.
- Docker Host 내부에서는 `10.10.1.2:80`으로 직접 접근 가능하지만, 외부(인도)에서는 이 사설 IP에 접근할 수 없음.
- Docker Host 자체는 **공인(Public) IP**(예: `7.7.7.7`)를 가지고 있으므로, 외부에서는 `7.7.7.7:<Host Port, 예: 32000>`로 트래픽을 보냄.
- Docker Host가 이 트래픽을 받아 Host Port `32000`을 Container IP `10.10.1.2`의 Container Port `80`으로 전달(포워딩) — 이것이 바로 Port Binding.
- 흐름: **외부 요청(Public IP:Host Port) → Docker Host → Container IP:Container Port**.
- 전제 조건: 외부에서 접근하려면 Docker Host가 반드시 **공인(Public) IP**를 가지고 있어야 함.

## 요약
- Port Binding은 컨테이너의 사설 IP·Container Port를 Docker Host의 Host Port에 매핑해, 공인 IP를 가진 Docker Host를 경유하여 외부 네트워크에서도 컨테이너 내부의 애플리케이션에 접근할 수 있게 해주는 메커니즘이다.
