# Activity 02 - ROS 2 Topics

## 개요

- ROS 2 토픽을 사용하여 노드 간 통신을 구현하는 활동을 수행합니다.
- 유형: 문서/활동
- 길이: 1분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305650#overview)

## 내용

- 두 개의 노드를 생성합니다: number_publisher와 number_counter.
- number_publisher는 'example_interfaces/msg/Int64' 타입으로 '/number' 토픽에 정수를 발행합니다.
- number_counter는 '/number' 토픽을 구독하고, 받은 숫자를 카운터에 더하여 '/number_count' 토픽에 발행합니다.
- number_counter의 콜백 함수에서 직접 메시지를 발행하도록 합니다.
- 각 노드를 생성한 후 'ros2 topic echo' 명령을 사용하여 발행된 메시지를 확인합니다.

## 예시

- ros2 interface show example_interfaces/msg/Int64
- number_publisher 노드의 코드 구조 예시
- number_counter 노드의 코드 구조 예시

## 요약

- ROS 2 토픽을 사용하여 노드 간 통신을 구현할 수 있습니다.
- 노드를 생성하고, 각각의 역할을 정확히 이해하는 것이 중요합니다.
- 콜백 함수에서 직접 메시지를 발행하는 방법을 배웁니다.
