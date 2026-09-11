# MoveIt! 2

## 개요
- Move Group: 모든 컴포넌트와 기능 간의 중간 소프트웨어로, 자원 교환이 용이합니다.
- Trajectory Execution: Robot의 움직임 로직과 실행 계획을 직접 제어할 수 있습니다.
- Planning Scene Management: Robot의 환경과 주변 장애물을 나타내며, 충돌 없는 이동을 보장합니다.
- Inverse Kinematic Solver: 경로 계획에 필수적인 역방향 기능입니다.
- User Interfaces: RViz를 통한 그래픽 인터페이스와 명령행 인터페이스, Python 및 C++ API가 있습니다.

- 원본: [Udemy 강의](https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/learn/lecture/37574330#overview)

## 내용
### Move Group
Move Group은 모든 컴포넌트와 기능 간의 중간 소프트웨어로, 자원 교환이 용이합니다. 이는 Robot의 움직임 로직과 실행 계획을 직접 제어할 수 있게 합니다.

### Trajectory Execution
Trajectory Execution 모듈은 Robot의 모터 컨트롤러를 통해 Ros2 Control 라이브러리를 통해 작동하며, 각 관절이 지정된 시간에 특정 위치로 이동하도록 보장합니다.

### Planning Scene Management
Planning Scene Management는 Robot의 환경과 주변 장애물을 나타내며, 충돌 없는 이동을 보장합니다. Robot은 3D 카메라 또는 레이저와 같은 센서를 사용하여 장애물을 감지하고, 이를 통해 계획 장면을 생성하고 관리할 수 있습니다.

### Inverse Kinematic Solver
Inverse Kinematic Solver는 경로 계획에 필수적인 역방향 기능입니다. Movie two에서는 이 강의에서 사용할 일반적 용도의 해결책이 있지만, 특정 Robot에 맞춤형 솔루션을 작성하는 것도 가능합니다. 이러한 사용자 정의 솔루션은 주로 산업 환경에서 기계학식 계산 속도를 높이는 데 사용됩니다.

### User Interfaces
MoveIt!는 다양한 목적을 위해 여러 가지 사용자 인터페이스를 제공합니다. 예를 들어, RViz를 통한 그래픽 인터페이스와 명령행 인터페이스, Python 및 C++ API가 있습니다.

## 예시
- MoveIt! 2의 구성 요소를 소개하는 개념 강의로, 별도의 코드 예시는 다루지 않는다.
- 강의에서 언급한 사용자 인터페이스는 다음 네 가지다.

```text
RViz 그래픽 인터페이스  ·  명령행 인터페이스  ·  Python API  ·  C++ API
```

## 요약
- Move Group: 모든 컴포넌트와 기능 간의 중간 소프트웨어로, 자원 교환이 용이합니다.
- Trajectory Execution: Robot의 움직임 로직과 실행 계획을 직접 제어할 수 있습니다.
- Planning Scene Management: Robot의 환경과 주변 장애물을 나타내며, 충돌 없는 이동을 보장합니다.
- Inverse Kinematic Solver: 경로 계획에 필수적인 역방향 기능입니다.
- User Interfaces: RViz를 통한 그래픽 인터페이스와 명령행 인터페이스, Python 및 C++ API가 있습니다.
