# [LAB] Install Docker on Ubuntu

## 개요
1. Docker 플랫폼에 대해 소개합니다.
2. Ubuntu 시스템에서 Docker를 설치하는 방법을 실습합니다.
3. APT 패키지 관리자를 사용하여 Docker를 설치하는 과정을 설명합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/50287357#overview)

## 내용
### 1. APT 패키지 관리자 소개
- APT(Aptitude Package Tool)는 Ubuntu의 패키지 관리자입니다.
- 이전 강의에서 이미 배운 내용이므로 실습에 활용하겠습니다.

### 2. Docker 설치 단계
1. **패키지 목록 업데이트**
   ```bash
   sudo apt update
   ```
   - `apt`와 `apt-get`은 동일한 역할을 하지만, `apt`이 더 최신 버전입니다.

2. **필요한 패키지 설치**
   ```bash
   sudo apt install ca-certificates curl
   ```
   - `ca-certificates`: HTTPS 프로토콜을 통해 원격 서버를 안전하게 인증합니다.
   - `curl`: 웹에서 파일을 다운로드하는 데 사용됩니다.

3. **GPG 키ring 생성**
   ```bash
   sudo mkdir -p /etc/apt/keyrings
   ```

4. **Docker GPG 키 다운로드**
   ```bash
   curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
   ```

5. **권한 설정**
   ```bash
   sudo chmod a+r /etc/apt/keyrings/docker.gpg
   ```

6. **Docker APT 저장소 추가**
   ```bash
   echo \
     "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
     $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
   ```

7. **APT 저장소 업데이트**
   ```bash
   sudo apt update
   ```

8. **Docker 패키지 설치**
   ```bash
   sudo apt install docker-ce docker-ce-cli containerd.io
   ```
   - `docker-ce`: Docker 엔진
   - `docker-ce-cli`: Docker 명령행 인터페이스

## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

## 요약
- Docker 플랫폼에 대해 소개합니다.
- Ubuntu 시스템에서 Docker를 설치하는 방법을 실습합니다.
- APT 패키지 관리자를 사용하여 Docker를 설치하는 과정을 설명합니다.
