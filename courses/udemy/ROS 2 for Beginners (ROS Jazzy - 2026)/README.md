# ROS 2 for Beginners (ROS Jazzy - 2026)

## 개요

- 플랫폼: Udemy
- 강사: Edouard Renard
- 언어: 영어
- 자막: 한국어 자동, 영어 자동 외
- 마지막 업데이트: 2026년 1월
- 분량: 11개 섹션 · 108개 항목 · 약 13시간
- 강좌 페이지: [Udemy](https://www.udemy.com/course/ros2-for-beginners/)
- 정리 기준: 2026-07-31 Udemy 학습 페이지의 실제 커리큘럼
- 정리 상태: 108개 강의의 실제 대본 또는 문서 본문을 확인해 한국어 노트 작성 완료

Python 또는 C++ 기본 문법과 터미널 사용 경험을 전제로, ROS 1 선행 지식 없이 ROS 2 Jazzy의 핵심 개념과 개발 흐름을 단계별로 학습하는 강좌다.

## 주요 학습 내용

- ROS 2 Jazzy 설치와 Ubuntu 24.04 개발 환경 구성
- 워크스페이스(workspace), 패키지(package), 노드(node)
- Python과 C++ 기반 ROS 2 프로그램 작성
- 토픽(topic), 서비스(service), 커스텀 인터페이스(msg/srv)
- 파라미터(parameter), YAML 설정, 런치 파일(launch file)
- `ros2` CLI, colcon, rqt, rqt_graph, Turtlesim 활용
- 활동 문제와 Turtlesim 최종 프로젝트

## 강의 목록

### Section 1 - Introduction

- [Welcome!](<Section 1 - Introduction/01 Welcome!.md>) — 동영상, 3분
- [What is ROS2, When to use it, and Why?](<Section 1 - Introduction/02 What is ROS2, When to use it, and Why?.md>) — 동영상, 5분
- [How to get the most out of this course](<Section 1 - Introduction/03 How to get the most out of this course.md>) — 문서/활동, 2분

### Section 2 - Install ROS2 and Setup Your Environment

- [Intro](<Section 2 - Install ROS2 and Setup Your Environment/01 Intro.md>) — 문서/활동, 1분
- [Which ROS 2 Distribution to Use](<Section 2 - Install ROS2 and Setup Your Environment/02 Which ROS 2 Distribution to Use.md>) — 동영상, 4분
- [Install Ubuntu 24.04 on a Virtual Machine (VirtualBox)](<Section 2 - Install ROS2 and Setup Your Environment/03 Install Ubuntu 24.04 on a Virtual Machine (VirtualBox).md>) — 동영상, 19분
- [Note - New extension for VS Code](<Section 2 - Install ROS2 and Setup Your Environment/04 Note - New extension for VS Code.md>) — 문서/활동, 1분
- [Programming Tools I Will Use During this Course](<Section 2 - Install ROS2 and Setup Your Environment/05 Programming Tools I Will Use During this Course.md>) — 동영상, 5분
- [Install ROS 2 Jazzy on Ubuntu 24.04](<Section 2 - Install ROS2 and Setup Your Environment/06 Install ROS 2 Jazzy on Ubuntu 24.04.md>) — 동영상, 7분
- [Set up your Environment for ROS 2](<Section 2 - Install ROS2 and Setup Your Environment/07 Set up your Environment for ROS 2.md>) — 동영상, 3분
- [Launch a ROS 2 Program!](<Section 2 - Install ROS2 and Setup Your Environment/08 Launch a ROS 2 Program!.md>) — 동영상, 2분
- [Section Conclusion](<Section 2 - Install ROS2 and Setup Your Environment/09 Section Conclusion.md>) — 문서/활동, 1분

### Section 3 - Write Your First ROS 2 Program

- [Intro](<Section 3 - Write Your First ROS 2 Program/01 Intro.md>) — 문서/활동, 1분
- [Create a ROS 2 Workspace](<Section 3 - Write Your First ROS 2 Program/02 Create a ROS 2 Workspace.md>) — 동영상, 5분
- [Create a Python Package](<Section 3 - Write Your First ROS 2 Program/03 Create a Python Package.md>) — 동영상, 8분
- [Create a C++ Package](<Section 3 - Write Your First ROS 2 Program/04 Create a C++ Package.md>) — 동영상, 6분
- [What is a ROS2 Node?](<Section 3 - Write Your First ROS 2 Program/05 What is a ROS2 Node.md>) — 동영상, 6분
- [Write a Python Node - Minimal Code](<Section 3 - Write Your First ROS 2 Program/06 Write a Python Node - Minimal Code.md>) — 동영상, 16분
- [Write a Python Node - With OOP](<Section 3 - Write Your First ROS 2 Program/07 Write a Python Node - With OOP.md>) — 동영상, 12분
- [Write a C++ Node - Minimal Code](<Section 3 - Write Your First ROS 2 Program/08 Write a C++ Node - Minimal Code.md>) — 동영상, 16분
- [Write a C++ Node - With OOP](<Section 3 - Write Your First ROS 2 Program/09 Write a C++ Node - With OOP.md>) — 동영상, 11분
- [OOP Template for Your Nodes](<Section 3 - Write Your First ROS 2 Program/10 OOP Template for Your Nodes.md>) — 문서/활동, 1분
- [More about the ROS 2 Client Libraries for Different Languages](<Section 3 - Write Your First ROS 2 Program/11 More about the ROS 2 Client Libraries for Different Languages.md>) — 동영상, 2분
- [Section Conclusion](<Section 3 - Write Your First ROS 2 Program/12 Section Conclusion.md>) — 문서/활동, 1분

### Section 4 - Introduction to ROS 2 Tools

- [Intro](<Section 4 - Introduction to ROS 2 Tools/01 Intro.md>) — 문서/활동, 1분
- [Introspect Your Nodes With ros2 cli](<Section 4 - Introduction to ROS 2 Tools/02 Introspect Your Nodes With ros2 cli.md>) — 동영상, 8분
- [Rename a Node at Runtime](<Section 4 - Introduction to ROS 2 Tools/03 Rename a Node at Runtime.md>) — 동영상, 4분
- [Colcon](<Section 4 - Introduction to ROS 2 Tools/04 Colcon.md>) — 동영상, 5분
- [Rqt and rqt_graph](<Section 4 - Introduction to ROS 2 Tools/05 Rqt and rqt_graph.md>) — 동영상, 4분
- [Discover Turtlesim](<Section 4 - Introduction to ROS 2 Tools/06 Discover Turtlesim.md>) — 동영상, 5분
- [Activity 01](<Section 4 - Introduction to ROS 2 Tools/07 Activity 01.md>) — 문서/활동, 1분
- [Activity 01 - Solution](<Section 4 - Introduction to ROS 2 Tools/08 Activity 01 - Solution.md>) — 동영상, 5분
- [Section Conclusion](<Section 4 - Introduction to ROS 2 Tools/09 Section Conclusion.md>) — 문서/활동, 1분

### Section 5 - ROS 2 Topics - Make Your Nodes Communicate Between Each Other

- [Intro](<Section 5 - ROS 2 Topics - Make Your Nodes Communicate Between Each Other/01 Intro.md>) — 문서/활동, 1분
- [What is a ROS 2 Topic?](<Section 5 - ROS 2 Topics - Make Your Nodes Communicate Between Each Other/02 What is a ROS 2 Topic.md>) — 동영상, 8분
- [Write a Python Publisher](<Section 5 - ROS 2 Topics - Make Your Nodes Communicate Between Each Other/03 Write a Python Publisher.md>) — 동영상, 20분
- [Write a Python Subscriber](<Section 5 - ROS 2 Topics - Make Your Nodes Communicate Between Each Other/04 Write a Python Subscriber.md>) — 동영상, 11분
- [Write a C++ Publisher](<Section 5 - ROS 2 Topics - Make Your Nodes Communicate Between Each Other/05 Write a C++ Publisher.md>) — 동영상, 18분
- [Write a C++ Subscriber](<Section 5 - ROS 2 Topics - Make Your Nodes Communicate Between Each Other/06 Write a C++ Subscriber.md>) — 동영상, 13분
- [Introspect ROS 2 Topics with Command Line Tools](<Section 5 - ROS 2 Topics - Make Your Nodes Communicate Between Each Other/07 Introspect ROS 2 Topics with Command Line Tools.md>) — 동영상, 9분
- [Remap a Topic at Runtime](<Section 5 - ROS 2 Topics - Make Your Nodes Communicate Between Each Other/08 Remap a Topic at Runtime.md>) — 동영상, 4분
- [Monitor Topics With rqt and rqt_graph](<Section 5 - ROS 2 Topics - Make Your Nodes Communicate Between Each Other/09 Monitor Topics With rqt and rqt_graph.md>) — 동영상, 7분
- [Experiment on Topics with Turtlesim](<Section 5 - ROS 2 Topics - Make Your Nodes Communicate Between Each Other/10 Experiment on Topics with Turtlesim.md>) — 동영상, 8분
- [Activity 02 - ROS2 Topics](<Section 5 - ROS 2 Topics - Make Your Nodes Communicate Between Each Other/11 Activity 02 - ROS2 Topics.md>) — 문서/활동, 1분
- [Activity 02 - Solution \[1/2\]](<Section 5 - ROS 2 Topics - Make Your Nodes Communicate Between Each Other/12 Activity 02 - Solution [1-2].md>) — 동영상, 11분
- [Activity 02 - Solution \[2/2\]](<Section 5 - ROS 2 Topics - Make Your Nodes Communicate Between Each Other/13 Activity 02 - Solution [2-2].md>) — 동영상, 14분
- [Extra: Replay Topic Data with Bags](<Section 5 - ROS 2 Topics - Make Your Nodes Communicate Between Each Other/14 Extra - Replay Topic Data with Bags.md>) — 동영상, 10분
- [Section Conclusion](<Section 5 - ROS 2 Topics - Make Your Nodes Communicate Between Each Other/15 Section Conclusion.md>) — 문서/활동, 1분

### Section 6 - ROS 2 Services - Client/Server Communication Between Nodes

- [Intro](<Section 6 - ROS 2 Services - Client-Server Communication Between Nodes/01 Intro.md>) — 문서/활동, 1분
- [What is a ROS 2 Service?](<Section 6 - ROS 2 Services - Client-Server Communication Between Nodes/02 What is a ROS 2 Service.md>) — 동영상, 6분
- [Write a Python Service Server](<Section 6 - ROS 2 Services - Client-Server Communication Between Nodes/03 Write a Python Service Server.md>) — 동영상, 15분
- [Write a Python Service Client - no OOP](<Section 6 - ROS 2 Services - Client-Server Communication Between Nodes/04 Write a Python Service Client - no OOP.md>) — 동영상, 13분
- [Write a Python Service Client - OOP](<Section 6 - ROS 2 Services - Client-Server Communication Between Nodes/05 Write a Python Service Client - OOP.md>) — 동영상, 13분
- [Write a C++ Service Server](<Section 6 - ROS 2 Services - Client-Server Communication Between Nodes/06 Write a C++ Service Server.md>) — 동영상, 14분
- [Write a C++ Service Client - no OOP](<Section 6 - ROS 2 Services - Client-Server Communication Between Nodes/07 Write a C++ Service Client - no OOP.md>) — 동영상, 12분
- [Write a C++ Service Client - OOP](<Section 6 - ROS 2 Services - Client-Server Communication Between Nodes/08 Write a C++ Service Client - OOP.md>) — 동영상, 13분
- [Introspect Services with the ros2 Command Line](<Section 6 - ROS 2 Services - Client-Server Communication Between Nodes/09 Introspect Services with the ros2 Command Line.md>) — 동영상, 7분
- [Remap a Service at Runtime](<Section 6 - ROS 2 Services - Client-Server Communication Between Nodes/10 Remap a Service at Runtime.md>) — 동영상, 3분
- [Experiment on Services with Turtlesim](<Section 6 - ROS 2 Services - Client-Server Communication Between Nodes/11 Experiment on Services with Turtlesim.md>) — 동영상, 8분
- [Activitiy 03 - ROS 2 Services](<Section 6 - ROS 2 Services - Client-Server Communication Between Nodes/12 Activitiy 03 - ROS 2 Services.md>) — 문서/활동, 1분
- [Activity 03 - Solution](<Section 6 - ROS 2 Services - Client-Server Communication Between Nodes/13 Activity 03 - Solution.md>) — 동영상, 11분
- [Section Conclusion](<Section 6 - ROS 2 Services - Client-Server Communication Between Nodes/14 Section Conclusion.md>) — 문서/활동, 1분

### Section 7 - Create Custom ROS 2 Interfaces (Msg and Srv)

- [Intro](<Section 7 - Create Custom ROS 2 Interfaces (Msg and Srv)/01 Intro.md>) — 문서/활동, 1분
- [What are ROS 2 Interfaces?](<Section 7 - Create Custom ROS 2 Interfaces (Msg and Srv)/02 What are ROS 2 Interfaces.md>) — 동영상, 10분
- [Create and Build Your First Custom Msg](<Section 7 - Create Custom ROS 2 Interfaces (Msg and Srv)/03 Create and Build Your First Custom Msg.md>) — 동영상, 12분
- [Use Your Custom Msg in a Python Node](<Section 7 - Create Custom ROS 2 Interfaces (Msg and Srv)/04 Use Your Custom Msg in a Python Node.md>) — 동영상, 10분
- [Use Your Custom Msg in a C++ Node](<Section 7 - Create Custom ROS 2 Interfaces (Msg and Srv)/05 Use Your Custom Msg in a C++ Node.md>) — 동영상, 9분
- [Create and Build Your First Custom Srv](<Section 7 - Create Custom ROS 2 Interfaces (Msg and Srv)/06 Create and Build Your First Custom Srv.md>) — 동영상, 6분
- [Introspect Interfaces with the ros2 Command Line](<Section 7 - Create Custom ROS 2 Interfaces (Msg and Srv)/07 Introspect Interfaces with the ros2 Command Line.md>) — 동영상, 5분
- [Activity 04 - ROS 2 Custom Interfaces](<Section 7 - Create Custom ROS 2 Interfaces (Msg and Srv)/08 Activity 04 - ROS 2 Custom Interfaces.md>) — 문서/활동, 1분
- [Activity 04 - Solution \[1/3\]](<Section 7 - Create Custom ROS 2 Interfaces (Msg and Srv)/09 Activity 04 - Solution [1-3].md>) — 동영상, 11분
- [Activity 04 - Solution \[2/3\]](<Section 7 - Create Custom ROS 2 Interfaces (Msg and Srv)/10 Activity 04 - Solution [2-3].md>) — 동영상, 15분
- [Activity 04 - Solution \[3/3\]](<Section 7 - Create Custom ROS 2 Interfaces (Msg and Srv)/11 Activity 04 - Solution [3-3].md>) — 동영상, 22분
- [Section Conclusion](<Section 7 - Create Custom ROS 2 Interfaces (Msg and Srv)/12 Section Conclusion.md>) — 문서/활동, 1분

### Section 8 - Change Node Settings at Runtime with ROS 2 Parameters

- [Intro](<Section 8 - Change Node Settings at Runtime with ROS 2 Parameters/01 Intro.md>) — 문서/활동, 1분
- [What is a ROS 2 Parameter?](<Section 8 - Change Node Settings at Runtime with ROS 2 Parameters/02 What is a ROS 2 Parameter.md>) — 동영상, 3분
- [Using Parameters in your Python Nodes](<Section 8 - Change Node Settings at Runtime with ROS 2 Parameters/03 Using Parameters in your Python Nodes.md>) — 동영상, 12분
- [Using Parameters in your C++ Nodes](<Section 8 - Change Node Settings at Runtime with ROS 2 Parameters/04 Using Parameters in your C++ Nodes.md>) — 동영상, 8분
- [Experiment on Parameters with Turtlesim](<Section 8 - Change Node Settings at Runtime with ROS 2 Parameters/05 Experiment on Parameters with Turtlesim.md>) — 동영상, 8분
- [YAML Parameter Files](<Section 8 - Change Node Settings at Runtime with ROS 2 Parameters/06 YAML Parameter Files.md>) — 동영상, 10분
- [Activity 05 - ROS 2 Parameters](<Section 8 - Change Node Settings at Runtime with ROS 2 Parameters/07 Activity 05 - ROS 2 Parameters.md>) — 문서/활동, 1분
- [Activity 05 - Solution \[1/2\]](<Section 8 - Change Node Settings at Runtime with ROS 2 Parameters/08 Activity 05 - Solution [1-2].md>) — 동영상, 6분
- [Activity 05 - Solution \[2/2\]](<Section 8 - Change Node Settings at Runtime with ROS 2 Parameters/09 Activity 05 - Solution [2-2].md>) — 동영상, 8분
- [Extra: Parameter Callbacks](<Section 8 - Change Node Settings at Runtime with ROS 2 Parameters/10 Extra - Parameter Callbacks.md>) — 동영상, 11분
- [Section Conclusion](<Section 8 - Change Node Settings at Runtime with ROS 2 Parameters/11 Section Conclusion.md>) — 문서/활동, 1분

### Section 9 - Scale Your Application With ROS 2 Launch Files

- [Intro](<Section 9 - Scale Your Application With ROS 2 Launch Files/01 Intro.md>) — 문서/활동, 1분
- [What is a ROS 2 Launch File?](<Section 9 - Scale Your Application With ROS 2 Launch Files/02 What is a ROS 2 Launch File.md>) — 동영상, 2분
- [Create and Install a Launch File (XML)](<Section 9 - Scale Your Application With ROS 2 Launch Files/03 Create and Install a Launch File (XML).md>) — 동영상, 14분
- [Python Launch Files (Python vs XML)](<Section 9 - Scale Your Application With ROS 2 Launch Files/04 Python Launch Files (Python vs XML).md>) — 동영상, 12분
- [Remappings in a Launch File](<Section 9 - Scale Your Application With ROS 2 Launch Files/05 Remappings in a Launch File.md>) — 동영상, 7분
- [Load Parameters in a Launch File](<Section 9 - Scale Your Application With ROS 2 Launch Files/06 Load Parameters in a Launch File.md>) — 동영상, 10분
- [Add Namespaces to Your Nodes](<Section 9 - Scale Your Application With ROS 2 Launch Files/07 Add Namespaces to Your Nodes.md>) — 동영상, 13분
- [Activity 06 - ROS 2 Launch Files](<Section 9 - Scale Your Application With ROS 2 Launch Files/08 Activity 06 - ROS 2 Launch Files.md>) — 문서/활동, 1분
- [Activity 06 - Solution](<Section 9 - Scale Your Application With ROS 2 Launch Files/09 Activity 06 - Solution.md>) — 동영상, 13분
- [Section Conclusion](<Section 9 - Scale Your Application With ROS 2 Launch Files/10 Section Conclusion.md>) — 문서/활동, 1분

### Section 10 - Complete Project With Turtlesim

- [Turtlesim Project - Final Result Overview](<Section 10 - Complete Project With Turtlesim/01 Turtlesim Project - Final Result Overview.md>) — 동영상, 1분
- [Your Challenge](<Section 10 - Complete Project With Turtlesim/02 Your Challenge.md>) — 문서/활동, 2분
- [Some Tips to Get Started](<Section 10 - Complete Project With Turtlesim/03 Some Tips to Get Started.md>) — 문서/활동, 3분
- [Project Solution \[1/6\]](<Section 10 - Complete Project With Turtlesim/04 Project Solution [1-6].md>) — 동영상, 32분
- [Project Solution \[2/6\]](<Section 10 - Complete Project With Turtlesim/05 Project Solution [2-6].md>) — 동영상, 20분
- [Project Solution \[3/6\]](<Section 10 - Complete Project With Turtlesim/06 Project Solution [3-6].md>) — 동영상, 19분
- [Project Solution \[4/6\]](<Section 10 - Complete Project With Turtlesim/07 Project Solution [4-6].md>) — 동영상, 24분
- [Project Solution \[5/6\]](<Section 10 - Complete Project With Turtlesim/08 Project Solution [5-6].md>) — 동영상, 8분
- [Project Solution \[6/6\]](<Section 10 - Complete Project With Turtlesim/09 Project Solution [6-6].md>) — 동영상, 14분
- [Project Conclusion](<Section 10 - Complete Project With Turtlesim/10 Project Conclusion.md>) — 문서/활동, 1분

### Section 11 - Conclusion

- [What You've Learned](<Section 11 - Conclusion/01 What You've Learned.md>) — 동영상, 2분
- [What to do next? How to learn more about ROS 2?](<Section 11 - Conclusion/02 What to do next? How to learn more about ROS 2?.md>) — 문서/활동, 1분
- [Bonus Lecture](<Section 11 - Conclusion/03 Bonus Lecture.md>) — 문서/활동, 3분

## 정리 상태

- Udemy의 11개 섹션과 108개 커리큘럼 항목을 실제 순서대로 반영했습니다.
- 파일 번호는 각 섹션에서 `01`부터 다시 시작합니다.
- 각 노트에는 강의 유형, 재생시간과 원본 Udemy 강의 링크를 기록했습니다.
- 영상은 Udemy 자동 대본, 문서·활동은 해당 강의 본문을 기준으로 정리했습니다.
- 자동 음성 인식에서 잘못 표기된 ROS 2 고유명사와 주요 명령은 강의 문맥과 표준 표기에 맞게 교정했습니다.
