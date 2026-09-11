# [LAB] Visualize the Robot

## 개요
- ROS 2의 Robot State Publisher 노드를 사용하여 로봇의 RDF 모델을 발행하는 방법
- RViz에서 로봇의 링크와 관절을 시각화하는 방법

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/37484682#overview)

## 내용
### Robot State Publisher 노드 설정
Robot State Publisher 노드는 ROS 2 토픽에 로봇의 RDF 모델을 발행하는 일반적인 목적의 노드입니다. 이를 위해 `robot_description` 파라미터를 설정해야 합니다.

```bash
ros2 param set robot_state_publisher robot_description "path/to/your/robot.urdf"
```

### RViz에서 로봇 시각화
RViz는 로봇의 링크와 관절을 시각화하는 데 사용됩니다. TF 정보를 읽어들이는 두 개의 토픽이 필요합니다.

1. **TF 정보 발행**: `robot_state_publisher` 노드가 실행되어야 합니다.
2. **그래픽 인터페이스 시작**: `joint_state_publisher_gui` 노드를 실행하여 로봇의 관절을 조작할 수 있는 그래픽 인터페이스를 시작합니다.

### RViz에서 로봇 시각화 설정
RViz에서 로봇의 링크와 메시지를 시각화하려면 다음 단계를 따르세요:

1. **TF 정보 추가**: `Add` 버튼을 클릭하고 TF 정보를 선택합니다.
2. **메시지 표시**: `Add` 버튼을 클릭하고 `Robot Model` 플러그인을 선택합니다.
3. **주제 변경**: `robot_description` 토픽으로 설정합니다.

### 로봇 상태 저장
현재의 시각화 설정을 저장하여 다음에 다시 사용할 수 있습니다:

1. **파일 저장**: `File -> Save Config As`를 선택하고, 작업 공간의 `source/Arduino_bot_description/RVs` 폴더에서 새로운 폴더 `visualization_display_RVs`를 생성합니다.
2. **설정 파일 저장**: 설정 파일을 해당 폴더에 저장합니다.

## 예시
```bash
ros2 param set robot_state_publisher robot_description "/home/user/OLM/Alien_Arduino_Bot_Workspace/source/Arduino_bot_description/DF/Arduino_bot.urdf"
```

## 요약
- Robot State Publisher 노드를 사용하여 로봇의 RDF 모델을 발행합니다.
- RViz에서 로봇의 링크와 관절을 시각화할 수 있습니다.
- TF 정보를 읽어들이는 토픽이 필요하며, `robot_state_publisher`와 `joint_state_publisher_gui` 노드가 실행되어야 합니다.
- 로봇 상태를 저장하여 다음에 다시 사용할 수 있습니다.
