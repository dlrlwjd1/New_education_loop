# Activity 05 - Solution [2/2]

## 개요

- ROS 2 노드의 설정을 런타임에 변경하는 방법을 파악하고, LED 패널 노드를 예로 사용하여 파라미터를 동적으로 설정하는 과정을 실습한다.
- 유형: 동영상
- 길이: 8분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21306408#overview)

## 내용

- LED 패널 노드에서 기본 상태를 세 개의 LED가 꺼져있는 것으로 설정한다.
- 노드 시작 시 다른 구성으로 LED 배열을 제공할 수 있도록 파라미터를 추가한다.
- 파라미터의 기본값을 리스트로 설정하고, LED 상태 파라미터를 노드에서 가져와 사용한다.
- 노드가 올바르게 동작하는지 확인하여 파라미터 설정이 제대로 적용되었는지 확인한다.
- Simulink를 사용하여 LED 패널 노드를 실행하고, ROS 2 param list 명령을 통해 파라미터를 확인한다.
- ROS 2 param get LED panel led states 명령을 통해 초기 상태를 확인하고, 다른 구성으로 변경하는 방법을 설명한다.

## 예시

- ROS 2 param list: LED 패널 노드의 파라미터 목록 확인
- ROS 2 param get LED panel led states: LED 패널 노드의 초기 상태 확인
- Ros args -p led_states [0, 0, 0, 1]: LED 패널 노드에 다른 구성 제공

## 요약

- ROS 2 파라미터를 사용하여 노드 설정을 런타임에 변경할 수 있다.
- 파라미터의 기본값을 리스트로 설정하고, 노드에서 가져와 사용한다.
- Simulink를 사용하여 노드를 실행하고 파라미터를 확인할 수 있다.
