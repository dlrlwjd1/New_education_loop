# Write a Python Node - Minimal Code

## 개요

- Python 노드를 작성하는 기본적인 코드 구조와 실행 방법을 학습합니다.
- 유형: 동영상
- 길이: 16분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305288#overview)

## 내용

- ROS 2의 노드 개념 이해
- VSCode에서 Python 파일 생성 및 열기
- Python 인터프리터 선언과 rclpy 라이브러리 임포트
- main 함수 작성 및 ROS 2 초기화, 종료 코드 추가
- 노드 생성 및 로그 기록 추가
- 노드 실행을 유지하기 위한 spin 메커니즘 이해 및 적용

## 예시

- VSCode에서 'code .' 명령어로 VSCode 열기
- Python 파일에 `#!/usr/bin/env python3` 선언 추가
- rclpy 라이브러리 임포트: `from rclpy.node import Node`

## 요약

- 노드는 Python 파일 내부에서 생성됩니다.
- ROS 2 초기화와 종료 코드는 반드시 포함해야 합니다.
- spin 메커니즘을 사용하여 노드를 지속적으로 실행할 수 있습니다.
