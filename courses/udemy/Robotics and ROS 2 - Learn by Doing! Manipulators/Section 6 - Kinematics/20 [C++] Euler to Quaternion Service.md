# [C++] Euler to Quaternion Service

## 개요
- ROS 2에서 TF2 라이브러리를 사용하여 오브젝트의 방향성을 쿼터니언에서 오일러 각으로, 또는 그 반대로 변환하는 C++ 서비스 서버를 생성합니다.
- 이 서비스는 로봇 과정 중에 주어진 쿼터니언이나 그 반대로 대응하는 오일러 각을 알고 싶을 때 유용합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/37574622#overview)

## 내용
### 1. 새로운 패키지 생성
- 이전 Python 실습을 따르지 않았다면, 새로운 패키지를 만들어야 합니다.
- `ros2 package create` 명령어를 사용하여 `Arduino bot utils` 패키지를 만듭니다.
- 빌드 타입은 `ament_cmake`로 설정합니다.

### 2. C++ 소스 코드 작성
- `src` 폴더에 새로운 파일 `AngleConversion.cpp`를 생성합니다.
- 이 파일에는 쿼터니언과 오일러 각 간의 변환을 위한 실제 코드가 포함됩니다.

### 3. 서비스 서버 구현
- EC2 노드 내에서 두 개의 서비스 서버를 생성합니다: 하나는 쿼터니언到 오일러, 다른 하나는 오일러到 쿼터니언입니다.
- 기존에 작성한 간단한 서비스 서버 코드를 복사하여 사용합니다.

### 4. 메시지 인터페이스 정의
- `Arduino bot messages` 패키지 내에서 새로운 메시지 인터페이스를 생성합니다: `EulerToQuaternion.srv`와 `QuaternionToEuler.srv`입니다.
- 각 인터페이스는 요청과 응답 메시지를 정의합니다.

### 5. 콜백 함수 구현
- 각 서비스 서버에 대한 콜백 함수를 구현합니다: `euler_to_quaternion_callback`와 `quaternion_to_euler_callback`입니다.
- 쿼터니언과 오일러 각 간의 변환 로직을 작성합니다.

### 6. 노드 실행
- `CMakeLists.txt` 파일을 수정하여 의존성을 추가하고, 노드를 컴파일합니다.
- `build` 명령어로 워크스페이스를 빌드한 후, `angle_conversion` 노드를 실행합니다.

## 예시
- `ros2 service call /euler_to_quaternion "role: -0.5 pitch: 0 yaw: 1.5"` 명령어를 사용하여 오일러 각을 쿼터니언으로 변환할 수 있습니다.
- `ros2 service call /quaternion_to_euler "x: 0 y: 0 z: 0 w: 1"` 명령어를 사용하여 쿼터니언을 오일러 각으로 변환할 수 있습니다.

## 요약
- ROS 2에서 TF2 라이브러리를 사용하여 오일러 각과 쿼터니언 간의 변환 서비스를 구현합니다.
- 새로운 패키지를 생성하고, C
