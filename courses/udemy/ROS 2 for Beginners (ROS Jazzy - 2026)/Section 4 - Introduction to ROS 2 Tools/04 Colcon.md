# Colcon

## 개요

- ROS 2의 Colcon 도구를 사용하여 Python 노드를 빠르게 개발하고 실행하는 방법에 대해 설명합니다.
- 유형: 동영상
- 길이: 5분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305542#overview)

## 내용

- Chalcone를 사용하여 ROS 2 워크스페이스를 구축한 것을 다시 확인합니다.
- 워크스페이스의 source 폴더 내에서만 패키지를 빌드해야 합니다.
- Colcon을 사용하여 모든 패키지를 빌드하거나 특정 패키지만 빌드할 수 있습니다.
- Python 노드를 위한 'symlink install' 옵션을 소개합니다.
- 'symlink install' 옵션은 소스 폴더에서 파일을 직접 실행하므로 코드 수정 후 다시 빌드하지 않아도 됩니다.
- C++ 패키지는 'symlink install' 옵션이 작동하지 않습니다. 정식 설치를 권장합니다.

## 예시

- colcon build --packages-select my_cp_pg
- colcon build --packages-select my_pi_pg --symlink-install
- source ~/ros2_ws/install/setup.bash && ros2 run my_package pi_node

## 요약

- 'symlink install' 옵션은 Python 노드 개발에 유용하지만, C++ 패키지에는 적용되지 않습니다.
- 정식 설치를 사용하면 프로덕션 모드에서 더 안정적인 실행이 가능합니다.
- 코드 수정 후 다시 빌드하지 않아도 실행할 수 있어 개발 속도가 향상됩니다.
