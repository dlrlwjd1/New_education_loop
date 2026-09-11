# [LAB] Create the URDF Model

## 개요
- ROS 2 패키지 생성
- URDF 모델 파일 작성
- 3D 모델 추가
- URDF 모델 시각화

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/36847122#overview)

## 내용
### 패키지 생성
1. Arduino bot workspace 내에 새로운 Ros 2 패키지를 생성합니다.
   ```bash
   ros2 pkg create --build-type ament_cmake arduino_bot_description
   ```
2. `Arduino_bot_description` 패키지 내에 `Urdf` 폴더와 `Meshes` 폴더를 생성합니다.

### URDF 모델 파일 작성
1. `arduino_bot_description/urdf/arduino_bot.urdf.xacro` 파일을 생성하고, XML 형식으로 URDF 모델을 작성합니다.
   ```xml
   <?xml version="1.0"?>
   <robot name="arduino_bot" xmlns:xacro="http://www.ros.org/wiki/xacro">
     <link name="world"/>
     <link name="base_link">
       <visual>
         <geometry>
           <mesh filename="package://arduino_bot_description/meshes/base.stl"/>
         </geometry>
         <origin rpy="0 0 0" xyz="0 0 0"/>
       </visual>
     </link>
     <joint name="virtual_joint" type="fixed">
       <parent link="world"/>
       <child link="base_link"/>
       <origin rpy="0 0 0" xyz="0 0 0"/>
     </joint>
   </robot>
   ```

### 3D 모델 추가
1. `arduino_bot_description/meshes` 폴더 내에 STL 파일을 복사합니다.

### URDF 모델 시각화
1. `CMakeLists.txt` 파일에서 `Meshes`와 `Urdf` 폴더를 설치하도록 설정합니다.
   ```cmake
   install(DIRECTORY urdf DESTINATION share/${PROJECT_NAME})
   install(DIRECTORY meshes DESTINATION share/${PROJECT_NAME})
   ```
2. 새로운 터미널을 열고, 작업 공간을 빌드하고, URDF 모델을 시각화합니다.
   ```bash
   source setup.bash
   ros2 launch urdf_tutorial display.launch.py model:="package://arduino_bot_description/urdf/arduino_bot.urdf.xacro"
   ```

## 예시
- `ros2 pkg create --build-type ament_cmake arduino_bot_description`
- `mkdir -p arduino_bot_description/urdf arduino_bot_description/meshes`
- `nano arduino_bot_description/urdf/arduino_bot.urdf.xacro`
- `CMakeLists.txt` 파일 수정
- `source setup.bash`
- `ros2 launch urdf_tutorial display.launch.py model:="package://arduino_bot_description/urdf/arduino_bot.urdf.xacro"`

## 요약
- ROS 2 패키지 생성 및 URDF 모델 작성
- 3D 모델 추가
- URDF 모델 시각화
