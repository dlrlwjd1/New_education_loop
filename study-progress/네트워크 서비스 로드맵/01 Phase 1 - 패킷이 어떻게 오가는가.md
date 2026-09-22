# Phase 1 — 패킷이 어떻게 오가는가

- 목표: "요청이 안 간다"는 말을 **어느 계층에서 무엇이 막혔는지**로 바꿔 말할 수 있게 된다.
- 분량: 약 12시간
- 마지막 학습일: (사용자 변경으로 2026-09-17 처음부터 재시작)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 브라우저 주소창에 URL을 친 뒤 첫 바이트가 돌아오기까지 거치는 계층을 순서대로 말할 수 있다
- `192.168.10.0/22`가 몇 개의 주소를 담고 어디부터 어디까지인지 계산한다
- 라우팅 테이블을 읽고 특정 목적지 IP로 갈 패킷이 어느 인터페이스로 나가는지 짚는다
- 사설 IP가 공인 IP로 바뀌는 지점을 지목하고, 그래서 외부에서 먼저 연결할 수 없는 이유를 설명한다
- `tcpdump`로 TCP 연결 수립·종료를 실제로 포착하고 각 플래그를 해설한다
- `ss`로 "지금 이 서버에서 누가 몇 번 포트를 듣고 있는지" 확인한다

> **노트 품질 주의**: 이 Phase의 메인인 `Hands-on Internet of Things`는 MOOC 자동 전사를 정리한 노트다. 문장이 거칠고 요약이 본문과 겹친다. 주제는 정확하지만 **막히면 각 노트 상단의 원본 강의 링크로 영상을 보는 편이 빠르다.** 반대로 `IBM Application Security`의 OSI 노트는 잘 정리돼 있으니 개념을 먼저 여기서 잡고 IoT 강의로 넘어가는 순서를 권한다.

## 1-A. 계층과 캡슐화

메인: IBM DevOps and Software Engineering, `13 Application Security` Module 1

- [x] [06 The OSI Model.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/06%20The%20OSI%20Model.md) — **여기서 시작한다.** 7계층 각각이 무엇을 책임지는지 한국어로 깔끔하게 정리돼 있다. 개발자가 집중할 상위 3계층(세션·표현·응용)과 그 보안 함의까지 짚는다 — 학습일 2026-09-17
- [x] [07 Securing Layers for Application Development.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/07%20Securing%20Layers%20for%20Application%20Development.md) — 계층별로 무엇을 지켜야 하는지. Phase 8의 밑그림이 된다 — 학습일 2026-09-17

함께 보기: Hands-on IoT, Course 1 Module 1 (같은 내용을 더 넓게, 인터넷 전체 구조 관점에서)

- [ ] [02 Lecture 1 - How the Internet Works.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%201%20-%20Orientation%20Basics%20and%20Lab%20Instructions/02%20Lecture%201%20-%20How%20the%20Internet%20Works.md)
- [ ] [03 Lecture 2 - How Can Many Hosts Communicate.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%201%20-%20Orientation%20Basics%20and%20Lab%20Instructions/03%20Lecture%202%20-%20How%20Can%20Many%20Hosts%20Communicate.md)
- [ ] [04 Lecture 3 - What is a Protocol.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%201%20-%20Orientation%20Basics%20and%20Lab%20Instructions/04%20Lecture%203%20-%20What%20is%20a%20Protocol.md)
- [ ] [05 Lecture 4 - Protocol Stacks.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%201%20-%20Orientation%20Basics%20and%20Lab%20Instructions/05%20Lecture%204%20-%20Protocol%20Stacks.md)

캡슐화를 헤더 단위로: Hands-on IoT, Course 3 Module 3

- [ ] [01 Lecture 1 - Encapsulation.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%203%20-%20IoT%20Networking/Module%203%20-%20Core%20Networking%20Part%201/01%20Lecture%201%20-%20Encapsulation.md) — **이 Phase의 핵심 개념.** 계층이 "쌓인다"는 말의 실체
- [ ] [02 Lecture 2 - Encapsulation Examples - Ethernet & IPv4 Headers.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%203%20-%20IoT%20Networking/Module%203%20-%20Core%20Networking%20Part%201/02%20Lecture%202%20-%20Encapsulation%20Examples%20-%20Ethernet%20&%20IPv4%20Headers.md) — 헤더 필드를 하나씩 뜯는다. tcpdump 출력이 읽히기 시작하는 지점
- [ ] [03 Lecture 3 - Encapsulation Examples - TCP Header.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%203%20-%20IoT%20Networking/Module%203%20-%20Core%20Networking%20Part%201/03%20Lecture%203%20-%20Encapsulation%20Examples%20-%20TCP%20Header.md) — **SYN·ACK·FIN 플래그가 어디 있는지**를 여기서 확인한다

## 1-B. 주소와 라우팅

메인: Hands-on IoT, Course 1 Module 1 + Course 3 Module 3~4

- [ ] [06 Lecture 5 - Network Addressing.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%201%20-%20Orientation%20Basics%20and%20Lab%20Instructions/06%20Lecture%205%20-%20Network%20Addressing.md)
- [ ] [07 Lecture 6 - Addressing Layers.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%201%20-%20Orientation%20Basics%20and%20Lab%20Instructions/07%20Lecture%206%20-%20Addressing%20Layers.md) — MAC·IP·포트가 **각각 다른 계층의 주소**라는 것
- [ ] [09 Lecture 8 - Intra-domain vs. Inter-domain.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%201%20-%20Orientation%20Basics%20and%20Lab%20Instructions/09%20Lecture%208%20-%20Intra-domain%20vs.%20Inter-domain.md) — 내 네트워크 안의 라우팅과 인터넷 전체의 라우팅이 다른 문제라는 것
- [ ] [11 Lecture 10 - Layer 2 vs Layer 3 Forwarding.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%201%20-%20Orientation%20Basics%20and%20Lab%20Instructions/11%20Lecture%2010%20-%20Layer%202%20vs%20Layer%203%20Forwarding.md) — **스위치와 라우터가 하는 일의 차이.** Phase 7의 서브넷/라우팅 테이블이 여기서 갈린다
- [ ] [13 Lecture 12 - Delivery Methods.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%201%20-%20IoT%20Devices/Module%201%20-%20Orientation%20Basics%20and%20Lab%20Instructions/13%20Lecture%2012%20-%20Delivery%20Methods.md) — 유니캐스트·브로드캐스트·멀티캐스트
- [ ] [04 Lecture 4 - Internet Addressing.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%203%20-%20IoT%20Networking/Module%203%20-%20Core%20Networking%20Part%201/04%20Lecture%204%20-%20Internet%20Addressing.md) — 노트가 특히 거칠다. 원본 영상 병행 권장
- [ ] [05 Lecture 5 - Addressing Mechanisms.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%203%20-%20IoT%20Networking/Module%203%20-%20Core%20Networking%20Part%201/05%20Lecture%205%20-%20Addressing%20Mechanisms.md) — MAC 주소와 지역 인터넷 등록기관(APNIC·RIPE·ARIN)
- [ ] [06 Lecture 6 - Address Discovery Protocols.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%203%20-%20IoT%20Networking/Module%203%20-%20Core%20Networking%20Part%201/06%20Lecture%206%20-%20Address%20Discovery%20Protocols.md)
- [ ] [07 Lecture 7 - Dynamic Host Configuration Protocol.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%203%20-%20IoT%20Networking/Module%203%20-%20Core%20Networking%20Part%201/07%20Lecture%207%20-%20Dynamic%20Host%20Configuration%20Protocol.md) — DHCP. Phase 7에서 VPC가 인스턴스에 IP를 주는 방식과 연결된다
- [ ] [01 Lecture 8 - Address Resolution Protocol.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%203%20-%20IoT%20Networking/Module%204%20-%20Core%20Networking%20Part%202/01%20Lecture%208%20-%20Address%20Resolution%20Protocol.md) — **ARP.** IP만 알 때 MAC을 어떻게 알아내는가
- [ ] [02 Lecture 9 - Gratuitous ARP.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%203%20-%20IoT%20Networking/Module%204%20-%20Core%20Networking%20Part%202/02%20Lecture%209%20-%20Gratuitous%20ARP.md) — 가상 IP 장애 전환(Phase 5의 HA)이 동작하는 원리
- [ ] [05 Lecture 12 - Packet Forwarding.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%203%20-%20IoT%20Networking/Module%204%20-%20Core%20Networking%20Part%202/05%20Lecture%2012%20-%20Packet%20Forwarding.md) — **라우팅 테이블을 읽는 법**
- [ ] [06 Lecture 13 - Network Design.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%203%20-%20IoT%20Networking/Module%204%20-%20Core%20Networking%20Part%202/06%20Lecture%2013%20-%20Network%20Design.md)
- [ ] [07 Lecture 14 - Device Types.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%203%20-%20IoT%20Networking/Module%204%20-%20Core%20Networking%20Part%202/07%20Lecture%2014%20-%20Device%20Types.md) — 훑고 넘어가도 된다

## 1-C. 포트와 소켓 — "누가 무엇을 듣고 있는가"

메인: Hands-on IoT, Course 3 Module 4

- [ ] [03 Lecture 10 - Network Application Programming.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%203%20-%20IoT%20Networking/Module%204%20-%20Core%20Networking%20Part%202/03%20Lecture%2010%20-%20Network%20Application%20Programming.md)
- [ ] [04 Lecture 11 - Sockets API Programming.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%203%20-%20IoT%20Networking/Module%204%20-%20Core%20Networking%20Part%202/04%20Lecture%2011%20-%20Sockets%20API%20Programming.md) — **소켓 = IP + 포트.** bind·listen·accept가 서버 코드에서 하는 일

함께 보기: Computer Science & Robotics - Linux to ROS 2, Section 2 (손으로 확인하는 쪽)

- [ ] [17 Networking.md](../../courses/udemy/Computer%20Science%20&%20Robotics%20-%20Learn%20by%20Doing!%20Linux%20to%20ROS%202/Section%202%20-%20Linux%20Operating%20System/17%20Networking.md)
- [ ] [18 [LAB] Networking.md](../../courses/udemy/Computer%20Science%20&%20Robotics%20-%20Learn%20by%20Doing!%20Linux%20to%20ROS%202/Section%202%20-%20Linux%20Operating%20System/18%20%5BLAB%5D%20Networking.md) — **실습 랩.** 이 Phase의 산출물을 여기서 시작한다

## 1-D. CIDR 계산 · NAT · 단편화

메인: **The Bits and Bytes of Computer Networking**, Module 2·4. 2026-09-02에 수강·정리 완료했다. IoT 강의가 주소 체계를 개념으로만 다루고 남겨 둔 공백이 여기서 채워진다.

**서브넷 계산 — Phase 7의 VPC 설계가 이 계산 위에 선다**

- [ ] [03 IPv4 Addresses.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/03%20IPv4%20Addresses.md) — 점 십진 표기, **IP는 장치가 아니라 네트워크에 속한다**, 동적 IP와 정적 IP
- [ ] [05 IPv4 Address Classes.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/05%20IPv4%20Address%20Classes.md) — 네트워크 ID와 호스트 ID의 경계, 첫 옥텟 범위로 클래스 판별
- [ ] [08 Subnetting.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/08%20Subnetting.md) — 왜 쪼개야 하는가. 게이트웨이 라우터의 역할
- [ ] [09 Subnet Masks.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/09%20Subnet%20Masks.md) — **이 소절의 핵심.** 마스크의 1이 무엇을 뜻하는지, `/27` 같은 슬래시 표기, 호스트가 총 개수보다 2개 적은 이유
- [ ] [10 Basic Binary Math.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/10%20Basic%20Binary%20Math.md) — **AND 연산으로 같은 네트워크인지 판단하는 원리.** 서브넷 마스크가 마법이 아닌 이유
- [ ] [11 CIDR.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/11%20CIDR.md) — 클래스를 버리고 네트워크 ID와 서브넷 ID를 합치는 것. **`/24` 둘을 `/23` 하나로 묶으면 호스트가 2개 늘어나는 계산**까지

**NAT**

- [ ] [11 Basics of NAT.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/11%20Basics%20of%20NAT.md) — 출발지 IP 재작성, IP 마스커레이딩, 일대다 NAT
- [ ] [12 NAT and the Transport Layer.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/12%20NAT%20and%20the%20Transport%20Layer.md) — **포트 보존**으로 돌아오는 트래픽을 가려내는 법, **포트 포워딩**으로 하나의 외부 IP에 여러 내부 서비스를 붙이는 법

**단편화**

- [ ] [04 IPv4 Datagram and Encapsulation.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%202%20-%20The%20Network%20Layer/04%20IPv4%20Datagram%20and%20Encapsulation.md) — Flag·Fragmentation Offset 필드, 데이터그램 최대 65,535, **큰 크기를 허용하는 망에서 작은 망으로 넘어갈 때 쪼개진다**는 것. 캡슐화 전체 그림도 여기서 잡힌다

**여전히 남는 공백: MTU 자체.** 강의는 단편화가 왜 일어나는지는 설명하지만 **경로 MTU 탐색(Path MTU Discovery)** 은 다루지 않는다. 아래 과제 3으로 채운다.

## 1-D 보조 과제

강의를 본 뒤 손으로 확인한다. 특히 **1번은 Phase 7에 들어가기 전에 반드시 한 번은 해 본다.**

1. `ipcalc` 또는 손계산으로 `10.0.0.0/16`을 `/20` 서브넷 4개로 쪼개고, 각 대역의 시작·끝·사용 가능 호스트 수를 표로 만든다
2. 집 공유기의 `ip route`(또는 `netstat -rn`)를 출력해 기본 게이트웨이와 로컬 대역을 짚고, 외부 사이트에 접속했을 때 공인 IP가 무엇으로 보이는지 확인해 **NAT가 일어난 지점**을 그림으로 그린다
3. `ping -s` 로 패킷 크기를 키워 가며 어느 크기에서 응답이 끊기는지 찾아 경로상의 MTU를 추정한다

## 산출물

**"TCP 연결 한 번의 전 과정 해설서" 한 장.** 아래를 모두 담는다.

1. `sudo tcpdump -n -i any 'tcp port 80'` 을 켠 상태에서 `curl http://example.com` 을 실행해 캡처를 뜬다
2. 캡처에서 **SYN → SYN-ACK → ACK → (데이터) → FIN/ACK** 를 각각 짚고, 각 줄의 출발지·목적지 IP와 포트, 플래그, 시퀀스 번호를 표로 옮긴다
3. 같은 요청에 대해 `ss -tnp` 출력을 붙여 **연결이 살아 있는 동안의 소켓 상태**(ESTABLISHED, TIME_WAIT 등)를 기록한다
4. 이 요청이 지나간 계층을 L2부터 L7까지 순서대로 적고, 각 계층에서 붙은 헤더가 캡처의 어느 부분인지 대응시킨다

이 문서가 나오면 Phase 1은 끝이다. **Phase 9의 진단 실습이 이 문서를 다시 꺼내 쓴다.**

## 다음 단계

→ [02 Phase 2 - 이름 붙이기 DNS](02%20Phase%202%20-%20%EC%9D%B4%EB%A6%84%20%EB%B6%99%EC%9D%B4%EA%B8%B0%20DNS.md)
