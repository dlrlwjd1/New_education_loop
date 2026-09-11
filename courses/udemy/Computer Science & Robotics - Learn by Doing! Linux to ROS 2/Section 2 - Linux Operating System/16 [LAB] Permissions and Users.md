# [LAB] Permissions and Users

## 개요
1. 파일 확장자와 유저 관리에 대한 이해
2. 파일 권한 설정과 변경 방법
3. sudo 명령어를 사용하여 관리자 권한 획득
4. 새로운 유저 및 그룹 생성

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/52149083#overview)

## 내용
### 1. 파일 확장자와 유저 관리
- **파일 확장자**: Linux에서의 파일 확장자는 의미가 없으며, 시스템이 파일을 처리하는 방식에 영향을 미치지 않습니다.
- **유저 및 그룹**: Linux에서 유저는 계정으로, 각 유저는 홈 디렉토리와 고유한 ID를 가집니다. 기본적으로 유저 생성시 동일 이름의 그룹도 생성됩니다.

### 2. 파일 권한 설정
- **파일 권한 확인**: `ls -l` 명령어로 파일의 권한을 확인할 수 있습니다.
  ```bash
  ls -l my_file.txt
  ```
  출력 예시:
  ```
  -rw-r--r-- 1 robot robot 0 Jan  1 00:00 my_file.txt
  ```
  - 첫 번째 문자는 파일 유형 (파일이면 `-`, 디렉토리면 `d`)
  - 다음 세 개의 문자는 소유자 권한 (rwx)
  - 다음 세 개의 문자는 그룹 권한 (r-x)
  - 마지막 세 개의 문자는 기타 사용자 권한 (r--)

### 3. sudo 명령어
- **sudo**: 관리자 권한을 가진 유저가 특정 명령어를 실행할 수 있게 해주는 명령어입니다.
  ```bash
  sudo rm my_file.txt
  ```
  패스워드 입력 후 파일 삭제 가능합니다.

### 4. 새로운 유저 및 그룹 생성
- **유저 추가**: `sudo adduser username` 명령어로 새로운 유저를 추가할 수 있습니다.
  ```bash
  sudo adduser alice
  ```

## 예시
### 파일 권한 변경 예시
1. 파일에 읽기 및 쓰기 권한 추가:
   ```bash
   chmod u+rw my_file.txt
   ```
2. 다른 사용자에게 읽기 권한 제거:
   ```bash
   chmod o-r my_file.txt
   ```

### sudo 명령어 예시
이 소절의 본문은 수집되지 않았다. Udemy 자막 원문을 확보한 뒤 보완해야 한다.

## 요약
- 파일 확장자와 유저 관리에 대한 이해
- 파일 권한 설정과 변경 방법
- sudo 명령어를 사용하여 관리자 권한 획득
- 새로운 유저 및 그룹 생성
