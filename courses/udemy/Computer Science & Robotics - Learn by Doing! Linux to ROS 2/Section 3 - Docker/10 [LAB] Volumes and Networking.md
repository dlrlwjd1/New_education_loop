# [LAB] Volumes and Networking

## 개요
이 실습에서는 Docker의 볼륨(Volume)과 네트워킹(Networking)에 대해 학습합니다. 볼륨을 사용하여 데이터를 지속적으로 유지하고, 컨테이너 간에 파일 공유하는 방법을 배우고, 기본적인 네트워크 설정을 통해 외부와의 통신을 가능하게 합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/52396181#overview)

## 내용
### 1. 볼륨(Volume) 설정
볼륨은 호스트 컴퓨터와 Docker 컨테이너 사이에서 데이터를 공유할 수 있는 기능입니다. 이를 사용하여 작업 파일을 지속적으로 유지할 수 있습니다.

#### 명령어
```bash
docker run -v /home/robot/work:/work --name python_container bash
```

- `-v /home/robot/work:/work`: 호스트의 `/home/robot/work` 폴더와 컨테이너의 `/work` 폴더를 볼륨으로 연결합니다.
- `--name python_container`: 컨테이너 이름을 `python_container`로 설정합니다.

#### 작업 순서
1. 새로운 터미널을 열고, 호스트의 `/home/robot/work` 폴더에 Python 스크립트를 작성합니다.
2. 스크립트 내용은 간단한 수학 연산을 수행하는 코드입니다.

#### 확인 방법
- 컨테이너 내에서 `python operation.py` 명령어로 스크립트를 실행하고, 출력 결과가 12인지 확인합니다.

### 2. 네트워킹(Networking) 설정
네트워킹은 컨테이너가 외부와 통신할 수 있도록 하는 기능입니다. 기본적으로 Docker는 브리지 네트워크 모드를 사용하여 컨테이너 간의 네트워크 분리를 유지합니다.

#### 명령어
```bash
docker run -d --name python_container bash
```

- `-d`: 백그라운드에서 실행합니다.
- `--name python_container`: 컨테이너 이름을 `python_container`로 설정합니다.

#### 작업 순서
1. 기본적인 네트워크 설정을 확인하기 위해, 이미지를 다운로드한 후 `apt update`와 `apt install ping` 명령어를 실행합니다.

## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

## 요약
- `-v /home/robot/work:/work`: 호스트의 `/home/robot/work` 폴더와 컨테이너의 `/work` 폴더를 볼륨으로 연결합니다.
- `--name python_container`: 컨테이너 이름을 `python_container`로 설정합니다.
- 컨테이너 내에서 `python operation.py` 명령어로 스크립트를 실행하고, 출력 결과가 12인지 확인합니다.
