# Building RESTful APIs Using Node.js and Express

**Course URL:** [mooc.org/learn/building-restful-apis-using-nodejs-and-express](https://www.mooc.org/learn/building-restful-apis-using-nodejs-and-express)

NIIT의 `RESTful Microservices Using Node.js and Express` 전문과정 2번째 강좌. **Module 1** 은 프레임워크 없이 Node의 `http` 코어 모듈만으로(Vanilla JS) REST API를 만들어 REST의 5구성 요소를 몸으로 익히고, **Module 2** 는 같은 것을 **Express** 의 라우팅·미들웨어·4계층 구조로 다시 만들어 **Swagger** 로 문서화하고, **Module 3** 은 **JWT** 로 자체 인증을, **OAuth2(GitHub)** 로 외부 제공자 인가를 구현한다.

- 구성: 3개 모듈 · 영상 52개
- 수집 상태: 영상 **49개** Transcript 정리 완료 (2026-09-06)
- 미확인 3개: 각 모듈의 `Learning Consolidation` — 자막이 없거나 `[MUSIC]` 한 줄뿐이라 상태만 기록했다
- 제외: 읽기 자료 4개, 채점 프로그래밍 과제 6개(`Product`·`Movie Application`·`Product Details`·`Movie Application using ExpressJS`·`Authenticate User`·`User Authorization`), 채점 평가 3개의 정답 및 제출

## 모듈 구성

- [Module 1 - Documenting and Building REST APIs using Vanilla Node.js](Module%201%20-%20Documenting%20and%20Building%20REST%20APIs%20using%20Vanilla%20Node.js/) — REST API 정의와 응용, 5구성 요소(자원·동사·헤더·본문·상태 코드), `http.createServer`, 배열 자원으로 GET·POST·DELETE To-do 트래커(3부 시연), Product·Movie(JSON Server) 과제
- [Module 2 - Building REST APIs using ExpressJS](Module%202%20-%20Building%20REST%20APIs%20using%20ExpressJS/) — Express 특성과 `app.listen` 규칙, 라우트·라우트 파라미터·핸들러, 4계층 구조, 미들웨어(logger·error·`express.json`), 사용자 API 4부 시연(GET·GET by id·PUT), Swagger/OpenAPI 문서화 2부 시연, Product Details·Movie(Express+morgan+Swagger) 과제
- [Module 3 - Securing REST APIs using JSON Web Tokens and OAuth](Module%203%20-%20Securing%20REST%20APIs%20using%20JSON%20Web%20Tokens%20and%20OAuth/) — 인증 vs 인가, JWT 구조·클레임·동작, JWT 구현 3부 시연(register→login→verifyToken 미들웨어), OAuth2 구성 요소와 흐름, GitHub OAuth 2부 시연, Authenticate User·User Authorization 과제

## 강의 목록

### Module 1 - Documenting and Building REST APIs using Vanilla Node.js
1. **Context Setting**
2. **Describe REST API**
3. **Explore the applications of RESTful services**
4. [Define the components of RESTful services](Module%201%20-%20Documenting%20and%20Building%20REST%20APIs%20using%20Vanilla%20Node.js/04%20Define%20the%20components%20of%20RESTful%20services.md)
5. **Implement layers in RESTful services using VanillaJS**
6. **Watch and Repeat - Create a HTTP Server**
7. **Implement GET, POST, PUT, and DELETE**
8. **Access the REST resource through a REST Client**
9. **Watch and Repeat - To-do Tracker Part1**
10. **Watch and Repeat - To-do Tracker Part2**
11. **Watch and Repeat - To-do Tracker Part3**
12. **Practice Brief** — Product
13. **Practice Debrief**
14. **Challenge Brief** — Movie Application (JSON Server)
15. **Challenge Debrief**
16. **Learning Consolidation** — 자막 없음, 상태만 기록

### Module 2 - Building REST APIs using ExpressJS
1. **Context Setting**
2. [Explore the Express framework](Module%202%20-%20Building%20REST%20APIs%20using%20ExpressJS/02%20Explore%20the%20Express%20framework.md)
3. [Define routes](Module%202%20-%20Building%20REST%20APIs%20using%20ExpressJS/03%20Define%20routes.md)
4. **Define route parameters and handlers in Express**
5. **Watch and Repeat - Get Request From Server**
6. **Structure Node.js application**
7. [Implement Middleware using Express](Module%202%20-%20Building%20REST%20APIs%20using%20ExpressJS/07%20Implement%20Middleware%20using%20Express.md)
8. **Watch and Repeat - RESTful API for User Details – 1**
9. **Watch and Repeat - RESTful API for User Details – 1 Part2**
10. **Watch and Repeat - RESTful API for User Details – 2**
11. **Watch and Repeat - RESTful API for User Details – 2 Part2**
12. [Document the API using Swagger](Module%202%20-%20Building%20REST%20APIs%20using%20ExpressJS/12%20Document%20the%20API%20using%20Swagger.md)
13. **Watch and Repeat - The User API Documentation – 1**
14. **Watch and Repeat - The User API Documentation – 2**
15. **Practice Brief** — Product Details
16. **Practice Debrief**
17. **Challenge Brief** — Movie Application using ExpressJS
18. **Challenge Debrief**
19. **Learning Consolidation** — 자막 없음, 상태만 기록

### Module 3 - Securing REST APIs using JSON Web Tokens and OAuth
1. **Context Setting**
2. **Describe Authentication and Authorization**
3. **Introduce JSON Web Token(JWT)**
4. [Describe how JWT works](Module%203%20-%20Securing%20REST%20APIs%20using%20JSON%20Web%20Tokens%20and%20OAuth/04%20Describe%20how%20JWT%20works.md)
5. **Implement Authentication using JWT**
6. **Watch and Repeat - Implementing JWT**
7. **Watch and Repeat - Implementing JWT Part2**
8. **Watch and Repeat - Implementing JWT Part3**
9. [Describe OAuth2](Module%203%20-%20Securing%20REST%20APIs%20using%20JSON%20Web%20Tokens%20and%20OAuth/09%20Describe%20OAuth2.md)
10. **Build Secure Node.js Applications using OAuth2**
11. **Watch and Repeat - GitHub Authentication**
12. **Watch and Repeat - GitHub Authentication Part2**
13. **Practice Brief** — Authenticate User
14. **Practice Debrief**
15. **Challenge Brief** — User Authorization
16. **Challenge Debrief**
17. **Learning Consolidation** — 자막 없음, 상태만 기록

## 핵심 개념 요약

- **REST API** — REST 아키텍처 스타일을 따르는 웹 API. 클라이언트와 서버의 역할을 분리하고 응답으로 **자원의 표현 상태**를 돌려주며, 플랫폼에 독립적이고 이기종 기술 간에도 HTTP로 통신한다.
- **5구성 요소** — 자원(URL로 주소, JSON·XML 표현), 요청 동사(GET·POST·PUT·PATCH·DELETE·OPTIONS), 요청 헤더(Accept·Authorization; Content-Type은 표현 헤더), 요청 본문(POST·PUT은 자원 전체), 응답 상태 코드(200·400·401·404·500·502·503).
- **Vanilla JS 서버** — `http.createServer((req, res) => …)`, `writeHead(코드, 헤더)`, `end(본문)`. 요청 본문은 스트림이라 `data`·`end` 이벤트로 모아 **프로미스**로 읽는다. id가 붙는 URL은 **정규식**으로 매칭하고 `split('/')`로 꺼낸다. **`res.end`를 한 블록에서 두 번 부르면 오류**다.
- **Express** — connect 기반 미들웨어 체인, 단일 스레드·비동기. `app.METHOD(PATH, HANDLER)` 라우트, `:param`은 `req.params`, `?k=v`는 `req.query`. `app.listen(port[, host[, backlog]][, callback])`은 host는 port 뒤, backlog는 host 뒤에만.
- **미들웨어** — req·res에 접근하는 함수. 사이클을 끝내지 않으면 **반드시 `next()`**. **logger는 모든 라우트 앞, error(404)는 모든 라우트 뒤**. `express.json()`이 JSON 본문을 파싱한다(body-parser 기반).
- **4계층** — router(전달) → controller(콜백) → service(비즈니스 로직) → DAO(데이터). 라우트 핸들러는 `app.js` 밖 별도 파일에. **`module.exports = router` 누락**이 가장 흔한 오류.
- **Swagger / OpenAPI** — 명세는 YAML/JSON, 구조는 metadata·paths·parameters. Editor(작성)·UI(인터랙티브 문서)·Codegen(40+ 언어). 기존 API에는 `swagger.yaml`을 `yamljs`로 로드해 `swagger-ui-express`의 `serve`·`setup`으로 `/api-docs`에 붙인다.
- **인증 vs 인가** — 인증은 누구인지, 인가는 무엇을 할 수 있는지. HTTP는 무상태여서 서버 기반(세션·쿠키) 인증이 생겼고, **토큰 기반**은 서명된 토큰만 검증하므로 서버가 목록을 들고 있을 필요가 없다(컨퍼런스 출입증 비유).
- **JWT** — RFC 7519. `header.payload.signature`. header는 타입·알고리즘(HS256), payload는 클레임(registered·public·private; 등록 클레임 iss·sub·aud·**exp**·nbf·iat·jti), signature는 header+payload+secret 해시. `jwt.sign(payload, AUTH_SECRET, { expiresIn })`으로 발급, `jwt.verify(token, AUTH_SECRET)`로 검증해 `request.claims`에 담는다. **등록에는 토큰이 없고 로그인에서 반드시 발급**한다.
- **OAuth2** — **인가 프로토콜이며 인증 프로토콜이 아니다.** 클라이언트·자원 서버·인가 서버(GitHub·Google·Facebook) 3요소, 인가 요청 → 토큰 부여 → 토큰으로 자원 요청 → 검증 후 제공 4단계. GitHub OAuth Apps에 Homepage URL과 **정확한 Authorization callback URL** 로 등록해 Client ID·Secret을 받고, `/login`은 client_id를 붙여 리다이렉트, `/callback`은 `req.query.code`를 axios로 access_token과 교환한다.

> 2026-09-06: 이 강좌는 이전에 `01 Integrated Course Notes.md` 통합 노트 하나(1.6KB)만 있었다. MOOC 커리큘럼 기준으로 영상 52개를 확인해 강의별 노트로 대체했다.
