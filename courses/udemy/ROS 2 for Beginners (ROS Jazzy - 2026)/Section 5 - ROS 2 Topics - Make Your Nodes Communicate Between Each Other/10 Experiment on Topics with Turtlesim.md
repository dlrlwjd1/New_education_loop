# Experiment on Topics with Turtlesim

## 개요

- Turtlesim에서 주제를 사용하여 노드 간 통신을 실험하는 방법을 배웁니다.
- 유형: 동영상
- 길이: 8분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305644#overview)

## 내용

- ROS 2의 Turtlesim 패키지를 사용하여 주제를 통해 노드 간 통신을 시험합니다.
- Teleop 키로 Turtlesim에서 로봇을 제어하고, 해당 노드가 다른 노드와 어떻게 통신하는지 확인합니다.
- ros2 node list 및 ros2 node info 명령을 사용하여 노드와 주제의 정보를 확인합니다.
- ros2 topic list 및 ros2 topic info 명령을 사용하여 특정 주제에 대한 발행자와 구독자를 확인합니다.
- ros2 interface show 명령을 사용하여 메시지 인터페이스의 구조를 파악합니다.
- ros2 topic pub 명령을 사용하여 직접 터미널에서 메시지를 발행하고, 해당 메시지가 구독자 노드로 전달되는지 확인합니다.

## 예시

```bash
ros2 node list
ros2 node info /turtlesim
ros2 topic list
ros2 topic info /turtle1/cmd_vel
ros2 interface show geometry_msgs/msg/Twist
```

## 요약

- Turtlesim에서 주제를 사용하여 노드 간 통신을 실험했습니다.
- Teleop 키로 로봇을 제어하고, 해당 노드가 다른 노드와 어떻게 통신하는지 확인했습니다.
- ROS 2 명령을 사용하여 노드와 주제의 정보를 파악했습니다.
