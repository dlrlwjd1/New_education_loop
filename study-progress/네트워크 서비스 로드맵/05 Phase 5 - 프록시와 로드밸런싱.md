# Phase 5 — 프록시와 로드밸런싱

- 목표: 서버 앞에 무언가를 놓아 **트래픽을 나누고, 죽은 서버를 빼고, 암호화를 끊는다.**
- 분량: 약 10시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 포워드 프록시와 리버스 프록시를 구분하고, 각각 누구를 감추는지 말한다
- L4와 L7 로드밸런싱을 구분하고 상황에 맞게 고른다
- 라운드로빈 · 최소 연결 · 소스 IP 해시를 언제 쓰는지 설명한다
- 헬스체크를 설정해 죽은 인스턴스가 자동으로 빠지는 것을 확인한다
- 백엔드가 보는 출발지 IP가 언제 클라이언트 IP가 아닌 로드밸런서 IP가 되는지 설명한다
- 스티키 세션이 필요한 조건과 그 대가를 말하고, 세션 외부화라는 대안을 안다
- Nginx 설정 파일을 직접 써서 리버스 프록시를 세운다

> **과금 주의**: 이 Phase의 NCP 실습은 VM 2대 + 로드밸런서 + 공인 IP가 시간당 과금된다. 세션이 끝나면 반드시 반납한다 — NCP 강좌의 [`05 Compute - 사용하지 않는 VM 반납하기`](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%203%20-%20%EC%BB%B4%ED%93%A8%ED%84%B0%20%EC%84%9C%EB%B9%84%EC%8A%A4%20-%20Compute/05%20Compute%20-%20%EC%82%AC%EC%9A%A9%ED%95%98%EC%A7%80%20%EC%95%8A%EB%8A%94%20VM%20%EB%B0%98%EB%82%A9%ED%95%98%EA%B8%B0.md)를 미리 읽어 둔다.

## 5-A. 프록시란 무엇인가

메인: Protecting and Managing APIs, Module 2 Lesson 1

- [ ] [01.What is an API Gateway.md](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%201%20-%20API%20Gateways/01.What%20is%20an%20API%20Gateway.md) — **API 게이트웨이는 리버스 프록시의 한 종류다.** 이 관점을 여기서 잡는다
- [ ] [02.Popular API Gateways.md](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%201%20-%20API%20Gateways/02.Popular%20API%20Gateways.md)
- [ ] [03.Routing and Proxying.md](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%201%20-%20API%20Gateways/03.Routing%20and%20Proxying.md) — **이 소절의 핵심.** 요청을 받아 뒤로 넘기는 동작 자체
- [ ] [04.Introduction to API Gateways (Reading).md](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%202%20-%20API%20Management%20and%20Monitoring/Lesson%201%20-%20API%20Gateways/04.Introduction%20to%20API%20Gateways%20%28Reading%29.md)

## 5-B. 로드밸런서 — 유형 · 알고리즘 · 헬스체크

메인: NAVER Cloud Platform Boot Camp, Section 4. **이 로드맵에서 로드밸런서를 손으로 만드는 유일한 트랙이다.**

- [ ] [01 HA - High Availability.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%204%20-%20Network/01%20HA%20-%20High%20Availability.md) — Active-Standby와 Active-Active. **가상 IP로 장애 전환하는 방식**이 Phase 1의 Gratuitous ARP와 이어진다
- [ ] [02 Network - Load Balancer.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%204%20-%20Network/02%20Network%20-%20Load%20Balancer.md) — **이 Phase의 핵심 강의.** ALB/NLB/NPLB 세 유형의 용도, 라운드로빈·최소연결·소스IP해시 알고리즘, DSR 개념을 한 번에 정리한다
- [ ] [03 Network - Load Balancer 실습준비.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%204%20-%20Network/03%20Network%20-%20Load%20Balancer%20%EC%8B%A4%EC%8A%B5%EC%A4%80%EB%B9%84.md) — 호스트명을 출력하는 `red`/`blue` 서버 2대를 만든다. **분산 결과를 눈으로 확인하려는 장치**라 반드시 그대로 따라 한다
- [ ] [04 Network - Application Load Balancer.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%204%20-%20Network/04%20Network%20-%20Application%20Load%20Balancer.md) — **L7 로드밸런싱과 Target Group·Health Check 설정.** 로드밸런서 전용 서브넷이 왜 필요한지도 여기서 나온다
- [ ] [05 Network - Network Load Balancer.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%204%20-%20Network/05%20Network%20-%20Network%20Load%20Balancer.md) — **L4와 DSR.** 강의가 `tcpdump -n port 80` 으로 ALB와 NLB의 출발지 IP 차이를 직접 관찰한다. Phase 1의 캡처 실력이 여기서 쓰인다
- [ ] [06 Network - Network Proxy Load Balancer.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%204%20-%20Network/06%20Network%20-%20Network%20Proxy%20Load%20Balancer.md) — Phase 4에서 이미 봤다면 건너뛴다. TLS 종료 지점 관점으로 다시 읽으면 좋다

## 5-C. CDN과 캐시 계층

- [ ] [13 CDN - Content Delivery Networks.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/02%20Introduction%20to%20Cloud%20Computing/Module%203%20-%20Components%20of%20Cloud%20Computing/13%20CDN%20-%20Content%20Delivery%20Networks.md) — 저장소에서 **CDN을 다루는 유일한 강의**다. 짧다. 요청 경로 어디에 CDN이 끼어드는지만 확실히 잡고 넘어간다

## 5-D. 공백 — Nginx 직접 설정 · 스티키 세션

NCP 강의는 **클라우드 콘솔에서 로드밸런서를 클릭으로 만든다.** 설정 파일을 직접 쓰는 경험이 없어, 프록시가 헤더를 어떻게 고쳐 쓰는지(`X-Forwarded-For`, `Host`), 업스트림을 어떻게 정의하는지가 통째로 빠진다. 스티키 세션도 저장소 어디에도 없다(소스 IP 해시는 있지만 다른 개념이다).

| 강의 | 플랫폼 | 링크 | 비고 |
|---|---|---|---|
| Implement NGINX Web Servers and Reverse Proxy Solutions | MOOC (EDUCBA) | [링크](https://www.mooc.org/learn/implement-nginx-web-servers-and-reverse-proxy-solutions) | 4모듈 8시간. **Module 3이 백엔드 연동과 리버스 프록시 구현**, Module 4가 **로드밸런서(최소 연결 포함) · SSL 인증서 · HTTP 압축 · 인증 · 가상 호스팅**. 15개 채점 과제. Phase 3의 WebSocket 프록시 통과와 Phase 8의 접근 제어도 일부 채운다 |

**헬스체크는 이 강좌에 명시돼 있지 않다** — Nginx 오픈소스판은 능동 헬스체크가 없으므로, 그 부분은 NCP의 Target Group 실습(5-B)에서 이미 채워진 것으로 본다.

강의 없이 버티려면:

1. Docker로 백엔드 2개(호스트명을 응답에 넣은 것)와 Nginx 1개를 띄우고, `upstream` 블록으로 두 백엔드를 묶어 라운드로빈이 도는 것을 확인한다
2. `proxy_set_header X-Real-IP` / `X-Forwarded-For` / `X-Forwarded-Proto` 를 설정하기 전과 후에 백엔드가 보는 출발지 IP와 프로토콜을 비교한다
3. `ip_hash` 를 켜서 **같은 클라이언트가 항상 같은 백엔드로 가는 것**을 확인하고, 그 상태에서 백엔드 1대를 죽였을 때 그 사용자의 세션이 어떻게 되는지 관찰한다
4. 3번의 문제를 **세션을 Redis로 빼서** 해결하고, 스티키 세션과 세션 외부화의 트레이드오프를 표로 정리한다 (Phase 3의 [`14 Storing Sessions in MySQL`](../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/14%20Storing%20Sessions%20in%20MySQL.md)이 같은 아이디어다)

## 산출물

**"서버 1대를 죽여도 안 끊기는 구성" 실증 기록.**

1. 백엔드 2대 앞에 로드밸런서를 두고, 브라우저 새로고침으로 응답이 번갈아 나오는 것을 캡처한다 (NCP의 `red`/`blue` 또는 로컬 Docker)
2. **백엔드 1대를 강제로 죽인다.** 헬스체크가 실패로 바뀌기까지 걸린 시간과, 그 사이에 사용자가 받은 오류 응답 수를 기록한다
3. 헬스체크 간격·실패 임계값을 조정해 2번의 오류 시간을 줄이고, **너무 짧게 잡았을 때 생기는 부작용**(정상 서버가 일시적 지연으로 빠지는 것)을 관찰해 적는다
4. Phase 3에서 예측했던 **"쿠키 세션이 로드밸런서 2대 뒤에서 어떻게 되는가"를 실제로 검증**한다. 예측이 맞았는지, 틀렸다면 왜인지 적는다
5. 백엔드가 보는 출발지 IP를 L4(DSR)와 L7 각각에서 `tcpdump` 로 확인해 비교표를 만든다

## 다음 단계

→ [06 Phase 6 - 컨테이너 네트워킹](06%20Phase%206%20-%20%EC%BB%A8%ED%85%8C%EC%9D%B4%EB%84%88%20%EB%84%A4%ED%8A%B8%EC%9B%8C%ED%82%B9.md)
