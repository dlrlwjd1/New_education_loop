# Activity 03 - Solution

## 개요

- ROS 2 서비스 클라이언트/서버 간 노드 통신을 구현하는 방법에 대해 설명하고 실습합니다.
- 유형: 동영상
- 길이: 11분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305850#overview)

## 내용

- 새로운 서비스 서버를 숫자 카운터 노드 내부에 추가합니다.
- 서비스 인터페이스를 가져와서 패키지에 등록합니다.
- 노드 생성자에서 서비스 서버를 초기화합니다.
- 서비스 요청을 처리하기 위한 콜백 함수를 작성합니다.
- 서비스 호출 시 카운터를 초기화하거나 유지하는 로직을 구현합니다.
- 서비스 응답에 성공 여부와 메시지를 포함시킵니다.

## 예시

- ros2 interface show example_interfaces/srv/SetBool 명령어로 인터페이스 확인
- self.create_service(SetBool, 'reset_counter', self.callback_reset_counter) 코드 추가
- if request.data: self.counter = 0 로 카운터 초기화 로직 구현

## 요약

- 서비스 서버를 노드 내부에 정의하여 클라이언트와 통신할 수 있습니다.
- 콜백 함수를 통해 서비스 요청을 처리하고 응답을 반환합니다.
- 필요한 인터페이스를 가져와 패키지에 등록하여 사용할 수 있습니다.
