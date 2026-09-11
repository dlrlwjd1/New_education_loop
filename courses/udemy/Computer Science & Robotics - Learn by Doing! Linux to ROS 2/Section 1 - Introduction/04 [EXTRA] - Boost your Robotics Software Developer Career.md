# [EXTRA] - Boost your Robotics Software Developer Career

## 개요
- 코스 초반에 제공되는 로봇 소프트웨어 개발 진로 확장 안내 자료다.
- 이 읽기 자료는 현재 코스 이후 선택할 수 있는 네 가지 ROS 2·로봇공학 후속 학습 경로를 소개한다.
- 자율주행 로봇의 오도메트리·제어, 지도·위치 추정, 계획·내비게이션과 로봇 팔 매니퓰레이터 과정으로 구분된다.
- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/54184791#overview)

## 내용
### Odometry & Control
실제 로봇 또는 시뮬레이션을 만들면서 다음 주제를 학습하는 과정이다.

- 센서 융합(sensor fusion), 칼만 필터(Kalman filter), 확률 이론
- 미분 기구학, 오도메트리, 로봇 위치 추정
- `ros_control`, TF2, Gazebo 시뮬레이션과 조이스틱 제어

### Map & Localization
2D LiDAR를 이용해 환경 지도를 만들고 로봇의 위치를 추정하는 방법을 다룬다.

- 지도 표현, 매핑(mapping), SLAM
- 로봇 위치 추정과 LiDAR 센서 사용
- 장애물 회피와 속도·분리 모니터링

### Plan & Navigation
비용 지도(costmap)를 이용해 장애물을 피하며 자율 이동하는 로봇의 계획 방법을 다룬다.

- 경로 계획과 운동 계획
- 의사결정과 행동 트리
- 장애물 회피, costmap, Nav2

### Manipulators
실제 또는 시뮬레이션 로봇 팔을 만들고 Amazon Alexa 음성 제어와 연결하는 프로젝트다.

- Gazebo, URDF·XACRO, `ros2_control`
- TF2, 로봇 팔 기구학, MoveIt 2
- Alexa Skill 개발

## 예시
- 이동 로봇의 위치 추정과 제어가 목표라면 Odometry & Control 경로를 선택한다.
- LiDAR 기반 지도 생성이 목표라면 Map & Localization 경로를 선택한다.
- 자율 이동 또는 로봇 팔 개발이 목표라면 각각 Plan & Navigation 또는 Manipulators 경로를 선택한다.

## 요약
- 후속 과정은 오도메트리·제어, 지도·위치 추정, 계획·내비게이션, 매니퓰레이터의 네 영역으로 구성된다.
- 각 과정은 실제 로봇 또는 시뮬레이션을 만들며 ROS 2 도구를 적용하는 방식이다.
- 개발하려는 로봇 기능에 맞춰 다음 학습 경로를 선택한다.
