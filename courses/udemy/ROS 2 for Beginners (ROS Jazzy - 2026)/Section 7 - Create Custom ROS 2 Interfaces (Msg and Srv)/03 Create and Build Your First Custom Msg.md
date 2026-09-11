# Create and Build Your First Custom Msg

## 개요

- 전용 인터페이스 패키지에 사용자 정의 메시지(msg)를 만들고 빌드한 뒤 CLI에서 확인한다.
- 유형: 동영상
- 길이: 12분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21306056#overview)
- 첨부 자료: Code template for custom messages

## 내용

- 커스텀 인터페이스를 일반 노드 패키지에 흩어 놓지 않고 `<application>_interfaces` 형태의 전용 패키지에 모으면 의존성을 관리하기 쉽다.
- `my_robot_interfaces` 패키지를 만들고 `package.xml`과 `CMakeLists.txt`에 ROS 인터페이스 생성기 의존성을 등록한다.
- 패키지 루트에 `msg/` 디렉터리를 만들고 PascalCase 이름의 `.msg` 파일을 작성한다.
- 메시지 파일에는 필요한 필드와 ROS 2 기본 타입을 선언한다.
- 새 메시지를 추가할 때마다 `rosidl_generate_interfaces()`에 파일 경로를 등록해야 한다.
- 인터페이스 패키지만 다시 빌드하고 환경을 소싱한 뒤 `ros2 interface show`로 생성 결과를 확인한다.

## 예시

```bash
cd ~/ros2_ws/src
ros2 pkg create my_robot_interfaces
cd ~/ros2_ws
colcon build --packages-select my_robot_interfaces
source install/setup.bash
ros2 interface show my_robot_interfaces/msg/HardwareStatus
```

```cmake
find_package(rosidl_default_generators REQUIRED)

rosidl_generate_interfaces(${PROJECT_NAME}
  "msg/HardwareStatus.msg"
)

ament_export_dependencies(rosidl_default_runtime)
```

## 요약

- 커스텀 메시지는 재사용 가능한 전용 인터페이스 패키지에 둔다.
- `.msg` 파일 생성만으로는 부족하며 패키지 메타데이터와 CMake 생성 규칙을 함께 설정해야 한다.
- 빌드와 소싱 후 `ros2 interface show`에서 보이지 않으면 다른 노드에서도 해당 메시지를 사용할 수 없다.
