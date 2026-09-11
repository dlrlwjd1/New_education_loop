# [LAB] Install ROS 2

## 개요
1. Ubuntu에 dual boot 또는 가상 머신으로 설치한 경우에도 동일한 설치 단계와 명령어, 도구를 사용합니다.
2. ROS 2는 여러 버전이 있으며, 각 버전은 특정 Ubuntu 버전과 일치하며 일관된 출시 계획을 따릅니다.
3. LTS 버전의 일부 ROS 2 배포판은 장기 지원을 받습니다.
4. Ubuntu 24.04에서 사용 중인 경우, costumed distro를 설치합니다.
5. 다른 버전의 Ubuntu를 사용하는 경우, 해당 버전에 맞는 ROS 2 버전을 설치해야 합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/50106577#overview)

## 내용
### UTF-8 설정
1. 새로운 터미널 열고 PC의 로컬 설정을 수정하여 UTF-8 지원을 추가합니다.
   ```bash
   sudo apt update && sudo apt install locales
   ```
2. US.UTF-8로 설정합니다.
   ```bash
   sudo locale-gen en_US.UTF-8
   sudo update-locale LANG=en_US.UTF-8
   export LANG=en_US.UTF-8
   ```

### APT 리포지토리 추가
1. APT 리포지토리를 확장하여 소프트웨어를 설치할 수 있도록 합니다.
   ```bash
   sudo apt install software-properties-common
   ```
2. ROS 2 GPG 키를 추가합니다.
   ```bash
   sudo apt update && sudo apt install curl gnupg2 lsb-release
   curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key | sudo gpg --dearmor -o /usr/share/keyrings/ros-archive-keyring.gpg
   echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
   ```
3. 새로운 리포지토리를 추가하고 업데이트합니다.
   ```bash
   sudo apt update
   ```

### ROS 2 설치
1. ROS 2 Jessie의 전체 데스크톱 버전을 설치합니다.
   ```bash
   sudo apt install ros-foxy-desktop
   ```
2. 개발 도구를 설치하여 자동 완성 기능을 사용할 수 있습니다.
   ```bash
   sudo apt install python3-rosdep2
   sudo ros
```
## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

## 요약
- Ubuntu에 dual boot 또는 가상 머신으로 설치한 경우에도 동일한 설치 단계와 명령어, 도구를 사용합니다.
- ROS 2는 여러 버전이 있으며, 각 버전은 특정 Ubuntu 버전과 일치하며 일관된 출시 계획을 따릅니다.
- LTS 버전의 일부 ROS 2 배포판은 장기 지원을 받습니다.
- Ubuntu 24.04에서 사용 중인 경우, costumed distro를 설치합니다.
- 다른 버전의 Ubuntu를 사용하는 경우, 해당 버전에 맞는 ROS 2 버전을 설치해야 합니다.
