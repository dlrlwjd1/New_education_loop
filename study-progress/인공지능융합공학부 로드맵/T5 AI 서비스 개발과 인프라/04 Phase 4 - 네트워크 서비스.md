# T5 Phase 4 — 네트워크 서비스

> 학부 교과 **네트워크서비스(3학년 2학기, 이론실습병행 3학점)**
>
> ⚠️ **교과목해설 페이지의 설명이 이 과목과 맞지 않는다.** 강남대 교과목해설(2026-09-04 확인)에는 네트워크 서비스 항목에 *"강화 학습의 이론과 기법을 중점적으로 다룬다. 에이전트가 환경과 상호작용하며 학습하는 과정, 보상 기반의 의사결정, 정책 최적화…"* 라고 적혀 있다. 과목명과 완전히 다른 내용이라 **페이지 편집 오류로 보인다.** 이 Phase는 과목명 그대로 네트워크 서비스로 구성했다. 강화학습은 [T3 Phase 2 2-E](../T3%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D%EA%B3%BC%20%EB%94%A5%EB%9F%AC%EB%8B%9D/02%20Phase%202%20-%20%EB%A8%B8%EC%8B%A0%EB%9F%AC%EB%8B%9D.md)에 별도로 두었다. **수강 전 학과에 확인할 것.**

- 목표: 내 서비스가 인터넷에서 어떻게 도달되는지 계층별로 말하고, 안 될 때 어디를 볼지 안다.
- 분량: 약 18시간
- 마지막 학습일: (미학습)

> **중복 안내**: [네트워크 서비스 로드맵](../../%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC%20%EC%84%9C%EB%B9%84%EC%8A%A4%20%EB%A1%9C%EB%93%9C%EB%A7%B5/README.md)이 같은 주제를 10 Phase로 훨씬 깊게 다룬다. 여기는 학부 한 과목 분량의 압축판이다.

## 이 단계가 끝나면 할 수 있어야 하는 것

- URL을 친 뒤 응답이 오기까지의 과정을 계층 순서로 말한다
- IP·서브넷·포트를 계산하고 라우팅 테이블을 읽는다
- DNS 조회 과정을 설명하고 레코드 종류를 구분한다
- HTTP 요청/응답의 헤더와 상태 코드를 읽는다
- TLS가 무엇을 보장하고 무엇을 보장하지 않는지 안다
- `ping`·`traceroute`·`nslookup`·`curl`로 문제 위치를 좁힌다

## 4-A. 네트워크 기초

메인: The Bits and Bytes of Computer Networking (MOOC · Google)

Module 1~2 — 계층 모델과 네트워크 계층(IP·서브넷)

- [ ] [01 Course Introduction.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%201%20-%20Introduction%20to%20Networking/01%20Course%20Introduction.md)
- [ ] [02 The TCP-IP Five-Layer Network Model.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%201%20-%20Introduction%20to%20Networking/02%20The%20TCP-IP%20Five-Layer%20Network%20Model.md)
- [ ] [03 Alex - Why networking is important.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%201%20-%20Introduction%20to%20Networking/03%20Alex%20-%20Why%20networking%20is%20important.md)
- [ ] [04 Cables.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%201%20-%20Introduction%20to%20Networking/04%20Cables.md)
- [ ] [05 Hubs and Switches.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%201%20-%20Introduction%20to%20Networking/05%20Hubs%20and%20Switches.md)
- [ ] [06 Routers.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%201%20-%20Introduction%20to%20Networking/06%20Routers.md)
- [ ] [07 Servers and Clients.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%201%20-%20Introduction%20to%20Networking/07%20Servers%20and%20Clients.md)
- [ ] [08 Sergio - Being a network engineer.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%201%20-%20Introduction%20to%20Networking/08%20Sergio%20-%20Being%20a%20network%20engineer.md)
- [ ] [09 Moving Bits Across the Wire.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%201%20-%20Introduction%20to%20Networking/09%20Moving%20Bits%20Across%20the%20Wire.md)
- [ ] [10 Twisted Pair Cabling and Duplexing.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%201%20-%20Introduction%20to%20Networking/10%20Twisted%20Pair%20Cabling%20and%20Duplexing.md)
- [ ] [11 Network Ports and Patch Panels.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%201%20-%20Introduction%20to%20Networking/11%20Network%20Ports%20and%20Patch%20Panels.md)
- [ ] [12 Ethernet and MAC Addresses.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%201%20-%20Introduction%20to%20Networking/12%20Ethernet%20and%20MAC%20Addresses.md)
- [ ] [13 Unicast, Multicast, and Broadcast.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%201%20-%20Introduction%20to%20Networking/13%20Unicast,%20Multicast,%20and%20Broadcast.md)
- [ ] [14 Dissecting an Ethernet Frame.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%201%20-%20Introduction%20to%20Networking/14%20Dissecting%20an%20Ethernet%20Frame.md)
- [ ] [15 Victor - Practical experience in IT.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%201%20-%20Introduction%20to%20Networking/15%20Victor%20-%20Practical%20experience%20in%20IT.md)

- [ ] [01 Introduction to The Network Layer.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/01%20Introduction%20to%20The%20Network%20Layer.md)
- [ ] [02 The Network Layer.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/02%20The%20Network%20Layer.md)
- [ ] [03 IPv4 Addresses.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/03%20IPv4%20Addresses.md)
- [ ] [04 IPv4 Datagram and Encapsulation.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/04%20IPv4%20Datagram%20and%20Encapsulation.md)
- [ ] [05 IPv4 Address Classes.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/05%20IPv4%20Address%20Classes.md)
- [ ] [06 Address Resolution Protocol.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/06%20Address%20Resolution%20Protocol.md)
- [ ] [07 Sergio - My career path.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/07%20Sergio%20-%20My%20career%20path.md)
- [ ] [08 Subnetting.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/08%20Subnetting.md)
- [ ] [09 Subnet Masks.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/09%20Subnet%20Masks.md)
- [ ] [10 Basic Binary Math.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/10%20Basic%20Binary%20Math.md)
- [ ] [11 CIDR.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/11%20CIDR.md)
- [ ] [12 Stay motivated in the program.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/12%20Stay%20motivated%20in%20the%20program.md)
- [ ] [13 Basic Routing Concepts.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/13%20Basic%20Routing%20Concepts.md)
- [ ] [14 Routing Tables.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/14%20Routing%20Tables.md)
- [ ] [15 Interior Gateway Protocols.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/15%20Interior%20Gateway%20Protocols.md)
- [ ] [16 Exterior Gateways, Autonomous Systems, and the IANA.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/16%20Exterior%20Gateways,%20Autonomous%20Systems,%20and%20the%20IANA.md)
- [ ] [17 Non-Routable Address Space.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/17%20Non-Routable%20Address%20Space.md)
- [ ] [18 Alex - My success story.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/18%20Alex%20-%20My%20success%20story.md)

Module 3 — 전송·응용 계층 (TCP·UDP·포트)

- [ ] [01 Introduction to the Transport and Application Layers.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%203%20-%20The%20Transport%20and%20Application%20Layers/01%20Introduction%20to%20the%20Transport%20and%20Application%20Layers.md)
- [ ] [02 The Transport Layer.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%203%20-%20The%20Transport%20and%20Application%20Layers/02%20The%20Transport%20Layer.md)
- [ ] [03 Dissection of a TCP Segment.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%203%20-%20The%20Transport%20and%20Application%20Layers/03%20Dissection%20of%20a%20TCP%20Segment.md)
- [ ] [04 TCP Control Flags and the Three-way Handshake.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%203%20-%20The%20Transport%20and%20Application%20Layers/04%20TCP%20Control%20Flags%20and%20the%20Three-way%20Handshake.md)
- [ ] [05 TCP Socket States.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%203%20-%20The%20Transport%20and%20Application%20Layers/05%20TCP%20Socket%20States.md)
- [ ] [06 Connection-oriented and Connectionless Protocols.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%203%20-%20The%20Transport%20and%20Application%20Layers/06%20Connection-oriented%20and%20Connectionless%20Protocols.md)
- [ ] [07 Firewalls.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%203%20-%20The%20Transport%20and%20Application%20Layers/07%20Firewalls.md)
- [ ] [08 The Application Layer.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%203%20-%20The%20Transport%20and%20Application%20Layers/08%20The%20Application%20Layer.md)
- [ ] [09 The Application Layer and the OSI Model.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%203%20-%20The%20Transport%20and%20Application%20Layers/09%20The%20Application%20Layer%20and%20the%20OSI%20Model.md)
- [ ] [10 All the Layers Working in Unison.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%203%20-%20The%20Transport%20and%20Application%20Layers/10%20All%20the%20Layers%20Working%20in%20Unison.md)
- [ ] [11 Learner Story - Daniel.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%203%20-%20The%20Transport%20and%20Application%20Layers/11%20Learner%20Story%20-%20Daniel.md)

Module 4 — **DNS·DHCP·NAT.** 서비스 배포에서 가장 자주 만나는 모듈이다

- [ ] [01 Introduction to Network Services.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/01%20Introduction%20to%20Network%20Services.md)
- [ ] [02 Why do we need DNS.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/02%20Why%20do%20we%20need%20DNS.md)
- [ ] [03 The Many Steps of Name Resolution.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/03%20The%20Many%20Steps%20of%20Name%20Resolution.md)
- [ ] [04 DNS and UDP.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/04%20DNS%20and%20UDP.md)
- [ ] [05 Sergio - A journey to the IT field.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/05%20Sergio%20-%20A%20journey%20to%20the%20IT%20field.md)
- [ ] [06 Resource Record Types.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/06%20Resource%20Record%20Types.md)
- [ ] [07 Anatomy of a Domain Name.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/07%20Anatomy%20of%20a%20Domain%20Name.md)
- [ ] [08 DNS Zones.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/08%20DNS%20Zones.md)
- [ ] [09 Overview of DHCP.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/09%20Overview%20of%20DHCP.md)
- [ ] [10 DHCP in Action.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/10%20DHCP%20in%20Action.md)
- [ ] [11 Basics of NAT.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/11%20Basics%20of%20NAT.md)
- [ ] [12 NAT and the Transport Layer.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/12%20NAT%20and%20the%20Transport%20Layer.md)
- [ ] [13 Virtual Private Networks.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/13%20Virtual%20Private%20Networks.md)
- [ ] [14 Proxy Services.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/14%20Proxy%20Services.md)

Module 5~6 — 인터넷 연결과 문제 해결

- [ ] [01 Introduction to Connecting to the Internet.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%205%20-%20Connecting%20to%20the%20Internet/01%20Introduction%20to%20Connecting%20to%20the%20Internet.md)
- [ ] [02 Dial-up and Modems.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%205%20-%20Connecting%20to%20the%20Internet/02%20Dial-up%20and%20Modems.md)
- [ ] [03 What is broadband.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%205%20-%20Connecting%20to%20the%20Internet/03%20What%20is%20broadband.md)
- [ ] [04 T-Carrier Technologies.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%205%20-%20Connecting%20to%20the%20Internet/04%20T-Carrier%20Technologies.md)
- [ ] [05 Digital Subscriber Lines.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%205%20-%20Connecting%20to%20the%20Internet/05%20Digital%20Subscriber%20Lines.md)
- [ ] [06 Cable Broadband.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%205%20-%20Connecting%20to%20the%20Internet/06%20Cable%20Broadband.md)
- [ ] [07 Fiber Connections.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%205%20-%20Connecting%20to%20the%20Internet/07%20Fiber%20Connections.md)
- [ ] [08 Wide Area Network Technologies.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%205%20-%20Connecting%20to%20the%20Internet/08%20Wide%20Area%20Network%20Technologies.md)
- [ ] [09 Point-to-Point VPNs.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%205%20-%20Connecting%20to%20the%20Internet/09%20Point-to-Point%20VPNs.md)
- [ ] [10 Introduction to Wireless Networking Technologies.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%205%20-%20Connecting%20to%20the%20Internet/10%20Introduction%20to%20Wireless%20Networking%20Technologies.md)
- [ ] [11 Wireless Network Configurations.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%205%20-%20Connecting%20to%20the%20Internet/11%20Wireless%20Network%20Configurations.md)
- [ ] [12 Wireless Channels.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%205%20-%20Connecting%20to%20the%20Internet/12%20Wireless%20Channels.md)
- [ ] [13 Wireless Security.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%205%20-%20Connecting%20to%20the%20Internet/13%20Wireless%20Security.md)
- [ ] [14 Cellular Networking.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%205%20-%20Connecting%20to%20the%20Internet/14%20Cellular%20Networking.md)
- [ ] [15 Mobile Device Networks.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%205%20-%20Connecting%20to%20the%20Internet/15%20Mobile%20Device%20Networks.md)

- [ ] [01 Introduction to Troubleshooting and the Future of Networking.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/01%20Introduction%20to%20Troubleshooting%20and%20the%20Future%20of%20Networking.md)
- [ ] [02 Ping - Internet Control Message Protocol.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/02%20Ping%20-%20Internet%20Control%20Message%20Protocol.md)
- [ ] [03 Traceroute.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/03%20Traceroute.md)
- [ ] [04 Testing Port Connectivity.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/04%20Testing%20Port%20Connectivity.md)
- [ ] [05 Name Resolution Tools.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/05%20Name%20Resolution%20Tools.md)
- [ ] [06 Public DNS Servers.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/06%20Public%20DNS%20Servers.md)
- [ ] [07 DNS Registration and Expiration.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/07%20DNS%20Registration%20and%20Expiration.md)
- [ ] [08 Hosts Files.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/08%20Hosts%20Files.md)
- [ ] [09 What is The Cloud.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/09%20What%20is%20The%20Cloud.md)
- [ ] [10 Everything as a Service.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/10%20Everything%20as%20a%20Service.md)
- [ ] [11 Cloud Storage.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/11%20Cloud%20Storage.md)
- [ ] [12 IPv6 Addressing and Subnetting.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/12%20IPv6%20Addressing%20and%20Subnetting.md)
- [ ] [13 IPv6 Headers.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/13%20IPv6%20Headers.md)
- [ ] [14 IPv6 and IPv4 Harmony.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/14%20IPv6%20and%20IPv4%20Harmony.md)
- [ ] [15 Interview Role Play - Networking.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/15%20Interview%20Role%20Play%20-%20Networking.md)
- [ ] [16 Course Wrap Up.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/16%20Course%20Wrap%20Up.md)
- [ ] [17 Alex - My career path.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/17%20Alex%20-%20My%20career%20path.md)
- [ ] [18 Congratulations.md](../../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/18%20Congratulations.md)

## 4-B. API와 보안 계층

함께 보기: Protecting and Managing APIs — HTTPS 적용, 게이트웨이, 인증

- [ ] [01.Specialization Introduction.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/01.Specialization%20Introduction.md)
- [ ] [02.Course Introduction.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/02.Course%20Introduction.md)
- [ ] [03.Welcome to Protecting and Managing APIs.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/03.Welcome%20to%20Protecting%20and%20Managing%20APIs.md)
- [ ] [04.Protecting and Managing APIs - Self Check-In (Dialogue).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/04.Protecting%20and%20Managing%20APIs%20-%20Self%20Check-In%20%28Dialogue%29.md)
- [ ] [05.API Authentication Methods.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/05.API%20Authentication%20Methods.md)
- [ ] [06.Basic Authentication and API Keys.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/06.Basic%20Authentication%20and%20API%20Keys.md)
- [ ] [07.OAuth 2.0 and JWT.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/07.OAuth%202.0%20and%20JWT.md)
- [ ] [08.Demonstration - Implementing OAuth in an API.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/08.Demonstration%20-%20Implementing%20OAuth%20in%20an%20API.md)
- [ ] [09.Authentication Methods (Reading).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/09.Authentication%20Methods%20%28Reading%29.md)
- [ ] [01.Role-Based Access Control (RBAC).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%202%20-%20Authorization%20and%20Access%20Control/01.Role-Based%20Access%20Control%20%28RBAC%29.md)
- [ ] [02.Attribute-Based Access Control (ABAC).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%202%20-%20Authorization%20and%20Access%20Control/02.Attribute-Based%20Access%20Control%20%28ABAC%29.md)
- [ ] [03.Scopes in Oauth.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%202%20-%20Authorization%20and%20Access%20Control/03.Scopes%20in%20Oauth.md)
- [ ] [04.Fine-Grained Access Control & Auditing.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%202%20-%20Authorization%20and%20Access%20Control/04.Fine-Grained%20Access%20Control%20&%20Auditing.md)
- [ ] [05.Demonstration - Setting Up RBAC for an API.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%202%20-%20Authorization%20and%20Access%20Control/05.Demonstration%20-%20Setting%20Up%20RBAC%20for%20an%20API.md)
- [ ] [06.Comparing RBAC and ABAC (Reading).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%202%20-%20Authorization%20and%20Access%20Control/06.Comparing%20RBAC%20and%20ABAC%20%28Reading%29.md)
- [ ] [01.Common API Attacks Overview.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%203%20-%20Securing%20APIs%20Against%20Threats/01.Common%20API%20Attacks%20Overview.md)
- [ ] [02.Injection Attacks.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%203%20-%20Securing%20APIs%20Against%20Threats/02.Injection%20Attacks.md)
- [ ] [03.Man-in-the-Middle & DoS Attacks.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%203%20-%20Securing%20APIs%20Against%20Threats/03.Man-in-the-Middle%20&%20DoS%20Attacks.md)
- [ ] [04.Security Best Practices & Preventive Measures.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%203%20-%20Securing%20APIs%20Against%20Threats/04.Security%20Best%20Practices%20&%20Preventive%20Measures.md)
- [ ] [05.Demonstration - Conducting Security Testing on an API (Part 1 - script.js and index.html Setup).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%203%20-%20Securing%20APIs%20Against%20Threats/05.Demonstration%20-%20Conducting%20Security%20Testing%20on%20an%20API%20%28Part%201%20-%20script.js%20and%20index.html%20Setup%29.md)
- [ ] [06.Demonstration - Conducting Security Testing on an API (Part 2 - Vulnerable and Hardened Server Setup).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%203%20-%20Securing%20APIs%20Against%20Threats/06.Demonstration%20-%20Conducting%20Security%20Testing%20on%20an%20API%20%28Part%202%20-%20Vulnerable%20and%20Hardened%20Server%20Setup%29.md)
- [ ] [07.Demonstration - Conducting Security Testing on an API (Part 3 - Final Execution).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%203%20-%20Securing%20APIs%20Against%20Threats/07.Demonstration%20-%20Conducting%20Security%20Testing%20on%20an%20API%20%28Part%203%20-%20Final%20Execution%29.md)
- [ ] [08.Understanding and Preventing the OWASP Top API Security Threats.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%203%20-%20Securing%20APIs%20Against%20Threats/08.Understanding%20and%20Preventing%20the%20OWASP%20Top%20API%20Security%20Threats.md)
- [ ] [01.Data Encryption & HTTPS.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%204%20-%20Encryption%20and%20Compliance/01.Data%20Encryption%20&%20HTTPS.md)
- [ ] [02.Encrypting Sensitive Data & Compliance Standards.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%204%20-%20Encryption%20and%20Compliance/02.Encrypting%20Sensitive%20Data%20&%20Compliance%20Standards.md)
- [ ] [03.Demonstration - Implementing HTTPS for an API.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%204%20-%20Encryption%20and%20Compliance/03.Demonstration%20-%20Implementing%20HTTPS%20for%20an%20API.md)
- [ ] [04.Encryption and Compliance (Reading).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%204%20-%20Encryption%20and%20Compliance/04.Encryption%20and%20Compliance%20%28Reading%29.md)
- [ ] [01.Summary of API Security Fundamentals.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%205%20-%20Module%20Wrap-Up%20and%20Assessment/01.Summary%20of%20API%20Security%20Fundamentals.md)
- [ ] [02.Practice Project - Building a Secure and Compliant Healthcare API Ecosystem.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%205%20-%20Module%20Wrap-Up%20and%20Assessment/02.Practice%20Project%20-%20Building%20a%20Secure%20and%20Compliant%20Healthcare%20API%20Ecosystem.md)
- [ ] [01.What is an API Gateway.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%201%20-%20API%20Gateways/01.What%20is%20an%20API%20Gateway.md)
- [ ] [02.Popular API Gateways.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%201%20-%20API%20Gateways/02.Popular%20API%20Gateways.md)
- [ ] [03.Routing and Proxying.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%201%20-%20API%20Gateways/03.Routing%20and%20Proxying.md)
- [ ] [04.Introduction to API Gateways (Reading).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%201%20-%20API%20Gateways/04.Introduction%20to%20API%20Gateways%20%28Reading%29.md)
- [ ] [05.Kong API Gateway with Python (Reading).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%201%20-%20API%20Gateways/05.Kong%20API%20Gateway%20with%20Python%20%28Reading%29.md)
- [ ] [01.Why Monitor APIs & Logging Best Practices.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%202%20-%20Monitoring%20and%20Analytics/01.Why%20Monitor%20APIs%20&%20Logging%20Best%20Practices.md)
- [ ] [02.Monitoring Tools, Alerting & Analytics.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%202%20-%20Monitoring%20and%20Analytics/02.Monitoring%20Tools,%20Alerting%20&%20Analytics.md)
- [ ] [03.Demonstration - Implementing Monitoring for an API.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%202%20-%20Monitoring%20and%20Analytics/03.Demonstration%20-%20Implementing%20Monitoring%20for%20an%20API.md)
- [ ] [04.API Usage & Key Metrics.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%202%20-%20Monitoring%20and%20Analytics/04.API%20Usage%20&%20Key%20Metrics.md)
- [ ] [05.Dashboards and A-B Testing for APIs.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%202%20-%20Monitoring%20and%20Analytics/05.Dashboards%20and%20A-B%20Testing%20for%20APIs.md)
- [ ] [06.Improving API Adoption.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%202%20-%20Monitoring%20and%20Analytics/06.Improving%20API%20Adoption.md)
- [ ] [07.Demonstration - Setting Up Analytics for an API.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%202%20-%20Monitoring%20and%20Analytics/07.Demonstration%20-%20Setting%20Up%20Analytics%20for%20an%20API.md)
- [ ] [08.API Monitoring and Analytics (Reading).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%202%20-%20Monitoring%20and%20Analytics/08.API%20Monitoring%20and%20Analytics%20%28Reading%29.md)
- [ ] [01.Turning APIs into Products.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%203%20-%20API%20Productization/01.Turning%20APIs%20into%20Products.md)
- [ ] [02.API Monetization.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%203%20-%20API%20Productization/02.API%20Monetization.md)
- [ ] [03.Developer Portals & API Marketplaces.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%203%20-%20API%20Productization/03.Developer%20Portals%20&%20API%20Marketplaces.md)
- [ ] [04.Governance in API Ecosystem.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%203%20-%20API%20Productization/04.Governance%20in%20API%20Ecosystem.md)
- [ ] [05.Demonstration - Creating a Developer Portal for an API.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%203%20-%20API%20Productization/05.Demonstration%20-%20Creating%20a%20Developer%20Portal%20for%20an%20API.md)
- [ ] [06.API Productization (Reading).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%203%20-%20API%20Productization/06.API%20Productization%20%28Reading%29.md)
- [ ] [01.Summary of API Management and Monitoring.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%204%20-%20Module%20Wrap-Up%20and%20Assessment/01.Summary%20of%20API%20Management%20and%20Monitoring.md)
- [ ] [02.Practice Project - Modern API Management with Monitoring and Analytics.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%204%20-%20Module%20Wrap-Up%20and%20Assessment/02.Practice%20Project%20-%20Modern%20API%20Management%20with%20Monitoring%20and%20Analytics.md)
- [ ] [01.Practice Project - Building a Secure and Scalable API Management Platform.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%203%20-%20Course%20Wrap-Up%20and%20Assessment/01.Practice%20Project%20-%20Building%20a%20Secure%20and%20Scalable%20API%20Management%20Platform.md)
- [ ] [02.The Case of the Compromised API Key (Dialogue).md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%203%20-%20Course%20Wrap-Up%20and%20Assessment/02.The%20Case%20of%20the%20Compromised%20API%20Key%20%28Dialogue%29.md)
- [ ] [03.Course Summary - Protecting and Managing APIs.md](../../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%203%20-%20Course%20Wrap-Up%20and%20Assessment/03.Course%20Summary%20-%20Protecting%20and%20Managing%20APIs.md)

## 산출물

**[Phase 2](02%20Phase%202%20-%20%EC%84%9C%EB%B2%84%20%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%B0%8D.md)의 API 서버를 인터넷에 노출시킨 기록.**

1. 도메인 하나에 DNS 레코드를 걸고, `dig`/`nslookup` 결과를 캡처
2. HTTPS 적용 (Let's Encrypt 등) — 인증서 체인을 `openssl s_client`로 확인한 출력
3. 계층별 진단 기록 — 일부러 3가지 장애를 만들고(포트 차단 / DNS 오타 / 인증서 만료) 각각 어떤 명령으로 원인을 좁혔는지
4. 한 페이지 구성도 — 클라이언트에서 서버까지 거치는 요소를 순서대로

## 다음 단계

→ [05 Phase 5 - 클라우드 AI 응용](05%20Phase%205%20-%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20AI%20%EC%9D%91%EC%9A%A9.md)
