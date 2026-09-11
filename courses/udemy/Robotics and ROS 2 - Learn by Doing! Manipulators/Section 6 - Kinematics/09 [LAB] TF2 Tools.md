# [LAB] TF2 Tools

## 개요
- TF2 라이브러리의 기능을 계속 연구합니다.
- 이 강의에서는 이미 개발되어 있는 도구와 노드를 탐색하여 참조 프레임의 사용과 관리를 위한 추가 분석 기능을 제공합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/37574610#overview)

## 내용
### 1. Robot Visualization
- 실무에서 로봇을 시각화하기 위해 VSCode에서 새로운 터미널을 열고 작업 공간으로 이동합니다.
- `setup.bash` 파일을 소스로드하고, Arduino bot description 패키지의 `display.launch.py`를 실행하여 로봇 시각화를 시작합니다.

### 2. Frame Tree Visualization
- 새로운 터미널을 열고 Ros2에서 현재 사용 가능한 주제 목록을 확인합니다.
- `ros2 topic list` 명령어로 DTF와 TF static 주제가 있는 것을 확인할 수 있습니다.
- `ros2 topic info TF --verbose` 명령어를 사용하여 TF 주제의 노드 이름을 확인합니다.
- `robot_state_publisher_node`가 TF 주제에서 정보를 발행하고 있으며, 이는 URDF 모델을 읽고 변환을 발행하는 노드입니다.

### 3. Frame Tree Graph
- `ros2 run tf2_tools view_frames` 명령어로 TF2 Tools 라이브러리의 `view_frames` 노드를 실행합니다.
- 이 노드는 TF와 TF static 주제에서 발행되는 모든 프레임을 수신하고, 프레임 트리와 연결 정보를 포함한 그래프를 생성합니다.

### 4. Transformation Matrix Display
- `ros2 run tf2_ros tf_echo` 명령어로 TF2 Ros 패키지의 `TF to echo Node`를 실행합니다.
- 두 개의 참조 프레임 간의 변환 행렬을 표시할 수 있습니다.
- 예를 들어, `base_link`와 `horizontal_arm` 사이의 변환 행렬을 확인할 수 있습니다.

### 5. Forward Kinematics
- `ros2 run tf2_ros tf_echo world base_link` 명령어로 `world`와 `base_link` 간의 변환 행렬을 실시간으로 출력합니다.
- 이는 로봇의 각도가 변경될 때마다 변환 행렬이 업데이트되고, 새로운 값으로 전달됩니다.

## 예시
```bash
# Robot Visualization
source setup.bash
ros2 launch arduino_bot_description display.launch.py

# Frame Tree Graph
ros2 run tf2_tools view_frames

# Transformation Matrix Display
ros2 run tf2_ros tf_echo world base_link
```

## 요약
- TF2 라이브러리의 도구를 사용하여 로봇의 참조 프레임을 시각화하고 트리 구조로 표시합니다.
- `robot_state_publisher_node`가 변환 정보를 발행하며, `view_frames` 노드는 이를 그래픽으로 표시합니다.
- `tf_echo` 노드를 사용하여 두 개의 참조 프레임 간의 변환 행렬을 실시간으로 출력할 수 있습니다.
