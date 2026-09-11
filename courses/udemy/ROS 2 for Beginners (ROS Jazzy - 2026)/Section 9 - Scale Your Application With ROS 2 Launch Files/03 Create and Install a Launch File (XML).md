# Create and Install a Launch File (XML)

## 개요

- 전용 bringup 패키지에 XML 런치 파일을 만들고 여러 노드를 한 명령으로 실행한다.
- 유형: 동영상
- 길이: 14분
- 원문: [Udemy 강의](https://www.udemy.com/course/ros2-for-beginners/learn/lecture/21306510#overview)

## 내용

- 인터페이스를 전용 패키지에 모았던 것처럼 런치 파일과 YAML 설정은 `<application>_bringup` 패키지에 모으는 것이 일반적인 구조다.
- `my_robot_bringup` 패키지에 `launch/` 디렉터리를 만들고 CMake가 해당 디렉터리를 설치하도록 설정한다.
- XML 런치 파일은 최상위 `<launch>` 요소 안에 실행할 노드를 `<node>` 요소로 나열한다.
- 각 노드는 터미널에서 `ros2 run <package> <executable>`을 실행할 때와 같은 패키지명과 실행 파일명을 사용한다.
- 다른 패키지의 노드를 실행하므로 bringup 패키지의 `package.xml`에 실행 의존성(`exec_depend`)을 기록한다.
- 빌드와 소싱 후 `ros2 launch`를 실행하고 `ros2 node list`, `ros2 topic list`로 두 노드와 토픽이 시작됐는지 확인한다.

## 예시

```bash
cd ~/ros2_ws/src
ros2 pkg create my_robot_bringup --build-type ament_cmake
mkdir -p my_robot_bringup/launch
```

```cmake
install(DIRECTORY launch
  DESTINATION share/${PROJECT_NAME}
)
```

```xml
<launch>
  <node pkg="my_py_pkg" exec="number_publisher"/>
  <node pkg="my_cpp_pkg" exec="number_counter"/>
</launch>
```

```bash
colcon build --packages-select my_robot_bringup
source install/setup.bash
ros2 launch my_robot_bringup number_app.launch.xml
```

## 요약

- 런치 파일은 여러 `ros2 run` 명령을 하나의 재현 가능한 애플리케이션 시작 절차로 묶는다.
- `launch/` 디렉터리를 CMake로 설치해야 `ros2 launch`가 파일을 찾을 수 있다.
- 런치 파일에서 사용하는 패키지는 bringup 패키지의 실행 의존성으로 선언한다.
