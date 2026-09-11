# T4 Phase 5 — 지능형 로봇 시스템

> 학부 교과 **지능형로봇시스템(3학년 2학기, 이론실습병행 3학점)** · 선이수 = 인공지능피지컬컴퓨팅
> 교과목해설: "로봇의 센서와 액추에이터, 로봇 제어, 경로 계획, 자율주행 등의 기술을 배우며, 실제 로봇 시스템을 구축하고 동작시키는 방법을 실습을 통해 익히게 된다"
>
> ※ 선이수로 지정된 **인공지능피지컬컴퓨팅**은 2026학년도 교육과정표에 없다. 교과목해설 페이지에만 남아 있는 과목이다 — 5-A에서 저장소 자료로 대신 채웠다.

- 목표: 시뮬레이터 위에서 도는 로봇 노드를 직접 만들고, 센서 값으로 움직임을 바꾼다.
- 분량: 약 22시간
- 마지막 학습일: (미학습)

> **중복 안내**: 이 Phase의 강의는 **로보틱스 로드맵**이 훨씬 넓고 깊게 다룬다. 여기는 **학부 한 과목 분량으로 압축한 자체 체크박스**다. 로보틱스 로드맵에서 이미 본 강의는 학습일을 그대로 옮겨 적는다. 로봇 쪽으로 진로를 잡을 생각이면 이 Phase 대신 로보틱스 로드맵을 통째로 도는 편이 낫다.

## 이 단계가 끝나면 할 수 있어야 하는 것

- 센서와 액추에이터가 회로 위에서 어떻게 연결되는지 그린다
- ROS 2의 노드·토픽·서비스가 각각 어떤 통신 방식인지 구분하고 골라 쓴다
- 퍼블리셔와 서브스크라이버를 파이썬으로 직접 짠다
- URDF로 로봇을 기술하고 시뮬레이터에 띄운다
- 순기구학과 역기구학이 각각 무엇을 계산하는지 말한다
- 경로 계획 알고리즘(RRT·PRM 등)이 [T1 Phase 4](../T1%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%20%EA%B8%B0%EC%B4%88%EC%99%80%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98/04%20Phase%204%20-%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%20%ED%83%90%EC%83%89%EA%B3%BC%20%EC%B5%9C%EC%A0%81%ED%99%94.md)의 탐색과 같은 문제임을 안다

## 5-A. 센서·액추에이터와 회로 — 피지컬 컴퓨팅 대체

메인: Hands-on Internet of Things, `Course 1 - IoT Devices`. 사라진 선이수 과목(인공지능피지컬컴퓨팅)의 자리를 메운다

- [ ] [01 Lecture 1 - Introduction to IoT Hardware.md](../../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%202%20-%20IoT%20Circuits/01%20Lecture%201%20-%20Introduction%20to%20IoT%20Hardware.md)
- [ ] [02 Lecture 2 - Background - Electrical Circuit Design.md](../../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%202%20-%20IoT%20Circuits/02%20Lecture%202%20-%20Background%20-%20Electrical%20Circuit%20Design.md)
- [ ] [03 Lecture 3 - Use Case - Something That Lights Up.md](../../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%202%20-%20IoT%20Circuits/03%20Lecture%203%20-%20Use%20Case%20-%20Something%20That%20Lights%20Up.md)
- [ ] [04 Lecture 4 - Use Case - Something That Uses Electricity.md](../../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%202%20-%20IoT%20Circuits/04%20Lecture%204%20-%20Use%20Case%20-%20Something%20That%20Uses%20Electricity.md)
- [ ] [05 Lecture 5 - Use Case - Something That Moves.md](../../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%202%20-%20IoT%20Circuits/05%20Lecture%205%20-%20Use%20Case%20-%20Something%20That%20Moves.md)
- [ ] [06 Lecture 6 - Use Case - Something That Observes.md](../../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%202%20-%20IoT%20Circuits/06%20Lecture%206%20-%20Use%20Case%20-%20Something%20That%20Observes.md)
- [ ] [07 Lecture 7 - Useful Circuits.md](../../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%202%20-%20IoT%20Circuits/07%20Lecture%207%20-%20Useful%20Circuits.md)

- [ ] [01 Lecture 1 - Integrated Circuits in Practice.md](../../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%203%20-%20IoT%20Devices%20Architecture/01%20Lecture%201%20-%20Integrated%20Circuits%20in%20Practice.md)
- [ ] [02 Lecture 2 - Data Encoding - Challenges.md](../../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%203%20-%20IoT%20Devices%20Architecture/02%20Lecture%202%20-%20Data%20Encoding%20-%20Challenges.md)
- [ ] [03 Lecture 3 - Data Encoding - Approaches.md](../../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%203%20-%20IoT%20Devices%20Architecture/03%20Lecture%203%20-%20Data%20Encoding%20-%20Approaches.md)
- [ ] [04 Lecture 4 - Microcontrollers.md](../../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%203%20-%20IoT%20Devices%20Architecture/04%20Lecture%204%20-%20Microcontrollers.md)
- [ ] [05 Lecture 5 - Programmable Circuits.md](../../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%203%20-%20IoT%20Devices%20Architecture/05%20Lecture%205%20-%20Programmable%20Circuits.md)

- [ ] [01 Lecture 1 - IoT Platform Design and Programming.md](../../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%204%20-%20Arduino%20Programming%20and%20Lab%20Submission/01%20Lecture%201%20-%20IoT%20Platform%20Design%20and%20Programming.md)
- [ ] [02 Lecture 2 - Arduino Programming.md](../../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%204%20-%20Arduino%20Programming%20and%20Lab%20Submission/02%20Lecture%202%20-%20Arduino%20Programming.md)

## 5-B. ROS 2 — 로봇 소프트웨어의 표준

메인: ROS 2 for Beginners (ROS Jazzy · 2026)

Section 2~3 — 설치와 첫 프로그램

- [ ] [01 Intro.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%202%20-%20Install%20ROS2%20and%20Setup%20Your%20Environment/01%20Intro.md)
- [ ] [02 Which ROS 2 Distribution to Use.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%202%20-%20Install%20ROS2%20and%20Setup%20Your%20Environment/02%20Which%20ROS%202%20Distribution%20to%20Use.md)
- [ ] [03 Install Ubuntu 24.04 on a Virtual Machine (VirtualBox).md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%202%20-%20Install%20ROS2%20and%20Setup%20Your%20Environment/03%20Install%20Ubuntu%2024.04%20on%20a%20Virtual%20Machine%20%28VirtualBox%29.md)
- [ ] [04 Note - New extension for VS Code.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%202%20-%20Install%20ROS2%20and%20Setup%20Your%20Environment/04%20Note%20-%20New%20extension%20for%20VS%20Code.md)
- [ ] [05 Programming Tools I Will Use During this Course.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%202%20-%20Install%20ROS2%20and%20Setup%20Your%20Environment/05%20Programming%20Tools%20I%20Will%20Use%20During%20this%20Course.md)
- [ ] [06 Install ROS 2 Jazzy on Ubuntu 24.04.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%202%20-%20Install%20ROS2%20and%20Setup%20Your%20Environment/06%20Install%20ROS%202%20Jazzy%20on%20Ubuntu%2024.04.md)
- [ ] [07 Set up your Environment for ROS 2.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%202%20-%20Install%20ROS2%20and%20Setup%20Your%20Environment/07%20Set%20up%20your%20Environment%20for%20ROS%202.md)
- [ ] [08 Launch a ROS 2 Program!.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%202%20-%20Install%20ROS2%20and%20Setup%20Your%20Environment/08%20Launch%20a%20ROS%202%20Program!.md)
- [ ] [09 Section Conclusion.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%202%20-%20Install%20ROS2%20and%20Setup%20Your%20Environment/09%20Section%20Conclusion.md)

- [ ] [01 Intro.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%203%20-%20Write%20Your%20First%20ROS%202%20Program/01%20Intro.md)
- [ ] [02 Create a ROS 2 Workspace.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%203%20-%20Write%20Your%20First%20ROS%202%20Program/02%20Create%20a%20ROS%202%20Workspace.md)
- [ ] [03 Create a Python Package.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%203%20-%20Write%20Your%20First%20ROS%202%20Program/03%20Create%20a%20Python%20Package.md)
- [ ] [04 Create a C++ Package.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%203%20-%20Write%20Your%20First%20ROS%202%20Program/04%20Create%20a%20C++%20Package.md)
- [ ] [05 What is a ROS2 Node.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%203%20-%20Write%20Your%20First%20ROS%202%20Program/05%20What%20is%20a%20ROS2%20Node.md)
- [ ] [06 Write a Python Node - Minimal Code.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%203%20-%20Write%20Your%20First%20ROS%202%20Program/06%20Write%20a%20Python%20Node%20-%20Minimal%20Code.md)
- [ ] [07 Write a Python Node - With OOP.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%203%20-%20Write%20Your%20First%20ROS%202%20Program/07%20Write%20a%20Python%20Node%20-%20With%20OOP.md)
- [ ] [08 Write a C++ Node - Minimal Code.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%203%20-%20Write%20Your%20First%20ROS%202%20Program/08%20Write%20a%20C++%20Node%20-%20Minimal%20Code.md)
- [ ] [09 Write a C++ Node - With OOP.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%203%20-%20Write%20Your%20First%20ROS%202%20Program/09%20Write%20a%20C++%20Node%20-%20With%20OOP.md)
- [ ] [10 OOP Template for Your Nodes.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%203%20-%20Write%20Your%20First%20ROS%202%20Program/10%20OOP%20Template%20for%20Your%20Nodes.md)
- [ ] [11 More about the ROS 2 Client Libraries for Different Languages.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%203%20-%20Write%20Your%20First%20ROS%202%20Program/11%20More%20about%20the%20ROS%202%20Client%20Libraries%20for%20Different%20Languages.md)
- [ ] [12 Section Conclusion.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%203%20-%20Write%20Your%20First%20ROS%202%20Program/12%20Section%20Conclusion.md)

Section 4~5 — 도구와 토픽. **노드끼리 값을 주고받는 기본 방식**

- [ ] [01 Intro.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%204%20-%20Introduction%20to%20ROS%202%20Tools/01%20Intro.md)
- [ ] [02 Introspect Your Nodes With ros2 cli.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%204%20-%20Introduction%20to%20ROS%202%20Tools/02%20Introspect%20Your%20Nodes%20With%20ros2%20cli.md)
- [ ] [03 Rename a Node at Runtime.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%204%20-%20Introduction%20to%20ROS%202%20Tools/03%20Rename%20a%20Node%20at%20Runtime.md)
- [ ] [04 Colcon.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%204%20-%20Introduction%20to%20ROS%202%20Tools/04%20Colcon.md)
- [ ] [05 Rqt and rqt_graph.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%204%20-%20Introduction%20to%20ROS%202%20Tools/05%20Rqt%20and%20rqt_graph.md)
- [ ] [06 Discover Turtlesim.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%204%20-%20Introduction%20to%20ROS%202%20Tools/06%20Discover%20Turtlesim.md)
- [ ] [07 Activity 01.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%204%20-%20Introduction%20to%20ROS%202%20Tools/07%20Activity%2001.md)
- [ ] [08 Activity 01 - Solution.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%204%20-%20Introduction%20to%20ROS%202%20Tools/08%20Activity%2001%20-%20Solution.md)
- [ ] [09 Section Conclusion.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%204%20-%20Introduction%20to%20ROS%202%20Tools/09%20Section%20Conclusion.md)

- [ ] [01 Intro.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%205%20-%20ROS%202%20Topics%20-%20Make%20Your%20Nodes%20Communicate%20Between%20Each%20Other/01%20Intro.md)
- [ ] [02 What is a ROS 2 Topic.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%205%20-%20ROS%202%20Topics%20-%20Make%20Your%20Nodes%20Communicate%20Between%20Each%20Other/02%20What%20is%20a%20ROS%202%20Topic.md)
- [ ] [03 Write a Python Publisher.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%205%20-%20ROS%202%20Topics%20-%20Make%20Your%20Nodes%20Communicate%20Between%20Each%20Other/03%20Write%20a%20Python%20Publisher.md)
- [ ] [04 Write a Python Subscriber.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%205%20-%20ROS%202%20Topics%20-%20Make%20Your%20Nodes%20Communicate%20Between%20Each%20Other/04%20Write%20a%20Python%20Subscriber.md)
- [ ] [05 Write a C++ Publisher.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%205%20-%20ROS%202%20Topics%20-%20Make%20Your%20Nodes%20Communicate%20Between%20Each%20Other/05%20Write%20a%20C++%20Publisher.md)
- [ ] [06 Write a C++ Subscriber.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%205%20-%20ROS%202%20Topics%20-%20Make%20Your%20Nodes%20Communicate%20Between%20Each%20Other/06%20Write%20a%20C++%20Subscriber.md)
- [ ] [07 Introspect ROS 2 Topics with Command Line Tools.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%205%20-%20ROS%202%20Topics%20-%20Make%20Your%20Nodes%20Communicate%20Between%20Each%20Other/07%20Introspect%20ROS%202%20Topics%20with%20Command%20Line%20Tools.md)
- [ ] [08 Remap a Topic at Runtime.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%205%20-%20ROS%202%20Topics%20-%20Make%20Your%20Nodes%20Communicate%20Between%20Each%20Other/08%20Remap%20a%20Topic%20at%20Runtime.md)
- [ ] [09 Monitor Topics With rqt and rqt_graph.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%205%20-%20ROS%202%20Topics%20-%20Make%20Your%20Nodes%20Communicate%20Between%20Each%20Other/09%20Monitor%20Topics%20With%20rqt%20and%20rqt_graph.md)
- [ ] [10 Experiment on Topics with Turtlesim.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%205%20-%20ROS%202%20Topics%20-%20Make%20Your%20Nodes%20Communicate%20Between%20Each%20Other/10%20Experiment%20on%20Topics%20with%20Turtlesim.md)
- [ ] [11 Activity 02 - ROS2 Topics.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%205%20-%20ROS%202%20Topics%20-%20Make%20Your%20Nodes%20Communicate%20Between%20Each%20Other/11%20Activity%2002%20-%20ROS2%20Topics.md)
- [ ] [12 Activity 02 - Solution [1-2].md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%205%20-%20ROS%202%20Topics%20-%20Make%20Your%20Nodes%20Communicate%20Between%20Each%20Other/12%20Activity%2002%20-%20Solution%20%5B1-2%5D.md)
- [ ] [13 Activity 02 - Solution [2-2].md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%205%20-%20ROS%202%20Topics%20-%20Make%20Your%20Nodes%20Communicate%20Between%20Each%20Other/13%20Activity%2002%20-%20Solution%20%5B2-2%5D.md)
- [ ] [14 Extra - Replay Topic Data with Bags.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%205%20-%20ROS%202%20Topics%20-%20Make%20Your%20Nodes%20Communicate%20Between%20Each%20Other/14%20Extra%20-%20Replay%20Topic%20Data%20with%20Bags.md)
- [ ] [15 Section Conclusion.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%205%20-%20ROS%202%20Topics%20-%20Make%20Your%20Nodes%20Communicate%20Between%20Each%20Other/15%20Section%20Conclusion.md)

Section 6~7 — 서비스와 커스텀 인터페이스

- [ ] [01 Intro.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%206%20-%20ROS%202%20Services%20-%20Client-Server%20Communication%20Between%20Nodes/01%20Intro.md)
- [ ] [02 What is a ROS 2 Service.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%206%20-%20ROS%202%20Services%20-%20Client-Server%20Communication%20Between%20Nodes/02%20What%20is%20a%20ROS%202%20Service.md)
- [ ] [03 Write a Python Service Server.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%206%20-%20ROS%202%20Services%20-%20Client-Server%20Communication%20Between%20Nodes/03%20Write%20a%20Python%20Service%20Server.md)
- [ ] [04 Write a Python Service Client - no OOP.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%206%20-%20ROS%202%20Services%20-%20Client-Server%20Communication%20Between%20Nodes/04%20Write%20a%20Python%20Service%20Client%20-%20no%20OOP.md)
- [ ] [05 Write a Python Service Client - OOP.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%206%20-%20ROS%202%20Services%20-%20Client-Server%20Communication%20Between%20Nodes/05%20Write%20a%20Python%20Service%20Client%20-%20OOP.md)
- [ ] [06 Write a C++ Service Server.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%206%20-%20ROS%202%20Services%20-%20Client-Server%20Communication%20Between%20Nodes/06%20Write%20a%20C++%20Service%20Server.md)
- [ ] [07 Write a C++ Service Client - no OOP.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%206%20-%20ROS%202%20Services%20-%20Client-Server%20Communication%20Between%20Nodes/07%20Write%20a%20C++%20Service%20Client%20-%20no%20OOP.md)
- [ ] [08 Write a C++ Service Client - OOP.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%206%20-%20ROS%202%20Services%20-%20Client-Server%20Communication%20Between%20Nodes/08%20Write%20a%20C++%20Service%20Client%20-%20OOP.md)
- [ ] [09 Introspect Services with the ros2 Command Line.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%206%20-%20ROS%202%20Services%20-%20Client-Server%20Communication%20Between%20Nodes/09%20Introspect%20Services%20with%20the%20ros2%20Command%20Line.md)
- [ ] [10 Remap a Service at Runtime.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%206%20-%20ROS%202%20Services%20-%20Client-Server%20Communication%20Between%20Nodes/10%20Remap%20a%20Service%20at%20Runtime.md)
- [ ] [11 Experiment on Services with Turtlesim.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%206%20-%20ROS%202%20Services%20-%20Client-Server%20Communication%20Between%20Nodes/11%20Experiment%20on%20Services%20with%20Turtlesim.md)
- [ ] [12 Activitiy 03 - ROS 2 Services.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%206%20-%20ROS%202%20Services%20-%20Client-Server%20Communication%20Between%20Nodes/12%20Activitiy%2003%20-%20ROS%202%20Services.md)
- [ ] [13 Activity 03 - Solution.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%206%20-%20ROS%202%20Services%20-%20Client-Server%20Communication%20Between%20Nodes/13%20Activity%2003%20-%20Solution.md)
- [ ] [14 Section Conclusion.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%206%20-%20ROS%202%20Services%20-%20Client-Server%20Communication%20Between%20Nodes/14%20Section%20Conclusion.md)

- [ ] [01 Intro.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%207%20-%20Create%20Custom%20ROS%202%20Interfaces%20%28Msg%20and%20Srv%29/01%20Intro.md)
- [ ] [02 What are ROS 2 Interfaces.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%207%20-%20Create%20Custom%20ROS%202%20Interfaces%20%28Msg%20and%20Srv%29/02%20What%20are%20ROS%202%20Interfaces.md)
- [ ] [03 Create and Build Your First Custom Msg.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%207%20-%20Create%20Custom%20ROS%202%20Interfaces%20%28Msg%20and%20Srv%29/03%20Create%20and%20Build%20Your%20First%20Custom%20Msg.md)
- [ ] [04 Use Your Custom Msg in a Python Node.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%207%20-%20Create%20Custom%20ROS%202%20Interfaces%20%28Msg%20and%20Srv%29/04%20Use%20Your%20Custom%20Msg%20in%20a%20Python%20Node.md)
- [ ] [05 Use Your Custom Msg in a C++ Node.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%207%20-%20Create%20Custom%20ROS%202%20Interfaces%20%28Msg%20and%20Srv%29/05%20Use%20Your%20Custom%20Msg%20in%20a%20C++%20Node.md)
- [ ] [06 Create and Build Your First Custom Srv.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%207%20-%20Create%20Custom%20ROS%202%20Interfaces%20%28Msg%20and%20Srv%29/06%20Create%20and%20Build%20Your%20First%20Custom%20Srv.md)
- [ ] [07 Introspect Interfaces with the ros2 Command Line.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%207%20-%20Create%20Custom%20ROS%202%20Interfaces%20%28Msg%20and%20Srv%29/07%20Introspect%20Interfaces%20with%20the%20ros2%20Command%20Line.md)
- [ ] [08 Activity 04 - ROS 2 Custom Interfaces.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%207%20-%20Create%20Custom%20ROS%202%20Interfaces%20%28Msg%20and%20Srv%29/08%20Activity%2004%20-%20ROS%202%20Custom%20Interfaces.md)
- [ ] [09 Activity 04 - Solution [1-3].md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%207%20-%20Create%20Custom%20ROS%202%20Interfaces%20%28Msg%20and%20Srv%29/09%20Activity%2004%20-%20Solution%20%5B1-3%5D.md)
- [ ] [10 Activity 04 - Solution [2-3].md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%207%20-%20Create%20Custom%20ROS%202%20Interfaces%20%28Msg%20and%20Srv%29/10%20Activity%2004%20-%20Solution%20%5B2-3%5D.md)
- [ ] [11 Activity 04 - Solution [3-3].md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%207%20-%20Create%20Custom%20ROS%202%20Interfaces%20%28Msg%20and%20Srv%29/11%20Activity%2004%20-%20Solution%20%5B3-3%5D.md)
- [ ] [12 Section Conclusion.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%207%20-%20Create%20Custom%20ROS%202%20Interfaces%20%28Msg%20and%20Srv%29/12%20Section%20Conclusion.md)

Section 8~10 — 파라미터·런치·종합 프로젝트

- [ ] [01 Intro.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%208%20-%20Change%20Node%20Settings%20at%20Runtime%20with%20ROS%202%20Parameters/01%20Intro.md)
- [ ] [02 What is a ROS 2 Parameter.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%208%20-%20Change%20Node%20Settings%20at%20Runtime%20with%20ROS%202%20Parameters/02%20What%20is%20a%20ROS%202%20Parameter.md)
- [ ] [03 Using Parameters in your Python Nodes.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%208%20-%20Change%20Node%20Settings%20at%20Runtime%20with%20ROS%202%20Parameters/03%20Using%20Parameters%20in%20your%20Python%20Nodes.md)
- [ ] [04 Using Parameters in your C++ Nodes.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%208%20-%20Change%20Node%20Settings%20at%20Runtime%20with%20ROS%202%20Parameters/04%20Using%20Parameters%20in%20your%20C++%20Nodes.md)
- [ ] [05 Experiment on Parameters with Turtlesim.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%208%20-%20Change%20Node%20Settings%20at%20Runtime%20with%20ROS%202%20Parameters/05%20Experiment%20on%20Parameters%20with%20Turtlesim.md)
- [ ] [06 YAML Parameter Files.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%208%20-%20Change%20Node%20Settings%20at%20Runtime%20with%20ROS%202%20Parameters/06%20YAML%20Parameter%20Files.md)
- [ ] [07 Activity 05 - ROS 2 Parameters.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%208%20-%20Change%20Node%20Settings%20at%20Runtime%20with%20ROS%202%20Parameters/07%20Activity%2005%20-%20ROS%202%20Parameters.md)
- [ ] [08 Activity 05 - Solution [1-2].md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%208%20-%20Change%20Node%20Settings%20at%20Runtime%20with%20ROS%202%20Parameters/08%20Activity%2005%20-%20Solution%20%5B1-2%5D.md)
- [ ] [09 Activity 05 - Solution [2-2].md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%208%20-%20Change%20Node%20Settings%20at%20Runtime%20with%20ROS%202%20Parameters/09%20Activity%2005%20-%20Solution%20%5B2-2%5D.md)
- [ ] [10 Extra - Parameter Callbacks.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%208%20-%20Change%20Node%20Settings%20at%20Runtime%20with%20ROS%202%20Parameters/10%20Extra%20-%20Parameter%20Callbacks.md)
- [ ] [11 Section Conclusion.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%208%20-%20Change%20Node%20Settings%20at%20Runtime%20with%20ROS%202%20Parameters/11%20Section%20Conclusion.md)

- [ ] [01 Intro.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%209%20-%20Scale%20Your%20Application%20With%20ROS%202%20Launch%20Files/01%20Intro.md)
- [ ] [02 What is a ROS 2 Launch File.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%209%20-%20Scale%20Your%20Application%20With%20ROS%202%20Launch%20Files/02%20What%20is%20a%20ROS%202%20Launch%20File.md)
- [ ] [03 Create and Install a Launch File (XML).md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%209%20-%20Scale%20Your%20Application%20With%20ROS%202%20Launch%20Files/03%20Create%20and%20Install%20a%20Launch%20File%20%28XML%29.md)
- [ ] [04 Python Launch Files (Python vs XML).md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%209%20-%20Scale%20Your%20Application%20With%20ROS%202%20Launch%20Files/04%20Python%20Launch%20Files%20%28Python%20vs%20XML%29.md)
- [ ] [05 Remappings in a Launch File.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%209%20-%20Scale%20Your%20Application%20With%20ROS%202%20Launch%20Files/05%20Remappings%20in%20a%20Launch%20File.md)
- [ ] [06 Load Parameters in a Launch File.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%209%20-%20Scale%20Your%20Application%20With%20ROS%202%20Launch%20Files/06%20Load%20Parameters%20in%20a%20Launch%20File.md)
- [ ] [07 Add Namespaces to Your Nodes.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%209%20-%20Scale%20Your%20Application%20With%20ROS%202%20Launch%20Files/07%20Add%20Namespaces%20to%20Your%20Nodes.md)
- [ ] [08 Activity 06 - ROS 2 Launch Files.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%209%20-%20Scale%20Your%20Application%20With%20ROS%202%20Launch%20Files/08%20Activity%2006%20-%20ROS%202%20Launch%20Files.md)
- [ ] [09 Activity 06 - Solution.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%209%20-%20Scale%20Your%20Application%20With%20ROS%202%20Launch%20Files/09%20Activity%2006%20-%20Solution.md)
- [ ] [10 Section Conclusion.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%209%20-%20Scale%20Your%20Application%20With%20ROS%202%20Launch%20Files/10%20Section%20Conclusion.md)

- [ ] [01 Turtlesim Project - Final Result Overview.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%2010%20-%20Complete%20Project%20With%20Turtlesim/01%20Turtlesim%20Project%20-%20Final%20Result%20Overview.md)
- [ ] [02 Your Challenge.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%2010%20-%20Complete%20Project%20With%20Turtlesim/02%20Your%20Challenge.md)
- [ ] [03 Some Tips to Get Started.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%2010%20-%20Complete%20Project%20With%20Turtlesim/03%20Some%20Tips%20to%20Get%20Started.md)
- [ ] [04 Project Solution [1-6].md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%2010%20-%20Complete%20Project%20With%20Turtlesim/04%20Project%20Solution%20%5B1-6%5D.md)
- [ ] [05 Project Solution [2-6].md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%2010%20-%20Complete%20Project%20With%20Turtlesim/05%20Project%20Solution%20%5B2-6%5D.md)
- [ ] [06 Project Solution [3-6].md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%2010%20-%20Complete%20Project%20With%20Turtlesim/06%20Project%20Solution%20%5B3-6%5D.md)
- [ ] [07 Project Solution [4-6].md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%2010%20-%20Complete%20Project%20With%20Turtlesim/07%20Project%20Solution%20%5B4-6%5D.md)
- [ ] [08 Project Solution [5-6].md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%2010%20-%20Complete%20Project%20With%20Turtlesim/08%20Project%20Solution%20%5B5-6%5D.md)
- [ ] [09 Project Solution [6-6].md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%2010%20-%20Complete%20Project%20With%20Turtlesim/09%20Project%20Solution%20%5B6-6%5D.md)
- [ ] [10 Project Conclusion.md](../../../courses/udemy/ROS%202%20for%20Beginners%20%28ROS%20Jazzy%20-%202026%29/Section%2010%20-%20Complete%20Project%20With%20Turtlesim/10%20Project%20Conclusion.md)

## 5-C. 로봇 모델링과 제어

메인: Robotics and ROS 2 - Learn by Doing! Manipulators

Section 4 — 디지털 트윈(URDF·시뮬레이터)

- [ ] [01 Robot Description.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%204%20-%20Digital%20Twin/01%20Robot%20Description.md)
- [ ] [02 URDF.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%204%20-%20Digital%20Twin/02%20URDF.md)
- [ ] [03 [LAB] Create the URDF Model.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%204%20-%20Digital%20Twin/03%20%5BLAB%5D%20Create%20the%20URDF%20Model.md)
- [ ] [04 [LAB] Complete the URDF Model.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%204%20-%20Digital%20Twin/04%20%5BLAB%5D%20Complete%20the%20URDF%20Model.md)
- [ ] [05 RViz 2.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%204%20-%20Digital%20Twin/05%20RViz%202.md)
- [ ] [06 Parameters.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%204%20-%20Digital%20Twin/06%20Parameters.md)
- [ ] [07 [PY] Parameters.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%204%20-%20Digital%20Twin/07%20%5BPY%5D%20Parameters.md)
- [ ] [08 [C++] Parameters.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%204%20-%20Digital%20Twin/08%20%5BC++%5D%20Parameters.md)
- [ ] [09 [LAB] ROS 2 Parameter CLI.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%204%20-%20Digital%20Twin/09%20%5BLAB%5D%20ROS%202%20Parameter%20CLI.md)
- [ ] [10 퀴즈 3 - URDF and Parameters.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%204%20-%20Digital%20Twin/10%20%ED%80%B4%EC%A6%88%203%20-%20URDF%20and%20Parameters.md)
- [ ] [11 [LAB] Visualize the Robot.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%204%20-%20Digital%20Twin/11%20%5BLAB%5D%20Visualize%20the%20Robot.md)
- [ ] [12 Launch Files.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%204%20-%20Digital%20Twin/12%20Launch%20Files.md)
- [ ] [13 [LAB] Visualize the Robot with Launch Files.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%204%20-%20Digital%20Twin/13%20%5BLAB%5D%20Visualize%20the%20Robot%20with%20Launch%20Files.md)
- [ ] [14 과제 1 - Add an RGB Camera to your Robot.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%204%20-%20Digital%20Twin/14%20%EA%B3%BC%EC%A0%9C%201%20-%20Add%20an%20RGB%20Camera%20to%20your%20Robot.md)
- [ ] [15 Gazebo.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%204%20-%20Digital%20Twin/15%20Gazebo.md)
- [ ] [16 [LAB] Simulate the Robot.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%204%20-%20Digital%20Twin/16%20%5BLAB%5D%20Simulate%20the%20Robot.md)
- [ ] [17 [LAB] Launch the Simulation.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%204%20-%20Digital%20Twin/17%20%5BLAB%5D%20Launch%20the%20Simulation.md)
- [ ] [18 과제 2 - Simulate an RGB Camera in Gazebo.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%204%20-%20Digital%20Twin/18%20%EA%B3%BC%EC%A0%9C%202%20-%20Simulate%20an%20RGB%20Camera%20in%20Gazebo.md)

Section 5 — 제어

- [ ] [01 ROS 2 Control.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%205%20-%20Control/01%20ROS%202%20Control.md)
- [ ] [02 Control Types.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%205%20-%20Control/02%20Control%20Types.md)
- [ ] [03 [LAB] ros2_control with Gazebo.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%205%20-%20Control/03%20%5BLAB%5D%20ros2_control%20with%20Gazebo.md)
- [ ] [04 YAML Configuration File.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%205%20-%20Control/04%20YAML%20Configuration%20File.md)
- [ ] [05 [LAB] Configure ros2_control.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%205%20-%20Control/05%20%5BLAB%5D%20Configure%20ros2_control.md)
- [ ] [06 [LAB] Launch the Controller.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%205%20-%20Control/06%20%5BLAB%5D%20Launch%20the%20Controller.md)
- [ ] [07 [LAB] ros2_control CLI.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%205%20-%20Control/07%20%5BLAB%5D%20ros2_control%20CLI.md)

Section 6 — 기구학 (선택 — 수학이 무거우면 개념만)

- [ ] [01 Robot Kinematics.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/01%20Robot%20Kinematics.md)
- [ ] [02 Pose of a Robot Arm.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/02%20Pose%20of%20a%20Robot%20Arm.md)
- [ ] [03 Translation Vector.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/03%20Translation%20Vector.md)
- [ ] [04 Elementary Rotations.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/04%20Elementary%20Rotations.md)
- [ ] [05 Rotation Matrix.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/05%20Rotation%20Matrix.md)
- [ ] [06 Transformation Matrix.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/06%20Transformation%20Matrix.md)
- [ ] [07 Forward Kinematics.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/07%20Forward%20Kinematics.md)
- [ ] [08 TF2 Library.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/08%20TF2%20Library.md)
- [ ] [09 [LAB] TF2 Tools.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/09%20%5BLAB%5D%20TF2%20Tools.md)
- [ ] [10 ROS 2 Services.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/10%20ROS%202%20Services.md)
- [ ] [11 [PY] Service Server.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/11%20%5BPY%5D%20Service%20Server.md)
- [ ] [12 [C++] Service Server.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/12%20%5BC++%5D%20Service%20Server.md)
- [ ] [13 Static and Dynamic Transformations.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/13%20Static%20and%20Dynamic%20Transformations.md)
- [ ] [14 [PY] Service Client.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/14%20%5BPY%5D%20Service%20Client.md)
- [ ] [15 [C++] Service Client.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/15%20%5BC++%5D%20Service%20Client.md)
- [ ] [16 Angle Representations.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/16%20Angle%20Representations.md)
- [ ] [17 Euler Angles.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/17%20Euler%20Angles.md)
- [ ] [18 Quaternion.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/18%20Quaternion.md)
- [ ] [19 [PY] Euler to Quaternion Service.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/19%20%5BPY%5D%20Euler%20to%20Quaternion%20Service.md)
- [ ] [20 [C++] Euler to Quaternion Service.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/20%20%5BC++%5D%20Euler%20to%20Quaternion%20Service.md)
- [ ] [21 Inverse Kinematics.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/21%20Inverse%20Kinematics.md)
- [ ] [22 MoveIt! 2.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/22%20MoveIt!%202.md)
- [ ] [23 [LAB] Configure MoveIt! 2.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/23%20%5BLAB%5D%20Configure%20MoveIt!%202.md)
- [ ] [24 [LAB] Launch MoveIt! 2.md](../../../courses/udemy/Robotics%20and%20ROS%202%20-%20Learn%20by%20Doing!%20Manipulators/Section%206%20-%20Kinematics/24%20%5BLAB%5D%20Launch%20MoveIt!%202.md)

## 5-D. 경로 계획 — 이론

함께 보기: Modern Robotics, `Course 4 - Robot Motion Planning and Control` Module 1~2. **[T1 Phase 4](../T1%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D%20%EA%B8%B0%EC%B4%88%EC%99%80%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98/04%20Phase%204%20-%20%EC%9D%B8%EA%B3%B5%EC%A7%80%EB%8A%A5%20%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98%20%ED%83%90%EC%83%89%EA%B3%BC%20%EC%B5%9C%EC%A0%81%ED%99%94.md)의 탐색이 여기서 물리 공간으로 확장된다**

- [ ] [01 Overview of Motion Planning (Chapter 10.1).md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%204%20-%20Robot%20Motion%20Planning%20and%20Control/Module%201%20-%20Chapter%2010%20-%20Motion%20Planning%20%28Part%201%20of%202%29/01%20Overview%20of%20Motion%20Planning%20%28Chapter%2010.1%29.md)
- [ ] [02 C-Space Obstacles (Chapter 10.2.1).md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%204%20-%20Robot%20Motion%20Planning%20and%20Control/Module%201%20-%20Chapter%2010%20-%20Motion%20Planning%20%28Part%201%20of%202%29/02%20C-Space%20Obstacles%20%28Chapter%2010.2.1%29.md)
- [ ] [03 Graphs and Trees (Chapter 10.2.3).md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%204%20-%20Robot%20Motion%20Planning%20and%20Control/Module%201%20-%20Chapter%2010%20-%20Motion%20Planning%20%28Part%201%20of%202%29/03%20Graphs%20and%20Trees%20%28Chapter%2010.2.3%29.md)
- [ ] [04 Graph Search (Chapter 10.2.4).md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%204%20-%20Robot%20Motion%20Planning%20and%20Control/Module%201%20-%20Chapter%2010%20-%20Motion%20Planning%20%28Part%201%20of%202%29/04%20Graph%20Search%20%28Chapter%2010.2.4%29.md)
- [ ] [05 Complete Path Planners (Chapter 10.3).md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%204%20-%20Robot%20Motion%20Planning%20and%20Control/Module%201%20-%20Chapter%2010%20-%20Motion%20Planning%20%28Part%201%20of%202%29/05%20Complete%20Path%20Planners%20%28Chapter%2010.3%29.md)

- [ ] [01 Grid Methods for Motion Planning (Chapter 10.4).md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%204%20-%20Robot%20Motion%20Planning%20and%20Control/Module%202%20-%20Chapter%2010%20-%20Motion%20Planning%20%28Part%202%20of%202%29/01%20Grid%20Methods%20for%20Motion%20Planning%20%28Chapter%2010.4%29.md)
- [ ] [02 Sampling Methods for Motion Planning (Chapter 10.5, Part 1 of 2).md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%204%20-%20Robot%20Motion%20Planning%20and%20Control/Module%202%20-%20Chapter%2010%20-%20Motion%20Planning%20%28Part%202%20of%202%29/02%20Sampling%20Methods%20for%20Motion%20Planning%20%28Chapter%2010.5,%20Part%201%20of%202%29.md)
- [ ] [03 Sampling Methods for Motion Planning (Chapter 10.5, Part 2 of 2).md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%204%20-%20Robot%20Motion%20Planning%20and%20Control/Module%202%20-%20Chapter%2010%20-%20Motion%20Planning%20%28Part%202%20of%202%29/03%20Sampling%20Methods%20for%20Motion%20Planning%20%28Chapter%2010.5,%20Part%202%20of%202%29.md)
- [ ] [04 Virtual Potential Fields (Chapter 10.6).md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%204%20-%20Robot%20Motion%20Planning%20and%20Control/Module%202%20-%20Chapter%2010%20-%20Motion%20Planning%20%28Part%202%20of%202%29/04%20Virtual%20Potential%20Fields%20%28Chapter%2010.6%29.md)
- [ ] [05 Nonlinear Optimization (Chapter 10.7).md](../../../courses/mooc/Robotics/Modern%20Robotics%20-%20Mechanics,%20Planning,%20and%20Control/Course%204%20-%20Robot%20Motion%20Planning%20and%20Control/Module%202%20-%20Chapter%2010%20-%20Motion%20Planning%20%28Part%202%20of%202%29/05%20Nonlinear%20Optimization%20%28Chapter%2010.7%29.md)

## 산출물

시뮬레이터에서 도는 ROS 2 패키지 하나.

1. 노드 2개 이상이 토픽으로 통신 — 하나는 센서 값(또는 시뮬레이션 값)을 발행, 하나는 그걸 받아 움직임을 결정
2. 런치 파일 하나로 전체를 띄운다
3. 파라미터로 동작을 바꿀 수 있게 한다 (속도·임계값 등)
4. **비전을 붙인다면 가산점**: [Phase 4](04%20Phase%204%20-%20%EC%BB%B4%ED%93%A8%ED%84%B0%EB%B9%84%EC%A0%84%20%EC%9D%91%EC%9A%A9.md)의 객체 탐지 결과를 토픽으로 발행해 로봇이 반응하게 한다. 학부 교과목해설의 "자율주행"에 가장 가까운 형태다

## 다음 단계

→ 트랙 완료. [T5 AI 서비스 개발과 인프라](../T5%20AI%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EA%B0%9C%EB%B0%9C%EA%B3%BC%20%EC%9D%B8%ED%94%84%EB%9D%BC/README.md) 로 넘어간다.
