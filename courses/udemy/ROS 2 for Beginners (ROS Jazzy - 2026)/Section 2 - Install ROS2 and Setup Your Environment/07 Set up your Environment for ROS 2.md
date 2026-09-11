# Set up your Environment for ROS 2

## 개요

- ROS 2 환경을 설정하여 ROS 2 명령어를 사용할 수 있도록 하는 방법을 배웁니다.
- 유형: 동영상
- 길이: 3분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21805806#overview)

## 내용

- ROS 2가 설치되었지만, 사용하기 전에 환경을 설정해야 합니다.
- ROS 2의 설치 디렉토리에서 setup.bash 스크립트를 소스링하여 ROS 2 명령어를 사용할 수 있습니다.
- /opt/ros/<distribution_name>/setup.bash 스크립트를 실행하여 ROS 2를 소스링합니다.
- 소스링 후 ROS 2 명령어가 정상적으로 작동하는지 확인합니다.
- ~/.bashrc 파일에 setup.bash 스크립트의 경로를 추가하여 항상 환경을 설정할 수 있습니다.
- ~/.bashrc 파일을 열고, 파일 끝에 'source /opt/ros/<distribution_name>/setup.bash'를 추가합니다.

## 예시

- ROS 2 명령어가 사용되지 않는 경우: ROS 2
- ROS 2 명령어가 정상적으로 작동하는 경우: ROS 2
- ~/.bashrc 파일을 열고, 'source /opt/ros/<distribution_name>/setup.bash'를 추가한 후 ~/.bashrc를 저장합니다.

## 요약

- ROS 2를 사용하기 전에 환경을 설정해야 합니다.
- setup.bash 스크립트를 소스링하여 ROS 2 명령어를 사용할 수 있습니다.
- ~/.bashrc 파일에 setup.bash 스크립트의 경로를 추가하여 항상 환경을 설정할 수 있습니다.
