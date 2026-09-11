# Explore asynchronous communication between microservices using RabbitMQ

## 개요
- RabbitMQ의 정의, 지원 프로토콜, 기능, 우체국 비유로 본 핵심 용어(producer·queue·consumer), 그리고 메시지 버스 구조(exchange)를 다루는 강의

## 내용

### RabbitMQ란
- **가장 널리 쓰이는 오픈소스 메시지 브로커** 중 하나로, 모든 애플리케이션에 **메시지를 보내고 받는 공통 플랫폼**을 제공한다.
- 여기서 **메시지는 수신될 때까지 안전한 곳에 머문다.**
- 경량이며 온프레미스와 클라우드 양쪽에 배포하기 쉽다.
- **높은 확장성과 고가용성 요구를 충족하도록 분산(distributed)·연합(federated) 구성으로 배포**할 수 있다.
- 이 메시징 시스템은 **AMQP 0.9.1** 을 전체 메시지 전달 과정을 통제하는 표준 집합의 기반으로 사용한다.
- **Erlang/OTP** 로 구현되어 있다. Erlang/OTP는 **안정적이고 신뢰성 있으며 장애 내성이 크고 확장성이 높은 시스템**을 만들기 위해 맞춰진 기술이다.

### 지원 프로토콜
- **AMQP** (Advanced Message Queuing Protocol)
- **STOMP** (Simple Text Oriented Messaging Protocol)
- **MQTT** (Message Queuing Telemetry Transport)
- **HTTP**

### 기능
- **신뢰성 있는 전달(reliable delivery)** — 여러 종류의 장애를 만나도 메시지가 항상 전달되도록 보장한다.
- **유연한 라우팅** — 전형적인 라우팅 로직을 위한 **내장 exchange 타입**을 제공한다.
- **클러스터링** — 여러 RabbitMQ 서버를 클러스터로 묶을 수 있다.
- **연합 모델(Federation Model)** — 느슨하게 연결된 서버들
- **고가용 큐** — 큐를 **미러링(mirroring)** 해 확보한다.
- **다중 프로토콜 지원** — AMQP, HTTP, STOMP
- **다양한 클라이언트** — 거의 모든 프로그래밍 언어용 RabbitMQ 클라이언트가 있다.
- **트레이싱(tracing)** — 메시징 시스템이 이상하게 동작할 때 무슨 일이 일어나는지 찾을 수 있다.
- **관리 UI** — 브로커를 모니터링하고 제어한다.
- **플러그인 시스템** — 코어 브로커 기능을 확장한다.

### 우체국 비유
RabbitMQ는 **우체국의 우편 서비스처럼** 메시지를 받아 전달한다.

| 우편 | RabbitMQ |
|---|---|
| 발신자(sender1·2·3)가 보낸 편지 | **producer** 가 보낸 메시지 |
| 우체통(post box) | 메시지 큐를 유지하는 **RabbitMQ 서버** |
| 편지를 기다리는 수신자(receiver1·2·3) | 메시지를 기다리는 **consumer** |

- **생산(producing)** 은 그냥 **보내는 것**을 뜻한다. 메시지를 보내는 프로그램이 **producer** 다.
- **큐(queue)** 는 RabbitMQ 안에 사는 우체통의 이름이다. 메시지는 RabbitMQ와 애플리케이션을 통해 흐르며, **저장은 큐에만 할 수 있다.** 큐는 **호스트의 메모리와 디스크 한계에 묶이며**, 본질적으로 커다란 **메시지 버퍼**다. **여러 producer가 하나의 큐로 메시지를 보낼 수 있고, 여러 consumer가 하나의 큐에서 데이터를 받으려 할 수 있다.**
- **소비(consuming)** 는 받는 것과 비슷한 뜻이다. **consumer** 는 대개 메시지를 받기 위해 기다리는 프로그램이다.
- 중요한 점: RabbitMQ 용어에서 **producer, consumer, broker가 모두 같은 호스트에 있어야 하는 것은 아니다.** 대부분의 애플리케이션에서는 그렇지 않다. 그리고 **하나의 애플리케이션이 producer이면서 consumer일 수 있다.**

### 메시지 큐 아키텍처
- **producer** 는 메시지를 만들어 브로커(메시지 큐)에 전달하는 클라이언트 애플리케이션이다.
- **consumer** 는 큐에 접속해 브로커로 처리될 메시지를 구독(subscribe)하는 다른 애플리케이션이다.
- **어떤 소프트웨어든 producer, consumer, 또는 둘 다가 될 수 있다.**
- 큐에 놓인 메시지는 **큐에 저장되어 consumer가 가져갈 때까지 남아 있다.**

### 일반 메시지 버스와 exchange
- producer service가 메시지의 생산자다.
- **메시지는 큐로 직접 발행(publish)되지 않는다. producer는 메시지를 exchange로 보낸다.**
- **exchange** 는 **헤더 속성(header attributes), 바인딩(bindings), 라우팅 키(routing keys)** 의 도움을 받아 메시지를 여러 큐로 라우팅하는 **메시지 라우팅 에이전트**다.
- **exchange를 지정하지 않으면 RabbitMQ는 기본 exchange(default exchange)를 사용한다.**
- 기본 exchange의 메시지는 Service1~Service4 같은 서비스로 보내지고, 최종적으로 Consumer Service1~Consumer Service4가 받는다.

## 예시
```text
[우체국 비유]
sender1 ┐
sender2 ├─> [우체통 = RabbitMQ 서버 (큐 유지)] ─> receiver1 / receiver2 / receiver3
sender3 ┘
producer                                              consumer

[메시지 버스 — 큐로 직접 보내지 않는다]
producer service
      │ publish
      ▼
  [exchange]  ← 라우팅 에이전트 (header attributes · bindings · routing keys)
      │  지정 안 하면 default exchange
      ├──> Queue1 ──> Consumer Service1
      ├──> Queue2 ──> Consumer Service2
      ├──> Queue3 ──> Consumer Service3
      └──> Queue4 ──> Consumer Service4
```

```text
큐의 성질
· 메시지를 저장할 수 있는 유일한 곳
· 호스트의 메모리·디스크 한계에 묶인다 (커다란 메시지 버퍼)
· N producer → 1 queue,  1 queue → N consumer
· producer / consumer / broker 는 같은 호스트일 필요가 없다
· 한 애플리케이션이 producer이면서 consumer일 수 있다
```

## 요약
- RabbitMQ는 AMQP 0.9.1 기반의 오픈소스 메시지 브로커로 Erlang/OTP로 구현되어 장애 내성과 확장성이 크다.
- AMQP·STOMP·MQTT·HTTP를 지원하고, 신뢰성 있는 전달, 유연한 라우팅, 클러스터링, 연합, 큐 미러링, 트레이싱, 관리 UI, 플러그인을 제공한다.
- 메시지를 보내는 프로그램이 producer, 저장되는 곳이 queue, 기다려 받는 프로그램이 consumer이며 세 요소가 같은 호스트일 필요는 없다.
- 메시지는 큐로 직접 가지 않고 exchange가 헤더 속성·바인딩·라우팅 키로 큐에 라우팅하며, 지정하지 않으면 기본 exchange가 쓰인다.
