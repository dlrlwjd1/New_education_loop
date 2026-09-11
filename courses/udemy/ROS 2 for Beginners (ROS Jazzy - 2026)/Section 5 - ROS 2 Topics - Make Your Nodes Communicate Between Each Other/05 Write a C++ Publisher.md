# Write a C++ Publisher

## 개요

- C++에서 ROS 2 퍼블리셔를 작성하여 Python과의 비교를 통해 두 언어 간의 동일한 기능 코드를 이해합니다.
- 유형: 동영상
- 길이: 18분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305616#overview)

## 내용

- C++ 패키지로 이동하여 Robot News Station 노드를 생성합니다.
- C++ 템플릿 코드를 복사하고 필요한 부분을 수정합니다.
- rclcpp 라이브러리를 포함하여 퍼블리셔를 설정합니다.
- C++에서 퍼블리셔를 생성하고 메시지를 발행하는 방법을 설명합니다.
- 타이머를 사용하여 메시지를 두 번에 한 번씩 발행하도록 설정합니다.
- 노드가 시작될 때 로그를 남기는 코드를 추가합니다.

## 예시

- Robot News Station.cpp 파일 생성
- rclcpp::Node 클래스를 상속받는 RobotNewsStation 클래스 작성
- std::shared_ptr<rclcpp::Publisher<std_msgs::msg::String>> publisher 선언 및 초기화

## 요약

- C++에서 ROS 2 퍼블리셔를 작성할 수 있습니다.
- Python과 C++의 코드 비교를 통해 동일한 기능을 이해할 수 있습니다.
- 타이머를 사용하여 주기적인 메시지 발행을 구현할 수 있습니다.
