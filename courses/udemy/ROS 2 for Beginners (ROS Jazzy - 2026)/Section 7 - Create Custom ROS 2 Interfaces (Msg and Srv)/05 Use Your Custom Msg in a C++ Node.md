# Use Your Custom Msg in a C++ Node

## 개요

- C++ 노드에서 사용자 지정 메시지를 발행하는 방법을 학습합니다.
- 유형: 동영상
- 길이: 9분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21306078#overview)

## 내용

- C플러스플러스 패키지 내의 소스 폴더에 새 파일을 추가하여 사용자 지정 메시지를 생성합니다.
- VSCode에서 C++ 프로젝트를 열고 템플릿을 가져와서 하드웨어 상태 게시자를 만듭니다.
- 인터페이스를 포함하려면 ROS 2 워크스페이스의 설치 폴더에 경로를 추가합니다.
- VSCode에서 패키지 도트 XML 파일을 수정하여 로봇 인터페이스를 종속성으로 추가합니다.
- CMakeLists.txt 파일에서도 로봇 인터페이스를 종속성으로 추가합니다.
- 메시지를 작성하고 게시자와 함께 게시하는 코드를 작성합니다. 타이머를 사용하여 1초마다 메시지를 발행합니다.

## 예시

- cd ~/ros2_ws/src
- mkdir -p cpp_interfaces/msg
- touch cpp_interfaces/msg/HardwareStatus.msg

## 요약

- C++ 노드에서 사용자 지정 메시지를 발행하는 방법을 배웠습니다.
- VSCode를 사용하여 템플릿을 가져와서 하드웨어 상태 게시자를 만듭니다.
- ROS 2 워크스페이스의 설치 폴더에 경로를 추가하여 인터페이스를 포함합니다.
