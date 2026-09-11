# [LAB] Edit a Text File

## 개요
1. 텍스트 파일을 편집하는 방법에 대해 학습합니다.
2. Vim과 Nano 두 가지 텍스트 에디터를 사용하여 파일을 편집하는 방법을 실습합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/52144219#overview)

## 내용
### Vim 텍스트 에디터 사용
1. **Vim 설치**
   - Ubuntu 24.04에 Vim이 기본으로 설치되어 있지 않으므로, 설치해야 합니다.
   ```bash
   sudo apt update
   sudo apt install vim
   ```

2. **Vim 실행**
   - 파일을 편집하려면 `vim` 명령어를 사용합니다.
   ```bash
   vim filename.txt
   ```

3. **Vim에서 텍스트 편집**
   - 텍스트를 입력하기 전에 `i` 키를 눌러 삽입 모드로 진입합니다.
   - 텍스트를 입력한 후, `Esc` 키를 눌러 삽입 모드를 종료합니다.

4. **Vim에서 파일 저장 및 종료**
   - `:wq` 명령어를 사용하여 파일을 저장하고 Vim을 종료합니다.

### Nano 텍스트 에디터 사용
1. **Nano 설치**
   - Ubuntu 24.04에 Nano가 기본으로 설치되어 있지 않으므로, 설치해야 합니다.
   ```bash
   sudo apt update
   sudo apt install nano
   ```

2. **Nano 실행**
   - 파일을 편집하려면 `nano` 명령어를 사용합니다.
   ```bash
   nano filename.txt
   ```

3. **Nano에서 텍스트 편집**
   - 텍스트를 입력할 수 있습니다.

4. **Nano에서 파일 저장 및 종료**
   - `Ctrl + X`를 눌러 Nano를 종료하고, 변경 사항이 있으면 `Y`를 눌러 저장합니다.

### 기타 텍스트 에디터
1. **Gedit 사용**
   - Gedit은 GNOME 데스크톱 환경용 그래픽 텍스트 에디터입니다.
   ```bash
   gedit filename.txt &
   ```

2. **Echo 명령어 사용**
   - `echo` 명령어를 사용하여 텍스트 파일을 생성하거나 단일 줄을 추가할 수 있습니다.
   ```bash
   echo "Hello, ICO" > filename.txt
```
## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

## 요약
- 텍스트 파일을 편집하는 방법에 대해 학습합니다.
- Vim과 Nano 두 가지 텍스트 에디터를 사용하여 파일을 편집하는 방법을 실습합니다.
