# [LAB] Rosdep

## 개요
1. **Rosdep 소개**
   - Rosdep는 ROS 2 패키지의 의존성을 자동으로 설치하는 도구입니다.
   - 이 도구를 사용하면 개발자가 각 패키지의 의존성을 수동으로 관리할 필요가 없습니다.

2. **Docker와 Rockstep**
   - Docker는 Rosdep과 함께 사용하여 환경을 일관성 있게 유지하고, 필요한 패키지를 쉽게 설치할 수 있습니다.
   - Rockstep은 Rosdep의 대체 도구로, 전체 워크스페이스를 스캔하여 모든 시스템 의존성을 자동으로 설치합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/50660927#overview)

## 내용
### 1. Rosdep 사용하기
- **VS Code에서 패키지 XML 확인**
  - VS Code를 열고 작업 공간을 파일 탐색기에 추가합니다.
  - `package.xml` 파일은 패키지의 이름, 저자, 버전, 라이선스 등 정보를 포함하고 있습니다.

- **Rosdep 설치**
  - Rosdep을 사용하여 필요한 의존성을 설치할 수 있습니다. 예시 명령어는 다음과 같습니다:
    ```bash
    sudo apt install ros-jazzy-rosdep
    ```
  - 다른 분포에 대해 지원되는 패키지가 있다면 해당 패키지를 사용할 수도 있습니다.

### 2. Rockstep 사용하기
- **Rockstep 초기화**
  - Rockstep을 사용하기 전에 초기화해야 합니다:
    ```bash
    sudo rosdep init
    ```

- **레포지토리 업데이트**
  - 레포지토리 목록을 업데이트합니다:
    ```bash
    rosdep update
    ```

- **모든 의존성 설치**
  - 워크스페이스의 모든 패키지에 대한 의존성을 자동으로 설치합니다:
    ```bash
    sudo rosdep install --from-paths src --ignore-src -r -y
    ```
  - `-r` 옵션은 의존성 트리를 재귀적으로 설치하고, `-y` 옵션은 모든 패키지에 대해 자동으로 확인을 받습니다.

### 3. Docker 사용하기
- **Dockerfile 확인**
  - 레포지토리 내부에서 `Dockerfile`을 확인합니다.

## 예시
- 강의에서 별도의 코드 예시는 다루지 않는다.

## 요약
- **Rosdep 소개**
- Rosdep는 ROS 2 패키지의 의존성을 자동으로 설치하는 도구입니다.
- 이 도구를 사용하면 개발자가 각 패키지의 의존성을 수동으로 관리할 필요가 없습니다.
- **Docker와 Rockstep**
- Docker는 Rosdep과 함께 사용하여 환경을 일관성 있게 유지하고, 필요한 패키지를 쉽게 설치할 수 있습니다.
