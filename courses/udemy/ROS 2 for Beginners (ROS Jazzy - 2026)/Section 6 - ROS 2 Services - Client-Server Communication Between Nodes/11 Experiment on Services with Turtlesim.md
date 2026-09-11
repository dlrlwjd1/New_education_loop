# Experiment on Services with Turtlesim

## 개요

- Turtlesim 패키지를 사용하여 ROS 2 서비스를 클라이언트와 서버 간에 실험하는 방법을 학습합니다.
- 유형: 동영상
- 길이: 8분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305830#overview)

## 내용

- Turtlesim 노드와 Teleop Turtle 노드를 실행합니다.
- ros2 service list 명령으로 현재 노드의 서비스 목록을 확인합니다.
- clear, kill, reset, spawn, set, teleport 등의 서비스 이름이 동사임을 확인합니다.
- spawn 서비스를 사용하여 새로운 거북이를 화면에 생성합니다.
- kill 서비스를 사용하여 생성한 거북이를 제거합니다.

## 예시

- ros2 service list 명령으로 서비스 목록 확인
- ros2 service call /clear 명령으로 거북이의 추적을 초기화
- ros2 service type spawn 명령으로 새로운 거북이 생성 요청 구조 확인

## 요약

- 서비스 이름은 동사로 사용됩니다.
- spawn 서비스를 사용하여 새로운 거북이를 생성할 수 있습니다.
- kill 서비스를 사용하여 생성한 거북이를 제거할 수 있습니다.
