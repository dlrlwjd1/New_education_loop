# [LAB] Docker Compose

## 개요
1. Docker Compose 파일 생성 및 사용 방법 이해
2. 서비스 정의와 설정
3. 볼륨 공유 및 환경 변수 설정
4. 커스텀 명령 실행

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/50287393#overview)

## 내용
### 1. Docker Compose 파일 생성
Docker Compose 파일은 YAML 형식으로 작성됩니다. 보통 Dockerfile과 같은 폴더에 위치시킵니다. 기본 파일명은 `docker-compose.yml`입니다.

```yaml
version: '3.9'
services:
  devbox:
    image: devbox_image
```

### 2. 서비스 정의
서비스는 하나 이상의 컨테이너를 구성하는 설정을 의미합니다. 각 서비스는 이름과 이미지를 지정해야 합니다.

```yaml
services:
  devbox:
    image: devbox_image
    volumes:
      - ./source:/home/devuser/source
    environment:
      - DEBUG=true
```

### 3. 볼륨 공유 및 환경 변수 설정
볼륨을 사용하여 호스트와 컨테이너 간 데이터를 공유할 수 있습니다. 환경 변수는 로컬 환경에서 가져올 수도 있습니다.

```yaml
volumes:
  - ./source:/home/devuser/source

environment:
  - DEBUG=true
```

### 4. 커스텀 명령 실행
Docker Compose를 사용하여 컨테이너 시작 시 특정 명령을 실행할 수 있습니다.

```yaml
command: python3 /home/devuser/source/hello.py
```
## 예시
1. **Docker Compose 파일 생성**
   ```bash
   mkdir Devbox
   cd Devbox
   touch docker-compose.yml
   ```

2. **docker-compose.yml 내용 작성**
   ```yaml
   version: '3.9'
   services:
     devbox:
       image: devbox_image
       volumes:
         - ./source:/home/devuser/source
       environment:
         - DEBUG=true
   ```

3. **볼륨 및 환경 변수 설정**
   ```bash
   mkdir source
   touch source/hello.py
   echo "print('Hello script has been correctly executed')" > source/hello.py
   ```

4. **Docker Compose 실행**
   ```bash
   docker-compose up
```
## 요약
- Docker Compose 파일 생성 및 사용 방법 이해
- 서비스 정의와 설정
- 볼륨 공유 및 환경 변수 설정
- 커스텀 명령 실행
