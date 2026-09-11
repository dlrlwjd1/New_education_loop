# Docker Daemon - Creating a Dockerfile

## 개요
- Docker 설치를 검증한 뒤, Flask 애플리케이션 코드와 Dockerfile을 작성해 컨테이너화를 준비하는 실습.

## 내용
### Docker 설치 확인
```bash
docker --version          # 예: 26.1.3
systemctl status docker    # active (running) 확인, 아니라면 systemctl start docker
```

### 프로젝트 디렉터리와 애플리케이션 코드 준비
```bash
mkdir python-flask-app
cd python-flask-app
vi app.py     # Flask 코드 작성: from flask import Flask ... return "Hello Docker" ... app.run(...)
```

### Dockerfile 작성
```bash
vi Dockerfile
```
```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY app.py /app
RUN pip install flask
EXPOSE 5000
CMD ["python", "app.py"]
```

### 각 지시문 설명
- **`FROM python:3.9-slim`** — 베이스 이미지로 Python 3.9의 **Slim 버전**(모듈·패키지 수가 제한된 경량 버전) 사용.
- **`WORKDIR /app`** — 작업 디렉터리 `/app` 폴더를 생성 — 이후 모든 코드와 작업이 이 폴더 안에서 이루어짐.
- **`COPY app.py /app`** — 로컬 Docker Host에 있는 `app.py` 코드를 이미지의 `/app` 폴더로 복사.
- **`RUN pip install flask`** — Python Slim 버전에는 기본적으로 Flask 모듈이 없으므로, 애플리케이션의 의존성인 **Flask**(Python으로 웹사이트를 만들 때 사용하는 모듈)를 설치.
- **`EXPOSE 5000`** — 코드 상 Flask 애플리케이션이 포트 `5000`에서 실행되므로 이 포트를 노출 — 추후 Port Binding으로 Docker Host의 임의 포트와 매핑하기 위한 사전 준비.
- **`CMD ["python", "app.py"]`** — 컨테이너가 시작될 때 `app.py`를 실행해 애플리케이션을 구동.

## 요약
- Flask로 "Hello Docker"를 반환하는 간단한 Python 애플리케이션(`app.py`, 포트 5000)을 작성한 뒤, `FROM`(Python 3.9-slim 베이스)·`WORKDIR`(`/app` 작업 디렉터리)·`COPY`(코드 복사)·`RUN pip install flask`(의존성 설치)·`EXPOSE 5000`(포트 노출)·`CMD`(실행 명령)로 구성된 Dockerfile을 작성해 컨테이너화를 준비한다.
