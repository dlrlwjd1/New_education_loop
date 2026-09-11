# Section Conclusion

## 개요

- 이 강의에서는 ROS 2 노드를 생성하고 실행하는 기본적인 과정을 학습했습니다.
- 유형: 문서/활동
- 길이: 1분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305320#overview)
- 첨부 자료: code_end_section3.zip

## 내용

- ROS 2 노드는 애플리케이션의 하위 프로그램으로, 각 노드는 하나의 책임만 가지며 서로 주제, 서비스 및 파라미터를 통해 통신합니다.
- 노드를 생성하기 전에 ROS 2 워크스페이스를 만들고 소스해야 합니다.
- (Python/Cpp) 패키지를 만듭니다.
- 적절한 ROS 2 클라이언트 라이브러리를 사용하여 노드를 작성합니다: rclpy (Python), rclcpp (Cpp).
- 노드를 컴파일하고 환경을 다시 소스하여 사용할 수 있도록 합니다.
- 노드는 Cpp에서는 컴파일되고, Python과 Cpp에서는 설치됩니다. install/ 폴더 내에서 실행할 수 있습니다.

## 예시

- ros2 run <package> <executable>
- rclpy와 rclcpp의 기본 사용법
- ROS 2 패키지 구조 이해

## 요약

- 노드는 애플리케이션의 하위 프로그램으로, 각 노드는 하나의 책임만 가지며 서로 주제, 서비스 및 파라미터를 통해 통신합니다.
- ROS 2 워크스페이스를 만들고 소스해야 합니다.
- (Python/Cpp) 패키지를 만듭니다.
