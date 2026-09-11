# [LAB] Work in Collaboration

## 개요
1. GitHub에서 리포지토리를 포크하는 방법
2. 포크한 리포지토리와 원래 리포지토리 간의 연결 관리
3. 협업자 추가 및 리포지토리에 대한 직접 접근 권한 부여
4. 풀 리퀘스트를 통해 변경 사항 제안 및 검토

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/52506363#overview)

## 내용
### 1. 리포지토리 포크하기
- 로봇 계정으로 로그인합니다.
- 포크할 리포지토리를 선택합니다 (예: Hello World 리포지토리).
- 포크 버튼을 클릭합니다.
- 포크된 리포지토리는 사용자의 GitHub 계정 공간에 위치하게 됩니다.
- Create Fork 버튼을 클릭하여 프로세스를 완료합니다.

### 2. 포크한 리포지토리 복제하기
- Git clone 명령어를 사용하여 새로운 리포지토리를 복제합니다.
- 변경 사항을 만들고 푸시합니다 (예: "Hello world" 메시지를 변경).
- git add, git commit, git push 명령어를 사용하여 변경 사항을 푸시합니다.

### 3. 원래 리포지토리와의 동기화
- 원래 리포지토리를 업데이트하기 위해 upstream을 추가합니다.
- git remote add upstream [원래 리포지토리 주소] 명령어를 사용하여 upstream을 설정합니다.
- git remote 명령어로 upstream이 제대로 추가되었는지 확인합니다.

### 4. 풀 리퀘스트 생성
- 원래 리포지토리를 수정하고 변경 사항을 포크한 리포지토리에 제안합니다.
- Pull Request를 생성하기 위해 GitHub 페이지에서 New Pull Request 버튼을 클릭합니다.

## 예시
### 포크한 리포지토리 복제
```bash
git clone https://github.com/yourusername/forked-repo.git
cd forked-repo
```

### 풀 리퀘스트 생성
1. GitHub 페이지에서 Pull Request를 클릭합니다.
2. "Compare changes" 섹션에서 변경 사항이 포함된 브랜치를 선택합니다.

## 요약
- GitHub에서 리포지토리를 포크하는 방법
- 포크한 리포지토리와 원래 리포지토리 간의 연결 관리
- 협업자 추가 및 리포지토리에 대한 직접 접근 권한 부여
- 풀 리퀘스트를 통해 변경 사항 제안 및 검토
