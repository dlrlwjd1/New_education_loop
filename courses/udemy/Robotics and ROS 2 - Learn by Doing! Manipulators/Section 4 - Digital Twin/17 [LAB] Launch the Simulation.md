# [LAB] Launch the Simulation

## 개요
- Gazebo 시뮬레이션을 시작하는 데 필요한 launch 파일 생성 및 설정 방법 이해

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/36847142#overview)

## 내용
### 1. 새로운 launch 파일 생성
- Visual Studio Code에서 Arduino board description 패키지 내의 launch 폴더에 새로운 launch 파일 `gazebo.launch.py`를 생성합니다.

### 2. launch 파일 작성
- launch_description 클래스를 가져와서 generate_launch_description 함수를 정의합니다.
- robot_state_publisher 노드를 시작하여 로봇의 URDF 모델을 게임 보드에 게시합니다.
- gazebo_resource_path 환경 변수를 설정하여 Gazebo가 로봇의 URDF 모델과 메시지를 올바르게 로드할 수 있도록 합니다.

### 3. gazebo 노드 시작
- launch_description 클래스의 생성자에서 모든 동작을 포함하는 리스트를 작성합니다.
- robot_state_publisher 노드와 gazebo_resource_path 환경 변수를 설정합니다.
- gazebo_simulation.launch.py 파일을 포함하여 Gazebo 시뮬레이션을 시작합니다.

### 4. gazebo 시뮬레이션 구성
- gazebo simulation의 verbosity level과 로그 메시지를 출력하도록 설정합니다.
- 시뮬레이션이 즉시 시작되도록 flag -r를 사용합니다.
- 시뮬레이션에서 로봇이 스포ーン될 월드 이름을 지정합니다.

### 5. gazebo spawn entity 노드
- RosGazeboSim 패키지에서 gazebo_spawn_entity 노드를 생성하여 로봇 모델을 게임 보드에 게시합니다.
- gazebo transport 프로토콜을 사용한 Gazebo 메시지를 Ros2 메시지로 변환하는 parameter bridge 노드를 시작합니다.

## 예시
```python
from launch import LaunchDescription
from launch_ros.actions import Node

def generate_launch_description():
    return LaunchDescription([
        Node(
            package='ros_gazebo_sim',
            executable='robot_state_publisher',
            name='robot_state_publisher',
            parameters=[{'use_sim_time': True}],
            output='screen'
        ),
        Node(
            package='gazebo_ros',
            executable='spawn_entity.py',
            arguments=['-topic', 'robot_description', '-entity', 'arduino_bot'],
            output='screen'
        ),
        Node(
            package='ros_gazebo_bridge',
            executable='parameter_bridge',
            name='parameter_bridge',
            parameters=[{'remappings': [('clock', '/clock')]}],
            output='screen'
        )
    ])
```

## 요약
- Gazebo 시뮬레이션을 시작하는 데 필요한 launch 파일 생성 및 설정 방법 이해
- robot_state_publisher 노드와 gazebo_resource_path 환경 변수를 사용하여 로봇의 URDF 모델 게시
- gazebo_simulation.launch.py 파일을 포함하여 Gazebo 시뮬레이션 시작
- gazebo spawn entity 노드와 parameter bridge 노드를 사용하여 로봇 모델 게시 및 메시지 변환
