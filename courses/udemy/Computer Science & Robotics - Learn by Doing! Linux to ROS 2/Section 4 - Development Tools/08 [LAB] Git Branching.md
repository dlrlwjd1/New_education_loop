# [LAB] Git Branching

## 개요
1. **브랜치의 기본 개념**: 브랜치는 코드의 병렬 개발을 가능하게 하는 독립적인 작업 공간입니다.
2. **브랜치 관리**: 새로운 브랜치 생성, 기존 브랜치 이동, 브랜치 삭제 등 브랜치를 효과적으로 관리하는 방법.
3. **브랜치 병합**: 두 개의 브랜치에서 작업한 내용을 통합하여 하나의 브랜치로 합치는 과정.
4. **시간 여행 기능**: Git을 사용하여 과거의 코드 버전을 확인하거나, 특정 시점의 코드를 재현하는 방법.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/51268681#overview)

## 내용
### 1. 기본 브랜치 이해
- **브랜치 생성 및 이동**:
  ```bash
  git checkout -b print_timestamp
  ```
  - `print_timestamp`라는 새로운 브랜치를 생성하고 현재 위치로 이동합니다.

- **코드 수정 및 테스트**:
  ```cpp
  #include <chrono>
  #include <ctime>
  #include <iostream>

  for (auto& command : sequence) {
      auto now = std::chrono::system_clock::now();
      std::time_t time = std::chrono::system_clock::to_time_t(now);
      std::cout << "Command executed at: " << std::ctime(&time);
      // 명령어 실행 로직
  }
  ```
  - `print_timestamp` 브랜치에서 시간戳 정보를 출력하는 코드를 추가합니다.

### 2. 브랜치 병합
- **브랜치 병합 과정**:
  ```bash
  git checkout main
  git merge print_timestamp
  ```
  - `main` 브랜치로 이동한 후, `print_timestamp` 브랜치의 변경 사항을 병합합니다.

- **브랜치 삭제**:
  ```bash
  git branch -d print_timestamp
  ```
  - 병합이 완료된 브랜치를 삭제합니다.

### 3. 충돌 관리
- **충돌 발생 시 해결 방법**:
  ```bash
  git merge speed_up_feature
  git merge velocity_feature
  ```

## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

## 요약
- **브랜치의 기본 개념**: 브랜치는 코드의 병렬 개발을 가능하게 하는 독립적인 작업 공간입니다.
- **브랜치 관리**: 새로운 브랜치 생성, 기존 브랜치 이동, 브랜치 삭제 등 브랜치를 효과적으로 관리하는 방법.
- **브랜치 병합**: 두 개의 브랜치에서 작업한 내용을 통합하여 하나의 브랜치로 합치는 과정.
- **시간 여행 기능**: Git을 사용하여 과거의 코드 버전을 확인하거나, 특정 시점의 코드를 재현하는 방법.
