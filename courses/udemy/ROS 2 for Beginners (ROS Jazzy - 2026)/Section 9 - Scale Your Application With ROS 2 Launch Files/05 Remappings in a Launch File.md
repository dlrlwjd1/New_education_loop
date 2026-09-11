# Remappings in a Launch File

## 개요

- ROS 2의 런치 파일에서 노드 이름과 토픽/서비스 리맵핑 방법을 배웁니다.
- 유형: 동영상
- 길이: 7분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21306518#overview)

## 내용

- 런치 파일에서 노드 이름 변경
- 런치 파일에서 토픽 리맵핑
- 런치 파일에서 서비스 리맵핑
- Python 스크립트로 런치 파일 작성

## 예시

- <node pkg='my_robot' exec='number_counter' name='my_number_counter'/>
- <remap from='number_topic' to='my_number_topic'/>
- ros2 launch my_robot_bringup number_app.launch.xml

## 요약

- 런치 파일을 사용하여 노드 이름과 토픽/서비스를 쉽게 리맵핑할 수 있습니다.
- Python 스크립트로 런치 파일 작성 시 remappings 인자를 사용합니다.
- 리맵핑은 노드 간의 통신에 중요한 역할을 합니다.
