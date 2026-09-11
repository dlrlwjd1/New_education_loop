# The Bits and Bytes of Computer Networking

- 플랫폼: MOOC
- 제공: Google (Google IT Support Professional Certificate의 2번째 코스)
- 강좌 링크: [mooc.org/learn/computer-networking](https://www.mooc.org/learn/computer-networking)
- 구성: 6개 모듈, 영상 91개 — Transcript 기반 한국어 정리 완료
- 제외: 읽기 자료·퀴즈·채점 과제

네트워킹을 물리 계층부터 애플리케이션 계층까지 **TCP/IP 5계층 모델**로 훑고, DNS·DHCP·NAT·VPN 같은 네트워크 서비스와 진단 도구까지 다루는 입문 강좌. 네트워크 엔지니어가 아니라 **IT 지원 실무자에게 필요한 것**에 초점을 맞추며, 특히 **DNS와 트러블슈팅에 많은 분량**을 쓴다.

> 이 코스는 `study-progress/네트워크 서비스 로드맵/`의 **Phase 2(DNS) 공백을 메우기 위해** 수강했다. Module 4가 그 Phase에 직접 대응하고, Module 6의 이름 해석 도구·공개 DNS·호스트 파일이 Phase 9(관측과 장애 진단)에, Module 2의 CIDR·서브넷팅이 Phase 1의 공백에 대응한다.

## 모듈 구성

### Module 1 - Introduction to Networking (영상 15개)

물리 계층과 데이터 링크 계층. TCP/IP 5계층 모델, 케이블, 허브·스위치·라우터, 이더넷과 MAC 주소, 이더넷 프레임 해부.

- [01 Course Introduction](Module%201%20-%20Introduction%20to%20Networking/01%20Course%20Introduction.md)
- [02 The TCP-IP Five-Layer Network Model](Module%201%20-%20Introduction%20to%20Networking/02%20The%20TCP-IP%20Five-Layer%20Network%20Model.md)
- [03 Alex - Why networking is important](Module%201%20-%20Introduction%20to%20Networking/03%20Alex%20-%20Why%20networking%20is%20important.md)
- [04 Cables](Module%201%20-%20Introduction%20to%20Networking/04%20Cables.md)
- [05 Hubs and Switches](Module%201%20-%20Introduction%20to%20Networking/05%20Hubs%20and%20Switches.md)
- [06 Routers](Module%201%20-%20Introduction%20to%20Networking/06%20Routers.md)
- [07 Servers and Clients](Module%201%20-%20Introduction%20to%20Networking/07%20Servers%20and%20Clients.md)
- [08 Sergio - Being a network engineer](Module%201%20-%20Introduction%20to%20Networking/08%20Sergio%20-%20Being%20a%20network%20engineer.md)
- [09 Moving Bits Across the Wire](Module%201%20-%20Introduction%20to%20Networking/09%20Moving%20Bits%20Across%20the%20Wire.md)
- [10 Twisted Pair Cabling and Duplexing](Module%201%20-%20Introduction%20to%20Networking/10%20Twisted%20Pair%20Cabling%20and%20Duplexing.md)
- [11 Network Ports and Patch Panels](Module%201%20-%20Introduction%20to%20Networking/11%20Network%20Ports%20and%20Patch%20Panels.md)
- [12 Ethernet and MAC Addresses](Module%201%20-%20Introduction%20to%20Networking/12%20Ethernet%20and%20MAC%20Addresses.md)
- [13 Unicast, Multicast, and Broadcast](Module%201%20-%20Introduction%20to%20Networking/13%20Unicast%2C%20Multicast%2C%20and%20Broadcast.md)
- [14 Dissecting an Ethernet Frame](Module%201%20-%20Introduction%20to%20Networking/14%20Dissecting%20an%20Ethernet%20Frame.md)
- [15 Victor - Practical experience in IT](Module%201%20-%20Introduction%20to%20Networking/15%20Victor%20-%20Practical%20experience%20in%20IT.md)

### Module 2 - The Network Layer (영상 18개)

IP 주소 체계와 서브넷팅. IPv4 데이터그램과 캡슐화, 주소 클래스, ARP, 이진 계산, CIDR, 라우팅과 라우팅 테이블, 라우팅 프로토콜.

- [01 Introduction to The Network Layer](Module%202%20-%20The%20Network%20Layer/01%20Introduction%20to%20The%20Network%20Layer.md)
- [02 The Network Layer](Module%202%20-%20The%20Network%20Layer/02%20The%20Network%20Layer.md)
- [03 IPv4 Addresses](Module%202%20-%20The%20Network%20Layer/03%20IPv4%20Addresses.md)
- [04 IPv4 Datagram and Encapsulation](Module%202%20-%20The%20Network%20Layer/04%20IPv4%20Datagram%20and%20Encapsulation.md)
- [05 IPv4 Address Classes](Module%202%20-%20The%20Network%20Layer/05%20IPv4%20Address%20Classes.md)
- [06 Address Resolution Protocol](Module%202%20-%20The%20Network%20Layer/06%20Address%20Resolution%20Protocol.md)
- [07 Sergio - My career path](Module%202%20-%20The%20Network%20Layer/07%20Sergio%20-%20My%20career%20path.md)
- [08 Subnetting](Module%202%20-%20The%20Network%20Layer/08%20Subnetting.md)
- [09 Subnet Masks](Module%202%20-%20The%20Network%20Layer/09%20Subnet%20Masks.md)
- [10 Basic Binary Math](Module%202%20-%20The%20Network%20Layer/10%20Basic%20Binary%20Math.md)
- [11 CIDR](Module%202%20-%20The%20Network%20Layer/11%20CIDR.md)
- [12 Stay motivated in the program](Module%202%20-%20The%20Network%20Layer/12%20Stay%20motivated%20in%20the%20program.md)
- [13 Basic Routing Concepts](Module%202%20-%20The%20Network%20Layer/13%20Basic%20Routing%20Concepts.md)
- [14 Routing Tables](Module%202%20-%20The%20Network%20Layer/14%20Routing%20Tables.md)
- [15 Interior Gateway Protocols](Module%202%20-%20The%20Network%20Layer/15%20Interior%20Gateway%20Protocols.md)
- [16 Exterior Gateways, Autonomous Systems, and the IANA](Module%202%20-%20The%20Network%20Layer/16%20Exterior%20Gateways%2C%20Autonomous%20Systems%2C%20and%20the%20IANA.md)
- [17 Non-Routable Address Space](Module%202%20-%20The%20Network%20Layer/17%20Non-Routable%20Address%20Space.md)
- [18 Alex - My success story](Module%202%20-%20The%20Network%20Layer/18%20Alex%20-%20My%20success%20story.md)

### Module 3 - The Transport and Application Layers (영상 11개)

포트와 소켓, TCP 세그먼트 해부, 제어 플래그와 3-way handshake, 소켓 상태, 연결 지향 vs 비연결, 방화벽, 애플리케이션 계층과 OSI 모델.

- [01 Introduction to the Transport and Application Layers](Module%203%20-%20The%20Transport%20and%20Application%20Layers/01%20Introduction%20to%20the%20Transport%20and%20Application%20Layers.md)
- [02 The Transport Layer](Module%203%20-%20The%20Transport%20and%20Application%20Layers/02%20The%20Transport%20Layer.md)
- [03 Dissection of a TCP Segment](Module%203%20-%20The%20Transport%20and%20Application%20Layers/03%20Dissection%20of%20a%20TCP%20Segment.md)
- [04 TCP Control Flags and the Three-way Handshake](Module%203%20-%20The%20Transport%20and%20Application%20Layers/04%20TCP%20Control%20Flags%20and%20the%20Three-way%20Handshake.md)
- [05 TCP Socket States](Module%203%20-%20The%20Transport%20and%20Application%20Layers/05%20TCP%20Socket%20States.md)
- [06 Connection-oriented and Connectionless Protocols](Module%203%20-%20The%20Transport%20and%20Application%20Layers/06%20Connection-oriented%20and%20Connectionless%20Protocols.md)
- [07 Firewalls](Module%203%20-%20The%20Transport%20and%20Application%20Layers/07%20Firewalls.md)
- [08 The Application Layer](Module%203%20-%20The%20Transport%20and%20Application%20Layers/08%20The%20Application%20Layer.md)
- [09 The Application Layer and the OSI Model](Module%203%20-%20The%20Transport%20and%20Application%20Layers/09%20The%20Application%20Layer%20and%20the%20OSI%20Model.md)
- [10 All the Layers Working in Unison](Module%203%20-%20The%20Transport%20and%20Application%20Layers/10%20All%20the%20Layers%20Working%20in%20Unison.md)
- [11 Learner Story - Daniel](Module%203%20-%20The%20Transport%20and%20Application%20Layers/11%20Learner%20Story%20-%20Daniel.md)

### Module 4 - Networking Services (영상 14개)

**DNS 핵심 모듈.** 이름 해석의 전 단계, DNS와 UDP, 리소스 레코드 타입, 도메인 이름 구조, DNS 존. 그리고 DHCP·NAT·VPN·프록시.

- [01 Introduction to Network Services](Module%204%20-%20Networking%20Services/01%20Introduction%20to%20Network%20Services.md)
- [02 Why do we need DNS](Module%204%20-%20Networking%20Services/02%20Why%20do%20we%20need%20DNS.md)
- [03 The Many Steps of Name Resolution](Module%204%20-%20Networking%20Services/03%20The%20Many%20Steps%20of%20Name%20Resolution.md)
- [04 DNS and UDP](Module%204%20-%20Networking%20Services/04%20DNS%20and%20UDP.md)
- [05 Sergio - A journey to the IT field](Module%204%20-%20Networking%20Services/05%20Sergio%20-%20A%20journey%20to%20the%20IT%20field.md)
- [06 Resource Record Types](Module%204%20-%20Networking%20Services/06%20Resource%20Record%20Types.md)
- [07 Anatomy of a Domain Name](Module%204%20-%20Networking%20Services/07%20Anatomy%20of%20a%20Domain%20Name.md)
- [08 DNS Zones](Module%204%20-%20Networking%20Services/08%20DNS%20Zones.md)
- [09 Overview of DHCP](Module%204%20-%20Networking%20Services/09%20Overview%20of%20DHCP.md)
- [10 DHCP in Action](Module%204%20-%20Networking%20Services/10%20DHCP%20in%20Action.md)
- [11 Basics of NAT](Module%204%20-%20Networking%20Services/11%20Basics%20of%20NAT.md)
- [12 NAT and the Transport Layer](Module%204%20-%20Networking%20Services/12%20NAT%20and%20the%20Transport%20Layer.md)
- [13 Virtual Private Networks](Module%204%20-%20Networking%20Services/13%20Virtual%20Private%20Networks.md)
- [14 Proxy Services](Module%204%20-%20Networking%20Services/14%20Proxy%20Services.md)

### Module 5 - Connecting to the Internet (영상 15개)

다이얼업과 모뎀, 광대역, T-carrier, DSL, 케이블, 광섬유(FTTX), WAN과 점대점 VPN, 무선(802.11)·채널·보안, 셀룰러와 모바일 기기.

- [01 Introduction to Connecting to the Internet](Module%205%20-%20Connecting%20to%20the%20Internet/01%20Introduction%20to%20Connecting%20to%20the%20Internet.md)
- [02 Dial-up and Modems](Module%205%20-%20Connecting%20to%20the%20Internet/02%20Dial-up%20and%20Modems.md)
- [03 What is broadband](Module%205%20-%20Connecting%20to%20the%20Internet/03%20What%20is%20broadband.md)
- [04 T-Carrier Technologies](Module%205%20-%20Connecting%20to%20the%20Internet/04%20T-Carrier%20Technologies.md)
- [05 Digital Subscriber Lines](Module%205%20-%20Connecting%20to%20the%20Internet/05%20Digital%20Subscriber%20Lines.md)
- [06 Cable Broadband](Module%205%20-%20Connecting%20to%20the%20Internet/06%20Cable%20Broadband.md)
- [07 Fiber Connections](Module%205%20-%20Connecting%20to%20the%20Internet/07%20Fiber%20Connections.md)
- [08 Wide Area Network Technologies](Module%205%20-%20Connecting%20to%20the%20Internet/08%20Wide%20Area%20Network%20Technologies.md)
- [09 Point-to-Point VPNs](Module%205%20-%20Connecting%20to%20the%20Internet/09%20Point-to-Point%20VPNs.md)
- [10 Introduction to Wireless Networking Technologies](Module%205%20-%20Connecting%20to%20the%20Internet/10%20Introduction%20to%20Wireless%20Networking%20Technologies.md)
- [11 Wireless Network Configurations](Module%205%20-%20Connecting%20to%20the%20Internet/11%20Wireless%20Network%20Configurations.md)
- [12 Wireless Channels](Module%205%20-%20Connecting%20to%20the%20Internet/12%20Wireless%20Channels.md)
- [13 Wireless Security](Module%205%20-%20Connecting%20to%20the%20Internet/13%20Wireless%20Security.md)
- [14 Cellular Networking](Module%205%20-%20Connecting%20to%20the%20Internet/14%20Cellular%20Networking.md)
- [15 Mobile Device Networks](Module%205%20-%20Connecting%20to%20the%20Internet/15%20Mobile%20Device%20Networks.md)

### Module 6 - Troubleshooting and the Future of Networking (영상 18개)

**진단 도구 모듈.** ICMP와 ping, traceroute, netcat·Test-NetConnection, nslookup, 공개 DNS 서버, 도메인 등록과 만료, 호스트 파일. 그리고 클라우드와 IPv6.

- [01 Introduction to Troubleshooting and the Future of Networking](Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/01%20Introduction%20to%20Troubleshooting%20and%20the%20Future%20of%20Networking.md)
- [02 Ping - Internet Control Message Protocol](Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/02%20Ping%20-%20Internet%20Control%20Message%20Protocol.md)
- [03 Traceroute](Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/03%20Traceroute.md)
- [04 Testing Port Connectivity](Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/04%20Testing%20Port%20Connectivity.md)
- [05 Name Resolution Tools](Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/05%20Name%20Resolution%20Tools.md)
- [06 Public DNS Servers](Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/06%20Public%20DNS%20Servers.md)
- [07 DNS Registration and Expiration](Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/07%20DNS%20Registration%20and%20Expiration.md)
- [08 Hosts Files](Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/08%20Hosts%20Files.md)
- [09 What is The Cloud](Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/09%20What%20is%20The%20Cloud.md)
- [10 Everything as a Service](Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/10%20Everything%20as%20a%20Service.md)
- [11 Cloud Storage](Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/11%20Cloud%20Storage.md)
- [12 IPv6 Addressing and Subnetting](Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/12%20IPv6%20Addressing%20and%20Subnetting.md)
- [13 IPv6 Headers](Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/13%20IPv6%20Headers.md)
- [14 IPv6 and IPv4 Harmony](Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/14%20IPv6%20and%20IPv4%20Harmony.md)
- [15 Interview Role Play - Networking](Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/15%20Interview%20Role%20Play%20-%20Networking.md)
- [16 Course Wrap Up](Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/16%20Course%20Wrap%20Up.md)
- [17 Alex - My career path](Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/17%20Alex%20-%20My%20career%20path.md)
- [18 Congratulations](Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/18%20Congratulations.md)

## 진행 상황

- 영상 **91개 전부** 한국어 정리 완료
- 진행 기록 원본은 `study-progress/네트워크 서비스 로드맵/`의 Phase 문서다. 이 README는 파일 목록일 뿐 체크리스트가 아니다.
