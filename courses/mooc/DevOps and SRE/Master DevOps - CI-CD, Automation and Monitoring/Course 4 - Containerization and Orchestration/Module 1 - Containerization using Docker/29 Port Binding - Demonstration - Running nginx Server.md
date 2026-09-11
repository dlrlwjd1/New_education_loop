# Port Binding - Demonstration - Running nginx Server

## 개요
- `-p` 옵션으로 재생성한 Nginx 컨테이너가 Host IP·Public IP로 정상 접근되는지 검증하고, 포트 중복 사용 시 오류를 확인한 뒤, 커스텀 Flask 애플리케이션을 컨테이너화하기 위한 Dockerfile 작성까지 다룸.

## 내용
### Port Binding 확인
```bash
docker ps -a
```
- `PORTS` 컬럼에 `0.0.0.0:8080->80/tcp`처럼 화살표(`->`)로 표시되면 포트가 바인딩(포워딩)된 것 — Port Binding 없이 실행했던 이전 컨테이너는 단순히 `80/tcp`만 표시되고 바인딩되지 않았음.

### 여러 방식으로 접근 테스트
1. **컨테이너 IP로 접근** — `docker inspect`로 확인한 컨테이너 IP(예: `172.17.0.2`)와 Container Port(80)로 `curl` — 성공(Docker Host 내부에서만 가능).
2. **Docker Host의 사설(Private) IP로 접근** — 호스트의 사설 IP(예: `172.31.83.58`)와 Host Port(8080)로 `curl` — 성공(같은 네트워크 내부에서 접근 가능).
3. **Docker Host의 공인(Public) IP로 접근** — AWS가 부여한 Public IP + 포트 8080으로 브라우저 접속 — 외부 인터넷에서 접근 성공, "Welcome to nginx!" 페이지 정상 표시.
   - 사설 IP로는 외부에서 절대 접근할 수 없으며, 외부(WWW) 접근에는 반드시 Docker Host의 **공인 IP**가 필요.

### 포트 중복 사용 시 오류
- 새 컨테이너(`web-container-2`)를 같은 Host Port(`8080`)로 다시 바인딩 시도 → **"port is already allocated"** 오류 발생 — 컨테이너는 생성되지만 시작되지 않음(Host Port는 한 번에 하나의 컨테이너만 사용 가능).
- 해결: 컨테이너를 삭제(`docker rm`)하고 **다른 Host Port**(예: `9090`)로 재생성 → 정상 실행 확인.
```bash
docker run -d --name web-container-2 -p 9090:80 nginx
```
- Public IP + 포트 9090으로 접속해도 동일하게 "Welcome to nginx!" 페이지가 표시되어 Port Binding이 정상 동작함을 확인.

### 커스텀 애플리케이션을 위한 Port Binding 준비 — Flask 앱 컨테이너화
- 간단한 Python Flask 애플리케이션(`app.py`) — `Hello Docker`를 출력하며 포트 `5000`에서 서비스되도록 작성.
- 이 애플리케이션을 컨테이너화하기 위한 **Dockerfile** 작성:
  - `FROM` — 베이스 이미지로 `python:3.9` 사용(다운로드).
  - `WORKDIR /app` — 작업 디렉터리를 `/app`으로 설정.
  - 코드 복사 — `app.py`를 컨테이너의 작업 디렉터리에 복사.
  - `pip install flask` — Flask(파이썬으로 웹사이트를 개발하기 위한 모듈) 설치.
  - 엔트리포인트/명령 — `python app.py`로 애플리케이션 실행.
- Dockerfile 작성 완료 후 `docker build` 명령으로 이 Dockerfile을 실행해 이미지를 생성하는 단계로 이어짐.

## 요약
- Port Binding이 적용된 컨테이너는 컨테이너 IP·Host의 사설 IP·Host의 공인 IP 어느 경로로도 접근 가능하지만 외부 인터넷 접근에는 반드시 공인 IP가 필요하며, 같은 Host Port를 다른 컨테이너에 재사용하면 "port already allocated" 오류가 발생해 다른 포트를 지정해야 하고, 커스텀 Flask 애플리케이션도 `FROM`(베이스 이미지)·`WORKDIR`·코드 복사·`pip install`·실행 명령으로 구성된 Dockerfile을 작성해 동일한 방식으로 컨테이너화할 수 있다.
