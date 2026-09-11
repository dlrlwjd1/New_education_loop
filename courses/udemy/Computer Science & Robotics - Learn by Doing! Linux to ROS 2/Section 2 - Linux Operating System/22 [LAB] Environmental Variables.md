# [LAB] Environmental Variables

## 개요
1. 환경 변수의 기본 개념 이해
2. 터미널에서 환경 변수 설정 방법
3. Bash 파일을 통해 환경 변수 영구화
4. 환경 변수 삭제 및 확인 방법

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/52221207#overview)

## 내용
### 1. 환경 변수의 기본 개념
환경 변수는 Linux 시스템에서 실행되는 프로그램이 공유할 수 있는 설정 정보입니다. 예를 들어, `echo home` 명령어는 `home` 환경 변수의 값을 출력합니다.

### 2. 터미널에서 환경 변수 설정 방법
터미널에서 새로운 환경 변수를 설정하는 방법은 다음과 같습니다:
```bash
export my_var="value"
```
예를 들어, `my_var`라는 이름의 변수에 "Hello" 값을 할당하려면:
```bash
export my_var="Hello"
```

### 3. Bash 파일을 통해 환경 변수 영구화
시스템에서 항상 사용할 수 있도록 환경 변수를 Bash 파일에 추가할 수 있습니다. Bash 파일은 `~/.bashrc` 또는 `~/.bash_profile`입니다.

1. 터미널에서 다음 명령어로 Bash 파일을 열고 편집합니다:
   ```bash
   nano ~/.bashrc
   ```
2. 파일의 끝에 다음과 같은 줄을 추가합니다:
   ```bash
   export my_var="value"
   ```
3. 변경 사항을 저장하고 종료합니다.

### 4. 환경 변수 삭제 및 확인 방법
환경 변수를 삭제하려면 `unset` 명령어를 사용합니다:
```bash
unset my_var
```
변수의 현재 값 확인은 다음과 같습니다:
```bash
echo $my_var
```
## 예시
1. 터미널에서 환경 변수 설정 및 확인:
   ```bash
   export my_var="Hello"
   echo $my_var  # 출력: Hello
   ```
2. Bash 파일에 환경 변수 추가:
   ```bash
   nano ~/.bashrc
   # 파일 끝에 추가: export my_var="Hello"
   source ~/.bashrc
   echo $my_var  # 출력: Hello
   ```
3. 환경 변수 삭제:
   ```bash
   unset my_var
   echo $my_var  # 출력: (빈 값)
```
## 요약
- 환경 변수의 기본 개념 이해
- 터미널에서 환경 변수 설정 방법
- Bash 파일을 통해 환경 변수 영구화
- 환경 변수 삭제 및 확인 방법
