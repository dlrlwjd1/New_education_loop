# Phase 7 — 클라우드 VPC 설계

- 목표: **도착점의 본체.** 서비스 하나를 담을 가상 네트워크를 CIDR부터 직접 설계해 만든다.
- 분량: 약 12시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- VPC의 CIDR을 정하고 용도별 서브넷으로 쪼갠다 (퍼블릭 / 프라이빗 / 로드밸런서 전용 / DB)
- 퍼블릭 서브넷과 프라이빗 서브넷의 차이를 **라우팅 테이블 한 줄로** 설명한다
- 인터넷 게이트웨이와 NAT를 각각 어디에 붙이는지, 왜 프라이빗 서브넷에서 나가는 트래픽만 NAT가 필요한지 말한다
- 보안그룹(ACG)과 네트워크 ACL의 차이를 **상태 유지(stateful) 여부**로 설명하고 규칙을 쓴다
- 로드밸런서를 붙이고 오토스케일링과 연결한다
- 가용영역 두 곳에 걸쳐 이중화하고, 한 AZ가 죽었을 때 무엇이 살아남는지 말한다
- 프라이빗 서브넷의 서버에 배스천을 거쳐 접속한다

> **과금 주의**: 이 Phase는 VM·로드밸런서·공인 IP·NAT가 전부 시간당 과금된다. NCP 강좌에 정리·삭제 강의가 따로 있으니 **세션마다 마지막에 반드시 본다.**
> **용어 주의**: NCP는 보안그룹을 **ACG(Access Control Group)** 라고 부른다. AWS의 Security Group과 같은 개념이다. NACL은 두 클라우드 모두 같은 이름이다.

## 7-0. 준비 — 계정과 콘솔

메인: NAVER Cloud Platform Boot Camp, Section 1. **이미 계정이 있으면 건너뛴다.**

- [ ] [01 네이버 클라우드 플랫폼 소개.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%201%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%ED%94%8C%EB%9E%AB%ED%8F%BC%EC%9C%BC%EB%A1%9C%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0/01%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%ED%94%8C%EB%9E%AB%ED%8F%BC%20%EC%86%8C%EA%B0%9C.md)
- [ ] [02 네이버클라우드 플랫폼 홈페이지 살펴보기.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%201%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%ED%94%8C%EB%9E%AB%ED%8F%BC%EC%9C%BC%EB%A1%9C%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0/02%20%EB%84%A4%EC%9D%B4%EB%B2%84%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%ED%94%8C%EB%9E%AB%ED%8F%BC%20%ED%99%88%ED%8E%98%EC%9D%B4%EC%A7%80%20%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0.md)
- [ ] [03 네이버클라우드 플랫폼 가입.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%201%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%ED%94%8C%EB%9E%AB%ED%8F%BC%EC%9C%BC%EB%A1%9C%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0/03%20%EB%84%A4%EC%9D%B4%EB%B2%84%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%ED%94%8C%EB%9E%AB%ED%8F%BC%20%EA%B0%80%EC%9E%85.md)

## 7-A. VPC · 서브넷 · NACL · ACG

메인: NAVER Cloud Platform Boot Camp, Section 2. **이 Phase의 핵심이자 로드맵 전체의 도착점에 가장 가까운 두 강의다.**

- [ ] [01 VPC, Subnet, NACL, ACG.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%202%20-%20%EA%B0%80%EC%83%81%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC%20%ED%99%98%EA%B2%BD%20%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0%20-%20VPC,%20Subnet,%20NACL,%20ACG/01%20VPC,%20Subnet,%20NACL,%20ACG.md) — **개념.** 네 가지가 어떻게 겹겹이 쌓이는지. Phase 1의 CIDR·라우팅이 여기서 실물이 된다
- [ ] [02 VPC, Subnet, NACL, ACG 실습.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%202%20-%20%EA%B0%80%EC%83%81%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC%20%ED%99%98%EA%B2%BD%20%EC%82%B4%ED%8E%B4%EB%B3%B4%EA%B8%B0%20-%20VPC,%20Subnet,%20NACL,%20ACG/02%20VPC,%20Subnet,%20NACL,%20ACG%20%EC%8B%A4%EC%8A%B5.md) — **실습.** 직접 만든다. 여기서 만든 VPC를 Phase 8·10에서 계속 쓴다

함께 보기: IBM `02 Introduction to Cloud Computing` Module 3

- [ ] [05 Secure Networking in Cloud.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/02%20Introduction%20to%20Cloud%20Computing/Module%203%20-%20Components%20of%20Cloud%20Computing/05%20Secure%20Networking%20in%20Cloud.md) — 클라우드 사업자에 무관한 일반론. NCP 용어를 다른 클라우드로 옮길 때의 다리

## 7-B. 서브넷 위에 서버 올리기 — 퍼블릭과 프라이빗

메인: NAVER Cloud Platform Boot Camp, Section 3

- [ ] [01 Compute 서비스.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%203%20-%20%EC%BB%B4%ED%93%A8%ED%84%B0%20%EC%84%9C%EB%B9%84%EC%8A%A4%20-%20Compute/01%20Compute%20%EC%84%9C%EB%B9%84%EC%8A%A4.md)
- [ ] [02 Compute - Linux, Windows VM 만들고 접속해 보기.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%203%20-%20%EC%BB%B4%ED%93%A8%ED%84%B0%20%EC%84%9C%EB%B9%84%EC%8A%A4%20-%20Compute/02%20Compute%20-%20Linux,%20Windows%20VM%20%EB%A7%8C%EB%93%A4%EA%B3%A0%20%EC%A0%91%EC%86%8D%ED%95%B4%20%EB%B3%B4%EA%B8%B0.md) — 퍼블릭 서브넷에 서버를 올리고 공인 IP로 접속
- [ ] [04 Compute - Private Subnet 접속방법.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%203%20-%20%EC%BB%B4%ED%93%A8%ED%84%B0%20%EC%84%9C%EB%B9%84%EC%8A%A4%20-%20Compute/04%20Compute%20-%20Private%20Subnet%20%EC%A0%91%EC%86%8D%EB%B0%A9%EB%B2%95.md) — **이 소절의 핵심.** 공인 IP가 없는 서버에 어떻게 들어가는가. Phase 8의 배스천 호스트가 여기서 시작한다
- [ ] [09 Compute - 내 서버 이미지 만들기, 유사 서버 만들기.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%203%20-%20%EC%BB%B4%ED%93%A8%ED%84%B0%20%EC%84%9C%EB%B9%84%EC%8A%A4%20-%20Compute/09%20Compute%20-%20%EB%82%B4%20%EC%84%9C%EB%B2%84%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EB%A7%8C%EB%93%A4%EA%B8%B0,%20%EC%9C%A0%EC%82%AC%20%EC%84%9C%EB%B2%84%20%EB%A7%8C%EB%93%A4%EA%B8%B0.md) — 오토스케일링의 전제. 서버 이미지가 있어야 늘릴 수 있다
- [ ] [05 Compute - 사용하지 않는 VM 반납하기.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%203%20-%20%EC%BB%B4%ED%93%A8%ED%84%B0%20%EC%84%9C%EB%B9%84%EC%8A%A4%20-%20Compute/05%20Compute%20-%20%EC%82%AC%EC%9A%A9%ED%95%98%EC%A7%80%20%EC%95%8A%EB%8A%94%20VM%20%EB%B0%98%EB%82%A9%ED%95%98%EA%B8%B0.md) — **먼저 읽어 둔다.** 실습 세션이 끝날 때마다 쓴다

디스크·LVM 관련 강의(`06`·`07`·`08`)는 네트워크와 무관하므로 **건너뛴다.**

## 7-C. 확장과 이중화

메인: NAVER Cloud Platform Boot Camp, Section 3·5

- [ ] [11 Compute - Scale-Up & Scale-Out.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%203%20-%20%EC%BB%B4%ED%93%A8%ED%84%B0%20%EC%84%9C%EB%B9%84%EC%8A%A4%20-%20Compute/11%20Compute%20-%20Scale-Up%20&%20Scale-Out.md) — **수직 확장과 수평 확장.** 로드밸런서가 필요한 이유가 여기서 갈린다
- [ ] [01 Auto Scaling.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%205%20-%20Computer%20+%20Network/01%20Auto%20Scaling.md)
- [ ] [02 Auto Scaling 실습.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%205%20-%20Computer%20+%20Network/02%20Auto%20Scaling%20%EC%8B%A4%EC%8A%B5.md) — **오토스케일링과 로드밸런서 연결.** Phase 5의 Target Group에 인스턴스가 자동 등록되는 것을 확인한다
- [ ] [03 Auto Scaling 삭제하기.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%205%20-%20Computer%20+%20Network/03%20Auto%20Scaling%20%EC%82%AD%EC%A0%9C%ED%95%98%EA%B8%B0.md) — **과금 정리.** 반드시 한다

프라이빗 서브넷에 DB를 두는 실습: Section 6

- [ ] [01 Cloud DB.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%206%20-%20Cloud%20Database/01%20Cloud%20DB.md) — **네트워크 관점에서만 본다** — DB를 프라이빗 서브넷에 두고 앱 서버만 접근하게 하는 구성. DB 운영 자체는 **DB 운영 안정화 로드맵**이 다룬다
- [ ] [02 Cloud DB - MySQL 실습.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%206%20-%20Cloud%20Database/02%20Cloud%20DB%20-%20MySQL%20%EC%8B%A4%EC%8A%B5.md) — ACG로 DB 접근을 앱 서버로만 제한하는 부분에 집중한다

## 7-D. 공백 — VPC 피어링 · VPN · Flow Log · Egress 통제

NCP 강좌는 **VPC 하나를 만드는 데까지**다. 여러 VPC를 잇는 피어링, 온프레미스와 잇는 VPN, 나가는 트래픽 통제, 그리고 **흐름 로그(flow log)** 가 통째로 없다. 흐름 로그는 Phase 8·9의 진단에서 다시 필요해진다.

| 강의 | 플랫폼 | 링크 | 비고 |
|---|---|---|---|
| Hands-on AWS VPC Labs: Essential Lab Exercises | MOOC (Pearson) | [링크](https://www.mooc.org/learn/pearson-hands-on-aws-vpc-labs-essential-lab-exercises-video-course-g209x) | 11시간, **11개 실습 랩.** VPC 피어링 연결과 그 라우팅 테이블 설정, NAT 게이트웨이 생성과 프라이빗 서브넷 라우팅, **VPC 흐름 로그 활성화와 결과 분석**, 사이트 간 VPN 구성이 각각 별도 랩으로 있다. 트랜짓 게이트웨이·VPC 엔드포인트도 다룬다 |
| AWS Cloud Technical Essentials | MOOC (AWS) | [링크](https://www.mooc.org/learn/aws-cloud-technical-essentials) | 4모듈. Week 2가 VPC 소개와 **보안그룹·NACL로 네트워크를 지키는 부분**, Week 4가 ELB와 EC2 Auto Scaling. **NCP로 이미 배운 것을 AWS 용어로 옮기는 용도**로 유용하다. 위 랩 강좌가 부담이면 이것부터 |

강의 없이 버티려면:

1. NCP에서 VPC를 **두 개** 만들고 각각에 서버를 하나씩 둔 뒤, 서로 통신이 안 되는 것을 확인한다. 그다음 피어링(NCP는 VPC Peering)을 걸고 **라우팅 테이블에 무엇을 추가해야 통하는지** 직접 알아낸다
2. 프라이빗 서브넷 서버에서 `curl https://example.com` 이 실패하는 것을 확인하고, NAT 게이트웨이를 붙여 성공시킨다. **그 전후의 라우팅 테이블 차이**를 기록한다
3. ACG의 아웃바운드 규칙을 `0.0.0.0/0` 전체 허용에서 필요한 대상만 남기도록 좁히고, 어떤 기능이 깨지는지 관찰한다 (egress 통제)

## 산출물

**"VPC 설계서 + 실물"** — 이 로드맵의 도착점 그 자체다.

1. **CIDR 설계표** — VPC 대역 하나를 정하고 서브넷 4종(퍼블릭 앱 / 프라이빗 앱 / LB 전용 / DB)으로 쪼갠다. 각 서브넷의 대역·가용영역·용도·라우팅 대상을 표로 만든다. **가용영역 2곳에 걸치도록 각 용도마다 서브넷을 2개씩** 둔다
2. **구성도** — 인터넷 게이트웨이 → 로드밸런서 → 앱 서버 → DB 순으로 그리고, 각 화살표에 **어느 ACG 규칙이 그 통신을 허용하는지** 적는다
3. **실물 구축** — 위 설계대로 NCP에 만든다. 앱 서버는 프라이빗 서브넷에 두고 로드밸런서로만 노출한다
4. **ACG / NACL 규칙표** — 인바운드·아웃바운드 규칙을 전부 적고, 각 줄이 왜 필요한지 한 줄씩 붙인다. **"일단 열어 둔" 규칙이 하나도 없어야 한다**
5. **AZ 장애 실험** — 한쪽 AZ의 서버를 전부 내리고 서비스가 계속 응답하는지 확인한다. 응답이 끊겼다면 무엇이 단일 장애점이었는지 적는다
6. **정리 확인** — 실습이 끝나면 만든 자원을 전부 삭제하고, **콘솔에서 남은 과금 대상이 없는지** 확인한 스크린샷을 남긴다

## 다음 단계

→ [08 Phase 8 - 네트워크 보안](08%20Phase%208%20-%20%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%81%AC%20%EB%B3%B4%EC%95%88.md)
