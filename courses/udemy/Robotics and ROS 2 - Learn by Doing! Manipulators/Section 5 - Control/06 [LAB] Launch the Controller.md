# [LAB] Launch the Controller

## 개요
- 새로운 launch 파일을 생성하여 로봇 제어 시스템을 시작합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/37535546#overview)

## 내용
### 1. launch 파일 생성
Visual Studio Code에서 Arduino 보드 컨트롤러에 `launch` 폴더를 생성합니다.

### 2. controller.launch.py 파일 작성
- `launch_description_object`를 사용하여 launch 파일을 구성합니다.
- Robot State Publisher 노드를 시작하여 URDF 모델 정보를 발행합니다.
- Controller Manager 노드를 시작하여 로봇 하드웨어와 다른 두 애플리케이션과 상호작용합니다.
- 각 제어기(ARM 컨트롤러, 그립퍼 컨트롤러, 조인트 상태 브로드캐스터)를 시작하는 노드를 생성합니다.

### 3. URDF 모델 경로 설정
- `os`와 `launch_ros` 라이브러리를 사용하여 URDF 모델의 경로를 설정합니다.
- `parameter_value` 클래스를 사용하여 URDF 모델 경로를 파라미터로 전달합니다.

### 4. Controller Manager 및 제어기 시작
- Controller Manager 노드를 시작하여 모든 제어기를 관리하고 지시합니다.
- 각 제어기(ARM 컨트롤러, 그립퍼 컨트롤러, 조인트 상태 브로드캐스터)를 시작하는 노드를 생성합니다.

## 예시
```python
from launch import LaunchDescription
from launch_ros.actions import Node

def generate_launch_description():
    return LaunchDescription([
        Node(
            package='robot_state_publisher',
            executable='robot_state_publisher',
            name='robot_state_publisher',
            parameters=[{'robot_description': 'urdf_model'}]
        ),
        Node(
            package='controller_manager',
            executable='ros2_control_node',
            name='controller_manager',
            output='screen',
            parameters=[{'robot_description': 'urdf_model'}],
            remappings=[('joint_states', '/joint_states')]
        ),
        Node(
            package='controller_manager',
            executable='spawner',
            name='joint_state_broadcaster_spawner',
            arguments=['joint_state_broadcaster', '--controller-manager', '/controller_manager']
        ),
        Node(
            package='controller_manager',
            executable='spawner',
            name='arm_controller_spawner',
            arguments=['arm_controller', '--controller-manager', '/controller_manager']
        ),
        Node(
            package='controller_manager',
            executable='spawner',
            name='gripper_controller_spawner',
            arguments=['gripper_controller', '--controller-manager', '/controller_manager']
        )
    ])
```

## 요약
- 새로운 launch 파일을 생성하여 로봇 제어 시스템을 시작합니다.
- Robot State Publisher 노드와 Controller Manager 노드를 시작합니다.
- 각 제어기(ARM 컨트롤러, 그립퍼 컨트롤러, 조인트 상태 브로드캐스터)를 시작하는 노드를 생성합니다.
