# Docker Daemon - Build the Docker Image

## 개요
- 작성한 Dockerfile로 이미지를 빌드하고, Port Binding을 적용한 컨테이너로 실행해 공인 IP를 통해 브라우저에서 "Hello Docker"를 확인하는 실습.

## 내용
### 이미지 빌드
```bash
docker build -t flask-app:v1 .
```
- **`-t flask-app:v1`** — 이미지에 이름(`flask-app`)과 버전 태그(`v1`)를 부여.
- **`.`**(마지막 인자) — 현재 디렉터리(빌드 컨텍스트)를 스캔해 `Dockerfile`이라는 이름의 파일을 찾아 실행하라는 의미.
- 빌드 과정: Python 이미지 다운로드 → 작업 디렉터리 생성 → 코드 복사(`COPY`) → `pip install` 실행 로그 → 포트 5000 노출 → 컨테이너 시작 명령 지정 → 최종 이미지 생성.
- 태그를 지정하지 않으면 기본적으로 `latest` 버전으로 취급됨.
```bash
docker images   # flask-app:v1 이미지 확인 (베이스 이미지 python:3.9-slim도 함께 존재)
```

### 컨테이너 실행 (Port Binding 포함)
```bash
docker run -d -p 5000:5000 flask-app:v1
```
- **`-d`** — Detach(백그라운드) 모드로 실행.
- **`-p 5000:5000`** — Docker Host의 포트 5000을 컨테이너의 포트 5000에 매핑.
```bash
docker ps -a   # 컨테이너가 Up 상태이며 포트 매핑(5000->5000) 확인
```

### 브라우저로 접근 검증
- Docker Host가 AWS에서 호스팅되어 **공인(Public) IP**를 가지고 있으므로, `http://<Public IP>:5000`으로 접속.
- "Hello Docker" 페이지가 정상적으로 표시됨 — 애플리케이션 코드에서 반환하는 문자열과 일치.
- 흐름: 브라우저 요청(Public IP:5000) → Docker Host → 컨테이너(Port 5000)로 전달.

### 정리(Cleanup) — Docker Daemon 기본 명령 복습
```bash
docker ps -a                       # 컨테이너 목록 확인
docker logs <컨테이너 이름/ID>      # 컨테이너 로그 확인
docker stop <컨테이너 이름/ID>      # 컨테이너 정지
docker rm <컨테이너 이름/ID>        # 정지된 컨테이너 삭제
docker rmi flask-app:v1             # 만든 이미지 삭제
docker rmi python:3.9-slim          # 베이스 이미지도 삭제(버전 태그 명시)
```
- 삭제 후 `docker images`로 확인하면 아무 이미지도 남아있지 않음.

## 요약
- `docker build -t flask-app:v1 .`로 Dockerfile을 실행해 이미지를 만들고 `docker run -d -p 5000:5000 flask-app:v1`으로 Port Binding된 컨테이너를 실행하면, Docker Host의 공인 IP와 포트 5000을 통해 브라우저에서 "Hello Docker" 애플리케이션에 접근할 수 있으며, 실습 후에는 `docker stop`→`rm`→`rmi` 순서로 컨테이너와 이미지를 모두 정리한다.
