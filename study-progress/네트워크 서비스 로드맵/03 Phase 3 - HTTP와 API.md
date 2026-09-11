# Phase 3 — HTTP와 API

- 목표: 요청 하나를 헤더 단위로 읽고, 브라우저에서만 나는 오류(CORS·쿠키)를 서버 설정으로 되짚는다.
- 분량: 약 10시간
- 마지막 학습일: (미학습)

## 이 단계가 끝나면 할 수 있어야 하는 것

- `curl -v` 출력의 요청·응답 헤더를 줄마다 무슨 뜻인지 설명한다
- 상태 코드를 상황에 맞게 고른다 — 특히 400 / 401 / 403 / 404 / 409 / 422 / 502 / 504를 구분한다
- CORS 오류를 보고 **서버의 어느 헤더가 없어서인지** 짚는다. preflight가 언제 발생하는지 안다
- 쿠키의 `Domain` · `Path` · `Secure` · `HttpOnly` · `SameSite` 가 각각 무엇을 막는지 설명한다
- 세션 방식과 JWT 방식의 트레이드오프를 말하고, 로드밸런서 뒤에서 어느 쪽이 문제가 되는지 안다
- WebSocket 연결이 리버스 프록시를 지날 때 필요한 설정을 안다

> 이 Phase는 **Phase 5(프록시)의 전제**다. 프록시가 무엇을 고쳐 쓰는지 이해하려면 원래 요청이 어떻게 생겼는지를 먼저 알아야 한다.

## 3-A. HTTP와 웹 시스템 구조

메인: Software Design and Architecture, Course 4 (SOA) Module 1

- [ ] [03 4.1.3 - Web Systems Evolution.md](../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%201%20-%20Web%20Technologies/03%204.1.3%20-%20Web%20Systems%20Evolution.md)
- [ ] [04 4.1.4 – Web Systems Architecture.md](../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%201%20-%20Web%20Technologies/04%204.1.4%20%E2%80%93%20Web%20Systems%20Architecture.md) — 클라이언트·서버·중간 계층이 어디에 놓이는지. Phase 5의 프록시 위치가 여기서 나온다
- [ ] [05 4.1.5 – HTML - XML - JSON.md](../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%201%20-%20Web%20Technologies/05%204.1.5%20%E2%80%93%20HTML%20-%20XML%20-%20JSON.md) — 훑고 넘어가도 된다
- [ ] [06 4.1.6 – HTTP.md](../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%201%20-%20Web%20Technologies/06%204.1.6%20%E2%80%93%20HTTP.md) — **이 소절의 핵심.** 메서드·상태 코드·헤더의 구조
- [ ] [08 4.1.8 – Remote Procedure Call (RPC).md](../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%201%20-%20Web%20Technologies/08%204.1.8%20%E2%80%93%20Remote%20Procedure%20Call%20%28RPC%29.md) — HTTP 말고 다른 길이 있다는 것. gRPC의 조상

## 3-B. REST API 설계

메인: IBM DevOps and Software Engineering, `10 Microservices and Serverless` Module 2

- [ ] [01 What is REST.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%202%20-%20Web%20API%20Essentials%20-%20REST%20API%20and%20GraphQL/01%20What%20is%20REST.md)
- [ ] [02 Introduction to API Gateway.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%202%20-%20Web%20API%20Essentials%20-%20REST%20API%20and%20GraphQL/02%20Introduction%20to%20API%20Gateway.md) — **Phase 5의 예고편.** 게이트웨이가 프록시라는 것
- [ ] [03 Creating REST APIs.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%202%20-%20Web%20API%20Essentials%20-%20REST%20API%20and%20GraphQL/03%20Creating%20REST%20APIs.md)
- [ ] [04 Making API Requests using CURL and Postman.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%202%20-%20Web%20API%20Essentials%20-%20REST%20API%20and%20GraphQL/04%20Making%20API%20Requests%20using%20CURL%20and%20Postman.md) — **`curl`이 이 로드맵의 주력 진단 도구다.** 여기서 손에 익힌다
- [ ] [05 Documenting and Testing REST APIs with Swagger.md](../../courses/mooc/DevOps%20and%20SRE/IBM%20DevOps%20and%20Software%20Engineering/10%20Microservices%20and%20Serverless/Module%202%20-%20Web%20API%20Essentials%20-%20REST%20API%20and%20GraphQL/05%20Documenting%20and%20Testing%20REST%20APIs%20with%20Swagger.md)

함께 보기: Software Design and Architecture Course 4 Module 3 (설계 원칙 쪽이 더 깊다)

- [ ] [01 4.3.1 – Introduction to REST.md](../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%203%20-%20REST%20Architecture%20for%20SOA/01%204.3.1%20%E2%80%93%20Introduction%20to%20REST.md)
- [ ] [02 4.3.2 – Designing a REST Service.md](../../courses/mooc/Computer%20Science%20Fundamentals/Software%20Design%20and%20Architecture/Course%204%20-%20Service-Oriented%20Architecture/Module%203%20-%20REST%20Architecture%20for%20SOA/02%204.3.2%20%E2%80%93%20Designing%20a%20REST%20Service.md) — **자원 이름과 메서드를 고르는 기준**

## 3-C. 쿠키 · 세션 · CORS

메인: Microservices with Node JS and React, Section 9

- [ ] [01 Fundamental Authentication Strategies.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%209%20-%20Authentication%20Strategies%20and%20Options/01%20Fundamental%20Authentication%20Strategies.md)
- [ ] [02 Huge Issues with Authentication Strategies.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%209%20-%20Authentication%20Strategies%20and%20Options/02%20Huge%20Issues%20with%20Authentication%20Strategies.md)
- [ ] [05 Reminder on Cookies vs JWT's.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%209%20-%20Authentication%20Strategies%20and%20Options/05%20Reminder%20on%20Cookies%20vs%20JWT%27s.md) — **로드밸런서 뒤에서 세션이 왜 문제가 되는지**의 근거. Phase 5의 스티키 세션과 이어진다
- [ ] [07 Issues with JWT's and Server Side Rendering.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%209%20-%20Authentication%20Strategies%20and%20Options/07%20Issues%20with%20JWT%27s%20and%20Server%20Side%20Rendering.md)
- [ ] [08 Cookies and Encryption.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%209%20-%20Authentication%20Strategies%20and%20Options/08%20Cookies%20and%20Encryption.md)
- [ ] [09 Adding Session Support.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%209%20-%20Authentication%20Strategies%20and%20Options/09%20Adding%20Session%20Support.md)

CORS: Microservices with Node JS and React, Section 2

- [ ] [12 Handling CORS Errors.md](../../courses/udemy/Microservices%20with%20Node%20JS%20and%20React/Section%202%20-%20A%20Mini-Microservices%20App/12%20Handling%20CORS%20Errors.md) — 저장소에서 **CORS를 다루는 유일한 강의**다. 오류를 만나고 고치는 흐름이라 짧지만 실전적

함께 보기: Mastering NestJS Module 10 (세션을 서버 쪽에서 구현하는 관점)

- [ ] [08 Validating User - Sending Cookie.md](../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/08%20Validating%20User%20-%20Sending%20Cookie.md)
- [ ] [09 Reading a Cookie.md](../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/09%20Reading%20a%20Cookie.md)
- [ ] [12 Configuring Express Session.md](../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/12%20Configuring%20Express%20Session.md)
- [ ] [14 Storing Sessions in MySQL.md](../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/14%20Storing%20Sessions%20in%20MySQL.md) — **세션을 외부 저장소로 빼면 스티키 세션이 필요 없어진다.** Phase 5에서 이 선택지가 다시 나온다
- [ ] [17 Implementing JWT Token.md](../../courses/mooc/Web%20and%20APIs/Mastering%20NestJS/Module%2010%20-%20MyStore%20-%20Authentication-Session%20Cookie/17%20Implementing%20JWT%20Token.md)

## 3-D. 공백 — HTTP/2 · HTTP/3 · WebSocket과 프록시

저장소의 HTTP 강의는 **전부 HTTP/1.1 기준**이다. 멀티플렉싱·서버 푸시·QUIC은 어디에도 없다. WebSocket은 파일명·본문 어디에서도 검색되지 않는다.

| 강의 | 플랫폼 | 링크 | 비고 |
|---|---|---|---|
| WebSockets Protocol Explained – Master Web Development | MOOC (Packt) | [링크](https://www.mooc.org/learn/packt-web-sockets-protocol-explained-master-web-development-fkxh5) | 7모듈. Module 1이 WebSocket·TCP·IP, Module 2가 **TCP 핸드셰이크와 4계층 모델**(Phase 1 복습으로도 좋다), Module 5가 **WebSockets over HTTP/2 / HTTP/3**, Module 6이 "HTTP/2가 WebSocket을 대체하는가". CORS와 스케일링도 다룬다 |

**주의**: 이 강좌의 소개에 프록시 통과 설정(`Upgrade` / `Connection` 헤더 전달)은 명시돼 있지 않다. 그 부분은 Phase 5의 Nginx 강좌와 아래 과제에서 채운다.

강의 없이 버티려면:

1. `curl --http2 -v https://www.google.com` 과 `curl --http1.1 -v https://www.google.com` 의 출력을 비교해 프로토콜 협상(ALPN)이 어디서 일어나는지 짚는다
2. 브라우저 개발자도구 Network 탭의 Protocol 열을 켜고, 같은 사이트에서 `h2` / `h3` / `http/1.1` 이 섞여 나오는 리소스를 찾아 왜 갈렸는지 추정한다
3. WebSocket 에코 서버를 하나 띄우고 그 앞에 Nginx를 놓아 **설정 없이는 연결이 실패하는 것**을 확인한 뒤, `Upgrade`·`Connection` 헤더를 넘기도록 고쳐 성공시킨다 (Phase 5 이후에 해도 된다)

## 산출물

**"API 한 벌 설계 문서 + 요청 해부".**

1. 자원 3개짜리 REST API를 설계한다. 각 엔드포인트의 메서드·경로·요청/응답 본문·**상태 코드 목록**을 표로 만들고, 특히 실패 경로의 코드를 왜 그것으로 골랐는지 한 줄씩 붙인다
2. 그중 하나를 실제로 띄우고 `curl -v` 로 호출해 **요청·응답 헤더 전부**를 캡처한 뒤 줄마다 주석을 단다
3. 브라우저에서 다른 오리진으로 호출해 **CORS 오류를 일부러 낸다.** 오류 메시지와 그때 preflight(`OPTIONS`) 요청이 갔는지 여부를 기록하고, 서버에 어떤 헤더를 추가해 해결했는지 적는다
4. 인증을 쿠키 세션으로 붙였을 때와 JWT로 붙였을 때 **로드밸런서 2대 뒤에서 각각 무슨 일이 생기는지**를 예측해 적는다. Phase 5에서 이 예측을 실제로 검증한다

## 다음 단계

→ [04 Phase 4 - 암호화와 신뢰 TLS](04%20Phase%204%20-%20%EC%95%94%ED%98%B8%ED%99%94%EC%99%80%20%EC%8B%A0%EB%A2%B0%20TLS.md)
