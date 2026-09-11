# Rename a Node at Runtime

## 개요

- ROS 2에서 노드의 이름을 런타임에 변경하는 방법을 배웁니다.
- 유형: 동영상
- 길이: 4분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305538#overview)

## 내용

- 노드의 이름이 중복되면 오류가 발생할 수 있습니다.
- ros2 run 명령어를 사용하여 노드의 이름을 런타임에 변경할 수 있습니다.
- ros2 run과 함께 --ros-args 옵션을 사용하여 인자를 전달합니다.
- --remap 또는 -R 옵션을 사용하여 노드의 이름을 변경합니다.
- 예를 들어, 여러 개의 온도 센서 노드를 런타임에 동적으로 시작할 수 있습니다.
- 노드의 이름이 중복되지 않도록 주의해야 합니다.

## 예시

- ros2 run my_package my_executable --ros-args -r __node:=ABC
- ros2 node list 명령어를 사용하여 노드 목록을 확인합니다.
- 노드의 이름이 중복되지 않도록 주의해야 합니다.

## 요약

- ros2 run과 함께 --ros-args 옵션을 사용하여 런타임에 노드의 이름을 변경할 수 있습니다.
- 노드의 이름이 중복되면 오류가 발생하므로 주의해야 합니다.
- 예를 들어, 여러 개의 온도 센서 노드를 동적으로 시작할 수 있습니다.
