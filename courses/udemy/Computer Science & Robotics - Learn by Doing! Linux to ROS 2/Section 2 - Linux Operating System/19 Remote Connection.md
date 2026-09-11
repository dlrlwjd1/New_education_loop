# Remote Connection

## 개요
1. **네트워크 통신 관리**: Linux를 사용하여 네트워크 통신을 관리하는 방법에 대해 배움.
2. **원격 접속의 중요성**: 인터넷 연결된 장치와 현대 컴퓨팅에서 모든 네트워크와 원격 커뮤니케이션에 필수적임.
3. **SSH 사용**: SSH를 통해 안전한 원격 접속을 가능하게 함.
4. **파일 전송**: SCP와 FTP를 사용하여 파일을 안전하게 전송하는 방법.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/50106503#overview)

## 내용
### SSH (Secure Shell)
- **개요**: 네트워크 프로토콜로서, 장치 간에 암호화된 연결을 설정하여 안전한 원격 컴퓨터 명령어 전송 가능.
- **구성 요소**:
  - **서버**: 원격 호스트에서 실행되는 프로세스 (예: 로봇).
  - **클라이언트**: 로컬 머신에서 실행됨 (예: PC).

### SCP (Secure Copy Protocol)
- **개요**: SSH를 기반으로 하는 파일 복사 도구.
- **사용 예시**:
  ```bash
  scp /path/to/local/file username@remote_host:/path/to/remote/directory
  ```

### FTP (File Transfer Protocol)
- **개요**: 파일 전송을 위한 오래된 프로토콜, 별도의 FTP 서버 프로그램이 필요함.
- **구성 요소**:
  - **FTP 서버**: 원격 호스트에서 실행됨 (예: 로봇).
  - **FTP 클라이언트**: PC에서 실행됨 (예: FileZilla).

### FTPS (FTP over SSH)
이 소절의 본문은 수집되지 않았다. Udemy 자막 원문을 확보한 뒤 보완해야 한다.

## 예시
- 강의의 개념과 적용 맥락은 위 내용에 정리했으며, 구체적인 명령 실습은 관련 실습 강의에서 진행한다.

## 요약
- **네트워크 통신 관리**: Linux를 사용하여 네트워크 통신을 관리하는 방법에 대해 배움.
- **원격 접속의 중요성**: 인터넷 연결된 장치와 현대 컴퓨팅에서 모든 네트워크와 원격 커뮤니케이션에 필수적임.
- **SSH 사용**: SSH를 통해 안전한 원격 접속을 가능하게 함.
- **파일 전송**: SCP와 FTP를 사용하여 파일을 안전하게 전송하는 방법.
