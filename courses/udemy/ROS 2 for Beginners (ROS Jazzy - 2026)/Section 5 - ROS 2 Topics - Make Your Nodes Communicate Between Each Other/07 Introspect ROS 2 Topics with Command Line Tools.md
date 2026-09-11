# Introspect ROS 2 Topics with Command Line Tools

## 개요

- ROS 2 토픽에 대한 명령행 도구를 사용하여 노드 간 통신을 분석하는 방법을 학습합니다.
- 유형: 동영상
- 길이: 9분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305624#overview)

## 내용

- ros2 topic list 명령어로 현재 활성화된 모든 토픽을 나열합니다.
- ros2 topic info 명령어로 특정 토픽의 정보를 확인하고, 해당 토픽에 대한 발행자와 구독자의 수를 파악합니다.
- ros2 topic echo 명령어로 토픽에서 메시지를 실시간으로 수신할 수 있습니다.
- ros2 interface show 명령어로 특정 인터페이스의 구체적인 구조를 확인합니다.
- ros2 topic hz 명령어로 토픽에 대한 메시지 발행 주파수를 측정합니다.
- ROS 2 topic bw 명령어로 토픽을 통해 전송되는 데이터의 대역폭을 측정합니다.

## 예시

- ros2 topic list: robot_news
- ros2 topic info /robot_news: type=example_interfaces/msg/String, publisher_count=1, subscriber_count=0
- ros2 topic echo /robot_news: 메시지 출력 확인

## 요약

- ROS 2 토픽에 대한 명령행 도구를 사용하여 노드 간 통신을 분석할 수 있습니다.
- ros2 topic list, info, echo, interface show, hz, bw 등 다양한 명령어를 활용하여 토픽 정보 확인이 가능합니다.
- 실제 토픽에 메시지를 발행하거나 구독하는 방법도 배울 수 있습니다.
