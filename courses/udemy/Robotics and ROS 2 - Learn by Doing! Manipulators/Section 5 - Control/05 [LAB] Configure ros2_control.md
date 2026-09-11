# [LAB] Configure ros2_control

## 개요
- YAML 구성 파일 이해
- 새로운 패키지 생성
- ros2_control 라이브러리의 구성 파라미터 설정
- 컨트롤러 매니저와 관련된 설정
- 로봇 상태 전송 모듈 설정

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/37535528#overview)

## 내용
### 1. YAML 구성 파일 이해
YAML 파일은 노드에 대한 구성 파라미터를 포함하는 텍스트 파일입니다.

### 2. 새로운 패키지 생성
새로운 패키지를 생성하여 ros2_control 라이브러리의 구성파라미터를 저장합니다.

```bash
cd ~/ros2_ws/src
ros2 pkg create --build-type ament_cmake arduino_bot_controller
```

### 3. 컨트롤러 매니저와 관련된 설정
컨트롤러 매니저는 로봇의 제어 시스템을 구성하는 데 필요한 파라미터를 설정합니다.

```yaml
controller_manager:
  ros__parameters:
    update_rate: 10.0
    controllers:
      arm_controller:
        type: joint_trajectory_controller/JointTrajectoryController
      gripper_controller:
        type: forward_command_controller/ForwardCommandController
```

### 4. 로봇 상태 전송 모듈 설정
로봇의 현재 상태를 토픽으로 발행하는 모듈을 설정합니다.

```yaml
joint_state_broadcaster:
  ros__parameters:
    joint_names:
      - joint1
      - joint2
      - joint3
```

### 5. 컨트롤러 매니저의 단일 컨트롤러 설정
각 컨트롤러에 대한 추가적인 파라미터를 설정합니다.

```yaml
arm_controller:
  ros__parameters:
    joints:
      - joint1
      - joint2
      - joint3
    command_interfaces:
      - position
    state_interfaces:
      - position
    open_loop_control: true
    allow_integration_in_goal_trajectories: true

gripper_controller:
  ros__parameters:
    joints:
      - joint4
    command_interfaces:
      - position
    state_interfaces:
      - position
    interface_name: position
```

## 예시
위의 YAML 파일은 컨트롤러 매니저와 관련된 설정을 보여줍니다.

## 요약
- YAML 구성 파일 이해
- 새로운 패키지 생성
- ros2_control 라이브러리의 구성파라미터 설정
- 컨트롤러 매니저와 관련된 설정
- 로봇 상태 전송 모듈 설정
