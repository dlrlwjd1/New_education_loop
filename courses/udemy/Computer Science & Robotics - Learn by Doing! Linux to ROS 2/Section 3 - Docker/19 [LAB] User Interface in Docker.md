# [LAB] User Interface in Docker

## 개요
1. X Window System의 종류와 Docker에서 사용하는 방법에 대해 이해합니다.
2. Docker를 사용하여 텍스트 파일을 편집하거나 그래픽 시계를 실행하여 화면 표시 권한을 확인합니다.
3. Docker Compose를 사용하여 새로운 이미지를 생성하고, 그래픽 인터페이스 지원을 확인합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/52397767#overview)

## 내용
### X Window System 이해
- **X11**: X Window System의 기본 버전으로, 대부분의 Linux 시스템에서 사용됩니다.
- **Wayland**: 최신의 X Window System 대체제로, 보안과 효율성을 높여주고 있습니다.

### Docker를 통한 그래픽 인터페이스 테스트
1. **텍스트 파일 편집**:
   - `gedit`을 사용하여 텍스트 파일을 편집합니다.
   ```bash
   apt install gedit
   ```
2. **그래픽 시계 실행**:
   - `xclock`을 사용하여 간단한 그래픽 시계를 실행합니다.
   ```bash
   xclock
   ```

### Docker Compose를 통한 그래픽 인터페이스 지원 확인
1. **Dockerfile 생성**:
   - 기본적인 Ubuntu 20.04 이미지를 사용하고, `gedit`과 X11 앱을 설치합니다.
   ```dockerfile
   FROM ubuntu:20.04
   LABEL maintainer="Jonathan Smith"
   LABEL description="Docker with geographical tools"
   RUN apt update && apt install -y gedit x11-apps
   ```
2. **Docker Compose 파일 생성**:
   - `docker-compose.yml` 파일을 작성합니다.
   ```yaml
   version: '3'
   services:
     docker-ui:
       image: docker-ui
       container_name: docker-ui
       command: xclock
       environment:
         DISPLAY: $DISPLAY
       volumes:
         - /tmp/.X11-unix:/tmp/.X11-unix
   ```
3. **Docker Compose 실행**:
   ```bash
   docker-compose up
   ```

### 화면 표시 권한 문제 해결
- **환경 변수 공유**:
  - `DISPLAY` 환경 변수를 컨테이너에 공유합니다.
  ```yaml
  environment:
    DISPLAY: $DISPLAY
  ```
- **공통 볼륨 공유**:

## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

## 요약
- X Window System의 종류와 Docker에서 사용하는 방법에 대해 이해합니다.
- Docker를 사용하여 텍스트 파일을 편집하거나 그래픽 시계를 실행하여 화면 표시 권한을 확인합니다.
- Docker Compose를 사용하여 새로운 이미지를 생성하고, 그래픽 인터페이스 지원을 확인합니다.
