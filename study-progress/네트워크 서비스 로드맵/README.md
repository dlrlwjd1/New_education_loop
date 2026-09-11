# 네트워크 서비스 학습 로드맵 — 서비스 하나를 클라우드에 안전하게 띄우고 장애를 진단한다

패킷이 계층을 따라 어떻게 움직이는지부터 시작해, 이름(DNS)·암호화(TLS)·부하 분산·컨테이너 네트워킹을 거쳐 클라우드 VPC 위에 서비스를 직접 올리고 장애를 계층별로 좁혀 진단하는 데까지 가는 로드맵이다. 56개 필요 지식의 대부분은 저장소에 이미 정리된 강의로 채워지고, 나머지는 추천 강의와 산출물 과제로 채운다.

> **2026-09-02 갱신 — 가장 큰 공백이던 Phase 2(DNS)가 채워졌다.** [The Bits and Bytes of Computer Networking](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/README.md)(MOOC·Google, 91강)을 수강·정리해 **Phase 2 전체**를 실제 체크리스트로 바꿨고, 같은 강좌가 **Phase 1의 CIDR·서브넷 계산·NAT 공백**과 **Phase 9의 진단 도구 공백**도 함께 덮었다. 이제 열 개 Phase 모두 저장소 자료로 시작할 수 있다.

- 작성일: 2026-09-01
- 대상: 프로그래밍 경험은 있고 Docker를 써 본 적 있는 개발자. 네트워크는 "포트 열어 본" 수준
- 원칙: 저장소 자료 우선, 공백은 추천 강의와 산출물 과제로 채움
- 도착점: **서비스 하나를 클라우드 VPC 위에 직접 설계해 올리고(서브넷 분리·보안그룹·로드밸런서·DNS·TLS), 접속이 안 될 때 어느 계층의 문제인지 도구로 좁혀 진단한다**

## 로드맵 구조

| 단계 | 주제 | 핵심 산출물 | 분량 | 저장소 자료 | 파일 |
|---|---|---|---|---|---|
| Phase 1 | 패킷이 어떻게 오가는가 | 3-way handshake를 tcpdump로 포착한 캡처와 해설 | 12시간 | 있음(부분) | [01 Phase 1](01%20Phase%201%20-%20%ED%8C%A8%ED%82%B7%EC%9D%B4%20%EC%96%B4%EB%96%BB%EA%B2%8C%20%EC%98%A4%EA%B0%80%EB%8A%94%EA%B0%80.md) |
| Phase 2 | 이름 붙이기 (DNS) | 도메인 하나를 사서 클라우드 DNS로 위임한 기록 | 8시간 | 있음 | [02 Phase 2](02%20Phase%202%20-%20%EC%9D%B4%EB%A6%84%20%EB%B6%99%EC%9D%B4%EA%B8%B0%20DNS.md) |
| Phase 3 | HTTP와 API | 헤더·상태코드·CORS를 설명한 API 설계 문서 | 10시간 | 있음 | [03 Phase 3](03%20Phase%203%20-%20HTTP%EC%99%80%20API.md) |
| Phase 4 | 암호화와 신뢰 (TLS) | 자체 CA로 발급한 인증서로 도는 HTTPS 서버 | 9시간 | 있음(부분) | [04 Phase 4](04%20Phase%204%20-%20%EC%95%94%ED%98%B8%ED%99%94%EC%99%80%20%EC%8B%A0%EB%A2%B0%20TLS.md) |
| Phase 5 | 프록시와 로드밸런싱 | 서버 2대에 트래픽을 나누고 1대를 죽여도 안 끊기는 구성 | 10시간 | 있음 | [05 Phase 5](05%20Phase%205%20-%20%ED%94%84%EB%A1%9D%EC%8B%9C%EC%99%80%20%EB%A1%9C%EB%93%9C%EB%B0%B8%EB%9F%B0%EC%8B%B1.md) |
| Phase 6 | 컨테이너 네트워킹 | 로컬 k8s에서 Ingress로 경로 라우팅되는 멀티서비스 앱 | 14시간 | 있음 | [06 Phase 6](06%20Phase%206%20-%20%EC%BB%A8%ED%85%8C%EC%9D%B4%EB%84%88%20%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%82%B9.md) |
| Phase 7 | 클라우드 VPC 설계 | 퍼블릭/프라이빗 서브넷으로 나뉜 VPC 구성도와 실물 | 12시간 | 있음(부분) | [07 Phase 7](07%20Phase%207%20-%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20VPC%20%EC%84%A4%EA%B3%84.md) |
| Phase 8 | 네트워크 보안 | 인바운드 규칙 최소화 전후 비교표 + 배스천 접속 경로 | 10시간 | 있음(부분) | [08 Phase 8](08%20Phase%208%20-%20%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC%20%EB%B3%B4%EC%95%88.md) |
| Phase 9 | 관측과 장애 진단 | 장애 3종을 심고 계층별로 좁혀 잡은 진단 기록 | 12시간 | 있음 | [09 Phase 9](09%20Phase%209%20-%20%EA%B4%80%EC%B8%A1%EA%B3%BC%20%EC%9E%A5%EC%95%A0%20%EC%A7%84%EB%8B%A8.md) |
| Phase 10 | 코드로 만드는 네트워크 | Phase 7의 VPC를 Terraform 코드로 재현 | 10시간 | 있음 | [10 Phase 10](10%20Phase%2010%20-%20%EC%BD%94%EB%93%9C%EB%A1%9C%20%EB%A7%8C%EB%93%9C%EB%8A%94%20%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC.md) |

부속 문서

- [00 강의 자료 인덱스](00%20%EA%B0%95%EC%9D%98%20%EC%9E%90%EB%A3%8C%20%EC%9D%B8%EB%8D%B1%EC%8A%A4.md) — 저장소 안의 네트워크 관련 자료 **전체 목록**과 주제별 역인덱스
- [11 부록 - L2와 라우터 내부](11%20%EB%B6%80%EB%A1%9D%20-%20L2%EC%99%80%20%EB%9D%BC%EC%9A%B0%ED%84%B0%20%EB%82%B4%EB%B6%80.md) — 이더넷·VLAN·스위칭 패브릭·제어/데이터 평면. 도착점에 직접 필요하진 않지만 "왜 이렇게 동작하나"가 궁금할 때
- [12 부록 - 추천 강의 종합](12%20%EB%B6%80%EB%A1%9D%20-%20%EC%B6%94%EC%B2%9C%20%EA%B0%95%EC%9D%98%20%EC%A2%85%ED%95%A9.md) — 공백 15항목을 채우는 추천 강의를 한 표로. **구매 판단은 이 문서만 보면 된다**

## 뼈대가 되는 10개 강좌

1. **[The Bits and Bytes of Computer Networking](../../courses/mooc/Computer%20Science%20Fundamentals/The%20Bits%20and%20Bytes%20of%20Computer%20Networking/)** (MOOC · Google · 6모듈 91강)
   → **Phase 2의 메인이자 Phase 1·9의 공백 메우기.** Module 2가 서브넷 마스크·2진 AND 연산·CIDR, **Module 4가 DNS 전체(재귀 조회·레코드 타입·존)와 DHCP·NAT**, Module 6이 ICMP/ping·traceroute·포트 연결 테스트·nslookup·hosts 파일을 다룬다. IT 지원 실무자 관점이라 이론보다 **"안 될 때 어디를 보는가"** 에 무게가 실려 있다.

2. **[Hands-on Internet of Things](../../courses/mooc/Others/Hands-on%20Internet%20of%20Things/)** (MOOC · UIUC · 4강좌)
   → Phase 1과 부록의 메인. 캡슐화·IP 주소·ARP·DHCP·소켓·패킷 포워딩을 대학 정규 과목 수준으로 다룬다. **단, 노트가 자동 전사 수준이라 문장이 거칠다** — Phase 1 문서에서 이 점을 다시 짚는다.
3. **[NAVER Cloud Platform Boot Camp](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/)** (Udemy · 6섹션 · 28강의)
   → Phase 5·7의 메인. VPC·Subnet·NACL·ACG·ALB/NLB/NPLB·Auto Scaling을 한국어로 실습까지 끌고 간다. 이 로드맵에서 클라우드 네트워크를 손으로 만지는 유일한 트랙이다.
4. **[Master DevOps - CI-CD, Automation and Monitoring](../../courses/mooc/DevOps%20and%20SRE/Master%20DevOps%20-%20CI-CD,%20Automation%20and%20Monitoring/)** (MOOC)
   → Phase 6(Course 4 — Docker 네트워킹·k8s Service·CNI)과 Phase 10(Course 3 — Terraform·CloudFormation)의 메인.
5. **[Microservices with Node JS and React](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/)** (Udemy · 26섹션)
   → Phase 6의 실습 트랙. Ingress-Nginx를 실제로 설치하고 경로 라우팅을 건다. Phase 3의 쿠키·JWT·CORS도 여기서 나온다.
6. **[IBM DevOps and Software Engineering](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/)** (MOOC · 15강좌)
   → 네 갈래로 나뉘어 쓰인다. `13 Application Security`(OSI·TLS·OpenSSL·Nmap) → Phase 1·4·8, `02 Introduction to Cloud Computing`(Secure Networking·CDN) → Phase 5·7, `06 Linux Commands`(네트워킹 명령) → Phase 9, `10 Microservices and Serverless`(REST·API Gateway) → Phase 3.
7. **[Protecting and Managing APIs](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/)** (MOOC)
   → Phase 4·5·8의 보조. HTTPS 적용, API 게이트웨이의 라우팅·프록시, OAuth/JWT, MITM·DoS 대응.
8. **[Observability Engineering - Metrics, Logs, and Traces](../../courses/mooc/DevOps%20and%20SRE/Observability%20Engineering%20-%20Metrics,%20Logs,%20and%20Traces/)** (MOOC · 4모듈)
   → Phase 9의 메인. Prometheus·PromQL·Grafana·Loki·OpenTelemetry·Jaeger까지 데모 중심으로 간다.
9. **[Foundations of Site Reliability Engineering Training](../../courses/mooc/DevOps%20and%20SRE/Foundations%20of%20Site%20Reliability%20Engineering%20Training/)** (MOOC · 7모듈)
   → Phase 9의 보조. SLI/SLO·에러 버짓·RCA·알림 설계.
10. **[Computer Science & Robotics - Learn by Doing! Linux to ROS 2](../../courses/udemy/Computer%20Science%20&%20Robotics%20-%20Learn%20by%20Doing!%20Linux%20to%20ROS%202/)** (Udemy · Section 2·3만)
   → Phase 6·9의 실습 보조. Linux 네트워킹 LAB, SSH 원격 접속, Docker 볼륨/네트워킹 LAB, Compose.

여러 강좌가 같은 주제를 다룰 때는 각 Phase 문서에서 **메인**과 **함께 보기**로 짝지어 두었다.

## 순서를 이렇게 잡은 이유

**"눈에 보이는 결과"를 최대한 앞으로 당겼다.** Phase 1에서 이론을 쌓자마자 tcpdump로 실제 패킷을 잡아 보고, Phase 2에서 도메인을 사서 자기 이름을 인터넷에 등록한다. 이 두 개가 초반 이탈을 막는다.

그다음은 **요청이 지나가는 순서 그대로** 따라간다 — 이름을 찾고(DNS) → 요청을 보내고(HTTP) → 암호화하고(TLS) → 앞단에서 나눠 주고(로드밸런서) → 뒤에서 컨테이너가 받는다(k8s). Phase 2~6이 이 경로다. 각 Phase가 요청 경로의 한 구간이라 "지금 배우는 게 어디에 있는 건지"를 잃지 않는다.

Phase 7(VPC)을 뒤에 둔 이유는, **VPC가 앞의 모든 것을 담는 그릇이기 때문이다.** 로드밸런서·서브넷·보안그룹이 무엇을 하는 물건인지 모르는 상태에서 VPC부터 그리면 클릭만 따라 하게 된다. Phase 5에서 로드밸런서를 이미 만져 봤기 때문에 Phase 7의 "LB 전용 서브넷"이 왜 필요한지가 바로 이해된다.

Phase 8(보안)과 9(진단)는 만들 줄 알게 된 다음에 온다. 특히 **Phase 9는 도착점의 절반**이다 — "만든다"만큼 "안 될 때 원인을 찾는다"가 목표에 들어 있다. Phase 10(IaC)은 앞에서 손으로 만든 것을 코드로 되돌려 굳히는 마무리다.

## 추천 진행 방식

- **주 5시간 기준 약 22주** 코스다(총 107시간 + 부록).
- 강의 하나를 볼 때마다 `study` 스킬로 Q&A 학습을 하면 정리본이 자동 생성된다.
- **실습은 로컬 Docker 위주로 설계했다.** Phase 6은 Docker Desktop의 쿠버네티스나 k3d/minikube면 충분하다. Phase 5·7만 클라우드 콘솔이 필요하다.
- **클라우드 과금 주의.** Phase 5·7의 NCP 실습은 VM·로드밸런서·공인 IP가 시간당 과금된다. NCP 강좌에 [`05 Compute - 사용하지 않는 VM 반납하기`](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%203%20-%20%EC%BB%B4%ED%93%A8%ED%84%B0%20%EC%84%9C%EB%B9%84%EC%8A%A4%20-%20Compute/05%20Compute%20-%20%EC%82%AC%EC%9A%A9%ED%95%98%EC%A7%80%20%EC%95%8A%EB%8A%94%20VM%20%EB%B0%98%EB%82%A9%ED%95%98%EA%B8%B0.md)와 [`03 Auto Scaling 삭제하기`](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%205%20-%20Computer%20+%20Network/03%20Auto%20Scaling%20%EC%82%AD%EC%A0%9C%ED%95%98%EA%B8%B0.md) 강의가 따로 있으니 실습 세션마다 마지막에 반드시 본다.
- **Phase 2는 도메인 구매(연 1~2만원대)가 사실상 필수다.** DNS 위임과 Phase 4의 Let's Encrypt 인증서 발급이 모두 실제 도메인을 요구한다. 하나 사 두면 Phase 2·4·5·7에서 계속 쓴다.

## 빠른 경로 — 목표가 "지금 서비스가 왜 안 뜨는지 진단"만이라면

전체 완주가 부담일 때의 최소 경로. **약 8주(40시간).**

1. [Phase 1](01%20Phase%201%20-%20%ED%8C%A8%ED%82%B7%EC%9D%B4%20%EC%96%B4%EB%96%BB%EA%B2%8C%20%EC%98%A4%EA%B0%80%EB%8A%94%EA%B0%80.md)의 **1-A(계층과 캡슐화)**와 **1-D(포트와 소켓)** — 진단의 언어를 잡는다
2. [Phase 2](02%20Phase%202%20-%20%EC%9D%B4%EB%A6%84%20%EB%B6%99%EC%9D%B4%EA%B8%B0%20DNS.md) 전부 — 장애의 상당수가 DNS다. 여기만은 줄이지 않는다
3. [Phase 4](04%20Phase%204%20-%20%EC%95%94%ED%98%B8%ED%99%94%EC%99%80%20%EC%8B%A0%EB%A2%B0%20TLS.md)의 **4-B(인증서와 신뢰)** — 인증서 만료·체인 누락은 가장 흔한 장애다
4. [Phase 5](05%20Phase%205%20-%20%ED%94%84%EB%A1%9D%EC%8B%9C%EC%99%80%20%EB%A1%9C%EB%93%9C%EB%B0%B8%EB%9F%B0%EC%8B%B1.md)의 **5-B(헬스체크)** — "LB는 살아 있는데 502"의 원인
5. [Phase 9](09%20Phase%209%20-%20%EA%B4%80%EC%B8%A1%EA%B3%BC%20%EC%9E%A5%EC%95%A0%20%EC%A7%84%EB%8B%A8.md) 전부 — 도구와 절차

이 경로에서 빠지는 것은 **"직접 만드는 능력"**이다. 남의 인프라를 고칠 수는 있어도 처음부터 설계하지는 못한다. 새로 서비스를 올릴 일이 생기면 Phase 6·7·10으로 돌아온다.

## 이 로드맵에 없는 것

- **CI/CD 파이프라인 구축 자체** — [데브옵스 로드맵](../%EB%8D%B0%EB%B8%8C%EC%98%B5%EC%8A%A4%20%EB%A1%9C%EB%93%9C%EB%A7%B5/)이 다룬다. 여기서는 Phase 10에서 "네트워크 구성을 코드로 배포한다"까지만 본다.
- **관측 도구 심화(Prometheus 운영·대시보드 설계)** — **개발운영 로드맵**과 겹친다. Phase 9는 "네트워크 장애를 찾는 데 필요한 만큼"만 쓴다.
- **DB 계층의 성능·안정화** — **DB 운영 안정화 로드맵**이 원본이다.
- **무선·RF·메시 네트워킹** — IoT 고유 주제라 **IoT 로드맵**에 맡긴다. `Hands-on IoT` Course 2가 여기에 해당한다.
- **서비스 메시(Istio)·gRPC** — 저장소에 [`02 Service Mesh and Istio`](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%206%20-%20Optional%20-%20OpenShift%20Essentials%20-%20Working%20with%20OpenShift%20and%20Istio/02%20Service%20Mesh%20and%20Istio.md) 한 강의뿐이라 Phase로 세우지 않았다. 도착점 이후의 주제다.

## 진행 현황

| Phase | 상태 | 완료일 |
|---|---|---|
| Phase 1 | 미시작 | — |
| Phase 2 | 미시작 | — |
| Phase 3 | 미시작 | — |
| Phase 4 | 미시작 | — |
| Phase 5 | 미시작 | — |
| Phase 6 | 미시작 | — |
| Phase 7 | 미시작 | — |
| Phase 8 | 미시작 | — |
| Phase 9 | 미시작 | — |
| Phase 10 | 미시작 | — |

## 주의 사항

- **각 Phase 문서의 체크리스트가 이 로드맵이 다루는 코스들의 진행 기록 원본이다.** 별도의 코스 단위 진행 기록 파일(`study-progress/{코스명}.md`)은 두지 않는다.
- **`Hands-on Internet of Things`의 노트 품질에 주의한다.** MOOC 자동 전사를 그대로 정리한 것이라 문장이 반복되고 요약이 본문과 겹친다. 주제 커버리지는 맞지만, 이해가 안 되면 각 노트 상단의 원본 강의 링크로 영상을 직접 보는 편이 빠르다.
- **Phase 2·4는 실제 도메인이 필요하다.** 도메인 없이는 DNS 위임도 Let's Encrypt 인증서도 실습할 수 없다. Phase 1을 하는 동안 미리 사 두면 흐름이 끊기지 않는다.
- **NCP 강좌는 네이버 클라우드 기준이다.** AWS·GCP와 용어가 다르다(ACG↔Security Group, NACL은 동일). Phase 7의 추천 강의(AWS VPC Labs)를 같이 보면 두 클라우드의 용어 대응이 잡힌다.
