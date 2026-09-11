# More about the ROS 2 Client Libraries for Different Languages

## 개요

- ROS 2의 클라이언트 라이브러리에 대해 더 깊게 이해합니다.
- 유형: 동영상
- 길이: 2분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305318#overview)

## 내용

- RCL(Ros Client Library)는 ROS 2의 기본 클라이언트 라이브러리로, 모든 언어에서 사용됩니다.
- C++에서는 rclcpp, Python에서는 rclpy라는 클라이언트 라이브러리를 사용합니다.
- `rclpy`와 `rclcpp`는 공통 ROS 클라이언트 라이브러리 계층 위에서 같은 핵심 ROS 2 기능을 각 언어에 제공합니다.
- RCL TCP는 C++에서 RCL과의 바인딩을 제공하는 클라이언트 라이브러리입니다.
- C++와 Python 모두 같은 기본 라이브러리를 사용하므로 기능은 동일합니다.
- ROS 2는 C++, Python, Node.js, Java 등 다양한 언어를 지원하며, 오픈 소스 커뮤니티에서 대부분의 클라이언트 라이브러리가 지원됩니다.

## 예시

- rclcpp와 rclpy를 사용하여 C++와 Python에서 ROS 2 노드를 작성합니다.
- Python에서는 `rclpy`, C++에서는 `rclcpp`를 사용해 노드와 통신 기능을 작성합니다.
- RCL TCP를 사용하여 C++에서 RCL과의 통신을 구현합니다.

## 요약

- ROS 2의 클라이언트 라이브러리는 언어에 따라 다르지만, 기본 기능은 동일합니다.
- 다른 언어용 클라이언트 라이브러리도 있지만 이 강좌는 공식적으로 널리 사용하는 `rclpy`와 `rclcpp`에 집중합니다.
- RCL TCP는 C++에서 RCL과의 통신을 위한 클라이언트 라이브러리입니다.
