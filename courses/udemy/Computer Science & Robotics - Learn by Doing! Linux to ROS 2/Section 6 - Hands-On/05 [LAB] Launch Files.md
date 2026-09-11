# [LAB] Launch Files

## 개요
1. 로봇의 모든 기능을 시작하는 데 사용할 단일 launch 파일에 대해 설명합니다.
2. Docker 컨테이너를 실행하여 시뮬레이션, 제어 시스템 및 자율 이동을 포함한 로봇의 모든 기능을 시작합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/52114825#overview)

## 내용
### 1. Docker 컨테이너 실행
- 이전 강의에서 만든 Docker 컨테이너를 실행합니다.
- `docker run` 명령을 사용하여 인터랙티브 모드로 컨테이너를 실행하고, 로봇 이미지의 디스플레이를 공유합니다.

### 2. 작업 공간 소스 설정
- 작업 공간을 소스 설정하여 ROS 2 환경을 활성화합니다.

### 3. Ros2 launch 명령 사용
- `ros2 launch` 명령을 사용하여 로봇 끌어오기 패키지를 시작합니다.
- 시뮬레이션 로봇의 launch 파일은 `launch mammal pod`로 이동하고, 시뮬레이션 로봇의 lounge dot Pi를 끌어옵니다.

### 4. 인수 제공
- launch 파일에 일부 인수를 제공할 수 있습니다. 예를 들어, 로봇을 시뮬레이트하려는 가상 세계를 지정합니다.

## 예시
```bash
docker run -it --rm -e DISPLAY=$DISPLAY -v /tmp/.X11-unix:/tmp/.X11-unix ros:latest bash
source ~/ros2_ws/install/setup.bash
ros2 launch robot_bringup bringup_simulated_robot.launch.py param:=small_house
```
## 요약
- 로봇의 모든 기능을 시작하는 데 사용할 단일 launch 파일에 대해 설명합니다.
- Docker 컨테이너를 실행하여 시뮬레이션, 제어 시스템 및 자율 이동을 포함한 로봇의 모든 기능을 시작합니다.
