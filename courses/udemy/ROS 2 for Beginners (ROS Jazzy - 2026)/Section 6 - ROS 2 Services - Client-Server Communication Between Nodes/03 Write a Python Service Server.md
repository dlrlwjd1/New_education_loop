# Write a Python Service Server

## 개요

- Python에서 ROS 2 서비스 서버를 작성하여 기본적인 서비스 통신을 연습합니다.
- 유형: 동영상
- 길이: 15분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305766#overview)

## 내용

- 서비스의 이름과 인터페이스로 구성되어 있으며, 요청과 응답 메시지가 포함됩니다.
- 인터페이스는 `example_interfaces/srv/AddTwoInts`로 사용됩니다.
- 노드 생성 시 서비스 서버를 생성하고, 콜백 함수를 통해 요청을 처리합니다.
- 서비스 서버는 노드의 생성자에서 초기화되며, 클라이언트로부터 요청을 받아 응답을 반환합니다.
- 서비스 서버가 정상 작동하는지 테스트하기 위해 터미널에서 명령어를 사용할 수 있습니다.

## 예시

- 서비스 인터페이스: `example_interfaces/srv/AddTwoInts`
- 노드 생성 코드: `self.server = self.create_service(AddTwoInts, 'add_two_ints', self.callback_add_two_ints)`
```python
def callback_add_two_ints(self, request, response):
    response.sum = request.a + request.b
    return response
```

## 요약

- 서비스 서버는 요청과 응답 메시지를 포함하는 인터페이스를 사용합니다.
- 노드 생성 시 서비스 서버를 초기화하고, 콜백 함수를 통해 요청을 처리합니다.
- 테스트용 명령어를 사용하여 서비스 서버의 정상 작동을 확인할 수 있습니다.
