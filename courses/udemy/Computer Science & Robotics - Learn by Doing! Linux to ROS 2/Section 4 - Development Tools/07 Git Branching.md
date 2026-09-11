# Git Branching

## 개요
1. **브랜치의 개념**: Git은 새로운 기능 개발이나 버그 수정을 위해 브랜치를 사용합니다. 브랜치는 메인 라인과 병렬로 진행되며, 개발자가 독립적으로 실험할 수 있습니다.
2. **브랜치의 장점**: 브랜치는 메인 코드에 영향을 미치지 않고 새로운 기능이나 수정을 개발할 수 있으며, 이를 통해 협업 효율성이 향상됩니다.
3. **브랜치 관리**: 브랜치를 생성하고 관리하는 방법을 배우며, 브랜치의 병합과 충돌 해결에 대한 이해도를 높입니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/52475629#overview)

## 내용
### 1. 브랜치 생성 및 확인
- **명령어**:
  ```bash
  git branch <branch_name>
  ```
- **예시**:
  ```bash
  git branch feature_branch
  ```

### 2. 브랜치 이동
- **명령어**:
  ```bash
  git checkout <branch_name>
  ```
- **예시**:
  ```bash
  git checkout feature_branch
  ```

### 3. 새로운 브랜치 생성 및 이동
- **명령어**:
  ```bash
  git checkout -b <branch_name>
  ```
- **예시**:
  ```bash
  git checkout -b bug_fix_branch
  ```

### 4. 브랜치 목록 확인
- **명령어**:
  ```bash
  git branch
  ```
- **예시**:
  ```bash
  git branch
```
## 예시
- 강의의 개념과 적용 맥락은 위 내용에 정리했으며, 구체적인 명령 실습은 관련 실습 강의에서 진행한다.

## 요약
- **브랜치의 개념**: Git은 새로운 기능 개발이나 버그 수정을 위해 브랜치를 사용합니다. 브랜치는 메인 라인과 병렬로 진행되며, 개발자가 독립적으로 실험할 수 있습니다.
- **브랜치의 장점**: 브랜치는 메인 코드에 영향을 미치지 않고 새로운 기능이나 수정을 개발할 수 있으며, 이를 통해 협업 효율성이 향상됩니다.
- **브랜치 관리**: 브랜치를 생성하고 관리하는 방법을 배우며, 브랜치의 병합과 충돌 해결에 대한 이해도를 높입니다.
