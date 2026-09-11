# [LAB] ros2_control CLI

## 개요
- Gazebo 환경에서 로봇을 시뮬레이션하고, 해당 명령에 대한 응답을 관찰합니다.
- 새로운 터미널을 열고 작업 공간으로 이동하여 Qualcomm Build로 빌드합니다.
- 터미널의 새 창에서 `setup.bash` 파일을 소스로 하여 Gazebo 시뮬레이션을 시작합니다.
- Arduino 보드 설명 패키지에서 `gazebo.launch.py`를 실행하여 로봇 시뮬레이션을 시작합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/37535552#overview)

## 내용
### 1. Gazebo 시뮬레이션 시작
Gazebo 환경에서 로봇의 시뮬레이션을 시작하고, 로봇 제어 시스템을 활성화합니다.
```bash
ros2 launch arduino_bot_controller gazebo.launch.py
```

### 2. ros2_control CLI 사용
`ros2_control` 라이브러리를 사용하여 로봇 제어 시스템의 상태를 확인하고, 특정 컨트롤러에 명령을 보내는 방법을 배웁니다.
```bash
ros2 control list_controllers
ros2 control list_hardware_components
ros2 control list_hardware_interfaces
```

### 3. 제어 시스템 활성화 확인
제어 시스템이 올바르게 구성되고 활성화되었는지 확인합니다.
```bash
ros2 control list_controllers
```
- `joint_state_broadcaster`, `gripper_controller`, `arm_controller` 등이 활성화되어 있어야 합니다.

### 4. 제어 시스템 사용 예시
Gripper 컨트롤러를 사용하여 로봇의 팔을 움직이는 방법을 보여줍니다.
```bash
ros2 topic list
```
- `gripper_controller/command`와 `arm_controller/joint_trajectory` 토픽이 있어야 합니다.

### 5. Gripper 제어 예시
Gripper를 열고 닫는 명령을 보내서 제어 시스템의 정상 작동을 확인합니다.
```bash
ros2 topic pub /gripper_controller/command std_msgs/msg/Float64MultiArray "data: [-1.0]"
```
- Gripper가 `-1.0` 라디안으로 열리고, `joint_five`도 따라 움직입니다.

## 예시
위의 명령어를 사용하여 Gazebo 시뮬레이션에서 로봇 제어 시스템을 활성화하고, Gripper 컨트롤러를 사용하여 팔을 움직이는 방법을 보여줍니다.

## 요약
- Gazebo 환경에서 로봇의 시뮬레이션을 시작합니다.
- `ros2_control` 라이브러리를 사용하여 로봇 제어 시스템의 상태를 확인하고, 특정 컨트롤러에 명령을 보냅니다.
- Gripper 컨트롤러를 사용하여 팔을 움직이는 방법을 배웁니다.
