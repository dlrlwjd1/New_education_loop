# [LAB] Remote Connection

## 개요
1. OpenSSH를 설치하고 클라이언트와 서버를 설정합니다.
2. SSH를 사용하여 리모트 컴퓨터에 연결하는 방법을 배웁니다.
3. SSH 키를 사용하여 비밀번호 없이 리모트 컴퓨터에 로그인하는 방법을 배웁니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/52221151#overview)

## 내용
### OpenSSH 설치
OpenSSH는 리모트 Linux 장치에 액세스하기 위해 가장 일반적으로 사용되는 도구입니다. 서버와 클라이언트 두 부분으로 구성되어 있습니다. Ubuntu에서 연결하려는 장치의 클라이언트는 일반적으로 이미 설치되어 있지만, 필요하면 다음 명령어를 사용하여 설치할 수 있습니다.
```bash
sudo apt install openssh-client
```
서버는 보통 미리 설치되어 있지 않으므로, 이 컴퓨터를 클라이언트로 사용하여 외부 컴퓨터에 연결합니다. 서버를 설치하려면 다음 명령어를 사용합니다.
```bash
sudo apt install openssh-server
```

### SSH 서비스 확인
SSH 서비스의 상태를 확인하려면 다음 명령어를 사용합니다.
```bash
sudo systemctl status ssh
```
이 명령어는 SSH 서비스가 현재 활성화되어 있고 사용할 수 있다는 것을 나타냅니다.

### 리모트 컴퓨터 연결
리모트 컴퓨터에 연결하기 위해 먼저 해당 장치의 IP 주소를 알아야 합니다. `nmap` 명령어를 사용하여 IP 주소를 찾을 수 있습니다.
```bash
nmap -sn 192.168.1.0/24
```
발견한 IP 주소 중 가장 가능성 있는 것을 선택합니다. 예를 들어, `192.168.1.49`가 해당할 수 있습니다.

SSH 명령어를 사용하여 리모트 컴퓨터에 연결합니다.
```bash
ssh username@192.168.1.49
```
처음으로 새로운 서버에 SSH로 연결할 때는 다음과 같은 경고 메시지가 나타납니다.
```
The authenticity of host '192.168.1.49 (192.168.1.49)' can't be established.
ECDSA key fingerprint is SHA256:xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx.
Are you sure you want to continue connecting (yes/no)?
```
이 메시지를 확인하고 `yes`를 입력하면 됩니다.

### SSH 키 사용
이 소절의 본문은 수집되지 않았다. Udemy 자막 원문을 확보한 뒤 보완해야 한다.

## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

## 요약
- OpenSSH를 설치하고 클라이언트와 서버를 설정합니다.
- SSH를 사용하여 리모트 컴퓨터에 연결하는 방법을 배웁니다.
- SSH 키를 사용하여 비밀번호 없이 리모트 컴퓨터에 로그인하는 방법을 배웁니다.
