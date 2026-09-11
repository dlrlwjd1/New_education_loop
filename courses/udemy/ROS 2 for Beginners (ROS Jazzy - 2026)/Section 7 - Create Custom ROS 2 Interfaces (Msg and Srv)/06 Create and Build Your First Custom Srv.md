# Create and Build Your First Custom Srv

## 개요

- 이 강의에서는 ROS 2에서 사용자 정의 서비스를 생성하고 빌드하는 방법을 배웁니다.
- 유형: 동영상
- 길이: 6분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21306084#overview)

## 내용

- 서비스 정의 파일을 만들기 위해 my_robot_interfaces 패키지 내에 SRV 폴더를 만듭니다.
- 서비스 이름은 대문자로 시작하며, 단어 사이에는 대문자를 사용하여 구분합니다.
- 요청과 응답 메시지를 정의합니다. 예를 들어, 사각형 면적 계산 서비스는 길이와 너비를 요청으로 받고 면적을 응답으로 반환합니다.
- 서비스 정의 파일에 세 개의 대시(-)를 추가하여 유효한 서비스 정의로 만듭니다.
- CMakeLists.txt 파일에 서비스 정의를 추가하여 패키지를 빌드합니다.
- ros2 interface show 명령을 사용하여 생성된 서비스 인터페이스를 확인합니다.

## 예시

- 서비스 이름: compute_rectangle_area.srv
- 요청 메시지: float64 length
float64 width
- 응답 메시지: float64 area

## 요약

- 사용자 정의 서비스를 쉽게 만들 수 있습니다.
- 서비스 이름은 대문자로 시작하고 단어 사이에 대문자를 사용합니다.
- 요청과 응답 메시지를 정의하여 서비스를 구현합니다.
