# Write a Python Node - With OOP

## 개요

- 이 강의에서는 ROS 2 노드를 객체 지향 프로그래밍(OOP)을 사용하여 작성하는 방법을 배웁니다.
- 유형: 동영상
- 길이: 12분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305292#overview)

## 내용

- OOP를 사용하여 ROS 2 노드를 만들고, 클래스와 생성자를 정의합니다.
- 부모 클래스인 Node 클래스를 상속하여 새로운 클래스를 만듭니다.
- 노드 이름과 로깅 기능을 설정합니다.
- 클래스 내에서 타이머 함수를 추가하여 일정 시간마다 특정 작업을 수행할 수 있도록 합니다.
- 타이머 콜백 함수를 정의하고, 노드 생성 시 타이머를 초기화합니다.
- 노드가 실행 중일 때 타이머 콜백 함수가 주기적으로 호출됩니다.

## 예시

- class MyNode(Node):
- def __init__(self):
- super().__init__('pi_test')
logger = self.get_logger()
logger.info('Hello, ROS 2!')
timer_period = 1.0
self.timer = self.create_timer(timer_period, self.timer_callback)
def timer_callback(self):
logger.info(f'Hello {self.counter}')
self.counter += 1
self.counter = 0

## 요약

- OOP를 사용하여 ROS 2 노드를 작성하면 코드의 재사용성과 확장성이 향상됩니다.
- 타이머 기능을 활용하여 일정 시간마다 작업을 반복적으로 수행할 수 있습니다.
- 노드 클래스를 상속하여 새로운 기능을 추가하거나 기존 기능을 재구현할 수 있습니다.
