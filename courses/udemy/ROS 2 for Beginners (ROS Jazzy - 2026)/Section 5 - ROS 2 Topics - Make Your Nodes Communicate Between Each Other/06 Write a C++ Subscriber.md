# Write a C++ Subscriber

## 개요

- C++ 구독자를 작성하여 ROS 2 노드 간 통신을 구현하는 방법을 학습합니다.
- 유형: 동영상
- 길이: 13분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305618#overview)

## 내용

- C++ 구독자 노드를 생성하고, 템플릿 코드를 복사하여 시작합니다.
- 구독자를 위한 인터페이스를 포함하고, 메시지 콜백 함수를 정의합니다.
- 메시지 콜백 함수에서 메시지를 수신하고 로그로 출력합니다.
- 노드 생성자에서 구독자를 초기화하고, 메시지 콜백 함수와 연결합니다.
- CMakeLists.txt에 새로운 실행 파일을 추가하여 프로그램을 컴파일합니다.
- 실행 파일을 빌드하고, 노드를 시작하여 통신 테스트를 진행합니다.

## 예시

- smartphone.cpp 파일 생성
- 메시지 콜백 함수 정의: `void callback_robot_news(const example_interfaces::msg::String::SharedPtr msg)`
- 구독자 초기화: `subscriber = this->create_subscription<example_interfaces::msg::String>(

## 요약

- C++ 구독자를 사용하여 ROS 2 노드 간 통신을 구현할 수 있습니다.
- 메시지 콜백 함수를 통해 메시지를 처리하고 로그로 출력할 수 있습니다.
- 노드 생성자에서 구독자를 초기화하여 메시지 수신이 가능합니다.
