# Activity 04 - Solution [1/3]

## 개요

- 이 강의에서는 ROS 2에서 사용자 정의 메시지 타입과 서비스 타입을 생성하여 LED 패널 노드를 만들고, 이를 통해 LED 패널 상태를 발행하고 서비스를 구독하는 방법을 학습합니다.
- 유형: 동영상
- 길이: 11분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21306100#overview)

## 내용

- 사용자 정의 메시지 타입을 생성하여 LED 패널 상태를 발행하는 노드를 만듭니다.
- LED 패널 노드에서 LED 상태를 주기적으로 발행하는 퍼블리셔와 타이머를 설정합니다.
- 사용자 정의 서비스 타입을 사용하여 LED 패널 노드가 다른 노드로부터 명령을 수신할 수 있도록 합니다.
- LED 패널 노드에서 LED 상태를 변경하는 서비스 서버를 구현합니다.
- 노드와 서비스를 실행하고, LED 패널 상태가 정기적으로 발행되는지 확인합니다.

## 예시

- touch LEDStateArray.msg
- int64[] led_states
- self.led_states_publisher = self.create_publisher(LEDStateArray, 'LED_panel_state', 10)

## 요약

- 사용자 정의 메시지 타입과 서비스 타입을 생성하여 ROS 2 노드를 만듭니다.
- 노드에서 퍼블리셔와 타이머를 사용하여 주기적으로 데이터를 발행합니다.
- 서비스 서버를 구현하여 다른 노드로부터 명령을 수신하고 처리합니다.
