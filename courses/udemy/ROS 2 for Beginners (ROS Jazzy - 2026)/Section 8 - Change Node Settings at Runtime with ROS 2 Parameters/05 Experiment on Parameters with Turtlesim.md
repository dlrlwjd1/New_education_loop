# Experiment on Parameters with Turtlesim

## 개요

- Turtlesim 노드의 파라미터를 실시간으로 변경하는 방법을 실험하고, ROS 2 파라미터 관련 명령어와 도구를 익히는 데 초점을 맞춥니다.
- 유형: 동영상
- 길이: 8분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21306394#overview)

## 내용

- Turtlesim 노드를 실행하여 파라미터 조작을 연습합니다.
- ROS 2 param list 명령어로 모든 노드의 파라미터 목록을 확인합니다.
- 노드별 파라미터 이름과 타입을 확인하고, 예를 들어 배경색 파라미터를 변경합니다.
- ROS 2 param get 명령어로 특정 파라미터의 값을 가져옵니다.
- Ros args와 -p 옵션을 사용하여 노드 시작 시 파라미터 값을 동적으로 변경합니다.
- ros2 service list 명령어로 서비스 목록을 확인하고, 예를 들어 list_parameters 서비스를 호출하여 파라미터 목록을 가져옵니다.

## 예시

- ROS 2 param list
- ROS 2 param get /turtlesim background_b
- Ros args -p background_b:=0 -p background_r:=200

## 요약

- 파라미터를 실시간으로 변경할 수 있습니다.
- 노드의 파라미터 목록을 확인하고, 특정 파라미터 값을 가져올 수 있습니다.
- Ros args와 ros2 service list를 사용하여 파라미터를 동적으로 관리할 수 있습니다.
