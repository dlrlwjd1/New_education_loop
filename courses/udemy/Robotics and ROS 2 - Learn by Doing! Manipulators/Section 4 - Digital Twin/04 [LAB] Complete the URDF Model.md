# [LAB] Complete the URDF Model

## 개요
- 2개의 소주제로 구성되어 있습니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/37767104#overview)

## 내용
### 새로운 링크 추가 및 시각화 설정
새로운 링크 "Forward Drive Arm"을 추가하고, 이를 시각화하기 위해 메시지를 연결합니다. 이 메시지는 패키지 내의 STL 파일을 사용하여 렌더링됩니다. 또한, 이 링크는 X, Y, Z 방향으로 0.01 배율로 스케일링되며, 오리진은 -90도 회전 후 0.19, 0.06, -0.08의 위치를 가지도록 설정됩니다.

### 링크 연결 및 관절 설정
새로운 링크 "Forward Drive Arm"을 기존의 "Base Plate" 링크에 연결합니다. 이는 회전형 관절(revolute joint)으로 설정되며, X축이 회전축이며, 오리진은 -0.02, 0, 0.35의 위치를 가지도록 설정됩니다. 또한, 이 관절에는 동일한 모터로 작동하는 경우와 같이 같은 메커니컬 및 기계적 제한을 적용합니다.

## 예시
원문의 대표적인 코드는 다음과 같습니다:
```xml
<link name="forward_drive_arm">
  <visual>
    <geometry>
      <mesh filename="package://arduino_bot_description/meshes/forward_drive.stl"/>
    </geometry>
    <origin rpy="0 1.5708 -1.5708" xyz="-0.19 0.06 -0.08"/>
  </visual>
</link>

<joint name="joint_two" type="revolute">
  <parent link="base_plate"/>
  <child link="forward_drive_arm"/>
  <origin rpy="0 0 0" xyz="-0.02 0 0.35"/>
  <axis xyz="1 0 0"/>
</joint>
```

## 요약
- 새로운 링크 "Forward Drive Arm"을 추가하고 시각화 설정합니다.
- 이 링크를 기존의 "Base Plate" 링크에 회전형 관절로 연결합니다.
- 동일한 모터로 작동하는 경우와 같이 같은 메커니컬 및 기계적 제한을 적용합니다.
