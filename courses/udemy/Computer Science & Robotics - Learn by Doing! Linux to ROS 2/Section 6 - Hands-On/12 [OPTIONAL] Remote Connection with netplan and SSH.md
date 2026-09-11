# [OPTIONAL] Remote Connection with netplan and SSH

## 개요
1. 로봇과의 원격 연결 방법을 알아보겠습니다.
2. Netplan을 사용하여 정적 IP 설정하는 방법을 배우겠습니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/53450619#overview)

## 내용
### 1. SSH를 이용한 원격 접속
- 로봇이 움직이는 동안에도 원격으로 연결할 수 있는 방법은 SSH입니다.
- Raspberry Pi는 WiFi에 연결되어 있고, Ubuntu 서버 분포가 설치되어 있습니다.
- OpenSSH 서버와 운영 체제도 이미 설치 및 구성되었습니다.

### 2. SSH로 로봇 접속
1. 새로운 터미널을 열고,
2. `ssh` 명령어를 사용하여 Raspberry Pi에 연결합니다.
3. IP 주소를 입력해야 하며, 이 경우 `192.168.1.65`입니다.

### 3. 정적 IP 설정
- 동적 IP 주소는 다음에 다시 할당될 수 있으므로 문제가 될 수 있습니다.
- Netplan을 사용하여 정적 IP를 설정합니다.

### 4. Netplan 구성 파일 생성
1. `sudo vim /etc/netplan/90-bumper-bot.yaml` 명령어로 새로운 구성 파일을 생성합니다.
2. DHP4와 d h cp six를 false로 설정하고, 주소를 `192.168.1.65`로 설정합니다.
3. 마스크는 `24`, DNS 서버는 `8.8.8.8`과 `8.8.4.4`로 설정합니다.
4. 라우트 설정을 추가하여 기본 소스를 `default source`로, 라우터 IP를 `192.168.1.1`로 설정합니다.

### 5. Netplan 구성 파일 저장
- 파일을 저장하고 터미널에서 `exit` 명령어로 종료합니다.
- 다시 Raspberry Pi를 시작하면 동일한 정적 IP 주소가 할당됩니다.

### 6. hosts 파일에 로봇 IP 추가
- PC의 `/etc/hosts` 파일을 수정하여 로봇의 IP 주소와 이름을 연결합니다.
- 예를 들어, `192.168.1.65 raspberry`로 설정합니다.

### 7. SSH 키 생성 및 복사
- PC에서 SSH 키를 생성하고, 이를 로봇에 복사하여 자동으로 접속할 수 있도록 합니다.

## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

## 요약
- 로봇과의 원격 연결 방법을 알아보겠습니다.
- Netplan을 사용하여 정적 IP 설정하는 방법을 배우겠습니다.
