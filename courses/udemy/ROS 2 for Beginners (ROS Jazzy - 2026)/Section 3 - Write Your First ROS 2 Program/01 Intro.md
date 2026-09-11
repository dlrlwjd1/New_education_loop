# Intro

## 개요

- 이 강의에서는 ROS 2 노드를 작성하고 실행하는 기본적인 과정을 학습합니다.
- 유형: 문서/활동
- 길이: 1분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305256#overview)

## 내용

- ROS 2 노드에 대해 이해합니다.
- 홈 디렉토리에 새로운 ROS 2 워크스페이스를 생성합니다.
- 워크스페이스 내에서 패키지를 만듭니다.
- 패키지 내에 노드를 작성하고 설정합니다.
- 노드를 컴파일합니다.
- 노드를 실행합니다.

## 예시

- ROS 2 워크스페이스의 기본 디렉터리 생성: `mkdir -p ~/ros2_ws/src`
- 패키지 생성 명령: `cd ~/my_ros2_ws/src && ros2 pkg create --build-type ament_python my_package`
- 워크스페이스 안에 Python 또는 C++ 패키지를 만든 뒤 해당 패키지에 노드를 작성한다.

## 요약

- ROS 2 노드를 작성하고 실행하는 기본 과정을 배웁니다.
- 워크스페이스와 패키지를 생성하여 개발 환경을 설정합니다.
- 노드를 작성하고 컴파일하여 실행할 수 있습니다.
