# Phase 2 — 이름 붙이기 (DNS)

- 목표: 도메인 하나를 사서 내 서비스로 연결하고, "DNS 때문에 안 된다"를 **어느 단계에서 무엇이 잘못됐는지**로 설명한다.
- 상태: **강의 확보·정리 완료 (2026-09-02).** [The Bits and Bytes of Computer Networking](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/README.md)(MOOC·Google)를 수강해 Module 4·6의 DNS 강의 11개를 정리했다. 아래 2-A~2-C가 이 Phase의 진행 기록 원본이다.

## 왜 필요한가

Phase 1에서 잡은 것은 **주소**다. 그런데 사람은 주소로 서비스를 부르지 않는다. 이름으로 부른다. 그 이름을 주소로 바꾸는 계층이 통째로 비어 있으면 뒤가 전부 막힌다.

- **Phase 4(TLS)** — Let's Encrypt 인증서는 도메인 소유를 DNS나 HTTP로 증명해야 발급된다. 도메인이 없으면 인증서 실습 자체가 안 된다.
- **Phase 5(로드밸런서)** — 로드밸런서의 접속 정보를 도메인에 연결하는 것이 마지막 단계다. NCP 강의도 [`04 Network - Application Load Balancer`](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%204%20-%20Network/04%20Network%20-%20Application%20Load%20Balancer.md)에서 "도메인을 사용할 때는 DNS 레코드가 Load Balancer의 접속 정보를 가리키도록 설정한다"고만 하고 넘어간다.
- **Phase 9(진단)** — 실무 장애의 큰 몫이 DNS다. TTL을 모르면 "배포는 했는데 일부 사용자만 옛 서버로 간다"를 영영 설명하지 못한다.

**이 Phase를 건너뛰면 Phase 4·5·7의 실습이 전부 IP 주소 직접 입력으로 퇴화한다.**

## 이 단계가 끝나면 할 수 있어야 하는 것

- 브라우저가 `example.com`을 IP로 바꾸기까지 거치는 재귀 조회를 루트 → TLD → 권한 네임서버 순으로 설명한다
- A / AAAA / CNAME / NS / TXT / MX 레코드를 목적에 맞게 골라 쓰고, CNAME을 루트 도메인에 못 거는 이유를 설명한다
- TTL을 보고 "레코드를 바꾸면 언제부터 언제까지 사용자가 옛 값을 볼 수 있는지" 계산한다
- 배포 전환 전에 TTL을 미리 낮추는 절차를 세운다
- 도메인을 사서 네임서버를 클라우드 DNS로 위임하고, 위임이 실제로 끝났는지 `dig +trace`로 확인한다
- `dig`로 특정 네임서버에 직접 질의해 **캐시 문제인지 레코드 문제인지** 가른다

## 2-A. DNS는 무엇이고, 이름이 IP가 되기까지

메인: **The Bits and Bytes of Computer Networking**, Module 4. **이 Phase의 메인 트랙이다.**

- [ ] [01 Introduction to Network Services.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/01%20Introduction%20to%20Network%20Services.md) — 이 모듈이 다루는 서비스 전체(DNS·DHCP·NAT·VPN·프록시) 조감
- [ ] [02 Why do we need DNS.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/02%20Why%20do%20we%20need%20DNS.md) — 사람이 이름을 쓰는 이유, **IP를 바꿔도 사용자가 모르게 되는 이유**, 지역별로 다른 IP를 주는 구조
- [ ] [03 The Many Steps of Name Resolution.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/03%20The%20Many%20Steps%20of%20Name%20Resolution.md) — **이 Phase의 핵심 강의.** 캐싱·재귀·루트·TLD·권한 5종 서버, 루트 → TLD → 권한 순의 재귀 조회, **TTL과 캐시**, 계층 구조가 하이재킹을 막는 이유
- [ ] [04 DNS and UDP.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/04%20DNS%20and%20UDP.md) — 포트 53, 같은 조회가 TCP 44패킷 vs UDP 8패킷, 응답이 크면 TCP로 전환

> 03번 강의가 「이 단계가 끝나면」의 1·3번 항목(재귀 조회 설명 · TTL 계산)을 통째로 덮는다. 막히면 여기부터 다시 본다.

## 2-B. 레코드 · 도메인 구조 · 존

- [ ] [06 Resource Record Types.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/06%20Resource%20Record%20Types.md) — A·AAAA·CNAME·MX·SRV·TXT. **CNAME이 왜 "진실의 원천을 하나로" 만드는지**, DNS 라운드 로빈으로 트래픽을 분산하는 방법
- [ ] [07 Anatomy of a Domain Name.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/07%20Anatomy%20of%20a%20Domain%20Name.md) — 서브도메인·도메인·TLD와 FQDN, ICANN과 레지스트라, 63자/255자/127단계 제한
- [ ] [08 DNS Zones.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%204%20-%20Networking%20Services/08%20DNS%20Zones.md) — 존은 겹치지 않는다는 것, **SOA·NS 레코드**, 존을 나눠 레코드 관리를 분산하는 법, 역방향 조회와 PTR

## 2-C. 운영과 진단

같은 강좌 Module 6. **Phase 9에서 이 강의들을 진단 관점으로 다시 꺼내 쓴다.**

- [ ] [05 Name Resolution Tools.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/05%20Name%20Resolution%20Tools.md) — `nslookup` 대화형 모드. `server`로 질의 대상 변경, `set type=`으로 레코드 타입 변경, `set debug`로 전체 응답 패킷 보기
- [ ] [06 Public DNS Servers.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/06%20Public%20DNS%20Servers.md) — `8.8.8.8`·`4.2.2.x`를 **진단과 백업에 쓰는 법**, 그리고 **DNS 하이재킹 위험** 때문에 평소엔 ISP 네임서버를 쓰라는 경고
- [ ] [07 DNS Registration and Expiration.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/07%20DNS%20Registration%20and%20Expiration.md) — 레지스트라, **TXT 레코드로 소유를 증명하는 도메인 이전 절차**, 만료되면 누구나 가져간다는 것
- [ ] [08 Hosts Files.md](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/Module%206%20-%20Troubleshooting%20and%20the%20Future%20of%20Networking/08%20Hosts%20Files.md) — **hosts 파일이 DNS보다 먼저 검사된다.** 특정 도메인을 강제 매핑하는 진단 기법이자 바이러스의 리다이렉트 수법

## 2-D. 강의가 덮지 못하는 것 — 과제로 채운다

위 11개 강의로 「이 단계가 끝나면」의 대부분이 채워지지만, **아래 넷은 강의에 없다.** 아래 산출물 과제가 이 자리를 메운다.

| 빠진 것 | 왜 빠졌나 | 어디서 채우나 |
|---|---|---|
| **`dig` 사용법** | 강의는 `nslookup` 기준이다. `dig +trace`·`dig @권한NS`는 나오지 않는다 | 과제 1·4 |
| **CNAME을 루트 도메인에 못 거는 이유** | 강의는 CNAME의 용도까지만 다룬다 | 과제 2에서 직접 시도해 확인 |
| **도메인 구매와 네임서버 위임 실습** | 강의는 레지스트라와 위임을 개념으로만 설명한다 | 과제 2 |
| **배포 전환 전 TTL을 미리 낮추는 절차** | 강의는 TTL 개념과 전파 지연까지만 | 과제 3·5 |

## 저장소의 인접 자료

아래는 DNS가 결과적으로 등장하는 자료들이다. 개념 학습은 위 2-A~2-C로 하고, 이것들은 **"어디에 쓰이는지" 확인용**으로 본다.

| 자료 | 무엇이 있는가 |
|---|---|
| [03 Network - Load Balancer 실습준비.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%204%20-%20Network/03%20Network%20-%20Load%20Balancer%20%EC%8B%A4%EC%8A%B5%EC%A4%80%EB%B9%84.md) | "DNS를 설정하지 않았으므로 공인 IP로 접속한다"는 한 줄. 도메인 없이 진행하는 우회의 예 |
| [08 Services - ExternalName Service.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/08%20Services%20-%20ExternalName%20Service.md) | 쿠버네티스가 CNAME으로 외부 이름을 매핑하는 방식. Phase 6에서 다시 만난다 |
| [09 Services - Headless Service.md](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/Course%204%20-%20Containerization%20and%20Orchestration/Module%204%20-%20Kubernetes%20Networking%20and%20Storage/09%20Services%20-%20Headless%20Service.md) | 클러스터 내부 DNS가 Pod IP를 직접 반환하는 경우 |
| [07 Lecture 7 - Dynamic Host Configuration Protocol.md](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/Course%203%20-%20IoT%20Networking/Module%203%20-%20Core%20Networking%20Part%201/07%20Lecture%207%20-%20Dynamic%20Host%20Configuration%20Protocol.md) | DHCP. DNS는 아니지만 "주소를 자동으로 받는" 인접 개념 |


## 더 파고들 때 (선택)

| 강의 | 플랫폼 | 링크 | 비고 |
|---|---|---|---|
| DNS | MOOC (Packt) | [링크](https://www.mooc.org/learn/packt-dns-2royu) | 9모듈 18시간. **네임서버를 직접 세울 계획이 생겼을 때만.** BIND·Unbound·NSD·Microsoft DNS 구축, DNSSEC, 존 복제, `dig`·`nslookup`·`dnswalk`·`dnsrecon`으로 존 디버깅 |

이 로드맵의 도착점은 **클라우드 관리형 DNS를 쓸 줄 아는 것**이라 위 강좌는 오버스펙이다. 다만 `dig` 실습이 2-D의 공백과 겹치므로, 과제만으로 부족하다고 느끼면 그때 고려한다.
## 산출물 과제

도메인 하나만 있으면 강의 없이도 상당 부분 익힐 수 있다. **도메인은 이 로드맵 전체에서 계속 쓰이므로 여기서 산다.**

1. **재귀 조회 추적** — `dig +trace example.com` 을 실행해 루트 → TLD → 권한 네임서버로 내려가는 각 단계를 출력에서 짚고, 단계마다 어느 서버가 무엇을 답했는지 표로 옮긴다.
2. **레코드 만들기** — 도메인을 사서 클라우드 DNS(NCP Global DNS, Cloudflare 등)에 존을 만들고 네임서버를 위임한다. 위임이 끝났는지 `dig NS your-domain.com` 으로 확인한다. 그다음 A 레코드 하나, `www` CNAME 하나, TXT 레코드 하나를 만든다.
3. **TTL 실험** — A 레코드의 TTL을 300초로 두고 값을 바꾼 뒤, `dig your-domain.com` 을 반복 실행해 **캐시가 언제 만료되는지** 초 단위로 기록한다. 그다음 TTL을 3600으로 올려 같은 실험을 반복하고 차이를 문서에 적는다.
4. **캐시 vs 레코드 가르기** — 권한 네임서버에 직접 질의(`dig @권한NS your-domain.com`)한 결과와 로컬 리졸버 결과(`dig your-domain.com`)를 비교해, 값이 다를 때 무엇을 의미하는지 정리한다.
5. **배포 전환 절차서** — "서버 IP를 바꿀 때 사용자 무중단으로 넘기는 절차"를 TTL 조정 시점까지 포함해 단계별로 쓴다. Phase 5·7에서 실제로 쓴다.

## 산출물

**도메인 하나 + "내 도메인 DNS 구성 문서".** 존에 있는 모든 레코드, 각 레코드의 TTL과 그 값을 고른 이유, 위 4번의 캐시/레코드 판별 절차, 5번의 전환 절차서를 담는다.

## 다음 단계

→ [03 Phase 3 - HTTP와 API](03%20Phase%203%20-%20HTTP%EC%99%80%20API.md)
