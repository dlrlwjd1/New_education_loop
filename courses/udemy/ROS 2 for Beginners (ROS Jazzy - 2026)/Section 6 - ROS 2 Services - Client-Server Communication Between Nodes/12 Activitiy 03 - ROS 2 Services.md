# Activitiy 03 - ROS 2 Services

## 개요

- ROS 2 서비스를 사용하여 노드 간 클라이언트/서버 통신을 연습합니다.
- 유형: 문서/활동
- 길이: 1분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305842#overview)

## 내용

- 이전 섹션에서 학습한 토픽 활동에서 시작합니다.
- 노드 'number_publisher'가 '/number' 주제에 숫자를 발행합니다.
- 노드 'number_counter'는 숫자를 받아 카운터를 증가시키고 '/number_count' 주제에 발행합니다.
- 'number_counter' 노드 내에서 카운터 초기화 기능을 추가합니다.
- 서비스 이름: '/reset_counter'
- 서비스 타입: example_interfaces/srv/SetBool 사용하여 서비스 서버를 생성합니다.

## 예시

- ros2 interface show example_interfaces/srv/SetBool
- 서비스 호출 시 boolean 데이터 확인
- true 값이면 카운터 변수를 0으로 설정

## 요약

- ROS 2 서비스를 사용하여 노드 간 클라이언트/서버 통신을 구현합니다.
- 서비스 서버와 클라이언트를 생성하고 호출하는 방법을 배웁니다.
- 커스텀 노드를 만들어 서비스를 호출할 수 있습니다.
