# Write a Python Subscriber

## 개요

- Python Subscriber를 작성하여 노드 간 통신을 구현하는 방법을 배웁니다.
- 유형: 동영상
- 길이: 11분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305610#overview)

## 내용

- 노드 생성 및 실행 파일 설정
- Python 패키지 내에 새로운 노드 추가
- 노드 클래스 정의와 상속
- 구독자 생성 및 메시지 타입 지정
- 구독자 콜백 함수 작성
- 메시지 수신 시 로그 출력 구현

## 예시

- VSCode에서 Python 파일 열기
- 노드 클래스 정의: `class SmartphoneNode(Node):`
- 구독자 생성: `self.subscriber = self.create_subscription(String, 'robot_news', self.callback_robot_news, 10)`

## 요약

- 메시지 타입 일치 확인 필요
- 구독자 콜백 함수는 자동 호출됨
- 노드가 실행 중인 동안 메시지 처리 가능
