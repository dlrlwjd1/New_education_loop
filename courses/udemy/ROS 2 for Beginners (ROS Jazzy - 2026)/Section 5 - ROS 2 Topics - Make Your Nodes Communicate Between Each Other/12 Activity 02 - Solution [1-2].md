# Activity 02 - Solution [1/2]

## 개요

- ROS 2 토픽을 사용하여 노드 간 통신을 구현하는 방법에 대한 실습 문제의 해결 방안을 설명합니다.
- 유형: 동영상
- 길이: 11분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305652#overview)

## 내용

- Python 언어로 ROS 2 토픽을 사용한 데이터 파이프라인 생성
- 노드 생성 및 실행 권한 설정
- ROS 2 노드 클래스 정의와 초기화
- 메시지 타입과 토픽 설정
- 메시지 발행 함수 구현
- 타이머를 사용하여 메시지 주기적으로 발행

## 예시

- chmod +x number_publisher.py
- from example_interfaces.msg import Int64
- self.number_publisher = self.create_publisher(Int64, 'number_topic', 10)

## 요약

- ROS 2 토픽을 사용하여 노드 간 통신을 구현할 수 있습니다.
- 메시지 타입과 토픽 설정은 필수적입니다.
- 타이머를 사용하여 메시지를 주기적으로 발행할 수 있습니다.
