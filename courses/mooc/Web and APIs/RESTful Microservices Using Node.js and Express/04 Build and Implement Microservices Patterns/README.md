# Build and Implement Microservices Patterns

**Course URL:** [mooc.org/learn/build-and-implement-microservices-patterns](https://www.mooc.org/learn/build-and-implement-microservices-patterns)

NIIT의 `RESTful Microservices Using Node.js and Express` 전문과정 4번째 강좌. 모놀리식의 한계에서 출발해 마이크로서비스의 정의와 아키텍처를 정리하고, Node.js로 customer·product·order 서비스를 만들어 **동기 통신(axios)** 과 **비동기 통신(RabbitMQ)** 을 모두 구현한다.

- 구성: 2개 모듈 · 영상 30개
- 수집 상태: 영상 **28개** Transcript 정리 완료 (2026-09-06)
- 미확인 2개: 각 모듈의 `Learning Consolidation` — 영어 자막이 제공되지 않아 상태만 기록했다
- 제외: 읽기 자료 4개, 채점 프로그래밍 과제 4개(`Shopping App`·`OTT App`·`Movie Review`·`Logging System`), 채점 평가 2개의 정답 및 제출

## 모듈 구성

- [Module 1 - Building Microservices](Module%201%20-%20Building%20Microservices/) — 모놀리식의 8가지 단점, 마이크로서비스의 정의·장점·과제, 아키텍처와 SOA의 관계, Node.js로 OTT 앱 마이크로서비스 만들기(4부 시연), 연습·도전 과제
- [Module 2 - Establishing Communication between Microservices](Module%202%20-%20Establishing%20Communication%20between%20Microservices/) — 동기·비동기 통신 비교, customer·product·order 3서비스와 axios 조립(4부 시연), RabbitMQ 개념·설치·producer/consumer 구현(2부 시연), fanout exchange, 연습·도전 과제

## 강의 목록

### Module 1 - Building Microservices
1. **Context Setting**
2. [Explain Monolithic Applications](Module%201%20-%20Building%20Microservices/02%20Explain%20Monolithic%20Applications.md)
3. [Define Microservices](Module%201%20-%20Building%20Microservices/03%20Define%20Microservices.md)
4. [Explore the Microservices Architecture](Module%201%20-%20Building%20Microservices/04%20Explore%20the%20Microservices%20Architecture.md)
5. **Develop Microservices using NodeJS**
6. **Watch and Repeat - Developing Microservices Part1**
7. **Watch and Repeat - Developing Microservices Part2**
8. **Watch and Repeat - Developing Microservices Part3**
9. **Practice Brief** — Shopping App (EBuy)
10. **Practice Debrief**
11. **Challenge Brief** — OTT App (Showtime TV)
12. **Challenge Debrief**
13. **Learning Consolidation** — 자막 없음, 상태만 기록

### Module 2 - Establishing Communication between Microservices
1. **Context Setting**
2. [Explore microservices communication](Module%202%20-%20Establishing%20Communication%20between%20Microservices/02%20Explore%20microservices%20communication.md)
3. [Implement synchronous communication between microservices](Module%202%20-%20Establishing%20Communication%20between%20Microservices/03%20Implement%20synchronous%20communication%20between%20microservices.md)
4. **Watch and Repeat - Customer Orders Part1**
5. **Watch and Repeat - Customer Orders Part2**
6. **Watch and Repeat - Customer Orders Part3**
7. **Watch and Repeat - Customer Orders Part4**
8. [Explore asynchronous communication between microservices using RabbitMQ](Module%202%20-%20Establishing%20Communication%20between%20Microservices/08%20Explore%20asynchronous%20communication%20between%20microservices%20using%20RabbitMQ.md)
9. **Configure RabbitMQ server for asynchronous messaging**
10. [Implement messaging using RabbitMQ](Module%202%20-%20Establishing%20Communication%20between%20Microservices/10%20Implement%20messaging%20using%20RabbitMQ.md)
11. **Watch and Repeat - A Simple Messaging System Part1**
12. **Watch and Repeat - A Simple Messaging System Part2**
13. **Practice Brief** — Movie Review
14. **Practice Debrief**
15. **Challenge Brief** — Logging System (fanout exchange)
16. **Challenge Debrief**
17. **Learning Consolidation** — 자막 없음, 상태만 기록

## 핵심 개념 요약

- **모놀리식의 진짜 문제**는 서비스 개수가 아니라 **컴포넌트 간 상호작용**이다. 작은 변경도 전체 종료·재배포·재테스트로 번지고, 기술 스택과 그 특정 버전에까지 묶인다.
- **확장 방식의 차이** — 모놀리식은 전체를 여러 서버에 복제하고, 마이크로서비스는 서비스를 분산해 **부하가 큰 것만 복제**한다.
- **마이크로서비스** = 하나의 작은 비즈니스 역량만 담당하는, 독립 배포·확장 가능한 자율 단위. 기본 무상태이며 의존 라이브러리·저장소·DB를 함께 포함(자기완결)한다. 대가는 **서비스 발견·기능 경계 설정·설정 관리·동적 스케일링** 네 가지 운영 과제다.
- **계층 구조** — 각 서비스는 **router → controller → service → DAO → model** 한 방향으로 내려가는 동일한 틀로 반복 생산된다. 상태 코드는 성공 200, 클라이언트/컨트롤러 오류 400, 중복 409, 예외 500.
- **동기 통신** — HTTP 위 REST 엔드포인트. 호출자가 응답을 기다리므로 **요청의 연쇄**가 생긴다. `axios`·`superagent`의 기본 요청은 HTTP/1.1. 시연에서는 order(5000)가 customer(4000)·product(3000)를 `axios.get`으로 호출해, **`orderId` 하나만 받아 고객명과 상품 상세를 조립**해 반환했다.
- **비동기 통신** — 호출자가 기다리지 않는다. Kafka·RabbitMQ 같은 **메시지 브로커**로 구현한다.
- **RabbitMQ** — AMQP 0.9.1 기반, Erlang/OTP 구현. **메시지는 큐로 직접 가지 않고 항상 exchange를 거친다.** exchange 타입(direct·topic·header·fanout)이 큐에 붙일지 버릴지를 정하고, `sendToQueue`를 직접 쓰면 **기본(이름 없는) exchange** 가 대신 라우팅한다. exchange↔큐 관계는 **바인딩(`bindQueue`)** 이다.
- **producer / consumer 구현** — 양쪽 모두 연결 → 채널 생성 → `assertQueue`로 큐 확보 순서를 따르고 마지막만 `sendToQueue`와 `consume`으로 갈린다. producer는 보내고 `setTimeout`으로 종료, consumer는 계속 대기한다. **`noAck: true`** 를 빠뜨리면 같은 메시지를 반복해서 읽고, **`durable: true`** 는 노드 재시작을 견디게 하며 producer와 consumer가 같은 값이어야 한다.
- **API 게이트웨이** — 마이크로서비스 세계의 진입점. 요청 라우팅, 프로토콜 변환, 데이터 집계, 인증·rate limiter 같은 공유 로직을 담당한다. **서비스 디스커버리**는 서비스가 네트워크에서 서로를 찾는 방법이다.
- **반복 강조된 모범 사례** — HTTP 메서드·상태 코드·헤더의 올바른 사용, 파일을 기능 중심으로 구성, `index.js`에 로직 넣지 않기, 테스트 파일을 구현 옆에 두기.

> 2026-09-06: 이 강좌는 이전에 `01 Integrated Course Notes.md` 통합 노트 하나(1.5KB)만 있었다. MOOC 커리큘럼 기준으로 영상 30개를 확인해 강의별 노트로 대체했다.
