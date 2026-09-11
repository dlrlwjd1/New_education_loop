# Activity 06 - ROS 2 Launch Files

## 개요

- 이 강의에서는 이미 만들어진 노드를 사용하여 새로운 launch 파일을 생성하고, 여러 'robot_news_station' 노드와 하나의 'smartphone' 노드를 시작하는 방법을 연습합니다.
- 유형: 문서/활동
- 길이: 1분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21306526#overview)

## 내용

- 새로운 launch 파일을 생성합니다.
- 5개의 'robot_news_station' 노드와 1개의 'smartphone' 노드를 시작합니다.
- 'robot_news_station' 노드는 각각 다른 이름이어야 합니다.
- 'robot_news_station' 노드는 'Hi, this is <robot_name> from the Robot News Station!' 메시지를 발행해야 합니다.
- 'smartphone' 노드는 모든 다른 노드의 메시지를 받아야 합니다.
- launch 파일에서 파라미터를 하나씩 제공할 수 있습니다.

## 예시

- launch 파일에서 파라미터를 설정하는 방법을 보여줍니다.
- YAML 파일에서 파라미터를 로드하는 방법을 설명합니다.

## 요약

- launch 파일을 사용하여 여러 노드를 동시에 시작할 수 있습니다.
- 파라미터를 launch 파일에 직접 입력하거나 YAML 파일로 관리할 수 있습니다.
- 노드 간의 메시지 교환이 가능하도록 설정하는 것이 중요합니다.
