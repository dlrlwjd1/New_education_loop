# Activity 02 - Solution [2/2]

## 개요

- 두 번째 노드를 생성하여 메시지를 주고받는 ROS 2 토픽 시스템을 구현하는 방법을 학습합니다.
- 유형: 동영상
- 길이: 14분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305656#overview)

## 내용

- 기존의 숫자 발행자 노드를 사용하여 새로운 파일을 생성합니다.
- 새로운 파일에서 'number_counter.py'라는 이름의 노드를 작성하고 실행 권한을 추가합니다.
- 노드에 대한 템플릿을 복사하고, 노드 이름을 'number_counter_node'로 변경합니다.
- 구독자를 생성하여 'number' 토픽에서 메시지를 수신하고, 수신된 숫자를 카운터에 추가합니다.
- 카운터 값을 새로운 토픽 'number_count'에 발행하는 새로운 발행자를 생성합니다.
- 노드가 실행될 때마다 새로운 메시지를 발행하여 데이터 파이프라인을 구현합니다.

## 예시

- 새로운 파일을 생성하고 실행 권한을 추가하는 명령: `chmod +x number_counter.py`
- 구독자를 생성하는 코드 예시: `self.number_subscriber = self.create_subscription(Int64, 'number', self.callback_number, 10)`
- 메시지를 수신하여 카운터에 추가하는 콜백 함수 예시: `def callback_number(self, msg): self.counter += msg.data`

## 요약

- 노드는 메시지를 주고받기 위해 발행자와 구독자를 생성합니다.
- 구독자는 토픽에서 메시지를 수신하고, 이를 처리하여 새로운 데이터를 발행하는 노드가 필요합니다.
- 데이터 파이프라인을 구현하여 메시지의 전달과 처리를 연결할 수 있습니다.
