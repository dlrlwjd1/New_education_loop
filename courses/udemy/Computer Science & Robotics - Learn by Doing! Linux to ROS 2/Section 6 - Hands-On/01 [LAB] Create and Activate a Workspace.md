# [LAB] Create and Activate a Workspace

## 개요
1. 워크스페이스를 생성하고 설정합니다.
2. 새로운 터미널을 열고 Bumper Bot Workspace라는 이름의 폴더를 만듭니다.
3. 소스 폴더 내에 모든 코드와 패키지를 저장할 것입니다.
4. Ros2 오버레이를 설정하여 새로운 패키지와 코드가 사용 가능하도록 합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/49933305#overview)

## 내용
### 1. 워크스페이스 생성
새로운 터미널을 열고 다음 명령어를 실행하여 Bumper Bot Workspace 폴더를 만듭니다.
```bash
mkdir -p bumper_pool_workspace/src
```
이 명령어는 `bumper_pool_workspace`라는 이름의 폴더와 그 안에 `src`라는 하위 폴더를 생성합니다.

### 2. 패키지 초기화
워크스페이스 내에서 Ros2 오버레이를 설정하여 새로운 패키지와 코드가 사용 가능하도록 합니다.
```bash
cd bumper_pool_workspace
colcon build
```
`colcon build` 명령어는 소스 폴더 내의 모든 패키지를 빌드하고, `build`, `install`, `log` 폴더를 생성합니다.

### 3. 패키지 생성
워크스페이스의 `src` 폴더 내에 새로운 패키지를 생성합니다.
```bash
cd src
ros2 pkg create --build-type ament_python my_python_package
ros2 pkg create --build-type ament_cmake my_cpp_package
```
위 명령어는 Python과 C++로 구성된 두 개의 패키지를 각각 생성합니다.

### 4. 워크스페이스 활성화
워크스페이스를 활성화하여 Ros2가 새로운 패키지를 인식하도록 합니다.
```bash
source install/setup.bash
```
이 명령어는 현재 터미널 세션에 새로운 오버레이를 적용합니다.

### 5. 패키지 확인
Ros2가 인식한 모든 패키지를 확인합니다.
```bash
ros2 pkg list
```

## 예시
1. **워크스페이스 생성**
   ```bash
   mkdir -p bumper_pool_workspace/src
   ```

## 요약
- 워크스페이스를 생성하고 설정합니다.
- 새로운 터미널을 열고 Bumper Bot Workspace라는 이름의 폴더를 만듭니다.
- 소스 폴더 내에 모든 코드와 패키지를 저장할 것입니다.
- Ros2 오버레이를 설정하여 새로운 패키지와 코드가 사용 가능하도록 합니다.
