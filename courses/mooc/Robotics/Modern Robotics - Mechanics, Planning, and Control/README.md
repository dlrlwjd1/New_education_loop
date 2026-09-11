# Modern Robotics: Mechanics, Planning, and Control

Northwestern University의 6강좌 전문과정(specialization)으로, 강체 운동 표현에서 운동학·동역학·궤적 생성·모션 계획·제어·파지와 조작·바퀴 달린 이동 로봇을 거쳐 모바일 매니퓰레이션 캡스톤까지 진행한다.

- 전문과정: https://www.mooc.org/specializations/modernrobotics
- 강사: Kevin Lynch (Northwestern University)
- 교재: *Modern Robotics: Mechanics, Planning, and Control* (Kevin M. Lynch, Frank C. Park, Cambridge University Press, 2017)
- 구성: 6개 하위 강좌 · 25개 모듈 · 동영상 강의 109개
- 특징: 각 영상이 교재의 특정 장·절에 대응한다. 영상 촬영은 Lightboard를 사용한다
- 실습 도구: Modern Robotics(MR) 코드 라이브러리, CoppeliaSim 로봇 시뮬레이터
- 제외: 채점 퀴즈·과제와 해답

## 강좌

| # | 강좌 | 교재 장 | 모듈 | 강의 | 정리 상태 |
| --- | --- | --- | --- | --- | --- |
| 1 | **Foundations of Robot Motion** | 2~3장 | 5 | 20 | ✅ 완료 |
| 2 | **Robot Kinematics** | 4~7장 | 4 | 13 | ✅ 완료 |
| 3 | **Robot Dynamics** | 8~9장 | 4 | 16 | ✅ 완료 |
| 4 | [Robot Motion Planning and Control](Course%204%20-%20Robot%20Motion%20Planning%20and%20Control/README.md) | 10~11장 | 4 | 23 | ✅ 완료 |
| 5 | **Robot Manipulation and Wheeled Mobile Robots** | 12~13장 | 4 | 25 | ✅ 완료 |
| 6 | [Capstone Project, Mobile Manipulation](Course%206%20-%20Capstone%20Project,%20Mobile%20Manipulation/README.md) | 종합 | 4 | 12 | ✅ 완료 |

**전체 109강 정리 완료.** Course 6의 12강 중 9강은 앞 강좌 강의와 동일한 복습 영상이므로 원본 노트로 연결했다.

## 학습 흐름

```text
구성 공간 · 강체 운동 표현 (Course 1, 2~3장)
  -> 순운동학 · 야코비안 · 역운동학 (Course 2, 4~7장)
  -> 동역학 · 궤적 생성 (Course 3, 8~9장)
  -> 모션 계획 · 로봇 제어 (Course 4, 10~11장)
  -> 파지와 조작 · 바퀴 달린 이동 로봇 (Course 5, 12~13장)
  -> 모바일 매니퓰레이션 캡스톤 (Course 6)
```

## 강좌별 모듈 구성

### Course 1 — Foundations of Robot Motion (교재 2~3장)

강의 노트: **Course 1 README**

| 모듈 | 주제 | 강의 수 |
| --- | --- | --- |
| Module 1 | Introduction to Modern Robotics | 2 |
| Module 2 | Chapter 2 - Configuration Space (Part 1 of 2) | 3 |
| Module 3 | Chapter 2 - Configuration Space (Part 2 of 2) | 4 |
| Module 4 | Chapter 3 - Rigid-Body Motions (Part 1 of 2) | 6 |
| Module 5 | Chapter 3 - Rigid-Body Motions (Part 2 of 2) | 5 |

### Course 2 — Robot Kinematics (교재 4~7장)

강의 노트: **Course 2 README**

| 모듈 | 주제 | 주요 강의 |
| --- | --- | --- |
| Module 1 | Chapter 4: Forward Kinematics | Product of Exponentials Formula (Space Frame / End-Effector Frame), Forward Kinematics Example |
| Module 2 | Chapter 5: Velocity Kinematics and Statics | Space Jacobian, Body Jacobian, Statics of Open Chains, Singularities, Manipulability |
| Module 3 | Chapter 6: Inverse Kinematics | Inverse Kinematics of Open Chains, Numerical Inverse Kinematics (2부) |
| Module 4 | Chapter 7: Kinematics of Closed Chains | Kinematics of Closed Chains |

### Course 3 — Robot Dynamics (교재 8~9장)

강의 노트: **Course 3 README**

| 모듈 | 주제 | 주요 강의 |
| --- | --- | --- |
| Module 1 | Chapter 8: Dynamics of Open Chains (Part 1 of 2) | Lagrangian Formulation (2부), Understanding the Mass Matrix, Dynamics of a Single Rigid Body (2부), Newton-Euler Inverse Dynamics |
| Module 2 | Chapter 8: Dynamics of Open Chains (Part 2 of 2) | Forward Dynamics of Open Chains, Dynamics in the Task Space, Constrained Dynamics, Actuation·Gearing·Friction |
| Module 3 | Chapter 9: Trajectory Generation (Part 1 of 2) | Point-to-Point Trajectories (2부), Polynomial Via Point Trajectories |
| Module 4 | Chapter 9: Trajectory Generation (Part 2 of 2) | Time-Optimal Time Scaling (3부) |

### Course 4 — Robot Motion Planning and Control (교재 10~11장)

강의 노트: [Course 4 README](Course%204%20-%20Robot%20Motion%20Planning%20and%20Control/README.md)

| 모듈 | 주제 | 주요 강의 |
| --- | --- | --- |
| Module 1 | Chapter 10: Motion Planning (Part 1 of 2) | Overview of Motion Planning, C-Space Obstacles, Graphs and Trees, Graph Search, Complete Path Planners |
| Module 2 | Chapter 10: Motion Planning (Part 2 of 2) | Grid Methods, Sampling Methods (2부), Virtual Potential Fields, Nonlinear Optimization |
| Module 3 | Chapter 11: Robot Control (Part 1 of 2) | Control System Overview, Error Response, Linear·First-Order·Second-Order Error Dynamics, Motion Control with Velocity Inputs (3부) |
| Module 4 | Chapter 11: Robot Control (Part 2 of 2) | Motion Control with Torque or Force Inputs (3부), Force Control, Hybrid Motion-Force Control |

### Course 5 — Robot Manipulation and Wheeled Mobile Robots (교재 12~13장)

강의 노트: **Course 5 README**

| 모듈 | 주제 | 주요 강의 |
| --- | --- | --- |
| Module 1 | Chapter 12: Grasping and Manipulation (Part 1 of 2) | First-Order Analysis of a Single Contact, Contact Types, Multiple Contacts, Planar Graphical Methods (2부), Form Closure |
| Module 2 | Chapter 12: Grasping and Manipulation (Part 2 of 2) | Friction, Planar Graphical Methods, Force Closure, Duality of Force and Motion Freedoms, Manipulation·Meter-Stick Trick, Transport of an Assembly |
| Module 3 | Chapter 13: Wheeled Mobile Robots (Part 1 of 2) | Wheeled Mobile Robots, Omnidirectional Wheeled Mobile Robots (2부), Modeling of Nonholonomic Wheeled Mobile Robots |
| Module 4 | Chapter 13: Wheeled Mobile Robots (Part 2 of 2) | Controllability of Wheeled Mobile Robots (4부), Motion Planning·Feedback Control for Nonholonomic Mobile Robots, Odometry, Mobile Manipulation |

### Course 6 — Capstone Project, Mobile Manipulation

강의 노트: [Course 6 README](Course%206%20-%20Capstone%20Project,%20Mobile%20Manipulation/README.md)

| 모듈 | 주제 | 주요 강의 |
| --- | --- | --- |
| Module 1 | Introduction to the Capstone Project, and Milestone 1 | Introduction to the Capstone Project, Video Summary, (복습) Omnidirectional Wheeled Mobile Robots·Odometry |
| Module 2 | Milestone 2: Reference Trajectory Generation | Milestone 2, (복습) Point-to-Point Trajectories |
| Module 3 | Milestone 3: Feedforward Control | (복습) Product of Exponentials in End-Effector Frame, Body Jacobian, Motion Control with Velocity Inputs, Mobile Manipulation |
| Module 4 | Completing the Project and Your Submission | 동영상 강의 없음. 프로젝트 제출 안내 |

- 캡스톤은 youBot(모바일 매니퓰레이터)의 운동학 시뮬레이터, 참조 궤적 생성, 피드포워드+피드백 제어를 단계별 마일스톤으로 구현하는 프로젝트다.

## 정리 방침

- 영상별 Transcript를 근거로 강의 하나마다 노트 파일 하나를 만든다.
- 강의에 없는 내용은 임의로 추가하지 않는다. 영상이 "교재를 참고하라"고 넘기는 유도 과정은 그대로 표시한다.
- 수식은 코드 블록으로 표기한다. 브래킷 표기 `[ω]`, `[V]`처럼 문맥에 따라 의미가 달라지는 기호는 노트에서 구분해 적는다.
- 기술 용어는 한국어와 영어 원문을 병기한다. 예: 지수 좌표(exponential coordinates)

## 진행 기록

- **study-progress/로보틱스 로드맵/** — 이 강좌는 로보틱스 로드맵의 Phase 4·6·7·8·9·10에 나뉘어 들어가 있고, 그 Phase 문서들이 진행 기록의 원본이다.
