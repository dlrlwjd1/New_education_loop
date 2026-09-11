# Continuous Deployment Using Jenkins Pipelines - Configuring Source Code

## 개요
- Docker 기반 Continuous Deployment 파이프라인을 위한 사전 준비 — 소스 코드, Dockerfile, Jenkins-Docker 권한 설정을 실습.

## 내용
### 소스 코드와 Dockerfile
- 예제 저장소(Jenkins Python Docker Demo)는 "Hello from the container world"를 출력하는 간단한 Python 웹 애플리케이션.
- **Docker Image**는 컨테이너에 필요한 지시사항·바이너리·라이브러리의 모음이며, **Dockerfile**에 그 지시사항을 작성한다.

```dockerfile
FROM ubuntu
RUN apt-get update && apt-get install -y python3 python3-flask
COPY . /temp
WORKDIR /temp
EXPOSE 8080
CMD ["python3", "app.py"]
```

- 위 내용은 Ubuntu 컨테이너에 Python3와 Flask를 설치하고, 코드를 `/temp`로 복사, 8080 포트를 노출한 뒤 Python 애플리케이션을 실행하는 흐름을 나타낸다.

### Jenkins가 Docker 명령을 실행하도록 권한 설정
- Jenkins와 Docker가 같은 VM에 설치되어 있어야 하며, Jenkins 사용자가 Docker 소켓에 접근할 권한이 필요하다(Docker 컨테이너는 root 권한으로 실행되기 때문).

```bash
# 임시 방법 (서버 로그인마다 재실행 필요)
sudo chmod 666 /var/run/docker.sock

# 영구적인 방법: /etc/sudoers 파일에 Jenkins 사용자 항목 추가
# jenkins ALL=(ALL) NOPASSWD: ALL
```

## 요약
- Docker 기반 Continuous Deployment를 위해서는 애플리케이션 코드와 함께 Dockerfile을 저장소에 준비하고, Jenkins가 설치된 서버에서 Jenkins 사용자가 Docker 소켓(`/var/run/docker.sock`)에 접근할 수 있도록 권한을 설정해야 한다.
