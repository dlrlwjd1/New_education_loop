# Some Tips to Get Started

## 개요

- Turtlesim 프로젝트를 완성하기 위한 몇 가지 팁과 단계를 제공합니다.
- 유형: 문서/활동
- 길이: 3분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21306702#overview)
- 첨부 자료: ROS 2 for Beginners - Final Course Project.pdf

## 내용

- 3개의 노드를 사용할 것입니다: turtlesim_node, turtle_controller, turtle_spawner.
- turtle_controller는 주어진 목표 지점으로 터틀을 제어하는 역할을 합니다.
- turtle_spawner는 새로운 터틀을 생성하고 화면에 표시되는 터틀을 관리합니다.
- turtle_spawner는 /spawn 서비스를 호출하여 새 터틀을 생성하고, /kill 서비스를 호출하여 터틀을 제거합니다.
- turtle_controller는 turtle1의 위치를 구독하고, 목표 지점으로 이동하는 제어 루프를 실행합니다.
- turtle_spawner는 현재 살아있는 터틀의 이름과 좌표를 /alive_turtles 주제에 게시합니다.

## 예시

- turtle_controller 노드에서 /turtle1/pose를 구독하고, /turtle1/cmd_vel로 명령을 보냅니다.
- turtle_spawner 노드에서 /spawn 서비스를 호출하여 새 터틀을 생성합니다.
- turtle_spawner는 현재 살아있는 터틀의 목록을 /alive_turtles 주제에 게시합니다.

## 요약

- 터틀 제어와 관리용 노드를 개발합니다.
- P 컨트롤러를 사용하여 터틀을 이동하는 제어 루프를 구현합니다.
- /alive_turtles 주제를 통해 현재 살아있는 터틀의 정보를 얻습니다.
