# What are ROS 2 Interfaces?

## 개요

- ROS 2 인터페이스(메시지와 서비스)의 개념과 사용 방법에 대해 이해하고, 기본적인 메시지와 서비스를 생성하는 방법을 실습한다.
- 유형: 동영상
- 길이: 10분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21306050#overview)

## 내용

- ROS 2에서 인터페이스는 주제(Topic)와 서비스(Service) 간의 통신을 위한 데이터 타입을 정의한다.
- 메시지는 주제에 발행되는 데이터 구조를, 서비스는 요청과 응답 메시지를 포함하는 구조를 가진다.
- ROS 2에서 사용 가능한 기본 데이터 타입(예: bool, int64, float64, string 등)을 소개한다.
- 메시지와 서비스 인터페이스를 생성할 때 사용할 수 있는 기존 패키지를 GitHub에서 찾아볼 수 있다.
- 기본 데이터 타입과 메시지/서비스 인터페이스를 사용하여 간단한 메시지와 서비스를 작성하는 방법을 설명한다.
- C++와 Python에서 메시지와 서비스 인터페이스를 포함하는 코드를 작성하는 방법을 보여준다.

## 예시

- int64.msg 파일의 예시: int64 data
- sensor_msgs/msg/JointState.msg의 예시: std_msgs/Header header; string[] name; float64[] position; float64[] velocity; float64[] effort;
- geometry_msgs/msg/Twist.msg의 예시: geometry_msgs/Vector3 linear; geometry_msgs/Vector3 angular;

## 요약

- ROS 2 인터페이스는 주제와 서비스 간의 통신을 위한 데이터 타입을 정의한다.
- 기본 데이터 타입과 메시지/서비스 인터페이스를 사용하여 간단한 메시지와 서비스를 작성할 수 있다.
- C++와 Python에서 메시지와 서비스 인터페이스를 포함하는 코드를 작성할 수 있다.
