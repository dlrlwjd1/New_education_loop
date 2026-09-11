# [LAB] Advanced Bash Concepts

## 개요
1. Bash의 기본적인 사용법을 이해하고 확장하여 더 효율적인 스크립팅과 상호작용을 가능하게 합니다.
2. 다른 쉘(Shell)을 설치하고 사용하는 방법을 배웁니다.
3. grep, awk, sed와 같은 고급 명령어를 활용하여 텍스트 처리를 효율적으로 수행합니다.
4. 파일 및 디렉토리의 정보를 검색하고 필터링하는 기술을 익힙니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/50106517#overview)

## 내용
### 1. 다른 쉘(Shell) 설치 및 사용
- Bash 외에도 dish, fish 등의 다른 쉘이 있습니다.
- dish와 fish를 설치하여 기본적인 사용법을 알아봅니다.

#### dish 설치 및 실행
```bash
sudo apt install dish
dish
```
- 처음 실행 시 dish 설정에 대한 질문이 나타납니다. 현재는 종료합니다.

#### fish 설치 및 실행
```bash
sudo apt install fish
fish
```
- fish는 사용자 친화적인 쉘로, bash와 비교해 더 많은 기능을 제공합니다.

### 2. 고급 명령어 활용
- grep: 텍스트 검색에 사용되는 명령어입니다.
- awk: 구조化的 텍스트를 필드별로 처리하는 명령어입니다.
- sed: 텍스트의 특정 부분을 수정하거나 삭제하는 명령어입니다.

#### grep 사용 예시
```bash
grep my_var .bashrc
```
- `.bashrc` 파일에서 `my_var`라는 변수의 값을 찾습니다.

#### awk 사용 예시
```bash
awk -F, '{print $1, $3}' person.txt
```
- `person.txt` 파일에서 이름과 나이만 출력합니다.

#### sed 사용 예시
```bash
sed 's/,//g' person.txt > person_no_comma.txt
```
- `person.txt` 파일의 콤마를 제거하고 새로운 파일에 저장합니다.

### 3. 파일 및 디렉토리 정보 검색
- ps: 현재 실행 중인 프로세스를 보여주는 명령어입니다.
- grep과 pipe를 사용하여 특정 프로세스를 찾고 종료하는 방법을 배웁니다.

#### ps와 grep 사용 예시
```bash
ps ux | grep logs
```
- `logs`라는 이름의 프로세스를 찾아냅니다.

#### kill 명령어 사용 예시
```bash
kill -9
```
## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

## 요약
- Bash의 기본적인 사용법을 이해하고 확장하여 더 효율적인 스크립팅과 상호작용을 가능하게 합니다.
- 다른 쉘(Shell)을 설치하고 사용하는 방법을 배웁니다.
- grep, awk, sed와 같은 고급 명령어를 활용하여 텍스트 처리를 효율적으로 수행합니다.
- 파일 및 디렉토리의 정보를 검색하고 필터링하는 기술을 익힙니다.
