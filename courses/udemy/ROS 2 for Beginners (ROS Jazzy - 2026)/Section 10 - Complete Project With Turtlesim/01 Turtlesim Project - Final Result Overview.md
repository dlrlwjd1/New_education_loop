# Turtlesim Project - Final Result Overview

## 개요

- Turtlesim 프로젝트의 최종 결과를 보여주고, 전체 애플리케이션을 발행하는 런치 파일을 실행합니다.
- 유형: 동영상
- 길이: 1분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21306696#overview)

## 내용

- Turtlesim 프로젝트의 최종 결과를 확인합니다.
- 전체 SIM 창이 열립니다.
- 세 개의 노드가 생성됩니다: 전체 SIM 창, 메인 거북이 제어 노드, 새로운 거북이 생성 및 제거 노드입니다.
- 메인 거북이는 화면에 나타나는 모든 새 거북이를 잡아냅니다.
- 거북이가 잡히면 사라지고 메인 거북이는 다음 거북이로 이동합니다.
- 프로젝트에서 본 모든 내용을 연습할 수 있습니다.

## 예시

- launch 파일 실행: `ros2 launch turtlesim turtlesim.launch.py`
- 노드 확인: `ros2 node list`
- 메인 거북이 제어 노드 확인: `ros2 topic echo /turtle1/cmd_vel`

## 요약

- Turtlesim 프로젝트를 완료하여 ROS 2의 모든 개념을 연습합니다.
- 런치 파일을 사용하여 전체 애플리케이션을 발행합니다.
- 메인 거북이가 새로운 거북이를 잡아내는 동작을 관찰합니다.
