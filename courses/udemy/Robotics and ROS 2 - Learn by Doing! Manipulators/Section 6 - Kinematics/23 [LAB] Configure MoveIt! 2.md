# [LAB] Configure MoveIt! 2

## 개요
- MoveIt! 2를 사용하여 로봇의 그립퍼를 세부적으로 제어하고, 초기 상태에서 최종 상태로의 궤도 계산을 수행하는 방법에 대해 학습합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/37574366#overview)

## 내용
### 새로운 패키지 생성
1. 터미널에서 작업 공간으로 이동하여 SRC 하위 폴더로 진입합니다.
2. `package create` 명령어를 사용하여 새 패키지를 생성합니다. 패키지 이름은 "ArduinoBotMoveIt"로 설정하고, 빌드 타입을 CMake로 지정합니다.

### SDF 파일 작성
1. ArduinoBotMoveIt 패키지 내에 config 폴더를 생성합니다.
2. `arduino_bot.srdf` 파일을 생성하고, XML 형식으로 작성합니다.
3. `<robot name="ArduinoBot">` 태그 안에서 두 개의 그룹(`arm_group`과 `gripper`)을 정의합니다.
4. 각 그룹에 대한 초기 상태를 설정합니다. 예를 들어, `home` 상태로 모든 관절 값을 0으로 설정합니다.

### YAML 파일 작성
1. `initial_positions.yaml` 파일을 생성하고, 각 로봇의 이동 가능한 관절에 대한 초기 위치를 설정합니다.
2. `joint_limits.yaml` 파일을 생성하고, 각 관절의 키네마틱 제한을 설정합니다.
3. `kinematic.yaml` 파일을 생성하고, MoveIt!이 사용할 키네마틱 솔버를 설정합니다.

### 컨트롤러 설정
1. `moveit_controllers.yaml` 파일을 생성하여 MoveIt! 라이브러리와 ROS2 Control 라이브러리를 연결합니다.
2. `MoveItSimpleControllerManager`를 사용하여 두 개의 컨트롤러(`arm_controller`와 `gripper_controller`)를 설정합니다.

### 카르테시안 제한 설정
1. `cartesian_limits.yaml` 파일을 생성하고, 로봇의 카르테시안 이동에 대한 제한을 설정합니다.

## 예시
원문의 코드·명령·사례는 없습니다.

## 요약
- MoveIt! 2를 사용하여 로봇의 그립퍼를 세부적으로 제어하고, 초기 상태에서 최종 상태로의 궤도 계산을 수행하는 방법에 대해 학습했습니다.
- SDF 파일, YAML 파일, 컨트롤러 설정, 카르테시안 제한 설정 등 다양한 구성 파일을 작성하여 MoveIt! 2를 올바르게 실행할 수 있습니다.
