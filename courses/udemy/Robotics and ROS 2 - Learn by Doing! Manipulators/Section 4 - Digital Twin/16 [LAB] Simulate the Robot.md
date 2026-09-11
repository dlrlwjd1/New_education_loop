# [LAB] Simulate the Robot

## 개요
- URDF 모델과 런치 파일을 사용하여 로봇 시뮬레이션 시작
- 현재 개발한 URDF 모델이 충분하지 않으며, Gazebo가 물리학적 현상과 힘을 정확하게 시뮬레이션하기 위해 부족한 정보가 포함되어 있지 않음

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/36847140#overview)

## 내용
### 1. URDF 모델 수정
- Visual 태그로 로봇 메시지를 표현했으나, Gazebo는 로봇의 물리적 공간과 힘을 정확하게 시뮬레이션하기 위해 충분한 정보가 필요함
- Collision 태그를 추가하여 각 링크의 물리적 공간을 정의

### 2. Collision 태그 추가
- 각 링크에 Collision 태그를 추가하고, Visual 태그의 내용을 복사하여 붙여넣음
- 예: 기반 링크는 메시지와 동일한 공간을 차지함

### 3. Inertia 태그 추가
- 로봇의 각 링크에 대한 인자(惯성)를 추가
- 인자는 물체가 외부 힘에 의해 움직임에 저항하는 정도를 측정하며, 물체의 질량과 분포에 따라 결정됨

### 4. Macro 사용
- Chakra에서 제공하는 매크로 도구를 사용하여 중복된 코드를 줄이고 재사용성을 높임
- default_inertia라는 이름의 매크로를 생성하고, 각 링크에 대한 인자 값을 설정

## 예시
```xml
<inertial>
  <mass value="1.0"/>
  <inertia ixx="1.0" ixy="0.0" ixz="0.0" iyy="1.0" iyz="0.0" izz="1.0"/>
</inertial>
```

## 요약
- URDF 모델에 Collision 태그와 Inertia 태그를 추가하여 로봇의 물리적 공간과 힘을 정확하게 시뮬레이션할 수 있도록 함
- Chakra의 매크로 도구를 사용하여 중복된 코드를 줄이고 재사용성을 높임
