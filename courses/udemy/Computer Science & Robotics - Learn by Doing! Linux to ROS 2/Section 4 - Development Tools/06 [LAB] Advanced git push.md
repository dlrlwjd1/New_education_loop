# [LAB] Advanced git push

## 개요
1. 기존 리포지토리의 재설정과 삭제
2. SSH 인증을 사용한 새로운 리포지토리 생성
3. SSH 키 추가 및 GitHub에 업로드
4. `.gitignore` 파일 사용으로 불필요한 파일 제외

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/51268679#overview)

## 내용
### 1. 기존 리포지토리의 재설정과 삭제
- **작업 순서**:
  1. GitHub 페이지 접속
  2. 설정 -> 위험 영역 섹션에서 리포지토리 삭제
  3. 로컬 폴더에서 `.git` 폴더 제거
- **확인 방법**: `git status` 명령어로 리포지토리 상태 확인

### 2. SSH 인증을 사용한 새로운 리포지토리 생성
- **작업 순서**:
  1. GitHub 페이지에서 새 리포지토리 생성
  2. SSH 인증 선택
  3. 리포지토리 이름 설정 및 비공개로 설정
- **확인 방법**: `git remote -v` 명령어로 리모트 URL 확인

### 3. SSH 키 추가 및 GitHub에 업로드
- **작업 순서**:
  1. SSH 키 생성 (`ssh-keygen -t rsa -b 2048 -C "your_email@example.com"`)
  2. 키 복사 및 GitHub 설정 페이지에 추가
- **확인 방법**: GitHub 계정의 SSH 키 섹션에서 키 확인

### 4. `.gitignore` 파일 사용으로 불필요한 파일 제외
- **작업 순서**:
  1. `.gitignore` 파일 생성 (`touch .gitignore`)
  2. `build` 폴더 추가到 `.gitignore`
  3. 변경 사항 커밋 및 푸시

## 예시
```bash
# 기존 리포지토리 삭제
# GitHub 페이지 접속 -> 설정 -> 위험 영역 섹션 -> 리포지토리 삭제

# 로컬 폴더에서 .git 폴더 제거
rm -rf .git

# SSH 인증을 사용한 새로운 리포지토리 생성
# GitHub 페이지에서 새 리포지토리 생성 -> SSH 인증 선택 -> 리포지토
```
## 요약
- 기존 리포지토리의 재설정과 삭제
- SSH 인증을 사용한 새로운 리포지토리 생성
- SSH 키 추가 및 GitHub에 업로드
- `.gitignore` 파일 사용으로 불필요한 파일 제외
