# [LAB] Visualize the Robot with Launch Files

## 개요
- ROS 2의 Launch 파일을 사용하여 로봇을 시각화하는 방법을 배웁니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/36847134#overview)

## 내용
### Launch 파일 생성 및 구성
1. **Visual Studio Code 열기**
   - Arduino 보드 설명 폴더로 이동합니다.
   - 여기서 "Launch"라는 새 폴더를 만듭니다.
2. **display.launch.py 파일 생성**
   - Launch 파일은 Python 파일이며, 실행할 명령어의 목록을 정의할 수 있습니다.
3. **launch description 클래스 임포트**
   - launch library에서 launch description 클래스를 임포트합니다.
4. **generate_launch_description 함수 정의**
   - 이 함수는 launch 파일이 실행될 때 호출됩니다.
5. **노드 생성**
   - Robot State Publisher 노드를 생성하여 로봇의 RDF 모델을 읽고 Ros2 토픽에 게시합니다.
6. **파라미터 설정**
   - 로봇의 URDF 모델 위치를 파라미터로 설정합니다.
7. **launch argument 클래스 임포트**
   - launch library에서 launch argument 클래스를 임포트하여 새로운 인자를 선언합니다.
8. **RVs 패키지 경로 설정**
   - RVs 패키지의 절대 경로를 파라미터에 할당합니다.
9. **command 클래스 임포트**
   - launch substitutions에서 command 클래스를 임포트하여 명령어 실행을 포함합니다.
10. **RVs 구성 파일 로드**
    - RVs 패키지의 Arv's 노드를 시작하고, 해당 노드의 출력을 터미널에 표시합니다.

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
            parameters=[{'robot_description': 'path/to/robot.urdf'}]
        ),
        Node(
            package='joint_state_publisher_gui',
            executable='joint_state_publisher_gui',
            name='joint_state_publisher'
        ),
        Node(
            package='rviz2',
            executable='rviz2',
            name='rviz2',
            arguments=['-d', 'path/to/rviz/config.rviz']
        )
    ])
```

## 요약
- Launch 파일을 사용하여 로봇의 URDF 모델을 시각화합니다.
- Robot State Publisher, Joint State Publisher, RVs 노드를 시작합니다.
- launch argument와 command 클래스를 사용하여 파라미터 설정과 명령어 실행을 포함합니다.
