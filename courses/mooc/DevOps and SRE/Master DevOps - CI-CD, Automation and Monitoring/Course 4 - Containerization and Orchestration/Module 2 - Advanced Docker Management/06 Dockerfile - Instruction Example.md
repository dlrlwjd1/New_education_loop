# Dockerfile - Instruction Example

## 개요
- HTML 파일을 Apache 웹 서버로 호스팅하는 간단한 Dockerfile 예제를 통해 `FROM`, `RUN`, `COPY`, `CMD`, `EXPOSE` 지시문의 역할을 정리.

## 내용
### 예제 시나리오
- 목표: `index.html` 파일을 Apache(HTTPD) 웹 서버 위에서 서비스하는 이미지를 만드는 것.

### 지시문별 역할
1. **`FROM`** — 항상 첫 번째 지시문으로, 애플리케이션을 올릴 베이스 이미지를 지정. 예: `FROM ubuntu:18.04`(Ubuntu 20/22/24, CentOS, Rocky Linux, Amazon Linux, Alpine Linux 등 어떤 OS도 가능).
   - 무엇을 실행하느냐에 따라 필요한 베이스 이미지가 달라짐: WAR 파일이면 Tomcat, JAR 파일이면 JDK, Python 파일이면 Python, HTML 파일이면 웹 서버(Apache/HTTPD 또는 Nginx)가 필요.
2. **`RUN`** — 컨테이너 안에서 실행할 명령을 지정. 예: `RUN apt-get install apache2`로 웹 서버(Apache2) 설치.
3. **`COPY`** — 로컬의 코드 파일을 컨테이너 내부 경로로 복사. 예: `COPY index.html /var/www/html`(Apache 설치 시 자동 생성되는 경로).
4. **`CMD`** — 컨테이너가 실행될 때 자동으로 시작할 명령을 지정 — 컨테이너를 실행 가능하게 만드는 지시문. 예: `CMD ["httpd", "-D", "FOREGROUND"]`로 HTTPD 서비스를 포그라운드로 실행 — 컨테이너 시작 시 이 애플리케이션이 항상 함께 시작되며, 실행되면 지정된 경로(`/var/www/html`)의 `index.html`을 자동으로 서비스.
5. **`EXPOSE`** — 컨테이너가 리스닝할 포트 번호를 지정. 예: `EXPOSE 80`(HTTPD의 기본 포트).

### 작성 규칙
- 모든 지시문은 대문자(BLOCK LETTERS)로 작성하며, `지시문 인자` 형태로 한 줄에 하나씩 작성.

## 요약
- 간단한 웹 애플리케이션용 Dockerfile은 `FROM`(베이스 이미지, 예: Ubuntu)으로 시작해 `RUN`(Apache 설치) → `COPY`(HTML 코드 복사) → `CMD`(HTTPD 실행 명령) → `EXPOSE`(포트 80 노출) 순서로 지시문을 쌓아, 이미지를 실행하면 곧바로 Apache가 지정된 경로의 `index.html`을 서비스하도록 구성한다.
