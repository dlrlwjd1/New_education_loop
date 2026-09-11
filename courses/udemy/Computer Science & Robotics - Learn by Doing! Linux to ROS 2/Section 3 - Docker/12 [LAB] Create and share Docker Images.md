# [LAB] Create and share Docker Images

## 개요
1. Docker 이미지를 생성하고 공유하는 방법을 배웁니다.
2. 이미지의 불변성과 공유 방법에 대해 이해합니다.
3. 새로운 이미지를 다운로드하고, 필요한 프로그램을 설치하며, 컨테이너를 종료하고 저장하는 과정을 실습합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/50287369#overview)

## 내용
### Docker 이미지 생성 및 공유

1. **새 이미지 다운로드**
   ```bash
   docker run dash -it --network host bash
   ```
   이 명령어는 이미 `bash`가 설치되어 있는 경우 사용할 수 있습니다. 그렇지 않으면 새로운 이미지를 다운로드해야 합니다.

2. **네트워크 도구 설치**
   ```bash
   apt update && apt install iproute2 iputils-ping
   ```
   네트워크 도구를 설치하여 컨테이너에서 IP 주소를 확인할 수 있습니다.

3. **컨테이너 종료**
   ```bash
   exit
   ```

4. **이미지 저장 및 공유**
   - 컨테이너 ID 가져오기:
     ```bash
     docker ps -a
     ```
   - 변경 사항 커밋하여 새로운 이미지 생성:
     ```bash
     docker commit <container_id> Ross:network
     ```
   - 이미지 확인:
     ```bash
     docker images
     ```

5. **이미지 저장 및 로드**
   - 이미지 저장:
     ```bash
     docker save -o Ross_network_image.tar Ross:network
     ```
   - 이미지 로드:
     ```bash
     docker load -i Ross_network_image.tar
     ```

6. **Docker Hub에 이미지 공유**
   - Docker Hub 계정 생성 및 로그인:
     ```bash
     docker login
     ```
   - 이미지 태깅:
     ```bash
     docker tag Ross:network myusername/Ross:network
     ```
   - 이미지 푸시:
     ```bash
     docker push myusername/Ross:network
```
## 예시
1. **새 이미지 다운로드**
   ```bash
   docker run dash -it --network host bash
   ```

2. **네트워크 도구 설치**
   ```bash
   apt update && apt install iproute2 iputils-ping
   ```

3. **컨테이너 종료**
   ```bash
   exit
```
## 요약
- Docker 이미지를 생성하고 공유하는 방법을 배웁니다.
- 이미지의 불변성과 공유 방법에 대해 이해합니다.
- 새로운 이미지를 다운로드하고, 필요한 프로그램을 설치하며, 컨테이너를 종료하고 저장하는 과정을 실습합니다.
