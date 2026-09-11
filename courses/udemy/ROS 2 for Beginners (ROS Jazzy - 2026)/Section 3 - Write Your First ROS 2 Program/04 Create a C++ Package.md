# Create a C++ Package

## 개요

- ROS 2 C++ 패키지를 생성하는 방법을 학습합니다.
- 유형: 동영상
- 길이: 6분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21305272#overview)

## 내용

- ROS 2 워크스페이스 내에서 C++ 패키지를 생성합니다.
- 패키지 이름과 빌드 타입(CMake)을 설정합니다.
- C++ 패키지의 기본 구조를 이해합니다.
- VSCode로 C++ 패키지를 열고, 파일 구조를 확인합니다.
- package.xml 파일을 수정하여 패키지 정보를 입력합니다.
- 패키지를 빌드하고, 특정 패키지만 빌드하는 방법을 배웁니다.

## 예시

- ros2 pkg create my_cpp_pkg --build-type ament_cmake
- VSCode에서 source 폴더로 이동하여 'code .' 명령 실행
- package.xml 파일에서 패키지 정보 입력 (name, version, description 등)

## 요약

- C++ 패키지는 ROS 2 워크스페이스 내에 생성됩니다.
- 빌드 타입은 CMake로 설정되며, 기본 구조는 include, source, CMakeLists.txt로 구성됩니다.
- VSCode를 사용하여 패키지를 열고 수정할 수 있습니다.
