# [LAB] Gazebo

## 개요
1. Docker를 사용하여 리소스 클론 및 실행
2. ROS 2를 사용한 로봇 기능 시작
3. 시뮬레이터에서 로봇 확인 및 실시간 요인 조정
4. LiDAR 시각화를 통한 거리 측정

- 원본: [Udemy 강의](https://www.udemy.com/course/computer-science-robotics-learn-by-doing-linux-to-ros-2/learn/lecture/52114847#overview)

## 내용
### Docker로 리소스 클론 및 실행
1. **Docker 이미지 실행**
   ```bash
   docker run -it --rm osrf/gazebo-ros:foxy-desktop
   ```
2. **워크스페이스 소스 설정**
   ```bash
   source /opt/ros/foxy/setup.bash
   ```

### ROS 2로 로봇 기능 시작
1. **Bumper Bot 시뮬레이터 실행**
   ```bash
   ros2 launch turtlebot3_gazebo turtlebot3_world.launch.py
   ```
2. **시뮬레이터 확인**
   - Gazebo 시뮬레이터에서 로봇이 정상적으로 생성되었는지 확인

### 실시간 요인 조정
1. **단계 크기 변경**
   - Gazebo 화면 오른쪽의 Entity Tree에서 `Ground` 선택
   - `Element`, `Hop`, `Physics`를 찾아서 단계 크기를 10배로 늘립니다.
   ```bash
   physics: {step_size: 0.1}
   ```
2. **실시간 요인 확인**
   - Gazebo 화면 오른쪽 상단의 Real Time Factor 확인

### LiDAR 시각화
1. **LiDAR 시각화 도구 추가**
   - Gazebo 화면 오른쪽 상단의 `Visualize Lidar` 선택
2. **거리 측정 확인**

## 예시
1. **Docker 실행 명령**
   ```bash
   docker run -it --rm osrf/gazebo-ros:foxy-desktop
   ```
2. **ROS 2 launch 명령**
   ```bash
   ros2 launch turtlebot3_gazebo turtlebot3_world.launch.py
   ```
3. **단계 크기 변경 코드**
   ```yaml
   physics: {step_size: 0.1}
```
## 요약
- Docker를 사용하여 리소스 클론 및 실행
- ROS 2를 사용한 로봇 기능 시작
- 시뮬레이터에서 로봇 확인 및 실시간 요인 조정
- LiDAR 시각화를 통한 거리 측정
