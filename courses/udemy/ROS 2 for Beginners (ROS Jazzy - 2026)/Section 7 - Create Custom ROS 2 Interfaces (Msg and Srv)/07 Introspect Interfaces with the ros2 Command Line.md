# Introspect Interfaces with the ros2 Command Line

## 개요

- ROS 2의 인터페이스를 탐색하는 데 사용되는 ros2 명령어를 학습합니다.
- 유형: 동영상
- 길이: 5분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21306090#overview)

## 내용

- ros2 interface show 명령어를 사용하여 특정 메시지 또는 서비스 인터페이스를 보여줍니다.
- ros2 interface list 명령어를 사용하여 현재 환경에 설치된 모든 인터페이스 목록을 보여줍니다.
- 특정 패키지의 인터페이스를 보여주기 위해 ros2 interface show <패키지명> 명령어를 사용합니다.
- ros2 node info 명령어를 사용하여 실행 중인 노드의 정보를 확인하고 해당 노드가 발행하는 토픽과 서비스를 확인할 수 있습니다.
- ros2 topic list와 ros2 topic info 명령어를 사용하여 특정 토픽에 대한 정보를 확인할 수 있습니다.
- ros2 service list와 ros2 service type 명령어를 사용하여 실행 중인 서비스의 정보를 확인할 수 있습니다.

## 예시

- ros2 interface show example_interfaces/msg/Int64
- ros2 interface list
- ros2 interface show my_robot_interfaces/srv/SV_ComputeRectangleArea

## 요약

- ros2 명령어를 사용하여 ROS 2 인터페이스를 탐색할 수 있습니다.
- 메시지와 서비스 인터페이스의 구조를 이해하고, 해당 정보를 활용하여 노드, 토픽, 서비스를 관리할 수 있습니다.
- ros2 명령어를 통해 현재 환경에 설치된 모든 인터페이스를 확인할 수 있습니다.
