# [LAB] Package Management

## 개요
1. 기본 브라우저인 Firefox를 열고 Google Chrome 페이지를 검색합니다.
2. 다운로드 버튼을 클릭하여 설치 파일을 다운로드합니다.
3. dpkg 명령어를 사용하여 패키지를 설치합니다.
4. sudo 키워드를 사용하여 관리자 권한으로 명령어를 실행합니다.
5. APT(Advanced Package Tool)를 사용하여 패키지 관리를 단순화합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/52142001#overview)

## 내용
### 1. 기본 브라우저 열기와 검색
- Ubuntu에 설치된 기본 브라우저인 Firefox를 열고 Google Chrome 페이지를 검색합니다.
- 다운로드 버튼을 클릭하여 설치 파일을 다운로드합니다.

### 2. dpkg 명령어 사용
- 새로운 터미널을 열고 dpkg 명령어를 사용하여 패키지를 설치합니다.
- dpkg는 Debian 패키지 관리자를 의미합니다.
- 현재 다운로드한 패키지에 대해 dpkg 명령어를 실행합니다.

### 3. sudo 키워드 사용
- sudo 키워드를 사용하여 관리자 권한으로 명령어를 실행합니다.
- sudo는 root(관리자) 권한을 부여하는 키워드입니다.
- sudo 키워드를 사용하면 패키지 설치 등이 가능합니다.

### 4. APT(Advanced Package Tool) 사용
- APT는 dpkg보다 더 강력하고 간편한 패키지 관리 도구입니다.
- APT를 사용하여 패키지를 업그레이드하거나 설치할 수 있습니다.
- APT update 명령어로 패키지 목록을 업데이트합니다.

### 5. 패키지 검색
- apt cache search 명령어를 사용하여 특정 패키지를 검색합니다.
- 예를 들어, Python3 패키지를 검색하면 관련된 모든 패키지가 출력됩니다.

### 6. 패키지 제거
- sudo apt remove 명령어를 사용하여 패키지를 제거합니다.

## 예시
```bash
# 기본 브라우저 열기와 검색
firefox https://www.google.com/chrome

# dpkg 명령어 사용
dpkg -i google-chrome-stable_current_amd64.deb

# sudo 키워드 사용
sudo apt update
sudo apt install vlc

# APT(Advanced Package Tool) 사용
sudo apt upgrade
sudo apt cache search python3

# 패키지 제거
sudo apt remove vlc
```
## 요약
- 기본 브라우저인 Firefox를 열고 Google Chrome 페이지를 검색합니다.
- 다운로드 버튼을 클릭하여 설치 파일을 다운로드합니다.
- dpkg 명령어를 사용하여 패키지를 설치합니다.
- sudo 키워드를 사용하여 관리자 권한으로 명령어를 실행합니다.
- APT(Advanced Package Tool)를 사용하여 패키지 관리를 단순화합니다.
