# [LAB] Install Ubuntu on WSL (Windows)

## 개요
1. Windows Subsystem for Linux (WSL)을 사용하여 Windows에 Ubuntu를 설치하는 방법.
2. WSL이 활성화되어 있는지 확인하고, 활성화되지 않은 경우 활성화하는 과정.
3. PowerShell을 사용하여 Ubuntu를 설치하는 방법.
4. 원하는 Ubuntu 버전 선택 및 설치.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/50106447#overview)

## 내용
### 1. WSL 활성화 확인
- Windows의 Control Panel에서 "Turn Windows features on or off"로 이동합니다.
- "Windows Subsystem for Linux" 옵션이 활성화되어 있는지 확인하고, 활성화되지 않은 경우 활성화합니다.

### 2. PowerShell을 사용하여 Ubuntu 설치
- Windows PowerShell을 관리자 권한으로 실행합니다.
- `wsl --install` 명령어를 입력하여 Ubuntu를 설치합니다.
- 설치가 완료되면 컴퓨터를 재시작합니다.

### 3. Ubuntu 버전 선택 및 설치
- 다시 PowerShell을 관리자 권한으로 실행합니다.
- `wsl --list --online` 명령어를 입력하여 사용 가능한 Ubuntu 버전 목록을 확인합니다.
- 원하는 버전(예: Ubuntu 24.04)을 선택하고, `wsl --install -d Ubuntu-24.04` 명령어를 입력하여 설치합니다.

### 4. 새로운 Ubuntu 계정 생성
- 설치가 완료되면 Ubuntu 터미널에서 기본 계정을 생성하고 비밀번호를 설정합니다.

## 예시
```bash
# WSL 활성화 확인 및 활성화
# Control Panel -> Programs -> Turn Windows features on or off
# "Windows Subsystem for Linux" 선택 후 활성화

# PowerShell을 관리자 권한으로 실행하여 Ubuntu 설치
wsl --install

# Ubuntu 버전 목록 확인
wsl --list --online

# Ubuntu 24.04 설치
wsl --install -d Ubuntu-24.04

# 새로운 계정 생성 및 비밀번호 설정
sudo adduser username
sudo passwd username
```
## 요약
- Windows Subsystem for Linux (WSL)을 사용하여 Windows에 Ubuntu를 설치하는 방법.
- WSL이 활성화되어 있는지 확인하고, 활성화되지 않은 경우 활성화하는 과정.
- PowerShell을 사용하여 Ubuntu를 설치하는 방법.
- 원하는 Ubuntu 버전 선택 및 설치.
