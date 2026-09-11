# [LAB] Advanced Docker Compose

## 개요
1. 이미지의 재컴파일 요청
2. Docker Compose를 통한 직접 컴파일
3. 다중 컨테이너 관리
4. 자동 업데이트 기능

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/50956099#overview)

## 내용
### 이미지의 재컴파일 요청
Docker Compose는 이미지가 이미 존재하는 경우 재컴파일을 요청할 수 있습니다. 이미지가 이미 존재하면 Docker Compose는 캐시된 레이어를 사용하여 필요한 이미지를 생성합니다.

### Docker Compose를 통한 직접 컴파일
Docker Compose 파일에서 `docker build` 명령을 사용하여 Dockerfile을 직접 컴파일할 수 있습니다. 이 방법은 개발 및 협업 환경에서 여러 가지 실용적인 장점을 제공합니다.

### 다중 컨테이너 관리
Docker Compose는 하나의 파일로 여러 컨테이너를 정의하고 관리할 수 있습니다. 예를 들어, 서버와 클라이언트로 구성된 애플리케이션을 개발하는 경우, Docker Compose를 사용하여 각 부분을 별도의 컨테이너에 분리하여 실행할 수 있습니다.

### 자동 업데이트 기능
이 소절의 본문은 수집되지 않았다. Udemy 자막 원문을 확보한 뒤 보완해야 한다.

## 예시
```bash
# 이미지 삭제
docker rmi devbox:latest

# 새로운 Docker Compose 파일 생성 및 실행
docker-compose -f docker-compose-build.yml up --build
```
## 요약
- 이미지의 재컴파일 요청
- Docker Compose를 통한 직접 컴파일
- 다중 컨테이너 관리
- 자동 업데이트 기능
