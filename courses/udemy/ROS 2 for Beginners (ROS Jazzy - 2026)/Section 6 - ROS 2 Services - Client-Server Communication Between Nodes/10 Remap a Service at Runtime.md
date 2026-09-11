# Remap a Service at Runtime

## 개요

- ROS 2에서 서비스 이름을 런타임에 변경하는 방법을 배웁니다.
- 유형: 동영상
- 길이: 3분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305826#overview)

## 내용

- 노드, 토픽, 서비스 모두 이름을 변경할 수 있습니다.
- 서비스를 시작할 때 이름을 변경할 수 있습니다.
- ros2 service list 명령으로 현재 서비스 목록 확인합니다.
- ros2 run 명령에 ROS 인자(`--ros-args`)를 사용하여 서비스 이름 변경합니다.
- -r 옵션과 함께 새로운 서비스 이름을 지정합니다.
- 서비스 이름이 변경되면 클라이언트도 동일하게 변경해야 합니다.

## 예시

- ros2 service list
- ros2 run my_package add_to_int_server --ros-args -r add_to_int:=ABC
- ros2 run my_package add_to_int_client

## 요약

- 서비스 이름을 런타임에 변경할 때는 클라이언트도 동일하게 변경해야 합니다.
- ROS 인자(`--ros-args`)를 사용하여 서비스 이름을 변경할 수 있습니다.
- 서비스 이름이 변경되면 기존의 서비스는 더 이상 존재하지 않습니다.
