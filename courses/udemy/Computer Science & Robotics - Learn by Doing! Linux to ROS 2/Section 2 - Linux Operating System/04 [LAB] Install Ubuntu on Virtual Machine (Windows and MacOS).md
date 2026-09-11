# [LAB] Install Ubuntu on Virtual Machine (Windows and MacOS)

## 개요
이 강의에서는 Oracle VirtualBox를 사용하여 Windows나 MacOS에서 가상 머신에 Ubuntu를 설치하는 과정을 설명합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/50099503#overview)

## 내용
### 1. Oracle VirtualBox 다운로드 및 설치
- **다운로드**: Oracle VirtualBox를 다운로드합니다.
- **실행**: 다운로드한 파일을 실행하여 설치 프로그램을 시작합니다.
- **설치**: 라이선스에 동의하고 PC에 설치합니다.

### 2. Ubuntu 이미지 다운로드
- **다운로드**: 공식 Ubuntu 웹사이트에서 최신 버전의 Ubuntu 24.04를 다운로드합니다.

### 3. 가상 머신 생성
- **Oracle VirtualBox 열기**: Oracle VirtualBox를 실행합니다.
- **새 가상 머신 생성**: "New" 버튼을 클릭하여 새 가상 머신을 만듭니다.
- **이름 설정**: 가상 머신의 이름을 "ubuntu 24"로 설정합니다.
- **ISO 이미지 지정**: 다운로드한 Ubuntu ISO 파일을 선택합니다.
- **리소스 할당**: 메모리와 CPU, 디스크 크기를 설정합니다.

### 4. Ubuntu 설치
- **가상 머신 시작**: 생성한 가상 머신을 클릭하여 시작합니다.
- **Ubuntu 설치**: 가상 머신 내에서 Ubuntu를 설치합니다.

## 예시
```bash
# Oracle VirtualBox 설치 명령어 (Windows)
"C:\Program Files\Oracle\VirtualBox\VBoxManage.exe" startvm "ubuntu 24"

# Ubuntu ISO 파일 경로
C:\Downloads\ubuntu-24.04-desktop-amd64.iso
```
## 요약
1. Oracle VirtualBox를 다운로드하고 설치합니다.
2. Ubuntu 24.04의 ISO 이미지를 다운로드합니다.
3. Oracle VirtualBox에서 새로운 가상 머신을 생성하고 리소스를 할당합니다.
4. 생성한 가상 머신을 시작하여 Ubuntu를 설치하고 로그인합니다.
