# 과제 2 - Simulate an RGB Camera in Gazebo

## 개요

- 로봇에 부착한 RGB 카메라를 Gazebo에서 시뮬레이션하고, 영상과 카메라 정보를 ROS 2 토픽으로 전달한다.
- 예상 소요 시간: 60분.
- 원본: [Udemy 과제 지침](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/practice/1510328/introduction)
- 확인일: 2026-09-06 · Chrome 확장에서 실제 과제 지침 확인. 답안은 제출하지 않았다.

## 내용

### 사전 준비

이전 과제에서 만든 `rgb_camera` 링크가 로봇 URDF에 있어야 한다. 먼저 아래 명령으로 기존 Gazebo 시뮬레이션이 정상 실행되는지 확인한다. 문제가 있다면 URDF와 런치 파일을 점검한다.

```bash
ros2 launch arduinobot_description gazebo.launch.py
```

### 물리 모델과 센서 설정

- `rgb_camera` 링크에 `<collision>`을 추가한다. 과제는 `<visual>`의 형상을 재사용할 수 있다고 안내한다.
- `<inertial>`을 추가하고 질량을 `0.001`로 지정한다.
- URDF에 `<gazebo>`와 그 안의 `<sensor>` 설정을 추가해 카메라를 시뮬레이션한다.
- 과제가 연결한 `ros_gz_sim_demos`의 `camera.launch.py` 예제와 ROS 2 카메라 안내를 참고한다.

과제에서 요구하는 카메라 설정은 다음과 같다.

| 항목 | 과제 지정값 |
|---|---|
| 해상도 | 2304 × 1296 |
| 프레임률 | 30 FPS |
| 수평 시야각 | 66° · 약 1.15 rad |
| 수직 시야각 | 41° · 약 0.71 rad |
| 카메라 이름 | `camera` |
| 프레임 ID | `/rgb_camera` |
| 네임스페이스 | 사용하지 않음 |

### ROS 2 인터페이스

`image_raw`와 `camera_info` 토픽 이름을 사용한다. 과제 원문은 각각 같은 이름으로 remap하라고 적고 있으며, 여기서는 다른 이름으로 추측해 바꾸지 않았다. `gazebo.launch.py`의 `parameter_bridge` 노드에 `/image_raw`와 `/camera_info`를 포함한다.

### 결과 확인과 제출 요구

`ros2 topic list`로 카메라 토픽이 나타나는지 확인한다. RViz2에 Image 디스플레이를 추가하고 Fixed Frame을 `base_link`로 지정한 뒤 `/image_raw` 영상이 보이는지 확인한다.

과제는 다음 내용을 제출하도록 요구한다.

1. 추가한 `<collision>`, `<inertial>`을 포함한 `rgb_camera` 링크.
2. `<sensor>`를 포함한 `<gazebo>` 설정.
3. `<plugin>`을 포함한 `<gazebo>` 설정.
4. `gazebo.launch.py`의 `gz_ros2_bridge` 노드 내용.

지침에는 `parameter_bridge`와 `gz_ros2_bridge`라는 표기가 함께 나온다. 제공된 참조 런치 파일과 사용 중인 Gazebo·ROS 2 구성에 맞춰 확인해야 한다. 리소스에는 `arduinobot.urdf.xacro`가 연결되어 있다.

## 예시

과제의 검증 명령:

```bash
ros2 launch arduinobot_description gazebo.launch.py
# 다른 터미널에서
ros2 topic list
```

- [강의가 연결한 Gazebo 런치 파일](https://github.com/AntoBrandi/Robotics-and-ROS-2-Learn-by-Doing-Manipulators/blob/main/Section4_Digital_Twin/arduinobot_ws/src/arduinobot_description/launch/gazebo.launch.py)
- [강의가 연결한 카메라 데모 안내](https://github.com/gazebosim/ros_gz/tree/ros2/ros_gz_sim_demos#camera)

위 링크는 과제에서 제공한 참고 자료이며, 이 노트는 과제 지침을 정리한 것으로 구현 답안은 포함하지 않는다.

## 요약

- 카메라 링크의 충돌·관성 정보와 Gazebo 센서 설정을 추가한다.
- 영상과 카메라 정보 토픽을 ROS 2로 연결한다.
- 토픽 목록과 RViz2 영상으로 결과를 확인한다.
