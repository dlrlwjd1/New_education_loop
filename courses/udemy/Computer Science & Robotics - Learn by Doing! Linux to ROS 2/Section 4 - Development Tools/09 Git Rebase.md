# Git Rebase

## 개요
1. **Git Fetch와 Git Rebase의 이해**
2. **실제 사례를 통한 학습**
3. **Git Fetch와 Git Rebase의 차이점**
4. **Rebase 과정과 결과**

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/52476333#overview)

## 내용
### 1. Git Fetch 이해
- **개요**: `git fetch`는 원격 저장소에서 최신 변경사항을 다운로드하지만, 로컬 저장소에 병합하지 않습니다.
- **구체적 예시**:
  ```bash
  git fetch origin
  ```
  이 명령어는 `origin`이라는 이름의 원격 저장소에서 모든 변경사항을 가져옵니다.

### 2. Git Rebase 이해
- **개요**: `git rebase`는 특정 브랜치를 다른 브랜치의 최신 커밋 위로 이동시킵니다.
- **구체적 예시**:
  ```bash
  git rebase main
  ```
  이 명령어는 현재 작업 중인 브랜치를 `main` 브랜치의 가장 최근 커밋 위로 이동시킵니다.

### 3. Git Fetch와 Git Rebase의 차이점
- **개요**: `git fetch`는 변경사항을 가져오지만 병합하지 않음, 반면 `git rebase`는 변경사항을 가져온 후 현재 브랜치를 해당 브랜치 위로 이동시킴.
- **구체적 예시**:
  ```bash
  git fetch origin
  git rebase main
  ```
  먼저 `git fetch`로 원격 저장소의 최신 변경사항을 가져온 후, `git rebase`로 현재 브랜치를 `main` 브랜치 위로 이동시킵니다.

### 4. Rebase 과정과 결과
- **개요**: `git rebase`는 변경사항이 순차적으로 적용되므로, 새로운 커밋이 생성됩니다.
- **구체적 예시**:
  ```bash
  git rebase main
  ```

## 예시
- 강의의 개념과 적용 맥락은 위 내용에 정리했으며, 구체적인 명령 실습은 관련 실습 강의에서 진행한다.

## 요약
- **Git Fetch와 Git Rebase의 이해**
- **실제 사례를 통한 학습**
- **Git Fetch와 Git Rebase의 차이점**
- **Rebase 과정과 결과**
