# Phase 8 — 네트워크 보안

- 목표: Phase 7에서 만든 VPC의 **문을 필요한 만큼만 열고**, 열어 둔 문으로 들어오는 공격을 막는다.
- 분량: 약 10시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- 인바운드 규칙을 "출발지 · 포트 · 이유" 셋이 다 적힌 형태로만 쓴다. `0.0.0.0/0` 이 남아 있다면 그 이유를 댈 수 있다
- 배스천 호스트나 SSH 터널로 프라이빗 서브넷의 서버에 들어간다
- `nmap` 으로 **내 서버에서 실제로 열려 있는 포트**를 밖에서 확인한다
- API 키 · OAuth 2.0 · JWT를 상황에 맞게 고르고, 각각이 무엇을 증명하는지 구분한다
- Rate Limiting을 걸어 같은 클라이언트의 과도한 요청을 막는다
- 흐름 로그(flow log)를 읽고 **거부된 트래픽이 어느 규칙에 막혔는지** 짚는다

## 8-A. 최소 권한과 접근 경로

메인: NAVER Cloud Platform Boot Camp, Section 3 + IBM `13 Application Security`

- [ ] [03 Compute - adduser, root SSH 접속 차단 방법.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%203%20-%20%EC%BB%B4%ED%93%A8%ED%84%B0%20%EC%84%9C%EB%B9%84%EC%8A%A4%20-%20Compute/03%20Compute%20-%20adduser,%20root%20SSH%20%EC%A0%91%EC%86%8D%20%EC%B0%A8%EB%8B%A8%20%EB%B0%A9%EB%B2%95.md) — **가장 먼저 하는 하드닝.** root 직접 로그인을 막는다
- [ ] [04 Compute - Private Subnet 접속방법.md](../../courses/udemy/NAVER%20Cloud%20Platform%20Boot%20Camp%20-%20%EB%84%A4%EC%9D%B4%EB%B2%84%20%ED%81%B4%EB%9D%BC%EC%9A%B0%EB%93%9C%20%EB%B6%80%ED%8A%B8%20%EC%BA%A0%ED%94%84/Section%203%20-%20%EC%BB%B4%ED%93%A8%ED%84%B0%20%EC%84%9C%EB%B9%84%EC%8A%A4%20-%20Compute/04%20Compute%20-%20Private%20Subnet%20%EC%A0%91%EC%86%8D%EB%B0%A9%EB%B2%95.md) — Phase 7에서 봤다면 **이번엔 "왜 이 경로여야 안전한가" 관점으로** 다시 읽는다
- [ ] [03 Security by Design.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/03%20Security%20by%20Design.md)
- [ ] [12 Vulnerability Scanning and Threat Modeling.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/12%20Vulnerability%20Scanning%20and%20Threat%20Modeling.md) — **"누가 어디로 들어올 수 있는가"를 체계적으로 세는 법**
- [ ] [13 Threat Monitoring.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/13%20Threat%20Monitoring.md)
- [ ] [15 Getting Started with Network and Port Scanning with Nmap.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%201%20-%20Introduction%20to%20DevSecOps%20and%20Network%20Security/15%20Getting%20Started%20with%20Network%20and%20Port%20Scanning%20with%20Nmap.md) — **내 규칙이 실제로 먹었는지 밖에서 검증하는 도구.** 이 Phase의 산출물에 쓴다

함께 보기: Computer Science & Robotics - Linux to ROS 2, Section 2 (SSH를 손에 익히는 쪽)

- [ ] [19 Remote Connection.md](../../courses/udemy/Computer%20Science%20&%20Robotics%20-%20Learn%20by%20Doing!%20Linux%20to%20ROS%202/Section%202%20-%20Linux%20Operating%20System/19%20Remote%20Connection.md)
- [ ] [20 [LAB] Remote Connection.md](../../courses/udemy/Computer%20Science%20&%20Robotics%20-%20Learn%20by%20Doing!%20Linux%20to%20ROS%202/Section%202%20-%20Linux%20Operating%20System/20%20%5BLAB%5D%20Remote%20Connection.md) — **실습 랩**

## 8-B. API 접근 통제

메인: Protecting and Managing APIs, Module 1 Lesson 1~2

- [ ] [05.API Authentication Methods.md](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/05.API%20Authentication%20Methods.md)
- [ ] [06.Basic Authentication and API Keys.md](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/06.Basic%20Authentication%20and%20API%20Keys.md)
- [ ] [07.OAuth 2.0 and JWT.md](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/07.OAuth%202.0%20and%20JWT.md) — **Phase 3에서 본 JWT를 인증 프로토콜 관점에서 다시 본다**
- [ ] [08.Demonstration - Implementing OAuth in an API.md](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%201%20-%20Authentication%20Methods/08.Demonstration%20-%20Implementing%20OAuth%20in%20an%20API.md)
- [ ] [01.Role-Based Access Control (RBAC).md](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%202%20-%20Authorization%20and%20Access%20Control/01.Role-Based%20Access%20Control%20%28RBAC%29.md)
- [ ] [03.Scopes in Oauth.md](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%202%20-%20Authorization%20and%20Access%20Control/03.Scopes%20in%20Oauth.md)
- [ ] [04.Fine-Grained Access Control & Auditing.md](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%202%20-%20Authorization%20and%20Access%20Control/04.Fine-Grained%20Access%20Control%20&%20Auditing.md)
- [ ] [05.Demonstration - Setting Up RBAC for an API.md](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%202%20-%20Authorization%20and%20Access%20Control/05.Demonstration%20-%20Setting%20Up%20RBAC%20for%20an%20API.md)

## 8-C. 공격과 방어

메인: Protecting and Managing APIs, Module 1 Lesson 3

- [ ] [01.Common API Attacks Overview.md](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%203%20-%20Securing%20APIs%20Against%20Threats/01.Common%20API%20Attacks%20Overview.md)
- [ ] [03.Man-in-the-Middle & DoS Attacks.md](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%203%20-%20Securing%20APIs%20Against%20Threats/03.Man-in-the-Middle%20&%20DoS%20Attacks.md) — **네트워크 계층에서 오는 공격.** Phase 4의 TLS가 MITM을 어떻게 막는지 여기서 이어진다
- [ ] [04.Security Best Practices & Preventive Measures.md](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%203%20-%20Securing%20APIs%20Against%20Threats/04.Security%20Best%20Practices%20&%20Preventive%20Measures.md) — **Rate Limiting이 언급되는 지점**
- [ ] [08.Understanding and Preventing the OWASP Top API Security Threats.md](../../courses/mooc/Web%20and%20APIs/Protecting%20and%20Managing%20APIs/Module%201%20-%20API%20Security%20Fundamentals/Lesson%203%20-%20Securing%20APIs%20Against%20Threats/08.Understanding%20and%20Preventing%20the%20OWASP%20Top%20API%20Security%20Threats.md)

함께 보기: IBM `13 Application Security` Module 3 (OWASP 원본 목록)

- [ ] [01 Intro to OWASP (Top 10) Security Vulnerabilities.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%203%20-%20OWASP%20Top%2010%20Vulnerabilities/01%20Intro%20to%20OWASP%20%28Top%2010%29%20Security%20Vulnerabilities.md)
- [ ] [02 OWASP Top 1-3.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%203%20-%20OWASP%20Top%2010%20Vulnerabilities/02%20OWASP%20Top%201-3.md)
- [ ] [03 OWASP Top 4-6.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%203%20-%20OWASP%20Top%2010%20Vulnerabilities/03%20OWASP%20Top%204-6.md)
- [ ] [04 OWASP Top 7-10.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/13%20Application%20Security/Module%203%20-%20OWASP%20Top%2010%20Vulnerabilities/04%20OWASP%20Top%207-10.md)

애플리케이션 코드 취약점(SQL 인젝션·XSS) 강의는 이 로드맵의 범위 밖이다. 필요하면 같은 모듈의 `08`~`12`를 본다.

## 8-D. 공백 — WAF · Rate Limiting 실습 · Flow Log 읽기

저장소는 **공격의 종류는 알려 주지만 막는 것을 손으로 시키지 않는다.** Rate Limiting은 "모범 사례" 목록의 한 줄로만 나오고, WAF와 흐름 로그는 어디에도 없다.

| 강의 | 플랫폼 | 링크 | 비고 |
|---|---|---|---|
| Implement NGINX Web Servers and Reverse Proxy Solutions | MOOC (EDUCBA) | [링크](https://www.mooc.org/learn/implement-nginx-web-servers-and-reverse-proxy-solutions) | Phase 5에서 이미 추천한 강좌. Module 4의 **인증·접근 제어** 부분이 8-D의 앞쪽을 채운다. Nginx의 `limit_req` 로 Rate Limiting을 직접 건다 |
| Hands-on AWS VPC Labs: Essential Lab Exercises | MOOC (Pearson) | [링크](https://www.mooc.org/learn/pearson-hands-on-aws-vpc-labs-essential-lab-exercises-video-course-g209x) | Phase 7에서 추천한 강좌. **"Enable Flow Logs on Your VPC"와 "Examine the Resulting Flow Logs"** 랩이 흐름 로그 공백을 그대로 채운다 |

**WAF는 두 강좌 어디에도 없다.** 클라우드 관리형 WAF(NCP WAF, AWS WAF)는 콘솔 설정이 대부분이라 공식 문서로 대체하고, 아래 과제로 개념을 잡는다.

## 산출물 과제 (강의 없이도 가능)

1. **Rate Limiting** — Phase 5에서 세운 Nginx에 `limit_req_zone` 과 `limit_req` 를 건다. `ab` 나 `hey` 로 부하를 주어 **429가 언제부터 나오는지** 확인하고, `burst` 값을 바꿔 가며 동작 차이를 기록한다
2. **포트 검증** — Phase 7에서 만든 VPC의 서버를 밖에서 `nmap` 으로 스캔해 **열려 있다고 생각한 포트와 실제로 열린 포트가 같은지** 확인한다. 다르면 어느 규칙 때문인지 추적한다
3. **흐름 로그** — 흐름 로그를 켜고 일부러 차단되는 요청을 보낸 뒤, 로그에서 그 요청의 `REJECT` 항목을 찾아 **어느 ACG/NACL 규칙이 막았는지**까지 연결한다
4. **규칙 좁히기 전후 비교** — Phase 7에서 만든 ACG 규칙 전체를 최소 권한으로 다시 쓴다. 좁히기 전과 후의 규칙 수, `0.0.0.0/0` 규칙 수, `nmap` 결과를 표로 비교한다

## 산출물

**"인바운드 규칙 최소화 보고서".**

1. Phase 7 VPC의 **모든** 보안 규칙(ACG 인바운드·아웃바운드, NACL)을 좁히기 전후로 나란히 놓은 표. 각 줄에 출발지·포트·프로토콜·**허용 이유**를 적는다
2. 밖에서 찍은 `nmap` 결과 전후 비교
3. **접속 경로도** — 관리자가 프라이빗 서브넷 서버에 도달하는 경로를 배스천 경유로 그리고, 그 경로에 필요한 규칙만 열려 있음을 보인다
4. Rate Limiting 실험 결과(429가 나오기 시작한 요청률, `burst` 별 차이)
5. 흐름 로그에서 찾은 `REJECT` 항목 하나와, 그것을 막은 규칙까지 이어 붙인 추적 기록

## 다음 단계

→ [09 Phase 9 - 관측과 장애 진단](09%20Phase%209%20-%20%EA%B4%80%EC%B8%A1%EA%B3%BC%20%EC%9E%A5%EC%95%A0%20%EC%A7%84%EB%8B%A8.md)
