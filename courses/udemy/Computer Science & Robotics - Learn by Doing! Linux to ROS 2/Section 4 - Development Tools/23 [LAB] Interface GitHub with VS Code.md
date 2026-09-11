# [LAB] Interface GitHub with VS Code

## 개요
1. Visual Studio Code를 사용하여 GitHub 저장소를 관리하는 방법을 탐구합니다.
2. 저장소 복제, 분기 생성, 코드 수정 및 충돌 해결 등 기본적인 Git 작업을 실습합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/51504563#overview)

## 내용
### 1. 저장소 복제
- Visual Studio Code와 GitHub 페이지를 열고, `robot_command_v2` 저장소를 선택합니다.
- 저장소를 클론하여 로컬에 복제합니다.
- 복제된 저장소를 현재 디렉토리에서 열어줍니다.

### 2. 분기 생성 및 코드 수정
- 새로운 분기를 생성하고, 해당 분기에 코드를 수정합니다.
- 예를 들어, 파일의 특정 줄을 수정하여 충돌을 발생시킵니다.

### 3. 변경 사항 커밋
- 변경된 파일을 추가하고 커밋합니다.
- 메시지를 입력하여 변경 사항을 기록합니다.

### 4. 분기 병합
- 다른 분기를 병합하여 충돌 해결합니다.

## 예시
```bash
# 저장소 클론
git clone git@github.com:your_username/robot_command_v2.git

# 분기 생성 및 이동
git checkout -b new_devel

# 코드 수정
nano your_file.py  # 예시로 your_file.py 파일을 열고 특정 줄 수정

# 변경 사항 추가 및 커밋
git add your_file.py
git commit -m "Added new command"

# 분기 병합
git checkout main
git merge new_devel
```
## 요약
- Visual Studio Code를 사용하여 GitHub 저장소를 관리하는 방법을 탐구합니다.
- 저장소 복제, 분기 생성, 코드 수정 및 충돌 해결 등 기본적인 Git 작업을 실습합니다.
