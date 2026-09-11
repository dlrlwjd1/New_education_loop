# Robotics and ROS 2 - Learn by Doing! Manipulators

- **플랫폼**: Udemy
- **링크**: https://www.udemy.com/course/robotics-and-ros-2-learn-by-doing-manipulators/
- **분량**: 10개 섹션 · 128개 커리큘럼 항목
- **언어**: 영어 · 자막 기반 한국어 정리
- **확인일**: 2026-07-31

## 개요

- ROS 2의 통신 구조부터 URDF·Gazebo 디지털 트윈, ros2_control, 기구학, MoveIt 2, 실제 Arduino 로봇 제작까지 하나의 매니퓰레이터 프로젝트로 연결한다.
- 각 커리큘럼 항목을 강의 하나당 Markdown 파일 하나로 정리했다. 퀴즈·과제·읽기 자료도 실제 순서에 포함한다.
- 강의 페이지의 자막 또는 본문을 근거로 작성했으며, 자막과 상세 본문이 제공되지 않은 항목은 내용을 추측하지 않고 확인 상태만 기록했다.
- 퀴즈는 응시하지 않았고 수강 완료 상태도 변경하지 않았다.

## 핵심 학습 흐름

1. ROS 2의 노드, 토픽, 서비스, 액션과 워크스페이스 구조를 이해한다.
2. URDF, RViz2, Gazebo, ros2_control로 로봇을 모델링하고 제어한다.
3. 좌표 변환, TF2, 기구학, quaternion과 MoveIt 2를 적용한다.
4. Task Server와 Alexa를 결합해 애플리케이션 계층을 구성한다.
5. Arduino와 커스텀 하드웨어 인터페이스로 실제 로봇을 구동한다.

## 코스 구성

### Section 1 — Introduction

코스 목표와 프로젝트 아키텍처, 학습 자료 사용법을 소개한다.

- **01 Course Motivation**
- **02 Meet your Teacher**
- [03 \[BONUS\] - Boost your Robotics Software Developer Career](Section%201%20-%20Introduction/03%20%5BBONUS%5D%20-%20Boost%20your%20Robotics%20Software%20Developer%20Career.md)
- **04 Get the Most out of the Course**
- **05 Project Architecture**
- **06 Course Presentation**
- **07 Course Material**

### Section 2 — Setup

Ubuntu 실행 방식과 ROS 2 Humble/Jazzy 설치, 개발 환경 구성을 다룬다.

- **01 Install Ubuntu on WSL**
- **02 Install Ubuntu on Dual Boot**
- **03 Install Ubuntu on Virtual Machine**
- [04 \[LAB\] Install ROS 2 Humble on Ubuntu 22.04](Section%202%20-%20Setup/04%20%5BLAB%5D%20Install%20ROS%202%20Humble%20on%20Ubuntu%2022.04.md)
- [05 \[LAB\] Install ROS 2 Jazzy on Ubuntu 24.04](Section%202%20-%20Setup/05%20%5BLAB%5D%20Install%20ROS%202%20Jazzy%20on%20Ubuntu%2024.04.md)
- [06 \[LAB\] Configure the Development Environment in Ubuntu 24.04](Section%202%20-%20Setup/06%20%5BLAB%5D%20Configure%20the%20Development%20Environment%20in%20Ubuntu%2024.04.md)
- [07 \[LAB\] Configure the Development Environment in Ubuntu 22.04](Section%202%20-%20Setup/07%20%5BLAB%5D%20Configure%20the%20Development%20Environment%20in%20Ubuntu%2022.04.md)
- [08 \[LAB\] How to use the Course Material](Section%202%20-%20Setup/08%20%5BLAB%5D%20How%20to%20use%20the%20Course%20Material.md)

### Section 3 — Introduction to ROS 2

ROS 2의 필요성·아키텍처와 워크스페이스, 퍼블리셔·서브스크라이버를 익힌다.

- **01 Why a Robot Operating System?**
- **02 What is ROS 2**
- **03 Why a NEW Robot Operating System?**
- **04 ROS 2 Architecture**
- **05 Hardware Abstraction**
- **06 Low-Level Device Control**
- **07 Messaging Between Process**
- **08 Package Management**
- **09 Architecture of a ROS 2 Application**
- **10 퀴즈 1 - Introduction to ROS 2**
- [11 \[LAB\] Create and Activate a Workspace](Section%203%20-%20Introduction%20to%20ROS%202/11%20%5BLAB%5D%20Create%20and%20Activate%20a%20Workspace.md)
- [12 \[PY\] Simple Publisher](Section%203%20-%20Introduction%20to%20ROS%202/12%20%5BPY%5D%20Simple%20Publisher.md)
- [13 \[C++\] Simple Publisher](Section%203%20-%20Introduction%20to%20ROS%202/13%20%5BC%2B%2B%5D%20Simple%20Publisher.md)
- [14 \[PY\] Simple Subscriber](Section%203%20-%20Introduction%20to%20ROS%202/14%20%5BPY%5D%20Simple%20Subscriber.md)
- [15 \[C++\] Simple Subscriber](Section%203%20-%20Introduction%20to%20ROS%202/15%20%5BC%2B%2B%5D%20Simple%20Subscriber.md)
- **16 퀴즈 2 - Workspaces, Publishers, Subscribers**

### Section 4 — Digital Twin

URDF, RViz2, 파라미터, launch file, Gazebo로 로봇의 디지털 트윈을 만든다.

- [01 Robot Description](Section%204%20-%20Digital%20Twin/01%20Robot%20Description.md)
- [02 URDF](Section%204%20-%20Digital%20Twin/02%20URDF.md)
- [03 \[LAB\] Create the URDF Model](Section%204%20-%20Digital%20Twin/03%20%5BLAB%5D%20Create%20the%20URDF%20Model.md)
- [04 \[LAB\] Complete the URDF Model](Section%204%20-%20Digital%20Twin/04%20%5BLAB%5D%20Complete%20the%20URDF%20Model.md)
- [05 RViz 2](Section%204%20-%20Digital%20Twin/05%20RViz%202.md)
- [06 Parameters](Section%204%20-%20Digital%20Twin/06%20Parameters.md)
- [07 \[PY\] Parameters](Section%204%20-%20Digital%20Twin/07%20%5BPY%5D%20Parameters.md)
- [08 \[C++\] Parameters](Section%204%20-%20Digital%20Twin/08%20%5BC%2B%2B%5D%20Parameters.md)
- [09 \[LAB\] ROS 2 Parameter CLI](Section%204%20-%20Digital%20Twin/09%20%5BLAB%5D%20ROS%202%20Parameter%20CLI.md)
- [10 퀴즈 3 - URDF and Parameters](Section%204%20-%20Digital%20Twin/10%20%ED%80%B4%EC%A6%88%203%20-%20URDF%20and%20Parameters.md)
- [11 \[LAB\] Visualize the Robot](Section%204%20-%20Digital%20Twin/11%20%5BLAB%5D%20Visualize%20the%20Robot.md)
- [12 Launch Files](Section%204%20-%20Digital%20Twin/12%20Launch%20Files.md)
- [13 \[LAB\] Visualize the Robot with Launch Files](Section%204%20-%20Digital%20Twin/13%20%5BLAB%5D%20Visualize%20the%20Robot%20with%20Launch%20Files.md)
- [14 과제 1 - Add an RGB Camera to your Robot](Section%204%20-%20Digital%20Twin/14%20%EA%B3%BC%EC%A0%9C%201%20-%20Add%20an%20RGB%20Camera%20to%20your%20Robot.md)
- [15 Gazebo](Section%204%20-%20Digital%20Twin/15%20Gazebo.md)
- [16 \[LAB\] Simulate the Robot](Section%204%20-%20Digital%20Twin/16%20%5BLAB%5D%20Simulate%20the%20Robot.md)
- [17 \[LAB\] Launch the Simulation](Section%204%20-%20Digital%20Twin/17%20%5BLAB%5D%20Launch%20the%20Simulation.md)
- [18 과제 2 - Simulate an RGB Camera in Gazebo](Section%204%20-%20Digital%20Twin/18%20%EA%B3%BC%EC%A0%9C%202%20-%20Simulate%20an%20RGB%20Camera%20in%20Gazebo.md)

### Section 5 — Control

ros2_control의 제어 타입과 YAML 설정, 컨트롤러 실행 및 CLI를 다룬다.

- [01 ROS 2 Control](Section%205%20-%20Control/01%20ROS%202%20Control.md)
- [02 Control Types](Section%205%20-%20Control/02%20Control%20Types.md)
- [03 \[LAB\] ros2_control with Gazebo](Section%205%20-%20Control/03%20%5BLAB%5D%20ros2_control%20with%20Gazebo.md)
- [04 YAML Configuration File](Section%205%20-%20Control/04%20YAML%20Configuration%20File.md)
- [05 \[LAB\] Configure ros2_control](Section%205%20-%20Control/05%20%5BLAB%5D%20Configure%20ros2_control.md)
- [06 \[LAB\] Launch the Controller](Section%205%20-%20Control/06%20%5BLAB%5D%20Launch%20the%20Controller.md)
- [07 \[LAB\] ros2_control CLI](Section%205%20-%20Control/07%20%5BLAB%5D%20ros2_control%20CLI.md)

### Section 6 — Kinematics

좌표 변환과 정·역기구학, TF2, 서비스, Euler angle·quaternion, MoveIt 2를 학습한다.

- [01 Robot Kinematics](Section%206%20-%20Kinematics/01%20Robot%20Kinematics.md)
- [02 Pose of a Robot Arm](Section%206%20-%20Kinematics/02%20Pose%20of%20a%20Robot%20Arm.md)
- [03 Translation Vector](Section%206%20-%20Kinematics/03%20Translation%20Vector.md)
- [04 Elementary Rotations](Section%206%20-%20Kinematics/04%20Elementary%20Rotations.md)
- [05 Rotation Matrix](Section%206%20-%20Kinematics/05%20Rotation%20Matrix.md)
- [06 Transformation Matrix](Section%206%20-%20Kinematics/06%20Transformation%20Matrix.md)
- [07 Forward Kinematics](Section%206%20-%20Kinematics/07%20Forward%20Kinematics.md)
- [08 TF2 Library](Section%206%20-%20Kinematics/08%20TF2%20Library.md)
- [09 \[LAB\] TF2 Tools](Section%206%20-%20Kinematics/09%20%5BLAB%5D%20TF2%20Tools.md)
- [10 ROS 2 Services](Section%206%20-%20Kinematics/10%20ROS%202%20Services.md)
- [11 \[PY\] Service Server](Section%206%20-%20Kinematics/11%20%5BPY%5D%20Service%20Server.md)
- [12 \[C++\] Service Server](Section%206%20-%20Kinematics/12%20%5BC%2B%2B%5D%20Service%20Server.md)
- [13 Static and Dynamic Transformations](Section%206%20-%20Kinematics/13%20Static%20and%20Dynamic%20Transformations.md)
- [14 \[PY\] Service Client](Section%206%20-%20Kinematics/14%20%5BPY%5D%20Service%20Client.md)
- [15 \[C++\] Service Client](Section%206%20-%20Kinematics/15%20%5BC%2B%2B%5D%20Service%20Client.md)
- [16 Angle Representations](Section%206%20-%20Kinematics/16%20Angle%20Representations.md)
- [17 Euler Angles](Section%206%20-%20Kinematics/17%20Euler%20Angles.md)
- [18 Quaternion](Section%206%20-%20Kinematics/18%20Quaternion.md)
- [19 \[PY\] Euler to Quaternion Service](Section%206%20-%20Kinematics/19%20%5BPY%5D%20Euler%20to%20Quaternion%20Service.md)
- [20 \[C++\] Euler to Quaternion Service](Section%206%20-%20Kinematics/20%20%5BC%2B%2B%5D%20Euler%20to%20Quaternion%20Service.md)
- [21 Inverse Kinematics](Section%206%20-%20Kinematics/21%20Inverse%20Kinematics.md)
- [22 MoveIt! 2](Section%206%20-%20Kinematics/22%20MoveIt!%202.md)
- [23 \[LAB\] Configure MoveIt! 2](Section%206%20-%20Kinematics/23%20%5BLAB%5D%20Configure%20MoveIt!%202.md)
- [24 \[LAB\] Launch MoveIt! 2](Section%206%20-%20Kinematics/24%20%5BLAB%5D%20Launch%20MoveIt!%202.md)

### Section 7 — Application

ROS 2 action, MoveIt 2 API, task server로 애플리케이션 계층을 구현한다.

- **01 Application Layer**
- **02 ROS 2 Actions**
- [03 \[PY\] Create an Action Server](Section%207%20-%20Application/03%20%5BPY%5D%20Create%20an%20Action%20Server.md)
- [04 \[C++\] Create an Action Server](Section%207%20-%20Application/04%20%5BC%2B%2B%5D%20Create%20an%20Action%20Server.md)
- [05 \[PY\] Create an Action Client](Section%207%20-%20Application/05%20%5BPY%5D%20Create%20an%20Action%20Client.md)
- [06 \[C++\] Create an Action Client](Section%207%20-%20Application/06%20%5BC%2B%2B%5D%20Create%20an%20Action%20Client.md)
- **07 MoveIt! 2 API**
- [08 \[PY\] MoveIt! 2 API](Section%207%20-%20Application/08%20%5BPY%5D%20MoveIt!%202%20API.md)
- [09 \[C++\] MoveIt! 2 API](Section%207%20-%20Application/09%20%5BC%2B%2B%5D%20MoveIt!%202%20API.md)
- [10 \[LAB\] MoveIt! 2 API](Section%207%20-%20Application/10%20%5BLAB%5D%20MoveIt!%202%20API.md)
- **11 Task Server**
- [12 \[PY\] Task Server](Section%207%20-%20Application/12%20%5BPY%5D%20Task%20Server.md)
- [13 \[C++\] Task Server](Section%207%20-%20Application/13%20%5BC%2B%2B%5D%20Task%20Server.md)
- [14 \[LAB\] Task Server](Section%207%20-%20Application/14%20%5BLAB%5D%20Task%20Server.md)

### Section 8 — Alexa Integration

Alexa skill과 ROS 2 로봇을 연결하고 음성 상호작용 모델을 구성한다.

- **01 Alexa Skill**
- [02 \[LAB\] Develop Alexa Skills](Section%208%20-%20Alexa%20Integration/02%20%5BLAB%5D%20Develop%20Alexa%20Skills.md)
- [03 \[LAB\] Integrate Alexa Skills](Section%208%20-%20Alexa%20Integration/03%20%5BLAB%5D%20Integrate%20Alexa%20Skills.md)
- [04 \[LAB\] Interface the Robot with Alexa](Section%208%20-%20Alexa%20Integration/04%20%5BLAB%5D%20Interface%20the%20Robot%20with%20Alexa.md)
- [05 \[LAB\] Voice Interaction Model](Section%208%20-%20Alexa%20Integration/05%20%5BLAB%5D%20Voice%20Interaction%20Model.md)
- [06 \[LAB\] Launch the Simulation of the Robot](Section%208%20-%20Alexa%20Integration/06%20%5BLAB%5D%20Launch%20the%20Simulation%20of%20the%20Robot.md)

### Section 9 — Build the Robot

Arduino 통신, lifecycle node, 하드웨어 인터페이스, 서보모터와 로봇 조립을 다룬다.

- **01 Mechanics and Electronics**
- **02 Arduino and ROS 2**
- [03 \[HWLAB\] Publisher Node with Arduino](Section%209%20-%20Build%20the%20Robot/03%20%5BHWLAB%5D%20Publisher%20Node%20with%20Arduino.md)
- [04 \[PY\] Publisher Node with Arduino](Section%209%20-%20Build%20the%20Robot/04%20%5BPY%5D%20Publisher%20Node%20with%20Arduino.md)
- [05 \[C++\] Publisher Node with Arduino](Section%209%20-%20Build%20the%20Robot/05%20%5BC%2B%2B%5D%20Publisher%20Node%20with%20Arduino.md)
- [06 \[HWLAB\] Test Publisher Node with Arduino](Section%209%20-%20Build%20the%20Robot/06%20%5BHWLAB%5D%20Test%20Publisher%20Node%20with%20Arduino.md)
- [07 \[HWLAB\] Subscriber Node with Arduino](Section%209%20-%20Build%20the%20Robot/07%20%5BHWLAB%5D%20Subscriber%20Node%20with%20Arduino.md)
- [08 \[PY\] Subscriber Node with Arduino](Section%209%20-%20Build%20the%20Robot/08%20%5BPY%5D%20Subscriber%20Node%20with%20Arduino.md)
- [09 \[C++\] Subscriber Node with Arduino](Section%209%20-%20Build%20the%20Robot/09%20%5BC%2B%2B%5D%20Subscriber%20Node%20with%20Arduino.md)
- [10 \[HWLAB\] Test Subscriber Node with Arduino](Section%209%20-%20Build%20the%20Robot/10%20%5BHWLAB%5D%20Test%20Subscriber%20Node%20with%20Arduino.md)
- [11 \[HWLAB\] Servomotors with Arduino](Section%209%20-%20Build%20the%20Robot/11%20%5BHWLAB%5D%20Servomotors%20with%20Arduino.md)
- **12 ROS 2 Lifecycle Nodes**
- [13 \[PY\] Create a Lifecycle Node](Section%209%20-%20Build%20the%20Robot/13%20%5BPY%5D%20Create%20a%20Lifecycle%20Node.md)
- [14 \[C++\] Create a Lifecycle Node](Section%209%20-%20Build%20the%20Robot/14%20%5BC%2B%2B%5D%20Create%20a%20Lifecycle%20Node.md)
- [15 \[LAB\] ROS 2 Lifecycle CLI](Section%209%20-%20Build%20the%20Robot/15%20%5BLAB%5D%20ROS%202%20Lifecycle%20CLI.md)
- [16 \[C++\] ros2_control Interface - Declaration](Section%209%20-%20Build%20the%20Robot/16%20%5BC%2B%2B%5D%20ros2_control%20Interface%20-%20Declaration.md)
- [17 \[C++\] ros2_control Interface - Definition](Section%209%20-%20Build%20the%20Robot/17%20%5BC%2B%2B%5D%20ros2_control%20Interface%20-%20Definition.md)
- [18 \[C++\] ros2_control Interface - Plugin](Section%209%20-%20Build%20the%20Robot/18%20%5BC%2B%2B%5D%20ros2_control%20Interface%20-%20Plugin.md)
- [19 \[LAB\] ros2_control Interface - Configure](Section%209%20-%20Build%20the%20Robot/19%20%5BLAB%5D%20ros2_control%20Interface%20-%20Configure.md)
- [20 \[HWLAB\] Robot Control with Arduino](Section%209%20-%20Build%20the%20Robot/20%20%5BHWLAB%5D%20Robot%20Control%20with%20Arduino.md)
- [21 \[HWLAB\] Assemble the Robot - Motor Calibration](Section%209%20-%20Build%20the%20Robot/21%20%5BHWLAB%5D%20Assemble%20the%20Robot%20-%20Motor%20Calibration.md)
- [22 \[HWLAB\] Assemble the Robot - Part 1](Section%209%20-%20Build%20the%20Robot/22%20%5BHWLAB%5D%20Assemble%20the%20Robot%20-%20Part%201.md)
- [23 \[HWLAB\] Assemble the Robot - Part 2](Section%209%20-%20Build%20the%20Robot/23%20%5BHWLAB%5D%20Assemble%20the%20Robot%20-%20Part%202.md)
- [24 \[HWLAB\] Assemble the Robot - Part 3](Section%209%20-%20Build%20the%20Robot/24%20%5BHWLAB%5D%20Assemble%20the%20Robot%20-%20Part%203.md)
- [25 \[HWLAB\] Launch the Complete Robot](Section%209%20-%20Build%20the%20Robot/25%20%5BHWLAB%5D%20Launch%20the%20Complete%20Robot.md)

### Section 10 — Conclusions

전체 프로젝트를 회고하고 다음 학습 방향과 추가 자료를 안내한다.

- **01 Recap**
- **02 What's next?**
- [03 \[BONUS\] - Continue Learning](Section%2010%20-%20Conclusions/03%20%5BBONUS%5D%20-%20Continue%20Learning.md)

## 2026-09-06 누락 자료 재확인

- Chrome 확장에서 실제 대본을 확인해 `[LAB] ROS 2 Parameter CLI`, `Inverse Kinematics`, `[HWLAB] Launch the Complete Robot` 노트를 보완했다.
- `Simulate an RGB Camera in Gazebo` 과제의 실제 지침을 읽고 준비 조건·카메라 설정·브리지·검증·제출 요구를 정리했다.
- 대본이 부족한 모터 보정·조립 Part 1~3은 실제 영상의 주요 시점 화면으로 부분 보완했다. 모터 보정은 Servo 코드와 base·shoulder 90, elbow·gripper 0 명령값을 확인했다. 조립은 시점별 관찰을 기록했으며 음성 전체·모든 체결 순서·배선 사양은 미확인이다.
- 현재 수강 화면의 완료 분모는 126개지만, 섹션별 항목 수 합계는 과제 2개를 포함해 128개로 기존 보관 파일 수와 일치한다.
