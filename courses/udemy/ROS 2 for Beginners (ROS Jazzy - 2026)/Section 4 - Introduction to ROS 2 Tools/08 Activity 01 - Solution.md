# Activity 01 - Solution

## 개요

- Python·C++ 사용자 노드와 두 Turtlesim 노드를 실행하고 런타임 이름 변경 결과를 `rqt_graph`로 확인한다.
- 유형: 동영상
- 길이: 5분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305560#overview)

## 내용

- 활동의 목표는 새 코드를 작성하는 것이 아니라 기존 패키지에서 네 개의 노드를 올바른 이름으로 실행하는 것이다.
- 먼저 Python과 C++ 패키지에서 앞서 만든 노드를 각각 실행한다.
- 기본 노드 이름이 목표 그래프와 다르면 `--ros-args -r __node:=<new_name>`으로 실행 시점에 변경한다.
- `turtlesim_node`의 이름을 `Donatello`로 바꾸되 그래픽 창의 제목은 그대로일 수 있다.
- `turtle_teleop_key`를 실행하고 방향키로 거북이가 움직이는지 확인한다.
- 마지막으로 `rqt_graph`에서 사용자 노드 두 개와 서로 통신하는 Turtlesim 노드 두 개가 표시되는지 비교한다.

## 예시

```bash
ros2 run my_py_pkg py_node --ros-args -r __node:=custom_py
ros2 run my_cpp_pkg cpp_node --ros-args -r __node:=custom_cpp
ros2 run turtlesim turtlesim_node --ros-args -r __node:=Donatello
ros2 run turtlesim turtle_teleop_key
```

## 요약

- 노드 이름은 코드를 수정하지 않고 ROS 리매핑 인자로 변경할 수 있다.
- 실행 결과는 `ros2 node list`와 `rqt_graph`에서 확인한다.
- Turtlesim 제어 노드와 시뮬레이터 노드 사이의 연결은 다음 토픽 섹션의 출발점이다.
