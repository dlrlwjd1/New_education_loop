# Intro

## 개요

- 이 강의에서는 ROS 2 도구를 사용하여 노드를 실행하고 분석하는 방법을 배웁니다.
- 유형: 문서/활동
- 길이: 1분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305526#overview)

## 내용

- ROS 2 노드를 ros2 run 명령어로 실행합니다.
- 노드 이름을 변경할 수 있는 옵션을 추가합니다.
- ros2 cli를 사용하여 노드를 분석합니다.
- rqt_graph를 사용하여 애플리케이션의 전체 그래프를 시각화합니다.
- Turtlesim 2D 시뮬레이션을 탐험합니다.

## 예시

- ros2 run package_name node_name
- ros2 run turtlesim turtlesim_node --ros-args -r __name:=my_turtle
- ros2 node list, ros2 topic list 등을 사용하여 노드와 토픽을 분석합니다.

## 요약

- ROS 2 도구를 활용하여 노드의 실행과 분석이 가능하다는 것을 알았습니다.
- 노드 이름 변경 옵션을 통해 노드 관리가 더 유연해졌습니다.
- rqt_graph를 사용하여 시스템의 전체 구조를 쉽게 파악할 수 있습니다.
