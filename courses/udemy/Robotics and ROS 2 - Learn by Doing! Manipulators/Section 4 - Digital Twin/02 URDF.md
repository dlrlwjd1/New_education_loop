# URDF

## 개요
- URDF는 로봇의 구조와 구성 요소를 XML 태그를 통해 표현하는 데 사용되는 표준입니다.
- 이 문서에서는 URDF를 사용하여 로봇을 모델링하는 방법에 대해 설명합니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/36847120#overview)

## 내용
### Robot Structure Definition
- 로봇의 구조는 항상 먼저 정의됩니다.
- 로봇의 모델과 각 구성 요소가 어떻게 연결되어 있는지 정의합니다.
- 고정된 구성 요소와 이동 가능한 구성 요소, 그리고 로봇의 잠재적인 센서 위치를 지정합니다.

### URDF Convention
- Rosco는 Urdf 규칙을 사용하여 로봇의 구조와 구성 요소를 XML 태그를 통해 표현합니다.
- Urdf는 로봇 커뮤니티에서 로봇의 구조를 설명하는 데 사용되는 표준입니다.

### URDF Tags
- **link**: 로봇의 모든 구성 요소를 나타냅니다. 각 link는 참조 프레임을 생성하며, 이름과 물리적 차원(메시 또는 3D 모델)을 가질 수 있습니다.
- **visual**: 메시의 시각화를 위해 사용됩니다.
- **collision**: link에 물리적 속성을 할당하고 부피와 인ерт리를 지정합니다.
- **joint**: 두 link를 연결하여 그들의 연결 속성을 정의합니다. joint는 항상 하나의 부모 link와 하나의 자식 link로 구성됩니다.

### Joint Types
- joint 태그 내에서 연결된 두 link의 종류를 정의할 수 있습니다.
- 예를 들어, 두 link가 서로 고정되어 있을 수 있으며, 한 link는 다른 link에 대해 회전 또는 이동할 수 있습니다.

## 예시

강의에서 설명한 URDF 태그의 구조를 정리하면 다음과 같다.

```xml
<robot name="my_robot">

  <!-- link: 로봇의 구성 요소 하나. 참조 프레임을 만든다 -->
  <link name="base_link">
    <!-- visual: 메시(3D 모델)의 시각화 -->
    <visual>
      ...
    </visual>
    <!-- collision: 물리 속성 - 부피와 관성(inertia) 지정 -->
    <collision>
      ...
    </collision>
  </link>

  <link name="arm_link">
    ...
  </link>

  <!-- joint: 두 link를 연결. 항상 부모 1개 + 자식 1개 -->
  <joint name="base_to_arm" type="revolute">
    <parent link="base_link"/>
    <child  link="arm_link"/>
  </joint>

</robot>
```

`joint`의 `type`으로 두 link의 연결 방식을 정한다 — 서로 **고정**되어 있거나, 한 link가 다른 link에 대해 **회전** 또는 **이동**할 수 있다.

## 요약
- URDF는 로봇의 구조와 구성 요소를 XML 태그를 통해 표현하는 표준입니다.
- link, visual, collision, joint 등의 태그를 사용하여 로봇을 모델링할 수 있습니다.
- 각 link는 부모와 자식 관계를 가질 수 있으며, joint 태그를 사용하여 연결된 두 link의 속성을 정의할 수 있습니다.
