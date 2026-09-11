# Write a C++ Node - Minimal Code

## 개요

- C++ 노드를 작성하는 기본적인 프로세스를 학습합니다.
- 유형: 동영상
- 길이: 16분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305298#overview)

## 내용

- ROS 2의 C++ 노드를 생성하는 방법을 이해합니다.
- main 함수를 작성하고 ROS 2와의 통신을 초기화합니다.
- 노드를 생성하고 로그 메시지를 출력합니다.
- CMakeLists.txt 파일을 수정하여 실행 가능한 파일을 생성합니다.
- build 및 install 과정을 수행하여 노드를 컴파일하고 설치합니다.
- ROS 2에서 노드를 실행하고 테스트합니다.

## 예시

- touch my_first_node.cpp
- `#include "rclcpp/rclcpp.hpp"`
- auto node = std::make_shared<rclcpp::Node>("cp_test");

## 요약

- C++ 노드를 작성하는 기본적인 프로세스를 이해했습니다.
- ROS 2와의 통신을 초기화하고, 노드를 생성하며 로그 메시지를 출력할 수 있습니다.
- CMakeLists.txt 파일을 수정하여 실행 가능한 파일을 생성하고, build 및 install 과정을 수행하였습니다.
