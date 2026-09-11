# Port Binding - Demonstration - Launching the Container in Web Browser

## 개요
- 커스텀 Flask 애플리케이션(`app.py`)을 Dockerfile로 빌드해 이미지를 만들고, Port Binding을 적용한 컨테이너로 실행해 웹 브라우저에서 "Hello Docker" 응답을 확인하는 실습.

## 내용
### 코드와 Dockerfile 확인
```bash
cd app
cat app.py       # Flask로 "Hello Docker"를 포트 5000에서 서비스하는 코드
cat Dockerfile   # FROM python:3.9, WORKDIR /app, COPY, RUN pip install flask, CMD ["python", "app.py"]
```
- Dockerfile에서 애플리케이션 실행 명령은 **`CMD`**로 지정(ENTRYPOINT 대신 CMD 사용).

### 이미지 빌드
```bash
docker build -t myapp:v1 .
```
- **`-t`** — 이미지에 태그(이름:버전)를 지정(예: `myapp:v1`).
- **`.`**(마지막 인자) — 현재 작업 디렉터리에서 Dockerfile을 찾도록 지시 — 반드시 Dockerfile이 있는 폴더에서 실행해야 함.
- 빌드 과정: Python 3.9 베이스 이미지 pull → 작업 디렉터리 생성 → 코드 복사(`COPY`) → `pip install flask` 실행 → 완료.
```bash
docker images   # myapp:v1 이미지가 생성된 것을 확인
```

### 컨테이너 실행과 Port Binding
```bash
docker run -d --name flask-container -p 50000:5000 myapp:v1
```
- 애플리케이션(Container Port)은 `5000`에서 리스닝하며, 이를 Docker Host의 Host Port `50000`에 바인딩(호스트·컨테이너 포트가 같을 필요는 없음 — 다르게 지정 가능).
- 이미지 태그(`v1`)를 명시하지 않으면 `latest`를 찾으려다 이미지가 없다는 오류 발생 — 반드시 빌드 시 지정한 태그와 동일하게 실행해야 함.
```bash
docker ps -a   # flask-container가 Up 상태, 포트 바인딩(50000->5000) 확인
```

### 다양한 경로로 접근 검증
1. **컨테이너 IP + Container Port** — `docker inspect`로 확인한 IP(예: `172.17.0.4`)와 포트 `5000`으로 접근 → "Hello Docker" 확인.
2. **Docker Host IP(eth0) + Host Port** — Host IP와 포트 `50000`으로 접근 → "Hello Docker" 확인(Host Port는 5000이 아니라 50000임에 주의).
3. **Public IP + Host Port(웹 브라우저)** — Docker Host의 Public IP와 포트 `50000`으로 브라우저 접속 → "Hello Docker" 정상 표시.

## 요약
- 커스텀 Flask 애플리케이션은 Dockerfile(`FROM`·`WORKDIR`·`COPY`·`pip install`·`CMD`)로 `docker build -t <이름>:<태그> .`를 실행해 이미지를 만들고, `docker run -d --name <이름> -p <호스트포트>:<컨테이너포트> <이미지:태그>`로 Port Binding을 적용해 실행하면 컨테이너 IP·Host IP·Public IP 어느 경로로도 애플리케이션에 접근할 수 있다.
