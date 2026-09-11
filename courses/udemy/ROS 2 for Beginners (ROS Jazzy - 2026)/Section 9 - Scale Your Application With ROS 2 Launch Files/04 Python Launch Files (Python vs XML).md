# Python Launch Files (Python vs XML)

## 개요

- Python launch files와 XML launch files의 차이점을 이해하고, Python launch file을 작성하는 방법을 배운다.
- 유형: 동영상
- 길이: 12분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/48733893#overview)

## 내용

- Python과 XML, YAML 세 가지 언어로 큰 파일을 작성할 수 있음을 설명한다.
- XML은 더 명확하고 오류가 적다고 판단하여 사용 권장한다.
- Python launch file을 생성하는 과정을 설명하며, 필요한 모듈을 가져와 launch description 객체를 만든다.
- 노드를 생성하고 launch description에 추가하는 방법을 설명한다.
- XML launch file에서 Python launch file을 포함시키는 방법을 소개한다.
- 실습: XML launch file과 함께 Python launch file을 작성하여 동일한 기능을 수행한다.

## 예시

- Python launch file의 기본 구조: `generate_launch_description()` 함수를 사용하여 launch description 객체 생성
- 노드 생성 코드 예시: `Node(package='my_robot_bringup', executable='number_publisher')`
- XML에서 Python launch file 포함시키는 방법: `<include file='$(find my_robot_bringup)/launch/number_app.launch.py'/>`

## 요약

- Python launch files은 복잡한 로직을 사용할 수 있지만, XML과 비교해 간결하고 오류가 적다고 판단한다.
- XML에서 Python launch file을 포함시키는 것은 가능하다는 것을 알게 된다.
- 실제 프로젝트에서는 XML launch files를 더 많이 사용하는 경향이 있다.
