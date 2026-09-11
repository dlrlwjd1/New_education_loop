# Section Conclusion

## 개요

- 이 강의에서는 ROS 2에서 사용자 정의 메시지 (Msg)와 서비스 (Srv) 인터페이스를 만드는 방법에 대해 알아보았습니다.
- 유형: 문서/활동
- 길이: 1분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21306122#overview)
- 첨부 자료: code_end_section7.zip

## 내용

- 사용자 정의 메시지와 서비스 인터페이스를 위한 새로운 패키지를 생성합니다.
- 패키지를 설정합니다. CMakeLists.txt와 package.xml 파일을 수정합니다.
- msg/와 srv/ 폴더를 생성하고, 사용자 정의 메시지와 서비스 인터페이스를 여기에 위치시킵니다.
- 새로운 인터페이스를 추가하려면 msg/ 또는 srv/ 폴더에 새 파일을 만듭니다.
- CMakeLists.txt 파일에 한 줄을 추가합니다.
- colcon build 명령어로 컴파일합니다. 메시지를 사용하기 전에 ROS 2 워크스페이스를 소스 코드로 업데이트해야 합니다.

## 예시

- msg/MyMessage.msg 파일을 생성하고 내용을 작성합니다.
- srv/MyService.srv 파일을 생성하고 요청과 응답 메시지를 정의합니다.
- CMakeLists.txt 파일에 'add_message_files'와 'generate_messages'를 추가합니다. 예: add_message_files(FILES MyMessage.msg) generate_messages(DEPENDENCIES std_msgs).

## 요약

- 사용자 정의 메시지와 서비스 인터페이스는 ROS 2에서 데이터 교환을 위한 기본 구성 요소입니다.
- 새 패키지를 생성하고 설정하여 메시지와 서비스를 관리합니다.
- msg/와 srv/ 폴더에 사용자 정의 파일을 위치시키고, CMakeLists.txt에서 적절히 수정해야 합니다.
