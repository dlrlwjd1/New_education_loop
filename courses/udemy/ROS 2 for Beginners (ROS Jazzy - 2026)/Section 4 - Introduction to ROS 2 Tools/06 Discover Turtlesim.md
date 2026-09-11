# Discover Turtlesim

## 개요

- Turtlesim의 시뮬레이터와 키보드 제어 노드를 실행하고 ROS 2 그래프에서 두 노드의 연결을 관찰한다.
- 유형: 동영상
- 길이: 5분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305550#overview)

## 내용

- `turtlesim`은 간단한 2D 거북이 로봇을 제공하는 기존 ROS 2 패키지다.
- `turtlesim_node`를 실행하면 거북이가 표시되는 그래픽 창과 `/turtlesim` 노드가 시작된다.
- 별도 터미널에서 `turtle_teleop_key`를 실행하면 방향키 입력으로 거북이를 움직일 수 있다.
- `rqt_graph`에서는 키보드 노드가 `/turtle1/cmd_vel` 토픽을 통해 시뮬레이터 노드에 속도 명령을 보내는 모습을 볼 수 있다.
- `--ros-args -r __node:=...` 리매핑 인자를 사용해 실행 시점에 노드 이름을 바꾸고 그래프 변화를 확인한다.
- 이 실습은 다음 섹션에서 토픽을 본격적으로 배우기 위한 사전 관찰이다.

## 예시

```bash
ros2 run turtlesim turtlesim_node
ros2 run turtlesim turtle_teleop_key
ros2 run turtlesim turtlesim_node --ros-args -r __node:=my_turtle
```

- 패키지가 없다면 Jazzy 환경에서 `sudo apt install ros-jazzy-turtlesim`으로 설치할 수 있다.

## 요약

- 서로 독립된 두 노드는 토픽을 통해 키보드 입력과 속도 명령을 전달한다.
- Turtlesim은 노드, 토픽, 서비스, 파라미터를 눈으로 확인하며 연습할 수 있는 시뮬레이션 도구다.
- 노드 이름을 리매핑하면 `rqt_graph`에도 변경된 이름이 반영된다.
