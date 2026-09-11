# [LAB] Git Rebase

## 개요
1. **Git Rebase 이해**
2. **Rebase의 장단점**
3. **실습: Rebase 실천**

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/51268685#overview)

## 내용
### 1. Git Rebase 이해
- **개요**: Git rebase는 기존의 commit 히스토리를 재구성하는 도구로, 새로운 변경사항을 기존 브랜치에 더 쉽게 통합할 수 있게 해줍니다.
- **이유**: 다른 개발자와 협업할 때, 가장 최신 코드를 반영하고, 깔끔한 선형 히스토리를 유지하기 위해 사용됩니다.

### 2. Rebase의 장단점
- **장점**:
  - 히스토리가 깔끔해지며, 병합 커밋이 없어져 코드 리뷰와 충돌 해결이 더 쉽습니다.
  - 새로운 기능을 빠르게 통합할 수 있습니다.
- **단점**:
  - 다른 사람의 작업에 rebase를 적용하면, 그들의 히스토리가 변경되므로 협업 중인 프로젝트에서 사용해야 합니다.

### 3. 실습: Rebase 실천
1. **Rebase 준비**
   ```bash
   git checkout main
   git pull origin main
   ```
   - `main` 브랜치에 최신 변경사항을 가져옵니다.

2. **새로운 브랜치 생성**
   ```bash
   git checkout -b devel
   ```
   - `devel` 브랜치를 생성하고 이동합니다.

3. **변경사항 추가**
   ```bash
   echo "void newFunction() { return 0; }" >> command_sequence.cpp
   git add command_sequence.cpp
   git commit -m "new function added"
   ```
   - `command_sequence.cpp` 파일에 새로운 함수를 추가하고 커밋합니다.

4. **다른 브랜치에서 변경사항**
   ```bash
   git checkout main
   echo "reset" >> command_sequence.cpp
   git add command_sequence.cpp
   git commit -m "reset added"
   ```
   - `main` 브랜치에서 새로운 변경사항을 추가하고 커밋합니다.

5. **Rebase 실천**
   ```bash
   git checkout devel
   git rebase main
   ```

## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

## 요약
- **Git Rebase 이해**
- **Rebase의 장단점**
- **실습: Rebase 실천**
