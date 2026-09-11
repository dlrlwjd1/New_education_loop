# Install ROS 2 Jazzy on Ubuntu 24.04

## 개요

- Ubuntu 24.04에 ROS 2 Jazzy 데스크톱 패키지와 개발 도구를 설치한다.
- 유형: 동영상
- 길이: 7분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/33147228#overview)

## 내용

- ROS 2 공식 문서에서 Jazzy의 Ubuntu Deb 패키지 설치 절차를 사용한다.
- 먼저 시스템 로케일이 UTF-8인지 확인하고, ROS 2 패키지 저장소를 시스템의 APT 소스에 추가한다.
- ROS 2 애플리케이션 개발에 필요한 `ros-dev-tools`를 설치한다.
- 저장소를 추가한 뒤 기존 패키지를 업데이트·업그레이드해야 의존성 충돌 가능성을 줄일 수 있다.
- 최소 구성인 `ros-base` 대신 GUI 도구, 데모, 튜토리얼을 포함하는 Jazzy 데스크톱 구성을 설치한다.
- 설치 후에도 ROS 2 패키지 업데이트를 받기 위해 `apt update`와 `apt upgrade`를 주기적으로 실행하는 것이 좋다.

## 예시

```bash
locale
sudo apt update
sudo apt upgrade
sudo apt install ros-dev-tools
sudo apt install ros-jazzy-desktop
```

- 더 이상 필요하지 않은 패키지가 표시되면 `sudo apt autoremove`로 정리할 수 있다.

## 요약

- Ubuntu 24.04와 ROS 2 Jazzy의 공식 Deb 패키지 조합을 사용한다.
- ROS 2 저장소 추가, 시스템 업데이트, 개발 도구와 데스크톱 패키지 설치 순서를 지킨다.
- 설치만으로 셸 환경이 자동 구성되는 것은 아니므로 다음 강의에서 환경 소싱(source)을 설정한다.
