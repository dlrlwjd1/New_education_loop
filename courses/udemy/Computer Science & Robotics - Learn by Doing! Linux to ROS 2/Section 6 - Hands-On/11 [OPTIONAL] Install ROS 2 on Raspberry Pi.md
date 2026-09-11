# [OPTIONAL] Install ROS 2 on Raspberry Pi

## 개요
이 강의에서는 Raspberry Pi에 ROS 2를 설치하는 방법을 설명합니다. 특히, Ubuntu 24 버전을 사용하여 ROS 2 Jazzy 버전을 설치하는 과정을 다룹니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/53421945#overview)

## 내용
### 1. SSH로 Raspberry Pi 접속
먼저, Raspberry Pi에 SSH로 접속해야 합니다. 다음 명령어를 사용하여 접속합니다:
```bash
ssh raspberry@raspberry
```
비밀번호를 입력하면 Raspberry Pi에 접속할 수 있습니다.

### 2. 로컬 설정
Raspberry Pi의 로컬 설정을 변경합니다. 다음 명령어를 실행하세요:
```bash
sudo locale-gen en_US.UTF-8
sudo update-locale LANG=en_US.UTF-8
```

### 3. 필요한 저장소 활성화
ROS 2 저장소를 활성화하기 위해 다음 명령어들을 실행합니다:
```bash
sudo apt update && sudo apt install curl gnupg2 lsb-release
curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
```

### 4. ROS 2 키 추가
ROS 2 키를 추가하여 저장소를 업데이트합니다:
```bash
sudo apt update && sudo apt install ros-foxy-desktop
```
이 명령어는 ROS 2 Foxy 버전을 설치합니다.

### 5. 환경 설정
Raspberry Pi의 환경을 설정하기 위해 다음 명령어를 실행합니다:
```bash
echo "source /opt/ros/foxy/setup.bash" >> ~/.bashrc
source ~/.bashrc
```

### 6. 작업 공간 복사
이제 Raspberry Pi에 작업 공간을 복사해야 합니다. 먼저, PC에서 작업 공간을 다운로드하고 압축 해제합니다:
```bash
wget https://example.com/bumper_bot_workspace.zip
unzip bumper_bot_workspace.zip
```
다음으로, Raspberry Pi로 작업 공간을 복사합니다:
```bash
scp -r bumper_bot_workspace raspberry@raspberry:/home/raspberry/
```

### 7
이 소절의 본문은 수집되지 않았다. Udemy 자막 원문을 확보한 뒤 보완해야 한다.

## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

## 요약
- 강의에서 설명한 대표 명령과 절차는 위 내용에 포함되어 있다.
