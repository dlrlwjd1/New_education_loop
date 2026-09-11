# Launch Files

## 개요
- launch files의 개념과 목적
- launch files를 사용하여 복잡한 로봇 애플리케이션을 쉽게 시작하고 관리하는 방법

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/36847132#overview)

## 내용
### launch files의 의미
launch files는 ROS 2에서 제공하는 도구로, 여러 기능을 리스트로 만들고 한 명령어로 모든 기능을 시작할 수 있게 해줍니다.

### launch files의 사용 이유
- 복잡한 로봇 애플리케이션에서 노드를 시작하거나 파라미터를 설정해야 할 때 편리합니다.
- 여러 개의 터미널을 열고 각각의 명령어를 실행하는 과정을 단순화할 수 있습니다.

### launch files의 구성 요소
launch files은 Python, XML 또는 YAML로 작성되며, 시작하려는 기능들의 리스트를 포함합니다. 이 리스트는 특정 애플리케이션이나 기능을 시작하기 위한 명령어들의 집합입니다.

### launch files의 장점
- 노드와 파라미터를 동시에 구성할 수 있습니다.
- 외부 프로세스도 시작하고 로봇과 상호작용할 수 있습니다.
- 복잡한 애플리케이션을 쉽게 관리할 수 있습니다.

### launch files의 주의사항
- 단일 파일에 모든 명령어를 포함하려고 하면 composition(구성)과 reusability(재사용)의 원칙을 위반합니다.
- launch files은 로직적이고 기능적인 관련성을 가진 명령어들의 리스트를 포함해야 합니다.

## 예시
launch files를 사용하여 로봇의 URDF 모델을 RViz에서 시각화하는 과정을 단순화할 수 있습니다. 예를 들어, robot_state_publisher 노드와 joint_state_publisher 노드를 시작하고 RViz 노드를 통해 모든 구성 요소를 시각화할 수 있습니다.

## 요약
- launch files의 개념과 목적
- launch files를 사용하여 복잡한 로봇 애플리케이션을 쉽게 시작하고 관리하는 방법
- launch files의 구성 요소와 장점
- launch files의 주의사항
