# Using Parameters in your Python Nodes

## 개요

- Python 노드에서 파라미터를 사용하여 런타임에 설정 변경하는 방법을 학습합니다.
- 유형: 동영상
- 길이: 12분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21306370#overview)

## 내용

- 파라미터의 개념을 이해하고, Python 노드 내부에 파라미터를 생성합니다.
- 노드가 실행될 때 동적으로 파라미터 값을 제공할 수 있도록 코드를 수정합니다.
- 파라미터를 선언하는 방법과 파라미터 값 가져오는 방법을 설명합니다.
- 파라미터의 기본값 설정 및 데이터 타입 지정 방법을 다룹니다.
- 노드에서 파라미터 값을 사용하여 동작을 변경하는 예제 코드를 작성합니다.
- 런타임에 파라미터 값을 제공하는 방법을 설명하고, 이를 통해 노드의 동적인 변경 가능성을 확인합니다.

## 예시

- 파라미터 선언: `self.declare_parameter('number', 2)`
- 파라미터 값 가져오기: `self.get_parameter('number').value`
- 런타임 파라미터 제공: `ros2 run package_name executable_name --ros-args -p number:=3`

## 요약

- 파라미터를 사용하여 노드의 동적인 설정 변경이 가능하다는 것을 이해합니다.
- 파라미터 선언과 가져오기 방법을 익히고, 이를 통해 코드의 유연성을 높입니다.
- 런타임에 파라미터 값을 제공하는 방법을 배우며, 이를 통해 노드의 동작을 쉽게 변경할 수 있습니다.
