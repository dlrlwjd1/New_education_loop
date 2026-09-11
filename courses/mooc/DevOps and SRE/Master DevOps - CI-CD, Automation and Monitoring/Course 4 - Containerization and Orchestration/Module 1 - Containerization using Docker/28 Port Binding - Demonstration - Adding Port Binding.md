# Port Binding - Demonstration - Adding Port Binding

## 개요
- Port Binding 없이 Nginx 컨테이너를 실행했을 때 외부 접근이 안 되는 것을 확인한 뒤, 컨테이너를 재생성하며 `-p` 옵션을 추가하는 실습.

## 내용
### 사전 준비
```bash
systemctl status docker   # active (running) 확인, 컨테이너·이미지 없는 깨끗한 상태에서 시작
```

### 1단계: Port Binding 없이 컨테이너 실행
```bash
docker pull nginx
docker run -d --name web-container nginx   # -d: Detach 모드(백그라운드 실행), 포트 바인딩 없음
docker ps -a                                # web-container가 포트 80에서 실행 중임을 확인
```
- `-d`(detach) 옵션으로 컨테이너를 백그라운드에서 실행하면 터미널이 점유되지 않아 이어서 다른 명령을 실행 가능.

### 컨테이너 내부 IP 확인 및 로컬 접근 테스트
```bash
docker inspect web-container   # 컨테이너의 IP 주소 확인 (예: 172.17.0.2)
ping 172.17.0.2                 # 응답 확인(ping 가능)
curl 172.17.0.2:80               # "Welcome to nginx!" 페이지 정상 응답 확인
```
- Docker Host 내부에서는 컨테이너의 사설 IP로 직접 접근 가능.

### 외부 접근 시도 → 실패
- 브라우저에서 같은 사설 IP(`172.17.0.2`)로 접속을 시도하면 **"Can't reach the page"** 오류 발생 — 이 IP는 Docker Host 내부에서만 유효한 사설 IP이기 때문에 외부에서는 접근할 수 없음.

### 2단계: 컨테이너를 Port Binding과 함께 재생성
```bash
docker stop web-container
docker rm web-container            # 정지 후 정상적으로 삭제(권장 방식)
docker rm -f web-container          # 실행 중인 컨테이너를 강제 삭제(-f)할 수도 있지만 베스트 프랙티스는 아님(stop 후 rm 권장)

docker run -d --name web-container -p 8080:80 nginx
```
- **`-p 8080:80`** — 콜론(`:`) 왼쪽이 Host Port(`8080`), 오른쪽이 Container Port(`80`) — Docker Host의 8080번 포트를 컨테이너의 80번 포트에 매핑.

## 요약
- Port Binding 없이 컨테이너를 실행하면 Docker Host 내부(사설 IP)에서는 `curl`/`ping`으로 접근 가능하지만 외부 브라우저에서는 접근이 불가능하며, 이를 해결하려면 컨테이너를 정지·삭제한 뒤 `docker run -d --name <이름> -p <호스트포트>:<컨테이너포트> <이미지>` 형태로 `-p` 옵션을 추가해 재생성해야 한다.
