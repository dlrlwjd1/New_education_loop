# The Prompt is the Platform

## 개요
- 원본: https://www.youtube.com/watch?v=DqtmZE6Hl0g
- 채널: AI Engineer
- 발표자: Dominik Tornow, Resonate HQ
- 핵심 주제: 구현이 생성 가능해질수록 제품 가치는 implementation이 아니라 specification과 protocol로 이동한다.

## 내용
### implementation에서 specification으로 가치가 이동한다
발표자는 general-purpose implementation이 점차 on-demand bespoke implementation으로 대체될 수 있다고 본다. 이때 재사용의 단위는 library나 framework가 아니라 specification이 된다.

Resonate의 경우 제품은 특정 서버 구현체가 아니라 durable execution protocol이다. 같은 specification에서 reference server, partner-specific server, target infrastructure에 맞춘 server를 생성할 수 있어야 한다.

### abstract specification과 concrete implementation 사이의 간극
처음에는 agent에게 abstract specification을 주고 Rust/Postgres 기반 Resonate server를 만들게 했지만, agent는 happy path는 통과해도 concurrency, process failure, network failure에서 깨지는 prototype 수준의 결과를 냈다.

이 실패의 원인은 abstract spec에서 concrete implementation으로 바로 점프하기에는 간극이 너무 컸기 때문이다.

### concrete specification의 도입
다음 단계에서는 human이 주도하여 concrete specification을 만들었다. Postgres라면 schema, indices, SQL query, transaction boundary 같은 target-specific decision을 명시했다. 이렇게 쓰인 concrete spec이 있으면 agent는 production implementation을 만들 수 있었다.

하지만 이 방식은 agent가 build는 도와도 design은 주도하지 못한다는 한계를 드러냈다.

### deterministic simulation으로 agent를 design 단계로 올리기
Resonate on NATS에서는 agent에게 production system을 바로 만들게 하지 않고, deterministic simulation environment에서 simulated implementation을 만들게 했다. 이 simulation은 production이 아니라 executable design이다.

agent는 simulation에서 algorithm을 발견하고, failure trace를 보고 수정하며, 검증된 설계를 concrete specification으로 정리한다. 이후 그 spec에서 production implementation을 만든다.

### forbidden fruit
실제 production code는 stale read인지 fresh read인지 알 수 없어야 한다. 그러나 simulation은 agent가 디버깅할 수 있도록 hidden facts를 trace로 기록한다. 이 정보는 algorithm이 의존하면 안 되는 forbidden fruit지만, agent가 왜 실패했는지 이해하는 데는 매우 유용하다.

## 예시
### Resonate on NATS workflow
1. Abstract specification을 준비한다.
2. target platform의 primitive를 확인한다.
3. deterministic simulation implementation을 만든다.
4. simulation에서 stale read, optimistic concurrency, failure를 재현한다.
5. algorithm을 검증한다.
6. concrete specification을 작성한다.
7. production implementation을 생성한다.

### stale read simulation
NATS key-value store가 versioned key를 제공한다고 가정한다. 최신 값이 version 2에 있어도 read가 version 0을 반환할 수 있다. simulation은 이 stale read를 deterministic하게 발생시키고, update 시 optimistic concurrency failure를 재현해 agent가 알고리즘을 고치게 만든다.

## 요약
- agentic engineering에서 verification만큼 specification 설계가 중요하다.
- 구현이 생성 가능해지면 제품의 핵심 자산은 protocol과 specification이 된다.
- abstract spec에서 production code로 바로 이동하면 concurrency와 failure 조건에서 취약하다.
- deterministic simulation은 agent가 design 단계에 참여할 수 있게 만드는 강력한 중간 산출물이다.
