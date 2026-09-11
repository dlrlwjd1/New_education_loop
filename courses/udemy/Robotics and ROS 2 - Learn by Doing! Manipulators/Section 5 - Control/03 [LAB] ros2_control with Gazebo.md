# [LAB] ros2_control with Gazebo

## 개요
- URDF 모델 수정 및 Ros2 control 라이브러리 지원
- Gazebo 시뮬레이션에서 로봇 제어 시스템 시작

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/36847150#overview)

## 내용
### 1. URDF 모델 수정
- Arduino 보드 설명 패키지 열기
- Urdf 폴더 내의 파일 수정
- 새로운 매크로 인수 선언 및 사용
- Ros2 control 플러그인 로드에 필요한 변수 설정

### 2. Docker 파일 포함
- 새로운 파일 생성 (Arduino robot gazebo.sacro)
- Arduino bot gazebo 프로파일 로드
- URDF 파일과 분리하여 관리

### 3. Gazebo 플러그인 구성
- gazebo 태그 사용
- Ros2 control 플러그인 로드에 따라 버전 확인
- Humble 버전의 경우 ignition_ros2_control_system 플러그인 로드
- 그 외 버전의 경우 gazebo_ros2_control_system 플러그인 로드

### 4. Ros2 Control 라이브러리 구성
- Ros2 control 태그 사용
- 시뮬레이션 및 실제 로봇에 대한 구성 분리
- 각 관절에 대한 인터페이스 설정 (command, state)

## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

## 요약
- URDF 모델 수정 및 Ros2 control 라이브러리 지원
- Gazebo 시뮬레이션에서 로봇 제어 시스템 시작
