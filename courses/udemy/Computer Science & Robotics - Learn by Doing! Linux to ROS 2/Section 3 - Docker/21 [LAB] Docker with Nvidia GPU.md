# [LAB] Docker with Nvidia GPU

## 개요
1. Nvidia 드라이버가 제대로 설치되어 있는지 확인합니다.
2. 새로운 Docker 이미지를 생성하고, 컨테이너를 실행하여 Nvidia GPU에 대한 액세스를 테스트합니다.
3. Nvidia Container Toolkit을 설치하여 Docker 컨테이너에서 Nvidia GPU에 대한 액세스를 가능하게 합니다.
4. Docker Compose 파일을 사용하여 Nvidia GPU에 대한 액세스를 설정합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/52397847#overview)

## 내용
### 1. Nvidia SMI 명령어로 드라이버 확인
```bash
nvidia-smi
```
이 명령어의 출력을 통해 Nvidia 드라이버가 제대로 설치되어 있고, GPU가 시스템에 감지되고 있는지 확인할 수 있습니다.

### 2. Docker 이미지 생성 및 컨테이너 실행
1. 새로운 디렉토리를 만들고 Dockerfile을 작성합니다.
2. Dockerfile에서 Ubuntu 20.04 이미지를 기반으로 합니다.
3. 사용자를 추가하고, 작업 디렉토리를 설정합니다.
4. `docker build` 명령어를 사용하여 Docker 이미지를 빌드합니다.

### 3. Nvidia Container Toolkit 설치
1. Nvidia Container Toolkit을 설치하기 위해 공식 문서를 참조합니다.
2. Ubuntu 또는 Debian 기반의 시스템에서 `apt` 패키지 관리자를 사용하여 도구를 설치합니다.
3. 새로운 저장소를 구성하고, 패키지를 업데이트하고 설치합니다.

### 4. Docker 설정
1. Docker를 Nvidia Container Toolkit 런타임으로 구성합니다.
2. `sudo nvidia-docker run` 명령어를 사용하여 컨테이너를 실행합니다.
3. `-gpus all` 옵션을 사용하여 컨테이너에 GPU 액세스 권한을 부여합니다.

### 5. Docker Compose 파일 작성
1. `docker-compose.yml` 파일을 생성하고 편집합니다.
2. 서비스를 정의하고, Nvidia Container Toolkit 런타임을 사용하도록 설정합니다.

## 예시
### Dockerfile 예시
```Dockerfile
FROM ubuntu:20.04

LABEL maintainer="your_name@example.com"

RUN apt-get update && \
    apt-get install -y nvidia-container-toolkit && \
    user
```
## 요약
- Nvidia 드라이버가 제대로 설치되어 있는지 확인합니다.
- 새로운 Docker 이미지를 생성하고, 컨테이너를 실행하여 Nvidia GPU에 대한 액세스를 테스트합니다.
- Nvidia Container Toolkit을 설치하여 Docker 컨테이너에서 Nvidia GPU에 대한 액세스를 가능하게 합니다.
- Docker Compose 파일을 사용하여 Nvidia GPU에 대한 액세스를 설정합니다.
