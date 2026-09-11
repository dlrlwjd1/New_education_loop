# Project Solution [1/6]

## 개요

- `turtle_controller` 노드가 `/turtle1/pose`를 읽고 `/turtle1/cmd_vel`을 발행해 거북이를 지정한 좌표로 이동시킨다.
- 유형: 동영상
- 길이: 32분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21306704#overview)
- 첨부 자료: final_project_step1.zip

## 내용

- 먼저 Turtlesim을 실행하고 `ros2 topic list`, `ros2 topic info`, `ros2 interface show`로 제어에 필요한 두 토픽과 메시지 타입을 조사한다.
- `/turtle1/pose`는 현재 위치와 방향을 제공하며, `/turtle1/cmd_vel`은 선속도와 각속도 명령을 받는다.
- 새 Python 패키지 `turtlesim_catch_them_all`을 만들고 `rclpy`, `turtlesim`, `geometry_msgs` 의존성을 추가한다.
- `turtle_controller`는 `turtlesim/msg/Pose`를 구독하고 `geometry_msgs/msg/Twist`를 발행한다.
- 타이머 기반 제어 루프에서 현재 위치와 목표 위치 사이의 거리와 각도를 계산한다.
- 목표까지 멀리 있으면 선속도와 각속도를 발행하고, 허용 거리 안에 들어오면 속도를 0으로 설정한다.
- 목표점을 정확히 한 좌표와 일치시키려 하면 계속 보정할 수 있으므로 작은 도달 허용 오차를 둔다.

## 예시

```bash
ros2 run turtlesim turtlesim_node
ros2 topic info /turtle1/pose
ros2 topic info /turtle1/cmd_vel
ros2 interface show turtlesim/msg/Pose
ros2 interface show geometry_msgs/msg/Twist
```

- 목표 방향은 현재 위치에서 목표 좌표로 향하는 각도를 계산하고, 현재 자세의 `theta`와 비교해 각속도를 정하는 방식으로 제어한다.

## 요약

- 제어 노드는 자세 토픽을 입력으로 받고 속도 명령 토픽을 출력으로 사용한다.
- 위치 오차와 방향 오차를 반복 계산하는 간단한 비례 제어(P controller)로 목표점에 접근한다.
- 이 단계에서 만든 컨트롤러가 이후 생성되는 여러 거북이를 잡는 기능의 기반이 된다.
